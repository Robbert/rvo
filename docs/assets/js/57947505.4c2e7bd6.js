/*! For license information please see 57947505.4c2e7bd6.js.LICENSE.txt */
"use strict";(self.webpackChunk_nl_rvo_docusaurus=self.webpackChunk_nl_rvo_docusaurus||[]).push([[2101],{7522:(e,c,t)=>{t.d(c,{Zo:()=>i,kt:()=>p});var r=t(9901);function l(e,c,t){return c in e?Object.defineProperty(e,c,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[c]=t,e}function v(e,c){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);c&&(r=r.filter((function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var c=1;c<arguments.length;c++){var t=null!=arguments[c]?arguments[c]:{};c%2?v(Object(t),!0).forEach((function(c){l(e,c,t[c])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(c){Object.defineProperty(e,c,Object.getOwnPropertyDescriptor(t,c))}))}return e}function n(e,c){if(null==e)return{};var t,r,l=function(e,c){if(null==e)return{};var t,r,l={},v=Object.keys(e);for(r=0;r<v.length;r++)t=v[r],c.indexOf(t)>=0||(l[t]=e[t]);return l}(e,c);if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(e);for(r=0;r<v.length;r++)t=v[r],c.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),m=function(e){var c=r.useContext(o),t=c;return e&&(t="function"==typeof e?e(c):a(a({},c),e)),t},i=function(e){var c=m(e.components);return r.createElement(o.Provider,{value:c},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var c=e.children;return r.createElement(r.Fragment,{},c)}},d=r.forwardRef((function(e,c){var t=e.components,l=e.mdxType,v=e.originalType,o=e.parentName,i=n(e,["components","mdxType","originalType","parentName"]),s=m(t),d=l,p=s["".concat(o,".").concat(d)]||s[d]||h[d]||v;return t?r.createElement(p,a(a({ref:c},i),{},{components:t})):r.createElement(p,a({ref:c},i))}));function p(e,c){var t=arguments,l=c&&c.mdxType;if("string"==typeof e||l){var v=t.length,a=new Array(v);a[0]=d;var n={};for(var o in c)hasOwnProperty.call(c,o)&&(n[o]=c[o]);n.originalType=e,n[s]="string"==typeof e?e:l,a[1]=n;for(var m=2;m<v;m++)a[m]=t[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2330:(e,c,t)=>{t.r(c),t.d(c,{assets:()=>h,contentTitle:()=>i,default:()=>u,frontMatter:()=>m,metadata:()=>s,toc:()=>d});var r=t(2798),l=(t(9901),t(7522)),v=t(8144);const a={link:"/"};var n=t(1250);const o=e=>{let{link:c=a.link}=e;return(0,n.jsx)("header",{className:"rvo-header",children:(0,n.jsx)("div",{className:"rvo-header__logo-wrapper",children:c?(0,n.jsx)("a",{href:c,className:"rvo-header__logo-link",children:(0,n.jsx)(v.TR,{className:"rvo-header__logo-img"})}):(0,n.jsx)(v.TR,{className:"rvo-header__logo-img"})})})},m={title:"Header",hide_title:!1,slug:"."},i=void 0,s={unversionedId:"header/header.docs",id:"header/header.docs",title:"Header",description:"Documentation for header",source:"@site/../../components/header/header.docs.mdx",sourceDirName:"header",slug:"/header/",permalink:"/rvo/docs/components/header/",draft:!1,editUrl:"https://github.com/nl-design-system/rvo/tree/main/components/../../components/header/header.docs.mdx",tags:[],version:"current",frontMatter:{title:"Header",hide_title:!1,slug:"."},sidebar:"components",previous:{title:"Time input",permalink:"/rvo/docs/components/form-timeinput/"},next:{title:"Heading",permalink:"/rvo/docs/components/heading/"}},h={},d=[],p={toc:d};function u(e){let{components:c,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,t,{components:c,mdxType:"MDXLayout"}),(0,l.kt)(o,{mdxType:"Header"}),(0,l.kt)("br",null),"Documentation for header")}u.isMDXComponent=!0},8144:(e,c,t)=>{t.d(c,{TR:()=>s,ZP:()=>h});var r=t(9901);var l,v;function a(){return a=Object.assign?Object.assign.bind():function(e){for(var c=1;c<arguments.length;c++){var t=arguments[c];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}const n=e=>{let{title:c,titleId:t,...n}=e;return r.createElement("svg",a({fill:"none",height:101,viewBox:"0 0 250 101",width:250,xmlns:"http://www.w3.org/2000/svg","aria-labelledby":t},n),c?r.createElement("title",{id:t},c):null,l||(l=r.createElement("clipPath",{id:"a"},r.createElement("path",{d:"M0 0h250v100.402H0z"}))),v||(v=r.createElement("g",{clipPath:"url(#a)"},r.createElement("path",{d:"M.03 0h50.201v100.402H.031z",fill:"#154273"}),r.createElement("path",{d:"M26.044 77.67h-.874v-2.42h.874zm3.935-10.682h-.873v-2.42h.873zM13.805 62.81c-.07 0-.522 0-.522.09s.21.05.522.1c.703.121.974.473 1.466.473.441 0 .903-.302.722-.944-.03-.11-.09-.08-.11-.01-.07.291-.422.452-.793.452-.462 0-.562-.161-1.285-.161zm-4.82 2.42c.08.11.904 1.174-.361 1.586-.06.02-.07.07.01.11.934.392 1.386-.33 1.386-.33.472 1.073-.251 1.676-.251 1.676.1.19.552.522 1.225.673.26-.141.622-.402.773-.804 0 0 .18.472.02.924 1.907.17 2.58-1.355 4.056-1.074.04.01.06-.02.06-.06 0-.944-.572-2.661-2.4-3.013-1.817-.351-1.325-1.094-1.325-1.094.763-.03 1.205.301 1.205.301.14-.23-.06-.472-.06-.472.07-.09.11-.401.11-.401-.863 0-1.084-.191-1.084-.191-.13-.512.22-1.235 1.506-.462.321-.281.291-.723.291-.723.1-.05.16-.2.16-.26 0-.212-1.023-.784-1.284-.854-.06-.311-.462-.753-1.667-.593-.572.07-.984-.08-.793-.411.03-.06-.07-.07-.12-.01-.131.13-.312.502.18.753.552.28.582.833.592.913.01.12-.13.13-.16.01-.251-.933-1.536-1.134-2.29-.642.04.502.583.833.874.833.17 0 .402-.17.402-.401 0-.11.06-.1.09-.01.12.33-.371 1.024-1.094.602-.743.743-.442 1.667-.372 1.998.13.602-.16 1.195-.713.924-.03-.01-.06-.02-.06.04.01.361.512.793 1.094.462zm4.107-3.745c-.351.391-.914.3-1.054-.342.713-.04 1.024.03 1.054.342zm22.159 1.486c-.372 0-.723-.161-.794-.452-.02-.07-.08-.1-.11.01-.18.642.281.944.723.944.492 0 .763-.352 1.466-.472.31-.05.522 0 .522-.1 0-.091-.452-.091-.522-.091-.733 0-.824.16-1.285.16zm7.178 1.777c0-.06-.03-.05-.06-.04-.552.27-.843-.312-.713-.924.07-.341.372-1.255-.371-1.998-.733.422-1.225-.271-1.095-.602.03-.09.09-.1.09.01 0 .23.232.401.402.401.291 0 .834-.331.874-.833-.753-.492-2.038-.291-2.29.642-.03.12-.17.11-.16-.01 0-.08.04-.632.592-.913.502-.251.322-.623.181-.753-.05-.05-.16-.04-.12.01.19.331-.221.482-.784.411-1.204-.16-1.596.292-1.666.593-.261.07-1.285.642-1.285.853 0 .06.06.221.16.261 0 0-.02.432.291.723 1.276-.773 1.637-.05 1.506.462 0 0-.23.18-1.094.19 0 0 .04.312.11.402 0 0-.2.251-.06.472 0 0 .442-.331 1.205-.301 0 0 .492.743-1.325 1.094-1.817.352-2.4 2.069-2.4 3.012 0 .05.02.07.06.06 1.476-.27 2.149 1.256 4.057 1.075-.171-.452.02-.924.02-.924.15.402.512.673.773.804.683-.151 1.124-.472 1.225-.673 0 0-.723-.593-.251-1.677 0 0 .452.723 1.385.331.08-.04.06-.09.01-.11-1.265-.412-.441-1.476-.361-1.586.602.351 1.094-.08 1.094-.462zm-4.136-3.605c-.14.643-.703.733-1.054.342.04-.311.34-.382 1.054-.342zM24.829 50.411c0 .161.07.302.12.382.11.16.09.25.04.301s-.14.07-.3-.04a.662.662 0 0 0-.382-.12c-.271 0-.412.18-.412.33s.14.332.412.332c.16 0 .3-.07.381-.12.16-.11.251-.09.301-.04s-.02.602-.09 1.044c-.452.1-.673.462-.673.672 0 .553.583.864.934 1.055.342-.181.934-.502.934-1.055 0-.21-.221-.582-.673-.672-.06-.432-.14-.994-.09-1.044s.14-.07.301.04c.08.06.22.12.382.12.27 0 .411-.18.411-.331s-.14-.331-.411-.331c-.161 0-.302.07-.382.12-.16.11-.251.09-.301.04s-.07-.14.04-.301c.06-.08.12-.221.12-.382 0-.27-.18-.411-.33-.411s-.332.14-.332.411zm.341 4.077a.673.673 0 1 0 .673.672.68.68 0 0 0-.673-.672zm0 6.436c2.68 0 4.187.512 4.187.512.01-1.356.01-2.109.783-1.998-.422-1.135 1.406-1.587 1.406-3.063 0-.974-.693-1.084-.894-1.084-.602 0-.512.392-1.024.392-.06 0-.13-.02-.13.03 0 .17.14.462.381.462.321 0 .321-.322.562-.322.1 0 .251.08.251.412 0 .632-.411 1.325-.903 1.867-.11-.15-.261-.25-.452-.25-.291 0-.542.3-.542.672 0 .14.02.24.07.351-.16.09-.311.14-.412.14-.22 0-.552-.09-.552-.571 0-1.075 1.436-2.018 1.436-3.384 0-.652-.432-1.295-1.345-1.295-.974 0-.794.884-1.637.884-.04 0-.07.01-.07.05 0 .06.15.552.582.552.462 0 .592-.803 1.014-.803.15 0 .382.09.382.632 0 .422-.211 1.115-.513 1.767a.612.612 0 0 0-.421-.19c-.362 0-.623.35-.623.763 0 .26.1.522.281.682-.21.271-.431.492-.722.492-.583 0-.834-.331-.834-.692 0-.392.713-.533.713-1.135 0-.412-.271-.643-.522-.643-.281 0-.422.181-.452.181s-.17-.18-.452-.18c-.26 0-.522.23-.522.642 0 .602.713.753.713 1.135 0 .36-.26.692-.833.692-.291 0-.512-.22-.723-.492a.94.94 0 0 0 .281-.682c0-.422-.261-.763-.622-.763a.593.593 0 0 0-.422.19c-.301-.662-.512-1.345-.512-1.767 0-.542.23-.632.381-.632.412 0 .543.803 1.014.803.432 0 .583-.492.583-.552 0-.03-.03-.05-.07-.05-.844 0-.663-.884-1.637-.884-.904 0-1.345.643-1.345 1.295 0 1.366 1.435 2.31 1.435 3.384 0 .482-.331.572-.552.572-.11 0-.25-.05-.412-.14.05-.121.07-.211.07-.352 0-.371-.25-.673-.542-.673-.18 0-.33.1-.441.251-.492-.542-.904-1.235-.904-1.867 0-.321.15-.412.251-.412.231 0 .241.322.562.322.241 0 .382-.292.382-.462 0-.05-.07-.03-.13-.03-.513 0-.422-.392-1.025-.392-.2 0-.893.11-.893 1.084 0 1.486 1.827 1.928 1.405 3.063.773-.11.763.642.783 1.998-.02 0 1.496-.512 4.177-.512zm-4.91 1.997c-.732.161-1.255.312-1.485.382.01-.321.13-.622.421-.683.04-.01.05-.06.01-.08-.652-.432-.994.392-1.004.422-.23-.02-.582.05-.582.361 0 .934-2.128 1.446-2.62 1.526.873.332 1.235 1.436 1.235 1.436.632-.633 1.365-1.185 1.536-1.185s.23.211.24.332c0 .04.04.05.07.02.332-.492.172-.603.141-.753-.02-.11.01-.543.492-.492v6.214l-.25.05c-.111.02-1.025-.752-2.059-1.475-1.044-.723-1.596-.291-2.781.351-1.556.844-3.123.08-3.123.08-1.335.954-1.797 3.725-1.797 3.725-.27.11-.713.231-1.124.231-1.024 0-1.205-.622-1.205-.984 0-1.576 1.978-2.249 1.978-3.805 0-.381-.17-1.907-2.068-1.907H4.588c-.713 0-.884-.512-.984-.703-.04-.08-.11-.03-.08.03.05.13-.08.331-.08.723 0 .632.37 1.014 1.064 1.014.31 0 .612-.09.702-.15.06-.041.1.02.07.06-.3.35-.32 1.014-.2 1.164.03.04.07.03.07 0 .17-.663.793-1.295 1.637-1.295 1.034 0 1.024.873 1.024 1.084 0 1.265-2.22 2.189-2.22 3.936 0 1.767 1.868 2.139 2.943 1.867-.06 1.768-2.089 2.37-2.149 1.105 0-.06-.05-.07-.08.01-.251.622-.15 1.175.632 1.345.05.01.03.04-.02.08-.783.493-.361 2.44-.321 3.013.06.823-.763.723-.833.702-.03-.01-.07 0-.01.07.582.714 1.305.061 1.305.061.542.17.21.632-.16.874-.061.04-.051.08.01.08.08.01.923.08 1.073-.593.372.442.924.281 1.035.221.16-.08.953-.371 1.024.512 0 .06.04.02.07-.01.592-.753-.04-1.215-.402-1.265a.597.597 0 0 1 .934.11c.03.04.06.05.06-.03.05-.953-.723-1.034-1.225-.622-.02-.1-.19-.633.563-.612.02 0 .05-.03.02-.06-.583-.623-1.065-.06-1.185.08-.261.31-.914.18-.974.18.2-3.303 3.113-2.128 3.514-3.735.02-.08.06-.05.06-.02.11.392 1.095.442 1.275-.32.01-.051 0-.081-.03-.051-.843.843-2.74-1.787-.15-3.926 2.209-1.817 4.186-.803 4.94-.21.04.26-.12.35-.221.38-.04.01-.05.041.01.071.21.08.502.05.642-.14.472.33.07.753-.12.863-.05.03-.03.06.01.07.432.08.793-.361.813-.622l.07.04v1.877c0 2.671 3.083 3.043 6.466 5.302 3.384-2.27 6.456-2.63 6.456-5.302v-1.877l.07-.04c.02.25.372.703.814.622.04-.01.06-.04.01-.07-.191-.12-.603-.532-.12-.863.14.2.43.22.642.14.06-.02.05-.06.01-.07-.1-.03-.261-.12-.221-.382.753-.602 2.73-1.616 4.94.211 2.59 2.139.692 4.76-.151 3.926-.04-.04-.04 0-.03.05.18.773 1.165.713 1.275.321.01-.03.05-.06.06.02.402 1.607 3.304.432 3.514 3.735-.06.01-.712.13-.974-.18-.11-.13-.592-.703-1.184-.08-.04.04 0 .06.02.06.753-.02.592.512.562.612-.502-.412-1.275-.331-1.225.623 0 .07.03.07.06.03a.597.597 0 0 1 .934-.11c-.351.05-.994.511-.401 1.264.03.03.06.07.07.01.08-.883.863-.602 1.024-.512.11.06.663.221 1.034-.22.15.672.994.602 1.074.592.06 0 .06-.04.01-.08-.361-.242-.702-.703-.16-.874 0 0 .723.653 1.305-.06.05-.06.02-.08-.01-.07-.07.02-.894.12-.833-.703.04-.573.461-2.52-.322-3.012-.05-.03-.07-.06-.02-.08.783-.171.884-.724.633-1.346-.03-.08-.08-.06-.08-.01-.06 1.265-2.079.663-2.15-1.105 1.085.282 2.943-.1 2.943-1.867 0-1.737-2.22-2.67-2.22-3.936 0-.21-.01-1.084 1.025-1.084.843 0 1.466.632 1.636 1.295.01.03.04.04.07 0 .121-.16.101-.813-.2-1.165-.03-.03 0-.1.07-.06.09.06.392.15.703.15.693 0 1.064-.38 1.064-1.013 0-.392-.14-.593-.08-.723.03-.06-.05-.1-.08-.03-.1.2-.282.703-.984.703h-1.697c-1.898 0-2.068 1.536-2.068 1.907 0 1.556 1.977 2.229 1.977 3.805 0 .372-.19.984-1.204.984a3.13 3.13 0 0 1-1.125-.23s-.452-2.762-1.797-3.725c0 0-1.566.763-3.123-.08-1.184-.643-1.747-1.075-2.79-.352-1.045.723-1.948 1.496-2.059 1.476l-.251-.05v-6.215c.482-.05.512.381.492.492-.03.14-.18.26.14.753.03.04.06.02.07-.02.01-.121.081-.332.242-.332s.903.552 1.536 1.185c0 0 .361-1.094 1.235-1.436-.492-.08-2.62-.592-2.62-1.526 0-.311-.352-.381-.583-.361-.01-.03-.361-.854-1.004-.422-.03.02-.03.07.01.08.291.07.412.362.422.683-.623-.19-3.263-.934-6.396-.934-1.526 0-2.921.181-4.036.382v2.148h-.873zM14.468 84.99c-.23-.09-.381-.241-.381-.552v-1.336c-.382-.13-1.426-.532-3.524-.532-1.737 0-2.28.392-2.31.532l-.461 2.55s.702-.642 3.223-.482c3.032.191 6.174 1.988 6.174.07v-1.124c-2.37 0-2.72.763-2.72.874zm18.675-.874v1.125c0 1.907 3.143.12 6.175-.07 2.52-.161 3.223.481 3.223.481l-.462-2.55c-.02-.14-.572-.532-2.31-.532-2.088 0-3.132.402-3.523.532v1.336c0 .3-.151.451-.382.552 0-.11-.351-.874-2.72-.874zm-7.972-1.154c4.89 0 9.85.25 10.492.994.05.06.07 0 .07-.05v-2.591c0-.753-5.12-1.195-10.572-1.195-5.452 0-10.572.442-10.572 1.195v2.59c0 .04.02.1.07.05.663-.732 5.623-.993 10.512-.993zm-4.357-12.21-.492-.13-.04.06-.573-.25h.512c.05 0 .05-.03.03-.05-.23-.232-.441-.432-.441-.432s.23.09.562.21c.04.01.05-.01.03-.04l-.381-.552.552.372c.03.02.05 0 .04-.03l-.261-.653.502.482c.02.02.05.01.04-.02l-.14-.653.371.542c.02.03.05.02.05-.01 0-.11.01-.592.01-.592s.16.361.231.542c.02.04.04.04.06-.01.02-.06.191-.462.191-.462l.02.623-.08.02-.1.743c.733-.171 1.656-1.436 2.359-1.436.843 0 1.145.984 2.69.482.392.582.533 1.084.684 1.777.602.562 1.435.371 1.435-.221 0-.803-.873-.954-.873-1.797 0-.372.26-.914.974-.914.381 0 .933.16 1.255.16.381 0 .462-.27.502-.39.03-.081.14-.061.13.01-.01.08.04.19.04.37 0 .533-.773.603-.863.533-.04-.03-.07.01-.04.04.12.09.09.412-.05.612-.02.02-.04.02-.04 0-.081-.381-.533-.853-.924-.853-.14 0-.432.08-.432.422 0 .472.954.913.954 1.897 0 1.024-1.014 1.275-2.038 1.014.03.974 1.486 1.547 1.516.854 0-.05.03-.02.04 0 .21.301.12.522-.16.642.25.11.3.623.37.934.111.462.593.2.623.19.03-.02.04 0 .02.031-.18.472-.672.291-.672.291-.251.18.05.342.28.412.03.01.03.03.01.05-.17.06-.531.18-.712-.13-.13.32-.402.31-.502.31-.19 0-.311.191-.271.453 0 .02-.01.03-.03.02-.442-.291-.191-.643-.01-.733-.03-.02-.342-.15-.472.21-.01.03-.03.03-.04 0-.191-.522.23-.672.532-.542-.02-.07-.181-.33-.583-.24-.02.01-.03 0-.02-.03.07-.161.261-.392.633-.161.19.12.512-.05.542-.07-.653-1.296-1.908-.212-2.199-1.226-.01-.02-.03-.04-.05.02-.07.211-.622.231-.723-.19-.01-.03 0-.04.03-.02.08.08.251.15.482-.171.15-.22.17-.512.17-.703 0-.783-.782-2.108-2.007-2.108-.773 0-1.607.301-2.23.753l.573.13a.88.88 0 0 1-1.124.773l.09-.662c-.09.03-.311.11-.432.28-.01.01-.03.01-.03-.01-.1-.38.211-.571.301-.612.01-.01.01-.01-.01-.01-.28-.01-.431.191-.482.261-.01.01-.02.01-.02 0 .03-.08-.02-.27.11-.411zm1.707 4.499c-.221.27-.412.01-.703.01-.271 0-.321.23-.321.321 0 .02-.01.02-.02.01-.312-.422.04-.652.24-.683-.03-.03-.33-.23-.522.05-.01.02-.03.01-.03-.01-.01-.521.402-.562.683-.33.05-.202-.08-.332-.301-.342-.03 0-.03-.02-.02-.03.09-.1.18-.14.27-.14.292 0 .332.37.523.37.28 0 .693-.38.723-.421-.01-.02-.281-.763-.231-1.205 0-.02-.01-.02-.02-.01-.14.08-.482.07-.482-.351 0-.03.01-.04.03-.01.15.21.402-.03.522-.171.13-.15.853-1.195 1.807-1.195.211 0 .482.12.703.271-.331.402 0 .783.241.733.03-.01.03.02.01.03-1.265.472-1.827.663-1.827 1.727 0 .553.19.864.512.783.02-.01.03 0 .01.02-.12.141-.251.191-.362.191-.26 0-.31-.14-.451-.14-.141 0-.613.28-.613.512 0 .09.06.21.221.311.01.01 0 .02 0 .02-.13 0-.502.03-.592-.321zm3.333-10.291c-.392-.02-.653.06-.633.19.181.201.442.181.633-.19zm-1.466.974c.281-.07.582-.04.623-.03.04.01.04.08-.01.09-.583.07-.613.341-.984.341-.241 0-.512-.25-.412-.612.01-.05.05-.05.06 0 .04.16.271.331.723.21zm-7.56 12.911c.381.492.753.03 1.265.03.25 0 .552.08.602.583 0 .03.02.03.05 0 .553-.753-.08-1.175-.441-1.235.08-.07.612-.402.964.09.02.03.06.02.06-.02 0-.954-.713-1.024-1.235-.612-.1-.372.18-.613.542-.613.04 0 .06-.03.04-.05-.642-.683-1.114.18-1.225.311-.25.341-1.164-.301-1.536-.683 0 0 .803-.843.803-1.616 0-.05-.01-.11-.01-.14 0-.02.01-.03.03-.02.08.05.191.08.302.08.18 0 .532-.06.532-.713 0-.05-.02-.05-.04-.02-.1.14-.201.17-.281.17-.653 0-2.008-2.168-3.615-2.168-.422 0-1.215.3-1.606.733.19.11.23.351.21.522-.03.27-.25.411-.471.472-.04.01-.04.04 0 .06.813.311 2.279.863 2.62 1.154.392.342.321.984.09 1.878-.22.853-.692.743-.873.713-.03 0-.03.01-.02.03.21.26.462.351.683.351.421 0 .582-.26.793-.26.361 0 1.134.521 1.134.923 0 .22-.17.432-.401.572-.01.01-.01.03.01.03.17.03.893.09 1.024-.552zm17.71.552c.02 0 .03-.02.01-.03-.22-.15-.4-.351-.4-.572 0-.402.762-.924 1.134-.924.22 0 .371.261.793.261.22 0 .472-.09.683-.351.02-.02.01-.04-.02-.03-.171.03-.653.14-.874-.713-.231-.894-.311-1.536.09-1.878.332-.29 1.808-.843 2.62-1.154.041-.02.041-.05 0-.06-.22-.06-.441-.201-.471-.472-.02-.171.02-.402.21-.522-.4-.432-1.194-.733-1.616-.733-1.606 0-2.962 2.168-3.614 2.168-.08 0-.19-.03-.281-.17-.02-.03-.04-.03-.04.02 0 .652.351.713.532.713.1 0 .22-.03.3-.08.021-.01.031 0 .031.02 0 .03-.01.09-.01.14 0 .773.803 1.616.803 1.616-.361.382-1.275 1.014-1.536.683-.11-.14-.582-.994-1.225-.311-.02.03-.01.05.04.05.362 0 .643.241.542.613-.522-.412-1.235-.342-1.235.612 0 .04.04.05.06.02.342-.492.884-.16.955-.09-.362.05-.984.482-.442 1.235.02.03.04.03.05 0 .06-.492.361-.583.602-.583.502 0 .874.462 1.265-.03.151.643.864.583 1.045.552zm-12.971-12.52c-.05.07-.221 0-.281-.03-.01-.01-.02 0-.01.01.04.09.2.362.441.362.11 0 .272-.06.312-.14 0 0 .943.31 1.405.43-.18.242-.29.533-.321.844-.371-.23-1.877-1.034-1.877-1.034l-.462.643c-.08.1-.452-.171-.372-.271l.351-.492c-.12-.12-.401-.05-.481-.02-.01 0-.02 0-.01-.02.05-.101.22-.392.662-.262 0-.27-.401-.18-.512-.15-.01 0-.02 0-.01-.01.11-.12.442-.382.803-.16l.161-.222-.321-.341.2-.281.231.3 1.737-2.379c.04-.06.392-.16.512-.19.01.13.03.492-.01.552l-1.707 2.4.362.12-.2.281-.423-.2zm6.094-.391c0 .22.13.542.422.442.01-.01.03 0 .02.01-.04.24-.482.461-.673.18-.18.372-.13.723.241.924.02.01.02.04 0 .06a.495.495 0 0 1-.743-.19c-.311.23-.27.732-.08.903 0 0-.864.512-1.647.15-.522-.25-.943-.572-1.616-.511.09-.944.562-1.185 1.426-1.326.692-.11.773-.431.682-.672-.23-.06-.662.15-.662.15-.08-.13.03-.26.03-.26-.04-.051-.06-.222-.06-.222.481 0 .572-.11.572-.11.09-.502-.422-.552-.813-.281-.181-.161-.151-.372-.151-.372a.222.222 0 0 1-.09-.15c0-.12.572-.442.723-.482.04-.171.24-.402.853-.342.07-.16-.05-.753-.12-.903-.02-.05.01-.07.06-.04.21.13.421.632.572.642 0 0 .683-.361.713-.341.03.02.13.783.13.783.09.11.623 0 .854.1.06.03.06.07 0 .08-.171.03-.723.272-.813.422.32.472.17 1.165.17 1.356z",fill:"#fff"}),r.createElement("path",{d:"M62.159 64.719c.602-.17.903-.482.903-1.185v-7.64l-.984-.312v-.341c.984-.17 1.868-.23 3.103-.23 2.35 0 3.474.913 3.474 2.63 0 1.536-.854 2.55-2.24 2.972l2.2 2.941c.371.502.883.874 1.445 1.055v.29c-.29.202-.682.342-1.184.342-.673 0-1.105-.261-1.667-1.104l-2.058-3.113h-.733v3.283l.984.251v.342a5.82 5.82 0 0 1-1.777.26c-.543 0-1.015-.05-1.466-.16zm2.861-4.428c1.215 0 2.209-.793 2.209-2.41 0-1.274-.813-2.007-2.149-2.007-.2 0-.472.03-.672.06v4.357zm5.813 4.468c.422-.15.824-.462.824-.843v-5.261l-.994-.422v-.331c.703-.201 1.415-.292 1.847-.292h.502l-.08.844v5.913l.873.231v.292c-.532.19-1.014.26-1.807.26-.361 0-.813-.03-1.165-.14zm.653-9.468c0-.482.341-.913.883-.913.432 0 .814.33.814.843 0 .542-.372.964-.874.964-.462-.01-.823-.382-.823-.894zm3.896 3.364-.994-.422v-.331c.713-.201 1.415-.291 1.867-.291h.502l-.09.873v6.988c0 2.55-.763 3.343-1.757 3.343-.342 0-.683-.12-.874-.371v-.251c.683 0 1.356-.783 1.356-2.37v-7.168zm-.171-3.364c0-.482.341-.913.883-.913.432 0 .814.33.814.843 0 .542-.372.964-.874.964-.462-.01-.823-.382-.823-.894zm2.982 9.468c.422-.15.843-.462.843-.843V54.89l-1.024-.422v-.341a7.503 7.503 0 0 1 1.868-.281h.532l-.09.873v6.225l.853-.743c.843-.713 1.606-1.787 1.606-2.49.281-.09.512-.12.823-.12.231 0 .422.05.623.14-.03.673-.703 1.727-2.119 2.741l-.542.392 2.4 2.911c.432.532.823.743 1.155.743v.332c-.342.23-.703.33-1.155.33-.432 0-.813-.19-1.104-.592l-2.54-3.343v3.143l.813.25v.292c-.573.19-1.024.25-1.757.25-.362 0-.814-.03-1.165-.14v-.28zm7.59-1.426c.703.653 1.366.984 2.199.984.874 0 1.325-.421 1.325-.963s-.311-.884-1.335-1.326l-.773-.331c-.904-.392-1.406-1.044-1.406-1.928 0-1.225 1.085-2.289 2.711-2.289 1.245 0 1.747.372 1.747.964 0 .23-.03.432-.08.653-.502-.342-1.185-.593-1.777-.593-.994 0-1.466.432-1.466.964 0 .562.28.873 1.215 1.225l.843.331c1.125.432 1.546 1.014 1.546 1.928 0 1.195-1.154 2.289-2.891 2.289-1.366 0-1.978-.432-1.978-1.275-.02-.21.03-.462.12-.633zm9.368-5.813c.371 0 .823.05 1.074.11v-2.74l-1.054-.422v-.341a7.791 7.791 0 0 1 1.927-.281h.503l-.09.873v8.916c.11.31.29.642.591.903-.31.281-.652.502-1.094.733a2.732 2.732 0 0 1-.743-.934c-.502.512-1.355.884-1.988.884-1.576 0-2.831-1.305-2.831-3.373-.02-2.802 1.677-4.328 3.705-4.328zm1.084 6.195v-5.15a3.863 3.863 0 0 0-1.135-.171c-1.325 0-2.319 1.044-2.319 3.203 0 1.696.884 2.61 1.868 2.61.592 0 1.235-.2 1.586-.492zm2.992 1.044c.422-.15.823-.462.823-.843v-5.261l-.994-.422v-.331c.703-.201 1.416-.292 1.858-.292h.502l-.081.844v5.913l.874.231v.292c-.532.19-1.014.26-1.807.26-.362 0-.814-.03-1.165-.14v-.25zm.653-9.468c0-.482.341-.913.883-.913.432 0 .813.33.813.843 0 .542-.371.964-.873.964-.462-.01-.823-.382-.823-.894zm6.365 2.21c1.677 0 2.691 1.124 2.691 2.91 0 .292 0 .603-.02.995h-4.589c0 1.747 1.014 2.75 2.3 2.75.763 0 1.606-.26 2.198-.672.03.08.061.251.061.402 0 .702-1.024 1.355-2.681 1.355-1.777 0-3.223-1.385-3.223-3.564.01-2.701 1.647-4.177 3.263-4.177zm1.446 3.102c0-1.527-.653-2.26-1.576-2.26-.854 0-1.758 1.024-1.758 2.26zm2.249 4.156c.401-.15.823-.462.823-.843v-5.261l-1.004-.422v-.341a7.38 7.38 0 0 1 1.868-.282h.371v.844c.532-.532 1.396-.874 2.299-.874 1.295 0 2.179.824 2.179 2.43v4.357l.813.231v.292c-.421.17-.964.26-1.636.26-.332 0-.703-.03-1.014-.14v-.25c.391-.172.562-.463.562-1.025v-2.972c0-1.526-.643-2.098-1.556-2.098-.643 0-1.255.22-1.607.482v5.23l.874.231v.292c-.532.19-1.024.26-1.808.26-.371 0-.813-.03-1.164-.14zm8.393-1.426c.703.653 1.366.984 2.199.984.874 0 1.325-.421 1.325-.963s-.311-.884-1.335-1.326l-.773-.331c-.904-.392-1.406-1.044-1.406-1.928 0-1.225 1.085-2.289 2.711-2.289 1.245 0 1.747.372 1.747.964 0 .23-.03.432-.08.653-.502-.342-1.185-.593-1.777-.593-.994 0-1.466.432-1.466.964 0 .562.281.873 1.215 1.225l.843.331c1.125.432 1.546 1.014 1.546 1.928 0 1.195-1.154 2.289-2.891 2.289-1.366 0-1.978-.432-1.978-1.275-.02-.21.03-.462.12-.633zm6.336-2.56.05-2.068h-.853v-.512l1.676-1.667.512-.06-.06 1.406h2.058l-.11.843h-1.988l-.03 1.958c-.02.652-.02 1.245-.02 1.817 0 1.265.371 1.697.953 1.697.452 0 .844-.16 1.155-.402l.161.06c-.06.914-.603 1.386-1.677 1.386-1.245 0-1.847-.653-1.847-2.169-.03-.753.01-1.576.02-2.289zm6.486-2.34-.633-.451v-.371h2.972v.371l-.883.372 1.676 4.93h.02l1.727-4.89-.883-.422v-.371h2.399v.371l-.431.361-2.772 6.868-.532.03zm10.07-.943c1.918 0 3.394 1.436 3.394 3.594 0 2.57-1.788 4.187-3.645 4.187-1.888 0-3.414-1.325-3.414-3.594.01-2.56 1.757-4.187 3.665-4.187zm-.151 6.878c1.045 0 2.129-1.014 2.129-3.143 0-1.817-.984-2.831-2.088-2.831-1.075 0-2.129 1.074-2.129 3.132 0 1.878.984 2.841 2.088 2.841zm8.273-6.878c1.918 0 3.394 1.436 3.394 3.594 0 2.57-1.787 4.187-3.645 4.187-1.887 0-3.413-1.325-3.413-3.594.01-2.56 1.757-4.187 3.664-4.187zm-.15 6.878c1.044 0 2.128-1.014 2.128-3.143 0-1.817-.984-2.831-2.088-2.831-1.074 0-2.128 1.074-2.128 3.132 0 1.878.983 2.841 2.088 2.841zm4.518.391c.402-.15.823-.462.823-.843v-5.261l-1.004-.422v-.341a7.38 7.38 0 0 1 1.868-.282h.371v1.085h.02l.432-.482c.422-.452.843-.683 1.365-.683.543 0 .814.231.814.673 0 .291-.091.642-.251.934a1.576 1.576 0 0 0-.964-.362c-.482 0-.934.221-1.366.643v4.95l1.075.23v.292c-.532.19-1.045.26-1.928.26-.452 0-.884-.03-1.245-.14v-.25zm12.61-9.83c2.29 0 4.127 1.808 4.127 4.69 0 3.584-2.199 5.662-4.689 5.662-2.289 0-4.136-1.867-4.136-4.95 0-3.253 2.269-5.401 4.698-5.401zm2.601 4.97c0-2.72-1.326-3.965-2.771-3.965-1.496 0-2.992 1.496-2.992 4.217 0 2.74 1.335 4.136 2.751 4.136 1.496 0 3.012-1.365 3.012-4.387zm2.741 4.86c.401-.15.823-.462.823-.843v-5.261l-1.004-.422v-.341a7.38 7.38 0 0 1 1.867-.282h.372v.844c.532-.532 1.396-.874 2.299-.874 1.295 0 2.179.824 2.179 2.43v4.357l.813.231v.292c-.422.17-.964.26-1.636.26-.332 0-.703-.03-1.014-.14v-.25c.391-.172.562-.463.562-1.025v-2.972c0-1.526-.643-2.098-1.556-2.098-.633 0-1.266.22-1.607.482v5.23l.874.231v.292c-.533.19-1.024.26-1.808.26-.371 0-.813-.03-1.164-.14zm11.857-7.239c.372 0 .823.05 1.074.11v-2.74l-1.054-.422v-.341a7.792 7.792 0 0 1 1.928-.281h.502l-.09.873v8.916c.11.31.291.642.592.903-.311.281-.653.502-1.084.733a2.717 2.717 0 0 1-.743-.934c-.502.512-1.356.884-1.988.884-1.577 0-2.832-1.305-2.832-3.373-.03-2.802 1.667-4.328 3.695-4.328zm1.084 6.195v-5.15a3.857 3.857 0 0 0-1.134-.171c-1.325 0-2.319 1.044-2.319 3.203 0 1.696.883 2.61 1.867 2.61.593 0 1.235-.2 1.586-.492zm6.115-6.215c1.677 0 2.691 1.125 2.691 2.912 0 .29 0 .602-.02.994h-4.589c0 1.747 1.014 2.75 2.299 2.75.764 0 1.607-.26 2.199-.672.03.08.061.251.061.402 0 .702-1.025 1.355-2.681 1.355-1.777 0-3.223-1.385-3.223-3.564.01-2.701 1.646-4.177 3.263-4.177zm1.456 3.103c0-1.527-.653-2.26-1.577-2.26-.853 0-1.757 1.024-1.757 2.26zm2.239 4.156c.401-.15.823-.462.823-.843v-5.261l-1.004-.422v-.341a7.38 7.38 0 0 1 1.867-.282h.372v1.085h.02l.432-.482c.421-.452.843-.683 1.365-.683.542 0 .813.231.813.673 0 .291-.09.642-.251.934a1.573 1.573 0 0 0-.963-.362c-.482 0-.934.221-1.366.643v4.95l1.074.23v.292c-.532.19-1.044.26-1.927.26-.452 0-.884-.03-1.245-.14v-.25zm5.502 0c.401-.15.823-.462.823-.843v-5.261l-1.014-.422v-.341a7.38 7.38 0 0 1 1.867-.282h.372v.844c.532-.532 1.396-.874 2.299-.874 1.295 0 2.179.824 2.179 2.43v4.357l.813.231v.292c-.422.17-.964.26-1.636.26-.332 0-.703-.03-1.015-.14v-.25c.392-.172.563-.463.563-1.025v-2.972c0-1.526-.643-2.098-1.556-2.098-.633 0-1.266.22-1.607.482v5.23l.874.231v.292c-.533.19-1.024.26-1.808.26-.371 0-.813-.03-1.164-.14v-.26zm11.385-7.259c1.677 0 2.691 1.125 2.691 2.912 0 .29 0 .602-.02.994h-4.588c0 1.747 1.014 2.75 2.299 2.75.763 0 1.606-.26 2.199-.672.03.08.06.251.06.402 0 .702-1.024 1.355-2.681 1.355-1.777 0-3.223-1.385-3.223-3.564.01-2.701 1.637-4.177 3.263-4.177zm1.446 3.103c0-1.527-.653-2.26-1.576-2.26-.854 0-1.757 1.024-1.757 2.26zM215 64.759c.402-.15.823-.462.823-.843v-5.261l-1.014-.422v-.341a7.38 7.38 0 0 1 1.868-.282h.371v.844c.542-.532 1.366-.874 2.289-.874.733 0 1.446.392 1.757.954.482-.482 1.527-.954 2.4-.954 1.305 0 2.159.794 2.159 2.48v4.307l.813.231v.292c-.432.17-.984.26-1.647.26-.311 0-.702-.03-.994-.14v-.25c.392-.172.563-.463.563-1.025v-3.032c0-1.416-.623-2.038-1.587-2.038-.562 0-1.094.14-1.496.361.061.331.091.763.091 1.165v4.187l.813.23v.292c-.432.17-.964.26-1.637.26-.331 0-.702-.03-1.014-.14v-.26c.392-.172.563-.463.563-1.025v-2.861c0-1.727-.512-2.21-1.476-2.21-.623 0-1.215.222-1.547.483v5.23l.874.231v.292c-.542.19-1.024.26-1.807.26-.372 0-.814-.03-1.165-.14zm15.522-7.259c1.677 0 2.691 1.125 2.691 2.912 0 .29 0 .602-.01.994h-4.588c0 1.747 1.014 2.75 2.299 2.75.763 0 1.606-.26 2.199-.672.03.08.06.251.06.402 0 .702-1.024 1.355-2.681 1.355-1.777 0-3.223-1.385-3.223-3.564 0-2.701 1.637-4.177 3.253-4.177zm1.446 3.103c0-1.527-.653-2.26-1.576-2.26-.854 0-1.757 1.024-1.757 2.26zm2.249 4.156c.402-.15.823-.462.823-.843v-5.261l-1.014-.422v-.341a7.38 7.38 0 0 1 1.868-.282h.371v.844c.532-.532 1.396-.874 2.299-.874 1.296 0 2.179.824 2.179 2.43v4.357l.813.231v.292c-.421.17-.964.26-1.636.26-.332 0-.703-.03-1.014-.14v-.25c.391-.172.562-.463.562-1.025v-2.972c0-1.526-.643-2.098-1.556-2.098-.643 0-1.255.22-1.607.482v5.23l.874.231v.292c-.532.19-1.024.26-1.807.26-.372 0-.814-.03-1.165-.14v-.26zm11.847-7.239c.372 0 .824.05 1.075.11v-2.74l-1.055-.422v-.341a7.792 7.792 0 0 1 1.928-.281h.502l-.09.873v8.916c.11.31.291.642.592.903-.311.281-.652.502-1.084.733a2.729 2.729 0 0 1-.743-.934c-.502.512-1.356.884-1.988.884-1.576 0-2.831-1.305-2.831-3.373-.021-2.802 1.676-4.328 3.694-4.328zm1.095 6.195v-5.15a3.864 3.864 0 0 0-1.135-.171c-1.325 0-2.319 1.044-2.319 3.203 0 1.696.883 2.61 1.867 2.61.593 0 1.225-.2 1.587-.492zm-185 18.675c.682-.191.903-.532.903-1.366v-7.49l-.984-.26v-.453c.593-.08 1.215-.11 1.717-.11h.572l4.328 7.108.03-.02v-6.305l-.994-.251v-.331a5.162 5.162 0 0 1 1.556-.261c.623 0 .904.05 1.305.17v.282c-.682.22-.883.502-.883 1.465v8.153l-.733.17-4.92-8.112-.02.02v7.189l.954.251v.341c-.452.171-.904.261-1.416.261-.622 0-1.044-.05-1.415-.16zm12.59-7.22c1.677 0 2.69 1.125 2.69 2.912 0 .292 0 .603-.01.994h-4.588c0 1.747 1.014 2.751 2.3 2.751.763 0 1.606-.26 2.198-.672.03.08.06.25.06.401 0 .703-1.023 1.356-2.68 1.356-1.777 0-3.223-1.386-3.223-3.564 0-2.701 1.637-4.177 3.253-4.177zm1.446 3.103c0-1.526-.653-2.259-1.577-2.259-.853 0-1.757 1.024-1.757 2.26zm5.994-3.082c.371 0 .823.05 1.074.11v-2.74l-1.054-.422v-.342a7.791 7.791 0 0 1 1.928-.28h.502l-.09.873v8.915c.11.311.29.643.592.904-.312.281-.653.502-1.095.733a2.733 2.733 0 0 1-.743-.934c-.502.512-1.355.884-1.988.884-1.576 0-2.831-1.306-2.831-3.374-.01-2.801 1.687-4.327 3.705-4.327zm1.094 6.195v-5.151a3.86 3.86 0 0 0-1.134-.17c-1.326 0-2.32 1.044-2.32 3.202 0 1.697.884 2.62 1.868 2.62.592-.01 1.225-.21 1.586-.501zm6.115-6.215c1.676 0 2.69 1.124 2.69 2.911 0 .292 0 .603-.01.994H87.49c0 1.747 1.014 2.751 2.3 2.751.762 0 1.606-.26 2.198-.672.03.08.06.25.06.401 0 .703-1.024 1.356-2.68 1.356-1.778 0-3.223-1.386-3.223-3.564 0-2.701 1.636-4.177 3.253-4.177zm1.445 3.102c0-1.526-.652-2.259-1.576-2.259-.853 0-1.757 1.024-1.757 2.26zm2.25 4.157c.401-.16.823-.462.823-.844v-5.26l-1.014-.422v-.342a7.376 7.376 0 0 1 1.867-.28h.372v1.094h.01l.431-.482c.422-.452.844-.683 1.366-.683.542 0 .813.23.813.673 0 .29-.09.642-.25.933-.292-.23-.644-.361-.965-.361-.482 0-.934.22-1.365.643v4.95l1.074.23v.291c-.532.191-1.044.261-1.928.261-.451 0-.883-.03-1.245-.14v-.261zm4.98 0c.401-.16.823-.462.823-.844V72.56l-1.014-.421v-.342a7.44 7.44 0 0 1 1.867-.28h.502l-.08.873v9.648l.873.231v.291c-.532.191-1.024.261-1.807.261-.371 0-.813-.03-1.165-.14zm7.821-3.775v-.422c0-1.677-.402-2.038-1.386-2.038-.853 0-1.677.361-2.339 1.014-.03-.16-.05-.291-.05-.462 0-.994.732-1.576 2.55-1.576 1.576 0 2.51.793 2.51 2.088 0 .342-.05 1.125-.06 1.576l-.051 2.52c.111.282.342.573.623.794-.231.28-.653.592-1.054.793a2.077 2.077 0 0 1-.713-.763c-.432.421-1.275.743-2.099.743-1.164 0-1.978-.733-1.978-1.727 0-1.366 1.496-2.54 4.047-2.54zm-1.486 3.333c.482 0 1.104-.19 1.496-.422v-2.178c-1.757 0-2.711.732-2.711 1.576 0 .622.422 1.024 1.215 1.024zm4.377.442c.402-.16.823-.462.823-.844v-5.26l-1.014-.422v-.342a7.38 7.38 0 0 1 1.868-.28h.371v.843c.533-.533 1.396-.874 2.3-.874 1.295 0 2.178.823 2.178 2.43v4.357l.814.231v.291c-.422.171-.964.261-1.637.261-.331 0-.703-.03-1.014-.14v-.251c.392-.17.562-.462.562-1.024v-2.972c0-1.526-.642-2.099-1.556-2.099-.643 0-1.255.221-1.606.482v5.231l.873.231v.291c-.532.191-1.024.261-1.807.261-.372 0-.813-.03-1.165-.14v-.261zm11.848-7.24c.371 0 .823.051 1.074.111v-2.74l-1.054-.422v-.342a7.792 7.792 0 0 1 1.927-.28h.502l-.09.873v8.915c.11.311.291.643.592.904-.311.281-.652.502-1.094.733a2.74 2.74 0 0 1-.743-.934c-.502.512-1.355.884-1.988.884-1.576 0-2.831-1.306-2.831-3.374-.01-2.801 1.687-4.327 3.705-4.327zm1.094 6.196v-5.151a3.86 3.86 0 0 0-1.135-.17c-1.325 0-2.319 1.044-2.319 3.202 0 1.697.884 2.62 1.868 2.62.592-.01 1.225-.21 1.586-.501z",fill:"#000"}))))};var o=t(4517);const m={title:"Rijksdienst voor Ondernemend Nederland"};var i=t(1250);const s=e=>{let{className:c=m.className,title:t=m.title,subtitle:r=m.subtitle}=e;return(0,i.jsx)("img",{src:n,alt:`${t||""} ${r||""}`,className:(0,o.Z)("rvo-logo-img",c)})},h=s}}]);