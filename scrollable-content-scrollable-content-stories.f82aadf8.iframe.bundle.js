/*! For license information please see scrollable-content-scrollable-content-stories.f82aadf8.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[9266],{"../../components/scrollable-content/scrollable-content.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _defaultArgs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/scrollable-content/defaultArgs.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Componenten/Scrollable content",component:__webpack_require__("../../components/scrollable-content/template.tsx").NQ,args:_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,parameters:{status:{type:"PRODUCTION"},docusaurus:{link:"scrollable-content"}}},Default={args:{..._defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,useStyleAttribute:!0},name:"Scrollable content"};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...defaultArgs,\n    useStyleAttribute: true\n  },\n  name: 'Scrollable content'\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../components/scrollable-content/defaultArgs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>defaultArgs});__webpack_require__("../../components/scrollable-content/template.tsx");const defaultArgs={content:"Deze scrollable content container heeft een hoogte van 300 pixels.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sem ante, lacinia in pellentesque vel, bibendum id nisl. Quisque nisi felis, interdum in feugiat id, porta nec velit. Sed eu congue urna. Morbi sagittis massa vel nisl convallis ornare. Maecenas tempus eleifend metus quis commodo. Nullam tincidunt feugiat nunc, ut pretium purus mattis nec. Phasellus diam metus, hendrerit at posuere quis, rhoncus vitae magna. Donec hendrerit metus non accumsan fringilla. Quisque varius quis mauris ac congue. Phasellus non tellus quis velit fringilla consequat. Proin tempus erat velit, ac mollis dui molestie quis. In rutrum bibendum mi, ac eleifend nisl.<br/><br/>Vivamus maximus lobortis elit, commodo varius libero venenatis sed. Fusce rhoncus, mauris in imperdiet pulvinar, quam eros dignissim mi, vitae venenatis lorem justo quis ligula. Fusce ornare rhoncus elit, vel rhoncus mauris gravida at. Mauris non metus interdum, pharetra felis ac, pulvinar enim. Proin elementum vulputate arcu, at hendrerit metus aliquam ac. Quisque ullamcorper imperdiet nulla, vel faucibus urna congue nec. Vivamus vel enim aliquet, egestas erat id, scelerisque ex. Quisque leo diam, interdum id accumsan quis, fermentum eget ex. Quisque quis ipsum commodo lorem euismod pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In non scelerisque est. Sed consequat ante vitae ornare accumsan. Mauris imperdiet, lorem at consequat pellentesque, ipsum felis pharetra ante, eu dictum mauris nisl sed lorem.<br/><br/>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus id mattis elit, cursus condimentum nisl. Vestibulum ultrices sem ligula, eget maximus orci lobortis vitae. Duis auctor tortor ac imperdiet dapibus. Quisque eu mi elit. In ornare quam arcu, eget laoreet magna iaculis vitae. Cras laoreet ligula sit amet faucibus tempus. Nulla odio augue, accumsan vitae libero tincidunt, consectetur elementum leo. Nullam venenatis elementum efficitur. Nunc nec ante nulla. Quisque turpis odio, consequat ut ultrices nec, elementum ultrices libero. Aliquam mollis rutrum efficitur.",height:300,useAsMinimumHeight:!1,disableScroll:!1,useStyleAttribute:!1}},"../../components/scrollable-content/template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NQ:()=>ScrollableContent});var clsx=__webpack_require__("../../node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),defaultArgs=__webpack_require__("../../components/scrollable-content/defaultArgs.ts"),parseContentMarkup=__webpack_require__("../../components/utils/parseContentMarkup.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.95.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.95.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.95.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.95.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.95.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.95.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),scrollable_content=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.95.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@14.1.1_sass@1.71.1_webpack@5.95.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/sass-loader/dist/cjs.js!../../components/scrollable-content/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(scrollable_content.A,options);scrollable_content.A&&scrollable_content.A.locals&&scrollable_content.A.locals;var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const ScrollableContent=({content,children,height=defaultArgs.D.height,useAsMinimumHeight=defaultArgs.D.useAsMinimumHeight,disableScroll=defaultArgs.D.disableScroll,useStyleAttribute=defaultArgs.D.useStyleAttribute,...props})=>{const containerRef=(0,react.useRef)(null);return(0,react.useEffect)((()=>{useStyleAttribute||!containerRef.current||disableScroll||(containerRef.current.style.maxHeight=`${height}px`,useAsMinimumHeight&&(containerRef.current.style.minHeight=`${height}px`))}),[height,disableScroll,useStyleAttribute,useAsMinimumHeight]),console.log(useStyleAttribute),(0,jsx_runtime.jsx)("div",{ref:containerRef,className:(0,clsx.A)(!disableScroll&&"rvo-scrollable-content"),...!0===useStyleAttribute?{style:{maxHeight:`${height}px`,minHeight:useAsMinimumHeight?`${height}px`:void 0}}:{},...props,children:(0,parseContentMarkup.A)(children||content)})};ScrollableContent.displayName="ScrollableContent";try{ScrollableContent.displayName="ScrollableContent",ScrollableContent.__docgenInfo={description:"",displayName:"ScrollableContent",props:{height:{defaultValue:{value:"defaultArgs.height"},description:"",name:"height",required:!1,type:{name:"number"}},useAsMinimumHeight:{defaultValue:{value:"defaultArgs.useAsMinimumHeight"},description:"",name:"useAsMinimumHeight",required:!1,type:{name:"boolean"}},content:{defaultValue:null,description:"@uxpinignoreprop",name:"content",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"@uxpinpropname Content",name:"children",required:!1,type:{name:"ReactNode"}},disableScroll:{defaultValue:{value:"defaultArgs.disableScroll"},description:"",name:"disableScroll",required:!1,type:{name:"boolean"}},useStyleAttribute:{defaultValue:{value:"defaultArgs.useStyleAttribute"},description:"@uxpinignoreprop",name:"useStyleAttribute",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/scrollable-content/template.tsx#ScrollableContent"]={docgenInfo:ScrollableContent.__docgenInfo,name:"ScrollableContent",path:"../../components/scrollable-content/template.tsx#ScrollableContent"})}catch(__react_docgen_typescript_loader_error){}try{template.displayName="template",template.__docgenInfo={description:"",displayName:"template",props:{height:{defaultValue:{value:"defaultArgs.height"},description:"",name:"height",required:!1,type:{name:"number"}},useAsMinimumHeight:{defaultValue:{value:"defaultArgs.useAsMinimumHeight"},description:"",name:"useAsMinimumHeight",required:!1,type:{name:"boolean"}},content:{defaultValue:null,description:"@uxpinignoreprop",name:"content",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"@uxpinpropname Content",name:"children",required:!1,type:{name:"ReactNode"}},disableScroll:{defaultValue:{value:"defaultArgs.disableScroll"},description:"",name:"disableScroll",required:!1,type:{name:"boolean"}},useStyleAttribute:{defaultValue:{value:"defaultArgs.useStyleAttribute"},description:"@uxpinignoreprop",name:"useStyleAttribute",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/scrollable-content/template.tsx#template"]={docgenInfo:template.__docgenInfo,name:"template",path:"../../components/scrollable-content/template.tsx#template"})}catch(__react_docgen_typescript_loader_error){}},"../../components/utils/parseContentMarkup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _validateHTML__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../components/utils/validateHTML.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(content,props=void 0)=>"string"==typeof content&&content.length&&(0,_validateHTML__WEBPACK_IMPORTED_MODULE_2__.A)(content)?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{...props,dangerouslySetInnerHTML:{__html:content}}):props?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{...props,children:content}):content},"../../components/utils/validateHTML.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=htmlString=>{if("undefined"!=typeof window){let htmlStringToParse=htmlString;const containsHTML=/<[a-z][\s\S]*>/i.test(htmlString);if(/<([A-Z][\w]*)(\s*[^>]*)?\/?>/.test(htmlString))return!1;containsHTML&&(htmlStringToParse=`<div>${htmlString}</div>`);return null===(new DOMParser).parseFromString(htmlStringToParse,"application/xml").querySelector("parsererror")}return!0}},"../../node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.95.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@14.1.1_sass@1.71.1_webpack@5.95.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/sass-loader/dist/cjs.js!../../components/scrollable-content/index.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_10_0_webpack_5_95_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.95.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_10_0_webpack_5_95_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_95_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_10_0_webpack_5_95_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.95.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_95_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_10_0_webpack_5_95_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".rvo-scrollable-content{overflow-y:auto}","",{version:3,sources:["webpack://./../../components/scrollable-content/index.scss"],names:[],mappings:"AAKA,wBACE,eAAA",sourcesContent:["/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Community for NL Design System\n */\n\n.rvo-scrollable-content {\n  overflow-y: auto;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);