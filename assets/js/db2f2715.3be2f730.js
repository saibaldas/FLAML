"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9828],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9699:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_label:"blendsearch",title:"tune.searcher.blendsearch"},i=void 0,o={unversionedId:"reference/tune/searcher/blendsearch",id:"reference/tune/searcher/blendsearch",isDocsHomePage:!1,title:"tune.searcher.blendsearch",description:"BlendSearch Objects",source:"@site/docs/reference/tune/searcher/blendsearch.md",sourceDirName:"reference/tune/searcher",slug:"/reference/tune/searcher/blendsearch",permalink:"/FLAML/docs/reference/tune/searcher/blendsearch",editUrl:"https://github.com/microsoft/FLAML/edit/main/website/docs/reference/tune/searcher/blendsearch.md",tags:[],version:"current",frontMatter:{sidebar_label:"blendsearch",title:"tune.searcher.blendsearch"},sidebar:"referenceSideBar",previous:{title:"trial_scheduler",permalink:"/FLAML/docs/reference/tune/scheduler/trial_scheduler"},next:{title:"cfo_cat",permalink:"/FLAML/docs/reference/tune/searcher/cfo_cat"}},s=[{value:"BlendSearch Objects",id:"blendsearch-objects",children:[{value:"__init__",id:"__init__",children:[],level:4},{value:"save",id:"save",children:[],level:4},{value:"restore",id:"restore",children:[],level:4},{value:"on_trial_complete",id:"on_trial_complete",children:[],level:4},{value:"on_trial_result",id:"on_trial_result",children:[],level:4},{value:"suggest",id:"suggest",children:[],level:4},{value:"results",id:"results",children:[],level:4}],level:2},{value:"BlendSearchTuner Objects",id:"blendsearchtuner-objects",children:[{value:"receive_trial_result",id:"receive_trial_result",children:[],level:4},{value:"generate_parameters",id:"generate_parameters",children:[],level:4},{value:"update_search_space",id:"update_search_space",children:[],level:4}],level:2},{value:"CFO Objects",id:"cfo-objects",children:[],level:2},{value:"RandomSearch Objects",id:"randomsearch-objects",children:[],level:2}],c={toc:s};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"blendsearch-objects"},"BlendSearch Objects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class BlendSearch(Searcher)\n")),(0,r.kt)("p",null,"class for BlendSearch algorithm."),(0,r.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def __init__(metric: Optional[str] = None, mode: Optional[str] = None, space: Optional[dict] = None, low_cost_partial_config: Optional[dict] = None, cat_hp_cost: Optional[dict] = None, points_to_evaluate: Optional[List[dict]] = None, evaluated_rewards: Optional[List] = None, time_budget_s: Union[int, float] = None, num_samples: Optional[int] = None, resource_attr: Optional[str] = None, min_resource: Optional[float] = None, max_resource: Optional[float] = None, reduction_factor: Optional[float] = None, global_search_alg: Optional[Searcher] = None, config_constraints: Optional[\n            List[Tuple[Callable[[dict], float], str, float]]\n        ] = None, metric_constraints: Optional[List[Tuple[str, str, float]]] = None, seed: Optional[int] = 20, cost_attr: Optional[str] = "auto", experimental: Optional[bool] = False, use_incumbent_result_in_evaluation=False)\n')),(0,r.kt)("p",null,"Constructor."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metric")," - A string of the metric name to optimize for."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mode")," - A string in ","['min', 'max']"," to specify the objective as\nminimization or maximization."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"space")," - A dictionary to specify the search space."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"low_cost_partial_config")," - A dictionary from a subset of\ncontrolled dimensions to the initial low-cost values.\nE.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"{'n_estimators': 4, 'max_leaves': 4}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cat_hp_cost")," - A dictionary from a subset of categorical dimensions\nto the relative cost of each choice.\nE.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"{'tree_method': [1, 1, 2]}"),".\nI.e., the relative cost of the three choices of 'tree_method'\nis 1, 1 and 2 respectively."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"points_to_evaluate")," - Initial parameter suggestions to be run first."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"evaluated_rewards")," ",(0,r.kt)("em",{parentName:"li"},"list")," - If you have previously evaluated the\nparameters passed in as points_to_evaluate you can avoid\nre-running those trials by passing in the reward attributes\nas a list so the optimiser can be told the results without\nneeding to re-compute the trial. Must be the same or shorter length than\npoints_to_evaluate. When provided, ",(0,r.kt)("inlineCode",{parentName:"li"},"mode")," must be specified."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"time_budget_s")," - int or float | Time budget in seconds."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"num_samples")," - int | The number of configs to try."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"resource_attr")," - A string to specify the resource dimension and the best\nperformance is assumed to be at the max_resource."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"min_resource")," - A float of the minimal resource to use for the resource_attr."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_resource")," - A float of the maximal resource to use for the resource_attr."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reduction_factor")," - A float of the reduction factor used for\nincremental pruning."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"global_search_alg")," - A Searcher instance as the global search\ninstance. If omitted, Optuna is used. The following algos have\nknown issues when used as global_search_alg:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"HyperOptSearch raises exception sometimes"),(0,r.kt)("li",{parentName:"ul"},"TuneBOHB has its own scheduler"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config_constraints")," - A list of config constraints to be satisfied.\nE.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"config_constraints = [(mem_size, '<=', 1024**3)]"),".\n",(0,r.kt)("inlineCode",{parentName:"li"},"mem_size")," is a function which produces a float number for the bytes\nneeded for a config.\nIt is used to skip configs which do not fit in memory."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metric_constraints")," - A list of metric constraints to be satisfied.\nE.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"['precision', '>=', 0.9]"),'. The sign can be ">=" or "<=".'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"seed")," - An integer of the random seed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cost_attr")," - Choose from ",'["auto", None]',' to specify the attribute to evaluate the cost of different trials.\nDefault is "auto", which means that we will automatically chose the cost attribute to use (depending\non the nature of the resource budget). When cost_attr is set to None, cost differences between different trials will be omitted\nin our search algorithm.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"experimental")," - A bool of whether to use experimental features.")),(0,r.kt)("h4",{id:"save"},"save"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def save(checkpoint_path: str)\n")),(0,r.kt)("p",null,"save states to a checkpoint path."),(0,r.kt)("h4",{id:"restore"},"restore"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def restore(checkpoint_path: str)\n")),(0,r.kt)("p",null,"restore states from checkpoint."),(0,r.kt)("h4",{id:"on_trial_complete"},"on","_","trial","_","complete"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def on_trial_complete(trial_id: str, result: Optional[Dict] = None, error: bool = False)\n")),(0,r.kt)("p",null,"search thread updater and cleaner."),(0,r.kt)("h4",{id:"on_trial_result"},"on","_","trial","_","result"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def on_trial_result(trial_id: str, result: Dict)\n")),(0,r.kt)("p",null,"receive intermediate result."),(0,r.kt)("h4",{id:"suggest"},"suggest"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def suggest(trial_id: str) -> Optional[Dict]\n")),(0,r.kt)("p",null,"choose thread, suggest a valid config."),(0,r.kt)("h4",{id:"results"},"results"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef results() -> List[Dict]\n")),(0,r.kt)("p",null,"A list of dicts of results for each evaluated configuration."),(0,r.kt)("p",null,'Each dict has "config" and metric names as keys.\nThe returned dict includes the initial results provided via ',(0,r.kt)("inlineCode",{parentName:"p"},"evaluated_reward"),"."),(0,r.kt)("h2",{id:"blendsearchtuner-objects"},"BlendSearchTuner Objects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class BlendSearchTuner(BlendSearch,  NNITuner)\n")),(0,r.kt)("p",null,"Tuner class for NNI."),(0,r.kt)("h4",{id:"receive_trial_result"},"receive","_","trial","_","result"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def receive_trial_result(parameter_id, parameters, value, **kwargs)\n")),(0,r.kt)("p",null,"Receive trial's final result."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parameter_id")," - int."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parameters")," - object created by ",(0,r.kt)("inlineCode",{parentName:"li"},"generate_parameters()"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," - final metrics of the trial, including default metric.")),(0,r.kt)("h4",{id:"generate_parameters"},"generate","_","parameters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def generate_parameters(parameter_id, **kwargs) -> Dict\n")),(0,r.kt)("p",null,"Returns a set of trial (hyper-)parameters, as a serializable object."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parameter_id")," - int.")),(0,r.kt)("h4",{id:"update_search_space"},"update","_","search","_","space"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def update_search_space(search_space)\n")),(0,r.kt)("p",null,"Required by NNI."),(0,r.kt)("p",null,"Tuners are advised to support updating search space at run-time.\nIf a tuner can only set search space once before generating first hyper-parameters,\nit should explicitly document this behaviour."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"search_space")," - JSON object created by experiment owner.")),(0,r.kt)("h2",{id:"cfo-objects"},"CFO Objects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class CFO(BlendSearchTuner)\n")),(0,r.kt)("p",null,"class for CFO algorithm."),(0,r.kt)("h2",{id:"randomsearch-objects"},"RandomSearch Objects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class RandomSearch(CFO)\n")),(0,r.kt)("p",null,"Class for random search."))}p.isMDXComponent=!0}}]);