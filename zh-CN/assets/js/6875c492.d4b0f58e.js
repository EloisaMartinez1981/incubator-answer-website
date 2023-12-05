"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[8610],{23675:(e,n,t)=>{t.d(n,{Z:()=>c});t(85170);var o=t(36426),s=t(29707),a=t(43010);function c(e){const{metadata:n}=e,{previousPage:t,nextPage:c}=n;return(0,a.jsxs)("nav",{className:"pagination-nav","aria-label":(0,o.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[t&&(0,a.jsx)(s.Z,{permalink:t,title:(0,a.jsx)(o.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),c&&(0,a.jsx)(s.Z,{permalink:c,title:(0,a.jsx)(o.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},23359:(e,n,t)=>{t.d(n,{Z:()=>c});t(85170);var o=t(44129),s=t(50698),a=t(43010);function c(e){let{items:n,component:t=s.Z}=e;return(0,a.jsx)(a.Fragment,{children:n.map((e=>{let{content:n}=e;return(0,a.jsx)(o.n,{content:n,children:(0,a.jsx)(t,{children:(0,a.jsx)(n,{})})},n.metadata.permalink)}))})}},86250:(e,n,t)=>{t.r(n),t.d(n,{default:()=>k});t(85170);var o=t(45924),s=t(36426),a=t(20031),c=t(2049),l=t(71771),i=t(10205),r=t(18431),d=t(23675),u=t(42118),p=t(23359),g=t(84405),h=t(70659),m=t(43010);function x(e){const n=function(){const{selectMessage:e}=(0,a.c)();return n=>e(n,(0,s.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:n}))}();return(0,s.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:n(e.count),tagName:e.label})}function b(e){let{tag:n}=e;const t=x(n);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(c.d,{title:t}),(0,m.jsx)(u.Z,{tag:"blog_tags_posts"})]})}function j(e){let{tag:n,items:t,sidebar:o,listMetadata:a}=e;const c=x(n);return(0,m.jsxs)(r.Z,{sidebar:o,children:[n.unlisted&&(0,m.jsx)(g.Z,{}),(0,m.jsxs)("header",{className:"margin-bottom--xl",children:[(0,m.jsx)(h.Z,{as:"h1",children:c}),(0,m.jsx)(i.Z,{href:n.allTagsPath,children:(0,m.jsx)(s.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,m.jsx)(p.Z,{items:t}),(0,m.jsx)(d.Z,{metadata:a})]})}function k(e){return(0,m.jsxs)(c.FG,{className:(0,o.Z)(l.k.wrapper.blogPages,l.k.page.blogTagPostListPage),children:[(0,m.jsx)(b,{...e}),(0,m.jsx)(j,{...e})]})}},84405:(e,n,t)=>{t.d(n,{Z:()=>g});t(85170);var o=t(45924),s=t(36426),a=t(79418),c=t(43010);function l(){return(0,c.jsx)(s.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function i(){return(0,c.jsx)(s.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function r(){return(0,c.jsx)(a.Z,{children:(0,c.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(71771),u=t(97146);function p(e){let{className:n}=e;return(0,c.jsx)(u.Z,{type:"caution",title:(0,c.jsx)(l,{}),className:(0,o.Z)(n,d.k.common.unlistedBanner),children:(0,c.jsx)(i,{})})}function g(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{}),(0,c.jsx)(p,{...e})]})}},79308:(e,n,t)=>{t.d(n,{Z:()=>T});var o=t(85170),s=t(9772),a=t(45924),c=t(10227),l=t(71771),i=t(55335);const r={codeBlockContainer:"codeBlockContainer_APcc"};var d=t(43010);function u(e){let{as:n,...t}=e;const o=(0,c.p)(),s=(0,i.QC)(o);return(0,d.jsx)(n,{...t,style:s,className:(0,a.Z)(t.className,r.codeBlockContainer,l.k.common.codeBlock)})}const p={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"};function g(e){let{children:n,className:t}=e;return(0,d.jsx)(u,{as:"pre",tabIndex:0,className:(0,a.Z)(p.codeBlockStandalone,"thin-scrollbar",t),children:(0,d.jsx)("code",{className:p.codeBlockLines,children:n})})}var h=t(64659),m=t(7154),x=t(98743);const b={codeLine:"codeLine_iPqp",codeLineNumber:"codeLineNumber_F4P7",codeLineContent:"codeLineContent_pOih"};function j(e){let{line:n,classNames:t,showLineNumbers:o,getLineProps:s,getTokenProps:c}=e;1===n.length&&"\n"===n[0].content&&(n[0].content="");const l=s({line:n,className:(0,a.Z)(t,o&&b.codeLine)}),i=n.map(((e,n)=>(0,d.jsx)("span",{...c({token:e,key:n})},n)));return(0,d.jsxs)("span",{...l,children:[o?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{className:b.codeLineNumber}),(0,d.jsx)("span",{className:b.codeLineContent,children:i})]}):i,(0,d.jsx)("br",{})]})}var k=t(27428),B=t(36426);function f(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function N(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const v={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function w(e){let{code:n,className:t}=e;const[s,c]=(0,o.useState)(!1),l=(0,o.useRef)(void 0),i=(0,o.useCallback)((()=>{(0,k.Z)(n),c(!0),l.current=window.setTimeout((()=>{c(!1)}),1e3)}),[n]);return(0,o.useEffect)((()=>()=>window.clearTimeout(l.current)),[]),(0,d.jsx)("button",{type:"button","aria-label":s?(0,B.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,B.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,B.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,a.Z)("clean-btn",t,v.copyButton,s&&v.copyButtonCopied),onClick:i,children:(0,d.jsxs)("span",{className:v.copyButtonIcons,"aria-hidden":"true",children:[(0,d.jsx)(f,{className:v.copyButtonIcon}),(0,d.jsx)(N,{className:v.copyButtonSuccessIcon})]})})}function C(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const Z={wordWrapButtonIcon:"wordWrapButtonIcon_iowe",wordWrapButtonEnabled:"wordWrapButtonEnabled_gY8A"};function L(e){let{className:n,onClick:t,isEnabled:o}=e;const s=(0,B.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,d.jsx)("button",{type:"button",onClick:t,className:(0,a.Z)("clean-btn",n,o&&Z.wordWrapButtonEnabled),"aria-label":s,title:s,children:(0,d.jsx)(C,{className:Z.wordWrapButtonIcon,"aria-hidden":"true"})})}function y(e){let{children:n,className:t="",metastring:o,title:s,showLineNumbers:l,language:r}=e;const{prism:{defaultLanguage:g,magicComments:b}}=(0,h.L)(),k=r??(0,i.Vo)(t)??g,B=(0,c.p)(),f=(0,m.F)(),N=(0,i.bc)(o)||s,{lineClassNames:v,code:C}=(0,i.nZ)(n,{metastring:o,language:k,magicComments:b}),Z=l??(0,i.nt)(o);return(0,d.jsxs)(u,{as:"div",className:(0,a.Z)(t,k&&!t.includes(`language-${k}`)&&`language-${k}`),children:[N&&(0,d.jsx)("div",{className:p.codeBlockTitle,children:N}),(0,d.jsxs)("div",{className:p.codeBlockContent,children:[(0,d.jsx)(x.ZP,{...x.lG,theme:B,code:C,language:k??"text",children:e=>{let{className:n,tokens:t,getLineProps:o,getTokenProps:s}=e;return(0,d.jsx)("pre",{tabIndex:0,ref:f.codeBlockRef,className:(0,a.Z)(n,p.codeBlock,"thin-scrollbar"),children:(0,d.jsx)("code",{className:(0,a.Z)(p.codeBlockLines,Z&&p.codeBlockLinesWithNumbering),children:t.map(((e,n)=>(0,d.jsx)(j,{line:e,getLineProps:o,getTokenProps:s,classNames:v[n],showLineNumbers:Z},n)))})})}}),(0,d.jsxs)("div",{className:p.buttonGroup,children:[(f.isEnabled||f.isCodeScrollable)&&(0,d.jsx)(L,{className:p.codeButton,onClick:()=>f.toggle(),isEnabled:f.isEnabled}),(0,d.jsx)(w,{className:p.codeButton,code:C})]})]})]})}function T(e){let{children:n,...t}=e;const a=(0,s.Z)(),c=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(n),l="string"==typeof c?y:g;return(0,d.jsx)(l,{...t,children:c},String(a))}},730:(e,n,t)=>{t.d(n,{Z:()=>c});t(85170);var o=t(45924);const s={iconEdit:"iconEdit_N_05"};var a=t(43010);function c(e){let{className:n,...t}=e;return(0,a.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(s.iconEdit,n),"aria-hidden":"true",...t,children:(0,a.jsx)("g",{children:(0,a.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}}}]);