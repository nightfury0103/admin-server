"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[3550],{"./src/components/DataError/index.tsx":(e,t,n)=>{n.d(t,{Z:()=>components_DataError});var a,r=n("../../node_modules/react/index.js"),i=n("./node_modules/react-intl/lib/src/components/message.js"),s=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),o=n("../blockchain-info-components/src/index.js"),l=n("../../node_modules/ramda/es/prop.js"),c=n("../blockchain-wallet-v4/src/redux/payment/model.js"),d=n("./src/services/misc/index.js"),m=n("./src/modals/components/index.tsx"),u=n("./src/components/Flyout/model.tsx");var p=(0,s.ZP)(o.xv)(a||(a=function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  width: 80%;\n  margin-bottom: 20px;\n"])));const g=function ErrorHandler(e){var t=e.message,n=e.onClick,a=e["data-e2e"],s=(0,l.Z)("message",t)||(0,l.Z)("description",t),g=(0,d.K)(t);return g?r.createElement(r.Fragment,null,r.createElement(p,{size:"18px",weight:400},t),r.createElement(o.zx,{nature:"primary",onClick:function onClick(){return n(g)}},r.createElement(o.xv,{size:"18px",weight:400,color:"white"},r.createElement(i.Z,{id:"components.dataerror.archiveaddress",defaultMessage:"Archive Address"})))):s===m.lh?r.createElement(m.wq,null):s===c.B?r.createElement(o.xv,{size:"16px",weight:400},r.createElement(i.Z,{id:"components.dataerror.feesfetchfailure",defaultMessage:"There was a problem fetching fees. Please try again later."})):s===u.k7?r.createElement(o.xv,{size:"16px",weight:400,style:{width:"300px"}},r.createElement(i.Z,{id:"modals.recurringbuys.period_fetch_error",defaultMessage:"There was an error fetching recurring buy frequency options. Please try again."})):"string"==typeof s?r.createElement(o.xv,{size:"16px",color:"error",weight:500},s):r.createElement(o.Qt,{inline:!0},r.createElement(o.xv,{size:"18px",weight:400},r.createElement(i.Z,{id:"components.dataerror.body",defaultMessage:"Please "})),r.createElement(o.rU,{size:"18px","data-e2e":a?"".concat(a,"Link"):"",onClick:n},r.createElement(i.Z,{id:"components.dataerror.click",defaultMessage:"click here"})),r.createElement(o.xv,{size:"18px",weight:400},r.createElement(i.Z,{id:"components.dataerror.refresh",defaultMessage:" to refresh."})))},h=s.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`,E=s.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`,x=(0,s.ZP)(o.xv)`
  margin-top: 30px;
  margin-bottom: 20px;
`,components_DataError=e=>r.createElement(h,null,r.createElement(E,null,r.createElement(o.Ee,{name:"empty-search",width:"260px"}),r.createElement(x,{size:"18px",weight:500},r.createElement(i.Z,{id:"components.dataerror.header",defaultMessage:"Oops, something went wrong here!"})),r.createElement(g,Object.assign({},e))))},"./src/components/HorizontalMenu/index.tsx":(e,t,n)=>{n.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var a=n("../../node_modules/react/index.js"),r=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),i=n("./src/services/styles/index.ts");const s=r.ZP.div`
  box-sizing: border-box;
  background-color: ${e=>e.theme.white};
  border-bottom: 1px solid ${e=>e.border?e.theme.grey000:"transparent"};
  margin-bottom: ${e=>e.marginBottom};
  padding-bottom: 12px;
  width: 100%;

  ${i.BC.tabletL`
    margin-left: 0px;
  `}
`,o=r.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  ${i.BC.atLeastTabletL`
    flex-direction: row;
    justify-content: space-between;
  `}
`,__WEBPACK_DEFAULT_EXPORT__=({border:e=!0,children:t,marginBottom:n="12px"})=>a.createElement(s,{border:e,marginBottom:n},a.createElement(o,null,t))},"./src/modals/SimpleBuy/model.tsx":(e,t,n)=>{n.d(t,{gG:()=>ErrorCodeMappings,_s:()=>BuyOrSell,wr:()=>getPaymentMethod,nA:()=>displayFiat,Ts:()=>getPaymentMethodDetails,TL:()=>getLockRuleMessaging});var a=n("../../node_modules/react/index.js"),r=n("./node_modules/react-intl/lib/src/components/message.js"),i=n("../blockchain-wallet-v4/src/exchange/utils.ts"),s=n("../blockchain-wallet-v4/src/types/index.ts"),o=n("../blockchain-info-components/src/index.js"),l=n("./src/data/components/exchange/services.ts"),c=n("./src/data/components/simpleBuy/model.ts");const ErrorCodeMappings=({code:e})=>{switch(e){case 41:return a.createElement(r.Z,{id:"error.below_min",defaultMessage:"Order below min size limit"});case 43:return a.createElement(r.Z,{id:"error.above_max",defaultMessage:"Order above max size limit"});case 45:return a.createElement(r.Z,{id:"error.exceeded_daily",defaultMessage:"You've reached your daily trading limit"});case 46:return a.createElement(r.Z,{id:"error.exceeded_weekly",defaultMessage:"You've reached your weekly trading limit"});case 47:return a.createElement(r.Z,{id:"error.exceeded_annual",defaultMessage:"You've reached your annual trading limit"});case 51:return a.createElement(r.Z,{id:"error.trading_disabled",defaultMessage:"Trading is temporarily disabled"});case 53:return a.createElement(r.Z,{id:"error.pending_limit",defaultMessage:"Pending orders limit reached"});case 93:return a.createElement(r.Z,{id:"error.invalid_address",defaultMessage:"Invalid crypto address"});case 94:return a.createElement(r.Z,{id:"error.invalid_crypto",defaultMessage:"Invalid crypto currency"});case 131:return a.createElement(r.Z,{id:"error.insufficient_balance",defaultMessage:"Insufficient balance"});case 149:return a.createElement(r.Z,{id:"error.invalid_fiat",defaultMessage:"Invalid fiat currency"});case 151:return a.createElement(r.Z,{id:"error.disabled_direction",defaultMessage:"Order direction is disabled"});case 152:return a.createElement(r.Z,{id:"error.pending_withdrawal",defaultMessage:"Pending withdrawal locks"});case 155:return a.createElement(r.Z,{id:"error.invalid_quote",defaultMessage:"Invalid or expired quote"});case 156:return a.createElement(r.Z,{id:"error.swap_eligibility",defaultMessage:"User not eligible for Swap"});case 157:return a.createElement(r.Z,{id:"error.negative_amount",defaultMessage:"Destination amount is negative"});default:return"string"==typeof e?a.createElement(o.xv,null,e):a.createElement(r.Z,{id:"copy.unkown_error",defaultMessage:"An unknown error has occurred."})}};const BuyOrSell=e=>{if(e.crypto){const t=window.coins[e.crypto];return"BUY"===e.orderType?a.createElement(r.Z,{id:"buttons.buy_coin",defaultMessage:"Buy {displayName}",values:{displayName:"Crypto"===e.crypto?"Crypto":t?t.coinfig.displaySymbol:e.crypto}}):a.createElement(r.Z,{id:"buttons.sell_coin",defaultMessage:"Sell {displayName}",values:{displayName:t?t.coinfig.displaySymbol:e.crypto}})}return"BUY"===e.orderType?a.createElement(r.Z,{id:"buttons.buy",defaultMessage:"Buy"}):a.createElement(r.Z,{id:"buttons.sell",defaultMessage:"Sell"})},getPaymentMethod=(e,t)=>{const n=(0,c.getBaseCurrency)(e),i=(0,c.getCounterCurrency)(e),o=(0,c.getOrderType)(e);switch(e.paymentType){case s.t8.PAYMENT_CARD:return a.createElement(r.Z,{id:"modals.simplebuy.confirm.payment_card",defaultMessage:"Credit Card"});case s.t8.FUNDS:return"BUY"===o?a.createElement(r.Z,{id:"modals.simplebuy.confirm.funds_wallet",defaultMessage:"{coin} Wallet",values:{coin:i}}):`${n} Trading Account`;case s.t8.BANK_TRANSFER:const e={accountNumber:"",bankAccountType:"",bankName:"Bank Transfer"};return`${(t&&t.details||e).bankName}`;default:return a.createElement(r.Z,{id:"modals.simplebuy.deposit.bank_transfer",defaultMessage:"Bank Transfer"})}},displayFiat=(e,t)=>{const n=(0,c.getCounterCurrency)(e);return(0,i.LE)({unit:n,value:(0,l.b)("FIAT",t)})},getPaymentMethodDetails=(e,t,n)=>{var a,r,i;switch(e.paymentType){case s.t8.PAYMENT_CARD:return`${(null===(a=null==n?void 0:n.card)||void 0===a?void 0:a.type)||""} ${(null===(r=null==n?void 0:n.card)||void 0===r?void 0:r.number)||""}`;case s.t8.BANK_TRANSFER:const e={accountNumber:"",bankAccountType:"",bankName:"Bank Transfer"},o=t&&t.details||e;return`${(null===(i=o.bankAccountType)||void 0===i?void 0:i.toLowerCase())||""} ${o.accountNumber||""}`;default:return null}},getLockRuleMessaging=(e,t,n)=>{switch(n){case s.t8.BANK_TRANSFER:case s.t8.PAYMENT_CARD:case s.t8.USER_CARD:return e?a.createElement(o.Qt,{inline:!0},a.createElement(o.xv,{size:"12px",weight:500,color:"grey900"},a.createElement(r.Z,{id:"modals.simplebuy.summary.complete_card_info_main",defaultMessage:"Your final amount might change due to market activity. For security purposes, a {days} day holding period will be applied to your funds. You can Sell or Swap during this time. We will notify you once the funds are available to be withdrawn.",values:{days:t}})),a.createElement(o.rU,{href:"/support/hc/en-us/articles/360051018131-Trading-Account-Withdrawal-Holds",size:"12px",rel:"noopener noreferrer",target:"_blank"},a.createElement(r.Z,{id:"modals.simplebuy.summary.learn_more",defaultMessage:"Learn more"}))):a.createElement(o.xv,{size:"12px",weight:500,color:"grey900"},a.createElement(r.Z,{id:"modals.simplebuy.confirm.activity_card11",defaultMessage:"Your final amount might change due to market activity. Your funds will be available to Sell, Swap or withdraw instantly."}));case s.t8.BANK_ACCOUNT:return a.createElement(a.Fragment,null);case s.t8.FUNDS:default:return a.createElement(o.xv,{size:"12px",weight:500,color:"grey900"},a.createElement(r.Z,{id:"modals.simplebuy.confirm.activity",defaultMessage:"Your final amount may change due to market activity."}))}}},"./src/modals/components/index.tsx":(e,t,n)=>{n.d(t,{Ue:()=>f,rD:()=>BankSearchIcon,mf:()=>C,Vd:()=>Z,mZ:()=>BankWaitIndicator,zK:()=>l,lh:()=>y,Hr:()=>Hr,wq:()=>IneligibleErrorMessage,Oi:()=>p,dC:()=>LinkViaDesktop,gb:()=>Loading,H:()=>LoadingUpdating,EA:()=>ModalNavWithBackArrow,YX:()=>ModalNavWithCloseIcon,Zu:()=>c,ty:()=>_,NA:()=>ScanWithPhone,$0:()=>d,FP:()=>SimpleBankRow});var a=n("../../node_modules/react/index.js"),r=n("./node_modules/react-intl/lib/src/components/message.js"),i=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),s=n("../blockchain-info-components/src/index.js"),o=n("./src/components/Flyout/index.tsx");const l=(0,i.ZP)(o.o9)`
  padding: 37px 0 34px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`,c=(0,i.ZP)(s.xv)`
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
`,m=i.ZP.div`
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
`,u=i.ZP.div`
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
`,g=i.ZP.img`
  margin-bottom: 32px;
  max-height: 60px;
