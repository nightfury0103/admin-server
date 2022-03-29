"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[8460],{"./src/components/Brokerage/index.tsx":(e,t,n)=>{n.d(t,{A:()=>l});var a=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),r=n("../blockchain-info-components/src/index.js");const l=(0,a.ZP)(r.zx)`
  padding: 8px 16px;
  margin: 40px auto;
  width: 83%;
  color: ${e=>e.theme.blue600};
  border-color: ${e=>e.theme.grey100};
`},"./src/components/Clipboard/CopyClipboardButton/index.tsx":(e,t,n)=>{n.d(t,{Z:()=>g});var a=n("../../node_modules/react/index.js"),r=n("../../node_modules/react-redux/es/index.js"),l=n("../../node_modules/redux/es/redux.js"),o=n("./src/data/index.ts"),i=n("./src/services/alerts/index.ts"),s=n("../../node_modules/react-copy-to-clipboard/lib/index.js"),c=n.n(s),d=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),u=n("../blockchain-info-components/src/index.js");const m=(0,d.ZP)(u.hU)`
  width: 30px;
  min-width: 0;
  height: 30px;
  border: none;
  background: transparent;
  &:hover {
    border: none;
    background: transparent;
  }
  > span {
    margin-top: ${e=>e.active?"-2px":"-5px;"};
    margin-right: 0 !important;
    font-size: ${e=>e.active?"18px":e.size||"20px"};
    color: ${e=>e.active?e.theme.success:e.color?e.theme[e.color]:e.theme.grey400};
  }
`,template=e=>{const{active:t,color:n,handleClick:r,size:l,textToCopy:o}=e;return a.createElement(c(),{text:o,onCopy:r},a.createElement(m,{active:t,color:n,"data-e2e":"copyClipboardCopyButton",name:t?"check":"copy-clipboard",size:l}))};class p extends a.PureComponent{constructor(e){super(e),this.timeout=void 0,this.state={active:!1},this.handleClick=this.handleClick.bind(this)}componentWillUnmount(){clearTimeout(this.timeout)}handleClick(){const{alertActions:e}=this.props;this.setState({active:!0}),this.timeout=setTimeout((()=>{this.setState({active:!1})}),2e3),e.displaySuccess(i.Rf),this.props.onClick&&this.props.onClick()}render(){return a.createElement(template,{active:this.state.active,color:this.props.color,handleClick:this.handleClick,"data-e2e":this.props["data-e2e"],textToCopy:this.props.textToCopy,size:this.props.size})}}const g=(0,r.connect)(null,(e=>({alertActions:(0,l.bindActionCreators)(o.Nw.$u,e)})))(p)},"./src/components/DataError/index.tsx":(e,t,n)=>{n.d(t,{Z:()=>components_DataError});var a,r=n("../../node_modules/react/index.js"),l=n("./node_modules/react-intl/lib/src/components/message.js"),o=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),i=n("../blockchain-info-components/src/index.js"),s=n("../../node_modules/ramda/es/prop.js"),c=n("../blockchain-wallet-v4/src/redux/payment/model.js"),d=n("./src/services/misc/index.js"),u=n("./src/modals/components/index.tsx"),m=n("./src/components/Flyout/model.tsx");var p=(0,o.ZP)(i.xv)(a||(a=function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  width: 80%;\n  margin-bottom: 20px;\n"])));const g=function ErrorHandler(e){var t=e.message,n=e.onClick,a=e["data-e2e"],o=(0,s.Z)("message",t)||(0,s.Z)("description",t),g=(0,d.K)(t);return g?r.createElement(r.Fragment,null,r.createElement(p,{size:"18px",weight:400},t),r.createElement(i.zx,{nature:"primary",onClick:function onClick(){return n(g)}},r.createElement(i.xv,{size:"18px",weight:400,color:"white"},r.createElement(l.Z,{id:"components.dataerror.archiveaddress",defaultMessage:"Archive Address"})))):o===u.lh?r.createElement(u.wq,null):o===c.B?r.createElement(i.xv,{size:"16px",weight:400},r.createElement(l.Z,{id:"components.dataerror.feesfetchfailure",defaultMessage:"There was a problem fetching fees. Please try again later."})):o===m.k7?r.createElement(i.xv,{size:"16px",weight:400,style:{width:"300px"}},r.createElement(l.Z,{id:"modals.recurringbuys.period_fetch_error",defaultMessage:"There was an error fetching recurring buy frequency options. Please try again."})):"string"==typeof o?r.createElement(i.xv,{size:"16px",color:"error",weight:500},o):r.createElement(i.Qt,{inline:!0},r.createElement(i.xv,{size:"18px",weight:400},r.createElement(l.Z,{id:"components.dataerror.body",defaultMessage:"Please "})),r.createElement(i.rU,{size:"18px","data-e2e":a?"".concat(a,"Link"):"",onClick:n},r.createElement(l.Z,{id:"components.dataerror.click",defaultMessage:"click here"})),r.createElement(i.xv,{size:"18px",weight:400},r.createElement(l.Z,{id:"components.dataerror.refresh",defaultMessage:" to refresh."})))},y=o.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`,E=o.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`,h=(0,o.ZP)(i.xv)`
  margin-top: 30px;
  margin-bottom: 20px;
`,components_DataError=e=>r.createElement(y,null,r.createElement(E,null,r.createElement(i.Ee,{name:"empty-search",width:"260px"}),r.createElement(h,{size:"18px",weight:500},r.createElement(l.Z,{id:"components.dataerror.header",defaultMessage:"Oops, something went wrong here!"})),r.createElement(g,Object.assign({},e))))},"./src/modals/Brokerage/Banks/Deposit/index.tsx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ie});var a=n("../../node_modules/react/index.js"),r=n("../../node_modules/react-redux/es/index.js"),l=n("../../node_modules/redux/es/redux.js"),o=n("./src/components/DataError/index.tsx"),i=n("./src/components/Flyout/index.tsx"),s=n("./src/data/index.ts"),c=n("./src/data/types.ts"),d=n("./src/providers/ModalEnhancer/index.tsx"),u=n("./src/modals/components/index.tsx"),m=n("./node_modules/react-intl/lib/src/components/message.js"),p=n("../../node_modules/ramda/es/path.js"),g=n("../../node_modules/redux-form/es/getFormValues.js"),y=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),E=n("../blockchain-wallet-v4/src/exchange/utils.ts"),h=n("../blockchain-info-components/src/index.js");const f=y.ZP.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,x=(0,y.ZP)(h.xv)`
  display: flex;
  align-items: center;
  width: 100%;
  font-weight: 600;
  font-size: 20px;
`,b=y.ZP.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: ${e=>e.isPaymentInformation?"0 40px":"auto"};

  > span:last-child {
    size: 10px;
    transition: transform 0.2s;
    color: ${e=>e.theme.grey600};
    &.active {
      transform: rotate(180deg);
    }
  }
`,w=(0,y.ZP)(i.Dx)`
  font-weight: 600;
  line-height: 1.5;
  color: ${e=>e.theme.grey900};
`,k=y.ZP.div`
  max-height: 0;
  margin-top: 0;
  overflow: hidden;
  transition: max-height, margin-top 0.3s;
  &.isToggled {
    max-height: 100%;
    margin-top: 12px;
  }
`,v=(0,y.ZP)(i.Dx)`
  font-size: 14px;
  font-weight: 500;
  color: ${e=>e.theme.grey600};
  line-height: 1.5;
`,A=(0,y.ZP)(i.o9)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`,C=(0,y.ZP)(i.X2)`
  padding: ${e=>e.isPaymentInformation?"16px 0":"auto"};
