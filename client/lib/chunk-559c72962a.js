"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[1938],{"./src/components/Brokerage/index.tsx":(e,t,n)=>{n.d(t,{A:()=>i});var a=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),r=n("../blockchain-info-components/src/index.js");const i=(0,a.ZP)(r.zx)`
  padding: 8px 16px;
  margin: 40px auto;
  width: 83%;
  color: ${e=>e.theme.blue600};
  border-color: ${e=>e.theme.grey100};
`},"./src/components/DataError/index.tsx":(e,t,n)=>{n.d(t,{Z:()=>components_DataError});var a,r=n("../../node_modules/react/index.js"),i=n("./node_modules/react-intl/lib/src/components/message.js"),l=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),s=n("../blockchain-info-components/src/index.js"),o=n("../../node_modules/ramda/es/prop.js"),c=n("../blockchain-wallet-v4/src/redux/payment/model.js"),d=n("./src/services/misc/index.js"),u=n("./src/modals/components/index.tsx"),m=n("./src/components/Flyout/model.tsx");var p=(0,l.ZP)(s.xv)(a||(a=function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  width: 80%;\n  margin-bottom: 20px;\n"])));const h=function ErrorHandler(e){var t=e.message,n=e.onClick,a=e["data-e2e"],l=(0,o.Z)("message",t)||(0,o.Z)("description",t),h=(0,d.K)(t);return h?r.createElement(r.Fragment,null,r.createElement(p,{size:"18px",weight:400},t),r.createElement(s.zx,{nature:"primary",onClick:function onClick(){return n(h)}},r.createElement(s.xv,{size:"18px",weight:400,color:"white"},r.createElement(i.Z,{id:"components.dataerror.archiveaddress",defaultMessage:"Archive Address"})))):l===u.lh?r.createElement(u.wq,null):l===c.B?r.createElement(s.xv,{size:"16px",weight:400},r.createElement(i.Z,{id:"components.dataerror.feesfetchfailure",defaultMessage:"There was a problem fetching fees. Please try again later."})):l===m.k7?r.createElement(s.xv,{size:"16px",weight:400,style:{width:"300px"}},r.createElement(i.Z,{id:"modals.recurringbuys.period_fetch_error",defaultMessage:"There was an error fetching recurring buy frequency options. Please try again."})):"string"==typeof l?r.createElement(s.xv,{size:"16px",color:"error",weight:500},l):r.createElement(s.Qt,{inline:!0},r.createElement(s.xv,{size:"18px",weight:400},r.createElement(i.Z,{id:"components.dataerror.body",defaultMessage:"Please "})),r.createElement(s.rU,{size:"18px","data-e2e":a?"".concat(a,"Link"):"",onClick:n},r.createElement(i.Z,{id:"components.dataerror.click",defaultMessage:"click here"})),r.createElement(s.xv,{size:"18px",weight:400},r.createElement(i.Z,{id:"components.dataerror.refresh",defaultMessage:" to refresh."})))},g=l.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`,w=l.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`,x=(0,l.ZP)(s.xv)`
  margin-top: 30px;
  margin-bottom: 20px;
