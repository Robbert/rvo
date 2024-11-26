/*! For license information please see status-indicator-status-indicator-docpage-mdx.f0a7c53c.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[4238,4864],{"../../node_modules/.pnpm/@babel+runtime@7.24.0/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{A:()=>_extends})},"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../components/status-indicator/status-indicator.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _src_defaultArgs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/status-indicator/src/defaultArgs.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Componenten/Status indicator",component:__webpack_require__("../../components/status-indicator/src/template.tsx").kx,args:_src_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,parameters:{status:{type:"PRODUCTION"},docusaurus:{link:"status-indicator"}}},Default={args:_src_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,name:"Status indicator"};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: defaultArgs,\n  name: 'Status indicator'\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../components/status-indicator/status-indicator.docpage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>status_indicator_docpage});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.17_@types+react-dom@18.0.9_@types+react@18.3.7_encoding@0.1.13_react-do_4nm7brhu3gpfd2ti3glhuuidgm/node_modules/@storybook/blocks/dist/index.mjs");var status_indicator_stories=__webpack_require__("../../components/status-indicator/status-indicator.stories.tsx"),storybook_blocks=__webpack_require__("./config/storybook-blocks.tsx");function _createMdxContent(props){const _components=Object.assign({h2:"h2"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:status_indicator_stories,name:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(dist.hE,{}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:status_indicator_stories.Default,layout:"padded"}),"\n",(0,jsx_runtime.jsx)(dist.H2,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"documentatie",children:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(storybook_blocks.bE,{markdown:"Documentation for status indicator\n"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"changelog",children:"Changelog"}),"\n",(0,jsx_runtime.jsx)(storybook_blocks.Lz,{markdown:"# `@nl-rvo/css-status-indicator`\n\n## 1.2.0\n\n### Minor Changes\n\n- 0cdf4eb: Remove utrecht-components-css reference and include utrecht css per component when needed\n\n## 1.0.0\n\n### Major Changes\n\n- daa0537: Create npm package for each component.\n\n## Pre-releases\n\n_@nl-rvo/component-library-css@1.0.0-alpha.361_:\nAdded component\n"})]})}const status_indicator_docpage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../components/status-indicator/src/defaultArgs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>defaultArgs});__webpack_require__("../../components/status-indicator/src/template.tsx");const defaultArgs={color:"groen"}},"../../components/status-indicator/src/template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{kx:()=>StatusIndicator,Ay:()=>src_template});var clsx=__webpack_require__("../../node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs"),defaultArgs=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../components/status-indicator/src/defaultArgs.ts")),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_@swc+core@1.9.3_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_@swc+core@1.9.3_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_@swc+core@1.9.3_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_@swc+core@1.9.3_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_@swc+core@1.9.3_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_@swc+core@1.9.3_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),src=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_@rspack+core@1.1.4_@swc+helpers@0.5.13__webpack@5.96.1_@swc+core@1.9.3_@swc_7t6qq7k4ol4nw36vowh5e5ue74/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@16.0.3_@rspack+core@1.1.4_@swc+helpers@0.5.13__sass-embedded@1.81.0_sass@1.81.0_w_ijwti3wlbjbyf3zrxszcgoktp4/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[8].use[2]!../../components/status-indicator/src/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(src.A,options);src.A&&src.A.locals&&src.A.locals;var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const StatusIndicator=({color=defaultArgs.D.color})=>(0,jsx_runtime.jsx)("div",{className:(0,clsx.A)("rvo-status-indicator",`rvo-status-indicator--${color}`)});StatusIndicator.displayName="StatusIndicator";const src_template=StatusIndicator;try{StatusIndicator.displayName="StatusIndicator",StatusIndicator.__docgenInfo={description:"",displayName:"StatusIndicator",props:{color:{defaultValue:{value:"defaultArgs.color"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"hemelblauw"'},{value:'"groen"'},{value:'"groen-300"'},{value:'"oranje"'},{value:'"oranje-300"'},{value:'"rood"'},{value:'"rood-300"'},{value:'"hemelblauw-300"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/status-indicator/src/template.tsx#StatusIndicator"]={docgenInfo:StatusIndicator.__docgenInfo,name:"StatusIndicator",path:"../../components/status-indicator/src/template.tsx#StatusIndicator"})}catch(__react_docgen_typescript_loader_error){}try{template.displayName="template",template.__docgenInfo={description:"",displayName:"template",props:{color:{defaultValue:{value:"defaultArgs.color"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"hemelblauw"'},{value:'"groen"'},{value:'"groen-300"'},{value:'"oranje"'},{value:'"oranje-300"'},{value:'"rood"'},{value:'"rood-300"'},{value:'"hemelblauw-300"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/status-indicator/src/template.tsx#template"]={docgenInfo:template.__docgenInfo,name:"template",path:"../../components/status-indicator/src/template.tsx#template"})}catch(__react_docgen_typescript_loader_error){}},"./config/storybook-blocks.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Lz:()=>Changelog,bE:()=>Readme});var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.17_@types+react-dom@18.0.9_@types+react@18.3.7_encoding@0.1.13_react-do_4nm7brhu3gpfd2ti3glhuuidgm/node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const headingElement=level=>2===level?"h2":3===level?"h3":4===level?"h4":5===level?"h5":6===level?"h6":"h1",MarkdownBlock=({markdown,omitH1=!1,headingLevel=1})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.oz,{options:{overrides:{h1:{component:omitH1?()=>null:headingElement(headingLevel)},h2:{component:headingElement(headingLevel+1)},h3:{component:headingElement(headingLevel+2)},h4:{component:headingElement(headingLevel+3)},h5:{component:headingElement(headingLevel+4)},h6:{component:headingElement(headingLevel+5)}}},children:markdown});MarkdownBlock.displayName="MarkdownBlock";const Changelog=({markdown})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MarkdownBlock,{omitH1:!0,headingLevel:2,markdown});Changelog.displayName="Changelog";const Readme=({markdown})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MarkdownBlock,{omitH1:!0,markdown});Readme.displayName="Readme";try{headingElement.displayName="headingElement",headingElement.__docgenInfo={description:"",displayName:"headingElement",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#headingElement"]={docgenInfo:headingElement.__docgenInfo,name:"headingElement",path:"config/storybook-blocks.tsx#headingElement"})}catch(__react_docgen_typescript_loader_error){}try{MarkdownBlock.displayName="MarkdownBlock",MarkdownBlock.__docgenInfo={description:"",displayName:"MarkdownBlock",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"any"}},omitH1:{defaultValue:{value:"false"},description:"",name:"omitH1",required:!1,type:{name:"boolean"}},headingLevel:{defaultValue:{value:"1"},description:"",name:"headingLevel",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#MarkdownBlock"]={docgenInfo:MarkdownBlock.__docgenInfo,name:"MarkdownBlock",path:"config/storybook-blocks.tsx#MarkdownBlock"})}catch(__react_docgen_typescript_loader_error){}try{Changelog.displayName="Changelog",Changelog.__docgenInfo={description:"",displayName:"Changelog",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#Changelog"]={docgenInfo:Changelog.__docgenInfo,name:"Changelog",path:"config/storybook-blocks.tsx#Changelog"})}catch(__react_docgen_typescript_loader_error){}try{Readme.displayName="Readme",Readme.__docgenInfo={description:"",displayName:"Readme",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#Readme"]={docgenInfo:Readme.__docgenInfo,name:"Readme",path:"config/storybook-blocks.tsx#Readme"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"../../node_modules/.pnpm/css-loader@6.10.0_@rspack+core@1.1.4_@swc+helpers@0.5.13__webpack@5.96.1_@swc+core@1.9.3_@swc_7t6qq7k4ol4nw36vowh5e5ue74/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@16.0.3_@rspack+core@1.1.4_@swc+helpers@0.5.13__sass-embedded@1.81.0_sass@1.81.0_w_ijwti3wlbjbyf3zrxszcgoktp4/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[8].use[2]!../../components/status-indicator/src/index.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_10_0_rspack_core_1_1_4_swc_helpers_0_5_13_webpack_5_96_1_swc_core_1_9_3_swc_7t6qq7k4ol4nw36vowh5e5ue74_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_@rspack+core@1.1.4_@swc+helpers@0.5.13__webpack@5.96.1_@swc+core@1.9.3_@swc_7t6qq7k4ol4nw36vowh5e5ue74/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_10_0_rspack_core_1_1_4_swc_helpers_0_5_13_webpack_5_96_1_swc_core_1_9_3_swc_7t6qq7k4ol4nw36vowh5e5ue74_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_rspack_core_1_1_4_swc_helpers_0_5_13_webpack_5_96_1_swc_core_1_9_3_swc_7t6qq7k4ol4nw36vowh5e5ue74_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_10_0_rspack_core_1_1_4_swc_helpers_0_5_13_webpack_5_96_1_swc_core_1_9_3_swc_7t6qq7k4ol4nw36vowh5e5ue74_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_@rspack+core@1.1.4_@swc+helpers@0.5.13__webpack@5.96.1_@swc+core@1.9.3_@swc_7t6qq7k4ol4nw36vowh5e5ue74/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_rspack_core_1_1_4_swc_helpers_0_5_13_webpack_5_96_1_swc_core_1_9_3_swc_7t6qq7k4ol4nw36vowh5e5ue74_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_10_0_rspack_core_1_1_4_swc_helpers_0_5_13_webpack_5_96_1_swc_core_1_9_3_swc_7t6qq7k4ol4nw36vowh5e5ue74_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".rvo-status-indicator{border-radius:var(--rvo-status-indicator-border-radius);height:var(--rvo-status-indicator-height);min-width:3px;width:var(--rvo-status-indicator-width)}.rvo-status-indicator--groen{background-color:var(--rvo-color-groen)}.rvo-status-indicator--groen-300{background-color:var(--rvo-color-groen-300)}.rvo-status-indicator--oranje{background-color:var(--rvo-color-oranje)}.rvo-status-indicator--oranje-300{background-color:var(--rvo-color-oranje-300)}.rvo-status-indicator--rood{background-color:var(--rvo-color-rood)}.rvo-status-indicator--rood-300{background-color:var(--rvo-color-rood-300)}.rvo-status-indicator--hemelblauw{background-color:var(--rvo-color-hemelblauw)}.rvo-status-indicator--hemelblauw-300{background-color:var(--rvo-color-hemelblauw-300)}","",{version:3,sources:["webpack://./../../components/status-indicator/src/index.scss"],names:[],mappings:"AAKA,sBACE,uDAAA,CACA,yCAAA,CACA,aAAA,CACA,uCAAA,CAGF,6BACE,uCAAA,CAGF,iCACE,2CAAA,CAGF,8BACE,wCAAA,CAGF,kCACE,4CAAA,CAGF,4BACE,sCAAA,CAGF,gCACE,0CAAA,CAGF,kCACE,4CAAA,CAGF,sCACE,gDAAA",sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);