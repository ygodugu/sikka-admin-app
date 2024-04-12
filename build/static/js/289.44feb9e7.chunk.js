"use strict";(self.webpackChunksikka_admin_app=self.webpackChunksikka_admin_app||[]).push([[289],{2806:function(e,n,a){a.d(n,{b:function(){return t}});var t=a(1243).Z.create({baseURL:"https://app.cikka.com.au/api"});t.interceptors.request.use((function(e){var n=localStorage.getItem("token");return n&&(e.headers.Authorization="Bearer "+n),e}),(function(e){return Promise.reject(e)})),t.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}))},7883:function(e,n,a){a.d(n,{$:function(){return i}});var t=a(3637),s=a(184),i=function(e){var n=e.page,a=e.pageSize,i=e.data,r=e.setPage;return(0,s.jsxs)("div",{className:"row pagin-sec",children:[(0,s.jsx)("div",{className:"col-sm-12 col-md-5",children:(0,s.jsx)("div",{className:"dataTables_info",role:"status","aria-live":"polite",children:"Showing ".concat(n*a+1," to  ").concat(n*a+i.data.length," of ").concat(i.count," entries")})}),(0,s.jsx)("div",{className:"col-sm-12 col-md-7",style:{display:"flex",justifyContent:"flex-end"},children:(0,s.jsx)(t.Z,{itemClass:"page-item",prevPageText:"Previous",nextPageText:"Next",linkClass:"page-link",activePage:n+1,itemsCountPerPage:a,totalItemsCount:i.count,pageRangeDisplayed:5,hideFirstLastPages:!0,onChange:function(e){return r(e-1)}})})]})}},1629:function(e,n,a){a.d(n,{o:function(){return s}});var t=a(184),s=function(e){var n=e.dateTime,a=new Date(n).toLocaleString("en-GB",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0});return(0,t.jsx)("span",{children:a})}},2805:function(e,n,a){a.d(n,{d:function(){return i}});a(2791);var t=a.p+"static/media/edit-icon.99f293607452e6df8a5fe12a6b47b2b0.svg",s=a(184),i=function(e){var n=e.onClick;return(0,s.jsx)("img",{style:{cursor:"pointer"},src:t,onClick:n})}},9324:function(e,n,a){a.d(n,{q:function(){return s}});var t=a(184),s=function(e){return null===e.code?(0,t.jsx)("span",{className:"badge badge-pill badge-warning",children:"Null"}):0===e.code?(0,t.jsx)("span",{className:"badge badge-pill badge-danger",children:"Deleted"}):1===e.code?(0,t.jsx)("span",{className:"badge badge-pill badge-success",children:"Active"}):2===e.code?(0,t.jsx)("span",{className:"badge badge-pill badge-warning",children:"Hold"}):void 0}},4289:function(e,n,a){a.r(n),a.d(n,{Documents:function(){return k}});var t=a(9439),s=a(2791),i=a(6403),r=a(2917),l=a(2805),c=a(2806),d=a(7883),o=a(1629),u=a(9324),h=a(3418),m=a(9930),x=a(5705),j=a(8007),f=a(184),v=(0,j.Ry)({name:(0,j.Z_)().required("Name is required")}),p=function(e){var n=e.initialValues,a=e.handleSubmit,t=e.isAdd,s=void 0!==t&&t,i=(0,x.TA)({initialValues:n,onSubmit:a,validationSchema:v});return(0,f.jsxs)("form",{onSubmit:i.handleSubmit,children:[(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("aside",{className:"col-md-6",children:(0,f.jsxs)("div",{className:"form-group",children:[(0,f.jsx)("label",{for:"name",children:"Name *"}),(0,f.jsx)("input",{type:"text",id:"name",value:i.values.name,onChange:i.handleChange,onBlur:i.handleBlur,className:"form-control form-control-lg",placeholder:"Enter Name"}),(0,f.jsx)("div",{className:"invalid-feedback",children:i.errors.name})]})}),(0,f.jsx)("aside",{className:"col-md-6",children:(0,f.jsxs)("div",{className:"form-group",children:[(0,f.jsx)("label",{for:"description",children:"description"}),(0,f.jsx)("input",{type:"text",id:"description",value:i.values.description,onChange:i.handleChange,onBlur:i.handleBlur,className:"form-control form-control-lg",placeholder:"Enter description"})]})}),s?null:(0,f.jsx)("aside",{className:"col-md-6",children:(0,f.jsxs)("div",{className:"form-group",children:[(0,f.jsx)("label",{htmlFor:"status",children:"status"}),(0,f.jsxs)("select",{id:"status",className:"form-control select2",onChange:i.handleChange,value:i.values.status,children:[(0,f.jsx)("option",{value:"1",children:"Active"}),(0,f.jsx)("option",{value:"2",children:"Hold"}),(0,f.jsx)("option",{value:"0",children:"Deleted"})]})]})})]}),(0,f.jsx)("div",{className:"modal-footer d-flex justify-content-end",children:(0,f.jsx)("button",{type:"submit",className:"btn mb-2 btn-primary",children:"Save"})})]})},g=function(e){return c.b.post("/documents",e)},b=function(e){var n=e.handleSuccess,a=e.handleClose,t=(0,h.D)({mutationFn:g});return(0,f.jsxs)(m.Z,{show:!0,onHide:a,size:"lg",children:[(0,f.jsxs)(m.Z.Header,{closeButton:!1,children:[(0,f.jsx)(m.Z.Title,{children:"New Document"}),(0,f.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:a,children:(0,f.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,f.jsx)(m.Z.Body,{children:(0,f.jsx)(p,{initialValues:{name:"",description:"",status:""},isAdd:!0,handleSubmit:function(e){t.mutate(e,{onSuccess:n})}})})]})},N=a(1413),y=function(e){return c.b.put("/documents/".concat(e.id),e)},C=function(e){var n=e.handleSuccess,a=e.handleClose,t=e.id,s=(0,r.a)({queryKey:["documents-details",t],queryFn:function(){return function(e){return c.b.get("/documents/".concat(e)).then((function(e){return e.data}))}(t)}}),i=s.data,l=(0,h.D)({mutationFn:y});return(0,f.jsx)(f.Fragment,{children:i&&(0,f.jsxs)(m.Z,{show:!0,onHide:a,size:"lg",children:[(0,f.jsxs)(m.Z.Header,{closeButton:!1,children:[(0,f.jsx)(m.Z.Title,{children:"Edit Document"}),(0,f.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:a,children:(0,f.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,f.jsx)(m.Z.Body,{children:(0,f.jsx)(p,{initialValues:i,handleSubmit:function(e){l.mutate((0,N.Z)((0,N.Z)({},e),{},{id:t}),{onSuccess:n})}})})]})})},S=a(18),Z=a(4849),k=function(){var e,n=(0,i.NL)(),a=(0,s.useState)(0),h=(0,t.Z)(a,2),m=h[0],x=h[1],j=(0,s.useState)(!1),v=(0,t.Z)(j,2),p=v[0],g=v[1],N=(0,s.useState)(!1),y=(0,t.Z)(N,2),k=y[0],w=y[1],A=(0,s.useState)(),B=(0,t.Z)(A,2),D=B[0],P=B[1],E=(0,s.useState)(""),H=(0,t.Z)(E,2),L=H[0],T=H[1],q=(0,s.useState)(""),F=(0,t.Z)(q,2),z=F[0],I=F[1],R=(0,s.useState)(""),V=(0,t.Z)(R,2),_=V[0],O=V[1],U=(0,s.useState)(""),K=(0,t.Z)(U,2),$=K[0],G=K[1],Q=(0,s.useState)(!1),J=(0,t.Z)(Q,2),M=J[0],W=(J[1],(0,r.a)({queryKey:["Documents",m,L,z,_,$],queryFn:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,a=arguments.length>2?arguments[2]:void 0,t=arguments.length>3?arguments[3]:void 0,s=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0;return c.b.get("/documents?pageIndex=".concat(e,"&pageSize=").concat(n,"&search=").concat(a,"&sortBy=").concat(t,"&sortOrder=").concat(s,"&status=").concat(i)).then((function(e){return e.data}))}(m,20,L,z,_,$)},keepPreviousData:!0})),X=W.isLoading,Y=W.data,ee=W.refetch,ne=(0,s.useState)([]),ae=(0,t.Z)(ne,2),te=ae[0],se=ae[1];return(0,s.useEffect)((function(){c.b.get("/users?pageIndex=0&pageSize=1400").then((function(e){return e.data})).then((function(e){se(e),console.log(e)})).catch((function(e){console.error("Error fetching categories:",e)}))}),[]),(0,f.jsxs)(f.Fragment,{children:[M?(0,f.jsxs)(S.Z,{variant:"danger",onClose:function(){return M(!1)},children:[(0,f.jsx)(S.Z.Heading,{children:"Server Error!"}),(0,f.jsx)("p",{children:"Can not user"})]}):null,(0,f.jsx)("div",{className:"row justify-content-center",children:(0,f.jsxs)("div",{className:"col-12",children:[(0,f.jsxs)("div",{className:"row heading-add",children:[(0,f.jsx)("aside",{className:"ml-2 mr-2",children:(0,f.jsx)("h2",{className:"mb-0 page-title",children:"Documents"})}),(0,f.jsx)("form",{className:"form-inline  mr-auto searchform",children:(0,f.jsx)("input",{className:"form-control mr-sm-2 border-0",onChange:function(e){var n=e.target.value;T(n),ee()},type:"text",style:{background:"white"},placeholder:"Search","aria-label":"Search"})}),(0,f.jsx)("aside",{className:"col-sm-2 add-sec",children:(0,f.jsx)("button",{className:"bttn",onClick:function(){return g(!0)},children:"Add"})})]}),(0,f.jsxs)("div",{className:"d-flex flex-wrap",children:[(0,f.jsx)("aside",{className:"col-md-4 mt-2 mt-md-0 mb-2 mb-md-0",children:(0,f.jsxs)("select",{className:"form-control",onChange:function(e){var n=e.target.value;I(n),console.log(n),ee()},style:{background:"white"},"aria-label":"select",children:[(0,f.jsx)("option",{value:"",children:"sortBy"}),(0,f.jsx)("option",{value:"id",children:"ID"})]})}),(0,f.jsx)("aside",{className:"col-md-4 mt-2 mt-md-0 mb-2 mb-md-0",children:(0,f.jsxs)("select",{className:"form-control",onChange:function(e){var n=e.target.value;O(n),console.log(n),ee()},style:{background:"white"},"aria-label":"select",children:[(0,f.jsx)("option",{value:"",children:"sortOrder"}),(0,f.jsx)("option",{value:"ASC",children:"ASC"}),(0,f.jsx)("option",{value:"DESC",children:"DESC"})]})}),(0,f.jsx)("aside",{className:"col-md-4 mt-2 mt-md-0 mb-2 mb-md-0",children:(0,f.jsxs)("select",{className:"form-control",onChange:function(e){var n=e.target.value;G(n),console.log(n),ee()},style:{background:"white"},"aria-label":"select",children:[(0,f.jsx)("option",{value:"",children:"STATUS"}),(0,f.jsx)("option",{value:"1",children:"Active"}),(0,f.jsx)("option",{value:"2",children:"Hold"}),(0,f.jsx)("option",{value:"0",children:"Deleted"})]})})]}),(0,f.jsx)("div",{className:"row my-2",children:(0,f.jsx)("div",{className:"col-md-12",children:(0,f.jsx)("div",{className:"card shadow",children:(0,f.jsxs)("div",{className:"card-body",children:[(0,f.jsx)("div",{className:"resp-table documents-tb",children:(0,f.jsxs)("table",{className:"table",children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{children:"Actions"}),(0,f.jsx)("th",{children:"Status"}),(0,f.jsx)("th",{children:"ID"}),(0,f.jsx)("th",{children:"Name"}),(0,f.jsx)("th",{children:"Description"}),(0,f.jsx)("th",{children:"CreatedBy"}),(0,f.jsx)("th",{children:"UpdatedBy"}),(0,f.jsx)("th",{children:"CreatedAt"}),(0,f.jsx)("th",{children:"UpdatedAt"})]})}),(0,f.jsx)("tbody",{children:X?(0,f.jsx)("tr",{children:(0,f.jsx)("td",{rowSpan:"10",colSpan:"13",children:(0,f.jsx)("div",{className:"text-center py-5",children:(0,f.jsx)(Z.Z,{animation:"border"})})})}):null===Y||void 0===Y||null===(e=Y.data)||void 0===e?void 0:e.map((function(e){return(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{className:"actions",children:(0,f.jsx)(l.d,{onClick:(n=e.id,function(){P(n),w(!0)})})}),(0,f.jsx)("td",{children:(0,f.jsx)(u.q,{code:e.status})}),(0,f.jsx)("td",{children:e.id}),(0,f.jsx)("td",{children:L&&e.name.toLowerCase().includes(L.toLowerCase())?(0,f.jsx)("span",{className:"highlighted",children:e.name}):e.name}),(0,f.jsx)("td",{children:e.description}),(0,f.jsx)("td",{children:te&&te.data&&te.data.find((function(n){return n.id===e.createdBy}))?function(){var n=te.data.find((function(n){return n.id===e.createdBy}));return"".concat(n.firstName||"N/A"," ").concat(n.lastName||"N/A")}():e.createdBy}),(0,f.jsx)("td",{children:te&&te.data&&te.data.find((function(n){return n.id===e.updatedBy}))?function(){var n=te.data.find((function(n){return n.id===e.updatedBy}));return"".concat(n.firstName||"N/A"," ").concat(n.lastName||"N/A")}():e.updatedBy}),(0,f.jsx)("td",{children:(0,f.jsx)(o.o,{dateTime:e.createdAt})}),(0,f.jsx)("td",{children:(0,f.jsx)(o.o,{dateTime:e.updatedAt})})]},e.id);var n}))})]})}),X?null:(0,f.jsx)(d.$,{page:m,pageSize:20,data:Y,setPage:x})]})})})})]})}),p?(0,f.jsx)(b,{handleSuccess:function(){g(!1),ee()},handleClose:function(){return g(!1)}}):null,k?(0,f.jsx)(C,{id:D,handleSuccess:function(){n.invalidateQueries({queryKey:["Documents-details",D]}),w(!1),ee()},handleClose:function(){return w(!1)}}):null]})}},18:function(e,n,a){a.d(n,{Z:function(){return Z}});var t=a(1413),s=a(5987),i=a(1694),r=a.n(i),l=a(2791),c=a(239),d=a(9007),o=a(162),u=a(7472),h=a(184),m=["className","bsPrefix","as"],x=(0,u.Z)("h4");x.displayName="DivStyledAsH4";var j=l.forwardRef((function(e,n){var a=e.className,i=e.bsPrefix,l=e.as,c=void 0===l?x:l,d=(0,s.Z)(e,m);return i=(0,o.vE)(i,"alert-heading"),(0,h.jsx)(c,(0,t.Z)({ref:n,className:r()(a,i)},d))}));j.displayName="AlertHeading";var f=j,v=a(6445),p=["className","bsPrefix","as"],g=l.forwardRef((function(e,n){var a=e.className,i=e.bsPrefix,l=e.as,c=void 0===l?v.Z:l,d=(0,s.Z)(e,p);return i=(0,o.vE)(i,"alert-link"),(0,h.jsx)(c,(0,t.Z)({ref:n,className:r()(a,i)},d))}));g.displayName="AlertLink";var b=g,N=a(4418),y=a(473),C=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],S=l.forwardRef((function(e,n){var a=(0,c.Ch)(e,{show:"onClose"}),i=a.bsPrefix,l=a.show,u=void 0===l||l,m=a.closeLabel,x=void 0===m?"Close alert":m,j=a.closeVariant,f=a.className,v=a.children,p=a.variant,g=void 0===p?"primary":p,b=a.onClose,S=a.dismissible,Z=a.transition,k=void 0===Z?N.Z:Z,w=(0,s.Z)(a,C),A=(0,o.vE)(i,"alert"),B=(0,d.Z)((function(e){b&&b(!1,e)})),D=!0===k?N.Z:k,P=(0,h.jsxs)("div",(0,t.Z)((0,t.Z)({role:"alert"},D?void 0:w),{},{ref:n,className:r()(f,A,g&&"".concat(A,"-").concat(g),S&&"".concat(A,"-dismissible")),children:[S&&(0,h.jsx)(y.Z,{onClick:B,"aria-label":x,variant:j}),v]}));return D?(0,h.jsx)(D,(0,t.Z)((0,t.Z)({unmountOnExit:!0},w),{},{ref:void 0,in:u,children:P})):u?P:null}));S.displayName="Alert";var Z=Object.assign(S,{Link:b,Heading:f})}}]);
//# sourceMappingURL=289.44feb9e7.chunk.js.map