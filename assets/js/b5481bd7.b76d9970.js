"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[6371],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),f=r,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(4250),r=(n(9496),n(9613));const o={title:"Have a Closer Look at Answer 1.0.9: New Features, and More",authors:["Anne"],category:"Release",featured:"faulse",image:"2023-05-11-cover@4x.png",description:"Take a closer look at how you can manage questions efficiently with Answer v1.0.9."},i=void 0,s={permalink:"/blog/2023/05/11/answer-1.0.9-release",source:"@site/blog/2023-05-11-answer-1.0.9-release/index.md",title:"Have a Closer Look at Answer 1.0.9: New Features, and More",description:"Take a closer look at how you can manage questions efficiently with Answer v1.0.9.",date:"2023-05-11T00:00:00.000Z",formattedDate:"May 11, 2023",tags:[],readingTime:.82,hasTruncateMarker:!1,authors:[{name:"Anne Zhu",title:"Product Marketing Manager",url:"https://github.com/PrimmaAnna",imageURL:"https://avatars.githubusercontent.com/u/131739771?v=4",key:"Anne"}],frontMatter:{title:"Have a Closer Look at Answer 1.0.9: New Features, and More",authors:["Anne"],category:"Release",featured:"faulse",image:"2023-05-11-cover@4x.png",description:"Take a closer look at how you can manage questions efficiently with Answer v1.0.9."},prevItem:{title:"What is Q&A Platform and How to Use it",permalink:"/blog/2023/05/12/what-is-q-and-a-platform-and-how-to-use-it"}},l={authorsImageUrls:[void 0]},u=[{value:"What\u2019s New",id:"whats-new",level:2},{value:"Bug Fixes &amp; Optimization",id:"bug-fixes--optimization",level:2}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The latest version of Answer comes with new tweaks, improvements and optimization. Take a closer look at how you can manage questions efficiently. "),(0,r.kt)("h2",{id:"whats-new"},"What\u2019s New"),(0,r.kt)("p",null,"Pin an important or frequently asked question for your Q&A platform, so that it always stay on the top of your community.\n",(0,r.kt)("img",{alt:"Pin a Question in Answer",src:n(5309).Z,width:"786",height:"674"})),(0,r.kt)("p",null,"Unlist a question to make it invisible for temporary modification, or further review. Admin can list question again in Admin",">","Contents",">","Questions.\n",(0,r.kt)("img",{alt:"Unlist a Question",src:n(3053).Z,width:"800",height:"510"})),(0,r.kt)("p",null,"Pin and Unlist help to tailor a knowledge-based community of your own, while maintain and organize the knowledge system can be easy. "),(0,r.kt)("h2",{id:"bug-fixes--optimization"},"Bug Fixes & Optimization"),(0,r.kt)("p",null,"We\u2019ve also made some tweaks to fix the display issues of tags, comments form,  and stubborn deleted questions. We\u2019ve also removed context ambiguity with optimized translation. "),(0,r.kt)("p",null,"We strongly recommend you to build and manage a Q&A platform ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/answerdev/answer/releases/tag/v1.0.9"},"Answer v1.0.9"),". You are always welcome to contribute your ideas (feature requests, or hunt a but) in ",(0,r.kt)("a",{parentName:"p",href:"https://meta.answer.dev/"},"https://meta.answer.dev/"),". So what will you pin first?"))}p.isMDXComponent=!0},5309:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1.0.9release1-b10a9df59c50ef5d5c9f979408944d6d.gif"},3053:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1.0.9release2-9e2138d07f1e0af6b87a7a014349d08b.gif"}}]);