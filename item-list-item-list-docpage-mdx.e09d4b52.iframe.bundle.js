/*! For license information please see item-list-item-list-docpage-mdx.e09d4b52.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[7308,5728],{"../../node_modules/.pnpm/@babel+runtime@7.20.6/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../components/item-list/item-list.docpage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>item_list_docpage});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs");var item_list_stories=__webpack_require__("../../components/item-list/item-list.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h2:"h2"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:item_list_stories,name:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(dist.Dx,{}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:item_list_stories.Default,layout:"padded"}),"\n",(0,jsx_runtime.jsx)(dist.ZX,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"documentatie",children:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:"Documentation for item list\n"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"changelog",children:"Changelog"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:"*@nl-rvo/component-library-css@1.0.0-alpha.363*:\nAdded item-list component\n"})]})}const item_list_docpage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../components/item-list/defaultArgs.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>defaultArgs});__webpack_require__("../../components/item-list/template.tsx");const defaultArgs={items:["List item","List item","List item"]}},"../../components/item-list/template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{sr:()=>ItemList});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var defaultArgs=__webpack_require__("../../components/item-list/defaultArgs.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.75.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.75.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),item_list=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.4_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.2.2_sass@1.56.2_webpack@5.75.0/node_modules/sass-loader/dist/cjs.js!../../components/item-list/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(item_list.Z,options);item_list.Z&&item_list.Z.locals&&item_list.Z.locals;var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const ItemList=({items=defaultArgs._.items})=>(0,jsx_runtime.jsx)("div",{className:"rvo-item-list",children:items.map(((itemContent,index)=>(0,jsx_runtime.jsx)("div",{className:"rvo-item-list__item",children:itemContent},index)))});ItemList.displayName="ItemList";try{ItemList.displayName="ItemList",ItemList.__docgenInfo={description:"",displayName:"ItemList",props:{items:{defaultValue:{value:"defaultArgs.items"},description:"",name:"items",required:!1,type:{name:"string[] | Element[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/item-list/template.tsx#ItemList"]={docgenInfo:ItemList.__docgenInfo,name:"ItemList",path:"../../components/item-list/template.tsx#ItemList"})}catch(__react_docgen_typescript_loader_error){}try{template.displayName="template",template.__docgenInfo={description:"",displayName:"template",props:{items:{defaultValue:{value:"defaultArgs.items"},description:"",name:"items",required:!1,type:{name:"string[] | Element[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/item-list/template.tsx#template"]={docgenInfo:template.__docgenInfo,name:"template",path:"../../components/item-list/template.tsx#template"})}catch(__react_docgen_typescript_loader_error){}},"../../components/item-list/item-list.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _defaultArgs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/item-list/defaultArgs.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Componenten/Item list",component:__webpack_require__("../../components/item-list/template.tsx").sr,args:_defaultArgs__WEBPACK_IMPORTED_MODULE_0__._,parameters:{status:{type:"WORK IN PROGRESS"},docusaurus:{link:"item-list"}}},Default={args:_defaultArgs__WEBPACK_IMPORTED_MODULE_0__._,name:"Item list"};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: defaultArgs,\n  name: 'Item list'\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../node_modules/.pnpm/css-loader@6.7.4_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.2.2_sass@1.56.2_webpack@5.75.0/node_modules/sass-loader/dist/cjs.js!../../components/item-list/index.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_7_4_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.4_webpack@5.75.0/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_7_4_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_4_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_7_4_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.4_webpack@5.75.0/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_4_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_7_4_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".rvo-item-list__item{align-items:center;border-bottom:var(--rvo-item-list-border-width) var(--rvo-item-list-border-style) var(--rvo-item-list-border-color);display:flex;gap:var(--rvo-item-list-gap);justify-content:space-between;padding-block-end:var(--rvo-item-list-padding-block-end);padding-block-start:var(--rvo-item-list-padding-block-start);width:100%}","",{version:3,sources:["webpack://./../../components/item-list/index.scss"],names:[],mappings:"AAAA,qBACE,kBAAA,CACA,mHAAA,CACA,YAAA,CACA,4BAAA,CACA,6BAAA,CACA,wDAAA,CACA,4DAAA,CACA,UAAA",sourcesContent:[".rvo-item-list__item {\n  align-items: center;\n  border-bottom: var(--rvo-item-list-border-width) var(--rvo-item-list-border-style) var(--rvo-item-list-border-color);\n  display: flex;\n  gap: var(--rvo-item-list-gap);\n  justify-content: space-between;\n  padding-block-end: var(--rvo-item-list-padding-block-end);\n  padding-block-start: var(--rvo-item-list-padding-block-start);\n  width: 100%;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);