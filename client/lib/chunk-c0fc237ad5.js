"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[4014],{"./src/modals/Onboarding/LinkFromExchangeAccount/index.tsx":(e,t,l)=>{l.r(t),l.d(t,{default:()=>J});var n=l("../../node_modules/react/index.js"),a=l("../../node_modules/react-redux/es/index.js"),r=l("../../node_modules/redux/es/redux.js"),i=l("./src/components/Flyout/index.tsx"),s=l("./src/data/index.ts"),o=l("./src/data/types.ts"),c=l("./src/providers/ModalEnhancer/index.tsx"),d=l("./node_modules/react-intl/lib/src/components/message.js"),m=l("../blockchain-info-components/src/index.js"),g=l("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const u=g.ZP.div`
  display: flex;
  min-height: 300px;
  align-items: center;
  height: calc(100% - 80px);
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  padding: 40px;
`,h=g.ZP.div`
  width: 100%;
  word-break: break-word;
  > div:not(:first-child) {
    margin-top: 8px;
  }
`,x=g.ZP.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`,p=g.ZP.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,E=g.ZP.div`
  display: flex;
  min-height: 300px;
  height: calc(100% - 80px);
  align-items: center;
  flex: 1;
  flex-direction: column;
  text-align: center;
  padding: 40px;
`,f=(0,g.ZP)(E)`
  justify-content: center;
`,y=g.ZP.div`
  margin-top: 8px;
  width: 100%;
  display: flex;
  margin-bottom: 40px;
`,w=g.ZP.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  width: 100%;
  flex-direction: column;
`,b=g.ZP.div`
  max-width: 356px;
`,k=g.ZP.div`
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 500;
  max-width: 40px;
  color: ${e=>e.theme.grey800};
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.theme.blue000};
  width: 40px;
  height: 40px;
  border-radius: 50%;
`,v=g.ZP.div`
  width: 100%;
  margin-bottom: 36px;
`,Z=g.ZP.div`
  width: 100%;
  display: flex;
`,_=g.ZP.div`
  margin-top: 8px;
  width: 100%;
  display: flex;
`,A=g.ZP.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`,z=g.ZP.input`
  width: 24px;
  height: 24px;
`,C=g.ZP.label`
  display: flex;
  flex: 1;
