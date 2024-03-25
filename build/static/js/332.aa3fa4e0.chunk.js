"use strict";(self.webpackChunksikka_admin_app=self.webpackChunksikka_admin_app||[]).push([[332],{2806:function(e,n,t){t.d(n,{b:function(){return s}});var s=t(1243).Z.create({baseURL:"https://app.cikka.com.au/api"});s.interceptors.request.use((function(e){var n=localStorage.getItem("token");return n&&(e.headers.Authorization="Bearer "+n),e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}))},7883:function(e,n,t){t.d(n,{$:function(){return i}});var s=t(3637),a=t(184),i=function(e){var n=e.page,t=e.pageSize,i=e.data,r=e.setPage;return(0,a.jsxs)("div",{className:"row pagin-sec",children:[(0,a.jsx)("div",{className:"col-sm-12 col-md-5",children:(0,a.jsx)("div",{className:"dataTables_info",role:"status","aria-live":"polite",children:"Showing ".concat(n*t+1," to  ").concat(n*t+i.data.length," of ").concat(i.count," entries")})}),(0,a.jsx)("div",{className:"col-sm-12 col-md-7",style:{display:"flex",justifyContent:"flex-end"},children:(0,a.jsx)(s.Z,{itemClass:"page-item",prevPageText:"Previous",nextPageText:"Next",linkClass:"page-link",activePage:n+1,itemsCountPerPage:t,totalItemsCount:i.count,pageRangeDisplayed:5,hideFirstLastPages:!0,onChange:function(e){return r(e-1)}})})]})}},1629:function(e,n,t){t.d(n,{o:function(){return a}});var s=t(184),a=function(e){var n=e.dateTime;return(0,s.jsx)("span",{children:new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:"UTC"}).format(new Date(n))})}},2805:function(e,n,t){t.d(n,{d:function(){return i}});t(2791);var s=t.p+"static/media/edit-icon.99f293607452e6df8a5fe12a6b47b2b0.svg",a=t(184),i=function(e){var n=e.onClick;return(0,a.jsx)("img",{style:{cursor:"pointer"},src:s,onClick:n})}},9324:function(e,n,t){t.d(n,{q:function(){return a}});var s=t(184),a=function(e){return null===e.code?(0,s.jsx)("span",{className:"badge badge-pill badge-warning",children:"Null"}):0===e.code?(0,s.jsx)("span",{className:"badge badge-pill badge-danger",children:"Deleted"}):1===e.code?(0,s.jsx)("span",{className:"badge badge-pill badge-success",children:"Active"}):2===e.code?(0,s.jsx)("span",{className:"badge badge-pill badge-warning",children:"Hold"}):void 0}},7787:function(e,n,t){t.r(n),t.d(n,{Industries:function(){return k}});var s=t(9439),a=t(2791),i=t(6403),r=t(2917),l=t(4849),d=t(2806),c=t(7883),o=t(1629),u=t(2805),h=t(9324),m=t(3418),x=t(9930),j=t(5705),f=t(8007),p=t(184),v=(0,f.Ry)({name:(0,f.Z_)().required("Name is required")}),g=function(e){var n=e.initialValues,t=e.handleSubmit,s=e.isAdd,a=void 0!==s&&s,i=(0,j.TA)({initialValues:n,onSubmit:t,validationSchema:v});return(0,p.jsxs)("form",{onSubmit:i.handleSubmit,children:[(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("aside",{className:"col-md-6",children:(0,p.jsxs)("div",{className:"form-group",children:[(0,p.jsx)("label",{htmlFor:"name",children:"Name *"}),(0,p.jsx)("input",{type:"text",id:"name",value:i.values.name,onChange:i.handleChange,className:"form-control form-control-lg",placeholder:"Enter name"}),(0,p.jsx)("div",{className:"invalid-feedback",children:i.errors.name})]})}),(0,p.jsx)("aside",{className:"col-md-6",children:(0,p.jsxs)("div",{className:"form-group",children:[(0,p.jsx)("label",{htmlFor:"description",children:"Description"}),(0,p.jsx)("input",{type:"text",id:"description",value:i.values.description,onChange:i.handleChange,className:"form-control form-control-lg",placeholder:"Enter description"})]})}),a?null:(0,p.jsx)("aside",{className:"col-md-6",children:(0,p.jsxs)("div",{className:"form-group",children:[(0,p.jsx)("label",{htmlFor:"status",children:"status"}),(0,p.jsxs)("select",{id:"status",className:"form-control select2",onChange:i.handleChange,value:i.values.status,children:[(0,p.jsx)("option",{value:"1",children:"Active"}),(0,p.jsx)("option",{value:"2",children:"Hold"}),(0,p.jsx)("option",{value:"0",children:"Deleted"})]})]})})]}),(0,p.jsx)("div",{className:"modal-footer d-flex justify-content-end",children:(0,p.jsx)("button",{type:"submit",className:"btn mb-2 btn-primary",children:"Save"})})]})},b=function(e){return d.b.post("/industries",e)},N=function(e){var n=e.handleSuccess,t=e.handleClose,s=(0,m.D)({mutationFn:b});return(0,p.jsxs)(x.Z,{show:!0,onHide:t,size:"lg",children:[(0,p.jsxs)(x.Z.Header,{closeButton:!1,children:[(0,p.jsx)(x.Z.Title,{children:"New Industrie"}),(0,p.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:t,children:(0,p.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,p.jsx)(x.Z.Body,{children:(0,p.jsx)(g,{initialValues:{name:"",description:"",status:""},isAdd:!0,handleSubmit:function(e){s.mutate(e,{onSuccess:n})}})})]})},y=t(1413),S=function(e){return d.b.put("/industries/".concat(e.id),e)},C=function(e){var n=e.handleSuccess,t=e.handleClose,s=e.id,a=(0,r.a)({queryKey:["Industries-details",s],queryFn:function(){return function(e){return d.b.get("/industries/".concat(e)).then((function(e){return e.data}))}(s)}}),i=a.data,l=(a.error,(0,m.D)({mutationFn:S}));return(0,p.jsx)(p.Fragment,{children:i&&(0,p.jsxs)(x.Z,{show:!0,onHide:t,size:"lg",children:[(0,p.jsxs)(x.Z.Header,{closeButton:!1,children:[(0,p.jsx)(x.Z.Title,{children:"Edit Industrie"}),(0,p.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:t,children:(0,p.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,p.jsx)(x.Z.Body,{children:(0,p.jsx)(g,{initialValues:i,handleSubmit:function(e){l.mutate((0,y.Z)((0,y.Z)({},e),{},{id:s}),{onSuccess:n})}})})]})})},k=function(){var e=(0,i.NL)(),n=(0,a.useState)(0),t=(0,s.Z)(n,2),m=t[0],x=t[1],j=(0,a.useState)(!1),f=(0,s.Z)(j,2),v=f[0],g=f[1],b=(0,a.useState)(!1),y=(0,s.Z)(b,2),S=y[0],k=y[1],Z=(0,a.useState)(),w=(0,s.Z)(Z,2),A=w[0],D=w[1],I=(0,a.useState)(""),T=(0,s.Z)(I,2),P=T[0],B=T[1],F=(0,a.useState)(""),q=(0,s.Z)(F,2),E=q[0],H=q[1],z=(0,a.useState)(""),L=(0,s.Z)(z,2),U=L[0],_=L[1],V=(0,a.useState)(""),K=(0,s.Z)(V,2),R=K[0],O=K[1],$=(0,a.useState)(!1),Q=(0,s.Z)($,2),G=(Q[0],Q[1],(0,r.a)({queryKey:["Industries",m,P,E,U,R],queryFn:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,t=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0;return d.b.get("/industries?pageIndex=".concat(e,"&pageSize=").concat(n,"&search=").concat(t,"&sortBy=").concat(s,"&sortOrder=").concat(a,"&status=").concat(i)).then((function(e){return e.data}))}(m,20,P,E,U,R)},keepPreviousData:!0})),J=G.data,M=G.refetch,W=G.isLoading,X=(0,a.useState)([]),Y=(0,s.Z)(X,2),ee=Y[0],ne=Y[1];return(0,a.useEffect)((function(){d.b.get("/users").then((function(e){return e.data})).then((function(e){ne(e),console.log(e)})).catch((function(e){console.error("Error fetching categories:",e)}))}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:"row justify-content-center",children:(0,p.jsxs)("div",{className:"col-12",children:[(0,p.jsxs)("div",{className:"row heading-add",children:[(0,p.jsx)("aside",{className:"ml-2 mr-2",children:(0,p.jsx)("h2",{className:"mb-0 page-title",children:"Industries"})}),(0,p.jsx)("form",{className:"form-inline  mr-auto searchform",children:(0,p.jsx)("input",{className:"form-control mr-sm-2 border-0",onChange:function(e){var n=e.target.value;B(n),M()},type:"text",style:{background:"white"},placeholder:"Search","aria-label":"Search"})}),(0,p.jsx)("aside",{className:"col-sm-2 add-sec",children:(0,p.jsx)("button",{className:"bttn",onClick:function(){return g(!0)},children:"Add"})})]}),(0,p.jsxs)("div",{className:"d-flex flex-wrap",children:[(0,p.jsx)("aside",{className:"col-md-4 mt-2 mt-md-0 mb-2 mb-md-0",children:(0,p.jsxs)("select",{className:"form-control",onChange:function(e){var n=e.target.value;H(n),console.log(n),M()},style:{background:"white"},"aria-label":"select",children:[(0,p.jsx)("option",{value:"",children:"sortBy"}),(0,p.jsx)("option",{value:"id",children:"ID"})]})}),(0,p.jsx)("aside",{className:"col-md-4 mt-2 mt-md-0 mb-2 mb-md-0",children:(0,p.jsxs)("select",{className:"form-control",onChange:function(e){var n=e.target.value;_(n),console.log(n),M()},style:{background:"white"},"aria-label":"select",children:[(0,p.jsx)("option",{value:"",children:"sortOrder"}),(0,p.jsx)("option",{value:"ASC",children:"ASC"}),(0,p.jsx)("option",{value:"DESC",children:"DESC"})]})}),(0,p.jsx)("aside",{className:"col-md-4 mt-2 mt-md-0 mb-2 mb-md-0",children:(0,p.jsxs)("select",{className:"form-control",onChange:function(e){var n=e.target.value;O(n),console.log(n),M()},style:{background:"white"},"aria-label":"select",children:[(0,p.jsx)("option",{value:"",children:"STATUS"}),(0,p.jsx)("option",{value:"1",children:"Active"}),(0,p.jsx)("option",{value:"2",children:"Hold"}),(0,p.jsx)("option",{value:"0",children:"Deleted"})]})})]}),(0,p.jsx)("div",{className:"row my-2",children:(0,p.jsx)("div",{className:"col-md-12",children:(0,p.jsx)("div",{className:"card shadow",children:(0,p.jsxs)("div",{className:"card-body",children:[(0,p.jsx)("div",{className:"resp-table industries-tb",children:(0,p.jsxs)("table",{className:"table",children:[(0,p.jsx)("thead",{children:(0,p.jsxs)("tr",{children:[(0,p.jsx)("th",{children:"Actions"}),(0,p.jsx)("th",{children:"Status"}),(0,p.jsx)("th",{children:"ID"}),(0,p.jsx)("th",{children:"Name"}),(0,p.jsx)("th",{children:"Description"}),(0,p.jsx)("th",{children:"CreatedBy"}),(0,p.jsx)("th",{children:"UpdatedBy"}),(0,p.jsx)("th",{children:"CreatedAt"}),(0,p.jsx)("th",{children:"UpdatedAt"})]})}),(0,p.jsx)("tbody",{children:W?(0,p.jsx)("tr",{children:(0,p.jsx)("td",{rowSpan:"10",colSpan:"15",children:(0,p.jsx)("div",{className:"text-center py-5",children:(0,p.jsx)(l.Z,{animation:"border"})})})}):J.data.map((function(e){var n,t,s,a,i;return(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{className:"actions",children:(0,p.jsx)(u.d,{onClick:(i=e.id,function(){D(i),k(!0)})})}),(0,p.jsx)("td",{children:(0,p.jsx)(h.q,{code:e.status})}),(0,p.jsx)("td",{children:e.id}),(0,p.jsx)("td",{children:P&&e.name.toLowerCase().includes(P.toLowerCase())?(0,p.jsx)("span",{className:"highlighted",children:e.name}):e.name}),(0,p.jsx)("td",{children:e.description}),(0,p.jsx)("td",{children:(null===ee||void 0===ee||null===(n=ee.data)||void 0===n||null===(t=n.find((function(n){return n.id===e.createdBy})))||void 0===t?void 0:t.firstName)||"N/A"}),(0,p.jsx)("td",{children:(null===ee||void 0===ee||null===(s=ee.data)||void 0===s||null===(a=s.find((function(n){return n.id===e.updatedBy})))||void 0===a?void 0:a.firstName)||"N/A"}),(0,p.jsx)("td",{children:(0,p.jsx)(o.o,{dateTime:e.createdAt})}),(0,p.jsx)("td",{children:(0,p.jsx)(o.o,{dateTime:e.updatedAt})})]},e.id)}))})]})}),W?null:(0,p.jsx)(c.$,{page:m,pageSize:20,data:J,setPage:x})]})})})})]})}),v?(0,p.jsx)(N,{handleSuccess:function(){g(!1),M()},handleClose:function(){return g(!1)}}):null,S?(0,p.jsx)(C,{handleSuccess:function(){e.invalidateQueries({queryKey:["Industries-details",A]}),k(!1),M()},id:A,handleClose:function(){return k(!1)}}):null]})}}}]);
//# sourceMappingURL=332.aa3fa4e0.chunk.js.map