`,DropdownItem=({bodyText:e,isPaymentInformation:t,titleText:n})=>{const[r,l]=(0,a.useState)(!1);return a.createElement(C,{isPaymentInformation:t},a.createElement(b,{isPaymentInformation:t,onClick:()=>l(!r)},a.createElement(w,null,n),a.createElement(h.JO,{name:"chevron-down",className:r?"active":""})),a.createElement(k,{className:r?"isToggled":""},a.createElement(v,null,e)))},Z=(0,r.connect)((e=>({defaultMethod:s.wl.wx.zT.getAccount(e),fiatCurrency:s.wl.vE.Xd.getCurrency(e),formValues:(0,g.Z)("brokerageTx")(e)})),(e=>({brokerageActions:(0,l.bindActionCreators)(s.Nw.wx.brokerage,e)})))((e=>{const{defaultMethod:t,formValues:n}=e,r="Safeconnect(UK)"===(0,p.Z)(["attributes","entity"],t)?"SafeConnect":"SafeConnect (UAB)";return a.createElement(f,null,a.createElement(i.o9,{style:{paddingBottom:"10px"}},a.createElement(x,null,a.createElement(h.Ee,{name:"safe-connect",size:"20px",style:{marginRight:"28px"}}),a.createElement(m.Z,{id:"modals.brokerage.authorize.title",defaultMessage:"{entityName}",values:{entityName:r}}))),a.createElement(i.o9,{style:{paddingBottom:"16px"}},a.createElement(h.xv,{size:"20px",weight:600,color:"grey900"},a.createElement(m.Z,{id:"modals.brokerage.authrorize.approve",defaultMessage:"Approve Your Payment"}))),a.createElement(i.X2,null,a.createElement(i.Dx,null,a.createElement(m.Z,{id:"modals.brokerage.authorize.payment_total",defaultMessage:"Payment Total"})),a.createElement(i.B4,null,(0,E.LE)({unit:null==t?void 0:t.currency,value:null==n?void 0:n.amount}))),a.createElement(DropdownItem,{isPaymentInformation:!0,titleText:"Payment Information",bodyText:a.createElement(a.Fragment,null,a.createElement(i.X2,null,a.createElement(v,null,a.createElement(m.Z,{id:"modals.brokerage.authorize.payer",defaultMessage:"Payer Name"})),a.createElement(w,null,(0,p.Z)(["details","accountName"],t))),a.createElement(i.X2,null,a.createElement(v,null,a.createElement(m.Z,{id:"modals.brokerage.authorize.sort_code",defaultMessage:"Sort Code"})),a.createElement(w,null,(0,p.Z)(["details","sortCode"],t))),a.createElement(i.X2,null,a.createElement(v,null,a.createElement(m.Z,{id:"modals.brokerage.account_number",defaultMessage:"Account Number"})),a.createElement(w,null,(0,p.Z)(["details","accountNumber"],t))),a.createElement(i.X2,null,a.createElement(v,null,a.createElement(m.Z,{id:"modals.brokerage.authorize.payment_reference",defaultMessage:"Payment Reference"})),a.createElement(w,null,"BLOCKCHAIN")),a.createElement(i.X2,null,a.createElement(v,null,a.createElement(m.Z,{id:"modals.brokerage.authorize.bank_name",defaultMessage:"Bank Name"})),a.createElement(w,null,(0,p.Z)(["details","bankName"],t))))}),a.createElement(DropdownItem,{isPaymentInformation:!1,bodyText:a.createElement(m.Z,{id:"modals.brokertitleage.authorize.data_sharing",defaultMessage:"{entityName} will retrieve your bank data based on your request and provide this information to our.com.",values:{entityName:r}}),titleText:a.createElement(m.Z,{id:"modals.brokerage.authorize.data_sharing",defaultMessage:"Data Sharing"})}),a.createElement(DropdownItem,{isPaymentInformation:!1,bodyText:a.createElement(m.Z,{id:"modals.brokerage.authorize.secure_connection",defaultMessage:"Data is securely retrieved in read-only format and only for the duration agreed with you. You have the right to withdraw your consent at any time."}),titleText:a.createElement(m.Z,{id:"modals.brokerage.authorize.secure_connection.title",defaultMessage:"Secure Connection"})}),a.createElement(DropdownItem,{isPaymentInformation:!1,bodyText:"SafeConnect"===r?a.createElement(m.Z,{id:"modals.brokerage.authorize.fca",defaultMessage:"our.com is an agent of {entityName} Ltd. {entityName} Ltd is authorised and regulated by the Financial Conduct Authority under the Payment Service Regulations 2017 [827001] for the provision of Account Information and Payment Initiation services.",values:{entityName:r}}):a.createElement(m.Z,{id:"modals.brokerage.authorize.bol",defaultMessage:"SafeConnect UAB is authorised and regulated by the Bank of Lithuania under Payments Law (LB002045) for the provision of Account Information and Payment Initiation services."}),titleText:"SafeConnect"===r?a.createElement(m.Z,{id:"modals.brokerage.authorize.fca.title",defaultMessage:"FCA Authorisation"}):a.createElement(m.Z,{id:"modals.brokerage.authorize.bol.title",defaultMessage:"Bank of Lithuania Authorisation"})}),a.createElement(i.X2,null,a.createElement(v,null,a.createElement(m.Z,{id:"modals.brokerage.authorize.deposit_data.first",defaultMessage:"To easily set up payments from your bank to our.com, we are about to securely re-direct you to your bank where you will be asked to confirm the payment via {entityName}, an FCA regulated payment initiation provider for our.com.",values:{entityName:r}})),a.createElement(v,{style:{margin:"15px 0"}},a.createElement(m.Z,{id:"modals.brokerage.authorize.deposit_data.second",defaultMessage:"{entityName} will share these details with your bank, where you will then be asked to confirm the following payment setup.",values:{entityName:r}}))),a.createElement(DropdownItem,{isPaymentInformation:!1,bodyText:a.createElement(a.Fragment,null,a.createElement(m.Z,{id:"modals.brokerage.authorize.about_access",defaultMessage:"{entityName} will then use these details with our.com solely for the purposes of buying cryptocurrencies. This consent request is a one-off, you will not receive additional requests once completed.",values:{entityName:r}}),"SafeConnect"!==r&&a.createElement(m.Z,{id:"modals.brokerage.authorize.bol.terms",defaultMessage:"View SafeConnect UAB <a>Terms and Conditions</a> for more information.",values:{a:e=>a.createElement("a",{href:"https://yapi.ly/GDNT",rel:"noopener noreferrer",target:"_blank"},e)}})),titleText:a.createElement(m.Z,{id:"modals.brokerage.authorize.about_access.title",defaultMessage:"About the Access"})}),a.createElement(i.X2,null),a.createElement(A,null,a.createElement(h.zx,{nature:"primary","data-e2e":"obApprove",type:"submit",fullwidth:!0,height:"48px",onClick:()=>{e.brokerageActions.setDWStep({dwStep:c.RF.CONFIRM})}},a.createElement(m.Z,{id:"copy.approve",defaultMessage:"Approve"})),a.createElement(h.zx,{nature:"light-red","data-e2e":"obDeny",type:"button",fullwidth:!0,height:"48px",color:"red400",style:{marginTop:"16px"},onClick:()=>{e.handleClose()}},a.createElement(m.Z,{id:"copy.deny",defaultMessage:"Deny"}))))}));var T=n("../blockchain-wallet-v4/src/index.ts");const _=y.ZP.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`,template_loading=()=>a.createElement(_,null,a.createElement(h.T_,{width:"80px",height:"80px"}),a.createElement(h.xv,{weight:600,color:"grey600",style:{marginTop:"24px"}},a.createElement(m.Z,{id:"modals.simplebuy.processing",defaultMessage:"Processing…"})));var M=n("../../node_modules/ramda/es/lift.js");const getData=(e,t)=>{const n=s.wl.wx.wd.getSBBalances(e),a=s.wl.wx.zT.getBankTransferAccounts(e),r=s.wl.wx.zT.getAccount(e),l=s.wl.gm.getBeneficiaries(e),o=s.wl.wx.XW.getMinAmountForCurrency(e,t.fiatCurrency);return(0,M.Z)(((e,n,a,l)=>({account:r,balances:e,bankTransferAccounts:n,beneficiaries:a.filter((e=>e.currency===t.fiatCurrency)),minAmount:l})))(n,a,l,o)};var N=n("./src/components/Brokerage/index.tsx"),S=n("./src/components/Flyout/model.tsx"),D=n("./src/services/images/index.ts");const P=y.ZP.div`
  display: flex;
  flex-direction: column;
`,B=(0,y.ZP)(i.o9)`
  padding: 40px 40px 16px 40px;
`,O=(0,y.ZP)(h.xv)`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
`,z=y.ZP.div`
  border-top: 1px solid ${e=>e.theme.grey000};
`,template_success=e=>a.createElement(P,null,a.createElement(B,null,a.createElement(O,{color:"grey800",size:"20px",weight:600},a.createElement(h.JO,{cursor:!0,name:"arrow-back",size:"20px",color:"grey600",style:{marginRight:"28px"},role:"button",onClick:()=>e.brokerageActions.setDWStep({dwStep:c.RF.ENTER_AMOUNT})}),a.createElement("div",null,a.createElement(m.Z,{id:"scenes.settings.linked_banks",defaultMessage:"Linked Banks"})))),a.createElement(z,null,e.bankTransferAccounts.map((t=>{var n,r;return a.createElement(S.Br,{key:t.id,bankDetails:t.details,text:t.details.bankName,isActive:t.id===(null===(n=e.account)||void 0===n?void 0:n.id),icon:(r=t.details.bankName,a.createElement(h.Ee,{name:(0,D.t)(r),height:"48px"})),onClick:()=>{e.brokerageActions.setBankDetails({account:t}),e.brokerageActions.setDWStep({dwStep:c.RF.ENTER_AMOUNT})}})})),e.beneficiaries.map((t=>a.createElement(S.zn,{key:t.id,beneficiary:t,minAmount:e.minAmount,onClick:()=>{e.brokerageActions.setDWStep({dwStep:c.RF.WIRE_INSTRUCTIONS})},type:"DEPOSIT"}))),a.createElement(N.A,{"data-e2e":"DepositAddNewPaymentMethod",onClick:()=>{e.brokerageActions.setDWStep({addNew:!0,dwStep:c.RF.DEPOSIT_METHODS})}},a.createElement(h.xv,{color:"blue600",size:"16px",weight:600},a.createElement(m.Z,{id:"buttons.add_new",defaultMessage:"+ Add New"}))))),R=(0,r.connect)(((e,t)=>({data:getData(e,t)})),(e=>({brokerageActions:(0,l.bindActionCreators)(s.Nw.wx.brokerage,e),custodialActions:(0,l.bindActionCreators)(s.Nw.gm,e),withdrawActions:(0,l.bindActionCreators)(s.Nw.wx.withdraw,e)})))((e=>((0,a.useEffect)((()=>{e.fiatCurrency&&!T.Nt.Success.is(e.data)&&(e.brokerageActions.fetchBankTransferAccounts(),e.withdrawActions.fetchWithdrawalFees("ALL")),e.custodialActions.fetchCustodialBeneficiaries(e.fiatCurrency)}),[]),e.data.cata({Failure:()=>a.createElement(i.ub,{action:"close","data-e2e":"depositTryAgain",handler:e.handleClose}),Loading:()=>a.createElement(template_loading,null),NotAsked:()=>a.createElement(template_loading,null),Success:t=>a.createElement(template_success,Object.assign({},t,e))})))),selectors_getData=e=>{const t=s.wl.wx.lW.getWithdrawLockCheckRule(e);return(0,M.Z)((e=>({withdrawLockCheck:e})))(t)};var I=n("./src/modals/SimpleBuy/model.tsx"),F=n("../../node_modules/moment/moment.js"),L=n.n(F),U=n("../blockchain-wallet-v4/src/types/index.ts");const LineItemText=e=>a.createElement(h.xv,{color:"grey900",size:"16px",weight:600,lineHeight:"24px",capitalize:!0},e.children),j=y.ZP.div`
  padding: 18px 40px;
`,K=(0,y.ZP)(j)`
  border-bottom: 1px solid ${e=>e.theme.grey000};
`,Confirm_template_success=e=>{var t,n,r,l,o,s,d;const[u,p]=(0,a.useState)(!1),g=(null===(t=e.defaultMethod)||void 0===t?void 0:t.partner)===c.RB.YAPILY,y=(0,a.useCallback)((()=>{e.brokerageActions.setDWStep({dwStep:c.RF.ENTER_AMOUNT})}),[]),f=(0,a.useCallback)((()=>{e.handleClose()}),[]),x=(0,a.useCallback)((()=>{p(!0),e.brokerageActions.createFiatDeposit()}),[]),b=(null===(n=e.formValues)||void 0===n?void 0:n.amount)||0,w=e.withdrawLockCheck&&e.withdrawLockCheck.lockTime>0||!1,k=w?L().duration(null===(r=e.withdrawLockCheck)||void 0===r?void 0:r.lockTime,"seconds").days():0;return a.createElement(i.$K,null,a.createElement(i.gi,{"data-e2e":"confirmDepositBackButton",mode:"back",onClick:y},a.createElement(m.Z,{id:"modals.brokerage.confirm_deposit",defaultMessage:"Confirm Deposit"})),a.createElement(i.rR,{mode:"top"},a.createElement(K,null,a.createElement(h.xv,{color:"grey800",size:"32px",weight:600},(0,E.LE)({unit:null===(l=e.defaultMethod)||void 0===l?void 0:l.currency,value:b}))),a.createElement(K,null,a.createElement(h.xv,{color:"grey600",size:"14px",weight:500,lineHeight:"21px"},a.createElement(m.Z,{id:"copy.from",defaultMessage:"From"})),(e=>{if(!e||!e.details)return"Bank Transfer";const{accountNumber:t,bankAccountType:n,bankName:r}=e.details;return a.createElement(LineItemText,null,r," ",(null==n?void 0:n.toLowerCase())||""," ",t)})(e.defaultMethod)),a.createElement(K,null,a.createElement(h.xv,{color:"grey600",size:"14px",weight:500,lineHeight:"21px"},a.createElement(m.Z,{id:"copy.to",defaultMessage:"To"})),a.createElement(LineItemText,null,a.createElement(m.Z,{id:"modals.brokerage.fiat_account",defaultMessage:"{currency} Account",values:{currency:null===(o=e.defaultMethod)||void 0===o?void 0:o.currency}}))),!g&&a.createElement(K,null,a.createElement(h.xv,{color:"grey600",size:"14px",weight:500,lineHeight:"21px"},a.createElement(m.Z,{id:"modals.brokerage.funds_will_arrive",defaultMessage:"Funds Will Arrive"})),a.createElement(LineItemText,null,L()().add(3,"days").format("dddd, MMM Do, YYYY"))),a.createElement(K,null,a.createElement(h.xv,{color:"grey600",size:"14px",weight:500,lineHeight:"21px"},a.createElement(m.Z,{id:"copy.total",defaultMessage:"Total"})),a.createElement(LineItemText,null,(0,E.LE)({digits:0,unit:(null===(s=e.defaultMethod)||void 0===s?void 0:s.currency)||"USD",value:b}))),a.createElement("div",{style:{padding:"20px 40px 0"}},(0,I.TL)(w,k,U.t8.BANK_TRANSFER))),a.createElement(i.M_,null,a.createElement(h.zx,{"data-e2e":"submitDepositAmount",height:"48px",size:"16px",nature:"primary",onClick:x,fullwidth:!0,disabled:u},u?a.createElement(h.JA,{height:"16px",width:"16px",color:"white"}):a.createElement(m.Z,{id:"modals.simplebuy.deposit.deposit_button",defaultMessage:"Deposit {amount}",values:{amount:(0,E.LE)({digits:0,unit:(null===(d=e.defaultMethod)||void 0===d?void 0:d.currency)||"USD",value:b})}})),a.createElement(h.zx,{"data-e2e":"depositCancel",disabled:u,size:"16px",height:"48px",nature:"light-red",onClick:f,fullwidth:!0,style:{marginTop:"16px"}},a.createElement(m.Z,{id:"buttons.cancel",defaultMessage:"Cancel"}))))},W=(0,r.connect)((e=>({data:selectors_getData(e),defaultMethod:s.wl.wx.zT.getAccount(e),fiatCurrency:s.wl.vE.Xd.getCurrency(e),formValues:s.wl.cr.getFormValues("brokerageTx")(e)})),(e=>({brokerageActions:(0,l.bindActionCreators)(s.Nw.wx.brokerage,e),sendActions:(0,l.bindActionCreators)(s.Nw.wx.send,e)})))((e=>((0,a.useEffect)((()=>{e.sendActions.getLockRule()}),[]),e.data.cata({Failure:()=>a.createElement(i.ub,{action:"close","data-e2e":"depositTryAgain",handler:e.handleClose}),Loading:()=>a.createElement(template_loading,null),NotAsked:()=>a.createElement(template_loading,null),Success:t=>a.createElement(Confirm_template_success,Object.assign({},t,e))})))),DepositMethods_selectors_getData=e=>{const t=s.wl.wx.wd.getSBBalances(e),n=s.wl.wx.zT.getBankTransferAccounts(e),a=s.wl.wx.wd.getSBPaymentMethods(e),r=s.wl.vE.Xd.getCurrency(e);return(0,M.Z)(((e,t,n,a)=>({balances:e,bankTransferAccounts:t,paymentMethods:n,walletCurrency:a})))(t,n,a,r)};var $=n("./src/modals/SimpleBuy/PaymentMethods/Methods/BankWire/index.tsx"),Y=n("./src/components/Cartridge/index.ts"),G=n("./src/components/SimpleBuy/index.tsx");const H=(0,y.ZP)(G.m5)`
  margin-bottom: 2px;
`,V=(0,y.ZP)(G.R2)`
  min-height: 75px;
`,q=y.ZP.div`
  display: flex;
  margin-top: 8px;
  align-items: center;
  padding-left: 45px;
`,X=y.ZP.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,J=y.ZP.div`
  display: flex;
  flex-direction: row;
`,DepositMethods_BankDeposit=({icon:e,onClick:t,value:n})=>a.createElement(G.Uq,{"data-e2e":`sb${n.type.toLowerCase()}LinkBank`,role:"button",onClick:t},a.createElement(X,null,a.createElement(J,null,a.createElement(V,null,e),a.createElement(G.VY,null,a.createElement(H,null,a.createElement(m.Z,{id:"modals.simplebuy.linkbank",defaultMessage:"Link a Bank"})),a.createElement(G.iD,null,a.createElement(m.Z,{id:"copy.instantly_available",defaultMessage:"Instantly Available"})),a.createElement(G.dk,null,a.createElement(m.Z,{id:"modals.brokerage.bank_deposit_description",defaultMessage:"Securely link a bank and send cash to your our.com Wallet at anytime."}))),a.createElement(h.JO,{name:"chevron-right",size:"24px",color:"grey400"})),a.createElement(q,null,a.createElement(Y.El,null,a.createElement(m.Z,{id:"copy.most_popular",defaultMessage:"Most Popular"}))))),Q=y.ZP.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`,ee=(0,y.ZP)(i.o9)`
  height: unset;
