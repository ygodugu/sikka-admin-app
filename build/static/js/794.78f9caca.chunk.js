"use strict";(self.webpackChunksikka_admin_app=self.webpackChunksikka_admin_app||[]).push([[794],{2806:function(e,a,n){n.d(a,{b:function(){return t}});var t=n(1243).Z.create({baseURL:"https://app.cikka.com.au/api"});t.interceptors.request.use((function(e){var a=localStorage.getItem("token");return a&&(e.headers.Authorization="Bearer "+a),e}),(function(e){return Promise.reject(e)})),t.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}))},7883:function(e,a,n){n.d(a,{$:function(){return s}});var t=n(3637),l=n(184),s=function(e){var a=e.page,n=e.pageSize,s=e.data,r=e.setPage;return(0,l.jsxs)("div",{className:"row pagin-sec",children:[(0,l.jsx)("div",{className:"col-sm-12 col-md-5",children:(0,l.jsx)("div",{className:"dataTables_info",role:"status","aria-live":"polite",children:"Showing ".concat(a*n+1," to  ").concat(a*n+s.data.length," of ").concat(s.count," entries")})}),(0,l.jsx)("div",{className:"col-sm-12 col-md-7",style:{display:"flex",justifyContent:"flex-end"},children:(0,l.jsx)(t.Z,{itemClass:"page-item",prevPageText:"Previous",nextPageText:"Next",linkClass:"page-link",activePage:a+1,itemsCountPerPage:n,totalItemsCount:s.count,pageRangeDisplayed:5,hideFirstLastPages:!0,onChange:function(e){return r(e-1)}})})]})}},1629:function(e,a,n){n.d(a,{o:function(){return l}});var t=n(184),l=function(e){var a=e.dateTime;return(0,t.jsx)("span",{children:new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:"UTC"}).format(new Date(a))})}},7282:function(e,a,n){n.d(a,{p:function(){return c}});var t=n(9439),l=n(2791),s=n(9930),r=n(3360);var i=n.p+"static/media/trash-icon.ee0252a5a11b0d7959d2605f91ec705d.svg",o=n(184),c=function(e){var a=e.onClick,n=(0,l.useState)(!1),c=(0,t.Z)(n,2),d=c[0],u=c[1],h=function(){u(!1)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("img",{className:"action-item",style:{cursor:"pointer"},src:i,onClick:function(){return u(!0)}}),d?(0,o.jsxs)(s.Z,{show:!0,onHide:h,size:"lg",children:[(0,o.jsxs)(s.Z.Header,{closeButton:!1,children:[(0,o.jsx)(s.Z.Title,{children:"Delete"}),(0,o.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:h,children:(0,o.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,o.jsxs)(s.Z.Body,{children:["Are you sure you want to delete?",(0,o.jsxs)("div",{className:"modal-footer d-flex justify-content-end",children:[(0,o.jsx)(r.Z,{variant:"success",onClick:function(){u(!1),a()},children:" Yes"}),(0,o.jsx)(r.Z,{variant:"danger",onClick:h,children:"No"})]})]})]}):null]})}},2805:function(e,a,n){n.d(a,{d:function(){return s}});n(2791);var t=n.p+"static/media/edit-icon.99f293607452e6df8a5fe12a6b47b2b0.svg",l=n(184),s=function(e){var a=e.onClick;return(0,l.jsx)("img",{style:{cursor:"pointer"},src:t,onClick:a})}},9324:function(e,a,n){n.d(a,{q:function(){return l}});var t=n(184),l=function(e){return null===e.code?(0,t.jsx)("span",{className:"badge badge-pill badge-warning",children:"Null"}):0===e.code?(0,t.jsx)("span",{className:"badge badge-pill badge-danger",children:"Deleted"}):1===e.code?(0,t.jsx)("span",{className:"badge badge-pill badge-success",children:"Active"}):2===e.code?(0,t.jsx)("span",{className:"badge badge-pill badge-warning",children:"Hold"}):void 0}},4794:function(e,a,n){n.r(a),n.d(a,{Vouchers:function(){return B}});var t=n(9439),l=n(2791),s=n(9781),r=n(6403),i=n(3418),o=n(2917),c=n(2805),d=n(2806),u=n(7282),h=n(7883),m=n(1629),f=n(9324),v=n(18),x=n(4849),j=n(5987),g=n(1413),p=n(9930),N=n(5705),y=n(8007),b=(n(8639),n(9513)),C=n.n(b),S=n(8862),Z=n(184),E=(0,y.Ry)({voucherCode:(0,y.Z_)().required("First Name is required"),name:(0,y.Z_)().required("Last Name is required")}),T=function(e){var a=e.initialValues,n=e.onSubmit,s=e.isEdit,r=void 0!==s&&s,i=e.isAdd,o=void 0!==i&&i,c=(0,l.useState)(),u=(0,t.Z)(c,2),h=u[0],m=u[1],f=(0,N.TA)({initialValues:a,onSubmit:function(e,a){(0,a.validateForm)(e).then((function(a){n((0,g.Z)((0,g.Z)({},e),{},{file:h}))}))},validationSchema:E}),v=(0,l.useState)([]),x=(0,t.Z)(v,2),j=x[0],p=x[1];(0,l.useEffect)((function(){d.b.get("/categories").then((function(e){var a,n;return null===(a=e.data)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.map((function(e){return{id:e.id,label:"".concat(e.name)}}))})).then((function(e){p(e),a.categoryId&&a.categoryId&&f.setFieldValue("categorie",e.filter((function(e){return e.id===a.categoryId})))}))}),[]);return(0,Z.jsxs)("form",{onSubmit:f.handleSubmit,children:[(0,Z.jsxs)("div",{className:"row",children:[(0,Z.jsx)("aside",{className:"col-md-4",children:(0,Z.jsxs)("div",{className:"form-group",children:[(0,Z.jsx)("label",{for:"categoryId",children:"categoryId *"}),(0,Z.jsx)(S.pY,{selected:f.values.categorie,id:"categoryId",options:j,onChange:function(e){e&&e.length>0?(f.setFieldValue("categoryId",e[0].id),f.setFieldValue("categorie",e)):(f.setFieldValue("categoryId",""),f.setFieldValue("categorie",[]))},placeholder:"Choose a category"})]})}),(0,Z.jsx)("aside",{className:"col-md-4",children:(0,Z.jsxs)("div",{className:"form-group",children:[(0,Z.jsx)("label",{htmlFor:"rank",children:"Rank"}),(0,Z.jsx)("input",{type:"number",id:"rank",name:"rank",value:f.values.rank,onChange:f.handleChange,onBlur:f.handleBlur,className:"form-control form-control-lg"})]})}),(0,Z.jsx)("aside",{className:"col-md-4",children:(0,Z.jsxs)("div",{className:"form-group",children:[(0,Z.jsx)("label",{for:"voucherValue",children:"VoucherCode"}),(0,Z.jsx)("input",{type:"text",id:"voucherCode",value:f.values.voucherCode,onChange:f.handleChange,onBlur:f.handleBlur,className:"form-control form-control-lg",placeholder:"Enterd voucherCode"})]})}),(0,Z.jsx)("aside",{className:"col-md-4",children:(0,Z.jsxs)("div",{className:"form-group",children:[(0,Z.jsx)("label",{for:"voucherValue",children:"Voucher Value"}),(0,Z.jsx)("input",{type:"number",id:"voucherValue",value:f.values.voucherValue,onChange:f.handleChange,onBlur:f.handleBlur,className:"form-control form-control-lg",placeholder:"Enterd voucherValue"})]})}),(0,Z.jsx)("aside",{className:"col-md-4",children:(0,Z.jsxs)("div",{className:"form-group",children:[(0,Z.jsx)("label",{for:"name",children:"Name"}),(0,Z.jsx)("input",{type:"text",id:"name",value:f.values.name,onChange:f.handleChange,onBlur:f.handleBlur,className:"form-control form-control-lg",placeholder:"Enter Name"})]})}),(0,Z.jsx)("aside",{className:"col-md-4",children:(0,Z.jsxs)("div",{className:"form-group",children:[(0,Z.jsx)("label",{for:"voucherCode",children:"Consumed Count"}),(0,Z.jsx)("input",{type:"number",id:"consumedCount",value:f.values.consumedCount,onChange:f.handleChange,onBlur:f.handleBlur,className:"form-control form-control-lg",placeholder:"Enter consumedCount"})]})}),(0,Z.jsx)("aside",{className:"col-md-4",children:(0,Z.jsxs)("div",{className:"form-group",children:[(0,Z.jsx)("label",{for:"maxUsageCount",children:"MaxUsage Count"}),(0,Z.jsx)("input",{type:"number",id:"maxUsageCount",value:f.values.maxUsageCount,onChange:f.handleChange,onBlur:f.handleBlur,className:"form-control form-control-lg",placeholder:"Enter maxUsageCount",required:"",autoFocus:""})]})}),(0,Z.jsx)("aside",{className:"col-md-4",children:(0,Z.jsxs)("div",{className:"form-group",children:[(0,Z.jsx)("label",{for:"description",children:"Description"}),(0,Z.jsx)("input",{type:"text",id:"description",value:f.values.description,onChange:f.handleChange,onBlur:f.handleBlur,className:"form-control form-control-lg",placeholder:"Enter description"})]})}),(0,Z.jsx)("aside",{className:"col-md-4",children:(0,Z.jsxs)("div",{className:"form-group",children:[(0,Z.jsx)("label",{for:"restrictUsageForUser",children:"RestrictUsageForUser"}),(0,Z.jsx)("input",{type:"text",id:"restrictUsageForUser",value:f.values.restrictUsageForUser,onChange:f.handleChange,onBlur:f.handleBlur,className:"form-control form-control-lg",placeholder:"Enter restrictUsageForUser"})]})}),(0,Z.jsx)("aside",{className:"col-md-4",children:(0,Z.jsxs)("div",{className:"form-group",children:[(0,Z.jsx)("label",{htmlFor:"validityStartDate",children:"validityStartDate"}),(0,Z.jsx)(C(),{selected:f.values.validityStartDate?new Date(f.values.validityStartDate):null,onChange:function(e){f.setFieldValue("validityStartDate",e),f.setFieldTouched("validityStartDate")},className:"form-control"})]})}),(0,Z.jsx)("aside",{className:"col-md-4",children:(0,Z.jsxs)("div",{className:"form-group",children:[(0,Z.jsx)("label",{htmlFor:"validityEndDate",children:"ValidityEndDate"}),(0,Z.jsx)(C(),{selected:f.values.validityEndDate?new Date(f.values.validityEndDate):null,onChange:function(e){f.setFieldValue("validityEndDate",e),f.setFieldTouched("validityEndDate")},className:"form-control"})]})}),r?null:(0,Z.jsx)("aside",{className:"col-md-4",children:(0,Z.jsxs)("div",{className:"form-group",children:[(0,Z.jsx)("label",{htmlFor:"validityStartTime",children:"validityStartTime"}),(0,Z.jsx)(C(),{selected:f.values.validityStartTime?new Date(f.values.validityStartTime):null,onChange:function(e){f.setFieldValue("validityStartTime",e),f.setFieldTouched("validityStartTime")},showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:15,timeCaption:"Time",dateFormat:"h:mm aa",className:"form-control"})]})}),r?null:(0,Z.jsx)("aside",{className:"col-md-4",children:(0,Z.jsxs)("div",{className:"form-group",children:[(0,Z.jsx)("label",{htmlFor:"validityEndTime",children:"validityEndTime"}),(0,Z.jsx)(C(),{selected:f.values.validityEndTime?new Date(f.values.validityEndTime):null,onChange:function(e){f.setFieldValue("validityEndTime",e),f.setFieldTouched("validityEndTime")},showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:15,timeCaption:"Time",dateFormat:"h:mm aa",className:"form-control"})]})}),(0,Z.jsx)("aside",{className:"col-md-4",children:(0,Z.jsxs)("div",{className:"form-group",children:[(0,Z.jsx)("label",{htmlFor:"voucherValueType",children:"VoucherValueType *"}),(0,Z.jsxs)("select",{id:"voucherValueType",className:"form-control select2",onChange:f.handleChange,value:f.values.voucherValueType,children:[(0,Z.jsx)("option",{value:"",children:"voucherValueType"}),(0,Z.jsx)("option",{value:"FREE_PRODUCT",children:"FREE_PRODUCT"}),(0,Z.jsx)("option",{value:"PRICE_PERCENTAGE",children:"PRICE_PERCENTAGE"}),(0,Z.jsx)("option",{value:"PRICE_VALUE",children:"PRICE_VALUE"})]})]})}),(0,Z.jsx)("aside",{className:"col-md-4",children:(0,Z.jsxs)("div",{className:"form-group",children:[(0,Z.jsx)("label",{htmlFor:"status",children:"status"}),(0,Z.jsxs)("select",{id:"status",className:"form-control select2",onChange:f.handleChange,value:f.values.status,children:[(0,Z.jsx)("option",{value:"1",children:"Active"}),(0,Z.jsx)("option",{value:"2",children:"Hold"}),(0,Z.jsx)("option",{value:"0",children:"Deleted"})]})]})}),(0,Z.jsx)("aside",{className:"col-md-4",children:(0,Z.jsxs)("div",{className:"form-group",children:[(0,Z.jsx)("label",{htmlFor:"uploadImage",children:"UploadImage *"}),(0,Z.jsx)("input",{type:"file",id:"uploadImage",name:"uploadImage",onChange:function(e){m(e.target.files[0])},className:"form-control form-control-lg"})]})})]}),o?null:(0,Z.jsx)("aside",{className:"col-md-4",children:f.values.voucherAsset.filePath&&f.values.voucherAsset.filePath?(0,Z.jsx)("img",{src:function(e){var a=e.split("?")[1].split("=")[1];return"https://app.cikka.com.au/api/files/file-preview?fileName=".concat(a,"&folderName=").concat("merchant_offer")}(f.values.voucherAsset.filePath),alt:"logo",className:"form-image-tag"}):(0,Z.jsx)("div",{className:"empty-placeholder",children:"Empty Image"})}),(0,Z.jsx)("div",{className:"modal-footer d-flex justify-content-end",children:(0,Z.jsx)("button",{type:"submit",className:"btn mb-2 btn-primary",children:"Save"})})]})},F=["file"],w=function(e){return d.b.post("/vouchers",e)},D=function(e){return d.b.post("/file-uploads",e).then((function(e){console.log("Full response from FileUpload:",e.data);var a=e.data.id;if(console.log("ID received from FileUpload:",a),a)return{id:a,response:e.data};throw new Error("No ID was received from FileUpload")}))},I=function(e){var a=e.handleSuccess,n=e.handleClose,t=(0,i.D)({mutationFn:w}),l=function(e){t.mutate((0,g.Z)((0,g.Z)({},e),{},{categoryId:"3fa85f64-5717-4562-b3fc-2c963f66afa6",merchantId:"ac875cbe-c8bd-4bf0-8561-6bb2db23372c"}),{onSuccess:a})};return(0,Z.jsxs)(p.Z,{show:!0,onHide:n,size:"lg",children:[(0,Z.jsxs)(p.Z.Header,{closeButton:!1,children:[(0,Z.jsx)(p.Z.Title,{children:"New Voucher"}),(0,Z.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:n,children:(0,Z.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,Z.jsx)(p.Z.Body,{children:(0,Z.jsx)(T,{initialValues:{voucherCode:"",voucherValue:"",rank:"",name:"",consumedCount:"",maxUsageCount:"",restrictUsageForUser:!1,description:"",validityEndDate:"",validityStartDate:"",validityStartTime:"",validityEndTime:"",voucherValueType:"",status:""},onSubmit:function(e){var a=e.file,n=(0,j.Z)(e,F);if(console.log("handleSubmit called"),console.log("file:",a),a)(function(e){var a=new FormData;return a.append("file",e),a.append("folderName","merchant_offer"),d.b.post("/files/file-upload",a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){var a={documentId:"b1ed4fc9-ec83-491d-b669-07806177eae7",fileName:e.data.fileName,filePath:e.data.url,folderName:"merchant_offer"};return D(a)}))})(a).then((function(e){if(e){var a=e.id;if(a){console.log("Received ID:",a);var t=(0,g.Z)((0,g.Z)({},n),{},{voucherAssetId:a});l(t)}else console.log("No ID was received"),l(n)}else console.log("No result from FileUpload")})).catch((function(e){console.error("Error:",e)}));else if(a)l(n);else{console.log("Adding demo ID:");var t=(0,g.Z)((0,g.Z)({},n),{},{voucherAssetId:"2b962d4d-1050-4190-ad18-7d3491c3a0fe"});l(t)}},isAdd:!0})})]})},k=["file"],V=function(e){var a=(new Date).toISOString().split("T")[0],n="".concat(a,"T").concat(e.validityStartTime),t="".concat(a,"T").concat(e.validityEndTime),l=(0,g.Z)((0,g.Z)({},e),{},{validityStartTime:n,validityEndTime:t});return d.b.put("/vouchers/".concat(e.id),l)},U=function(e){return d.b.post("/file-uploads",e).then((function(e){console.log("Full response from FileUpload:",e.data);var a=e.data.id;if(console.log("ID received from FileUpload:",a),a)return{id:a,response:e.data};throw new Error("No ID was received from FileUpload")}))},A=function(e){var a=e.handleSuccess,n=e.handleClose,t=e.id,l=(0,o.a)({queryKey:["voucher-details",t],queryFn:function(){return function(e){return d.b.get("/vouchers/".concat(e)).then((function(e){return e.data}))}(t)}}),s=l.data,r=(0,i.D)({mutationFn:V}),c=function(e){console.log(e),r.mutate((0,g.Z)((0,g.Z)({},e),{},{id:t}),{onSuccess:a})};return(0,Z.jsx)(Z.Fragment,{children:s&&(0,Z.jsxs)(p.Z,{show:!0,onHide:n,size:"lg",children:[(0,Z.jsxs)(p.Z.Header,{closeButton:!1,children:[(0,Z.jsx)(p.Z.Title,{children:"Edit Voucher"}),(0,Z.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:n,children:(0,Z.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,Z.jsx)(p.Z.Body,{children:(0,Z.jsx)(T,{initialValues:s,onSubmit:function(e){var a=e.file,n=(0,j.Z)(e,k);console.log("handleSubmit called"),console.log("file:",a),a?function(e){var a=new FormData;return a.append("file",e),a.append("folderName","merchant_offer"),d.b.post("/files/file-upload",a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){var a={documentId:"b1ed4fc9-ec83-491d-b669-07806177eae7",fileName:e.data.fileName,filePath:e.data.url,folderName:"merchant_offer"};return U(a)}))}(a).then((function(e){if(e){var a=e.id;if(a){console.log("Received ID:",a);var t=(0,g.Z)((0,g.Z)({},n),{},{voucherAssetId:a});c(t)}else console.log("No ID was received"),c(n)}else console.log("No result from FileUpload")})).catch((function(e){console.error("Error:",e)})):c(n)},isEdit:!0})})]})})},P=function(e){return d.b.delete("/vouchers/".concat(e))},B=function(){var e,a,n=(0,r.NL)(),j=(0,l.useState)(0),g=(0,t.Z)(j,2),p=g[0],N=g[1],y=(0,l.useState)(!1),b=(0,t.Z)(y,2),C=b[0],S=b[1],E=(0,l.useState)(!1),T=(0,t.Z)(E,2),F=T[0],w=T[1],D=(0,l.useState)(),k=(0,t.Z)(D,2),V=k[0],U=k[1],B=(0,l.useState)(""),R=(0,t.Z)(B,2),_=R[0],L=R[1],q=(0,l.useState)(""),H=(0,t.Z)(q,2),O=H[0],z=H[1],K=(0,l.useState)(""),M=(0,t.Z)(K,2),G=M[0],Y=M[1],$=(0,l.useState)(""),Q=(0,t.Z)($,2),J=Q[0],W=Q[1],X=(0,l.useState)([]),ee=(0,t.Z)(X,2),ae=ee[0],ne=ee[1],te=(0,l.useState)(""),le=(0,t.Z)(te,2),se=le[0],re=le[1],ie=(0,l.useState)(!1),oe=(0,t.Z)(ie,2),ce=oe[0],de=oe[1],ue=(0,i.D)({mutationFn:P}),he=(0,o.a)({queryKey:["vouchers",p,_,O,G,J,se],queryFn:function(){return function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,a=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,t=arguments.length>4?arguments[4]:void 0,l=arguments.length>5?arguments[5]:void 0,s=arguments.length>6?arguments[6]:void 0,r="/vouchers?pageIndex=".concat(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,"&pageSize=").concat(e,"&search=").concat(a,"&sortBy=").concat(n,"&sortOrder=").concat(t,"&status=").concat(l);return s&&(r+="&categoryId=".concat(s)),d.b.get(r).then((function(e){return e.data}))}(p,20,_,O,G,J,se)},keepPreviousData:!0}),me=he.isLoading,fe=he.data,ve=he.refetch,xe=function(e){return function(){ue.mutate(e,{onSuccess:ve,onError:function(e){de(!0),setTimeout((function(){de(!1)}),3e3)}})}};(0,l.useEffect)((function(){d.b.get("/categories").then((function(e){return e.data})).then((function(e){ne(e)})).catch((function(e){console.error("Error fetching categories:",e)}))}),[]);var je=(0,l.useState)([]),ge=(0,t.Z)(je,2),pe=ge[0],Ne=ge[1];(0,l.useEffect)((function(){d.b.get("/categories").then((function(e){return e.data})).then((function(e){Ne(e),console.log(e)})).catch((function(e){console.error("Error fetching categories:",e)}))}),[]);var ye=(0,l.useState)([]),be=(0,t.Z)(ye,2),Ce=be[0],Se=be[1];(0,l.useEffect)((function(){d.b.get("/users").then((function(e){return e.data})).then((function(e){Se(e),console.log(e)})).catch((function(e){console.error("Error fetching categories:",e)}))}),[]);var Ze=function(e,a){var n=e.split("?")[1].split("=")[1];return"https://app.cikka.com.au/api/files/file-preview?fileName=".concat(n,"&folderName=").concat(a)};return(0,Z.jsxs)(Z.Fragment,{children:[ce?(0,Z.jsxs)(v.Z,{variant:"danger",onClose:function(){return ce(!1)},children:[(0,Z.jsx)(v.Z.Heading,{children:"Server Error!"}),(0,Z.jsx)("p",{children:"Can not user"})]}):null,(0,Z.jsx)("div",{className:"row justify-content-center",children:(0,Z.jsxs)("div",{className:"col-12",children:[(0,Z.jsxs)("div",{className:"row heading-add",children:[(0,Z.jsx)("aside",{className:"ml-2",children:(0,Z.jsx)("h2",{className:"mb-0 page-title",children:"Vouchers"})}),(0,Z.jsx)("form",{className:"form-inline mr-auto searchform",children:(0,Z.jsx)("input",{className:"form-control mr-sm-2 border-0",onChange:function(e){var a=e.target.value;L(a),ve()},type:"text",style:{background:"white"},placeholder:"Search","aria-label":"Search"})}),(0,Z.jsx)("aside",{className:"col-sm-2 mt-2 add-sec",children:(0,Z.jsx)("button",{className:"bttn",onClick:function(){return S(!0)},children:"Add"})})]}),(0,Z.jsxs)("div",{className:"d-flex flex-wrap",children:[(0,Z.jsx)("div",{className:"col-sm-4 mt-2",children:(0,Z.jsxs)("select",{id:"categoryId",className:"form-control",value:se,onChange:function(e){var a=e.target.value;re(a),ve()},children:[(0,Z.jsx)("option",{value:"",children:"Choose a category"}),null===ae||void 0===ae||null===(e=ae.data)||void 0===e?void 0:e.map((function(e){return(0,Z.jsx)("option",{value:e.id,children:e.name},e.id)}))]})}),(0,Z.jsx)("div",{className:"col-sm-2 mt-2",children:(0,Z.jsxs)("select",{className:"form-control",onChange:function(e){var a=e.target.value;z(a),console.log(a),ve()},style:{background:"white"},"aria-label":"select",children:[(0,Z.jsx)("option",{value:"",children:"sortBy"}),(0,Z.jsx)("option",{value:"id",children:"ID"}),(0,Z.jsx)("option",{value:"rank",children:"Rank"})]})}),(0,Z.jsx)("div",{className:"col-sm-4 mt-2",children:(0,Z.jsxs)("select",{className:"form-control",onChange:function(e){var a=e.target.value;Y(a),console.log(a),ve()},style:{background:"white"},"aria-label":"select",children:[(0,Z.jsx)("option",{value:"",children:"sortOrder"}),(0,Z.jsx)("option",{value:"ASC",children:"ASC"}),(0,Z.jsx)("option",{value:"DESC",children:"DESC"})]})}),(0,Z.jsx)("div",{className:"col-sm-2 mt-2",children:(0,Z.jsxs)("select",{className:"form-control",onChange:function(e){var a=e.target.value;W(a),console.log(a),ve()},style:{background:"white"},"aria-label":"select",children:[(0,Z.jsx)("option",{value:"",children:"STATUS"}),(0,Z.jsx)("option",{value:"1",children:"Active"}),(0,Z.jsx)("option",{value:"2",children:"Hold"}),(0,Z.jsx)("option",{value:"0",children:"Deleted"})]})})]}),(0,Z.jsx)("div",{className:"row my-2",children:(0,Z.jsx)("div",{className:"col-md-12",children:(0,Z.jsx)("div",{className:"card shadow",children:(0,Z.jsxs)("div",{className:"card-body",children:[(0,Z.jsx)("div",{className:"resp-table vouchers-tb",children:(0,Z.jsxs)("table",{className:"table",children:[(0,Z.jsx)("thead",{children:(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("th",{children:"Actions"}),(0,Z.jsx)("th",{children:"Status"}),(0,Z.jsx)("th",{children:"Logo"}),(0,Z.jsx)("th",{children:"Rank"}),(0,Z.jsx)("th",{children:"VoucherCode"}),(0,Z.jsx)("th",{children:"Name"}),(0,Z.jsx)("th",{children:"Description"}),(0,Z.jsx)("th",{children:"MerchantId"}),(0,Z.jsx)("th",{children:"CategoryId"}),(0,Z.jsx)("th",{children:"VoucherAssetId"}),(0,Z.jsx)("th",{children:"VoucherValue"}),(0,Z.jsx)("th",{children:"VoucherValueType"}),(0,Z.jsx)("th",{children:"ValidityStartDate"}),(0,Z.jsx)("th",{children:"ValidityEndDate"}),(0,Z.jsx)("th",{children:"RestrictUsageForUser"}),(0,Z.jsx)("th",{children:"MaxUsageCount"}),(0,Z.jsx)("th",{children:"ConsumedCount"}),(0,Z.jsx)("th",{children:"CreatedBy"}),(0,Z.jsx)("th",{children:"UpdatedBy"}),(0,Z.jsx)("th",{children:"CreatedAt"}),(0,Z.jsx)("th",{children:"UpdatedAt"})]})}),(0,Z.jsx)("tbody",{children:me?(0,Z.jsx)("tr",{children:(0,Z.jsx)("td",{rowSpan:"10",colSpan:"8",children:(0,Z.jsx)("div",{className:"text-center py-5",children:(0,Z.jsx)(x.Z,{animation:"border"})})})}):null===fe||void 0===fe||null===(a=fe.data)||void 0===a?void 0:a.map((function(e){var a,n,t,l,r,i,o;return(0,Z.jsxs)("tr",{children:[(0,Z.jsxs)("td",{className:"actions",children:[(0,Z.jsx)(c.d,{onClick:(o=e.id,function(){U(o),w(!0)})}),(0,Z.jsx)(u.p,{onClick:xe(e.id)})]}),(0,Z.jsx)("td",{children:(0,Z.jsx)(f.q,{code:e.status})}),(0,Z.jsx)("td",{children:e.voucherAsset.filePath&&e.voucherAsset.filePath?(0,Z.jsx)("img",{src:Ze(e.voucherAsset.filePath,e.voucherAsset.folderName),alt:"logo",className:"table-logo"}):(0,Z.jsx)("img",{src:s,alt:"demoLogo",className:"table-logo"})}),(0,Z.jsx)("td",{children:e.rank}),(0,Z.jsx)("td",{children:e.voucherCode}),(0,Z.jsx)("td",{children:_&&e.name.toLowerCase().includes(_.toLowerCase())?(0,Z.jsx)("span",{className:"highlighted",children:e.name}):e.name}),(0,Z.jsx)("td",{children:e.description}),(0,Z.jsx)("td",{children:e.merchantId}),(0,Z.jsx)("td",{children:(null===pe||void 0===pe||null===(a=pe.data)||void 0===a||null===(n=a.find((function(a){return a.id===e.categoryId})))||void 0===n?void 0:n.name)||e.categoryId}),(0,Z.jsx)("td",{children:e.voucherAssetId}),(0,Z.jsx)("td",{children:e.voucherValue}),(0,Z.jsx)("td",{children:e.voucherValueType}),(0,Z.jsx)("td",{children:e.validityStartDate}),(0,Z.jsx)("td",{children:e.validityEndDate}),(0,Z.jsx)("td",{children:e.restrictUsageForUser}),(0,Z.jsx)("td",{children:e.maxUsageCount}),(0,Z.jsx)("td",{children:e.consumedCount}),(0,Z.jsx)("td",{children:(null===Ce||void 0===Ce||null===(t=Ce.data)||void 0===t||null===(l=t.find((function(a){return a.id===e.createdBy})))||void 0===l?void 0:l.firstName)||"N/A"}),(0,Z.jsx)("td",{children:(null===Ce||void 0===Ce||null===(r=Ce.data)||void 0===r||null===(i=r.find((function(a){return a.id===e.updatedBy})))||void 0===i?void 0:i.firstName)||"N/A"}),(0,Z.jsx)("td",{children:(0,Z.jsx)(m.o,{dateTime:e.createdAt})}),(0,Z.jsx)("td",{children:(0,Z.jsx)(m.o,{dateTime:e.updatedAt})})]},e.id)}))})]})}),me?null:(0,Z.jsx)(h.$,{page:p,pageSize:20,data:fe,setPage:N})]})})})})]})}),C?(0,Z.jsx)(I,{handleSuccess:function(){S(!1),ve()},handleClose:function(){return S(!1)}}):null,F?(0,Z.jsx)(A,{id:V,handleSuccess:function(){n.invalidateQueries({queryKey:["voucher-details",V]}),w(!1),ve()},handleClose:function(){return w(!1)}}):null]})}},18:function(e,a,n){n.d(a,{Z:function(){return Z}});var t=n(1413),l=n(5987),s=n(1694),r=n.n(s),i=n(2791),o=n(239),c=n(9007),d=n(162),u=n(7472),h=n(184),m=["className","bsPrefix","as"],f=(0,u.Z)("h4");f.displayName="DivStyledAsH4";var v=i.forwardRef((function(e,a){var n=e.className,s=e.bsPrefix,i=e.as,o=void 0===i?f:i,c=(0,l.Z)(e,m);return s=(0,d.vE)(s,"alert-heading"),(0,h.jsx)(o,(0,t.Z)({ref:a,className:r()(n,s)},c))}));v.displayName="AlertHeading";var x=v,j=n(6445),g=["className","bsPrefix","as"],p=i.forwardRef((function(e,a){var n=e.className,s=e.bsPrefix,i=e.as,o=void 0===i?j.Z:i,c=(0,l.Z)(e,g);return s=(0,d.vE)(s,"alert-link"),(0,h.jsx)(o,(0,t.Z)({ref:a,className:r()(n,s)},c))}));p.displayName="AlertLink";var N=p,y=n(4418),b=n(473),C=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],S=i.forwardRef((function(e,a){var n=(0,o.Ch)(e,{show:"onClose"}),s=n.bsPrefix,i=n.show,u=void 0===i||i,m=n.closeLabel,f=void 0===m?"Close alert":m,v=n.closeVariant,x=n.className,j=n.children,g=n.variant,p=void 0===g?"primary":g,N=n.onClose,S=n.dismissible,Z=n.transition,E=void 0===Z?y.Z:Z,T=(0,l.Z)(n,C),F=(0,d.vE)(s,"alert"),w=(0,c.Z)((function(e){N&&N(!1,e)})),D=!0===E?y.Z:E,I=(0,h.jsxs)("div",(0,t.Z)((0,t.Z)({role:"alert"},D?void 0:T),{},{ref:a,className:r()(x,F,p&&"".concat(F,"-").concat(p),S&&"".concat(F,"-dismissible")),children:[S&&(0,h.jsx)(b.Z,{onClick:w,"aria-label":f,variant:v}),j]}));return D?(0,h.jsx)(D,(0,t.Z)((0,t.Z)({unmountOnExit:!0},T),{},{ref:void 0,in:u,children:I})):u?I:null}));S.displayName="Alert";var Z=Object.assign(S,{Link:N,Heading:x})}}]);
//# sourceMappingURL=794.78f9caca.chunk.js.map