`,M=g.ZP.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin: 0 0 16px 16px;
`,P=(0,g.ZP)(M)`
  flex-direction: column;
`;class j extends n.PureComponent{constructor(e){super(e),this.handleAddress=e=>{const{allowSubmit:t,considerEmail:l,selectedEmail:n}=this.state;this.setState({selectedAddress:e.target.value}),t||null===n&&l||this.setState({allowSubmit:!0})},this.handleEmail=e=>{const{allowSubmit:t,considerAddress:l,selectedAddress:n}=this.state;this.setState({selectedEmail:e.target.value}),t||null===n&&l||this.setState({allowSubmit:!0})},this.handleSubmit=()=>{const{actions:e,error:t,linkId:l}=this.props,{selectedAddress:n,selectedEmail:a}=this.state;let r,i;switch(!0){case!!a:i=a;break;case t.email&&"null"!==t.email.wallet:i=t.email.wallet;break;case t.email&&"null"!==t.email.exchange:i=t.email.exchange;break;default:i=null}switch(!0){case!!n:r=JSON.parse(n&&t.address[n]);break;case t.address&&"null"!==t.address.wallet:r=JSON.parse(t.address.wallet);break;case t.address&&"null"!==t.address.exchange:r=JSON.parse(t.address.exchange);break;default:r=null}e.linkFromExchangeAccount(l,i,r)},this.printAddress=(e,t)=>{const l=JSON.parse(e);return n.createElement(P,null,n.createElement(m.xv,{color:t,weight:500,style:{textAlign:"left"}},l.line1),l.line2&&"null"!==l.line2&&n.createElement(m.xv,{color:t,weight:500,style:{textAlign:"left"}},l.line2),n.createElement(m.xv,{color:t,weight:500,style:{textAlign:"left"}},l.city,l.state&&"null"!==l.state&&`, ${l.state}`),n.createElement(m.xv,{color:t,weight:500,style:{textAlign:"left"}},l.postCode))};const{address:t,email:l}=e.error,a=l&&"null"!==l.wallet&&"null"!==l.exchange,r=t&&"null"!==t.wallet&&"null"!==t.exchange;this.state={allowSubmit:!1,considerAddress:r,considerEmail:a,selectedAddress:null,selectedEmail:null}}render(){const{allowSubmit:e,considerAddress:t,considerEmail:l,selectedAddress:a,selectedEmail:r}=this.state,{address:i,email:s}=this.props.error;return n.createElement(E,null,n.createElement(v,null,n.createElement(Z,null,n.createElement(m.JO,{cursor:!0,name:"user",size:"22px",color:"blue600"})),n.createElement(_,null,n.createElement(m.xv,{color:"grey900",size:"24px",weight:600,style:{justifyContent:"flex-start"}},n.createElement(d.Z,{id:"modals.onboarding.linkfromexchange.conflict",defaultMessage:"Profile Details"}))),n.createElement(_,null,n.createElement(m.xv,{color:"grey600",weight:500,style:{textAlign:"left"}},n.createElement(d.Z,{id:"modals.onboarding.linkfromexchange.conflict_subtitle",defaultMessage:"Your Wallet and Exchange accounts are now linked! Please select your preferred contact information."})))),t&&n.createElement(A,{style:{marginBottom:"24px"}},n.createElement(_,null,n.createElement(m.xv,{color:"grey900",weight:600,style:{marginBottom:"24px",textAlign:"left"}},n.createElement(d.Z,{id:"modals.onboarding.linkfromexchange.conflict_address",defaultMessage:"Select your most up to date residential address"}))),n.createElement("div",{onChange:this.handleAddress},n.createElement(Z,null,n.createElement(C,null,n.createElement(z,{type:"radio",value:"wallet",name:"address"}),this.printAddress(i.wallet,a&&"wallet"!==a?"grey600":"grey900"))),n.createElement(Z,null,n.createElement(C,null,n.createElement(z,{type:"radio",value:"exchange",name:"address"}),this.printAddress(i.exchange,a&&"exchange"!==a?"grey600":"grey900"))))),l&&n.createElement(A,{style:{marginBottom:"24px"}},n.createElement(_,null,n.createElement(m.xv,{color:"grey900",weight:500,style:{textAlign:"left"}},n.createElement(d.Z,{id:"modals.onboarding.linkfromexchange.conflict_email",defaultMessage:"Select your primary email address"}))),n.createElement(_,null,n.createElement(m.xv,{color:"grey600",weight:500,size:"14px",style:{marginBottom:"24px",textAlign:"left"}},n.createElement(d.Z,{id:"modals.onboarding.linkfromexchange.conflict_email_description",defaultMessage:"This email will be used for all Wallet & Exchange communications only. Your Exchange & Wallet emails will not change."}))),n.createElement("div",{onChange:this.handleEmail},n.createElement(Z,null,n.createElement(C,null,n.createElement(z,{type:"radio",value:s.wallet,name:"email"}),n.createElement(M,null,n.createElement(m.xv,{color:r&&r!==s.wallet?"grey600":"grey900",weight:500,style:{justifyContent:"flex-start",lineHeight:"32px"}},s.wallet)))),n.createElement(Z,null,n.createElement(C,null,n.createElement(z,{type:"radio",value:s.exchange,name:"email"}),n.createElement(M,null,n.createElement(m.xv,{color:r&&r!==s.exchange?"grey600":"grey900",weight:500,style:{justifyContent:"flex-start",lineHeight:"32px"}},s.exchange))))),n.createElement(_,null,n.createElement(m.xv,{color:"grey600",size:"14px",weight:500,style:{marginTop:"34px",textAlign:"left"}},n.createElement(d.Z,{id:"modals.onboarding.linkfromexchange.email_disclaimer1",defaultMessage:'Keep using <span class="grey900">{exchangeEmail}</span> to log into the Exchange',values:{exchangeEmail:s.exchange}}))),n.createElement(_,null,n.createElement(m.xv,{color:"grey600",size:"14px",weight:500,style:{marginTop:"16px",textAlign:"left"}},n.createElement(d.Z,{id:"modals.onboarding.linkfromexchange.email_disclaimer2",defaultMessage:'If you have 2FA enabled for your Wallet, nothing changes. You will still use <span className="grey900">{walletEmail}</span> to securely log in.',values:{walletEmail:s.wallet}})))),n.createElement(w,null,n.createElement(m.zx,{nature:"primary",height:"56px",fullwidth:!0,onClick:this.handleSubmit,"data-e2e":"submitProfileDetails",disabled:!e},n.createElement(m.xv,{color:"white",size:"16px",weight:500},n.createElement(d.Z,{id:"modals.prompt.button",defaultMessage:"Submit"})))))}}const O=j,template_failure=e=>e.error.email?n.createElement(O,Object.assign({},e,{close:e.close})):n.createElement(f,null,n.createElement("div",null,n.createElement(m.Ee,{name:"close-error",size:"40px"}),n.createElement(h,{style:{marginTop:"20px"}},n.createElement(m.xv,{color:"grey800",size:"20px",weight:600},n.createElement(d.Z,{id:"modals.onboarding.linkfromexchange.failureheader",defaultMessage:"Connection Error"})),n.createElement(m.xv,{color:"grey600",weight:500},n.createElement(d.Z,{id:"modals.onboarding.linkfromexchange.failure",defaultMessage:"We could not connect your Wallet to Exchange. Please go back to Exchange and try again."})),n.createElement(m.Qt,{inline:!0},n.createElement(m.xv,{size:"13px",color:"grey600"},"Err:"," "),n.createElement(m.xv,{size:"13px",color:"grey600"},e.error&&e.error.description))),n.createElement(m.rU,{style:{width:"100%"},target:"_blank",rel:"noopener noreferrer",href:"/exchange/trade"},n.createElement(m.zx,{nature:"empty-blue",height:"56px",fullwidth:!0,onClick:e.close,"data-e2e":"linkBackToExchange",style:{marginTop:"36px"}},n.createElement(m.xv,{color:"blue600",size:"16px",weight:500},n.createElement(d.Z,{id:"modals.onboarding.linkfromexchange.back_to_exchange",defaultMessage:"Back to the Exchange"}))))));var S=l("./src/components/SimpleBuy/index.tsx");const F=(0,g.ZP)(S.$s)`
  margin-bottom: 30px;
`,T=(0,g.ZP)(m.xv)`
  margin-bottom: 20px;
`,template_loading=e=>n.createElement(u,null,n.createElement(x,null,!e.emailVerified&&n.createElement(m.JO,{cursor:!0,"data-e2e":"onboadingCloseModalIcon",name:"close",size:"20px",color:"grey600",role:"button",onClick:e.close})),n.createElement(p,null,e.emailVerified?n.createElement(m.T_,{width:"80px",height:"80px"}):null,!e.emailVerified&&n.createElement(n.Fragment,null,n.createElement(F,{showBackground:!0},n.createElement(m.JO,{name:"email",color:"blue600",size:"24px"})),n.createElement(h,null,n.createElement(T,{color:"grey800",size:"24px",weight:600},n.createElement(d.Z,{id:"modals.onboarding.linkfromexchange.unverified_email",defaultMessage:"Please Verify Your Email"})),e.email?n.createElement(m.Qt,{inline:!0},n.createElement(m.xv,{color:"grey600",weight:500},n.createElement(d.Z,{id:"modals.onboarding.linkfromexchange.need_to_verify",defaultMessage:"You'll need to verify"})),n.createElement(m.xv,{color:"grey600",weight:500},e.email),n.createElement(m.xv,{color:"grey600",weight:500},n.createElement(d.Z,{id:"modals.onboarding.linkfromexchange.to_continue",defaultMessage:"to continue. We'll be waiting right here in the meantime."}))):n.createElement(m.xv,{color:"grey600",weight:500},n.createElement(d.Z,{id:"modals.onboarding.linkfromexchange.no_email",defaultMessage:"You do not have an email associated with this wallet. Please to Security Center to set your email."}))),e.email&&n.createElement(m.zx,{nature:"empty-blue",height:"56px",fullwidth:!0,onClick:e.actions.resendVerifyEmail,"data-e2e":"resendEmail",style:{marginTop:"25px"}},n.createElement(m.xv,{color:"blue600",size:"16px",weight:500},n.createElement(d.Z,{id:"modals.onboarding.linkfromexchange.send_email",defaultMessage:"Resend Email"})))))),template_notasked=()=>n.createElement(u,null,n.createElement(m.T_,{height:"50px",width:"50px"})),getStatus=e=>{switch(e){case 1:return"Silver Verified";case 2:return"Gold Verified";default:return""}},L=g.ZP.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`,W=g.ZP.div`
  width: 100%;
  display: flex;
  margin-bottom: 32px;
