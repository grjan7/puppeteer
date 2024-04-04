/*! For license information please see 393a38ac.9ba6e90e.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53526],{10339:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var n=t(85893),s=t(11151);const o={sidebar_label:"Page.hover"},i="Page.hover() method",a={id:"api/puppeteer.page.hover",title:"Page.hover() method",description:"This method fetches an element with selector, scrolls it into view if needed, and then uses Page.mouse to hover over the center of the element. If there's no element matching selector, the method throws an error.",source:"@site/../docs/api/puppeteer.page.hover.md",sourceDirName:"api",slug:"/api/puppeteer.page.hover",permalink:"/next/api/puppeteer.page.hover",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Page.hover"},sidebar:"api",previous:{title:"Page.goto",permalink:"/next/api/puppeteer.page.goto"},next:{title:"Page.isClosed",permalink:"/next/api/puppeteer.page.isclosed"}},l={},h=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"pagehover-method",children:"Page.hover() method"}),"\n",(0,n.jsxs)(r.p,{children:["This method fetches an element with ",(0,n.jsx)(r.code,{children:"selector"}),", scrolls it into view if needed, and then uses ",(0,n.jsx)(r.a,{href:"/next/api/puppeteer.page",children:"Page.mouse"})," to hover over the center of the element. If there's no element matching ",(0,n.jsx)(r.code,{children:"selector"}),", the method throws an error."]}),"\n",(0,n.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class Page {\n  hover(selector: string): Promise<void>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"selector"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"string"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:["A ",(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",children:"selector"})," to search for element to hover. If there are multiple elements satisfying the selector, the first will be hovered."]})})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,n.jsxs)(r.p,{children:["Promise which resolves when the element matching ",(0,n.jsx)(r.code,{children:"selector"})," is successfully hovered. Promise gets rejected if there's no element matching ",(0,n.jsx)(r.code,{children:"selector"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:["Shortcut for ",(0,n.jsx)(r.a,{href:"/next/api/puppeteer.page.hover",children:"page.mainFrame().hover(selector)"}),"."]})]})}function d(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},75251:(e,r,t)=>{var n=t(67294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(e,r,t){var n,o={},h=null,c=null;for(n in void 0!==t&&(h=""+t),void 0!==r.key&&(h=""+r.key),void 0!==r.ref&&(c=r.ref),r)i.call(r,n)&&!l.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:s,type:e,key:h,ref:c,props:o,_owner:a.current}}r.Fragment=o,r.jsx=h,r.jsxs=h},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>i});var n=t(67294);const s={},o=n.createContext(s);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);