`,components_DataError=e=>r.createElement(g,null,r.createElement(w,null,r.createElement(s.Ee,{name:"empty-search",width:"260px"}),r.createElement(x,{size:"18px",weight:500},r.createElement(i.Z,{id:"components.dataerror.header",defaultMessage:"Oops, something went wrong here!"})),r.createElement(h,Object.assign({},e))))},"./src/modals/Brokerage/Banks/Withdraw/index.tsx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>me});var a=n("../../node_modules/react/index.js"),r=n("../../node_modules/react-redux/es/index.js"),i=n("../../node_modules/redux/es/redux.js"),l=n("./src/components/DataError/index.tsx"),s=n("./src/components/Flyout/index.tsx"),o=n("./src/data/index.ts"),c=n("./src/data/types.ts"),d=n("./src/providers/ModalEnhancer/index.tsx"),u=n("./src/modals/components/index.tsx"),m=n("../blockchain-wallet-v4/src/index.ts"),p=n("./node_modules/react-intl/lib/src/components/message.js"),h=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),g=n("../blockchain-info-components/src/index.js");const w=h.ZP.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`,template_loading=()=>a.createElement(w,null,a.createElement(g.nZ,null),a.createElement(g.xv,{weight:600,color:"grey600",style:{marginTop:"24px"}},a.createElement(p.Z,{id:"copy.loading",defaultMessage:"Loading..."})));var x=n("../../node_modules/ramda/es/lift.js"),f=n("../blockchain-wallet-v4/src/remote/index.ts");const selectors=(e,t)=>{let n=o.wl.wx.zT.getBankTransferAccounts(e),a=o.wl.wx.zT.getAccount(e);o.wl.vE.Xd.getInvitations(e).getOrElse({openBanking:!1}).openBanking||"USD"===t.fiatCurrency||(a=void 0,n=f.Z.Success([]));const r=o.wl.gm.getBeneficiaries(e),i=o.wl.gm.getDefaultBeneficiary(t.fiatCurrency,e);return(0,x.Z)(((e,n,r)=>({bankTransferAccounts:e.filter((e=>e.currency===t.fiatCurrency)),beneficiaries:n.filter((e=>e.currency===t.fiatCurrency)),defaultBeneficiary:r,defaultMethod:a})))(n,r,i)};var y=n("./src/components/Brokerage/index.tsx"),E=n("./src/components/Flyout/model.tsx"),b=n("./src/services/images/index.ts");const k=h.ZP.div`
  display: flex;
  align-items: center;
`,template_success=e=>a.createElement("div",null,a.createElement(s.o9,null,a.createElement(k,null,a.createElement(g.JO,{cursor:!0,"data-e2e":"withdrawBack",name:"arrow-left",size:"20px",color:"grey600",role:"button",style:{marginRight:"8px"},onClick:()=>e.withdrawActions.setStep({fiatCurrency:e.fiatCurrency,step:c.GY.ENTER_AMOUNT})}),a.createElement(g.xv,{color:"grey800",size:"20px",weight:600},a.createElement(p.Z,{id:"scenes.settings.linked_banks",defaultMessage:"Linked Banks"})))),e.bankTransferAccounts.map((t=>{var n,r;return a.createElement(E.Br,{key:t.id,bankDetails:t.details,text:t.details.bankName,isActive:t.id===(null===(n=e.defaultMethod)||void 0===n?void 0:n.id),icon:(r=t.details.bankName,a.createElement(g.Ee,{name:(0,b.t)(r),height:"48px"})),onClick:()=>{e.brokerageActions.setBankDetails({account:t}),e.withdrawActions.setStep({beneficiary:void 0,fiatCurrency:e.fiatCurrency,step:c.GY.ENTER_AMOUNT})}})})),e.beneficiaries.map((t=>{var n;return a.createElement(E.zn,{key:t.id,beneficiary:t,isActive:(null===(n=e.beneficiary)||void 0===n?void 0:n.id)===t.id,onClick:()=>{e.brokerageActions.setBankDetails({account:void 0}),e.withdrawActions.setStep({beneficiary:t,fiatCurrency:e.fiatCurrency,step:c.GY.ENTER_AMOUNT})},type:"WITHDRAWAL"})})),a.createElement(y.A,{"data-e2e":"DepositAddNewPaymentMethod",onClick:()=>{e.withdrawActions.setStep({fiatCurrency:e.fiatCurrency,step:c.GY.WITHDRAWAL_METHODS})}},a.createElement(g.xv,{color:"blue600",size:"16px",weight:600},a.createElement(p.Z,{id:"buttons.add_new",defaultMessage:"+ Add New"}))));class C extends a.PureComponent{componentDidMount(){m.Nt.Success.is(this.props.data)||(this.props.custodialActions.fetchCustodialBeneficiaries(this.props.fiatCurrency),this.props.brokerageActions.fetchBankTransferAccounts())}render(){return this.props.data.cata({Failure:()=>a.createElement(s.ub,{action:"close","data-e2e":"withdrawReload",handler:this.props.handleClose}),Loading:()=>a.createElement(template_loading,null),NotAsked:()=>a.createElement(template_loading,null),Success:e=>a.createElement(template_success,Object.assign({},this.props,e))})}}const A=(0,r.connect)(((e,t)=>({data:selectors(e,t)})),(e=>({brokerageActions:(0,i.bindActionCreators)(o.Nw.wx.brokerage,e),buySellActions:(0,i.bindActionCreators)(o.Nw.wx.buySell,e),custodialActions:(0,i.bindActionCreators)(o.Nw.gm,e),withdrawActions:(0,i.bindActionCreators)(o.Nw.wx.withdraw,e)})))(C),selectors_getData=(e,t)=>{const n=o.wl.wx.XW.getFeeForCurrency(e,t.fiatCurrency),a=o.wl.gm.getDefaultBeneficiary(t.fiatCurrency,e),r=o.wl.wx.zT.getAccount(e);return(0,x.Z)(((e,t)=>({defaultBeneficiary:e,defaultMethod:r,fees:t})))(a,n)},v=h.ZP.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`,ConfirmWithdraw_template_loading=()=>a.createElement(v,null,a.createElement(g.nZ,null),a.createElement(g.xv,{weight:600,color:"grey600",style:{marginTop:"24px"}},a.createElement(p.Z,{id:"copy.loading",defaultMessage:"Loading..."})));var Z=n("../../node_modules/redux-form/es/reduxForm.js"),_=n("../blockchain-wallet-v4/src/exchange/index.ts"),N=n("../blockchain-wallet-v4/src/exchange/utils.ts"),M=n("./src/components/Cartridge/index.ts"),B=n("./src/components/Display/CoinDisplay/index.tsx"),T=n("./src/components/Form/index.ts");const O=(0,h.ZP)(g.xv)`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`,S=h.ZP.div`
  margin-top: 40px;
  margin-bottom: 24px;
  display: flex;
