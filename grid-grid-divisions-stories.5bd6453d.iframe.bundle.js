/*! For license information please see grid-grid-divisions-stories.5bd6453d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[8683],{"../../components/grid/grid.divisions.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ThreeColumns:()=>ThreeColumns,TwoColumns:()=>TwoColumns,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _src_defaultArgs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/grid/src/defaultArgs.ts"),_src_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/grid/src/template.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Layout/Grid/Using divisions",component:_src_template__WEBPACK_IMPORTED_MODULE_1__.xA,argTypes:_src_template__WEBPACK_IMPORTED_MODULE_1__.Uv,parameters:{status:{type:"PRODUCTION"},docusaurus:{link:"grid"}}},TwoColumns={render:_src_template__WEBPACK_IMPORTED_MODULE_1__.xA.bind({}),name:"2fr 1fr",args:{..._src_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,division:"2fr 1fr"}},ThreeColumns={render:_src_template__WEBPACK_IMPORTED_MODULE_1__.xA.bind({}),name:"2fr 1fr 2fr",args:{..._src_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,columns:"three",division:"2fr 1fr 2fr"}};TwoColumns.parameters={...TwoColumns.parameters,docs:{...TwoColumns.parameters?.docs,source:{originalSource:"{\n  render: Grid.bind({}),\n  name: '2fr 1fr',\n  args: {\n    ...defaultArgs,\n    division: '2fr 1fr'\n  }\n}",...TwoColumns.parameters?.docs?.source}}},ThreeColumns.parameters={...ThreeColumns.parameters,docs:{...ThreeColumns.parameters?.docs,source:{originalSource:"{\n  render: Grid.bind({}),\n  name: '2fr 1fr 2fr',\n  args: {\n    ...defaultArgs,\n    columns: 'three',\n    division: '2fr 1fr 2fr'\n  }\n}",...ThreeColumns.parameters?.docs?.source}}};const __namedExportsOrder=["TwoColumns","ThreeColumns"]},"../../components/grid/src/defaultArgs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>defaultArgs});__webpack_require__("../../components/grid/src/template.tsx");const defaultArgs={columns:"one",gap:"md"}},"../../components/grid/src/template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{xA:()=>Grid,Uv:()=>argTypes});var clsx=__webpack_require__("../../node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs"),defaultArgs=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../components/grid/src/defaultArgs.ts")),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_@swc+core@1.9.3_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_@swc+core@1.9.3_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_@swc+core@1.9.3_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_@swc+core@1.9.3_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_@swc+core@1.9.3_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_@swc+core@1.9.3_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),src=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_@rspack+core@1.1.4_@swc+helpers@0.5.13__webpack@5.96.1_@swc+core@1.9.3_@swc_7t6qq7k4ol4nw36vowh5e5ue74/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@16.0.3_@rspack+core@1.1.4_@swc+helpers@0.5.13__sass-embedded@1.81.0_sass@1.81.0_w_ijwti3wlbjbyf3zrxszcgoktp4/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[8].use[2]!../../components/grid/src/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(src.A,options);src.A&&src.A.locals&&src.A.locals;var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const argTypes={gap:{options:["3xs","2xs","xs","sm","md","lg","xl","2xl","3xl","4xl"],control:{type:"radio"}},columns:{options:["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve"],control:{type:"radio"}},division:{control:"text",placeholder:"2fr 1fr"},children:{table:{disable:!0}}},Grid=({gap=defaultArgs.D.gap,columns=defaultArgs.D.columns,division,children})=>(0,jsx_runtime.jsx)("div",{className:"rvo-layout-grid-container",children:(0,jsx_runtime.jsx)("div",{className:(0,clsx.A)("rvo-layout-grid",`rvo-layout-gap--${gap}`,`rvo-layout-grid-columns--${columns}`,division&&"rvo-layout-grid--division"),style:division?{"--division":division}:void 0,children:children||Array.from({length:(columnName=>{if(!columnName)return 1;return{one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,eleven:11,twelve:12}[columnName]})(columns)},((_,index)=>(0,jsx_runtime.jsxs)("div",{children:["Element ",String.fromCharCode(65+index)]},index)))})});Grid.displayName="Grid";try{Grid.displayName="Grid",Grid.__docgenInfo={description:"",displayName:"Grid",props:{gap:{defaultValue:{value:"defaultArgs.gap"},description:"",name:"gap",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xs"'},{value:'"2xs"'},{value:'"3xl"'},{value:'"4xl"'}]}},columns:{defaultValue:{value:"defaultArgs.columns"},description:"",name:"columns",required:!1,type:{name:"enum",value:[{value:'"one"'},{value:'"two"'},{value:'"three"'},{value:'"four"'},{value:'"five"'},{value:'"six"'},{value:'"seven"'},{value:'"eight"'},{value:'"nine"'},{value:'"ten"'},{value:'"eleven"'},{value:'"twelve"'}]}},division:{defaultValue:null,description:"",name:"division",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"@uxpinpropname Content",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/grid/src/template.tsx#Grid"]={docgenInfo:Grid.__docgenInfo,name:"Grid",path:"../../components/grid/src/template.tsx#Grid"})}catch(__react_docgen_typescript_loader_error){}try{template.displayName="template",template.__docgenInfo={description:"",displayName:"template",props:{gap:{defaultValue:{value:"defaultArgs.gap"},description:"",name:"gap",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xs"'},{value:'"2xs"'},{value:'"3xl"'},{value:'"4xl"'}]}},columns:{defaultValue:{value:"defaultArgs.columns"},description:"",name:"columns",required:!1,type:{name:"enum",value:[{value:'"one"'},{value:'"two"'},{value:'"three"'},{value:'"four"'},{value:'"five"'},{value:'"six"'},{value:'"seven"'},{value:'"eight"'},{value:'"nine"'},{value:'"ten"'},{value:'"eleven"'},{value:'"twelve"'}]}},division:{defaultValue:null,description:"",name:"division",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"@uxpinpropname Content",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/grid/src/template.tsx#template"]={docgenInfo:template.__docgenInfo,name:"template",path:"../../components/grid/src/template.tsx#template"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"../../node_modules/.pnpm/css-loader@6.10.0_@rspack+core@1.1.4_@swc+helpers@0.5.13__webpack@5.96.1_@swc+core@1.9.3_@swc_7t6qq7k4ol4nw36vowh5e5ue74/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@16.0.3_@rspack+core@1.1.4_@swc+helpers@0.5.13__sass-embedded@1.81.0_sass@1.81.0_w_ijwti3wlbjbyf3zrxszcgoktp4/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[8].use[2]!../../components/grid/src/index.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_10_0_rspack_core_1_1_4_swc_helpers_0_5_13_webpack_5_96_1_swc_core_1_9_3_swc_7t6qq7k4ol4nw36vowh5e5ue74_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_@rspack+core@1.1.4_@swc+helpers@0.5.13__webpack@5.96.1_@swc+core@1.9.3_@swc_7t6qq7k4ol4nw36vowh5e5ue74/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_10_0_rspack_core_1_1_4_swc_helpers_0_5_13_webpack_5_96_1_swc_core_1_9_3_swc_7t6qq7k4ol4nw36vowh5e5ue74_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_rspack_core_1_1_4_swc_helpers_0_5_13_webpack_5_96_1_swc_core_1_9_3_swc_7t6qq7k4ol4nw36vowh5e5ue74_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_10_0_rspack_core_1_1_4_swc_helpers_0_5_13_webpack_5_96_1_swc_core_1_9_3_swc_7t6qq7k4ol4nw36vowh5e5ue74_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_@rspack+core@1.1.4_@swc+helpers@0.5.13__webpack@5.96.1_@swc+core@1.9.3_@swc_7t6qq7k4ol4nw36vowh5e5ue74/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_rspack_core_1_1_4_swc_helpers_0_5_13_webpack_5_96_1_swc_core_1_9_3_swc_7t6qq7k4ol4nw36vowh5e5ue74_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_10_0_rspack_core_1_1_4_swc_helpers_0_5_13_webpack_5_96_1_swc_core_1_9_3_swc_7t6qq7k4ol4nw36vowh5e5ue74_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".rvo-layout-grid{display:grid}.rvo-layout-grid-columns--one{grid-template-columns:1fr}@media(min-width: 552px){.rvo-layout-grid-columns--two,.rvo-layout-grid-columns--three,.rvo-layout-grid-columns--four,.rvo-layout-grid-columns--five,.rvo-layout-grid-columns--six,.rvo-layout-grid-columns--seven,.rvo-layout-grid-columns--eight,.rvo-layout-grid-columns--nine,.rvo-layout-grid-columns--ten,.rvo-layout-grid-columns--eleven,.rvo-layout-grid-columns--twelve{grid-template-columns:repeat(2, 1fr)}}@media(min-width: 828px){.rvo-layout-grid-columns--three,.rvo-layout-grid-columns--four,.rvo-layout-grid-columns--five,.rvo-layout-grid-columns--six,.rvo-layout-grid-columns--seven,.rvo-layout-grid-columns--eight,.rvo-layout-grid-columns--nine,.rvo-layout-grid-columns--ten,.rvo-layout-grid-columns--eleven,.rvo-layout-grid-columns--twelve{grid-template-columns:repeat(3, 1fr)}}@media(min-width: 1104px){.rvo-layout-grid-columns--four{grid-template-columns:repeat(4, 1fr)}}@media(min-width: 1380px){.rvo-layout-grid-columns--five{grid-template-columns:repeat(5, 1fr)}}@media(min-width: 1656px){.rvo-layout-grid-columns--six{grid-template-columns:repeat(6, 1fr)}.rvo-layout-grid-columns--seven{grid-template-columns:repeat(7, 1fr)}.rvo-layout-grid-columns--eight{grid-template-columns:repeat(8, 1fr)}.rvo-layout-grid-columns--nine{grid-template-columns:repeat(9, 1fr)}.rvo-layout-grid-columns--ten{grid-template-columns:repeat(10, 1fr)}.rvo-layout-grid-columns--eleven{grid-template-columns:repeat(11, 1fr)}.rvo-layout-grid-columns--twelve{grid-template-columns:repeat(12, 1fr)}}@container (min-width: 552px){.rvo-layout-grid-columns--two,.rvo-layout-grid-columns--three,.rvo-layout-grid-columns--four,.rvo-layout-grid-columns--five,.rvo-layout-grid-columns--six,.rvo-layout-grid-columns--seven,.rvo-layout-grid-columns--eight,.rvo-layout-grid-columns--nine,.rvo-layout-grid-columns--ten,.rvo-layout-grid-columns--eleven,.rvo-layout-grid-columns--twelve{grid-template-columns:repeat(2, 1fr)}}@container (min-width: 828px){.rvo-layout-grid-columns--three,.rvo-layout-grid-columns--four,.rvo-layout-grid-columns--five,.rvo-layout-grid-columns--six{grid-template-columns:repeat(3, 1fr)}}@container (min-width: 1104px){.rvo-layout-grid-columns--four{grid-template-columns:repeat(4, 1fr)}}@container (min-width: 1380px){.rvo-layout-grid-columns--five{grid-template-columns:repeat(5, 1fr)}}@container (min-width: 1656px){.rvo-layout-grid-columns--six{grid-template-columns:repeat(6, 1fr)}.rvo-layout-grid-columns--seven{grid-template-columns:repeat(7, 1fr)}.rvo-layout-grid-columns--eight{grid-template-columns:repeat(8, 1fr)}.rvo-layout-grid-columns--nine{grid-template-columns:repeat(9, 1fr)}.rvo-layout-grid-columns--ten{grid-template-columns:repeat(10, 1fr)}.rvo-layout-grid-columns--eleven{grid-template-columns:repeat(11, 1fr)}.rvo-layout-grid-columns--twelve{grid-template-columns:repeat(12, 1fr)}}.rvo-layout-grid--division{grid-template-columns:var(--division)}","",{version:3,sources:["webpack://./../../components/grid/src/index.scss"],names:[],mappings:"AAMA,iBACE,YAAA,CAGF,8BACE,yBAAA,CAGF,yBACE,yVAWE,oCAAA,CAAA,CAIJ,yBACE,2TAUE,oCAAA,CAAA,CAIJ,0BACE,+BACE,oCAAA,CAAA,CAIJ,0BACE,+BACE,oCAAA,CAAA,CAIJ,0BACE,8BACE,oCAAA,CAGF,gCACE,oCAAA,CAGF,gCACE,oCAAA,CAGF,+BACE,oCAAA,CAGF,8BACE,qCAAA,CAGF,iCACE,qCAAA,CAGF,iCACE,qCAAA,CAAA,CAIJ,8BACE,yVAWE,oCAAA,CAAA,CAIJ,8BACE,4HAIE,oCAAA,CAAA,CAIJ,+BACE,+BACE,oCAAA,CAAA,CAIJ,+BACE,+BACE,oCAAA,CAAA,CAIJ,+BACE,8BACE,oCAAA,CAGF,gCACE,oCAAA,CAGF,gCACE,oCAAA,CAGF,+BACE,oCAAA,CAGF,8BACE,qCAAA,CAGF,iCACE,qCAAA,CAGF,iCACE,qCAAA,CAAA,CAIJ,2BACE,qCAAA",sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);