`,te=(0,y.ZP)(h.xv)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7px;
`,ne=y.ZP.section`
  border-top: 1px solid ${e=>e.theme.grey000};
`,ae=y.ZP.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${e=>e.theme.blue000};
  display: flex;
  align-items: center;
  justify-content: center;
`,getIcon=e=>{switch(e.type){case U.t8.BANK_TRANSFER:case U.t8.LINK_BANK:default:return a.createElement(h.Ee,{name:"bank",height:"48px"});case U.t8.BANK_ACCOUNT:return a.createElement(ae,null,a.createElement(h.JO,{size:"18px",color:"blue600",name:"arrow-down"}))}},getType=e=>{switch(e.type){case U.t8.BANK_TRANSFER:case U.t8.LINK_BANK:default:return a.createElement(m.Z,{id:"modals.simplebuy.banklink",defaultMessage:"Link a Bank"});case U.t8.BANK_ACCOUNT:let t;return t="EUR"===e.currency||"GBP"===e.currency?a.createElement(m.Z,{id:"buttons.transfer",defaultMessage:"Transfer"}):a.createElement(m.Z,{id:"modals.simplebuy.bankwire",defaultMessage:"Wire Transfer"}),t}},DepositMethods_template_success=({addNew:e,brokerageActions:t,close:n,fiatCurrency:r,paymentMethods:l})=>{const o=l.methods.find((e=>e.type===U.t8.BANK_TRANSFER)),i=l.methods.find((e=>e.type===U.t8.BANK_ACCOUNT));return a.createElement(Q,null,a.createElement(ee,null,a.createElement(te,{color:"grey800",size:"20px",weight:600},a.createElement("div",null,a.createElement(m.Z,{id:"modals.brokerage.deposit_methods",defaultMessage:"Select a Deposit Method"})),a.createElement(h.JO,{cursor:!0,"data-e2e":"sbCloseModalIcon",name:"close",size:"20px",color:"grey600",role:"button",onClick:()=>{n()}}))),a.createElement(ne,null,o&&a.createElement(DepositMethods_BankDeposit,{icon:getIcon(o),onClick:()=>{e?(t.showModal({modalType:"USD"===r?"ADD_BANK_YODLEE_MODAL":"ADD_BANK_YAPILY_MODAL",origin:c.$p.ADD_BANK_DEPOSIT}),t.setAddBankStep({addBankStep:c.Hb.ADD_BANK}),t.setDWStep({dwStep:c.RF.ENTER_AMOUNT})):t.setDWStep({dwStep:c.RF.ENTER_AMOUNT})},text:getType(o),value:o}),i&&a.createElement($.Z,{icon:getIcon(i),onClick:()=>{t.setDWStep({dwStep:c.RF.WIRE_INSTRUCTIONS})},text:getType(i),value:i})))},re=(0,r.connect)((e=>({addNew:e.components.brokerage.addNew,data:DepositMethods_selectors_getData(e),fiatCurrency:s.wl.vE.Xd.getCurrency(e).getOrElse("USD")})),(e=>({brokerageActions:(0,l.bindActionCreators)(s.Nw.wx.brokerage,e),buySellActions:(0,l.bindActionCreators)(s.Nw.wx.buySell,e),formActions:(0,l.bindActionCreators)(s.Nw.cr,e)})))((e=>{(0,a.useEffect)((()=>{e.fiatCurrency&&!T.Nt.Success.is(e.data)&&(e.buySellActions.fetchFiatEligible(e.fiatCurrency),e.buySellActions.fetchPaymentMethods(e.fiatCurrency),e.brokerageActions.fetchBankTransferAccounts())}),[]);const t=(0,a.useCallback)((()=>{e.brokerageActions.fetchBankTransferAccounts()}),[]);return e.data.cata({Failure:()=>a.createElement(i.ub,{action:"retry","data-e2e":"withdrawReload",handler:t}),Loading:()=>a.createElement(u.gb,{text:u.Ue.LOADING}),NotAsked:()=>a.createElement(u.gb,{text:u.Ue.LOADING}),Success:t=>a.createElement(DepositMethods_template_success,Object.assign({},t,e))})})),DepositStatus_selectors_getData=e=>{const t=s.wl.vE.Xd.getCurrency(e);return(0,M.Z)((e=>({amount:0,completeDate:"TODO",walletCurrency:e})))(t)},le=y.ZP.div`
  display: flex;
  justify-content: flex-end;
