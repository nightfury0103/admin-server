"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[4755],{"./src/components/Box/index.tsx":(e,t,r)=>{r.d(t,{xu:()=>g,W2:()=>y,Ec:()=>Box_SavedRecurringBuy});var n=r("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),l=r("./src/services/styles/index.ts"),a=r("../../node_modules/react/index.js"),i=r("./node_modules/react-intl/lib/src/components/message.js"),o=r("../../node_modules/polished/dist/polished.esm.js"),s=r("../blockchain-info-components/src/index.js"),c=r("./src/components/Flyout/model.tsx");const d=(0,n.ZP)(s.xu)`
  cursor: unset;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 49%;
  min-width: 392px;

  @media (max-width: 767px) {
    width: 100%;
  }

  @media (max-width: 1114px) {
    width: 100%;
  }
`,m=n.ZP.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`,u=n.ZP.div`
  display: flex;
  justify-content: flex-end;
`,p=n.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  min-width: 40px;
  border-radius: 20px;
  margin-right: 20px;
  background-color: ${e=>(0,o.$n)(.35,e.theme[e.coin])};
`,Box_SavedRecurringBuy=({action:e,amount:t,coin:r,nextPayment:n,onClick:l,period:o})=>a.createElement(d,{disabled:!1,isMethod:!1,isMobile:!1},a.createElement(m,null,a.createElement(p,{coin:r},a.createElement(s.JO,{cursor:!0,"data-e2e":`${r}savedRecurringBuy`,name:"sync-regular",size:"20px",color:r,role:"button"})),a.createElement(s.Qt,null,a.createElement(s.xv,{weight:600,size:"16px",color:"grey900",style:{marginBottom:"0"}},t," ",(0,c.O7)(o)),a.createElement(s.xv,{weight:500,size:"14px",color:"grey600",style:{marginBottom:"0"}},(0,c.Nd)(e,n)))),a.createElement(u,null,a.createElement(s.zx,{"data-e2e":`${r}savedRecurringBuyViewDetails`,nature:"empty-blue",onClick:l},a.createElement(i.Z,{id:"copy.view_details",defaultMessage:"View Details"})))),y=n.ZP.div`
  display: flex;
  > div {
    margin-right: 24px;
    &:last-child {
      margin-right: 0px;
    }
  }
  ${l.BC.laptop`
    flex-direction: column;
    align-items: start;
    > div {
      margin-right: 0;
      margin-bottom: 12px;
    }
  `};
`,g=n.ZP.div`
  position: relative;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.grey000};
  width: 280px;
`},"./src/components/Brokerage/index.tsx":(e,t,r)=>{r.d(t,{A:()=>a});var n=r("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),l=r("../blockchain-info-components/src/index.js");const a=(0,n.ZP)(l.zx)`
  padding: 8px 16px;
  margin: 40px auto;
  width: 83%;
  color: ${e=>e.theme.blue600};
  border-color: ${e=>e.theme.grey100};
`},"./src/components/Clipboard/CopyClipboardButton/index.tsx":(e,t,r)=>{r.d(t,{Z:()=>y});var n=r("../../node_modules/react/index.js"),l=r("../../node_modules/react-redux/es/index.js"),a=r("../../node_modules/redux/es/redux.js"),i=r("./src/data/index.ts"),o=r("./src/services/alerts/index.ts"),s=r("../../node_modules/react-copy-to-clipboard/lib/index.js"),c=r.n(s),d=r("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),m=r("../blockchain-info-components/src/index.js");const u=(0,d.ZP)(m.hU)`
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
`,template=e=>{const{active:t,color:r,handleClick:l,size:a,textToCopy:i}=e;return n.createElement(c(),{text:i,onCopy:l},n.createElement(u,{active:t,color:r,"data-e2e":"copyClipboardCopyButton",name:t?"check":"copy-clipboard",size:a}))};class p extends n.PureComponent{constructor(e){super(e),this.timeout=void 0,this.state={active:!1},this.handleClick=this.handleClick.bind(this)}componentWillUnmount(){clearTimeout(this.timeout)}handleClick(){const{alertActions:e}=this.props;this.setState({active:!0}),this.timeout=setTimeout((()=>{this.setState({active:!1})}),2e3),e.displaySuccess(o.Rf),this.props.onClick&&this.props.onClick()}render(){return n.createElement(template,{active:this.state.active,color:this.props.color,handleClick:this.handleClick,"data-e2e":this.props["data-e2e"],textToCopy:this.props.textToCopy,size:this.props.size})}}const y=(0,l.connect)(null,(e=>({alertActions:(0,a.bindActionCreators)(i.Nw.$u,e)})))(p)},"./src/components/DataError/index.tsx":(e,t,r)=>{r.d(t,{Z:()=>components_DataError});var n,l=r("../../node_modules/react/index.js"),a=r("./node_modules/react-intl/lib/src/components/message.js"),i=r("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),o=r("../blockchain-info-components/src/index.js"),s=r("../../node_modules/ramda/es/prop.js"),c=r("../blockchain-wallet-v4/src/redux/payment/model.js"),d=r("./src/services/misc/index.js"),m=r("./src/modals/components/index.tsx"),u=r("./src/components/Flyout/model.tsx");var p=(0,i.ZP)(o.xv)(n||(n=function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  width: 80%;\n  margin-bottom: 20px;\n"])));const y=function ErrorHandler(e){var t=e.message,r=e.onClick,n=e["data-e2e"],i=(0,s.Z)("message",t)||(0,s.Z)("description",t),y=(0,d.K)(t);return y?l.createElement(l.Fragment,null,l.createElement(p,{size:"18px",weight:400},t),l.createElement(o.zx,{nature:"primary",onClick:function onClick(){return r(y)}},l.createElement(o.xv,{size:"18px",weight:400,color:"white"},l.createElement(a.Z,{id:"components.dataerror.archiveaddress",defaultMessage:"Archive Address"})))):i===m.lh?l.createElement(m.wq,null):i===c.B?l.createElement(o.xv,{size:"16px",weight:400},l.createElement(a.Z,{id:"components.dataerror.feesfetchfailure",defaultMessage:"There was a problem fetching fees. Please try again later."})):i===u.k7?l.createElement(o.xv,{size:"16px",weight:400,style:{width:"300px"}},l.createElement(a.Z,{id:"modals.recurringbuys.period_fetch_error",defaultMessage:"There was an error fetching recurring buy frequency options. Please try again."})):"string"==typeof i?l.createElement(o.xv,{size:"16px",color:"error",weight:500},i):l.createElement(o.Qt,{inline:!0},l.createElement(o.xv,{size:"18px",weight:400},l.createElement(a.Z,{id:"components.dataerror.body",defaultMessage:"Please "})),l.createElement(o.rU,{size:"18px","data-e2e":n?"".concat(n,"Link"):"",onClick:r},l.createElement(a.Z,{id:"components.dataerror.click",defaultMessage:"click here"})),l.createElement(o.xv,{size:"18px",weight:400},l.createElement(a.Z,{id:"components.dataerror.refresh",defaultMessage:" to refresh."})))},g=i.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`,h=i.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`,E=(0,i.ZP)(o.xv)`
  margin-top: 30px;
  margin-bottom: 20px;
`,components_DataError=e=>l.createElement(g,null,l.createElement(h,null,l.createElement(o.Ee,{name:"empty-search",width:"260px"}),l.createElement(E,{size:"18px",weight:500},l.createElement(a.Z,{id:"components.dataerror.header",defaultMessage:"Oops, something went wrong here!"})),l.createElement(y,Object.assign({},e))))},"./src/components/Layout/index.ts":(e,t,r)=>{r.d(t,{M5:()=>o,wX:()=>s,bn:()=>c,wW:()=>d,Qc:()=>m,US:()=>u,bz:()=>p,Pj:()=>y,l0:()=>g});var n=r("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),l=r("../blockchain-info-components/src/index.js"),a=r("./src/services/styles/index.ts"),i=r("./src/components/Box/index.tsx");const o=n.ZP.div`
  background-color: ${e=>e.theme.white};
  position: sticky;
  width: 100%;
  z-index: 1;
  top: 0;
`,s=n.ZP.div`
  width: 100%;
  height: 100%;

  ${e=>e.centerContent&&"\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  "}
`,c=n.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  min-width: 40px;
  background-color: ${e=>e.theme.blue000};
  border-radius: 40px;
`,d=n.ZP.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  > :first-child {
    margin-right: 16px;
  }
  ${a.BC.mobile`
    flex-direction: column;
  `}
`,m=n.ZP.div`
  display: flex;
  align-items: center;
  > :first-child {
    margin-right: 16px;
  }
`,u=(0,n.ZP)(l.xv)`
  font-size: 32px;
  color: ${e=>e.theme.grey800};
  font-weight: 600;
  margin-right: 14px;
`,p=(0,n.ZP)(l.xv)`
  font-size: 16px;
  color: ${e=>e.theme.grey600};
  font-weight: 500;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`,y=(0,n.ZP)(i.xu)`
  background-image: url('/img/buy-sell-learn-more.png');
  /* stylelint-disable */
  background-image: -webkit-image-set(
    url('/img/buy-sell-learn-more.png') 1x,
    url('/img/buy-sell-learn-more@2x.png') 2x
  );
  /* stylelint-enable */
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,g=n.ZP.div`
  position: relative;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.grey000};
  background-image: url('/img/bg-banner-pattern.svg');
  background-repeat: repeat-y;
  background-position: right;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`},"./src/modals/SimpleBuy/PaymentMethods/Methods/BankWire/index.tsx":(e,t,r)=>{r.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var n=r("../../node_modules/react/index.js"),l=r("./node_modules/react-intl/lib/src/components/message.js"),a=r("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),i=r("../blockchain-info-components/src/index.js"),o=r("./src/components/SimpleBuy/index.tsx");const s=(0,a.ZP)(o.m5)`
  margin-bottom: 2px;
`,c=(0,a.ZP)(o.R2)`
  min-height: 75px;
`,__WEBPACK_DEFAULT_EXPORT__=({icon:e,onClick:t,text:r,value:a})=>n.createElement(o.Uq,{"data-e2e":`sb${a.type.toLowerCase()}BankWire`,role:"button",onClick:t},n.createElement(c,null,e),n.createElement(o.VY,null,n.createElement(s,null,r),n.createElement(o.iD,null,n.createElement(l.Z,{id:"copy.number_of_business_days",defaultMessage:"{first} to {second} Business Days",values:{first:"3",second:"5"}})),n.createElement(o.dk,null,n.createElement(l.Z,{id:"modals.simplebuy.bankwire.description_v2",defaultMessage:"Send funds directly from your bank to your our.com Wallet. Once we receive the wire transfer, we’ll complete your purchase."}))),n.createElement(i.JO,{name:"chevron-right",size:"24px",color:"grey400"}))},"./src/modals/SimpleBuy/index.tsx":(e,t,r)=>{r.r(t),r.d(t,{default:()=>da});var n=r("../../node_modules/react/index.js"),l=r("../../node_modules/react-redux/es/index.js"),a=r("../../node_modules/ramda/es/find.js"),i=r("../../node_modules/ramda/es/propEq.js"),o=r("../../node_modules/ramda/es/propOr.js"),s=r("../../node_modules/ramda/es/isEmpty.js"),c=r("../../node_modules/redux/es/redux.js"),d=r("./src/components/Flyout/index.tsx"),m=r("./src/data/index.ts"),u=r("./src/data/components/simpleBuy/model.ts"),p=r("./src/data/types.ts"),y=r("./src/providers/ModalEnhancer/index.tsx"),g=r("./src/modals/components/index.tsx"),h=r("../blockchain-wallet-v4/src/index.ts"),E=r("./src/components/DataError/index.tsx"),x=r("./node_modules/react-intl/lib/src/components/message.js"),f=r("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),b=r("../blockchain-info-components/src/index.js");const w=f.ZP.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`,template_loading=()=>n.createElement(w,null,n.createElement(b.T_,{width:"80px",height:"80px"}),n.createElement(b.xv,{weight:600,color:"grey600",style:{marginTop:"24px"}},n.createElement(x.Z,{id:"modals.simplebuy.processing",defaultMessage:"Processing…"})));var C=r("../../node_modules/ramda/es/lift.js");const getData=e=>{const t=m.wl.cr.getFormValues("addCCForm")(e),r=m.wl.wx.wd.getSBOrder(e),n=m.wl.wx.wd.getSBPaymentMethods(e),l=m.wl.wx.LE.getSupportedCountries(e),a=m.wl.qz.N5.getUserData(e);return(0,C.Z)(((e,n,l)=>({formValues:t,order:r,paymentMethods:e,supportedCountries:n,userData:l})))(n,l,a)};var v=r("../../node_modules/ramda/es/map.js"),A=r("../../node_modules/redux-form/es/Form.js"),S=r("../../node_modules/redux-form/es/Field.js"),Z=r("../../node_modules/redux-form/es/reduxForm.js"),k=r("./src/components/Cartridge/index.ts"),M=r("./src/components/Form/index.ts"),T=r("./src/components/Form/CreditCardBox/index.tsx"),_=r("./src/components/Form/CreditCardBox/model.ts"),P=r("./src/components/Form/CreditCardCVCBox/index.tsx"),N=r("./src/components/Form/CreditCardExpiryBox/index.tsx"),B=r("./src/services/forms/index.js");const Error=({error:e})=>{switch(e){case"CARD_ALREADY_SAVED":return n.createElement(x.Z,{id:"modals.simplebuy.card_already_saved",defaultMessage:"This card has already been saved."});case"CARD_CREATION_FAILED":return n.createElement(x.Z,{id:"modals.simplebuy.card_creation_failed",defaultMessage:"We could not save your card. Please contact support."});case"CARD_ACTIVATION_FAILED":return n.createElement(x.Z,{id:"modals.simplebuy.card_activation_failed",defaultMessage:"We could not activate your card. Please contact support."});case"PENDING_CARD_AFTER_POLL":return n.createElement(x.Z,{id:"modals.simplebuy.card_pending_after_poll",defaultMessage:"We waited one minute and did not receive an update from our card provider. Your card may still be approved later. Please contact support if you have any questions."});case"LINK_CARD_FAILED":return n.createElement(x.Z,{id:"modals.simplebuy.link_card_failed",defaultMessage:"Card failed to link. Please try again or contact support if you believe this occured in error."});default:return n.createElement(n.Fragment,null,`System Error: ${JSON.stringify(e)}`)}},D=(0,f.ZP)(d.o9)`
  height: 100%;
`,O=(0,f.ZP)(b.xv)`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`,z=f.ZP.div`
  display: flex;
  align-items: center;
  margin: 24px 0;
  > img {
    margin-right: 8px;
  }
`,F=f.ZP.label`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
  display: block;
  color: ${e=>e.theme.grey900};
`,R=f.ZP.div`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`,I=f.ZP.div`
  margin: 24px 0;
  display: flex;
  flex-direction: column;
`,L=(0,f.ZP)(b.xv)`
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: ${e=>e.theme.grey600};
`,U=(0,Z.Z)({destroyOnUnmount:!1,form:"addCCForm"})((e=>{var t,r,l;const[a,i]=(0,n.useState)(!1),o=e.formValues&&(null===(r=null===(t=e.formValues)||void 0===t?void 0:t.billingaddress)||void 0===r?void 0:r.country)&&((s=e.formValues.billingaddress.country).code?s.code:s)||e.countryCode;var s;const c="US"===o,d=(0,B.z9)(o)||(0,B.VK)(o),m=e.supportedCountries.find((e=>e.code===o));return(0,n.useEffect)((()=>{e.formActions.change("addCCForm","sameAsBillingAddress",!0)}),[]),n.createElement(D,null,n.createElement(O,{color:"grey800",size:"20px",weight:600},n.createElement(b.JO,{cursor:!0,name:"arrow-back",size:"20px",color:"grey600",role:"button",style:{marginRight:"24px"},onClick:()=>e.order?e.buySellActions.setStep({order:e.order,step:"CHECKOUT_CONFIRM"}):e.buySellActions.setStep({cryptoCurrency:e.cryptoCurrency||"BTC",fiatCurrency:e.fiatCurrency,order:e.order,pair:e.pair,step:"PAYMENT_METHODS"})}),n.createElement(x.Z,{id:"buttons.add_card",defaultMessage:"Add Card"})),e.isSddFlow&&n.createElement("div",null,n.createElement(b.xv,{weight:500,size:"16px",color:"grey600"},n.createElement(x.Z,{id:"modals.simplebuy.add_card.description",defaultMessage:"Securely add your card to fund your crypto purchases. We accept Visa or Mastercard."})),n.createElement(z,null,n.createElement(b.Ee,{name:"visa-new-logo"}),n.createElement(b.Ee,{name:"mastercard-logo"}))),n.createElement(A.Z,{onSubmit:e.handleSubmit},n.createElement(M.cw,{margin:"24px"},n.createElement(M.lX,null,n.createElement(x.Z,{id:"modals.simplebuy.name_on_card",defaultMessage:"Name on Card"})),n.createElement(S.Z,{name:"name-on-card",component:M.zC,validate:[B.C1]})),n.createElement(M.cw,{margin:"24px"},n.createElement(M.lX,null,n.createElement(x.Z,{id:"modals.simplebuy.card_number",defaultMessage:"Card Number"})),n.createElement(S.Z,Object.assign({name:"card-number",component:M.B3,normalize:T.fg,validate:[B.C1,T.YX]},e))),n.createElement(M.cw,{inline:!0,margin:"24px"},n.createElement(M.xJ,null,n.createElement(M.lX,null,n.createElement(x.Z,{id:"modals.simplebuy.expiry_date",defaultMessage:"Expiry Date"})),n.createElement(S.Z,{name:"expiry-date",placeholder:"MM/YY",component:M.YT,normalize:N.Bs,validate:[B.C1,N.iZ]})),n.createElement(M.xJ,null,n.createElement(M.lX,null,e.formValues&&(null===(l=(0,_.iZ)(e.formValues["card-number"]))||void 0===l?void 0:l.securityCodeName)||_._n),n.createElement(S.Z,{name:"cvc",component:M.kU,normalize:P.$u,validate:[B.C1,P.oN]}))),e.error&&n.createElement(M.cw,null,n.createElement(k.XG,null,n.createElement(b.JO,{name:"alert-filled",color:"red600",style:{marginRight:"4px"}}),n.createElement(Error,{error:e.error}))),!e.isSddFlow&&n.createElement(M.cw,{margin:"24px"},n.createElement(b.rU,{size:"13px",style:{textAlign:"center",width:"100%"},onClick:()=>e.buySellActions.setStep({step:"CC_BILLING_ADDRESS"})},n.createElement(x.Z,{id:"modals.simplebuy.change_billing_address",defaultMessage:"Change Billing Address"}))),e.isSddFlow&&n.createElement(n.Fragment,null,n.createElement(M.xJ,null,n.createElement(I,null,n.createElement(b.xv,{weight:600,size:"14px",color:"grey800",lineHeight:"150%",style:{marginBottom:"16px"}},n.createElement(x.Z,{id:"modals.simplebuy.add_card.billing_address",defaultMessage:"Billing Address"})),n.createElement(S.Z,{name:"sameAsBillingAddress",id:"sameAsBillingAddress",component:M.Jg,type:"checkbox",onChange:()=>(t=>{i((e=>!e)),t&&e.isSddFlow&&e.updateDefaultCountry(t)})(m)},n.createElement(b.xv,{weight:500,size:"14px"},n.createElement(x.Z,{id:"modals.simplebuy.add_card.residential_address",defaultMessage:"Same as Residential Address"}))))),a&&n.createElement(n.Fragment,null,n.createElement(M.cw,null,n.createElement(M.xJ,null,n.createElement(F,{htmlFor:"line1"},n.createElement(b.xv,{weight:500,size:"14px",color:"grey900"},n.createElement(x.Z,{id:"modals.simplebuy.info_and_residential.address_line1",defaultMessage:"Address Line 1"}))),n.createElement(S.Z,{name:"billingaddress.line1",errorBottom:!0,validate:B.C1,component:M.zC}))),n.createElement(M.cw,null,n.createElement(M.xJ,null,n.createElement(F,{htmlFor:"line2"},n.createElement(b.xv,{weight:500,size:"14px",color:"grey900"},n.createElement(x.Z,{id:"identityverification.personal.address_line2",defaultMessage:"Address Line 2"}))),n.createElement(S.Z,{name:"billingaddress.line2",errorBottom:!0,component:M.zC}))),n.createElement(M.cw,null,n.createElement(M.xJ,null,n.createElement(F,{htmlFor:"city"},n.createElement(b.xv,{weight:500,size:"14px",color:"grey900"},n.createElement(x.Z,{id:"modals.simplebuy.info_and_residential.city",defaultMessage:"City"}))),n.createElement(S.Z,{name:"billingaddress.city",errorBottom:!0,validate:B.C1,component:M.zC}))),n.createElement(M.cw,{inline:!0},n.createElement(M.xJ,null,n.createElement(M.lX,null,c?n.createElement(x.Z,{id:"identityverification.personal.staterequired",defaultMessage:"State *"}):n.createElement(x.Z,{id:"identityverification.personal.region",defaultMessage:"Region"})),c?n.createElement(S.Z,{name:"billingaddress.state",component:M.T3,errorBottom:!0,validate:[B.C1],normalize:e=>e&&e.code}):n.createElement(S.Z,{name:"state",component:M.zC})),d&&n.createElement(M.xJ,null,n.createElement(M.lX,{htmlFor:"billingaddress.postCode"},n.createElement(b.xv,{weight:500,size:"14px",color:"grey900"},(0,B.z9)(o)?n.createElement(x.Z,{id:"identityverification.personal.zip",defaultMessage:"Zip Code *"}):n.createElement(x.Z,{id:"identityverification.personal.postcoderequired",defaultMessage:"Postcode *"}))),n.createElement(S.Z,{name:"billingaddress.postCode",errorBottom:!0,validate:B.j0,component:M.zC}))),n.createElement(M.cw,null,n.createElement(M.xJ,null,n.createElement(F,{htmlFor:"country"},n.createElement(b.xv,{weight:500,size:"14px",color:"grey900"},n.createElement(x.Z,{id:"modals.simplebuy.info_and_residential.country",defaultMessage:"Country"}))),n.createElement(S.Z,{"data-e2e":"selectCountryDropdown",name:"billingaddress.country",validate:B.C1,elements:(u=e.supportedCountries,[{group:"",items:(0,v.Z)((e=>({text:e.name,value:e})),u)}]),component:M.jL,menuPlacement:"auto",onChange:e.onCountrySelect,label:n.createElement(x.Z,{id:"components.selectboxcountry.label",defaultMessage:"Select country"})}))))),n.createElement(M.cw,null,n.createElement(b.zx,{nature:"primary","data-e2e":"addCardEnter",height:"48px",size:"16px",type:"submit",disabled:e.invalid||e.submitting},n.createElement(x.Z,{id:"buttons.next",defaultMessage:"Next"})),n.createElement(R,null,n.createElement(b.JO,{name:"lock"}),n.createElement(L,null,n.createElement(x.Z,{id:"modals.simplebuy.add_card.pricacy_disclaimer",defaultMessage:"Privacy protected with 256-Bit SSL encryption."}))))));var u}));class j extends n.PureComponent{constructor(){super(...arguments),this.handleSubmit=()=>{this.props.buySellActions.addCard()},this.setDefaultCountry=e=>{this.props.formActions.change("addCCForm","billingaddress.country",e),this.props.formActions.clearFields("addCCForm",!1,!1,"billingaddress.state")},this.onCountryChange=(e,t)=>{this.setDefaultCountry(t)}}componentDidMount(){this.props.buySellActions.fetchPaymentMethods(this.props.fiatCurrency),h.Nt.Success.is(this.props.data)||this.props.identityVerificationActions.fetchSupportedCountries()}render(){return this.props.data.cata({Failure:e=>n.createElement(E.Z,{message:{message:e},onClick:this.props.buySellActions.fetchPaymentMethods}),Loading:()=>n.createElement(template_loading,null),NotAsked:()=>n.createElement(template_loading,null),Success:e=>{var t,r;return n.createElement(U,Object.assign({},this.props,e,{isSddFlow:2!==(null===(r=null===(t=e.userData)||void 0===t?void 0:t.tiers)||void 0===r?void 0:r.current),onSubmit:this.handleSubmit,onCountrySelect:this.onCountryChange,updateDefaultCountry:this.setDefaultCountry}))}})}}const mapStateToProps=e=>({countryCode:m.wl.vE.Xd.getCountryCode(e).getOrElse(null),data:getData(e),fiatCurrency:m.wl.wx.wd.getFiatCurrency(e)||"EUR"}),mapDispatchToProps=e=>({buySellActions:(0,c.bindActionCreators)(m.Nw.wx.buySell,e),formActions:(0,c.bindActionCreators)(m.Nw.cr,e),identityVerificationActions:(0,c.bindActionCreators)(m.Nw.wx.identityVerification,e)}),Y=((0,l.connect)(mapStateToProps,mapDispatchToProps),(0,l.connect)(mapStateToProps,mapDispatchToProps)(j));var $=r("../../node_modules/ramda/es/filter.js"),V=r("../../node_modules/ramda/es/prop.js"),K=r("../../node_modules/ramda/es/defaultTo.js"),q=r("../../node_modules/ramda/es/path.js"),J=r("../blockchain-wallet-v4/src/exchange/utils.ts");const W=f.ZP.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,G=(0,f.ZP)(b.xv)`
  display: flex;
  align-items: center;
  width: 100%;
  font-weight: 600;
  font-size: 20px;
`,X=f.ZP.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: ${e=>e.isPaymentInformation?"0 40px":"auto"};
  /* chevorn icon rotation */
  > span:last-child {
    size: 10px;
    transition: transform 0.2s;
    color: ${e=>e.theme.grey600};
    &.active {
      transform: rotate(180deg);
    }
  }
`,H=(0,f.ZP)(d.Dx)`
  font-weight: 600;
  line-height: 1.5;
  color: ${e=>e.theme.grey900};
`,Q=f.ZP.div`
  max-height: 0;
  margin-top: 0;
  overflow: hidden;
  transition: max-height, margin-top 0.3s;
  &.isToggled {
    max-height: 100%;
    margin-top: 12px;
  }
`,ee=(0,f.ZP)(d.Dx)`
  font-size: 14px;
  font-weight: 500;
  color: ${e=>e.theme.grey600};
  line-height: 1.5;
`,te=(0,f.ZP)(d.o9)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`,re=(0,f.ZP)(d.X2)`
  padding: ${e=>e.isPaymentInformation?"16px 0":"auto"};
`,DropdownItem=({bodyText:e,isPaymentInformation:t,titleText:r})=>{const[l,a]=(0,n.useState)(!1);return n.createElement(re,{isPaymentInformation:t},n.createElement(X,{isPaymentInformation:t,onClick:()=>a(!l)},n.createElement(H,null,r),n.createElement(b.JO,{name:"chevron-down",className:l?"active":""})),n.createElement(Q,{className:l?"isToggled":""},n.createElement(ee,null,e)))},ne=(0,l.connect)((e=>({bankAccounts:m.wl.wx.zT.getBankTransferAccounts(e).getOrElse([])})),(e=>({buySellActions:(0,c.bindActionCreators)(m.Nw.wx.buySell,e)})))((e=>{const{bankAccounts:t,buySellActions:r,order:l}=e,a=(0,u.getCounterAmount)(e.order),i=(0,u.getCounterCurrency)(e.order),[o]=(0,$.Z)((e=>"ACTIVE"===e.state&&e.id===(0,V.Z)("paymentMethodId",l)),(0,K.Z)([])(t)),s="Safeconnect(UK)"===(0,q.Z)(["attributes","entity"],o)?"SafeConnect":"SafeConnect (UAB)";return n.createElement(W,null,n.createElement(d.o9,{style:{paddingBottom:"10px"}},n.createElement(G,null,n.createElement(b.Ee,{name:"safe-connect",size:"20px",style:{marginRight:"28px"}}),n.createElement(x.Z,{id:"modals.brokerage.authorize.title",defaultMessage:"{entityName}",values:{entityName:s}}))),n.createElement(d.o9,{style:{paddingBottom:"16px"}},n.createElement(b.xv,{size:"20px",weight:600,color:"grey900"},n.createElement(x.Z,{id:"modals.brokerage.authrorize.approve",defaultMessage:"Approve Your Payment"}))),n.createElement(d.X2,null,n.createElement(d.Dx,null,n.createElement(x.Z,{id:"modals.brokerage.authorize.payment_total",defaultMessage:"Payment Total"})),n.createElement(d.B4,null,(0,J.LE)({unit:i,value:a}))),n.createElement(DropdownItem,{isPaymentInformation:!0,titleText:"Payment Information",bodyText:n.createElement(n.Fragment,null,n.createElement(d.X2,null,n.createElement(ee,null,n.createElement(x.Z,{id:"modals.brokerage.authorize.payer",defaultMessage:"Payer Name"})),n.createElement(H,null,(0,q.Z)(["details","accountName"],o))),n.createElement(d.X2,null,n.createElement(ee,null,n.createElement(x.Z,{id:"modals.brokerage.authorize.sort_code",defaultMessage:"Sort Code"})),n.createElement(H,null,(0,q.Z)(["details","sortCode"],o))),n.createElement(d.X2,null,n.createElement(ee,null,n.createElement(x.Z,{id:"modals.brokerage.account_number",defaultMessage:"Account Number"})),n.createElement(H,null,(0,q.Z)(["details","accountNumber"],o))),n.createElement(d.X2,null,n.createElement(ee,null,n.createElement(x.Z,{id:"modals.brokerage.authorize.payment_reference",defaultMessage:"Payment Reference"})),n.createElement(H,null,"BLOCKCHAIN")),n.createElement(d.X2,null,n.createElement(ee,null,n.createElement(x.Z,{id:"modals.brokerage.authorize.bank_name",defaultMessage:"Bank Name"})),n.createElement(H,null,(0,q.Z)(["details","bankName"],o))))}),n.createElement(DropdownItem,{isPaymentInformation:!1,bodyText:n.createElement(x.Z,{id:"modals.brokertitleage.authorize.data_sharing",defaultMessage:"{entityName} will retrieve your bank data based on your request and provide this information to our.com.",values:{entityName:s}}),titleText:n.createElement(x.Z,{id:"modals.brokerage.authorize.data_sharing",defaultMessage:"Data Sharing"})}),n.createElement(DropdownItem,{isPaymentInformation:!1,bodyText:n.createElement(x.Z,{id:"modals.brokerage.authorize.secure_connection",defaultMessage:"Data is securely retrieved in read-only format and only for the duration agreed with you. You have the right to withdraw your consent at any time."}),titleText:n.createElement(x.Z,{id:"modals.brokerage.authorize.secure_connection.title",defaultMessage:"Secure Connection"})}),n.createElement(DropdownItem,{isPaymentInformation:!1,bodyText:"SafeConnect"===s?n.createElement(x.Z,{id:"modals.brokerage.authorize.fca",defaultMessage:"our.com is an agent of {entityName} Ltd. {entityName} Ltd is authorised and regulated by the Financial Conduct Authority under the Payment Service Regulations 2017 [827001] for the provision of Account Information and Payment Initiation services.",values:{entityName:s}}):n.createElement(x.Z,{id:"modals.brokerage.authorize.bol",defaultMessage:"SafeConnect UAB is authorised and regulated by the Bank of Lithuania under Payments Law (LB002045) for the provision of Account Information and Payment Initiation services."}),titleText:"SafeConnect"===s?n.createElement(x.Z,{id:"modals.brokerage.authorize.fca.title",defaultMessage:"FCA Authorisation"}):n.createElement(x.Z,{id:"modals.brokerage.authorize.bol.title",defaultMessage:"Bank of Lithuania Authorisation"})}),n.createElement(d.X2,null,n.createElement(ee,null,n.createElement(x.Z,{id:"modals.brokerage.authorize.deposit_data.first",defaultMessage:"To easily set up payments from your bank to our.com, we are about to securely re-direct you to your bank where you will be asked to confirm the payment via {entityName}, an FCA regulated payment initiation provider for our.com.",values:{entityName:s}})),n.createElement(ee,{style:{margin:"15px 0"}},n.createElement(x.Z,{id:"modals.brokerage.authorize.deposit_data.second",defaultMessage:"{entityName} will share these details with your bank, where you will then be asked to confirm the following payment setup.",values:{entityName:s}}))),n.createElement(DropdownItem,{isPaymentInformation:!1,bodyText:n.createElement(n.Fragment,null,n.createElement(x.Z,{id:"modals.brokerage.authorize.about_access",defaultMessage:"{entityName} will then use these details with our.com solely for the purposes of buying cryptocurrencies. This consent request is a one-off, you will not receive additional requests once completed.",values:{entityName:s}}),"SafeConnect"!==s&&n.createElement(x.Z,{id:"modals.brokerage.authorize.bol.terms",defaultMessage:"View SafeConnect UAB <a>Terms and Conditions</a> for more information.",values:{a:e=>n.createElement("a",{href:"https://yapi.ly/GDNT",rel:"noopener noreferrer",target:"_blank"},e)}})),titleText:n.createElement(x.Z,{id:"modals.brokerage.authorize.about_access.title",defaultMessage:"About the Access"})}),n.createElement(d.X2,null),n.createElement(te,null,n.createElement(b.zx,{nature:"primary","data-e2e":"obApprove",type:"submit",fullwidth:!0,height:"48px",onClick:()=>{r.confirmOrder({order:l,paymentMethodId:l.paymentMethodId})}},n.createElement(x.Z,{id:"copy.approve",defaultMessage:"Approve"})),n.createElement(b.zx,{nature:"light-red","data-e2e":"obDeny",type:"button",fullwidth:!0,height:"48px",color:"red400",style:{marginTop:"16px"},onClick:()=>e.handleClose()},n.createElement(x.Z,{id:"copy.deny",defaultMessage:"Deny"}))))})),selectors_getData=e=>{const t=m.wl.wx.wd.getSBAccount(e),r=m.wl.qz.N5.getUserData(e);return(0,C.Z)(((e,t)=>({account:e,userData:t})))(t,r)};var le,ae=r("../blockchain-wallet-v4/src/exchange/currencies/index.ts"),ie=r("./src/components/Clipboard/CopyClipboardButton/index.tsx"),oe=r("./src/components/SimpleBuy/index.tsx");!function(e){e.DOMESTIC="domestic",e.INTERNATIONAL="international"}(le||(le={}));const se=f.ZP.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`,ce=(0,f.ZP)(b.xv)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`,de=(0,f.ZP)(b.xv)`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
  font-weight: 600;
  font-size: 20px;
`,me=(0,f.ZP)(d.o9)`
  display: flex;
  padding-top: 24px;
  flex-direction: column;
  height: 100%;
`,ue=f.ZP.div`
  margin-top: 16px;
`,pe=(0,f.ZP)(b.Qt)`
  margin-top: 20px;
`,ye=(0,f.ZP)(d.X2)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,ge=f.ZP.div`
  display: flex;
  flex-direction: column;
  margin-top: 41px;
`,he=f.ZP.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
`,Ee=f.ZP.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${e=>e.theme.grey800};
  margin-left: 16px;
`,xe=f.ZP.div`
  display: flex;
`,fe=f.ZP.div`
  margin-top: 40px;
  display: inline-block;
`,BankWireDetails_template_success=e=>{const[t,r]=(0,n.useState)(le.DOMESTIC),l="USD"===e.account.currency?e.account.agent.recipient:`${e.userData.firstName} ${e.userData.lastName}`;return n.createElement(se,null,n.createElement("div",null,n.createElement(d.o9,null,e.displayBack&&n.createElement(de,null,n.createElement(b.JO,{cursor:!0,name:"arrow-left",size:"20px",color:"grey600",style:{marginRight:"28px"},role:"button",onClick:()=>e.buySellActions.setStep({cryptoCurrency:e.cryptoCurrency||"BTC",fiatCurrency:e.account.currency||"USD",order:e.order,pair:e.pair,step:"PAYMENT_METHODS"})}),n.createElement("div",null,n.createElement(x.Z,{id:"modals.simplebuy.transferdetails.back",defaultMessage:"Back"}))),n.createElement(b.JO,{size:"32px",color:"USD",name:e.account.currency}),n.createElement(ue,null,n.createElement(ce,{color:"grey800",size:"24px",weight:600},"USD"===e.account.currency||e.addBank?n.createElement(x.Z,{id:"modals.simplebuy.deposit.title_add",defaultMessage:"Add a {currency} Bank",values:{currency:e.account.currency}}):n.createElement(x.Z,{id:"modals.simplebuy.deposit.title",defaultMessage:"Deposit {currency}",values:{currency:ae.Z[e.account.currency].displayName}}),!e.displayBack&&n.createElement(b.JO,{cursor:!0,name:"close",size:"20px",color:"grey600",onClick:()=>e.handleClose()})),n.createElement(ce,{color:"grey600",size:"24px",weight:600},"USD"===e.account.currency?n.createElement(x.Z,{id:"modals.simplebuy.transferdetails.wire_transfer",defaultMessage:"Wire Transfer"}):n.createElement(x.Z,{id:"modals.simplebuy.deposit.bank_transfer",defaultMessage:"Bank Transfer"})),e.addBank&&n.createElement(b.xv,{size:"16px",weight:500,color:"grey600"},n.createElement(x.Z,{id:"modals.simplebuy.transferdetails.bank_link_info1",defaultMessage:"To link your bank, send {symbol}1 or more to your {currency} Account.",values:{currency:e.account.currency,symbol:ae.Z[e.account.currency].units[e.account.currency].symbol}}))),"USD"===e.account.currency&&n.createElement(fe,null,n.createElement(b.d0,null,n.createElement(b.gq,{role:"button",selected:t===le.DOMESTIC,onClick:()=>r(le.DOMESTIC),"data-e2e":"sbDomesticButton"},n.createElement(x.Z,{id:"modals.simplebuy.transferdetails.domestic",defaultMessage:"Domestic"})),n.createElement(b.gq,{role:"button",selected:t===le.INTERNATIONAL,onClick:()=>r(le.INTERNATIONAL),"data-e2e":"sbInternationalButton"},n.createElement(x.Z,{id:"modals.simplebuy.transferdetails.international",defaultMessage:"International"}))))),"USD"===e.account.currency&&n.createElement(ye,null,n.createElement("div",null,n.createElement(d.Dx,null,n.createElement(x.Z,{id:"modals.simplebuy.transferdetails.referenceID",defaultMessage:"Reference ID (Required)"})),n.createElement(d.B4,{"data-e2e":"sbReferenceId"},e.account.address)),n.createElement(xe,null,n.createElement(ie.Z,{textToCopy:e.account.address}))),n.createElement(ye,null,n.createElement("div",null,n.createElement(d.Dx,null,n.createElement(x.Z,{id:"modals.simplebuy.transferdetails.recipient",defaultMessage:"Recipient"})),n.createElement(d.B4,{"data-e2e":"sbRecipientName"},l)),n.createElement(xe,null,n.createElement(ie.Z,{textToCopy:l}))),("USD"===e.account.currency||"EUR"===e.account.currency)&&n.createElement(ye,null,n.createElement("div",null,n.createElement(d.Dx,null,n.createElement(x.Z,{id:"modals.simplebuy.transferdetails.bankname",defaultMessage:"Bank Name"})),n.createElement(d.B4,{"data-e2e":"sbBankName"},e.account.agent.name)),n.createElement(xe,null,n.createElement(ie.Z,{textToCopy:e.account.agent.name}))),"USD"===e.account.currency&&t===le.INTERNATIONAL&&n.createElement(ye,null,n.createElement("div",null,n.createElement(d.Dx,null,n.createElement(x.Z,{id:"modals.simplebuy.transferdetails.accountType",defaultMessage:"Account Type"})),n.createElement(d.B4,{"data-e2e":"sbAccountType"},e.account.agent.accountType)),n.createElement(xe,null,n.createElement(ie.Z,{textToCopy:e.account.agent.accountType}))),"EUR"===e.account.currency&&n.createElement(ye,null,n.createElement("div",null,n.createElement(d.Dx,null,n.createElement(x.Z,{id:"modals.simplebuy.transferdetails.IBAN",defaultMessage:"IBAN"})),n.createElement(d.B4,{"data-e2e":"sbIbanAddress"},e.account.address)),n.createElement(xe,null,n.createElement(ie.Z,{textToCopy:e.account.address}))),("USD"===e.account.currency||"GBP"===e.account.currency)&&!!e.account.agent.account&&n.createElement(ye,null,n.createElement("div",null,n.createElement(d.Dx,null,n.createElement(x.Z,{id:"modals.simplebuy.transferdetails.account",defaultMessage:"Account Number"})),n.createElement(d.B4,{"data-e2e":"sbAccountNumber"},e.account.agent.account)),n.createElement(xe,null,n.createElement(ie.Z,{textToCopy:e.account.agent.account}))),"GBP"===e.account.currency&&n.createElement(ye,null,n.createElement("div",null,n.createElement(d.Dx,null,n.createElement(x.Z,{id:"modals.simplebuy.transferdetails.sortcode",defaultMessage:"Sort Code"})),n.createElement(d.B4,{"data-e2e":"sbSortCode"},e.account.agent.code)),n.createElement(xe,null,n.createElement(ie.Z,{textToCopy:e.account.agent.code}))),"EUR"===e.account.currency&&n.createElement(ye,null,n.createElement("div",null,n.createElement(d.Dx,null,n.createElement(x.Z,{id:"modals.simplebuy.transferdetails.swift",defaultMessage:"Bank Code (SWIFT / BIC)"})),n.createElement(d.B4,{"data-e2e":"sbBankCode"},e.account.agent.code)),n.createElement(xe,null,n.createElement(ie.Z,{textToCopy:e.account.agent.code}))),"USD"===e.account.currency&&n.createElement(ye,null,n.createElement("div",null,n.createElement(d.Dx,null,n.createElement(x.Z,{id:"modals.simplebuy.transferdetails.routingnumber",defaultMessage:"Routing Number"})),n.createElement(d.B4,{"data-e2e":"sbRoutingNumber"},e.account.agent.routingNumber)),n.createElement(xe,null,n.createElement(ie.Z,{textToCopy:e.account.agent.routingNumber}))),"USD"===e.account.currency&&t===le.INTERNATIONAL&&n.createElement(ye,null,n.createElement("div",null,n.createElement(d.Dx,null,n.createElement(x.Z,{id:"modals.simplebuy.transferdetails.swift.usdInternational",defaultMessage:"SWIFT / BIC Code"})),n.createElement(d.B4,{"data-e2e":"sbSwiftCode"},e.account.agent.swiftCode)),n.createElement(xe,null,n.createElement(ie.Z,{textToCopy:e.account.agent.swiftCode}))),"USD"===e.account.currency&&n.createElement(ye,null,n.createElement("div",null,n.createElement(d.Dx,null,n.createElement(x.Z,{id:"modals.simplebuy.transferdetails.bankAddress",defaultMessage:"Bank Address"})),n.createElement(d.B4,{"data-e2e":"sbBankAddress"},e.account.agent.address)),n.createElement(xe,null,n.createElement(ie.Z,{textToCopy:e.account.agent.address}))),"USD"===e.account.currency&&t===le.INTERNATIONAL&&n.createElement(ye,null,n.createElement("div",null,n.createElement(d.Dx,null,n.createElement(x.Z,{id:"modals.simplebuy.transferdetails.recipientAddress",defaultMessage:"Recipient Address"})),n.createElement(d.B4,{"data-e2e":"sbRecipientAddress"},e.account.agent.recipientAddress)),n.createElement(xe,null,n.createElement(ie.Z,{textToCopy:e.account.agent.recipientAddress})))),n.createElement(me,null,n.createElement(ge,null,n.createElement(he,null,n.createElement(oe.R2,null,n.createElement(b.JO,{size:"18px",color:"grey800",name:"bank-filled"})),n.createElement(Ee,null,n.createElement(oe.m5,null,"USD"===e.account.currency?n.createElement(x.Z,{id:"modals.simplebuy.deposit.important_transfer_only",defaultMessage:"Important Transfer Information"}):n.createElement(x.Z,{id:"modals.simplebuy.deposit.bank_transfer_only",defaultMessage:"Bank Transfers Only"})),n.createElement(oe.iD,null,"USD"===e.account.currency?n.createElement(x.Z,{id:"modals.simplebuy.deposit.important_transfer_only_description",defaultMessage:"Only send funds from a bank account in your name. If not, your deposit could be delayed or rejected. <b>Be sure to include your Reference ID.</b>"}):n.createElement(x.Z,{id:"modals.simplebuy.deposit.bank_transfer_only_description",defaultMessage:"Only send funds from a bank account in your name. If not, your deposit could be delayed or rejected."})))),n.createElement(he,null,n.createElement(oe.R2,null,n.createElement(b.JO,{size:"18px",color:"grey800",name:"pending"})),n.createElement(Ee,null,n.createElement(oe.m5,null,n.createElement(x.Z,{id:"modals.simplebuy.deposit.processing_time",defaultMessage:"Processing Time"})),n.createElement(oe.iD,null,"GBP"===e.account.currency&&n.createElement(x.Z,{id:"modals.simplebuy.deposit.processing_time.info.gbp1",defaultMessage:"Funds will be credited to your GBP Account as soon as we receive them. In the UK Faster Payments Network, this can take a couple of hours."}),"EUR"===e.account.currency&&n.createElement(x.Z,{id:"modals.simplebuy.deposit.processing_time.info.eur1",defaultMessage:"Funds will be credited to your EUR Account as soon as we receive them. SEPA transfers usually take around 1 business day to reach us."}),"USD"===e.account.currency&&n.createElement(x.Z,{id:"modals.simplebuy.deposit.processing_time.info.usd1",defaultMessage:"Funds will be credited to your USD Account as soon as we receive them. Funds are generally available within one business day."})))),"GBP"===e.account.currency&&n.createElement(pe,{inline:!0},n.createElement(b.xv,{size:"12px",weight:500,color:"grey600"},n.createElement(x.Z,{id:"modals.simplebuy.transferdetails.depositagreement",defaultMessage:"By depositing funds to this account, you agree to {ToS}, our banking partner.",values:{ToS:n.createElement(b.rU,{href:"/exchange/legal",size:"12px",weight:500,rel:"noreferrer noopener",target:"_blank"},n.createElement(x.Z,{id:"modals.simplebuy.transferdetails.agree",defaultMessage:"Terms and Conditions of Modular"}))}}))))))};class be extends n.PureComponent{componentDidMount(){this.props.fiatCurrency&&this.props.buySellActions.fetchPaymentAccount()}render(){return this.props.data.cata({Failure:e=>n.createElement(E.Z,{message:{message:e}}),Loading:()=>n.createElement(template_loading,null),NotAsked:()=>n.createElement(template_loading,null),Success:e=>n.createElement(BankWireDetails_template_success,Object.assign({},e,this.props))})}}const we=(0,l.connect)((e=>({data:selectors_getData(e)})),(e=>({buySellActions:(0,c.bindActionCreators)(m.Nw.wx.buySell,e)})))(be),BillingAddress_selectors_getData=e=>{const t=m.wl.cr.getFormValues("ccBillingAddress")(e),r=m.wl.qz.N5.getUserData(e);return(0,C.Z)((e=>({formValues:t,userData:e})))(r)};var Ce=r("./src/components/Form/SelectBoxCountry/index.tsx");const ve=(0,f.ZP)(M.jL)`
  margin-bottom: 24px;
  .bc__dropdown-indicator {
    color: ${e=>e.theme.grey600};
  }
  .bc__single-value {
    position: relative;
    top: 0;
    transform: initial;
    margin: 0;
  }
`,Ae=f.ZP.div`
  display: flex;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  padding: ${e=>e.isItem?"0px 6px":"16px 12px"};
`,Se=f.ZP.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  color: ${e=>e.theme.grey800};
  .bc__single-value {
    position: relative;
    top: 0;
    transform: initial;
    margin: 0;
  }
  input {
    height: 0;
  }
`,Ze=f.ZP.div`
  min-width: 32px;
  height: 32px;
  font-size: 40px;
  overflow: hidden;
  border-radius: 16px;
  background-color: ${e=>e.theme.blue000};
  display: flex;
  align-items: center;
  justify-content: center;
`;class ke extends n.PureComponent{constructor(){super(...arguments),this.renderElements=()=>[{group:"",items:Ce.hW}],this.renderDisplay=(e,t)=>{var r;if(!e.value)return;if(!this.props.formValues)return;const l=!t;return n.createElement(Ae,{isItem:l},n.createElement(Ze,null,(null===(r=Ce.hW.find((t=>t.value===e.value)))||void 0===r?void 0:r.emoji)||""),n.createElement(Se,null,t||e.text,n.createElement(b.xv,{size:"14px",color:"grey600",weight:500},e.value)))}}render(){return n.createElement(S.Z,{component:ve,elements:this.renderElements(),name:"country",searchEnabled:!1,templateDisplay:this.renderDisplay,templateItem:this.renderDisplay})}}const Me=ke,Te=(0,f.ZP)(d.o9)`
  border-bottom: 1px solid ${e=>e.theme.grey000};
  padding-bottom: 0px;
`,_e=(0,f.ZP)(b.xv)`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`,Pe=(0,Z.Z)({destroyOnUnmount:!1,form:"ccBillingAddress"})((e=>{if(!e.formValues)return null;const t=e.formValues.country,r="US"===t,l=(0,B.z9)(t)||(0,B.VK)(t);return n.createElement(n.Fragment,null,n.createElement(A.Z,{onSubmit:e.handleSubmit},n.createElement(Te,null,n.createElement(_e,{color:"grey800",size:"20px",weight:600},n.createElement(b.JO,{cursor:!0,name:"arrow-left",size:"20px",color:"grey600",style:{marginRight:"24px"},role:"button",onClick:()=>e.buySellActions.setStep({step:"ADD_CARD"})}),n.createElement(x.Z,{id:"modals.simplebuy.billing_address",defaultMessage:"Billing Address"})),n.createElement(Me,Object.assign({},e))),n.createElement(d.o9,null,n.createElement(M.cw,{margin:"24px"},n.createElement(M.lX,null,r?n.createElement(x.Z,{id:"identityverification.personal.address_line1required",defaultMessage:"Address Line 1 *"}):n.createElement(x.Z,{id:"identityverification.personal.streetline1required",defaultMessage:"Street Line 1 *"})),n.createElement(S.Z,{name:"line1",validate:B.C1,component:M.zC})),n.createElement(M.cw,{margin:"24px"},n.createElement(M.lX,null,r?n.createElement(x.Z,{id:"identityverification.personal.address_line2",defaultMessage:"Address Line 2"}):n.createElement(x.Z,{id:"identityverification.personal.streetline2",defaultMessage:"Street Line 2"})),n.createElement(S.Z,{name:"line2",component:M.zC})),n.createElement(M.cw,{margin:"24px"},n.createElement(M.lX,null,n.createElement(x.Z,{id:"identityverification.personal.cityrequired",defaultMessage:"City *"})),n.createElement(S.Z,{name:"city",validate:B.C1,component:M.zC})),n.createElement(M.cw,{inline:!0},n.createElement(M.xJ,null,n.createElement(M.lX,null,r?n.createElement(x.Z,{id:"identityverification.personal.staterequired",defaultMessage:"State *"}):n.createElement(x.Z,{id:"identityverification.personal.region",defaultMessage:"Region"})),r?n.createElement(S.Z,{name:"state",component:M.T3,validate:[B.C1],normalize:e=>e.name}):n.createElement(S.Z,{name:"state",component:M.zC})),l&&n.createElement(M.xJ,null,n.createElement(M.lX,{htmlFor:"postCode"},(0,B.z9)(t)?n.createElement(x.Z,{id:"identityverification.personal.zip",defaultMessage:"Zip Code *"}):n.createElement(x.Z,{id:"identityverification.personal.postcoderequired",defaultMessage:"Postcode *"})),n.createElement(S.Z,{name:"postCode",validate:B.j0,component:M.zC}))),n.createElement(b.zx,{fullwidth:!0,type:"submit","data-e2e":"udpateBillingAddr",nature:"primary",height:"48px",size:"16px"},n.createElement(x.Z,{id:"modals.simplebuy.save_my_card",defaultMessage:"Save My Card"})))))}));class Ne extends n.PureComponent{constructor(){super(...arguments),this.handleSubmit=()=>{this.props.buySellActions.setStep({step:"ADD_CARD"})}}componentDidMount(){this.props.buySellActions.initializeBillingAddress()}render(){return this.props.data.cata({Failure:()=>n.createElement(E.Z,{onClick:()=>this.props.buySellActions.setStep({step:"ADD_CARD"})}),Loading:()=>n.createElement(template_loading,null),NotAsked:()=>n.createElement(template_loading,null),Success:e=>n.createElement(Pe,Object.assign({},e,this.props,{onSubmit:this.handleSubmit}))})}}const Be=(0,l.connect)((e=>({data:BillingAddress_selectors_getData(e)})),(e=>({buySellActions:(0,c.bindActionCreators)(m.Nw.wx.buySell,e)})))(Ne);var De=r("./node_modules/bignumber.js/bignumber.js"),Oe=r.n(De),ze=r("../blockchain-wallet-v4/src/types/index.ts");const CheckoutConfirm_selectors_getData=e=>{const t=m.wl.wx.zT.getBankTransferAccounts(e),r=m.wl.wx.wd.getSBQuote(e),n=m.wl.wx.wd.getSBBalances(e),l=m.wl.qz.N5.getUserData(e),a=m.wl.wx.lW.getWithdrawLockCheckRule(e),i=m.wl.wx.wd.getSddEligible(e),o=m.wl.wx.wd.getUserSddEligibleTier(e),s=m.wl.wx.wd.isUserSddVerified(e),c=m.wl.wx.wd.getSBCards(e);return(0,C.Z)(((e,t,r,n,l,a,i,o,s)=>({bankAccounts:e,cards:s,isSddFlow:a.eligible||3===i,isUserSddVerified:o,quote:t,sbBalances:r,userData:n,withdrawLockCheck:l})))(t,r,n,l,a,i,o,s,c)};var Fe=r("../../node_modules/moment/moment.js"),Re=r.n(Fe),Ie=r("./src/components/Flyout/model.tsx"),Le=r("./src/modals/SimpleBuy/model.tsx");const Ue=(0,f.ZP)(M.l0)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,je=(0,f.ZP)(b.xv)`
  display: flex;
  align-items: center;
`,Ye=(0,f.ZP)(d.o9)`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  height: 100%;
  border-top: 1px solid ${e=>e.theme.grey000};
`,$e=f.ZP.div`
  display: flex;
  align-items: center;
`,Ve=(0,f.ZP)(b.xv)`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
  a {
    color: ${e=>e.theme.blue600};
    cursor: pointer;
    text-decoration: none;
    display: contents;
  }
`,Ke=f.ZP.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  > div {
    display: flex;
    flex-direction: row;
  }
`,qe=(0,f.ZP)(d.X2)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,Je=f.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,We=f.ZP.div`
  display: flex;
  flex-direction: row;
`,Ge=f.ZP.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Xe=f.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin-left: 4px;
`,He=f.ZP.div`
  text-align: right;
`,Qe=(0,f.ZP)(b.xv)`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>e.theme.grey900};
  display: flex;
  flex-direction: column;
  justify-content: center;
`,et=(0,f.ZP)(b.xv)`
  font-weight: 500;
  color: ${e=>e.theme.grey400};
  text-align: right;
  font-size: 14px;
`,tt=f.ZP.div`
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  background-color: ${e=>e.theme.grey000};

  animation: fadeIn 0.3s ease-in-out;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`,rt=f.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
`,nt=(0,Z.Z)({form:"sbCheckoutConfirm"})((e=>{var t,r,l,a,i;const[o,s]=(0,n.useState)(!1),[c,m]=(0,n.useState)(!1),[y,g]=(0,n.useState)(!1),h=(0,u.getOrderType)(e.order),E=(0,u.getBaseAmount)(e.order),f=(0,u.getBaseCurrency)(e.order),w=null===(t=window.coins[f])||void 0===t?void 0:t.coinfig,C=(null==w?void 0:w.displaySymbol)||f,v=(0,u.getCounterAmount)(e.order),A=(0,u.getCounterCurrency)(e.order),S=(0,u.getPaymentMethodId)(e.order),Z=e.order.paymentType===ze.t8.PAYMENT_CARD||e.order.paymentType===ze.t8.USER_CARD,[M]=(0,$.Z)((e=>"ACTIVE"===e.state&&e.id===S),(0,K.Z)([])((0,q.Z)(["bankAccounts"],e))),T=(0,V.Z)("partner",M),_=e.withdrawLockCheck&&e.withdrawLockCheck.lockTime>0||!1,P=_?Re().duration(null===(r=e.withdrawLockCheck)||void 0===r?void 0:r.lockTime,"seconds").days():0,N=Z&&e.cards.filter((e=>e.id===S))[0]||null,B=Z&&N,D=(0,J.LE)({unit:A,value:v});(0,n.useEffect)((()=>{Z||s(!0)}),[Z]);const handleCancel=()=>{e.buySellActions.cancelOrder(e.order)},O=T===p.RB.YAPILY?n.createElement(x.Z,{id:"copy.next",defaultMessage:"Next"}):`${h===ze.mr.BUY?"Buy":"Sell"} ${E} ${C}`;return n.createElement(Ue,{onSubmit:e.handleSubmit},n.createElement(d.o9,null,n.createElement(je,{color:"grey800",size:"20px",weight:600},n.createElement(b.JO,{cursor:!0,"data-e2e":"sbBackToEnterAmount",name:"arrow-back",size:"20px",color:"grey600",style:{marginRight:"8px"},role:"button",onClick:handleCancel}),n.createElement(x.Z,{id:"modals.simplebuy.checkoutconfirm",defaultMessage:"Checkout"})),n.createElement(Ke,{"data-e2e":"sbTotalAmount"},n.createElement("div",null,n.createElement(b.xv,{size:"32px",weight:600,color:"grey800"},`${E} ${C}`)),n.createElement("div",null,n.createElement(b.xv,{size:"20px",weight:600,color:"grey600",style:{marginTop:"8px"}},D)))),n.createElement(qe,null,n.createElement(Ge,null,n.createElement(Je,null,n.createElement(We,null,n.createElement(Qe,null,n.createElement(x.Z,{id:"modals.simplebuy.confirm.coin_price",defaultMessage:"{coin} Price",values:{coin:C}})),n.createElement(Xe,null,n.createElement(b.JO,{name:"question-in-circle-filled",size:"16px",color:c?"blue600":"grey300",onClick:()=>m(!c)}))),n.createElement(Qe,{"data-e2e":"sbExchangeRate"},(0,Le.nA)(e.order,e.quote.rate))),c&&n.createElement(tt,null,n.createElement(b.xv,{size:"12px",weight:500,color:"grey600"},n.createElement(b.Qt,{inline:!0},n.createElement(b.xv,{size:"14px"},n.createElement(x.Z,{id:"modals.simplebuy.confirm.coin_tooltip",defaultMessage:"our.com provides the best market price we receive and applies a spread."})),n.createElement(b.rU,{href:"/support/hc/en-us/articles/360061672651-Wallet-Pricing",size:"14px",rel:"noopener noreferrer",target:"_blank"},n.createElement(x.Z,{id:"modals.simplebuy.summary.learn_more",defaultMessage:"Learn more"}))))))),(null===(l=e.formValues)||void 0===l?void 0:l.period)&&n.createElement(qe,null,n.createElement(Qe,null,n.createElement(x.Z,{id:"copy.frequency",defaultMessage:"Frequency"})),n.createElement(Qe,null,n.createElement(He,null,(0,Ie.SI)((null===(a=e.formValues)||void 0===a?void 0:a.period)||p.U3.ONE_TIME),n.createElement(et,null,(0,Ie.R0)((null===(i=e.formValues)||void 0===i?void 0:i.period)||p.U3.ONE_TIME))))),n.createElement(qe,null,n.createElement(Qe,null,n.createElement(x.Z,{id:"modals.simplebuy.confirm.payment",defaultMessage:"Payment Method"})),n.createElement(Qe,null,n.createElement(He,null,(0,Le.wr)(e.order,M),n.createElement(et,null,(0,Le.Ts)(e.order,M,N))))),B&&n.createElement(qe,null,n.createElement(Ge,null,n.createElement(Je,null,n.createElement(We,null,n.createElement(Qe,null,n.createElement(x.Z,{id:"copy.card_fee",defaultMessage:"Card Fee"})),n.createElement(Xe,null,n.createElement(b.JO,{name:"question-in-circle-filled",size:"16px",color:y?"blue600":"grey300",onClick:()=>g(!y)}))),n.createElement(Qe,{"data-e2e":"sbFee"},e.order.fee?(0,Le.nA)(e.order,e.order.fee):`${(0,Le.nA)(e.order,e.quote.fee)} ${e.order.inputCurrency}`)),y&&n.createElement(tt,null,n.createElement(b.xv,{size:"12px",weight:500,color:"grey600"},n.createElement(b.Qt,{inline:!0},n.createElement(b.xv,{size:"14px"},n.createElement(x.Z,{id:"modals.simplebuy.paying_with_card",defaultMessage:"our.com requires a fee when paying with a card."})),n.createElement(b.rU,{href:"/support/hc/en-us/articles/360061672651",size:"14px",rel:"noopener noreferrer",target:"_blank"},n.createElement(x.Z,{id:"modals.simplebuy.summary.learn_more",defaultMessage:"Learn more"}))))))),n.createElement(qe,null,n.createElement(Qe,null,n.createElement(x.Z,{id:"copy.total",defaultMessage:"Total"})),n.createElement(Qe,null,n.createElement(He,null,n.createElement("div",{"data-e2e":"sbFiatBuyAmount"},D),n.createElement(et,null,`${E} ${C}`)))),n.createElement(Ye,null,(0,Le.TL)(_,P,e.order.paymentType),Z&&n.createElement($e,null,n.createElement(Ve,{size:"12px",weight:500,color:"grey900","data-e2e":"sbAcceptTerms"},n.createElement(b.MV,{name:"sbAcceptTerms",checked:o,"data-e2e":"sbAcceptTermsCheckbox",onChange:()=>s((e=>!e))},n.createElement(x.Z,{id:"modals.simplebuy.confirm.activity_accept_terms1",defaultMessage:"I agree to Blockchain’s <a>Terms of Service</a> and its return, refund and cancellation policy.",values:{a:e=>n.createElement("a",{href:"/root/legal/terms",rel:"noopener noreferrer",target:"_blank"},e)}})))),n.createElement(rt,null,n.createElement(b.zx,{fullwidth:!0,nature:"primary","data-e2e":"confirmSBOrder",size:"16px",height:"48px",type:"submit",style:{marginTop:"28px"},disabled:e.submitting||!o},e.submitting?n.createElement(b.JA,{height:"16px",width:"16px",color:"white"}):O),n.createElement(b.zx,{"data-e2e":"sbCancelCheckout",disabled:e.submitting,size:"16px",height:"48px",nature:"light-red",onClick:handleCancel,style:{marginTop:"16px"}},n.createElement(x.Z,{id:"buttons.cancel",defaultMessage:"Cancel"})),e.error&&n.createElement(k.XG,{style:{marginTop:"16px"},"data-e2e":"checkoutError"},n.createElement(b.JO,{name:"alert-filled",color:"red600",style:{marginRight:"4px"}}),"Error: ",e.error))))}));class lt extends n.PureComponent{constructor(){super(...arguments),this.handleSubmit=()=>{var e,t;const{bankAccounts:r,cards:n,isSddFlow:l,isUserSddVerified:a,sbBalances:i,userData:o}=this.props.data.getOrElse({isSddFlow:!1,userData:{tiers:{current:0}}}),s=null===(e=null==o?void 0:o.tiers)||void 0===e?void 0:e.current,c=this.props.order.inputCurrency;if(l&&this.props.order.paymentType===ze.t8.PAYMENT_CARD){if(a){if(n&&n.length>0){const e=n[0];return this.props.buySellActions.confirmOrder({order:this.props.order,paymentMethodId:e.id})}return this.props.buySellActions.setStep({step:"ADD_CARD"})}return this.props.buySellActions.setStep({step:"KYC_REQUIRED"})}if(s<2)return this.props.buySellActions.setStep({step:"KYC_REQUIRED"});switch(this.props.order.paymentType){case ze.t8.FUNDS:const e=(null===(t=i[c])||void 0===t?void 0:t.available)||"0";return new(Oe())(e).isGreaterThanOrEqualTo(this.props.order.inputQuantity)?this.props.buySellActions.confirmFundsOrder():this.props.buySellActions.setStep({displayBack:!1,fiatCurrency:c,step:"BANK_WIRE_DETAILS"});case ze.t8.PAYMENT_CARD:return this.props.order.paymentMethodId?this.props.buySellActions.confirmOrder({order:this.props.order,paymentMethodId:this.props.order.paymentMethodId}):this.props.buySellActions.setStep({step:"ADD_CARD"});case ze.t8.BANK_TRANSFER:const[n]=(0,$.Z)((e=>"ACTIVE"===e.state&&e.id===this.props.order.paymentMethodId),(0,K.Z)([])(r));return(0,V.Z)("partner",n)===p.RB.YAPILY?this.props.buySellActions.setStep({order:this.props.order,step:"AUTHORIZE_PAYMENT"}):this.props.order.paymentMethodId?this.props.buySellActions.confirmOrder({order:this.props.order,paymentMethodId:this.props.order.paymentMethodId}):(this.props.brokerageActions.showModal({modalType:"ADD_BANK_YODLEE_MODAL",origin:p.$p.ADD_BANK_BUY}),this.props.brokerageActions.setAddBankStep({addBankStep:p.Hb.ADD_BANK_HANDLER}));default:return this.props.buySellActions.setStep({fiatCurrency:(0,u.getFiatFromPair)(this.props.order.pair),step:"CRYPTO_SELECTION"})}}}componentDidMount(){this.props.buySellActions.fetchQuote({amount:this.props.order.inputQuantity,orderType:(0,u.getOrderType)(this.props.order),pair:this.props.order.pair}),this.props.sendActions.getLockRule(),h.Nt.Success.is(this.props.data)||(this.props.buySellActions.fetchSDDEligibility(),this.props.buySellActions.fetchSDDVerified(),this.props.buySellActions.fetchCards(!1),this.props.brokerageActions.fetchBankTransferAccounts())}render(){return this.props.data.cata({Failure:e=>n.createElement(E.Z,{message:{message:e}}),Loading:()=>n.createElement(template_loading,null),NotAsked:()=>n.createElement(template_loading,null),Success:e=>n.createElement(nt,Object.assign({},this.props,e,{onSubmit:this.handleSubmit}))})}}const at=(0,l.connect)((e=>({data:CheckoutConfirm_selectors_getData(e),formValues:m.wl.cr.getFormValues("simpleBuyCheckout")(e)})),(e=>({brokerageActions:(0,c.bindActionCreators)(m.Nw.wx.brokerage,e),buySellActions:(0,c.bindActionCreators)(m.Nw.wx.buySell,e),identityVerificationActions:(0,c.bindActionCreators)(m.Nw.wx.identityVerification,e),sendActions:(0,c.bindActionCreators)(m.Nw.wx.send,e)})))(lt);var it=r("./src/data/coins/model/swap.ts"),ot=r("./src/data/coins/selectors/index.ts");const CryptoSelection_selectors_getData=e=>{const t=m.wl.wx.wd.getSBFiatEligible(e),r=m.wl.cr.getFormValues("simpleBuyCheckout")(e),n=m.wl.vE.Xd.getEmailVerified(e),l=m.wl.wx.wd.getSBOrders(e),a=m.wl.wx.wd.getSddEligible(e),i=m.wl.wx.wd.getOrderType(e),o=m.wl.wx.wd.getSBPairs(e),s=m.wl.qz.N5.getUserData(e),c=m.wl.vE.Xd.getCurrency(e),d=m.wl.wx.LF.getCoins(),u=(0,ot.n6)(e,Object.assign({coins:d},it.Z));return(0,C.Z)(((e,t,n,l,a,o,s)=>({accounts:u,eligibility:e,emailVerified:t,orderType:r?r.orderType:i||"BUY",pairs:n,sbOrders:a,sddEligible:o,userData:l,walletCurrency:s})))(t,n,o,s,l,a,c)};var st=r("../../node_modules/ramda/es/any.js"),ct=r("../../node_modules/ramda/es/values.js"),dt=r("./src/data/components/swap/selectors.ts");const CryptoItem_selectors_getData=(e,t)=>{const r=m.wl.vE.aT.misc.getRatesSelector(t.coin,e),n=m.wl.wx.wd.getFiatCurrency(e),l=m.wl.wx.wd.getSBBalances(e);return(0,C.Z)((e=>({balances:l,fiatCurrency:n,rates:e})))(r)};var mt=r("./src/services/styles/index.ts"),ut=r("./src/utils/helpers.ts");const PriceMovement_selectors_getData=(e,t)=>{const{coin:r}=t,n=m.wl.vE.aT.misc.getPriceChange(r,ze.tn.DAY,e);return(0,C.Z)((e=>({price24Hr:e})))(n)},pt=f.ZP.span`
  margin-left: 4px;
`,yt=f.ZP.span`
  font-weight: 600;
  color: ${e=>e.theme[e.color]};
`,getColorFromMovement=e=>{switch(e){case"down":return"red600";case"up":return"green600";default:return"grey600"}};class gt extends n.PureComponent{componentDidMount(){if(!h.Nt.Success.is(this.props.data)){const{coin:e}=this.props;this.props.miscActions.fetchPriceChange(e,this.props.fiat||"EUR",ze.tn.DAY)}}render(){return n.createElement(pt,null,this.props.data.cata({Failure:()=>null,Loading:()=>n.createElement(b.co,{height:"12px",width:"40px"}),NotAsked:()=>null,Success:e=>n.createElement(yt,{color:getColorFromMovement(e.price24Hr.overallChange.movement)},(e=>{switch(e){case"down":return"-";case"up":return"+";default:return""}})(e.price24Hr.overallChange.movement),e.price24Hr.overallChange.percentChange,"%")}))}}const ht=(0,l.connect)(((e,t)=>({data:PriceMovement_selectors_getData(e,t)})),(e=>({miscActions:(0,c.bindActionCreators)(m.Nw.vE.aT.misc,e)})))(gt),Et=(0,f.ZP)(oe.Uq)`
  ${mt.BC.tablet`
    padding: 16px 20px;
  `}
`,xt=f.ZP.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  width: 100%;
  cursor: ${e=>e.canClick?"pointer":"initial"};
  font-size: 16px;
  font-weight: 500;
  color: ${e=>e.theme.grey800};
`,ft=(0,f.ZP)(d.Dx)`
  margin-top: 4px;
  display: flex;
  align-items: center;
  font-weight: 600;
  color: ${e=>e.theme.grey800};
`,bt=f.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 24px;
  z-index: 100;
  background: white;
`,wt=(0,f.ZP)(b.JO)`
  background: rgba(${e=>(0,ut.oo)(e.theme[e.background]||"#000000")}, 0.15);
  border-radius: 50%;

  & :not(::before) {
    opacity: 0.15;
  }

  &::before {
    color: ${e=>e.theme[e.background]};
  }
`,Ct=f.ZP.div`
  z-index: 10;
`,CryptoItem_template_success=e=>{const{coin:t}=e,{fiat:r}=e,{coinfig:l}=window.coins[t],a=l.name;return n.createElement(Et,{"data-e2e":`sb${e.coin}-${e.fiat}CurrencySelector`,role:"button",onClick:e.onClick},e.onClick&&n.createElement(b.JO,{size:"32px",color:t,name:t}),n.createElement(xt,{canClick:!!e.onClick},n.createElement(d.B4,{style:{marginTop:"0px"}},a),n.createElement(ft,null,"BUY"===e.orderType&&n.createElement(n.Fragment,null,(0,J.LE)({unit:r,value:e.rates.price}),n.createElement(ht,Object.assign({},e))))),e.onClick&&n.createElement(b.JO,{name:"chevron-right",size:"32px",color:"grey400"}),!e.onClick&&n.createElement(n.Fragment,null,n.createElement(b.JO,{size:"32px",color:t,name:t,style:{left:"5px",position:"relative"}}),n.createElement(Ct,null,n.createElement(bt,null,n.createElement(wt,{name:"BUY"===e.orderType?"plus":"minus",size:"24px",background:t})))))};class vt extends n.PureComponent{render(){return this.props.data.cata({Failure:()=>null,Loading:()=>null,NotAsked:()=>null,Success:e=>n.createElement(CryptoItem_template_success,Object.assign({},this.props,e))})}}const At=(0,l.connect)(((e,t)=>({data:CryptoItem_selectors_getData(e,t)})),(e=>({miscActions:(0,c.bindActionCreators)(m.Nw.vE.aT.misc,e)})))(vt),St=f.ZP.div`
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  min-width: 32px;
  background-color: ${e=>e.theme.blue000};
  border-radius: 40px;
`,Zt=f.ZP.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,kt=(0,l.connect)(null,(e=>({buySellActions:(0,c.bindActionCreators)(m.Nw.wx.buySell,e)})))((e=>n.createElement(n.Fragment,null,n.createElement(d.o9,null,n.createElement(b.xv,{size:"20px",color:"grey800",weight:600,style:{marginBottom:"8px"}},n.createElement(x.Z,{id:"copy.crypto_selection_empty.needtoown",defaultMessage:"You'll need to own crypto first..."})),n.createElement(b.xv,{size:"14px",color:"grey600",weight:500,style:{marginBottom:"30px"}},n.createElement(x.Z,{id:"copy.crypto_selection_empty.getstarted",defaultMessage:"You're all set to Sell, but we don't see any crypto in this Wallet. Below are 3 ways to get started."})),n.createElement(Zt,{style:{marginBottom:"28px"}},n.createElement(St,null,n.createElement(b.JO,{size:"16px",color:"blue600",name:"credit-card-sb"})),n.createElement("div",null,n.createElement(b.xv,{color:"grey900",size:"14px",weight:600,lineHeight:"150%"},n.createElement(x.Z,{id:"copy.crypto_selection_empty.buycardtitle",defaultMessage:"Buy with a Card"})),n.createElement(b.xv,{size:"12px",lineHeight:"150%",weight:500},n.createElement(x.Z,{id:"copy.crypto_selection_empty.buycard",defaultMessage:"Link any Visa or Mastercard and buy crypto. You will need to verify your identity to link a card."})))),n.createElement(Zt,{style:{marginBottom:"28px"}},n.createElement(St,null,n.createElement(b.JO,{name:"bank-filled",color:"blue600",size:"20px"})),n.createElement("div",null,n.createElement(b.xv,{color:"grey900",size:"14px",weight:600,lineHeight:"150%"},n.createElement(x.Z,{id:"copy.crypto_selection_empty.buybanktitle",defaultMessage:"Buy with a Bank Deposit"})),n.createElement(b.xv,{size:"12px",lineHeight:"150%",weight:500},n.createElement(x.Z,{id:"copy.crypto_selection_empty.buybank",defaultMessage:"Send cash directly from your bank. Once received, we'll use that balance to buy the crypto of your choice"})))),n.createElement(Zt,{style:{marginBottom:"62px"}},n.createElement(St,null,n.createElement(b.JO,{name:"send",color:"blue600",size:"20px"})),n.createElement("div",null,n.createElement(b.xv,{color:"grey900",size:"14px",weight:600,lineHeight:"150%"},n.createElement(x.Z,{id:"copy.crypto_selection_empty.receivetitle",defaultMessage:"Receive from Another Wallet"})),n.createElement(b.xv,{size:"12px",lineHeight:"150%",weight:500},n.createElement(x.Z,{id:"copy.crypto_selection_empty.receive",defaultMessage:"Are you holding crypto on a different wallet? Does a friend want to send you some Bitcoin? Copy and paste or share your unique wallet addresses QR codes."})))),n.createElement(b.zx,{nature:"primary","data-e2e":"sellEmptyBuyCta",height:"48px",onClick:()=>e.buySellActions.showModal({cryptoCurrency:"BTC",orderType:"BUY",origin:"SellEmpty"}),fullwidth:!0},n.createElement(x.Z,{id:"modals.wallet.welcome.sb.button",defaultMessage:"Buy Crypto Now"})))))),{SB_CRYPTO_SELECTION:Mt}=m.o4.wx.wd,Tt=f.ZP.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`,_t=f.ZP.div`
  display: flex;
  justify-content: flex-end;
`,Pt=f.ZP.div`
  margin-top: 36px;
  display: inline-block;
`,Nt=f.ZP.div`
  border-top: 1px solid ${e=>e.theme.grey000};
`,Bt=f.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,Dt=(0,f.ZP)(b.xv)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`,Ot=(0,f.ZP)(b.xv)`
  margin-top: 0;
`,zt=f.ZP.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  span {
    margin-left: 8px;
  }
`,Ft=(0,Z.Z)({destroyOnUnmount:!1,form:Mt})((e=>{const[t,r]=(0,n.useState)(e.orderType),l=e.isFirstLogin&&!e.sddTransactionFinished,a=(0,st.Z)((e=>e))((0,ct.Z)((0,v.Z)((e=>(0,st.Z)((e=>0!==e.balance&&"0"!==e.balance))(e)),e.accounts)));return n.createElement(Tt,null,n.createElement(A.Z,{onSubmit:()=>{}},n.createElement(d.o9,null,n.createElement(_t,null,n.createElement(b.JO,{cursor:!0,"data-e2e":"sbCloseModalIcon",name:"close",size:"20px",color:"grey600",role:"button",onClick:e.handleClose})),l&&n.createElement(zt,null,n.createElement(b.Ee,{name:"intro-hand",width:"28px",height:"28px"}),n.createElement(b.xv,{color:"grey600",size:"20px",weight:600},n.createElement(x.Z,{id:"modals.wallet.tour.wallet.tour",defaultMessage:"Welcome to Blockchain!"}))),n.createElement(Bt,null,!l&&n.createElement(b.JO,{cursor:!0,name:"cart-filled",size:"32px",color:"blue600"})),!l&&n.createElement(n.Fragment,null,n.createElement(Dt,{color:"grey800",size:"20px",weight:600},n.createElement(x.Z,{id:"modals.simplebuy.cryptoselect",defaultMessage:"Buy Crypto. Sell for Cash."})),n.createElement(Ot,{color:"grey600",weight:500},n.createElement(x.Z,{id:"modals.simplebuy.select_crypto",defaultMessage:"Easily buy and sell Crypto straight from your Wallet."}))),l&&n.createElement(n.Fragment,null,n.createElement(Dt,{color:"grey800",size:"20px",weight:600},n.createElement(x.Z,{id:"modals.simplebuy.buy_crypto_now",defaultMessage:"Buy Crypto Now"})),n.createElement(Ot,{color:"grey600",weight:500},n.createElement(x.Z,{id:"modals.simplebuy.select_and_verify",defaultMessage:"Select the crypto you want to buy, verify your identity and buy crypto."}))),!l&&n.createElement(Pt,null,n.createElement(b.d0,null,n.createElement(b.gq,{role:"button",selected:"BUY"===t,onClick:()=>{r("BUY"),e.buySellActions.setBuyCrypto("CurrencyList")},"data-e2e":"sbBuyButton"},n.createElement(x.Z,{id:"buttons.buy_crypto",defaultMessage:"Buy Crypto"})),n.createElement(b.gq,{role:"button",selected:t===ze.mr.SELL,onClick:()=>{r(ze.mr.SELL),e.buySellActions.setSellCrypto("CurrencyList")},"data-e2e":"sbSellButton"},n.createElement(x.Z,{id:"buttons.sell_crypto",defaultMessage:"Sell Crypto"}))))),n.createElement(Nt,null,t===ze.mr.SELL?a?(0,dt.getCoins)().map((r=>e.accounts[r].map((r=>"0"!==r.balance&&0!==r.balance&&n.createElement(M.Xv,{key:r.index,account:r,coin:r.coin,isAccountSelected:!1,isSwap:!1,onClick:()=>(r=>{const n=e.pairs.find((e=>(0,u.getCoinFromPair)(e.pair)===r.coin));n&&(e.buySellActions.setStep({cryptoCurrency:(0,u.getCoinFromPair)(n.pair),fiatCurrency:(0,u.getFiatFromPair)(n.pair),orderType:t,pair:n,step:"ENTER_AMOUNT",swapAccount:r}),e.formActions.change("simpleBuyCheckout","amount",""))})(r),showLowFeeBadges:!0,walletCurrency:e.walletCurrency}))))):n.createElement(kt,{handleClose:e.handleClose}):e.pairs.map((r=>n.createElement(At,{key:`${(0,u.getFiatFromPair)(r.pair)}-${(0,u.getCoinFromPair)(r.pair)}`,orderType:t,fiat:(0,u.getFiatFromPair)(r.pair),coin:(0,u.getCoinFromPair)(r.pair),onClick:()=>(r=>{var n,l,a;const i=null===(l=null===(n=e.userData)||void 0===n?void 0:n.tiers)||void 0===l?void 0:l.current;return e.emailVerified||2===i||1===i?3===i&&(null===(a=e.sbOrders)||void 0===a?void 0:a.length)>0?e.buySellActions.setStep({step:"UPGRADE_TO_GOLD"}):e.buySellActions.setStep({cryptoCurrency:(0,u.getCoinFromPair)(r.pair),fiatCurrency:(0,u.getFiatFromPair)(r.pair),orderType:t,pair:r,step:"ENTER_AMOUNT"}):e.buySellActions.setStep({cryptoCurrency:(0,u.getCoinFromPair)(r.pair),fiatCurrency:(0,u.getFiatFromPair)(r.pair),orderType:t,pair:r,step:"VERIFY_EMAIL"})})(r)}))))))})),Rt=(0,f.ZP)(d.o9)`
  padding-bottom: 0px;
  position: relative;
  height: 100%;
`,It=(0,f.ZP)(b.JO)`
  position: absolute;
  padding: inherit;
  left: 0px;
  top: 0px;
`,Lt=f.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`,Ut=(0,f.ZP)(b.xv)`
  margin: 56px 0 16px 0;
  text-align: center;
`,jt=(0,f.ZP)(b.xv)`
  margin-bottom: 56px;
  text-align: center;
`,template_unsupported=e=>{const{paymentAccountEligible:t}=e.eligibility;return n.createElement(Rt,null,n.createElement(It,{cursor:!0,name:"arrow-left",size:"20px",color:"grey600",role:"button",onClick:e.handleClose}),n.createElement(Lt,null,n.createElement(b.Ee,{width:"48px",height:"48px",name:"world-alert",srcset:{"world-alert2":"2x","world-alert3":"3x"}}),n.createElement(Ut,{color:"grey800",size:"20px",weight:600},n.createElement(x.Z,{id:"modals.simplebuy.unsupported-title",defaultMessage:"Buy Crypto Coming Soon for"})," ",t?e.fiatCurrency:n.createElement(x.Z,{id:"modals.simplebuy.fiataccountineligible",defaultMessage:"your region."})),n.createElement(jt,{color:"grey600",weight:500},t?n.createElement(n.Fragment,null,n.createElement(x.Z,{id:"modals.simplebuy.unsupported-subcontent",defaultMessage:"Currently we don't support buying crypto with"})," ",e.fiatCurrency,". "):n.createElement(n.Fragment,null,n.createElement(x.Z,{id:"modals.simplebuy.unsupported-subcontent-1",defaultMessage:"Well this is awkward. We don't support buying crypto yet for"})," ",n.createElement(x.Z,{id:"modals.simplebuy.fiatregion",defaultMessage:"your region"}),". "),n.createElement(x.Z,{id:"modals.simplebuy.unsupported-subcontent-2",defaultMessage:"We'll send you an update when we do."})),n.createElement(b.zx,{"data-e2e":"submitSBAmount",height:"48px",size:"16px",nature:"primary",onClick:e.handleClose,fullwidth:!0},n.createElement(x.Z,{id:"buttons.ok",defaultMessage:"OK"}))))},CryptoSelection_template_success=e=>{const t=e.pairs.length&&e.eligibility.eligible&&e.fiatCurrency,r=e.sddEligible&&e.sddEligible.eligible;return t||r?n.createElement(Ft,Object.assign({},e)):n.createElement(template_unsupported,Object.assign({},e))};class Yt extends n.PureComponent{componentDidMount(){this.props.fiatCurrency&&!h.Nt.Success.is(this.props.data)&&(this.props.buySellActions.fetchPairs({currency:this.props.fiatCurrency}),this.props.buySellActions.fetchFiatEligible(this.props.fiatCurrency),this.props.buySellActions.fetchSDDEligibility(),this.props.buySellActions.fetchOrders())}errorCallback(){this.props.buySellActions.setStep({fiatCurrency:this.props.fiatCurrency,step:"CRYPTO_SELECTION"})}render(){return this.props.data.cata({Failure:()=>n.createElement(d.ub,{action:"retry","data-e2e":"sbTryCurrencySelectionAgain",handler:this.errorCallback}),Loading:()=>n.createElement(template_loading,null),NotAsked:()=>n.createElement(template_loading,null),Success:e=>n.createElement(CryptoSelection_template_success,Object.assign({},this.props,e))})}}const $t=(0,l.connect)((e=>({data:CryptoSelection_selectors_getData(e),fiatCurrency:m.wl.wx.wd.getFiatCurrency(e)||"USD",isFirstLogin:m.wl.I8.getFirstLogin(e),sddTransactionFinished:m.wl.wx.wd.getSddTransactionFinished(e)})),(e=>({buySellActions:(0,c.bindActionCreators)(m.Nw.wx.buySell,e),formActions:(0,c.bindActionCreators)(m.Nw.cr,e)})))(Yt);var Vt=r("../../node_modules/ramda/es/equals.js");const EnterAmount_selectors=e=>{const t=m.wl.vE.Xd.getCurrency(e),r=m.wl.wx.wd.getDefaultPaymentMethod(e),n=m.wl.wx.wd.getSBFiatEligible(e),l=m.wl.wx.wd.getSBPairs(e),a=m.wl.wx.wd.getSBPaymentMethods(e),i=m.wl.wx.wd.getSwapAccount(e);return(0,C.Z)(((e,t,r,n,l)=>({defaultMethod:e,eligibility:t,pairs:r,paymentMethods:n,swapAccount:i,walletCurrency:l})))(r,n,l,a,t)};var Kt=r("../../node_modules/ramda/es/pathOr.js");const Checkout_selectors=(e,t)=>{const r=m.wl.wx.wd.getCryptoCurrency(e)||"BTC",n=m.wl.cr.getFormSyncErrors("simpleBuyCheckout")(e),l=m.wl.wx.wd.getPayment(e),a="BUY"===t.orderType?m.wl.wx.wd.getSBQuote(e):m.wl.wx.wd.getSellQuote(e),i=m.wl.vE.aT.misc.getRatesSelector(r,e),o=m.wl.wx.wd.getSBBalances(e),s=m.wl.qz.N5.getUserData(e),c=m.wl.wx.wd.getSddEligible(e),d=m.wl.wx.wd.getUserSddEligibleTier(e),u=m.wl.wx.wd.getUserLimit(e,ze.t8.PAYMENT_CARD),p=m.wl.wx.wd.getSBCards(e)||[],y=m.wl.wx.zT.getBankTransferAccounts(e).getOrElse([]),g=m.wl.wx.wd.getLimits(e),h=m.wl.wx.wd.hasFiatBalances(e),E=m.wl.vE.AW.getFeatureFlagRecurringBuys(e).getOrElse(!1);return(0,C.Z)(((e,t,r,a,i,o,s,c)=>({bankTransferAccounts:y,cards:e,formErrors:n,hasFiatBalance:h,hasPaymentAccount:h||e.length>0||y.length>0,isRecurringBuy:E,isSddFlow:o.eligible||3===c,limits:g.getOrElse(void 0),payment:l.getOrElse(void 0),quote:t,rates:r,sbBalances:a,sddEligible:o,sddLimit:s,userData:i})))(p,a,i,o,s,c,u,d)};var qt=r("./src/modals/Interest/DepositForm/model.tsx"),Jt=r("./src/components/Exchange/index.tsx"),Wt=r("./src/data/components/exchange/services.ts"),Gt=r("../../node_modules/@reduxjs/toolkit/node_modules/redux/es/redux.js");const Xt=f.ZP.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
`,Ht=(0,f.ZP)(k.sx)`
  border: 1px solid ${e=>e.theme.grey100};
`,Scheduler_template_success=({availableMethods:e,children:t,hasAvailablePeriods:r,onClick:l})=>n.createElement(Xt,null,r?n.createElement(qt.K,{onClick:l,style:{marginLeft:"0"},role:"button","data-e2e":"sbRecurringBuyScheduler"},t):n.createElement(b.G0,{id:"recurring-buy-disabled"},n.createElement(Ht,{style:{cursor:"pointer"},role:"button","data-e2e":"sbRecurringBuySchedulerDisabled"},t),n.createElement(b.u,{id:"recurring-buy-disabled"},(0,Ie.uL)(e)))),Qt=(0,l.connect)(((e,t)=>({availableMethods:m.wl.wx.Nx.availableMethods(e),hasAvailablePeriods:m.wl.wx.Nx.hasAvailablePeriods(t.method)(e),isAvailableMethod:m.wl.wx.Nx.isAvailableMethod(t.period,t.method)(e)})),(e=>({recurringBuyActions:(0,Gt.DE)(m.Nw.wx.recurringBuy,e)})))((e=>{const t=(0,l.useDispatch)(),{isAvailableMethod:r}=e;return(0,n.useEffect)((()=>{e.isAvailableMethod||t(m.Nw.cr.change("simpleBuyCheckout","period",p.U3.ONE_TIME))}),[r]),n.createElement(Scheduler_template_success,Object.assign({},e))}));var er=r("./src/modals/Swap/EnterAmount/Checkout/index.tsx");const Checkout_ActionButton=e=>{const t=e.invalid||e.submitting||!e.isAmountInBounds,r=e.isSufficientEthForErc20,l=e.isDailyLimitExceeded;switch(e.userData.kycState){case"EXPIRED":case"REJECTED":return n.createElement(b.zx,{"data-e2e":"submitSBAmount",height:"48px",size:"16px",nature:"warning",type:"submit",fullwidth:!0,disabled:!0},n.createElement(x.Z,{id:"modals.simplebuy.failed",defaultMessage:"ID Verification Failed"}));case"UNDER_REVIEW":case"PENDING":return n.createElement("div",null,n.createElement(b.zx,{"data-e2e":"submitSBAmount",height:"48px",size:"16px",nature:"primary",type:"submit",fullwidth:!0,disabled:!0},n.createElement(x.Z,{id:"modals.simplebuy.underreview",defaultMessage:"ID Verification Pending"})),n.createElement(b.rU,{size:"14px",weight:600,style:{display:"block",marginTop:"24px",textAlign:"center"},onClick:()=>e.profileActions.fetchUser()},n.createElement(x.Z,{id:"modals.simplebuy.refresh",defaultMessage:"Refresh"})));case"NONE":return n.createElement("div",null,n.createElement(b.zx,{"data-e2e":"submitSBAmount",height:"48px",size:"16px",nature:"primary",type:"submit",fullwidth:!0,disabled:t},e.submitting?n.createElement(b.JA,{height:"16px",width:"16px",color:"white"}):n.createElement(x.Z,{id:"buttons.next",defaultMessage:"Next"})),n.createElement(b.xv,{color:"grey600",weight:500,size:"14px",style:{marginTop:"24px",textAlign:"center"}},n.createElement(x.Z,{id:"modals.simplebuy.setupaccount",defaultMessage:"Next, we'll set up your account."})));case"VERIFIED":return n.createElement(b.zx,{"data-e2e":"submitSBAmount",height:"48px",size:"16px",nature:"primary",type:"submit",fullwidth:!0,disabled:t||r||l},e.submitting?n.createElement(b.JA,{height:"16px",width:"16px",color:"white"}):n.createElement(x.Z,{id:"buttons.next",defaultMessage:"Next"}));default:return n.createElement(n.Fragment,null)}},tr=f.ZP.div`
  display: flex;
  flex-direction: column-reverse;
  flex: 1;
`,rr=f.ZP.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px 40px;
  border-top: 1px solid ${e=>e.theme.grey000};
`,nr=(0,f.ZP)(b.xv)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 16px;
`,lr=f.ZP.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`,ar=(0,f.ZP)(b.xv)`
  display: inline-flex;
  font-weight: 500;
  font-size: 14px;
  margin-top: 22px;
`,Checkout_IncreaseLimits=()=>n.createElement(tr,null,n.createElement(rr,null,n.createElement(lr,null,n.createElement(oe.$s,{showBackground:!0},n.createElement(b.JO,{name:"question-in-circle-filled",size:"22px",color:"blue600"})),n.createElement(nr,{size:"16px",weight:600,color:"grey800"},n.createElement(x.Z,{id:"modals.simplebuy.checkout.larger_amount.title",defaultMessage:"Want to buy larger amounts?"}))),n.createElement(ar,{color:"grey600"},n.createElement(x.Z,{id:"modals.simplebuy.checkout.larger_amount.info",defaultMessage:"After completing this transaction, upgrade to Gold level to unlock higher transaction limits and more payment methods."})))),ir=(0,f.ZP)(b.JO)`
  transform: rotate(180deg);
  ${e=>e.disabled&&f.iv`
      cursor: not-allowed;
    `}
`,Checkout_Payment=e=>{const t=e.hasPaymentAccount?"LINKED_PAYMENT_ACCOUNTS":"PAYMENT_METHODS";return n.createElement(n.Fragment,null,n.createElement(Ie.NZ,{color:"grey900",size:"14px",weight:500},"SELL"===e.orderType&&n.createElement(x.Z,{id:"modals.simplebuy.checkout.receive",defaultMessage:"Recipient Account"})),n.createElement(b.xu,{role:"button","data-e2e":"paymentMethodSelect",onClick:()=>e.isSddFlow?null:e.buySellActions.setStep({cryptoCurrency:e.cryptoCurrency,fiatCurrency:e.fiatCurrency||"USD",pair:e.pair,step:t})},n.createElement(oe.$s,{showBackground:!e.method},(0,Ie.q7)(e.method,e.isSddFlow)),n.createElement(Ie.KW,{isMethod:!!e.method},(0,Ie.Q)(e.method,e.sbBalances,e.isSddFlow)),!e.isSddFlow&&n.createElement(Ie.$e,null,n.createElement(ir,{cursor:!0,name:"arrow-back",size:"20px",color:"grey600"}))))};var or=r("./src/modals/SimpleBuy/EnterAmount/Checkout/validation.tsx");const{LIMIT:sr,LIMIT_FACTOR:cr}=m.o4.wx.wd,dr=(0,f.ZP)(er.X2)`
  position: relative;
  padding: 24px;
  justify-content: center;
  border: 0;
`,mr=f.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`,ur=f.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`,pr=(0,f.ZP)(M.l0)`
  height: 100%;
  display: flex;
  flex-direction: column;
`,yr=(0,f.ZP)(b.xv)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,gr=f.ZP.div`
  display: flex;
  align-items: center;
`,hr=f.ZP.div`
  margin: 0 0 24px 0;
  display: flex;
  justify-content: center;
`,Er=f.ZP.div`
  height: 32px;
`,xr=f.ZP.div`
  margin: 0;
  display: flex;
  justify-content: center;
`,fr=f.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,br=f.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;
  margin-top: 16px;
`,wr=f.ZP.div`
  display: flex;
  flex-direction: column;
`,template_success_Cartridge=({children:e,error:t})=>n.createElement(qt.K,{style:{marginLeft:0},role:"button","data-e2e":t?"sbEnterAmountMaxError":"sbEnterAmountMax"},e),normalizeAmount=(e,t,r)=>Number.isNaN(Number(e))&&"."!==e&&""!==e?t:(0,B.xl)(e,r&&"FIAT"===r.fix),Cr=(0,Z.Z)({destroyOnUnmount:!1,form:"simpleBuyCheckout"})((e=>{var t,r,l,a,i,o,s,c;const{cards:m,cryptoCurrency:u,defaultMethod:y,fiatCurrency:g,method:h,orderType:E}=e,[f,w]=(0,n.useState)(1),C=(0,n.useCallback)((()=>{e.buySellActions.setStep({step:"FREQUENCY"})}),[]),v=(0,n.useCallback)((()=>{e.buySellActions.setStep({fiatCurrency:e.fiatCurrency||"USD",step:"CRYPTO_SELECTION"})}),[e.fiatCurrency]),A=e.isSddFlow&&"BUY"===e.orderType;let Z=h||y;if(A&&m&&1===m.length){const t=m[0],r=e.paymentMethods.methods.find((e=>e.type===ze.t8.PAYMENT_CARD&&"BUY"===E));Z=Object.assign(Object.assign({},t),{card:t.card,currency:t.currency,limits:r&&r.limits?r.limits:{max:"10000",min:"500"},type:ze.t8.USER_CARD})}const{fix:k}=e.preferences[e.orderType],M="FIAT"===k?B.dB:B.WQ,T="FIAT"===k?g:u,_="FIAT"===k?"FIAT":u,P=(0,or.ht)(e.pair.pair,e.quote.rate,k,null===(t=e.formValues)||void 0===t?void 0:t.amount);if(!e.formValues)return null;if(!g||!T)return n.createElement(d.ub,{action:"retry","data-e2e":"sbTryCurrencySelectionAgain",handler:v});const N=e.sddLimit||sr,D=Object.assign({},N),O=(null===(r=e.limits)||void 0===r?void 0:r.max)&&0===Number(e.limits.max),z=(0,or.xu)("max",e.sbBalances,e.orderType,e.quote,e.pair,e.payment,e.formValues,Z,e.swapAccount,e.isSddFlow,D,e.limits)[k],F=(0,or.xu)("min",e.sbBalances,e.orderType,e.quote,e.pair,e.payment,e.formValues,Z,e.swapAccount,e.isSddFlow,D,e.limits)[k],R=((e,t,r)=>!!e&&!(e<t||e>r))(Number(null===(l=e.formValues)||void 0===l?void 0:l.amount),Number(F),Number(z)),I=(null===(a=e.formValues)||void 0===a?void 0:a.amount)?((e,t,r)=>e<t?"BELOW_MIN":e>r?"ABOVE_MAX":null)(Number(null===(i=e.formValues)||void 0===i?void 0:i.amount),Number(F),Number(z)):null,L="string"==typeof e.formErrors.amount&&e.formErrors.amount||I,handleMinMaxClick=()=>{const t="BELOW_MIN"===L?"min":"max",r=(0,or.xu)(t,e.sbBalances,e.orderType,e.quote,e.pair,e.payment,e.formValues,Z,e.swapAccount,e.isSddFlow,D,e.limits)[k],n=(0,Wt.K)(_,r);"min"===t&&(e.orderType===ze.mr.SELL?e.buySellActions.handleSellMinAmountClick({amount:n,coin:_}):e.orderType===ze.mr.BUY&&e.buySellActions.handleBuyMinAmountClick({amount:n,coin:_})),"max"===t&&(e.orderType===ze.mr.SELL?e.buySellActions.handleSellMaxAmountClick({amount:n,coin:_}):e.orderType===ze.mr.BUY&&e.buySellActions.handleBuyMaxAmountClick({amount:n,coin:_}))},handleMaxClick=()=>{const t=(0,or.xu)("max",e.sbBalances,e.orderType,e.quote,e.pair,e.payment,e.formValues,Z,e.swapAccount,e.isSddFlow,D,e.limits)[k],r=(0,Wt.K)(_,t);e.orderType===ze.mr.SELL?e.buySellActions.handleSellMaxAmountClick({amount:r,coin:_}):e.orderType===ze.mr.BUY&&e.buySellActions.handleBuyMaxAmountClick({amount:r,coin:_})},U=Number(e.sddLimit.max)/cr,j=window.coins[u].coinfig.type.erc20Address,Y=e.payment&&(null===(o=e.swapAccount)||void 0===o?void 0:o.type)===p.l0.ACCOUNT&&e.orderType===ze.mr.SELL&&j&&!e.payment.isSufficientEthForErc20,getValue=e=>"FIAT"===k?(0,J.LE)({digits:M,unit:g,value:e}):(0,J.P2)({unit:{symbol:u},value:e});return n.createElement(pr,{onSubmit:e.handleSubmit},n.createElement(d.o9,{style:{borderBottom:"grey000",paddingBottom:"0px"}},n.createElement(yr,{color:"grey800",size:"20px",weight:600},n.createElement(gr,null,n.createElement(b.JO,{cursor:!0,"data-e2e":"sbBackToCryptoSelection",name:"arrow-back",size:"20px",color:"grey600",role:"button",style:{marginRight:"8px"},onClick:()=>e.buySellActions.setStep({fiatCurrency:e.walletCurrency||"USD",step:"CRYPTO_SELECTION"})}),n.createElement(Le._s,Object.assign({},e,{crypto:u||"Crypto"}))))),n.createElement(At,{fiat:e.fiatCurrency||"USD",coin:e.cryptoCurrency,orderType:e.orderType,account:e.swapAccount}),n.createElement(d.o9,{style:{display:"flex",flex:1,flexDirection:"column",justifyContent:"space-between",paddingTop:"0px"}},n.createElement(mr,null,n.createElement(dr,{id:"amount-row"},"FIAT"===k&&n.createElement(b.xv,{size:"56px",color:"textBlack",weight:500},ae.Z[g].units[g].symbol),n.createElement(S.Z,Object.assign({"data-e2e":"sbAmountInput",name:"amount",component:Jt.HK,validate:[or.Se,or.cZ],normalize:normalizeAmount,onUpdate:((e,t,r,n)=>{Number(r)>0&&w(r>1?1:r);const l=t.closest("#amount-row");(e?l.children[0]:l.children[l.children.length-1]).style.fontSize=n*f+"px"}).bind(null,"FIAT"===k),maxFontSize:"56px",placeholder:"0",fiatActive:!0},{autoFocus:!0,hideError:!0})),"CRYPTO"===k&&n.createElement(b.xv,{size:"56px",color:"textBlack",weight:500},u)),n.createElement(Er,null,e.isSddFlow&&"BUY"===e.orderType&&"BELOW_MIN"===L?n.createElement(xr,{onClick:handleMinMaxClick},n.createElement(qt.K,{role:"button","data-e2e":"sbEnterAmountMin"},n.createElement(x.Z,{id:"modals.simplebuy.checkout.belowmin",defaultMessage:"{value} Minimum {orderType}",values:{orderType:"Buy",value:getValue(F)}}))):n.createElement(fr,null,n.createElement("div",null),n.createElement(b.xv,{color:"grey600",size:"14px",weight:500,"data-e2e":"sbQuoteAmount"},(0,or.F0)(P,e.pair.pair,k)),n.createElement(b.JO,{color:"blue600",cursor:!0,name:"up-down-chevron",onClick:()=>e.buySellActions.switchFix({amount:P,fix:"CRYPTO"===e.preferences[e.orderType].fix?"FIAT":"CRYPTO",orderType:e.orderType}),role:"button",size:"24px","data-e2e":"sbSwitchIcon"})))),n.createElement(ur,null,e.isRecurringBuy&&e.formValues.period&&!e.isSddFlow&&e.orderType===ze.mr.BUY&&n.createElement(Qt,{onClick:C,period:e.formValues.period,method:Z||e.defaultMethod},(0,Ie.SI)(e.formValues.period)),(!e.isSddFlow||e.orderType===ze.mr.SELL)&&e.pair&&Number(F)<=Number(z)&&n.createElement(hr,{onClick:handleMinMaxClick},n.createElement(n.Fragment,null,"BELOW_MIN"===L?n.createElement(qt.K,{role:"button","data-e2e":"sbEnterAmountMin"},n.createElement(x.Z,{id:"modals.simplebuy.checkout.belowmin",defaultMessage:"{value} Minimum {orderType}",values:{orderType:e.orderType===ze.mr.BUY?"Buy":"Sell",value:getValue(F)}})):n.createElement(template_success_Cartridge,{error:"ABOVE_MAX"===L},n.createElement(x.Z,{id:"modals.simplebuy.checkout.maxbuysell",defaultMessage:"{orderType} Max",values:{orderType:E===ze.mr.BUY?"Buy":"Sell"}})))),!e.isSddFlow&&e.orderType===ze.mr.SELL&&e.pair&&Number(F)>Number(z)&&n.createElement(hr,null,n.createElement(qt.K,{role:"button","data-e2e":"sbEnterAmountNotEnoughFundsForSell"},n.createElement(x.Z,{id:"modals.simplebuy.checkout.not_enough_funds_for_sell",defaultMessage:"Not Enough funds for Sell"}))),e.isSddFlow&&e.orderType===ze.mr.BUY&&n.createElement(br,null,n.createElement(wr,null,n.createElement(b.xv,{weight:500,size:"14px",color:"grey600"},n.createElement(x.Z,{id:"modals.simplebuy.checkout.max_card_limit",defaultMessage:"Max Card Limit"})),n.createElement("div",null,n.createElement(b.xv,{weight:600,size:"16px",color:"grey900"},`${ae.Z[g].units[g].symbol}${U}`))),n.createElement(wr,null,n.createElement("div",{onClick:handleMaxClick,onKeyDown:handleMaxClick,role:"button",tabIndex:0},n.createElement(template_success_Cartridge,{error:"ABOVE_MAX"===L},n.createElement(x.Z,{id:"modals.simplebuy.checkout.maxbuy",defaultMessage:"Max Buy"}))))),n.createElement(Checkout_Payment,Object.assign({},e,{method:Z,isSddFlow:e.isSddFlow&&e.orderType===ze.mr.BUY})),e.error&&n.createElement(b.jL,{type:"warning",style:{marginBottom:"15px"}},(e=>{switch(Number(e)){case 45:case 46:case 47:return!0;default:return!1}})(e.error)&&(null===(c=null===(s=e.userData)||void 0===s?void 0:s.tiers)||void 0===c?void 0:c.current)<2?n.createElement("div",{onClick:()=>e.identityVerificationActions.verifyIdentity({needMoreInfo:!1,origin:"SimpleBuy",tier:2}),onKeyDown:()=>e.identityVerificationActions.verifyIdentity({needMoreInfo:!1,origin:"SimpleBuy",tier:2}),role:"button",tabIndex:0,style:{cursor:"pointer"}},n.createElement(n.Fragment,null,n.createElement(Le.gG,{code:e.error}),n.createElement("br",null),n.createElement(x.Z,{id:"copy.upgrade",defaultMessage:"Upgrade to Gold"}))):n.createElement(Le.gG,{code:e.error})),n.createElement(Checkout_ActionButton,Object.assign({},e,{isSufficientEthForErc20:Y||!1,isDailyLimitExceeded:O||!1,isAmountInBounds:R})),O&&n.createElement(hr,null,n.createElement(qt.K,{role:"button","data-e2e":"sbEnterAmountDailyLimitExceeded"},n.createElement(x.Z,{id:"modals.simplebuy.checkout.dailylimitexceeded",defaultMessage:"You've reached your daily trading limit"}))))),e.isSddFlow&&e.orderType===ze.mr.BUY&&n.createElement(Checkout_IncreaseLimits,Object.assign({},e)),Y&&n.createElement(b.jL,{type:"warning"},n.createElement(x.Z,{id:"copy.not_enough_eth1",defaultMessage:"ETH is required to send {coin}. You do not have enough ETH in your Ether Wallet to perform a transaction. Note, ETH must be held in your Ether Wallet for this transaction, not Ether Trading Account.",values:{coin:u}})))}));class vr extends n.PureComponent{constructor(){super(...arguments),this.handleSubmit=()=>{var e,t;const{formValues:r}=this.props,{hasPaymentAccount:n,isSddFlow:l,userData:c}=this.props.data.getOrElse({hasPaymentAccount:!1,isSddFlow:!1,userData:{tiers:{current:0,next:0,selected:0}}}),d=(0,a.Z)((0,i.Z)("name","simpleBuy"),this.props.goals),m=(0,o.Z)("","id",d);(0,s.Z)(m)||this.props.deleteGoal(String(m));const p=this.props.method||this.props.defaultMethod;if((null==r?void 0:r.orderType)===ze.mr.SELL)return this.props.buySellActions.setStep({sellOrderType:null===(e=this.props.swapAccount)||void 0===e?void 0:e.type,step:"PREVIEW_SELL"});if(l){const e=null===(t=null==c?void 0:c.tiers)||void 0===t?void 0:t.current;2===e||1===e?this.props.buySellActions.createOrder({paymentType:ze.t8.PAYMENT_CARD}):this.props.identityVerificationActions.verifyIdentity({checkSddEligibility:!0,needMoreInfo:!1,onCompletionCallback:()=>this.props.buySellActions.createOrder({paymentType:ze.t8.PAYMENT_CARD}),origin:"SimpleBuy",tier:2})}else if(p){if(c.tiers.current<2)this.props.buySellActions.createOrder({paymentMethodId:(0,u.getValidPaymentMethod)(p.type)});else if(r&&p)switch(p.type){case ze.t8.PAYMENT_CARD:this.props.buySellActions.setStep({step:"ADD_CARD"});break;case ze.t8.USER_CARD:this.props.buySellActions.createOrder({paymentMethodId:p.id,paymentType:ze.t8.PAYMENT_CARD});break;case ze.t8.FUNDS:this.props.buySellActions.createOrder({paymentType:ze.t8.FUNDS});break;case ze.t8.BANK_TRANSFER:this.props.buySellActions.createOrder({paymentMethodId:p.id,paymentType:ze.t8.BANK_TRANSFER});case ze.t8.BANK_ACCOUNT:}}else{const{fiatCurrency:e}=this.props,t=n?"LINKED_PAYMENT_ACCOUNTS":"PAYMENT_METHODS";this.props.buySellActions.setStep({cryptoCurrency:this.props.cryptoCurrency,fiatCurrency:e,order:this.props.order,pair:this.props.pair,step:t})}}}componentDidMount(){var e,t,r;const n=(0,a.Z)((0,i.Z)("name","simpleBuy"),this.props.goals),l=(0,Kt.Z)("",["data","amount"],n)||(null===(e=this.props.formValues)||void 0===e?void 0:e.amount)||"0",o=null===(t=this.props.formValues)||void 0===t?void 0:t.cryptoAmount,s=(null===(r=this.props.formValues)||void 0===r?void 0:r.period)||p.U3.ONE_TIME;this.errorCallback=this.errorCallback.bind(this),this.props.buySellActions.initializeCheckout({account:this.props.swapAccount,amount:l,cryptoAmount:o,fix:this.props.preferences[this.props.orderType].fix,orderType:this.props.orderType,pair:this.props.pair,pairs:this.props.pairs,period:s}),!this.props.method&&this.props.defaultMethod&&this.props.buySellActions.setMethod(this.props.defaultMethod),h.Nt.Success.is(this.props.data)||(this.props.buySellActions.fetchSDDEligibility(),this.props.buySellActions.fetchCards(!1),this.props.brokerageActions.fetchBankTransferAccounts(),this.props.recurringBuyActions.fetchPaymentInfo()),this.props.buySellActions.fetchLimits({cryptoCurrency:this.props.cryptoCurrency,currency:this.props.fiatCurrency,side:this.props.orderType||ze.mr.BUY})}componentDidUpdate(e){var t,r;const n=null===(t=e.defaultMethod)||void 0===t?void 0:t.id,l=null===(r=this.props.defaultMethod)||void 0===r?void 0:r.id;this.props.defaultMethod&&l&&n!==l&&this.props.buySellActions.defaultMethodEvent(this.props.defaultMethod)}errorCallback(){this.props.buySellActions.setStep({fiatCurrency:this.props.fiatCurrency||"USD",step:"CRYPTO_SELECTION"})}render(){return this.props.data.cata({Failure:()=>n.createElement(d.ub,{action:"retry","data-e2e":"sbTryCurrencySelectionAgain",handler:this.errorCallback}),Loading:()=>n.createElement(template_loading,null),NotAsked:()=>n.createElement(template_loading,null),Success:e=>n.createElement(Cr,Object.assign({},this.props,e,{onSubmit:this.handleSubmit}))})}}const Ar=(0,l.connect)(((e,t)=>({cryptoCurrency:m.wl.wx.wd.getCryptoCurrency(e)||"BTC",data:Checkout_selectors(e,t),fiatCurrency:m.wl.wx.wd.getFiatCurrency(e)||"USD",formValues:m.wl.cr.getFormValues("simpleBuyCheckout")(e),goals:m.wl.P7.getGoals(e),preferences:m.wl.cb.getSBCheckoutPreferences(e),sbOrders:m.wl.wx.wd.getSBOrders(e).getOrElse([])})),(e=>({brokerageActions:(0,c.bindActionCreators)(m.Nw.wx.brokerage,e),buySellActions:(0,c.bindActionCreators)(m.Nw.wx.buySell,e),deleteGoal:t=>e(m.Nw.P7.deleteGoal(t)),identityVerificationActions:(0,c.bindActionCreators)(m.Nw.wx.identityVerification,e),profileActions:(0,c.bindActionCreators)(m.Nw.qz.N5,e),recurringBuyActions:(0,c.bindActionCreators)(m.Nw.wx.recurringBuy,e)})))(vr),Sr=(0,f.ZP)(d.o9)`
  padding-bottom: 0px;
  position: relative;
  height: 100%;
`,Zr=(0,f.ZP)(b.JO)`
  position: absolute;
  padding: inherit;
  left: 0px;
  top: 0px;
`,kr=f.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`,Mr=(0,f.ZP)(b.xv)`
  margin: 56px 0 16px 0;
  text-align: center;
`,Tr=(0,f.ZP)(b.xv)`
  margin-bottom: 56px;
  text-align: center;
`,EnterAmount_template_unsupported=e=>{const{paymentAccountEligible:t}=e.eligibility;return n.createElement(Sr,null,n.createElement(Zr,{cursor:!0,name:"arrow-left",size:"20px",color:"grey600",role:"button",onClick:e.handleClose}),n.createElement(kr,null,n.createElement(b.Ee,{width:"48px",height:"48px",name:"world-alert",srcset:{"world-alert2":"2x","world-alert3":"3x"}}),n.createElement(Mr,{color:"grey800",size:"20px",weight:600},n.createElement(x.Z,{id:"modals.simplebuy.unsupported-title",defaultMessage:"Buy Crypto Coming Soon for"})," ",t?e.fiatCurrency:n.createElement(x.Z,{id:"modals.simplebuy.fiataccountineligible",defaultMessage:"your region."})),n.createElement(Tr,{color:"grey600",weight:500},t?n.createElement(n.Fragment,null,n.createElement(x.Z,{id:"modals.simplebuy.unsupported-subcontent",defaultMessage:"Currently we don't support buying crypto with"})," ",e.fiatCurrency,". "):n.createElement(n.Fragment,null,n.createElement(x.Z,{id:"modals.simplebuy.unsupported-subcontent-1",defaultMessage:"Well this is awkward. We don't support buying crypto yet for"})," ",n.createElement(x.Z,{id:"modals.simplebuy.fiatregion",defaultMessage:"your region"}),". "),n.createElement(x.Z,{id:"modals.simplebuy.unsupported-subcontent-2",defaultMessage:"We'll send you an update when we do."})),n.createElement(b.zx,{"data-e2e":"submitSBAmount",height:"48px",size:"16px",nature:"primary",onClick:e.handleClose,fullwidth:!0},n.createElement(x.Z,{id:"buttons.ok",defaultMessage:"OK"}))))},EnterAmount_template_success=e=>{const t=e.paymentMethods.methods.length&&e.paymentMethods.methods.find((t=>{var r;return"0"!==(null===(r=t.limits)||void 0===r?void 0:r.max)&&t.currency===e.fiatCurrency})),r=e.orderType===ze.mr.BUY||e.orderType===ze.mr.SELL&&e.paymentMethods.methods.filter((e=>e.type===ze.t8.FUNDS)).map((e=>e.currency)).includes(e.walletCurrency);return t&&r?n.createElement(Ar,Object.assign({},e)):n.createElement(EnterAmount_template_unsupported,Object.assign({},e))};class _r extends n.PureComponent{componentDidMount(){this.props.fiatCurrency&&!h.Nt.Success.is(this.props.data)&&(this.props.buySellActions.fetchPaymentMethods(this.props.fiatCurrency),this.props.buySellActions.fetchFiatEligible(this.props.fiatCurrency),this.props.buySellActions.fetchPairs({coin:this.props.cryptoCurrency,currency:this.props.fiatCurrency}),this.props.brokerageActions.fetchBankTransferAccounts(),this.props.buySellActions.fetchCards(!1),this.props.buySellActions.fetchSDDEligibility()),this.props.fiatCurrency&&h.Nt.Success.is(this.props.data)&&(0,Vt.Z)(this.props.data.data.paymentMethods,u.DEFAULT_SB_METHODS)&&this.props.buySellActions.fetchPaymentMethods(this.props.fiatCurrency)}errorCallback(){this.props.buySellActions.setStep({fiatCurrency:this.props.fiatCurrency||"USD",step:"CRYPTO_SELECTION"})}render(){return this.props.data.cata({Failure:()=>n.createElement(d.ub,{action:"retry","data-e2e":"sbTryCurrencySelectionAgain",handler:this.errorCallback}),Loading:()=>n.createElement(template_loading,null),NotAsked:()=>n.createElement(template_loading,null),Success:e=>n.createElement(EnterAmount_template_success,Object.assign({},e,this.props))})}}const Pr=(0,l.connect)((e=>({cryptoCurrency:m.wl.wx.wd.getCryptoCurrency(e)||"BTC",data:EnterAmount_selectors(e),fiatCurrency:m.wl.wx.wd.getFiatCurrency(e)})),(e=>({brokerageActions:(0,c.bindActionCreators)(m.Nw.wx.brokerage,e),buySellActions:(0,c.bindActionCreators)(m.Nw.wx.buySell,e),formActions:(0,c.bindActionCreators)(m.Nw.cr,e)})))(_r);var Nr=r("./src/middleware/analyticsMiddleware/utils.ts"),Br=r("../blockchain-wallet-v4/src/utils/index.ts");const Dr=(0,Br.createDeepEqualSelector)([m.wl.wx.Nx.getPaymentInfo,m.wl.wx.wd.getDefaultPaymentMethod],((e,t)=>(0,C.Z)(((e,t)=>({defaultMethod:t,paymentInfo:e})))(e,t)));class Or extends n.PureComponent{constructor(){super(...arguments),this.handleFrequencySelection=e=>{this.props.formActions.change("simpleBuyCheckout","period",e),this.props.backToEnterAmount(),this.props.recurringBuyActions.setPeriod({origin:p.sq.SIMPLE_BUY_FREQUENCY_SCREEN,period:e})}}componentDidMount(){this.props.recurringBuyActions.fetchPaymentInfo()}render(){return this.props.data.cata({Failure:()=>n.createElement(E.Z,{message:{message:"RECURRING_BUY_PERIOD_FETCH"}}),Loading:()=>n.createElement(g.gb,{text:g.Ue.LOADING}),NotAsked:()=>n.createElement(g.gb,{text:g.Ue.LOADING}),Success:e=>{var t;const r=this.props.method&&this.props.method.type||(null===(t=e.defaultMethod)||void 0===t?void 0:t.type);return r?n.createElement(d.gN,{headerAction:this.props.backToEnterAmount,headerMode:"back",method:(0,Nr.kn)(r),paymentInfo:e.paymentInfo,setPeriod:this.handleFrequencySelection}):null}})}}const zr=(0,l.connect)((e=>({data:Dr(e)})),(e=>({buySellActions:(0,c.bindActionCreators)(m.Nw.wx.buySell,e),formActions:(0,c.bindActionCreators)(m.Nw.cr,e),recurringBuyActions:(0,c.bindActionCreators)(m.Nw.wx.recurringBuy,e)})))(Or),Fr=(0,f.ZP)(b.xv)`
  margin: 16px 0 20px;
  text-align: left;
`,Rr=(0,f.ZP)(Fr)`
  color: ${e=>e.theme.grey600};
  font-size: 12px;
  margin-top: 5px;
`,Ir=(0,f.ZP)(b.xv)`
  font-weight: 600;
  font-size: 14px;
  display: flex;
  color: ${e=>e.theme.textBlack};
  width: 100%;
`,Lr=(0,f.ZP)(b.xv)`
  margin: 38px 0 46px 0;
`,Ur=f.ZP.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${e=>e.theme.grey800};
  margin-left: 16px;
  flex: 1;
  margin-top: 5px;
`,jr=f.ZP.div`
  width: 32px;
`,Yr=f.ZP.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${e=>e.theme.blue000};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: ${e=>e.theme.blue600};
`,$r=f.ZP.div`
  display: flex;
  flex-direction: row;
`,Vr=f.ZP.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`,Kr=(0,f.ZP)(b.xv)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 7px;
`,qr=f.ZP.div`
  max-width: 154px;
  margin-top: 20px;
`,Jr=(0,f.ZP)(d.o9)`
  border-top: 1px solid ${e=>e.theme.grey000};
`,Wr=(0,f.ZP)(b.xv)`
  font-weight: 600;
  font-size: 15px;
  display: flex;
  color: ${e=>e.theme.textBlack};
  width: 100%;
`,Gr=f.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`,template=e=>n.createElement(Vr,null,n.createElement(d.o9,null,n.createElement(Gr,null,n.createElement(b.JO,{cursor:!0,name:"cart",size:"32px",color:"blue600"}),n.createElement(b.JO,{cursor:!0,"data-e2e":"sbCloseModalIcon",name:"close",size:"20px",color:"grey600",role:"button",onClick:e.handleClose})),n.createElement(Kr,{color:"grey800",size:"24px",weight:600},n.createElement(qr,null,n.createElement(x.Z,{id:"modals.simplebuy.kycrequired.title",defaultMessage:"Buy Crypto"}))),n.createElement(b.xv,{color:"grey600",weight:500},n.createElement(x.Z,{id:"modals.simplebuy.kycrequired.subtitle",defaultMessage:"Verify your identity to complete your order."}))),n.createElement(Jr,null,n.createElement(b.xv,{color:"grey600",weight:500},n.createElement($r,null,n.createElement(jr,null,n.createElement(Yr,null,"1")),n.createElement(Ur,null,n.createElement(Wr,null,n.createElement(x.Z,{id:"modals.confirm.title.verify_identity",defaultMessage:"Verify Your Identity"})),n.createElement(Rr,null,n.createElement(x.Z,{id:"modals.simplebuy.kycrequired.verify_identity_description",defaultMessage:"To prevent identity theft or fraud, we’ll need a make sure it’s really you by uploading an ID."})))),n.createElement($r,null,n.createElement(jr,null,n.createElement(Yr,null,"2")),n.createElement(Ur,null,n.createElement(Wr,null,n.createElement(x.Z,{id:"buttons.buy_crypto",defaultMessage:"Buy Crypto"})),n.createElement(Rr,null,n.createElement(x.Z,{id:"modals.simplebuy.kycrequired.buy_crypto_description",defaultMessage:"Use your Bank, Debit or Credit card to fund any crypto purchase."})))),n.createElement($r,null,n.createElement(jr,null,n.createElement(Yr,null,"3")),n.createElement(Ur,null,n.createElement(Wr,null,n.createElement(x.Z,{id:"modals.simplebuy.kycrequired.swap_at_anytime",defaultMessage:"Swap at Anytime"})),n.createElement(Rr,null,n.createElement(x.Z,{id:"modals.simplebuy.kycrequired.swap_at_anytime_description",defaultMessage:"Instantly exchange your crypto for another without leaving your wallet."}))))),n.createElement(b.zx,{fullwidth:!0,size:"16px",height:"48px",nature:"primary","data-e2e":"handleVerified",onClick:()=>{e.identityVerificationActions.verifyIdentity({needMoreInfo:!1,origin:"SimpleBuy",tier:2}),e.order&&e.buySellActions.setStep({order:e.order,step:"CHECKOUT_CONFIRM"})},style:{marginTop:"16px"},type:"button"},n.createElement(x.Z,{id:"modals.confirm.confirm.verify_identity",defaultMessage:"Verify My Identity"}))));class Xr extends n.PureComponent{render(){return n.createElement(template,Object.assign({},this.props))}}const Qr=(0,l.connect)((e=>({order:m.wl.wx.wd.getSBOrder(e)})),(e=>({buySellActions:(0,c.bindActionCreators)(m.Nw.wx.buySell,e),identityVerificationActions:(0,c.bindActionCreators)(m.Nw.wx.identityVerification,e)})))(Xr),LinkedPaymentAccounts_selectors_getData=e=>{const t=m.wl.wx.wd.getSBBalances(e),r=m.wl.wx.zT.getBankTransferAccounts(e),n=m.wl.wx.wd.getSBCards(e),l=m.wl.wx.wd.getSBPaymentMethods(e),a=m.wl.vE.Xd.getCurrency(e);return(0,C.Z)(((e,t,r,n,l)=>({balances:e,bankTransferAccounts:t,cards:r,paymentMethods:n,walletCurrency:l})))(t,r,n,l,a)};var en=r("./src/components/Brokerage/index.tsx"),tn=r("./src/services/images/index.ts");const rn=(0,f.ZP)(d.Dx)`
  text-transform: capitalize;
  color: ${e=>e.theme.grey600};
  font-weight: 500;
  font-size: 14px;
`,nn=(0,f.ZP)(d.B4)`
  color: ${e=>e.theme.grey900};
  font-weight: 600;
  font-size: 16px;
`,Accounts_Bank=({icon:e,onClick:t,text:r,value:l})=>{var a,i,o;return n.createElement(oe.Uq,{"data-e2e":`sb${l.type.toLowerCase()}Banks`,role:"button",onClick:t},n.createElement(oe.R2,null,e),n.createElement(oe.EG,null,n.createElement(nn,{asTitle:!0},r),n.createElement(rn,{asValue:!0},`${(null===(i=null===(a=l.details)||void 0===a?void 0:a.bankAccountType)||void 0===i?void 0:i.toLowerCase())||""} account ${(null===(o=l.details)||void 0===o?void 0:o.accountNumber)||""}`)))},ln=(0,f.ZP)(d.B4)`
  text-transform: capitalize;
`,an=(0,f.ZP)(d.Dx)`
  color: ${e=>e.theme.grey600};
  font-size: 14px;
  font-weight: 500;
`,Accounts_Card=({icon:e,onClick:t,text:r,value:l})=>n.createElement(oe.Uq,{"data-e2e":`sb${l.type.toLowerCase()}Cards`,role:"button",onClick:t},n.createElement(oe.R2,null,e),n.createElement(oe.EG,null,n.createElement(ln,{asTitle:!0},r.toLowerCase()),n.createElement(an,{asValue:!0},l.card?n.createElement(x.Z,{id:"modals.simplebuy.card_ending_in",defaultMessage:"Card Ending in {lastFour}",values:{lastFour:l.card.number}}):n.createElement(x.Z,{id:"modals.simplebuy.paymentcard",defaultMessage:"Credit or Debit Card"}))));var on=r("./src/components/Display/FiatDisplay/index.tsx");const sn=f.ZP.div`
  text-align: right;
`,cn=(0,f.ZP)(on.Z)`
  justify-content: flex-end;
`,Accounts_Fund=({balances:e,icon:t,onClick:r,value:l,walletCurrency:a})=>n.createElement(oe.Uq,{"data-e2e":`sb${l.type.toLowerCase()}Fund`,role:"button",onClick:r},n.createElement(oe.R2,null,t),n.createElement(oe.EG,null,n.createElement(d.B4,{asTitle:!0},ae.Z[l.currency].displayName),n.createElement(d.Dx,{asValue:!0},l.currency)),n.createElement(sn,null,n.createElement(d.B4,{asTitle:!0},(0,J.LE)({unit:l.currency,value:(0,Wt.b)("FIAT",e.available)})),l.currency!==a&&n.createElement(cn,{coin:l.currency,size:"14px",weight:500,color:"grey600",style:{alignSelf:"flex-end",marginTop:"4px"}},(0,Wt.b)("FIAT",e.available)))),dn=f.ZP.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`,mn=(0,f.ZP)(b.xv)`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
`,un=f.ZP.div`
  border-top: 1px solid ${e=>e.theme.grey000};
`,pn=(0,f.ZP)(d.o9)`
  text-align: center;
`,yn=f.ZP.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${e=>e.theme.blue000};
  display: flex;
  align-items: center;
  justify-content: center;
`;class gn extends n.PureComponent{constructor(){super(...arguments),this.getType=e=>{switch(e.type){case ze.t8.BANK_TRANSFER:case ze.t8.LINK_BANK:return n.createElement(x.Z,{id:"modals.simplebuy.banklink",defaultMessage:"Link a Bank"});case ze.t8.BANK_ACCOUNT:return n.createElement(x.Z,{id:"modals.simplebuy.bankwire",defaultMessage:"Wire Transfer"});case ze.t8.PAYMENT_CARD:return n.createElement(x.Z,{id:"modals.simplebuy.paymentcard",defaultMessage:"Credit or Debit Card"});case ze.t8.USER_CARD:return e&&e.card?e.card.label?e.card.label:e.card.type:n.createElement(x.Z,{id:"modals.simplebuy.paymentcard",defaultMessage:"Credit or Debit Card"});case ze.t8.FUNDS:default:return""}},this.handleSubmit=e=>{this.props.buySellActions.handleMethodChange({isFlow:!1,method:e})},this.addNewPaymentMethod=()=>{this.props.fiatCurrency&&this.props.buySellActions.setStep({cryptoCurrency:(0,u.getCoinFromPair)(this.props.pair.pair),fiatCurrency:this.props.fiatCurrency,order:this.props.order,pair:this.props.pair,step:"PAYMENT_METHODS"})},this.getLinkedBankIcon=e=>n.createElement(b.Ee,{name:(0,tn.t)(e),height:"48px"}),this.getIcon=e=>{switch(e.type){case ze.t8.BANK_TRANSFER:case ze.t8.LINK_BANK:return n.createElement(b.Ee,{name:"bank",height:"48px"});case ze.t8.BANK_ACCOUNT:return n.createElement(yn,null,n.createElement(b.JO,{size:"18px",color:"blue600",name:"arrow-down"}));case ze.t8.PAYMENT_CARD:return n.createElement(yn,null,n.createElement(b.JO,{size:"18px",color:"blue600",name:"credit-card-sb"}));case ze.t8.USER_CARD:const{card:t}=e;if(!t)return n.createElement(n.Fragment,null);const r=_.QU.find((e=>e.type===t.type));return n.createElement("img",{alt:"Credit Card Type",height:"18px",width:"auto",src:r?r.logo:_.US});case ze.t8.FUNDS:return n.createElement(b.JO,{size:"32px",color:"USD",name:e.currency});default:return n.createElement(b.Ee,{name:"blank-card"})}},this.renderBankText=e=>e.details?e.details.bankName?e.details.bankName:e.details.accountNumber:n.createElement(x.Z,{id:"copy.bank_account",defaultMessage:"Bank Account"}),this.renderCardText=e=>e.card?e.card.label?e.card.label:e.card.type:"Credit or Debit Card"}render(){const{orderType:e}=this.props,t=this.props.bankTransferAccounts.filter((t=>"ACTIVE"===t.state&&e===ze.mr.BUY)),r=this.props.cards.filter((t=>"ACTIVE"===t.state&&e===ze.mr.BUY)),l=this.props.paymentMethods.methods.map((e=>({text:this.getType(e),value:e}))),a=l.find((t=>t.value.type===ze.t8.BANK_TRANSFER&&e===ze.mr.BUY)),i=l.filter((t=>{var r;return t.value.type===ze.t8.FUNDS&&t.value.currency in ze.E2&&(e===ze.mr.SELL||Number(null===(r=this.props.balances[t.value.currency])||void 0===r?void 0:r.available)>0)})),o=l.find((e=>e.value.type===ze.t8.PAYMENT_CARD)),s=r.map((e=>({text:e.card?e.card.label?e.card.label:e.card.type:"Credit or Debit Card",value:Object.assign(Object.assign({},e),{card:e.card,currency:e.currency,limits:{max:(null==o?void 0:o.value.limits.max)||"50000",min:(null==o?void 0:o.value.limits.min)||"10000"},type:ze.t8.USER_CARD})}))),c=t.map((e=>({text:e.details?e.details.accountName?e.details.accountName:e.details.accountNumber:n.createElement(x.Z,{id:"copy.bank_account",defaultMessage:"Bank Account"}),value:Object.assign(Object.assign({},e),{currency:e.currency,limits:a&&a.value&&a.value.limits||{max:"200000",min:"100"},type:ze.t8.BANK_TRANSFER})}))),m=i.length||s.length||c.length;return n.createElement(dn,null,n.createElement(A.Z,null,n.createElement(d.o9,null,n.createElement(mn,{color:"grey800",size:"20px",weight:600},n.createElement(b.JO,{cursor:!0,name:"arrow-back",size:"20px",color:"grey600",style:{marginRight:"28px"},role:"button",onClick:()=>this.props.buySellActions.setStep({cryptoCurrency:(0,u.getCoinFromPair)(this.props.pair.pair),fiatCurrency:(0,u.getFiatFromPair)(this.props.pair.pair),orderType:this.props.orderType,pair:this.props.pair,step:"ENTER_AMOUNT"})}),n.createElement("div",null,n.createElement(x.Z,{id:"modals.simplebuy.paymentmethods",defaultMessage:"Payment Methods"})))),n.createElement(un,null,!m&&n.createElement(pn,null,n.createElement(b.Ee,{height:"60px",name:"world-alert",srcset:{"world-alert2":"2x","world-alert3":"3x"}}),n.createElement(b.xv,{size:"16px",weight:500,style:{marginTop:"8px"}},n.createElement(x.Z,{id:"copy.no_payment_methods",defaultMessage:"No payment methods available."}))),i&&i.map(((e,t)=>n.createElement(Accounts_Fund,{key:`${e.text}-${t}`,value:e.value,icon:this.getIcon(e.value),onClick:()=>this.handleSubmit(e.value),balances:this.props.balances[e.value.currency]||{available:"0",pending:"0",withdrawable:"0"},walletCurrency:this.props.walletCurrency}))),s&&s.map(((e,t)=>n.createElement(Accounts_Card,{key:t,value:e.value,text:this.renderCardText(e.value),icon:this.getIcon(e.value),onClick:()=>this.handleSubmit(e.value)}))),c&&c.map(((e,t)=>{var r,l;return n.createElement(Accounts_Bank,{key:t,value:e.value,text:this.renderBankText(e.value),icon:e.value.details?this.getLinkedBankIcon(null===(l=null===(r=e.value)||void 0===r?void 0:r.details)||void 0===l?void 0:l.bankName):this.getIcon(e.value),onClick:()=>this.handleSubmit(e.value)})})),e===ze.mr.BUY&&n.createElement(en.A,{"data-e2e":"addNewPaymentMethod",onClick:this.addNewPaymentMethod},n.createElement(x.Z,{id:"buttons.add_new",defaultMessage:"+ Add New"})))))}}const hn=(0,Z.Z)({destroyOnUnmount:!1,form:"sbPaymentMethods"})(gn),LinkedPaymentAccounts_template_success=e=>n.createElement(hn,Object.assign({},e));class En extends n.PureComponent{componentDidMount(){h.Nt.Success.is(this.props.data)||(this.props.buySellActions.fetchCards(!1),this.props.brokerageActions.fetchBankTransferAccounts())}errorCallback(){this.props.buySellActions.setStep({cryptoCurrency:"BTC",fiatCurrency:this.props.fiatCurrency||"USD",pair:this.props.pair,step:"ENTER_AMOUNT"})}render(){return this.props.data.cata({Failure:()=>n.createElement(d.ub,{action:"retry","data-e2e":"sbTryCurrencySelectionAgain",handler:this.errorCallback}),Loading:()=>n.createElement(template_loading,null),NotAsked:()=>n.createElement(template_loading,null),Success:e=>n.createElement(LinkedPaymentAccounts_template_success,Object.assign({},e,this.props))})}}const xn=(0,l.connect)((e=>({data:LinkedPaymentAccounts_selectors_getData(e),fiatCurrency:m.wl.wx.wd.getFiatCurrency(e)})),(e=>({brokerageActions:(0,c.bindActionCreators)(m.Nw.wx.brokerage,e),buySellActions:(0,c.bindActionCreators)(m.Nw.wx.buySell,e),formActions:(0,c.bindActionCreators)(m.Nw.cr,e)})))(En),OpenBankingConnect_selectors=e=>{const t=m.wl.wx.zT.getBankCredentials(e);return(0,C.Z)((e=>({bankCredentials:e})))(t)},fn=f.ZP.div`
  padding: 0 40px;
`,OpenBankingConnect_template_success=e=>{var t,r,l,a,i,o,s,c;const d=null===(r=null===(t=e.account)||void 0===t?void 0:t.attributes)||void 0===r?void 0:r.media,m=d&&d.length&&d[0].source||"";return n.createElement(g.zK,null,n.createElement(g.YX,{handleClose:e.handleClose},n.createElement(x.Z,{id:"copy.confirm_with_your_bank",defaultMessage:"Confirm with your bank"})),n.createElement(g.Oi,null,n.createElement(g.NA,{logo:m,qrCode:null===(a=null===(l=e.order)||void 0===l?void 0:l.attributes)||void 0===a?void 0:a.qrcodeUrl},n.createElement(x.Z,{id:"modals.brokerage.confirm_via_mobile",defaultMessage:"Confirm via mobile"})),n.createElement(g.Hr,null),n.createElement(g.$0,null,n.createElement(g.dC,{authUrl:null===(o=null===(i=e.order)||void 0===i?void 0:i.attributes)||void 0===o?void 0:o.authorisationUrl},n.createElement(x.Z,{id:"modals.brokerage.confirm_via_desktop",defaultMessage:"Confirm via desktop"})),n.createElement(g.mZ,{qrCode:null===(c=null===(s=e.order)||void 0===s?void 0:s.attributes)||void 0===c?void 0:c.qrcodeUrl}))),n.createElement(fn,null,n.createElement(b.zx,{"data-e2e":"sbSDDCancelPending",size:"16px",height:"48px",nature:"light-red",onClick:()=>{e.buySellActions.cancelOrder(e.order)},style:{marginBottom:"16px"},fullwidth:!0},n.createElement(x.Z,{id:"buttons.cancel_order",defaultMessage:"Cancel Order"}))))},bn=(0,l.connect)((e=>({account:m.wl.wx.zT.getAccount(e),data:OpenBankingConnect_selectors(e),walletCurrency:m.wl.vE.Xd.getCurrency(e).getOrElse("USD")})),(e=>({brokerageActions:(0,c.bindActionCreators)(m.Nw.wx.brokerage,e),buySellActions:(0,c.bindActionCreators)(m.Nw.wx.buySell,e)})))((e=>{const fetchBank=()=>{e.walletCurrency&&!h.Nt.Success.is(e.data)&&e.brokerageActions.fetchBankLinkCredentials(e.walletCurrency)};return(0,n.useEffect)((()=>{const{id:t}=e.order;t&&e.buySellActions.pollOrder(t)}),[e.order]),(0,n.useEffect)(fetchBank,[e.walletCurrency]),e.data.cata({Failure:()=>n.createElement(E.Z,{onClick:fetchBank}),Loading:()=>n.createElement(g.gb,{text:g.Ue.LOADING}),NotAsked:()=>n.createElement(g.gb,{text:g.Ue.LOADING}),Success:t=>n.createElement(OpenBankingConnect_template_success,Object.assign({},e,t))})})),InterestBanner_selectors_getData=e=>{const t=m.wl.wx.bb.getInterestRate(e),r=m.wl.wx.bb.getAfterTransaction(e);return(0,C.Z)(((e,t)=>({afterTransaction:t,interestRate:e})))(t,r)};var wn=r("./src/components/Layout/index.ts");const InterestBanner_template_success=({afterTransaction:e,interestActions:t,interestRate:r})=>{const{amount:l,currency:a}=e,i=window.coins[a].coinfig.name;return n.createElement(wn.l0,null,n.createElement("div",null,n.createElement(b.xv,{size:"16px",color:"grey900",weight:600,style:{marginTop:"16px"}},n.createElement(x.Z,{id:"modals.simplebuy.interest_banner.title",defaultMessage:"Earn {interestRate}% on this {displayName} Purchase",values:{displayName:i,interestRate:r[a]}})),n.createElement(b.xv,{size:"14px",color:"grey600",weight:500,style:{lineHeight:1.5,marginTop:"4px",maxWidth:"286px"}},n.createElement(x.Z,{id:"modals.simplebuy.interest_banner.description",defaultMessage:"Send your {amount}{currency} to your {displayName} Rewards Account.",values:{amount:l,currency:a,displayName:i}}))),n.createElement(b.zx,{style:{marginTop:"16px",maxWidth:"144px"},nature:"light","data-e2e":"earnInterestNow",onClick:()=>{t.showInterestModal({coin:a,step:"DEPOSIT"})}},n.createElement(x.Z,{id:"modals.simplebuy.interest_banner.earn_now",defaultMessage:"Earn Now ->"})))},Cn=(0,l.connect)((e=>({data:InterestBanner_selectors_getData(e)})),(e=>({interestActions:(0,c.bindActionCreators)(m.Nw.wx.interest,e)})))((e=>((0,n.useEffect)((()=>{e.interestActions.fetchInterestRate()}),[]),n.createElement(n.Fragment,null,e.data.cata({Failure:()=>null,Loading:()=>null,NotAsked:()=>null,Success:t=>n.createElement(InterestBanner_template_success,Object.assign({},e,t))}))))),OrderSummary_selectors_getData=e=>{const t=m.wl.wx.wd.getSBCards(e),r=m.wl.qz.N5.getUserData(e),n=m.wl.wx.lW.getWithdrawLockCheckRule(e),l=m.wl.wx.bb.getAfterTransaction(e),a=m.wl.wx.Nx.getRegisteredList(e);return(0,C.Z)(((e,t,r,n,l)=>({afterTransaction:n,cards:e,lockTime:(null==r?void 0:r.lockTime)||0,recurringBuyList:l,userData:t})))(t,r,n,l,a)},vn=f.ZP.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`,An=f.ZP.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`,Sn=f.ZP.div`
  display: flex;
  position: relative;
`,Zn=f.ZP.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  padding: 0 40px;
  flex: 1;
  justify-content: center;
`,kn=f.ZP.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  min-height: 250px;
  width: 100%;
`,Mn=f.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 28px;
  z-index: 100;
  position: absolute;
  right: -5px;
  background: ${e=>e.theme[e.color]};
`,Tn=f.ZP.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${e=>e.theme[e.color]};
`,_n=(0,f.ZP)(b.xv)`
  margin: 32px 0 24px 0;
  width: 100%;
`,Pn=f.ZP.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  a {
    color: ${e=>e.theme.blue600};
    text-decoration: none;
    margin-left: 2px;
  }
`,template_sdd_success=e=>{var t,r;const l=(0,u.getBaseAmount)(e.order),a=(0,u.getBaseCurrency)(e.order),i=Re().duration(e.lockTime,"seconds").days(),o="PENDING_DEPOSIT"===e.order.state&&"WAITING_FOR_3DS_RESPONSE"===(null===(r=null===(t=e.order.attributes)||void 0===t?void 0:t.everypay)||void 0===r?void 0:r.paymentState);return n.createElement(An,null,n.createElement(d.o9,null,n.createElement(vn,null,n.createElement(b.JO,{cursor:!0,"data-e2e":"sbCloseModalIcon",name:"close",size:"20px",color:"grey600",role:"button",onClick:e.handleClose}))),n.createElement(Zn,null,n.createElement(kn,null,o?n.createElement(Sn,null,n.createElement(Tn,{color:"orange100"},n.createElement(b.JO,{color:"orange600",name:"pending",size:"30px"}))):n.createElement(Sn,null,n.createElement(b.JO,{color:e.order.outputCurrency,name:e.order.outputCurrency,size:"64px"}),n.createElement(Mn,{color:"white"},n.createElement(b.JO,{name:"checkmark-circle-filled",size:"24px",color:"green400"}))),n.createElement(_n,null,n.createElement(b.xv,{"data-e2e":"sbSddPurchasing",size:"20px",weight:600,color:"grey800"},o?n.createElement(x.Z,{id:"modals.simplebuy.summary.pending_buy",defaultMessage:"Pending Buy"}):n.createElement(x.Z,{id:"modals.simplebuy.summary.purchased",defaultMessage:"{amount} {coin} Purchased",values:{amount:l,coin:a}})),n.createElement(b.xv,{size:"14px",weight:500,color:"grey600",style:{marginTop:"8px"}},o?n.createElement(x.Z,{id:"modals.simplebuy.transferdetails.available1",defaultMessage:"Your {coin} is now available in your Trading Account.",values:{coin:a}}):n.createElement(x.Z,{id:"modals.simplebuy.summary.pending_buy_description",defaultMessage:"Once you finalize your credit card information, your buy order will complete."}))),n.createElement(Pn,null,"PENDING_CONFIRMATION"===e.order.state||"PENDING_DEPOSIT"===e.order.state&&!e.order.paymentMethodId&&n.createElement(b.zx,{"data-e2e":"sbSDDCancelPending",size:"16px",height:"48px",nature:"light-red",onClick:()=>{e.buySellActions.cancelOrder(e.order)},style:{marginBottom:"16px"}},n.createElement(x.Z,{id:"modals.simplebuy.summary.cancelbuy",defaultMessage:"Cancel Buy"})),o&&n.createElement(b.zx,{"data-e2e":"sbSDDRetryCard",size:"16px",height:"48px",nature:"primary",onClick:()=>e.buySellActions.setStep({order:e.order,step:"3DS_HANDLER"}),style:{marginBottom:"16px"}},n.createElement(x.Z,{id:"modals.simplebuy.summary.complete_card_payment",defaultMessage:"Complete Card Payment"})),!o&&n.createElement(b.zx,{"data-e2e":"sbSDDOverviewOkButton",size:"16px",height:"48px",nature:"primary",onClick:()=>{e.buySellActions.setStep({step:"UPGRADE_TO_GOLD"}),e.buySellActions.updateSddTransactionFinished()},style:{marginBottom:"32px"}},n.createElement(x.Z,{id:"buttons.ok",defaultMessage:"OK"})),!o&&n.createElement(b.xv,{color:"grey600",size:"12px",weight:500},n.createElement("span",null,0===i||1===i?n.createElement(x.Z,{id:"modals.simplebuy.summary.disclaimer",defaultMessage:"You will not be able to Send or Withdraw these funds from your Wallet for the next 1 day."}):n.createElement(x.Z,{id:"modals.simplebuy.summary.disclaimer_plural",defaultMessage:"You will not be able to Send or Withdraw these funds from your Wallet for the next {days} days.",values:{days:i}}),n.createElement("a",{href:"/support/hc/en-us/articles/360048200392-Why-can-t-I-withdraw-my-crypto-",rel:"noopener noreferrer",target:"_blank"},n.createElement(x.Z,{id:"copy.learn_more",defaultMessage:"Learn more"})),"."))))))},{getSymbol:Nn}=h.ei;class Bn extends n.PureComponent{constructor(){super(...arguments),this.handleRefresh=()=>{this.props.buySellActions.fetchCards(!1)},this.handleOkButton=()=>{var e;this.props.hasAvailablePeriods&&this.props.isRecurringBuy&&this.props.orders.length<=1&&(null===(e=this.props.formValues)||void 0===e?void 0:e.period)===p.U3.ONE_TIME&&this.props.hasQuote?(this.props.recurringBuyActions.showModal({origin:p.sq.SIMPLE_BUY_ORDER_SUMMARY}),this.props.recurringBuyActions.setStep({origin:p.sq.BUY_CONFIRMATION,step:p.HX.GET_STARTED})):this.props.handleClose()},this.handleCompleteButton=()=>{this.props.buySellActions.setStep({order:this.props.order,step:"3DS_HANDLER"})}}componentDidMount(){var e,t;h.Nt.Success.is(this.props.data)||(this.props.buySellActions.fetchCards(!1),this.props.sendActions.getLockRule(),this.props.recurringBuyActions.fetchRegisteredList(),this.props.recurringBuyActions.fetchPaymentInfo()),this.props.buySellActions.fetchOrders(),"PENDING_DEPOSIT"===this.props.order.state&&"WAITING_FOR_3DS_RESPONSE"===(null===(t=null===(e=this.props.order.attributes)||void 0===e?void 0:e.everypay)||void 0===t?void 0:t.paymentState)&&this.props.buySellActions.setStep({order:this.props.order,step:"3DS_HANDLER"}),this.props.interestActions.fetchShowInterestCardAfterTransaction({})}render(){const{order:e}=this.props,{state:t}=e;return this.props.data.cata({Failure:()=>n.createElement(E.Z,{onClick:this.handleRefresh}),Loading:()=>n.createElement(template_loading,null),NotAsked:()=>n.createElement(template_loading,null),Success:r=>{var l,a,i,o;const s=Nn((0,u.getCounterCurrency)(e)),[c]=r.recurringBuyList.filter((t=>t.id===e.recurringBuyId)),m=c&&(0,Ie.B_)(c.period,c.nextPayment);return"FAILED"!==t&&"CANCELED"!==t&&e.paymentType?2!==(null===(a=null===(l=r.userData)||void 0===l?void 0:l.tiers)||void 0===a?void 0:a.current)?n.createElement(template_sdd_success,Object.assign({},r,this.props)):n.createElement(d.He,{baseAmount:(0,u.getBaseAmount)(e),baseCurrency:(0,u.getBaseCurrency)(e),counterAmount:`${s}${(0,u.getCounterAmount)(e)}`,currencySymbol:s,handleClose:this.props.handleClose,handleCompleteButton:this.handleCompleteButton,handleOkButton:this.handleOkButton,lockTime:r.lockTime,orderState:t,orderType:(0,u.getOrderType)(e),outputCurrency:e.outputCurrency,paymentState:(null===(o=null===(i=e.attributes)||void 0===i?void 0:i.everypay)||void 0===o?void 0:o.paymentState)||null,paymentType:e.paymentType,frequencyText:m},(0,u.getOrderType)(e)===ze.mr.BUY&&(e.paymentType===ze.t8.PAYMENT_CARD||e.paymentType===ze.t8.USER_CARD||e.paymentType===ze.t8.BANK_TRANSFER||e.paymentType===ze.t8.FUNDS),r.afterTransaction.show&&n.createElement(Cn,{handleClose:this.props.handleClose})):n.createElement(E.Z,{onClick:this.handleRefresh})}})}}const Dn=(0,l.connect)(((e,t)=>({data:OrderSummary_selectors_getData(e),formValues:m.wl.cr.getFormValues("simpleBuyCheckout")(e),hasAvailablePeriods:m.wl.wx.Nx.hasAvailablePeriods(t.method)(e),hasQuote:m.wl.wx.wd.hasQuote(e),isGoldVerified:(0,Vt.Z)(m.wl.qz.N5.getCurrentTier(e),2),isRecurringBuy:m.wl.vE.AW.getFeatureFlagRecurringBuys(e).getOrElse(!1),orders:m.wl.wx.wd.getSBOrders(e).getOrElse([])})),(e=>({buySellActions:(0,c.bindActionCreators)(m.Nw.wx.buySell,e),interestActions:(0,c.bindActionCreators)(m.Nw.wx.interest,e),recurringBuyActions:(0,c.bindActionCreators)(m.Nw.wx.recurringBuy,e),sendActions:(0,c.bindActionCreators)(m.Nw.wx.send,e)})))(Bn),PaymentMethods_selectors=e=>{const t=m.wl.wx.wd.getSBBalances(e),r=m.wl.wx.zT.getBankTransferAccounts(e),n=m.wl.wx.wd.getSBCards(e),l=m.wl.wx.wd.getSBFiatEligible(e),a=m.wl.wx.wd.getSBPairs(e),i=m.wl.wx.wd.getSBPaymentMethods(e),o=m.wl.vE.Xd.getInvitations(e).getOrElse({openBanking:!1}),s=m.wl.vE.Xd.getCurrency(e);return(0,C.Z)(((e,t,r,n,l,a,i)=>({balances:e,bankTransferAccounts:t,cards:r,eligibility:n,pairs:l,paymentMethods:!o.openBanking&&Object.assign(Object.assign({},a),{methods:a.methods.filter((e=>e.type===ze.t8.BANK_ACCOUNT||e.type===ze.t8.PAYMENT_CARD||"USD"===e.currency))})||a,walletCurrency:i})))(t,r,n,l,a,i,s)};var On=r("./src/modals/SimpleBuy/PaymentMethods/Methods/BankWire/index.tsx");const zn=(0,f.ZP)(oe.m5)`
  margin-bottom: 2px;
`,Fn=(0,f.ZP)(oe.R2)`
  min-height: 75px;
`,Methods_LinkBank=({icon:e,onClick:t,value:r})=>n.createElement(oe.Uq,{"data-e2e":`sb${r.type.toLowerCase()}LinkBank`,role:"button",onClick:t},n.createElement(Fn,null,e),n.createElement(oe.VY,null,n.createElement(zn,null,n.createElement(x.Z,{id:"modals.simplebuy.linkbank",defaultMessage:"Link a Bank"})),n.createElement(oe.iD,null,n.createElement(x.Z,{id:"copy.instantly_available",defaultMessage:"Instantly Available"})),n.createElement(oe.dk,null,n.createElement(x.Z,{id:"modals.simplebuy.linkbank.description",defaultMessage:"Link your bank and instantly buy crypto at anytime."}))),n.createElement(b.JO,{name:"chevron-right",size:"24px",color:"grey400"})),Rn=(0,f.ZP)(oe.R2)`
  min-height: 110px;
`,In=f.ZP.div`
  display: flex;
  margin-top: 8px;
  align-items: center;
`,Ln=f.ZP.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
  > img {
    margin-left: 8px;
  }
`,Un=f.ZP.div`
  height: 125px;
  ${mt.BC.mobile`
    height: 132px;
  `};
`,Methods_PaymentCard=({icon:e,onClick:t,text:r,value:l})=>n.createElement(oe.Uq,{"data-e2e":`sb${l.type.toLowerCase()}PaymentCard`,role:"button",onClick:t},n.createElement(Rn,null,e),n.createElement(oe.VY,null,n.createElement(oe.m5,null,r),n.createElement(oe.iD,null,n.createElement(x.Z,{id:"copy.instantly_available",defaultMessage:"Instantly Available"})),n.createElement(oe.dk,null,n.createElement(x.Z,{id:"modals.simplebuy.instantly_buy",defaultMessage:"Instantly buy crypto with any Visa or Mastercard."})),n.createElement(In,null,n.createElement(k.El,null,n.createElement(x.Z,{id:"copy.most_popular",defaultMessage:"Most Popular"})),n.createElement(Ln,null,n.createElement(b.Ee,{name:"visa-logo"}),n.createElement(b.Ee,{name:"mastercard-logo"})))),n.createElement(Un,null,n.createElement(b.JO,{name:"chevron-right",size:"24px",color:"grey400"}))),jn=f.ZP.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`,Yn=(0,f.ZP)(b.xv)`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
`,$n=f.ZP.div`
  border-top: 1px solid ${e=>e.theme.grey000};
`,Vn=(0,f.ZP)(d.o9)`
  text-align: center;
`,Kn=f.ZP.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${e=>e.theme.blue000};
  display: flex;
  align-items: center;
  justify-content: center;
`;class qn extends n.PureComponent{constructor(){super(...arguments),this.getType=e=>{switch(e.type){case ze.t8.BANK_TRANSFER:case ze.t8.LINK_BANK:return n.createElement(x.Z,{id:"modals.simplebuy.banklink",defaultMessage:"Link a Bank"});case ze.t8.BANK_ACCOUNT:return n.createElement(x.Z,{id:"modals.simplebuy.bankwire",defaultMessage:"Wire Transfer"});case ze.t8.PAYMENT_CARD:return n.createElement(x.Z,{id:"modals.simplebuy.paymentcard",defaultMessage:"Credit or Debit Card"});case ze.t8.USER_CARD:return e&&e.card?e.card.label?e.card.label:e.card.type:n.createElement(x.Z,{id:"modals.simplebuy.paymentcard",defaultMessage:"Credit or Debit Card"});case ze.t8.FUNDS:default:return""}},this.handleSubmit=e=>{this.props.buySellActions.handleMethodChange({isFlow:!0,method:e})},this.getIcon=e=>{switch(e.type){case ze.t8.BANK_TRANSFER:case ze.t8.LINK_BANK:return n.createElement(b.Ee,{name:"bank",height:"48px"});case ze.t8.BANK_ACCOUNT:return n.createElement(Kn,null,n.createElement(b.JO,{size:"18px",color:"blue600",name:"arrow-down"}));case ze.t8.PAYMENT_CARD:return n.createElement(Kn,null,n.createElement(b.JO,{size:"18px",color:"blue600",name:"credit-card-sb"}));case ze.t8.USER_CARD:const{card:t}=e;if(!t)return n.createElement(n.Fragment,null);const r=_.QU.find((e=>e.type===t.type));return n.createElement("img",{alt:"Credit Card Logo",height:"18px",width:"auto",src:r?r.logo:_.US});case ze.t8.FUNDS:return n.createElement(b.JO,{size:"32px",color:"USD",name:e.currency});default:return n.createElement(b.Ee,{name:"blank-card"})}}}render(){const{fiatCurrency:e,orderType:t}=this.props,r=this.props.cards.filter((e=>"ACTIVE"===e.state&&t===ze.mr.BUY)),l=this.props.paymentMethods.methods.map((e=>({text:this.getType(e),value:e}))),a=this.props.paymentMethods.methods.find((e=>e.type===ze.t8.PAYMENT_CARD&&t===ze.mr.BUY)),i=l.filter((e=>{var r;return e.value.type===ze.t8.FUNDS&&e.value.currency in ze.E2&&(t===ze.mr.SELL||Number(null===(r=this.props.balances[e.value.currency])||void 0===r?void 0:r.available)>0)})),o=l.find((e=>e.value.type===ze.t8.PAYMENT_CARD&&t===ze.mr.BUY)),s=l.find((e=>e.value.type===ze.t8.BANK_ACCOUNT&&t===ze.mr.BUY)),c=l.find((e=>e.value.type===ze.t8.BANK_TRANSFER&&t===ze.mr.BUY)),m=r.map((e=>({text:e.card?e.card.label?e.card.label:e.card.type:"Credit or Debit Card",value:Object.assign(Object.assign({},e),{card:e.card,currency:e.currency,limits:a&&a.limits?a.limits:{max:"500000",min:"1000"},type:ze.t8.USER_CARD})}))),p=i.length||m.length||void 0!==o||void 0!==s;return n.createElement(jn,null,n.createElement(A.Z,null,n.createElement(d.o9,null,n.createElement(Yn,{color:"grey800",size:"20px",weight:600},n.createElement(b.JO,{cursor:!0,name:"arrow-back",size:"20px",color:"grey600",style:{marginRight:"28px"},role:"button",onClick:()=>this.props.buySellActions.setStep({cryptoCurrency:(0,u.getCoinFromPair)(this.props.pair.pair),fiatCurrency:(0,u.getFiatFromPair)(this.props.pair.pair),orderType:this.props.orderType,pair:this.props.pair,step:"ENTER_AMOUNT"})}),n.createElement("div",null,n.createElement(x.Z,{id:"modals.simplebuy.paymentmethods",defaultMessage:"Payment Methods"})))),n.createElement($n,null,!p&&n.createElement(Vn,null,n.createElement(b.Ee,{height:"60px",name:"world-alert",srcset:{"world-alert2":"2x","world-alert3":"3x"}}),n.createElement(b.xv,{size:"16px",weight:500,style:{marginTop:"8px"}},n.createElement(x.Z,{id:"copy.no_payment_methods",defaultMessage:"No payment methods available."}))),o&&n.createElement(Methods_PaymentCard,Object.assign({},o,{icon:this.getIcon(o.value),onClick:()=>this.handleSubmit(o.value)})),c&&n.createElement(Methods_LinkBank,Object.assign({},c,{icon:this.getIcon({type:ze.t8.BANK_TRANSFER}),onClick:()=>this.handleSubmit(Object.assign(Object.assign({},c.value),{type:ze.t8.LINK_BANK}))})),s&&e&&n.createElement(n.Fragment,null,n.createElement(On.Z,Object.assign({},s,{icon:this.getIcon(s.value),onClick:()=>this.handleSubmit(s.value)}))))))}}const Jn=(0,Z.Z)({destroyOnUnmount:!1,form:"sbPaymentMethods"})(qn),Wn=(0,f.ZP)(d.o9)`
  padding-bottom: 0px;
  position: relative;
  height: 100%;
`,Gn=(0,f.ZP)(b.JO)`
  position: absolute;
  padding: inherit;
  left: 0px;
  top: 0px;
`,Xn=f.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`,Hn=(0,f.ZP)(b.xv)`
  margin: 56px 0 16px 0;
  text-align: center;
`,Qn=(0,f.ZP)(b.xv)`
  margin-bottom: 56px;
  text-align: center;
`,PaymentMethods_template_unsupported=e=>{const{paymentAccountEligible:t}=e.eligibility;return n.createElement(Wn,null,n.createElement(Gn,{cursor:!0,name:"arrow-left",size:"20px",color:"grey600",role:"button",onClick:e.handleClose}),n.createElement(Xn,null,n.createElement(b.Ee,{width:"48px",height:"48px",name:"world-alert",srcset:{"world-alert2":"2x","world-alert3":"3x"}}),n.createElement(Hn,{color:"grey800",size:"20px",weight:600},n.createElement(x.Z,{id:"modals.simplebuy.unsupported-title",defaultMessage:"Buy Crypto Coming Soon for"})," ",t?e.fiatCurrency:n.createElement(x.Z,{id:"modals.simplebuy.fiataccountineligible",defaultMessage:"your region."})),n.createElement(Qn,{color:"grey600",weight:500},t?n.createElement(n.Fragment,null,n.createElement(x.Z,{id:"modals.simplebuy.unsupported-subcontent",defaultMessage:"Currently we don't support buying crypto with"})," ",e.fiatCurrency,". "):n.createElement(n.Fragment,null,n.createElement(x.Z,{id:"modals.simplebuy.unsupported-subcontent-1",defaultMessage:"Well this is awkward. We don't support buying crypto yet for"})," ",n.createElement(x.Z,{id:"modals.simplebuy.fiatregion",defaultMessage:"your region"}),". "),n.createElement(x.Z,{id:"modals.simplebuy.unsupported-subcontent-2",defaultMessage:"We'll send you an update when we do."})),n.createElement(b.zx,{"data-e2e":"submitSBAmount",height:"48px",size:"16px",nature:"primary",onClick:e.handleClose,fullwidth:!0},n.createElement(x.Z,{id:"buttons.ok",defaultMessage:"OK"}))))},PaymentMethods_template_success=e=>e.paymentMethods.methods.length&&e.paymentMethods.methods.find((e=>"0"!==e.limits.max))?n.createElement(Jn,Object.assign({},e)):n.createElement(PaymentMethods_template_unsupported,Object.assign({},e));class el extends n.PureComponent{componentDidMount(){this.props.fiatCurrency&&!h.Nt.Success.is(this.props.data)&&(this.props.buySellActions.fetchFiatEligible(this.props.fiatCurrency),this.props.buySellActions.fetchPaymentMethods(this.props.fiatCurrency),this.props.buySellActions.fetchCards(!1),this.props.brokerageActions.fetchBankTransferAccounts())}errorCallback(){this.props.buySellActions.setStep({cryptoCurrency:"BTC",fiatCurrency:this.props.fiatCurrency||"USD",pair:this.props.pair,step:"ENTER_AMOUNT"})}render(){return this.props.data.cata({Failure:()=>n.createElement(d.ub,{action:"retry",handler:this.errorCallback,"data-e2e":"sbTryCurrencySelectionAgain"}),Loading:()=>n.createElement(template_loading,null),NotAsked:()=>n.createElement(template_loading,null),Success:e=>n.createElement(PaymentMethods_template_success,Object.assign({},e,this.props))})}}const tl=(0,l.connect)((e=>({data:PaymentMethods_selectors(e),fiatCurrency:m.wl.wx.wd.getFiatCurrency(e)})),(e=>({brokerageActions:(0,c.bindActionCreators)(m.Nw.wx.brokerage,e),buySellActions:(0,c.bindActionCreators)(m.Nw.wx.buySell,e),formActions:(0,c.bindActionCreators)(m.Nw.cr,e)})))(el);var rl=r("./src/data/components/swap/model.ts"),nl=r("./src/modals/Swap/components/index.tsx");const ll=(0,f.ZP)(A.Z)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,al=(0,f.ZP)(d.X2)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,il=f.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,ol=f.ZP.div`
  display: flex;
  flex-direction: row;
`,sl=f.ZP.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,cl=f.ZP.div`
  text-align: right;
`,dl=(0,f.ZP)(b.xv)`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>e.theme.grey900};
  display: flex;
  flex-direction: column;
  justify-content: center;
`,ml=(0,f.ZP)(b.xv)`
  font-weight: 500;
  color: ${e=>e.theme.grey400};
  text-align: right;
  font-size: 14px;
`,ul=f.ZP.div`
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  background-color: ${e=>e.theme.grey000};

  animation: fadeIn 0.3s ease-in-out;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`,pl=f.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin-left: 4px;
`,yl=f.ZP.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  > div {
    display: flex;
    flex-direction: row;
  }
`,gl=(0,f.ZP)(d.o9)`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  height: 100%;
`,hl=f.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
`,El=(0,f.ZP)(b.xv)`
  display: flex;
  font-size: 14px;
  font-weight: 500;
  flex-direction: row;
  margin-top: 24px;
  text-align: left;
  a {
    color: ${e=>e.theme.blue600};
    cursor: pointer;
    text-decoration: none;
    display: contents;
  }
`;class xl extends n.PureComponent{constructor(e){super(e),this.handleSubmit=e=>{e.preventDefault(),this.props.buySellActions.createOrder({})},this.networkFee=e=>e?(e=>{var t;return"BTC"===e.coin||"BCH"===e.coin?null===(t=e.selection)||void 0===t?void 0:t.fee:e.fee})(e):0,this.displayAmount=(e,t)=>(0,J.P2)({unit:{symbol:t.coin},value:null==e?void 0:e.cryptoAmount}),this.getFeeInFiat=(e,t,r)=>{const{payment:n,rates:l,ratesEth:a}=this.props,i=window.coins[e.coin].coinfig.type.erc20Address;return e.type===p.l0.ACCOUNT&&Number(h.ei.convertCoinToFiat({coin:t,currency:r,isStandard:!0,rates:i?a:l,value:(0,Wt.b)(e.baseCoin,this.networkFee(n))}))||0},this.toggleCoinToolTip=()=>{this.setState((e=>({isSetCoinToolTip:!e.isSetCoinToolTip})))},this.toggleNetworkFeeToolTip=()=>{this.setState((e=>({isSetNetworkFee:!e.isSetNetworkFee})))},this.state={isSetCoinToolTip:!1,isSetNetworkFee:!1}}render(){return this.props.quoteR.cata({Failure:()=>null,Loading:()=>n.createElement(template_loading,null),NotAsked:()=>null,Success:e=>{const{account:t,formValues:r}=this.props;if(!r)return null;if(!t)return null;const l=(0,rl.ZB)(e.quote.pair),a=(0,rl.LJ)(e.quote.pair),i=this.getFeeInFiat(t,l,a),o=a,s=l,{rates:c,ratesEth:m}=this.props,y=(0,u.getFiatFromPair)(this.props.pair.pair),g=window.coins[a].coinfig.type.erc20Address;return n.createElement(ll,{onSubmit:this.handleSubmit},n.createElement(d.o9,null,n.createElement(nl.Fn,{spaceBetween:!1,marginBottom:!0},n.createElement(b.JO,{role:"button","data-e2e":"backToEnterAmount",name:"arrow-back",cursor:!0,size:"24px",color:"grey600",onClick:()=>{this.props.buySellActions.setStep({cryptoCurrency:l,fiatCurrency:(0,u.getFiatFromPair)(this.props.pair.pair),orderType:this.props.orderType,pair:this.props.pair,step:"ENTER_AMOUNT",swapAccount:this.props.account})}})," ",n.createElement(b.xv,{size:"20px",color:"grey900",weight:600,style:{marginLeft:"24px"}},n.createElement(x.Z,{id:"modals.simplebuy.checkoutconfirm",defaultMessage:"Checkout"}))),n.createElement(yl,{"data-e2e":"sbTotalAmount"},n.createElement("div",null,n.createElement(b.xv,{size:"32px",weight:600,color:"grey800"},this.displayAmount(r,t))),n.createElement("div",null,n.createElement(b.xv,{size:"20px",weight:600,color:"grey600",style:{marginTop:"8px"}},this.props.incomingAmountR.cata({Failure:()=>n.createElement(b.xv,{size:"14px",color:"red600"},n.createElement(x.Z,{id:"copy.oops",defaultMessage:"Oops. Something went wrong."})),Loading:()=>n.createElement(b.co,{height:"18px",width:"70px"}),NotAsked:()=>n.createElement(b.co,{height:"18px",width:"70px"}),Success:e=>n.createElement(n.Fragment,null,o,(0,J.M)(Number(e.amt)+Number(i)))}))))),n.createElement(al,null,n.createElement(sl,null,n.createElement(il,null,n.createElement(ol,null,n.createElement(dl,null,n.createElement(x.Z,{id:"modals.simplebuy.confirm.coin_price",defaultMessage:"{coin} Price",values:{coin:t.coin}})),n.createElement(pl,null,n.createElement(b.JO,{name:"question-in-circle-filled",size:"16px",color:this.state.isSetCoinToolTip?"blue600":"grey300",onClick:()=>this.toggleCoinToolTip()}))),n.createElement(dl,{"data-e2e":"sbExchangeRate"},this.props.quoteR.cata({Failure:()=>n.createElement(b.xv,{size:"14px",color:"red600"},n.createElement(x.Z,{id:"copy.oops",defaultMessage:"Oops. Something went wrong."})),Loading:()=>n.createElement(b.co,{height:"18px",width:"70px"}),NotAsked:()=>n.createElement(b.co,{height:"18px",width:"70px"}),Success:e=>n.createElement(n.Fragment,null,o,(0,J.M)((0,Wt.b)("FIAT",e.rate)))}))),this.state.isSetCoinToolTip&&n.createElement(ul,null,n.createElement(b.xv,{size:"12px",weight:500,color:"grey600"},n.createElement(b.Qt,{inline:!0},n.createElement(b.xv,{size:"14px"},n.createElement(x.Z,{id:"modals.simplebuy.confirm.coin_tooltip",defaultMessage:"our.com provides the best market price we receive and applies a spread."})),n.createElement(b.rU,{href:"/support/hc/en-us/articles/360061672651-Wallet-Pricing",size:"14px",rel:"noopener noreferrer",target:"_blank"},n.createElement(x.Z,{defaultMessage:"Learn more",id:"copy.learn_more"}))))))),n.createElement(al,null,n.createElement(dl,null,n.createElement(x.Z,{id:"copy.deposit_to",defaultMessage:"Deposit To"})),n.createElement(d.B4,{"data-e2e":"sbIncomingAccount"},o," ",n.createElement(x.Z,{id:"copy.account",defaultMessage:"Account"}))),t.type!==p.l0.CUSTODIAL&&n.createElement(n.Fragment,null,n.createElement(al,null,n.createElement(dl,null,n.createElement(x.Z,{id:"modals.simplebuy.confirm.sale_amount",defaultMessage:"Sale Amount"})),n.createElement(dl,null,n.createElement(cl,null,this.props.incomingAmountR.cata({Failure:()=>n.createElement(b.xv,{size:"14px",color:"red600"},n.createElement(x.Z,{id:"copy.oops",defaultMessage:"Oops. Something went wrong."})),Loading:()=>n.createElement(b.co,{height:"18px",width:"70px"}),NotAsked:()=>n.createElement(b.co,{height:"18px",width:"70px"}),Success:e=>{const r=(0,J.M)(Number(e.amt)),a=h.ei.convertFiatToCoin({coin:l,currency:y,rates:window.coins[l].coinfig.type.erc20Address?m:c,value:Number(r)});return n.createElement(n.Fragment,null,n.createElement(d.B4,{"data-e2e":"sbSaleAccount"},o,r),n.createElement(ml,null,(0,J.P2)({unit:{symbol:t.baseCoin},value:a})))}})))),n.createElement(al,null,n.createElement(sl,null,n.createElement(il,null,n.createElement(ol,null,n.createElement(dl,null,n.createElement(x.Z,{id:"copy.network_fee",defaultMessage:"Network Fee"})),n.createElement(pl,null,n.createElement(b.JO,{name:"question-in-circle-filled",size:"16px",color:this.state.isSetNetworkFee?"blue600":"grey300",onClick:()=>this.toggleNetworkFeeToolTip()}))),n.createElement(dl,{"data-e2e":"sbTransactionFee"},n.createElement(cl,null,o,(0,J.M)(i),n.createElement(ml,null,(0,J.P2)({unit:{symbol:t.baseCoin},value:(0,Wt.b)(t.baseCoin,this.networkFee(this.props.payment))}))))),this.state.isSetNetworkFee&&n.createElement(ul,null,n.createElement(b.xv,{size:"12px",weight:500,color:"grey600"},n.createElement(b.Qt,{inline:!0},n.createElement(b.xv,{size:"14px"},n.createElement(x.Z,{id:"modals.simplebuy.confirm.network_fees",defaultMessage:"Network fees are set by the {coin} network.",values:{coin:s}})),n.createElement(b.rU,{href:g?"/support/hc/en-us/articles/360061258732":"/support/hc/en-us/articles/360061672651",size:"14px",rel:"noopener noreferrer",target:"_blank"},n.createElement(x.Z,{id:"modals.simplebuy.confirm.learn_more_about_fees",defaultMessage:"Learn more about fees"})))))))),n.createElement(al,null,n.createElement(dl,null,n.createElement(x.Z,{id:"copy.total",defaultMessage:"Total"})),n.createElement(dl,null,n.createElement(cl,null,n.createElement(d.B4,{"data-e2e":"sbIncomingAmount"},this.props.incomingAmountR.cata({Failure:()=>n.createElement(b.xv,{size:"14px",color:"red600"},n.createElement(x.Z,{id:"copy.oops",defaultMessage:"Oops. Something went wrong."})),Loading:()=>n.createElement(b.co,{height:"18px",width:"70px"}),NotAsked:()=>n.createElement(b.co,{height:"18px",width:"70px"}),Success:e=>n.createElement(n.Fragment,null,o,(0,J.M)(Number(e.amt)+Number(i)))})),n.createElement(ml,null,this.displayAmount(r,t))))),n.createElement(nl.OC,null),n.createElement(d.o9,null,n.createElement(El,null,n.createElement(x.Z,{id:"modals.simplebuy.confirm.sell_description",defaultMessage:"Final amount may change due to market activity.{linebreak} By approving this Sell you agree to our.com’s {linebreak}<a>Refund Policy.</a>",values:{a:e=>n.createElement("a",{href:"/root/legal/terms",rel:"noopener noreferrer",target:"_blank"},e),linebreak:n.createElement("br",null)}}))),n.createElement(gl,null,n.createElement(hl,null,n.createElement(b.zx,{nature:"primary","data-e2e":"swapBtn",type:"submit",disabled:this.props.submitting,fullwidth:!0,height:"48px"},this.props.submitting?n.createElement(b.JA,{height:"16px",width:"16px",color:"white"}):n.createElement(b.xv,{weight:600,color:"white"},n.createElement(x.Z,{id:"buttons.sell_coin",defaultMessage:"Sell {displayName}",values:{displayName:this.displayAmount(r,t)}}))),n.createElement(b.zx,{nature:"light-red","data-e2e":"swapCancelBtn",type:"button",disabled:this.props.submitting,fullwidth:!0,height:"48px",color:"red400",style:{marginTop:"16px"},onClick:()=>{this.props.buySellActions.setStep({cryptoCurrency:l,fiatCurrency:y,orderType:this.props.orderType,pair:this.props.pair,step:"ENTER_AMOUNT",swapAccount:this.props.account})}},n.createElement(x.Z,{id:"buttons.cancel",defaultMessage:"Cancel"})),n.createElement(b.xv,{size:"12px",weight:500,color:"grey600",style:{marginTop:"16px",textAlign:"center"}},n.createElement(x.Z,{id:"copy.buy_amount_change_disclaimer",defaultMessage:"The amounts you send and receive may change slightly due to market activity. Once an order starts, we are unable to stop it."})),this.props.error&&n.createElement(k.XG,{style:{marginTop:"16px"},"data-e2e":"checkoutError"},n.createElement(b.JO,{name:"alert-filled",color:"red600",style:{marginRight:"4px"}}),"Error: ",this.props.error))))}})}}const fl=(0,l.connect)((e=>{const t=m.wl.wx.wd.getCryptoCurrency(e),r=m.wl.wx.wd.getPayment(e).getOrElse(void 0);return{account:m.wl.wx.wd.getSwapAccount(e),coin:t,formValues:m.wl.cr.getFormValues("simpleBuyCheckout")(e),incomingAmountR:m.wl.wx.wd.getIncomingAmount(e),pair:m.wl.wx.wd.getSBPair(e),payment:r,quoteR:m.wl.wx.wd.getSellQuote(e),rates:m.wl.vE.aT.misc.getRatesSelector(t,e).getOrElse({}),ratesEth:m.wl.vE.aT.misc.getRatesSelector("ETH",e).getOrElse({})}}),(e=>({buySellActions:(0,c.bindActionCreators)(m.Nw.wx.buySell,e)}))),bl=(0,c.compose)((0,Z.Z)({destroyOnUnmount:!1,form:"previewSell"}),fl)(xl),wl=(0,Br.createDeepEqualSelector)([m.wl.qz.N5.getUserData],(e=>(0,C.Z)((e=>({userData:e})))(e))),SellOrderSummary_selectors_getData=e=>({sellOrder:m.wl.wx.wd.getSellOrder(e)}),Status=({sellOrder:e})=>{switch(null==e?void 0:e.state){case"PENDING_CONFIRMATION":case"PENDING_DEPOSIT":return n.createElement(k.sx,null,n.createElement(x.Z,{id:"modals.simplebuy.waitingondepo",defaultMessage:"Waiting on Funds"}));case"CANCELED":return n.createElement(k.XG,null,n.createElement(x.Z,{id:"modals.simplebuy.canceled",defaultMessage:"Trade Canceled"}));case"EXPIRED":case"FAILED":return n.createElement(k.XG,null,n.createElement(x.Z,{id:"modals.simplebuy.error",defaultMessage:"Trade Failed"}));case"FINISHED":return n.createElement(k.El,null,n.createElement(x.Z,{id:"modals.simplebuy.success",defaultMessage:"Trade Complete"}));case"PENDING_EXECUTION":return n.createElement(k.wF,null,n.createElement(x.Z,{id:"copy.pending",defaultMessage:"Pending"}));default:return n.createElement(k.sx,null,n.createElement(x.Z,{id:"modals.simplebuy.unknown",defaultMessage:"Unknown Status"}))}},Cl=f.ZP.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`,vl=(0,f.ZP)(b.xv)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Al=f.ZP.div`
  margin-top: 40px;
  > div {
    display: inline;
  }
`,SellOrderSummary_template_success=e=>{const{sellOrder:t}=e,r=t&&(0,u.getSellBaseAmount)(t),l=t?(0,u.getCoinFromPair)(t.pair):"BTC",a=t?(0,u.getFiatFromPair)(t.pair):"USD",i="INTERNAL"===(null==t?void 0:t.kind.direction),o=t?(0,u.getSellCounterAmount)(t):0;return t?n.createElement(Cl,null,n.createElement("div",null,n.createElement(d.o9,null,n.createElement(vl,{color:"grey800",size:"20px",weight:600},n.createElement("span",null,n.createElement(Le._s,{orderType:ze.mr.SELL,crypto:l})),n.createElement(b.JO,{cursor:!0,name:"close",size:"20px",color:"grey600",onClick:()=>e.handleClose()})),n.createElement(Al,null,n.createElement(b.xv,{color:"grey800","data-e2e":"sbAmount",size:"32px",weight:600},r," of"),n.createElement(b.xv,{size:"32px",weight:600,color:l},l)),n.createElement("div",{style:{margin:"16px 0"}},n.createElement(Status,Object.assign({},e)))),n.createElement(d.X2,null,n.createElement(d.Dx,{color:"grey600",size:"14px",weight:500},n.createElement(x.Z,{id:"modals.simplebuy.summary.txid",defaultMessage:"Transaction ID"})),n.createElement(d.B4,{"data-e2e":"sbTransactionId"},t.id)),n.createElement(d.X2,null,n.createElement(d.Dx,null,n.createElement(x.Z,{id:"modals.simplebuy.summary.created",defaultMessage:"Created"})),n.createElement(d.B4,{"data-e2e":"sbCreated"},Re()(t.createdAt).format("LLL"))),n.createElement(n.Fragment,null,"FAILED"!==t.state&&n.createElement(d.X2,null,n.createElement(d.Dx,null,n.createElement(x.Z,{id:"modals.simplebuy.summary.rate",defaultMessage:"Exchange Rate"})),n.createElement(d.B4,{"data-e2e":"sbRate"},(0,J.LE)({unit:a,value:t.priceFunnel.price})," ","/ 1 ",l)),n.createElement(d.X2,null,n.createElement(d.Dx,null,n.createElement(x.Z,{id:"copy.amount",defaultMessage:"Amount"})),n.createElement(d.B4,{"data-e2e":"sbPurchasing"},r," of ",l))),"0"!==t.priceFunnel.outputMoney&&"FAILED"!==t.state&&n.createElement(d.X2,null,n.createElement(d.Dx,null,n.createElement(x.Z,{id:"modals.simplebuy.summary.sent_to",defaultMessage:"Sent To"})),n.createElement(d.B4,{"data-e2e":"sbSentTo"},a," Wallet")),"0"!==t.priceFunnel.outputMoney&&n.createElement(d.X2,null,n.createElement(d.Dx,null,n.createElement(x.Z,{id:"copy.total",defaultMessage:"Total"})),n.createElement(d.B4,{"data-e2e":"sbSentTotal"},(0,J.LE)({unit:a,value:o}))),n.createElement(d.X2,null,n.createElement(d.Dx,null,n.createElement(x.Z,{id:"modals.simplebuy.summary.paymentmethod",defaultMessage:"Payment Method"})),n.createElement(d.B4,{"data-e2e":"sbPaymentMethod"},i?`${l} Trading Account`:`${l} Private Key Wallet`)))):null};class Sl extends n.PureComponent{constructor(){super(...arguments),this.handleRefresh=()=>{this.props.buySellActions.fetchCards(!1)}}componentDidMount(){this.props.buySellActions.fetchOrders()}render(){return n.createElement(SellOrderSummary_template_success,Object.assign({},this.props,this.props.data))}}const Zl=(0,l.connect)((e=>({data:SellOrderSummary_selectors_getData(e)})),(e=>({buySellActions:(0,c.bindActionCreators)(m.Nw.wx.buySell,e),sendActions:(0,c.bindActionCreators)(m.Nw.wx.send,e)})))(Sl),kl=(0,f.ZP)(d.o9)`
  padding-bottom: 0px;
  position: relative;
  height: 100%;
`,Ml=f.ZP.div`
  width: 100%;
  height: 100%;
`,Tl=(0,f.ZP)(b.xv)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,_l=(0,f.ZP)(b.xv)`
  margin: 38px 0 46px 0;
  display: flex;
  justify-content: center;
`,Pl=(0,f.ZP)(b.xv)`
  margin: 16px 0;
  text-align: left;
`,template_pending=e=>n.createElement(kl,null,n.createElement(Tl,{color:"grey800",size:"20px",weight:600},n.createElement(b.JO,{cursor:!0,"data-e2e":"sbCloseModalIcon",name:"user",size:"22px",color:"blue600"}),n.createElement(b.JO,{cursor:!0,"data-e2e":"sbCloseModalIcon",name:"close",size:"20px",color:"grey600",role:"button",onClick:e.handleClose})),n.createElement(Ml,null,n.createElement(Pl,{color:"textBlack",size:"24px",weight:600},n.createElement(x.Z,{id:"modals.simplebuy.underreview",defaultMessage:"ID Verification Pending"})),n.createElement(Pl,{color:"grey800",size:"16px",weight:500},n.createElement(x.Z,{id:"scenes.exchange.getstarted.status.pending.description",defaultMessage:"We are currently reviewing your application. Hang tight! In just a few minutes you will be all set to trade cryptocurrency. You should receive an update within 5 minutes."})),n.createElement(_l,null,n.createElement(b.T_,{height:"80px",width:"80px"})),n.createElement(b.zx,{jumbo:!0,nature:"primary","data-e2e":"refreshKyc",onClick:e.handleRefresh,fullwidth:!0},n.createElement(x.Z,{id:"scenes.exchange.exchangeform.refreshlatest",defaultMessage:"Refresh status."})))),Nl=(0,f.ZP)(d.o9)`
  padding-bottom: 0px;
  position: relative;
  height: 100%;
`,Bl=f.ZP.div`
  width: 100%;
  height: 100%;
`,Dl=(0,f.ZP)(b.xv)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Ol=(0,f.ZP)(Fr)`
  color: ${e=>e.theme.grey600};
  margin-bottom: 34px;
  font-size: 12px;
  text-align: center;
`,template_rejected=e=>n.createElement(Nl,null,n.createElement(Dl,{color:"grey800",size:"20px",weight:600},n.createElement(b.JO,{cursor:!0,"data-e2e":"sbCloseModalIcon",name:"user",size:"22px",color:"blue600"}),n.createElement(b.JO,{cursor:!0,"data-e2e":"sbCloseModalIcon",name:"close",size:"20px",color:"grey600",role:"button",onClick:e.handleClose})),n.createElement(Bl,null,n.createElement(Fr,{color:"textBlack",size:"24px",weight:600},n.createElement(x.Z,{id:"modals.simplebuy.rejected.title",defaultMessage:"Unable to Verify Your ID"})),n.createElement(Fr,{color:"grey800",size:"16px",weight:500},n.createElement(x.Z,{id:"modals.simplebuy.rejected.subtitle",defaultMessage:"We were unable to verify your identity. This can happen for a few reasons."})),n.createElement(Lr,{color:"grey600",weight:500},n.createElement($r,null,n.createElement(jr,null,n.createElement(Yr,null,"1")),n.createElement(Ur,null,n.createElement(Ir,null,n.createElement(x.Z,{id:"modals.simplebuy.rejected.invalid_id",defaultMessage:"Invalid ID"})),n.createElement(Rr,null,n.createElement(x.Z,{id:"modals.simplebuy.rejected.invalid_id_description",defaultMessage:"The image or document uploaded did not match the requirements."})))),n.createElement($r,null,n.createElement(jr,null,n.createElement(Yr,null,"2")),n.createElement(Ur,null,n.createElement(Ir,null,n.createElement(x.Z,{id:"modals.simplebuy.rejected.information_mismatch",defaultMessage:"Information Mismatch"})),n.createElement(Rr,null,n.createElement(x.Z,{id:"modals.simplebuy.rejected.information_mismatch_description",defaultMessage:"All information must appear exactly as it does on your legal documents. Note: Please do not use a nickname."})))),n.createElement($r,null,n.createElement(jr,null,n.createElement(Yr,null,"3")),n.createElement(Ur,null,n.createElement(Ir,null,n.createElement(x.Z,{id:"modals.simplebuy.rejected.blocked_by_laws",defaultMessage:"Blocked by Local Laws"})),n.createElement(Rr,null,n.createElement(x.Z,{id:"modals.simplebuy.rejected.blocked_by_laws_description",defaultMessage:"At our.com, we strive to adhere to any and all local laws. Based on your location, we cannot allow the buying or selling digital currencies at this time."}))))),n.createElement(Ol,null,n.createElement(x.Z,{id:"modals.simplebuy.rejected.disclaimer",defaultMessage:"If you think this was a mistake or would like a manual review of your account, please contact support."})),n.createElement(b.rU,{style:{width:"100%"},target:"_blank",href:"/support/hc/en-us/requests/new?ticket_form_id=360000186571"},n.createElement(b.zx,{fullwidth:!0,nature:"empty-blue","data-e2e":"contactSupport"},n.createElement(x.Z,{id:"modals.simplebuy.rejected.contact_support",defaultMessage:"Contact Support"}))))),ThreeDSHandler_selectors_getData=e=>{const t=m.wl.wx.wd.getSBCard(e),r=m.wl.wx.wd.getSBProviderDetails(e),n=m.wl.wx.wd.getSBOrder(e),l=m.wl.wx.wd.getEverypay3DSDetails(e),a=m.wl.vE.AW.getDomains(e).getOrElse({walletHelper:"/wallet_helper"});if(n)return h.Nt.Success({domains:a,order:n,type:"ORDER"});return(0,C.Z)(((e,t,r)=>({card:e,domains:a,order:n,providerDetails:t,threeDSDetails:r,type:"CARD"})))(t,r,l)},zl=(0,f.ZP)(d.o9)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`,ThreeDSHandler_template_loading=({order:e,polling:t})=>n.createElement(zl,null,n.createElement(b.T_,{width:"80px",height:"80px"}),n.createElement(b.xv,{weight:600,size:"20px",color:"grey800",style:{marginTop:"24px"}},t||e?n.createElement(x.Z,{id:"modals.simplebuy.processing",defaultMessage:"Processing…"}):n.createElement(x.Z,{id:"modals.simplebuy.linking_card",defaultMessage:"Securely Linking Your Card"})),n.createElement(b.xv,{weight:600,size:"14px",color:"grey600",style:{marginTop:"20px"}},n.createElement(x.Z,{id:"modals.simplebuy.linking_card.time",defaultMessage:"This could take up to 1 minute. Please do not close this window."}))),Fl=(0,f.ZP)(d.o9)`
  height: 100%;
`,Rl=f.ZP.iframe`
  border: 0;
  width: 100%;
  height: 100%;
  margin-top: 16px;
`,ThreeDSHandler_template_success=e=>e.threeDSCallbackReceived?n.createElement(ThreeDSHandler_template_loading,{polling:!0,order:"ORDER"===e.type}):n.createElement(Fl,null,n.createElement(n.Fragment,null,n.createElement(b.JO,{cursor:!0,name:"arrow-left",size:"20px",color:"grey600",role:"button",onClick:()=>{"ORDER"===e.type?e.buySellActions.setStep({order:e.order,step:"ORDER_SUMMARY"}):e.buySellActions.setStep({step:"ADD_CARD"})}}),n.createElement(Rl,{src:`${e.domains.walletHelper}/wallet-helper/everypay/#/paymentLink/${encodeURIComponent("CARD"===e.type?e.providerDetails.everypay.paymentLink:e.order&&e.order.attributes?e.order.attributes.everypay.paymentLink:"")}`})));class Il extends n.PureComponent{constructor(){super(...arguments),this.state={threeDSCallbackReceived:!1},this.handlePostMessage=e=>{if("everypay"!==e.data.from)return;if("sb"!==e.data.to)return;if("finished"!==e.data.command)return;this.setState({threeDSCallbackReceived:!0});const{card:t,order:r,type:n}=this.props.data.getOrElse({card:{id:""},order:{id:""},type:null});switch(n){case"ORDER":this.props.buySellActions.pollOrder(r.id);break;case"CARD":this.props.buySellActions.pollCard(t.id)}}}componentDidMount(){window.addEventListener("message",this.handlePostMessage,!1)}componentDidUpdate(e){!e.data.getOrElse({order:{}}).order&&this.props.data.getOrElse({order:{}}).order&&this.setState({threeDSCallbackReceived:!1})}componentWillUnmount(){window.removeEventListener("message",this.handlePostMessage,!1)}render(){return this.props.data.cata({Failure:e=>n.createElement(E.Z,{message:{message:e}}),Loading:()=>n.createElement(ThreeDSHandler_template_loading,null),NotAsked:()=>n.createElement(ThreeDSHandler_template_loading,null),Success:e=>n.createElement(ThreeDSHandler_template_success,Object.assign({},e,this.props,this.state))})}}const Ll=(0,l.connect)((e=>({data:ThreeDSHandler_selectors_getData(e)})),(e=>({buySellActions:(0,c.bindActionCreators)(m.Nw.wx.buySell,e)})))(Il),Ul=f.ZP.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`,jl=(0,f.ZP)(b.xv)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0 8px;
`,Yl=(0,f.ZP)(d.o9)`
  border-top: 1px solid ${e=>e.theme.grey000};
`,$l=(0,f.ZP)(b.xv)`
  font-weight: 600;
  font-size: 15px;
  display: flex;
  color: ${e=>e.theme.textBlack};
  width: 100%;
`,Vl=f.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`,UpgradeToGold_template=e=>n.createElement(Ul,null,n.createElement(d.o9,null,n.createElement(Vl,null,n.createElement(b.Ee,{name:"tier-gold",size:"32px"}),n.createElement(b.JO,{cursor:!0,"data-e2e":"sbCloseModalIcon",name:"close",size:"20px",color:"grey600",role:"button",onClick:e.handleClose})),n.createElement(jl,{color:"grey800",size:"24px",weight:600},n.createElement("div",null,n.createElement(x.Z,{id:"modals.simplebuy.goldupgrade.title1",defaultMessage:"Upgrade Your Profile."})),n.createElement("div",null,n.createElement(x.Z,{id:"modals.simplebuy.goldupgrade.title2",defaultMessage:"Buy & Sell More Crypto."}))),n.createElement(b.xv,{color:"grey600",weight:500},n.createElement(x.Z,{id:"modals.simplebuy.goldupgrade.subtitle",defaultMessage:"Verify your identity to increase how much you can Buy, Sell and Swap each week."}))),n.createElement(Yl,null,n.createElement(b.xv,{color:"grey600",weight:500},n.createElement($r,null,n.createElement(jr,null,n.createElement(Yr,null,"1")),n.createElement(Ur,null,n.createElement($l,null,n.createElement(x.Z,{id:"modals.confirm.title.verify_identity",defaultMessage:"Verify Your Identity"})),n.createElement(Rr,null,n.createElement(x.Z,{id:"modals.simplebuy.kycrequired.verify_identity_description",defaultMessage:"To prevent identity theft or fraud, we’ll need a make sure it’s really you by uploading an ID."})))),n.createElement($r,null,n.createElement(jr,null,n.createElement(Yr,null,"2")),n.createElement(Ur,null,n.createElement($l,null,n.createElement(x.Z,{id:"modals.simplebuy.goldupgrade.step2.title",defaultMessage:"Get Approved"})),n.createElement(Rr,null,n.createElement(x.Z,{id:"modals.simplebuy.goldupgrade.step2.desc",defaultMessage:"Most applications are approved within minutes but some may take a few days to be reviewed."})))),n.createElement($r,null,n.createElement(jr,null,n.createElement(Yr,null,"3")),n.createElement(Ur,null,n.createElement($l,null,n.createElement(x.Z,{id:"modals.simplebuy.goldupgrade.step3.title",defaultMessage:"Buy More Crypto"})),n.createElement(Rr,null,n.createElement(x.Z,{id:"modals.simplebuy.goldupgrade.step3.desc",defaultMessage:"Buy, Sell, Swap crypto instantly and never miss another big day in the market."}))))),n.createElement(b.zx,{fullwidth:!0,size:"16px",height:"48px",nature:"primary","data-e2e":"upgradeNowBtn",onClick:()=>{e.verifyIdentity()},style:{marginTop:"16px"},type:"button"},n.createElement(x.Z,{id:"scenes.airdrops.success.upgradenow",defaultMessage:"Upgrade Now"})),n.createElement(b.zx,{fullwidth:!0,size:"16px",height:"48px",nature:"empty-blue","data-e2e":"doLaterBtn",onClick:()=>{e.handleClose()},style:{marginTop:"8px"},type:"button"},n.createElement(x.Z,{id:"modals.confirm.cancel.verify_identity",defaultMessage:"I'll Do This Later"}))));class Kl extends n.PureComponent{render(){return n.createElement(UpgradeToGold_template,Object.assign({},this.props))}}const ql=(0,l.connect)(null,(e=>({buySellActions:(0,c.bindActionCreators)(m.Nw.wx.buySell,e),verifyIdentity:()=>{e(m.Nw.wx.identityVerification.resetVerificationStep()),e(m.Nw.wx.identityVerification.verifyIdentity({needMoreInfo:!1,origin:"SimpleBuy",tier:2}))}})))(Kl),{SB_CHANGE_EMAIL_FORM:Jl}=m.o4.wx.wd,VerifyEmail_selectors_getData=e=>{const t=m.wl.cr.getFormSyncErrors(Jl)(e),r=m.wl.I8.getRegisterEmail(e),n=m.wl.vE.Xd.getEmail(e).getOrElse(null),l=n&&r!==n?n:r,a=m.wl.wx.wd.isUserSddEligible(e).getOrElse(!1);return h.Nt.Success({email:l,formErrors:t,isUserSddEligible:a})},{SB_CHANGE_EMAIL_FORM:Wl}=m.o4.wx.wd,Gl=f.ZP.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`,Xl=f.ZP.div`
  display: flex;
  background: ${e=>e.theme[e.color]};
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 20px;
`,Hl=f.ZP.div`
  display: flex;
  align-items: right;
  justify-content: flex-end;
`,Ql=f.ZP.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  padding: 0 40px;
  flex: 1;
  justify-content: center;
`,ea=f.ZP.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  height: 250px;
  width: 100%;
`,ta=f.ZP.span`
  display: inline;
  padding: 40px;
  text-align: center;
`,ra=(0,f.ZP)(M.l0)`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`,na=f.ZP.label`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 12px;
  display: block;
  text-align: left;
`,la=(0,Z.Z)({destroyOnUnmount:!1,form:Wl})((e=>{const[t,r]=(0,n.useState)(!1);return n.createElement(Gl,null,n.createElement(d.o9,null,n.createElement(Hl,null,n.createElement(b.JO,{cursor:!0,"data-e2e":"sbCloseModalIcon",name:"close",size:"20px",color:"grey600",role:"button",onClick:e.handleClose}))),n.createElement(Ql,null,n.createElement(ea,null,n.createElement(Xl,{color:"blue600"},n.createElement(b.JO,{color:"white",name:"email",size:"24px"})),n.createElement(b.xv,{size:"20px",weight:600,color:"black",style:{marginTop:"8px"}},t?n.createElement(x.Z,{id:"modals.simplebuy.verifyemail.change_your_email",defaultMessage:"Change Your Email Address"}):n.createElement(x.Z,{id:"scenes.verifyemail.title",defaultMessage:"Verify Your Email"})),t?n.createElement(ra,{onSubmit:e.handleSubmit},n.createElement(M.cw,null,n.createElement(M.xJ,null,n.createElement(na,{htmlFor:"email"},n.createElement(b.xv,{weight:500,size:"14px"},n.createElement(x.Z,{id:"modals.simplebuy.verifyemail.email_address",defaultMessage:"Email Address"}))),n.createElement(S.Z,{name:"email",component:M.zC,validate:[B.C1,B.u$],verified:e.isEmailVerified,errorBottom:!0}))),n.createElement(b.zx,{"data-e2e":"submitSBInforAndResidential",height:"48px",size:"16px",nature:"primary",type:"submit",fullwidth:!0},e.submitting?n.createElement(b.JA,{height:"16px",width:"16px",color:"white"}):n.createElement(x.Z,{id:"modals.simplebuy.verifyemail.save_and_verify",defaultMessage:"Save & Verify"}))):n.createElement(n.Fragment,null,n.createElement(b.xv,{color:"grey900",style:{marginTop:"8px"},size:"16px",weight:500},n.createElement(x.Z,{id:"scenes.verifyemail.description",defaultMessage:"We sent a verification email to <b>{email}</b>. Please click the link in the email to continue.",values:{email:e.email}})),n.createElement(b.rU,{onClick:()=>r(!0),size:"16px",style:{marginTop:"40px"},weight:500,"data-e2e":"changeVerifyEmail",color:"blue600"},n.createElement(x.Z,{id:"modals.simplebuy.verifyemail.change_email",defaultMessage:"Change Email Address"}))))),!t&&n.createElement(ta,null,n.createElement(b.xv,{color:"grey900",style:{display:"inline-block",marginRight:"2px"},size:"16px",weight:500},n.createElement(x.Z,{id:"modals.simplebuy.verifyemail.dint_get",defaultMessage:"Didn’t get the email?"})),n.createElement(b.rU,{onClick:()=>e.resendEmail(e.email),size:"16px",style:{marginTop:"40px"},weight:500,"data-e2e":"resendVerifyEmail",color:"blue600"},n.createElement(x.Z,{id:"modals.simplebuy.verifyemail.resend",defaultMessage:"Resend"}))))})),{SB_CHANGE_EMAIL_FORM:aa}=m.o4.wx.wd;class ia extends n.PureComponent{constructor(){super(...arguments),this.handleSubmit=()=>{const{formValues:e,identityVerificationActions:t,securityCenterActions:r,settingsActions:n}=this.props;e&&(t.updateEmail(e.email),r.resendVerifyEmail(e.email),n.setEmail(e.email))},this.onResendEmail=e=>{const{securityCenterActions:t}=this.props;t.resendVerifyEmail(e)}}componentDidMount(){this.props.buySellActions.fetchSDDEligibility()}componentDidUpdate(e){e.isEmailVerified!==this.props.isEmailVerified&&this.props.isEmailVerified&&this.props.cryptoCurrency&&this.props.fiatCurrency&&this.props.pair&&this.props.buySellActions.setStep({cryptoCurrency:this.props.cryptoCurrency,fiatCurrency:this.props.fiatCurrency,orderType:this.props.orderType,pair:this.props.pair,step:"ENTER_AMOUNT"})}render(){return this.props.data.cata({Failure:()=>null,Loading:()=>n.createElement(template_loading,null),NotAsked:()=>n.createElement(template_loading,null),Success:e=>n.createElement(la,Object.assign({},this.props,e,{resendEmail:this.onResendEmail,onSubmit:this.handleSubmit,initialValues:{email:e.email}}))})}}const oa=(0,l.connect)((e=>({cryptoCurrency:m.wl.wx.wd.getCryptoCurrency(e),data:VerifyEmail_selectors_getData(e),fiatCurrency:m.wl.wx.wd.getFiatCurrency(e),formValues:m.wl.cr.getFormValues(aa)(e),isEmailVerified:m.wl.vE.Xd.getEmailVerified(e).getOrElse(!1),orderType:m.wl.wx.wd.getOrderType(e),pair:m.wl.wx.wd.getSBPair(e)})),(e=>({buySellActions:(0,c.bindActionCreators)(m.Nw.wx.buySell,e),formActions:(0,c.bindActionCreators)(m.Nw.cr,e),identityVerificationActions:(0,c.bindActionCreators)(m.Nw.wx.identityVerification,e),profileActions:(0,c.bindActionCreators)(m.Nw.qz.N5,e),securityCenterActions:(0,c.bindActionCreators)(m.Nw.qz.cD,e),settingsActions:(0,c.bindActionCreators)(m.Nw.vE.Xd,e)})))(ia);class sa extends n.PureComponent{constructor(e){super(e),this.backToEnterAmount=()=>{this.props.pair&&this.props.buySellActions.setStep({cryptoCurrency:(0,u.getCoinFromPair)(this.props.pair.pair),fiatCurrency:(0,u.getFiatFromPair)(this.props.pair.pair),method:this.props.method,orderType:this.props.orderType,pair:this.props.pair,step:"ENTER_AMOUNT"})},this.handleClose=()=>{this.setState({show:!1});const e=(0,a.Z)((0,i.Z)("name","simpleBuy"),this.props.goals),t=(0,o.Z)("","id",e);(0,s.Z)(t)||this.props.deleteGoal(t),setTimeout((()=>{this.props.close()}),d.x9)},this.state={show:!1},this.backToEnterAmount=this.backToEnterAmount.bind(this)}componentDidMount(){this.setState({show:!0})}componentWillUnmount(){this.props.buySellActions.pollBalances(),this.props.buySellActions.destroyCheckout(),this.props.formActions.destroy("simpleBuyCheckout"),this.props.formActions.destroy("ccBillingAddress"),this.props.formActions.destroy("addCCForm")}render(){return this.props.data.cata({Failure:()=>null,Loading:()=>n.createElement(d.ZP,Object.assign({},this.props,{onClose:this.handleClose,isOpen:this.state.show,"data-e2e":"simpleBuyModal"}),n.createElement(template_loading,null)),NotAsked:()=>n.createElement(d.ZP,Object.assign({},this.props,{onClose:this.handleClose,isOpen:this.state.show,"data-e2e":"simpleBuyModal"}),n.createElement(template_loading,null)),Success:e=>{const{userData:t}=e,{kycState:r}=t,l="UNDER_REVIEW"===r||"PENDING"===r;return"REJECTED"===r||"EXPIRED"===r?n.createElement(d.ZP,Object.assign({},this.props,{onClose:this.handleClose,isOpen:this.state.show,"data-e2e":"simpleBuyModal"}),n.createElement(template_rejected,{handleClose:this.handleClose})):l?n.createElement(d.ZP,Object.assign({},this.props,{onClose:this.handleClose,isOpen:this.state.show,"data-e2e":"simpleBuyModal"}),n.createElement(template_pending,{handleClose:this.handleClose,handleRefresh:()=>{this.props.profileActions.fetchUserDataLoading(),this.props.profileActions.fetchUser()}})):n.createElement(d.ZP,Object.assign({},this.props,{onClose:this.handleClose,isOpen:this.state.show,"data-e2e":"simpleBuyModal"}),"ENTER_AMOUNT"===this.props.step&&n.createElement(d.FK,null,n.createElement(Pr,Object.assign({},this.props,{handleClose:this.handleClose}))),"CRYPTO_SELECTION"===this.props.step&&n.createElement(d.FK,null,n.createElement($t,Object.assign({},this.props,{handleClose:this.handleClose}))),"PAYMENT_METHODS"===this.props.step&&n.createElement(d.FK,null,n.createElement(tl,Object.assign({},this.props,{handleClose:this.handleClose}))),"LINKED_PAYMENT_ACCOUNTS"===this.props.step&&n.createElement(d.FK,null,n.createElement(xn,Object.assign({},this.props,{handleClose:this.handleClose}))),"ADD_CARD"===this.props.step&&n.createElement(d.FK,null,n.createElement(Y,Object.assign({},this.props,{handleClose:this.handleClose}))),"CC_BILLING_ADDRESS"===this.props.step&&n.createElement(d.FK,null,n.createElement(Be,Object.assign({},this.props,{handleClose:this.handleClose}))),"3DS_HANDLER"===this.props.step&&n.createElement(d.FK,null,n.createElement(Ll,Object.assign({},this.props,{handleClose:this.handleClose}))),"AUTHORIZE_PAYMENT"===this.props.step&&n.createElement(d.FK,null,n.createElement(ne,Object.assign({},this.props,{handleClose:this.handleClose}))),"CHECKOUT_CONFIRM"===this.props.step&&n.createElement(d.FK,null,n.createElement(at,Object.assign({},this.props,{handleClose:this.handleClose}))),"ORDER_SUMMARY"===this.props.step&&n.createElement(d.FK,null,n.createElement(Dn,Object.assign({},this.props,{handleClose:this.handleClose}))),"PREVIEW_SELL"===this.props.step&&n.createElement(d.FK,null,n.createElement(bl,Object.assign({},this.props,{handleClose:this.handleClose}))),"SELL_ORDER_SUMMARY"===this.props.step&&n.createElement(d.FK,null,n.createElement(Zl,Object.assign({},this.props,{handleClose:this.handleClose}))),"BANK_WIRE_DETAILS"===this.props.step&&n.createElement(d.FK,null,n.createElement(we,Object.assign({},this.props,{handleClose:this.handleClose}))),"OPEN_BANKING_CONNECT"===this.props.step&&n.createElement(d.FK,null,n.createElement(bn,Object.assign({},this.props,{handleClose:this.handleClose}))),"KYC_REQUIRED"===this.props.step&&n.createElement(d.FK,null,n.createElement(Qr,Object.assign({},this.props,{handleClose:this.handleClose}))),"VERIFY_EMAIL"===this.props.step&&n.createElement(d.FK,null,n.createElement(oa,Object.assign({},this.props,{handleClose:this.handleClose}))),"UPGRADE_TO_GOLD"===this.props.step&&n.createElement(d.FK,null,n.createElement(ql,Object.assign({},this.props,{handleClose:this.handleClose}))),"FREQUENCY"===this.props.step&&n.createElement(d.FK,null,n.createElement(zr,Object.assign({},this.props,{backToEnterAmount:this.backToEnterAmount,handleClose:this.handleClose}))),"LOADING"===this.props.step&&n.createElement(d.FK,null,n.createElement(g.gb,{text:g.Ue.GETTING_READY})))}})}}const ca=(0,l.connect)((e=>({addBank:m.wl.wx.wd.getAddBank(e),cardId:m.wl.wx.wd.getSBCardId(e),cryptoCurrency:m.wl.wx.wd.getCryptoCurrency(e),data:wl(e),displayBack:m.wl.wx.wd.getDisplayBack(e),fiatCurrency:m.wl.wx.wd.getFiatCurrency(e),goals:m.wl.P7.getGoals(e),isFirstLogin:m.wl.I8.getFirstLogin(e),method:m.wl.wx.wd.getSBPaymentMethod(e),order:m.wl.wx.wd.getSBOrder(e),orderType:m.wl.wx.wd.getOrderType(e),pair:m.wl.wx.wd.getSBPair(e),step:m.wl.wx.wd.getStep(e)})),(e=>({buySellActions:(0,c.bindActionCreators)(m.Nw.wx.buySell,e),deleteGoal:t=>e(m.Nw.P7.deleteGoal(t)),formActions:(0,c.bindActionCreators)(m.Nw.cr,e),preferenceActions:(0,c.bindActionCreators)(m.Nw.cb,e),profileActions:(0,c.bindActionCreators)(m.Nw.qz.N5,e),settingsActions:(0,c.bindActionCreators)(m.Nw.qz.Xd,e)}))),da=(0,c.compose)((0,y.Z)(p.tl.SIMPLE_BUY_MODAL,{transition:d.x9}),ca)(sa)},"./src/modals/SimpleBuy/model.tsx":(e,t,r)=>{r.d(t,{gG:()=>ErrorCodeMappings,_s:()=>BuyOrSell,wr:()=>getPaymentMethod,nA:()=>displayFiat,Ts:()=>getPaymentMethodDetails,TL:()=>getLockRuleMessaging});var n=r("../../node_modules/react/index.js"),l=r("./node_modules/react-intl/lib/src/components/message.js"),a=r("../blockchain-wallet-v4/src/exchange/utils.ts"),i=r("../blockchain-wallet-v4/src/types/index.ts"),o=r("../blockchain-info-components/src/index.js"),s=r("./src/data/components/exchange/services.ts"),c=r("./src/data/components/simpleBuy/model.ts");const ErrorCodeMappings=({code:e})=>{switch(e){case 41:return n.createElement(l.Z,{id:"error.below_min",defaultMessage:"Order below min size limit"});case 43:return n.createElement(l.Z,{id:"error.above_max",defaultMessage:"Order above max size limit"});case 45:return n.createElement(l.Z,{id:"error.exceeded_daily",defaultMessage:"You've reached your daily trading limit"});case 46:return n.createElement(l.Z,{id:"error.exceeded_weekly",defaultMessage:"You've reached your weekly trading limit"});case 47:return n.createElement(l.Z,{id:"error.exceeded_annual",defaultMessage:"You've reached your annual trading limit"});case 51:return n.createElement(l.Z,{id:"error.trading_disabled",defaultMessage:"Trading is temporarily disabled"});case 53:return n.createElement(l.Z,{id:"error.pending_limit",defaultMessage:"Pending orders limit reached"});case 93:return n.createElement(l.Z,{id:"error.invalid_address",defaultMessage:"Invalid crypto address"});case 94:return n.createElement(l.Z,{id:"error.invalid_crypto",defaultMessage:"Invalid crypto currency"});case 131:return n.createElement(l.Z,{id:"error.insufficient_balance",defaultMessage:"Insufficient balance"});case 149:return n.createElement(l.Z,{id:"error.invalid_fiat",defaultMessage:"Invalid fiat currency"});case 151:return n.createElement(l.Z,{id:"error.disabled_direction",defaultMessage:"Order direction is disabled"});case 152:return n.createElement(l.Z,{id:"error.pending_withdrawal",defaultMessage:"Pending withdrawal locks"});case 155:return n.createElement(l.Z,{id:"error.invalid_quote",defaultMessage:"Invalid or expired quote"});case 156:return n.createElement(l.Z,{id:"error.swap_eligibility",defaultMessage:"User not eligible for Swap"});case 157:return n.createElement(l.Z,{id:"error.negative_amount",defaultMessage:"Destination amount is negative"});default:return"string"==typeof e?n.createElement(o.xv,null,e):n.createElement(l.Z,{id:"copy.unkown_error",defaultMessage:"An unknown error has occurred."})}};const BuyOrSell=e=>{if(e.crypto){const t=window.coins[e.crypto];return"BUY"===e.orderType?n.createElement(l.Z,{id:"buttons.buy_coin",defaultMessage:"Buy {displayName}",values:{displayName:"Crypto"===e.crypto?"Crypto":t?t.coinfig.displaySymbol:e.crypto}}):n.createElement(l.Z,{id:"buttons.sell_coin",defaultMessage:"Sell {displayName}",values:{displayName:t?t.coinfig.displaySymbol:e.crypto}})}return"BUY"===e.orderType?n.createElement(l.Z,{id:"buttons.buy",defaultMessage:"Buy"}):n.createElement(l.Z,{id:"buttons.sell",defaultMessage:"Sell"})},getPaymentMethod=(e,t)=>{const r=(0,c.getBaseCurrency)(e),a=(0,c.getCounterCurrency)(e),o=(0,c.getOrderType)(e);switch(e.paymentType){case i.t8.PAYMENT_CARD:return n.createElement(l.Z,{id:"modals.simplebuy.confirm.payment_card",defaultMessage:"Credit Card"});case i.t8.FUNDS:return"BUY"===o?n.createElement(l.Z,{id:"modals.simplebuy.confirm.funds_wallet",defaultMessage:"{coin} Wallet",values:{coin:a}}):`${r} Trading Account`;case i.t8.BANK_TRANSFER:const e={accountNumber:"",bankAccountType:"",bankName:"Bank Transfer"};return`${(t&&t.details||e).bankName}`;default:return n.createElement(l.Z,{id:"modals.simplebuy.deposit.bank_transfer",defaultMessage:"Bank Transfer"})}},displayFiat=(e,t)=>{const r=(0,c.getCounterCurrency)(e);return(0,a.LE)({unit:r,value:(0,s.b)("FIAT",t)})},getPaymentMethodDetails=(e,t,r)=>{var n,l,a;switch(e.paymentType){case i.t8.PAYMENT_CARD:return`${(null===(n=null==r?void 0:r.card)||void 0===n?void 0:n.type)||""} ${(null===(l=null==r?void 0:r.card)||void 0===l?void 0:l.number)||""}`;case i.t8.BANK_TRANSFER:const e={accountNumber:"",bankAccountType:"",bankName:"Bank Transfer"},o=t&&t.details||e;return`${(null===(a=o.bankAccountType)||void 0===a?void 0:a.toLowerCase())||""} ${o.accountNumber||""}`;default:return null}},getLockRuleMessaging=(e,t,r)=>{switch(r){case i.t8.BANK_TRANSFER:case i.t8.PAYMENT_CARD:case i.t8.USER_CARD:return e?n.createElement(o.Qt,{inline:!0},n.createElement(o.xv,{size:"12px",weight:500,color:"grey900"},n.createElement(l.Z,{id:"modals.simplebuy.summary.complete_card_info_main",defaultMessage:"Your final amount might change due to market activity. For security purposes, a {days} day holding period will be applied to your funds. You can Sell or Swap during this time. We will notify you once the funds are available to be withdrawn.",values:{days:t}})),n.createElement(o.rU,{href:"/support/hc/en-us/articles/360051018131-Trading-Account-Withdrawal-Holds",size:"12px",rel:"noopener noreferrer",target:"_blank"},n.createElement(l.Z,{id:"modals.simplebuy.summary.learn_more",defaultMessage:"Learn more"}))):n.createElement(o.xv,{size:"12px",weight:500,color:"grey900"},n.createElement(l.Z,{id:"modals.simplebuy.confirm.activity_card11",defaultMessage:"Your final amount might change due to market activity. Your funds will be available to Sell, Swap or withdraw instantly."}));case i.t8.BANK_ACCOUNT:return n.createElement(n.Fragment,null);case i.t8.FUNDS:default:return n.createElement(o.xv,{size:"12px",weight:500,color:"grey900"},n.createElement(l.Z,{id:"modals.simplebuy.confirm.activity",defaultMessage:"Your final amount may change due to market activity."}))}}},"./src/modals/components/index.tsx":(e,t,r)=>{r.d(t,{Ue:()=>f,rD:()=>BankSearchIcon,mf:()=>Z,Vd:()=>S,mZ:()=>BankWaitIndicator,zK:()=>s,lh:()=>x,Hr:()=>Hr,wq:()=>IneligibleErrorMessage,Oi:()=>p,dC:()=>LinkViaDesktop,gb:()=>Loading,H:()=>LoadingUpdating,EA:()=>ModalNavWithBackArrow,YX:()=>ModalNavWithCloseIcon,Zu:()=>c,ty:()=>M,NA:()=>ScanWithPhone,$0:()=>d,FP:()=>SimpleBankRow});var n=r("../../node_modules/react/index.js"),l=r("./node_modules/react-intl/lib/src/components/message.js"),a=r("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),i=r("../blockchain-info-components/src/index.js"),o=r("./src/components/Flyout/index.tsx");const s=(0,a.ZP)(o.o9)`
  padding: 37px 0 34px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`,c=(0,a.ZP)(i.xv)`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  padding-left: 40px;
`,d=a.ZP.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  align-items: center;
  padding: 20px;
`,m=a.ZP.div`
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
`,u=a.ZP.div`
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
`,p=a.ZP.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`,y=a.ZP.img`
  margin-bottom: 32px;
  max-height: 60px;
`,ScanWithPhone=({children:e,logo:t,qrCode:r})=>n.createElement(d,null,t&&n.createElement(y,{src:t}),n.createElement(i.xv,{weight:600,size:"20px",color:"grey900"},e),n.createElement(i.xv,{weight:500,size:"14px",color:"grey600"},n.createElement(l.Z,{id:"modals.brokerage.use_phone_camera",defaultMessage:"Use your phone’s camera to scan the QR code."})),n.createElement(m,null,r?n.createElement("img",{alt:"Use your phone’s camera to scan the QR code.",src:r}):n.createElement(i.nZ,{width:"30px",height:"30px"}))),BankWaitIndicator=({qrCode:e})=>{const[t,r]=(0,n.useState)(0);return e&&setTimeout((()=>{r(t+1)}),3e4),n.createElement(u,{className:e?"active":""},n.createElement(i.nZ,{width:"10px",height:"10px",borderWidth:"3px"}),n.createElement(i.xv,{size:"14px",weight:500},0===t&&n.createElement(l.Z,{id:"modals.brokerage.waiting_to_hear",defaultMessage:"Waiting to hear from your bank"}),t>0&&n.createElement(l.Z,{id:"modals.brokerage.this_can_take_a_while",defaultMessage:"This can take several minutes, hold tight!"})))},g=(0,a.ZP)(i.zx)`
  margin: 20px 0 0;
  display: unset;
`,LinkViaDesktop=({authUrl:e,children:t,onClick:r=(()=>{})})=>e?n.createElement(d,null,n.createElement(i.xv,{weight:600,size:"20px",color:"grey900"},t),n.createElement(g,{"data-e2e":"yapilyBankLink",nature:"empty-blue",onClick:()=>{window.open(e,"_blank"),r()}},n.createElement(l.Z,{id:"modals.brokerage.continue_in_browser",defaultMessage:"Continue in browser"}))):null,h=(0,a.ZP)(i.xv)`
  width: 300px;
`,E=a.ZP.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`,x="BROKERAGE_INELIGIBLE",IneligibleErrorMessage=()=>n.createElement(h,{size:"16px",weight:400},n.createElement(l.Z,{id:"modals.brokerage.ineligible_error",defaultMessage:"You are not eligible to make deposits and withdrawals with this currency."}));var f;!function(e){e.GETTING_READY="Getting Ready...",e.LOADING="Loading...",e.PROCESSING="Processing..."}(f||(f={}));const Loading=({text:e})=>n.createElement(E,null,n.createElement(i.nZ,null),n.createElement(i.xv,{weight:600,color:"grey600",style:{marginTop:"24px"}},e===f.LOADING&&n.createElement(l.Z,{id:"copy.loading",defaultMessage:"Loading..."}),e===f.GETTING_READY&&n.createElement(l.Z,{id:"loader.message.gettingready",defaultMessage:"Getting Ready..."}),e===f.PROCESSING&&n.createElement(l.Z,{id:"modals.simplebuy.processing",defaultMessage:"Processing…"}))),b=a.ZP.div`
  transform: translate(47px, 35px);
  border: 5px solid white;
  border-radius: 50%;
  background-color: white;
`,w=(0,a.ZP)(i.xv)`
  font-weight: 600;
  font-size: 20px;
  margin-top: 22px;
`,C=(0,a.ZP)(i.xv)`
  font-size: 14px;
  font-weight: 500;
  margin: 5px 30px;
`,LoadingUpdating=()=>n.createElement(E,null,n.createElement(b,null,n.createElement(i.nZ,{borderWidth:"7px",height:"32px",width:"32px"})),n.createElement(i.Ee,{name:"blockchain-logo-circle",width:"106px"}),n.createElement(w,{color:"grey900"},n.createElement(l.Z,{defaultMessage:"Updating Your Wallet...",id:"modals.brokerage.updating_your_wallet"})),n.createElement(C,{color:"grey600"},n.createElement(l.Z,{defaultMessage:"This could take up to 30 seconds. Please do not go back or close the app.",id:"modals.brokerage.this_could_take"}))),v=a.ZP.div`
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

  ${e=>e.onClick&&a.iv`
      cursor: pointer;
      * {
        cursor: pointer;
      }
      &:hover {
        background-color: ${e=>e.theme.blue000};
      }
    `}
`,A=a.ZP.div`
  height: 30px;
  width: 30px;
  background: url('${e=>e.url}') 0 0 no-repeat;
  background-size: 30px;
  background-position: center;
`,S=a.ZP.div`
  position: relative;
`,Z=a.ZP.input`
  border: 1px solid ${e=>e.theme.grey000};
  font-size: 16px;
  width: 100%;
  border-width: 1px 0;
  padding: 20px 0 20px 40px;

  &:active,
  &:focus {
    outline: none;
  }
`,BankSearchIcon=()=>n.createElement(i.JO,{size:"20px",color:"grey600",name:"magnifier",style:{position:"absolute",right:"60px",top:"20px"}}),SimpleBankRow=e=>n.createElement(v,{onClick:e.onClick},n.createElement("div",null,n.createElement(A,{url:e.institution.media[0].source}),n.createElement(i.xv,{color:"grey900",style:{marginLeft:"20px"},weight:600},e.institution.name)),n.createElement(i.JO,{cursor:!0,name:"chevron-right",size:"20px",color:"grey600",role:"button",style:{marginRight:"24px"}})),ModalNavWithBackArrow=e=>n.createElement(c,{color:"grey800",size:"20px",weight:600},n.createElement(i.JO,{cursor:!0,name:"arrow-back",size:"20px",color:"grey600",role:"button",style:{marginRight:"24px"},onClick:()=>e.handleClose()}),e.children),ModalNavWithCloseIcon=e=>n.createElement(c,{color:"grey800",size:"20px",weight:600,style:{justifyContent:"space-between"}},e.children,n.createElement(i.JO,{cursor:!0,name:"close",size:"20px",color:"grey600",role:"button",style:{marginRight:"24px"},onClick:()=>e.handleClose()})),k=a.ZP.hr`
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
`,Hr=()=>n.createElement("div",{style:{width:"100%"}},n.createElement(i.xv,{weight:600,size:"16px",color:"grey900"},n.createElement(k,null))),M=((0,a.ZP)(i.xv)`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.spaceBetween?"space-between":"initial"};
  margin-bottom: ${e=>e.marginBottom?"16px":"0px"};
`,({amount:e,currency:t})=>n.createElement(l.Z,{id:"modals.send.over_your_limit",defaultMessage:"Over your limit! Send up to {currency}{amount}.",values:{amount:e,currency:t}}))}}]);