/*! For license information please see header-header-docpage-mdx.a2eb5f16.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[2557,1408],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../components/header/header.docpage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>header_docpage});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.14_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs");var header_stories=__webpack_require__("../../components/header/header.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p",em:"em"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:header_stories,name:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(dist.Dx,{}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:header_stories.Default,layout:"padded"}),"\n",(0,jsx_runtime.jsx)(dist.ZX,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"documentatie",children:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:"Documentatie voor header\n"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"changelog",children:"Changelog"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:"*@nl-rvo/component-library-css@1.0.0-alpha.10*:\nAdded component"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.em,{children:"@nl-rvo/assets/images"})})]})}const header_docpage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../components/header/defaultArgs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>defaultArgs});var _logo_defaultArgs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/logo/defaultArgs.ts");__webpack_require__("../../components/header/template.tsx");const defaultArgs={title:_logo_defaultArgs__WEBPACK_IMPORTED_MODULE_0__._.title,subtitle:_logo_defaultArgs__WEBPACK_IMPORTED_MODULE_0__._.subtitle,link:""}},"../../components/header/template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h4:()=>Header});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var logo_template=__webpack_require__("../../components/logo/template.tsx"),defaultArgs=__webpack_require__("../../components/header/defaultArgs.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),header=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.2.0_sass@1.56.2_webpack@5.75.0/node_modules/sass-loader/dist/cjs.js!../../components/header/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(header.Z,options);header.Z&&header.Z.locals&&header.Z.locals;var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Header=({link=defaultArgs._.link,title=defaultArgs._.title,subtitle=defaultArgs._.subtitle})=>(0,jsx_runtime.jsx)("header",{className:"rvo-header",children:(0,jsx_runtime.jsx)("div",{className:"rvo-header__logo-wrapper",children:link?(0,jsx_runtime.jsx)("a",{href:link,className:"rvo-header__logo-link",children:(0,jsx_runtime.jsx)(logo_template.T,{className:"rvo-header__logo-img",title,subtitle})}):(0,jsx_runtime.jsx)(logo_template.T,{className:"rvo-header__logo-img",title,subtitle})})});Header.displayName="Header";try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:{value:"defaultArgs.title"},description:"",name:"title",required:!1,type:{name:"string"}},subtitle:{defaultValue:{value:"defaultArgs.subtitle"},description:"",name:"subtitle",required:!1,type:{name:"string"}},link:{defaultValue:{value:"defaultArgs.link"},description:"",name:"link",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/header/template.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"../../components/header/template.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}try{template.displayName="template",template.__docgenInfo={description:"",displayName:"template",props:{title:{defaultValue:{value:"defaultArgs.title"},description:"",name:"title",required:!1,type:{name:"string"}},subtitle:{defaultValue:{value:"defaultArgs.subtitle"},description:"",name:"subtitle",required:!1,type:{name:"string"}},link:{defaultValue:{value:"defaultArgs.link"},description:"",name:"link",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/header/template.tsx#template"]={docgenInfo:template.__docgenInfo,name:"template",path:"../../components/header/template.tsx#template"})}catch(__react_docgen_typescript_loader_error){}},"../../components/logo/defaultArgs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>defaultArgs});__webpack_require__("../../components/logo/template.tsx");const defaultArgs={title:"Rijksdienst voor Ondernemend Nederland",subtitle:""}},"../../components/logo/template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>Logo});const emblem_namespaceObject=__webpack_require__.p+"static/images/emblem.svg";var clsx_m=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),defaultArgs=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../components/logo/defaultArgs.ts")),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),logo=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.2.0_sass@1.56.2_webpack@5.75.0/node_modules/sass-loader/dist/cjs.js!../../components/logo/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(logo.Z,options);logo.Z&&logo.Z.locals&&logo.Z.locals;var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Logo=({title=defaultArgs._.title,subtitle=defaultArgs._.subtitle,className=defaultArgs._.className})=>(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.Z)("rvo-logo",className),children:[(0,jsx_runtime.jsx)("div",{className:"rvo-logo__emblem",children:(0,jsx_runtime.jsx)("img",{src:emblem_namespaceObject,alt:`${title||""}${subtitle.length?`, ${subtitle}`:""}`})}),(0,jsx_runtime.jsxs)("div",{className:"rvo-logo__wordmark",children:[(0,jsx_runtime.jsx)("p",{className:"rvo-logo__title",children:title}),subtitle&&(0,jsx_runtime.jsx)("p",{className:"rvo-logo__subtitle",children:subtitle})]})]});Logo.displayName="Logo";try{Logo.displayName="Logo",Logo.__docgenInfo={description:"",displayName:"Logo",props:{title:{defaultValue:{value:"defaultArgs.title"},description:"",name:"title",required:!1,type:{name:"string"}},subtitle:{defaultValue:{value:"defaultArgs.subtitle"},description:"",name:"subtitle",required:!1,type:{name:"string"}},className:{defaultValue:{value:"defaultArgs.className"},description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/logo/template.tsx#Logo"]={docgenInfo:Logo.__docgenInfo,name:"Logo",path:"../../components/logo/template.tsx#Logo"})}catch(__react_docgen_typescript_loader_error){}try{template.displayName="template",template.__docgenInfo={description:"",displayName:"template",props:{title:{defaultValue:{value:"defaultArgs.title"},description:"",name:"title",required:!1,type:{name:"string"}},subtitle:{defaultValue:{value:"defaultArgs.subtitle"},description:"",name:"subtitle",required:!1,type:{name:"string"}},className:{defaultValue:{value:"defaultArgs.className"},description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/logo/template.tsx#template"]={docgenInfo:template.__docgenInfo,name:"template",path:"../../components/logo/template.tsx#template"})}catch(__react_docgen_typescript_loader_error){}},"../../components/header/header.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _defaultArgs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/header/defaultArgs.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Componenten/Header",component:__webpack_require__("../../components/header/template.tsx").h4,args:_defaultArgs__WEBPACK_IMPORTED_MODULE_0__._,parameters:{status:{type:"WORK IN PROGRESS"},docusaurus:{link:"header"}}},Default={args:_defaultArgs__WEBPACK_IMPORTED_MODULE_0__._,name:"Header"};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: defaultArgs,\n  name: 'Header'\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.2.0_sass@1.56.2_webpack@5.75.0/node_modules/sass-loader/dist/cjs.js!../../components/header/index.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".rvo-header{margin-inline-end:auto;margin-inline-start:auto}.rvo-header__logo-wrapper{margin-block-end:10px;margin-inline-start:calc(50% - 25px)}.rvo-header__logo-link{display:inline-block;font-size:0;overflow:hidden;width:40px}.rvo-header__logo-img{margin-block-start:-20px;max-height:80px}@media(min-width: 480px){.rvo-header__logo-wrapper{margin-block-end:23px}.rvo-header__logo-link{overflow:visible;width:auto}.rvo-header__logo-img{margin-block-start:0;max-height:90px}}@media(min-width: 480px){.rvo-header__logo-wrapper{margin-block-end:25px}.rvo-header__logo-img{max-height:none}}","",{version:3,sources:["webpack://./../../components/header/index.scss"],names:[],mappings:"AAKA,YACE,sBAAA,CACA,wBAAA,CAGF,0BACE,qBAAA,CACA,oCAAA,CAGF,uBACE,oBAAA,CACA,WAAA,CACA,eAAA,CACA,UAAA,CAGF,sBACE,wBAAA,CACA,eAAA,CAGF,yBACE,0BACE,qBAAA,CAGF,uBACE,gBAAA,CACA,UAAA,CAGF,sBACE,oBAAA,CACA,eAAA,CAAA,CAIJ,yBACE,0BACE,qBAAA,CAEF,sBACE,eAAA,CAAA",sourcesContent:["/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Community for NL Design System\n */\n\n.rvo-header {\n  margin-inline-end: auto;\n  margin-inline-start: auto;\n}\n\n.rvo-header__logo-wrapper {\n  margin-block-end: 10px;\n  margin-inline-start: calc(50% - 25px);\n}\n\n.rvo-header__logo-link {\n  display: inline-block;\n  font-size: 0;\n  overflow: hidden;\n  width: 40px;\n}\n\n.rvo-header__logo-img {\n  margin-block-start: -20px;\n  max-height: 80px;\n}\n\n@media (min-width: 480px) {\n  .rvo-header__logo-wrapper {\n    margin-block-end: 23px;\n  }\n\n  .rvo-header__logo-link {\n    overflow: visible;\n    width: auto;\n  }\n\n  .rvo-header__logo-img {\n    margin-block-start: 0;\n    max-height: 90px;\n  }\n}\n\n@media (min-width: 480px) {\n  .rvo-header__logo-wrapper {\n    margin-block-end: 25px;\n  }\n  .rvo-header__logo-img {\n    max-height: none;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.2.0_sass@1.56.2_webpack@5.75.0/node_modules/sass-loader/dist/cjs.js!../../components/logo/index.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".rvo-logo{align-items:center;color:var(--rvo-logo-color);display:flex;flex-direction:row;font-family:var(--rvo-logo-font-family);font-size:var(--rvo-logo-font-size, 1em);font-weight:var(--rvo-logo-font-weight);gap:var(--rvo-space-sm);line-height:var(--rvo-line-height-sm)}.rvo-logo__emblem{align-self:flex-start;height:101px;width:51px}.rvo-logo__wordmark{align-self:flex-start;display:none;margin-block-start:48px}.rvo-logo__subtitle{font-style:italic}.rvo-logo__title,.rvo-logo__subtitle{margin-block-end:0;margin-block-start:0;max-width:var(--rvo-logo-subtitle-max-inline-size, 220px);white-space:pre-line}@media(min-width: 480px){.rvo-logo__wordmark{display:block}}","",{version:3,sources:["webpack://./../../components/logo/index.scss"],names:[],mappings:"AAKA,UACE,kBAAA,CACA,2BAAA,CACA,YAAA,CACA,kBAAA,CACA,uCAAA,CACA,wCAAA,CACA,uCAAA,CACA,uBAAA,CACA,qCAAA,CAGF,kBACE,qBAAA,CACA,YAAA,CACA,UAAA,CAGF,oBACE,qBAAA,CACA,YAAA,CACA,uBAAA,CAGF,oBACE,iBAAA,CAGF,qCAEE,kBAAA,CACA,oBAAA,CACA,yDAAA,CACA,oBAAA,CAGF,yBACE,oBACE,aAAA,CAAA",sourcesContent:["/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Community for NL Design System\n */\n\n.rvo-logo {\n  align-items: center;\n  color: var(--rvo-logo-color);\n  display: flex;\n  flex-direction: row;\n  font-family: var(--rvo-logo-font-family);\n  font-size: var(--rvo-logo-font-size, 1em);\n  font-weight: var(--rvo-logo-font-weight);\n  gap: var(--rvo-space-sm);\n  line-height: var(--rvo-line-height-sm);\n}\n\n.rvo-logo__emblem {\n  align-self: flex-start;\n  height: 101px;\n  width: 51px;\n}\n\n.rvo-logo__wordmark {\n  align-self: flex-start;\n  display: none;\n  margin-block-start: 48px;\n}\n\n.rvo-logo__subtitle {\n  font-style: italic;\n}\n\n.rvo-logo__title,\n.rvo-logo__subtitle {\n  margin-block-end: 0;\n  margin-block-start: 0;\n  max-width: var(--rvo-logo-subtitle-max-inline-size, 220px);\n  white-space: pre-line;\n}\n\n@media (min-width: 480px) {\n  .rvo-logo__wordmark {\n    display: block;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);