`,oe=(0,y.ZP)(i.o9)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`,ie=y.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,se=(0,y.ZP)(ie)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 32px 0 40px 0;
`,ce=y.ZP.div`
  position: relative;
`,de=y.ZP.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  flex: 1;
`,ue=y.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,me=y.ZP.div`
  position: absolute;
  top: -15px;
  right: -15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  border-radius: 50%;
  background: ${e=>e.theme.white};
`,pe=(0,y.ZP)(h.xv)`
  text-align: center;
`,DepositStatus_template_success=e=>{var t,n,r,l;const o=(null===(t=e.formValues)||void 0===t?void 0:t.currency)||"USD",i=(null===(n=e.formValues)||void 0===n?void 0:n.amount)||0,s=(null===(r=e.formValues)||void 0===r?void 0:r.currency)||"USD",d=(null===(l=e.defaultMethod)||void 0===l?void 0:l.partner)===c.RB.YAPILY;return a.createElement(oe,null,a.createElement(le,null,a.createElement(h.JO,{cursor:!0,"data-e2e":"depositCloseModalIcon",name:"close",size:"20px",color:"grey600",role:"button",onClick:e.handleClose})),a.createElement(de,null,a.createElement(ie,null,a.createElement(ce,null,a.createElement(ue,null,a.createElement(h.JO,{color:o,name:o,size:"64px"})),a.createElement(me,null,a.createElement(h.JO,{name:"checkmark-circle-filled",color:"green400",size:"32px"})))),a.createElement(se,null,a.createElement(h.xv,{color:"grey800",size:"20px",weight:600},a.createElement(m.Z,{id:"modals.brokerage.deposit_success.title",defaultMessage:"{amount} Deposited!",values:{amount:(0,E.LE)({digits:0,unit:s,value:i})}})),a.createElement(pe,{color:"grey600",size:"14px",weight:600},a.createElement(m.Z,{id:"modals.brokerage.deposit_success.wait_description",defaultMessage:"While we wait for your bank to send the cash, here’s early access to {amount} in your {currency} Cash Account so you can buy crypto right away.",values:{amount:(0,E.LE)({digits:0,unit:s,value:i}),currency:o}})),!d&&a.createElement(pe,{color:"grey600",size:"14px",weight:600,style:{marginTop:"16px"}},a.createElement(m.Z,{id:"modals.brokerage.deposit_success.funds_available",defaultMessage:"Your funds will be available to withdraw once the bank transfer is complete in 3-5 business days."}))),a.createElement(h.zx,{"data-e2e":"depositSuccessOk",height:"48px",size:"16px",nature:"primary",onClick:e.handleClose,fullwidth:!0},a.createElement(h.xv,{weight:600,color:"white"},a.createElement(m.Z,{id:"buttons.ok",defaultMessage:"OK"})))))},ge=y.ZP.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 56px;
  box-sizing: border-box;
`,ye=(0,y.ZP)(h.xv)`
  margin: 40px 0 10px;
`,Ee=(0,y.ZP)(h.xv)`
  margin: 0 0 24px;
