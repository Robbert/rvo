"use strict";(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[6329],{"../../documentation/pages/design-tokens/design-tokens.color.docpage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>design_tokens_color_docpage});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.14_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),design_tokens_dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),helpers=(__webpack_require__("../../documentation/components/design-tokens/styles.scss"),__webpack_require__("../../documentation/components/helpers.ts"));const ColorDesignTokens=({tokens})=>(0,jsx_runtime.jsx)("div",{className:"design-tokens__container",children:tokens.map((({path,attributes,value,name})=>{const rgbCode=(0,helpers.o)(value),colorExampleStyle={backgroundColor:value,borderRadius:"1.5em",height:"3em",width:"3em",outline:""+("wit"===attributes.item?"1px solid black":"none")};return(0,jsx_runtime.jsxs)("div",{className:"design-tokens__row",children:[(0,jsx_runtime.jsx)("div",{className:"design-tokens__column design-tokens__column--20",style:colorExampleStyle}),(0,jsx_runtime.jsxs)("div",{className:"design-tokens__column",children:[(0,jsx_runtime.jsx)("strong",{children:attributes.item.replace(/(^\w{1})|(\s+\w{1})/g,(letter=>letter.toUpperCase()))}),(0,jsx_runtime.jsx)("div",{children:value}),(0,jsx_runtime.jsx)("div",{children:`RGB ${rgbCode.r}-${rgbCode.g}-${rgbCode.b}`})]}),(0,jsx_runtime.jsx)("code",{children:(0,helpers.J)(path)})]},name)}))});ColorDesignTokens.displayName="ColorDesignTokens";try{ColorDesignTokens.displayName="ColorDesignTokens",ColorDesignTokens.__docgenInfo={description:"",displayName:"ColorDesignTokens",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../documentation/components/design-tokens/ColorDesignTokens.tsx#ColorDesignTokens"]={docgenInfo:ColorDesignTokens.__docgenInfo,name:"ColorDesignTokens",path:"../../documentation/components/design-tokens/ColorDesignTokens.tsx#ColorDesignTokens"})}catch(__react_docgen_typescript_loader_error){}const tokens=design_tokens_dist.filter((({filePath})=>filePath.includes("src/brand/rvo/color.tokens.json")));function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("span",{children:["Er zijn ",tokens.length," design tokens voor kleuren."]}),"\n",(0,jsx_runtime.jsx)(ColorDesignTokens,{tokens})]})}const design_tokens_color=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent()};function design_tokens_color_docpage_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Huisstijl/Color"}),"\n",(0,jsx_runtime.jsx)(design_tokens_color,{})]})}const design_tokens_color_docpage=function design_tokens_color_docpage_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(design_tokens_color_docpage_createMdxContent,props)})):design_tokens_color_docpage_createMdxContent()}},"../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.2.0_sass@1.56.2_webpack@5.75.0/node_modules/sass-loader/dist/cjs.js!../../documentation/components/design-tokens/styles.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".design-tokens__container{margin-block-end:8em;margin-block-start:2em}.design-tokens__row{align-items:center;display:flex;gap:2em;margin-block-end:1em !important;width:100%}.design-tokens__column{display:flex;flex-direction:column;flex-shrink:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.design-tokens__column--15{width:15%}.design-tokens__column--20{width:20%}.design-tokens__column--30{width:30%}.design-tokens__column--50{width:50%}.design-tokens__column--flex{flex:1}","",{version:3,sources:["webpack://./../../documentation/components/design-tokens/styles.scss"],names:[],mappings:"AAAA,0BACE,oBAAA,CACA,sBAAA,CAGF,oBACE,kBAAA,CACA,YAAA,CACA,OAAA,CACA,+BAAA,CACA,UAAA,CAGF,uBACE,YAAA,CACA,qBAAA,CACA,aAAA,CACA,eAAA,CACA,sBAAA,CACA,kBAAA,CAGF,2BACE,SAAA,CAGF,2BACE,SAAA,CAGF,2BACE,SAAA,CAGF,2BACE,SAAA,CAGF,6BACE,MAAA",sourcesContent:[".design-tokens__container {\n  margin-block-end: 8em;\n  margin-block-start: 2em;\n}\n\n.design-tokens__row {\n  align-items: center;\n  display: flex;\n  gap: 2em;\n  margin-block-end: 1em !important;\n  width: 100%;\n}\n\n.design-tokens__column {\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.design-tokens__column--15 {\n  width: 15%;\n}\n\n.design-tokens__column--20 {\n  width: 20%;\n}\n\n.design-tokens__column--30 {\n  width: 30%;\n}\n\n.design-tokens__column--50 {\n  width: 50%;\n}\n\n.design-tokens__column--flex {\n  flex: 1;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../documentation/components/design-tokens/styles.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_13_2_0_sass_1_56_2_webpack_5_75_0_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.2.0_sass@1.56.2_webpack@5.75.0/node_modules/sass-loader/dist/cjs.js!../../documentation/components/design-tokens/styles.scss"),options={};options.styleTagTransform=_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_13_2_0_sass_1_56_2_webpack_5_75_0_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options),_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_13_2_0_sass_1_56_2_webpack_5_75_0_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_13_2_0_sass_1_56_2_webpack_5_75_0_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals&&_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_13_2_0_sass_1_56_2_webpack_5_75_0_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals}}]);