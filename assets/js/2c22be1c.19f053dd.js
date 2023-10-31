/*! For license information please see 2c22be1c.19f053dd.js.LICENSE.txt */
(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[9870],{7370:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var s=a(9496),r=a(5924),c=a(3887);const n="header_briT",l={blog:{title:s.createElement(c.Z,{id:"blogHeader.title"},"Blog"),slogan:s.createElement(c.Z,{id:"blogHeader.slogan"},"Learn everything about Answer and leverage your Q&A community to the next level.")},contact:{title:s.createElement(c.Z,{id:"contact.title"},"Contact us"),slogan:s.createElement(c.Z,{id:"contact.slogan"},"We always get an answer to your question.")}},o=e=>{let{type:t}=e;return s.createElement("div",{className:(0,r.Z)("py-5",n)},s.createElement("div",{className:"container"},s.createElement("h1",null,l[t].title),s.createElement("div",{className:"fs-20"},l[t].slogan)))},i=(0,s.memo)(o)},9201:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var s=a(9496),r=a(5924),c=a(3887),n=a(4475),l=a(3442);const o=e=>{let{data:t,className:a="",activeLabel:o=""}=e;const{pathname:i}=(0,l.TH)();return t&&0!==t.length?s.createElement("ul",{className:(0,r.Z)("nav nav-pills",a)},s.createElement("li",{className:"nav-item mb-4"},s.createElement(n.Z,{to:"/blog"===i?"###":"/blog",className:(0,r.Z)("nav-link","All"===o?"active":"")},s.createElement(c.Z,{id:"blogCategoriesNav.all"},"All"))),t.map((e=>s.createElement("li",{className:"nav-item mb-4",key:e.label},s.createElement(n.Z,{to:e.permalink,className:(0,r.Z)("nav-link",o===e.label?"active":"")},s.createElement(c.Z,{id:e.label},e.label)))))):null},i=(0,s.memo)(o)},2120:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Home:()=>N,default:()=>Z});var s=a(9496),r=a(5299),c=a(5924),n=a(8800),l=a(6134),o=a(7370),i=a(3963),d=a(3270),m=a(4475),p=a(3887),g=a(7208);const u="imgWrap__ANX",f=e=>{let{data:t=[]}=e;return!t.length||t.length<2?null:s.createElement(i.Z,{className:"py-5"},s.createElement(d.Z,{sm:12,lg:6,className:"mb-4 mb-md-0"},s.createElement("div",null,s.createElement(m.Z,{to:t[0].permalink,className:"mb-3 d-block"},s.createElement("img",{className:"rounded",src:a(5646)(`./${t[0].image.replace("@4x","@2x")}`).default,alt:""})),s.createElement("div",{className:"mb-2"},s.createElement(m.Z,{to:(0,g.generateCategoryPath)(t[0].category)},s.createElement(p.Z,{id:t[0].category},t[0].category))),s.createElement("h2",{className:"mb-0 text-truncate-2"},s.createElement(m.Z,{to:t[0].permalink,className:"text-body"},t[0].title)))),s.createElement(d.Z,{sm:12,lg:6},t.map(((e,t)=>0===t?null:s.createElement("div",{className:(0,c.Z)("d-flex align-items-center w-100",4===t?"":"mb-4"),key:e.permalink},s.createElement(m.Z,{to:e.permalink,className:(0,c.Z)("me-3",u)},s.createElement("img",{className:"rounded",src:a(5646)(`./${e.image.replace("@4x","@2x")}`).default,alt:""})),s.createElement("div",null,s.createElement(m.Z,{className:"mb-2 d-block",to:(0,g.generateCategoryPath)(e.category)},s.createElement(p.Z,{id:e.category},e.category)),s.createElement("h5",{className:"mb-0 text-truncate-2"},s.createElement(m.Z,{to:e.permalink,className:"text-body"},e.title))))))))},v=(0,s.memo)(f);var b=a(9201),x=a(398),E=a(6358),y=a(7313);function N(e){let{featuredPosts:t,categoyList:i,metadata:d,blogList:m}=e;return s.createElement(n.FG,{className:(0,c.Z)(l.k.wrapper.blogPages,l.k.page.blogListPage)},s.createElement(y.Z,{title:"Blog",keywords:d.blogDescription,ogType:"website",image:a(1553).default}),s.createElement(r.Z,null,s.createElement(o.Z,{type:"blog"}),s.createElement("div",{className:"container pb-5"},s.createElement(v,{data:t}),s.createElement(b.Z,{data:i,className:(0,c.Z)(t.length?"":"mt-5"),activeLabel:"All"}),s.createElement(x.Z,{data:m}),s.createElement(E.Z,{data:d}))))}const Z=N},398:(e,t,a)=>{"use strict";a.d(t,{Z:()=>p});var s=a(9496),r=a(3963),c=a(3270),n=a(5924),l=a(3887),o=a(4475),i=a(7208);const d=e=>{let{data:t}=e;const{frontMatter:r,metadata:d}=t;return r?s.createElement(c.Z,{sm:12,md:6,lg:3,className:"mb-4"},s.createElement(o.Z,{to:d.permalink,className:"mb-3 d-block"},s.createElement("img",{className:"rounded",src:a(5646)(`./${r.image.replace("@4x","@2x")}`).default,alt:""})),s.createElement(o.Z,{className:"mb-2 d-block",to:(0,i.generateCategoryPath)(r.category)},s.createElement(l.Z,{id:r.category},r.category)),s.createElement("h5",{className:"mb-2 text-truncate-2"},s.createElement(o.Z,{to:d.permalink,className:"text-body"},d.title)),s.createElement("div",{className:"text-secondary text-truncate-3 mb-3"},d.description),s.createElement("div",{className:"text-secondary fs-14 d-flex align-items-center"},d.authors.map(((e,t)=>s.createElement("div",{className:(0,n.Z)(t===d.authors.length-1?"me-3":"me-2"),key:e.name},e.name))),s.createElement("time",{dateTime:d.date},d.formattedDate))):null},m=e=>{let{data:t}=e;return s.createElement(r.Z,null,t.map((e=>s.createElement(d,{key:e.content.metadata.permalink,data:e.content}))))},p=(0,s.memo)(m)},6358:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var s=a(9496),r=a(5924),c=a(4475),n=a(3887);const l=e=>{let{data:t}=e;return null!=t&&t.previousPage||null!=t&&t.nextPage?s.createElement("nav",{className:"d-flex align-items-center justify-content-center mt-5"},s.createElement("ul",{className:"pagination"},s.createElement("li",{className:(0,r.Z)("page-item",null!=t&&t.previousPage?"":"disabled")},s.createElement(c.Z,{to:(null==t?void 0:t.previousPage)||"###",className:"page-link"},s.createElement(n.Z,{id:"theme.docs.paginator.previous"},"Previous"))),s.createElement("li",{className:(0,r.Z)("page-item",null!=t&&t.nextPage?"":"disabled")},s.createElement(c.Z,{to:(null==t?void 0:t.nextPage)||"###",className:"page-link"},s.createElement(n.Z,{id:"theme.docs.paginator.next"},"Next"))))):null},o=(0,s.memo)(l)},7313:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var s=a(9496),r=a(7119),c=a(9137);function n(e){let{title:t,ogType:a="website",description:n,keywords:l,image:o,children:i}=e;const{withBaseUrl:d}=(0,c.C)(),m=o?d(o,{absolute:!0}):void 0;return s.createElement(r.Z,null,t&&s.createElement("title",null,t," | Answer"),s.createElement("meta",{property:"og:site_name",content:"Answer"}),s.createElement("meta",{property:"og:type",content:a}),t&&s.createElement("meta",{property:"og:title",content:`${t} | Answer`}),n&&s.createElement("meta",{name:"description",content:n}),n&&s.createElement("meta",{property:"og:description",content:n}),l&&s.createElement("meta",{name:"keywords",content:Array.isArray(l)?l.join(","):l}),m&&s.createElement("meta",{property:"og:image",content:m}),m&&s.createElement("meta",{name:"twitter:image",content:m}),i)}},7208:e=>{e.exports={generateCategoryPath:function(e){return`/blog/category/${String(e).trim().toLowerCase().replace(" ","-")}`}}},4875:(e,t)=>{var a;!function(){"use strict";var s={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var c=typeof a;if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)){if(a.length){var n=r.apply(null,a);n&&e.push(n)}}else if("object"===c){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var l in a)s.call(a,l)&&a[l]&&e.push(l)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},3270:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var s=a(4875),r=a.n(s),c=a(9496),n=a(3519),l=a(4637);const o=c.forwardRef(((e,t)=>{const[{className:a,...s},{as:c="div",bsPrefix:o,spans:i}]=function({as:e,bsPrefix:t,className:a,...s}){t=(0,n.vE)(t,"col");const c=(0,n.pi)(),l=(0,n.zG)(),o=[],i=[];return c.forEach((e=>{const a=s[e];let r,c,n;delete s[e],"object"==typeof a&&null!=a?({span:r,offset:c,order:n}=a):r=a;const d=e!==l?`-${e}`:"";r&&o.push(!0===r?`${t}${d}`:`${t}${d}-${r}`),null!=n&&i.push(`order${d}-${n}`),null!=c&&i.push(`offset${d}-${c}`)})),[{...s,className:r()(a,...o,...i)},{as:e,bsPrefix:t,spans:o}]}(e);return(0,l.jsx)(c,{...s,ref:t,className:r()(a,!i.length&&o)})}));o.displayName="Col";const i=o},3963:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var s=a(4875),r=a.n(s),c=a(9496),n=a(3519),l=a(4637);const o=c.forwardRef((({bsPrefix:e,className:t,as:a="div",...s},c)=>{const o=(0,n.vE)(e,"row"),i=(0,n.pi)(),d=(0,n.zG)(),m=`${o}-cols`,p=[];return i.forEach((e=>{const t=s[e];let a;delete s[e],null!=t&&"object"==typeof t?({cols:a}=t):a=t;const r=e!==d?`-${e}`:"";null!=a&&p.push(`${m}${r}-${a}`)})),(0,l.jsx)(a,{ref:c,...s,className:r()(t,o,...p)})}));o.displayName="Row";const i=o},3519:(e,t,a)=>{"use strict";a.d(t,{pi:()=>i,vE:()=>o,zG:()=>d});var s=a(9496);a(4637);const r=["xxl","xl","lg","md","sm","xs"],c=s.createContext({prefixes:{},breakpoints:r,minBreakpoint:"xs"}),{Consumer:n,Provider:l}=c;function o(e,t){const{prefixes:a}=(0,s.useContext)(c);return e||a[t]||t}function i(){const{breakpoints:e}=(0,s.useContext)(c);return e}function d(){const{minBreakpoint:e}=(0,s.useContext)(c);return e}},2945:(e,t,a)=>{"use strict";a(2767);var s=a(9496),r=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;r=c("react.element"),c("react.fragment")}var n=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,o={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,a){var s,c={},i=null,d=null;for(s in void 0!==a&&(i=""+a),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,s)&&!o.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===c[s]&&(c[s]=t[s]);return{$$typeof:r,type:e,key:i,ref:d,props:c,_owner:n.current}}t.jsx=i},4637:(e,t,a)=>{"use strict";e.exports=a(2945)},2037:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-05-11-cover@2x-10d07889a1694746bff69b98639e2860.png"},8847:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-05-11-cover@4x-5646d198e3cf5f4cfbf7400b3a697da5.png"},2820:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-05-12-cover@2x-c08a9381c9ff4a1e9a5d526155c1c613.png"},4077:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-05-12-cover@4x-2fdc6c379746eaa7f045582e04fc2801.png"},7381:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-05-16-cover@2x-b3159344d122d612acc22f5d8a1e71c4.png"},9711:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-05-16-cover@4x-1486644ec7a18623dd7a4cc457f563bc.png"},2513:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-05-23-cover@2x-2d2603c3031a4809169c086c9395508b.png"},9260:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-05-23-cover@4x-2b72f536d69e4880e094b6d668786926.png"},9974:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-05-30-cover@2x-9637f07bf1692aff5fed4812e1bc43bb.png"},1756:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-05-30-cover@4x-c3ddcda375a87cf9237d2704b5f80692.png"},1845:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-06-15-cover@2x-081921ef6f85b6d5a03eafc340654d0a.png"},9519:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-06-15-cover@4x-82b8513d4cd5e6fea19b64df868b5de5.png"},9791:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-06-20-cover@2x-76ddaa4928d114e6333c279821953184.png"},3324:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-06-20-cover@4x-977b7832993c334211866b595f1ccd98.png"},6583:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-06-29-cover@2x-7a02dfc6ae59867d0bb4dec6c3e743d6.png"},5085:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-06-29-cover@4x-fc60d3a6aa73a1100a46a688108d8b04.png"},501:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-07-05-cover@2x-288a1426f5c2d6698f67c5ecf4782149.png"},7002:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-07-05-cover@4x-14e7206e69deb4a88610be0d5409ca21.png"},5540:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-07-11-cover@2x-e63c7827ebaa93ff5fdd49b2a7e3e6d2.png"},4961:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-07-11-cover@4x-2061572b4e39ad6594bcccdc1ebc06ad.png"},4273:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-07-19-cover@2x-1a7de890921be9e96facfe89dff0fd89.png"},297:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-07-19-cover@4x-fb5729f0eb278096e3485b69538e36e0.png"},8115:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-07-22-cover@2x-d27bafdc8d18987a4a4a078feb37d6a6.png"},3243:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-07-22-cover@4x-adfc331ff0caa372bd48d7c798155678.png"},54:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-08-09-cover@2x-1b92d449fe41610a95bd70d2c0ed9eb9.png"},8886:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-08-09-cover@4x-c0f067e27e97dde9487d939dad9ed318.png"},6445:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-09-14-cover@2x-0b99143005bfd9baec1a0cb034c05f6f.png"},1417:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-09-14-cover@4x-f7c816ae5a5675f3a6bc1ed5002b648d.png"},9406:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-09-27-cover@2x-5f0e96c24dcc72b9a58a8438f9257f9c.png"},2094:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-09-27-cover@4x-c3fac897bf9b1c64e9a85fc23d906911.png"},2639:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-10-24-cover@2x-52267782f64124859b3fb35c38d8a6fb.png"},3060:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-10-24-cover@4x-6fde32db13af2695601726092f1c2bc6.png"},4257:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-10-31-cover@2x-d00c3f16ce33f4dcc550b0e272f31cb9.png"},9500:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/2023-10-31-cover@4x-cba9e39c36eae60543a75eb791a83422.png"},9405:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/cover@2x-14003aa0aa31eb442b2a6170f9b5f493.png"},1553:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/cover@4x-93ec81984bd86f018902297566a6d4b7.png"},7335:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/head-bg-4647f705b2e7b0a8a44846c785c33661.png"},5646:(e,t,a)=>{var s={"./2023-05-11-cover@2x.png":2037,"./2023-05-11-cover@4x.png":8847,"./2023-05-12-cover@2x.png":2820,"./2023-05-12-cover@4x.png":4077,"./2023-05-16-cover@2x.png":7381,"./2023-05-16-cover@4x.png":9711,"./2023-05-23-cover@2x.png":2513,"./2023-05-23-cover@4x.png":9260,"./2023-05-30-cover@2x.png":9974,"./2023-05-30-cover@4x.png":1756,"./2023-06-15-cover@2x.png":1845,"./2023-06-15-cover@4x.png":9519,"./2023-06-20-cover@2x.png":9791,"./2023-06-20-cover@4x.png":3324,"./2023-06-29-cover@2x.png":6583,"./2023-06-29-cover@4x.png":5085,"./2023-07-05-cover@2x.png":501,"./2023-07-05-cover@4x.png":7002,"./2023-07-11-cover@2x.png":5540,"./2023-07-11-cover@4x.png":4961,"./2023-07-19-cover@2x.png":4273,"./2023-07-19-cover@4x.png":297,"./2023-07-22-cover@2x.png":8115,"./2023-07-22-cover@4x.png":3243,"./2023-08-09-cover@2x.png":54,"./2023-08-09-cover@4x.png":8886,"./2023-09-14-cover@2x.png":6445,"./2023-09-14-cover@4x.png":1417,"./2023-09-27-cover@2x.png":9406,"./2023-09-27-cover@4x.png":2094,"./2023-10-24-cover@2x.png":2639,"./2023-10-24-cover@4x.png":3060,"./2023-10-31-cover@2x.png":4257,"./2023-10-31-cover@4x.png":9500,"./cover@2x.png":9405,"./cover@4x.png":1553,"./head-bg.png":7335};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=c,e.exports=r,r.id=5646}}]);