`,template_timedOut=e=>a.createElement(ge,null,a.createElement("div",null,a.createElement(h.Ee,{width:"48px",height:"48px",name:"world-alert",srcset:{"world-alert2":"2x","world-alert3":"3x"}}),a.createElement(ye,{weight:600,size:"20px",lineHeight:"150%"},a.createElement(m.Z,{id:"modals.brokerage.timed_out_title",defaultMessage:"We timed out waiting to hear from your bank."})),a.createElement(Ee,{weight:400,size:"14px",lineHeight:"150%"},a.createElement(m.Z,{id:"modals.brokerage.timed_out_sub",defaultMessage:"This happens from time to time. Wait a few minutes and then check the status of your deposit in the transaction list."})),a.createElement(h.zx,{fullwidth:!0,height:"48px","data-e2e":"addBankClose",nature:"primary",size:"16px",onClick:e.handleClose},a.createElement(m.Z,{id:"buttons.close",defaultMessage:"Close"})))),he=(0,r.connect)((e=>({data:DepositStatus_selectors_getData(e),defaultMethod:s.wl.wx.zT.getAccount(e),fiatCurrency:s.wl.wx.wd.getFiatCurrency(e)||"USD",formValues:(0,g.Z)("brokerageTx")(e)})),(e=>({brokerageActions:(0,l.bindActionCreators)(s.Nw.wx.brokerage,e)})))((e=>((0,a.useEffect)((()=>{e.fiatCurrency&&!T.Nt.Success.is(e.data)&&(e.buySellActions.fetchPaymentMethods(e.fiatCurrency),e.buySellActions.fetchFiatEligible(e.fiatCurrency),e.brokerageActions.fetchBankTransferAccounts(),e.buySellActions.fetchSDDEligibility())}),[]),e.data.cata({Failure:()=>a.createElement(i.ub,{action:"close","data-e2e":"depositTryAgain",handler:e.handleClose}),Loading:()=>a.createElement(u.gb,{text:u.Ue.LOADING}),NotAsked:()=>a.createElement(u.gb,{text:u.Ue.LOADING}),Success:t=>{var n,r,l,o,s,c,d;return"CLEARED"===(null===(r=null===(n=e.formValues)||void 0===n?void 0:n.order)||void 0===r?void 0:r.state)||"COMPLETE"===(null===(o=null===(l=e.formValues)||void 0===l?void 0:l.order)||void 0===o?void 0:o.state)||"COMPLETED"===(null===(c=null===(s=e.formValues)||void 0===s?void 0:s.order)||void 0===c?void 0:c.state)?a.createElement(DepositStatus_template_success,Object.assign({},t,e)):(null===(d=e.formValues)||void 0===d?void 0:d.retryTimeout)?a.createElement(template_timedOut,Object.assign({},e)):a.createElement(i.ub,{action:"close","data-e2e":"depositTryAgain",handler:e.handleClose})}})))),EnterAmount_selectors=e=>{const t=s.wl.wx.zT.getBankTransferAccounts(e).getOrElse([]),n=s.wl.wx.zT.getAccount(e),a=s.wl.wx.wd.getSBFiatEligible(e),r=s.wl.wx.wd.getSBPaymentMethods(e),l=s.wl.wx.wd.getUserLimit(e,U.t8.BANK_TRANSFER);return(0,M.Z)(((e,a,r)=>({bankTransferAccounts:t,defaultMethod:n,depositLimits:e,eligibility:a,paymentMethods:r})))(l,a,r)},fe=(0,r.connect)((e=>({data:EnterAmount_selectors(e),defaultMethod:s.wl.wx.zT.getAccount(e),fiatCurrency:s.wl.wx.zT.getFiatCurrency(e)})),(e=>({brokerageActions:(0,l.bindActionCreators)(s.Nw.wx.brokerage,e),buySellActions:(0,l.bindActionCreators)(s.Nw.wx.buySell,e)})))((e=>{(0,a.useEffect)((()=>{e.fiatCurrency&&!T.Nt.Success.is(e.data)&&(e.buySellActions.fetchPaymentMethods(e.fiatCurrency),e.buySellActions.fetchFiatEligible(e.fiatCurrency),e.brokerageActions.fetchBankTransferAccounts(),e.buySellActions.fetchSDDEligibility())}),[e.fiatCurrency]);const onSubmit=()=>{e.defaultMethod&&"partner"in e.defaultMethod&&e.defaultMethod.partner===c.RB.YAPILY?e.brokerageActions.setDWStep({dwStep:c.RF.AUTHORIZE}):e.brokerageActions.setDWStep({dwStep:c.RF.CONFIRM})},t=(0,a.useCallback)((()=>{e.brokerageActions.setDWStep({dwStep:c.RF.DEPOSIT_METHODS})}),[]),n=(0,a.useCallback)((()=>e.brokerageActions.setDWStep({dwStep:c.RF.DEPOSIT_METHODS})),[]),r=(0,a.useCallback)((()=>{e.brokerageActions.setDWStep({dwStep:c.RF.BANK_LIST})}),[]),l=(0,a.useCallback)((()=>{e.brokerageActions.showModal({modalType:"USD"===e.fiatCurrency?"ADD_BANK_YODLEE_MODAL":"ADD_BANK_YAPILY_MODAL",origin:c.$p.ADD_BANK_DEPOSIT}),e.brokerageActions.setAddBankStep({addBankStep:c.Hb.ADD_BANK})}),[e.fiatCurrency]);return e.data.cata({Failure:()=>a.createElement(i.ub,{action:"retry","data-e2e":"sbTryCurrencySelectionAgain",handler:t}),Loading:()=>a.createElement(u.gb,{text:u.Ue.LOADING}),NotAsked:()=>a.createElement(u.gb,{text:u.Ue.LOADING}),Success:o=>{const s=o.paymentMethods.methods.length&&o.paymentMethods.methods.find((e=>"0"!==e.limits.max)),d=(0,S.Zu)(e.defaultMethod,o.bankTransferAccounts),u=o.paymentMethods.methods.find((e=>e.type===U.t8.BANK_TRANSFER||e.type===U.t8.BANK_ACCOUNT));let m;return m=o.bankTransferAccounts.length>0?r:l,s&&u?a.createElement(i.aG,{onSubmit,initialValues:{currency:e.fiatCurrency},fiatCurrency:e.fiatCurrency,handleBack:n,handleMethodClick:m,orderType:c.vU.DEPOSIT,paymentAccount:d,paymentMethod:u}):a.createElement(i.ub,{action:"retry","data-e2e":"sbTryCurrencySelectionAgain",handler:t})}})})),OpenBankingConnect_selectors_getData=e=>{const t=s.wl.wx.zT.getBankCredentials(e);return(0,M.Z)((e=>({bankCredentials:e})))(t)},OpenBankingConnect_template_success=e=>{const{order:t}=e.formValues,n=t.extraAttributes&&"authorisationUrl"in t.extraAttributes&&t.extraAttributes.authorisationUrl||"",r=t.extraAttributes&&"qrcodeUrl"in t.extraAttributes&&t.extraAttributes.qrcodeUrl||"";return a.createElement(u.zK,null,a.createElement(u.YX,{handleClose:e.handleClose},a.createElement(m.Z,{id:"copy.connect_to_your_bank",defaultMessage:"Connect to your bank"})),a.createElement(u.Oi,null,a.createElement(u.NA,{qrCode:r},a.createElement(m.Z,{id:"modals.brokerage.link_via_mobile",defaultMessage:"Link via mobile"})),a.createElement(u.Hr,null),a.createElement(u.$0,null,a.createElement(u.dC,{authUrl:n},a.createElement(m.Z,{id:"modals.brokerage.link_via_desktop",defaultMessage:"Link via desktop"})),a.createElement(u.mZ,{qrCode:r}))))},xe=(0,r.connect)((e=>({account:s.wl.wx.zT.getAccount(e),data:OpenBankingConnect_selectors_getData(e),formValues:s.wl.cr.getFormValues("brokerageTx")(e),walletCurrency:s.wl.vE.Xd.getCurrency(e).getOrElse("USD")})),(e=>({brokerageActions:(0,l.bindActionCreators)(s.Nw.wx.brokerage,e)})))((e=>{const fetchBank=()=>{e.walletCurrency&&!T.Nt.Success.is(e.data)&&e.brokerageActions.fetchBankLinkCredentials(e.walletCurrency)};return(0,a.useEffect)(fetchBank,[e.walletCurrency]),e.data.cata({Failure:()=>a.createElement(o.Z,{onClick:fetchBank}),Loading:()=>a.createElement(u.gb,{text:u.Ue.LOADING}),NotAsked:()=>a.createElement(u.gb,{text:u.Ue.LOADING}),Success:t=>a.createElement(OpenBankingConnect_template_success,Object.assign({},e,t))})})),WireInstructions_selectors_getData=e=>{const t=s.wl.wx.wd.getSBAccount(e),n=s.wl.qz.N5.getUserData(e);return(0,M.Z)(((e,t)=>({account:e,userData:t})))(t,n)};var be,we=n("../blockchain-wallet-v4/src/exchange/currencies/index.ts"),ke=n("./src/components/Clipboard/CopyClipboardButton/index.tsx");!function(e){e.DOMESTIC="domestic",e.INTERNATIONAL="international"}(be||(be={}));const ve=y.ZP.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`,Ae=(0,y.ZP)(h.xv)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`,Ce=(0,y.ZP)(h.xv)`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
  font-weight: 600;
  font-size: 20px;
`,Ze=(0,y.ZP)(i.o9)`
  display: flex;
  padding-top: 24px;
  flex-direction: column;
  height: 100%;
`,Te=y.ZP.div`
  margin-top: 16px;
`,_e=(0,y.ZP)(h.Qt)`
  margin-top: 20px;
`,Me=(0,y.ZP)(i.X2)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,Ne=y.ZP.div`
  display: flex;
  flex-direction: column;
  margin-top: 41px;
`,Se=y.ZP.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
`,De=y.ZP.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${e=>e.theme.grey800};
  margin-left: 16px;
`,Pe=y.ZP.div`
  display: flex;
`,Be=y.ZP.div`
  margin-top: 40px;
  display: inline-block;