`,ScanWithPhone=({children:e,logo:t,qrCode:n})=>a.createElement(d,null,t&&a.createElement(g,{src:t}),a.createElement(s.xv,{weight:600,size:"20px",color:"grey900"},e),a.createElement(s.xv,{weight:500,size:"14px",color:"grey600"},a.createElement(r.Z,{id:"modals.brokerage.use_phone_camera",defaultMessage:"Use your phone’s camera to scan the QR code."})),a.createElement(m,null,n?a.createElement("img",{alt:"Use your phone’s camera to scan the QR code.",src:n}):a.createElement(s.nZ,{width:"30px",height:"30px"}))),BankWaitIndicator=({qrCode:e})=>{const[t,n]=(0,a.useState)(0);return e&&setTimeout((()=>{n(t+1)}),3e4),a.createElement(u,{className:e?"active":""},a.createElement(s.nZ,{width:"10px",height:"10px",borderWidth:"3px"}),a.createElement(s.xv,{size:"14px",weight:500},0===t&&a.createElement(r.Z,{id:"modals.brokerage.waiting_to_hear",defaultMessage:"Waiting to hear from your bank"}),t>0&&a.createElement(r.Z,{id:"modals.brokerage.this_can_take_a_while",defaultMessage:"This can take several minutes, hold tight!"})))},h=(0,i.ZP)(s.zx)`
  margin: 20px 0 0;
  display: unset;
`,LinkViaDesktop=({authUrl:e,children:t,onClick:n=(()=>{})})=>e?a.createElement(d,null,a.createElement(s.xv,{weight:600,size:"20px",color:"grey900"},t),a.createElement(h,{"data-e2e":"yapilyBankLink",nature:"empty-blue",onClick:()=>{window.open(e,"_blank"),n()}},a.createElement(r.Z,{id:"modals.brokerage.continue_in_browser",defaultMessage:"Continue in browser"}))):null,E=(0,i.ZP)(s.xv)`
  width: 300px;
`,x=i.ZP.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`,y="BROKERAGE_INELIGIBLE",IneligibleErrorMessage=()=>a.createElement(E,{size:"16px",weight:400},a.createElement(r.Z,{id:"modals.brokerage.ineligible_error",defaultMessage:"You are not eligible to make deposits and withdrawals with this currency."}));var f;!function(e){e.GETTING_READY="Getting Ready...",e.LOADING="Loading...",e.PROCESSING="Processing..."}(f||(f={}));const Loading=({text:e})=>a.createElement(x,null,a.createElement(s.nZ,null),a.createElement(s.xv,{weight:600,color:"grey600",style:{marginTop:"24px"}},e===f.LOADING&&a.createElement(r.Z,{id:"copy.loading",defaultMessage:"Loading..."}),e===f.GETTING_READY&&a.createElement(r.Z,{id:"loader.message.gettingready",defaultMessage:"Getting Ready..."}),e===f.PROCESSING&&a.createElement(r.Z,{id:"modals.simplebuy.processing",defaultMessage:"Processing…"}))),w=i.ZP.div`
  transform: translate(47px, 35px);
  border: 5px solid white;
  border-radius: 50%;
  background-color: white;
`,b=(0,i.ZP)(s.xv)`
  font-weight: 600;
  font-size: 20px;
  margin-top: 22px;
`,v=(0,i.ZP)(s.xv)`
  font-size: 14px;
  font-weight: 500;
  margin: 5px 30px;
`,LoadingUpdating=()=>a.createElement(x,null,a.createElement(w,null,a.createElement(s.nZ,{borderWidth:"7px",height:"32px",width:"32px"})),a.createElement(s.Ee,{name:"blockchain-logo-circle",width:"106px"}),a.createElement(b,{color:"grey900"},a.createElement(r.Z,{defaultMessage:"Updating Your Wallet...",id:"modals.brokerage.updating_your_wallet"})),a.createElement(v,{color:"grey600"},a.createElement(r.Z,{defaultMessage:"This could take up to 30 seconds. Please do not go back or close the app.",id:"modals.brokerage.this_could_take"}))),T=i.ZP.div`
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
`,Z=i.ZP.div`
  position: relative;
`,C=i.ZP.input`
  border: 1px solid ${e=>e.theme.grey000};
  font-size: 16px;
  width: 100%;
  border-width: 1px 0;
  padding: 20px 0 20px 40px;

  &:active,
  &:focus {
    outline: none;
  }
`,BankSearchIcon=()=>a.createElement(s.JO,{size:"20px",color:"grey600",name:"magnifier",style:{position:"absolute",right:"60px",top:"20px"}}),SimpleBankRow=e=>a.createElement(T,{onClick:e.onClick},a.createElement("div",null,a.createElement(A,{url:e.institution.media[0].source}),a.createElement(s.xv,{color:"grey900",style:{marginLeft:"20px"},weight:600},e.institution.name)),a.createElement(s.JO,{cursor:!0,name:"chevron-right",size:"20px",color:"grey600",role:"button",style:{marginRight:"24px"}})),ModalNavWithBackArrow=e=>a.createElement(c,{color:"grey800",size:"20px",weight:600},a.createElement(s.JO,{cursor:!0,name:"arrow-back",size:"20px",color:"grey600",role:"button",style:{marginRight:"24px"},onClick:()=>e.handleClose()}),e.children),ModalNavWithCloseIcon=e=>a.createElement(c,{color:"grey800",size:"20px",weight:600,style:{justifyContent:"space-between"}},e.children,a.createElement(s.JO,{cursor:!0,name:"close",size:"20px",color:"grey600",role:"button",style:{marginRight:"24px"},onClick:()=>e.handleClose()})),k=i.ZP.hr`
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
`,Hr=()=>a.createElement("div",{style:{width:"100%"}},a.createElement(s.xv,{weight:600,size:"16px",color:"grey900"},a.createElement(k,null))),_=((0,i.ZP)(s.xv)`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.spaceBetween?"space-between":"initial"};
  margin-bottom: ${e=>e.marginBottom?"16px":"0px"};
`,({amount:e,currency:t})=>a.createElement(r.Z,{id:"modals.send.over_your_limit",defaultMessage:"Over your limit! Send up to {currency}{amount}.",values:{amount:e,currency:t}}))},"./src/scenes/Transactions/index.tsx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>Lt});var a=n("../../node_modules/react/index.js"),r=n("./node_modules/react-intl/lib/src/components/message.js"),i=n("../../node_modules/react-redux/es/index.js"),s=n("../../node_modules/ramda/es/path.js"),o=n("../../node_modules/ramda/es/toLower.js"),l=n("../../node_modules/redux/es/redux.js"),c=n("../../node_modules/redux-form/es/reduxForm.js"),d=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),m=n("../blockchain-wallet-v4/src/index.ts"),u=n("../blockchain-wallet-v4/src/types/index.ts"),p=n("../blockchain-info-components/src/index.js"),g=n("./src/components/Box/index.tsx"),h=n("./src/components/EmptyResults/index.js"),E=n("./src/components/Layout/index.ts"),x=n("./src/components/LazyLoadContainer/index.js"),y=n("./src/data/index.ts"),f=n("./src/data/coins/selectors/index.ts"),w=n("./src/data/components/exchange/services.ts"),b=n("./src/data/types.ts"),v=n("./src/services/styles/index.ts");const T=d.ZP.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 50px auto 0;
  width: 640px;
  ${v.BC.tablet`
    flex-direction: column;
    width: 100%;
  `};
`,A=d.ZP.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  &:last-child {
    margin-top: 32px;
  }
`,Z=(0,d.ZP)(p.xv)`
  margin: 15px 0 20px 0;
  line-height: 1.4;
`,C=d.ZP.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
`,k=(0,d.ZP)(p.zx)`
  width: auto;
  height: 46px;
  padding: 0 16px;
  &:hover {
    background-color: white;
  }
