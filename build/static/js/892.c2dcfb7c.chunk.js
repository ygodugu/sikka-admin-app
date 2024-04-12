"use strict";(self.webpackChunksikka_admin_app=self.webpackChunksikka_admin_app||[]).push([[892],{2806:function(e,t,n){n.d(t,{b:function(){return a}});var a=n(1243).Z.create({baseURL:"https://app.cikka.com.au/api"});a.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers.Authorization="Bearer "+t),e}),(function(e){return Promise.reject(e)})),a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}))},1629:function(e,t,n){n.d(t,{o:function(){return r}});var a=n(184),r=function(e){var t=e.dateTime,n=new Date(t).toLocaleString("en-GB",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0});return(0,a.jsx)("span",{children:n})}},9324:function(e,t,n){n.d(t,{q:function(){return r}});var a=n(184),r=function(e){return null===e.code?(0,a.jsx)("span",{className:"badge badge-pill badge-warning",children:"Null"}):0===e.code?(0,a.jsx)("span",{className:"badge badge-pill badge-danger",children:"Deleted"}):1===e.code?(0,a.jsx)("span",{className:"badge badge-pill badge-success",children:"Active"}):2===e.code?(0,a.jsx)("span",{className:"badge badge-pill badge-warning",children:"Hold"}):void 0}},892:function(e,t,n){n.r(t),n.d(t,{MerchantServiceAppointment:function(){return x}});var a=n(9439),r=n(2791),s=(n(9781),n(6403)),i=n(2917),c=n(7689),d=n(4849),l=n(2806),o=n(1087),u=n(1629),h=n(9324),m=n(184),x=function(){var e,t=(0,c.UO)().id;console.log(t);(0,s.NL)();var n=(0,r.useState)(0),x=(0,a.Z)(n,2),j=(x[0],x[1],(0,r.useState)(!1)),f=(0,a.Z)(j,2),p=(f[0],f[1]),v=(0,r.useState)(!1),N=(0,a.Z)(v,2),g=(N[0],N[1],(0,r.useState)()),b=(0,a.Z)(g,2),S=(b[0],b[1],(0,r.useState)("")),y=(0,a.Z)(S,2),Z=(y[0],y[1]),k=(0,r.useState)(""),A=(0,a.Z)(k,2),w=(A[0],A[1],(0,r.useState)("")),B=(0,a.Z)(w,2),q=(B[0],B[1],(0,r.useState)("")),T=(0,a.Z)(q,2),C=(T[0],T[1],(0,r.useState)(!1)),I=(0,a.Z)(C,2),z=(I[0],I[1],(0,i.a)({queryKey:["merchantServicesAppointment",t],queryFn:function(){return function(e){return l.b.get("/appointments?pageIndex=0&pageSize=20&&sortBy=id&sortOrder=DESC&serviceId=".concat(e)).then((function(e){return e.data}))}(t)},keepPreviousData:!0})),E=z.data,L=z.refetch,P=z.isLoading,D=(0,r.useState)([]),R=(0,a.Z)(D,2),U=R[0],_=R[1];return(0,r.useEffect)((function(){l.b.get("/users?pageIndex=0&pageSize=1400").then((function(e){return e.data})).then((function(e){_(e),console.log(e)})).catch((function(e){console.error("Error fetching categories:",e)}))}),[]),(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:"row justify-content-center",children:[(0,m.jsx)("aside",{className:"col-md-12 mt-3 mb-3",children:(0,m.jsx)(o.OL,{to:"/Merchants",children:(0,m.jsx)("i",{className:"fe fe-arrow-left-circle fe-24"})})}),(0,m.jsxs)("div",{className:"col-12",children:[(0,m.jsxs)("div",{className:"row heading-add",children:[(0,m.jsx)("aside",{className:"ml-2 mr-2",children:(0,m.jsx)("h2",{className:"mb-0 page-title",children:"Merchant Services Appointment"})}),(0,m.jsx)("form",{className:"form-inline mr-auto searchform",children:(0,m.jsx)("input",{className:"form-control mr-sm-2 border-0",onChange:function(e){var t=e.target.value;Z(t),L()},type:"text",style:{background:"white"},placeholder:"Search","aria-label":"Search"})}),(0,m.jsx)("aside",{className:"col-sm-2 add-sec",children:(0,m.jsx)("button",{className:"bttn",onClick:function(){return p(!0)},children:"Add"})})]}),(0,m.jsx)("div",{className:"row my-2",children:(0,m.jsx)("div",{className:"col-md-12",children:(0,m.jsx)("div",{className:"card shadow",children:(0,m.jsx)("div",{className:"card-body",children:(0,m.jsx)("div",{className:"resp-table services-tb",children:(0,m.jsxs)("table",{className:"table",children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{children:"Status"}),(0,m.jsx)("th",{children:"serviceId"}),(0,m.jsx)("th",{children:"service Name"}),(0,m.jsx)("th",{children:"User Name"}),(0,m.jsx)("th",{children:"Contact"}),(0,m.jsx)("th",{children:"SpecialRequest"}),(0,m.jsx)("th",{children:"StartTime"}),(0,m.jsx)("th",{children:"EndTime"}),(0,m.jsx)("th",{children:'"createdBy'}),(0,m.jsx)("th",{children:"updatedBy"}),(0,m.jsx)("th",{children:"createdAt"}),(0,m.jsx)("th",{children:"UpdatedAt"})]})}),(0,m.jsx)("tbody",{children:P?(0,m.jsx)("tr",{children:(0,m.jsx)("td",{rowSpan:"10",colSpan:"15",children:(0,m.jsx)("div",{className:"text-center py-5",children:(0,m.jsx)(d.Z,{animation:"border"})})})}):null===E||void 0===E||null===(e=E.data)||void 0===e?void 0:e.map((function(e){return(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{children:(0,m.jsx)(h.q,{code:e.status})}),(0,m.jsx)("td",{children:e.serviceId}),(0,m.jsx)("td",{children:e.name}),(0,m.jsx)("td",{children:e.user.firstName}),(0,m.jsx)("td",{children:e.user.mobileNumber}),(0,m.jsx)("td",{children:e.specialRequest}),(0,m.jsx)("td",{children:e.startTime}),(0,m.jsx)("td",{children:e.endTime}),(0,m.jsx)("td",{children:U&&U.data&&U.data.find((function(t){return t.id===e.createdBy}))?function(){var t=U.data.find((function(t){return t.id===e.createdBy}));return"".concat(t.firstName||"N/A"," ").concat(t.lastName||"N/A")}():e.createdBy}),(0,m.jsx)("td",{children:U&&U.data&&U.data.find((function(t){return t.id===e.updatedBy}))?function(){var t=U.data.find((function(t){return t.id===e.updatedBy}));return"".concat(t.firstName||"N/A"," ").concat(t.lastName||"N/A")}():e.updatedBy}),(0,m.jsx)("td",{children:(0,m.jsx)(u.o,{dateTime:e.createdAt})}),(0,m.jsx)("td",{children:(0,m.jsx)(u.o,{dateTime:e.updatedAt})})]},e.id)}))})]})})})})})})]})]})})}},4849:function(e,t,n){var a=n(1413),r=n(5987),s=n(1694),i=n.n(s),c=n(2791),d=n(162),l=n(184),o=["bsPrefix","variant","animation","size","as","className"],u=c.forwardRef((function(e,t){var n=e.bsPrefix,s=e.variant,c=e.animation,u=void 0===c?"border":c,h=e.size,m=e.as,x=void 0===m?"div":m,j=e.className,f=(0,r.Z)(e,o);n=(0,d.vE)(n,"spinner");var p="".concat(n,"-").concat(u);return(0,l.jsx)(x,(0,a.Z)((0,a.Z)({ref:t},f),{},{className:i()(j,p,h&&"".concat(p,"-").concat(h),s&&"text-".concat(s))}))}));u.displayName="Spinner",t.Z=u}}]);
//# sourceMappingURL=892.c2dcfb7c.chunk.js.map