`,WireInstructions_template_success=e=>{const[t,n]=(0,a.useState)(be.DOMESTIC),r="USD"===e.account.currency?e.account.agent.recipient:`${e.userData.firstName} ${e.userData.lastName}`;return a.createElement(ve,null,a.createElement("div",null,a.createElement(i.o9,null,a.createElement(Ce,null,a.createElement(h.JO,{cursor:!0,name:"arrow-left",size:"20px",color:"grey600",style:{marginRight:"28px"},role:"button",onClick:()=>{e.brokerageActions.setDWStep({dwStep:c.RF.DEPOSIT_METHODS})}}),a.createElement("div",null,a.createElement(m.Z,{id:"modals.simplebuy.linkbank",defaultMessage:"Link a Bank"}))),a.createElement(Te,null,a.createElement(Ae,{color:"grey800",size:"24px",weight:600},"USD"===e.account.currency?a.createElement(m.Z,{id:"modals.brokerage.deposit_currency",defaultMessage:"Deposit {currency}",values:{currency:e.account.currency}}):a.createElement(m.Z,{id:"modals.simplebuy.deposit.title",defaultMessage:"Deposit {currency}",values:{currency:we.Z[e.account.currency].displayName}})),a.createElement(Ae,{color:"grey600",size:"24px",weight:600},"USD"===e.account.currency?a.createElement(m.Z,{id:"modals.simplebuy.transferdetails.wire_transfer",defaultMessage:"Wire Transfer"}):a.createElement(m.Z,{id:"modals.simplebuy.deposit.bank_transfer",defaultMessage:"Bank Transfer"}))),"USD"===e.account.currency&&a.createElement(Be,null,a.createElement(h.d0,null,a.createElement(h.gq,{role:"button",selected:t===be.DOMESTIC,onClick:()=>n(be.DOMESTIC),"data-e2e":"sbDomesticButton"},a.createElement(m.Z,{id:"modals.simplebuy.transferdetails.domestic",defaultMessage:"Domestic"})),a.createElement(h.gq,{role:"button",selected:t===be.INTERNATIONAL,onClick:()=>n(be.INTERNATIONAL),"data-e2e":"sbInternationalButton"},a.createElement(m.Z,{id:"modals.simplebuy.transferdetails.international",defaultMessage:"International"}))))),"USD"===e.account.currency&&a.createElement(Me,null,a.createElement("div",null,a.createElement(i.Dx,null,a.createElement(m.Z,{id:"modals.simplebuy.transferdetails.referenceID",defaultMessage:"Reference ID (Required)"})),a.createElement(i.B4,{"data-e2e":"sbReferenceId"},e.account.address)),a.createElement(Pe,null,a.createElement(ke.Z,{textToCopy:e.account.address}))),a.createElement(Me,null,a.createElement("div",null,a.createElement(i.Dx,null,a.createElement(m.Z,{id:"modals.simplebuy.transferdetails.recipient",defaultMessage:"Recipient"})),a.createElement(i.B4,{"data-e2e":"sbRecipientName"},r)),a.createElement(Pe,null,a.createElement(ke.Z,{textToCopy:r}))),("USD"===e.account.currency||"EUR"===e.account.currency)&&a.createElement(Me,null,a.createElement("div",null,a.createElement(i.Dx,null,a.createElement(m.Z,{id:"modals.simplebuy.transferdetails.bankname",defaultMessage:"Bank Name"})),a.createElement(i.B4,{"data-e2e":"sbBankName"},e.account.agent.name)),a.createElement(Pe,null,a.createElement(ke.Z,{textToCopy:e.account.agent.name}))),"USD"===e.account.currency&&t===be.INTERNATIONAL&&a.createElement(Me,null,a.createElement("div",null,a.createElement(i.Dx,null,a.createElement(m.Z,{id:"modals.simplebuy.transferdetails.accountType",defaultMessage:"Account Type"})),a.createElement(i.B4,{"data-e2e":"sbAccountType"},e.account.agent.accountType)),a.createElement(Pe,null,a.createElement(ke.Z,{textToCopy:e.account.agent.accountType}))),"EUR"===e.account.currency&&a.createElement(Me,null,a.createElement("div",null,a.createElement(i.Dx,null,a.createElement(m.Z,{id:"modals.simplebuy.transferdetails.IBAN",defaultMessage:"IBAN"})),a.createElement(i.B4,{"data-e2e":"sbIbanAddress"},e.account.address)),a.createElement(Pe,null,a.createElement(ke.Z,{textToCopy:e.account.address}))),("USD"===e.account.currency||"GBP"===e.account.currency)&&!!e.account.agent.account&&a.createElement(Me,null,a.createElement("div",null,a.createElement(i.Dx,null,a.createElement(m.Z,{id:"modals.simplebuy.transferdetails.account",defaultMessage:"Account Number"})),a.createElement(i.B4,{"data-e2e":"sbAccountNumber"},e.account.agent.account)),a.createElement(Pe,null,a.createElement(ke.Z,{textToCopy:e.account.agent.account}))),"GBP"===e.account.currency&&a.createElement(Me,null,a.createElement("div",null,a.createElement(i.Dx,null,a.createElement(m.Z,{id:"modals.simplebuy.transferdetails.sortcode",defaultMessage:"Sort Code"})),a.createElement(i.B4,{"data-e2e":"sbSortCode"},e.account.agent.code)),a.createElement(Pe,null,a.createElement(ke.Z,{textToCopy:e.account.agent.code}))),"EUR"===e.account.currency&&a.createElement(Me,null,a.createElement("div",null,a.createElement(i.Dx,null,a.createElement(m.Z,{id:"modals.simplebuy.transferdetails.swift",defaultMessage:"Bank Code (SWIFT / BIC)"})),a.createElement(i.B4,{"data-e2e":"sbBankCode"},e.account.agent.code)),a.createElement(Pe,null,a.createElement(ke.Z,{textToCopy:e.account.agent.code}))),"USD"===e.account.currency&&a.createElement(Me,null,a.createElement("div",null,a.createElement(i.Dx,null,a.createElement(m.Z,{id:"modals.simplebuy.transferdetails.routingnumber",defaultMessage:"Routing Number"})),a.createElement(i.B4,{"data-e2e":"sbRoutingNumber"},e.account.agent.routingNumber)),a.createElement(Pe,null,a.createElement(ke.Z,{textToCopy:e.account.agent.routingNumber}))),"USD"===e.account.currency&&t===be.INTERNATIONAL&&a.createElement(Me,null,a.createElement("div",null,a.createElement(i.Dx,null,a.createElement(m.Z,{id:"modals.simplebuy.transferdetails.swift.usdInternational",defaultMessage:"SWIFT / BIC Code"})),a.createElement(i.B4,{"data-e2e":"sbSwiftCode"},e.account.agent.swiftCode)),a.createElement(Pe,null,a.createElement(ke.Z,{textToCopy:e.account.agent.swiftCode}))),"USD"===e.account.currency&&a.createElement(Me,null,a.createElement("div",null,a.createElement(i.Dx,null,a.createElement(m.Z,{id:"modals.simplebuy.transferdetails.bankAddress",defaultMessage:"Bank Address"})),a.createElement(i.B4,{"data-e2e":"sbBankAddress"},e.account.agent.address)),a.createElement(Pe,null,a.createElement(ke.Z,{textToCopy:e.account.agent.address}))),"USD"===e.account.currency&&t===be.INTERNATIONAL&&a.createElement(Me,null,a.createElement("div",null,a.createElement(i.Dx,null,a.createElement(m.Z,{id:"modals.simplebuy.transferdetails.recipientAddress",defaultMessage:"Recipient Address"})),a.createElement(i.B4,{"data-e2e":"sbRecipientAddress"},e.account.agent.recipientAddress)),a.createElement(Pe,null,a.createElement(ke.Z,{textToCopy:e.account.agent.recipientAddress})))),a.createElement(Ze,null,a.createElement(Ne,null,a.createElement(Se,null,a.createElement(G.R2,null,a.createElement(h.JO,{size:"18px",color:"grey800",name:"bank-filled"})),a.createElement(De,null,a.createElement(G.m5,null,"USD"===e.account.currency?a.createElement(m.Z,{id:"modals.simplebuy.deposit.important_transfer_only",defaultMessage:"Important Transfer Information"}):a.createElement(m.Z,{id:"modals.simplebuy.deposit.bank_transfer_only",defaultMessage:"Bank Transfers Only"})),a.createElement(G.iD,null,"USD"===e.account.currency?a.createElement(m.Z,{id:"modals.simplebuy.deposit.important_transfer_only_description",defaultMessage:"Only send funds from a bank account in your name. If not, your deposit could be delayed or rejected. <b>Be sure to include your Reference ID.</b>"}):a.createElement(m.Z,{id:"modals.simplebuy.deposit.bank_transfer_only_description",defaultMessage:"Only send funds from a bank account in your name. If not, your deposit could be delayed or rejected."})))),a.createElement(Se,null,a.createElement(G.R2,null,a.createElement(h.JO,{size:"18px",color:"grey800",name:"pending"})),a.createElement(De,null,a.createElement(G.m5,null,a.createElement(m.Z,{id:"modals.simplebuy.deposit.processing_time",defaultMessage:"Processing Time"})),a.createElement(G.iD,null,"GBP"===e.account.currency&&a.createElement(m.Z,{id:"modals.simplebuy.deposit.processing_time.info.gbp1",defaultMessage:"Funds will be credited to your GBP Account as soon as we receive them. In the UK Faster Payments Network, this can take a couple of hours."}),"EUR"===e.account.currency&&a.createElement(m.Z,{id:"modals.simplebuy.deposit.processing_time.info.eur1",defaultMessage:"Funds will be credited to your EUR Account as soon as we receive them. SEPA transfers usually take around 1 business day to reach us."}),"USD"===e.account.currency&&a.createElement(m.Z,{id:"modals.simplebuy.deposit.processing_time.info.usd1",defaultMessage:"Funds will be credited to your USD Account as soon as we receive them. Funds are generally available within one business day."})))),"GBP"===e.account.currency&&a.createElement(_e,{inline:!0},a.createElement(h.xv,{size:"12px",weight:500,color:"grey600"},a.createElement(m.Z,{id:"modals.simplebuy.transferdetails.depositagreement",defaultMessage:"By depositing funds to this account, you agree to {ToS}, our banking partner.",values:{ToS:a.createElement(h.rU,{href:"/exchange/legal",size:"12px",weight:500,rel:"noreferrer noopener",target:"_blank"},a.createElement(m.Z,{id:"modals.simplebuy.transferdetails.agree",defaultMessage:"Terms and Conditions of Modular"}))}}))))))},Oe=(0,r.connect)((e=>({data:WireInstructions_selectors_getData(e)})),(e=>({brokerageActions:(0,l.bindActionCreators)(s.Nw.wx.brokerage,e),buySellActions:(0,l.bindActionCreators)(s.Nw.wx.buySell,e)})))((e=>((0,a.useEffect)((()=>{e.fiatCurrency&&(e.buySellActions.setFiatCurrency(e.fiatCurrency),e.buySellActions.fetchPaymentAccount())}),[]),e.data.cata({Failure:e=>a.createElement(o.Z,{message:{message:e}}),Loading:()=>a.createElement(template_loading,null),NotAsked:()=>a.createElement(template_loading,null),Success:t=>a.createElement(WireInstructions_template_success,Object.assign({},t,e))}))));class ze extends a.PureComponent{constructor(e){super(e),this.handleClose=()=>{this.setState({show:!1}),setTimeout(this.props.close,i.x9)},this.state={show:!1}}componentDidMount(){this.setState({show:!0})}render(){return a.createElement(i.ZP,Object.assign({},this.props,{onClose:this.handleClose,isOpen:this.state.show,"data-e2e":"bankDepositModal"}),this.props.step===c.RF.LOADING&&a.createElement(i.FK,null,a.createElement(u.gb,Object.assign({},this.props,{text:u.Ue.LOADING}))),this.props.step===c.RF.DEPOSIT_METHODS&&a.createElement(i.FK,null,a.createElement(re,Object.assign({},this.props))),this.props.step===c.RF.ENTER_AMOUNT&&a.createElement(i.FK,null,a.createElement(fe,Object.assign({},this.props,{handleClose:this.handleClose}))),this.props.step===c.RF.AUTHORIZE&&a.createElement(i.FK,null,a.createElement(Z,Object.assign({},this.props,{handleClose:this.handleClose}))),this.props.step===c.RF.BANK_LIST&&a.createElement(i.FK,null,a.createElement(R,{fiatCurrency:this.props.fiatCurrency,handleClose:this.handleClose})),this.props.step===c.RF.CONFIRM&&a.createElement(i.FK,null,a.createElement(W,Object.assign({},this.props,{handleClose:this.handleClose}))),this.props.step===c.RF.DEPOSIT_STATUS&&a.createElement(i.FK,null,a.createElement(he,Object.assign({},this.props,{handleClose:this.handleClose}))),this.props.step===c.RF.WIRE_INSTRUCTIONS&&a.createElement(i.FK,null,a.createElement(Oe,Object.assign({},this.props,{handleClose:this.handleClose}))),this.props.step===c.RF.DEPOSIT_CONNECT&&a.createElement(i.FK,null,a.createElement(xe,Object.assign({},this.props,{handleClose:this.handleClose}))),this.props.step===c.RF.INELIGIBLE&&a.createElement(i.FK,null,a.createElement(o.Z,{message:{message:u.lh}})))}}const Re=(0,r.connect)((e=>({fiatCurrency:s.wl.wx.zT.getFiatCurrency(e),step:s.wl.wx.zT.getDWStep(e)})),(e=>({brokerageActions:(0,l.bindActionCreators)(s.Nw.wx.brokerage,e)}))),Ie=(0,l.compose)((0,d.Z)(c.tl.BANK_DEPOSIT_MODAL,{transition:i.x9}),Re)(ze)},"./src/modals/SimpleBuy/PaymentMethods/Methods/BankWire/index.tsx":(e,t,n)=>{n.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var a=n("../../node_modules/react/index.js"),r=n("./node_modules/react-intl/lib/src/components/message.js"),l=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),o=n("../blockchain-info-components/src/index.js"),i=n("./src/components/SimpleBuy/index.tsx");const s=(0,l.ZP)(i.m5)`
  margin-bottom: 2px;