`;class _ extends a.PureComponent{constructor(){super(...arguments),this.handleRequest=()=>this.props.modalActions.showModal("REQUEST_CRYPTO_MODAL",{origin:"EmptyFeed"})}render(){const{brokerageActions:e,buySellActions:t,coin:n}=this.props,{coinfig:i}=window.coins[n];return a.createElement(T,null,a.createElement(A,null,a.createElement(C,null,a.createElement("div",null,a.createElement(p.xv,{size:"20px",weight:600,color:"grey800"},a.createElement(r.Z,{id:"scenes.transaction.content.empty.transactions",defaultMessage:"Transactions"})),a.createElement(Z,{weight:400},a.createElement(r.Z,{id:"scenes.transaction.content.empty.cointxs",defaultMessage:"All your {coinName} transactions will show up here.",values:{coinName:i.name}}))))),a.createElement(C,{style:{paddingRight:"20px"}},a.createElement(k,{"data-e2e":"buyCoinFromTxList",nature:"empty-secondary",onClick:()=>{if("FIAT"===i.type.name)return"USD"===n?e.handleDepositFiatClick(n):t.handleDepositFiatClick({coin:n,origin:"TransactionList"});t.showModal({origin:"EmptyFeed"})}},"FIAT"===i.type.name?a.createElement(r.Z,{id:"scenes.transaction.content.empty.depositnow",defaultMessage:"Deposit {coin} Now",values:{coin:i.name}}):a.createElement(r.Z,{id:"scenes.transaction.content.empty.buycoinnow",defaultMessage:"Buy {coin} Now",values:{coin:i.name}}))))}}const D=(0,i.connect)(void 0,(e=>({brokerageActions:(0,l.bindActionCreators)(y.Nw.wx.brokerage,e),buySellActions:(0,l.bindActionCreators)(y.Nw.wx.buySell,e),modalActions:(0,l.bindActionCreators)(y.Nw.qk,e)})))(_);var M=n("../../node_modules/ramda/es/map.js"),P=n("../../node_modules/ramda/es/lift.js"),I=n("../blockchain-wallet-v4/src/utils/index.ts");const N=(0,I.createDeepEqualSelector)([y.wl.vE.Xd.getCurrency,y.wl.vE.aT.misc.getPriceIndexSeries,(e,t)=>y.wl.vE.aT.misc.getPriceChange(t.coin,u.tn.WEEK,e),(e,t)=>t.coin],((e,t,n,a)=>({currency:e.getOrElse("USD"),data:(0,P.Z)(((e,t)=>({coin:a,data:(0,M.Z)((e=>[1e3*e.timestamp,e.price]),e),priceChange:t})))(t,n)})));var S=n("../../node_modules/react-use-measure/dist/web.js"),F=n("../../node_modules/@visx/event/esm/localPoint.js"),O=n("../../node_modules/@visx/gradient/esm/gradients/LinearGradient.js"),B=n("../../node_modules/@visx/scale/esm/scales/time.js"),R=n("../../node_modules/@visx/scale/esm/scales/linear.js"),j=n("../../node_modules/@visx/shape/esm/shapes/AreaClosed.js"),L=n("../../node_modules/@visx/shape/esm/shapes/LinePath.js"),z=n("../../node_modules/@visx/shape/esm/shapes/Bar.js"),U=n("../../node_modules/@visx/shape/esm/shapes/Line.js"),$=n("../../node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),W=n("../../node_modules/@visx/tooltip/esm/tooltips/Tooltip.js"),Y=n("../../node_modules/@visx/tooltip/esm/tooltips/TooltipWithBounds.js"),G=n("../../node_modules/d3-array/src/bisector.js"),H=n("../../node_modules/d3-array/src/extent.js"),X=n("../../node_modules/d3-array/src/min.js"),q=n("../../node_modules/d3-array/src/max.js"),K=n("../../node_modules/d3-time-format/src/defaultLocale.js"),J=n("../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js"),V=n("../blockchain-wallet-v4/src/exchange/utils.ts");const Q=(0,K.i$)("%b %d, '%y"),getYValue=e=>new Date(e[0]),getXValue=e=>e[1],ee=(0,G.Z)((e=>new Date(getYValue(e)))).left,te=d.ZP.div`
  position: relative;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,template=({coin:e,currency:t,data:n})=>{const[r,i]=(0,S.Z)({polyfill:J.Z}),s=(0,p.Il)(e)||"#000",o=i.width||100,l=i.height||100,{hideTooltip:c,showTooltip:d,tooltipData:m,tooltipLeft:u=0,tooltipTop:g=0}=(0,$.Z)(),h=(0,a.useMemo)((()=>Object.assign(Object.assign({},W.j),{background:(0,p.Il)("grey900"),borderRadius:4,color:"white",fontFamily:'"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif '})),[]),E=(0,a.useMemo)((()=>(0,B.Z)({domain:(0,H.Z)(n,getYValue),range:[0,o]})),[o,n]),x=(0,a.useMemo)((()=>(0,R.Z)({domain:[(0,X.Z)(n,getXValue),(0,q.Z)(n,getXValue)||0],nice:!0,range:[l,0]})),[l,n]),y=(0,a.useCallback)((e=>{const{x:t}=(0,F.Z)(e)||{x:0},a=E.invert(t),r=ee(n,a,1),i=n[r-1],s=n[r];let o=i;s&&getYValue(s)&&(o=a.valueOf()-getYValue(i).valueOf()>getYValue(s).valueOf()-a.valueOf()?s:i),d({tooltipData:o,tooltipLeft:E(getYValue(o)),tooltipTop:x(getXValue(o))})}),[d,x,E,n]);return a.createElement(te,null,a.createElement("svg",{ref:r,width:"100%",height:"100%",viewBox:`0 0 ${o} ${l}`},a.createElement(O.Z,{id:s,fromOpacity:.5,toOpacity:0,from:s,to:"white"}),a.createElement(j.Z,{data:n,fill:`url(#${s})`,yScale:x,x:e=>{var t;return null!==(t=E(getYValue(e)))&&void 0!==t?t:0},y:e=>{var t;return null!==(t=x(getXValue(e)))&&void 0!==t?t:0},strokeWidth:0}),a.createElement(L.Z,{data:n,x:e=>{var t;return null!==(t=E(getYValue(e)))&&void 0!==t?t:0},y:e=>{var t;return null!==(t=x(getXValue(e)))&&void 0!==t?t:0},strokeWidth:2,stroke:s}),a.createElement(z.Z,{x:0,y:0,width:o,height:l,fill:"transparent",onTouchStart:y,onTouchMove:y,onMouseMove:y,onMouseLeave:()=>c()}),m?a.createElement("g",null,a.createElement(U.Z,{from:{x:u,y:0},to:{x:u,y:window.innerHeight},stroke:s,opacity:.2,strokeWidth:2,pointerEvents:"none",strokeDasharray:"7,5"}),a.createElement("circle",{cx:u,cy:g+1,r:4,fill:s,fillOpacity:.1,stroke:s,strokeOpacity:.1,strokeWidth:2,pointerEvents:"none"}),a.createElement("circle",{cx:u,cy:g,r:4,fill:s,stroke:"white",strokeWidth:2,pointerEvents:"none"})):null),m?a.createElement(Y.Z,{key:Math.random(),top:g,left:u,style:h},Q(getYValue(m)),a.createElement("br",null),a.createElement("br",null),(0,V.LE)({unit:t,value:getXValue(m)})):null)},ne=d.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
`,ae=(0,i.connect)(((e,t)=>N(e,t)),(e=>({priceChartActions:(0,l.bindActionCreators)(y.Nw.wx.priceChart,e)})))((({coin:e,currency:t,data:n,priceChartActions:r})=>((0,a.useEffect)((()=>{r.initialized(e,u.tn.WEEK)}),[e,r]),n.cata({Failure:e=>a.createElement(ne,null,a.createElement(p.xv,{size:"12px",weight:400,color:"red600"},e)),Loading:()=>a.createElement(a.Fragment,null),NotAsked:()=>a.createElement(a.Fragment,null),Success:e=>a.createElement(template,{currency:t,coin:e.coin,data:e.data})}))));var re=n("./src/scenes/Transactions/model.tsx");const ie=d.ZP.div`
  height: 120px;
  width: 320px;
  border-radius: 8px;
  padding: 16px;
  box-sizing: border-box;
  border: 1px solid ${e=>e.theme.grey100};
  display: flex;
  flex-direction: column;
`,se=d.ZP.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,Skeletons=()=>a.createElement(se,null,a.createElement(p.co,{height:"24px",width:"100px"}),a.createElement(p.co,{height:"16px",width:"100px"}),a.createElement(p.co,{height:"16px",width:"100px"})),template_loading=()=>a.createElement(ie,null,a.createElement(Skeletons,null)),oe=(0,I.createDeepEqualSelector)([(e,t)=>y.wl.vE.aT.misc.getPriceChange(t.coin,u.tn.WEEK,e),y.wl.vE.Xd.getCurrency],((e,t)=>(0,P.Z)(((e,t)=>({currency:t,priceChange:e})))(e,t))),le=d.ZP.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,ce=(0,d.ZP)(p.xv)`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: ${e=>e.theme.grey400};
`,de=(0,d.ZP)(p.xv)`
  font-weight: 500;
  font-size: 24px;
  line-height: 135%;
  color: ${e=>e.theme.grey800};
`;class me extends a.PureComponent{render(){const{data:e}=this.props,{coinfig:t}=window.coins[this.props.coin];return e.cata({Failure:e=>a.createElement(p.xv,null,"string"==typeof e?e:"Unknown Error"),Loading:()=>a.createElement(Skeletons,null),NotAsked:()=>a.createElement(Skeletons,null),Success:e=>{const{priceChange:n}=e;return a.createElement(le,null,a.createElement(ce,null,a.createElement(r.Z,{id:"scenes.transactions.performance.account.price",defaultMessage:"{account} Price",values:{account:t.displaySymbol}})),a.createElement(de,null,(0,V.LE)({unit:e.currency,value:n.currentPrice})),a.createElement(re.Y,Object.assign({},e)," ",a.createElement(r.Z,{id:"scenes.transactions.performance.prices.week",defaultMessage:"this week"})))}})}}const ue=(0,i.connect)(((e,t)=>({data:oe(e,t)})))(me),pe=d.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${e=>e.theme.grey100};
  box-sizing: border-box;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  height: 100%;

  ${v.BC.tablet`
    align-items: initial;
    flex-direction: column;
  `}
`,ge=d.ZP.div`
  margin-right: 16px;
  height: 100%;
`,he=d.ZP.div`
  width: 100%;
  margin: 16px 0;
`,CoinPerformance=({coin:e})=>a.createElement(pe,null,a.createElement(ge,null,a.createElement(ue,{coin:e})),a.createElement(he,null,a.createElement(ae,{coin:e})));var Ee=n("../../node_modules/ramda/es/curry.js"),xe=n("../../node_modules/ramda/es/propSatisfies.js"),ye=n("../../node_modules/ramda/es/toUpper.js"),fe=n("../../node_modules/ramda/es/compose.js"),we=n("../../node_modules/ramda/es/includes.js"),be=n("../../node_modules/ramda/es/anyPass.js"),ve=n("../../node_modules/ramda/es/allPass.js"),Te=n("../../node_modules/ramda/es/filter.js"),Ae=n("../../node_modules/ramda/es/isEmpty.js"),Ze=n("../../node_modules/ramda/es/propOr.js"),Ce=n("../../node_modules/ramda/es/pathOr.js"),ke=n("../../node_modules/ramda/es/all.js"),_e=n("../../node_modules/reselect/es/index.js");const{WALLET_TX_SEARCH:De}=y.o4.cr,Me=(0,Ee.Z)(((e,t,n,a)=>{const r=(0,Ee.Z)(((e,t)=>(0,xe.Z)((t=>""===e||t&&(0,ye.Z)(t)===(0,ye.Z)(e)||"DEPOSIT"===t&&"received"===e||"WITHDRAWAL"===t&&"sent"===e),"type",t))),i=(0,Ee.Z)(((e,t,n)=>(0,fe.Z)((0,we.Z)((0,ye.Z)(e||"")),ye.Z,String,(0,s.Z)(t))(n))),o=(0,be.Z)((0,M.Z)(i(t),[["id"],["description"],["from"],["to"],["hash"],["outputs",0,"address"],["inputs",0,"address"]])),l=(0,ve.Z)([r(e),o]);return(0,Te.Z)(l,a.filter((e=>{switch(n){case"CUSTODIAL":return e.attributes||e.extraAttributes;case"":return e;default:return e.blockHeight}})))})),coinSelectorMap=(e,t,n)=>y.wl.vE.aT.coins.getErc20Coins().includes(t)?e=>y.wl.vE.y0.eth.getErc20WalletTransactions(e,t):y.wl.vE.aT.coins.getCustodialCoins().includes(t)?e=>y.wl.vE.y0.coins.getWalletTransactions(e,t):y.wl.vE.y0[(0,o.Z)(t)]?y.wl.vE.y0[(0,o.Z)(t)].getWalletTransactions:e=>y.wl.vE.aT.fiat.getTransactions(t,e),Transactions_selectors_getData=(e,t,n)=>(0,_e.P1)([()=>y.wl.vE.Xd.getInvitations(e),y.wl.cr.getFormValues(De),coinSelectorMap(0,t),y.wl.vE.Xd.getCurrency,y.wl.wx.Nx.getRegisteredListByCoin(t),y.wl.vE.AW.getFeatureFlagRecurringBuys],((e,t,n,a,r,i)=>{const s=(0,Ze.Z)("","search",t),o=(0,Ze.Z)("","status",t),l=(0,Ce.Z)("",["source","type"],t),c=n&&!(0,Ae.Z)(n)?n.map((e=>(0,M.Z)(Me(o,s,l),e))):[];return{currency:a.getOrElse(""),hasTxResults:!(0,ke.Z)((e=>(0,Ae.Z)(e.data)))(c),isInvited:e.map((0,Ze.Z)(!1,"openBanking")).getOrElse({openBanking:!1}),isRecurringBuy:i.getOrElse(!1),isSearchEntered:s.length>0||""!==o,pages:c,recurringBuys:r,sourceType:l}}))(e);var Pe=n("../../node_modules/redux-form/es/Field.js"),Ie=n("./src/components/Form/index.ts"),Ne=n("./src/components/HorizontalMenu/index.tsx");const Se=(0,d.ZP)(p.hU)`
  border: 1px solid ${e=>e.theme.grey100};
  border-radius: 8px;
  color: ${e=>e.theme.blue600};
  margin-right: 12px;
`,Fe=d.ZP.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  ${v.BC.laptop`
    width: inherit;
    margin-top: 8px;
  `}
