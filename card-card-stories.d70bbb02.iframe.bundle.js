/*! For license information please see card-card-stories.d70bbb02.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[6279],{"../../components/card/defaultArgs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>defaultArgs});__webpack_require__("../../components/card/template.tsx");const defaultArgs={background:"none",backgroundColor:"none",backgroundImage:"mobiel.webp",padding:"sm",outline:!1,title:"Title",link:"#",image:"",imageSize:"md",fullCardLink:!1,showLinkIndicator:!0,invertedColors:!1,content:"Content"}},"../../components/card/template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Zb:()=>Card});var clsx_m=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),icon_template=__webpack_require__("../../components/icon/template.tsx"),link_template=__webpack_require__("../../components/link/template.tsx"),parseContentMarkup=__webpack_require__("../../components/utils/parseContentMarkup.tsx"),defaultArgs=__webpack_require__("../../components/card/defaultArgs.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),card=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.2.0_sass@1.56.2_webpack@5.75.0/node_modules/sass-loader/dist/cjs.js!../../components/card/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(card.Z,options);card.Z&&card.Z.locals&&card.Z.locals;var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Card=({background=defaultArgs._.background,backgroundColor=defaultArgs._.backgroundColor,backgroundImage=defaultArgs._.backgroundImage,padding=defaultArgs._.padding,outline=defaultArgs._.outline,title=defaultArgs._.title,link=defaultArgs._.link,fullCardLink=defaultArgs._.fullCardLink,image=defaultArgs._.image,imageSize=defaultArgs._.imageSize,showLinkIndicator=defaultArgs._.showLinkIndicator,invertedColors=defaultArgs._.invertedColors,content=defaultArgs._.content,className=defaultArgs._.className,children})=>{const contentMarkup=(0,parseContentMarkup.Z)(children||content),hasLinkIndicator=showLinkIndicator&&link.length>0&&!0===fullCardLink,hasBackgroundImage="image"===background&&backgroundImage.length>0,ContentContainer=hasLinkIndicator?"div":react.Fragment,contentContainerProps=hasLinkIndicator?{className:(0,clsx_m.Z)("rvo-card--with-link-indicator")}:{};return(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.Z)("rvo-card",image.length>0&&"rvo-card--with-image",image.length>0&&imageSize&&`rvo-card--with-image-${imageSize}`,outline&&"image"!==background&&"rvo-card--outline",(outline||"none"!==background)&&`rvo-card--padding-${padding}`,"color"===background&&"none"!==backgroundColor&&`rvo-card--full-colour--${backgroundColor}`,hasBackgroundImage&&"rvo-card--with-background-image",invertedColors&&"rvo-card--inverted-colors",className),children:[hasBackgroundImage&&(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.Z)("rvo-card__background-image-container"),children:(0,jsx_runtime.jsx)("img",{src:`images/www/${backgroundImage}`,className:"rvo-card__background-image"})}),image.length>0&&(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.Z)("rvo-card__image-container"),children:(0,jsx_runtime.jsx)("img",{src:`images/www/${image}`,className:"rvo-card__image"})}),(0,jsx_runtime.jsxs)(ContentContainer,{...contentContainerProps,children:[(0,jsx_runtime.jsxs)("div",{className:"rvo-card__content",children:[title?.length>0&&(0,jsx_runtime.jsx)("h3",{className:"utrecht-heading-3",children:link.length?(0,jsx_runtime.jsx)(link_template.ZP,{href:"#",className:(0,clsx_m.Z)("rvo-card__link",fullCardLink&&"rvo-card__full-card-link"),children:title}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:title})}),contentMarkup]}),hasLinkIndicator&&(0,jsx_runtime.jsx)(icon_template.ZP,{icon:"delta-naar-rechts",size:"sm",color:"hemelblauw",ariaLabel:"Delta naar rechts",role:"img",className:"rvo-card__link-indicator"})]})]})};Card.displayName="Card";try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{background:{defaultValue:{value:"defaultArgs.background"},description:"",name:"background",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"color"'},{value:'"image"'}]}},backgroundColor:{defaultValue:{value:"defaultArgs.backgroundColor"},description:"",name:"backgroundColor",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"hemelblauw"'},{value:'"wit"'},{value:'"grijs-100"'}]}},backgroundImage:{defaultValue:{value:"defaultArgs.backgroundImage"},description:"",name:"backgroundImage",required:!1,type:{name:"string"}},padding:{defaultValue:{value:"defaultArgs.padding"},description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},outline:{defaultValue:{value:"defaultArgs.outline"},description:"",name:"outline",required:!1,type:{name:"boolean"}},title:{defaultValue:{value:"defaultArgs.title"},description:"",name:"title",required:!1,type:{name:"string"}},link:{defaultValue:{value:"defaultArgs.link"},description:"",name:"link",required:!1,type:{name:"string"}},fullCardLink:{defaultValue:{value:"defaultArgs.fullCardLink"},description:"",name:"fullCardLink",required:!1,type:{name:"boolean"}},image:{defaultValue:{value:"defaultArgs.image"},description:"",name:"image",required:!1,type:{name:"string"}},imageSize:{defaultValue:{value:"defaultArgs.imageSize"},description:"",name:"imageSize",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}},showLinkIndicator:{defaultValue:{value:"defaultArgs.showLinkIndicator"},description:"",name:"showLinkIndicator",required:!1,type:{name:"boolean"}},invertedColors:{defaultValue:{value:"defaultArgs.invertedColors"},description:"",name:"invertedColors",required:!1,type:{name:"boolean"}},content:{defaultValue:{value:"defaultArgs.content"},description:"",name:"content",required:!1,type:{name:"string"}},className:{defaultValue:{value:"defaultArgs.className"},description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/card/template.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"../../components/card/template.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}try{template.displayName="template",template.__docgenInfo={description:"",displayName:"template",props:{background:{defaultValue:{value:"defaultArgs.background"},description:"",name:"background",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"color"'},{value:'"image"'}]}},backgroundColor:{defaultValue:{value:"defaultArgs.backgroundColor"},description:"",name:"backgroundColor",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"hemelblauw"'},{value:'"wit"'},{value:'"grijs-100"'}]}},backgroundImage:{defaultValue:{value:"defaultArgs.backgroundImage"},description:"",name:"backgroundImage",required:!1,type:{name:"string"}},padding:{defaultValue:{value:"defaultArgs.padding"},description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},outline:{defaultValue:{value:"defaultArgs.outline"},description:"",name:"outline",required:!1,type:{name:"boolean"}},title:{defaultValue:{value:"defaultArgs.title"},description:"",name:"title",required:!1,type:{name:"string"}},link:{defaultValue:{value:"defaultArgs.link"},description:"",name:"link",required:!1,type:{name:"string"}},fullCardLink:{defaultValue:{value:"defaultArgs.fullCardLink"},description:"",name:"fullCardLink",required:!1,type:{name:"boolean"}},image:{defaultValue:{value:"defaultArgs.image"},description:"",name:"image",required:!1,type:{name:"string"}},imageSize:{defaultValue:{value:"defaultArgs.imageSize"},description:"",name:"imageSize",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}},showLinkIndicator:{defaultValue:{value:"defaultArgs.showLinkIndicator"},description:"",name:"showLinkIndicator",required:!1,type:{name:"boolean"}},invertedColors:{defaultValue:{value:"defaultArgs.invertedColors"},description:"",name:"invertedColors",required:!1,type:{name:"boolean"}},content:{defaultValue:{value:"defaultArgs.content"},description:"",name:"content",required:!1,type:{name:"string"}},className:{defaultValue:{value:"defaultArgs.className"},description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/card/template.tsx#template"]={docgenInfo:template.__docgenInfo,name:"template",path:"../../components/card/template.tsx#template"})}catch(__react_docgen_typescript_loader_error){}},"../../components/utils/parseContentMarkup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _validateHTML__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../components/utils/validateHTML.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(content,props)=>"string"==typeof content&&content.length&&(0,_validateHTML__WEBPACK_IMPORTED_MODULE_2__.Z)(content)?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{...props,dangerouslySetInnerHTML:{__html:content}}):props?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{...props,children:content}):content},"../../components/utils/validateHTML.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=htmlString=>{if("undefined"!=typeof window){let htmlStringToParse=htmlString;/<[a-z][\s\S]*>/i.test(htmlString)&&(htmlStringToParse=`<div>${htmlString}</div>`);return null===(new DOMParser).parseFromString(htmlStringToParse,"application/xml").querySelector("parsererror")}return!0}},"../../components/card/card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _defaultArgs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/card/defaultArgs.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Componenten/Card",component:__webpack_require__("../../components/card/template.tsx").Zb,args:_defaultArgs__WEBPACK_IMPORTED_MODULE_0__._,parameters:{status:{type:"WORK IN PROGRESS"},docusaurus:{link:"card"}}},Default={args:_defaultArgs__WEBPACK_IMPORTED_MODULE_0__._,name:"Card"};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: defaultArgs,\n  name: 'Card'\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.2.0_sass@1.56.2_webpack@5.75.0/node_modules/sass-loader/dist/cjs.js!../../components/card/index.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.rvo-card{border-radius:var(--rvo-card-border-radius);position:relative}.rvo-card.rvo-card--full-colour{padding-block-end:var(--rvo-space-lg);padding-block-start:var(--rvo-space-xl);padding-inline-end:var(--rvo-space-xl);padding-inline-start:var(--rvo-space-xl)}.rvo-card.rvo-card--full-colour--wit{background-color:var(--rvo-color-wit)}.rvo-card.rvo-card--full-colour--grijs-100{background-color:var(--rvo-color-grijs-100)}.rvo-card.rvo-card--full-colour--hemelblauw{background-color:var(--rvo-color-hemelblauw)}.rvo-card.rvo-card--inverted-colors{--rvo-link-color: var(--rvo-card-inverted-color);--rvo-link-active-color: var(--rvo-card-inverted-color);--rvo-link-focus-color: var(--rvo-card-inverted-color);--rvo-link-hover-color: var(--rvo-card-inverted-color);color:var(--rvo-card-inverted-color)}.rvo-card.rvo-card--inverted-colors .rvo-card__link-indicator{--utrecht-icon-color: var(--rvo-card-inverted-color)}.rvo-card.rvo-card--padding-sm{border-radius:var(--rvo-card-padding-sm-border-radius);padding-block-end:var(--rvo-card-padding-sm-padding-block-end);padding-block-start:var(--rvo-card-padding-sm-padding-block-start);padding-inline-end:var(--rvo-card-padding-sm-padding-inline-end);padding-inline-start:var(--rvo-card-padding-sm-padding-inline-start)}.rvo-card.rvo-card--padding-md{border-radius:var(--rvo-card-padding-md-border-radius);padding-block-end:var(--rvo-card-padding-md-padding-block-end);padding-block-start:var(--rvo-card-padding-md-padding-block-start);padding-inline-end:var(--rvo-card-padding-md-padding-inline-end);padding-inline-start:var(--rvo-card-padding-md-padding-inline-start)}.rvo-card.rvo-card--padding-lg{border-radius:var(--rvo-card-padding-lg-border-radius);padding-block-end:var(--rvo-card-padding-lg-padding-block-end);padding-block-start:var(--rvo-card-padding-lg-padding-block-start);padding-inline-end:var(--rvo-card-padding-lg-padding-inline-end);padding-inline-start:var(--rvo-card-padding-lg-padding-inline-start)}.rvo-card.rvo-card--padding-xl{border-radius:var(--rvo-card-padding-xl-border-radius);padding-block-end:var(--rvo-card-padding-xl-padding-block-end);padding-block-start:var(--rvo-card-padding-xl-padding-block-start);padding-inline-end:var(--rvo-card-padding-xl-padding-inline-end);padding-inline-start:var(--rvo-card-padding-xl-padding-inline-start)}.rvo-card.rvo-card--outline{border:var(--rvo-card-outline-border-width) solid var(--rvo-card-outline-border-color)}.rvo-card.rvo-card--outline.rvo-card--active{border-color:var(--rvo-card-outline-hover-border-color)}.rvo-card.rvo-card--outline:hover,.rvo-card.rvo-card--outline:focus{border-color:var(--rvo-card-outline-hover-border-color)}.rvo-card.rvo-card--with-image{overflow:hidden}.rvo-card.rvo-card--with-image.rvo-card--with-image-sm{align-items:center;display:flex}.rvo-card.rvo-card--with-image.rvo-card--with-image-sm .rvo-card__image-container{margin-block-end:-24px;margin-inline-end:24px}.rvo-card.rvo-card--with-image.rvo-card--with-image-sm .rvo-card__image{height:var(--rvo-card-image-height);object-fit:cover;width:var(--rvo-card-image-width)}.rvo-card.rvo-card--with-image.rvo-card--with-image-md .rvo-card__image{width:100%}.rvo-card.rvo-card--with-background-image{min-height:var(--rvo-card-background-image-min-height);overflow:hidden;padding-block-start:var(--rvo-space-xl);position:relative}.rvo-card.rvo-card--with-background-image::after{background-color:var(--rvo-card-background-image-overlay-color);content:"";display:block;height:100%;left:0;opacity:var(--rvo-card-background-image-overlay-opacity);position:absolute;top:0;width:100%}.rvo-card.rvo-card--with-background-image .rvo-card__background-image{left:0;object-fit:cover;position:absolute;top:0;width:100%}.rvo-card .rvo-card__content,.rvo-card .rvo-card--with-link-indicator{z-index:1}.rvo-card .rvo-card__full-card-link{display:block;text-decoration:none}.rvo-card .rvo-card__full-card-link:hover{text-decoration:underline}.rvo-card .rvo-card__full-card-link::after{content:"";cursor:pointer;display:inline-block;height:100%;left:0;position:absolute;top:0;width:100%;z-index:1}.rvo-card .rvo-card--with-link-indicator{align-items:center;display:flex;flex:1;gap:var(--rvo-space-xs);justify-content:space-between}.rvo-card .rvo-card__image-container{line-height:0;margin-block-end:var(--rvo-card-image-margin-block-end);margin-block-start:-24px;margin-inline-end:-24px;margin-inline-start:-24px}.rvo-card .rvo-card__image{object-fit:cover}',"",{version:3,sources:["webpack://./../../components/card/index.scss"],names:[],mappings:"AAIA,UACE,2CAAA,CACA,iBAAA,CAEA,gCACE,qCAAA,CACA,uCAAA,CACA,sCAAA,CACA,wCAAA,CAGF,qCACE,qCAAA,CAGF,2CACE,2CAAA,CAGF,4CACE,4CAAA,CAGF,oCACE,gDAAA,CACA,uDAAA,CACA,sDAAA,CACA,sDAAA,CAEA,oCAAA,CACA,8DACE,oDAAA,CAIJ,+BACE,sDAAA,CACA,8DAAA,CACA,kEAAA,CACA,gEAAA,CACA,oEAAA,CAGF,+BACE,sDAAA,CACA,8DAAA,CACA,kEAAA,CACA,gEAAA,CACA,oEAAA,CAGF,+BACE,sDAAA,CACA,8DAAA,CACA,kEAAA,CACA,gEAAA,CACA,oEAAA,CAGF,+BACE,sDAAA,CACA,8DAAA,CACA,kEAAA,CACA,gEAAA,CACA,oEAAA,CAGF,4BACE,sFAAA,CAEA,6CACE,uDAAA,CAGF,oEAEE,uDAAA,CAIJ,+BACE,eAAA,CAEA,uDACE,kBAAA,CACA,YAAA,CAEA,kFACE,sBAAA,CACA,sBAAA,CAGF,wEACE,mCAAA,CACA,gBAAA,CACA,iCAAA,CAIJ,wEACE,UAAA,CAIJ,0CACE,sDAAA,CACA,eAAA,CACA,uCAAA,CACA,iBAAA,CAEA,iDACE,+DAAA,CACA,UAAA,CACA,aAAA,CACA,WAAA,CACA,MAAA,CACA,wDAAA,CACA,iBAAA,CACA,KAAA,CACA,UAAA,CAGF,sEACE,MAAA,CACA,gBAAA,CACA,iBAAA,CACA,KAAA,CACA,UAAA,CAIJ,sEAEE,SAAA,CAGF,oCACE,aAAA,CACA,oBAAA,CAEA,0CACE,yBAAA,CAGF,2CACE,UAAA,CACA,cAAA,CACA,oBAAA,CACA,WAAA,CACA,MAAA,CACA,iBAAA,CACA,KAAA,CACA,UAAA,CACA,SAAA,CAIJ,yCACE,kBAAA,CACA,YAAA,CACA,MAAA,CACA,uBAAA,CACA,6BAAA,CAGF,qCACE,aAAA,CACA,uDAAA,CACA,wBAAA,CACA,uBAAA,CACA,yBAAA,CAGF,2BACE,gBAAA",sourcesContent:['/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Community for NL Design System\n */\n.rvo-card {\n  border-radius: var(--rvo-card-border-radius);\n  position: relative;\n\n  &.rvo-card--full-colour {\n    padding-block-end: var(--rvo-space-lg);\n    padding-block-start: var(--rvo-space-xl);\n    padding-inline-end: var(--rvo-space-xl);\n    padding-inline-start: var(--rvo-space-xl);\n  }\n\n  &.rvo-card--full-colour--wit {\n    background-color: var(--rvo-color-wit);\n  }\n\n  &.rvo-card--full-colour--grijs-100 {\n    background-color: var(--rvo-color-grijs-100);\n  }\n\n  &.rvo-card--full-colour--hemelblauw {\n    background-color: var(--rvo-color-hemelblauw);\n  }\n\n  &.rvo-card--inverted-colors {\n    --rvo-link-color: var(--rvo-card-inverted-color);\n    --rvo-link-active-color: var(--rvo-card-inverted-color);\n    --rvo-link-focus-color: var(--rvo-card-inverted-color);\n    --rvo-link-hover-color: var(--rvo-card-inverted-color);\n\n    color: var(--rvo-card-inverted-color);\n    .rvo-card__link-indicator {\n      --utrecht-icon-color: var(--rvo-card-inverted-color);\n    }\n  }\n\n  &.rvo-card--padding-sm {\n    border-radius: var(--rvo-card-padding-sm-border-radius);\n    padding-block-end: var(--rvo-card-padding-sm-padding-block-end);\n    padding-block-start: var(--rvo-card-padding-sm-padding-block-start);\n    padding-inline-end: var(--rvo-card-padding-sm-padding-inline-end);\n    padding-inline-start: var(--rvo-card-padding-sm-padding-inline-start);\n  }\n\n  &.rvo-card--padding-md {\n    border-radius: var(--rvo-card-padding-md-border-radius);\n    padding-block-end: var(--rvo-card-padding-md-padding-block-end);\n    padding-block-start: var(--rvo-card-padding-md-padding-block-start);\n    padding-inline-end: var(--rvo-card-padding-md-padding-inline-end);\n    padding-inline-start: var(--rvo-card-padding-md-padding-inline-start);\n  }\n\n  &.rvo-card--padding-lg {\n    border-radius: var(--rvo-card-padding-lg-border-radius);\n    padding-block-end: var(--rvo-card-padding-lg-padding-block-end);\n    padding-block-start: var(--rvo-card-padding-lg-padding-block-start);\n    padding-inline-end: var(--rvo-card-padding-lg-padding-inline-end);\n    padding-inline-start: var(--rvo-card-padding-lg-padding-inline-start);\n  }\n\n  &.rvo-card--padding-xl {\n    border-radius: var(--rvo-card-padding-xl-border-radius);\n    padding-block-end: var(--rvo-card-padding-xl-padding-block-end);\n    padding-block-start: var(--rvo-card-padding-xl-padding-block-start);\n    padding-inline-end: var(--rvo-card-padding-xl-padding-inline-end);\n    padding-inline-start: var(--rvo-card-padding-xl-padding-inline-start);\n  }\n\n  &.rvo-card--outline {\n    border: var(--rvo-card-outline-border-width) solid var(--rvo-card-outline-border-color);\n\n    &.rvo-card--active {\n      border-color: var(--rvo-card-outline-hover-border-color);\n    }\n\n    &:hover,\n    &:focus {\n      border-color: var(--rvo-card-outline-hover-border-color);\n    }\n  }\n\n  &.rvo-card--with-image {\n    overflow: hidden;\n\n    &.rvo-card--with-image-sm {\n      align-items: center;\n      display: flex;\n\n      .rvo-card__image-container {\n        margin-block-end: -24px;\n        margin-inline-end: 24px;\n      }\n\n      .rvo-card__image {\n        height: var(--rvo-card-image-height);\n        object-fit: cover;\n        width: var(--rvo-card-image-width);\n      }\n    }\n\n    &.rvo-card--with-image-md .rvo-card__image {\n      width: 100%;\n    }\n  }\n\n  &.rvo-card--with-background-image {\n    min-height: var(--rvo-card-background-image-min-height);\n    overflow: hidden;\n    padding-block-start: var(--rvo-space-xl);\n    position: relative;\n\n    &::after {\n      background-color: var(--rvo-card-background-image-overlay-color);\n      content: "";\n      display: block;\n      height: 100%;\n      left: 0;\n      opacity: var(--rvo-card-background-image-overlay-opacity);\n      position: absolute;\n      top: 0;\n      width: 100%;\n    }\n\n    .rvo-card__background-image {\n      left: 0;\n      object-fit: cover;\n      position: absolute;\n      top: 0;\n      width: 100%;\n    }\n  }\n\n  .rvo-card__content,\n  .rvo-card--with-link-indicator {\n    z-index: 1;\n  }\n\n  .rvo-card__full-card-link {\n    display: block;\n    text-decoration: none;\n\n    &:hover {\n      text-decoration: underline;\n    }\n\n    &::after {\n      content: "";\n      cursor: pointer;\n      display: inline-block;\n      height: 100%;\n      left: 0;\n      position: absolute;\n      top: 0;\n      width: 100%;\n      z-index: 1;\n    }\n  }\n\n  .rvo-card--with-link-indicator {\n    align-items: center;\n    display: flex;\n    flex: 1;\n    gap: var(--rvo-space-xs);\n    justify-content: space-between;\n  }\n\n  .rvo-card__image-container {\n    line-height: 0;\n    margin-block-end: var(--rvo-card-image-margin-block-end);\n    margin-block-start: -24px;\n    margin-inline-end: -24px;\n    margin-inline-start: -24px;\n  }\n\n  .rvo-card__image {\n    object-fit: cover;\n  }\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);