`,c=(0,l.ZP)(i.R2)`
  min-height: 75px;
`,__WEBPACK_DEFAULT_EXPORT__=({icon:e,onClick:t,text:n,value:l})=>a.createElement(i.Uq,{"data-e2e":`sb${l.type.toLowerCase()}BankWire`,role:"button",onClick:t},a.createElement(c,null,e),a.createElement(i.VY,null,a.createElement(s,null,n),a.createElement(i.iD,null,a.createElement(r.Z,{id:"copy.number_of_business_days",defaultMessage:"{first} to {second} Business Days",values:{first:"3",second:"5"}})),a.createElement(i.dk,null,a.createElement(r.Z,{id:"modals.simplebuy.bankwire.description_v2",defaultMessage:"Send funds directly from your bank to your our.com Wallet. Once we receive the wire transfer, we’ll complete your purchase."}))),a.createElement(o.JO,{name:"chevron-right",size:"24px",color:"grey400"}))},"./src/modals/SimpleBuy/model.tsx":(e,t,n)=>{n.d(t,{gG:()=>ErrorCodeMappings,_s:()=>BuyOrSell,wr:()=>getPaymentMethod,nA:()=>displayFiat,Ts:()=>getPaymentMethodDetails,TL:()=>getLockRuleMessaging});var a=n("../../node_modules/react/index.js"),r=n("./node_modules/react-intl/lib/src/components/message.js"),l=n("../blockchain-wallet-v4/src/exchange/utils.ts"),o=n("../blockchain-wallet-v4/src/types/index.ts"),i=n("../blockchain-info-components/src/index.js"),s=n("./src/data/components/exchange/services.ts"),c=n("./src/data/components/simpleBuy/model.ts");const ErrorCodeMappings=({code:e})=>{switch(e){case 41:return a.createElement(r.Z,{id:"error.below_min",defaultMessage:"Order below min size limit"});case 43:return a.createElement(r.Z,{id:"error.above_max",defaultMessage:"Order above max size limit"});case 45:return a.createElement(r.Z,{id:"error.exceeded_daily",defaultMessage:"You've reached your daily trading limit"});case 46:return a.createElement(r.Z,{id:"error.exceeded_weekly",defaultMessage:"You've reached your weekly trading limit"});case 47:return a.createElement(r.Z,{id:"error.exceeded_annual",defaultMessage:"You've reached your annual trading limit"});case 51:return a.createElement(r.Z,{id:"error.trading_disabled",defaultMessage:"Trading is temporarily disabled"});case 53:return a.createElement(r.Z,{id:"error.pending_limit",defaultMessage:"Pending orders limit reached"});case 93:return a.createElement(r.Z,{id:"error.invalid_address",defaultMessage:"Invalid crypto address"});case 94:return a.createElement(r.Z,{id:"error.invalid_crypto",defaultMessage:"Invalid crypto currency"});case 131:return a.createElement(r.Z,{id:"error.insufficient_balance",defaultMessage:"Insufficient balance"});case 149:return a.createElement(r.Z,{id:"error.invalid_fiat",defaultMessage:"Invalid fiat currency"});case 151:return a.createElement(r.Z,{id:"error.disabled_direction",defaultMessage:"Order direction is disabled"});case 152:return a.createElement(r.Z,{id:"error.pending_withdrawal",defaultMessage:"Pending withdrawal locks"});case 155:return a.createElement(r.Z,{id:"error.invalid_quote",defaultMessage:"Invalid or expired quote"});case 156:return a.createElement(r.Z,{id:"error.swap_eligibility",defaultMessage:"User not eligible for Swap"});case 157:return a.createElement(r.Z,{id:"error.negative_amount",defaultMessage:"Destination amount is negative"});default:return"string"==typeof e?a.createElement(i.xv,null,e):a.createElement(r.Z,{id:"copy.unkown_error",defaultMessage:"An unknown error has occurred."})}};const BuyOrSell=e=>{if(e.crypto){const t=window.coins[e.crypto];return"BUY"===e.orderType?a.createElement(r.Z,{id:"buttons.buy_coin",defaultMessage:"Buy {displayName}",values:{displayName:"Crypto"===e.crypto?"Crypto":t?t.coinfig.displaySymbol:e.crypto}}):a.createElement(r.Z,{id:"buttons.sell_coin",defaultMessage:"Sell {displayName}",values:{displayName:t?t.coinfig.displaySymbol:e.crypto}})}return"BUY"===e.orderType?a.createElement(r.Z,{id:"buttons.buy",defaultMessage:"Buy"}):a.createElement(r.Z,{id:"buttons.sell",defaultMessage:"Sell"})},getPaymentMethod=(e,t)=>{const n=(0,c.getBaseCurrency)(e),l=(0,c.getCounterCurrency)(e),i=(0,c.getOrderType)(e);switch(e.paymentType){case o.t8.PAYMENT_CARD:return a.createElement(r.Z,{id:"modals.simplebuy.confirm.payment_card",defaultMessage:"Credit Card"});case o.t8.FUNDS:return"BUY"===i?a.createElement(r.Z,{id:"modals.simplebuy.confirm.funds_wallet",defaultMessage:"{coin} Wallet",values:{coin:l}}):`${n} Trading Account`;case o.t8.BANK_TRANSFER:const e={accountNumber:"",bankAccountType:"",bankName:"Bank Transfer"};return`${(t&&t.details||e).bankName}`;default:return a.createElement(r.Z,{id:"modals.simplebuy.deposit.bank_transfer",defaultMessage:"Bank Transfer"})}},displayFiat=(e,t)=>{const n=(0,c.getCounterCurrency)(e);return(0,l.LE)({unit:n,value:(0,s.b)("FIAT",t)})},getPaymentMethodDetails=(e,t,n)=>{var a,r,l;switch(e.paymentType){case o.t8.PAYMENT_CARD:return`${(null===(a=null==n?void 0:n.card)||void 0===a?void 0:a.type)||""} ${(null===(r=null==n?void 0:n.card)||void 0===r?void 0:r.number)||""}`;case o.t8.BANK_TRANSFER:const e={accountNumber:"",bankAccountType:"",bankName:"Bank Transfer"},i=t&&t.details||e;return`${(null===(l=i.bankAccountType)||void 0===l?void 0:l.toLowerCase())||""} ${i.accountNumber||""}`;default:return null}},getLockRuleMessaging=(e,t,n)=>{switch(n){case o.t8.BANK_TRANSFER:case o.t8.PAYMENT_CARD:case o.t8.USER_CARD:return e?a.createElement(i.Qt,{inline:!0},a.createElement(i.xv,{size:"12px",weight:500,color:"grey900"},a.createElement(r.Z,{id:"modals.simplebuy.summary.complete_card_info_main",defaultMessage:"Your final amount might change due to market activity. For security purposes, a {days} day holding period will be applied to your funds. You can Sell or Swap during this time. We will notify you once the funds are available to be withdrawn.",values:{days:t}})),a.createElement(i.rU,{href:"/support/hc/en-us/articles/360051018131-Trading-Account-Withdrawal-Holds",size:"12px",rel:"noopener noreferrer",target:"_blank"},a.createElement(r.Z,{id:"modals.simplebuy.summary.learn_more",defaultMessage:"Learn more"}))):a.createElement(i.xv,{size:"12px",weight:500,color:"grey900"},a.createElement(r.Z,{id:"modals.simplebuy.confirm.activity_card11",defaultMessage:"Your final amount might change due to market activity. Your funds will be available to Sell, Swap or withdraw instantly."}));case o.t8.BANK_ACCOUNT:return a.createElement(a.Fragment,null);case o.t8.FUNDS:default:return a.createElement(i.xv,{size:"12px",weight:500,color:"grey900"},a.createElement(r.Z,{id:"modals.simplebuy.confirm.activity",defaultMessage:"Your final amount may change due to market activity."}))}}},"./src/modals/components/index.tsx":(e,t,n)=>{n.d(t,{Ue:()=>x,rD:()=>BankSearchIcon,mf:()=>Z,Vd:()=>C,mZ:()=>BankWaitIndicator,zK:()=>s,lh:()=>f,Hr:()=>Hr,wq:()=>IneligibleErrorMessage,Oi:()=>p,dC:()=>LinkViaDesktop,gb:()=>Loading,H:()=>LoadingUpdating,EA:()=>ModalNavWithBackArrow,YX:()=>ModalNavWithCloseIcon,Zu:()=>c,ty:()=>_,NA:()=>ScanWithPhone,$0:()=>d,FP:()=>SimpleBankRow});var a=n("../../node_modules/react/index.js"),r=n("./node_modules/react-intl/lib/src/components/message.js"),l=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),o=n("../blockchain-info-components/src/index.js"),i=n("./src/components/Flyout/index.tsx");const s=(0,l.ZP)(i.o9)`
  padding: 37px 0 34px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`,c=(0,l.ZP)(o.xv)`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  padding-left: 40px;