`,Oe=(0,d.ZP)(Pe.Z)`
  > div > span {
    top: 14px;
    font-size: 18px;
  }
`,TransactionFilters_template=({handleClickReporting:e})=>a.createElement(E.M5,null,a.createElement(Ne.Z,{marginBottom:"0px",border:!1},a.createElement(Pe.Z,{name:"status",statuses:["","sent","received","transferred"],component:Ie.J9}),a.createElement(Fe,null,a.createElement(p.G0,{id:"copy.on_chain_txs"},a.createElement(Se,{"data-e2e":"generateTxReport",height:"45px",name:"download",nature:"light",onClick:e,width:"120px"},a.createElement(r.Z,{id:"copy.download",defaultMessage:"Download"}))),a.createElement(Oe,{component:Ie.zC,"data-e2e":"transactionsMenuSearchBox",height:"45px",icon:"magnifier",name:"search",placeholder:"Search"}))));class Be extends a.PureComponent{constructor(){super(...arguments),this.handleClickReporting=()=>{const{coin:e,modalActions:t}=this.props;t.showModal("TRANSACTION_REPORT_MODAL",{coin:e,origin:"TransactionList"})}}render(){return a.createElement(TransactionFilters_template,{handleClickReporting:this.handleClickReporting})}}const Re=(0,i.connect)(null,(e=>({modalActions:(0,l.bindActionCreators)(y.Nw.qk,e)})))(Be);var je=n("./src/components/DataError/index.tsx"),Le=n("./src/scenes/Transactions/components/index.tsx"),ze=n("./src/scenes/Transactions/NonCustodialTx/Confirmations/index.tsx");const Ue=(0,d.ZP)(p.JO)`
  size: 18px;
  font-weight: 600;
`,getSymbolDisplayName=e=>e.tx.amount.symbol,getCoinDisplayName=e=>e.coin,IconTx=e=>{switch(e.tx.state){case"FINISHED":return a.createElement(Le.a1,{color:"green400"},a.createElement(Ue,{size:"20px",color:"USD",name:"plus"}));case"REFUNDED":case"COMPLETE":return e.coin in u.E2?a.createElement(Le.a1,{color:"green400"},a.createElement(Ue,{size:"20px",color:"USD",name:"DEPOSIT"===e.tx.type?"arrow-down":"arrow-up"})):a.createElement(Le.AB,{type:"DEPOSIT"===e.tx.type?"received":"sent",coin:e.coin});case"CLEARED":case"CREATED":case"FRAUD_REVIEW":case"MANUAL_REVIEW":case"PENDING":case"PENDING_DEPOSIT":return a.createElement(Le.AB,{type:"PENDING"});case"CANCELED":case"EXPIRED":case"FAILED":case"REJECTED":case"UNIDENTIFIED":return e.coin in u.E2?a.createElement(Le.a1,{color:"red500"},a.createElement(Ue,{color:"red600",size:"20px",name:"DEPOSIT"===e.tx.type?"arrow-down":"arrow-up"})):a.createElement(Le.AB,{type:"DEPOSIT"===e.tx.type?"received":"sent",coin:e.coin});default:return a.createElement(Le.a1,{color:"grey500"},a.createElement(Ue,{size:"20px",weight:500,color:"grey600",name:"timer"}))}},Status=e=>{var t;const{coinfig:n}=window.coins[e.tx.amount.symbol];switch(e.tx.state){case"COMPLETE":case"FINISHED":return"FIAT"!==n.type.name&&(null===(t=e.tx.extraAttributes)||void 0===t?void 0:t.confirmations)?a.createElement(ze.Z,{coin:e.tx.amount.symbol,hash:e.tx.extraAttributes.hash,confirmations:e.tx.extraAttributes.confirmations,isConfirmed:e.tx.extraAttributes.confirmations>=1}):a.createElement(r.Z,{id:"copy.complete",defaultMessage:"Complete"});case"REFUNDED":return a.createElement(r.Z,{id:"copy.refunded",defaultMessage:"Refunded"});case"FAILED":case"REJECTED":case"UNIDENTIFIED":return a.createElement(r.Z,{id:"copy.failed",defaultMessage:"Failed"});case"MANUAL_REVIEW":return a.createElement(r.Z,{id:"copy.in_review",defaultMessage:"In Review"});case"CANCELED":return a.createElement(r.Z,{id:"copy.canceled",defaultMessage:"Canceled"});case"EXPIRED":return a.createElement(r.Z,{id:"scenes.exchangehistory.list.orderstatus.expired",defaultMessage:"Expired"});default:return a.createElement(r.Z,{id:"copy.pending",defaultMessage:"Pending"})}},Timestamp=e=>a.createElement(p.xv,{size:"13px",weight:500,color:"grey600",style:{marginTop:"4px"},"data-e2e":"txTimeOrStatus"},(()=>{switch(e.tx.state){case"COMPLETE":case"FINISHED":case"REFUNDED":return a.createElement(Le.EK,{time:e.tx.insertedAt});default:return a.createElement(Status,Object.assign({},e))}})()),TransactionType=e=>{const{coinfig:t}=window.coins[e.tx.amount.symbol];if("FIAT"!==t.type.name)switch(e.tx.type){case"DEPOSIT":return a.createElement(r.Z,{id:"components.form.tabmenutransactionstatus.received",defaultMessage:"Received"});case"WITHDRAWAL":return a.createElement(r.Z,{id:"components.form.tabmenutransactionstatus.sent",defaultMessage:"Sent"});case"REFUNDED":return a.createElement(r.Z,{id:"copy.refunded",defaultMessage:"Refunded"});case"SELL":return a.createElement(r.Z,{id:"copy.sold",defaultMessage:"Sold"});default:return a.createElement(a.Fragment,null)}else switch(e.tx.type){case"DEPOSIT":return"REFUNDED"===e.tx.state?a.createElement(r.Z,{id:"copy.refunded",defaultMessage:"Refunded"}):a.createElement(r.Z,{id:"buttons.deposited",defaultMessage:"Deposited"});case"REFUNDED":return a.createElement(r.Z,{id:"copy.refunded",defaultMessage:"Refunded"});case"SELL":return a.createElement(r.Z,{id:"copy.sold",defaultMessage:"Sold"});case"WITHDRAWAL":return a.createElement(r.Z,{id:"buttons.withdrew",defaultMessage:"Withdrew"});default:return a.createElement(a.Fragment,null)}},Origin=e=>{var t,n,r,i;switch(e.tx.type){case"CHARGE":case"REFUNDED":case"DEPOSIT":return"FIAT"!==(null===(r=null===(n=null===(t=window.coins[e.tx.amount.symbol])||void 0===t?void 0:t.coinfig)||void 0===n?void 0:n.type)||void 0===r?void 0:r.name)?a.createElement(a.Fragment,null,getCoinDisplayName(e)," Account"):a.createElement(a.Fragment,null,"Bank Account");case"SELL":return"FROM_USERKEY"===(null===(i=e.tx.extraAttributes)||void 0===i?void 0:i.direction)?a.createElement(a.Fragment,null," ",getSymbolDisplayName(e)," Account"):a.createElement(a.Fragment,null,getSymbolDisplayName(e)," Trading Account");case"WITHDRAWAL":return a.createElement(a.Fragment,null,getSymbolDisplayName(e)," Account");default:return a.createElement(a.Fragment,null)}},Destination=e=>{var t,n,r;switch(e.tx.type){case"CHARGE":case"REFUNDED":case"DEPOSIT":case"SELL":return a.createElement(a.Fragment,null,getCoinDisplayName(e)," Account");case"WITHDRAWAL":return"FIAT"!==(null===(r=null===(n=null===(t=window.coins[e.tx.amount.symbol])||void 0===t?void 0:t.coinfig)||void 0===n?void 0:n.type)||void 0===r?void 0:r.name)?a.createElement(a.Fragment,null,getSymbolDisplayName(e)," Account"):a.createElement(a.Fragment,null,"Bank Account");default:return a.createElement(a.Fragment,null)}},CustodialTx=e=>{var t;const[n,i]=(0,a.useState)(!1),{tx:s}=e,{coinfig:o}=window.coins[s.amount.symbol];return a.createElement(Le._$,{onClick:()=>i(!n)},a.createElement(Le.xC,null,a.createElement(Le.X2,{width:"30%"},a.createElement(IconTx,Object.assign({},e)),a.createElement(Le.Xm,{"data-e2e":"orderStatusColumn"},a.createElement(p.xv,{size:"16px",color:"grey800",weight:600,"data-e2e":"txTypeText"},a.createElement(TransactionType,Object.assign({},e))," ",o.displaySymbol),a.createElement(Timestamp,Object.assign({},e)))),a.createElement(Le.JX,{width:"50%"},a.createElement(Le.sA,{from:a.createElement(a.Fragment,null,a.createElement(Origin,Object.assign({},e))),to:a.createElement(a.Fragment,null,a.createElement(Destination,Object.assign({},e)))})),a.createElement(Le.JX,{width:"20%",style:{textAlign:"right"},"data-e2e":"orderAmountColumn"},a.createElement(Le.kl,{coin:e.coin,"data-e2e":"orderCoinAmt"},"FIAT"!==o.type.name&&"SELL"!==s.type?s.amountMinor:"FIAT"!==o.type.name&&"SELL"===s.type?(0,w.b)("FIAT",s.amountMinor):s.amount.value),e.coin!==e.currency&&a.createElement(Le.Hx,{size:"14px",weight:500,coin:e.coin,color:"grey600","data-e2e":"orderFiatAmt"},"FIAT"!==o.type.name&&"SELL"!==s.type?s.amountMinor:"FIAT"!==o.type.name&&"SELL"===s.type?(0,w.b)("FIAT",s.amountMinor):s.amount.value))),n&&a.createElement(Le.XW,null,a.createElement(Le.Gk,null,a.createElement(Le.yD,null,a.createElement(r.Z,{defaultMessage:"Transaction ID",id:"modals.simplebuy.summary.txid"})),a.createElement(Le.qe,null,s.id),"SELL"===s.type&&a.createElement(a.Fragment,null,a.createElement(Le.yD,null,a.createElement(r.Z,{id:"modals.simplebuy.summary.rate",defaultMessage:"Exchange Rate"})),a.createElement(Le.qe,{"data-e2e":"sellRate"},(0,V.LE)({unit:s.amount.fiatSymbol||"USD",value:(null===(t=s.extraAttributes)||void 0===t?void 0:t.indicativePrice)||0})," ","/ ",s.amount.symbol))),a.createElement(Le.Gk,null),a.createElement(Le.Gk,null,a.createElement(Le.yD,null,a.createElement(r.Z,{defaultMessage:"Status",id:"components.txlistitem.status"})),a.createElement(Le.qe,null,a.createElement(Status,Object.assign({},e))),"SELL"===s.type&&a.createElement(a.Fragment,null," ",a.createElement(Le.yD,null,a.createElement(r.Z,{id:"copy.amount",defaultMessage:"Amount"})),a.createElement(Le.qe,{"data-e2e":"sbSelling"},(0,w.b)(s.amount.symbol,s.amount.inputMoney)," of"," ",s.amount.symbol)))))};var $e=n("./src/scenes/Transactions/NonCustodialTx/index.tsx"),We=n("./src/modals/SimpleBuy/model.tsx"),Ye=n("./src/data/components/simpleBuy/model.ts");const model_IconTx=e=>{const t=(0,Ye.getOrderType)(e.order),n={coin:(0,Ye.getCoinFromPair)(e.order.pair),subType:e.order.recurringBuyId?"recurringBuy":void 0,type:t};return a.createElement(Le.AB,Object.assign({},n))},getOrigin=(e,t)=>{var n;switch(e.order.paymentType){case u.t8.FUNDS:return`${e.order.inputCurrency} Account`;case u.t8.PAYMENT_CARD:case u.t8.USER_CARD:return"Credit/Debit Card";case u.t8.BANK_ACCOUNT:return"Bank Transfer";case u.t8.LINK_BANK:case u.t8.BANK_TRANSFER:const i=t.find((t=>t.id===e.order.paymentMethodId));if(i){const{details:e}=i;return`${e.bankName} ${(null===(n=e.bankAccountType)||void 0===n?void 0:n.toLowerCase())||""} ${e.accountNumber||""}`}return a.createElement(r.Z,{id:"copy.bank_account",defaultMessage:"Bank Account"});case void 0:return"Unknown Payment Type";default:return""}},model_Status=({order:e})=>{const t=(0,Ye.getOrderType)(e);switch(e.state){case"FINISHED":return a.createElement(r.Z,{id:"modals.simplebuy.transactionfeed.complete",defaultMessage:"{type} Completed",values:{type:"BUY"===t?"Buy":"Sell"}});case"PENDING_CONFIRMATION":case"PENDING_DEPOSIT":return a.createElement(r.Z,{id:"modals.simplebuy.transactionfeed.waitingondepo",defaultMessage:"Pending Deposit"});case"CANCELED":return a.createElement(r.Z,{id:"modals.simplebuy.transactionfeed.canceled",defaultMessage:"{type} Canceled",values:{type:"BUY"===t?"Buy":"Sell"}});case"FAILED":return e.failureReason===b._J.FAILED_INSUFFICIENT_FUNDS?a.createElement(r.Z,{id:"modals.simplebuy.transactionfeed.low_balance",defaultMessage:"Low Balance"}):a.createElement(r.Z,{id:"modals.simplebuy.transactionfeed.failed",defaultMessage:"{type} Failed",values:{type:"BUY"===t?"Buy":"Sell"}});case"EXPIRED":return a.createElement(r.Z,{id:"modals.simplebuy.transactionfeed.failed",defaultMessage:"{type} Failed",values:{type:"BUY"===t?"Buy":"Sell"}});default:return a.createElement(r.Z,{id:"modals.simplebuy.transactionfeed.unknown",defaultMessage:"Unknown Status"})}},model_Timestamp=e=>a.createElement(p.xv,{size:"13px",weight:500,color:"grey600",style:{marginTop:"4px"},"data-e2e":"txTimeOrStatus"},"FINISHED"===e.order.state?a.createElement(Le.EK,{time:e.order.insertedAt}):a.createElement(a.Fragment,null,a.createElement(model_Status,Object.assign({},e)),a.createElement("br",null),a.createElement(Le.EK,{time:e.order.updatedAt}))),SBOrderTx_selectors_getData=e=>{const t=y.wl.wx.zT.getBankTransferAccounts(e);return(0,P.Z)((e=>e))(t)},Ge=(0,d.ZP)(Le.JX)`
  display: flex;
  justify-content: flex-end;
