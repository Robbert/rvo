/*! For license information please see experimenteel-deRegelmaat-Splash-stories.7f035aa5.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[20],{"../../node_modules/.pnpm/@storybook+addon-links@7.6.17_react@18.2.0/node_modules/@storybook/addon-links/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{uM:()=>linkTo});var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_=__webpack_require__("@storybook/core-events"),{document:chunk_6GSMXRCY_document,HTMLElement}=(__webpack_require__("../../node_modules/.pnpm/@storybook+csf@0.1.2/node_modules/@storybook/csf/dist/index.mjs"),external_STORYBOOK_MODULE_GLOBAL_.global);var chunk_6GSMXRCY_navigate=params=>external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel().emit(external_STORYBOOK_MODULE_CORE_EVENTS_.SELECT_STORY,params),linkTo=(idOrTitle,nameInput)=>(...args)=>{let resolver=(args=>value=>"function"==typeof value?value(...args):value)(args),title=resolver(idOrTitle),name=!!nameInput&&resolver(nameInput);title?.match(/--/)&&!name?chunk_6GSMXRCY_navigate({storyId:title}):name&&title?chunk_6GSMXRCY_navigate({kind:title,story:name}):title?chunk_6GSMXRCY_navigate({kind:title}):name&&chunk_6GSMXRCY_navigate({story:name})},linksListener=e=>{let{target}=e;if(!(target instanceof HTMLElement))return;let element=target,{sbKind:kind,sbStory:story}=element.dataset;(kind||story)&&(e.preventDefault(),chunk_6GSMXRCY_navigate({kind,story}))},hasListener=!1,off=()=>{hasListener&&(hasListener=!1,chunk_6GSMXRCY_document.removeEventListener("click",linksListener))};(0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withLinks",parameterName:"links",wrapper:(getStory,context)=>(hasListener||(hasListener=!0,chunk_6GSMXRCY_document.addEventListener("click",linksListener)),external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel().once(external_STORYBOOK_MODULE_CORE_EVENTS_.STORY_CHANGED,off),getStory(context))})},"../../documentation/demopages/experimenteel/deRegelmaat/Splash.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Splash_stories});var dist=__webpack_require__("../../node_modules/.pnpm/@storybook+addon-links@7.6.17_react@18.2.0/node_modules/@storybook/addon-links/dist/index.mjs"),jsx_runtime=(__webpack_require__("../../documentation/demopages/common/style.scss"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const Splash=()=>(0,jsx_runtime.jsx)("div",{className:"rvo-demo-page rvo-demo-page--regelmaat",children:(0,jsx_runtime.jsx)("div",{className:"rvo-app rvo-app--splash",children:(0,jsx_runtime.jsxs)("div",{className:"rvo-app-container",children:[(0,jsx_runtime.jsx)("div",{className:"rvo-app-logo",children:(0,jsx_runtime.jsxs)("svg",{width:"40",height:"60",viewBox:"0 0 40 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsxs)("g",{clipPath:"url(#clip0_6571_14288)",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0H40V60H0V0Z",fill:"#154273"}),(0,jsx_runtime.jsx)("path",{d:"M20.835 42.4576H20.1362V40.5218H20.835V42.4576ZM23.9836 33.9114H23.2848V31.9757H23.9836V33.9114ZM11.0438 30.57C10.9876 30.57 10.6262 30.57 10.6262 30.6423C10.6262 30.7146 10.7948 30.6825 11.0438 30.7226C11.6061 30.819 11.823 31.1002 12.2165 31.1002C12.5699 31.1002 12.9394 30.8592 12.7948 30.3451C12.7707 30.2568 12.7226 30.2809 12.7065 30.3371C12.6503 30.57 12.3691 30.6986 12.0719 30.6986C11.7025 30.6986 11.6221 30.57 11.0438 30.57ZM7.18838 32.5058C7.25264 32.5941 7.91127 33.4455 6.89923 33.7749C6.85103 33.7909 6.84301 33.8311 6.90727 33.8632C7.65425 34.1765 8.01569 33.5982 8.01569 33.5982C8.39323 34.4576 7.81489 34.9395 7.81489 34.9395C7.89521 35.0921 8.25669 35.3572 8.79484 35.4777C9.00367 35.3652 9.29283 35.1564 9.41331 34.8351C9.41331 34.8351 9.55789 35.2126 9.42938 35.5741C10.9555 35.7106 11.4936 34.4897 12.6744 34.7146C12.7065 34.7227 12.7226 34.6986 12.7226 34.6664C12.7226 33.9114 12.2647 32.5379 10.8029 32.2568C9.34906 31.9757 9.74263 31.3813 9.74263 31.3813C10.3531 31.3572 10.7065 31.6222 10.7065 31.6222C10.8189 31.4375 10.6583 31.2447 10.6583 31.2447C10.7145 31.1725 10.7466 30.9235 10.7466 30.9235C10.0559 30.9235 9.87918 30.7708 9.87918 30.7708C9.77476 30.3612 10.0559 29.7829 11.084 30.4014C11.341 30.1765 11.3169 29.8231 11.3169 29.8231C11.3973 29.7829 11.4454 29.6624 11.4454 29.6142C11.4454 29.4455 10.6262 28.9877 10.4173 28.9315C10.3691 28.6825 10.0479 28.3291 9.084 28.4576C8.62616 28.5138 8.29685 28.3933 8.44946 28.1283C8.47355 28.0801 8.39323 28.072 8.35307 28.1202C8.24865 28.2247 8.10408 28.5218 8.49765 28.7226C8.93942 28.9475 8.96351 29.3893 8.97155 29.4536C8.97958 29.55 8.86713 29.558 8.84303 29.4616C8.64223 28.7146 7.61408 28.554 7.01167 28.9476C7.0438 29.3492 7.47755 29.6142 7.71048 29.6142C7.84702 29.6142 8.03179 29.4777 8.03179 29.2929C8.03179 29.2046 8.07998 29.2126 8.10408 29.2849C8.20046 29.55 7.80686 30.1042 7.22854 29.7668C6.63417 30.3612 6.87514 31.1002 6.93136 31.3652C7.03578 31.8471 6.80284 32.321 6.36107 32.1042C6.33698 32.0961 6.31288 32.0881 6.31288 32.1363C6.32091 32.4255 6.72252 32.7708 7.18838 32.5058ZM10.4736 29.5098C10.1924 29.8231 9.74263 29.7508 9.63018 29.2367C10.2005 29.2046 10.4495 29.2608 10.4736 29.5098ZM28.2005 30.6986C27.9033 30.6986 27.6221 30.57 27.5659 30.3371C27.5499 30.2809 27.5017 30.2568 27.4776 30.3451C27.333 30.8592 27.7025 31.1002 28.0559 31.1002C28.4495 31.1002 28.6663 30.819 29.2286 30.7226C29.4776 30.6825 29.6462 30.7227 29.6462 30.6423C29.6462 30.57 29.2848 30.57 29.2286 30.57C28.6422 30.57 28.5699 30.6986 28.2005 30.6986ZM33.9434 32.1202C33.9434 32.072 33.9193 32.0801 33.8952 32.0881C33.4535 32.305 33.2205 31.8391 33.325 31.3492C33.3812 31.0761 33.6221 30.3451 33.0278 29.7508C32.4414 30.0881 32.0479 29.5339 32.1523 29.2688C32.1764 29.1965 32.2246 29.1885 32.2246 29.2769C32.2246 29.4616 32.4093 29.5982 32.5458 29.5982C32.7788 29.5982 33.2125 29.3331 33.2446 28.9315C32.6422 28.5379 31.6141 28.6986 31.4133 29.4455C31.3892 29.5419 31.2768 29.5339 31.2848 29.4375C31.2848 29.3733 31.3169 28.9315 31.7587 28.7066C32.1603 28.5058 32.0157 28.2086 31.9033 28.1042C31.8631 28.064 31.7748 28.072 31.8069 28.1122C31.9595 28.3773 31.6302 28.4978 31.1804 28.4415C30.2165 28.313 29.9033 28.6745 29.847 28.9154C29.6382 28.9716 28.8189 29.4295 28.8189 29.5982C28.8189 29.6463 28.8671 29.7749 28.9475 29.807C28.9475 29.807 28.9314 30.1524 29.1804 30.3853C30.2005 29.7668 30.4896 30.3451 30.3852 30.7548C30.3852 30.7548 30.2005 30.8994 29.5097 30.9074C29.5097 30.9074 29.5418 31.1564 29.5981 31.2287C29.5981 31.2287 29.4374 31.4295 29.5499 31.6062C29.5499 31.6062 29.9033 31.3411 30.5137 31.3652C30.5137 31.3652 30.9073 31.9596 29.4535 32.2407C27.9997 32.5218 27.5338 33.8953 27.5338 34.6504C27.5338 34.6905 27.5499 34.7066 27.582 34.6986C28.7627 34.4817 29.3009 35.7026 30.827 35.558C30.6904 35.1965 30.843 34.819 30.843 34.819C30.9635 35.1403 31.2527 35.3572 31.4615 35.4616C32.0077 35.3411 32.3611 35.0841 32.4414 34.9235C32.4414 34.9235 31.8631 34.4496 32.2406 33.5821C32.2406 33.5821 32.6021 34.1604 33.3491 33.8471C33.4133 33.815 33.3973 33.7749 33.3571 33.7588C32.345 33.4295 33.0037 32.5781 33.0679 32.4897C33.5499 32.7708 33.9434 32.4255 33.9434 32.1202ZM30.6342 29.2367C30.5217 29.7508 30.0719 29.8231 29.7908 29.5098C29.823 29.2608 30.0639 29.2046 30.6342 29.2367ZM19.8631 20.6504C19.8631 20.7789 19.9193 20.8913 19.9595 20.9556C20.0479 21.0841 20.0318 21.1564 19.9916 21.1965C19.9515 21.2367 19.8792 21.2528 19.7507 21.1644C19.6613 21.1015 19.5547 21.0679 19.4454 21.068C19.2286 21.068 19.1161 21.2126 19.1161 21.3331C19.1161 21.4536 19.2286 21.5982 19.4454 21.5982C19.574 21.5982 19.6864 21.5419 19.7507 21.5018C19.8792 21.4134 19.9515 21.4295 19.9916 21.4696C20.0318 21.5098 19.9756 21.9516 19.9193 22.305C19.5579 22.3853 19.3812 22.6745 19.3812 22.8431C19.3812 23.2849 19.847 23.5339 20.1282 23.6865C20.4013 23.5419 20.8752 23.2849 20.8752 22.8431C20.8752 22.6745 20.6985 22.3773 20.337 22.305C20.2888 21.9596 20.2246 21.5098 20.2647 21.4696C20.3049 21.4295 20.3772 21.4134 20.5057 21.5018C20.5699 21.55 20.6824 21.5982 20.8109 21.5982C21.0278 21.5982 21.1402 21.4536 21.1402 21.3331C21.1402 21.2126 21.0278 21.068 20.8109 21.068C20.6824 21.068 20.5699 21.1243 20.5057 21.1644C20.3772 21.2528 20.3049 21.2367 20.2647 21.1965C20.2246 21.1564 20.2085 21.0841 20.2968 20.9556C20.345 20.8913 20.3932 20.7789 20.3932 20.6504C20.3932 20.4335 20.2487 20.321 20.1282 20.321C20.0077 20.321 19.8631 20.4335 19.8631 20.6504ZM20.1362 23.9114C20.0298 23.9114 19.9257 23.943 19.8372 24.0021C19.7487 24.0612 19.6797 24.1453 19.639 24.2436C19.5983 24.3419 19.5876 24.4501 19.6083 24.5545C19.6291 24.659 19.6804 24.7549 19.7556 24.8301C19.8309 24.9054 19.9268 24.9566 20.0311 24.9773C20.1356 24.9982 20.2438 24.9875 20.3421 24.9467C20.4405 24.906 20.5245 24.837 20.5837 24.7485C20.6428 24.6601 20.6744 24.556 20.6744 24.4496C20.6728 24.3073 20.6157 24.1712 20.5151 24.0707C20.4145 23.97 20.2785 23.9129 20.1362 23.9114ZM20.1362 29.06C22.2808 29.06 23.4856 29.4696 23.4856 29.4696C23.4936 28.3853 23.4936 27.7829 24.1121 27.8712C23.7748 26.9636 25.2366 26.6022 25.2366 25.4214C25.2366 24.6423 24.6824 24.554 24.5217 24.554C24.0398 24.554 24.1121 24.8672 23.7025 24.8672C23.6543 24.8672 23.5981 24.8512 23.5981 24.8913C23.5981 25.0279 23.7105 25.2608 23.9033 25.2608C24.1603 25.2608 24.1603 25.0038 24.3531 25.0038C24.4334 25.0038 24.5539 25.068 24.5539 25.3331C24.5539 25.8391 24.2246 26.3933 23.831 26.8271C23.7426 26.7066 23.6222 26.6263 23.4695 26.6263C23.2366 26.6263 23.0358 26.8672 23.0358 27.1644C23.0358 27.2769 23.0519 27.3572 23.092 27.4455C22.9635 27.5178 22.843 27.558 22.7627 27.558C22.586 27.558 22.3209 27.4857 22.3209 27.1002C22.3209 26.2407 23.4695 25.4857 23.4695 24.3933C23.4695 23.8712 23.1242 23.3572 22.3932 23.3572C21.6141 23.3572 21.7587 24.064 21.084 24.064C21.0519 24.064 21.0278 24.072 21.0278 24.1042C21.0278 24.1524 21.1483 24.5459 21.4936 24.5459C21.8631 24.5459 21.9675 23.9034 22.3049 23.9034C22.4254 23.9034 22.6101 23.9757 22.6101 24.4094C22.6101 24.7467 22.4414 25.301 22.2005 25.8231C22.1124 25.73 21.9911 25.6752 21.8631 25.6704C21.574 25.6704 21.3651 25.9516 21.3651 26.2809C21.3651 26.4897 21.4454 26.6986 21.59 26.8271C21.4213 27.0439 21.2446 27.2206 21.0117 27.2206C20.5458 27.2206 20.345 26.9556 20.345 26.6664C20.345 26.3532 20.9153 26.2407 20.9153 25.7588C20.9153 25.4295 20.6985 25.2447 20.4977 25.2447C20.2728 25.2447 20.1603 25.3893 20.1362 25.3893C20.1121 25.3893 19.9997 25.2447 19.7748 25.2447C19.5659 25.2447 19.3571 25.4295 19.3571 25.7588C19.3571 26.2407 19.9274 26.3612 19.9274 26.6664C19.9274 26.9556 19.7185 27.2206 19.2607 27.2206C19.0278 27.2206 18.8511 27.0439 18.6824 26.8271C18.827 26.6905 18.9073 26.4897 18.9073 26.2809C18.9073 25.9435 18.6985 25.6704 18.4093 25.6704C18.3457 25.672 18.283 25.6862 18.225 25.7124C18.1671 25.7386 18.115 25.7763 18.0719 25.8231C17.831 25.2929 17.6623 24.7467 17.6623 24.4094C17.6623 23.9757 17.847 23.9034 17.9675 23.9034C18.2968 23.9034 18.4013 24.5459 18.7788 24.5459C19.1242 24.5459 19.2446 24.1524 19.2446 24.1042C19.2446 24.0801 19.2205 24.064 19.1884 24.064C18.5137 24.064 18.6583 23.3572 17.8792 23.3572C17.1563 23.3572 16.8029 23.8712 16.8029 24.3933C16.8029 25.4857 17.9515 26.2407 17.9515 27.1002C17.9515 27.4857 17.6864 27.558 17.5097 27.558C17.4213 27.558 17.3089 27.5178 17.1804 27.4455C17.2205 27.3492 17.2366 27.2769 17.2366 27.1644C17.2366 26.8672 17.0358 26.6263 16.8029 26.6263C16.6583 26.6263 16.5378 26.7066 16.4495 26.8271C16.0559 26.3933 15.7266 25.8391 15.7266 25.3331C15.7266 25.0761 15.847 25.0038 15.9274 25.0038C16.1121 25.0038 16.1201 25.2608 16.3772 25.2608C16.5699 25.2608 16.6824 25.0279 16.6824 24.8913C16.6824 24.8512 16.6262 24.8672 16.578 24.8672C16.1683 24.8672 16.2406 24.554 15.7587 24.554C15.5981 24.554 15.0438 24.6423 15.0438 25.4214C15.0438 26.6102 16.5057 26.9636 16.1683 27.8712C16.7868 27.7829 16.7788 28.3853 16.7948 29.4696C16.7788 29.4696 17.9916 29.06 20.1362 29.06ZM16.2085 30.6584C15.6221 30.7869 15.2045 30.9074 15.0197 30.9636C15.0278 30.7066 15.1242 30.4656 15.3571 30.4174C15.3892 30.4094 15.3973 30.3692 15.3651 30.3532C14.843 30.0078 14.5699 30.6664 14.5619 30.6905C14.3772 30.6745 14.096 30.7307 14.096 30.9797C14.096 31.7267 12.3932 32.1363 11.9997 32.2006C12.6985 32.4656 12.9876 33.3492 12.9876 33.3492C13.4936 32.8431 14.08 32.4014 14.2165 32.4014C14.3531 32.4014 14.4013 32.57 14.4093 32.6664C14.4093 32.6986 14.4414 32.7066 14.4655 32.6825C14.7306 32.2889 14.6021 32.2006 14.578 32.0801C14.5619 31.9917 14.586 31.6463 14.9715 31.6865V36.6584L14.7707 36.6986C14.6824 36.7146 13.9515 36.0961 13.1242 35.5178C12.2888 34.9395 11.847 35.2849 10.8993 35.799C9.65428 36.4737 8.40127 35.8632 8.40127 35.8632C7.33297 36.6263 6.96348 38.8431 6.96348 38.8431C6.74661 38.9315 6.3932 39.0279 6.06388 39.0279C5.24461 39.0279 5.10004 38.5299 5.10004 38.2407C5.10004 36.9797 6.68237 36.4415 6.68237 35.1965C6.68237 34.8913 6.54581 33.6704 5.02774 33.6704H3.67032C3.10004 33.6704 2.96348 33.2608 2.88316 33.1082C2.85103 33.0439 2.79481 33.0841 2.8189 33.1323C2.85906 33.2367 2.75464 33.3973 2.75464 33.7106C2.75464 34.2166 3.05184 34.5218 3.60606 34.5218C3.85506 34.5218 4.09601 34.4496 4.1683 34.4014C4.21649 34.3692 4.24862 34.4174 4.22453 34.4496C3.98356 34.7307 3.9675 35.2608 4.06388 35.3813C4.08798 35.4134 4.12012 35.4054 4.12012 35.3813C4.25666 34.8512 4.75465 34.3451 5.42935 34.3451C6.25665 34.3451 6.24862 35.0439 6.24862 35.2126C6.24862 36.2247 4.47353 36.9636 4.47353 38.3612C4.47353 39.7749 5.9675 40.072 6.82694 39.8552C6.77874 41.2688 5.15625 41.7508 5.10806 40.7387C5.10806 40.6905 5.0679 40.6825 5.0438 40.7467C4.843 41.2447 4.92332 41.6865 5.54983 41.823C5.58999 41.8311 5.57392 41.8552 5.53376 41.8873C4.90726 42.2809 5.24461 43.8391 5.27674 44.2969C5.32494 44.9556 4.6663 44.8753 4.61008 44.8592C4.58598 44.8512 4.55384 44.8592 4.60204 44.9154C5.0679 45.4857 5.64621 44.9636 5.64621 44.9636C6.07995 45.1002 5.81489 45.4696 5.5177 45.6624C5.46951 45.6945 5.47755 45.7267 5.52574 45.7267C5.59 45.7347 6.26469 45.7909 6.38517 45.2528C6.68236 45.6062 7.12412 45.4777 7.21248 45.4295C7.34099 45.3652 7.97553 45.1323 8.03179 45.8391C8.03179 45.8873 8.06392 45.8552 8.08801 45.8311C8.56191 45.2287 8.05588 44.8592 7.7667 44.819C7.79079 44.7869 8.16833 44.4656 8.51371 44.9074C8.53781 44.9395 8.56191 44.9475 8.56191 44.8833C8.60207 44.1202 7.98356 44.056 7.58196 44.3853C7.56589 44.305 7.42935 43.8793 8.03179 43.8953C8.04785 43.8953 8.07195 43.8712 8.04785 43.8471C7.58196 43.3492 7.19641 43.799 7.10003 43.9114C6.89119 44.1604 6.3691 44.056 6.32091 44.056C6.48155 41.4134 8.8109 42.3532 9.13219 41.068C9.14825 41.0038 9.18038 41.0279 9.18038 41.052C9.26874 41.3652 10.0559 41.4054 10.2005 40.7949C10.2085 40.7548 10.2005 40.7307 10.1764 40.7548C9.50167 41.4295 7.98357 39.3251 10.0559 37.6142C11.823 36.1604 13.4053 36.9716 14.0077 37.4455C14.0398 37.6544 13.9113 37.7267 13.831 37.7508C13.7989 37.7588 13.7908 37.7829 13.839 37.807C14.0077 37.8712 14.2406 37.8471 14.3531 37.6945C14.7306 37.9596 14.4093 38.2969 14.2567 38.3853C14.2165 38.4094 14.2326 38.4335 14.2647 38.4415C14.6101 38.5058 14.8993 38.1524 14.9153 37.9435L14.9715 37.9757V39.4777C14.9715 41.6142 17.4374 41.9114 20.1442 43.7186C22.8511 41.9034 25.3089 41.6142 25.3089 39.4777V37.9757L25.3651 37.9435C25.3812 38.1443 25.6623 38.5058 26.0157 38.4415C26.0479 38.4335 26.0639 38.4094 26.0238 38.3853C25.8711 38.2889 25.5418 37.9596 25.9274 37.6945C26.0398 37.8552 26.2728 37.8712 26.4414 37.807C26.4896 37.7909 26.4816 37.7588 26.4495 37.7508C26.3691 37.7267 26.2406 37.6544 26.2728 37.4455C26.8752 36.9636 28.4575 36.1524 30.2246 37.6142C32.2968 39.3251 30.7788 41.4214 30.1041 40.7548C30.0719 40.7226 30.0719 40.7548 30.08 40.7949C30.2246 41.4134 31.0117 41.3652 31.1001 41.052C31.1081 41.0279 31.1402 41.0038 31.1483 41.068C31.4695 42.3532 33.7908 41.4134 33.9595 44.056C33.9113 44.064 33.3892 44.1604 33.1804 43.9114C33.092 43.807 32.7065 43.3492 32.2326 43.8471C32.2005 43.8793 32.2326 43.8953 32.2487 43.8953C32.8511 43.8793 32.7225 44.305 32.6985 44.3853C32.2968 44.056 31.6784 44.1202 31.7185 44.8833C31.7185 44.9395 31.7426 44.9395 31.7667 44.9074C32.1121 44.4656 32.4896 44.7869 32.5137 44.819C32.2326 44.8592 31.7185 45.2287 32.1924 45.8311C32.2165 45.8552 32.2406 45.8873 32.2487 45.8391C32.3129 45.1323 32.9394 45.3572 33.0679 45.4295C33.1563 45.4777 33.5981 45.6062 33.8952 45.2528C34.0157 45.7909 34.6904 45.7347 34.7547 45.7267C34.8029 45.7267 34.8029 45.6945 34.7627 45.6624C34.4736 45.4696 34.2005 45.1002 34.6342 44.9636C34.6342 44.9636 35.2125 45.4857 35.6784 44.9154C35.7185 44.8672 35.6944 44.8512 35.6703 44.8592C35.6141 44.8753 34.9555 44.9556 35.0037 44.2969C35.0358 43.8391 35.3732 42.2809 34.7466 41.8873C34.7065 41.8632 34.6904 41.8391 34.7306 41.823C35.3571 41.6865 35.4374 41.2447 35.2366 40.7467C35.2125 40.6825 35.1724 40.6986 35.1724 40.7387C35.1242 41.7508 33.5097 41.2688 33.4535 39.8552C34.3209 40.0801 35.8069 39.7749 35.8069 38.3612C35.8069 36.9716 34.0318 36.2247 34.0318 35.2126C34.0318 35.0439 34.0238 34.3451 34.8511 34.3451C35.5258 34.3451 36.0238 34.8512 36.1603 35.3813C36.1683 35.4054 36.1924 35.4134 36.2165 35.3813C36.3129 35.2528 36.2968 34.7307 36.0559 34.4496C36.0318 34.4255 36.0559 34.3692 36.1121 34.4014C36.1844 34.4496 36.4254 34.5218 36.6744 34.5218C37.2286 34.5218 37.5258 34.2166 37.5258 33.7106C37.5258 33.3973 37.4133 33.2367 37.4615 33.1323C37.4856 33.0841 37.4213 33.052 37.3973 33.1082C37.3169 33.2688 37.1723 33.6704 36.61 33.6704H35.2527C33.7346 33.6704 33.5981 34.8994 33.5981 35.1965C33.5981 36.4415 35.1804 36.9797 35.1804 38.2407C35.1804 38.5379 35.0278 39.0279 34.2165 39.0279C33.8792 39.0279 33.5258 38.9315 33.3169 38.8431C33.3169 38.8431 32.9555 36.6343 31.8792 35.8632C31.8792 35.8632 30.6262 36.4737 29.3812 35.799C28.4334 35.2849 27.9836 34.9395 27.1483 35.5178C26.3129 36.0961 25.59 36.7146 25.5017 36.6986L25.3009 36.6584V31.6865C25.6864 31.6463 25.7105 31.9917 25.6944 32.0801C25.6703 32.1925 25.5499 32.2889 25.8069 32.6825C25.831 32.7146 25.8551 32.6986 25.8631 32.6664C25.8711 32.57 25.9274 32.4014 26.0559 32.4014C26.1844 32.4014 26.7788 32.8431 27.2848 33.3492C27.2848 33.3492 27.574 32.4737 28.2728 32.2006C27.8792 32.1363 26.1764 31.7267 26.1764 30.9797C26.1764 30.7307 25.8952 30.6745 25.7105 30.6905C25.7025 30.6664 25.4213 30.0078 24.9073 30.3532C24.8832 30.3692 24.8832 30.4094 24.9153 30.4174C25.1483 30.4737 25.2446 30.7066 25.2527 30.9636C24.7547 30.811 22.6422 30.2166 20.1362 30.2166C18.9153 30.2166 17.7989 30.3612 16.9073 30.5218V32.2407H16.2085V30.6584ZM11.574 48.313C11.3892 48.2407 11.2687 48.1202 11.2687 47.8712V46.803C10.9635 46.6985 10.1282 46.3773 8.44946 46.3773C7.05988 46.3773 6.62613 46.6905 6.60204 46.803L6.23256 48.8431C6.23256 48.8431 6.79481 48.3291 8.8109 48.4576C11.2366 48.6102 13.7507 50.0479 13.7507 48.5138V47.6142C11.8551 47.6142 11.574 48.2247 11.574 48.313ZM26.5137 47.6142V48.5138C26.5137 50.0399 29.0278 48.6102 31.4535 48.4576C33.4695 48.3291 34.0318 48.8431 34.0318 48.8431L33.6623 46.803C33.6462 46.6905 33.2045 46.3773 31.8149 46.3773C30.1442 46.3773 29.3089 46.6985 28.9956 46.803V47.8712C28.9956 48.1122 28.8752 48.2327 28.6904 48.313C28.6904 48.2247 28.4093 47.6142 26.5137 47.6142ZM20.1362 46.6905C24.0479 46.6905 28.0157 46.8913 28.5298 47.4857C28.5699 47.5339 28.586 47.4857 28.586 47.4455V45.3732C28.586 44.7708 24.4896 44.4174 20.1282 44.4174C15.7667 44.4174 11.6703 44.7708 11.6703 45.3732V47.4455C11.6703 47.4777 11.6864 47.5259 11.7266 47.4857C12.2567 46.8994 16.2246 46.6905 20.1362 46.6905ZM16.6503 36.9235L16.2567 36.819L16.2246 36.8672L15.7667 36.6664H16.1764C16.2165 36.6664 16.2165 36.6423 16.2005 36.6263C16.0157 36.4415 15.847 36.2809 15.847 36.2809C15.847 36.2809 16.0318 36.3532 16.2968 36.4496C16.329 36.4576 16.337 36.4415 16.3209 36.4174L16.0157 35.9757L16.4575 36.2729C16.4816 36.2889 16.4977 36.2728 16.4896 36.2488L16.2808 35.7267L16.6824 36.1122C16.6985 36.1283 16.7226 36.1202 16.7145 36.0961L16.6021 35.5741L16.8993 36.0078C16.9153 36.0319 16.9394 36.0239 16.9394 35.9998C16.9394 35.9114 16.9475 35.5259 16.9475 35.5259C16.9475 35.5259 17.076 35.815 17.1322 35.9596C17.1483 35.9917 17.1643 35.9917 17.1804 35.9516C17.1964 35.9034 17.333 35.5821 17.333 35.5821L17.3491 36.0801L17.2848 36.0961L17.2045 36.6905C17.7908 36.554 18.5298 35.5419 19.092 35.5419C19.7667 35.5419 20.0077 36.3291 21.2446 35.9275C21.5579 36.3933 21.6703 36.7949 21.7908 37.3492C22.2728 37.799 22.9394 37.6463 22.9394 37.1724C22.9394 36.5299 22.2406 36.4094 22.2406 35.7347C22.2406 35.4375 22.4495 35.0038 23.0197 35.0038C23.325 35.0038 23.7667 35.1323 24.0238 35.1323C24.329 35.1323 24.3932 34.9154 24.4254 34.819C24.4495 34.7548 24.5378 34.7708 24.5298 34.8271C24.5217 34.8913 24.5619 34.9797 24.5619 35.1243C24.5619 35.55 23.9434 35.6062 23.8711 35.55C23.839 35.5259 23.8149 35.558 23.839 35.5821C23.9354 35.6544 23.9113 35.9114 23.7989 36.072C23.7828 36.0881 23.7667 36.0881 23.7667 36.072C23.7025 35.7668 23.341 35.3893 23.0278 35.3893C22.9153 35.3893 22.6824 35.4536 22.6824 35.7267C22.6824 36.1042 23.4454 36.4576 23.4454 37.2447C23.4454 38.064 22.6342 38.2648 21.8149 38.056C21.839 38.8351 23.0037 39.2929 23.0278 38.7387C23.0278 38.6986 23.0519 38.7227 23.0599 38.7387C23.2286 38.9797 23.1563 39.1564 22.9314 39.2528C23.1322 39.3411 23.1723 39.7508 23.2286 39.9998C23.3169 40.3692 23.7025 40.1604 23.7266 40.1524C23.7507 40.1363 23.7587 40.1524 23.7426 40.1765C23.5981 40.554 23.2045 40.4094 23.2045 40.4094C23.0037 40.554 23.2446 40.6825 23.4294 40.7387C23.4535 40.7467 23.4535 40.7628 23.4374 40.7789C23.3009 40.8271 23.0117 40.9235 22.8671 40.6745C22.7627 40.9315 22.5458 40.9234 22.4655 40.9234C22.3129 40.9234 22.2165 41.0761 22.2487 41.2849C22.2487 41.301 22.2406 41.309 22.2246 41.301C21.8711 41.068 22.0719 40.7869 22.2165 40.7146C22.1924 40.6986 21.9434 40.5941 21.839 40.8833C21.831 40.9074 21.8149 40.9074 21.8069 40.8833C21.6543 40.4656 21.9916 40.3451 22.2326 40.4496C22.2165 40.3933 22.088 40.1845 21.7667 40.2568C21.7507 40.2648 21.7426 40.2568 21.7507 40.2327C21.8069 40.1042 21.9595 39.9194 22.2567 40.1042C22.4093 40.2006 22.6663 40.064 22.6904 40.048C22.1683 39.0118 21.1643 39.8793 20.9314 39.068C20.9234 39.052 20.9073 39.0359 20.8912 39.0841C20.835 39.2528 20.3932 39.2688 20.3129 38.9315C20.3049 38.9074 20.3129 38.8994 20.337 38.9154C20.4013 38.9797 20.5378 39.0359 20.7226 38.7789C20.843 38.6022 20.8591 38.3692 20.8591 38.2166C20.8591 37.5901 20.2326 36.5299 19.2527 36.5299C18.6342 36.5299 17.9675 36.7708 17.4695 37.1323L17.9274 37.2367C17.8872 37.7026 17.4374 37.9757 17.0278 37.8552L17.1001 37.3251C17.0278 37.3492 16.8511 37.4134 16.7547 37.55C16.7466 37.558 16.7306 37.558 16.7306 37.5419C16.6503 37.2367 16.8993 37.0841 16.9715 37.052C16.9796 37.0439 16.9796 37.0439 16.9635 37.0439C16.7386 37.0359 16.6181 37.1965 16.578 37.2528C16.5699 37.2608 16.5619 37.2608 16.5619 37.2528C16.586 37.1885 16.5458 37.0359 16.6503 36.9235ZM18.0157 40.5218C17.839 40.7387 17.6864 40.5299 17.4535 40.5299C17.2366 40.5299 17.1964 40.7146 17.1964 40.7869C17.1964 40.803 17.1884 40.803 17.1804 40.7949C16.9314 40.4576 17.2125 40.2729 17.3732 40.2488C17.3491 40.2247 17.1081 40.064 16.9555 40.2889C16.9475 40.305 16.9314 40.2969 16.9314 40.2809C16.9234 39.8632 17.2527 39.8311 17.4776 40.0158C17.5177 39.8552 17.4133 39.7508 17.2366 39.7427C17.2125 39.7427 17.2125 39.7267 17.2205 39.7186C17.2928 39.6383 17.3651 39.6062 17.4374 39.6062C17.6703 39.6062 17.7025 39.9034 17.8551 39.9034C18.08 39.9034 18.4093 39.5982 18.4334 39.566C18.4254 39.55 18.2085 38.9556 18.2487 38.6022C18.2487 38.5861 18.2406 38.5861 18.2326 38.5941C18.1201 38.6584 17.847 38.6504 17.847 38.313C17.847 38.2889 17.8551 38.2809 17.8711 38.305C17.9916 38.4737 18.1924 38.2809 18.2888 38.1684C18.3932 38.0479 18.9715 37.2126 19.7346 37.2126C19.9033 37.2126 20.1201 37.309 20.2968 37.4295C20.0318 37.7508 20.2968 38.056 20.4896 38.0158C20.5137 38.0078 20.5137 38.0319 20.4977 38.0399C19.4856 38.4174 19.0358 38.57 19.0358 39.4214C19.0358 39.8632 19.1884 40.1122 19.4454 40.048C19.4615 40.0399 19.4695 40.0479 19.4535 40.064C19.3571 40.1765 19.2527 40.2166 19.1643 40.2166C18.9555 40.2166 18.9153 40.1042 18.8029 40.1042C18.6904 40.1042 18.3129 40.3291 18.3129 40.5138C18.3129 40.5861 18.3611 40.6825 18.4896 40.7628C18.4977 40.7708 18.4896 40.7789 18.4896 40.7789C18.3852 40.7789 18.088 40.803 18.0157 40.5218ZM20.6824 32.2889C20.3691 32.2728 20.1603 32.3371 20.1764 32.4415C20.3209 32.6022 20.5298 32.5861 20.6824 32.2889ZM19.5097 33.068C19.7346 33.0118 19.9756 33.0359 20.0077 33.0439C20.0398 33.052 20.0398 33.1082 19.9997 33.1162C19.5338 33.1725 19.5097 33.3893 19.2125 33.3893C19.0197 33.3893 18.8029 33.1885 18.8832 32.8994C18.8912 32.8592 18.9234 32.8592 18.9314 32.8994C18.9635 33.0279 19.1483 33.1644 19.5097 33.068ZM13.4615 43.3973C13.7667 43.7909 14.0639 43.4214 14.4736 43.4214C14.6744 43.4214 14.9153 43.4857 14.9555 43.8873C14.9555 43.9114 14.9715 43.9114 14.9956 43.8873C15.4374 43.2849 14.9314 42.9475 14.6422 42.8994C14.7065 42.8431 15.1322 42.5781 15.4133 42.9716C15.4294 42.9957 15.4615 42.9877 15.4615 42.9556C15.4615 42.1925 14.8912 42.1363 14.4736 42.4656C14.3932 42.1684 14.6181 41.9757 14.9073 41.9757C14.9394 41.9757 14.9555 41.9516 14.9394 41.9355C14.4254 41.3893 14.0479 42.0801 13.9595 42.1845C13.7587 42.4576 13.0278 41.9435 12.7306 41.6383C12.7306 41.6383 13.3732 40.9636 13.3732 40.3451C13.3732 40.305 13.3651 40.2568 13.3651 40.2327C13.3651 40.2166 13.3732 40.2086 13.3892 40.2166C13.4535 40.2568 13.5418 40.2809 13.6302 40.2809C13.7748 40.2809 14.0559 40.2327 14.0559 39.7106C14.0559 39.6704 14.0398 39.6704 14.0238 39.6945C13.9434 39.807 13.8631 39.8311 13.7989 39.8311C13.2768 39.8311 12.1924 38.0961 10.9073 38.0961C10.5699 38.0961 9.9354 38.3371 9.62215 38.6825C9.77476 38.7708 9.80689 38.9636 9.79082 39.1002C9.76673 39.317 9.59002 39.4295 9.41331 39.4777C9.38119 39.4857 9.38119 39.5098 9.41331 39.5259C10.0639 39.7749 11.2366 40.2166 11.5097 40.4496C11.823 40.7226 11.7667 41.2367 11.582 41.9516C11.4053 42.6343 11.0278 42.5459 10.8832 42.5218C10.8591 42.5218 10.8591 42.5299 10.8671 42.5459C11.0358 42.7548 11.2366 42.8271 11.4133 42.8271C11.7507 42.8271 11.8792 42.6182 12.0479 42.6182C12.337 42.6182 12.9555 43.0359 12.9555 43.3572C12.9555 43.5339 12.8189 43.7026 12.6342 43.815C12.6262 43.8231 12.6262 43.8391 12.6422 43.8391C12.7788 43.8632 13.3571 43.9114 13.4615 43.3973ZM27.6302 43.8391C27.6462 43.8391 27.6543 43.8231 27.6382 43.815C27.4615 43.6945 27.3169 43.5339 27.3169 43.3572C27.3169 43.0359 27.9274 42.6182 28.2246 42.6182C28.4013 42.6182 28.5217 42.8271 28.8591 42.8271C29.0358 42.8271 29.2366 42.7548 29.4053 42.5459C29.4213 42.5299 29.4133 42.5138 29.3892 42.5218C29.2527 42.5459 28.8671 42.6343 28.6904 41.9516C28.5057 41.2367 28.4414 40.7226 28.7627 40.4496C29.0278 40.2166 30.2085 39.7749 30.8591 39.5259C30.8912 39.5098 30.8912 39.4857 30.8591 39.4777C30.6824 39.4295 30.5057 39.317 30.4816 39.1002C30.4655 38.9636 30.4977 38.7789 30.6503 38.6825C30.329 38.3371 29.6944 38.0961 29.3571 38.0961C28.0719 38.0961 26.9876 39.8311 26.4655 39.8311C26.4013 39.8311 26.3129 39.807 26.2406 39.6945C26.2246 39.6704 26.2085 39.6704 26.2085 39.7106C26.2085 40.2327 26.4896 40.2809 26.6342 40.2809C26.7145 40.2809 26.8109 40.2568 26.8752 40.2166C26.8912 40.2086 26.8993 40.2166 26.8993 40.2327C26.8993 40.2568 26.8912 40.305 26.8912 40.3451C26.8912 40.9636 27.5338 41.6383 27.5338 41.6383C27.2446 41.9435 26.5137 42.4496 26.3049 42.1845C26.2165 42.072 25.839 41.3893 25.325 41.9355C25.3089 41.9596 25.3169 41.9757 25.3571 41.9757C25.6462 41.9757 25.8711 42.1684 25.7908 42.4656C25.3732 42.1363 24.8029 42.1925 24.8029 42.9556C24.8029 42.9877 24.835 42.9957 24.8511 42.9716C25.1242 42.5781 25.5579 42.8431 25.6141 42.8994C25.325 42.9395 24.827 43.2849 25.2607 43.8873C25.2768 43.9114 25.2928 43.9114 25.3009 43.8873C25.3491 43.4937 25.59 43.4214 25.7828 43.4214C26.1844 43.4214 26.4816 43.7909 26.7948 43.3973C26.9153 43.9114 27.4856 43.8632 27.6302 43.8391ZM17.2527 33.8231C17.2125 33.8793 17.076 33.8231 17.0278 33.799C17.0197 33.7909 17.0117 33.799 17.0197 33.807C17.0519 33.8793 17.1804 34.0961 17.3732 34.0961C17.4615 34.0961 17.59 34.0479 17.6221 33.9837C17.6221 33.9837 18.3772 34.2327 18.7466 34.3291C18.6021 34.5218 18.5137 34.7548 18.4896 35.0038C18.1924 34.819 16.9876 34.1765 16.9876 34.1765L16.6181 34.6905C16.5539 34.7708 16.2567 34.554 16.3209 34.4737L16.6021 34.0801C16.5057 33.9837 16.2808 34.0399 16.2165 34.064C16.2085 34.064 16.2005 34.064 16.2085 34.0479C16.2487 33.9676 16.3852 33.7347 16.7386 33.8391C16.7386 33.6222 16.4173 33.6945 16.329 33.7186C16.3209 33.7186 16.3129 33.7186 16.3209 33.7106C16.4093 33.6142 16.6744 33.4054 16.9635 33.5821L17.092 33.4054L16.835 33.1323L16.9956 32.9074L17.1804 33.1483L18.5699 31.2447C18.6021 31.1965 18.8832 31.1162 18.9796 31.0921C18.9876 31.1965 19.0037 31.4857 18.9715 31.5339L17.6061 33.4536L17.8952 33.55L17.7346 33.7749L17.3973 33.6142L17.2527 33.8231ZM22.1282 33.5098C22.1282 33.6865 22.2326 33.9435 22.4655 33.8632C22.4736 33.8552 22.4896 33.8632 22.4816 33.8712C22.4495 34.064 22.096 34.2407 21.9434 34.0158C21.7989 34.313 21.839 34.5941 22.1362 34.7548C22.1523 34.7628 22.1523 34.7869 22.1362 34.803C21.9515 34.9315 21.6703 34.9074 21.5418 34.6504C21.2928 34.8351 21.325 35.2367 21.4776 35.3733C21.4776 35.3733 20.7868 35.7829 20.1603 35.4937C19.7426 35.2929 19.4053 35.0359 18.8671 35.0841C18.9394 34.3291 19.3169 34.1363 20.0077 34.0239C20.5619 33.9355 20.6262 33.6785 20.5539 33.4857C20.3691 33.4375 20.0238 33.6062 20.0238 33.6062C19.9595 33.5018 20.0479 33.3973 20.0479 33.3973C20.0157 33.3572 19.9997 33.2206 19.9997 33.2206C20.3852 33.2206 20.4575 33.1323 20.4575 33.1323C20.5298 32.7307 20.1201 32.6905 19.8069 32.9074C19.6623 32.7789 19.6864 32.6102 19.6864 32.6102C19.6667 32.5961 19.6502 32.5782 19.6377 32.5574C19.6253 32.5367 19.6172 32.5137 19.6141 32.4897C19.6141 32.3933 20.0719 32.1363 20.1924 32.1042C20.2246 31.9676 20.3852 31.7829 20.8752 31.8311C20.9314 31.7026 20.835 31.2287 20.7788 31.1082C20.7627 31.068 20.7868 31.052 20.827 31.0761C20.9956 31.1805 21.1643 31.5821 21.2848 31.5901C21.2848 31.5901 21.831 31.301 21.8551 31.317C21.8792 31.3331 21.9595 31.9435 21.9595 31.9435C22.0318 32.0319 22.4575 31.9435 22.6422 32.0239C22.6904 32.048 22.6904 32.0801 22.6422 32.0881C22.5057 32.1122 22.0639 32.305 21.9916 32.4255C22.2487 32.803 22.1282 33.3572 22.1282 33.5098Z",fill:"white"})]}),(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsx)("clipPath",{id:"clip0_6571_14288",children:(0,jsx_runtime.jsx)("rect",{width:"40",height:"60",fill:"white"})})})]})}),(0,jsx_runtime.jsxs)("div",{className:"rvo-app-title",children:[(0,jsx_runtime.jsx)("span",{className:"rvo-app-title-small",children:"de"})," Regelmaat"]}),(0,jsx_runtime.jsx)("div",{className:"rvo-app-splash-illustration",children:(0,jsx_runtime.jsxs)("svg",{width:"209",height:"534",viewBox:"0 0 209 534",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M52.7707 252.359L36.2467 445.301C36.0307 453.774 42.84 460.758 51.316 460.758H62.8267C70.6854 460.758 77.2267 454.721 77.852 446.887C81.0947 406.266 97.0334 290.105 97.808 284.915L113.957 447.114C115.223 456.123 122.932 462.826 132.031 462.826H143.143C154.232 462.826 162.757 453.018 161.216 442.037L145.891 250.298",fill:"#007BC7"}),(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M89.1411 88.8262H75.9344C58.8957 88.8262 43.1651 97.9555 34.7104 112.749L7.01174 156.162C-2.87492 171.66 -2.26025 191.632 8.56375 206.49L35.0464 242.913L54.4637 230.117L25.8064 181.006L53.3971 154.042L52.7704 252.359L145.892 250.298L154.357 151.534L176.949 187.51L145.856 228.392L167.1 241.531L204.592 199.412C209.738 186.433 209.402 181.525 201.576 169.964L167.402 110.1C160.01 98.3355 147.353 90.9088 133.478 90.1928L106.965 88.8262L98.9451 100.372L89.1411 88.8262Z",fill:"#007BC7"}),(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M119.392 78.0828C131.365 84.1228 125.264 94.3535 125.264 94.3535L113.681 88.9508L96.9197 109.397L89.141 91.8055L76.2864 95.4108C76.2864 78.1655 84.4384 76.2841 84.4384 76.2841H89.141V84.1228L99.8664 90.6081L115.478 78.2668",fill:"#007BC7"}),(0,jsx_runtime.jsx)("path",{d:"M119.392 78.0828C131.365 84.1228 125.264 94.3535 125.264 94.3535L113.681 88.9508L96.9197 109.397L89.141 91.8055L76.2864 95.4108C76.2864 78.1655 84.4384 76.2841 84.4384 76.2841",stroke:"#154273",strokeWidth:"3.33333",strokeMiterlimit:"10"}),(0,jsx_runtime.jsx)("path",{d:"M147.302 229.134L144.337 234.218C144.15 234.538 143.754 234.67 143.413 234.526L138.845 232.604C134.401 230.732 129.305 233.04 127.779 237.614L123.721 249.792C122.821 252.493 124.087 255.44 126.666 256.646L130.633 258.498C133.021 259.614 135.862 258.917 137.462 256.824L143.875 248.43C144.09 248.149 144.474 248.06 144.791 248.217L147.501 249.558C151.739 251.656 156.877 250.066 159.191 245.942L163.193 238.809",fill:"white"}),(0,jsx_runtime.jsx)("path",{d:"M147.302 229.134L144.337 234.218C144.15 234.538 143.754 234.67 143.413 234.526L138.845 232.604C134.401 230.732 129.305 233.04 127.779 237.614L123.721 249.792C122.821 252.493 124.087 255.44 126.666 256.646L130.633 258.498C133.021 259.614 135.862 258.917 137.462 256.824L143.875 248.43C144.09 248.149 144.474 248.06 144.791 248.217L147.501 249.558C151.739 251.656 156.877 250.066 159.191 245.942L163.193 238.809",stroke:"#154273",strokeWidth:"3.33333",strokeMiterlimit:"10"}),(0,jsx_runtime.jsx)("path",{d:"M52.9061 231.143L55.0981 235.199C55.2848 235.521 55.6808 235.653 56.0221 235.509L60.5901 233.586C65.0341 231.714 70.1301 234.022 71.6554 238.597L75.7141 250.774C76.6141 253.475 75.3474 256.422 72.7674 257.629L68.8021 259.481C66.4141 260.597 63.5728 259.899 61.9714 257.806L55.5581 249.413C55.3448 249.131 54.9608 249.042 54.6434 249.199L51.9341 250.541C47.6954 252.638 42.5581 251.049 40.2434 246.925L37.1968 241.495",fill:"white"}),(0,jsx_runtime.jsx)("path",{d:"M52.9061 231.143L55.0981 235.199C55.2848 235.521 55.6808 235.653 56.0221 235.509L60.5901 233.586C65.0341 231.714 70.1301 234.022 71.6554 238.597L75.7141 250.774C76.6141 253.475 75.3474 256.422 72.7674 257.629L68.8021 259.481C66.4141 260.597 63.5728 259.899 61.9714 257.806L55.5581 249.413C55.3448 249.131 54.9608 249.042 54.6434 249.199L51.9341 250.541C47.6954 252.638 42.5581 251.049 40.2434 246.925L37.1968 241.495",stroke:"#154273",strokeWidth:"3.33333",strokeMiterlimit:"10"}),(0,jsx_runtime.jsx)("path",{d:"M43.5017 459.51L35.8644 513.488C16.5817 517.148 5.7884 520.176 3.4364 530.522H62.6071L69.7737 459.51H43.5017Z",stroke:"#154273",strokeWidth:"3.33333",strokeMiterlimit:"10"}),(0,jsx_runtime.jsx)("path",{d:"M152.441 461.168L157.592 515.145C176.875 518.805 187.668 521.833 190.02 532.18H130.849L126.168 461.168H152.441Z",stroke:"#154273",strokeWidth:"3.33333",strokeMiterlimit:"10"}),(0,jsx_runtime.jsx)("path",{d:"M96.9191 109.397L94.3405 222.681",stroke:"#154273",strokeWidth:"3.33333",strokeMiterlimit:"10"}),(0,jsx_runtime.jsx)("path",{d:"M115.478 133.527H135.049",stroke:"#154273",strokeWidth:"3.33333",strokeMiterlimit:"10"}),(0,jsx_runtime.jsx)("path",{d:"M62.0598 133.527H81.6304",stroke:"#154273",strokeWidth:"3.33333",strokeMiterlimit:"10"}),(0,jsx_runtime.jsx)("path",{d:"M89.1411 84.1232V68.4458V84.1232Z",fill:"white"}),(0,jsx_runtime.jsx)("path",{d:"M89.1411 84.1232V68.4458",stroke:"#154273",strokeWidth:"3.33333",strokeMiterlimit:"10"}),(0,jsx_runtime.jsx)("path",{d:"M105.002 60.9213C93.5304 66.5653 87.2598 73.4626 78.1678 62.8027C69.0744 52.1427 70.9544 12.9493 97.2931 12.9493C102.309 12.9493 110.461 13.8907 115.478 23.924",fill:"white"}),(0,jsx_runtime.jsx)("path",{d:"M105.002 60.9213C93.5304 66.5653 87.2598 73.4626 78.1678 62.8027C69.0744 52.1427 70.9544 12.9493 97.2931 12.9493C102.309 12.9493 110.461 13.8907 115.478 23.924",stroke:"#154273",strokeWidth:"3.33333",strokeMiterlimit:"10"}),(0,jsx_runtime.jsx)("path",{d:"M112.656 40.6661C118.044 29.8807 132.723 47.1261 114.224 51.8287L115.479 80.9487",fill:"white"}),(0,jsx_runtime.jsx)("path",{d:"M112.656 40.6661C118.044 29.8807 132.723 47.1261 114.224 51.8287L115.479 80.9487",stroke:"#154273",strokeWidth:"3.33333",strokeMiterlimit:"10"}),(0,jsx_runtime.jsx)("path",{d:"M85.7199 31.7625L83.1839 46.1852H89.1412",fill:"white"}),(0,jsx_runtime.jsx)("path",{d:"M85.7199 31.7625L83.1839 46.1852H89.1412",stroke:"#154273",strokeWidth:"3.33333",strokeMiterlimit:"10"}),(0,jsx_runtime.jsx)("path",{d:"M120.764 16.9214C120.029 12.7147 117.063 8.55603 112.833 7.96536C108.475 7.3547 103.432 10.4067 99.9681 7.6907C97.4441 5.70936 97.1428 1.40536 94.1495 0.252029C92.4561 -0.401306 90.5095 0.297363 89.0748 1.4107C87.6415 2.5227 86.5548 4.0147 85.2455 5.27203C81.5468 8.82136 75.9828 10.308 71.0068 9.07203C69.1321 13.2134 71.0281 18.6627 75.0668 20.748C78.5388 22.54 82.7761 21.888 86.4495 20.5587C90.1241 19.2294 93.5908 17.2667 97.4135 16.4654C102.775 15.3414 117.971 21.7254 108.721 42.1467C111.301 43.2454 114.391 44.5694 115.969 41.832C117.857 38.56 122.277 25.5854 120.764 16.9214Z",fill:"#007BC7"}),(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M44.649 213.298L54.4637 230.116L42.089 238.215",fill:"#007BC7"}),(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M160.963 208.529L145.855 228.391L167.1 241.531L160.963 208.529Z",fill:"#007BC7"})]})}),(0,jsx_runtime.jsx)("a",{onClick:(0,dist.uM)("Demo pagina's/de Regelmaat/Akkoord"),className:"rvo-next-link"})]})})});Splash.displayName="Splash";const Splash_stories={title:"Pagina's/Experimenteel/de Regelmaat/Splash",component:Splash,parameters:{status:{type:"WORK IN PROGRESS"},viewport:{defaultViewport:"mobile2"}}},Default={name:"Splash"};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  name: 'Splash'\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);