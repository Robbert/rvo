/*! For license information please see icon-icon-overview-docpage-mdx.81304541.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[6762],{"../../node_modules/.pnpm/@babel+runtime@7.20.6/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../components/icon/icon.overview.docpage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>icon_overview_docpage});var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),icons=__webpack_require__("../../proprietary/assets/icons/index.js"),template=__webpack_require__("../../components/icon/template.tsx");const IconOverview=()=>(0,jsx_runtime.jsxs)("div",{style:{marginBlockStart:"2em",marginBlockEnd:"4em"},children:[(0,jsx_runtime.jsxs)("div",{style:{position:"sticky",top:0,display:"flex",gap:"1em",zIndex:10,paddingBlockStart:"1em",paddingBlockEnd:"1em",background:"white"},children:[(0,jsx_runtime.jsx)("label",{htmlFor:"categories",children:"Ga direct naar categorie:"}),(0,jsx_runtime.jsx)("select",{name:"categories",id:"categories",onChange:event=>{document.getElementById(event.target.value).scrollIntoView()},children:Object.keys(icons.Z).map((categoryName=>(0,jsx_runtime.jsx)("option",{value:categoryName,children:(0,template.iF)(categoryName)},categoryName)))})]}),(0,jsx_runtime.jsx)("span",{children:"Je kunt iconen downloaden door erop te klikken."}),Object.entries(icons.Z).map((([categoryName,categoryIcons])=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("h2",{id:categoryName,style:{paddingBlockStart:"55px"},children:(0,template.iF)(categoryName)}),(0,jsx_runtime.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",fontSize:"0.6em",rowGap:"1.2em",overflowWrap:"anywhere",alignItems:"center",justifyContent:"center"},children:Object.keys(categoryIcons).map((iconName=>{const parsedIconName=iconName.replace(/_/g,"-").toLowerCase(),iconDownloadURL=`static/icons/${categoryName.replace(/_/g,"-").toLowerCase()}/${parsedIconName}.svg`;return(0,jsx_runtime.jsxs)("a",{download:`${parsedIconName}.svg`,href:iconDownloadURL,title:parsedIconName,style:{display:"flex",flexDirection:"column",alignItems:"center",textDecoration:"none",color:"var(--utrecht-icon-color)"},children:[(0,jsx_runtime.jsx)(template.JO,{icon:parsedIconName,size:"3xl",color:template.Ax[0]}),(0,jsx_runtime.jsx)("span",{children:parsedIconName})]},`${categoryName}-${parsedIconName}`)}))})]},categoryName)))]});IconOverview.displayName="IconOverview";try{IconOverview.displayName="IconOverview",IconOverview.__docgenInfo={description:"",displayName:"IconOverview",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/icon/IconOverview.tsx#IconOverview"]={docgenInfo:IconOverview.__docgenInfo,name:"IconOverview",path:"../../components/icon/IconOverview.tsx#IconOverview"})}catch(__react_docgen_typescript_loader_error){}function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Componenten/Icon/Icon Overview"}),"\n",(0,jsx_runtime.jsx)(IconOverview,{})]})}const icon_overview_docpage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent()}},"../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);