`,N=(0,g.ZP)(m.xv)`
  width: 100%;
  display: flex;
  text-align: left;
  a {
    color: ${e=>e.theme.blue600};
    text-decoration: none;
  }
`,Y=g.ZP.div`
  width: 40px;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
`,B=(0,g.ZP)(m.xv)`
  text-align: left;
  margin-left: 18px;
  margin-top: 8px;
  span {
    text-indent: -12px;
    display: inline-block;
    padding-left: 12px;
  }
`,template_success=e=>{const{close:t,userTiers:l}=e,{current:a}=l.getOrElse({})||{};return n.createElement(E,null,n.createElement(L,null,n.createElement(S.$s,{showBackground:!0},n.createElement(m.JO,{name:"sync-regular",color:"blue600",size:"24px"}))),n.createElement(y,null,n.createElement(m.xv,{color:"grey900",size:"24px",weight:600,style:{justifyContent:"flex-start"}},n.createElement(d.Z,{id:"modals.onboarding.linkfromexchange.successheader",defaultMessage:"Your Accounts are Connected!"}))),n.createElement(W,null,n.createElement(m.JO,{name:"checkmark-circle-filled",size:"24px",color:"green600",role:"button",style:{justifyContent:"flex-start"}}),n.createElement(m.xv,{color:"grey600",size:"16px",weight:500,style:{marginLeft:"18px",textAlign:"left"}},n.createElement(d.Z,{id:"modals.onboarding.linkfromexchange.success_info1",defaultMessage:"Your our.com Wallet and Exchange are now connected. Seamlessly send funds between platforms to your heart's content."}))),2===a&&n.createElement(W,null,n.createElement(m.JO,{name:"checkmark-circle-filled",size:"24px",color:"green600",role:"button",style:{justifyContent:"flex-start"}}),n.createElement(m.xv,{color:"grey600",size:"16px",weight:500,style:{marginLeft:"18px",textAlign:"left"}},n.createElement(d.Z,{id:"modals.onboarding.linkfromexchange.success_info2",defaultMessage:"You are now {status} with our.com, allowing you to swap, buy & sell, and earn rewards.",values:{status:getStatus(a)}}))),n.createElement(N,{color:"grey900",size:"16px",weight:600,style:{marginTop:"8px"}},n.createElement(d.Z,{id:"modals.onboarding.linkfromexchange.success_remember_title",defaultMessage:"Remember!"})),n.createElement(N,{color:"grey600",size:"16px",weight:500},n.createElement(d.Z,{id:"modals.onboarding.linkfromexchange.success_remember_password_info",defaultMessage:"You'll still have a separate password for each product."})),n.createElement(W,{style:{marginTop:"18px"}},n.createElement(k,null,n.createElement(m.JO,{name:"wallet-filled",size:"32px",color:"blue600",role:"button",style:{justifyContent:"flex-start"}})),n.createElement(b,null,n.createElement(m.xv,{color:"grey900",size:"16px",weight:600,style:{marginLeft:"18px",textAlign:"left"}},n.createElement(d.Z,{id:"modals.onboarding.linkfromexchange.success_subinfo1_title",defaultMessage:"To Log In to Your Wallet"})),n.createElement(B,{color:"grey600",size:"16px",weight:500},n.createElement(d.Z,{id:"modals.onboarding.linkfromexchange.success_subinfo1_description1",defaultMessage:"- Use Wallet ID {walletId}",values:{walletId:e.data.walletGuid}})),n.createElement(B,{color:"grey600",size:"16px",weight:500,style:{marginLeft:"18px",textAlign:"left"}},n.createElement(d.Z,{id:"modals.onboarding.linkfromexchange.success_subinfo1_description2",defaultMessage:"- Wallet’s Password"})))),n.createElement(W,null,n.createElement(Y,null,n.createElement(m.Ee,{name:"exchange",width:"40px"})),n.createElement(b,null,n.createElement(m.xv,{color:"grey900",size:"16px",weight:600,style:{marginLeft:"18px",textAlign:"left"}},n.createElement(d.Z,{id:"modals.onboarding.linkfromexchange.success_subinfo2_title",defaultMessage:"To Log In to Your Exchange"})),n.createElement(B,{color:"grey600",size:"16px",weight:500},n.createElement(d.Z,{id:"modals.onboarding.linkfromexchange.success_subinfo2_description1",defaultMessage:"- Use Email Address: {exchangeEmail}",values:{exchangeEmail:e.data.email}})),n.createElement(B,{color:"grey600",size:"16px",weight:500},n.createElement(d.Z,{id:"modals.onboarding.linkfromexchange.success_subinfo2_description2",defaultMessage:"- Exchange’s Password"})))),n.createElement(N,{color:"grey600",size:"16px",weight:500,style:{marginBottom:"24px"}},n.createElement(d.Z,{id:"modals.onboarding.linkfromexchange.success_disclaimer",defaultMessage:"Having different Exchange and Wallet passwords helps to keep your accounts safe! <a>Learn more</a> about the Wallet.",values:{a:e=>n.createElement("a",{href:"/support/hc/en-us/articles/360029029911-Your-Wallet-101",rel:"noopener noreferrer",target:"_blank"},e)}})),n.createElement(w,null,n.createElement(m.zx,{nature:"empty-blue",height:"56px",fullwidth:!0,onClick:t,"data-e2e":"linkDone",style:{marginBottom:"18px"}},n.createElement(m.xv,{color:"blue600",size:"16px",weight:500},n.createElement(d.Z,{id:"modals.onboarding.linkfromexchange.take_me_to_wallet",defaultMessage:"Take Me to My Wallet"}))),n.createElement(m.rU,{style:{width:"100%"},target:"_blank",rel:"noopener noreferrer",href:"/exchange/trade"},n.createElement(m.zx,{nature:"primary",height:"56px",fullwidth:!0,onClick:t,"data-e2e":"linkDone"},n.createElement(m.xv,{color:"white",size:"16px",weight:500},n.createElement(d.Z,{id:"modals.onboarding.linkfromexchange.back_to_exchange",defaultMessage:"Back to the Exchange"}))))))};class I extends n.PureComponent{constructor(){super(...arguments),this.state={direction:"left",show:!0},this.handleClose=()=>{this.setState({show:!1}),setTimeout((()=>{this.props.close()}),i.x9)}}componentDidMount(){const{linkId:e}=this.props;this.props.actions.linkFromExchangeAccount(e)}render(){return this.props.linkFromExchangeAccountStatus.cata({Failure:e=>n.createElement(i.ZP,Object.assign({},this.props,{onClose:this.handleClose,isOpen:this.state.show,"data-e2e":"infoModalLinkFromExchangeAccount"}),n.createElement(i.FK,null,n.createElement(template_failure,Object.assign({},this.props,{close:this.handleClose,error:e})))),Loading:()=>n.createElement(i.ZP,Object.assign({},this.props,{onClose:this.handleClose,isOpen:this.state.show,"data-e2e":"infoModalLinkFromExchangeAccount"}),n.createElement(i.FK,null,n.createElement(template_loading,Object.assign({},this.props,{close:this.handleClose})))),NotAsked:()=>n.createElement(i.ZP,Object.assign({},this.props,{onClose:this.handleClose,isOpen:this.state.show,"data-e2e":"infoModalLinkFromExchangeAccount"}),n.createElement(i.FK,null,n.createElement(template_notasked,Object.assign({},this.props,{close:this.handleClose})))),Success:e=>n.createElement(i.ZP,Object.assign({},this.props,{onClose:this.handleClose,isOpen:this.state.show,"data-e2e":"infoModalLinkFromExchangeAccount"}),n.createElement(i.FK,null,n.createElement(template_success,Object.assign({data:e},this.props,{close:this.handleClose}))))})}}const J=(0,r.compose)((0,c.Z)(o.tl.LINK_FROM_EXCHANGE_ACCOUNT_MODAL),(0,a.connect)((e=>({email:s.wl.vE.Xd.getEmail(e).getOrElse(!1),emailVerified:s.wl.vE.Xd.getEmailVerified(e).getOrElse(!0),linkFromExchangeAccountStatus:s.wl.qz.N5.getLinkFromExchangeAccountStatus(e),userTiers:s.wl.qz.N5.getUserTiers(e),walletId:s.wl.vE.gU.getGuid(e)})),(e=>({actions:(0,r.bindActionCreators)(Object.assign(Object.assign({},s.Nw.qz.N5),s.Nw.qz.cD),e)}))))(I)}}]);