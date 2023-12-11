/*! For license information please see 3981.d99b3a64.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[3981],{"../../components/menubar-mobile/defaultArgs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>defaultArgs});var _menubar_defaultArgs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/menubar/defaultArgs.ts");__webpack_require__("../../components/menubar-mobile/template.tsx");const defaultArgs={size:"md",items:_menubar_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.a,submenuItems:[],useIcons:!0,iconPlacement:"before",isOpen:!1}},"../../components/menubar-mobile/template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{jc:()=>MobileMenuBar,PG:()=>argTypes});var index_esm=__webpack_require__("../../node_modules/.pnpm/@utrecht+component-library-react@1.0.0-alpha.190_react-dom@18.2.0_react@18.2.0/node_modules/@utrecht/component-library-react/dist/index.esm.js"),clsx_m=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),icon_template=__webpack_require__("../../components/icon/template.tsx"),menubar_template=__webpack_require__("../../components/menubar/template.tsx"),defaultArgs=__webpack_require__("../../components/menubar-mobile/defaultArgs.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),menubar_mobile=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.2.0_sass@1.56.2_webpack@5.75.0/node_modules/sass-loader/dist/cjs.js!../../components/menubar-mobile/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(menubar_mobile.Z,options);menubar_mobile.Z&&menubar_mobile.Z.locals&&menubar_mobile.Z.locals;var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const argTypes={size:{options:["sm","md","lg"],control:{type:"radio"}},items:{type:{name:"array",required:!0}},submenuItems:{type:{name:"array",required:!0}},useIcons:{control:"boolean"},iconPlacement:{options:["before","after"],control:{type:"radio"}},isOpen:{control:"boolean"}},MobileMenuBar=({size=defaultArgs._.size,items=defaultArgs._.items,useIcons=defaultArgs._.useIcons,iconPlacement=defaultArgs._.iconPlacement,submenuItems=defaultArgs._.submenuItems,isOpen:isOpenArg=defaultArgs._.isOpen,useDeltaForActiveItem=defaultArgs._.useDeltaForActiveItem,children})=>{let itemsMarkup;itemsMarkup=children||items.map(((item,index)=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,menubar_template.YI)({key:item.label,label:item.label,icon:item.icon,active:item.active,link:item.link,useIcon:useIcons,size,iconPlacement,useDeltaForActiveItem}),item.active&&submenuItems.map(((submenuItem,index)=>(0,jsx_runtime.jsx)(react.Fragment,{children:(0,menubar_template.YI)({key:`${item.label}--${index}`,label:submenuItem.label,icon:submenuItem.icon,active:void 0,link:submenuItem.link,useIcon:useIcons,size,iconPlacement,type:"sub",useDeltaForActiveItem})},index)))]},index)));const[isOpen,setIsOpen]=(0,react.useState)(isOpenArg),onClick=(0,react.useCallback)((()=>{setIsOpen((isOpen=>!isOpen))}),[isOpen]);return(0,react.useEffect)((()=>{setIsOpen(isOpenArg)}),[isOpenArg]),(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.Z)("rvo-mobile-menu",`rvo-mobile-menu--${size}`,"rvo-mobile-menu--"+(isOpen?"open":"closed")),"aria-expanded":isOpen,children:[(0,jsx_runtime.jsxs)(index_esm.zx,{className:(0,clsx_m.Z)("rvo-mobile-menu__toggle"),onClick,children:[(0,jsx_runtime.jsx)(icon_template.JO,{icon:"menu",size,className:"rvo-mobile-menu__open-icon"}),"Menu"]}),isOpen&&(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.Z)("rvo-topnav__background"),onClick,children:(0,jsx_runtime.jsxs)("nav",{className:(0,clsx_m.Z)(`rvo-topnav rvo-topnav--${size}`),children:[(0,jsx_runtime.jsx)(icon_template.JO,{icon:"kruis",size,className:"rvo-mobile-menu__close-icon"}),(0,jsx_runtime.jsx)("ul",{className:"rvo-topnav__list",children:itemsMarkup})]})})]})};MobileMenuBar.displayName="MobileMenuBar";try{MobileMenuBar.displayName="MobileMenuBar",MobileMenuBar.__docgenInfo={description:"",displayName:"MobileMenuBar",props:{submenuItems:{defaultValue:{value:"defaultArgs.submenuItems"},description:"",name:"submenuItems",required:!1,type:{name:"IMenuBarItem[]"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},size:{defaultValue:{value:"defaultArgs.size"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},items:{defaultValue:{value:"defaultArgs.items"},description:"",name:"items",required:!1,type:{name:"IMenuBarItem[]"}},useIcons:{defaultValue:{value:"defaultArgs.useIcons"},description:"",name:"useIcons",required:!1,type:{name:"boolean"}},iconPlacement:{defaultValue:{value:"defaultArgs.iconPlacement"},description:"",name:"iconPlacement",required:!1,type:{name:"enum",value:[{value:'"before"'},{value:'"after"'}]}},menuMaxWidth:{defaultValue:null,description:"",name:"menuMaxWidth",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"sub"'},{value:'"sub-grid"'}]}},useDeltaForActiveItem:{defaultValue:{value:"defaultArgs.useDeltaForActiveItem"},description:"",name:"useDeltaForActiveItem",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/menubar-mobile/template.tsx#MobileMenuBar"]={docgenInfo:MobileMenuBar.__docgenInfo,name:"MobileMenuBar",path:"../../components/menubar-mobile/template.tsx#MobileMenuBar"})}catch(__react_docgen_typescript_loader_error){}try{template.displayName="template",template.__docgenInfo={description:"",displayName:"template",props:{submenuItems:{defaultValue:{value:"defaultArgs.submenuItems"},description:"",name:"submenuItems",required:!1,type:{name:"IMenuBarItem[]"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},size:{defaultValue:{value:"defaultArgs.size"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},items:{defaultValue:{value:"defaultArgs.items"},description:"",name:"items",required:!1,type:{name:"IMenuBarItem[]"}},useIcons:{defaultValue:{value:"defaultArgs.useIcons"},description:"",name:"useIcons",required:!1,type:{name:"boolean"}},iconPlacement:{defaultValue:{value:"defaultArgs.iconPlacement"},description:"",name:"iconPlacement",required:!1,type:{name:"enum",value:[{value:'"before"'},{value:'"after"'}]}},menuMaxWidth:{defaultValue:null,description:"",name:"menuMaxWidth",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"sub"'},{value:'"sub-grid"'}]}},useDeltaForActiveItem:{defaultValue:{value:"defaultArgs.useDeltaForActiveItem"},description:"",name:"useDeltaForActiveItem",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/menubar-mobile/template.tsx#template"]={docgenInfo:template.__docgenInfo,name:"template",path:"../../components/menubar-mobile/template.tsx#template"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.2.0_sass@1.56.2_webpack@5.75.0/node_modules/sass-loader/dist/cjs.js!../../components/menubar-mobile/index.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".rvo-layout-column{display:flex;flex-direction:column}.rvo-layout-column-inline{display:inline-flex;flex-direction:column}.rvo-layout-row--align-top{align-items:flex-start}.rvo-layout-row,.rvo-mobile-menu .rvo-mobile-menu__toggle{align-items:center;display:flex;flex-direction:row}.rvo-layout-row-inline{display:inline-flex;flex-direction:row}.rvo-layout-row--flex-start{align-items:flex-start}.rvo-layout--wrap{flex-wrap:wrap}.rvo-layout-gap--2xs{gap:var(--rvo-space-3xs)}.rvo-layout-gap--xs{gap:var(--rvo-space-2xs)}.rvo-layout-gap--sm,.rvo-mobile-menu .rvo-mobile-menu__toggle{gap:var(--rvo-space-xs)}.rvo-layout-gap--md{gap:var(--rvo-space-md)}.rvo-layout-gap--lg{gap:var(--rvo-space-lg)}.rvo-layout-gap--xl{gap:var(--rvo-space-xl)}.rvo-layout-gap--2xl{gap:var(--rvo-space-2xl)}.rvo-layout-gap--3xl{gap:var(--rvo-space-3xl)}.rvo-layout-gap--4xl{gap:var(--rvo-space-4xl)}.rvo-layout-margin-horizontal--3xs{margin-inline:var(--rvo-space-3xs)}.rvo-layout-margin-horizontal--2xs{margin-inline:var(--rvo-space-2xs)}.rvo-layout-margin-horizontal--xs{margin-inline:var(--rvo-space-xs)}.rvo-layout-margin-horizontal--sm{margin-inline:var(--rvo-space-sm)}.rvo-layout-margin-horizontal--md{margin-inline:var(--rvo-space-md)}.rvo-layout-margin-horizontal--lg{margin-inline:var(--rvo-space-lg)}.rvo-layout-margin-horizontal--xl{margin-inline:var(--rvo-space-xl)}.rvo-layout-margin-horizontal--2xl{margin-inline:var(--rvo-space-2xl)}.rvo-layout-margin-horizontal--3xl{margin-inline:var(--rvo-space-3xl)}.rvo-layout-margin-horizontal--4xl{margin-inline:var(--rvo-space-4xl)}.rvo-layout-margin-vertical--3xs{margin-block:var(--rvo-space-3xs)}.rvo-layout-margin-vertical--2xs{margin-block:var(--rvo-space-2xs)}.rvo-layout-margin-vertical--xs{margin-block:var(--rvo-space-xs)}.rvo-layout-margin-vertical--sm{margin-block:var(--rvo-space-sm)}.rvo-layout-margin-vertical--md{margin-block:var(--rvo-space-md)}.rvo-layout-margin-vertical--lg{margin-block:var(--rvo-space-lg)}.rvo-layout-margin-vertical--xl{margin-block:var(--rvo-space-xl)}.rvo-layout-margin-vertical--2xl{margin-block:var(--rvo-space-2xl)}.rvo-layout-margin-vertical--3xl{margin-block:var(--rvo-space-3xl)}.rvo-layout-margin-vertical--4xl{margin-block:var(--rvo-space-4xl)}.rvo-mobile-menu{display:flex;flex-direction:column;font-family:var(--rvo-mobile-menu-font-family)}.rvo-mobile-menu.rvo-mobile-menu--sm{font-size:var(--rvo-mobile-menu-sm-font-size)}.rvo-mobile-menu.rvo-mobile-menu--md{font-size:var(--rvo-mobile-menu-md-font-size)}.rvo-mobile-menu.rvo-mobile-menu--lg{font-size:var(--rvo-mobile-menu-lg-font-size)}.rvo-mobile-menu .rvo-mobile-menu__toggle{--utrecht-button-color: var(--rvo-mobile-menu-toggle-color, --rvo-mobile-menu-link-color);--utrecht-button-hover-color: var(--rvo-mobile-menu-toggle-hover-color, --rvo-mobile-menu-link-hover-color);--utrecht-button-active-color: var(--rvo-mobile-menu-toggle-active-color, --utrecht-mobile-menu-link-active-color);--utrecht-button-background-color: var(--rvo-mobile-menu-toggle-background-color);--utrecht-button-hover-background-color: var(--rvo-mobile-menu-toggle-background-color);cursor:pointer;display:flex;font-size:inherit;justify-content:var(--rvo-mobile-menu-toggle-justify-content);outline:none !important;padding-block-end:var(--rvo-mobile-menu-toggle-padding-block-end);padding-block-start:var(--rvo-mobile-menu-toggle-padding-block-start);padding-inline-end:var(--rvo-mobile-menu-toggle-padding-inline-end);padding-inline-start:var(--rvo-mobile-menu-toggle-padding-inline-start);width:var(--rvo-mobile-menu-toggle-width)}.rvo-mobile-menu .rvo-topnav{background-color:var(--rvo-mobile-menu-topnav-background-color);display:flex;flex-direction:column;height:var(--rvo-mobile-menu-topnav-height);min-width:var(--rvo-mobile-menu-topnav-min-width);padding-block-end:var(--rvo-mobile-menu-topnav-padding-block-end);padding-block-start:var(--rvo-mobile-menu-topnav-padding-block-start);padding-inline-end:var(--rvo-mobile-menu-topnav-padding-inline-end);padding-inline-start:var(--rvo-mobile-menu-topnav-padding-inline-start);width:var(--rvo-mobile-menu-topnav-width)}.rvo-mobile-menu+.rvo-topnav__background{display:none}.rvo-mobile-menu .rvo-topnav__background{background-color:var(--rvo-mobile-menu-bg-background-color);height:var(--rvo-mobile-menu-bg-height);left:var(--rvo-mobile-menu-bg-left);position:var(--rvo-mobile-menu-bg-position, static);top:var(--rvo-mobile-menu-bg-top);width:var(--rvo-mobile-menu-bg-width)}.rvo-mobile-menu .rvo-topnav__icon{--utrecht-icon-color: var(--rvo-mobile-menu-item-link-color)}.rvo-mobile-menu .rvo-topnav__link{--utrecht-topnav-link-focus-background-color: var(--rvo-mobile-menu-item-link-focus-background-color);color:var(--rvo-mobile-menu-item-link-color);width:var(--rvo-mobile-menu-item-link-width, 100%)}.rvo-mobile-menu .rvo-topnav__link:focus{background-color:var(--rvo-mobile-menu-item-link-focus-background-color)}.rvo-mobile-menu .rvo-topnav__link:hover{color:var(--rvo-mobile-menu-item-link-hover-color);text-decoration:var(--rvo-mobile-men-item-link-hover-text-decoration)}.rvo-mobile-menu .rvo-topnav__link:active{color:var(--rvo-mobile-menu-item-link-active-color)}.rvo-mobile-menu .rvo-mobile-menu__open-icon,.rvo-mobile-menu .rvo-mobile-menu__close-icon{--utrecht-icon-color: var(--rvo-mobile-menu-toggle-icon-color)}.rvo-mobile-menu.rvo-mobile-menu--open .rvo-mobile-menu__close-icon{align-self:flex-end;cursor:pointer;display:block}.rvo-mobile-menu.rvo-mobile-menu--open .rvo-mobile-menu__open-icon{display:none}.rvo-mobile-menu.rvo-mobile-menu--closed .rvo-mobile-menu__open-icon{display:block}.rvo-mobile-menu.rvo-mobile-menu--closed .rvo-mobile-menu__close-icon{display:none}.rvo-mobile-menu.rvo-mobile-menu--sm.rvo-mobile-menu--open .rvo-mobile-menu__close-icon{margin-inline-start:calc(var(--rvo-space-md)*-1)}.rvo-mobile-menu .rvo-topnav__list{align-items:var(--rvo-mobile-menu-list-align-items, flex-start);flex-direction:var(--rvo-mobile-menu-list-flex-direction, column)}.rvo-mobile-menu .rvo-topnav__item{display:inline-flex;position:relative;text-align:start;width:var(--rvo-mobile-menu-item-width)}.rvo-mobile-menu .rvo-topnav__item .rvo-icon{--utrecht-icon-color: var(--rvo-mobile-menu-item-icon-color)}.rvo-mobile-menu .rvo-topnav__item--align-right{margin-inline-start:0}.rvo-mobile-menu .rvo-topnav__item--sub{background-color:var(--rvo-mobile-menu-submenu-background-color)}.rvo-mobile-menu .rvo-topnav__item--sub .rvo-topnav__link{padding-inline-start:var(--rvo-mobile-menu-submenu-padding-inline-start)}.rvo-mobile-menu .rvo-topnav__item--active::before{background-color:var(--rvo-mobile-menu-item-active-indicator-background-color);border-radius:var(--rvo-mobile-menu-item-active-indicator-border-radius);content:var(--rvo-mobile-menu-item-active-indicator-content);display:var(--rvo-mobile-menu-item-active-indicator-display);height:var(--rvo-mobile-menu-item-active-indicator-height);position:var(--rvo-mobile-menu-item-active-indicator-position);top:var(--rvo-mobile-menu-item-active-indicator-top);width:var(--rvo-mobile-menu-item-active-indicator-width)}","",{version:3,sources:["webpack://./../../components/layout-column-row/index.scss","webpack://./../../components/menubar-mobile/index.scss"],names:[],mappings:"AAAA,mBACE,YAAA,CACA,qBAAA,CAGF,0BACE,mBAAA,CACA,qBAAA,CAGF,2BACE,sBAAA,CAGF,0DACE,kBAAA,CACA,YAAA,CACA,kBAAA,CAGF,uBACE,mBAAA,CACA,kBAAA,CAGF,4BACE,sBAAA,CAGF,kBACE,cAAA,CAGF,qBACE,wBAAA,CAGF,oBACE,wBAAA,CAGF,8DACE,uBAAA,CAGF,oBACE,uBAAA,CAGF,oBACE,uBAAA,CAGF,oBACE,uBAAA,CAGF,qBACE,wBAAA,CAGF,qBACE,wBAAA,CAGF,qBACE,wBAAA,CAKF,mCACE,kCAAA,CAGF,mCACE,kCAAA,CAGF,kCACE,iCAAA,CAGF,kCACE,iCAAA,CAGF,kCACE,iCAAA,CAGF,kCACE,iCAAA,CAGF,kCACE,iCAAA,CAGF,mCACE,kCAAA,CAGF,mCACE,kCAAA,CAGF,mCACE,kCAAA,CAKF,iCACE,iCAAA,CAGF,iCACE,iCAAA,CAGF,gCACE,gCAAA,CAGF,gCACE,gCAAA,CAGF,gCACE,gCAAA,CAGF,gCACE,gCAAA,CAGF,gCACE,gCAAA,CAGF,iCACE,iCAAA,CAGF,iCACE,iCAAA,CAGF,iCACE,iCAAA,CCnJF,iBACE,YAAA,CACA,qBAAA,CACA,8CAAA,CAEA,qCACE,6CAAA,CAGF,qCACE,6CAAA,CAGF,qCACE,6CAAA,CAGF,0CACE,yFAAA,CACA,2GAAA,CACA,kHAAA,CACA,iFAAA,CACA,uFAAA,CAEA,cAAA,CACA,YAAA,CACA,iBAAA,CACA,6DAAA,CACA,uBAAA,CACA,iEAAA,CACA,qEAAA,CACA,mEAAA,CACA,uEAAA,CACA,yCAAA,CAMF,6BACE,+DAAA,CACA,YAAA,CACA,qBAAA,CACA,2CAAA,CACA,iDAAA,CACA,iEAAA,CACA,qEAAA,CACA,mEAAA,CACA,uEAAA,CACA,yCAAA,CAGF,yCACE,YAAA,CAGF,yCACE,2DAAA,CACA,uCAAA,CACA,mCAAA,CACA,mDAAA,CACA,iCAAA,CACA,qCAAA,CAGF,mCACE,4DAAA,CAGF,mCACE,qGAAA,CAKA,4CAAA,CACA,kDAAA,CALA,yCACE,wEAAA,CAMF,yCACE,kDAAA,CACA,qEAAA,CAGF,0CACE,mDAAA,CAIJ,2FAEE,8DAAA,CAIA,oEACE,mBAAA,CACA,cAAA,CACA,aAAA,CAGF,mEACE,YAAA,CAKF,qEACE,aAAA,CAGF,sEACE,YAAA,CAKF,wFACE,gDAAA,CAIJ,mCACE,+DAAA,CACA,iEAAA,CAGF,mCACE,mBAAA,CACA,iBAAA,CACA,gBAAA,CACA,uCAAA,CAEA,6CACE,4DAAA,CAIJ,gDACE,qBAAA,CAGF,wCACE,gEAAA,CAEA,0DACE,wEAAA,CAIJ,mDACE,8EAAA,CACA,wEAAA,CACA,4DAAA,CACA,4DAAA,CACA,0DAAA,CACA,8DAAA,CACA,oDAAA,CACA,wDAAA",sourcesContent:[".rvo-layout-column {\n  display: flex;\n  flex-direction: column;\n}\n\n.rvo-layout-column-inline {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.rvo-layout-row--align-top {\n  align-items: flex-start;\n}\n\n.rvo-layout-row {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n}\n\n.rvo-layout-row-inline {\n  display: inline-flex;\n  flex-direction: row;\n}\n\n.rvo-layout-row--flex-start {\n  align-items: flex-start;\n}\n\n.rvo-layout--wrap {\n  flex-wrap: wrap;\n}\n\n.rvo-layout-gap--2xs {\n  gap: var(--rvo-space-3xs);\n}\n\n.rvo-layout-gap--xs {\n  gap: var(--rvo-space-2xs);\n}\n\n.rvo-layout-gap--sm {\n  gap: var(--rvo-space-xs);\n}\n\n.rvo-layout-gap--md {\n  gap: var(--rvo-space-md);\n}\n\n.rvo-layout-gap--lg {\n  gap: var(--rvo-space-lg);\n}\n\n.rvo-layout-gap--xl {\n  gap: var(--rvo-space-xl);\n}\n\n.rvo-layout-gap--2xl {\n  gap: var(--rvo-space-2xl);\n}\n\n.rvo-layout-gap--3xl {\n  gap: var(--rvo-space-3xl);\n}\n\n.rvo-layout-gap--4xl {\n  gap: var(--rvo-space-4xl);\n}\n\n// Horizontal margin\n\n.rvo-layout-margin-horizontal--3xs {\n  margin-inline: var(--rvo-space-3xs);\n}\n\n.rvo-layout-margin-horizontal--2xs {\n  margin-inline: var(--rvo-space-2xs);\n}\n\n.rvo-layout-margin-horizontal--xs {\n  margin-inline: var(--rvo-space-xs);\n}\n\n.rvo-layout-margin-horizontal--sm {\n  margin-inline: var(--rvo-space-sm);\n}\n\n.rvo-layout-margin-horizontal--md {\n  margin-inline: var(--rvo-space-md);\n}\n\n.rvo-layout-margin-horizontal--lg {\n  margin-inline: var(--rvo-space-lg);\n}\n\n.rvo-layout-margin-horizontal--xl {\n  margin-inline: var(--rvo-space-xl);\n}\n\n.rvo-layout-margin-horizontal--2xl {\n  margin-inline: var(--rvo-space-2xl);\n}\n\n.rvo-layout-margin-horizontal--3xl {\n  margin-inline: var(--rvo-space-3xl);\n}\n\n.rvo-layout-margin-horizontal--4xl {\n  margin-inline: var(--rvo-space-4xl);\n}\n\n// Vertical margin\n\n.rvo-layout-margin-vertical--3xs {\n  margin-block: var(--rvo-space-3xs);\n}\n\n.rvo-layout-margin-vertical--2xs {\n  margin-block: var(--rvo-space-2xs);\n}\n\n.rvo-layout-margin-vertical--xs {\n  margin-block: var(--rvo-space-xs);\n}\n\n.rvo-layout-margin-vertical--sm {\n  margin-block: var(--rvo-space-sm);\n}\n\n.rvo-layout-margin-vertical--md {\n  margin-block: var(--rvo-space-md);\n}\n\n.rvo-layout-margin-vertical--lg {\n  margin-block: var(--rvo-space-lg);\n}\n\n.rvo-layout-margin-vertical--xl {\n  margin-block: var(--rvo-space-xl);\n}\n\n.rvo-layout-margin-vertical--2xl {\n  margin-block: var(--rvo-space-2xl);\n}\n\n.rvo-layout-margin-vertical--3xl {\n  margin-block: var(--rvo-space-3xl);\n}\n\n.rvo-layout-margin-vertical--4xl {\n  margin-block: var(--rvo-space-4xl);\n}\n",'@import "../layout-column-row/index";\n\n// Mobile\n.rvo-mobile-menu {\n  display: flex;\n  flex-direction: column;\n  font-family: var(--rvo-mobile-menu-font-family);\n\n  &.rvo-mobile-menu--sm {\n    font-size: var(--rvo-mobile-menu-sm-font-size);\n  }\n\n  &.rvo-mobile-menu--md {\n    font-size: var(--rvo-mobile-menu-md-font-size);\n  }\n\n  &.rvo-mobile-menu--lg {\n    font-size: var(--rvo-mobile-menu-lg-font-size);\n  }\n\n  .rvo-mobile-menu__toggle {\n    --utrecht-button-color: var(--rvo-mobile-menu-toggle-color, --rvo-mobile-menu-link-color);\n    --utrecht-button-hover-color: var(--rvo-mobile-menu-toggle-hover-color, --rvo-mobile-menu-link-hover-color);\n    --utrecht-button-active-color: var(--rvo-mobile-menu-toggle-active-color, --utrecht-mobile-menu-link-active-color);\n    --utrecht-button-background-color: var(--rvo-mobile-menu-toggle-background-color);\n    --utrecht-button-hover-background-color: var(--rvo-mobile-menu-toggle-background-color);\n\n    cursor: pointer;\n    display: flex;\n    font-size: inherit;\n    justify-content: var(--rvo-mobile-menu-toggle-justify-content);\n    outline: none !important;\n    padding-block-end: var(--rvo-mobile-menu-toggle-padding-block-end);\n    padding-block-start: var(--rvo-mobile-menu-toggle-padding-block-start);\n    padding-inline-end: var(--rvo-mobile-menu-toggle-padding-inline-end);\n    padding-inline-start: var(--rvo-mobile-menu-toggle-padding-inline-start);\n    width: var(--rvo-mobile-menu-toggle-width);\n\n    @extend .rvo-layout-row;\n    @extend .rvo-layout-gap--sm;\n  }\n\n  .rvo-topnav {\n    background-color: var(--rvo-mobile-menu-topnav-background-color);\n    display: flex;\n    flex-direction: column;\n    height: var(--rvo-mobile-menu-topnav-height);\n    min-width: var(--rvo-mobile-menu-topnav-min-width);\n    padding-block-end: var(--rvo-mobile-menu-topnav-padding-block-end);\n    padding-block-start: var(--rvo-mobile-menu-topnav-padding-block-start);\n    padding-inline-end: var(--rvo-mobile-menu-topnav-padding-inline-end);\n    padding-inline-start: var(--rvo-mobile-menu-topnav-padding-inline-start);\n    width: var(--rvo-mobile-menu-topnav-width);\n  }\n\n  + .rvo-topnav__background {\n    display: none;\n  }\n\n  .rvo-topnav__background {\n    background-color: var(--rvo-mobile-menu-bg-background-color);\n    height: var(--rvo-mobile-menu-bg-height);\n    left: var(--rvo-mobile-menu-bg-left);\n    position: var(--rvo-mobile-menu-bg-position, static);\n    top: var(--rvo-mobile-menu-bg-top);\n    width: var(--rvo-mobile-menu-bg-width);\n  }\n\n  .rvo-topnav__icon {\n    --utrecht-icon-color: var(--rvo-mobile-menu-item-link-color);\n  }\n\n  .rvo-topnav__link {\n    --utrecht-topnav-link-focus-background-color: var(--rvo-mobile-menu-item-link-focus-background-color);\n    &:focus {\n      background-color: var(--rvo-mobile-menu-item-link-focus-background-color);\n    }\n\n    color: var(--rvo-mobile-menu-item-link-color);\n    width: var(--rvo-mobile-menu-item-link-width, 100%);\n\n    &:hover {\n      color: var(--rvo-mobile-menu-item-link-hover-color);\n      text-decoration: var(--rvo-mobile-men-item-link-hover-text-decoration);\n    }\n\n    &:active {\n      color: var(--rvo-mobile-menu-item-link-active-color);\n    }\n  }\n\n  .rvo-mobile-menu__open-icon,\n  .rvo-mobile-menu__close-icon {\n    --utrecht-icon-color: var(--rvo-mobile-menu-toggle-icon-color);\n  }\n\n  &.rvo-mobile-menu--open {\n    .rvo-mobile-menu__close-icon {\n      align-self: flex-end;\n      cursor: pointer;\n      display: block;\n    }\n\n    .rvo-mobile-menu__open-icon {\n      display: none;\n    }\n  }\n\n  &.rvo-mobile-menu--closed {\n    .rvo-mobile-menu__open-icon {\n      display: block;\n    }\n\n    .rvo-mobile-menu__close-icon {\n      display: none;\n    }\n  }\n\n  &.rvo-mobile-menu--sm.rvo-mobile-menu--open {\n    .rvo-mobile-menu__close-icon {\n      margin-inline-start: calc(var(--rvo-space-md) * -1);\n    }\n  }\n\n  .rvo-topnav__list {\n    align-items: var(--rvo-mobile-menu-list-align-items, flex-start);\n    flex-direction: var(--rvo-mobile-menu-list-flex-direction, column);\n  }\n\n  .rvo-topnav__item {\n    display: inline-flex;\n    position: relative;\n    text-align: start;\n    width: var(--rvo-mobile-menu-item-width);\n\n    .rvo-icon {\n      --utrecht-icon-color: var(--rvo-mobile-menu-item-icon-color);\n    }\n  }\n\n  .rvo-topnav__item--align-right {\n    margin-inline-start: 0;\n  }\n\n  .rvo-topnav__item--sub {\n    background-color: var(--rvo-mobile-menu-submenu-background-color);\n\n    .rvo-topnav__link {\n      padding-inline-start: var(--rvo-mobile-menu-submenu-padding-inline-start);\n    }\n  }\n\n  .rvo-topnav__item--active::before {\n    background-color: var(--rvo-mobile-menu-item-active-indicator-background-color);\n    border-radius: var(--rvo-mobile-menu-item-active-indicator-border-radius);\n    content: var(--rvo-mobile-menu-item-active-indicator-content);\n    display: var(--rvo-mobile-menu-item-active-indicator-display);\n    height: var(--rvo-mobile-menu-item-active-indicator-height);\n    position: var(--rvo-mobile-menu-item-active-indicator-position);\n    top: var(--rvo-mobile-menu-item-active-indicator-top);\n    width: var(--rvo-mobile-menu-item-active-indicator-width);\n  }\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);