`;class He extends a.PureComponent{constructor(e){super(e),this.handleToggle=()=>{this.setState((e=>({isToggled:!e.isToggled})))},this.showModal=e=>{var t,n;this.props.modalActions.showModal("SIMPLE_BUY_MODAL",{origin:"TransactionList"}),this.props.buySellActions.setStep({order:e,step:"PENDING_CONFIRMATION"===e.state?"CHECKOUT_CONFIRM":(null===(t=e.attributes)||void 0===t?void 0:t.authorisationUrl)?"OPEN_BANKING_CONNECT":"ORDER_SUMMARY"}),(null===(n=e.attributes)||void 0===n?void 0:n.authorisationUrl)&&this.props.buySellActions.confirmOrderPoll(e)},this.state={isToggled:!1}}render(){const{data:e,order:t}=this.props,n=e.getOrElse([]),i=(0,Ye.getCoinFromPair)(t.pair),s=i,o=(0,Ye.getOrderType)(t),l=(0,Ye.getBaseAmount)(t),c=(0,Ye.getBaseCurrency)(t),d=(0,Ye.getCounterAmount)(t),m=(0,Ye.getCounterCurrency)(t),u=(0,V.LE)({unit:m,value:d});return a.createElement(Le._$,{className:this.state.isToggled?"active":"","data-e2e":"transactionRow"},a.createElement(Le.xC,{onClick:this.handleToggle},a.createElement(Le.X2,{width:"30%","data-e2e":"orderStatusColumn"},a.createElement(model_IconTx,Object.assign({},this.props)),a.createElement(Le.Xm,null,a.createElement(p.xv,{size:"16px",color:"grey800",weight:600,"data-e2e":"txTypeText"},a.createElement(We._s,{crypto:i,orderType:o})),a.createElement(model_Timestamp,Object.assign({},this.props)))),a.createElement(Le.JX,{width:"50%","data-e2e":"orderToAndFrom"},a.createElement(Le.sA,{from:a.createElement(a.Fragment,null,getOrigin(this.props,n)),to:a.createElement(a.Fragment,null,s," Trading Account")})),"PENDING_CONFIRMATION"===t.state||"PENDING_DEPOSIT"===t.state?a.createElement(Ge,{width:"20%",style:{alignItems:"flex-end",textAlign:"right"},"data-e2e":"orderAmountColumn"},a.createElement(p.zx,{"data-e2e":"viewInfoButton",size:"14px",height:"35px",nature:"light",onClick:e=>(e.preventDefault(),e.stopPropagation(),this.showModal(t))},a.createElement(r.Z,{id:"modals.simplebuy.transactionlist.viewdetails",defaultMessage:"View Details"}))):a.createElement(Le.JX,{width:"20%","data-e2e":"orderAmountColumn"},a.createElement(Le.kl,{coin:i,"data-e2e":"orderCoinAmt"},"BUY"===o?t.outputQuantity:t.inputQuantity),"BUY"===o?a.createElement(Le.i9,null,a.createElement(p.xv,{color:"grey600","data-e2e":"orderFiatAmt",size:"14px",weight:500},u)):a.createElement(Le.Hx,{size:"14px",weight:500,color:"grey600",coin:i,"data-e2e":"orderFiatAmt"},t.inputQuantity))),this.state.isToggled&&a.createElement(Le.XW,null,a.createElement(Le.Gk,null,a.createElement(Le.yD,null,a.createElement(r.Z,{defaultMessage:"Transaction ID",id:"modals.simplebuy.summary.txid"})),a.createElement(Le.qe,null,t.id),a.createElement(Le.yD,null,a.createElement(r.Z,{id:"modals.simplebuy.summary.rate",defaultMessage:"Exchange Rate"})),a.createElement(Le.qe,{"data-e2e":"sbRate"},(0,V.LE)({unit:m,value:(0,w.b)("FIAT",t.price)})," ","/ ",c),"0"!==t.fee&&a.createElement(a.Fragment,null,a.createElement(Le.yD,null,a.createElement(r.Z,{id:"copy.fee",defaultMessage:"Fee"})),a.createElement(Le.qe,{"data-e2e":"sbFee"},(0,We.nA)(t,t.fee||"0")))),a.createElement(Le.Gk,null),a.createElement(Le.Gk,null,a.createElement(Le.yD,null,a.createElement(r.Z,{defaultMessage:"Status",id:"components.txlistitem.status"})),a.createElement(Le.qe,null,a.createElement(model_Status,Object.assign({},this.props))),a.createElement(Le.yD,null,a.createElement(r.Z,{id:"copy.amount",defaultMessage:"Amount"})),a.createElement(Le.qe,{"data-e2e":"sbPurchasing"},l," of ",c),a.createElement(Le.yD,null,a.createElement(r.Z,{id:"copy.total",defaultMessage:"Total"})),a.createElement(Le.qe,{"data-e2e":"sbSentTotal"},u))))}}const Xe=(0,i.connect)((e=>({data:SBOrderTx_selectors_getData(e)})),(e=>({buySellActions:(0,l.bindActionCreators)(y.Nw.wx.buySell,e),modalActions:(0,l.bindActionCreators)(y.Nw.qk,e)})))(He);var qe=n("./src/data/components/swap/model.ts");const getOutputCoinDisplayName=e=>(0,qe.M_)(e.order),getInputCoinDisplayName=e=>(0,qe.Np)(e.order),SwapOrderTx_model_IconTx=e=>a.createElement(Le.AB,{type:"SWAP",coin:e.coin}),getDestination=e=>{switch(e.order.kind.direction){case"TO_USERKEY":case"ON_CHAIN":return`${getOutputCoinDisplayName(e)} Private Key Wallet`;case"FROM_USERKEY":case"INTERNAL":return`${getOutputCoinDisplayName(e)} Trading Account`;default:return""}},model_getOrigin=e=>{switch(e.order.kind.direction){case"FROM_USERKEY":case"ON_CHAIN":return`${getInputCoinDisplayName(e)} Private Key Wallet`;case"TO_USERKEY":case"INTERNAL":return`${getInputCoinDisplayName(e)} Trading Account`;default:return""}},SwapOrderTx_model_Status=({order:e})=>{switch(e.state){case"FINISHED":return a.createElement(r.Z,{id:"modals.simplebuy.transactionfeed.complete",defaultMessage:"{type} Completed",values:{type:"Swap"}});case"PENDING_WITHDRAWAL":return a.createElement(a.Fragment,null,"Pending Withdrawal");case"PENDING_EXECUTION":return a.createElement(a.Fragment,null,"Pending Execution");case"PENDING_CONFIRMATION":case"PENDING_DEPOSIT":return a.createElement(r.Z,{id:"modals.simplebuy.transactionfeed.waitingondepo",defaultMessage:"Pending Deposit"});case"CANCELED":return a.createElement(r.Z,{id:"modals.simplebuy.transactionfeed.canceled",defaultMessage:"{type} Canceled",values:{type:"Swap"}});case"FAILED":case"EXPIRED":return a.createElement(r.Z,{id:"modals.simplebuy.transactionfeed.failed",defaultMessage:"{type} Failed",values:{type:"Swap"}});default:return a.createElement(a.Fragment,null,e.state)}},SwapOrderTx_model_Timestamp=e=>{const t=(0,a.useCallback)((()=>"FINISHED"===e.order.state?a.createElement(Le.EK,{time:e.order.insertedAt}):a.createElement(SwapOrderTx_model_Status,Object.assign({},e))),[e.order.state,e.order.insertedAt]);return a.createElement(p.xv,{size:"13px",weight:500,color:"grey600",style:{marginTop:"4px"},"data-e2e":"txTimeOrStatus"},t())},Ke=(0,d.ZP)(Le.JX)`
  display: flex;
  justify-content: flex-end;
