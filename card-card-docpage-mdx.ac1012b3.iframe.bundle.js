/*! For license information please see card-card-docpage-mdx.ac1012b3.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[7978,5132],{"../../node_modules/.pnpm/@babel+runtime@7.24.0/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{A:()=>_extends})},"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../components/card/card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _defaultArgs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/card/defaultArgs.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Componenten/Card",component:__webpack_require__("../../components/card/template.tsx").Zp,args:_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,parameters:{status:{type:"WORK IN PROGRESS"},docusaurus:{link:"card"}}},Default={args:_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,name:"Card"};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: defaultArgs,\n  name: 'Card'\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../components/card/card.docpage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>card_docpage});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.17_@types+react-dom@18.0.9_@types+react@18.3.7_encoding@0.1.13_react-do_4nm7brhu3gpfd2ti3glhuuidgm/node_modules/@storybook/blocks/dist/index.mjs");var card_stories=__webpack_require__("../../components/card/card.stories.tsx"),storybook_blocks=__webpack_require__("./config/storybook-blocks.tsx");function _createMdxContent(props){const _components=Object.assign({h2:"h2"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:card_stories,name:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(dist.hE,{}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:card_stories.Default,layout:"padded"}),"\n",(0,jsx_runtime.jsx)(dist.H2,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"documentatie",children:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(storybook_blocks.bE,{markdown:"\x3c!-- @license CC0-1.0 --\x3e\n\nEen card groepeert informatie die gerelateerd is aan elkaar. Over het algemeen is het mogelijk om via de card door te klikken naar meer informatie over het onderwerp.\n\n# Wanneer gebruik je een card?\n\nJe gebruikt een card wanneer je meerdere blokken met informatie moet tonen die gegroepeerd moeten worden. Denk bijvoorbeeld aan een overzicht van nieuwsberichten waarbij elk bericht een blok van gegroepeerde informatie is in een card.\n\nGebruik geen cards wanneer een lijst volstaat. Cards zijn slechter te scannen en gebruikers kunnen minder goed informatie vergelijken dan wanneer het in een lijst staat.\n\n# Anatomie van het component\n\nHet component bestaat minimaal uit:\n\n- Een titel\n- Een samenvatting\n\nMogelijke andere elementen binnen de card zijn:\n\n- Een afbeelding\n- Een button\n- Aanduiding van het type\n- Aanduiding van de datum\n\n# Richtlijnen\n\n- Een card bevat tussen 3 en 6 verschillende elementen\n- Binnen een card staat het belangrijkste element bovenaan\n- Als er als eerste een afbeelding getoond wordt moet het een duidelijke relatie hebben met de achterliggende content\n\n# Rijkshuisstijl\n\nVanuit de Rijkshuisstijl zijn er geen richtlijnen wat betreft het card component.\n\n# Bronnen\n\n- [Cards: UI-Component Definition](https://web.archive.org/web/20220309101808/https://www.nngroup.com/articles/cards-component/)\n- [How to design better cards - Kai Wong](https://uxdesign.cc/how-to-design-better-cards-2a5fa087b6c9)\n"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"changelog",children:"Changelog"}),"\n",(0,jsx_runtime.jsx)(storybook_blocks.Lz,{markdown:"# `@nl-rvo/card`\n\n## 1.0.0\n\n### Major Changes\n\n- daa0537: Create npm package for each component.\n\n## Pre-releases\n\n_@nl-rvo/component-library-css@1.0.0-alpha.361_:\nAdded component\n"})]})}const card_docpage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../components/card/defaultArgs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>defaultArgs});__webpack_require__("../../components/card/template.tsx");const defaultArgs={background:"none",backgroundColor:"none",backgroundImage:"mobiel.webp",padding:"sm",outline:!1,title:"Title",link:"#",image:"",imageSize:"md",fullCardLink:!1,showLinkIndicator:!0,invertedColors:!1,content:"Content"}},"../../components/card/template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Zp:()=>Card});var clsx=__webpack_require__("../../node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),defaultArgs=__webpack_require__("../../components/card/defaultArgs.ts"),icon_template=__webpack_require__("../../components/icon/template.tsx"),link_template=__webpack_require__("../../components/link/template.tsx"),parseContentMarkup=__webpack_require__("../../components/utils/parseContentMarkup.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),card=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@14.1.1_sass@1.71.1_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/sass-loader/dist/cjs.js!../../components/card/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(card.A,options);card.A&&card.A.locals&&card.A.locals;var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Card=({background=defaultArgs.D.background,backgroundColor=defaultArgs.D.backgroundColor,backgroundImage=defaultArgs.D.backgroundImage,padding=defaultArgs.D.padding,outline=defaultArgs.D.outline,title=defaultArgs.D.title,link=defaultArgs.D.link,fullCardLink=defaultArgs.D.fullCardLink,image=defaultArgs.D.image,imageSize=defaultArgs.D.imageSize,showLinkIndicator=defaultArgs.D.showLinkIndicator,invertedColors=defaultArgs.D.invertedColors,content=defaultArgs.D.content,className=defaultArgs.D.className,children,onClick,...props})=>{const contentMarkup=(0,parseContentMarkup.A)(children||content),hasLinkIndicator=showLinkIndicator&&link&&link.length>0&&!0===fullCardLink,hasBackgroundImage="image"===background&&backgroundImage&&backgroundImage?.length>0,ContentContainer=hasLinkIndicator?"div":react.Fragment,contentContainerProps=hasLinkIndicator?{className:(0,clsx.A)("rvo-card--with-link-indicator")}:{},getImageSrc=image=>image.startsWith("http")?image:`images/www/${image}`;return(0,jsx_runtime.jsxs)("div",{className:(0,clsx.A)("rvo-card",image&&image.length>0&&"rvo-card--with-image",image&&image.length>0&&imageSize&&`rvo-card--with-image-${imageSize}`,outline&&"image"!==background&&"rvo-card--outline",(outline||"none"!==background)&&`rvo-card--padding-${padding}`,"color"===background&&"none"!==backgroundColor&&`rvo-card--full-colour--${backgroundColor}`,hasBackgroundImage&&"rvo-card--with-background-image",invertedColors&&"rvo-card--inverted-colors",className),onClick,...props,children:[hasBackgroundImage&&(0,jsx_runtime.jsx)("div",{className:(0,clsx.A)("rvo-card__background-image-container"),children:(0,jsx_runtime.jsx)("img",{src:getImageSrc(backgroundImage),className:"rvo-card__background-image"})}),image&&image.length>0&&(0,jsx_runtime.jsx)("div",{className:(0,clsx.A)("rvo-card__image-container"),children:(0,jsx_runtime.jsx)("img",{src:getImageSrc(image),className:"rvo-card__image"})}),(0,jsx_runtime.jsxs)(ContentContainer,{...contentContainerProps,children:[(0,jsx_runtime.jsxs)("div",{className:"rvo-card__content",children:[title&&title.length>0&&(0,jsx_runtime.jsx)("h3",{className:"utrecht-heading-3",children:link&&link.length>0?(0,jsx_runtime.jsx)(link_template.Ay,{href:"#",className:(0,clsx.A)("rvo-card__link",fullCardLink&&"rvo-card__full-card-link"),children:(0,parseContentMarkup.A)(title)}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,parseContentMarkup.A)(title)})}),contentMarkup]}),hasLinkIndicator&&(0,jsx_runtime.jsx)(icon_template.Ay,{icon:"delta-naar-rechts",size:"sm",color:"hemelblauw",ariaLabel:"Delta naar rechts",role:"img",className:"rvo-card__link-indicator"})]})]})};Card.displayName="Card";try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{background:{defaultValue:{value:"defaultArgs.background"},description:"",name:"background",required:!1,type:{name:"enum",value:[{value:'"color"'},{value:'"none"'},{value:'"image"'}]}},backgroundColor:{defaultValue:{value:"defaultArgs.backgroundColor"},description:"",name:"backgroundColor",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"grijs-100"'},{value:'"wit"'},{value:'"hemelblauw"'}]}},backgroundImage:{defaultValue:{value:"defaultArgs.backgroundImage"},description:"",name:"backgroundImage",required:!1,type:{name:"string"}},padding:{defaultValue:{value:"defaultArgs.padding"},description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},outline:{defaultValue:{value:"defaultArgs.outline"},description:"",name:"outline",required:!1,type:{name:"boolean"}},title:{defaultValue:{value:"defaultArgs.title"},description:"",name:"title",required:!1,type:{name:"string"}},link:{defaultValue:{value:"defaultArgs.link"},description:"",name:"link",required:!1,type:{name:"string"}},fullCardLink:{defaultValue:{value:"defaultArgs.fullCardLink"},description:"",name:"fullCardLink",required:!1,type:{name:"boolean"}},image:{defaultValue:{value:"defaultArgs.image"},description:"",name:"image",required:!1,type:{name:"string"}},imageSize:{defaultValue:{value:"defaultArgs.imageSize"},description:"",name:"imageSize",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}},showLinkIndicator:{defaultValue:{value:"defaultArgs.showLinkIndicator"},description:"",name:"showLinkIndicator",required:!1,type:{name:"boolean"}},invertedColors:{defaultValue:{value:"defaultArgs.invertedColors"},description:"",name:"invertedColors",required:!1,type:{name:"boolean"}},content:{defaultValue:{value:"defaultArgs.content"},description:"@uxpinignoreprop",name:"content",required:!1,type:{name:"string"}},className:{defaultValue:{value:"defaultArgs.className"},description:"@uxpinignoreprop",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"@uxpinpropname Content",name:"children",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: MouseEvent<HTMLDivElement, MouseEvent>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/card/template.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"../../components/card/template.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}try{template.displayName="template",template.__docgenInfo={description:"",displayName:"template",props:{background:{defaultValue:{value:"defaultArgs.background"},description:"",name:"background",required:!1,type:{name:"enum",value:[{value:'"color"'},{value:'"none"'},{value:'"image"'}]}},backgroundColor:{defaultValue:{value:"defaultArgs.backgroundColor"},description:"",name:"backgroundColor",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"grijs-100"'},{value:'"wit"'},{value:'"hemelblauw"'}]}},backgroundImage:{defaultValue:{value:"defaultArgs.backgroundImage"},description:"",name:"backgroundImage",required:!1,type:{name:"string"}},padding:{defaultValue:{value:"defaultArgs.padding"},description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},outline:{defaultValue:{value:"defaultArgs.outline"},description:"",name:"outline",required:!1,type:{name:"boolean"}},title:{defaultValue:{value:"defaultArgs.title"},description:"",name:"title",required:!1,type:{name:"string"}},link:{defaultValue:{value:"defaultArgs.link"},description:"",name:"link",required:!1,type:{name:"string"}},fullCardLink:{defaultValue:{value:"defaultArgs.fullCardLink"},description:"",name:"fullCardLink",required:!1,type:{name:"boolean"}},image:{defaultValue:{value:"defaultArgs.image"},description:"",name:"image",required:!1,type:{name:"string"}},imageSize:{defaultValue:{value:"defaultArgs.imageSize"},description:"",name:"imageSize",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}},showLinkIndicator:{defaultValue:{value:"defaultArgs.showLinkIndicator"},description:"",name:"showLinkIndicator",required:!1,type:{name:"boolean"}},invertedColors:{defaultValue:{value:"defaultArgs.invertedColors"},description:"",name:"invertedColors",required:!1,type:{name:"boolean"}},content:{defaultValue:{value:"defaultArgs.content"},description:"@uxpinignoreprop",name:"content",required:!1,type:{name:"string"}},className:{defaultValue:{value:"defaultArgs.className"},description:"@uxpinignoreprop",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"@uxpinpropname Content",name:"children",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: MouseEvent<HTMLDivElement, MouseEvent>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/card/template.tsx#template"]={docgenInfo:template.__docgenInfo,name:"template",path:"../../components/card/template.tsx#template"})}catch(__react_docgen_typescript_loader_error){}},"../../components/utils/parseContentMarkup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _validateHTML__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../components/utils/validateHTML.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(content,props=void 0)=>"string"==typeof content&&content.length&&(0,_validateHTML__WEBPACK_IMPORTED_MODULE_2__.A)(content)?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{...props,dangerouslySetInnerHTML:{__html:content}}):props?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{...props,children:content}):content},"../../components/utils/validateHTML.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=htmlString=>{if("undefined"!=typeof window){let htmlStringToParse=htmlString;const containsHTML=/<[a-z][\s\S]*>/i.test(htmlString);if(/<([A-Z][\w]*)(\s*[^>]*)?\/?>/.test(htmlString))return!1;containsHTML&&(htmlStringToParse=`<div>${htmlString}</div>`);return null===(new DOMParser).parseFromString(htmlStringToParse,"application/xml").querySelector("parsererror")}return!0}},"./config/storybook-blocks.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Lz:()=>Changelog,bE:()=>Readme});var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.17_@types+react-dom@18.0.9_@types+react@18.3.7_encoding@0.1.13_react-do_4nm7brhu3gpfd2ti3glhuuidgm/node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const headingElement=level=>2===level?"h2":3===level?"h3":4===level?"h4":5===level?"h5":6===level?"h6":"h1",MarkdownBlock=({markdown,omitH1=!1,headingLevel=1})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.oz,{options:{overrides:{h1:{component:omitH1?()=>null:headingElement(headingLevel)},h2:{component:headingElement(headingLevel+1)},h3:{component:headingElement(headingLevel+2)},h4:{component:headingElement(headingLevel+3)},h5:{component:headingElement(headingLevel+4)},h6:{component:headingElement(headingLevel+5)}}},children:markdown});MarkdownBlock.displayName="MarkdownBlock";const Changelog=({markdown})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MarkdownBlock,{omitH1:!0,headingLevel:2,markdown});Changelog.displayName="Changelog";const Readme=({markdown})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MarkdownBlock,{omitH1:!0,markdown});Readme.displayName="Readme";try{headingElement.displayName="headingElement",headingElement.__docgenInfo={description:"",displayName:"headingElement",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#headingElement"]={docgenInfo:headingElement.__docgenInfo,name:"headingElement",path:"config/storybook-blocks.tsx#headingElement"})}catch(__react_docgen_typescript_loader_error){}try{MarkdownBlock.displayName="MarkdownBlock",MarkdownBlock.__docgenInfo={description:"",displayName:"MarkdownBlock",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"any"}},omitH1:{defaultValue:{value:"false"},description:"",name:"omitH1",required:!1,type:{name:"boolean"}},headingLevel:{defaultValue:{value:"1"},description:"",name:"headingLevel",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#MarkdownBlock"]={docgenInfo:MarkdownBlock.__docgenInfo,name:"MarkdownBlock",path:"config/storybook-blocks.tsx#MarkdownBlock"})}catch(__react_docgen_typescript_loader_error){}try{Changelog.displayName="Changelog",Changelog.__docgenInfo={description:"",displayName:"Changelog",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#Changelog"]={docgenInfo:Changelog.__docgenInfo,name:"Changelog",path:"config/storybook-blocks.tsx#Changelog"})}catch(__react_docgen_typescript_loader_error){}try{Readme.displayName="Readme",Readme.__docgenInfo={description:"",displayName:"Readme",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#Readme"]={docgenInfo:Readme.__docgenInfo,name:"Readme",path:"config/storybook-blocks.tsx#Readme"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@14.1.1_sass@1.71.1_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/sass-loader/dist/cjs.js!../../components/card/index.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.rvo-card{border-radius:var(--rvo-card-border-radius);position:relative}.rvo-card.rvo-card--full-colour{padding-block-end:var(--rvo-space-lg);padding-block-start:var(--rvo-space-xl);padding-inline-end:var(--rvo-space-xl);padding-inline-start:var(--rvo-space-xl)}.rvo-card.rvo-card--full-colour--wit{background-color:var(--rvo-color-wit)}.rvo-card.rvo-card--full-colour--grijs-100{background-color:var(--rvo-color-grijs-100)}.rvo-card.rvo-card--full-colour--hemelblauw{background-color:var(--rvo-color-hemelblauw)}.rvo-card.rvo-card--inverted-colors{--rvo-link-color: var(--rvo-card-inverted-color);--rvo-link-active-color: var(--rvo-card-inverted-color);--rvo-link-focus-color: var(--rvo-card-inverted-color);--rvo-link-hover-color: var(--rvo-card-inverted-color);color:var(--rvo-card-inverted-color)}.rvo-card.rvo-card--inverted-colors .rvo-card__link-indicator{--utrecht-icon-color: var(--rvo-card-inverted-color)}.rvo-card.rvo-card--padding-sm{border-radius:var(--rvo-card-padding-sm-border-radius);padding-block-end:var(--rvo-card-padding-sm-padding-block-end);padding-block-start:var(--rvo-card-padding-sm-padding-block-start);padding-inline-end:var(--rvo-card-padding-sm-padding-inline-end);padding-inline-start:var(--rvo-card-padding-sm-padding-inline-start)}.rvo-card.rvo-card--padding-md{border-radius:var(--rvo-card-padding-md-border-radius);padding-block-end:var(--rvo-card-padding-md-padding-block-end);padding-block-start:var(--rvo-card-padding-md-padding-block-start);padding-inline-end:var(--rvo-card-padding-md-padding-inline-end);padding-inline-start:var(--rvo-card-padding-md-padding-inline-start)}.rvo-card.rvo-card--padding-lg{border-radius:var(--rvo-card-padding-lg-border-radius);padding-block-end:var(--rvo-card-padding-lg-padding-block-end);padding-block-start:var(--rvo-card-padding-lg-padding-block-start);padding-inline-end:var(--rvo-card-padding-lg-padding-inline-end);padding-inline-start:var(--rvo-card-padding-lg-padding-inline-start)}.rvo-card.rvo-card--padding-xl{border-radius:var(--rvo-card-padding-xl-border-radius);padding-block-end:var(--rvo-card-padding-xl-padding-block-end);padding-block-start:var(--rvo-card-padding-xl-padding-block-start);padding-inline-end:var(--rvo-card-padding-xl-padding-inline-end);padding-inline-start:var(--rvo-card-padding-xl-padding-inline-start)}.rvo-card.rvo-card--outline{border:var(--rvo-card-outline-border-width) solid var(--rvo-card-outline-border-color)}.rvo-card.rvo-card--outline.rvo-card--active{border-color:var(--rvo-card-outline-hover-border-color)}.rvo-card.rvo-card--outline:has(.rvo-card__full-card-link):hover,.rvo-card.rvo-card--outline:has(.rvo-card__full-card-link):focus{border-color:var(--rvo-card-outline-hover-border-color)}.rvo-card.rvo-card--with-image{overflow:hidden}.rvo-card.rvo-card--with-image.rvo-card--with-image-sm{align-items:center;display:flex}.rvo-card.rvo-card--with-image.rvo-card--with-image-sm .rvo-card__image-container{margin-block-end:-24px;margin-inline-end:24px}.rvo-card.rvo-card--with-image.rvo-card--with-image-sm .rvo-card__image{height:var(--rvo-card-image-height);object-fit:cover;width:var(--rvo-card-image-width)}.rvo-card.rvo-card--with-image.rvo-card--with-image-md .rvo-card__image{width:100%}.rvo-card.rvo-card--with-background-image{min-height:var(--rvo-card-background-image-min-height);overflow:hidden;padding-block-start:var(--rvo-space-xl);position:relative}.rvo-card.rvo-card--with-background-image .rvo-card__content{position:relative}.rvo-card.rvo-card--with-background-image::after{background-color:var(--rvo-card-background-image-overlay-color);content:"";display:block;height:100%;left:0;opacity:var(--rvo-card-background-image-overlay-opacity);position:absolute;top:0;width:100%}.rvo-card.rvo-card--with-background-image .rvo-card__background-image{left:0;object-fit:cover;position:absolute;top:0;width:100%}.rvo-card .rvo-card__content,.rvo-card .rvo-card--with-link-indicator{position:relative;z-index:1}.rvo-card .rvo-card__full-card-link{display:block;text-decoration:none}.rvo-card .rvo-card__full-card-link:hover{text-decoration:underline}.rvo-card .rvo-card__full-card-link::after{content:"";cursor:pointer;display:inline-block;height:100%;left:0;position:absolute;top:0;width:100%;z-index:1}.rvo-card .rvo-card--with-link-indicator{align-items:center;display:flex;flex:1;gap:var(--rvo-space-xs);justify-content:space-between}.rvo-card .rvo-card--with-link-indicator .rvo-icon--sm{min-height:var(--rvo-size-sm);min-width:var(--rvo-size-sm)}.rvo-card .rvo-card__image-container{line-height:0;margin-block-end:var(--rvo-card-image-margin-block-end);margin-block-start:-24px;margin-inline-end:-24px;margin-inline-start:-24px}.rvo-card .rvo-card__image{object-fit:cover}',"",{version:3,sources:["webpack://./../../components/card/index.scss"],names:[],mappings:"AAIA,UACE,2CAAA,CACA,iBAAA,CAEA,gCACE,qCAAA,CACA,uCAAA,CACA,sCAAA,CACA,wCAAA,CAGF,qCACE,qCAAA,CAGF,2CACE,2CAAA,CAGF,4CACE,4CAAA,CAGF,oCACE,gDAAA,CACA,uDAAA,CACA,sDAAA,CACA,sDAAA,CAEA,oCAAA,CAEA,8DACE,oDAAA,CAIJ,+BACE,sDAAA,CACA,8DAAA,CACA,kEAAA,CACA,gEAAA,CACA,oEAAA,CAGF,+BACE,sDAAA,CACA,8DAAA,CACA,kEAAA,CACA,gEAAA,CACA,oEAAA,CAGF,+BACE,sDAAA,CACA,8DAAA,CACA,kEAAA,CACA,gEAAA,CACA,oEAAA,CAGF,+BACE,sDAAA,CACA,8DAAA,CACA,kEAAA,CACA,gEAAA,CACA,oEAAA,CAGF,4BACE,sFAAA,CAEA,6CACE,uDAAA,CAGF,kIAEE,uDAAA,CAIJ,+BACE,eAAA,CAEA,uDACE,kBAAA,CACA,YAAA,CAEA,kFACE,sBAAA,CACA,sBAAA,CAGF,wEACE,mCAAA,CACA,gBAAA,CACA,iCAAA,CAIJ,wEACE,UAAA,CAIJ,0CACE,sDAAA,CACA,eAAA,CACA,uCAAA,CACA,iBAAA,CAEA,6DACE,iBAAA,CAGF,iDACE,+DAAA,CACA,UAAA,CACA,aAAA,CACA,WAAA,CACA,MAAA,CACA,wDAAA,CACA,iBAAA,CACA,KAAA,CACA,UAAA,CAGF,sEACE,MAAA,CACA,gBAAA,CACA,iBAAA,CACA,KAAA,CACA,UAAA,CAIJ,sEAEE,iBAAA,CACA,SAAA,CAGF,oCACE,aAAA,CACA,oBAAA,CAEA,0CACE,yBAAA,CAGF,2CACE,UAAA,CACA,cAAA,CACA,oBAAA,CACA,WAAA,CACA,MAAA,CACA,iBAAA,CACA,KAAA,CACA,UAAA,CACA,SAAA,CAIJ,yCACE,kBAAA,CACA,YAAA,CACA,MAAA,CACA,uBAAA,CACA,6BAAA,CAEA,uDACE,6BAAA,CACA,4BAAA,CAIJ,qCACE,aAAA,CACA,uDAAA,CACA,wBAAA,CACA,uBAAA,CACA,yBAAA,CAGF,2BACE,gBAAA",sourcesContent:['/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Community for NL Design System\n */\n.rvo-card {\n  border-radius: var(--rvo-card-border-radius);\n  position: relative;\n\n  &.rvo-card--full-colour {\n    padding-block-end: var(--rvo-space-lg);\n    padding-block-start: var(--rvo-space-xl);\n    padding-inline-end: var(--rvo-space-xl);\n    padding-inline-start: var(--rvo-space-xl);\n  }\n\n  &.rvo-card--full-colour--wit {\n    background-color: var(--rvo-color-wit);\n  }\n\n  &.rvo-card--full-colour--grijs-100 {\n    background-color: var(--rvo-color-grijs-100);\n  }\n\n  &.rvo-card--full-colour--hemelblauw {\n    background-color: var(--rvo-color-hemelblauw);\n  }\n\n  &.rvo-card--inverted-colors {\n    --rvo-link-color: var(--rvo-card-inverted-color);\n    --rvo-link-active-color: var(--rvo-card-inverted-color);\n    --rvo-link-focus-color: var(--rvo-card-inverted-color);\n    --rvo-link-hover-color: var(--rvo-card-inverted-color);\n\n    color: var(--rvo-card-inverted-color);\n\n    .rvo-card__link-indicator {\n      --utrecht-icon-color: var(--rvo-card-inverted-color);\n    }\n  }\n\n  &.rvo-card--padding-sm {\n    border-radius: var(--rvo-card-padding-sm-border-radius);\n    padding-block-end: var(--rvo-card-padding-sm-padding-block-end);\n    padding-block-start: var(--rvo-card-padding-sm-padding-block-start);\n    padding-inline-end: var(--rvo-card-padding-sm-padding-inline-end);\n    padding-inline-start: var(--rvo-card-padding-sm-padding-inline-start);\n  }\n\n  &.rvo-card--padding-md {\n    border-radius: var(--rvo-card-padding-md-border-radius);\n    padding-block-end: var(--rvo-card-padding-md-padding-block-end);\n    padding-block-start: var(--rvo-card-padding-md-padding-block-start);\n    padding-inline-end: var(--rvo-card-padding-md-padding-inline-end);\n    padding-inline-start: var(--rvo-card-padding-md-padding-inline-start);\n  }\n\n  &.rvo-card--padding-lg {\n    border-radius: var(--rvo-card-padding-lg-border-radius);\n    padding-block-end: var(--rvo-card-padding-lg-padding-block-end);\n    padding-block-start: var(--rvo-card-padding-lg-padding-block-start);\n    padding-inline-end: var(--rvo-card-padding-lg-padding-inline-end);\n    padding-inline-start: var(--rvo-card-padding-lg-padding-inline-start);\n  }\n\n  &.rvo-card--padding-xl {\n    border-radius: var(--rvo-card-padding-xl-border-radius);\n    padding-block-end: var(--rvo-card-padding-xl-padding-block-end);\n    padding-block-start: var(--rvo-card-padding-xl-padding-block-start);\n    padding-inline-end: var(--rvo-card-padding-xl-padding-inline-end);\n    padding-inline-start: var(--rvo-card-padding-xl-padding-inline-start);\n  }\n\n  &.rvo-card--outline {\n    border: var(--rvo-card-outline-border-width) solid var(--rvo-card-outline-border-color);\n\n    &.rvo-card--active {\n      border-color: var(--rvo-card-outline-hover-border-color);\n    }\n\n    &:has(.rvo-card__full-card-link):hover,\n    &:has(.rvo-card__full-card-link):focus {\n      border-color: var(--rvo-card-outline-hover-border-color);\n    }\n  }\n\n  &.rvo-card--with-image {\n    overflow: hidden;\n\n    &.rvo-card--with-image-sm {\n      align-items: center;\n      display: flex;\n\n      .rvo-card__image-container {\n        margin-block-end: -24px;\n        margin-inline-end: 24px;\n      }\n\n      .rvo-card__image {\n        height: var(--rvo-card-image-height);\n        object-fit: cover;\n        width: var(--rvo-card-image-width);\n      }\n    }\n\n    &.rvo-card--with-image-md .rvo-card__image {\n      width: 100%;\n    }\n  }\n\n  &.rvo-card--with-background-image {\n    min-height: var(--rvo-card-background-image-min-height);\n    overflow: hidden;\n    padding-block-start: var(--rvo-space-xl);\n    position: relative;\n\n    .rvo-card__content {\n      position: relative;\n    }\n\n    &::after {\n      background-color: var(--rvo-card-background-image-overlay-color);\n      content: "";\n      display: block;\n      height: 100%;\n      left: 0;\n      opacity: var(--rvo-card-background-image-overlay-opacity);\n      position: absolute;\n      top: 0;\n      width: 100%;\n    }\n\n    .rvo-card__background-image {\n      left: 0;\n      object-fit: cover;\n      position: absolute;\n      top: 0;\n      width: 100%;\n    }\n  }\n\n  .rvo-card__content,\n  .rvo-card--with-link-indicator {\n    position: relative;\n    z-index: 1;\n  }\n\n  .rvo-card__full-card-link {\n    display: block;\n    text-decoration: none;\n\n    &:hover {\n      text-decoration: underline;\n    }\n\n    &::after {\n      content: "";\n      cursor: pointer;\n      display: inline-block;\n      height: 100%;\n      left: 0;\n      position: absolute;\n      top: 0;\n      width: 100%;\n      z-index: 1;\n    }\n  }\n\n  .rvo-card--with-link-indicator {\n    align-items: center;\n    display: flex;\n    flex: 1;\n    gap: var(--rvo-space-xs);\n    justify-content: space-between;\n\n    .rvo-icon--sm {\n      min-height: var(--rvo-size-sm);\n      min-width: var(--rvo-size-sm);\n    }\n  }\n\n  .rvo-card__image-container {\n    line-height: 0;\n    margin-block-end: var(--rvo-card-image-margin-block-end);\n    margin-block-start: -24px;\n    margin-inline-end: -24px;\n    margin-inline-start: -24px;\n  }\n\n  .rvo-card__image {\n    object-fit: cover;\n  }\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);