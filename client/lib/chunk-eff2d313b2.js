"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[5999],{"./src/modals/Brokerage/Banks/RemoveBank/index.tsx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var o=n("../../node_modules/react/index.js"),s=n("../../node_modules/react-redux/es/index.js"),a=n("../../node_modules/redux/es/redux.js"),l=n("./src/components/Flyout/index.tsx"),r=n("./src/data/index.ts"),i=n("./src/data/types.ts"),c=n("./src/providers/ModalEnhancer/index.tsx"),d=n("./node_modules/react-intl/lib/src/components/message.js"),u=n("../../node_modules/redux-form/es/reduxForm.js"),m=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),p=n("../blockchain-info-components/src/index.js"),x=n("./src/components/Form/index.ts");const h=m.ZP.div`
  width: 100%;
  height: 100%;
  display: flex;
`,b=(0,m.ZP)(l.o9)`
  display: flex;
  flex-direction: column;
`,g=(0,m.ZP)(x.l0)`
  text-align: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`,k=(0,m.ZP)(p.xv)`
  display: flex;
  align-items: center;
`,y=m.ZP.div`
  display: flex;
  justify-content: flex-end;
`,f=m.ZP.div`
  display: flex;
  align-items: center;
`,v=(0,u.Z)({form:"linkedBanks"})((e=>{var t,n;const s=e.account&&"details"in e.account?`${null===(t=e.account.details)||void 0===t?void 0:t.bankName} ${(null===(n=e.account.details)||void 0===n?void 0:n.accountNumber)||""}`:"bank account";return o.createElement(h,null,o.createElement(b,null,e.redirectBackToStep?o.createElement(k,{color:"grey800",size:"20px",weight:600},o.createElement(f,null,o.createElement(p.JO,{cursor:!0,"data-e2e":"brokerageBackToBankDetails",name:"arrow-back",size:"20px",color:"grey600",role:"button",style:{marginRight:"8px"},onClick:e.handleClose}),o.createElement(p.xv,{color:"grey800",size:"24px",weight:600},o.createElement(d.Z,{id:"buttons.back",defaultMessage:"Back"})))):o.createElement(y,null,o.createElement(p.JO,{cursor:!0,"data-e2e":"bankDetailsCloseIcon",name:"close",size:"20px",color:"grey600",role:"button",onClick:e.handleClose})),o.createElement(g,{onSubmit:e.handleSubmit},o.createElement(p.JO,{name:"alert-filled",color:"orange400",size:"52px",style:{display:"block"}}),o.createElement(p.xv,{color:"grey800",size:"24px",weight:600,style:{marginTop:"32px"}},o.createElement(d.Z,{id:"modals.simplebuy.cancelorder.areyousure",defaultMessage:"Are you sure?"})),o.createElement(p.xv,{color:"grey600",size:"14px",weight:500,style:{marginBottom:"24px",marginTop:"12px"}},o.createElement(d.Z,{id:"modals.brokerage.remove_bank.description",defaultMessage:"You're about to remove your {bankAccount}",values:{bankAccount:s}})),o.createElement(p.zx,{fullwidth:!0,size:"16px",height:"48px",nature:"light","data-e2e":"removeLinkedBank",disabled:e.submitting,type:"submit"},e.submitting?o.createElement(p.JA,{color:"blue100",height:"20px",width:"20px"}):o.createElement(d.Z,{id:"buttons.remove",defaultMessage:"Remove"})),o.createElement(p.zx,{fullwidth:!0,size:"16px",height:"48px",nature:"light","data-e2e":"cancelRemoveOfLinkedBank",disabled:e.submitting,onClick:e.handleClose,style:{marginTop:"16px"},type:"button"},o.createElement(d.Z,{id:"buttons.cancel",defaultMessage:"Cancel"})))))}));class E extends o.PureComponent{constructor(){super(...arguments),this.state={show:!1},this.handleClose=()=>{this.setState({show:!1}),setTimeout((()=>{this.props.close()}),l.x9)},this.handleSubmit=()=>{this.props.account&&this.props.brokerageActions.deleteSavedBank(this.props.account.id)}}componentDidMount(){this.setState({show:!0})}render(){return this.props.account?o.createElement(l.ZP,Object.assign({},this.props,{onClose:this.handleClose,isOpen:this.state.show,"data-e2e":"bankRemoveModal"}),o.createElement(l.FK,null,o.createElement(v,Object.assign({},this.props,{onSubmit:this.handleSubmit,handleClose:this.handleClose})))):null}}const w=(0,s.connect)((e=>({account:r.wl.wx.zT.getAccount(e),redirectBackToStep:r.wl.wx.zT.getRedirectBackToStep(e)})),(e=>({brokerageActions:(0,a.bindActionCreators)(r.Nw.wx.brokerage,e)}))),C=(0,a.compose)((0,c.Z)(i.tl.REMOVE_BANK_MODAL,{transition:l.x9}),w)(E)}}]);