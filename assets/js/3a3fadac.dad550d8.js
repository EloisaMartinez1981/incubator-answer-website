(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[9504],{1616:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var n=a(9496),c=a(5924);const r=e=>{let{type:t="br",name:a,className:r,size:l,onClick:s,title:o=""}=e;return n.createElement("i",{className:(0,c.Z)(t,`bi-${a}`,r),style:{...l&&{fontSize:l}},onClick:s,onKeyDown:s,title:o})}},9993:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>I});var n=a(9496),c=a(5924),r=a(9467),l=a(1674),s=a(8425),o=a(7613),m=a(6333);function i(){const{metadata:e}=(0,s.C)(),{title:t,description:c,date:r,tags:l,authors:o,frontMatter:i}=e,{keywords:d}=i;return n.createElement(m.Z,{title:t,description:c,keywords:d,ogType:"article",image:a(5646)(`./${i.image}`).default},n.createElement("meta",{property:"article:published_time",content:r}),o.some((e=>e.url))&&n.createElement("meta",{property:"article:author",content:o.map((e=>e.url)).filter(Boolean).join(",")}),l.length>0&&n.createElement("meta",{property:"article:tag",content:l.map((e=>e.label)).join(",")}))}var d=a(2866);function u(e){let{children:t,className:a}=e;const{frontMatter:r,assets:l}=(0,s.C)(),{withBaseUrl:o}=(0,d.C)(),m=l.image??r.image;return n.createElement("article",{className:(0,c.Z)("container py-5 mb-5",a),itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},m&&n.createElement("meta",{itemProp:"image",content:o(m,{absolute:!0})}),n.createElement("div",{className:"row justify-content-center"},t))}var p=a(6706);function g(e){let{children:t,className:a}=e;return n.createElement("div",{id:"__blog-post-container",className:(0,c.Z)("col col--7 markdown",a),itemProp:"articleBody"},n.createElement(p.Z,null,t))}var E=a(1736),b=a(9463),f=a(7609);const v=()=>{const{frontMatter:e,metadata:t}=(0,s.C)();return n.createElement(n.Fragment,null,n.createElement("header",{className:"col col--7"},n.createElement("div",{className:"d-flex align-items-center mb-3"},n.createElement(E.Z,{to:"/blog",className:"me-2"},n.createElement(b.Z,{id:"blogHeader.title"},"Blog")),n.createElement("span",{className:"me-2"},"/"),n.createElement(E.Z,{to:(0,f.generateCategoryPath)(e.category),className:"me-2"},n.createElement(b.Z,{id:e.category},e.category))),n.createElement("h1",null,n.createElement(E.Z,{to:t.permalink,className:"text-body"},t.title)),n.createElement("div",{className:"d-flex align-items-center text-secondary"},t.authors.map((e=>n.createElement("div",{className:"me-3",key:e.name},e.name))),n.createElement("time",{className:"me-3",dateTime:t.date},t.formattedDate),n.createElement("div",null,n.createElement(b.Z,{id:"blogPostItem.readingTime",values:{reading_time:Math.round(t.readingTime)}},"{reading_time} min read")))),n.createElement("div",{className:"col col--9 mt-5 mb-5"},n.createElement("img",{src:a(5646)(`./${e.image}`).default,className:"rounded",alt:"",width:"100%"})))},y=(0,n.memo)(v);var k=a(9200),N=a(3472),h=a(8817),Z=a(4940),x=a(1616);const B="shareBtn_lEr0",C=()=>{const{metadata:e}=(0,s.C)(),{siteConfig:{url:t}}=(0,k.Z)();return n.createElement("div",{className:"col col--7 mt-3"},e.tags.length>0&&n.createElement("div",{className:"mb-3"},n.createElement("span",null,n.createElement(b.Z,{id:"blogPostItem.tags"},"Tags:"))," ",e.tags.map(((t,a)=>n.createElement("span",{key:t.label},n.createElement(E.Z,{to:t.permalink},t.label),a===e.tags.length-1?"":", ")))),n.createElement("div",{className:"d-flex align-items-center text-secondary"},n.createElement("span",null,n.createElement(b.Z,{id:"blogPostItem.share"},"Share to")),n.createElement(N.Z,{className:B,title:e.title,url:t+e.permalink},n.createElement(x.Z,{name:"twitter",size:"16px"})),n.createElement(h.Z,{className:B,title:e.title,url:t+e.permalink},n.createElement(x.Z,{name:"facebook",size:"16px"})),n.createElement(Z.Z,{className:B,title:e.title,url:t+e.permalink,source:t,summary:e.description},n.createElement(x.Z,{name:"linkedin",size:"16px"}))))};var w=a(9806);const L=e=>{let{relatedList:t=[]}=e;return 0===t.length?null:n.createElement("div",{className:"pt-5 mt-5"},n.createElement("h2",{className:"mb-4"},n.createElement(b.Z,{id:"blogPostItem.relatedPosts"},"Related Posts")),n.createElement(w.Z,{data:t}))},P=(0,n.memo)(L);function _(e){let{relatedList:t=[],children:a,className:r}=e;return n.createElement(u,{className:(0,c.Z)(r)},n.createElement(y,null),n.createElement(g,null,a),n.createElement(C,null),n.createElement(P,{relatedList:t}))}function T(e){let{relatedList:t,sidebar:a,children:c}=e;return n.createElement(o.Z,{sidebar:a},n.createElement(_,{relatedList:t},c))}const I=e=>{const t=e.content,{relatedList:a=[]}=e;return n.createElement(s.n,{content:e.content,isBlogPostPage:!0},n.createElement(r.FG,{className:(0,c.Z)(l.k.wrapper.blogPages,l.k.page.blogPostPage)},n.createElement(i,null),n.createElement(T,{relatedList:a},n.createElement(t,null))))}},9806:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var n=a(9496),c=a(8774),r=a(3785),l=a(5924),s=a(9463),o=a(1736),m=a(7609);const i=e=>{let{data:t}=e;const{frontMatter:c,metadata:i}=t;return c?n.createElement(r.Z,{sm:12,md:6,lg:3,className:"mb-4"},n.createElement(o.Z,{to:i.permalink,className:"mb-3 d-block"},n.createElement("img",{className:"rounded",src:a(5646)(`./${c.image.replace("@4x","@2x")}`).default,alt:""})),n.createElement(o.Z,{className:"mb-2 d-block",to:(0,m.generateCategoryPath)(c.category)},n.createElement(s.Z,{id:c.category},c.category)),n.createElement("h5",{className:"mb-2 text-truncate-2"},n.createElement(o.Z,{to:i.permalink,className:"text-body"},i.title)),n.createElement("div",{className:"text-secondary text-truncate-3 mb-3"},i.description),n.createElement("div",{className:"text-secondary fs-14 d-flex align-items-center"},i.authors.map(((e,t)=>n.createElement("div",{className:(0,l.Z)(t===i.authors.length-1?"me-3":"me-2"),key:e.name},e.name))),n.createElement("time",{dateTime:i.date},i.formattedDate))):null},d=e=>{let{data:t}=e;return n.createElement(c.Z,null,t.map((e=>n.createElement(i,{key:e.content.metadata.permalink,data:e.content}))))},u=(0,n.memo)(d)},6333:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var n=a(9496),c=a(8163),r=a(2866);function l(e){let{title:t,ogType:a="website",description:l,keywords:s,image:o,children:m}=e;const{withBaseUrl:i}=(0,r.C)(),d=o?i(o,{absolute:!0}):void 0;return n.createElement(c.Z,null,t&&n.createElement("title",null,t," | Answer"),n.createElement("meta",{property:"og:site_name",content:"Answer"}),n.createElement("meta",{property:"og:type",content:a}),t&&n.createElement("meta",{property:"og:title",content:`${t} | Answer`}),l&&n.createElement("meta",{name:"description",content:l}),l&&n.createElement("meta",{property:"og:description",content:l}),s&&n.createElement("meta",{name:"keywords",content:Array.isArray(s)?s.join(","):s}),d&&n.createElement("meta",{property:"og:image",content:d}),d&&n.createElement("meta",{name:"twitter:image",content:d}),m)}},1307:(e,t,a)=>{"use strict";a.d(t,{Z:()=>I});var n=a(4250),c=a(9496),r=a(7253),l=a(5924),s=a(7502),o=a(1674),m=a(8495);const i="codeBlockContainer_APcc";function d(e){let{as:t,...a}=e;const r=(0,s.p)(),d=(0,m.QC)(r);return c.createElement(t,(0,n.Z)({},a,{style:d,className:(0,l.Z)(a.className,i,o.k.common.codeBlock)}))}const u={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"};function p(e){let{children:t,className:a}=e;return c.createElement(d,{as:"pre",tabIndex:0,className:(0,l.Z)(u.codeBlockStandalone,"thin-scrollbar",a)},c.createElement("code",{className:u.codeBlockLines},t))}var g=a(1219),E=a(2011),b=a(9649);const f="codeLine_iPqp",v="codeLineNumber_F4P7",y="codeLineContent_pOih";function k(e){let{line:t,classNames:a,showLineNumbers:r,getLineProps:s,getTokenProps:o}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const m=s({line:t,className:(0,l.Z)(a,r&&f)}),i=t.map(((e,t)=>c.createElement("span",(0,n.Z)({key:t},o({token:e,key:t})))));return c.createElement("span",m,r?c.createElement(c.Fragment,null,c.createElement("span",{className:v}),c.createElement("span",{className:y},i)):i,c.createElement("br",null))}var N=a(1235),h=a(9463);function Z(e){return c.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),c.createElement("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}))}function x(e){return c.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),c.createElement("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))}const B={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function C(e){let{code:t,className:a}=e;const[n,r]=(0,c.useState)(!1),s=(0,c.useRef)(void 0),o=(0,c.useCallback)((()=>{(0,N.Z)(t),r(!0),s.current=window.setTimeout((()=>{r(!1)}),1e3)}),[t]);return(0,c.useEffect)((()=>()=>window.clearTimeout(s.current)),[]),c.createElement("button",{type:"button","aria-label":n?(0,h.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,h.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,h.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)("clean-btn",a,B.copyButton,n&&B.copyButtonCopied),onClick:o},c.createElement("span",{className:B.copyButtonIcons,"aria-hidden":"true"},c.createElement(Z,{className:B.copyButtonIcon}),c.createElement(x,{className:B.copyButtonSuccessIcon})))}function w(e){return c.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),c.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"}))}const L="wordWrapButtonIcon_iowe",P="wordWrapButtonEnabled_gY8A";function _(e){let{className:t,onClick:a,isEnabled:n}=e;const r=(0,h.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return c.createElement("button",{type:"button",onClick:a,className:(0,l.Z)("clean-btn",t,n&&P),"aria-label":r,title:r},c.createElement(w,{className:L,"aria-hidden":"true"}))}function T(e){let{children:t,className:a="",metastring:r,title:o,showLineNumbers:i,language:p}=e;const{prism:{defaultLanguage:f,magicComments:v}}=(0,g.L)(),y=p??(0,m.Vo)(a)??f,N=(0,s.p)(),h=(0,E.F)(),Z=(0,m.bc)(r)||o,{lineClassNames:x,code:B}=(0,m.nZ)(t,{metastring:r,language:y,magicComments:v}),w=i??(0,m.nt)(r);return c.createElement(d,{as:"div",className:(0,l.Z)(a,y&&!a.includes(`language-${y}`)&&`language-${y}`)},Z&&c.createElement("div",{className:u.codeBlockTitle},Z),c.createElement("div",{className:u.codeBlockContent},c.createElement(b.ZP,(0,n.Z)({},b.lG,{theme:N,code:B,language:y??"text"}),(e=>{let{className:t,tokens:a,getLineProps:n,getTokenProps:r}=e;return c.createElement("pre",{tabIndex:0,ref:h.codeBlockRef,className:(0,l.Z)(t,u.codeBlock,"thin-scrollbar")},c.createElement("code",{className:(0,l.Z)(u.codeBlockLines,w&&u.codeBlockLinesWithNumbering)},a.map(((e,t)=>c.createElement(k,{key:t,line:e,getLineProps:n,getTokenProps:r,classNames:x[t],showLineNumbers:w})))))})),c.createElement("div",{className:u.buttonGroup},(h.isEnabled||h.isCodeScrollable)&&c.createElement(_,{className:u.codeButton,onClick:()=>h.toggle(),isEnabled:h.isEnabled}),c.createElement(C,{className:u.codeButton,code:B}))))}function I(e){let{children:t,...a}=e;const l=(0,r.Z)(),s=function(e){return c.Children.toArray(e).some((e=>(0,c.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),o="string"==typeof s?T:p;return c.createElement(o,(0,n.Z)({key:String(l)},a),s)}},7609:e=>{e.exports={generateCategoryPath:function(e){return`/blog/category/${String(e).trim().toLowerCase().replace(" ","-")}`}}},5748:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/2023-05-11-cover@2x-10d07889a1694746bff69b98639e2860.png"},5255:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/2023-05-11-cover@4x-5646d198e3cf5f4cfbf7400b3a697da5.png"},7043:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/2023-05-12-cover@2x-c08a9381c9ff4a1e9a5d526155c1c613.png"},5307:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/2023-05-12-cover@4x-2fdc6c379746eaa7f045582e04fc2801.png"},2059:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/2023-05-16-cover@2x-b3159344d122d612acc22f5d8a1e71c4.png"},3592:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/2023-05-16-cover@4x-1486644ec7a18623dd7a4cc457f563bc.png"},7111:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/2023-05-23-cover@2x-2d2603c3031a4809169c086c9395508b.png"},4532:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/2023-05-23-cover@4x-2b72f536d69e4880e094b6d668786926.png"},6415:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/2023-05-30-cover@2x-9637f07bf1692aff5fed4812e1bc43bb.png"},6087:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/2023-05-30-cover@4x-c3ddcda375a87cf9237d2704b5f80692.png"},7394:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/2023-06-15-cover@2x-081921ef6f85b6d5a03eafc340654d0a.png"},2254:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/2023-06-15-cover@4x-82b8513d4cd5e6fea19b64df868b5de5.png"},8998:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/2023-06-20-cover@2x-76ddaa4928d114e6333c279821953184.png"},3381:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/2023-06-20-cover@4x-977b7832993c334211866b595f1ccd98.png"},1978:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/cover@2x-14003aa0aa31eb442b2a6170f9b5f493.png"},2151:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/cover@4x-93ec81984bd86f018902297566a6d4b7.png"},9294:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/head-bg-4647f705b2e7b0a8a44846c785c33661.png"},5646:(e,t,a)=>{var n={"./2023-05-11-cover@2x.png":5748,"./2023-05-11-cover@4x.png":5255,"./2023-05-12-cover@2x.png":7043,"./2023-05-12-cover@4x.png":5307,"./2023-05-16-cover@2x.png":2059,"./2023-05-16-cover@4x.png":3592,"./2023-05-23-cover@2x.png":7111,"./2023-05-23-cover@4x.png":4532,"./2023-05-30-cover@2x.png":6415,"./2023-05-30-cover@4x.png":6087,"./2023-06-15-cover@2x.png":7394,"./2023-06-15-cover@4x.png":2254,"./2023-06-20-cover@2x.png":8998,"./2023-06-20-cover@4x.png":3381,"./cover@2x.png":1978,"./cover@4x.png":2151,"./head-bg.png":9294};function c(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=r,e.exports=c,c.id=5646}}]);