`,Je=d.ZP.div`
  display: flex;
  justify-items: center;
  margin-top: 10px;
  & > :last-child {
    display: inline;
    margin-left: 5px;
  }
`;class Ve extends a.PureComponent{constructor(e){super(e),this.handleToggle=()=>{this.setState((e=>({isToggled:!e.isToggled})))},this.showModal=e=>{this.props.modalActions.showModal("SWAP_MODAL",{origin:"TransactionList"}),this.props.swapActions.setStep({options:{order:e},step:"ORDER_DETAILS"})},this.state={isToggled:!1}}render(){const{coin:e,domains:t,order:n}=this.props,i=(0,qe.Np)(n),s=(0,qe.M_)(n),{outputMoney:o}=this.props.order.priceFunnel;return a.createElement(Le._$,{className:this.state.isToggled?"active":"","data-e2e":"transactionRow"},a.createElement(Le.xC,{onClick:this.handleToggle},a.createElement(Le.X2,{width:"30%","data-e2e":"orderStatusColumn"},a.createElement(SwapOrderTx_model_IconTx,Object.assign({},this.props)),a.createElement(Le.Xm,null,a.createElement(p.xv,{size:"16px",color:"grey800",weight:600,"data-e2e":"txTypeText"},"Swap ",this.props.order.pair),a.createElement(SwapOrderTx_model_Timestamp,Object.assign({},this.props)))),a.createElement(Le.JX,{width:"50%","data-e2e":"orderToAndFrom"},a.createElement(Le.sA,{from:a.createElement(a.Fragment,null,model_getOrigin(this.props)),to:a.createElement(a.Fragment,null,getDestination(this.props))})),"PENDING_DEPOSIT"===n.state?a.createElement(Ke,{width:"20%",style:{alignItems:"flex-end",textAlign:"right"},"data-e2e":"orderAmountColumn"},a.createElement(p.zx,{"data-e2e":"viewInfoButton",size:"14px",height:"35px",nature:"light",onClick:e=>(e.preventDefault(),e.stopPropagation(),this.showModal(n))},a.createElement(r.Z,{id:"modals.simplebuy.transactionlist.viewdetails",defaultMessage:"View Details"}))):a.createElement(Le.JX,{width:"20%","data-e2e":"orderAmountColumn"},a.createElement(Le.kl,{coin:e,"data-e2e":"orderCoinAmt"},o),a.createElement(Le.Hx,{size:"14px",weight:500,color:"grey600",coin:e,"data-e2e":"orderFiatAmt"},o))),this.state.isToggled&&a.createElement(Le.XW,null,a.createElement(Le.Gk,null,a.createElement(Le.yD,null,a.createElement(r.Z,{defaultMessage:"Transaction ID",id:"modals.simplebuy.summary.txid"})),a.createElement(Le.qe,null,n.id),a.createElement(Le.yD,null,a.createElement(r.Z,{id:"modals.simplebuy.summary.rate",defaultMessage:"Exchange Rate"})),a.createElement(Le.qe,{"data-e2e":"swapRate"},"1 ",i," ="," ",(0,V.P2)({unit:{symbol:s},value:n.priceFunnel.price})),n.kind.depositTxHash&&a.createElement(Je,null,a.createElement(p.xv,{size:"14px",weight:500,color:"grey600"},a.createElement(r.Z,{id:"copy.view_outgoing_tx",defaultMessage:"View Outgoing Transaction"})),a.createElement(p.rU,{href:`${t.comRoot}/search/?search=/${n.kind.depositTxHash}`,target:"_blank","data-e2e":"swapOutgoingTransactionListItemExplorerLink"},a.createElement(p.JO,{name:"open-in-new-tab",color:"marketing-primary",cursor:!0,size:"14px"}))),n.kind.withdrawalTxHash&&a.createElement(Je,null,a.createElement(p.xv,{size:"14px",weight:500,color:"grey600"},a.createElement(r.Z,{id:"copy.view_incoming_tx",defaultMessage:"View Incoming Transaction"})),a.createElement(p.rU,{href:`${t.comRoot}/search/?search=/${n.kind.depositTxHash}`,target:"_blank","data-e2e":"swapIncomingTransactionListItemExplorerLink"},a.createElement(p.JO,{name:"open-in-new-tab",color:"marketing-primary",cursor:!0,size:"14px"})))),a.createElement(Le.Gk,null),a.createElement(Le.Gk,null,a.createElement(Le.yD,null,a.createElement(r.Z,{defaultMessage:"Status",id:"components.txlistitem.status"})),a.createElement(Le.qe,null,a.createElement(SwapOrderTx_model_Status,Object.assign({},this.props))),a.createElement(Le.yD,null,a.createElement(r.Z,{id:"copy.total",defaultMessage:"Total"})),a.createElement(Le.qe,{"data-e2e":"swapPurchasing"},(0,V.LE)({unit:this.props.order.fiatCurrency,value:(0,w.b)("FIAT",this.props.order.fiatValue)})))))}}const Qe=(0,i.connect)((e=>({domains:y.wl.vE.AW.getDomains(e).getOrElse({comRoot:"/root"})})),(e=>({modalActions:(0,l.bindActionCreators)(y.Nw.qk,e),swapActions:(0,l.bindActionCreators)(y.Nw.wx.swap,e)})))(Ve),et=(0,d.ZP)(p.co)`
  display: flex;
  flex-direction: column;
  align-items: start;
  box-sizing: border-box;
  padding-top: 25px;
`,tt=d.ZP.div`
  flex: 1;
  width: 100%;
  padding: 0 15px;
  & > :first-child {
    margin-bottom: 5px;
  }
`,TransactionList_template_loading=()=>a.createElement(et,{height:"450px",width:"100%",bgColor:"white"},a.createElement(tt,null,a.createElement(p.co,{width:"50%",height:"30px",bgColor:"grey000"}),a.createElement(p.co,{width:"calc(100% - 30px)",height:"80px",bgColor:"grey100"})),a.createElement(tt,null,a.createElement(p.co,{width:"50%",height:"30px",bgColor:"grey000"}),a.createElement(p.co,{width:"calc(100% - 30px)",height:"80px",bgColor:"grey100"})),a.createElement(tt,null,a.createElement(p.co,{width:"50%",height:"30px",bgColor:"grey000"}),a.createElement(p.co,{width:"calc(100% - 30px)",height:"80px",bgColor:"grey100"}))),nt=d.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 99%;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.grey000};
`;class at extends a.PureComponent{render(){const{coin:e,coinTicker:t,currency:n,data:r}=this.props;return r.cata({Failure:e=>a.createElement(je.Z,{onClick:this.props.onRefresh,message:e}),Loading:()=>a.createElement(TransactionList_template_loading,null),NotAsked:()=>a.createElement(TransactionList_template_loading,null),Success:r=>a.createElement(nt,null,r.map((r=>"hash"in r?a.createElement($e.Z,{key:r.hash,transaction:r,coin:e,coinTicker:t,currency:n}):"priceFunnel"in r?a.createElement(Qe,{key:r.id,order:r,coin:e}):"pair"in r?a.createElement(Xe,{key:r.id,order:r}):a.createElement(CustodialTx,Object.assign({key:r.id,tx:r},this.props)))))})}}const rt=at;var it=n("../../node_modules/react-router-dom/es/NavLink.js");const st=d.ZP.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 50px auto 0;
  width: 640px;
  ${v.BC.tablet`
    flex-direction: column;
    width: 100%;
  `};
