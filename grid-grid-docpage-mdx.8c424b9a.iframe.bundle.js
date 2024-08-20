/*! For license information please see grid-grid-docpage-mdx.8c424b9a.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[6234,6460],{"../../node_modules/.pnpm/@babel+runtime@7.24.0/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{A:()=>_extends})},"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../components/grid/grid.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _defaultArgs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/grid/defaultArgs.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Componenten/Layout/Grid",component:__webpack_require__("../../components/grid/template.tsx").xA,args:_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,parameters:{status:{type:"WORK IN PROGRESS"},docusaurus:{link:"grid"}}},Default={args:_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,name:"Grid"};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: defaultArgs,\n  name: 'Grid'\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../components/grid/grid.docpage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>grid_docpage});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.17_@types+react-dom@18.0.9_@types+react@18.2.65_encoding@0.1.13_react-d_3n2uj44ig3vw264klrh4jnyozm/node_modules/@storybook/blocks/dist/index.mjs");const CHANGELOG_namespaceObject="# `@nl-rvo/grid`\n\n## 1.1.0\n\n### Minor Changes\n\n- b9a4080: Add layout options\n\n## 1.0.0\n\n### Major Changes\n\n- daa0537: Create npm package for each component.\n\n## Pre-releases\n\n_@nl-rvo/component-library-css@1.0.0-alpha.401_:\nAdded responsive container queries\n\n_@nl-rvo/component-library-css@1.0.0-alpha.370_:\nAdded component\n",README_namespaceObject="# Grid\n\nEen grid wordt gebruikt om elementen naast elkaar te zetten in evenredige vlakken.\n\nDe grid begint in één kolom en schakelt naar de gekozen meerdere kolommen opties wanneer daar binnen de container genoeg ruimte voor is. Een kolom heeft altijd een minimale waarde van 276 pixels.\n";var grid_stories=__webpack_require__("../../components/grid/grid.stories.tsx"),storybook_blocks=__webpack_require__("./config/storybook-blocks.tsx");function _createMdxContent(props){const _components=Object.assign({h2:"h2"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:grid_stories,name:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(dist.hE,{}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:grid_stories.Default,layout:"padded"}),"\n",(0,jsx_runtime.jsx)(dist.H2,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"documentatie",children:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(storybook_blocks.bE,{markdown:README_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"changelog",children:"Changelog"}),"\n",(0,jsx_runtime.jsx)(storybook_blocks.Lz,{markdown:CHANGELOG_namespaceObject})]})}const grid_docpage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../components/grid/defaultArgs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>defaultArgs});__webpack_require__("../../components/grid/template.tsx");const defaultArgs={columns:"one",gap:"md",layout:"1fr"}},"../../components/grid/template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{xA:()=>Grid});var clsx=__webpack_require__("../../node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs"),defaultArgs=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../components/grid/defaultArgs.ts")),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),grid=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@14.1.1_sass@1.71.1_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/sass-loader/dist/cjs.js!../../components/grid/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(grid.A,options);grid.A&&grid.A.locals&&grid.A.locals;var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Grid=({gap=defaultArgs.D.gap,columns=defaultArgs.D.columns,layout=defaultArgs.D.layout,children})=>(0,jsx_runtime.jsx)("div",{className:"rvo-layout-grid-container",children:(0,jsx_runtime.jsx)("div",{className:(0,clsx.A)("rvo-layout-grid",`rvo-layout-gap--${gap}`,`rvo-layout-grid-columns--${columns}`,`rvo-layout-grid-layout--${layout}`),children:children||(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{children:"Element A"}),(0,jsx_runtime.jsx)("div",{children:"Element B"}),(0,jsx_runtime.jsx)("div",{children:"Element C"}),(0,jsx_runtime.jsx)("div",{children:"Element D"}),(0,jsx_runtime.jsx)("div",{children:"Element E"}),(0,jsx_runtime.jsx)("div",{children:"Element F"})]})})});Grid.displayName="Grid";try{Grid.displayName="Grid",Grid.__docgenInfo={description:"",displayName:"Grid",props:{gap:{defaultValue:{value:"defaultArgs.gap"},description:"",name:"gap",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'},{value:'"4xl"'},{value:'"2xs"'}]}},columns:{defaultValue:{value:"defaultArgs.columns"},description:"",name:"columns",required:!1,type:{name:"enum",value:[{value:'"one"'},{value:'"two"'},{value:'"three"'},{value:'"four"'},{value:'"five"'},{value:'"six"'}]}},layout:{defaultValue:{value:"defaultArgs.layout"},description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"1fr"'},{value:'"2fr1fr"'},{value:'"1fr2fr"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/grid/template.tsx#Grid"]={docgenInfo:Grid.__docgenInfo,name:"Grid",path:"../../components/grid/template.tsx#Grid"})}catch(__react_docgen_typescript_loader_error){}try{template.displayName="template",template.__docgenInfo={description:"",displayName:"template",props:{gap:{defaultValue:{value:"defaultArgs.gap"},description:"",name:"gap",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'},{value:'"4xl"'},{value:'"2xs"'}]}},columns:{defaultValue:{value:"defaultArgs.columns"},description:"",name:"columns",required:!1,type:{name:"enum",value:[{value:'"one"'},{value:'"two"'},{value:'"three"'},{value:'"four"'},{value:'"five"'},{value:'"six"'}]}},layout:{defaultValue:{value:"defaultArgs.layout"},description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"1fr"'},{value:'"2fr1fr"'},{value:'"1fr2fr"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/grid/template.tsx#template"]={docgenInfo:template.__docgenInfo,name:"template",path:"../../components/grid/template.tsx#template"})}catch(__react_docgen_typescript_loader_error){}},"./config/storybook-blocks.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Lz:()=>Changelog,bE:()=>Readme});var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.17_@types+react-dom@18.0.9_@types+react@18.2.65_encoding@0.1.13_react-d_3n2uj44ig3vw264klrh4jnyozm/node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const headingElement=level=>2===level?"h2":3===level?"h3":4===level?"h4":5===level?"h5":6===level?"h6":"h1",MarkdownBlock=({markdown,omitH1=!1,headingLevel=1})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.oz,{options:{overrides:{h1:{component:omitH1?()=>null:headingElement(headingLevel)},h2:{component:headingElement(headingLevel+1)},h3:{component:headingElement(headingLevel+2)},h4:{component:headingElement(headingLevel+3)},h5:{component:headingElement(headingLevel+4)},h6:{component:headingElement(headingLevel+5)}}},children:markdown});MarkdownBlock.displayName="MarkdownBlock";const Changelog=({markdown})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MarkdownBlock,{omitH1:!0,headingLevel:2,markdown});Changelog.displayName="Changelog";const Readme=({markdown})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MarkdownBlock,{omitH1:!0,markdown});Readme.displayName="Readme";try{headingElement.displayName="headingElement",headingElement.__docgenInfo={description:"",displayName:"headingElement",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#headingElement"]={docgenInfo:headingElement.__docgenInfo,name:"headingElement",path:"config/storybook-blocks.tsx#headingElement"})}catch(__react_docgen_typescript_loader_error){}try{MarkdownBlock.displayName="MarkdownBlock",MarkdownBlock.__docgenInfo={description:"",displayName:"MarkdownBlock",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"any"}},omitH1:{defaultValue:{value:"false"},description:"",name:"omitH1",required:!1,type:{name:"boolean"}},headingLevel:{defaultValue:{value:"1"},description:"",name:"headingLevel",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#MarkdownBlock"]={docgenInfo:MarkdownBlock.__docgenInfo,name:"MarkdownBlock",path:"config/storybook-blocks.tsx#MarkdownBlock"})}catch(__react_docgen_typescript_loader_error){}try{Changelog.displayName="Changelog",Changelog.__docgenInfo={description:"",displayName:"Changelog",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#Changelog"]={docgenInfo:Changelog.__docgenInfo,name:"Changelog",path:"config/storybook-blocks.tsx#Changelog"})}catch(__react_docgen_typescript_loader_error){}try{Readme.displayName="Readme",Readme.__docgenInfo={description:"",displayName:"Readme",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#Readme"]={docgenInfo:Readme.__docgenInfo,name:"Readme",path:"config/storybook-blocks.tsx#Readme"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@14.1.1_sass@1.71.1_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/sass-loader/dist/cjs.js!../../components/grid/index.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".rvo-layout-grid{display:grid}.rvo-layout-grid-columns--one{grid-template-columns:1fr}@media(min-width: 552px){.rvo-layout-grid-columns--two,.rvo-layout-grid-columns--three,.rvo-layout-grid-columns--four,.rvo-layout-grid-columns--five,.rvo-layout-grid-columns--six{grid-template-columns:repeat(2, 1fr)}}@media(min-width: 828px){.rvo-layout-grid-columns--three,.rvo-layout-grid-columns--six,.rvo-layout-grid-columns--five{grid-template-columns:repeat(3, 1fr)}.rvo-layout-grid-columns--two.rvo-layout-grid-layout--2fr1fr{grid-template-columns:2fr 1fr}}@media(min-width: 1104px){.rvo-layout-grid-columns--four{grid-template-columns:repeat(4, 1fr)}}@media(min-width: 1380px){.rvo-layout-grid-columns--five{grid-template-columns:repeat(5, 1fr)}}@media(min-width: 1656px){.rvo-layout-grid-columns--six{grid-template-columns:repeat(6, 1fr)}}","",{version:3,sources:["webpack://./../../components/grid/index.scss"],names:[],mappings:"AAIA,iBACE,YAAA,CAGF,8BACE,yBAAA,CAGF,yBACE,0JAKE,oCAAA,CAAA,CAIJ,yBACE,6FAGE,oCAAA,CAGF,6DACE,6BAAA,CAAA,CAIJ,0BACE,+BACE,oCAAA,CAAA,CAIJ,0BACE,+BACE,oCAAA,CAAA,CAIJ,0BACE,8BACE,oCAAA,CAAA",sourcesContent:["// .rvo-layout-grid-container {\n//   container-type: inline-size;\n// }\n\n.rvo-layout-grid {\n  display: grid;\n}\n\n.rvo-layout-grid-columns--one {\n  grid-template-columns: 1fr;\n}\n\n@media (min-width: 552px) {\n  .rvo-layout-grid-columns--two,\n  .rvo-layout-grid-columns--three,\n  .rvo-layout-grid-columns--four,\n  .rvo-layout-grid-columns--five,\n  .rvo-layout-grid-columns--six {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media (min-width: 828px) {\n  .rvo-layout-grid-columns--three,\n  .rvo-layout-grid-columns--six,\n  .rvo-layout-grid-columns--five {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  .rvo-layout-grid-columns--two.rvo-layout-grid-layout--2fr1fr {\n    grid-template-columns: 2fr 1fr;\n  }\n}\n\n@media (min-width: 1104px) {\n  .rvo-layout-grid-columns--four {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n\n@media (min-width: 1380px) {\n  .rvo-layout-grid-columns--five {\n    grid-template-columns: repeat(5, 1fr);\n  }\n}\n\n@media (min-width: 1656px) {\n  .rvo-layout-grid-columns--six {\n    grid-template-columns: repeat(6, 1fr);\n  }\n}\n\n// Container queries not break build because of outdated Docusaurus (2 has to be 3)\n// @container (min-width: 552px) {\n//   .rvo-layout-grid-columns--two,\n//   .rvo-layout-grid-columns--three,\n//   .rvo-layout-grid-columns--four,\n//   .rvo-layout-grid-columns--five,\n//   .rvo-layout-grid-columns--six {\n//     grid-template-columns: repeat(2, 1fr);\n//   }\n// }\n\n// @container (min-width: 828px) {\n//   .rvo-layout-grid-columns--three,\n//   .rvo-layout-grid-columns--six,\n//   .rvo-layout-grid-columns--five {\n//     grid-template-columns: repeat(3, 1fr);\n//   }\n// }\n\n// @container (min-width: 1104px) {\n//   .rvo-layout-grid-columns--four {\n//     grid-template-columns: repeat(4, 1fr);\n//   }\n// }\n\n// @container (min-width: 1380px) {\n//   .rvo-layout-grid-columns--five {\n//     grid-template-columns: repeat(5, 1fr);\n//   }\n// }\n\n// @container (min-width: 1656px) {\n//   .rvo-layout-grid-columns--six {\n//     grid-template-columns: repeat(6, 1fr);\n//   }\n// }\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);