`,D=(0,h.ZP)(s.o9)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0px;
  margin-top: 0px;
`,P=(0,Z.Z)({destroyOnUnmount:!1,form:"confirmCustodyWithdraw"})((e=>{var t,n,r;return a.createElement(T.l0,{onSubmit:t=>{t.preventDefault(),e.withdrawActions.handleCustodyWithdraw(e.formValues.amount,e.beneficiary||e.defaultMethod||null,e.fiatCurrency)}},a.createElement(s.o9,null,a.createElement(O,null,a.createElement(g.JO,{name:"arrow-left",size:"20px",role:"button",style:{marginRight:"16px"},onClick:()=>e.withdrawActions.setStep({beneficiary:e.beneficiary,fiatCurrency:e.fiatCurrency,step:c.GY.ENTER_AMOUNT})}),a.createElement(g.xv,{size:"20px",weight:600,color:"grey800"},a.createElement(p.Z,{id:"copy.confirm_withdrawal",defaultMessage:"Confirm Withdrawal"}))),a.createElement(S,null,a.createElement(B.Z,{color:"grey800",size:"32px",weight:600,coin:e.fiatCurrency},e.amount)," ",a.createElement(g.xv,{color:"grey800",size:"32px",weight:600},e.fiatCurrency))),a.createElement(s.X2,null,a.createElement(s.Dx,null,a.createElement(p.Z,{id:"copy.from",defaultMessage:"From"})),a.createElement(s.B4,null,a.createElement(p.Z,{id:"modals.brokerage.fiat_account",defaultMessage:"{currency} Account",values:{currency:e.fiatCurrency}}))),a.createElement(s.X2,null,a.createElement(s.Dx,null,a.createElement(p.Z,{id:"copy.to",defaultMessage:"To"})),a.createElement(s.B4,null,(null===(t=e.beneficiary)||void 0===t?void 0:t.name)||(null===(n=e.defaultMethod)||void 0===n?void 0:n.details.bankName)),a.createElement(s.B4,null,(null===(r=e.defaultMethod)||void 0===r?void 0:r.details.accountName)||"")),a.createElement(s.X2,null,a.createElement(s.Dx,null,a.createElement(p.Z,{id:"copy.fee",defaultMessage:"Fee"})),a.createElement(s.B4,null,e.fees.value," ",e.fiatCurrency)),a.createElement(s.X2,null,a.createElement(s.Dx,null,a.createElement(p.Z,{id:"copy.total",defaultMessage:"Total"})),a.createElement(s.B4,null,(0,_.displayFiatToFiat)({value:e.amount})," ",e.fiatCurrency)),a.createElement(s.o9,null,a.createElement(g.zx,{"data-e2e":"withdrawCustody",disabled:e.submitting,fullwidth:!0,height:"48px",nature:"primary",size:"16px",type:"submit"},e.submitting?a.createElement(g.JA,{height:"20px",width:"20px",color:"white"}):a.createElement(p.Z,{id:"buttons.withdraw_value",defaultMessage:"Withdraw {value}",values:{value:(0,N.LE)({unit:e.fiatCurrency,value:e.amount})}})),a.createElement(g.zx,{onClick:()=>e.withdrawActions.setStep({beneficiary:e.beneficiary,fiatCurrency:e.fiatCurrency,step:c.GY.ENTER_AMOUNT}),"data-e2e":"cancelWithdrawCustody",height:"48px",fullwidth:!0,nature:"light-red",size:"16px",style:{marginTop:"16px"}},a.createElement(p.Z,{id:"buttons.cancel",defaultMessage:"Cancel"}))),e.error&&!e.submitting&&a.createElement(D,null,a.createElement(M.XG,null,e.error)))}));class z extends a.PureComponent{componentDidMount(){m.Nt.Success.is(this.props.data)||this.props.withdrawActions.fetchWithdrawalFees()}errorCallback(){this.props.withdrawActions.setStep({beneficiary:this.props.beneficiary,fiatCurrency:this.props.fiatCurrency,step:c.GY.ENTER_AMOUNT})}render(){return this.props.data.cata({Failure:()=>a.createElement(s.ub,{action:"retry","data-e2e":"withdrawReload",handler:this.errorCallback}),Loading:()=>a.createElement(ConfirmWithdraw_template_loading,null),NotAsked:()=>a.createElement(ConfirmWithdraw_template_loading,null),Success:e=>a.createElement(P,Object.assign({},e,this.props))})}}const R=(0,r.connect)(((e,t)=>({data:selectors_getData(e,t),formValues:o.wl.cr.getFormValues("brokerageTx")(e)})),(e=>({withdrawActions:(0,i.bindActionCreators)(o.Nw.wx.withdraw,e)})))(z);var W=n("../blockchain-wallet-v4/src/network/api/simpleBuy/types.ts"),j=n("./src/components/Balances/selectors.ts");const EnterAmount_selectors=(e,t)=>{const n=(0,j.Os)(t.fiatCurrency,e),a=(0,j.Q7)(t.fiatCurrency,e),r=o.wl.gm.getDefaultBeneficiary(t.fiatCurrency,e);let i=o.wl.wx.zT.getAccount(e),l=o.wl.wx.zT.getBankTransferAccounts(e);o.wl.vE.Xd.getInvitations(e).getOrElse({openBanking:!1}).openBanking||"USD"===t.fiatCurrency||(i=void 0,l=m.Nt.Success([]));const s=o.wl.wx.wd.getSBPaymentMethods(e),c=o.wl.cr.getFormSyncErrors("custodyWithdrawForm")(e),d=o.wl.qz.N5.getUserData(e),u=o.wl.wx.XW.getMinAmountForCurrency(e,t.fiatCurrency),p=o.wl.wx.XW.getFeeForCurrency(e,t.fiatCurrency),h=o.wl.wx.XW.getWithdrawalLocks(e);return(0,x.Z)(((e,t,n,a,r,l,s,o,d)=>({availableBalance:n,bankTransferAccounts:e,defaultBeneficiary:a,defaultMethod:i,fees:s,formErrors:c,minAmount:l,paymentMethods:o,userData:r,withdrawableBalance:t,withdrawalLocks:d})))(l,n,a,r,d,u,p,s,h)},L=(0,r.connect)(((e,t)=>({data:EnterAmount_selectors(e,t),defaultMethod:o.wl.wx.zT.getAccount(e),formValues:o.wl.cr.getFormValues("brokerageTx")(e),userData:o.wl.qz.N5.getUserData(e).getOrFail("Unknown user")})),(e=>({brokerageActions:(0,i.bindActionCreators)(o.Nw.wx.brokerage,e),buySellActions:(0,i.bindActionCreators)(o.Nw.wx.buySell,e),custodialActions:(0,i.bindActionCreators)(o.Nw.gm,e),formActions:(0,i.bindActionCreators)(o.Nw.cr,e),withdrawActions:(0,i.bindActionCreators)(o.Nw.wx.withdraw,e)})))((e=>{(0,a.useEffect)((()=>{let t="ALL";e.defaultMethod&&(t=W.t8.BANK_TRANSFER,e.defaultMethod.partner!==c.RB.YODLEE&&"USD"===e.defaultMethod.currency&&(t=W.t8.BANK_ACCOUNT)),e.withdrawActions.fetchWithdrawalFees(t),e.fiatCurrency&&!m.Nt.Success.is(e.data)&&(e.brokerageActions.fetchBankTransferAccounts(),e.custodialActions.fetchCustodialBeneficiaries(e.fiatCurrency),e.withdrawActions.fetchWithdrawalLock())}),[e.fiatCurrency]);const t=(0,a.useCallback)((()=>{e.custodialActions.fetchCustodialBeneficiaries(e.fiatCurrency)}),[e.fiatCurrency]),handleSubmit=()=>{const{defaultBeneficiary:t}=e.data.getOrElse({}),{defaultMethod:n}=e,a=t||e.beneficiary;(a||n)&&(n?e.withdrawActions.setStep({amount:e.formValues.amount,defaultMethod:n,step:c.GY.CONFIRM_WITHDRAW}):(t||e.beneficiary)&&e.withdrawActions.setStep({amount:e.formValues.amount,beneficiary:a,step:c.GY.CONFIRM_WITHDRAW}))},handleBankSelection=()=>{2===e.userData.tiers.current?e.withdrawActions.setStep({fiatCurrency:e.fiatCurrency,step:c.GY.BANK_PICKER}):e.buySellActions.setStep({step:"KYC_REQUIRED"})};return e.data.cata({Failure:()=>a.createElement(s.ub,{action:"retry","data-e2e":"withdrawReload",handler:t}),Loading:()=>a.createElement(template_loading,null),NotAsked:()=>a.createElement(template_loading,null),Success:n=>{const r=n.paymentMethods.methods.find((e=>e.type===W.t8.BANK_TRANSFER)),i=n.paymentMethods.methods.find((e=>e.type===W.t8.BANK_ACCOUNT)),l=r||i;if(!l)return a.createElement(s.ub,{action:"retry","data-e2e":"withdrawReload",handler:t});let o=l;return n.defaultMethod&&r?o=r:(e.beneficiary||n.defaultBeneficiary)&&i&&(o=i),a.createElement(s.aG,{onSubmit:handleSubmit,initialValues:{currency:e.fiatCurrency},fee:n.fees.minorValue,fiatCurrency:e.fiatCurrency,handleBack:e.handleClose,handleMethodClick:handleBankSelection,orderType:c.vU.WITHDRAW,paymentAccount:n.defaultMethod||e.beneficiary||n.defaultBeneficiary,paymentMethod:o,withdrawableBalance:n.withdrawableBalance,minWithdrawAmount:n.minAmount.minorValue})}})})),OnHold_selectors_getData=e=>{const t=o.wl.wx.XW.getWithdrawalLocks(e),n=o.wl.wx.zT.getWithdrawableBalance(e);return(0,x.Z)(((e,t)=>({withdrawableBalance:t,withdrawalLocks:e})))(t,n)},F=(0,r.connect)((e=>({data:OnHold_selectors_getData(e),defaultMethod:o.wl.wx.zT.getAccount(e),formValues:o.wl.cr.getFormValues("brokerageTx")(e),tradingCurrencies:o.wl.qz.N5.getUserCurrencies(e)})),(e=>({brokerageActions:(0,i.bindActionCreators)(o.Nw.wx.brokerage,e),withdrawActions:(0,i.bindActionCreators)(o.Nw.wx.withdraw,e)})))((e=>{var t;return(0,a.useEffect)((()=>{var t;e.withdrawActions.fetchWithdrawalLock(null===(t=e.tradingCurrencies)||void 0===t?void 0:t.defaultWalletCurrency)}),[null===(t=e.tradingCurrencies)||void 0===t?void 0:t.defaultWalletCurrency]),e.data.cata({Failure:()=>a.createElement(s.ub,{action:"close","data-e2e":"depositTryAgain",handler:e.handleClose}),Loading:()=>a.createElement(u.gb,{text:u.Ue.LOADING}),NotAsked:()=>a.createElement(u.gb,{text:u.Ue.LOADING}),Success:t=>a.createElement(s.Iq,{fiatCurrency:t.withdrawalLocks.totalLocked.currency,handleHeaderClick:e.handleClose,locks:t.withdrawalLocks.locks,totalLockedAmount:t.withdrawalLocks.totalLocked.amount})})})),I=h.ZP.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 56px;
  box-sizing: border-box;
