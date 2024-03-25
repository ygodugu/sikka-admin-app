"use strict";(self.webpackChunksikka_admin_app=self.webpackChunksikka_admin_app||[]).push([[973],{2806:function(e,n,a){a.d(n,{b:function(){return t}});var t=a(1243).Z.create({baseURL:"https://app.cikka.com.au/api"});t.interceptors.request.use((function(e){var n=localStorage.getItem("token");return n&&(e.headers.Authorization="Bearer "+n),e}),(function(e){return Promise.reject(e)})),t.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}))},7883:function(e,n,a){a.d(n,{$:function(){return i}});var t=a(3637),s=a(184),i=function(e){var n=e.page,a=e.pageSize,i=e.data,r=e.setPage;return(0,s.jsxs)("div",{className:"row pagin-sec",children:[(0,s.jsx)("div",{className:"col-sm-12 col-md-5",children:(0,s.jsx)("div",{className:"dataTables_info",role:"status","aria-live":"polite",children:"Showing ".concat(n*a+1," to  ").concat(n*a+i.data.length," of ").concat(i.count," entries")})}),(0,s.jsx)("div",{className:"col-sm-12 col-md-7",style:{display:"flex",justifyContent:"flex-end"},children:(0,s.jsx)(t.Z,{itemClass:"page-item",prevPageText:"Previous",nextPageText:"Next",linkClass:"page-link",activePage:n+1,itemsCountPerPage:a,totalItemsCount:i.count,pageRangeDisplayed:5,hideFirstLastPages:!0,onChange:function(e){return r(e-1)}})})]})}},1629:function(e,n,a){a.d(n,{o:function(){return s}});var t=a(184),s=function(e){var n=e.dateTime;return(0,t.jsx)("span",{children:new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:"UTC"}).format(new Date(n))})}},2805:function(e,n,a){a.d(n,{d:function(){return i}});a(2791);var t=a.p+"static/media/edit-icon.99f293607452e6df8a5fe12a6b47b2b0.svg",s=a(184),i=function(e){var n=e.onClick;return(0,s.jsx)("img",{style:{cursor:"pointer"},src:t,onClick:n})}},9324:function(e,n,a){a.d(n,{q:function(){return s}});var t=a(184),s=function(e){return null===e.code?(0,t.jsx)("span",{className:"badge badge-pill badge-warning",children:"Null"}):0===e.code?(0,t.jsx)("span",{className:"badge badge-pill badge-danger",children:"Deleted"}):1===e.code?(0,t.jsx)("span",{className:"badge badge-pill badge-success",children:"Active"}):2===e.code?(0,t.jsx)("span",{className:"badge badge-pill badge-warning",children:"Hold"}):void 0}},3179:function(e,n,a){a.r(n),a.d(n,{Services:function(){return I}});var t=a(9439),s=a(2791),i=a(9781),r=a(6403),l=a(2917),c=a(4849),d=a(2806),o=a(7883),u=a(1629),h=a(2805),m=a(9324),x=a(3418),j=a(9930),f=a(5705),v=a(8007),p=a(8862),g=a(184),b=(0,v.Ry)({name:(0,v.Z_)().required("Name is required")}),N=function(e){var n=e.initialValues,a=e.handleSubmit,i=(e.isAdd,(0,f.TA)({initialValues:n,onSubmit:a,validationSchema:b})),r=(0,s.useState)([]),l=(0,t.Z)(r,2),c=l[0],o=l[1];return(0,s.useEffect)((function(){d.b.get("/merchants").then((function(e){var n,a;return null===(n=e.data)||void 0===n||null===(a=n.data)||void 0===a?void 0:a.map((function(e){return{id:e.id,label:"".concat(e.user.firstName," + ").concat(e.user.firstName)}}))})).then((function(e){o(e),n.merchantUserId&&n.merchantUserId&&i.setFieldValue("MerchantID",e.filter((function(e){return e.id===n.merchantUserId})))}))}),[]),(0,g.jsxs)("form",{onSubmit:i.handleSubmit,children:[(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)("aside",{className:"col-md-6",children:(0,g.jsxs)("div",{className:"form-group",children:[(0,g.jsx)("label",{for:"merchantUserId",children:"MerchantUserId *"}),(0,g.jsx)(p.pY,{selected:i.values.MerchantID,id:"merchantUserId",options:c,onChange:function(e){e&&e.length>0?(i.setFieldValue("merchantUserId",e[0].id),i.setFieldValue("MerchantID",e)):(i.setFieldValue("merchantUserId",""),i.setFieldValue("MerchantID",[]))},placeholder:"Choose a MerchantUser..."}),(0,g.jsx)("div",{className:"invalid-feedback",children:i.errors.businessCategoryId})]})}),(0,g.jsx)("aside",{className:"col-md-6",children:(0,g.jsxs)("div",{className:"form-group",children:[(0,g.jsx)("label",{htmlFor:"name",children:"Name *"}),(0,g.jsx)("input",{type:"text",id:"name",value:i.values.name,onChange:i.handleChange,className:"form-control form-control-lg",placeholder:"Enter name"}),(0,g.jsx)("div",{className:"invalid-feedback",children:i.errors.name})]})}),(0,g.jsx)("aside",{className:"col-md-6",children:(0,g.jsxs)("div",{className:"form-group",children:[(0,g.jsx)("label",{htmlFor:"description",children:"Description"}),(0,g.jsx)("input",{type:"text",id:"description",value:i.values.description,onChange:i.handleChange,className:"form-control form-control-lg",placeholder:"Enter description"})]})}),(0,g.jsx)("aside",{className:"col-md-6",children:(0,g.jsxs)("div",{className:"form-group",children:[(0,g.jsx)("label",{htmlFor:"duration",children:"Duration"}),(0,g.jsx)("input",{type:"number",id:"duration",value:i.values.duration,onChange:i.handleChange,className:"form-control form-control-lg",placeholder:"Enter duration"})]})}),(0,g.jsx)("aside",{className:"col-md-6",children:(0,g.jsxs)("div",{className:"form-group",children:[(0,g.jsx)("label",{htmlFor:"status",children:"status"}),(0,g.jsxs)("select",{id:"status",className:"form-control select2",onChange:i.handleChange,value:i.values.status,children:[(0,g.jsx)("option",{value:"1",children:"Active"}),(0,g.jsx)("option",{value:"2",children:"Hold"}),(0,g.jsx)("option",{value:"0",children:"Deleted"})]})]})})]}),(0,g.jsx)("div",{className:"modal-footer d-flex justify-content-end",children:(0,g.jsx)("button",{type:"submit",className:"btn mb-2 btn-primary",children:"Save"})})]})},S=function(e){return d.b.post("/services",e)},y=function(e){var n=e.handleSuccess,a=e.handleClose,t=(0,x.D)({mutationFn:S});return(0,g.jsxs)(j.Z,{show:!0,onHide:a,size:"lg",children:[(0,g.jsxs)(j.Z.Header,{closeButton:!1,children:[(0,g.jsx)(j.Z.Title,{children:"New Service"}),(0,g.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:a,children:(0,g.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,g.jsx)(j.Z.Body,{children:(0,g.jsx)(N,{initialValues:{fileId:"b2a68eb4-70ea-4b3e-8404-6f003a0dcf17",id:"",merchantUserId:"",name:"",duration:"",description:"",status:""},handleSubmit:function(e){t.mutate(e,{onSuccess:n})}})})]})},C=a(1413),k=function(e){return d.b.put("/services/".concat(e.id),e)},Z=function(e){var n=e.handleSuccess,a=e.handleClose,t=e.id,s=(0,l.a)({queryKey:["Services-details",t],queryFn:function(){return function(e){return d.b.get("/services/".concat(e)).then((function(e){return e.data}))}(t)}}),i=s.data,r=(s.error,(0,x.D)({mutationFn:k}));return(0,g.jsx)(g.Fragment,{children:i&&(0,g.jsxs)(j.Z,{show:!0,onHide:a,size:"lg",children:[(0,g.jsxs)(j.Z.Header,{closeButton:!1,children:[(0,g.jsx)(j.Z.Title,{children:"Edit Service"}),(0,g.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:a,children:(0,g.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,g.jsx)(j.Z.Body,{children:(0,g.jsx)(N,{initialValues:i,handleSubmit:function(e){r.mutate((0,C.Z)((0,C.Z)({},e),{},{id:t}),{onSuccess:n})}})})]})})},I=function(){var e=(0,r.NL)(),n=(0,s.useState)(0),a=(0,t.Z)(n,2),x=a[0],j=a[1],f=(0,s.useState)(!1),v=(0,t.Z)(f,2),p=v[0],b=v[1],N=(0,s.useState)(!1),S=(0,t.Z)(N,2),C=S[0],k=S[1],I=(0,s.useState)(),w=(0,t.Z)(I,2),U=w[0],D=w[1],A=(0,s.useState)(""),F=(0,t.Z)(A,2),P=F[0],T=F[1],B=(0,s.useState)(""),q=(0,t.Z)(B,2),E=q[0],V=q[1],H=(0,s.useState)(""),M=(0,t.Z)(H,2),z=M[0],_=M[1],L=(0,s.useState)(""),K=(0,t.Z)(L,2),R=K[0],O=K[1],$=(0,s.useState)(!1),Q=(0,t.Z)($,2),Y=(Q[0],Q[1],(0,l.a)({queryKey:["Services",x,P,E,z,R],queryFn:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,a=arguments.length>2?arguments[2]:void 0,t=arguments.length>3?arguments[3]:void 0,s=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0;return d.b.get("/services?pageIndex=".concat(e,"&pageSize=").concat(n,"&search=").concat(a,"&sortBy=").concat(t,"&sortOrder=").concat(s,"&status=").concat(i)).then((function(e){return e.data}))}(x,20,P,E,z,R)},keepPreviousData:!0})),G=Y.data,J=Y.refetch,W=Y.isLoading,X=(0,s.useState)([]),ee=(0,t.Z)(X,2),ne=ee[0],ae=ee[1];(0,s.useEffect)((function(){d.b.get("/users").then((function(e){return e.data})).then((function(e){ae(e),console.log(e)})).catch((function(e){console.error("Error fetching categories:",e)}))}),[]);var te=function(e,n){var a=e.split("?")[1].split("=")[1];return"https://app.cikka.com.au/api/files/file-preview?fileName=".concat(a,"&folderName=").concat(n)};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{className:"row justify-content-center",children:(0,g.jsxs)("div",{className:"col-12",children:[(0,g.jsxs)("div",{className:"row heading-add",children:[(0,g.jsx)("aside",{className:"ml-2 mr-2",children:(0,g.jsx)("h2",{className:"mb-0 page-title",children:"Services"})}),(0,g.jsx)("form",{className:"form-inline  mr-auto searchform",children:(0,g.jsx)("input",{className:"form-control mr-sm-2 border-0",onChange:function(e){var n=e.target.value;T(n),J()},type:"text",style:{background:"white"},placeholder:"Search","aria-label":"Search"})}),(0,g.jsx)("aside",{className:"col-sm-2 add-sec",children:(0,g.jsx)("button",{className:"bttn",onClick:function(){return b(!0)},children:"Add"})})]}),(0,g.jsxs)("div",{className:"d-flex flex-wrap",children:[(0,g.jsx)("aside",{className:"col-md-4 mt-2 mt-md-0 mb-2 mb-md-0",children:(0,g.jsxs)("select",{className:"form-control",onChange:function(e){var n=e.target.value;V(n),console.log(n),J()},style:{background:"white"},"aria-label":"select",children:[(0,g.jsx)("option",{value:"",children:"sortBy"}),(0,g.jsx)("option",{value:"id",children:"ID"})]})}),(0,g.jsx)("aside",{className:"col-md-4 mt-2 mt-md-0 mb-2 mb-md-0",children:(0,g.jsxs)("select",{className:"form-control",onChange:function(e){var n=e.target.value;_(n),console.log(n),J()},style:{background:"white"},"aria-label":"select",children:[(0,g.jsx)("option",{value:"",children:"sortOrder"}),(0,g.jsx)("option",{value:"ASC",children:"ASC"}),(0,g.jsx)("option",{value:"DESC",children:"DESC"})]})}),(0,g.jsx)("aside",{className:"col-md-4 mt-2 mt-md-0 mb-2 mb-md-0",children:(0,g.jsxs)("select",{className:"form-control",onChange:function(e){var n=e.target.value;O(n),console.log(n),J()},style:{background:"white"},"aria-label":"select",children:[(0,g.jsx)("option",{value:"",children:"STATUS"}),(0,g.jsx)("option",{value:"1",children:"Active"}),(0,g.jsx)("option",{value:"2",children:"Hold"}),(0,g.jsx)("option",{value:"0",children:"Deleted"})]})})]}),(0,g.jsx)("div",{className:"row my-2",children:(0,g.jsx)("div",{className:"col-md-12",children:(0,g.jsx)("div",{className:"card shadow",children:(0,g.jsxs)("div",{className:"card-body",children:[(0,g.jsx)("div",{className:"resp-table services-tb",children:(0,g.jsxs)("table",{className:"table",children:[(0,g.jsx)("thead",{children:(0,g.jsxs)("tr",{children:[(0,g.jsx)("th",{children:"Actions"}),(0,g.jsx)("th",{children:"Status"}),(0,g.jsx)("th",{children:"Image"}),(0,g.jsx)("th",{children:"ID"}),(0,g.jsx)("th",{children:"Merchant-UserId"}),(0,g.jsx)("th",{children:"Name"}),(0,g.jsx)("th",{children:"duration"}),(0,g.jsx)("th",{children:"Description"}),(0,g.jsx)("th",{children:"CreatedBy"}),(0,g.jsx)("th",{children:"UpdatedBy"}),(0,g.jsx)("th",{children:"CreatedAt"}),(0,g.jsx)("th",{children:"UpdatedAt"})]})}),(0,g.jsx)("tbody",{children:W?(0,g.jsx)("tr",{children:(0,g.jsx)("td",{rowSpan:"10",colSpan:"15",children:(0,g.jsx)("div",{className:"text-center py-5",children:(0,g.jsx)(c.Z,{animation:"border"})})})}):G.data.map((function(e){var n,a,t,s,r;return(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{className:"actions",children:(0,g.jsx)(h.d,{onClick:(r=e.id,function(){D(r),k(!0)})})}),(0,g.jsx)("td",{children:(0,g.jsx)(m.q,{code:e.status})}),(0,g.jsx)("td",{children:e.fileUpload&&e.fileUpload.filePath?(0,g.jsx)("img",{src:te(e.fileUpload.filePath,e.fileUpload.folderName),alt:"logo",className:"table-logo"}):(0,g.jsx)("img",{src:i,alt:"demoLogo",className:"table-logo"})}),(0,g.jsx)("td",{children:e.id}),(0,g.jsx)("td",{children:e.merchantUserId}),(0,g.jsx)("td",{children:e.merchantUserId}),(0,g.jsx)("td",{children:e.name}),(0,g.jsx)("td",{children:e.duration}),(0,g.jsx)("td",{children:e.description}),(0,g.jsx)("td",{children:(null===ne||void 0===ne||null===(n=ne.data)||void 0===n||null===(a=n.find((function(n){return n.id===e.createdBy})))||void 0===a?void 0:a.firstName)||"N/A"}),(0,g.jsx)("td",{children:(null===ne||void 0===ne||null===(t=ne.data)||void 0===t||null===(s=t.find((function(n){return n.id===e.updatedBy})))||void 0===s?void 0:s.firstName)||"N/A"}),(0,g.jsx)("td",{children:(0,g.jsx)(u.o,{dateTime:e.createdAt})}),(0,g.jsx)("td",{children:(0,g.jsx)(u.o,{dateTime:e.updatedAt})})]},e.id)}))})]})}),W?null:(0,g.jsx)(o.$,{page:x,pageSize:20,data:G,setPage:j})]})})})})]})}),p?(0,g.jsx)(y,{handleSuccess:function(){b(!1),J()},handleClose:function(){return b(!1)}}):null,C?(0,g.jsx)(Z,{handleSuccess:function(){e.invalidateQueries({queryKey:["Services-details",U]}),k(!1),J()},id:U,handleClose:function(){return k(!1)}}):null]})}}}]);
//# sourceMappingURL=973.72af6de8.chunk.js.map