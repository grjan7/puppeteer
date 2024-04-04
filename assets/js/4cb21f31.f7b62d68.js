/*! For license information please see 4cb21f31.f7b62d68.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[59163],{70628:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=t(85893),i=t(11151);const s={sidebar_label:"JSCoverageOptions"},o="JSCoverageOptions interface",c={id:"api/puppeteer.jscoverageoptions",title:"JSCoverageOptions interface",description:"Set of configurable options for JS coverage.",source:"@site/versioned_docs/version-22.6.2/api/puppeteer.jscoverageoptions.md",sourceDirName:"api",slug:"/api/puppeteer.jscoverageoptions",permalink:"/api/puppeteer.jscoverageoptions",draft:!1,unlisted:!1,tags:[],version:"22.6.2",frontMatter:{sidebar_label:"JSCoverageOptions"},sidebar:"api",previous:{title:"JSCoverageEntry",permalink:"/api/puppeteer.jscoverageentry"},next:{title:"KeyboardTypeOptions",permalink:"/api/puppeteer.keyboardtypeoptions"}},l={},d=[{value:"Signature:",id:"signature",level:4},{value:"Properties",id:"properties",level:2}];function p(e){const r={code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"jscoverageoptions-interface",children:"JSCoverageOptions interface"}),"\n",(0,n.jsx)(r.p,{children:"Set of configurable options for JS coverage."}),"\n",(0,n.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export interface JSCoverageOptions\n"})}),"\n",(0,n.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Property"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Modifiers"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Default"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"includeRawScriptCoverage"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"boolean"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Whether the result includes raw V8 script coverage entries."})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"reportAnonymousScripts"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"boolean"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Whether anonymous scripts generated by the page should be reported."})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"resetOnNavigation"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"boolean"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Whether to reset coverage on every navigation."})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"useBlockCoverage"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"boolean"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Whether to collect coverage information at the block level. If true, coverage will be collected at the block level (this is the default). If false, coverage will be collected at the function level."})}),(0,n.jsx)("td",{})]})]})]})]})}function a(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},75251:(e,r,t)=>{var n=t(67294),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var n,s={},d=null,p=null;for(n in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(p=r.ref),r)o.call(r,n)&&!l.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:i,type:e,key:d,ref:p,props:s,_owner:c.current}}r.Fragment=s,r.jsx=d,r.jsxs=d},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>c,a:()=>o});var n=t(67294);const i={},s=n.createContext(i);function o(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);