`,U=(0,h.ZP)(g.xv)`
  margin: 32px 0px 4px 0px;
`,G=(0,h.ZP)(g.xv)`
  text-align: center;
  line-height: 150%;
  margin-bottom: 32px;
`,K=h.ZP.div`
  display: inline-flex;
  position: relative;
  justify-content: center;
`,Y=(0,h.ZP)(g.JO)`
  padding: 6px;
  border-radius: 50%;
  position: absolute;
  top: -16px;
  right: -22px;
  background: ${e=>e.theme.white};
`;class X extends a.PureComponent{constructor(){super(...arguments),this.state={}}render(){return a.createElement(I,null,a.createElement("div",null,a.createElement(K,null,a.createElement(g.JO,{size:"72px",color:"USD",name:this.props.fiatCurrency}),a.createElement(Y,{name:"checkmark-circle-filled",color:"USD",size:"28px"})),a.createElement(U,{weight:600,size:"20px"},(0,N.LE)({unit:this.props.withdrawal.amount.symbol,value:this.props.withdrawal.amount.value})," ",this.props.withdrawal.amount.symbol),a.createElement(G,{size:"14px",color:"grey600",weight:500},a.createElement(p.Z,{id:"modals.withdraw.success",defaultMessage:"Success! We are withdrawing the cash from your {currency} Wallet now. The funds should be in your bank in 1-3 business days.",values:{currency:this.props.fiatCurrency}})),a.createElement(g.zx,{fullwidth:!0,height:"48px","data-e2e":"withdrawReload",nature:"primary",size:"16px",onClick:()=>this.props.handleClose()},a.createElement(p.Z,{id:"buttons.close",defaultMessage:"Close"}))))}}const $=X;var H=n("../blockchain-wallet-v4/src/types/index.ts");const WithdrawalMethods_selectors=e=>{const t=o.wl.wx.wd.getSBBalances(e),n=o.wl.wx.zT.getBankTransferAccounts(e),a=o.wl.wx.wd.getSBPaymentMethods(e),r=o.wl.vE.Xd.getInvitations(e).getOrElse({openBanking:!1}),i=o.wl.qz.N5.getUserData(e),l=o.wl.vE.Xd.getCurrency(e);return(0,x.Z)(((e,t,n,a,i)=>({balances:e,bankTransferAccounts:t,paymentMethods:!r.openBanking&&Object.assign(Object.assign({},n),{methods:n.methods.filter((e=>e.type===H.t8.BANK_ACCOUNT||"USD"===e.currency))})||n,userData:a,walletCurrency:i})))(t,n,a,i,l)},V=h.ZP.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`,WithdrawalMethods_template_loading=()=>a.createElement(V,null,a.createElement(g.nZ,null),a.createElement(g.xv,{weight:600,color:"grey600",style:{marginTop:"24px"}},a.createElement(p.Z,{id:"copy.loading",defaultMessage:"Loading..."})));var J=n("./src/modals/SimpleBuy/PaymentMethods/Methods/BankWire/index.tsx"),q=n("./src/components/SimpleBuy/index.tsx");const Q=(0,h.ZP)(q.m5)`
  margin-bottom: 2px;
`,ee=(0,h.ZP)(q.R2)`
  min-height: 75px;
`,te=h.ZP.div`
  display: flex;
  margin-top: 8px;
  align-items: center;
  padding-left: 45px;
`,ne=h.ZP.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,ae=h.ZP.div`
  display: flex;
  flex-direction: row;
`,WithdrawalMethods_BankTransfer=({icon:e,onClick:t,value:n})=>a.createElement(q.Uq,{"data-e2e":`sb${n.type.toLowerCase()}LinkBank`,role:"button",onClick:t},a.createElement(ne,null,a.createElement(ae,null,a.createElement(ee,null,e),a.createElement(q.VY,null,a.createElement(Q,null,a.createElement(p.Z,{id:"copy.bank_account",defaultMessage:"Bank Account"})),a.createElement(q.iD,null,a.createElement(p.Z,{id:"copy.instantly_available",defaultMessage:"Instantly Available"})),a.createElement(q.dk,null,a.createElement(p.Z,{id:"modals.brokerage.bank_deposit_description",defaultMessage:"Securely link a bank and send cash to your our.com Wallet at anytime."}))),a.createElement(g.JO,{name:"chevron-right",size:"24px",color:"grey400"})),a.createElement(te,null,a.createElement(M.El,null,a.createElement(p.Z,{id:"copy.most_popular",defaultMessage:"Most Popular"}))))),re=h.ZP.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`,ie=(0,h.ZP)(s.o9)`
  height: unset;
