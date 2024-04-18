"use strict";(self.webpackChunksikka_admin_app=self.webpackChunksikka_admin_app||[]).push([[881],{2806:function(e,t,a){a.d(t,{b:function(){return s}});var s=a(1243).Z.create({baseURL:"https://app.cikka.com.au/api"});s.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers.Authorization="Bearer "+t),e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}))},8881:function(e,t,a){a.r(t),a.d(t,{ViewIndustriesLineChart:function(){return l}});var s=a(9439),r=a(2791),n=a(2917),i=a(1087),c=a(2806),o=a(3623),d=a(184),l=function(){var e=(0,n.a)({queryKey:["industries"],queryFn:function(){return c.b.get("/industries?pageIndex=0&pageSize=200&sortBy=createdAt").then((function(e){return e.data}))},keepPreviousData:!0}),t=e.isLoading,a=e.data,l=(e.refetch,(0,r.useState)(10)),u=(0,s.Z)(l,2),h=u[0],p=u[1],m=t||!a?[]:function(e,t){if(!e||!e.data)return[];var a=new Date;a.setHours(0,0,0,0);var s=new Date(a);return s.setDate(s.getDate()-(t-1)),Array.from({length:t},(function(t,a){var r=new Date(s);return r.setDate(r.getDate()+a),e.data.filter((function(e){return new Date(e.createdAt.split("T")[0]).toDateString()===r.toDateString()})).length}))}(a,h),f=function(e){for(var t=[],a=new Date,s=e-1;s>=0;s--){var r=new Date(a);r.setDate(r.getDate()-s);var n=r.toLocaleDateString("en-US",{day:"numeric",month:"short"});t.push("Day ".concat(e-s,": ").concat(n))}return t}(h),v={labels:f,datasets:[{label:"Industries",data:m,backgroundColor:"rgba(5, 225, 255, 0.5)",borderColor:"#05e1ff",pointRadius:5,tension:.4}]};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:"row justify-content-center",children:(0,d.jsxs)("div",{className:"col-12",children:[(0,d.jsxs)("div",{className:"row heading-add",children:[(0,d.jsx)("aside",{className:"col-sm-10 mt-3 mb-3",children:(0,d.jsx)(i.OL,{to:"/Dashboard",children:(0,d.jsx)("i",{className:"fe fe-arrow-left-circle fe-24"})})}),(0,d.jsx)("aside",{className:"col-sm-9",children:(0,d.jsx)("h2",{className:"mb-0 page-title",children:"View Industries detalies"})}),(0,d.jsx)("aside",{className:"col-sm-3 mt-2  add-sec",children:(0,d.jsxs)("select",{className:"form-control",style:{background:"white"},"aria-label":"select",onChange:function(e){var t=parseInt(e.target.value);p(t)},value:h,children:[(0,d.jsx)("option",{value:"10",children:"Choose a Type"}),(0,d.jsx)("option",{value:"20",children:"Last 20 day's"}),(0,d.jsx)("option",{value:"30",children:"Last 30 day's"}),(0,d.jsx)("option",{value:"45",children:"Last 45 day's"}),(0,d.jsx)("option",{value:"60",children:"Last 60 day's"}),(0,d.jsx)("option",{value:"90",children:"Last 90 day's"})]})})]}),(0,d.jsx)("div",{className:"row my-2",children:(0,d.jsx)("div",{className:"col-md-12",children:(0,d.jsx)("div",{className:"card shadow",children:(0,d.jsx)("div",{className:"card-body",children:(0,d.jsx)("div",{className:"row",children:(0,d.jsx)(o.x1,{data:v,options:{responsive:!0,scales:{x:{type:"category",grid:{display:!1}}},plugins:{legend:{position:"top"},title:{display:!0,text:"Industries createdAt"}},elements:{point:{radius:0}},hover:{mode:"nearest",intersect:!1},interaction:{mode:"index",intersect:!1}},className:"p-3"})})})})})})]})})})}}}]);
//# sourceMappingURL=881.bf731676.chunk.js.map