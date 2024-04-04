/*! For license information please see 8d61a3b0.03c5c437.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[37431],{69718:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var t=a(85893),r=a(11151);const l={sidebar_label:"Page.evaluateHandle"},s="Page.evaluateHandle() method",i={id:"api/puppeteer.page.evaluatehandle",title:"Page.evaluateHandle() method",description:"Signature:",source:"@site/../docs/api/puppeteer.page.evaluatehandle.md",sourceDirName:"api",slug:"/api/puppeteer.page.evaluatehandle",permalink:"/next/api/puppeteer.page.evaluatehandle",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Page.evaluateHandle"},sidebar:"api",previous:{title:"Page.evaluate",permalink:"/next/api/puppeteer.page.evaluate"},next:{title:"Page.evaluateOnNewDocument",permalink:"/next/api/puppeteer.page.evaluateonnewdocument"}},d={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"pageevaluatehandle-method",children:"Page.evaluateHandle() method"}),"\n",(0,t.jsx)(n.h4,{id:"signature",children:"Signature:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class Page {\n  evaluateHandle<\n    Params extends unknown[],\n    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,\n  >(\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<HandleFor<Awaited<ReturnType<Func>>>>;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Parameter"})}),(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"pageFunction"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"Func | string"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"a function that is run within the page"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"args"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"Params"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"arguments to be passed to the pageFunction"})})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(n.p,{children:["Promise<",(0,t.jsx)(n.a,{href:"/next/api/puppeteer.handlefor",children:"HandleFor"}),"<Awaited<ReturnType<Func>>>>"]}),"\n",(0,t.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(n.p,{children:["The only difference between ",(0,t.jsx)(n.a,{href:"/next/api/puppeteer.page.evaluate",children:"page.evaluate"})," and ",(0,t.jsx)(n.code,{children:"page.evaluateHandle"})," is that ",(0,t.jsx)(n.code,{children:"evaluateHandle"})," will return the value wrapped in an in-page object."]}),"\n",(0,t.jsxs)(n.p,{children:["If the function passed to ",(0,t.jsx)(n.code,{children:"page.evaluateHandle"})," returns a Promise, the function will wait for the promise to resolve and return its value."]}),"\n",(0,t.jsx)(n.p,{children:"You can pass a string instead of a function (although functions are recommended as they are easier to debug and use with TypeScript):"}),"\n",(0,t.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const aHandle = await page.evaluateHandle('document');\n"})}),"\n",(0,t.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/next/api/puppeteer.jshandle",children:"JSHandle"})," instances can be passed as arguments to the ",(0,t.jsx)(n.code,{children:"pageFunction"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const aHandle = await page.evaluateHandle(() => document.body);\nconst resultHandle = await page.evaluateHandle(body => body.innerHTML, aHandle);\nconsole.log(await resultHandle.jsonValue());\nawait resultHandle.dispose();\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Most of the time this function returns a ",(0,t.jsx)(n.a,{href:"/next/api/puppeteer.jshandle",children:"JSHandle"}),", but if ",(0,t.jsx)(n.code,{children:"pageFunction"})," returns a reference to an element, you instead get an ",(0,t.jsx)(n.a,{href:"/next/api/puppeteer.elementhandle",children:"ElementHandle"})," back:"]}),"\n",(0,t.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const button = await page.evaluateHandle(() =>\n  document.querySelector('button')\n);\n// can call `click` because `button` is an `ElementHandle`\nawait button.click();\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The TypeScript definitions assume that ",(0,t.jsx)(n.code,{children:"evaluateHandle"})," returns a ",(0,t.jsx)(n.code,{children:"JSHandle"}),", but if you know it's going to return an ",(0,t.jsx)(n.code,{children:"ElementHandle"}),", pass it as the generic argument:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const button = await page.evaluateHandle<ElementHandle>(...);\n"})})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},75251:(e,n,a)=>{var t=a(67294),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,a){var t,l={},c=null,p=null;for(t in void 0!==a&&(c=""+a),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(p=n.ref),n)s.call(n,t)&&!d.hasOwnProperty(t)&&(l[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===l[t]&&(l[t]=n[t]);return{$$typeof:r,type:e,key:c,ref:p,props:l,_owner:i.current}}n.Fragment=l,n.jsx=c,n.jsxs=c},85893:(e,n,a)=>{e.exports=a(75251)},11151:(e,n,a)=>{a.d(n,{Z:()=>i,a:()=>s});var t=a(67294);const r={},l=t.createContext(r);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);