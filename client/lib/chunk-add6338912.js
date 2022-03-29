"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[7764],{"./src/modals/Brokerage/Banks/BankDetails/index.tsx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});var s=n("../../node_modules/react/index.js"),l=n("../../node_modules/react-redux/es/index.js"),o=n("../../node_modules/redux/es/redux.js"),a=n("./src/components/Flyout/index.tsx"),r=n("./src/data/index.ts"),i=n("./src/data/types.ts"),c=n("./src/providers/ModalEnhancer/index.tsx"),d=n("./node_modules/react-intl/lib/src/components/message.js"),u=n("../../node_modules/redux-form/es/reduxForm.js"),m=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),p=n("../blockchain-info-components/src/index.js"),x=n("./src/components/Form/index.ts"),h=n("./src/services/images/index.ts");const g=m.ZP.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`,b=(0,m.ZP)(a.o9)`
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
  height: 100%;
`,y=(0,m.ZP)(a.o9)`
  justify-content: center;
  display: flex;
`,f=m.ZP.div`
  display: flex;
  justify-content: flex-end;
`,E=m.ZP.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  padding: 16px 0 16px 40px;
  border-top: 1px solid ${e=>e.theme.grey000};
  border-bottom: 1px solid ${e=>e.theme.grey000};
`,w=m.ZP.div`
  justify-content: left;
  flex-direction: row;
  display: flex;
`,k=m.ZP.div`
  margin-top: 24px;
`,v=(0,u.Z)({form:"linkedBanks"})((e=>{var t,n,l;const{account:o,walletCurrency:r}=e,i=o&&"details"in o?`${(null===(t=o.details)||void 0===t?void 0:t.bankName)||""} ${(null===(n=o.details)||void 0===n?void 0:n.accountNumber)||""}`:s.createElement(d.Z,{id:"copy.bank_account",defaultMessage:"Bank Account"}),c=o&&"details"in o&&o.details;return s.createElement(g,null,s.createElement(a.o9,null,s.createElement(f,null,s.createElement(p.JO,{cursor:!0,"data-e2e":"bankDetailsCloseIcon",name:"close",size:"20px",color:"grey600",role:"button",onClick:e.handleClose})),s.createElement(w,null,c&&s.createElement(p.Ee,{name:(0,h.t)(c.bankName)})),s.createElement(k,null,s.createElement(p.xv,{size:"24px",color:"grey900",weight:600},i),s.createElement(p.xv,{size:"24px",color:"grey600",weight:500},c&&(null===(l=c.bankAccountType)||void 0===l?void 0:l.toLowerCase())||""," ",s.createElement(d.Z,{id:"scenes.settings.general.account",defaultMessage:"account"})," ",o&&"details"in o&&o.details.accountNumber||""))),s.createElement(E,null,s.createElement(p.xv,{color:"grey600",size:"14px",weight:500},s.createElement(d.Z,{id:"copy.currency",defaultMessage:"Currency"})),s.createElement(p.xv,{color:"grey800",size:"16px",weight:600},r)),s.createElement(y,null,s.createElement(p.xv,{color:"grey600",size:"12px",weight:500,style:{marginTop:"40px",textAlign:"center"}},s.createElement(d.Z,{id:"modals.brokerage.bank_preview.disclaimer",defaultMessage:"This account can be used for buys, sells & withdrawals."}))),s.createElement(b,null,s.createElement(x.l0,{onSubmit:e.handleSubmit},s.createElement(p.zx,{fullwidth:!0,size:"16px",height:"48px",nature:"light-red","data-e2e":"removeBankDetials",disabled:e.submitting,type:"submit"},e.submitting?s.createElement(p.JA,{color:"blue100",height:"20px",width:"20px"}):s.createElement(d.Z,{id:"buttons.remove",defaultMessage:"Remove"})))))}));class _ extends s.PureComponent{constructor(){super(...arguments),this.state={show:!1},this.handleClose=()=>{this.setState({show:!1}),setTimeout((()=>{this.props.close()}),a.x9)},this.handleSubmit=()=>{this.props.account&&(this.props.brokerageActions.showModal({modalType:"REMOVE_BANK_MODAL",origin:i.$p.BANK}),this.props.brokerageActions.setBankDetails({account:this.props.account,redirectBackToStep:!0}))}}componentDidMount(){this.setState({show:!0})}render(){return this.props.account?s.createElement(a.ZP,Object.assign({},this.props,{onClose:this.handleClose,isOpen:this.state.show,"data-e2e":"bankDetailsModal"}),s.createElement(a.FK,null,s.createElement(v,Object.assign({},this.props,{onSubmit:this.handleSubmit,handleClose:this.handleClose})))):null}}const C=(0,l.connect)((e=>({account:r.wl.wx.zT.getAccount(e),walletCurrency:r.wl.vE.Xd.getCurrency(e).getOrElse("USD")})),(e=>({brokerageActions:(0,o.bindActionCreators)(r.Nw.wx.brokerage,e)}))),A=(0,o.compose)((0,c.Z)(i.tl.BANK_DETAILS_MODAL,{transition:a.x9}),C)(_)}}]);