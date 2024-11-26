/*! For license information please see form-dateinput-form-dateinput-docpage-mdx.97c9a832.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[1968,2398],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../components/form-dateinput/form-dateinput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _src_defaultArgs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/form-dateinput/src/defaultArgs.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Componenten/Form/Date input",component:__webpack_require__("../../components/form-dateinput/src/template.tsx").J3,args:_src_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,parameters:{status:{type:"PRODUCTION"},docusaurus:{link:"form-dateinput"}}},Default={args:_src_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,name:"Date input"};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: defaultArgs,\n  name: 'Date input'\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../components/form-dateinput/form-dateinput.docpage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>form_dateinput_docpage});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.17_@types+react-dom@18.0.9_@types+react@18.3.7_encoding@0.1.13_react-do_4nm7brhu3gpfd2ti3glhuuidgm/node_modules/@storybook/blocks/dist/index.mjs");var form_dateinput_stories=__webpack_require__("../../components/form-dateinput/form-dateinput.stories.tsx"),storybook_blocks=__webpack_require__("./config/storybook-blocks.tsx"),README=__webpack_require__("../../components/form-field/README.md");function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p",em:"em"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:form_dateinput_stories,name:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(dist.hE,{}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:form_dateinput_stories.Default,layout:"padded"}),"\n",(0,jsx_runtime.jsx)(dist.H2,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"documentatie",children:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(storybook_blocks.bE,{markdown:"Documentatie voor date input\n"}),"\n",(0,jsx_runtime.jsx)(dist.oz,{children:README}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"changelog",children:"Changelog"}),"\n",(0,jsx_runtime.jsx)(storybook_blocks.Lz,{markdown:"# `@nl-rvo/css-form-dateinput`\n\n## 1.1.0\n\n### Minor Changes\n\n- 0cdf4eb: Remove utrecht-components-css reference and include utrecht css per component when needed\n\n## 1.0.1\n\n### Patch Changes\n\n- c029d6a: Fixed callback events (eg onChange, onFocus) for field components\n\n## 1.0.0\n\n### Major Changes\n\n- daa0537: Create npm package for each component.\n\n## Pre-releases\n\n_@nl-rvo/component-library-css@1.0.0-alpha.360_:\nAdded component\n"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.em,{children:"@nl-rvo/css-form-textinput"})})]})}const form_dateinput_docpage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../components/form-dateinput/src/defaultArgs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>defaultArgs});__webpack_require__("../../components/form-dateinput/src/template.tsx");const defaultArgs={id:"field",disabled:!1,focus:!1,readOnly:!1,invalid:!1,required:!1,value:"",min:void 0,max:void 0,step:void 0,size:"md"}},"../../components/form-dateinput/src/template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J3:()=>DateInput,Uv:()=>argTypes});var clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs"),_defaultArgs__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../components/form-dateinput/src/defaultArgs.ts")),_form_textinput_src_template__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../components/form-textinput/src/template.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const argTypes={id:{control:"text"},disabled:{control:"boolean"},focus:{control:"boolean"},invalid:{control:"boolean"},readOnly:{control:"boolean"},required:{control:"boolean"},value:{control:"text",description:'Date value in "hh:mm:ss" format'},min:{control:"text",description:'Date value in "hh:mm:ss" format'},max:{control:"text",description:'Date value in "hh:mm:ss" format'},step:{control:"number"},prefix:{control:"text"},suffix:{control:"text"},size:{options:["sm","md","lg","max"],control:{type:"radio"}},onFocus:{table:{disable:!0}},onBlur:{table:{disable:!0}},onChange:{table:{disable:!0}},onClick:{table:{disable:!0}},onInput:{table:{disable:!0}},onInvalid:{table:{disable:!0}}},DateInput=({id=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__.D.id,disabled=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__.D.disabled,focus=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__.D.focus,readOnly=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__.D.readOnly,invalid=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__.D.invalid,required=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__.D.required,value=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__.D.value,min=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__.D.min,max=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__.D.max,step=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__.D.step,size=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__.D.size,prefix=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__.D.prefix,suffix=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__.D.suffix,...otherProps})=>{const props={id,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.A)("utrecht-textbox","utrecht-textbox--html-input",disabled&&"utrecht-textbox--disabled",focus&&"utrecht-textbox--focus utrecht-textbox--focus-visible",invalid&&"utrecht-textbox--invalid",readOnly&&"utrecht-textbox--readonly",required&&"utrecht-textbox--required"),disabled:disabled||void 0,"aria-invalid":invalid||void 0,required:required||void 0,readOnly:readOnly||void 0,defaultValue:value,...min&&{min},...max&&{max},...step&&{step},...size&&{size},...prefix&&{prefix},...suffix&&{suffix},...otherProps};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_form_textinput_src_template__WEBPACK_IMPORTED_MODULE_2__.Ay,{type:"date",...props})};DateInput.displayName="DateInput";try{DateInput.displayName="DateInput",DateInput.__docgenInfo={description:"",displayName:"DateInput",props:{id:{defaultValue:{value:"defaultArgs.id"},description:"",name:"id",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"defaultArgs.disabled"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},focus:{defaultValue:{value:"defaultArgs.focus"},description:"@uxpinpropname Has focus",name:"focus",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"defaultArgs.readOnly"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"defaultArgs.invalid"},description:"@uxpinpropname Is invalid",name:"invalid",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"defaultArgs.required"},description:"",name:"required",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:{value:"defaultArgs.value"},description:"@uxpinpropname Value (yyyy-mm-dd format)>",name:"value",required:!1,type:{name:"string"}},min:{defaultValue:{value:"defaultArgs.min"},description:"@uxpinpropname Min (yyyy-mm-dd format)>",name:"min",required:!1,type:{name:"string"}},max:{defaultValue:{value:"defaultArgs.max"},description:"@uxpinpropname Max (yyyy-mm-dd format)>",name:"max",required:!1,type:{name:"string"}},step:{defaultValue:{value:"defaultArgs.step"},description:"",name:"step",required:!1,type:{name:"number"}},prefix:{defaultValue:{value:"defaultArgs.prefix"},description:"",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:{value:"defaultArgs.suffix"},description:"",name:"suffix",required:!1,type:{name:"string"}},size:{defaultValue:{value:"defaultArgs.size"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"max"'}]}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(event: FocusEvent<HTMLInputElement, Element>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(event: FocusEvent<HTMLInputElement, Element>) => void"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: MouseEvent<HTMLInputElement, MouseEvent>) => void"}},onInput:{defaultValue:null,description:"",name:"onInput",required:!1,type:{name:"(event: FormEvent<HTMLInputElement>) => void"}},onInvalid:{defaultValue:null,description:"",name:"onInvalid",required:!1,type:{name:"(event: InvalidEvent<EventTarget & HTMLInputElement>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/form-dateinput/src/template.tsx#DateInput"]={docgenInfo:DateInput.__docgenInfo,name:"DateInput",path:"../../components/form-dateinput/src/template.tsx#DateInput"})}catch(__react_docgen_typescript_loader_error){}try{template.displayName="template",template.__docgenInfo={description:"",displayName:"template",props:{id:{defaultValue:{value:"defaultArgs.id"},description:"",name:"id",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"defaultArgs.disabled"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},focus:{defaultValue:{value:"defaultArgs.focus"},description:"@uxpinpropname Has focus",name:"focus",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"defaultArgs.readOnly"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"defaultArgs.invalid"},description:"@uxpinpropname Is invalid",name:"invalid",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"defaultArgs.required"},description:"",name:"required",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:{value:"defaultArgs.value"},description:"@uxpinpropname Value (yyyy-mm-dd format)>",name:"value",required:!1,type:{name:"string"}},min:{defaultValue:{value:"defaultArgs.min"},description:"@uxpinpropname Min (yyyy-mm-dd format)>",name:"min",required:!1,type:{name:"string"}},max:{defaultValue:{value:"defaultArgs.max"},description:"@uxpinpropname Max (yyyy-mm-dd format)>",name:"max",required:!1,type:{name:"string"}},step:{defaultValue:{value:"defaultArgs.step"},description:"",name:"step",required:!1,type:{name:"number"}},prefix:{defaultValue:{value:"defaultArgs.prefix"},description:"",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:{value:"defaultArgs.suffix"},description:"",name:"suffix",required:!1,type:{name:"string"}},size:{defaultValue:{value:"defaultArgs.size"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"max"'}]}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(event: FocusEvent<HTMLInputElement, Element>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(event: FocusEvent<HTMLInputElement, Element>) => void"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: MouseEvent<HTMLInputElement, MouseEvent>) => void"}},onInput:{defaultValue:null,description:"",name:"onInput",required:!1,type:{name:"(event: FormEvent<HTMLInputElement>) => void"}},onInvalid:{defaultValue:null,description:"",name:"onInvalid",required:!1,type:{name:"(event: InvalidEvent<EventTarget & HTMLInputElement>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/form-dateinput/src/template.tsx#template"]={docgenInfo:template.__docgenInfo,name:"template",path:"../../components/form-dateinput/src/template.tsx#template"})}catch(__react_docgen_typescript_loader_error){}},"./config/storybook-blocks.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Lz:()=>Changelog,bE:()=>Readme});var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.17_@types+react-dom@18.0.9_@types+react@18.3.7_encoding@0.1.13_react-do_4nm7brhu3gpfd2ti3glhuuidgm/node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const headingElement=level=>2===level?"h2":3===level?"h3":4===level?"h4":5===level?"h5":6===level?"h6":"h1",MarkdownBlock=({markdown,omitH1=!1,headingLevel=1})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.oz,{options:{overrides:{h1:{component:omitH1?()=>null:headingElement(headingLevel)},h2:{component:headingElement(headingLevel+1)},h3:{component:headingElement(headingLevel+2)},h4:{component:headingElement(headingLevel+3)},h5:{component:headingElement(headingLevel+4)},h6:{component:headingElement(headingLevel+5)}}},children:markdown});MarkdownBlock.displayName="MarkdownBlock";const Changelog=({markdown})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MarkdownBlock,{omitH1:!0,headingLevel:2,markdown});Changelog.displayName="Changelog";const Readme=({markdown})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MarkdownBlock,{omitH1:!0,markdown});Readme.displayName="Readme";try{headingElement.displayName="headingElement",headingElement.__docgenInfo={description:"",displayName:"headingElement",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#headingElement"]={docgenInfo:headingElement.__docgenInfo,name:"headingElement",path:"config/storybook-blocks.tsx#headingElement"})}catch(__react_docgen_typescript_loader_error){}try{MarkdownBlock.displayName="MarkdownBlock",MarkdownBlock.__docgenInfo={description:"",displayName:"MarkdownBlock",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"any"}},omitH1:{defaultValue:{value:"false"},description:"",name:"omitH1",required:!1,type:{name:"boolean"}},headingLevel:{defaultValue:{value:"1"},description:"",name:"headingLevel",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#MarkdownBlock"]={docgenInfo:MarkdownBlock.__docgenInfo,name:"MarkdownBlock",path:"config/storybook-blocks.tsx#MarkdownBlock"})}catch(__react_docgen_typescript_loader_error){}try{Changelog.displayName="Changelog",Changelog.__docgenInfo={description:"",displayName:"Changelog",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#Changelog"]={docgenInfo:Changelog.__docgenInfo,name:"Changelog",path:"config/storybook-blocks.tsx#Changelog"})}catch(__react_docgen_typescript_loader_error){}try{Readme.displayName="Readme",Readme.__docgenInfo={description:"",displayName:"Readme",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#Readme"]={docgenInfo:Readme.__docgenInfo,name:"Readme",path:"config/storybook-blocks.tsx#Readme"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../components/form-field/README.md":module=>{"use strict";module.exports="Algemene veldregels:\n\n- Gebruik (niet verplicht) bij optionele formulier velden in plaats van \\* (verplicht) bij verplichte formulier velden\n- Gebruik expandable tekst in plaats van een toggle knop\n- Gebruik expandable tekst in plaats van een ‘?’ uitleg icoontje\n"}}]);