(this.webpackJsonpcrema=this.webpackJsonpcrema||[]).push([[17],{1240:function(e,a,t){"use strict";var n=t(45),i=t(61);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=i(t(0)),r=(0,n(t(67)).default)(c.createElement("path",{d:"M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"}),"Navigation");a.default=r},1241:function(e,a,t){"use strict";var n=t(45),i=t(61);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=i(t(0)),r=(0,n(t(67)).default)(c.createElement("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");a.default=r},1242:function(e,a,t){"use strict";var n=t(45),i=t(61);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=i(t(0)),r=(0,n(t(67)).default)(c.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"}),"Backup");a.default=r},1243:function(e,a,t){"use strict";var n=t(45),i=t(61);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=i(t(0)),r=(0,n(t(67)).default)(c.createElement("path",{d:"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"}),"Restore");a.default=r},1267:function(e,a,t){"use strict";t.r(a);var n=t(20),i=t(0),c=t(14),r=t(341),s=t(233),l=t(565),d=t(533),o=t(1240),m=t.n(o),u=t(470),j=t(1241),b=t.n(j),f=t(1242),h=t.n(f),v=t(1243),x=t.n(v),O=t(1008),p=t(21),g=t(1),y=Object(u.a)((function(e){return{container:{flexWrap:"wrap"},margin:{margin:e.spacing(1),flex:1},extendedIcon:{marginRight:e.spacing(1)},row:{display:"flex",alignItems:"center",margin:e.spacing(3)},centerRow:{display:"flex",justifyContent:"center",margin:e.spacing(3)}}}));a.default=function(){var e=y(),a=Object(c.d)(),t=Object(c.e)((function(e){return e.settings})),o=t.refDomain,u=t.specDomain,j=t.clientDomain,f=t.cookieCheckDomain,v=Object(i.useState)(o),k=Object(n.a)(v,2),N=k[0],C=k[1],D=Object(i.useState)(u),w=Object(n.a)(D,2),I=w[0],z=w[1],S=Object(i.useState)(j),R=Object(n.a)(S,2),M=R[0],P=R[1],W=Object(i.useState)(f),L=Object(n.a)(W,2),_=L[0],E=L[1];Object(i.useEffect)((function(){a(Object(p.g)()),C(o),z(u),P(j),E(f)}),[a,o,u,j,f]);var H=Object(i.useState)(new File([],"unknown")),V=Object(n.a)(H,2),B=V[0],F=V[1];return Object(g.jsx)(s.a,{animation:"transition.slideUpIn",delay:200,children:Object(g.jsxs)(r.a,{children:[Object(g.jsx)(O.b,{validateOnChange:!0,initialValues:{},onSubmit:function(e,t){var n=t.setSubmitting;n(!0),a(Object(p.m)(N,I,M,_)),n(!1)},children:function(a){var t=a.isSubmitting;return Object(g.jsxs)(O.a,{className:e.container,noValidate:!0,autoComplete:"off",children:[Object(g.jsxs)("div",{className:e.row,children:[Object(g.jsxs)(d.a,{variant:"extended",size:"medium",color:"primary","aria-label":"add",className:e.margin,children:[Object(g.jsx)(m.a,{className:e.extendedIcon}),"Reference Domain"]}),Object(g.jsx)(l.a,{id:"ref-domain",label:"Reference Domain",value:N,onChange:function(e){return C(e.target.value)},style:{margin:8,flex:3},fullWidth:!0,margin:"normal",variant:"outlined",name:"refDomain",InputLabelProps:{shrink:!0}})]}),Object(g.jsxs)("div",{className:e.row,children:[Object(g.jsxs)(d.a,{variant:"extended",size:"medium",color:"primary","aria-label":"add",className:e.margin,children:[Object(g.jsx)(m.a,{className:e.extendedIcon}),"Redirecting Domain"]}),Object(g.jsx)(l.a,{id:"redirecting-domain",label:"Redirecting Domain",value:I,onChange:function(e){return z(e.target.value)},style:{margin:8,flex:3},fullWidth:!0,margin:"normal",variant:"outlined",name:"specDomain",InputLabelProps:{shrink:!0}})]}),Object(g.jsxs)("div",{className:e.row,children:[Object(g.jsxs)(d.a,{variant:"extended",size:"medium",color:"primary","aria-label":"add",className:e.margin,children:[Object(g.jsx)(m.a,{className:e.extendedIcon}),"Main Domain"]}),Object(g.jsx)(l.a,{id:"main-domain",label:"Main Domain",value:M,onChange:function(e){return P(e.target.value)},style:{margin:8,flex:3},fullWidth:!0,margin:"normal",variant:"outlined",name:"clientDomain",InputLabelProps:{shrink:!0}})]}),Object(g.jsxs)("div",{className:e.row,children:[Object(g.jsxs)(d.a,{variant:"extended",size:"medium",color:"primary","aria-label":"add",className:e.margin,children:[Object(g.jsx)(m.a,{className:e.extendedIcon}),"Cookie Check Domain"]}),Object(g.jsx)(l.a,{id:"cookie-check-domain",label:"Cookie Check Domain",value:_,onChange:function(e){return E(e.target.value)},style:{margin:8,flex:3},fullWidth:!0,margin:"normal",variant:"outlined",name:"cookieCheckDomain",InputLabelProps:{shrink:!0}})]}),Object(g.jsx)("div",{className:e.centerRow,children:Object(g.jsxs)(d.a,{variant:"extended",size:"medium",type:"submit",color:"primary","aria-label":"add",disabled:t,children:[Object(g.jsx)(b.a,{className:e.extendedIcon}),"SAVE"]})})]})}}),Object(g.jsxs)(r.a,{style:{padding:10,borderStyle:"solid",borderLeftWidth:0,borderRightWidth:0,borderBottomWidth:0,borderTopWidth:1,display:"flex"},children:[Object(g.jsxs)("a",{href:"/admin/api/settings/backup",download:"blockchaindb",style:{marginRight:50},children:[Object(g.jsx)(h.a,{className:e.extendedIcon}),"Backup"]}),Object(g.jsxs)("div",{style:{display:"flex"},children:[Object(g.jsx)("input",{type:"file",name:"file",onChange:function(e){F(e.target.files[0])}}),Object(g.jsx)("div",{children:Object(g.jsxs)("button",{onClick:function(){var e=new FormData;e.append("File",B),fetch("/admin/api/settings/restore",{method:"POST",body:e}).then((function(e){return e.json()})).then((function(e){alert("Restore successed"),console.log("Success:",e)})).catch((function(e){console.error("Error:",e)}))},children:[Object(g.jsx)(x.a,{className:e.extendedIcon}),"Restore"]})})]})]})]})})}}}]);
//# sourceMappingURL=17.72e5bd1b.chunk.js.map