(self.webpackChunksikka_admin_app=self.webpackChunksikka_admin_app||[]).push([[192],{2806:function(e,t,n){"use strict";n.d(t,{b:function(){return r}});var r=n(1243).Z.create({baseURL:"https://app.cikka.com.au/api"});r.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers.Authorization="Bearer "+t),e}),(function(e){return Promise.reject(e)})),r.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}))},1629:function(e,t,n){"use strict";n.d(t,{o:function(){return s}});var r=n(184),s=function(e){var t=e.dateTime;return(0,r.jsx)("span",{children:new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:"UTC"}).format(new Date(t))})}},2805:function(e,t,n){"use strict";n.d(t,{d:function(){return i}});n(2791);var r=n.p+"static/media/edit-icon.99f293607452e6df8a5fe12a6b47b2b0.svg",s=n(184),i=function(e){var t=e.onClick;return(0,s.jsx)("img",{style:{cursor:"pointer"},src:r,onClick:t})}},9324:function(e,t,n){"use strict";n.d(t,{q:function(){return s}});var r=n(184),s=function(e){return null===e.code?(0,r.jsx)("span",{className:"badge badge-pill badge-warning",children:"Null"}):0===e.code?(0,r.jsx)("span",{className:"badge badge-pill badge-danger",children:"Deleted"}):1===e.code?(0,r.jsx)("span",{className:"badge badge-pill badge-success",children:"Active"}):2===e.code?(0,r.jsx)("span",{className:"badge badge-pill badge-warning",children:"Hold"}):void 0}},5795:function(e,t,n){"use strict";n.r(t),n.d(t,{MerchantServiceAppointmentBlocking:function(){return O}});var r=n(9439),s=n(2791),i=n(6403),a=n(2917),c=n(7689),o=n(4849),l=n(2806),u=n(1087),d=n(1629),f=n(2805),m=n(9324),h=n(3418),p=n(9930),j=n(5705),v=n(8007),y=(n(8639),n(9513)),x=n.n(y),b=n(184),g=(0,v.Ry)({note:(0,v.Z_)().required("note is required")}),S=function(e){var t=e.initialValues,n=e.handleSubmit,r=(e.isAdd,(0,j.TA)({initialValues:t,onSubmit:n,validationSchema:g}));return(0,b.jsxs)("form",{onSubmit:r.handleSubmit,children:[(0,b.jsxs)("div",{className:"row",children:[(0,b.jsx)("aside",{className:"col-md-6",children:(0,b.jsxs)("div",{className:"form-group",children:[(0,b.jsx)("label",{htmlFor:"note",children:"Note"}),(0,b.jsx)("input",{type:"text",id:"note",value:r.values.note,onChange:r.handleChange,className:"form-control form-control-lg",placeholder:"Enter note"}),(0,b.jsx)("div",{className:"invalid-feedback",children:r.errors.note})]})}),(0,b.jsx)("aside",{className:"col-md-6",children:(0,b.jsxs)("div",{className:"form-group",children:[(0,b.jsx)("label",{for:"status",children:"status"}),(0,b.jsxs)("select",{id:"status",className:"form-control select2",onChange:r.handleChange,value:r.values.status,children:[(0,b.jsx)("option",{value:"1",children:"Active"}),(0,b.jsx)("option",{value:"2",children:"Hold"}),(0,b.jsx)("option",{value:"0",children:"Deleted"})]})]})}),(0,b.jsx)("aside",{className:"col-md-6",children:(0,b.jsxs)("div",{className:"form-group",children:[(0,b.jsx)("label",{for:"startTime",children:"startTime"}),(0,b.jsx)(x(),{selected:r.values.startTime?new Date(r.values.startTime):null,onChange:function(e){r.setFieldValue("startTime",e),r.setFieldTouched("startTime")},className:"form-control",showTimeSelect:!0,timeFormat:"hh:mm aa",dateFormat:"dd/MM/yyyy hh:mm aa"})]})}),(0,b.jsx)("aside",{className:"col-md-6",children:(0,b.jsxs)("div",{className:"form-group",children:[(0,b.jsx)("label",{for:"endTime",children:"endTime"}),(0,b.jsx)(x(),{selected:r.values.endTime?new Date(r.values.endTime):null,onChange:function(e){r.setFieldValue("endTime",e),r.setFieldTouched("endTime")},className:"form-control",showTimeSelect:!0,timeFormat:"hh:mm aa",dateFormat:"dd/MM/yyyy hh:mm aa"})]})})]}),(0,b.jsx)("div",{className:"modal-footer d-flex justify-content-end",children:(0,b.jsx)("button",{type:"submit",className:"btn mb-2 btn-primary",children:"Save"})})]})},N=function(e){return l.b.post("/appointment-blocking",e)},w=function(e){var t=e.handleSuccess,n=e.handleClose,r=e.merchantUserId,s=e.id;console.log(r);var i=(0,h.D)({mutationFn:N}),a={note:"",userId:r,startTime:"",endTime:"",serviceId:s,status:""};return(0,b.jsxs)(p.Z,{show:!0,onHide:n,size:"lg",children:[(0,b.jsxs)(p.Z.Header,{closeButton:!1,children:[(0,b.jsx)(p.Z.Title,{children:"New Service Appointment Blocking"}),(0,b.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:n,children:(0,b.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,b.jsx)(p.Z.Body,{children:(0,b.jsx)(S,{initialValues:a,handleSubmit:function(e){i.mutate(e,{onSuccess:t})}})})]})},k=n(1413),T=function(e){return l.b.put("/appointment-blocking/".concat(e.id),e)},Z=function(e){var t=e.handleSuccess,n=e.handleClose,r=e.id,s=(0,a.a)({queryKey:["MerchantServiceAppointmentBlocking-details",r],queryFn:function(){return function(e){return l.b.get("/appointment-blocking/".concat(e)).then((function(e){return e.data}))}(r)}}),i=s.data,c=(s.error,(0,h.D)({mutationFn:T}));return(0,b.jsx)(b.Fragment,{children:i&&(0,b.jsxs)(p.Z,{show:!0,onHide:n,size:"lg",children:[(0,b.jsxs)(p.Z.Header,{closeButton:!1,children:[(0,b.jsx)(p.Z.Title,{children:"Edit Service"}),(0,b.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:n,children:(0,b.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,b.jsx)(p.Z.Body,{children:(0,b.jsx)(S,{initialValues:i,handleSubmit:function(e){c.mutate((0,k.Z)((0,k.Z)({},e),{},{id:r}),{onSuccess:t})}})})]})})},O=function(){var e,t=(0,c.UO)().userId,n=(0,c.UO)().id;console.log(t);var h=(0,i.NL)(),p=(0,s.useState)(0),j=(0,r.Z)(p,2),v=(j[0],j[1],(0,s.useState)(!1)),y=(0,r.Z)(v,2),x=y[0],g=y[1],S=(0,s.useState)(!1),N=(0,r.Z)(S,2),k=N[0],T=N[1],O=(0,s.useState)(),A=(0,r.Z)(O,2),C=A[0],F=A[1],E=(0,s.useState)(""),I=(0,r.Z)(E,2),_=(I[0],I[1]),B=(0,s.useState)(""),U=(0,r.Z)(B,2),q=(U[0],U[1],(0,s.useState)("")),P=(0,r.Z)(q,2),M=(P[0],P[1],(0,s.useState)("")),D=(0,r.Z)(M,2),R=(D[0],D[1],(0,s.useState)(!1)),L=(0,r.Z)(R,2),z=(L[0],L[1],(0,a.a)({queryKey:["merchantServices",t],queryFn:function(){return function(e){return l.b.get("/appointment-blocking?pageIndex=0&pageSize=20&serviceId=".concat(e)).then((function(e){return e.data}))}(t)},keepPreviousData:!0})),V=z.data,H=z.refetch,$=z.isLoading,K=function(e){return function(){F(e),T(!0)}},W=(0,s.useState)([]),Q=(0,r.Z)(W,2),Y=Q[0],G=Q[1];return(0,s.useEffect)((function(){l.b.get("/users").then((function(e){return e.data})).then((function(e){G(e),console.log(e)})).catch((function(e){console.error("Error fetching categories:",e)}))}),[]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("div",{className:"row justify-content-center",children:[(0,b.jsx)("aside",{className:"col-md-12 mt-3 mb-3",children:(0,b.jsx)(u.OL,{to:"/Merchants",children:(0,b.jsx)("i",{className:"fe fe-arrow-left-circle fe-24"})})}),(0,b.jsxs)("div",{className:"col-12",children:[(0,b.jsxs)("div",{className:"row heading-add",children:[(0,b.jsx)("aside",{className:"ml-2 mr-2",children:(0,b.jsx)("h2",{className:"mb-0 page-title",children:"Merchant Service Appointment Blocking"})}),(0,b.jsx)("form",{className:"form-inline mr-auto searchform",children:(0,b.jsx)("input",{className:"form-control mr-sm-2 border-0",onChange:function(e){var t=e.target.value;_(t),H()},type:"text",style:{background:"white"},placeholder:"Search","aria-label":"Search"})}),(0,b.jsx)("aside",{className:"col-sm-2 add-sec",children:(0,b.jsx)("button",{className:"bttn",onClick:function(){return g(!0)},children:"Add"})})]}),(0,b.jsx)("div",{className:"row my-2",children:(0,b.jsx)("div",{className:"col-md-12",children:(0,b.jsx)("div",{className:"card shadow",children:(0,b.jsx)("div",{className:"card-body",children:(0,b.jsx)("div",{className:"resp-table services-tb",children:(0,b.jsxs)("table",{className:"table",children:[(0,b.jsx)("thead",{children:(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{children:"Actions"}),(0,b.jsx)("th",{children:"Status"}),(0,b.jsx)("th",{children:"userId"}),(0,b.jsx)("th",{children:"serviceId"}),(0,b.jsx)("th",{children:"service"}),(0,b.jsx)("th",{children:"note"}),(0,b.jsx)("th",{children:"startTime"}),(0,b.jsx)("th",{children:"endTime"}),(0,b.jsx)("th",{children:"CreatedBy"}),(0,b.jsx)("th",{children:"UpdatedBy"}),(0,b.jsx)("th",{children:"CreatedAt"}),(0,b.jsx)("th",{children:"UpdatedAt"})]})}),(0,b.jsx)("tbody",{children:$?(0,b.jsx)("tr",{children:(0,b.jsx)("td",{rowSpan:"10",colSpan:"15",children:(0,b.jsx)("div",{className:"text-center py-5",children:(0,b.jsx)(o.Z,{animation:"border"})})})}):null===V||void 0===V||null===(e=V.data)||void 0===e?void 0:e.map((function(e){var t,n,r,s;return(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{className:"actions",children:(0,b.jsx)(f.d,{onClick:K(e.id)})}),(0,b.jsx)("td",{children:(0,b.jsx)(m.q,{code:e.status})}),(0,b.jsx)("td",{children:e.userId}),(0,b.jsx)("td",{children:e.serviceId}),(0,b.jsx)("td",{children:e.service}),(0,b.jsx)("td",{children:e.note}),(0,b.jsx)("td",{children:e.startTime}),(0,b.jsx)("td",{children:e.endTime}),(0,b.jsx)("td",{children:(null===Y||void 0===Y||null===(t=Y.data)||void 0===t||null===(n=t.find((function(t){return t.id===e.createdBy})))||void 0===n?void 0:n.firstName)||"N/A"}),(0,b.jsx)("td",{children:(null===Y||void 0===Y||null===(r=Y.data)||void 0===r||null===(s=r.find((function(t){return t.id===e.updatedBy})))||void 0===s?void 0:s.firstName)||"N/A"}),(0,b.jsx)("td",{children:(0,b.jsx)(d.o,{dateTime:e.createdAt})}),(0,b.jsx)("td",{children:(0,b.jsx)(d.o,{dateTime:e.updatedAt})})]},e.id)}))})]})})})})})})]})]}),x?(0,b.jsx)(w,{handleSuccess:function(){g(!1),H()},handleClose:function(){return g(!1)},merchantUserId:t,id:n}):null,k?(0,b.jsx)(Z,{handleSuccess:function(){h.invalidateQueries({queryKey:["merchantServices-details",C]}),T(!1),H()},id:C,handleClose:function(){return T(!1)}}):null]})}},888:function(e,t,n){"use strict";var r=n(9047);function s(){}function i(){}i.resetWarningCache=s,e.exports=function(){function e(e,t,n,s,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:s};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4849:function(e,t,n){"use strict";var r=n(1413),s=n(5987),i=n(1694),a=n.n(i),c=n(2791),o=n(162),l=n(184),u=["bsPrefix","variant","animation","size","as","className"],d=c.forwardRef((function(e,t){var n=e.bsPrefix,i=e.variant,c=e.animation,d=void 0===c?"border":c,f=e.size,m=e.as,h=void 0===m?"div":m,p=e.className,j=(0,s.Z)(e,u);n=(0,o.vE)(n,"spinner");var v="".concat(n,"-").concat(d);return(0,l.jsx)(h,(0,r.Z)((0,r.Z)({ref:t},j),{},{className:a()(p,v,f&&"".concat(v,"-").concat(f),i&&"text-".concat(i))}))}));d.displayName="Spinner",t.Z=d},77:function(e){var t="undefined"!==typeof Element,n="function"===typeof Map,r="function"===typeof Set,s="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,o,l,u;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(o=c;0!==o--;)if(!i(e[o],a[o]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(o=u.next()).done;)if(!a.has(o.value[0]))return!1;for(u=e.entries();!(o=u.next()).done;)if(!i(o.value[1],a.get(o.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(o=u.next()).done;)if(!a.has(o.value[0]))return!1;return!0}if(s&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(o=c;0!==o--;)if(e[o]!==a[o])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"===typeof e.valueOf&&"function"===typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"===typeof e.toString&&"function"===typeof a.toString)return e.toString()===a.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(o=c;0!==o--;)if(!Object.prototype.hasOwnProperty.call(a,l[o]))return!1;if(t&&e instanceof Element)return!1;for(o=c;0!==o--;)if(("_owner"!==l[o]&&"__v"!==l[o]&&"__o"!==l[o]||!e.$$typeof)&&!i(e[l[o]],a[l[o]]))return!1;return!0}return e!==e&&a!==a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},8041:function(e,t,n){"use strict";n.d(t,{D:function(){return N}});var r=n(2791),s=n(4164),i=n(761),a=n(1217),c=n(545),o=n(9224),l=n(3120),u=n(9265);var d={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},s=t.elements[e];(0,u.Re)(s)&&(0,l.Z)(s)&&(Object.assign(s.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?s.removeAttribute(e):s.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],s=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});(0,u.Re)(r)&&(0,l.Z)(r)&&(Object.assign(r.style,i),Object.keys(s).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},f=n(5934),m=n(5468),h=n(9790),p=n(8702),j=n(1668),v=[a.Z,c.Z,o.Z,d,f.Z,m.Z,h.Z,p.Z,j.Z],y=(0,i.kZ)({defaultModifiers:v}),x=n(77),b=n.n(x),g=n(1162),S=[],N=function(e,t,n){void 0===n&&(n={});var i=r.useRef(null),a={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||S},c=r.useState({styles:{popper:{position:a.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),o=c[0],l=c[1],u=r.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,n=Object.keys(t.elements);s.flushSync((function(){l({styles:(0,g.sq)(n.map((function(e){return[e,t.styles[e]||{}]}))),attributes:(0,g.sq)(n.map((function(e){return[e,t.attributes[e]]})))})}))},requires:["computeStyles"]}}),[]),d=r.useMemo((function(){var e={onFirstUpdate:a.onFirstUpdate,placement:a.placement,strategy:a.strategy,modifiers:[].concat(a.modifiers,[u,{name:"applyStyles",enabled:!1}])};return b()(i.current,e)?i.current||e:(i.current=e,e)}),[a.onFirstUpdate,a.placement,a.strategy,a.modifiers,u]),f=r.useRef();return(0,g.LI)((function(){f.current&&f.current.setOptions(d)}),[d]),(0,g.LI)((function(){if(null!=e&&null!=t){var r=(n.createPopper||y)(e,t,d);return f.current=r,function(){r.destroy(),f.current=null}}}),[e,t,n.createPopper]),{state:f.current?f.current.state:null,styles:o.styles,attributes:o.attributes,update:f.current?f.current.update:null,forceUpdate:f.current?f.current.forceUpdate:null}}},1162:function(e,t,n){"use strict";n.d(t,{$p:function(){return s},DL:function(){return i},LI:function(){return o},k$:function(){return a},sq:function(){return c}});var r=n(2791),s=function(e){return Array.isArray(e)?e[0]:e},i=function(e){if("function"===typeof e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e.apply(void 0,n)}},a=function(e,t){if("function"===typeof e)return i(e,t);null!=e&&(e.current=t)},c=function(e){return e.reduce((function(e,t){var n=t[0],r=t[1];return e[n]=r,e}),{})},o="undefined"!==typeof window&&window.document&&window.document.createElement?r.useLayoutEffect:r.useEffect}}]);
//# sourceMappingURL=192.6729a588.chunk.js.map