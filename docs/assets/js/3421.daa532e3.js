"use strict";(self.webpackChunk_nl_rvo_docusaurus=self.webpackChunk_nl_rvo_docusaurus||[]).push([[3421],{6196:(e,n,t)=>{t.d(n,{Z:()=>v});t(9901);var a=t(4517),s=t(6080),i=t(1991),l=t(4158),o=t(4665),r=t(3730),c=t(8568),d=t(1250);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbsContainer:"breadcrumbsContainer_Ad2S",breadcrumbHomeIcon:"breadcrumbHomeIcon_PGTL"};function h(e){let{children:n,href:t,isLast:a}=e;const s="breadcrumbs__link";return a?(0,d.jsx)("span",{className:s,itemProp:"name",children:n}):t?(0,d.jsx)(o.Z,{className:s,href:t,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:n})}):(0,d.jsx)("span",{className:s,children:n})}function p(e){let{children:n,active:t,index:s,addMicrodata:i}=e;return(0,d.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,a.Z)("breadcrumbs__item",{"breadcrumbs__item--active":t}),children:[n,(0,d.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function f(){const e=(0,r.Z)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(o.Z,{"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,a.Z)("breadcrumbs__link",m.breadcrumbsItemLink),href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}function v(){const e=(0,i.s1)(),n=(0,l.Ns)();return e?(0,d.jsx)("nav",{className:(0,a.Z)(s.k.docs.docBreadcrumbs,m.breadcrumbsContainer),"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[n&&(0,d.jsx)(f,{}),e.map(((n,t)=>{const a=t===e.length-1;return(0,d.jsx)(p,{active:a,index:t,addMicrodata:!!n.href,children:(0,d.jsx)(h,{href:n.href,isLast:a,children:n.label})},t)}))]})}):null}},2862:(e,n,t)=>{t.d(n,{Z:()=>_});t(9901);var a=t(4517),s=t(6080),i=t(6754),l=t(8568),o=t(1250);function r(e){let{lastUpdatedAt:n,formattedLastUpdatedAt:t}=e;return(0,o.jsx)(l.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,o.jsx)("b",{children:(0,o.jsx)("time",{dateTime:new Date(1e3*n).toISOString(),children:t})})},children:" on {date}"})}function c(e){let{lastUpdatedBy:n}=e;return(0,o.jsx)(l.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,o.jsx)("b",{children:n})},children:" by {user}"})}function d(e){let{lastUpdatedAt:n,formattedLastUpdatedAt:t,lastUpdatedBy:a}=e;return(0,o.jsxs)("span",{className:s.k.common.lastUpdated,children:[(0,o.jsx)(l.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:n&&t?(0,o.jsx)(r,{lastUpdatedAt:n,formattedLastUpdatedAt:t}):"",byUser:a?(0,o.jsx)(c,{lastUpdatedBy:a}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const u="iconEdit_BAj_";function m(e){let{className:n,...t}=e;return(0,o.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,a.Z)(u,n),"aria-hidden":"true",...t,children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function h(e){let{editUrl:n}=e;return(0,o.jsxs)("a",{href:n,target:"_blank",rel:"noreferrer noopener",className:s.k.common.editThisPage,children:[(0,o.jsx)(m,{}),(0,o.jsx)(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var p=t(4665);const f="tag_glYu",v="tagRegular_p4S_",x="tagWithCount_Juec";function g(e){let{permalink:n,label:t,count:s}=e;return(0,o.jsxs)(p.Z,{href:n,className:(0,a.Z)(f,s?x:v),children:[t,s&&(0,o.jsx)("span",{children:s})]})}const b="tags_PEnZ",j="tag_Etsx";function N(e){let{tags:n}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,a.Z)(b,"padding--none","margin-left--sm"),children:n.map((e=>{let{label:n,permalink:t}=e;return(0,o.jsx)("li",{className:j,children:(0,o.jsx)(g,{label:n,permalink:t})},t)}))})]})}const L="lastUpdated_SmKk";function y(e){return(0,o.jsx)("div",{className:(0,a.Z)(s.k.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(N,{...e})})})}function C(e){let{editUrl:n,lastUpdatedAt:t,lastUpdatedBy:i,formattedLastUpdatedAt:l}=e;return(0,o.jsxs)("div",{className:(0,a.Z)(s.k.docs.docFooterEditMetaRow,"row"),children:[(0,o.jsx)("div",{className:"col",children:n&&(0,o.jsx)(h,{editUrl:n})}),(0,o.jsx)("div",{className:(0,a.Z)("col",L),children:(t||i)&&(0,o.jsx)(d,{lastUpdatedAt:t,formattedLastUpdatedAt:l,lastUpdatedBy:i})})]})}function _(){const{metadata:e}=(0,i.k)(),{editUrl:n,lastUpdatedAt:t,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:c}=e,d=c.length>0,u=!!(n||t||r);return d||u?(0,o.jsxs)("footer",{className:(0,a.Z)(s.k.docs.docFooter,"docusaurus-mt-lg"),children:[d&&(0,o.jsx)(y,{tags:c}),u&&(0,o.jsx)(C,{editUrl:n,lastUpdatedAt:t,lastUpdatedBy:r,formattedLastUpdatedAt:l})]}):null}},6289:(e,n,t)=>{t.d(n,{Z:()=>d});t(9901);var a=t(6754),s=t(8568),i=t(4517),l=t(4665),o=t(1250);function r(e){const{permalink:n,title:t,subLabel:a,isNext:s}=e;return(0,o.jsxs)(l.Z,{className:(0,i.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n,children:[a&&(0,o.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,o.jsx)("div",{className:"pagination-nav__label",children:t})]})}function c(e){const{previous:n,next:t}=e;return(0,o.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"}),children:[n&&(0,o.jsx)(r,{...n,subLabel:(0,o.jsx)(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),t&&(0,o.jsx)(r,{...t,subLabel:(0,o.jsx)(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function d(){const{metadata:e}=(0,a.k)();return(0,o.jsx)(c,{previous:e.previous,next:e.next})}},2973:(e,n,t)=>{t.d(n,{Z:()=>d});t(9901);var a=t(6080),s=t(6754),i=t(4517),l=t(5695);const o="tableOfContents_ZsiG";var r=t(1250);function c(e){let{className:n,...t}=e;return(0,r.jsx)("div",{className:(0,i.Z)(o,"thin-scrollbar",n),children:(0,r.jsx)(l.Z,{...t,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}function d(){const{toc:e,frontMatter:n}=(0,s.k)();return(0,r.jsx)(c,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:a.k.docs.docTocDesktop})}},7109:(e,n,t)=>{t.d(n,{Z:()=>g});t(9901);var a=t(4517),s=t(6080),i=t(6754),l=t(2267),o=t(5695),r=t(8568);const c="tocCollapsibleButton_fvkn",d="tocCollapsibleButtonExpanded_zIgc";var u=t(1250);function m(e){let{collapsed:n,...t}=e;return(0,u.jsx)("button",{type:"button",...t,className:(0,a.Z)("clean-btn",c,!n&&d,t.className),children:(0,u.jsx)(r.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const h="tocCollapsible_JdQW",p="tocCollapsibleContent_oEbL",f="tocCollapsibleExpanded_uCco";function v(e){let{toc:n,className:t,minHeadingLevel:s,maxHeadingLevel:i}=e;const{collapsed:r,toggleCollapsed:c}=(0,l.u)({initialState:!0});return(0,u.jsxs)("div",{className:(0,a.Z)(h,!r&&f,t),children:[(0,u.jsx)(m,{collapsed:r,onClick:c}),(0,u.jsx)(l.z,{lazy:!0,className:p,collapsed:r,children:(0,u.jsx)(o.Z,{toc:n,minHeadingLevel:s,maxHeadingLevel:i})})]})}const x="tocMobile_IHpc";function g(){const{toc:e,frontMatter:n}=(0,i.k)();return(0,u.jsx)(v,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,a.Z)(s.k.docs.docTocMobile,x)})}},5e3:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});t(9901);var a=t(6769),s=t(6754),i=t(1250);function l(){const{metadata:e,frontMatter:n,assets:t}=(0,s.k)();return(0,i.jsx)(a.d,{title:e.title,description:e.description,keywords:n.keywords,image:t.image??n.image})}var o=t(2227);function r(e){const n=`docs-doc-id-${e.content.metadata.unversionedId}`,t=e.content;return(0,i.jsx)(s.b,{content:e.content,children:(0,i.jsxs)(a.FG,{className:n,children:[(0,i.jsx)(l,{}),(0,i.jsx)(o.Z,{children:(0,i.jsx)(t,{})})]})})}},3545:(e,n,t)=>{t.d(n,{Z:()=>r});t(9901);var a=t(4517),s=t(8568),i=t(6080),l=t(358),o=t(1250);function r(e){let{className:n}=e;const t=(0,l.E)();return t.badge?(0,o.jsx)("span",{className:(0,a.Z)(n,i.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(s.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label},children:"Version: {versionLabel}"})}):null}},3419:(e,n,t)=>{t.d(n,{Z:()=>v});t(9901);var a=t(4517),s=t(6315),i=t(4665),l=t(8568),o=t(9174),r=t(6080),c=t(8215),d=t(358),u=t(1250);const m={unreleased:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,u.jsx)(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:n,versionLabel:(0,u.jsx)("b",{children:t.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,u.jsx)(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:n,versionLabel:(0,u.jsx)("b",{children:t.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const n=m[e.versionMetadata.banner];return(0,u.jsx)(n,{...e})}function p(e){let{versionLabel:n,to:t,onClick:a}=e;return(0,u.jsx)(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:n,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.Z,{to:t,onClick:a,children:(0,u.jsx)(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function f(e){let{className:n,versionMetadata:t}=e;const{siteConfig:{title:i}}=(0,s.Z)(),{pluginId:l}=(0,o.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,c.J)(l),{latestDocSuggestion:m,latestVersionSuggestion:f}=(0,o.Jo)(l),v=m??(x=f).docs.find((e=>e.id===x.mainDocId));var x;return(0,u.jsxs)("div",{className:(0,a.Z)(n,r.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:i,versionMetadata:t})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(p,{versionLabel:f.label,to:v.path,onClick:()=>d(f.name)})})]})}function v(e){let{className:n}=e;const t=(0,d.E)();return t.banner?(0,u.jsx)(f,{className:n,versionMetadata:t}):null}},1178:(e,n,t)=>{t.d(n,{Z:()=>z});var a=t(9901),s=t(7522),i=t(506),l=t(1250);var o=t(5166);var r=t(4665);var c=t(4517),d=t(5126),u=t(2267);const m="details_MdVj",h="isBrowser_S4Y_",p="collapsibleContent_LVEN";function f(e){return!!e&&("SUMMARY"===e.tagName||f(e.parentElement))}function v(e,n){return!!e&&(e===n||v(e.parentElement,n))}function x(e){let{summary:n,children:t,...s}=e;const i=(0,d.Z)(),o=(0,a.useRef)(null),{collapsed:r,setCollapsed:x}=(0,u.u)({initialState:!s.open}),[g,b]=(0,a.useState)(s.open);return(0,l.jsxs)("details",{...s,ref:o,open:g,"data-collapsed":r,className:(0,c.Z)(m,i&&h,s.className),onMouseDown:e=>{f(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;f(n)&&v(n,o.current)&&(e.preventDefault(),r?(x(!1),b(!0)):x(!0))},children:[n??(0,l.jsx)("summary",{children:"Details"}),(0,l.jsx)(u.z,{lazy:!1,collapsed:r,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{x(e),b(!e)},children:(0,l.jsx)("div",{className:p,children:t})})]})}const g="details_eaI9";function b(e){let{...n}=e;return(0,l.jsx)(x,{...n,className:(0,c.Z)("alert alert--info",g,n.className)})}var j=t(8568),N=t(2949);const L="anchorWithStickyNavbar_bIEm",y="anchorWithHideOnScrollNavbar_I7LM";function C(e){let{as:n,id:t,...a}=e;const{navbar:{hideOnScroll:s}}=(0,N.L)();return"h1"!==n&&t?(0,l.jsxs)(n,{...a,className:(0,c.Z)("anchor",s?y:L),id:t,children:[a.children,(0,l.jsx)("a",{className:"hash-link",href:`#${t}`,title:(0,j.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"}),children:"\u200b"})]}):(0,l.jsx)(n,{...a,id:void 0})}function _(e){return(0,l.jsx)(C,{...e})}const k="containsTaskList_kntN";const Z="img_EsHO";var T=t(6080);const H="admonition_qlk1",A="admonitionHeading_Cbyg",w="admonitionIcon_cAyo",M="admonitionContent_qKVd";const E={note:{infimaClassName:"secondary",iconComponent:function(){return(0,l.jsx)("svg",{viewBox:"0 0 14 16",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})},label:(0,l.jsx)(j.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})},tip:{infimaClassName:"success",iconComponent:function(){return(0,l.jsx)("svg",{viewBox:"0 0 12 16",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})},label:(0,l.jsx)(j.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})},danger:{infimaClassName:"danger",iconComponent:function(){return(0,l.jsx)("svg",{viewBox:"0 0 12 16",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})},label:(0,l.jsx)(j.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})},info:{infimaClassName:"info",iconComponent:function(){return(0,l.jsx)("svg",{viewBox:"0 0 14 16",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})},label:(0,l.jsx)(j.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})},caution:{infimaClassName:"warning",iconComponent:function(){return(0,l.jsx)("svg",{viewBox:"0 0 16 16",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})},label:(0,l.jsx)(j.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})}},U={secondary:"note",important:"info",success:"tip",warning:"danger"};function S(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=a.Children.toArray(e),t=n.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),s=(0,l.jsx)(l.Fragment,{children:n.filter((e=>e!==t))});return{mdxAdmonitionTitle:t,rest:s}}(e.children);return{...e,title:e.title??n,children:t}}const I={head:function(e){const n=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:n,originalType:t,...s}=e.props;return a.createElement(e.props.originalType,s)}return e}(e):e));return(0,l.jsx)(i.Z,{...e,children:n})},code:function(e){const n=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&n.includes(e.props?.mdxType)))?(0,l.jsx)("code",{...e}):(0,l.jsx)(o.Z,{...e})},a:function(e){return(0,l.jsx)(r.Z,{...e})},pre:function(e){return(0,l.jsx)(o.Z,{...(0,a.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e}})},details:function(e){const n=a.Children.toArray(e.children),t=n.find((e=>a.isValidElement(e)&&"summary"===e.props?.mdxType)),s=(0,l.jsx)(l.Fragment,{children:n.filter((e=>e!==t))});return(0,l.jsx)(b,{...e,summary:t,children:s})},ul:function(e){return(0,l.jsx)("ul",{...e,className:(n=e.className,(0,c.Z)(n,n?.includes("contains-task-list")&&k))});var n},img:function(e){return(0,l.jsx)("img",{loading:"lazy",...e,className:(n=e.className,(0,c.Z)(n,Z))});var n},h1:e=>(0,l.jsx)(_,{as:"h1",...e}),h2:e=>(0,l.jsx)(_,{as:"h2",...e}),h3:e=>(0,l.jsx)(_,{as:"h3",...e}),h4:e=>(0,l.jsx)(_,{as:"h4",...e}),h5:e=>(0,l.jsx)(_,{as:"h5",...e}),h6:e=>(0,l.jsx)(_,{as:"h6",...e}),admonition:function(e){const{children:n,type:t,title:a,icon:s}=S(e),i=function(e){const n=U[e]??e,t=E[n];return t||(console.warn(`No admonition config found for admonition type "${n}". Using Info as fallback.`),E.info)}(t),o=a??i.label,{iconComponent:r}=i,d=s??(0,l.jsx)(r,{});return(0,l.jsxs)("div",{className:(0,c.Z)(T.k.common.admonition,T.k.common.admonitionType(e.type),"alert",`alert--${i.infimaClassName}`,H),children:[(0,l.jsxs)("div",{className:A,children:[(0,l.jsx)("span",{className:w,children:d}),o]}),(0,l.jsx)("div",{className:M,children:n})]})},mermaid:()=>null};function z(e){let{children:n}=e;return(0,l.jsx)(s.Zo,{components:I,children:n})}},5695:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(9901),s=t(2949);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...s}=e;t>=0?n[t].children.push(s):a.push(s)})),a}function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function o(e){const n=e.getBoundingClientRect();return n.top===n.bottom?o(e.parentNode):n}function r(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>o(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,s.L)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,a.useRef)(void 0),t=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:s,minHeadingLevel:i,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let s=n;s<=t;s+=1)a.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),c=r(o,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(s),e.classList.add(s),n.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,t])}var u=t(1250);function m(e){let{toc:n,className:t,linkClassName:a,isChild:s}=e;return n.length?(0,u.jsx)("ul",{className:s?void 0:t,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(m,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)))}):null}const h=a.memo(m);function p(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:m,...p}=e;const f=(0,s.L)(),v=c??f.tableOfContents.minHeadingLevel,x=m??f.tableOfContents.maxHeadingLevel,g=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return(0,a.useMemo)((()=>l({toc:i(n),minHeadingLevel:t,maxHeadingLevel:s})),[n,t,s])}({toc:n,minHeadingLevel:v,maxHeadingLevel:x});return d((0,a.useMemo)((()=>{if(o&&r)return{linkClassName:o,linkActiveClassName:r,minHeadingLevel:v,maxHeadingLevel:x}}),[o,r,v,x])),(0,u.jsx)(h,{toc:g,className:t,linkClassName:o,...p})}},2267:(e,n,t)=>{t.d(n,{u:()=>l,z:()=>p});var a=t(9901),s=t(1860),i=t(1250);function l(e){let{initialState:n}=e;const[t,s]=(0,a.useState)(n??!1),i=(0,a.useCallback)((()=>{s((e=>!e))}),[]);return{collapsed:t,setCollapsed:s,toggleCollapsed:i}}const o={display:"none",overflow:"hidden",height:"0px"},r={display:"block",overflow:"visible",height:"auto"};function c(e,n){const t=n?o:r;e.style.display=t.display,e.style.overflow=t.overflow,e.style.height=t.height}function d(e){let{collapsibleRef:n,collapsed:t,animation:s}=e;const i=(0,a.useRef)(!1);(0,a.useEffect)((()=>{const e=n.current;function a(){const n=e.scrollHeight,t=s?.duration??function(e){const n=e/36;return Math.round(10*(4+15*n**.25+n/5))}(n);return{transition:`height ${t}ms ${s?.easing??"ease-in-out"}`,height:`${n}px`}}function l(){const n=a();e.style.transition=n.transition,e.style.height=n.height}if(!i.current)return c(e,t),void(i.current=!0);return e.style.willChange="height",function(){const n=requestAnimationFrame((()=>{t?(l(),requestAnimationFrame((()=>{e.style.height=o.height,e.style.overflow=o.overflow}))):(e.style.display="block",requestAnimationFrame((()=>{l()})))}));return()=>cancelAnimationFrame(n)}()}),[n,t,s])}function u(e){if(!s.Z.canUseDOM)return e?o:r}function m(e){let{as:n="div",collapsed:t,children:s,animation:l,onCollapseTransitionEnd:o,className:r,disableSSRStyle:m}=e;const h=(0,a.useRef)(null);return d({collapsibleRef:h,collapsed:t,animation:l}),(0,i.jsx)(n,{ref:h,style:m?void 0:u(t),onTransitionEnd:e=>{"height"===e.propertyName&&(c(h.current,t),o?.(t))},className:r,children:s})}function h(e){let{collapsed:n,...t}=e;const[s,l]=(0,a.useState)(!n),[o,r]=(0,a.useState)(n);return(0,a.useLayoutEffect)((()=>{n||l(!0)}),[n]),(0,a.useLayoutEffect)((()=>{s&&r(n)}),[s,n]),s?(0,i.jsx)(m,{...t,collapsed:o}):null}function p(e){let{lazy:n,...t}=e;const a=n?h:m;return(0,i.jsx)(a,{...t})}},6754:(e,n,t)=>{t.d(n,{b:()=>o,k:()=>r});var a=t(9901),s=t(3383),i=t(1250);const l=a.createContext(null);function o(e){let{children:n,content:t}=e;const s=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(t);return(0,i.jsx)(l.Provider,{value:s,children:n})}function r(){const e=(0,a.useContext)(l);if(null===e)throw new s.i6("DocProvider");return e}},358:(e,n,t)=>{t.d(n,{E:()=>r,q:()=>o});var a=t(9901),s=t(3383),i=t(1250);const l=a.createContext(null);function o(e){let{children:n,version:t}=e;return(0,i.jsx)(l.Provider,{value:t,children:n})}function r(){const e=(0,a.useContext)(l);if(null===e)throw new s.i6("DocsVersionProvider");return e}}}]);