`,ot=(0,d.ZP)(p.xv)`
  margin: 15px 0 20px 0;
  line-height: 1.4;
`,lt=d.ZP.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
`,template_interest=()=>a.createElement(st,null,a.createElement(lt,null,a.createElement("div",null,a.createElement(p.xv,{size:"20px",weight:600,color:"grey800"},a.createElement(r.Z,{id:"scenes.interest.interestaccount",defaultMessage:"Rewards Account"})),a.createElement(ot,{weight:400},a.createElement(r.Z,{id:"scenes.transaction.interest.view_txs",defaultMessage:"Visit the Earn Rewards page to view your transaction history."})))),a.createElement(lt,null,a.createElement(it.Z,{style:{textDecoration:"none"},to:"/rewards/history","data-e2e":"visitEarnInterestPage"},a.createElement(p.zx,{"data-e2e":"viewInterestTransaction",nature:"primary",height:"48px",size:"16px"},a.createElement(r.Z,{id:"copy.viewTransactions",defaultMessage:"View Transactions"})))));var ct=n("./node_modules/bignumber.js/bignumber.js"),dt=n.n(ct),mt=n("../../node_modules/ramda/es/flatten.js"),ut=n("./src/components/Display/CoinDisplay/index.tsx"),pt=n("./src/components/Display/FiatDisplay/index.tsx"),gt=n("./src/components/Form/SelectBox/index.js"),ht=n("./src/components/Balances/selectors.ts"),Et=n("./src/components/Form/SelectBoxBchAddresses/selectors.ts"),xt=n("./src/components/Form/SelectBoxBtcAddresses/selectors.ts"),yt=n("./src/components/Form/SelectBoxCoinAddresses/selectors.ts"),ft=n("./src/components/Form/SelectBoxEthAddresses/selectors.ts"),wt=n("./src/components/Form/SelectBoxXlmAddresses/selectors.ts");const WalletBalanceDropdown_selectors_getData=(e,t)=>{const{coin:n}=t;let a,r;switch(n){case"BTC":a=(0,xt.Y)(e,{excludeLockbox:!0,includeAll:!1,includeCustodial:!0,includeInterest:!0}),r=ht.Xu(e);break;case"BCH":a=(0,Et.Y)(e,{coin:"BCH",excludeLockbox:!0,includeCustodial:!0,includeInterest:!0}),r=ht.P4(e);break;case"ETH":a=(0,ft.w)(e,{excludeLockbox:!0,includeCustodial:!0,includeInterest:!0}),r=ht.k7(e);break;case"XLM":a=(0,wt.Y)(e,{excludeLockbox:!0,includeCustodial:!0,includeInterest:!0}),r=ht.RF(e);break;case"EUR":case"GBP":case"USD":a=m.Nt.Success({data:[]}),r=ht.Q7(n,e);break;default:switch(!0){case y.wl.vE.aT.eth.getErc20Coins().includes(n):a=(0,ft.E)(e,{coin:n,includeCustodial:!0,includeInterest:!0}),r=ht.uH(n)(e);break;case y.wl.vE.aT.coins.getCustodialCoins().includes(n):a=(0,yt.Y)(e,{coin:n,includeCustodial:!0,includeInterest:!0}),r=ht.zj(n)(e)}}const i=y.wl.vE.Xd.getCurrency(e),s=y.wl.wx.wd.getSBBalances(e);return(0,P.Z)(((e,t,a,r)=>({addressData:e,balanceData:t,currency:a,currencySymbol:m.ei.getSymbol(a),sbBalance:r[n]})))(a,r,i,s)},UserPortfolioPositionChange_selectors_getData=(e,t)=>{const n=y.wl.vE.aT.misc.getPriceChange(t.coin,u.tn.DAY,e);return(0,P.Z)((e=>({priceChange:e})))(n)};class bt extends a.PureComponent{constructor(){super(...arguments),this.state={}}componentDidMount(){this.props.miscActions.fetchPriceChange(this.props.coin,this.props.currency,u.tn.DAY,(0,w.b)(this.props.coin,this.props.coinBalance))}componentDidUpdate(e){e.coinBalance.isEqualTo(this.props.coinBalance)||this.props.miscActions.fetchPriceChange(this.props.coin,this.props.currency,u.tn.DAY,(0,w.b)(this.props.coin,this.props.coinBalance))}render(){return this.props.data.cata({Failure:()=>a.createElement(p.co,{height:"17px",width:"40px",bgColor:"red400"}),Loading:()=>a.createElement(p.co,{height:"17px",width:"40px"}),NotAsked:()=>a.createElement(p.co,{height:"17px",width:"40px"}),Success:e=>a.createElement(re.Y,Object.assign({isPortfolioPosition:!0,priceChange:Object.assign({},e.priceChange)},this.props)," ",a.createElement(r.Z,{id:"scenes.transactions.performance.prices.day",defaultMessage:"today"}))})}}const vt=(0,i.connect)(((e,t)=>({data:UserPortfolioPositionChange_selectors_getData(e,t)})),(e=>({miscActions:(0,l.bindActionCreators)(y.Nw.vE.aT.misc,e)})))(bt),Tt=d.ZP.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
`,At=d.ZP.div`
  display: flex;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
  height: ${e=>e.isItem?"auto":"100%"};
  padding: ${e=>e.isItem?"0px":"16px"};
  background-color: transparent;
`,Zt=d.ZP.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: ${e=>e.isItem?"16px":"0"};
  height: ${e=>e.isItem?"auto":"100%"};
  padding: ${e=>e.isItem?"12px 0":"0"};
  width: 100%;
  cursor: pointer;
  .bc__single-value {
    position: relative;
    top: 0;
    transform: initial;
  }
  input {
    height: 0;
    position: absolute;
  }
`,Ct=d.ZP.div`
  display: flex;
  margin-top: ${e=>e.isItem?"4px":"0px"};
`,kt=d.ZP.div`
  display: flex;
  font-size: 12px;
  color: ${e=>e.theme.grey400};
`,_t=(0,d.ZP)(gt.Z)`
  height: 100%;
  > div {
    height: 100%;
  }
  .bc__control {
    height: 100%;
    background-color: ${({theme:e})=>e.white};
    border: 1px solid ${({theme:e})=>e.grey100};
    box-sizing: border-box;

    & .bc__control--is-focused {
      border: 1px solid ${({theme:e})=>e.blue600};
    }
  }
  .bc__control .bc__value-container {
    padding: 0px;
    height: 100%;
  }
  .bc__menu {
    margin: 8px;
    border-radius: 8px;
  }
  .bc__group {
    &:not(:last-child) {
      ${Zt} {
        border-bottom: 1px solid ${e=>e.theme.grey000};
        box-sizing: border-box;
      }
    }
  }
  .bc__option {
    padding: 0px 12px;
  }
  .bc__indicators {
    align-items: flex-start;
    padding-top: 8px;
    padding-right: 8px;
  }
`;class Dt extends a.Component{constructor(e){super(e),this.isBtcTypeCoin=()=>"BTC"===this.props.coin||"BCH"===this.props.coin,this.hasBalanceOrAccounts=e=>{if(this.props.coin in u.Pc)return!1;const t=this.coinBalance(this.props.coin),n=(0,mt.Z)(e.map((e=>e.options)));return t>0||(!!(this.isBtcTypeCoin()&&n.length>4)||!this.isBtcTypeCoin()&&n.length>3)},this.handleRequest=()=>{const{coinfig:e}=window.coins[this.props.coin];this.props.modalActions.showModal("REQUEST_CRYPTO_MODAL",{coin:"FIAT"!==e.type.name&&this.props.coin,origin:"WalletBalanceDropdown"})},this.isTotalBalanceType=e=>"all"===e.value||!e.value,this.coinBalance=e=>this.isTotalBalanceType(e)?this.props.data.getOrElse({addressData:{data:[]},balanceData:0,currency:"USD",currencySymbol:"$",sbBalance:{available:"0",pending:"0",withdrawable:"0"}}).balanceData:e.value?void 0!==e.value.balance?e.value.balance:e.value.available:0,this.accountLabel=e=>{if(this.isTotalBalanceType(e)){const{coinfig:e}=window.coins[this.props.coin];return e.displaySymbol}return e.value?e.value.label||e.label:""},this.renderDisplaySubtext=(e,t)=>{var n,i;const s=this.coinBalance(e)||0,{coinfig:o}=window.coins[this.props.coin];if("FIAT"===o.type.name)return a.createElement(p.xv,{size:"14px",color:"grey600",weight:500},a.createElement(r.Z,{id:"copy.pending",defaultMessage:"Pending"}),": ",(0,V.LE)({unit:this.props.coin,value:(0,w.b)("FIAT",(null===(i=t.sbBalance)||void 0===i?void 0:i.pending)||"0")}));switch(!0){case("all"===e.value||"object"==typeof e.value&&"CUSTODIAL"===e.value.type)&&(()=>{var e,n;return void 0!==(null===(e=t.sbBalance)||void 0===e?void 0:e.pending)&&"0"!==(null===(n=t.sbBalance)||void 0===n?void 0:n.pending)})():return a.createElement(p.xv,{size:"14px",color:"grey600",weight:600},a.createElement(r.Z,{id:"copy.pending",defaultMessage:"Pending"}),": ",(0,V.P2)({unit:{symbol:this.props.coin},value:(0,w.b)(this.props.coin,(null===(n=t.sbBalance)||void 0===n?void 0:n.pending)||"0")}));case this.hasBalanceOrAccounts(e.selectProps.options):return a.createElement(vt,{coin:this.props.coin,currency:t.currency,coinBalance:new(dt())(s)});default:return a.createElement(p.xv,{size:"14px",weight:500,color:"blue600",onClick:this.handleRequest},a.createElement(r.Z,{id:"scenes.transactions.performance.request",defaultMessage:"Request {coinTicker} Now",values:{coinTicker:o.symbol}}))}},this.renderDisplay=(e,t)=>{const n=this.coinBalance(e)||0,i=this.accountLabel(e),s=this.props.data.getOrElse({addressData:{data:[]},balanceData:0,currency:"USD",currencySymbol:"$",sbBalance:{available:"0",pending:"0",withdrawable:"0"}});return a.createElement(At,null,a.createElement(Zt,null,t&&t.length&&t[1],a.createElement(p.xv,{weight:500,color:"grey400"},i," ",a.createElement(r.Z,{id:"copy.balance",defaultMessage:"Balance"})),a.createElement(Ct,null,a.createElement(pt.Z,{coin:this.props.coin,size:"24px",weight:500,cursor:"pointer",color:"grey800"},n)),this.renderDisplaySubtext(e,s)))},this.renderItem=e=>{const{coin:t}=this.props,n=this.coinBalance(e),i=this.accountLabel(e);return a.createElement(At,{isItem:!0},a.createElement(p.XP,{accountType:e.value.type,coin:t}),a.createElement(Zt,{isItem:!0},a.createElement(p.xv,{weight:500,color:"grey400",size:"14px"},i," ",this.isTotalBalanceType(e)&&a.createElement(r.Z,{id:"copy.balance",defaultMessage:"Balance"})),a.createElement(Ct,{isItem:!0},a.createElement(ut.Z,{coin:this.props.coin,size:"12px",weight:500,cursor:"pointer",color:"grey800"},n),a.createElement("div",{style:{width:"2px"}}),a.createElement(kt,null,"(",a.createElement(pt.Z,{coin:this.props.coin,size:"12px",weight:500,color:"grey400",cursor:"pointer"},n),")"))))},this.state={}}render(){return this.props.data.cata({Failure:e=>a.createElement(p.xv,null,"string"==typeof e?e:"Unknown Error"),Loading:()=>a.createElement(template_loading,null),NotAsked:()=>a.createElement(template_loading,null),Success:e=>{const{addressData:t}=e,n=t.data;return a.createElement(Tt,null,a.createElement(Pe.Z,{component:_t,elements:n,grouped:!0,hideIndicator:!this.hasBalanceOrAccounts(n),openMenuOnClick:this.hasBalanceOrAccounts(n),options:n,name:"source",searchEnabled:!1,templateDisplay:this.renderDisplay,templateItem:this.renderItem}))}})}}const Mt=(0,i.connect)(((e,t)=>({data:WalletBalanceDropdown_selectors_getData(e,t)})),(e=>({modalActions:(0,l.bindActionCreators)(y.Nw.qk,e)})))(Dt),Pt=d.ZP.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,It=d.ZP.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;

  > :first-child {
    margin-right: 14px;
  }
