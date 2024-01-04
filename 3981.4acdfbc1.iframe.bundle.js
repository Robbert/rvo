/*! For license information please see 3981.4acdfbc1.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[3981],{"../../components/menubar-mobile/defaultArgs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>defaultArgs});__webpack_require__("../../components/menubar-mobile/template.tsx");const defaultArgs={size:"md",items:[{label:"Home",icon:"home",link:"#"},{label:"Mijn aanvragen",icon:"publicatie",link:"#"},{label:"Nieuwe aanvraag",icon:"plus",link:"#"},{label:"Uitloggen",icon:"versleutelen",link:"#",useDivider:!0,align:"right"}],submenuItems:[],useIcons:!0,iconPlacement:"before",isOpen:!1,horizontalRule:!0}},"../../components/menubar-mobile/template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{jc:()=>MobileMenuBar,PG:()=>argTypes});var index_esm=__webpack_require__("../../node_modules/.pnpm/@utrecht+component-library-react@1.0.0-alpha.190_react-dom@18.2.0_react@18.2.0/node_modules/@utrecht/component-library-react/dist/index.esm.js"),clsx_m=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),icon_template=__webpack_require__("../../components/icon/template.tsx"),menubar_template=__webpack_require__("../../components/menubar/template.tsx"),defaultArgs=__webpack_require__("../../components/menubar-mobile/defaultArgs.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),menubar_mobile=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.2.0_sass@1.56.2_webpack@5.75.0/node_modules/sass-loader/dist/cjs.js!../../components/menubar-mobile/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(menubar_mobile.Z,options);menubar_mobile.Z&&menubar_mobile.Z.locals&&menubar_mobile.Z.locals;var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const argTypes={size:{options:["sm","md","lg"],control:{type:"radio"}},items:{type:{name:"array",required:!0}},submenuItems:{type:{name:"array",required:!0}},useIcons:{control:"boolean"},iconPlacement:{options:["before","after"],control:{type:"radio"}},isOpen:{control:"boolean"}},MobileMenuBar=({size=defaultArgs._.size,items=defaultArgs._.items,useIcons=defaultArgs._.useIcons,iconPlacement=defaultArgs._.iconPlacement,submenuItems=defaultArgs._.submenuItems,isOpen:isOpenArg=defaultArgs._.isOpen,deltaForActiveItem=defaultArgs._.deltaForActiveItem,horizontalRule=defaultArgs._.horizontalRule,children})=>{let itemsMarkup;itemsMarkup=children||items.map(((item,index)=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,menubar_template.YI)({key:item.label,label:item.label,icon:item.icon,active:item.active,link:item.link,useIcon:useIcons,size,iconPlacement,deltaForActiveItem,useDivider:item.useDivider}),item.active&&submenuItems.map(((submenuItem,index)=>(0,jsx_runtime.jsx)(react.Fragment,{children:(0,menubar_template.YI)({key:`${item.label}--${index}`,label:submenuItem.label,icon:submenuItem.icon,active:void 0,link:submenuItem.link,useIcon:useIcons,size,iconPlacement,type:"sub",deltaForActiveItem,useDivider:item.useDivider})},index)))]},index)));const[isOpen,setIsOpen]=(0,react.useState)(isOpenArg),onClick=(0,react.useCallback)((()=>{setIsOpen((isOpen=>!isOpen))}),[isOpen]);return(0,react.useEffect)((()=>{setIsOpen(isOpenArg)}),[isOpenArg]),(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.Z)("rvo-mobile-menu",`rvo-mobile-menu--${size}`,"rvo-mobile-menu--"+(isOpen?"open":"closed"),horizontalRule&&"rvo-mobile-menu--horizontal-rule"),"aria-expanded":isOpen,children:[(0,jsx_runtime.jsxs)(index_esm.zx,{className:(0,clsx_m.Z)("rvo-mobile-menu__toggle"),onClick,children:[(0,jsx_runtime.jsx)(icon_template.JO,{icon:"menu",size,className:"rvo-mobile-menu__open-icon"}),"Menu"]}),isOpen&&(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.Z)("rvo-topnav__background"),onClick,children:(0,jsx_runtime.jsxs)("nav",{className:(0,clsx_m.Z)(`rvo-topnav rvo-topnav--${size}`),onClick:e=>e.stopPropagation(),children:[(0,jsx_runtime.jsx)(icon_template.JO,{icon:"kruis",size,className:"rvo-mobile-menu__close-icon",onClick}),(0,jsx_runtime.jsx)("ul",{className:(0,clsx_m.Z)("rvo-topnav__list","rvo-topnav__list--vertical"),children:itemsMarkup})]})})]})};MobileMenuBar.displayName="MobileMenuBar";try{MobileMenuBar.displayName="MobileMenuBar",MobileMenuBar.__docgenInfo={description:"",displayName:"MobileMenuBar",props:{size:{defaultValue:{value:"defaultArgs.size"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},items:{defaultValue:{value:"defaultArgs.items"},description:"",name:"items",required:!1,type:{name:"IMenuBarItem[]"}},useIcons:{defaultValue:{value:"defaultArgs.useIcons"},description:"",name:"useIcons",required:!1,type:{name:"boolean"}},iconPlacement:{defaultValue:{value:"defaultArgs.iconPlacement"},description:"",name:"iconPlacement",required:!1,type:{name:"enum",value:[{value:'"before"'},{value:'"after"'}]}},deltaForActiveItem:{defaultValue:{value:"defaultArgs.deltaForActiveItem"},description:"",name:"deltaForActiveItem",required:!1,type:{name:"boolean"}},submenuItems:{defaultValue:{value:"defaultArgs.submenuItems"},description:"",name:"submenuItems",required:!1,type:{name:"IMenuBarItem[]"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},horizontalRule:{defaultValue:{value:"defaultArgs.horizontalRule"},description:"",name:"horizontalRule",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/menubar-mobile/template.tsx#MobileMenuBar"]={docgenInfo:MobileMenuBar.__docgenInfo,name:"MobileMenuBar",path:"../../components/menubar-mobile/template.tsx#MobileMenuBar"})}catch(__react_docgen_typescript_loader_error){}try{template.displayName="template",template.__docgenInfo={description:"",displayName:"template",props:{size:{defaultValue:{value:"defaultArgs.size"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},items:{defaultValue:{value:"defaultArgs.items"},description:"",name:"items",required:!1,type:{name:"IMenuBarItem[]"}},useIcons:{defaultValue:{value:"defaultArgs.useIcons"},description:"",name:"useIcons",required:!1,type:{name:"boolean"}},iconPlacement:{defaultValue:{value:"defaultArgs.iconPlacement"},description:"",name:"iconPlacement",required:!1,type:{name:"enum",value:[{value:'"before"'},{value:'"after"'}]}},deltaForActiveItem:{defaultValue:{value:"defaultArgs.deltaForActiveItem"},description:"",name:"deltaForActiveItem",required:!1,type:{name:"boolean"}},submenuItems:{defaultValue:{value:"defaultArgs.submenuItems"},description:"",name:"submenuItems",required:!1,type:{name:"IMenuBarItem[]"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},horizontalRule:{defaultValue:{value:"defaultArgs.horizontalRule"},description:"",name:"horizontalRule",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/menubar-mobile/template.tsx#template"]={docgenInfo:template.__docgenInfo,name:"template",path:"../../components/menubar-mobile/template.tsx#template"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.2.0_sass@1.56.2_webpack@5.75.0/node_modules/sass-loader/dist/cjs.js!../../components/menubar-mobile/index.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.rvo-layout-column{display:flex;flex-direction:column}.rvo-layout-column-inline{display:inline-flex;flex-direction:column}.rvo-layout-align-items-start{align-items:flex-start}.rvo-layout--align-items-center{align-items:center}.rvo-layout-align-items-end{align-items:flex-end}.rvo-layout-align-content-start{align-content:flex-start}.rvo-layout-align-content-center{align-content:center}.rvo-layout-align-content-end{align-content:flex-end}.rvo-layout-justify-items-start{justify-items:flex-start}.rvo-layout-justify-items-center{justify-items:center}.rvo-layout-justify-items-end{justify-items:flex-end}.rvo-layout-justify-content-start{justify-content:flex-start}.rvo-layout-justify-content-center{justify-content:center}.rvo-layout-justify-content-end{justify-content:flex-end}.rvo-layout-row,.rvo-mobile-menu .rvo-mobile-menu__toggle{align-items:center;display:flex;flex-direction:row}.rvo-layout-row-inline{display:inline-flex;flex-direction:row}.rvo-layout--wrap{flex-wrap:wrap}.rvo-layout-gap--2xs{gap:var(--rvo-space-3xs)}.rvo-layout-gap--xs{gap:var(--rvo-space-2xs)}.rvo-layout-gap--sm,.rvo-mobile-menu .rvo-mobile-menu__toggle{gap:var(--rvo-space-xs)}.rvo-layout-gap--md{gap:var(--rvo-space-md)}.rvo-layout-gap--lg{gap:var(--rvo-space-lg)}.rvo-layout-gap--xl{gap:var(--rvo-space-xl)}.rvo-layout-gap--2xl{gap:var(--rvo-space-2xl)}.rvo-layout-gap--3xl{gap:var(--rvo-space-3xl)}.rvo-layout-gap--4xl{gap:var(--rvo-space-4xl)}.rvo-layout-margin-horizontal--3xs{margin-inline:var(--rvo-space-3xs)}.rvo-layout-margin-horizontal--2xs{margin-inline:var(--rvo-space-2xs)}.rvo-layout-margin-horizontal--xs{margin-inline:var(--rvo-space-xs)}.rvo-layout-margin-horizontal--sm{margin-inline:var(--rvo-space-sm)}.rvo-layout-margin-horizontal--md{margin-inline:var(--rvo-space-md)}.rvo-layout-margin-horizontal--lg{margin-inline:var(--rvo-space-lg)}.rvo-layout-margin-horizontal--xl{margin-inline:var(--rvo-space-xl)}.rvo-layout-margin-horizontal--2xl{margin-inline:var(--rvo-space-2xl)}.rvo-layout-margin-horizontal--3xl{margin-inline:var(--rvo-space-3xl)}.rvo-layout-margin-horizontal--4xl{margin-inline:var(--rvo-space-4xl)}.rvo-layout-margin-vertical--3xs{margin-block:var(--rvo-space-3xs)}.rvo-layout-margin-vertical--2xs{margin-block:var(--rvo-space-2xs)}.rvo-layout-margin-vertical--xs{margin-block:var(--rvo-space-xs)}.rvo-layout-margin-vertical--sm{margin-block:var(--rvo-space-sm)}.rvo-layout-margin-vertical--md{margin-block:var(--rvo-space-md)}.rvo-layout-margin-vertical--lg{margin-block:var(--rvo-space-lg)}.rvo-layout-margin-vertical--xl{margin-block:var(--rvo-space-xl)}.rvo-layout-margin-vertical--2xl{margin-block:var(--rvo-space-2xl)}.rvo-layout-margin-vertical--3xl{margin-block:var(--rvo-space-3xl)}.rvo-layout-margin-vertical--4xl{margin-block:var(--rvo-space-4xl)}.rvo-mobile-menu{display:flex;flex-direction:column;font-family:var(--rvo-mobile-menu-font-family)}.rvo-mobile-menu.rvo-mobile-menu--sm{font-size:var(--rvo-mobile-menu-sm-font-size)}.rvo-mobile-menu.rvo-mobile-menu--md{font-size:var(--rvo-mobile-menu-md-font-size)}.rvo-mobile-menu.rvo-mobile-menu--lg{font-size:var(--rvo-mobile-menu-lg-font-size)}.rvo-mobile-menu.rvo-mobile-menu--horizontal-rule{border-bottom-color:var(--rvo-mobile-menu-horizontal-rule-border-bottom-color);border-bottom-style:var(--rvo-mobile-menu-horizontal-rule-border-bottom-style);border-bottom-width:var(--rvo-mobile-menu-horizontal-rule-border-bottom-width)}.rvo-mobile-menu .rvo-mobile-menu__toggle{--utrecht-button-color: var(--rvo-mobile-menu-toggle-color, --rvo-mobile-menu-link-color);--utrecht-button-hover-color: var(--rvo-mobile-menu-toggle-hover-color, --rvo-mobile-menu-link-hover-color);--utrecht-button-active-color: var(--rvo-mobile-menu-toggle-active-color, --utrecht-mobile-menu-link-active-color);--utrecht-button-background-color: var(--rvo-mobile-menu-toggle-background-color);--utrecht-button-hover-background-color: var(--rvo-mobile-menu-toggle-background-color);align-self:var(--rvo-mobile-menu-toggle-align-self);cursor:pointer;display:flex;font-size:inherit;font-weight:var(--rvo-mobile-menu-toggle-font-weight);justify-content:var(--rvo-mobile-menu-toggle-justify-content);outline:none !important;padding-block-end:var(--rvo-mobile-menu-toggle-padding-block-end);padding-block-start:var(--rvo-mobile-menu-toggle-padding-block-start);padding-inline-end:var(--rvo-mobile-menu-toggle-padding-inline-end);padding-inline-start:var(--rvo-mobile-menu-toggle-padding-inline-start);width:var(--rvo-mobile-menu-toggle-width)}.rvo-mobile-menu .rvo-topnav{background-color:var(--rvo-mobile-menu-topnav-background-color);display:flex;flex-direction:column;height:var(--rvo-mobile-menu-topnav-height);left:0;min-width:var(--rvo-mobile-menu-topnav-min-width);overflow-y:auto;padding-block-end:var(--rvo-mobile-menu-topnav-padding-block-end);padding-block-start:var(--rvo-mobile-menu-topnav-padding-block-start);padding-inline-end:var(--rvo-mobile-menu-topnav-padding-inline-end);padding-inline-start:var(--rvo-mobile-menu-topnav-padding-inline-start);position:fixed;top:0;width:var(--rvo-mobile-menu-topnav-width);z-index:2}.rvo-mobile-menu+.rvo-topnav__background{display:none}.rvo-mobile-menu .rvo-topnav__background::before{background-color:var(--rvo-mobile-menu-bg-background-color);content:"";display:block;height:var(--rvo-mobile-menu-bg-height);left:var(--rvo-mobile-menu-bg-left);position:var(--rvo-mobile-menu-bg-position, static);top:var(--rvo-mobile-menu-bg-top);width:var(--rvo-mobile-menu-bg-width);z-index:2}.rvo-mobile-menu .rvo-mobile-menu__open-icon,.rvo-mobile-menu .rvo-mobile-menu__close-icon{--utrecht-icon-color: var(--rvo-mobile-menu-toggle-icon-color)}.rvo-mobile-menu.rvo-mobile-menu--open .rvo-mobile-menu__close-icon{align-self:flex-end;cursor:pointer}.rvo-mobile-menu.rvo-mobile-menu--sm.rvo-mobile-menu--open .rvo-mobile-menu__close-icon{margin-inline-start:calc(var(--rvo-space-md)*-1)}.rvo-mobile-menu .rvo-topnav__list{align-items:var(--rvo-mobile-menu-list-align-items, flex-start);flex-direction:var(--rvo-mobile-menu-list-flex-direction, column);gap:var(--rvo-mobile-menu-list-gap);margin-block-start:var(--rvo-mobile-menu-list-margin-block-start)}.rvo-mobile-menu .rvo-topnav__list .rvo-topnav__item{display:inline-flex;position:relative;text-align:start;width:var(--rvo-mobile-menu-item-width)}.rvo-mobile-menu .rvo-topnav__list .rvo-topnav__item.rvo-topnav__item--align-right{margin-inline-start:0}.rvo-mobile-menu .rvo-topnav__list .rvo-topnav__item.rvo-topnav__item--sub{background-color:var(--rvo-mobile-menu-submenu-background-color)}.rvo-mobile-menu .rvo-topnav__list .rvo-topnav__item.rvo-topnav__item--sub .rvo-topnav__link{padding-inline-start:var(--rvo-mobile-menu-submenu-link-padding-inline-start)}.rvo-mobile-menu .rvo-topnav__list .rvo-topnav__item.rvo-topnav__item--sub .rvo-topnav__link::before{background-color:var(--rvo-mobile-menu-item-active-indicator-background-color);border-radius:var(--rvo-mobile-menu-item-active-indicator-border-radius);content:"";height:var(--rvo-mobile-menu-item-active-indicator-height);opacity:0%;width:var(--rvo-mobile-menu-item-active-indicator-width)}.rvo-mobile-menu .rvo-topnav__list .rvo-topnav__item.rvo-topnav__item--sub.rvo-topnav__item--active .rvo-topnav__link{padding-inline-start:var(--rvo-mobile-menu-submenu-link-active-padding-inline-start)}.rvo-mobile-menu .rvo-topnav__list .rvo-topnav__item.rvo-topnav__item--with-divider{border-left:0 !important;border-top-color:var(--rvo-mobile-menu-item-divider-border-color);border-top-style:var(--rvo-mobile-menu-item-divider-border-style);border-top-width:var(--rvo-mobile-menu-item-divider-border-width);margin-block-start:var(--rvo-mobile-menu-item-divider-margin-block-start);margin-inline-start:0 !important;padding-block-start:var(--rvo-mobile-menu-item-divider-padding-block-start);padding-inline-start:0 !important}.rvo-mobile-menu .rvo-topnav__list .rvo-topnav__item.rvo-topnav__item--active .rvo-topnav__link{font-weight:var(--rvo-mobile-menu-item-active-font-weight)}.rvo-mobile-menu .rvo-topnav__list .rvo-topnav__item.rvo-topnav__item--active .rvo-topnav__link:hover{font-weight:var(--rvo-mobile-menu-item-active-font-weight)}.rvo-mobile-menu .rvo-topnav__list .rvo-topnav__item.rvo-topnav__item--active:not(.rvo-topnav__item--sub) .rvo-topnav__link::before{background-color:var(--rvo-mobile-menu-item-active-indicator-background-color);border-radius:var(--rvo-mobile-menu-item-active-indicator-border-radius);content:"";height:var(--rvo-mobile-menu-item-active-indicator-height);left:var(--rvo-mobile-menu-item-active-indicator-offset);opacity:100%;position:absolute;width:var(--rvo-mobile-menu-item-active-indicator-width)}.rvo-mobile-menu .rvo-topnav__list .rvo-topnav__item .rvo-topnav__link{--utrecht-topnav-link-focus-background-color: var(--rvo-mobile-menu-item-link-focus-background-color);--utrecht-icon-color: var(--rvo-mobile-menu-item-link-color);color:var(--rvo-mobile-menu-item-link-color);font-weight:var(--rvo-mobile-menu-item-link-font-weight);padding-block-end:var(--rvo-mobile-menu-item-link-padding-block-end);padding-block-start:var(--rvo-mobile-menu-item-link-padding-block-start);padding-inline-end:var(--rvo-mobile-menu-item-link-padding-inline-end);padding-inline-start:var(--rvo-mobile-menu-item-link-padding-inline-start);width:var(--rvo-mobile-menu-item-link-width, 100%)}.rvo-mobile-menu .rvo-topnav__list .rvo-topnav__item .rvo-topnav__link:hover{color:var(--rvo-mobile-menu-item-link-hover-color);font-weight:var(--rvo-mobile-menu-item-link-hover-font-weight);text-decoration:var(--rvo-mobile-menu-item-link-hover-text-decoration)}.rvo-mobile-menu .rvo-topnav__list .rvo-topnav__item .rvo-topnav__link:active{color:var(--rvo-mobile-menu-item-link-active-color);font-weight:var(--rvo-mobile-menu-item-link-active-font-weight)}.rvo-mobile-menu .rvo-topnav__list .rvo-topnav__item .rvo-topnav__link:focus{background-color:var(--rvo-mobile-menu-item-link-focus-background-color);font-weight:var(--rvo-mobile-menu-item-link-focus-font-weight)}.rvo-mobile-menu .rvo-topnav__list .rvo-topnav__item .rvo-topnav__link .rvo-icon{--utrecht-icon-color: var(--rvo-mobile-menu-item-icon-color)}',"",{version:3,sources:["webpack://./../../components/layout-column-row/index.scss","webpack://./../../components/menubar-mobile/index.scss"],names:[],mappings:"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",sourcesContent:[".rvo-layout-column {\n  display: flex;\n  flex-direction: column;\n}\n\n.rvo-layout-column-inline {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.rvo-layout-align-items-start {\n  align-items: flex-start;\n}\n\n.rvo-layout--align-items-center {\n  align-items: center;\n}\n\n.rvo-layout-align-items-end {\n  align-items: flex-end;\n}\n\n.rvo-layout-align-content-start {\n  align-content: flex-start;\n}\n\n.rvo-layout-align-content-center {\n  align-content: center;\n}\n\n.rvo-layout-align-content-end {\n  align-content: flex-end;\n}\n\n.rvo-layout-justify-items-start {\n  justify-items: flex-start;\n}\n\n.rvo-layout-justify-items-center {\n  justify-items: center;\n}\n\n.rvo-layout-justify-items-end {\n  justify-items: flex-end;\n}\n\n.rvo-layout-justify-content-start {\n  justify-content: flex-start;\n}\n\n.rvo-layout-justify-content-center {\n  justify-content: center;\n}\n\n.rvo-layout-justify-content-end {\n  justify-content: flex-end;\n}\n\n.rvo-layout-row {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n}\n\n.rvo-layout-row-inline {\n  display: inline-flex;\n  flex-direction: row;\n}\n\n.rvo-layout--wrap {\n  flex-wrap: wrap;\n}\n\n.rvo-layout-gap--2xs {\n  gap: var(--rvo-space-3xs);\n}\n\n.rvo-layout-gap--xs {\n  gap: var(--rvo-space-2xs);\n}\n\n.rvo-layout-gap--sm {\n  gap: var(--rvo-space-xs);\n}\n\n.rvo-layout-gap--md {\n  gap: var(--rvo-space-md);\n}\n\n.rvo-layout-gap--lg {\n  gap: var(--rvo-space-lg);\n}\n\n.rvo-layout-gap--xl {\n  gap: var(--rvo-space-xl);\n}\n\n.rvo-layout-gap--2xl {\n  gap: var(--rvo-space-2xl);\n}\n\n.rvo-layout-gap--3xl {\n  gap: var(--rvo-space-3xl);\n}\n\n.rvo-layout-gap--4xl {\n  gap: var(--rvo-space-4xl);\n}\n\n// Horizontal margin\n\n.rvo-layout-margin-horizontal--3xs {\n  margin-inline: var(--rvo-space-3xs);\n}\n\n.rvo-layout-margin-horizontal--2xs {\n  margin-inline: var(--rvo-space-2xs);\n}\n\n.rvo-layout-margin-horizontal--xs {\n  margin-inline: var(--rvo-space-xs);\n}\n\n.rvo-layout-margin-horizontal--sm {\n  margin-inline: var(--rvo-space-sm);\n}\n\n.rvo-layout-margin-horizontal--md {\n  margin-inline: var(--rvo-space-md);\n}\n\n.rvo-layout-margin-horizontal--lg {\n  margin-inline: var(--rvo-space-lg);\n}\n\n.rvo-layout-margin-horizontal--xl {\n  margin-inline: var(--rvo-space-xl);\n}\n\n.rvo-layout-margin-horizontal--2xl {\n  margin-inline: var(--rvo-space-2xl);\n}\n\n.rvo-layout-margin-horizontal--3xl {\n  margin-inline: var(--rvo-space-3xl);\n}\n\n.rvo-layout-margin-horizontal--4xl {\n  margin-inline: var(--rvo-space-4xl);\n}\n\n// Vertical margin\n\n.rvo-layout-margin-vertical--3xs {\n  margin-block: var(--rvo-space-3xs);\n}\n\n.rvo-layout-margin-vertical--2xs {\n  margin-block: var(--rvo-space-2xs);\n}\n\n.rvo-layout-margin-vertical--xs {\n  margin-block: var(--rvo-space-xs);\n}\n\n.rvo-layout-margin-vertical--sm {\n  margin-block: var(--rvo-space-sm);\n}\n\n.rvo-layout-margin-vertical--md {\n  margin-block: var(--rvo-space-md);\n}\n\n.rvo-layout-margin-vertical--lg {\n  margin-block: var(--rvo-space-lg);\n}\n\n.rvo-layout-margin-vertical--xl {\n  margin-block: var(--rvo-space-xl);\n}\n\n.rvo-layout-margin-vertical--2xl {\n  margin-block: var(--rvo-space-2xl);\n}\n\n.rvo-layout-margin-vertical--3xl {\n  margin-block: var(--rvo-space-3xl);\n}\n\n.rvo-layout-margin-vertical--4xl {\n  margin-block: var(--rvo-space-4xl);\n}\n",'@import "../layout-column-row/index";\n\n// Mobile\n.rvo-mobile-menu {\n  display: flex;\n  flex-direction: column;\n  font-family: var(--rvo-mobile-menu-font-family);\n\n  &.rvo-mobile-menu--sm {\n    font-size: var(--rvo-mobile-menu-sm-font-size);\n  }\n\n  &.rvo-mobile-menu--md {\n    font-size: var(--rvo-mobile-menu-md-font-size);\n  }\n\n  &.rvo-mobile-menu--lg {\n    font-size: var(--rvo-mobile-menu-lg-font-size);\n  }\n\n  &.rvo-mobile-menu--horizontal-rule {\n    border-bottom-color: var(--rvo-mobile-menu-horizontal-rule-border-bottom-color);\n    border-bottom-style: var(--rvo-mobile-menu-horizontal-rule-border-bottom-style);\n    border-bottom-width: var(--rvo-mobile-menu-horizontal-rule-border-bottom-width);\n  }\n\n  .rvo-mobile-menu__toggle {\n    --utrecht-button-color: var(--rvo-mobile-menu-toggle-color, --rvo-mobile-menu-link-color);\n    --utrecht-button-hover-color: var(--rvo-mobile-menu-toggle-hover-color, --rvo-mobile-menu-link-hover-color);\n    --utrecht-button-active-color: var(--rvo-mobile-menu-toggle-active-color, --utrecht-mobile-menu-link-active-color);\n    --utrecht-button-background-color: var(--rvo-mobile-menu-toggle-background-color);\n    --utrecht-button-hover-background-color: var(--rvo-mobile-menu-toggle-background-color);\n\n    align-self: var(--rvo-mobile-menu-toggle-align-self);\n    cursor: pointer;\n    display: flex;\n    font-size: inherit;\n    font-weight: var(--rvo-mobile-menu-toggle-font-weight);\n    justify-content: var(--rvo-mobile-menu-toggle-justify-content);\n    outline: none !important;\n    padding-block-end: var(--rvo-mobile-menu-toggle-padding-block-end);\n    padding-block-start: var(--rvo-mobile-menu-toggle-padding-block-start);\n    padding-inline-end: var(--rvo-mobile-menu-toggle-padding-inline-end);\n    padding-inline-start: var(--rvo-mobile-menu-toggle-padding-inline-start);\n    width: var(--rvo-mobile-menu-toggle-width);\n\n    @extend .rvo-layout-row;\n    @extend .rvo-layout-gap--sm;\n  }\n\n  .rvo-topnav {\n    background-color: var(--rvo-mobile-menu-topnav-background-color);\n    display: flex;\n    flex-direction: column;\n    height: var(--rvo-mobile-menu-topnav-height);\n    left: 0;\n    min-width: var(--rvo-mobile-menu-topnav-min-width);\n    overflow-y: auto;\n    padding-block-end: var(--rvo-mobile-menu-topnav-padding-block-end);\n    padding-block-start: var(--rvo-mobile-menu-topnav-padding-block-start);\n    padding-inline-end: var(--rvo-mobile-menu-topnav-padding-inline-end);\n    padding-inline-start: var(--rvo-mobile-menu-topnav-padding-inline-start);\n    position: fixed;\n    top: 0;\n    width: var(--rvo-mobile-menu-topnav-width);\n    z-index: 2;\n  }\n\n  + .rvo-topnav__background {\n    display: none;\n  }\n\n  .rvo-topnav__background::before {\n    background-color: var(--rvo-mobile-menu-bg-background-color);\n    content: "";\n    display: block;\n    height: var(--rvo-mobile-menu-bg-height);\n    left: var(--rvo-mobile-menu-bg-left);\n    position: var(--rvo-mobile-menu-bg-position, static);\n    top: var(--rvo-mobile-menu-bg-top);\n    width: var(--rvo-mobile-menu-bg-width);\n    z-index: 2;\n  }\n\n  .rvo-mobile-menu__open-icon,\n  .rvo-mobile-menu__close-icon {\n    --utrecht-icon-color: var(--rvo-mobile-menu-toggle-icon-color);\n  }\n\n  &.rvo-mobile-menu--open {\n    .rvo-mobile-menu__close-icon {\n      align-self: flex-end;\n      cursor: pointer;\n    }\n  }\n\n  &.rvo-mobile-menu--sm.rvo-mobile-menu--open {\n    .rvo-mobile-menu__close-icon {\n      margin-inline-start: calc(var(--rvo-space-md) * -1);\n    }\n  }\n\n  .rvo-topnav__list {\n    align-items: var(--rvo-mobile-menu-list-align-items, flex-start);\n    flex-direction: var(--rvo-mobile-menu-list-flex-direction, column);\n    gap: var(--rvo-mobile-menu-list-gap);\n    margin-block-start: var(--rvo-mobile-menu-list-margin-block-start);\n\n    .rvo-topnav__item {\n      display: inline-flex;\n      position: relative;\n      text-align: start;\n      width: var(--rvo-mobile-menu-item-width);\n\n      &.rvo-topnav__item--align-right {\n        margin-inline-start: 0;\n      }\n\n      &.rvo-topnav__item--sub {\n        background-color: var(--rvo-mobile-menu-submenu-background-color);\n\n        .rvo-topnav__link {\n          padding-inline-start: var(--rvo-mobile-menu-submenu-link-padding-inline-start);\n\n          &::before {\n            background-color: var(--rvo-mobile-menu-item-active-indicator-background-color);\n            border-radius: var(--rvo-mobile-menu-item-active-indicator-border-radius);\n            content: "";\n            height: var(--rvo-mobile-menu-item-active-indicator-height);\n            opacity: 0%;\n            width: var(--rvo-mobile-menu-item-active-indicator-width);\n          }\n        }\n\n        &.rvo-topnav__item--active .rvo-topnav__link {\n          padding-inline-start: var(--rvo-mobile-menu-submenu-link-active-padding-inline-start);\n        }\n      }\n\n      &.rvo-topnav__item--with-divider {\n        border-left: 0 !important;\n        border-top-color: var(--rvo-mobile-menu-item-divider-border-color);\n        border-top-style: var(--rvo-mobile-menu-item-divider-border-style);\n        border-top-width: var(--rvo-mobile-menu-item-divider-border-width);\n        margin-block-start: var(--rvo-mobile-menu-item-divider-margin-block-start);\n        margin-inline-start: 0 !important;\n        padding-block-start: var(--rvo-mobile-menu-item-divider-padding-block-start);\n        padding-inline-start: 0 !important;\n      }\n\n      &.rvo-topnav__item--active {\n        .rvo-topnav__link {\n          font-weight: var(--rvo-mobile-menu-item-active-font-weight);\n\n          &:hover {\n            font-weight: var(--rvo-mobile-menu-item-active-font-weight);\n          }\n        }\n\n        &:not(.rvo-topnav__item--sub) .rvo-topnav__link::before {\n          background-color: var(--rvo-mobile-menu-item-active-indicator-background-color);\n          border-radius: var(--rvo-mobile-menu-item-active-indicator-border-radius);\n          content: "";\n          height: var(--rvo-mobile-menu-item-active-indicator-height);\n          left: var(--rvo-mobile-menu-item-active-indicator-offset);\n          opacity: 100%;\n          position: absolute;\n          width: var(--rvo-mobile-menu-item-active-indicator-width);\n        }\n      }\n\n      .rvo-topnav__link {\n        --utrecht-topnav-link-focus-background-color: var(--rvo-mobile-menu-item-link-focus-background-color);\n        --utrecht-icon-color: var(--rvo-mobile-menu-item-link-color);\n\n        color: var(--rvo-mobile-menu-item-link-color);\n        font-weight: var(--rvo-mobile-menu-item-link-font-weight);\n        padding-block-end: var(--rvo-mobile-menu-item-link-padding-block-end);\n        padding-block-start: var(--rvo-mobile-menu-item-link-padding-block-start);\n        padding-inline-end: var(--rvo-mobile-menu-item-link-padding-inline-end);\n        padding-inline-start: var(--rvo-mobile-menu-item-link-padding-inline-start);\n        width: var(--rvo-mobile-menu-item-link-width, 100%);\n\n        &:hover {\n          color: var(--rvo-mobile-menu-item-link-hover-color);\n          font-weight: var(--rvo-mobile-menu-item-link-hover-font-weight);\n          text-decoration: var(--rvo-mobile-menu-item-link-hover-text-decoration);\n        }\n\n        &:active {\n          color: var(--rvo-mobile-menu-item-link-active-color);\n          font-weight: var(--rvo-mobile-menu-item-link-active-font-weight);\n        }\n\n        &:focus {\n          background-color: var(--rvo-mobile-menu-item-link-focus-background-color);\n          font-weight: var(--rvo-mobile-menu-item-link-focus-font-weight);\n        }\n\n        .rvo-icon {\n          --utrecht-icon-color: var(--rvo-mobile-menu-item-icon-color);\n        }\n      }\n    }\n  }\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);