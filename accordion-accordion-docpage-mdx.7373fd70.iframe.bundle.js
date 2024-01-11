/*! For license information please see accordion-accordion-docpage-mdx.7373fd70.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[4458,1928],{"../../node_modules/.pnpm/@babel+runtime@7.20.6/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../components/accordion/accordion.docpage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>accordion_docpage});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs");var accordion_stories=__webpack_require__("../../components/accordion/accordion.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h2:"h2"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:accordion_stories,name:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(dist.Dx,{}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:accordion_stories.Default,layout:"padded"}),"\n",(0,jsx_runtime.jsx)(dist.ZX,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"documentatie",children:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:"Documentation for accordion\n"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"changelog",children:"Changelog"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:"*@nl-rvo/component-library-css@1.0.0-alpha.362*:\nAdded condensed version for mobile\n\n*@nl-rvo/component-library-css@1.0.0-alpha.279*:\nSimplified snippet by removing `rvo-layout` and `rvo-accordion-border-indicator`\n\n*@nl-rvo/component-library-css@1.0.0-alpha.268*:\nAdded component\n"})]})}const accordion_docpage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../components/accordion/defaultArgs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>defaultArgs});__webpack_require__("../../components/accordion/template.tsx");const defaultArgs={items:[{title:"Accordion item 1",teaser:"Teaser for accordion item 1",content:"Item content"},{title:"Accordion item 2",teaser:"Teaser for accordion item 2",content:"Item content"},{title:"Accordion item 3",teaser:"Teaser for accordion item 3",content:"Item content"},{title:"Accordion item 4",teaser:"Teaser for accordion item 4",content:"Item content"},{title:"Accordion item 5",teaser:"Teaser for accordion item 5",content:"Item content"}],grijs:!1}},"../../components/accordion/template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{UQ:()=>Accordion,PG:()=>argTypes});var injectStylesIntoStyleTag=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.75.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.75.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),accordion=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.4_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.2.2_sass@1.56.2_webpack@5.75.0/node_modules/sass-loader/dist/cjs.js!../../components/accordion/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(accordion.Z,options);accordion.Z&&accordion.Z.locals&&accordion.Z.locals;var clsx_m=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),accordion_item_template=__webpack_require__("../../components/accordion-item/template.tsx"),defaultArgs=__webpack_require__("../../components/accordion/defaultArgs.ts"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const argTypes={items:{control:"object"},grijs:{control:"boolean"}},Accordion=({items=defaultArgs._.items,grijs=defaultArgs._.grijs,children})=>(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.Z)("rvo-accordion",grijs&&"rvo-accordion--grijs"),children:children&&react.Children.map(children,((child,index)=>(0,jsx_runtime.jsx)(accordion_item_template.Qd,{...child.props},index)))||items.map(((itemProps,index)=>(0,jsx_runtime.jsx)(accordion_item_template.Qd,{...itemProps},index)))});Accordion.displayName="Accordion";try{Accordion.displayName="Accordion",Accordion.__docgenInfo={description:"",displayName:"Accordion",props:{items:{defaultValue:{value:"defaultArgs.items"},description:"@uxpinignoreprop",name:"items",required:!1,type:{name:"IAccordionItemProps[]"}},grijs:{defaultValue:{value:"defaultArgs.grijs"},description:"",name:"grijs",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/accordion/template.tsx#Accordion"]={docgenInfo:Accordion.__docgenInfo,name:"Accordion",path:"../../components/accordion/template.tsx#Accordion"})}catch(__react_docgen_typescript_loader_error){}try{template.displayName="template",template.__docgenInfo={description:"",displayName:"template",props:{items:{defaultValue:{value:"defaultArgs.items"},description:"@uxpinignoreprop",name:"items",required:!1,type:{name:"IAccordionItemProps[]"}},grijs:{defaultValue:{value:"defaultArgs.grijs"},description:"",name:"grijs",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/accordion/template.tsx#template"]={docgenInfo:template.__docgenInfo,name:"template",path:"../../components/accordion/template.tsx#template"})}catch(__react_docgen_typescript_loader_error){}},"../../components/utils/parseContentMarkup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _validateHTML__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../components/utils/validateHTML.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(content,props)=>"string"==typeof content&&content.length&&(0,_validateHTML__WEBPACK_IMPORTED_MODULE_2__.Z)(content)?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{...props,dangerouslySetInnerHTML:{__html:content}}):props?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{...props,children:content}):content},"../../components/utils/validateHTML.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=htmlString=>{if("undefined"!=typeof window){let htmlStringToParse=htmlString;/<[a-z][\s\S]*>/i.test(htmlString)&&(htmlStringToParse=`<div>${htmlString}</div>`);return null===(new DOMParser).parseFromString(htmlStringToParse,"application/xml").querySelector("parsererror")}return!0}},"../../components/accordion/accordion.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _defaultArgs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/accordion/defaultArgs.ts"),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/accordion/template.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Componenten/Accordion",component:_template__WEBPACK_IMPORTED_MODULE_1__.UQ,args:_defaultArgs__WEBPACK_IMPORTED_MODULE_0__._,argTypes:_template__WEBPACK_IMPORTED_MODULE_1__.PG,parameters:{status:{type:"WORK IN PROGRESS"},docusaurus:{link:"accordion"}}},Default={args:_defaultArgs__WEBPACK_IMPORTED_MODULE_0__._,name:"Accordion"};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: defaultArgs,\n  name: 'Accordion'\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"../../node_modules/.pnpm/css-loader@6.7.4_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.2.2_sass@1.56.2_webpack@5.75.0/node_modules/sass-loader/dist/cjs.js!../../components/accordion/index.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_7_4_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.4_webpack@5.75.0/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_7_4_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_4_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_7_4_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.4_webpack@5.75.0/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_4_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_7_4_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".rvo-accordion .rvo-accordion__item[open]{border-left-color:var(--rvo-accordion-border-color)}.rvo-accordion .rvo-accordion__item{border-bottom-color:var(--rvo-accordion-border-color);border-left:6px solid rgba(0,0,0,0)}.rvo-accordion .rvo-accordion__item:first-child{border-top:1px solid var(--rvo-accordion-border-color)}.rvo-accordion--grijs .rvo-accordion__item{background-color:var(--rvo-accordion-grijs-background-color)}","",{version:3,sources:["webpack://./../../components/accordion/index.scss"],names:[],mappings:"AAKA,0CACE,mDAAA,CAGF,oCACE,qDAAA,CACA,mCAAA,CAGF,gDACE,sDAAA,CAGF,2CACE,4DAAA",sourcesContent:["/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Community for NL Design System\n */\n\n.rvo-accordion .rvo-accordion__item[open] {\n  border-left-color: var(--rvo-accordion-border-color);\n}\n\n.rvo-accordion .rvo-accordion__item {\n  border-bottom-color: var(--rvo-accordion-border-color);\n  border-left: 6px solid transparent;\n}\n\n.rvo-accordion .rvo-accordion__item:first-child {\n  border-top: 1px solid var(--rvo-accordion-border-color);\n}\n\n.rvo-accordion--grijs .rvo-accordion__item {\n  background-color: var(--rvo-accordion-grijs-background-color);\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);