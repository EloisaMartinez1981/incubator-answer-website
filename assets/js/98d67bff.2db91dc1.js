"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[8174],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var i=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),u=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),g=o,m=d["".concat(p,".").concat(g)]||d[g]||c[g]||r;return n?i.createElement(m,a(a({ref:t},s),{},{components:n})):i.createElement(m,a({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<r;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=n(4250),o=(n(9496),n(9613));const r={sidebar_label:"Plugin Configuration Schema",sidebar_position:0},a="Plugin Configuration Schema",l={unversionedId:"development/extending/plugin_config",id:"development/extending/plugin_config",title:"Plugin Configuration Schema",description:"Feature",source:"@site/docs/development/extending/plugin_config.md",sourceDirName:"development/extending",slug:"/development/extending/plugin_config",permalink:"/docs/development/extending/plugin_config",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_label:"Plugin Configuration Schema",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Plugin",permalink:"/docs/development/extending/"},next:{title:"Plugin Translation",permalink:"/docs/development/extending/plugin_translation"}},p={},u=[{value:"Feature",id:"feature",level:2},{value:"Backend &amp; Plugin developer",id:"backend--plugin-developer",level:3},{value:"Frontend",id:"frontend",level:3},{value:"GitHub Connector Plugin Configuration Example",id:"github-connector-plugin-configuration-example",level:3},{value:"Supported Config Types",id:"supported-config-types",level:3},{value:"Supported Config Input Types",id:"supported-config-input-types",level:3}],s={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"plugin-configuration-schema"},"Plugin Configuration Schema"),(0,o.kt)("h2",{id:"feature"},"Feature"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For plugins, we often need some configuration items to record the information necessary for the plugin."),(0,o.kt)("p",{parentName:"blockquote"},"For example, OAuth plugins require secret key configuration."),(0,o.kt)("p",{parentName:"blockquote"},"These configurations need to be described by the developer and used by the user."),(0,o.kt)("p",{parentName:"blockquote"},"So, the following is about how to describe the configuration required for a plugin.")),(0,o.kt)("h3",{id:"backend--plugin-developer"},"Backend & Plugin developer"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For backend or plugin developers, we use the following structure to describe the plugin configuration."),(0,o.kt)("p",{parentName:"admonition"},"As a plugin developer, you only need to build a structure ",(0,o.kt)("inlineCode",{parentName:"p"},"[]ConfigField")," and fill in the configuration contents to describe the required configuration of a plugin.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type ConfigField struct {\n    Name        string               `json:"name"`\n    Type        ConfigType           `json:"type"`\n    Title       Translator           `json:"title"`\n    Description Translator           `json:"description"`\n    Required    bool                 `json:"required"`\n    Value       string               `json:"value"`\n    UIOptions   ConfigFieldUIOptions `json:"ui_options"`\n    Options     []ConfigFieldOption  `json:"options,omitempty"`\n}\n\ntype ConfigFieldUIOptions struct {\n    Placeholder Translator `json:"placeholder,omitempty"`\n    Rows        string     `json:"rows,omitempty"`\n    InputType   InputType  `json:"input_type,omitempty"`\n}\n\ntype ConfigFieldOption struct {\n    Label Translator `json:"label"`\n    Value string     `json:"value"`\n}\n')),(0,o.kt)("h3",{id:"frontend"},"Frontend"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"On the frontend we use JSON to describe and render the plugin's configuration items.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "the key of this configuration that should be unique in the plugin",\n  "type": "the type of this configuration",\n  "title": "the label of this configuration that will be displayed",\n  "description": "configuration description that will be displayed",\n  "options,omitempty": [{"label": "Apple", "value": "apple"}],\n  "required": true,\n  "ui_options": {\n    "input_type": "the type of input",\n    "placeholder": "placeholder",\n    "rows": "the number of rows that will be used for textarea"\n  },\n  "value": "the value of this configuration that will be saved"\n}\n')),(0,o.kt)("h3",{id:"github-connector-plugin-configuration-example"},"GitHub Connector Plugin Configuration Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "name": "client_id",\n        "type": "input",\n        "title": "ClientID",\n        "description": "Client ID of your GitHub application.",\n        "required": true,\n        "ui_options": {\n            "input_type": "text"\n        }\n    },\n    {\n        "name": "client_secret",\n        "type": "input",\n        "title": "ClientSecret",\n        "description": "Client secret of your GitHub application.",\n        "required": true,\n        "ui_options": {\n            "input_type": "text"\n        }\n    }\n]\n')),(0,o.kt)("p",null,"The following is what looks like on the Admin Page.\n",(0,o.kt)("img",{alt:"plugin-github-connector-config",src:n(6452).Z,width:"2648",height:"830"})),(0,o.kt)("h3",{id:"supported-config-types"},"Supported Config Types"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Different types will be rendered as different UI.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"input"),(0,o.kt)("li",{parentName:"ul"},"textarea"),(0,o.kt)("li",{parentName:"ul"},"checkbox"),(0,o.kt)("li",{parentName:"ul"},"radio"),(0,o.kt)("li",{parentName:"ul"},"select"),(0,o.kt)("li",{parentName:"ul"},"upload"),(0,o.kt)("li",{parentName:"ul"},"timezone"),(0,o.kt)("li",{parentName:"ul"},"switch")),(0,o.kt)("h3",{id:"supported-config-input-types"},"Supported Config Input Types"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Different formats are supported for the input type")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"text"),(0,o.kt)("li",{parentName:"ul"},"color"),(0,o.kt)("li",{parentName:"ul"},"date"),(0,o.kt)("li",{parentName:"ul"},"datetime-local"),(0,o.kt)("li",{parentName:"ul"},"email"),(0,o.kt)("li",{parentName:"ul"},"month"),(0,o.kt)("li",{parentName:"ul"},"number"),(0,o.kt)("li",{parentName:"ul"},"password"),(0,o.kt)("li",{parentName:"ul"},"range"),(0,o.kt)("li",{parentName:"ul"},"search"),(0,o.kt)("li",{parentName:"ul"},"tel"),(0,o.kt)("li",{parentName:"ul"},"time"),(0,o.kt)("li",{parentName:"ul"},"url"),(0,o.kt)("li",{parentName:"ul"},"week")))}c.isMDXComponent=!0},6452:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/plugin-github-connector-config-07bc10250eeffbadf333b16993113499.png"}}]);