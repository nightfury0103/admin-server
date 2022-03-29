"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[5649],{"./src/components/Public/index.js":(e,t,n)=>{n.d(t,{i:()=>c});var r,i,l,a=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),s=n("./src/services/styles/index.ts");function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var c=a.ZP.div(r||(r=_taggedTemplateLiteral(["\n  padding: 32px;\n  border-radius: 8px;\n  box-sizing: border-box;\n  background-color: ",";\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.21);\n  width: 480px;\n\n  ","\n  ","\n"])),(function(e){return e.theme.white}),s.BC.tablet(i||(i=_taggedTemplateLiteral(["\n    width: 100%;\n  "]))),s.BC.mobile(l||(l=_taggedTemplateLiteral(["\n    padding: 20px;\n  "]))))},"./src/scenes/AuthorizeLogin/index.tsx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var r=n("../../node_modules/react/index.js"),i=n("../../node_modules/react-redux/es/index.js"),l=n("../../node_modules/redux/es/redux.js"),a=n("./src/components/Public/index.js"),s=n("./src/data/index.ts");const c=s.wl.vE.aT.misc.authorizeLogin;var o=n("./node_modules/react-intl/lib/src/components/message.js"),m=n("../../node_modules/react-router-bootstrap/lib/index.js"),d=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),p=n("../blockchain-info-components/src/index.js");const u=d.ZP.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
`,template_error=e=>r.createElement(u,null,r.createElement(p.JO,{color:"error",name:"close-circle",size:"40px"}),r.createElement(p.xv,{size:"20px",weight:600,color:"black",style:{marginTop:"8px"}},r.createElement(o.Z,{id:"scenes.authorizelogin.error.uhoh",defaultMessage:"Uh Oh. Something went wrong.",values:{error:e.value}})),r.createElement(p.xv,{style:{margin:"8px 0 12px 0"},size:"16px",color:"red600",weight:500},r.createElement(o.Z,{id:"scenes.authorizelogin.error.msg",defaultMessage:"Error: {error}",values:{error:e.value}})),r.createElement(m.Ji,{to:"/login"},r.createElement(p.xv,{color:"blue600",size:"16px",weight:500,cursor:"pointer"},r.createElement(o.Z,{id:"scenes.exchange.exchangeform.tryagain",defaultMessage:"Try Again"})))),g=d.ZP.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
`,template_loading=()=>r.createElement(g,null,r.createElement(p.nZ,{width:"40px",height:"40px"}),r.createElement(p.xv,{size:"16px",weight:400,style:{marginTop:"24px"}},r.createElement(o.Z,{id:"scenes.authorizelogin.verifying",defaultMessage:"We're verifying your authorization attempt. Please wait..."})));var x=n("./src/services/styles/index.ts");const{Fragment:h}=r,f=d.ZP.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`,E=d.ZP.div`
  width: 100%;
  text-align: left;
  ${x.BC.mobile`
  text-align: center;`}
`,v=d.ZP.div`
  margin-top: 20px;
`,y=d.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  ${x.BC.mobile`
  justify-content: center;`}
`,z=d.ZP.div`
  margin-top: 10px;
`,b=d.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0px;
  align-items: center;
  margin-top: 5px;
  ${x.BC.mobile` 
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
`}
`,w=d.ZP.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`,j=(0,d.ZP)(p.xv)`
  visibility: visible;
  ${x.BC.mobile` 
  visibility: hidden;
