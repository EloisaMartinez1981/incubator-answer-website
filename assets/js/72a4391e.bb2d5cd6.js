"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[5527],{36181:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>r});var l=i(43010),a=i(90887);const d={slug:"/command-line"},s="Command Line",t={id:"getting-started/command-line",title:"Command Line",description:"Answer binary support some command-line options",source:"@site/docs/getting-started/command-line.md",sourceDirName:"getting-started",slug:"/command-line",permalink:"/docs/command-line",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-answer-website/edit/main/docs/getting-started/command-line.md",tags:[],version:"current",lastUpdatedBy:"Fen",lastUpdatedAt:1701745454,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{slug:"/command-line"},sidebar:"docs",previous:{title:"Upgrade",permalink:"/docs/upgrade"},next:{title:"Config File",permalink:"/docs/configfile"}},c={},r=[{value:"Usage",id:"usage",level:2},{value:"Global options",id:"global-options",level:2},{value:"Commands",id:"commands",level:2},{value:"init",id:"init",level:3},{value:"check",id:"check",level:3},{value:"run",id:"run",level:3},{value:"upgrade",id:"upgrade",level:3},{value:"dump",id:"dump",level:3}];function o(n){const e={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"command-line",children:"Command Line"}),"\n",(0,l.jsx)(e.admonition,{type:"tip",children:(0,l.jsx)(e.p,{children:"Answer binary support some command-line options"})}),"\n",(0,l.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:"answer command [command or global options] [arguments...]"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"To run answer, use:\n        - 'answer init' to initialize the required environment.\n        - 'answer run' to launch the application.\n        - 'answer upgrade' to upgrade the application\n\nUsage:\n  answer [command]\n\nAvailable Commands:\n  check       checking the required environment\n  dump        back up data\n  help        Help about any command\n  init        init answer application\n  run         Run the application\n  upgrade     Upgrade the application\n\nFlags:\n  -h, --help      help for answer\n  -v, --version   version for answer\n\nUse \"answer [command] --help\" for more information about a command.\n"})}),"\n",(0,l.jsx)(e.h2,{id:"global-options",children:"Global options"}),"\n",(0,l.jsx)(e.p,{children:"All global options can be placed at the command level."}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"--help"}),", ",(0,l.jsx)(e.code,{children:"-h"}),": Show help text and exit. Optional."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"--version"}),", ",(0,l.jsx)(e.code,{children:"-v"}),": Show version and exit. Optional."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"--data-path"})," path, ",(0,l.jsx)(e.code,{children:"-C"})," path: data saved path. Optional. (default: /data/)"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"commands",children:"Commands"}),"\n",(0,l.jsx)(e.h3,{id:"init",children:"init"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"init command will initialize the application required environment, contains: default config-file, data directory, initialize database etc."}),"\n"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Examples","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"answer init -C ./data/"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["Notes","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"if answer already initialized, this command will not be executed. For example, if config file is already exist so it will not be created or overwritten."}),"\n",(0,l.jsx)(e.li,{children:"if answer initialized failed, run command can not be executed."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"check",children:"check"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"check command will check the application whether it can run or not. check the config file if exist. check the database if connection can be established etc."}),"\n"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Examples","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"answer check -C ./data/"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"run",children:"run"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"run command will run the application."}),"\n"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Examples","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"answer run -C ./data/"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"upgrade",children:"upgrade"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"upgrade command will upgrade the application."}),"\n"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Options","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"-f"})," version: Upgrade from the specified version. Optional."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["Examples","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"answer upgrade -C ./data/"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"answer upgrade -f v1.1.0 -C ./data/"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"dump",children:"dump"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"dump command will dump the database data to sql file."}),"\n"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Options","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"--path"})," path, ",(0,l.jsx)(e.code,{children:"-p"})," path: dump data path. Optional. (default: ./)"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["Examples","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"answer dump -p /tmp/"})}),"\n"]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},90887:(n,e,i)=>{i.d(e,{Z:()=>t,a:()=>s});var l=i(85170);const a={},d=l.createContext(a);function s(n){const e=l.useContext(d);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),l.createElement(d.Provider,{value:e},n.children)}}}]);