`,d=l.ZP.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  align-items: center;
  padding: 20px;
`,u=l.ZP.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px auto 0;
  padding: 15px;
  border: 2px solid ${e=>e.theme.blue600};
  border-radius: 4px;

  & img {
    width: 150px;
  }
`,m=l.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s ease-out;
  margin-bottom: 15px;

  & > div:first-child {
    margin-right: 10px;
  }

  &.active {
    opacity: 1;
  }
`,p=l.ZP.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`,g=l.ZP.img`
  margin-bottom: 32px;
  max-height: 60px;
`,ScanWithPhone=({children:e,logo:t,qrCode:n})=>a.createElement(d,null,t&&a.createElement(g,{src:t}),a.createElement(o.xv,{weight:600,size:"20px",color:"grey900"},e),a.createElement(o.xv,{weight:500,size:"14px",color:"grey600"},a.createElement(r.Z,{id:"modals.brokerage.use_phone_camera",defaultMessage:"Use your phone’s camera to scan the QR code."})),a.createElement(u,null,n?a.createElement("img",{alt:"Use your phone’s camera to scan the QR code.",src:n}):a.createElement(o.nZ,{width:"30px",height:"30px"}))),BankWaitIndicator=({qrCode:e})=>{const[t,n]=(0,a.useState)(0);return e&&setTimeout((()=>{n(t+1)}),3e4),a.createElement(m,{className:e?"active":""},a.createElement(o.nZ,{width:"10px",height:"10px",borderWidth:"3px"}),a.createElement(o.xv,{size:"14px",weight:500},0===t&&a.createElement(r.Z,{id:"modals.brokerage.waiting_to_hear",defaultMessage:"Waiting to hear from your bank"}),t>0&&a.createElement(r.Z,{id:"modals.brokerage.this_can_take_a_while",defaultMessage:"This can take several minutes, hold tight!"})))},y=(0,l.ZP)(o.zx)`
  margin: 20px 0 0;
  display: unset;
`,LinkViaDesktop=({authUrl:e,children:t,onClick:n=(()=>{})})=>e?a.createElement(d,null,a.createElement(o.xv,{weight:600,size:"20px",color:"grey900"},t),a.createElement(y,{"data-e2e":"yapilyBankLink",nature:"empty-blue",onClick:()=>{window.open(e,"_blank"),n()}},a.createElement(r.Z,{id:"modals.brokerage.continue_in_browser",defaultMessage:"Continue in browser"}))):null,E=(0,l.ZP)(o.xv)`
  width: 300px;
`,h=l.ZP.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`,f="BROKERAGE_INELIGIBLE",IneligibleErrorMessage=()=>a.createElement(E,{size:"16px",weight:400},a.createElement(r.Z,{id:"modals.brokerage.ineligible_error",defaultMessage:"You are not eligible to make deposits and withdrawals with this currency."}));var x;!function(e){e.GETTING_READY="Getting Ready...",e.LOADING="Loading...",e.PROCESSING="Processing..."}(x||(x={}));const Loading=({text:e})=>a.createElement(h,null,a.createElement(o.nZ,null),a.createElement(o.xv,{weight:600,color:"grey600",style:{marginTop:"24px"}},e===x.LOADING&&a.createElement(r.Z,{id:"copy.loading",defaultMessage:"Loading..."}),e===x.GETTING_READY&&a.createElement(r.Z,{id:"loader.message.gettingready",defaultMessage:"Getting Ready..."}),e===x.PROCESSING&&a.createElement(r.Z,{id:"modals.simplebuy.processing",defaultMessage:"Processing…"}))),b=l.ZP.div`
  transform: translate(47px, 35px);
  border: 5px solid white;
  border-radius: 50%;
  background-color: white;
`,w=(0,l.ZP)(o.xv)`
  font-weight: 600;
  font-size: 20px;
  margin-top: 22px;
`,k=(0,l.ZP)(o.xv)`
  font-size: 14px;
  font-weight: 500;
  margin: 5px 30px;
`,LoadingUpdating=()=>a.createElement(h,null,a.createElement(b,null,a.createElement(o.nZ,{borderWidth:"7px",height:"32px",width:"32px"})),a.createElement(o.Ee,{name:"blockchain-logo-circle",width:"106px"}),a.createElement(w,{color:"grey900"},a.createElement(r.Z,{defaultMessage:"Updating Your Wallet...",id:"modals.brokerage.updating_your_wallet"})),a.createElement(k,{color:"grey600"},a.createElement(r.Z,{defaultMessage:"This could take up to 30 seconds. Please do not go back or close the app.",id:"modals.brokerage.this_could_take"}))),v=l.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 0px solid ${e=>e.theme.grey000};
  border-bottom-width: 1px;
  padding: 28px 40px;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  ${e=>e.onClick&&l.iv`
      cursor: pointer;
      * {
        cursor: pointer;
      }
      &:hover {
        background-color: ${e=>e.theme.blue000};
      }
    `}
`,A=l.ZP.div`
  height: 30px;
  width: 30px;
  background: url('${e=>e.url}') 0 0 no-repeat;
  background-size: 30px;
  background-position: center;
`,C=l.ZP.div`
  position: relative;
`,Z=l.ZP.input`
  border: 1px solid ${e=>e.theme.grey000};
  font-size: 16px;
  width: 100%;
  border-width: 1px 0;
  padding: 20px 0 20px 40px;

  &:active,
  &:focus {
    outline: none;
  }
`,BankSearchIcon=()=>a.createElement(o.JO,{size:"20px",color:"grey600",name:"magnifier",style:{position:"absolute",right:"60px",top:"20px"}}),SimpleBankRow=e=>a.createElement(v,{onClick:e.onClick},a.createElement("div",null,a.createElement(A,{url:e.institution.media[0].source}),a.createElement(o.xv,{color:"grey900",style:{marginLeft:"20px"},weight:600},e.institution.name)),a.createElement(o.JO,{cursor:!0,name:"chevron-right",size:"20px",color:"grey600",role:"button",style:{marginRight:"24px"}})),ModalNavWithBackArrow=e=>a.createElement(c,{color:"grey800",size:"20px",weight:600},a.createElement(o.JO,{cursor:!0,name:"arrow-back",size:"20px",color:"grey600",role:"button",style:{marginRight:"24px"},onClick:()=>e.handleClose()}),e.children),ModalNavWithCloseIcon=e=>a.createElement(c,{color:"grey800",size:"20px",weight:600,style:{justifyContent:"space-between"}},e.children,a.createElement(o.JO,{cursor:!0,name:"close",size:"20px",color:"grey600",role:"button",style:{marginRight:"24px"},onClick:()=>e.handleClose()})),T=l.ZP.hr`
  border: none;
  border-top: 1px solid ${e=>e.theme.grey100};
  text-align: center;
  overflow: visible;
  color: #333;
  height: 5px;
  width: 100%;

  &:after {
    content: 'OR';
    padding: 0 4px;
    position: relative;
    top: -10px;
    background: ${e=>e.theme.alwaysWhite};
  }
`,Hr=()=>a.createElement("div",{style:{width:"100%"}},a.createElement(o.xv,{weight:600,size:"16px",color:"grey900"},a.createElement(T,null))),_=((0,l.ZP)(o.xv)`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.spaceBetween?"space-between":"initial"};
  margin-bottom: ${e=>e.marginBottom?"16px":"0px"};
`,({amount:e,currency:t})=>a.createElement(r.Z,{id:"modals.send.over_your_limit",defaultMessage:"Over your limit! Send up to {currency}{amount}.",values:{amount:e,currency:t}}))}}]);