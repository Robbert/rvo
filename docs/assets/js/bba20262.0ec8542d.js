"use strict";(self.webpackChunk_nl_rvo_docusaurus=self.webpackChunk_nl_rvo_docusaurus||[]).push([["1955"],{77:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>v,default:()=>f,assets:()=>j,toc:()=>x,frontMatter:()=>p});var a=JSON.parse('{"id":"loader/loader.docusaurus","title":"Loader","description":"Standard component:","source":"@site/../../components/loader/loader.docusaurus.mdx","sourceDirName":"loader","slug":"/loader/","permalink":"/rvo/docs/componenten/loader/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Loader","hide_title":false,"hide_table_of_contents":true,"slug":"."},"sidebar":"components","previous":{"title":"List","permalink":"/rvo/docs/componenten/ordered-unordered-list/"},"next":{"title":"Logo","permalink":"/rvo/docs/componenten/logo/"}}'),o=n("7458"),r=n("8607");function l(e){let t={code:"code",p:"p",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["De Loader kan men gebruiken om een tijdelijk laadscherm te tonen als het ophalen van de informatie een korte tijd bedraagd, of het laden van een pagina.\nStandaard is de loader leeg met alleen een draaiend icoon. Als je de loader over de gehele pagina wil laden vallen, of over een specieke div, maak dan gebruik van ",(0,o.jsx)(t.code,{children:"overlay"}),". De Loader zal binnen het element vallen als ",(0,o.jsx)(t.code,{children:"position: relative;"})," wordt gebruikt."]}),"\n",(0,o.jsx)(t.p,{children:"Als na enige tijd het laden nog te lang duurt, kun je een status bericht tonen of twee action buttons tonen. Dit zijn allemaal optionele parameters."})]})}function s(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}var d=n("9576"),i=n("5233"),c=n("7848");n("2983");var u=n("8112");let m=e=>{let{overlay:t,status:n,primaryAction:a,secondaryAction:r,animateLoader:l=!0}=e;return(0,o.jsxs)("div",{className:(0,c.Z)("rvo-loader",t&&"rvo-loader--overlay"),children:[(0,o.jsx)("span",{className:(0,c.Z)("rvo-loader__icon",l&&"rvo-loader__icon--animated"),children:(0,o.jsx)(u.JO,{icon:"pijlen-in-cirkel-om-document",size:"2xl",color:"grijs-700"})}),n&&(0,o.jsxs)("p",{className:"rvo-loader__warning",children:[(0,o.jsx)(i.ZP,{type:n.type,size:"sm"})," ",n.text]}),(a||r)&&(0,o.jsxs)("div",{className:"rvo-loader__actions",children:[a&&(0,o.jsx)(d.ZP,{kind:"primary",size:"xs",...a}),r&&(0,o.jsx)(d.ZP,{kind:"secondary",size:"xs",...r})]})]})};var h=n("6688");let p={title:"Loader",hide_title:!1,hide_table_of_contents:!0,slug:"."},v=void 0,j={},x=[{value:"Standard component:",id:"standard-component",level:2},{value:"Loader met status:",id:"loader-met-status",level:2},{value:"Loader Overlay",id:"loader-overlay",level:2},{value:"Loader met acties:",id:"loader-met-acties",level:2},{value:"Loader met status en acties",id:"loader-met-status-en-acties",level:2},{value:"Documentatie",id:"documentatie",level:2}];function g(e){let t={h2:"h2",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"standard-component",children:"Standard component:"}),"\n",(0,o.jsx)(h.Z,{storyName:"componenten-loader--default",children:(0,o.jsx)(m,{})}),"\n",(0,o.jsx)(t.h2,{id:"loader-met-status",children:"Loader met status:"}),"\n",(0,o.jsx)(h.Z,{storyName:"componenten-button--default",children:(0,o.jsx)(m,{status:{type:"waarschuwing",text:"Het laden duurt iets langer dan verwacht"}})}),"\n",(0,o.jsx)(t.h2,{id:"loader-overlay",children:"Loader Overlay"}),"\n",(0,o.jsx)(h.Z,{storyName:"componenten-button--default",children:(0,o.jsx)("div",{style:{position:"relative",width:500,height:500},children:(0,o.jsx)(m,{overlay:!0})})}),"\n",(0,o.jsx)(t.h2,{id:"loader-met-acties",children:"Loader met acties:"}),"\n",(0,o.jsx)(h.Z,{storyName:"componenten-button--default",children:(0,o.jsx)(m,{primaryAction:{label:"Probeer het opnieuw"},secondaryAction:{label:"Probleem melden"}})}),"\n",(0,o.jsx)(t.h2,{id:"loader-met-status-en-acties",children:"Loader met status en acties"}),"\n",(0,o.jsx)(h.Z,{storyName:"componenten-button--default",children:(0,o.jsx)(m,{status:{type:"waarschuwing",text:"Het laden duurt iets langer dan verwacht"},primaryAction:{label:"Probeer het opnieuw"},secondaryAction:{label:"Probleem melden"}})}),"\n",(0,o.jsx)(t.h2,{id:"documentatie",children:"Documentatie"}),"\n",(0,o.jsx)(s,{})]})}function f(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}}}]);