`,le=(0,h.ZP)(g.xv)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7px;
`,se=h.ZP.section`
  border-top: 1px solid ${e=>e.theme.grey000};
`,oe=h.ZP.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${e=>e.theme.blue000};
  display: flex;
  align-items: center;
  justify-content: center;
`,getIcon=e=>{switch(e.type){case H.t8.BANK_TRANSFER:case H.t8.LINK_BANK:default:return a.createElement(g.Ee,{name:"bank",height:"48px"});case H.t8.BANK_ACCOUNT:return a.createElement(oe,null,a.createElement(g.JO,{size:"18px",color:"blue600",name:"arrow-down"}))}},getType=e=>{switch(e.type){case H.t8.BANK_TRANSFER:case H.t8.LINK_BANK:default:return a.createElement(p.Z,{id:"modals.simplebuy.banklink",defaultMessage:"Link a Bank"});case H.t8.BANK_ACCOUNT:return a.createElement(p.Z,{id:"modals.simplebuy.bankwire",defaultMessage:"Wire Transfer"})}},WithdrawalMethods_template_success=({brokerageActions:e,buySellActions:t,close:n,fiatCurrency:r,paymentMethods:i,userData:l,withdrawActions:s})=>{const o=i.methods.find((e=>e.type===H.t8.BANK_TRANSFER)),d=i.methods.find((e=>e.type===H.t8.BANK_ACCOUNT));return a.createElement(re,null,a.createElement(ie,null,a.createElement(le,{color:"grey800",size:"20px",weight:600},a.createElement("div",null,a.createElement(p.Z,{id:"modals.brokerage.add_a_bank_account",defaultMessage:"Add a Bank Account"})),a.createElement(g.JO,{cursor:!0,"data-e2e":"sbCloseModalIcon",name:"close",size:"20px",color:"grey600",role:"button",onClick:()=>{n()}}))),a.createElement(se,null,o&&a.createElement(WithdrawalMethods_BankTransfer,{icon:getIcon(o),onClick:()=>{e.showModal({modalType:"ADD_BANK_YODLEE_MODAL",origin:c.$p.ADD_BANK_WITHDRAW}),e.setAddBankStep({addBankStep:c.Hb.ADD_BANK}),s.setStep({fiatCurrency:r,step:c.GY.ENTER_AMOUNT})},text:getType(o),value:o}),d&&a.createElement(J.Z,{icon:getIcon(d),onClick:()=>{t.showModal({origin:"WithdrawModal"}),2===l.tiers.current?t.setStep({addBank:!0,displayBack:!1,fiatCurrency:r,step:"BANK_WIRE_DETAILS"}):t.setStep({step:"KYC_REQUIRED"}),s.setStep({fiatCurrency:r,step:c.GY.ENTER_AMOUNT})},text:getType(d),value:d})))},ce=(0,r.connect)((e=>({addNew:e.components.brokerage.addNew,data:WithdrawalMethods_selectors(e)})),(e=>({brokerageActions:(0,i.bindActionCreators)(o.Nw.wx.brokerage,e),buySellActions:(0,i.bindActionCreators)(o.Nw.wx.buySell,e),formActions:(0,i.bindActionCreators)(o.Nw.cr,e),withdrawActions:(0,i.bindActionCreators)(o.Nw.wx.withdraw,e)})))((e=>{(0,a.useEffect)((()=>{e.fiatCurrency&&!m.Nt.Success.is(e.data)&&(e.buySellActions.fetchFiatEligible(e.fiatCurrency),e.buySellActions.fetchPaymentMethods(e.fiatCurrency),e.brokerageActions.fetchBankTransferAccounts())}),[]);const t=(0,a.useCallback)((()=>{e.brokerageActions.fetchBankTransferAccounts()}),[]);return e.data.cata({Failure:()=>a.createElement(s.ub,{action:"retry","data-e2e":"withdrawReload",handler:t}),Loading:()=>a.createElement(WithdrawalMethods_template_loading,null),NotAsked:()=>a.createElement(WithdrawalMethods_template_loading,null),Success:t=>a.createElement(WithdrawalMethods_template_success,Object.assign({},t,e))})}));class de extends a.PureComponent{constructor(e){super(e),this.handleClose=()=>{this.setState({show:!1}),setTimeout((()=>{this.props.close()}),s.x9)},this.state={show:!1}}componentDidMount(){this.setState({show:!0})}render(){return a.createElement(s.ZP,Object.assign({},this.props,{onClose:this.handleClose,isOpen:this.state.show,"data-e2e":"custodyWithdrawModal"}),this.props.step===c.GY.LOADING&&a.createElement(s.FK,null,a.createElement(ConfirmWithdraw_template_loading,Object.assign({},this.props))),this.props.step===c.GY.ENTER_AMOUNT&&a.createElement(s.FK,null,a.createElement(L,Object.assign({},this.props,{handleClose:this.handleClose}))),this.props.step===c.GY.WITHDRAWAL_METHODS&&a.createElement(s.FK,null,a.createElement(ce,Object.assign({},this.props,{handleClose:this.handleClose}))),this.props.step===c.GY.BANK_PICKER&&a.createElement(s.FK,null,a.createElement(A,Object.assign({},this.props,{handleClose:this.handleClose}))),this.props.step===c.GY.CONFIRM_WITHDRAW&&a.createElement(s.FK,null,a.createElement(R,Object.assign({},this.props,{handleClose:this.handleClose}))),this.props.step===c.GY.WITHDRAWAL_DETAILS&&a.createElement(s.FK,null,a.createElement($,Object.assign({},this.props,{handleClose:this.handleClose}))),this.props.step===c.GY.INELIGIBLE&&a.createElement(s.FK,null,a.createElement(l.Z,{message:{message:u.lh}})),this.props.step===c.GY.ON_HOLD&&a.createElement(s.FK,null,a.createElement(F,{handleClose:this.handleClose})))}}const ue=(0,r.connect)((e=>({amount:o.wl.wx.XW.getAmount(e),beneficiary:o.wl.wx.XW.getBeneficiary(e),fiatCurrency:o.wl.wx.XW.getFiatCurrency(e),step:o.wl.wx.XW.getStep(e),withdrawal:o.wl.wx.XW.getWithdrawal(e)}))),me=(0,i.compose)((0,d.Z)(c.tl.CUSTODY_WITHDRAW_MODAL,{transition:s.x9}),ue)(de)},"./src/modals/SimpleBuy/PaymentMethods/Methods/BankWire/index.tsx":(e,t,n)=>{n.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var a=n("../../node_modules/react/index.js"),r=n("./node_modules/react-intl/lib/src/components/message.js"),i=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),l=n("../blockchain-info-components/src/index.js"),s=n("./src/components/SimpleBuy/index.tsx");const o=(0,i.ZP)(s.m5)`
  margin-bottom: 2px;
