/*! For license information please see alert-alert-stories.652c8e43.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[8323],{"../../components/alert/defaultArgs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>defaultArgs});__webpack_require__("../../components/alert/template.tsx");const defaultArgs={kind:"info",heading:"",content:'This is an example of an alert, with a <a href="#" class="rvo-link rvo-link--donkerblauw">link</a> inside.',closable:!1,padding:"md"}},"../../components/alert/template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bZ:()=>Alert,Iw:()=>AllAlertKinds,PG:()=>argTypes});var clsx_m=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),button_template=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../components/button/template.tsx")),icon_template=__webpack_require__("../../components/icon/template.tsx"),status_icon_template=__webpack_require__("../../components/status-icon/template.tsx"),parseContentMarkup=__webpack_require__("../../components/utils/parseContentMarkup.tsx"),defaultArgs=__webpack_require__("../../components/alert/defaultArgs.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),cjs_js_components_alert=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.2.0_sass@1.56.2_webpack@5.75.0/node_modules/sass-loader/dist/cjs.js!../../components/alert/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(cjs_js_components_alert.Z,options);cjs_js_components_alert.Z&&cjs_js_components_alert.Z.locals&&cjs_js_components_alert.Z.locals;var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const argTypes={kind:{options:["info","warning","error","success"],control:{type:"radio"}},heading:{control:"text"},content:{control:"text"},closable:{control:"boolean"},padding:{options:["xs","sm","md","lg","xl","2xl"],control:{type:"radio"}}},Alert=({kind=defaultArgs._.kind,heading=defaultArgs._.heading,content=defaultArgs._.content,closable=defaultArgs._.closable,padding=defaultArgs._.padding,children})=>{let iconMarkup;switch(kind){case"info":iconMarkup=(0,status_icon_template.Jj)({type:"info",size:"xl"});break;case"warning":iconMarkup=(0,status_icon_template.Jj)({type:"waarschuwing",size:"xl"});break;case"error":iconMarkup=(0,status_icon_template.Jj)({type:"foutmelding",size:"xl"});break;case"success":iconMarkup=(0,status_icon_template.Jj)({type:"bevestiging",size:"xl"})}const contentMarkup=(0,parseContentMarkup.Z)(children||content);return(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.Z)("rvo-alert",`rvo-alert--${kind}`,padding&&`rvo-alert--padding-${padding}`),children:[iconMarkup,(0,jsx_runtime.jsxs)("div",{className:"rvo-alert-text",children:[heading&&""!==heading&&(0,jsx_runtime.jsx)("strong",{children:heading}),(0,jsx_runtime.jsx)("div",{children:contentMarkup})]}),closable&&(0,jsx_runtime.jsx)(button_template.zx,{kind:"subtle",className:"rvo-button__close",label:(0,jsx_runtime.jsx)(icon_template.JO,{icon:"kruis",size:"md"}),"aria-label":"Sluiten"})]})};Alert.displayName="Alert";const AllAlertKinds=alertArgs=>(0,jsx_runtime.jsxs)("div",{className:"rvo-layout-column rvo-layout-gap--md",children:[(0,jsx_runtime.jsx)(Alert,{...alertArgs,kind:"info"}),(0,jsx_runtime.jsx)(Alert,{...alertArgs,kind:"warning"}),(0,jsx_runtime.jsx)(Alert,{...alertArgs,kind:"error"}),(0,jsx_runtime.jsx)(Alert,{...alertArgs,kind:"success"})]});AllAlertKinds.displayName="AllAlertKinds";try{Alert.displayName="Alert",Alert.__docgenInfo={description:"",displayName:"Alert",props:{kind:{defaultValue:{value:"defaultArgs.kind"},description:"",name:"kind",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"error"'},{value:'"success"'}]}},heading:{defaultValue:{value:"defaultArgs.heading"},description:"",name:"heading",required:!1,type:{name:"string"}},content:{defaultValue:{value:"defaultArgs.content"},description:"@uxpinignoreprop",name:"content",required:!1,type:{name:"ReactNode"}},closable:{defaultValue:{value:"defaultArgs.closable"},description:"",name:"closable",required:!1,type:{name:"boolean"}},padding:{defaultValue:{value:"defaultArgs.padding"},description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"2xl"'}]}},children:{defaultValue:null,description:"@uxpinpropname Content",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/alert/template.tsx#Alert"]={docgenInfo:Alert.__docgenInfo,name:"Alert",path:"../../components/alert/template.tsx#Alert"})}catch(__react_docgen_typescript_loader_error){}try{AllAlertKinds.displayName="AllAlertKinds",AllAlertKinds.__docgenInfo={description:"",displayName:"AllAlertKinds",props:{kind:{defaultValue:{value:"defaultArgs.kind"},description:"",name:"kind",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"error"'},{value:'"success"'}]}},heading:{defaultValue:{value:"defaultArgs.heading"},description:"",name:"heading",required:!1,type:{name:"string"}},content:{defaultValue:{value:"defaultArgs.content"},description:"@uxpinignoreprop",name:"content",required:!1,type:{name:"ReactNode"}},closable:{defaultValue:{value:"defaultArgs.closable"},description:"",name:"closable",required:!1,type:{name:"boolean"}},padding:{defaultValue:{value:"defaultArgs.padding"},description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"2xl"'}]}},children:{defaultValue:null,description:"@uxpinpropname Content",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/alert/template.tsx#AllAlertKinds"]={docgenInfo:AllAlertKinds.__docgenInfo,name:"AllAlertKinds",path:"../../components/alert/template.tsx#AllAlertKinds"})}catch(__react_docgen_typescript_loader_error){}try{template.displayName="template",template.__docgenInfo={description:"",displayName:"template",props:{kind:{defaultValue:{value:"defaultArgs.kind"},description:"",name:"kind",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"error"'},{value:'"success"'}]}},heading:{defaultValue:{value:"defaultArgs.heading"},description:"",name:"heading",required:!1,type:{name:"string"}},content:{defaultValue:{value:"defaultArgs.content"},description:"@uxpinignoreprop",name:"content",required:!1,type:{name:"ReactNode"}},closable:{defaultValue:{value:"defaultArgs.closable"},description:"",name:"closable",required:!1,type:{name:"boolean"}},padding:{defaultValue:{value:"defaultArgs.padding"},description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"2xl"'}]}},children:{defaultValue:null,description:"@uxpinpropname Content",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/alert/template.tsx#template"]={docgenInfo:template.__docgenInfo,name:"template",path:"../../components/alert/template.tsx#template"})}catch(__react_docgen_typescript_loader_error){}},"../../components/status-icon/defaultArgs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>defaultArgs});__webpack_require__("../../components/status-icon/template.tsx");const defaultArgs={type:"bevestiging",size:"sm",ignoreDefaultIconColor:!1}},"../../components/status-icon/template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Jj:()=>StatusIcon});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var icon_template=__webpack_require__("../../components/icon/template.tsx"),defaultArgs=__webpack_require__("../../components/status-icon/defaultArgs.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),status_icon=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.2.0_sass@1.56.2_webpack@5.75.0/node_modules/sass-loader/dist/cjs.js!../../components/status-icon/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(status_icon.Z,options);status_icon.Z&&status_icon.Z.locals&&status_icon.Z.locals;var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const StatusIcon=({type=defaultArgs._.type,size=defaultArgs._.size,className,ignoreDefaultIconColor})=>{const iconName=type.toLowerCase().replace(/_/g,"-");let parsedClassName="";return ignoreDefaultIconColor||(parsedClassName+=`rvo-status-icon-${iconName}`),className&&(parsedClassName+=` ${className}`),(0,jsx_runtime.jsx)(icon_template.JO,{icon:iconName,size,color:"",className:parsedClassName})};StatusIcon.displayName="StatusIcon";try{StatusIcon.displayName="StatusIcon",StatusIcon.__docgenInfo={description:"",displayName:"StatusIcon",props:{type:{defaultValue:{value:"defaultArgs.type"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"bevestiging"'},{value:'"foutmelding"'},{value:'"waarschuwing"'}]}},size:{defaultValue:{value:"defaultArgs.size"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'},{value:'"4xl"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},ignoreDefaultIconColor:{defaultValue:null,description:"",name:"ignoreDefaultIconColor",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/status-icon/template.tsx#StatusIcon"]={docgenInfo:StatusIcon.__docgenInfo,name:"StatusIcon",path:"../../components/status-icon/template.tsx#StatusIcon"})}catch(__react_docgen_typescript_loader_error){}try{template.displayName="template",template.__docgenInfo={description:"",displayName:"template",props:{type:{defaultValue:{value:"defaultArgs.type"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"bevestiging"'},{value:'"foutmelding"'},{value:'"waarschuwing"'}]}},size:{defaultValue:{value:"defaultArgs.size"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'},{value:'"4xl"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},ignoreDefaultIconColor:{defaultValue:null,description:"",name:"ignoreDefaultIconColor",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/status-icon/template.tsx#template"]={docgenInfo:template.__docgenInfo,name:"template",path:"../../components/status-icon/template.tsx#template"})}catch(__react_docgen_typescript_loader_error){}},"../../components/utils/parseContentMarkup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _validateHTML__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../components/utils/validateHTML.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(content,props)=>"string"==typeof content&&content.length&&(0,_validateHTML__WEBPACK_IMPORTED_MODULE_2__.Z)(content)?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{...props,dangerouslySetInnerHTML:{__html:content}}):props?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{...props,children:content}):content},"../../components/utils/validateHTML.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=htmlString=>{if("undefined"!=typeof window){let htmlStringToParse=htmlString;/<[a-z][\s\S]*>/i.test(htmlString)&&(htmlStringToParse=`<div>${htmlString}</div>`);return null===(new DOMParser).parseFromString(htmlStringToParse,"application/xml").querySelector("parsererror")}return!0}},"../../components/alert/alert.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _defaultArgs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/alert/defaultArgs.ts"),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/alert/template.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Componenten/Alert",component:_template__WEBPACK_IMPORTED_MODULE_1__.bZ,args:_defaultArgs__WEBPACK_IMPORTED_MODULE_0__._,argTypes:_template__WEBPACK_IMPORTED_MODULE_1__.PG,parameters:{status:{type:"WORK IN PROGRESS"},docusaurus:{link:"alert"}}},Default={args:_defaultArgs__WEBPACK_IMPORTED_MODULE_0__._,name:"Alert"};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: defaultArgs,\n  name: 'Alert'\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.2.0_sass@1.56.2_webpack@5.75.0/node_modules/sass-loader/dist/cjs.js!../../components/alert/index.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".rvo-alert{align-items:flex-start;display:flex;gap:var(--rvo-alert-gap);padding-block-end:var(--rvo-alert-padding-block-end);padding-block-start:var(--rvo-alert-padding-block-start);padding-inline-end:var(--rvo-alert-padding-inline-end);padding-inline-start:var(--rvo-alert-padding-inline-start)}.rvo-alert--padding-xs{padding-block-end:var(--rvo-alert-padding-xs-padding-block-end);padding-block-start:var(--rvo-alert-padding-xs-padding-block-start);padding-inline-end:var(--rvo-alert-padding-xs-padding-inline-end);padding-inline-start:var(--rvo-alert-padding-xs-padding-inline-start)}.rvo-alert--padding-sm{padding-block-end:var(--rvo-alert-padding-sm-padding-block-end);padding-block-start:var(--rvo-alert-padding-sm-padding-block-start);padding-inline-end:var(--rvo-alert-padding-sm-padding-inline-end);padding-inline-start:var(--rvo-alert-padding-sm-padding-inline-start)}.rvo-alert--padding-md{padding-block-end:var(--rvo-alert-padding-md-padding-block-end);padding-block-start:var(--rvo-alert-padding-md-padding-block-start);padding-inline-end:var(--rvo-alert-padding-md-padding-inline-end);padding-inline-start:var(--rvo-alert-padding-md-padding-inline-start)}.rvo-alert--padding-lg{padding-block-end:var(--rvo-alert-padding-lg-padding-block-end);padding-block-start:var(--rvo-alert-padding-lg-padding-block-start);padding-inline-end:var(--rvo-alert-padding-lg-padding-inline-end);padding-inline-start:var(--rvo-alert-padding-lg-padding-inline-start)}.rvo-alert--padding-xl{padding-block-end:var(--rvo-alert-padding-xl-padding-block-end);padding-block-start:var(--rvo-alert-padding-xl-padding-block-start);padding-inline-end:var(--rvo-alert-padding-xl-padding-inline-end);padding-inline-start:var(--rvo-alert-padding-xl-padding-inline-start)}.rvo-alert--padding-2xl{padding-block-end:var(--rvo-alert-padding-2xl-padding-block-end);padding-block-start:var(--rvo-alert-padding-2xl-padding-block-start);padding-inline-end:var(--rvo-alert-padding-2xl-padding-inline-end);padding-inline-start:var(--rvo-alert-padding-2xl-padding-inline-start)}.rvo-alert p:first-child{margin-block-start:0}.rvo-alert button{align-self:flex-start}.rvo-alert .rvo-icon{min-width:var(--rvo-size-xl)}.utrecht-form-fieldset .rvo-alert{margin-inline-end:var(--rvo-alert-fieldset-margin);margin-inline-start:var(--rvo-alert-fieldset-margin)}.utrecht-form-fieldset .rvo-alert:last-child{margin-block-end:var(--rvo-alert-fieldset-margin)}.rvo-alert--info{background-color:var(--rvo-alert-info-background-color)}.rvo-alert--warning{background-color:var(--rvo-alert-warning-background-color)}.rvo-alert--error{background-color:var(--rvo-alert-error-background-color)}.rvo-alert--success{background-color:var(--rvo-alert-success-background-color)}.rvo-button__close{--utrecht-icon-color: var(--rvo-color-zwart);margin-inline-start:auto;min-block-size:0;min-inline-size:0;padding-block-end:0;padding-block-start:0;padding-inline-end:0;padding-inline-start:0}.rvo-button__close .utrecht-icon.rvo-icon{background-color:var(--utrecht-document-color);min-width:var(--rvo-size-md)}","",{version:3,sources:["webpack://./../../components/alert/index.scss"],names:[],mappings:"AAKA,WACE,sBAAA,CACA,YAAA,CACA,wBAAA,CACA,oDAAA,CACA,wDAAA,CACA,sDAAA,CACA,0DAAA,CAGF,uBACE,+DAAA,CACA,mEAAA,CACA,iEAAA,CACA,qEAAA,CAGF,uBACE,+DAAA,CACA,mEAAA,CACA,iEAAA,CACA,qEAAA,CAGF,uBACE,+DAAA,CACA,mEAAA,CACA,iEAAA,CACA,qEAAA,CAGF,uBACE,+DAAA,CACA,mEAAA,CACA,iEAAA,CACA,qEAAA,CAGF,uBACE,+DAAA,CACA,mEAAA,CACA,iEAAA,CACA,qEAAA,CAGF,wBACE,gEAAA,CACA,oEAAA,CACA,kEAAA,CACA,sEAAA,CAGF,yBACE,oBAAA,CAGF,kBACE,qBAAA,CAGF,qBACE,4BAAA,CAGF,kCACE,kDAAA,CACA,oDAAA,CAGF,6CACE,iDAAA,CAGF,iBACE,uDAAA,CAGF,oBACE,0DAAA,CAGF,kBACE,wDAAA,CAGF,oBACE,0DAAA,CAGF,mBACE,4CAAA,CAEA,wBAAA,CACA,gBAAA,CACA,iBAAA,CACA,mBAAA,CACA,qBAAA,CACA,oBAAA,CACA,sBAAA,CAEA,0CACE,8CAAA,CACA,4BAAA",sourcesContent:["/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Community for NL Design System\n */\n\n.rvo-alert {\n  align-items: flex-start;\n  display: flex;\n  gap: var(--rvo-alert-gap);\n  padding-block-end: var(--rvo-alert-padding-block-end);\n  padding-block-start: var(--rvo-alert-padding-block-start);\n  padding-inline-end: var(--rvo-alert-padding-inline-end);\n  padding-inline-start: var(--rvo-alert-padding-inline-start);\n}\n\n.rvo-alert--padding-xs {\n  padding-block-end: var(--rvo-alert-padding-xs-padding-block-end);\n  padding-block-start: var(--rvo-alert-padding-xs-padding-block-start);\n  padding-inline-end: var(--rvo-alert-padding-xs-padding-inline-end);\n  padding-inline-start: var(--rvo-alert-padding-xs-padding-inline-start);\n}\n\n.rvo-alert--padding-sm {\n  padding-block-end: var(--rvo-alert-padding-sm-padding-block-end);\n  padding-block-start: var(--rvo-alert-padding-sm-padding-block-start);\n  padding-inline-end: var(--rvo-alert-padding-sm-padding-inline-end);\n  padding-inline-start: var(--rvo-alert-padding-sm-padding-inline-start);\n}\n\n.rvo-alert--padding-md {\n  padding-block-end: var(--rvo-alert-padding-md-padding-block-end);\n  padding-block-start: var(--rvo-alert-padding-md-padding-block-start);\n  padding-inline-end: var(--rvo-alert-padding-md-padding-inline-end);\n  padding-inline-start: var(--rvo-alert-padding-md-padding-inline-start);\n}\n\n.rvo-alert--padding-lg {\n  padding-block-end: var(--rvo-alert-padding-lg-padding-block-end);\n  padding-block-start: var(--rvo-alert-padding-lg-padding-block-start);\n  padding-inline-end: var(--rvo-alert-padding-lg-padding-inline-end);\n  padding-inline-start: var(--rvo-alert-padding-lg-padding-inline-start);\n}\n\n.rvo-alert--padding-xl {\n  padding-block-end: var(--rvo-alert-padding-xl-padding-block-end);\n  padding-block-start: var(--rvo-alert-padding-xl-padding-block-start);\n  padding-inline-end: var(--rvo-alert-padding-xl-padding-inline-end);\n  padding-inline-start: var(--rvo-alert-padding-xl-padding-inline-start);\n}\n\n.rvo-alert--padding-2xl {\n  padding-block-end: var(--rvo-alert-padding-2xl-padding-block-end);\n  padding-block-start: var(--rvo-alert-padding-2xl-padding-block-start);\n  padding-inline-end: var(--rvo-alert-padding-2xl-padding-inline-end);\n  padding-inline-start: var(--rvo-alert-padding-2xl-padding-inline-start);\n}\n\n.rvo-alert p:first-child {\n  margin-block-start: 0;\n}\n\n.rvo-alert button {\n  align-self: flex-start;\n}\n\n.rvo-alert .rvo-icon {\n  min-width: var(--rvo-size-xl);\n}\n\n.utrecht-form-fieldset .rvo-alert {\n  margin-inline-end: var(--rvo-alert-fieldset-margin);\n  margin-inline-start: var(--rvo-alert-fieldset-margin);\n}\n\n.utrecht-form-fieldset .rvo-alert:last-child {\n  margin-block-end: var(--rvo-alert-fieldset-margin);\n}\n\n.rvo-alert--info {\n  background-color: var(--rvo-alert-info-background-color);\n}\n\n.rvo-alert--warning {\n  background-color: var(--rvo-alert-warning-background-color);\n}\n\n.rvo-alert--error {\n  background-color: var(--rvo-alert-error-background-color);\n}\n\n.rvo-alert--success {\n  background-color: var(--rvo-alert-success-background-color);\n}\n\n.rvo-button__close {\n  --utrecht-icon-color: var(--rvo-color-zwart);\n\n  margin-inline-start: auto;\n  min-block-size: 0;\n  min-inline-size: 0;\n  padding-block-end: 0;\n  padding-block-start: 0;\n  padding-inline-end: 0;\n  padding-inline-start: 0;\n\n  .utrecht-icon.rvo-icon {\n    background-color: var(--utrecht-document-color);\n    min-width: var(--rvo-size-md);\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.2.0_sass@1.56.2_webpack@5.75.0/node_modules/sass-loader/dist/cjs.js!../../components/status-icon/index.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".rvo-status-icon-bevestiging{--utrecht-icon-color: var(--rvo-statusicon-bevestiging-background-color)}.rvo-status-icon-foutmelding{--utrecht-icon-color: var(--rvo-statusicon-foutmelding-background-color)}.rvo-status-icon-waarschuwing{--utrecht-icon-color: var(--rvo-statusicon-waarschuwing-background-color)}.rvo-status-icon-info{--utrecht-icon-color: var(--rvo-statusicon-info-background-color)}","",{version:3,sources:["webpack://./../../components/status-icon/index.scss"],names:[],mappings:"AAKA,6BACE,wEAAA,CAGF,6BACE,wEAAA,CAGF,8BACE,yEAAA,CAGF,sBACE,iEAAA",sourcesContent:["/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Community for NL Design System\n */\n\n.rvo-status-icon-bevestiging {\n  --utrecht-icon-color: var(--rvo-statusicon-bevestiging-background-color);\n}\n\n.rvo-status-icon-foutmelding {\n  --utrecht-icon-color: var(--rvo-statusicon-foutmelding-background-color);\n}\n\n.rvo-status-icon-waarschuwing {\n  --utrecht-icon-color: var(--rvo-statusicon-waarschuwing-background-color);\n}\n\n.rvo-status-icon-info {\n  --utrecht-icon-color: var(--rvo-statusicon-info-background-color);\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);