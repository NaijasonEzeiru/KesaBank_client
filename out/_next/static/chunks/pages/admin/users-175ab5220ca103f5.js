(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[635],{4168:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/users",function(){return n(2214)}])},4706:function(e,s,n){"use strict";n.d(s,{Z:function(){return w}});var t=n(5893),a=n(7294),r=n(198),l=n(1414),o=n.n(l),i=n(5434),d=n(9583),c=n(9352),h=n(3854),x=n(7516),u=n(3750),_=n(1664),j=n.n(_),f=n(4082);let p=()=>{let{user:e}=(0,a.useContext)(r.Z);return(0,t.jsxs)("span",{className:o().DashboardNav,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{}),(0,t.jsx)("div",{children:(0,t.jsx)("h6",{className:"tac",children:null==e?void 0:e.fullName})})]}),(0,t.jsx)("div",{className:o().flex,children:(0,t.jsx)("p",{children:"NAVIGATIONS"})}),(0,t.jsx)(j(),{href:"/admin/dashboard",className:"m_0",children:(0,t.jsxs)("div",{className:o().flex,children:[(0,t.jsx)(i.v6F,{}),(0,t.jsx)("p",{children:"Dashboard"})]})}),(0,t.jsx)(f.Z,{top:"Users",content:{"Add New":"/admin/users/create","All Users":"/admin/users","KYC Documents":"#","Verified Users":"#","Unverified Users":"#"},children:(0,t.jsx)(d.I$,{})}),(0,t.jsxs)("div",{className:o().flex,children:[(0,t.jsx)(i.gw_,{}),(0,t.jsx)("p",{children:"Transfer Requests"})]}),(0,t.jsxs)("div",{className:o().flex,children:[(0,t.jsx)(d.EIQ,{}),(0,t.jsx)("p",{children:"Wire Transfer"})]}),(0,t.jsx)(f.Z,{top:"Deposit",content:{"Deposit Request":"#","Make Deposit":"/admin/users/update-bal","Deposit History":"#"},children:(0,t.jsx)(d.EIY,{})}),(0,t.jsx)(f.Z,{top:"Withdraw",content:{"Withdraw Request":"#","Make Withdraw":"/admin/users/update-bal","Withdraw History":"#"},children:(0,t.jsx)(d.wbB,{})}),(0,t.jsx)(f.Z,{top:"Loans Management",content:{"All Loans":"#","Loan Calculator":"#","Add New Loan":"#","Loan Products":"#","Loan Repayments":"#"},children:(0,t.jsx)(c.WGO,{})}),(0,t.jsx)(f.Z,{top:"Fixed Deposit",content:{"All New":"#","All FDR":"#","FDR Packages":"#"},children:(0,t.jsx)(d.wNT,{})}),(0,t.jsx)(f.Z,{top:"Gift Cards",content:{"Gift Cards":"#","Used Gift Cards":"#"},children:(0,t.jsx)(u.e5D,{})}),(0,t.jsx)(f.Z,{top:"Support Tickets",content:{"Active Tickets":"#","Pending Tickets":"#","Closed Tickets":"#"},children:(0,t.jsx)(x.LVi,{})}),(0,t.jsxs)("div",{className:o().flex,children:[(0,t.jsx)(h.hMk,{}),(0,t.jsx)("p",{children:"All Transactions"})]})]})};var v=n(4353),m=n.n(v),b=n(1163);let N=e=>{let{children:s}=e,{getAllUsers:n}=(0,a.useContext)(r.Z),[l,o]=(0,a.useState)(!0),[i,d]=(0,a.useState)(!1),c=(0,b.useRouter)();(0,a.useEffect)(()=>{d(window.matchMedia("(min-width: 1050px)").matches),h(),n()},[]);let h=async()=>{let e=await fetch("https://kesa-bank-backend3.onrender.com/auth/me",{method:"GET",credentials:"include"}),s=await e.json();e.ok?(console.log({acc_no:s.fullName}),(null==s?void 0:s.isAdmin)||(console.log({admin:s}),c.push("/login")),(null==s?void 0:s.isAdmin)&&o(!1)):(console.log("failed"),c.push("/login"))};return l?(0,t.jsx)("p",{children:"Loading..."}):(0,t.jsxs)("section",{className:m().dashboardLayout,children:[(0,t.jsx)("span",{onClick:()=>d(!i),className:m().toggle,children:i?"<":">"}),(0,t.jsxs)("div",{className:m().layout,children:[(0,t.jsx)("span",{className:i?m().nav:m().navClose,children:(0,t.jsx)(p,{})}),s]})]})};var w=N},4082:function(e,s,n){"use strict";var t=n(5893),a=n(1664),r=n.n(a),l=n(7294),o=n(1414),i=n.n(o),d=n(9583);let c=e=>{let{children:s,top:n,content:a}=e,[o,c]=(0,l.useState)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:i().flexSB,onClick:()=>c(!o),children:[(0,t.jsxs)("div",{className:i().flex,children:[s,(0,t.jsx)("p",{children:n})]}),(0,t.jsx)("div",{children:o?(0,t.jsx)(d.iUH,{}):(0,t.jsx)(d.H_v,{})})]}),(0,t.jsx)("div",{className:o?i().dropdownContent:i().displayNone,children:Object.keys(a).map((e,s)=>(0,t.jsx)("div",{children:(0,t.jsx)(r(),{href:a[e],children:e})},s))})]})};s.Z=c},2214:function(e,s,n){"use strict";n.r(s);var t=n(5893),a=n(198),r=n(7294),l=n(4353),o=n.n(l),i=n(4706);let d=()=>{let{users:e}=(0,r.useContext)(a.Z);return(0,t.jsx)(i.Z,{children:(0,t.jsx)("div",{className:o().details,children:(0,t.jsxs)("div",{className:"".concat(o().con," ").concat(o().over),children:[(0,t.jsx)("p",{children:"All Users"}),(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"#"}),(0,t.jsx)("th",{children:"AC Number"}),(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Email"}),(0,t.jsx)("th",{children:"Phone"}),(0,t.jsx)("th",{children:"Status"})]})}),e?(0,t.jsx)("tbody",{children:e.map((e,s)=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:+e.account_no}),(0,t.jsx)("td",{children:e.fullName}),(0,t.jsx)("td",{children:e.email}),(0,t.jsx)("td",{children:e.phoneNumber}),(0,t.jsx)("td",{children:e.verified?"Verified":"Unverified"})]},s))}):""]})]})})})};s.default=d},4353:function(e){e.exports={dashboard:"Dashboard_dashboard__W_rvh",dashboardLayout:"Dashboard_dashboardLayout__0uskM",layout:"Dashboard_layout__Cd4QU",toggle:"Dashboard_toggle__E4Do2",nav:"Dashboard_nav__3PN0p",navClose:"Dashboard_navClose__kcx9t",warning:"Dashboard_warning__WeEEE",details:"Dashboard_details__IjH_Z",resFlex:"Dashboard_resFlex__I99fP",flex:"Dashboard_flex__XVqU_",con:"Dashboard_con__bhJ5I",conp:"Dashboard_conp__ZgGsR",over:"Dashboard_over__cxWs1",btn:"Dashboard_btn__lqXZP",dashboardPage:"Dashboard_dashboardPage__rXLn_"}},1414:function(e){e.exports={DashboardNav:"DashboardNav_DashboardNav__yrhy_",dropdownContent:"DashboardNav_dropdownContent__0Ss6z",flexSB:"DashboardNav_flexSB__RiIvO",flex:"DashboardNav_flex__zxecH",displayNone:"DashboardNav_displayNone__LpxL5",leftpad:"DashboardNav_leftpad__MZZ34"}},8357:function(e,s,n){"use strict";n.d(s,{w_:function(){return i}});var t=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r=t.createContext&&t.createContext(a),l=function(){return(l=Object.assign||function(e){for(var s,n=1,t=arguments.length;n<t;n++)for(var a in s=arguments[n])Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);return e}).apply(this,arguments)},o=function(e,s){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>s.indexOf(t)&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)0>s.indexOf(t[a])&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};function i(e){return function(s){return t.createElement(d,l({attr:l({},e.attr)},s),function e(s){return s&&s.map(function(s,n){return t.createElement(s.tag,l({key:n},s.attr),e(s.child))})}(e.child))}}function d(e){var s=function(s){var n,a=e.attr,r=e.size,i=e.title,d=o(e,["attr","size","title"]),c=r||s.size||"1em";return s.className&&(n=s.className),e.className&&(n=(n?n+" ":"")+e.className),t.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,a,d,{className:n,style:l(l({color:e.color||s.color},s.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),i&&t.createElement("title",null,i),e.children)};return void 0!==r?t.createElement(r.Consumer,null,function(e){return s(e)}):s(a)}}},function(e){e.O(0,[445,228,937,874,556,13,774,888,179],function(){return e(e.s=4168)}),_N_E=e.O()}]);