`,c=(0,i.ZP)(s.R2)`
  min-height: 75px;
`,__WEBPACK_DEFAULT_EXPORT__=({icon:e,onClick:t,text:n,value:i})=>a.createElement(s.Uq,{"data-e2e":`sb${i.type.toLowerCase()}BankWire`,role:"button",onClick:t},a.createElement(c,null,e),a.createElement(s.VY,null,a.createElement(o,null,n),a.createElement(s.iD,null,a.createElement(r.Z,{id:"copy.number_of_business_days",defaultMessage:"{first} to {second} Business Days",values:{first:"3",second:"5"}})),a.createElement(s.dk,null,a.createElement(r.Z,{id:"modals.simplebuy.bankwire.description_v2",defaultMessage:"Send funds directly from your bank to your our.com Wallet. Once we receive the wire transfer, we’ll complete your purchase."}))),a.createElement(l.JO,{name:"chevron-right",size:"24px",color:"grey400"}))},"./src/modals/components/index.tsx":(e,t,n)=>{n.d(t,{Ue:()=>y,rD:()=>BankSearchIcon,mf:()=>Z,Vd:()=>v,mZ:()=>BankWaitIndicator,zK:()=>o,lh:()=>f,Hr:()=>Hr,wq:()=>IneligibleErrorMessage,Oi:()=>p,dC:()=>LinkViaDesktop,gb:()=>Loading,H:()=>LoadingUpdating,EA:()=>ModalNavWithBackArrow,YX:()=>ModalNavWithCloseIcon,Zu:()=>c,ty:()=>N,NA:()=>ScanWithPhone,$0:()=>d,FP:()=>SimpleBankRow});var a=n("../../node_modules/react/index.js"),r=n("./node_modules/react-intl/lib/src/components/message.js"),i=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),l=n("../blockchain-info-components/src/index.js"),s=n("./src/components/Flyout/index.tsx");const o=(0,i.ZP)(s.o9)`
  padding: 37px 0 34px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`,c=(0,i.ZP)(l.xv)`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  padding-left: 40px;