`}
`,Z=d.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
  > div:nth-child(2) {
    margin: 0px 5px;
  }
  ${x.BC.mobile` 
  flex-direction: column;
`}
`,k=(0,d.ZP)(p.zx)`
  margin: 8px;
  ${x.BC.mobile` 
  margin: 0;
`}
`,template_success=e=>{const{approver_device_description:t,requester_device_description:n,approver_country:i,requester_country:l,approver_ip:a,requester_ip:s,device_change_reason:c}=e.value,m=e.value["request-denied"];return r.createElement(f,null,c?r.createElement(r.Fragment,null,r.createElement(p.Ee,{name:"blockchain-icon",width:"40px",height:"40px"}),r.createElement(E,null,r.createElement(p.xv,{size:"20px",weight:600,color:"black",style:{marginTop:"24px"}},r.createElement(o.Z,{id:"scenes.authorizelogin.attemptfrombrowser",defaultMessage:"Login attempt from another browser"})),r.createElement(p.xv,{color:"grey700",style:{marginTop:"8px"},size:"14px",weight:500},r.createElement(o.Z,{id:"scenes.authorizelogin.attemptfrombrowsermsg",defaultMessage:"Someone, hopefully you, is attempting to login to your wallet from a different browser."})),r.createElement(v,null,r.createElement(y,null,r.createElement(p.xv,{size:"16px",weight:500,color:"success"},r.createElement(o.Z,{id:"scenes.authorizelogin.yourdevice",defaultMessage:"Your Device"}))," ",r.createElement(p.xv,{size:"16px",weight:500,color:"grey700"},r.createElement(o.Z,{id:"scenes.authorizelogin.vs",defaultMessage:"vs."}))," ",r.createElement(p.xv,{size:"16px",weight:500,color:"error"},r.createElement(o.Z,{id:"scenes.authorizelogin.requestingdevice",defaultMessage:"Requesting Device"}))),r.createElement(z,null,r.createElement(b,null,r.createElement(w,null,t===n?r.createElement(p.JO,{name:"checkmark-circle-filled",color:"success",size:"16px"}):r.createElement(p.JO,{name:"close-circle",color:"error",size:"20px",style:{marginLeft:"-2px",marginRight:"-2px"}})," ",r.createElement(p.xv,{size:"14px",style:{paddingLeft:"6px"}},r.createElement(o.Z,{id:"scenes.authorizelogin.browser",defaultMessage:"Browser: "}))),r.createElement(p.jL,{type:"success",inline:!0},t),t!==n&&r.createElement(p.jL,{type:"warning",inline:!0},n)),r.createElement(b,null,r.createElement(w,null,a===s?r.createElement(p.JO,{name:"checkmark-circle-filled",color:"success",size:"16px"}):r.createElement(p.JO,{name:"close-circle",color:"error",size:"20px",style:{marginLeft:"-2px",marginRight:"-2px"}})," ",r.createElement(p.xv,{size:"14px",style:{paddingLeft:"6px"}},r.createElement(o.Z,{id:"scenes.authorizelogin.ipaddress",defaultMessage:"IP Address: "}))),r.createElement(p.jL,{type:"success",inline:!0},a),a!==s&&r.createElement(p.jL,{type:"warning",inline:!0},s)),r.createElement(b,null,r.createElement(w,null,i===l?r.createElement(p.JO,{name:"checkmark-circle-filled",color:"success",size:"16px"}):r.createElement(p.JO,{name:"close-circle",color:"error",size:"20px",style:{marginLeft:"-2px",marginRight:"-2px"}})," ",r.createElement(p.xv,{size:"14px",style:{paddingLeft:"6px"}},r.createElement(o.Z,{id:"scenes.authorizelogin.country",defaultMessage:"Country of Origin: "}))),r.createElement(p.jL,{type:"success",inline:!0},i),i!==l&&r.createElement(p.jL,{type:"warning",inline:!0},l)))),r.createElement(Z,null,r.createElement(k,{"data-e2e":"approveLogin",nature:"warning",onClick:e.onAccept},r.createElement(o.Z,{id:"scenes.authorizelogin.accept",defaultMessage:"Accept"})),r.createElement(j,{size:"12px",weight:400},r.createElement(o.Z,{id:"copy.or",defaultMessage:"or"})),r.createElement(k,{"data-e2e":"rejectLogin",nature:"primary",onClick:e.onReject},r.createElement(o.Z,{id:"scenes.authorizelogin.reject",defaultMessage:"Reject"}))))):r.createElement(r.Fragment,null,m?r.createElement(p.JO,{color:"error",name:"close-circle",size:"40px"}):r.createElement(p.JO,{color:"success",name:"checkmark-circle-filled",size:"40px"}),r.createElement(p.xv,{size:"20px",weight:600,color:"black",style:{marginTop:"8px"}},m?r.createElement(o.Z,{id:"scenes.authorizelogin.loading.rejected.title",defaultMessage:"Login Attempt Rejected!"}):r.createElement(o.Z,{id:"scenes.authorizelogin.loading.approved.title",defaultMessage:"Login Approved!"})),r.createElement(p.xv,{color:"grey900",style:{marginTop:"8px"},size:"16px",weight:500},m?r.createElement(o.Z,{id:"scenes.authorizelogin.loading.rejected.content",defaultMessage:"Please contact our support team if you have any questions or concerns."}):r.createElement(o.Z,{id:"scenes.authorizelogin.loading.approved.content",defaultMessage:"Please return to your previous tab to view your wallet."}))))};class L extends r.PureComponent{constructor(e){super(e),this.onAccept=this.onAccept.bind(this),this.onReject=this.onReject.bind(this),this.state={token:decodeURIComponent(e.location.pathname.split("/authorize-approve/")[1])}}componentDidMount(){this.props.miscActions.authorizeLogin(this.state.token)}onAccept(e){e.preventDefault(),this.props.miscActions.authorizeLogin(this.state.token,!0)}onReject(e){e.preventDefault(),this.props.miscActions.authorizeLogin(this.state.token,!1)}render(){const{data:e}=this.props,t=e.cata({Failure:e=>r.createElement(template_error,{value:e}),Loading:()=>r.createElement(template_loading,null),NotAsked:()=>r.createElement(template_loading,null),Success:e=>r.createElement(template_success,{value:e,onAccept:this.onAccept,onReject:this.onReject})});return r.createElement(a.i,null,t)}}const _=(0,i.connect)((e=>({data:c(e)})),(e=>({miscActions:(0,l.bindActionCreators)(s.Nw.vE.aT.misc,e)})))(L)}}]);