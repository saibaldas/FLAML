import tiktoken
from typing import List, Union, Dict, Tuple
import logging


logger = logging.getLogger(__name__)

def get_max_token_limit(model="gpt-3.5-turbo-0613"):
    max_token_limit = {
        "gpt-3.5-turbo": 4096,
        "gpt-3.5-turbo-0301": 4096,
        "gpt-3.5-turbo-0613": 4096,
        "gpt-3.5-turbo-16k": 16384,
        "gpt-35-turbo": 4096,
        "gpt-4": 8192,
        "gpt-4-32k": 32768,
        "gpt-4-32k-0314": 32768,  # deprecate in Sep
        "gpt-4-0314": 8192,  # deprecate in Sep
        "gpt-4-0613": 8192,
        "gpt-4-32k-0613": 32768,
    }
    return max_token_limit[model]


def percentile_used(input, model="gpt-3.5-turbo-0613"):
    return count_token(input) / get_max_token_limit(model)

def token_left(input, model="gpt-3.5-turbo-0613"):
    return get_max_token_limit(model) - count_token(input, model=model)


def count_token(input: Union[str, List, Dict], model: str = "gpt-3.5-turbo-0613"):
    if isinstance(input, str):
        return _num_token_from_text(input, model=model)
    elif isinstance(input, list) or isinstance(input, dict):
        return _num_token_from_messages(input, model=model)
    else:
        raise ValueError("input must be str, list or dict")


def _num_token_from_text(text: str, model: str = "gpt-3.5-turbo-0613"):
    try:
        encoding = tiktoken.encoding_for_model(model)
    except KeyError:
        print("Warning: model not found. Using cl100k_base encoding.")
        encoding = tiktoken.get_encoding("cl100k_base")
    return len(encoding.encode(text))


def _num_token_from_messages(messages: Union[List, Dict], model="gpt-3.5-turbo-0613", verbose=False):
    """Return the number of tokens used by a list of messages.

    retrieved from https://github.com/openai/openai-cookbook/blob/main/examples/How_to_count_tokens_with_tiktoken.ipynb/
    """
    if isinstance(messages, dict):
        messages = [messages]

    try:
        encoding = tiktoken.encoding_for_model(model)
    except KeyError:
        print("Warning: model not found. Using cl100k_base encoding.")
        encoding = tiktoken.get_encoding("cl100k_base")
    if model in {
        "gpt-3.5-turbo-0613",
        "gpt-3.5-turbo-16k-0613",
        "gpt-4-0314",
        "gpt-4-32k-0314",
        "gpt-4-0613",
        "gpt-4-32k-0613",
    }:
        tokens_per_message = 3
        tokens_per_name = 1
    elif model == "gpt-3.5-turbo-0301":
        tokens_per_message = 4  # every message follows <|start|>{role/name}\n{content}<|end|>\n
        tokens_per_name = -1  # if there's a name, the role is omitted
    elif "gpt-3.5-turbo" in model:
        if verbose:
            print("Warning: gpt-3.5-turbo may update over time. Returning num tokens assuming gpt-3.5-turbo-0613.")
        return _num_token_from_messages(messages, model="gpt-3.5-turbo-0613")
    elif "gpt-4" in model:
        if verbose:
            print("Warning: gpt-4 may update over time. Returning num tokens assuming gpt-4-0613.")
        return _num_token_from_messages(messages, model="gpt-4-0613")
    else:
        raise NotImplementedError(
            f"""num_tokens_from_messages() is not implemented for model {model}. See https://github.com/openai/openai-python/blob/main/chatml.md for information on how messages are converted to tokens."""
        )
    num_tokens = 0
    for message in messages:
        num_tokens += tokens_per_message
        for key, value in message.items():
            num_tokens += len(encoding.encode(value))
            if key == "name":
                num_tokens += tokens_per_name
    num_tokens += 3  # every reply is primed with <|start|>assistant<|message|>
    return num_tokens