`,d=i.ZP.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  align-items: center;
  padding: 20px;
`,u=i.ZP.div`
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
`,m=i.ZP.div`
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
`,p=i.ZP.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`,h=i.ZP.img`
  margin-bottom: 32px;
  max-height: 60px;
`,ScanWithPhone=({children:e,logo:t,qrCode:n})=>a.createElement(d,null,t&&a.createElement(h,{src:t}),a.createElement(l.xv,{weight:600,size:"20px",color:"grey900"},e),a.createElement(l.xv,{weight:500,size:"14px",color:"grey600"},a.createElement(r.Z,{id:"modals.brokerage.use_phone_camera",defaultMessage:"Use your phone’s camera to scan the QR code."})),a.createElement(u,null,n?a.createElement("img",{alt:"Use your phone’s camera to scan the QR code.",src:n}):a.createElement(l.nZ,{width:"30px",height:"30px"}))),BankWaitIndicator=({qrCode:e})=>{const[t,n]=(0,a.useState)(0);return e&&setTimeout((()=>{n(t+1)}),3e4),a.createElement(m,{className:e?"active":""},a.createElement(l.nZ,{width:"10px",height:"10px",borderWidth:"3px"}),a.createElement(l.xv,{size:"14px",weight:500},0===t&&a.createElement(r.Z,{id:"modals.brokerage.waiting_to_hear",defaultMessage:"Waiting to hear from your bank"}),t>0&&a.createElement(r.Z,{id:"modals.brokerage.this_can_take_a_while",defaultMessage:"This can take several minutes, hold tight!"})))},g=(0,i.ZP)(l.zx)`
  margin: 20px 0 0;
  display: unset;
