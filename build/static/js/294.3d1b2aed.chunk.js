"use strict";(self.webpackChunksikka_admin_app=self.webpackChunksikka_admin_app||[]).push([[294],{2806:function(e,a,s){s.d(a,{b:function(){return n}});var n=s(1243).Z.create({baseURL:"https://app.cikka.com.au/api"});n.interceptors.request.use((function(e){var a=localStorage.getItem("token");return a&&(e.headers.Authorization="Bearer "+a),e}),(function(e){return Promise.reject(e)})),n.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}))},1629:function(e,a,s){s.d(a,{o:function(){return c}});var n=s(184),c=function(e){var a=e.dateTime;return(0,n.jsx)("span",{children:new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:"UTC"}).format(new Date(a))})}},9324:function(e,a,s){s.d(a,{q:function(){return c}});var n=s(184),c=function(e){return null===e.code?(0,n.jsx)("span",{className:"badge badge-pill badge-warning",children:"Null"}):0===e.code?(0,n.jsx)("span",{className:"badge badge-pill badge-danger",children:"Deleted"}):1===e.code?(0,n.jsx)("span",{className:"badge badge-pill badge-success",children:"Active"}):2===e.code?(0,n.jsx)("span",{className:"badge badge-pill badge-warning",children:"Hold"}):void 0}},4294:function(e,a,s){s.r(a),s.d(a,{ViewMerchants:function(){return j}});var n=s(1413),c=s(9439),t=s(2791),r=s(2917),i=s(7689),d=s(2806),l=s(9324),h=(s(1629),s(1087)),o=s(4849),x=s(184),j=function(){var e=(0,i.UO)().userId;console.log(e);var a=(0,t.useState)("cikkaPurchase"),s=(0,c.Z)(a,2),j=s[0],m=s[1],u=function(e){m(e)},p=(0,t.useState)(function(){var e=new Date,a=e.getFullYear(),s=e.getMonth()+1,n=e.getDate();s<10&&(s="0"+s);n<10&&(n="0"+n);return"".concat(a,"-").concat(s,"-").concat(n)}()),v=(0,c.Z)(p,2),N=v[0],k=v[1];(0,t.useEffect)((function(){}),[N]);var b=(0,r.a)({queryKey:["transaction-details",e],queryFn:function(){return function(e){return d.b.get("/cikka-transactions/purchase?userId=".concat(e)).then((function(e){return e.data}))}(e)}}),f=b.data,g=b.isLoading,y=(b.error,(0,r.a)({queryKey:["appointments-details",e,N],queryFn:function(){return function(e,a){return d.b.get("/appointments?pageIndex=0&pageSize=20&sortBy=startTime&sortOrder=ASC&status=1&merchantUserId=".concat(e,"&startTime=").concat(a)).then((function(e){return e.data}))}(e,N)}})),w=y.data,C=y.isLoading,S=(y.error,function(e){var a={};return e.forEach((function(e){var s="".concat(e.service.name,"_").concat(e.user.firstName,"_").concat(e.user.lastName,"_").concat(e.user.mobileNumber,"_").concat(e.startTime,"_").concat(e.endTime);a[s]?a[s].peopleCount++:a[s]=(0,n.Z)((0,n.Z)({},e),{},{serviceName:e.service.name,userName:"".concat(e.user.firstName," ").concat(e.user.lastName),contact:"string"===typeof e.user.mobileNumber?"--":e.user.mobileNumber,peopleCount:1})})),Object.values(a)});return(0,x.jsx)(x.Fragment,{children:f&&w&&(console.log(f),(0,x.jsx)("div",{className:"row justify-content-center",children:(0,x.jsxs)("div",{className:"col-12",children:[(0,x.jsxs)("div",{className:"row heading-add",children:[(0,x.jsx)("aside",{className:"col-sm-10 mt-3 mb-3",children:(0,x.jsx)(h.OL,{to:"/Merchants",children:(0,x.jsx)("i",{className:"fe fe-arrow-left-circle fe-24"})})}),(0,x.jsx)("aside",{className:"col-sm-10",children:(0,x.jsx)("h2",{className:"mb-0 page-title",children:"Cikka Profile Details"})})]}),(0,x.jsx)("div",{className:"row my-2",children:(0,x.jsxs)("div",{className:"col-md-6",children:[(0,x.jsx)("div",{className:"card shadow",children:(0,x.jsxs)("div",{className:"card-body",children:[(0,x.jsx)("h5",{className:"card-title",children:"Cikka Balance Details"}),(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-md-5 mt-1",children:(0,x.jsx)("label",{children:"Purchase Value"})}),(0,x.jsx)("div",{className:"col-md-7 mt-1",children:(0,x.jsx)("label",{children:f.purchaseValue})}),(0,x.jsx)("div",{className:"col-md-5 mt-1",children:(0,x.jsx)("label",{children:"cikka Sender Transaction"})}),(0,x.jsx)("div",{className:"col-md-7 mt-1",children:(0,x.jsx)("label",{children:f.cikkaSenderTransaction})}),(0,x.jsx)("div",{className:"col-md-5 mt-1",children:(0,x.jsx)("label",{children:"Cikka Receiver Transaction"})}),(0,x.jsx)("div",{className:"col-md-7 mt-1",children:(0,x.jsx)("label",{children:f.cikkaReceiverTransaction})}),(0,x.jsx)("div",{className:"col-md-5 mt-1",children:(0,x.jsx)("label",{children:"Cikka Balance"})}),(0,x.jsx)("div",{className:"col-md-7 mt-1",children:(0,x.jsx)("label",{children:f.cikkaBalance})})]})]})}),(0,x.jsx)("div",{className:"col-md-6"})]})}),(0,x.jsx)("div",{className:"row my-2 mt-5",children:(0,x.jsx)("div",{className:"col-md-12",children:(0,x.jsx)("div",{className:"card shadow",children:(0,x.jsxs)("div",{className:"card-body",children:[(0,x.jsxs)("ul",{className:"nav nav-tabs mb-3",children:[(0,x.jsx)("li",{className:"nav-item",children:(0,x.jsx)("button",{className:"nav-link ".concat("cikkaPurchase"===j?"active":""),onClick:function(){return u("cikkaPurchase")},children:"Cikka Purchase"})}),(0,x.jsx)("li",{className:"nav-item",children:(0,x.jsx)("button",{className:"nav-link ".concat("cikkaTransaction"===j?"active":""),onClick:function(){return u("cikkaTransaction")},children:"Cikka Transaction"})}),(0,x.jsx)("li",{className:"nav-item",children:(0,x.jsx)("button",{className:"nav-link ".concat("appointments"===j?"active":""),onClick:function(){return u("appointments")},children:"Appointments"})})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{className:"row my-2 mt-3",children:(0,x.jsxs)("div",{className:"col-md-12",children:["cikkaPurchase"===j&&(0,x.jsxs)("div",{className:"resp-table cikka-purchase-tb",children:[(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("aside",{className:"col-sm-10",children:(0,x.jsx)("h5",{className:"card-title",children:"Cikka Purchase"})})}),(0,x.jsx)("div",{children:(0,x.jsxs)("table",{className:"table mt-2",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"id"}),(0,x.jsx)("th",{children:"userId"}),(0,x.jsx)("th",{children:"purchaseStatus"}),(0,x.jsx)("th",{children:"purchaseValue"}),(0,x.jsx)("th",{children:"paymentDetails"}),(0,x.jsx)("th",{children:"createdBy"}),(0,x.jsx)("th",{children:"updatedBy"}),(0,x.jsx)("th",{children:"createdAt"}),(0,x.jsx)("th",{children:"updatedAt"}),(0,x.jsx)("th",{children:"status"})]})}),(0,x.jsx)("tbody",{children:g?(0,x.jsx)("tr",{children:(0,x.jsx)("td",{rowSpan:"10",colSpan:"13",children:(0,x.jsx)("div",{className:"text-center py-5",children:(0,x.jsx)(o.Z,{animation:"border"})})})}):f.cikkaPurchase&&f.cikkaPurchase.length>0?(0,x.jsx)(x.Fragment,{children:f.cikkaPurchase.map((function(e){return(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:e.id}),(0,x.jsx)("td",{children:e.userId}),(0,x.jsx)("td",{children:e.purchaseStatus}),(0,x.jsx)("td",{children:e.purchaseValue}),(0,x.jsx)("td",{children:e.paymentDetails}),(0,x.jsx)("td",{children:e.createdBy}),(0,x.jsx)("td",{children:e.updatedBy}),(0,x.jsx)("td",{children:e.createdAt}),(0,x.jsx)("td",{children:e.updatedAt}),(0,x.jsx)("td",{children:e.status})]},e.id)}))}):(0,x.jsx)("tr",{children:(0,x.jsx)("td",{rowSpan:"10",colSpan:"13",children:(0,x.jsx)("div",{className:"text-center py-5",children:(0,x.jsx)("strong",{children:"No purchase were done"})})})})})]})})]}),(0,x.jsx)("div",{className:"col-md-6"})]})}),(0,x.jsx)("div",{children:"cikkaTransaction"===j&&(0,x.jsxs)("div",{className:"resp-table cikka-transaction-tb",children:[(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("aside",{className:"col-sm-10",children:(0,x.jsx)("h5",{className:"card-title",children:"Cikka Transaction"})})}),(0,x.jsx)("div",{children:(0,x.jsxs)("table",{className:"table mt-2",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"id"}),(0,x.jsx)("th",{children:"senderId"}),(0,x.jsx)("th",{children:"receiverId"}),(0,x.jsx)("th",{children:"merchantId"}),(0,x.jsx)("th",{children:"merchant"}),(0,x.jsx)("th",{children:"transactionValue"}),(0,x.jsx)("th",{children:"memberCutValue"}),(0,x.jsx)("th",{children:"merchantCutValue"}),(0,x.jsx)("th",{children:"superAgentCutValue"}),(0,x.jsx)("th",{children:"transactionPercentage"}),(0,x.jsx)("th",{children:"transactionType"}),(0,x.jsx)("th",{children:"transactionStatus"}),(0,x.jsx)("th",{children:"createdBy"}),(0,x.jsx)("th",{children:"updatedBy"}),(0,x.jsx)("th",{children:"createdAt"}),(0,x.jsx)("th",{children:"updatedAt"}),(0,x.jsx)("th",{children:"status"})]})}),(0,x.jsx)("tbody",{children:g?(0,x.jsx)("tr",{children:(0,x.jsx)("td",{rowSpan:"10",colSpan:"4",children:(0,x.jsx)("div",{className:"text-center py-5",children:(0,x.jsx)(o.Z,{animation:"border"})})})}):f.cikkaTransaction&&f.cikkaTransaction.length>0?(0,x.jsx)(x.Fragment,{children:f.cikkaTransaction.map((function(e){return(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:e.id}),(0,x.jsx)("td",{children:e.senderId}),(0,x.jsx)("td",{children:e.receiverId}),(0,x.jsx)("td",{children:e.merchantId}),(0,x.jsx)("td",{children:e.merchant}),(0,x.jsx)("td",{children:e.transactionValue}),(0,x.jsx)("td",{children:e.memberCutValue}),(0,x.jsx)("td",{children:e.merchantCutValue}),(0,x.jsx)("td",{children:e.superAgentCutValue}),(0,x.jsx)("td",{children:e.transactionPercentage}),(0,x.jsx)("td",{children:e.transactionType}),(0,x.jsx)("td",{children:e.transactionStatus}),(0,x.jsx)("td",{children:e.createdBy}),(0,x.jsx)("td",{children:e.updatedBy}),(0,x.jsx)("td",{children:e.createdAt}),(0,x.jsx)("td",{children:e.updatedAt}),(0,x.jsx)("td",{children:e.status})]},e.id)}))}):(0,x.jsx)("tr",{children:(0,x.jsx)("td",{rowSpan:"10",colSpan:"13",children:(0,x.jsx)("div",{className:"text-center py-5",children:(0,x.jsx)("strong",{children:"No transaction were done"})})})})})]})})]})}),(0,x.jsx)("div",{children:"appointments"===j&&(0,x.jsxs)("div",{className:"resp-table cikka-transaction-tb",children:[(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("aside",{className:"col-sm-10",children:(0,x.jsx)("h5",{className:"card-title",children:"Appointments"})}),(0,x.jsx)("div",{className:"col-sm-4 mt-2 mr-2",children:(0,x.jsx)("input",{type:"date",name:"date",value:N,onChange:function(e){k(e.target.value)},className:"form-control form-control-lg"})})]}),(0,x.jsx)("div",{children:(0,x.jsxs)("table",{className:"table mt-2",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"Status"}),(0,x.jsx)("th",{children:"service Name"}),(0,x.jsx)("th",{children:"User Name"}),(0,x.jsx)("th",{children:"Contact"}),(0,x.jsx)("th",{children:"SpecialRequest"}),(0,x.jsx)("th",{children:"People"}),(0,x.jsx)("th",{children:"StartTime"}),(0,x.jsx)("th",{children:"EndTime"})]})}),(0,x.jsx)("tbody",{children:function(){if(C)return(0,x.jsx)("tr",{children:(0,x.jsx)("td",{colSpan:"9",children:(0,x.jsx)("div",{className:"text-center py-5",children:(0,x.jsx)(o.Z,{animation:"border"})})})});if(w&&w.data.length>0){var e=S(w.data),a=0,s=e.map((function(e,s){return a+=e.peopleCount,(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:(0,x.jsx)(l.q,{code:e.status})}),(0,x.jsx)("td",{children:e.serviceName}),(0,x.jsx)("td",{children:e.userName}),(0,x.jsx)("td",{children:e.contact}),(0,x.jsx)("td",{children:e.specialRequest}),(0,x.jsx)("td",{children:e.peopleCount}),(0,x.jsx)("td",{children:e.startTime}),(0,x.jsx)("td",{children:e.endTime})]},s)}));return s.push((0,x.jsx)("tr",{children:(0,x.jsxs)("td",{children:[(0,x.jsx)("strong",{children:"Total:"}),"\xa0\xa0",a]})},"total")),s}return(0,x.jsx)("tr",{children:(0,x.jsx)("td",{colSpan:"9",children:(0,x.jsx)("div",{className:"text-center py-5",children:(0,x.jsx)("strong",{children:"No appointments were done"})})})})}()})]})})]})})]})]})})})})]})}))})}},4849:function(e,a,s){var n=s(1413),c=s(5987),t=s(1694),r=s.n(t),i=s(2791),d=s(162),l=s(184),h=["bsPrefix","variant","animation","size","as","className"],o=i.forwardRef((function(e,a){var s=e.bsPrefix,t=e.variant,i=e.animation,o=void 0===i?"border":i,x=e.size,j=e.as,m=void 0===j?"div":j,u=e.className,p=(0,c.Z)(e,h);s=(0,d.vE)(s,"spinner");var v="".concat(s,"-").concat(o);return(0,l.jsx)(m,(0,n.Z)((0,n.Z)({ref:a},p),{},{className:r()(u,v,x&&"".concat(v,"-").concat(x),t&&"text-".concat(t))}))}));o.displayName="Spinner",a.Z=o}}]);
//# sourceMappingURL=294.3d1b2aed.chunk.js.map