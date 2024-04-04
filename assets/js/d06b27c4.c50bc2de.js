/*! For license information please see d06b27c4.c50bc2de.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24118],{45849:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var r=t(85893),l=t(11151);const s={sidebar_label:"ElementHandle.select"},i="ElementHandle.select() method",a={id:"api/puppeteer.elementhandle.select",title:"ElementHandle.select() method",description:"Triggers a change and input event once all the provided options have been selected. If there's no ` element matching selector`, the method throws an error.",source:"@site/versioned_docs/version-22.6.2/api/puppeteer.elementhandle.select.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.select",permalink:"/api/puppeteer.elementhandle.select",draft:!1,unlisted:!1,tags:[],version:"22.6.2",frontMatter:{sidebar_label:"ElementHandle.select"},sidebar:"api",previous:{title:"ElementHandle.scrollIntoView",permalink:"/api/puppeteer.elementhandle.scrollintoview"},next:{title:"ElementHandle.tap",permalink:"/api/puppeteer.elementhandle.tap"}},c={},o=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"elementhandleselect-method",children:"ElementHandle.select() method"}),"\n",(0,r.jsxs)(n.p,{children:["Triggers a ",(0,r.jsx)(n.code,{children:"change"})," and ",(0,r.jsx)(n.code,{children:"input"})," event once all the provided options have been selected. If there's no ",(0,r.jsx)(n.code,{children:"<select>"})," element matching ",(0,r.jsx)(n.code,{children:"selector"}),", the method throws an error."]}),"\n",(0,r.jsx)(n.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"class ElementHandle {\n  select(...values: string[]): Promise<string[]>;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Description"})})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"values"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"string[]"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Values of options to select. If the ",(0,r.jsx)(n.code,{children:"<select>"})," has the ",(0,r.jsx)(n.code,{children:"multiple"})," attribute, all values are considered, otherwise only the first one is taken into account."]})})]})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(n.p,{children:"Promise<string[]>"}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"handle.select('blue'); // single selection\nhandle.select('red', 'green', 'blue'); // multiple selections\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},75251:(e,n,t)=>{var r=t(67294),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var r,s={},o=null,d=null;for(r in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,r)&&!c.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:l,type:e,key:o,ref:d,props:s,_owner:a.current}}n.Fragment=s,n.jsx=o,n.jsxs=o},85893:(e,n,t)=>{e.exports=t(75251)},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var r=t(67294);const l={},s=r.createContext(l);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);