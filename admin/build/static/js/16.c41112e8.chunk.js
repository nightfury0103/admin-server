(this.webpackJsonpcrema=this.webpackJsonpcrema||[]).push([[16],{1e3:function(e,t,a){"use strict";var n=a(9),c=a(0),i=a(21),l=a(14),r=a(420),o=a(341),s=a(574),d=a(384),b=a(50),u=a.n(b),j=a(8),p=a(507),h=a(3),x=a(470),f=function(e,t){return e===j.f.HOR_DARK_LAYOUT||e===j.f.HOR_LIGHT_NAV||e===j.f.H_DEFAULT?t>=1280?144:80:e===j.f.BIT_BUCKET?0:t>=600?70:60},m=Object(x.a)((function(e){var t;return{appsContainer:function(t){var a;return a={height:"calc(100vh - ".concat(75+f(t.navStyle,0)+(t.footer?70:10),"px) !important")},Object(h.a)(a,e.breakpoints.up("sm"),{height:"calc(100vh - ".concat(75+f(t.navStyle,600)+(t.footer?70:10),"px) !important")}),Object(h.a)(a,e.breakpoints.up("md"),{height:"calc(100vh - ".concat(85+f(t.navStyle,960)+(t.footer?80:10),"px) !important")}),Object(h.a)(a,e.breakpoints.up("lg"),{height:"calc(100vh - ".concat(73+f(t.navStyle,1280)+(t.footer?80:10),"px) !important")}),Object(h.a)(a,e.breakpoints.up("xl"),{height:"calc(100vh - ".concat(94+f(t.navStyle,1920)+(t.footer?86:10),"px) !important")}),Object(h.a)(a,"display","flex"),a},appsSidebar:(t={height:"100%"},Object(h.a)(t,e.breakpoints.up("lg"),{width:"17rem"}),Object(h.a)(t,e.breakpoints.up("xl"),{width:"20rem"}),t),appsMainContent:function(t){var a;return a={width:"100%",display:"flex",flexDirection:"column"},Object(h.a)(a,e.breakpoints.up("lg"),{width:"calc(100% - ".concat(t.fullView?0:17,"rem)"),paddingLeft:t.fullView?0:40}),Object(h.a)(a,e.breakpoints.up("xl"),{width:"calc(100% - ".concat(t.fullView?0:20,"rem)")}),a},menuButton:{marginRight:e.spacing(2)},menuIcon:{width:35,height:35},appSidebarDrawer:{width:"19rem","& .listItem":{zIndex:1305}},scLauncher:{"& .sc-header, & .sc-message--content.sent .sc-message--text, & .sc-header--close-button:hover":{backgroundColor:"".concat(e.palette.primary.main," !important")}}}})),O=a(26),g=a(88),v=a(4),w=a(1),y=function(e){var t=e.isAppDrawerOpen,a=e.footer,n=e.navStyle,c=e.fullView,r=e.sidebarContent,d=Object(l.d)(),b=m({footer:a,navStyle:n,fullView:c});return Object(w.jsxs)(o.a,{className:b.appsSidebar,children:[Object(w.jsx)(s.a,{lgUp:!0,children:Object(w.jsx)(g.a,{open:t,onClose:function(){return d(Object(i.q)())},classes:{paper:Object(v.a)(b.appSidebarDrawer)},style:{position:"absolute"},children:r})}),Object(w.jsx)(s.a,{mdDown:!0,children:Object(w.jsx)(p.a,{style:{height:"100%"},children:r})})]})};t.a=function(e){var t=e.title,a=void 0===t?"":t,b=e.cardStyle,h=e.sidebarContent,x=e.fullView,f=void 0!==x&&x,g=e.children,v=Object(l.d)(),C=Object(l.e)((function(e){return e.common})).isAppDrawerOpen,k=Object(c.useContext)(O.a),N=k.footer,S=k.navStyle,R=m({footer:N,navStyle:S,fullView:f});return Object(w.jsxs)(o.a,{pt:{xl:4},flex:1,display:"flex",flexDirection:"column",children:[Object(w.jsxs)(o.a,{mb:{xs:f?4:2,lg:f?5:4},mt:{xs:f?0:-3,lg:0},display:"flex",alignItems:"center",children:[f?null:Object(w.jsx)(s.a,{lgUp:!0,children:Object(w.jsx)(d.a,{edge:"start",className:R.menuButton,color:"inherit","aria-label":"open drawer",onClick:function(){return v(Object(i.q)())},children:Object(w.jsx)(u.a,{className:R.menuIcon})})}),Object(w.jsx)(o.a,{component:"h2",color:"text.primary",fontWeight:j.b.BOLD,fontSize:16,children:a})]}),Object(w.jsxs)(o.a,{className:R.appsContainer,children:[h?Object(w.jsx)(y,{isAppDrawerOpen:C,footer:N,fullView:f,navStyle:S,sidebarContent:h}):null,Object(w.jsxs)(o.a,{className:R.appsMainContent,children:[Object(w.jsx)(p.a,{style:Object(n.a)({height:"100%",display:"flex",flexDirection:"column"},b),children:g}),Object(w.jsx)(r.a,{})]})]})]})}},1005:function(e,t,a){"use strict";var n=a(0),c=a.n(n),i=a(557),l=a(560),r=a(558),o=a(559),s=a(562),d=a(470),b=a(176),u=a(8),j=a(1),p=Object(d.a)((function(){return{tableRowRoot:{color:b.a[500]},tableCellRoot:{borderBottom:"0 none",fontSize:13,padding:8,fontWeight:u.b.BOLD,"&:first-child":{paddingLeft:20},"&:last-child":{paddingRight:20}}}})),h=function(){var e=p();return Object(j.jsxs)(s.a,{className:e.tableRowRoot,children:[Object(j.jsx)(o.a,{className:e.tableCellRoot,children:"User ID"}),Object(j.jsx)(o.a,{align:"left",className:e.tableCellRoot,children:"User IP"}),Object(j.jsx)(o.a,{align:"left",className:e.tableCellRoot,children:"Country"}),Object(j.jsx)(o.a,{align:"left",className:e.tableCellRoot,children:"First Visit"}),Object(j.jsx)(o.a,{align:"left",className:e.tableCellRoot,children:"Status"}),Object(j.jsx)(o.a,{align:"left",className:e.tableCellRoot,children:"Balance"}),Object(j.jsx)(o.a,{align:"right",className:e.tableCellRoot,children:"Actions"})]})},x=a(4),f=a(341),m=Object(d.a)((function(e){return{tableCell:{fontSize:13,padding:8,"&:first-child":{paddingLeft:20},"&:last-child":{paddingRight:20}},whiteSpace:{whiteSpace:"nowrap"},anchar:{color:e.palette.primary.main,borderBottom:"1px solid ".concat(e.palette.primary.main),display:"inline-block"},badgeRoot:{padding:"3px 5px",borderRadius:4,fontSize:14,display:"inline-block"}}})),O=a(20),g=a(38),v=a(266),w=a(472),y=a(394),C=a(384),k=a(55),N=a.n(k),S=a(21),R=a(14),D=a(550),P=a(403),B=function(e){var t=e.uid,a=e.blocked,n=c.a.useState(!1),i=Object(O.a)(n,2),l=i[0],r=i[1],o=c.a.useState(null),s=Object(O.a)(o,2),d=s[0],b=s[1],u=Object(g.g)(),p=Object(R.d)(),h=Boolean(d);return Object(j.jsxs)(f.a,{children:[Object(j.jsx)(C.a,{"aria-controls":"fade-menu","aria-haspopup":"true",onClick:function(e){b(e.currentTarget)},children:Object(j.jsx)(N.a,{})}),Object(j.jsxs)(v.a,{id:"fade-menu",anchorEl:d,keepMounted:!0,open:h,onClose:function(){b(null)},TransitionComponent:y.a,children:[Object(j.jsx)(w.a,{style:{fontSize:14},onClick:function(){u.push("/users/view/"+t),b(null)},children:"View User"}),Object(j.jsx)(w.a,{style:{fontSize:14},onClick:function(){!function(e){p(Object(S.c)(t,!e)),b(null)}(a)},children:a?"Unblock User":"Block User"})]}),Object(j.jsx)(D.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:l,autoHideDuration:6e3,onClose:function(e,t){r(!1)},children:Object(j.jsx)(P.a,{className:"success","aria-describedby":"client-snackbar",message:Object(j.jsx)("span",{id:"client-snackbar",children:"Blocked User"})})})]})},V=a(1009),I=a.n(V),U=a(1010),L=a.n(U),A=a(423),_=a.n(A),H=a(1002),W=function(e){try{var t=JSON.parse(e.balance);if(t.wallet)return L()(t.info.symbol_local.code)+" "+(t.wallet.final_balance/t.info.symbol_local.conversion).toFixed(3)}catch(a){return 0}},z=function(e){var t=e.data,a=m(),n=function(){switch(t.status){case"Pending":return"#F84E4E";case"Delivered":return"#43C888";default:return"#E2A72E"}};return Object(j.jsxs)(s.a,{className:"item-hover",children:[Object(j.jsxs)(o.a,{component:"th",scope:"row",className:a.tableCell,children:[Object(j.jsx)(f.a,{mr:4,mt:1.5,style:{height:10,maxWidth:10,borderRadius:"50%",backgroundColor:t.pin?"rgb(10, 143, 220)":t.blocked?"rgb(244, 77, 80)":"white",display:"inline-block",verticalAlign:"middle",padding:5}}),Object(j.jsx)(f.a,{className:a.anchar,children:t.user_no}),t.attendStatus?null:Object(j.jsx)(_.a,{style:{margin:5}})]}),Object(j.jsx)(o.a,{align:"left",className:Object(x.a)(a.tableCell,a.tableCell),children:null===t||void 0===t?void 0:t.ip}),Object(j.jsx)(o.a,{align:"left",className:Object(x.a)(a.tableCell,a.tableCell),children:H.countries[(null===t||void 0===t?void 0:t.country)||""].name}),Object(j.jsx)(o.a,{align:"left",className:a.tableCell,children:Object(j.jsx)(I.a,{fromNow:!0,children:t.createdAt})}),Object(j.jsx)(o.a,{align:"left",className:a.tableCell,children:Object(j.jsx)(f.a,{className:a.badgeRoot,style:{color:n(),backgroundColor:n()+"44"},children:"0"===t.status?"Login":"1"===t.status?"Password":!0===t.blocked?"Blocked":"Dashboard"})}),Object(j.jsx)(o.a,{children:W(t)}),Object(j.jsx)(o.a,{align:"right",className:a.tableCell,children:Object(j.jsx)(B,{uid:t.uid,blocked:t.blocked})})]},t.uid)},E=a(996);t.a=function(e){var t=e.userData;return Object(j.jsx)(E.a,{children:Object(j.jsxs)(i.a,{stickyHeader:!0,className:"table",children:[Object(j.jsx)(l.a,{children:Object(j.jsx)(h,{})}),Object(j.jsx)(r.a,{children:t.map((function(e){return Object(j.jsx)(z,{data:e},e.uid)}))})]})})}},1265:function(e,t,a){"use strict";a.r(t);var n=a(20),c=a(0),i=a(410),l=a(14),r=a(341),o=a(574),s=a(565),d=a(233),b=a(1e3),u=a(997),j=a(998),p=a(999),h=a(1005),x=a(422),f=a(1);t.default=function(){var e=Object(i.a)().messages,t=Object(l.d)(),a=Object(l.e)((function(e){return e.users})),m=a.users,O=a.userCount,g=Object(c.useState)(0),v=Object(n.a)(g,2),w=v[0],y=v[1],C=Object(c.useState)(""),k=Object(n.a)(C,2),N=k[0],S=k[1],R=function(e,t){y(t)};Object(c.useEffect)((function(){t(Object(x.f)(N,w))}),[t,N,w]);return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(d.a,{animation:"transition.slideUpIn",delay:200,children:Object(f.jsxs)(b.a,{title:e["eCommerce.recentOrders"],fullView:!0,children:[Object(f.jsx)(u.a,{children:Object(f.jsxs)(r.a,{display:"flex",flexDirection:"row",alignItems:"center",width:1,justifyContent:"space-between",children:[Object(f.jsx)(s.a,{style:{maxWidth:150},margin:"dense",id:"user-name",placeholder:"Search",type:"search",variant:"outlined",onChange:function(e){S(e.target.value),y(0)}}),Object(f.jsx)(r.a,{display:"flex",flexDirection:"row",alignItems:"center",children:Object(f.jsx)(o.a,{xsDown:!0,children:Object(f.jsx)(p.a,{rowsPerPage:10,count:O,page:w,onPageChange:R})})})]})}),Object(f.jsx)(j.a,{style:{paddingTop:10,paddingBottom:10},children:Object(f.jsx)(h.a,{userData:m})}),Object(f.jsx)(o.a,{smUp:!0,children:Object(f.jsx)(p.a,{rowsPerPage:10,count:O,page:w,onPageChange:R})})]})})})}},996:function(e,t,a){"use strict";a(0);var n=a(470),c=a(341),i=a(1006),l=a(1),r=Object(n.a)((function(e){return{tableResponsiveMaterial:{minHeight:".01%",overflowX:"auto","& > thead > tr > th, > tbody > tr > th, > tfoot > tr > th, thead > tr > td, tbody > tr > td, tfoot > tr > td":{whiteSpace:"nowrap"},"@media (max-width: 767px)":{width:"100%",marginBottom:15,overflowY:"hidden",border:"1px solid ".concat(i.grey[300]),"& > table":{marginBottom:0}}}}}));t.a=function(e){var t=r();return Object(l.jsx)(c.a,{className:t.tableResponsiveMaterial,children:e.children})}},997:function(e,t,a){"use strict";var n=a(3),c=(a(0),a(341)),i=a(176),l=a(419),r=a.n(l),o=a(1),s=r()((function(e){return{appHeader:Object(n.a)({height:60,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(i.a[300])},e.breakpoints.up("xl"),{height:77}),checkboxRoot:{marginRight:8},pointer:{cursor:"pointer"}}})),d=function(e){var t=e.children,a=s();return Object(o.jsx)(c.a,{px:6,py:{xs:1,xl:3},className:a.appHeader,children:t})};t.a=d,d.defaultProps={}},998:function(e,t,a){"use strict";var n=a(3),c=(a(0),a(30)),i=a(419),l=a.n(i),r=a(15),o=a(1),s=l()((function(e){return{appsContentContainer:function(t){var a;return a={display:"flex",flexDirection:"column",height:"calc(100% - ".concat(t.isDetailView?60:115,"px)")},Object(n.a)(a,e.breakpoints.up("sm"),{height:"calc(100% - ".concat(t.fullView?0:60,"px)")}),Object(n.a)(a,e.breakpoints.up("xl"),{height:"calc(100% - ".concat(t.fullView?0:77,"px)")}),Object(n.a)(a,"& .scrum-absolute",{position:"absolute",top:0,left:0,width:"100%"}),Object(n.a)(a,"& .scrum-row",{display:"inline-flex",minWidth:"100%",height:"100%",marginLeft:"-10px",marginRight:"-10px"}),Object(n.a)(a,"& .scrum-col",Object(n.a)({minWidth:"280px",maxWidth:"280px",marginLeft:"10px",marginRight:"10px",borderRadius:e.overrides.MuiCard.root.borderRadius,backgroundColor:Object(r.e)(e.palette.background.paper,.45),height:"100% !important"},e.breakpoints.up("md"),{minWidth:"354px",maxWidth:"354px"})),Object(n.a)(a,"& .scroll-scrum-item",{height:"auto !important"}),a}}}));t.a=function(e){var t=e.isDetailView,a=void 0!==t&&t,n=e.fullView,i=void 0!==n&&n,l=e.style,r=void 0===l?{}:l,d=e.children,b=s({isDetailView:a,fullView:i});return Object(o.jsx)(c.a,{className:b.appsContentContainer,style:r,children:d})}},999:function(e,t,a){"use strict";a(0);var n=a(577),c=a(1);t.a=function(e){var t=e.count,a=e.page,i=e.onPageChange,l=e.rowsPerPage,r=void 0===l?15:l,o=e.className,s=void 0===o?"":o;return Object(c.jsx)(n.a,{component:"div",count:t,rowsPerPage:r,className:s,page:a,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onPageChange:i,rowsPerPageOptions:[]})}}}]);
//# sourceMappingURL=16.c41112e8.chunk.js.map