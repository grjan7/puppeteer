/*! For license information please see 2b02d13a.020a4892.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86299],{39716:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var s=r(85893),i=r(11151);const n={sidebar_label:"Page.waitForRequest"},a="Page.waitForRequest() method",o={id:"api/puppeteer.page.waitforrequest",title:"Page.waitForRequest() method",description:"Signature:",source:"@site/versioned_docs/version-22.6.2/api/puppeteer.page.waitforrequest.md",sourceDirName:"api",slug:"/api/puppeteer.page.waitforrequest",permalink:"/api/puppeteer.page.waitforrequest",draft:!1,unlisted:!1,tags:[],version:"22.6.2",frontMatter:{sidebar_label:"Page.waitForRequest"},sidebar:"api",previous:{title:"Page.waitForNetworkIdle",permalink:"/api/puppeteer.page.waitfornetworkidle"},next:{title:"Page.waitForResponse",permalink:"/api/puppeteer.page.waitforresponse"}},l={},p=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"pagewaitforrequest-method",children:"Page.waitForRequest() method"}),"\n",(0,s.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  waitForRequest(\n    urlOrPredicate: string | AwaitablePredicate<HTTPRequest>,\n    options?: WaitTimeoutOptions\n  ): Promise<HTTPRequest>;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"urlOrPredicate"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:["string | ",(0,s.jsx)(t.a,{href:"/api/puppeteer.awaitablepredicate",children:"AwaitablePredicate"}),"<",(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest",children:"HTTPRequest"}),">"]})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"A URL or predicate to wait for"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"options"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.waittimeoutoptions",children:"WaitTimeoutOptions"})})}),(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"(Optional)"})," Optional waiting parameters"]})})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(t.p,{children:["Promise<",(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest",children:"HTTPRequest"}),">"]}),"\n",(0,s.jsx)(t.p,{children:"Promise which resolves to the matched request"}),"\n",(0,s.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsx)(t.p,{children:"Optional Waiting Parameters have:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"timeout"}),": Maximum wait time in milliseconds, defaults to ",(0,s.jsx)(t.code,{children:"30"})," seconds, pass ",(0,s.jsx)(t.code,{children:"0"})," to disable the timeout. The default value can be changed by using the ",(0,s.jsx)(t.a,{href:"/api/puppeteer.page.setdefaulttimeout",children:"Page.setDefaultTimeout()"})," method."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const firstRequest = await page.waitForRequest('https://example.com/resource');\nconst finalRequest = await page.waitForRequest(\n  request => request.url() === 'https://example.com'\n);\nreturn finalRequest.response()?.ok();\n"})})]})}function c(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},75251:(e,t,r)=>{var s=r(67294),i=Symbol.for("react.element"),n=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,r){var s,n={},p=null,d=null;for(s in void 0!==r&&(p=""+r),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,s)&&!l.hasOwnProperty(s)&&(n[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===n[s]&&(n[s]=t[s]);return{$$typeof:i,type:e,key:p,ref:d,props:n,_owner:o.current}}t.Fragment=n,t.jsx=p,t.jsxs=p},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>a});var s=r(67294);const i={},n=s.createContext(i);function a(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);