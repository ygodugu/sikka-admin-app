"use strict";(self.webpackChunksikka_admin_app=self.webpackChunksikka_admin_app||[]).push([[461],{2806:function(e,a,t){t.d(a,{b:function(){return n}});var n=t(1243).Z.create({baseURL:"https://app.cikka.com.au/api"});n.interceptors.request.use((function(e){var a=localStorage.getItem("token");return a&&(e.headers.Authorization="Bearer "+a),e}),(function(e){return Promise.reject(e)})),n.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}))},7883:function(e,a,t){t.d(a,{$:function(){return i}});var n=t(3637),s=t(184),i=function(e){var a=e.page,t=e.pageSize,i=e.data,r=e.setPage;return(0,s.jsxs)("div",{className:"row pagin-sec",children:[(0,s.jsx)("div",{className:"col-sm-12 col-md-5",children:(0,s.jsx)("div",{className:"dataTables_info",role:"status","aria-live":"polite",children:"Showing ".concat(a*t+1," to  ").concat(a*t+i.data.length," of ").concat(i.count," entries")})}),(0,s.jsx)("div",{className:"col-sm-12 col-md-7",style:{display:"flex",justifyContent:"flex-end"},children:(0,s.jsx)(n.Z,{itemClass:"page-item",prevPageText:"Previous",nextPageText:"Next",linkClass:"page-link",activePage:a+1,itemsCountPerPage:t,totalItemsCount:i.count,pageRangeDisplayed:5,hideFirstLastPages:!0,onChange:function(e){return r(e-1)}})})]})}},1629:function(e,a,t){t.d(a,{o:function(){return s}});var n=t(184),s=function(e){var a=e.dateTime;return(0,n.jsx)("span",{children:new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:"UTC"}).format(new Date(a))})}},9324:function(e,a,t){t.d(a,{q:function(){return s}});var n=t(184),s=function(e){return null===e.code?(0,n.jsx)("span",{className:"badge badge-pill badge-warning",children:"Null"}):0===e.code?(0,n.jsx)("span",{className:"badge badge-pill badge-danger",children:"Deleted"}):1===e.code?(0,n.jsx)("span",{className:"badge badge-pill badge-success",children:"Active"}):2===e.code?(0,n.jsx)("span",{className:"badge badge-pill badge-warning",children:"Hold"}):void 0}},2461:function(e,a,t){t.r(a),t.d(a,{Purchases:function(){return m}});var n=t(9439),s=t(2791),i=t(6403),r=t(2917),c=t(4849),l=t(2806),d=t(7883),o=t(1629),u=t(9324),h=t(184),m=function(){(0,i.NL)();var e,a=(0,s.useState)(0),t=(0,n.Z)(a,2),m=t[0],x=t[1],j=(0,s.useState)(""),g=(0,n.Z)(j,2),v=g[0],p=g[1],f=(0,s.useState)(""),b=(0,n.Z)(f,2),N=b[0],S=b[1],y=(0,s.useState)(""),C=(0,n.Z)(y,2),k=C[0],P=C[1],D=(0,s.useState)(""),w=(0,n.Z)(D,2),A=w[0],I=w[1],T=(0,s.useState)(!1),E=(0,n.Z)(T,2),Z=(E[0],E[1],(0,r.a)({queryKey:["Purchases",m,A,v,N,k],queryFn:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,t=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,s=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0;return l.b.get("/cikka-purchases?pageIndex=".concat(e,"&pageSize=").concat(a,"&purchaseStatus=").concat(t,"&sortBy=").concat(n,"&sortOrder=").concat(s,"&status=").concat(i)).then((function(e){return e.data}))}(m,20,A,v,N,k)},keepPreviousData:!0})),U=Z.data,L=Z.refetch,B=Z.isLoading,q=(0,s.useState)([]),_=(0,n.Z)(q,2),z=_[0],F=_[1];return(0,s.useEffect)((function(){l.b.get("/users").then((function(e){return e.data})).then((function(e){F(e),console.log(e)})).catch((function(e){console.error("Error fetching categories:",e)}))}),[]),(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("div",{className:"row justify-content-center",children:(0,h.jsxs)("div",{className:"col-12",children:[(0,h.jsx)("div",{className:"row heading-add",children:(0,h.jsx)("aside",{className:"ml-2 mr-2",children:(0,h.jsx)("h2",{className:"mb-0 page-title",children:"Cikka Purchases"})})}),(0,h.jsxs)("div",{className:"d-flex flex-wrap",children:[(0,h.jsx)("aside",{className:"col-md-4 mt-2 mt-md-0 mb-2 mb-md-0",children:(0,h.jsxs)("select",{className:"form-control",onChange:function(e){var a=e.target.value;I(a),console.log(a),L()},style:{background:"white"},"aria-label":"select",children:[(0,h.jsx)("option",{value:"",children:"PurchaseStatus"}),(0,h.jsx)("option",{value:"CANCELLED",children:"CANCELLED"}),(0,h.jsx)("option",{value:"INITIATED",children:"INITIATED"}),(0,h.jsx)("option",{value:"PURCHASED",children:"PURCHASED"})]})}),(0,h.jsx)("aside",{className:"col-md-4 mt-2 mt-md-0 mb-2 mb-md-0",children:(0,h.jsxs)("select",{className:"form-control",onChange:function(e){var a=e.target.value;p(a),console.log(a),L()},style:{background:"white"},"aria-label":"select",children:[(0,h.jsx)("option",{value:"",children:"sortBy"}),(0,h.jsx)("option",{value:"id",children:"ID"}),(0,h.jsx)("option",{value:"purchaseValue",children:"PurchaseValue"})]})}),(0,h.jsx)("aside",{className:"col-md-2 mt-2 mt-md-0 mb-2 mb-md-0",children:(0,h.jsxs)("select",{className:"form-control",onChange:function(e){var a=e.target.value;S(a),console.log(a),L()},style:{background:"white"},"aria-label":"select",children:[(0,h.jsx)("option",{value:"",children:"sortOrder"}),(0,h.jsx)("option",{value:"ASC",children:"ASC"}),(0,h.jsx)("option",{value:"DESC",children:"DESC"})]})}),(0,h.jsx)("aside",{className:"col-md-2 mt-2 mt-md-0 mb-2 mb-md-0",children:(0,h.jsxs)("select",{className:"form-control",onChange:function(e){var a=e.target.value;P(a),console.log(a),L()},style:{background:"white"},"aria-label":"select",children:[(0,h.jsx)("option",{value:"",children:"STATUS"}),(0,h.jsx)("option",{value:"1",children:"Active"}),(0,h.jsx)("option",{value:"2",children:"Hold"}),(0,h.jsx)("option",{value:"0",children:"Deleted"})]})})]}),(0,h.jsx)("div",{className:"row my-2",children:(0,h.jsx)("div",{className:"col-md-12",children:(0,h.jsx)("div",{className:"card shadow",children:(0,h.jsxs)("div",{className:"card-body",children:[(0,h.jsx)("div",{className:"resp-table purchases-tb",children:(0,h.jsxs)("table",{className:"table",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"ID"}),(0,h.jsx)("th",{children:"UserID"}),(0,h.jsx)("th",{children:"PurchaseStatus"}),(0,h.jsx)("th",{children:"PurchaseValue"}),(0,h.jsx)("th",{children:"PaymentDetails"}),(0,h.jsx)("th",{children:"CreatedBy"}),(0,h.jsx)("th",{children:"UpdatedBy"}),(0,h.jsx)("th",{children:"CreatedAt"}),(0,h.jsx)("th",{children:"UpdatedAt"}),(0,h.jsx)("th",{children:"Status"})]})}),(0,h.jsx)("tbody",{children:B?(0,h.jsx)("tr",{children:(0,h.jsx)("td",{rowSpan:"10",colSpan:"15",children:(0,h.jsx)("div",{className:"text-center py-5",children:(0,h.jsx)(c.Z,{animation:"border"})})})}):null===U||void 0===U||null===(e=U.data)||void 0===e?void 0:e.map((function(e){var a,t,n,s;return(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:e.id}),(0,h.jsx)("td",{children:e.userId}),(0,h.jsx)("td",{children:e.purchaseStatus}),(0,h.jsx)("td",{children:e.purchaseValue}),(0,h.jsx)("td",{children:e.paymentDetails}),(0,h.jsx)("td",{children:(null===z||void 0===z||null===(a=z.data)||void 0===a||null===(t=a.find((function(a){return a.id===e.createdBy})))||void 0===t?void 0:t.firstName)||"N/A"}),(0,h.jsx)("td",{children:(null===z||void 0===z||null===(n=z.data)||void 0===n||null===(s=n.find((function(a){return a.id===e.updatedBy})))||void 0===s?void 0:s.firstName)||"N/A"}),(0,h.jsx)("td",{children:(0,h.jsx)(o.o,{dateTime:e.createdAt})}),(0,h.jsx)("td",{children:(0,h.jsx)(o.o,{dateTime:e.updatedAt})}),(0,h.jsx)("td",{children:(0,h.jsx)(u.q,{code:e.status})})]},e.id)}))})]})}),B?null:(0,h.jsx)(d.$,{page:m,pageSize:20,data:U,setPage:x})]})})})})]})})})}}}]);
//# sourceMappingURL=461.31cb8ebe.chunk.js.map