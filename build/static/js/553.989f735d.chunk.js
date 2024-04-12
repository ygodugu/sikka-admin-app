"use strict";(self.webpackChunksikka_admin_app=self.webpackChunksikka_admin_app||[]).push([[553],{2806:function(e,t,n){n.d(t,{b:function(){return a}});var a=n(1243).Z.create({baseURL:"https://app.cikka.com.au/api"});a.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers.Authorization="Bearer "+t),e}),(function(e){return Promise.reject(e)})),a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}))},7883:function(e,t,n){n.d(t,{$:function(){return c}});var a=n(3637),r=n(184),c=function(e){var t=e.page,n=e.pageSize,c=e.data,s=e.setPage;return(0,r.jsxs)("div",{className:"row pagin-sec",children:[(0,r.jsx)("div",{className:"col-sm-12 col-md-5",children:(0,r.jsx)("div",{className:"dataTables_info",role:"status","aria-live":"polite",children:"Showing ".concat(t*n+1," to  ").concat(t*n+c.data.length," of ").concat(c.count," entries")})}),(0,r.jsx)("div",{className:"col-sm-12 col-md-7",style:{display:"flex",justifyContent:"flex-end"},children:(0,r.jsx)(a.Z,{itemClass:"page-item",prevPageText:"Previous",nextPageText:"Next",linkClass:"page-link",activePage:t+1,itemsCountPerPage:n,totalItemsCount:c.count,pageRangeDisplayed:5,hideFirstLastPages:!0,onChange:function(e){return s(e-1)}})})]})}},1629:function(e,t,n){n.d(t,{o:function(){return r}});var a=n(184),r=function(e){var t=e.dateTime,n=new Date(t).toLocaleString("en-GB",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0});return(0,a.jsx)("span",{children:n})}},9324:function(e,t,n){n.d(t,{q:function(){return r}});var a=n(184),r=function(e){return null===e.code?(0,a.jsx)("span",{className:"badge badge-pill badge-warning",children:"Null"}):0===e.code?(0,a.jsx)("span",{className:"badge badge-pill badge-danger",children:"Deleted"}):1===e.code?(0,a.jsx)("span",{className:"badge badge-pill badge-success",children:"Active"}):2===e.code?(0,a.jsx)("span",{className:"badge badge-pill badge-warning",children:"Hold"}):void 0}},1665:function(e,t,n){n.d(t,{O:function(){return c}});n(2791);var a=n.p+"static/media/eye-icon.108e244b6ee8bc0d32b857cb71cc537c.svg",r=n(184),c=function(e){var t=e.onClick;return(0,r.jsx)("img",{style:{cursor:"pointer"},src:a,onClick:t})}},6553:function(e,t,n){n.r(t),n.d(t,{Transactions:function(){return j}});var a=n(9439),r=n(2791),c=n(6403),s=n(2917),i=n(1665),d=n(4849),l=n(2806),o=n(7883),u=n(1629),h=n(9324),m=(n(8862),n(1087)),x=n(184),j=function(){(0,c.NL)();var e,t,n=(0,r.useState)(0),j=(0,a.Z)(n,2),g=j[0],v=j[1],f=(0,r.useState)(""),p=(0,a.Z)(f,2),b=p[0],N=p[1],y=(0,r.useState)(""),S=(0,a.Z)(y,2),C=S[0],k=S[1],w=(0,r.useState)(""),A=(0,a.Z)(w,2),T=A[0],P=A[1],I=(0,r.useState)(""),B=(0,a.Z)(I,2),Z=B[0],D=B[1],V=(0,r.useState)([]),E=(0,a.Z)(V,2),L=E[0],q=E[1],z=(0,r.useState)(""),O=(0,a.Z)(z,2),_=O[0],U=O[1],F=(0,s.a)({queryKey:["transactions",g,b,C,T,Z,_],queryFn:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,n=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0,c=arguments.length>5?arguments[5]:void 0,s=arguments.length>6?arguments[6]:void 0;return l.b.get("/cikka-transactions?pageIndex=".concat(e,"&pageSize=").concat(t,"&search=").concat(n,"&sortBy=").concat(a,"&sortOrder=").concat(r,"&status=").concat(c,"&receivedId=").concat(s)).then((function(e){return e.data}))}(g,20,b,C,T,Z,_)},keepPreviousData:!0}),M=F.data,R=F.refetch,H=F.isLoading;(0,r.useEffect)((function(){l.b.get("/cikka-transactions").then((function(e){return e.data})).then((function(e){q(e)})).catch((function(e){console.error("Error fetching categories:",e)}))}),[]);var $=(0,r.useState)([]),G=(0,a.Z)($,2),K=G[0],J=G[1];return(0,r.useEffect)((function(){l.b.get("/users?pageIndex=0&pageSize=1400").then((function(e){return e.data})).then((function(e){J(e),console.log(e)})).catch((function(e){console.error("Error fetching categories:",e)}))}),[]),(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:"row justify-content-center",children:(0,x.jsxs)("div",{className:"col-12",children:[(0,x.jsxs)("div",{className:"row heading-add",children:[(0,x.jsx)("aside",{className:"ml-2 mr-2",children:(0,x.jsx)("h2",{className:"mb-0 page-title",style:{display:"inline"},children:"Transaction"})}),(0,x.jsx)("form",{className:"form-inline searchform",children:(0,x.jsx)("input",{className:"form-control mr-sm-4 border-0",onChange:function(e){var t=e.target.value;N(t),R()},type:"text",style:{background:"white"},placeholder:"Search","aria-label":"Search"})})]}),(0,x.jsxs)("div",{className:"d-flex flex-wrap",children:[(0,x.jsx)("aside",{className:"col-md-4 mt-2 mt-md-0 mb-2 mb-md-0",children:(0,x.jsxs)("select",{id:"receivedId",className:"form-control",value:_,onChange:function(e){var t=e.target.value;U(t),R()},children:[(0,x.jsx)("option",{value:"",children:"Choose a receiver"}),null===L||void 0===L||null===(e=L.data)||void 0===e?void 0:e.map((function(e){return(0,x.jsx)("option",{value:e.receiverId,children:e.receiver.email},e.receiverId)}))]})}),(0,x.jsx)("aside",{className:"col-md-4 mt-2 mt-md-0 mb-2 mb-md-0",children:(0,x.jsxs)("select",{className:"form-control",onChange:function(e){var t=e.target.value;k(t),console.log(t),R()},style:{background:"white"},"aria-label":"select",children:[(0,x.jsx)("option",{value:"",children:"sortBy"}),(0,x.jsx)("option",{value:"id",children:"ID"}),(0,x.jsx)("option",{value:"createdAt",children:"TIME"})]})}),(0,x.jsx)("aside",{className:"col-md-2 mt-2 mt-md-0 mb-2 mb-md-0",children:(0,x.jsxs)("select",{className:"form-control",onChange:function(e){var t=e.target.value;P(t),console.log(t),R()},style:{background:"white"},"aria-label":"select",children:[(0,x.jsx)("option",{value:"",children:"sortOrder"}),(0,x.jsx)("option",{value:"ASC",children:"ASC"}),(0,x.jsx)("option",{value:"DESC",children:"DESC"})]})}),(0,x.jsx)("aside",{className:"col-md-2 mt-2 mt-md-0 mb-2 mb-md-0",children:(0,x.jsxs)("select",{className:"form-control",onChange:function(e){var t=e.target.value;D(t),console.log(t),R()},style:{background:"white"},"aria-label":"select",children:[(0,x.jsx)("option",{value:"",children:"STATUS"}),(0,x.jsx)("option",{value:"1",children:"Active"}),(0,x.jsx)("option",{value:"2",children:"Hold"}),(0,x.jsx)("option",{value:"0",children:"Deleted"})]})})]}),(0,x.jsx)("div",{className:"row my-2",children:(0,x.jsx)("div",{className:"col-md-12",children:(0,x.jsx)("div",{className:"card shadow",children:(0,x.jsxs)("div",{className:"card-body",children:[(0,x.jsx)("div",{className:"resp-table transaction-tb",children:(0,x.jsxs)("table",{className:"table",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"Actions"}),(0,x.jsx)("th",{children:"Status"}),(0,x.jsx)("th",{children:"ID"}),(0,x.jsx)("th",{children:"ReceiverId"}),(0,x.jsx)("th",{children:"TransactionValue"}),(0,x.jsx)("th",{children:"MemberCutValue"}),(0,x.jsx)("th",{children:"MerchantCutValue"}),(0,x.jsx)("th",{children:"SuperAgentCutValue"}),(0,x.jsx)("th",{children:"TransactionPercentage"}),(0,x.jsx)("th",{children:"TransactionType"}),(0,x.jsx)("th",{children:"TransactionStatus"}),(0,x.jsx)("th",{children:"CreatedBy"}),(0,x.jsx)("th",{children:"UpdatedBy"}),(0,x.jsx)("th",{children:"CreatedAt"}),(0,x.jsx)("th",{children:"UpdatedAt"})]})}),(0,x.jsx)("tbody",{children:H?(0,x.jsx)("tr",{children:(0,x.jsx)("td",{rowSpan:"10",colSpan:"15",children:(0,x.jsx)("div",{className:"text-center py-5",children:(0,x.jsx)(d.Z,{animation:"border"})})})}):null===M||void 0===M||null===(t=M.data)||void 0===t?void 0:t.map((function(e){return(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{className:"actions",children:(0,x.jsx)(m.OL,{to:"/view-transaction/".concat(e.id),children:(0,x.jsx)(i.O,{})})}),(0,x.jsx)("td",{children:(0,x.jsx)(h.q,{code:e.status})}),(0,x.jsx)("td",{children:e.id}),(0,x.jsx)("td",{children:e.receiverId}),(0,x.jsx)("td",{children:e.transactionValue}),(0,x.jsx)("td",{children:e.memberCutValue}),(0,x.jsx)("td",{children:e.merchantCutValue}),(0,x.jsx)("td",{children:e.superAgentCutValue}),(0,x.jsx)("td",{children:e.transactionPercentage}),(0,x.jsx)("td",{children:e.transactionType}),(0,x.jsx)("td",{children:e.transactionStatus}),(0,x.jsx)("td",{children:K&&K.data&&K.data.find((function(t){return t.id===e.createdBy}))?function(){var t=K.data.find((function(t){return t.id===e.createdBy}));return"".concat(t.firstName||"N/A"," ").concat(t.lastName||"N/A")}():e.createdBy}),(0,x.jsx)("td",{children:K&&K.data&&K.data.find((function(t){return t.id===e.updatedBy}))?function(){var t=K.data.find((function(t){return t.id===e.updatedBy}));return"".concat(t.firstName||"N/A"," ").concat(t.lastName||"N/A")}():e.updatedBy}),(0,x.jsx)("td",{children:(0,x.jsx)(u.o,{dateTime:e.createdAt})}),(0,x.jsx)("td",{children:(0,x.jsx)(u.o,{dateTime:e.updatedAt})})]},e.id)}))})]})}),H?null:(0,x.jsx)(o.$,{page:g,pageSize:20,data:M,setPage:v})]})})})})]})})})}}}]);
//# sourceMappingURL=553.989f735d.chunk.js.map