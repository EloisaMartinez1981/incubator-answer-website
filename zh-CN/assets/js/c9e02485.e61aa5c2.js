"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[6817],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),f=s(n),m=a,u=f["".concat(l,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(u,o(o({ref:t},d),{},{components:n})):r.createElement(u,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(4250),a=(n(9496),n(9613));const i={slug:"/configfile"},o="Config-file",c={unversionedId:"getting-started/command-line/configfile",id:"getting-started/command-line/configfile",title:"Config-file",description:"We use yaml configuration file. It will be created automatically after answer init command. The default path is /data/conf/config.yaml",source:"@site/docs/getting-started/command-line/configfile.md",sourceDirName:"getting-started/command-line",slug:"/configfile",permalink:"/zh-CN/docs/configfile",draft:!1,tags:[],version:"current",frontMatter:{slug:"/configfile"},sidebar:"tutorialSidebar",previous:{title:"Command Line",permalink:"/zh-CN/docs/command-line"},next:{title:"Database description",permalink:"/zh-CN/docs/database"}},l={},s=[{value:"config.yaml description",id:"configyaml-description",level:2}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"config-file"},"Config-file"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We use ",(0,a.kt)("inlineCode",{parentName:"p"},"yaml")," configuration file. It will be created automatically after ",(0,a.kt)("inlineCode",{parentName:"p"},"answer init")," command. The default path is ",(0,a.kt)("inlineCode",{parentName:"p"},"/data/conf/config.yaml"))),(0,a.kt)("h2",{id:"configyaml-description"},"config.yaml description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'server:\n  http:\n    addr: 0.0.0.0:80 # Project access port number\ndata:\n  database:\n    driver: "mysql" # Default database driver is mysql\n    connection: root:root@tcp(127.0.0.1:3306)/answer # MySQL database connection address\n  cache:\n    file_path: "/tmp/cache/cache.db" # Cache file storage path\ni18n:\n  bundle_dir: "/data/i18n" # Internationalized file storage directory\nswaggerui:\n  show: true # Whether to display the swaggerapi documentation, address /swagger/index.html\n  protocol: http # swagger protocol header\n  host: 127.0.0.1 # An accessible IP address or domain name\n  address: \':80\'  # accessible port number\nservice_config:\n  secret_key: "answer" # encryption key\n  upload_path: "/data/uploads" # upload directory\n\n')))}p.isMDXComponent=!0}}]);