"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[4013],{4943:(e,t,a)=>{a.d(t,{Z:()=>P});var n=a(9496),o=a(5924),r=a(7613),s=a(6907);const l="desktop",c="mobile",i="ssr";function m(){return s.Z.canUseDOM?window.innerWidth>996?l:c:i}var d=a(1736),u=a(9463);const g="sidebar_F2jE",p="sidebarItemTitle_vcdI",b="sidebarItemList_BWQM",h="sidebarItem_hEw6",E="sidebarItemLink_zAY3",f="sidebarItemLinkActive_YcDS";function v(e){let{sidebar:t}=e;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,o.Z)(g,"thin-scrollbar"),"aria-label":(0,u.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,o.Z)(p,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,o.Z)(b,"clean-list")},t.items.map((e=>n.createElement("li",{key:e.permalink,className:h},n.createElement(d.Z,{isNavLink:!0,to:e.permalink,className:E,activeClassName:f},e.title)))))))}var k=a(7672);const w=n.createContext(null);function N(e){let{component:t,props:a}=e;const o=(0,n.useContext)(w);if(!o)throw new k.i6("NavbarSecondaryMenuContentProvider");const[,r]=o,s=(0,k.Ql)(a);return(0,n.useEffect)((()=>{r({component:t,props:s})}),[r,t,s]),(0,n.useEffect)((()=>()=>r({component:null,props:null})),[r]),null}function _(e){let{sidebar:t}=e;return n.createElement("ul",{className:"menu__list"},t.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(d.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function L(e){return n.createElement(N,{component:_,props:e})}function T(e){let{sidebar:t}=e;const a=function(){const[e,t]=(0,n.useState)((()=>m()));return(0,n.useEffect)((()=>{function e(){t(m())}return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e),clearTimeout(void 0)}}),[]),e}();return null!=t&&t.items.length?"mobile"===a?n.createElement(L,{sidebar:t}):n.createElement(v,{sidebar:t}):null}function P(e){const{sidebar:t,toc:a,children:s,...l}=e,c=t&&t.items.length>0;return n.createElement(r.Z,l,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(T,{sidebar:t}),n.createElement("main",{className:(0,o.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&n.createElement("div",{className:"col col--2"},a))))}},3660:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var n=a(9496),o=a(5924),r=a(9463);var s=a(6568),l=a(7851),c=a(4943),i=a(8336);const m="tag_cy09";function d(e){let{letterEntry:t}=e;return n.createElement("article",null,n.createElement("h2",null,t.letter),n.createElement("ul",{className:"padding--none"},t.tags.map((e=>n.createElement("li",{key:e.permalink,className:m},n.createElement(i.Z,e))))),n.createElement("hr",null))}function u(e){let{tags:t}=e;const a=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[n]=t;return a.localeCompare(n)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return n.createElement("section",{className:"margin-vert--lg"},a.map((e=>n.createElement(d,{key:e.letter,letterEntry:e}))))}var g=a(7649);function p(e){let{tags:t,sidebar:a}=e;const i=(0,r.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});return n.createElement(s.FG,{className:(0,o.Z)(l.k.wrapper.blogPages,l.k.page.blogTagsListPage)},n.createElement(s.d,{title:i}),n.createElement(g.Z,{tag:"blog_tags_list"}),n.createElement(c.Z,{sidebar:a},n.createElement("h1",null,i),n.createElement(u,{tags:t})))}},8336:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(9496),o=a(5924),r=a(1736);const s="tag_uz4q",l="tagRegular_v0Sz",c="tagWithCount_WSGd";function i(e){let{permalink:t,label:a,count:i}=e;return n.createElement(r.Z,{href:t,className:(0,o.Z)(s,i?c:l)},a,i&&n.createElement("span",null,i))}},7851:(e,t,a)=>{a.d(t,{k:()=>n});const n={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagPostListPage:"blog-tags-post-list-page",docsDocPage:"docs-doc-page",docsTagsListPage:"docs-tags-list-page",docsTagDocListPage:"docs-tags-doc-list-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docsPages:"docs-wrapper",mdxPages:"mdx-wrapper"},common:{editThisPage:"theme-edit-this-page",lastUpdated:"theme-last-updated",backToTopButton:"theme-back-to-top-button",codeBlock:"theme-code-block",admonition:"theme-admonition",admonitionType:e=>`theme-admonition-${e}`},layout:{},docs:{docVersionBanner:"theme-doc-version-banner",docVersionBadge:"theme-doc-version-badge",docBreadcrumbs:"theme-doc-breadcrumbs",docMarkdown:"theme-doc-markdown",docTocMobile:"theme-doc-toc-mobile",docTocDesktop:"theme-doc-toc-desktop",docFooter:"theme-doc-footer",docFooterTagsRow:"theme-doc-footer-tags-row",docFooterEditMetaRow:"theme-doc-footer-edit-meta-row",docSidebarContainer:"theme-doc-sidebar-container",docSidebarMenu:"theme-doc-sidebar-menu",docSidebarItemCategory:"theme-doc-sidebar-item-category",docSidebarItemLink:"theme-doc-sidebar-item-link",docSidebarItemCategoryLevel:e=>`theme-doc-sidebar-item-category-level-${e}`,docSidebarItemLinkLevel:e=>`theme-doc-sidebar-item-link-level-${e}`},blog:{}}},7672:(e,t,a)=>{a.d(t,{Ql:()=>l,i6:()=>s,zX:()=>r});var n=a(9496);const o=a(6907).Z.canUseDOM?n.useLayoutEffect:n.useEffect;function r(e){const t=(0,n.useRef)(e);return o((()=>{t.current=e}),[e]),(0,n.useCallback)((function(){return t.current(...arguments)}),[])}class s extends Error{constructor(e,t){var a,n,o;super(),this.name="ReactContextError",this.message=`Hook ${(null==(a=this.stack)||null==(n=a.split("\n")[1])||null==(o=n.match(/at (?:\w+\.)?(?<name>\w+)/))?void 0:o.groups.name)??""} is called outside the <${e}>. ${t??""}`}}function l(e){const t=Object.entries(e);return t.sort(((e,t)=>e[0].localeCompare(t[0]))),(0,n.useMemo)((()=>e),t.flat())}}}]);