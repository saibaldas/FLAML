from .agent import Agent
from flaml.autogen.code_utils import extract_code, execute_code
from collections import defaultdict


class HumanProxyAgent(Agent):
    """(Experimental) A proxy agent for human, that can execute code and provide feedback to the other agents."""

    DEFAULT_SYSTEM_MESSAGE = """You are human agent. You can execute_code or give feedback to the sender.
    """
    MAX_CONSECUTIVE_AUTO_REPLY = 100  # maximum number of consecutive auto replies (subject to future change)

    def __init__(
        self,
        name,
        system_message="",
        work_dir=None,
        human_input_mode="ALWAYS",
        max_consecutive_auto_reply=None,
        is_termination_msg=None,
        **config,
    ):
        """
        Args:
            name (str): name of the agent
            system_message (str): system message to be sent to the agent
            work_dir (str): working directory for the agent to execute code
            human_input_mode (bool): whether to ask for human inputs every time a message is received.
                Possible values are "ALWAYS", "TERMINATE", "NEVER".
                When "ALWAYS", the agent will ask for human input every time a message is received.
                When "TERMINATE", the agent will ask for human input only when a termination message is received.
                When "NEVER", the agent will never ask for human input.
            max_consecutive_auto_reply (int): the maximum number of consecutive auto replies.
                default: None (no limit provided, class attribute MAX_CONSECUTIVE_AUTO_REPLY will be used as the limit in this case).
                The limit only plays a role when human_input_mode is not "ALWAYS".
            is_termination_msg (function): a function that takes a message and returns a boolean value.
                This function is used to determine if a received message is a termination message.
            config (dict): other configurations.

            The conversation stops when the human input is "exit", or no human input is provided and a termination message is received,
            or the number of consecutive auto reply is larger than the provided max_consecutive_auto_reply (when human_input_mode is not "ALWAYS").
        """
        super().__init__(name, system_message)
        self._work_dir = work_dir
        self._human_input_mode = human_input_mode
        self._is_termination_msg = (
            is_termination_msg if is_termination_msg is not None else (lambda x: x == "TERMINATE")
        )
        self._config = config
        self._max_consecutive_auto_reply = (
            max_consecutive_auto_reply if max_consecutive_auto_reply is not None else self.MAX_CONSECUTIVE_AUTO_REPLY
        )
        self._consecutive_auto_reply_counter = defaultdict(int)

    def _execute_code(self, code, lang):
        """Execute the code and return the result."""
        if lang == "bash":
            assert code.startswith("python "), code
            file_name = code[len("python ") :]
            exitcode, logs = execute_code(filename=file_name, work_dir=self._work_dir)
        elif lang == "python":
            if code.startswith("# filename: "):
                filename = code[11 : code.find("\n")].strip()
            else:
                filename = None
            exitcode, logs = execute_code(code, work_dir=self._work_dir, filename=filename)
        else:
            # TODO: could this happen?
            exitcode, logs = 1, "unknown language"
            # raise NotImplementedError
        return exitcode, logs

    def receive(self, message, sender):
        """Receive a message from the sender agent.
        Every time a message is received, the human agent will give feedback.

        The conversation stops when the human input is "exit", or no human input is provided and a termination message is received,
        or the number of consecutive auto reply is larger than the provided max_consecutive_auto_reply (when human_input_mode is not "ALWAYS").
        """
        super().receive(message, sender)
        # default reply is empty (i.e., no reply, in this case we will try to generate auto reply)
        reply = ""
        if self._human_input_mode == "ALWAYS":
            # TODO: if skip and use auto reply, should we also display the auto reply?
            code, lang = extract_code(message)
            msg2display = (
                f"Code block detected: \n{code}\nUse auto-reply to execute the code and return the result."
                if lang != "unknown"
                else ""
            )
            reply = input(
                "*" * 40
                + f"\n{msg2display} \nProvide feedback to the sender. Press enter to skip and use auto-reply, or type 'exit' to end the conversation: "
            )
        elif self._human_input_mode == "TERMINATE":
            if self._consecutive_auto_reply_counter[
                sender.name
            ] >= self._max_consecutive_auto_reply or self._is_termination_msg(message):
                reply = input(
                    "Please give feedback to the sender. (Press enter or type 'exit' to stop the conversation): "
                )
                reply = reply if reply else "exit"
        elif (
            self._human_input_mode == "NEVER"
            and self._consecutive_auto_reply_counter[sender.name] >= self._max_consecutive_auto_reply
        ):
            reply = "exit"

        if reply == "exit":
            return
        elif reply:
            # reset the consecutive_auto_reply_counter
            self._consecutive_auto_reply_counter[sender.name] = 0
            self._send(reply, sender)
            return

        self._consecutive_auto_reply_counter[sender.name] += 1
        if self._human_input_mode != "ALWAYS":
            code, lang = extract_code(message)
        if lang == "unknown":
            # no code block is found, lang should be "unknown"
            self._send(reply, sender)
        else:
            # try to execute the code
            exitcode, logs = self._execute_code(code, lang)
            exitcode2str = "execution succeeded" if exitcode == 0 else "execution failed"
            self._send(f"exitcode: {exitcode} ({exitcode2str})\nCode output: {logs.decode('utf-8')}", sender)