`,Nt=d.ZP.div`
  display: flex;
`,St=d.ZP.div`
  width: 100%;
`,Ft=d.ZP.div`
  width: 100%;
`,Ot=d.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  max-height: 120px;
  margin: 24px 0;

  & > :first-child {
    width: 320px;
    min-width: 320px;
    z-index: 2;
    margin-right: 30px;
  }

  ${v.BC.laptop`
    height: auto;
    max-height: initial;
    flex-direction: column;
    margin: 12px 0;

    & > :first-child {
      width: auto;
      margin-right: 0px;
    }

    & > :last-child {
      margin-top: 12px;
    }
  `}
`,Bt=(0,d.ZP)(p.xv)`
  margin-top: 15px;
  font-size: 16px;
  font-weight: 500;
  color: ${e=>e.theme.grey600};
`;class Rt extends a.PureComponent{constructor(){super(...arguments),this.handleRefresh=()=>{this.props.fetchData(),this.props.initTxs()},this.handleArchive=e=>{this.props.setAddressArchived&&this.props.setAddressArchived(e)}}componentDidMount(){this.props.initTxs(),this.props.miscActions.fetchPriceChange(this.props.coin,this.props.currency,u.tn.WEEK),this.props.brokerageActions.fetchBankTransferAccounts(),this.props.recurringBuyActions.fetchRegisteredList()}componentDidUpdate(e){(0,s.Z)(["location","pathname"],e)!==(0,s.Z)(["location","pathname"],this.props)&&this.props.initTxs()}render(){const{coin:e,currency:t,hasTxResults:n,isInvited:i,isRecurringBuy:s,isSearchEntered:o,loadMoreTxs:l,pages:c,recurringBuys:d,sourceType:y}=this.props,{coinfig:v}=window.coins[e];return a.createElement(E.wX,null,a.createElement(x.Z,{onLazyLoad:l},a.createElement(St,null,a.createElement(Pt,null,a.createElement(It,null,a.createElement(p.JO,{size:"36px",color:v.symbol,name:v.symbol}),a.createElement(p.xv,{color:"grey800",size:"32px",weight:600},v.name)),a.createElement(Nt,null,"FIAT"!==v.type.name&&a.createElement(a.Fragment,null,a.createElement(p.zx,{nature:"primary","data-e2e":"sellCrypto",width:"100px",style:{marginRight:"8px"},onClick:()=>{this.props.buySellActions.showModal({cryptoCurrency:e,orderType:u.mr.SELL,origin:"TransactionList"})}},a.createElement(r.Z,{id:"buttons.sell",defaultMessage:"Sell"})),a.createElement(p.zx,{nature:"primary","data-e2e":"buyCrypto",width:"100px",onClick:()=>{this.props.buySellActions.showModal({cryptoCurrency:e,orderType:u.mr.BUY,origin:"TransactionList"})}},a.createElement(r.Z,{id:"buttons.buy",defaultMessage:"Buy"}))),"FIAT"===v.type.name&&a.createElement(a.Fragment,null,"FIAT"===window.coins[e].coinfig.type.name&&a.createElement(p.zx,{nature:"primary","data-e2e":"depositFiat",style:{minWidth:"auto"},onClick:()=>{this.props.brokerageActions&&this.props.buySellActions&&(i||"USD"===e?this.props.brokerageActions.handleDepositFiatClick(e):this.props.buySellActions.handleDepositFiatClick({coin:e,origin:"TransactionList"}))}},a.createElement(r.Z,{id:"buttons.deposit",defaultMessage:"Deposit"})),"FIAT"===window.coins[e].coinfig.type.name&&a.createElement(p.zx,{nature:"primary","data-e2e":"withdrawFiat",style:{marginLeft:"8px",minWidth:"auto"},onClick:()=>{this.props.brokerageActions&&this.props.brokerageActions.handleWithdrawClick(e)}},a.createElement(r.Z,{id:"buttons.withdraw",defaultMessage:"Withdraw"}))))),a.createElement(Ft,null,a.createElement(Bt,null,(0,f.CP)(e))),a.createElement(Ot,null,a.createElement(Mt,{coin:e}),"FIAT"!==v.type.name&&a.createElement(CoinPerformance,{coin:e}))),a.createElement("div",{style:{display:"flex",flexFlow:"row wrap",justifyContent:"space-between"}},s&&d.map((e=>a.createElement(g.Ec,{key:e.id,action:"BUY",amount:`${m.ei.getSymbol(e.inputCurrency)}${(0,w.b)(e.inputCurrency,e.inputValue)}`,coin:e.destinationCurrency,nextPayment:e.nextPayment,onClick:()=>{this.props.recurringBuyActions.setActive(e),this.props.recurringBuyActions.showModal({origin:b.sq.COIN_PAGE}),this.props.recurringBuyActions.setStep({origin:b.sq.COIN_PAGE,step:b.HX.DETAILS})},period:e.period})))),(n||o)&&"FIAT"!==v.type.name&&a.createElement(Re,{coin:e}),!n&&o&&a.createElement(E.wX,{centerContent:!0},a.createElement(h.Z,null)),!n&&!o&&a.createElement(E.wX,{centerContent:!0},a.createElement(D,{coin:e})),n&&y&&"INTEREST"===y&&a.createElement(template_interest,null),n&&(!y||"INTEREST"!==y)&&c.map((n=>a.createElement(rt,{coin:e,coinTicker:v.symbol,currency:t,data:n,key:v.symbol,onArchive:this.handleArchive,onLoadMore:l,onRefresh:this.handleRefresh,sourceType:y})))))}}const jt=(0,i.connect)(((e,t)=>Transactions_selectors_getData(e,t.coin,t.coinfig)),((e,t)=>{const{coin:n,coinfig:a}=t,r={brokerageActions:(0,l.bindActionCreators)(y.Nw.wx.brokerage,e),buySellActions:(0,l.bindActionCreators)(y.Nw.wx.buySell,e),miscActions:(0,l.bindActionCreators)(y.Nw.vE.aT.misc,e),recurringBuyActions:(0,l.bindActionCreators)(y.Nw.wx.recurringBuy,e),withdrawActions:(0,l.bindActionCreators)(y.Nw.wx.withdraw,e)};return y.wl.vE.aT.coins.getErc20Coins().includes(n)?Object.assign(Object.assign({},r),{fetchData:()=>e(y.Nw.vE.aT.eth.fetchErc20Data(n)),initTxs:()=>e(y.Nw.wx.ethTransactions.initializedErc20(n)),loadMoreTxs:()=>e(y.Nw.wx.ethTransactions.loadMoreErc20(n))}):y.wl.vE.aT.coins.getCustodialCoins().includes(n)?Object.assign(Object.assign({},r),{fetchData:()=>{},initTxs:()=>e(y.Nw.wx.coinTransactions.initialized(n)),loadMoreTxs:()=>e(y.Nw.wx.coinTransactions.loadMore(n))}):"FIAT"===a.type.name?Object.assign(Object.assign({},r),{fetchData:()=>{},initTxs:()=>e(y.Nw.wx.fiatTransactions.initialized(n)),loadMoreTxs:()=>e(y.Nw.wx.fiatTransactions.loadMore(n))}):Object.assign(Object.assign({},r),{fetchData:()=>e(y.Nw.vE.aT[(0,o.Z)(n)].fetchData()),initTxs:()=>e(y.Nw.wx[`${(0,o.Z)(n)}Transactions`].initialized()),loadMoreTxs:()=>e(y.Nw.wx[`${(0,o.Z)(n)}Transactions`].loadMore()),setAddressArchived:t=>e(y.Nw.vE.gU.setAddressArchived(t,!0))})})),Lt=(0,l.compose)((0,c.Z)({form:y.o4.cr.WALLET_TX_SEARCH,initialValues:{source:"all"}}),jt)(Rt)},"./src/scenes/Transactions/model.tsx":(e,t,n)=>{n.d(t,{Y:()=>PriceChange});var a=n("../../node_modules/react/index.js"),r=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),i=n("../blockchain-wallet-v4/src/index.ts"),s=n("../blockchain-wallet-v4/src/exchange/utils.ts"),o=n("../blockchain-info-components/src/index.js");const l=(0,r.ZP)(o.xv)`
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
  color: ${e=>e.theme.grey600};
`,c=r.ZP.span`
  font-weight: 600;
  color: ${e=>"down"===e.change.movement?e.theme.red600:"up"===e.change.movement?e.theme.green600:e.theme.grey600};
`,PriceChange=({children:e,currency:t,isPortfolioPosition:n,priceChange:r})=>{const o=n?r.positionChange:r.overallChange;let d;const m=(0,s.M)(o.diff);return d="down"===o.movement?`-${i.ei.getSymbol(t)}${m.substring(1)}`:`${i.ei.getSymbol(t)}${m}`,a.createElement(l,null,a.createElement(c,{change:o},d," (",(0,s.M)(o.percentChange),")%"),e)}}}]);