`,LinkViaDesktop=({authUrl:e,children:t,onClick:n=(()=>{})})=>e?a.createElement(d,null,a.createElement(l.xv,{weight:600,size:"20px",color:"grey900"},t),a.createElement(g,{"data-e2e":"yapilyBankLink",nature:"empty-blue",onClick:()=>{window.open(e,"_blank"),n()}},a.createElement(r.Z,{id:"modals.brokerage.continue_in_browser",defaultMessage:"Continue in browser"}))):null,w=(0,i.ZP)(l.xv)`
  width: 300px;
`,x=i.ZP.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`,f="BROKERAGE_INELIGIBLE",IneligibleErrorMessage=()=>a.createElement(w,{size:"16px",weight:400},a.createElement(r.Z,{id:"modals.brokerage.ineligible_error",defaultMessage:"You are not eligible to make deposits and withdrawals with this currency."}));var y;!function(e){e.GETTING_READY="Getting Ready...",e.LOADING="Loading...",e.PROCESSING="Processing..."}(y||(y={}));const Loading=({text:e})=>a.createElement(x,null,a.createElement(l.nZ,null),a.createElement(l.xv,{weight:600,color:"grey600",style:{marginTop:"24px"}},e===y.LOADING&&a.createElement(r.Z,{id:"copy.loading",defaultMessage:"Loading..."}),e===y.GETTING_READY&&a.createElement(r.Z,{id:"loader.message.gettingready",defaultMessage:"Getting Ready..."}),e===y.PROCESSING&&a.createElement(r.Z,{id:"modals.simplebuy.processing",defaultMessage:"Processing…"}))),E=i.ZP.div`
  transform: translate(47px, 35px);
  border: 5px solid white;
  border-radius: 50%;
  background-color: white;
`,b=(0,i.ZP)(l.xv)`
  font-weight: 600;
  font-size: 20px;
  margin-top: 22px;
`,k=(0,i.ZP)(l.xv)`
  font-size: 14px;
  font-weight: 500;
  margin: 5px 30px;
`,LoadingUpdating=()=>a.createElement(x,null,a.createElement(E,null,a.createElement(l.nZ,{borderWidth:"7px",height:"32px",width:"32px"})),a.createElement(l.Ee,{name:"blockchain-logo-circle",width:"106px"}),a.createElement(b,{color:"grey900"},a.createElement(r.Z,{defaultMessage:"Updating Your Wallet...",id:"modals.brokerage.updating_your_wallet"})),a.createElement(k,{color:"grey600"},a.createElement(r.Z,{defaultMessage:"This could take up to 30 seconds. Please do not go back or close the app.",id:"modals.brokerage.this_could_take"}))),C=i.ZP.div`
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

  ${e=>e.onClick&&i.iv`
      cursor: pointer;
      * {
        cursor: pointer;
      }
      &:hover {
        background-color: ${e=>e.theme.blue000};
      }
    `}
`,A=i.ZP.div`
  height: 30px;
  width: 30px;
  background: url('${e=>e.url}') 0 0 no-repeat;
  background-size: 30px;
  background-position: center;
`,v=i.ZP.div`
  position: relative;
`,Z=i.ZP.input`
  border: 1px solid ${e=>e.theme.grey000};
  font-size: 16px;
  width: 100%;
  border-width: 1px 0;
  padding: 20px 0 20px 40px;

  &:active,
  &:focus {
    outline: none;
  }
`,BankSearchIcon=()=>a.createElement(l.JO,{size:"20px",color:"grey600",name:"magnifier",style:{position:"absolute",right:"60px",top:"20px"}}),SimpleBankRow=e=>a.createElement(C,{onClick:e.onClick},a.createElement("div",null,a.createElement(A,{url:e.institution.media[0].source}),a.createElement(l.xv,{color:"grey900",style:{marginLeft:"20px"},weight:600},e.institution.name)),a.createElement(l.JO,{cursor:!0,name:"chevron-right",size:"20px",color:"grey600",role:"button",style:{marginRight:"24px"}})),ModalNavWithBackArrow=e=>a.createElement(c,{color:"grey800",size:"20px",weight:600},a.createElement(l.JO,{cursor:!0,name:"arrow-back",size:"20px",color:"grey600",role:"button",style:{marginRight:"24px"},onClick:()=>e.handleClose()}),e.children),ModalNavWithCloseIcon=e=>a.createElement(c,{color:"grey800",size:"20px",weight:600,style:{justifyContent:"space-between"}},e.children,a.createElement(l.JO,{cursor:!0,name:"close",size:"20px",color:"grey600",role:"button",style:{marginRight:"24px"},onClick:()=>e.handleClose()})),_=i.ZP.hr`
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
`,Hr=()=>a.createElement("div",{style:{width:"100%"}},a.createElement(l.xv,{weight:600,size:"16px",color:"grey900"},a.createElement(_,null))),N=((0,i.ZP)(l.xv)`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.spaceBetween?"space-between":"initial"};
  margin-bottom: ${e=>e.marginBottom?"16px":"0px"};
`,({amount:e,currency:t})=>a.createElement(r.Z,{id:"modals.send.over_your_limit",defaultMessage:"Over your limit! Send up to {currency}{amount}.",values:{amount:e,currency:t}}))}}]);