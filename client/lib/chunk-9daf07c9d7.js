"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[6824],{"./src/components/Box/index.tsx":(e,t,n)=>{n.d(t,{xu:()=>x,W2:()=>g,Ec:()=>Box_SavedRecurringBuy});var i=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),r=n("./src/services/styles/index.ts"),a=n("../../node_modules/react/index.js"),l=n("./node_modules/react-intl/lib/src/components/message.js"),o=n("../../node_modules/polished/dist/polished.esm.js"),s=n("../blockchain-info-components/src/index.js"),c=n("./src/components/Flyout/model.tsx");const d=(0,i.ZP)(s.xu)`
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
`,m=i.ZP.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`,u=i.ZP.div`
  display: flex;
  justify-content: flex-end;
`,p=i.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  min-width: 40px;
  border-radius: 20px;
  margin-right: 20px;
  background-color: ${e=>(0,o.$n)(.35,e.theme[e.coin])};
`,Box_SavedRecurringBuy=({action:e,amount:t,coin:n,nextPayment:i,onClick:r,period:o})=>a.createElement(d,{disabled:!1,isMethod:!1,isMobile:!1},a.createElement(m,null,a.createElement(p,{coin:n},a.createElement(s.JO,{cursor:!0,"data-e2e":`${n}savedRecurringBuy`,name:"sync-regular",size:"20px",color:n,role:"button"})),a.createElement(s.Qt,null,a.createElement(s.xv,{weight:600,size:"16px",color:"grey900",style:{marginBottom:"0"}},t," ",(0,c.O7)(o)),a.createElement(s.xv,{weight:500,size:"14px",color:"grey600",style:{marginBottom:"0"}},(0,c.Nd)(e,i)))),a.createElement(u,null,a.createElement(s.zx,{"data-e2e":`${n}savedRecurringBuyViewDetails`,nature:"empty-blue",onClick:r},a.createElement(l.Z,{id:"copy.view_details",defaultMessage:"View Details"})))),g=i.ZP.div`
  display: flex;
  > div {
    margin-right: 24px;
    &:last-child {
      margin-right: 0px;
    }
  }
  ${r.BC.laptop`
    flex-direction: column;
    align-items: start;
    > div {
      margin-right: 0;
      margin-bottom: 12px;
    }
  `};
`,x=i.ZP.div`
  position: relative;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.grey000};
  width: 280px;
`},"./src/components/Layout/index.ts":(e,t,n)=>{n.d(t,{M5:()=>o,wX:()=>s,bn:()=>c,wW:()=>d,Qc:()=>m,US:()=>u,bz:()=>p,Pj:()=>g,l0:()=>x});var i=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),r=n("../blockchain-info-components/src/index.js"),a=n("./src/services/styles/index.ts"),l=n("./src/components/Box/index.tsx");const o=i.ZP.div`
  background-color: ${e=>e.theme.white};
  position: sticky;
  width: 100%;
  z-index: 1;
  top: 0;
`,s=i.ZP.div`
  width: 100%;
  height: 100%;

  ${e=>e.centerContent&&"\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  "}
`,c=i.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  min-width: 40px;
  background-color: ${e=>e.theme.blue000};
  border-radius: 40px;
`,d=i.ZP.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  > :first-child {
    margin-right: 16px;
  }
  ${a.BC.mobile`
    flex-direction: column;
  `}
`,m=i.ZP.div`
  display: flex;
  align-items: center;
  > :first-child {
    margin-right: 16px;
  }
`,u=(0,i.ZP)(r.xv)`
  font-size: 32px;
  color: ${e=>e.theme.grey800};
  font-weight: 600;
  margin-right: 14px;
`,p=(0,i.ZP)(r.xv)`
  font-size: 16px;
  color: ${e=>e.theme.grey600};
  font-weight: 500;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`,g=(0,i.ZP)(l.xu)`
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
`,x=i.ZP.div`
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
`},"./src/modals/Settings/TradingLimits/model.ts":(e,t,n)=>{var i,r;n.d(t,{iY:()=>i,cq:()=>r,Iy:()=>a}),function(e){e[e.NONE=0]="NONE",e[e.SILVER=1]="SILVER",e[e.GOLD=2]="GOLD",e[e.SILVER_PLUS=3]="SILVER_PLUS"}(i||(i={})),function(e){e.BUY_WITH_A_CARD="buy_with_a_card",e.CASH_ACCOUNT="cash_account",e.DEPOSIT_AND_WITHDRAWAL="deposit_and_withdrawal",e.EARN_INTEREST="earn_interest",e.RECEIVE="receive",e.SEND="send",e.SWAP="swap"}(r||(r={}));const a={[i.NONE]:{[r.SEND]:!0,[r.RECEIVE]:!0,[r.SWAP]:!1,[r.CASH_ACCOUNT]:!1,[r.BUY_WITH_A_CARD]:!1,[r.DEPOSIT_AND_WITHDRAWAL]:!1,[r.EARN_INTEREST]:!1},[i.SILVER]:{[r.SEND]:!0,[r.RECEIVE]:!0,[r.SWAP]:!0,[r.CASH_ACCOUNT]:!1,[r.BUY_WITH_A_CARD]:!1,[r.DEPOSIT_AND_WITHDRAWAL]:!1,[r.EARN_INTEREST]:!1},[i.GOLD]:{[r.SEND]:!0,[r.RECEIVE]:!0,[r.SWAP]:!0,[r.CASH_ACCOUNT]:!0,[r.BUY_WITH_A_CARD]:!0,[r.DEPOSIT_AND_WITHDRAWAL]:!0,[r.EARN_INTEREST]:!0},[i.SILVER_PLUS]:{[r.SEND]:!0,[r.RECEIVE]:!0,[r.SWAP]:!0,[r.CASH_ACCOUNT]:!1,[r.BUY_WITH_A_CARD]:!0,[r.DEPOSIT_AND_WITHDRAWAL]:!1,[r.EARN_INTEREST]:!1}}},"./src/modals/SimpleBuy/model.tsx":(e,t,n)=>{n.d(t,{gG:()=>ErrorCodeMappings,_s:()=>BuyOrSell,wr:()=>getPaymentMethod,nA:()=>displayFiat,Ts:()=>getPaymentMethodDetails,TL:()=>getLockRuleMessaging});var i=n("../../node_modules/react/index.js"),r=n("./node_modules/react-intl/lib/src/components/message.js"),a=n("../blockchain-wallet-v4/src/exchange/utils.ts"),l=n("../blockchain-wallet-v4/src/types/index.ts"),o=n("../blockchain-info-components/src/index.js"),s=n("./src/data/components/exchange/services.ts"),c=n("./src/data/components/simpleBuy/model.ts");const ErrorCodeMappings=({code:e})=>{switch(e){case 41:return i.createElement(r.Z,{id:"error.below_min",defaultMessage:"Order below min size limit"});case 43:return i.createElement(r.Z,{id:"error.above_max",defaultMessage:"Order above max size limit"});case 45:return i.createElement(r.Z,{id:"error.exceeded_daily",defaultMessage:"You've reached your daily trading limit"});case 46:return i.createElement(r.Z,{id:"error.exceeded_weekly",defaultMessage:"You've reached your weekly trading limit"});case 47:return i.createElement(r.Z,{id:"error.exceeded_annual",defaultMessage:"You've reached your annual trading limit"});case 51:return i.createElement(r.Z,{id:"error.trading_disabled",defaultMessage:"Trading is temporarily disabled"});case 53:return i.createElement(r.Z,{id:"error.pending_limit",defaultMessage:"Pending orders limit reached"});case 93:return i.createElement(r.Z,{id:"error.invalid_address",defaultMessage:"Invalid crypto address"});case 94:return i.createElement(r.Z,{id:"error.invalid_crypto",defaultMessage:"Invalid crypto currency"});case 131:return i.createElement(r.Z,{id:"error.insufficient_balance",defaultMessage:"Insufficient balance"});case 149:return i.createElement(r.Z,{id:"error.invalid_fiat",defaultMessage:"Invalid fiat currency"});case 151:return i.createElement(r.Z,{id:"error.disabled_direction",defaultMessage:"Order direction is disabled"});case 152:return i.createElement(r.Z,{id:"error.pending_withdrawal",defaultMessage:"Pending withdrawal locks"});case 155:return i.createElement(r.Z,{id:"error.invalid_quote",defaultMessage:"Invalid or expired quote"});case 156:return i.createElement(r.Z,{id:"error.swap_eligibility",defaultMessage:"User not eligible for Swap"});case 157:return i.createElement(r.Z,{id:"error.negative_amount",defaultMessage:"Destination amount is negative"});default:return"string"==typeof e?i.createElement(o.xv,null,e):i.createElement(r.Z,{id:"copy.unkown_error",defaultMessage:"An unknown error has occurred."})}};const BuyOrSell=e=>{if(e.crypto){const t=window.coins[e.crypto];return"BUY"===e.orderType?i.createElement(r.Z,{id:"buttons.buy_coin",defaultMessage:"Buy {displayName}",values:{displayName:"Crypto"===e.crypto?"Crypto":t?t.coinfig.displaySymbol:e.crypto}}):i.createElement(r.Z,{id:"buttons.sell_coin",defaultMessage:"Sell {displayName}",values:{displayName:t?t.coinfig.displaySymbol:e.crypto}})}return"BUY"===e.orderType?i.createElement(r.Z,{id:"buttons.buy",defaultMessage:"Buy"}):i.createElement(r.Z,{id:"buttons.sell",defaultMessage:"Sell"})},getPaymentMethod=(e,t)=>{const n=(0,c.getBaseCurrency)(e),a=(0,c.getCounterCurrency)(e),o=(0,c.getOrderType)(e);switch(e.paymentType){case l.t8.PAYMENT_CARD:return i.createElement(r.Z,{id:"modals.simplebuy.confirm.payment_card",defaultMessage:"Credit Card"});case l.t8.FUNDS:return"BUY"===o?i.createElement(r.Z,{id:"modals.simplebuy.confirm.funds_wallet",defaultMessage:"{coin} Wallet",values:{coin:a}}):`${n} Trading Account`;case l.t8.BANK_TRANSFER:const e={accountNumber:"",bankAccountType:"",bankName:"Bank Transfer"};return`${(t&&t.details||e).bankName}`;default:return i.createElement(r.Z,{id:"modals.simplebuy.deposit.bank_transfer",defaultMessage:"Bank Transfer"})}},displayFiat=(e,t)=>{const n=(0,c.getCounterCurrency)(e);return(0,a.LE)({unit:n,value:(0,s.b)("FIAT",t)})},getPaymentMethodDetails=(e,t,n)=>{var i,r,a;switch(e.paymentType){case l.t8.PAYMENT_CARD:return`${(null===(i=null==n?void 0:n.card)||void 0===i?void 0:i.type)||""} ${(null===(r=null==n?void 0:n.card)||void 0===r?void 0:r.number)||""}`;case l.t8.BANK_TRANSFER:const e={accountNumber:"",bankAccountType:"",bankName:"Bank Transfer"},o=t&&t.details||e;return`${(null===(a=o.bankAccountType)||void 0===a?void 0:a.toLowerCase())||""} ${o.accountNumber||""}`;default:return null}},getLockRuleMessaging=(e,t,n)=>{switch(n){case l.t8.BANK_TRANSFER:case l.t8.PAYMENT_CARD:case l.t8.USER_CARD:return e?i.createElement(o.Qt,{inline:!0},i.createElement(o.xv,{size:"12px",weight:500,color:"grey900"},i.createElement(r.Z,{id:"modals.simplebuy.summary.complete_card_info_main",defaultMessage:"Your final amount might change due to market activity. For security purposes, a {days} day holding period will be applied to your funds. You can Sell or Swap during this time. We will notify you once the funds are available to be withdrawn.",values:{days:t}})),i.createElement(o.rU,{href:"/support/hc/en-us/articles/360051018131-Trading-Account-Withdrawal-Holds",size:"12px",rel:"noopener noreferrer",target:"_blank"},i.createElement(r.Z,{id:"modals.simplebuy.summary.learn_more",defaultMessage:"Learn more"}))):i.createElement(o.xv,{size:"12px",weight:500,color:"grey900"},i.createElement(r.Z,{id:"modals.simplebuy.confirm.activity_card11",defaultMessage:"Your final amount might change due to market activity. Your funds will be available to Sell, Swap or withdraw instantly."}));case l.t8.BANK_ACCOUNT:return i.createElement(i.Fragment,null);case l.t8.FUNDS:default:return i.createElement(o.xv,{size:"12px",weight:500,color:"grey900"},i.createElement(r.Z,{id:"modals.simplebuy.confirm.activity",defaultMessage:"Your final amount may change due to market activity."}))}}},"./src/scenes/Home/index.tsx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>scenes_Home});var i=n("../../node_modules/react/index.js"),r=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),a=n("./src/components/Layout/index.ts"),l=n("./src/services/styles/index.ts"),o=n("../../node_modules/react-redux/es/index.js"),s=n("../../node_modules/redux/es/redux.js"),c=n("./src/data/index.ts"),d=n("./node_modules/react-intl/lib/src/components/message.js"),m=n("../blockchain-info-components/src/index.js");const u=r.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${e=>e.theme.grey000};
  border-radius: 8px;
  padding: 20px;

  ${l.BC.atLeastLaptop`
    height: 80px;
    padding: 0 20px;
  `}
  ${l.BC.mobile`
    padding: 12px;
    flex-direction: column;
  `}
`,p=r.ZP.div`
  display: flex;
  align-items: center;
`,g=r.ZP.div`
  display: flex;
  flex-direction: column;

  & > div:first-child {
    margin-bottom: 4px;
  }
`,x=r.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  min-width: 40px;
  border-radius: 20px;
  margin-right: 20px;
  background-color: ${e=>e.theme.blue100};
`,y=(0,r.ZP)(m.xv)`
  display: flex;
  align-items: center;
  ${l.BC.mobile`
    font-size: 12px;
  `}
  ${l.BC.tablet`
    font-size: 14px;
  `}
`,h=(0,r.ZP)(m.zx)`
  height: 48px;
  ${l.BC.mobile`
    font-size: 14px;
    margin-top: 16px;
    padding: 10px;
  `}
`;class b extends i.PureComponent{constructor(){super(...arguments),this.showModal=()=>{this.props.buySellActions.showModal({origin:"WelcomeModal"}),this.props.buySellActions.setStep({fiatCurrency:this.props.fiatCurrency,step:"CRYPTO_SELECTION"})}}render(){return i.createElement(u,null,i.createElement(p,null,i.createElement(x,null,i.createElement(m.JO,{name:"plus",color:"blue600",size:"30px"})),i.createElement(g,null,i.createElement(m.xv,{size:"20px",weight:600,color:"grey800"},i.createElement(d.Z,{id:"modals.simplebuy.buy_crypto_now",defaultMessage:"Buy Crypto Now"})),i.createElement(y,{size:"16px",color:"grey600",weight:500},i.createElement(d.Z,{id:"scenes.home.banner.buy_crypto_sdd_description",defaultMessage:"Select the crypto you want to buy, verify your identity and buy instantly"})))),i.createElement(h,{onClick:()=>this.showModal(),jumbo:!0,"data-e2e":"openSDDFlow",nature:"primary"},i.createElement(d.Z,{id:"modals.simplebuy.confirm.buynow",defaultMessage:"Buy Now"})))}}const f=(0,o.connect)((e=>({fiatCurrency:c.wl.wx.wd.getFiatCurrency(e)})),(e=>({buySellActions:(0,s.bindActionCreators)(c.Nw.wx.buySell,e),modalActions:(0,s.bindActionCreators)(c.Nw.qk,e)})))(b),E=r.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid ${e=>e.theme.grey000};
  border-radius: 8px;
  overflow: hidden;
  padding: 20px;

  ${l.BC.atLeastLaptop`
    height: 80px;
    padding: 0 20px;
  `}
`,w=r.ZP.div`
  display: flex;
  align-items: center;
`,v=(0,r.ZP)(m.xv)`
  margin-right: 5px;
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.black};
`,C=(0,r.ZP)(m.xv)`
  margin-top: 2px;
  font-weight: 500;
  font-size: 16px;
  color: ${e=>e.theme.black};
  display: none;

  ${l.BC.atLeastMobile`
    display: block;
  `}
`,Z=r.ZP.div`
  display: flex;
  align-items: center;
`,P=(0,r.ZP)(m.zx)`
  margin-right: 12px;

  & div {
    color: ${e=>e.theme.white};
    font-weight: 600;
    font-size: 14px;
  }
`,A=r.ZP.div`
  cursor: pointer;
`,_=(0,o.connect)((e=>({showBanner:c.wl.vE.AW.getCeloEurRewards(e).getOrElse(!1)})),(e=>({cacheActions:(0,s.bindActionCreators)(c.Nw.Fs,e)})))((({cacheActions:e,showBanner:t})=>{if(!t)return null;const n="CEUR";if(!window.coins.CEUR)return null;const{coinfig:r}=window.coins.CEUR,{displaySymbol:a}=r;return i.createElement(E,null,i.createElement(w,null,i.createElement(m.JO,{name:n,size:"36px",style:{marginRight:"16px"}}),i.createElement("div",null,i.createElement(v,null,i.createElement(d.Z,{id:"copy.earn_up_to_ceur",defaultMessage:"Earn up to 4% in {displaySymbol} Rewards",values:{displaySymbol:a}})),i.createElement(C,null,i.createElement(d.Z,{id:"layouts.wallet.header.announcements.ceur.description1",defaultMessage:"Buy {displaySymbol} with no fees and earn up to 4% in annual rewards, paid monthly.",values:{displaySymbol:a}})))),i.createElement(Z,null,i.createElement(P,{"data-e2e":"ceurLearnMore",nature:"primary",small:!0,style:{borderRadius:"4px"}},i.createElement(m.rU,{href:"http://www.block-test.ddns.net/why/celo",target:"_blank",rel:"noopener noreferrer"},i.createElement(m.xv,null,i.createElement(d.Z,{id:"copy.learn_more",defaultMessage:"Learn More"})))),i.createElement(A,{"data-e2e":"newCoinCloseButton",onClick:()=>e.announcementDismissed("ceur-rewards")},i.createElement(m.JO,{size:"20px",color:"grey400",name:"close-circle"}))))}));var S=n("./src/modals/Settings/TradingLimits/model.ts"),k=n("../../node_modules/ramda/es/anyPass.js"),N=n("../../node_modules/ramda/es/equals.js");const{EXPIRED:T,GENERAL:B}=c.o4.N5.DOC_RESUBMISSION_REASONS,getNewCoinAnnouncement=e=>`${e}-homepage`,getCoinRenameAnnouncement=e=>`${e}-rename`,showBanner=(e,t,n)=>e&&(!n||!n[t]||n[t]&&!n[t].dismissed),getData=e=>{var t,n,i,r;const a=c.wl.Fs.getLastAnnouncementState(e),l=c.wl.qz.N5.getKycDocResubmissionStatus(e).map((0,k.Z)([(0,N.Z)(B),(0,N.Z)(T)])).getOrElse(!1),o=c.wl.wx.wd.getSBOrders(e).getOrElse([]).find((e=>"PENDING_CONFIRMATION"===e.state||"PENDING_DEPOSIT"===e.state)),s="NONE"!==c.wl.qz.N5.getUserActivationState(e).getOrElse(""),d="NONE"===c.wl.qz.N5.getUserKYCState(e).getOrElse(""),m=c.wl.I8.getFirstLogin(e),u=c.wl.qz.N5.getUserData(e).getOrElse({tiers:{current:0}}),{KYC_STATES:p}=c.o4.N5,g=u.kycState===p.PENDING||u.kycState===p.UNDER_REVIEW||u.kycState===p.VERIFIED,x=c.wl.wx.wd.getUserSddEligibleTier(e).getOrElse(1),y=c.wl.wx.wd.getLimits(e).getOrElse({annual:{available:"0"}}),h=c.wl.vE.AW.getFeatureFlagRecurringBuys(e).getOrElse(!1),b=c.wl.vE.AW.getNewCoinListing(e).getOrElse(""),f=getNewCoinAnnouncement(b),E=showBanner(!!b,f,a),w=c.wl.vE.AW.getCoinRename(e).getOrElse(""),v=getCoinRenameAnnouncement(w),C=showBanner(!!w,v,a),Z=c.wl.vE.AW.getCeloEurRewards(e).getOrElse(!1),P=showBanner(Z,"ceur-rewards",a)&&u&&(null===(t=u.tiers)||void 0===t?void 0:t.current)>=1&&u.address&&u.address.country&&-1===["GB","US","IT"].indexOf(u.address.country),A=3===x,_=c.wl.vE.aT.coins.getIsServicePriceDown(e);let M=null;return M=l&&!g?"resubmit":_?"servicePriceUnavailable":o&&!A?"sbOrder":P?"celoEURRewards":d&&s&&!m&&!A?"finishKyc":(null===(n=null==u?void 0:u.tiers)||void 0===n?void 0:n.current)<2||d?"buyCrypto":((null===(i=null==u?void 0:u.tiers)||void 0===i?void 0:i.current)===S.iY.SILVER||(null===(r=null==u?void 0:u.tiers)||void 0===r?void 0:r.current)===S.iY.SILVER_PLUS)&&(null==y?void 0:y.max)&&Number(null==y?void 0:y.max)>0?"continueToGold":E?"newCurrency":C?"coinRename":h?"recurringBuys":null,{bannerToShow:M}},M=r.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid ${e=>e.theme.grey000};
  border-radius: 8px;
  overflow: hidden;
  padding: 20px;

  ${l.BC.atLeastLaptop`
    height: 80px;
    padding: 0 20px;
  `}
`,O=r.ZP.div`
  display: flex;
  align-items: center;
`,z=(0,r.ZP)(m.xv)`
  margin-right: 5px;
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.black};
`,L=(0,r.ZP)(m.xv)`
  margin-top: 2px;
  font-weight: 500;
  font-size: 16px;
  color: ${e=>e.theme.black};
  display: none;

  ${l.BC.atLeastMobile`
    display: block;
  `}
`,$=r.ZP.div`
  display: flex;
  align-items: center;
`,R=(0,r.ZP)(m.zx)`
  margin-right: 12px;

  & div {
    color: ${e=>e.theme.white};
    font-weight: 600;
    font-size: 14px;
  }
`,j=r.ZP.div`
  cursor: pointer;
`,D=(0,o.connect)((e=>({coinRename:c.wl.vE.AW.getCoinRename(e).getOrElse("")})),(e=>({buySellActions:(0,s.bindActionCreators)(c.Nw.wx.buySell,e),cacheActions:(0,s.bindActionCreators)(c.Nw.Fs,e)})))((({buySellActions:e,cacheActions:t,coinRename:n})=>{if(!n)return null;if(!window.coins[n])return null;const r=getCoinRenameAnnouncement(n),{coinfig:a}=window.coins[n],{displaySymbol:l,symbol:o}=a;return i.createElement(M,null,i.createElement(O,null,i.createElement(m.JO,{name:n,size:"36px",style:{marginRight:"16px"}}),i.createElement("div",null,i.createElement(z,null,o," ",i.createElement(d.Z,{id:"copy.has_new_name",defaultMessage:"has a new name"})),i.createElement(L,null,i.createElement(d.Z,{id:"layouts.wallet.header.announcements.coin_rename.description",defaultMessage:"Heads up: {symbol} has renamed to {displaySymbol}. All balances are unaffected.",values:{displaySymbol:l,symbol:o}})))),i.createElement($,null,i.createElement(R,{"data-e2e":"newCoinTradeNowButton",nature:"primary",onClick:()=>e.showModal({cryptoCurrency:o,orderType:"BUY",origin:"TransactionList"}),small:!0,style:{borderRadius:"4px"}},i.createElement(m.xv,null,i.createElement(d.Z,{id:"copy.trade",defaultMessage:"Trade"})," ",l)),i.createElement(j,{"data-e2e":"newCoinCloseButton",onClick:()=>t.announcementDismissed(r)},i.createElement(m.JO,{size:"20px",color:"grey400",name:"close-circle"}))))})),I=r.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${e=>e.theme.grey000};
  border-radius: 8px;
  padding: 20px;

  ${l.BC.atLeastLaptop`
    height: 80px;
    padding: 0 20px;
  `}
  ${l.BC.mobile`
    padding: 12px;
    flex-direction: column;
  `}
`,U=r.ZP.div`
  display: flex;
  align-items: center;
`,W=r.ZP.div`
  display: flex;
  flex-direction: column;

  & > div:first-child {
    margin-bottom: 4px;
  }
`,Y=r.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  min-width: 40px;
  border-radius: 20px;
  margin-right: 20px;
`,F=(0,r.ZP)(m.xv)`
  display: flex;
  align-items: center;
  ${l.BC.mobile`
    font-size: 12px;
  `}
  ${l.BC.tablet`
    font-size: 14px;
  `}
`,H=(0,r.ZP)(m.zx)`
  height: 48px;
  ${l.BC.mobile`
    font-size: 14px;
    margin-top: 16px;
    padding: 10px;
  `}
`,V=(0,o.connect)(void 0,(e=>({verifyIdentity:()=>e(c.Nw.wx.identityVerification.verifyIdentity({needMoreInfo:!1,origin:"DashboardPromo",tier:2}))})))((({verifyIdentity:e})=>i.createElement(I,null,i.createElement(U,null,i.createElement(Y,null,i.createElement(m.Ee,{name:"tier-gold",size:"32px"})),i.createElement(W,null,i.createElement(m.xv,{size:"20px",weight:600,color:"grey800"},i.createElement(d.Z,{id:"scenes.home.banner.continue_to_gold.increase_your_limits",defaultMessage:"Increase your limits"})),i.createElement(F,{size:"16px",color:"grey600",weight:500},i.createElement(d.Z,{id:"scenes.home.banner.continue_to_gold.description",defaultMessage:"Continue your verification to become Gold level and increase your limits and payment methods"})))),i.createElement(H,{onClick:e,jumbo:!0,"data-e2e":"continueToGoldSDD",nature:"primary"},i.createElement(d.Z,{id:"scenes.home.banner.continue_to_gold.button",defaultMessage:"Continue to Gold"}))))),q=r.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${e=>e.theme.grey000};
  border-radius: 8px;
  padding: 20px;

  ${l.BC.atLeastLaptop`
    height: 80px;
    padding: 0 20px;
  `}
  ${l.BC.mobile`
    padding: 12px;
    flex-direction: column;
  `}
`,J=r.ZP.div`
  display: flex;
  align-items: center;
  margin-right: 12px;
`,G=r.ZP.div`
  display: flex;
  flex-direction: column;

  & > div:first-child {
    margin-bottom: 4px;
  }
`,K=r.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  min-width: 40px;
  border-radius: 20px;
  margin-right: 20px;
  background-color: ${e=>e.theme.orange000};
`,X=(0,r.ZP)(m.xv)`
  display: flex;
  align-items: center;
  ${l.BC.mobile`
    font-size: 12px;
  `}
  ${l.BC.tablet`
    font-size: 14px;
  `}
`,Q=(0,r.ZP)(m.zx)`
  height: 48px;
  ${l.BC.mobile`
    font-size: 14px;
    margin-top: 16px;
    padding: 10px;
  `}
`;class ee extends i.PureComponent{render(){return i.createElement(q,null,i.createElement(J,null,i.createElement(K,null,i.createElement(m.JO,{name:"pending",color:"orange600",size:"20px"})),i.createElement(G,null,i.createElement(m.xv,{size:"20px",weight:600,color:"grey800"},i.createElement(d.Z,{id:"scenes.home.banner.finishsigningup",defaultMessage:"Finish Signing Up"})),i.createElement(X,{size:"16px",color:"grey600",weight:500},i.createElement(d.Z,{id:"scenes.home.banner.signupapprove",defaultMessage:"Once you finish and get approved, start buying crypto."})))),i.createElement(Q,{onClick:()=>this.props.identityVerificationActions.verifyIdentity({needMoreInfo:!1,origin:"DashboardPromo",tier:2}),jumbo:!0,"data-e2e":"openKycTier2",nature:"primary"},i.createElement(d.Z,{id:"buttons.continue",defaultMessage:"Continue"})))}}const te=(0,o.connect)(void 0,(e=>({identityVerificationActions:(0,s.bindActionCreators)(c.Nw.wx.identityVerification,e)})))(ee),ne=r.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: ${e=>e.theme.grey000};
  border-radius: 4px;
  overflow: hidden;
  padding: 20px;

  ${l.BC.atLeastLaptop`
    height: 80px;
    padding: 0 20px;
    align-items: flex-start;
  `}
`,ie=r.ZP.div`
  display: ${e=>e.hiddenOnMobile?"none":"flex"};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;

  & > :not(:first-child) {
    margin-top: 4px;
    margin-right: 15px;
  }
`,re=(0,r.ZP)(m.xv)`
  color: ${e=>e.theme.grey900};
  margin-bottom: 4px;
`,ae=(0,r.ZP)(m.zx).attrs({height:"40px",nature:"primary",width:"150px"})`
  font-weight: 500;
`,le=(0,o.connect)(null,(e=>({verifyIdentity:()=>e(c.Nw.wx.identityVerification.verifyIdentity({needMoreInfo:!1,origin:"Resubmission",tier:2}))})))((({verifyIdentity:e})=>i.createElement(ne,null,i.createElement(ie,null,i.createElement(re,{size:"20px",weight:600},i.createElement(d.Z,{id:"scenes.home.banners.kycresubmit.title",defaultMessage:"Documents Needed"})),i.createElement(m.xv,{size:"14px",weight:500,color:"grey900"},i.createElement(d.Z,{id:"scenes.home.banners.kycresubmit.copy",defaultMessage:"Please re-verify your identity to access our full products and services."}))),i.createElement(ie,null,i.createElement(ae,{"data-e2e":"resubmitKycButton",onClick:e},i.createElement(d.Z,{id:"scenes.home.banners.kycresubmit.resubmit",defaultMessage:"Resubmit Now"})))))),oe=r.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid ${e=>e.theme.grey000};
  border-radius: 8px;
  overflow: hidden;
  padding: 20px;

  ${l.BC.atLeastLaptop`
    height: 80px;
    padding: 0 20px;
  `}
`,se=r.ZP.div`
  display: flex;
  align-items: center;
`,ce=(0,r.ZP)(m.xv)`
  margin-right: 5px;
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.black};
`,de=(0,r.ZP)(m.xv)`
  margin-top: 2px;
  font-weight: 500;
  font-size: 16px;
  color: ${e=>e.theme.black};
  display: none;

  ${l.BC.atLeastMobile`
    display: block;
  `}
`,me=r.ZP.div`
  display: flex;
  align-items: center;
`,ue=(0,r.ZP)(m.zx)`
  margin-right: 12px;

  & div {
    color: ${e=>e.theme.white};
    font-weight: 600;
    font-size: 14px;
  }
`,pe=r.ZP.div`
  cursor: pointer;
`,ge=(0,o.connect)((e=>({coinListing:c.wl.vE.AW.getNewCoinListing(e).getOrElse("")})),(e=>({buySellActions:(0,s.bindActionCreators)(c.Nw.wx.buySell,e),cacheActions:(0,s.bindActionCreators)(c.Nw.Fs,e)})))((({buySellActions:e,cacheActions:t,coinListing:n})=>{if(!n)return null;if(!window.coins[n])return null;const r=getNewCoinAnnouncement(n),{coinfig:a}=window.coins[n],{name:l,symbol:o}=a;return i.createElement(oe,null,i.createElement(se,null,i.createElement(m.JO,{name:n,size:"36px",style:{marginRight:"16px"}}),i.createElement("div",null,i.createElement(ce,null,l," (",o,")"," ",i.createElement(d.Z,{id:"copy.now_trading",defaultMessage:"is Now Trading"})),i.createElement(de,null,i.createElement(d.Z,{id:"layouts.wallet.header.announcements.newcoin.description_1",defaultMessage:"Buy, sell, swap, send, receive and store {coin} in your our.com Wallet.",values:{coin:o}})))),i.createElement(me,null,i.createElement(ue,{"data-e2e":"newCoinTradeNowButton",nature:"primary",onClick:()=>e.showModal({cryptoCurrency:o,orderType:"BUY",origin:"TransactionList"}),small:!0,style:{borderRadius:"4px"}},i.createElement(m.xv,null,i.createElement(d.Z,{id:"copy.buy",defaultMessage:"Buy"})," ",o)),i.createElement(pe,{"data-e2e":"newCoinCloseButton",onClick:()=>t.announcementDismissed(r)},i.createElement(m.JO,{size:"20px",color:"grey400",name:"close-circle"}))))}));var xe=n("./src/data/types.ts");const ye=r.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-image: url('/img/bg-banner-pattern-lg.svg');
  background-repeat: repeat-y;
  background-position: right;
  background-size: 35%;
  align-items: center;
  border: 1px solid ${e=>e.theme.grey000};
  border-radius: 8px;
  padding: 20px;

  ${l.BC.atLeastLaptop`
    height: 80px;
    padding: 0 20px;
  `}
  ${l.BC.mobile`
    padding: 12px;
    flex-direction: column;
  `}
`,he=r.ZP.div`
  display: flex;
  align-items: center;
`,be=r.ZP.div`
  display: flex;
  flex-direction: column;

  & > div:first-child {
    margin-bottom: 4px;
  }
`,fe=r.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  min-width: 40px;
  border-radius: 20px;
  margin-right: 20px;
  background-color: ${e=>e.theme.blue100};
`,Ee=(0,r.ZP)(m.xv)`
  display: flex;
  align-items: center;
  ${l.BC.mobile`
    font-size: 12px;
  `}
  ${l.BC.tablet`
    font-size: 14px;
  `}
`,we=(0,r.ZP)(m.zx)`
  height: 48px;
  ${l.BC.mobile`
    font-size: 14px;
    margin-top: 16px;
    padding: 10px;
  `}
`,ve=(0,o.connect)((e=>({latestPendingOrder:c.wl.wx.wd.getSBLatestPendingOrder(e)})),(e=>({modalActions:(0,s.bindActionCreators)(c.Nw.qk,e),recurringBuyActions:(0,s.bindActionCreators)(c.Nw.wx.recurringBuy,e)})))((e=>i.createElement(ye,null,i.createElement(he,null,i.createElement(fe,null,i.createElement(m.JO,{name:"sync-regular",color:"blue600",size:"20px"})),i.createElement(be,null,i.createElement(m.xv,{size:"20px",weight:600,color:"grey800"},i.createElement(d.Z,{id:"scenes.home.banners.recurringbuys.title",defaultMessage:"Recurring buys are now available"})," "),i.createElement(Ee,{size:"16px",color:"grey600",weight:500},i.createElement(d.Z,{id:"scenes.home.banners.recurringbuys.description",defaultMessage:"It’s really hard to time the market, which is why many investors use dollar cost averaging."})))),i.createElement(we,{onClick:()=>(e.recurringBuyActions.showModal({origin:xe.sq.RECURRING_BUYS_BANNER}),void e.recurringBuyActions.learnMoreLinkClicked(xe.sq.DASHBOARD_PROMO)),jumbo:!0,"data-e2e":"openRecurringBuyLearnMore",nature:"empty-blue"},i.createElement(d.Z,{id:"buttons.learn_more",defaultMessage:"Learn More"})))));var Ce=n("./src/modals/SimpleBuy/model.tsx"),Ze=n("../blockchain-wallet-v4/src/types/index.ts"),Pe=n("./src/data/components/simpleBuy/model.ts");const Ae=r.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${e=>e.theme.grey000};
  border-radius: 8px;
  padding: 20px;

  ${l.BC.atLeastLaptop`
    height: 80px;
    padding: 0 20px;
  `}
  ${l.BC.mobile`
    padding: 12px;
    flex-direction: column;
  `}
`,_e=r.ZP.div`
  display: flex;
  align-items: center;
`,Se=r.ZP.div`
  display: flex;
  flex-direction: column;

  & > div:first-child {
    margin-bottom: 4px;
  }
`,ke=r.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  min-width: 40px;
  border-radius: 20px;
  margin-right: 20px;
  background-color: ${e=>e.theme.orange000};
`,Ne=(0,r.ZP)(m.xv)`
  display: flex;
  align-items: center;
  ${l.BC.mobile`
    font-size: 12px;
  `}
  ${l.BC.tablet`
    font-size: 14px;
  `}
`,Te=(0,r.ZP)(m.zx)`
  height: 48px;
  ${l.BC.mobile`
    font-size: 14px;
    margin-top: 16px;
    padding: 10px;
  `}
`;class Be extends i.PureComponent{constructor(){super(...arguments),this.showModal=()=>{this.props.buySellActions.showModal({origin:"PendingOrder"})}}render(){const{latestPendingOrder:e}=this.props;if(!e)return null;const t=(0,Pe.getOrderType)(e);return i.createElement(Ae,null,i.createElement(_e,null,i.createElement(ke,null,i.createElement(m.JO,{name:"pending",color:"orange600",size:"20px"})),i.createElement(Se,null,i.createElement(m.xv,{size:"20px",weight:600,color:"grey800"},i.createElement(d.Z,{id:"copy.pending",defaultMessage:"Pending"})," ",i.createElement(Ce._s,{orderType:t})),i.createElement(Ne,{size:"16px",color:"grey600",weight:500},e.paymentType===Ze.t8.PAYMENT_CARD?i.createElement(d.Z,{id:"scenes.home.banner.receive_cc_order",defaultMessage:"Once you finalize your credit card information, your buy order will complete."}):"BUY"===t?i.createElement(d.Z,{id:"scenes.home.banner.finalize_funds",defaultMessage:"Once we receive your funds, your buy order will complete."}):i.createElement(d.Z,{id:"scenes.home.banner.finalize_sell",defaultMessage:"Confirm the transaction details to finalize your sell order."})))),i.createElement(Te,{onClick:()=>this.showModal(),jumbo:!0,"data-e2e":"openPendingSBOrder",nature:"primary"},i.createElement(d.Z,{id:"scenes.home.banner.sborder.details",defaultMessage:"View Details"})))}}const Me=(0,o.connect)((e=>({latestPendingOrder:c.wl.wx.wd.getSBLatestPendingOrder(e)})),(e=>({buySellActions:(0,s.bindActionCreators)(c.Nw.wx.buySell,e),modalActions:(0,s.bindActionCreators)(c.Nw.qk,e)})))(Be),Oe=r.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid ${e=>e.theme.grey000};
  border-radius: 8px;
  overflow: hidden;
  padding: 20px;

  ${l.BC.atLeastLaptop`
    height: 80px;
    padding: 0 20px;
  `}
`,ze=r.ZP.div`
  display: flex;
  align-items: center;
`,Le=(0,r.ZP)(m.xv)`
  margin-right: 5px;
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.black};
`,$e=(0,r.ZP)(m.xv)`
  margin-top: 2px;
  font-weight: 400;
  font-size: 14px;
  color: ${e=>e.theme.black};
  display: none;

  ${l.BC.atLeastMobile`
    display: block;
  `}
`,Banners_ServicePriceUnavailable=()=>i.createElement(Oe,null,i.createElement(ze,null,i.createElement(m.JO,{name:"bell",color:"red600",size:"36px",style:{marginRight:"16px"}}),i.createElement("div",null,i.createElement(Le,null,i.createElement(d.Z,{id:"copy.rates_unavailable",defaultMessage:"Pricing data is currently unavailable."})),i.createElement($e,null,i.createElement(d.Z,{id:"copy.rates_unavailable.description_1",defaultMessage:"When pricing data is missing we can not display accurate balance information. Rest assured our team is working on a solution and your funds are safe."}))))),Re=r.ZP.div`
  margin-bottom: 25px;
`;class je extends i.PureComponent{componentDidMount(){var e;this.props.buySellActions.fetchOrders(),this.props.buySellActions.fetchSDDEligibility(),(null===(e=this.props.userData.tiers)||void 0===e?void 0:e.current)>0&&this.props.buySellActions.fetchLimits(this.props.fiatCurrency)}render(){const{bannerToShow:e}=this.props.data;switch(e){case"resubmit":return i.createElement(Re,null,i.createElement(le,null));case"finishKyc":return i.createElement(Re,null,i.createElement(te,null));case"servicePriceUnavailable":return i.createElement(Re,null,i.createElement(Banners_ServicePriceUnavailable,null));case"sbOrder":return i.createElement(Re,null,i.createElement(Me,null));case"coinRename":return i.createElement(Re,null,i.createElement(D,null));case"newCurrency":return i.createElement(Re,null,i.createElement(ge,null));case"buyCrypto":return i.createElement(Re,null,i.createElement(f,null));case"continueToGold":return i.createElement(Re,null,i.createElement(V,null));case"celoEURRewards":return i.createElement(Re,null,i.createElement(_,null));case"recurringBuys":return i.createElement(Re,null,i.createElement(ve,null));default:return null}}}const De=(0,o.connect)((e=>({data:getData(e),fiatCurrency:c.wl.vE.Xd.getCurrency(e).getOrElse("USD"),userData:c.wl.qz.N5.getUserData(e).getOrElse({tiers:{current:0}})})),(e=>({buySellActions:(0,s.bindActionCreators)(c.Nw.wx.buySell,e)})))((0,i.memo)(je));var Ie=n("../../node_modules/react-router-bootstrap/lib/index.js"),Ue=n("./src/components/Balances/selectors.ts"),We=n("../../node_modules/ramda/es/lift.js");const selectors_getData=e=>{const t=c.wl.wx.P6.getCoinsWithBalanceOrMethod(e);return(0,We.Z)((e=>e.filter((e=>"FIAT"!==e.coinfig.type.name)).map((e=>e.coinfig))))(t)};var Ye=n("../../node_modules/ramda/es/toLower.js"),Fe=n("./src/components/Balances/index.js");const CoinBalance_selectors_getData=(e,t)=>Ue.uZ(t.coin)(e),He=r.ZP.div`
  display: flex;
  box-sizing: border-box;
`,Ve=(0,r.ZP)(m.rU)`
  text-decoration: underline;
`,template_error=e=>i.createElement(He,null,i.createElement(Ve,{size:"14px",weight:500,onClick:t=>e.onRefresh(t)},i.createElement(d.Z,{id:"home.balances.error.refresh",defaultMessage:"Refresh {curr} Data",values:{curr:e.coin}})));var qe=n("./src/components/Display/CoinDisplay/index.tsx"),Je=n("./src/components/Display/FiatDisplay/index.tsx");const template_success=e=>{const{balance:t,coin:n}=e;return i.createElement(i.Fragment,null,i.createElement(Je.Z,{coin:n,size:"16px",cursor:"pointer",mobileSize:"16px",loadingHeight:"20px",color:"grey800",weight:500,"data-e2e":`${n}FiatBalance`},t),i.createElement(qe.Z,{coin:n,size:"12px",cursor:"pointer",mobileSize:"12px",color:"grey400",weight:500,"data-e2e":`${n}Balance`},t))};class Ge extends i.PureComponent{constructor(){super(...arguments),this.handleRefresh=e=>{e&&e.preventDefault();const{coin:t}=this.props,{coinfig:n}=window.coins[t];if(n.type.erc20Address)this.props.ethActions.fetchErc20Data(t);else{const e=(0,Ye.Z)(t);this.props[`${e}Actions`].fetchData()}}}render(){const{coin:e,data:t}=this.props;return t.cata({Failure:()=>i.createElement(template_error,{coin:e,onRefresh:e=>this.handleRefresh(e)}),Loading:()=>i.createElement(m.co,{height:"35px",width:"60px"}),NotAsked:()=>i.createElement(m.co,{height:"35px",width:"60px"}),Success:t=>i.createElement(template_success,{balance:t,coin:e})})}}const Ke=(0,o.connect)(((e,t)=>({data:CoinBalance_selectors_getData(e,t)})),(e=>({bchActions:(0,s.bindActionCreators)(c.Nw.vE.aT.bch,e),btcActions:(0,s.bindActionCreators)(c.Nw.vE.aT.btc,e),ethActions:(0,s.bindActionCreators)(c.Nw.vE.aT.eth,e),stxActions:(0,s.bindActionCreators)(c.Nw.vE.aT.stx,e),xlmActions:(0,s.bindActionCreators)(c.Nw.vE.aT.xlm,e)})))(Ge),Xe=(0,r.ZP)(Ie.Ji)`
  &:hover {
    cursor: pointer;
  }
`,Qe=r.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,et=r.ZP.div`
  display: flex;
  align-items: center;
`,tt=(0,r.ZP)(m.xv)`
  font-size: 20px;
  font-weight: 500;
  color: ${e=>e.theme.grey800};
`,nt=(0,r.ZP)(m.JO)`
  font-size: 32px;
  margin-right: 16px;
`,it=r.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  > div:last-child {
    margin-top: 5px;
  }
`,template=e=>{const t=0===e.coins.length,n=e.coins.every((e=>"FIAT"===e.type.name)),r=t?e.backupCoins:n?[...e.coins,...e.backupCoins]:e.coins;return i.createElement(Fe.Vp,null,r.map((t=>i.createElement(Fe.CR,{key:t.symbol+t.name,"data-e2e":`${(0,Ye.Z)(t.symbol)}BalanceTable`},i.createElement(Xe,{to:`/${t.symbol}/transactions`},i.createElement("div",null,i.createElement(Qe,null,i.createElement(et,null,i.createElement(nt,{name:t.symbol,size:"32px"}),i.createElement(tt,{color:"grey700"},t.name)),i.createElement(it,null,i.createElement(Ke,Object.assign({},e,{coin:t.symbol}))))))))))},rt=r.ZP.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 24px 24px 0;
  border: 1px solid ${e=>e.theme.grey000};

  ${l.BC.mobile`
    padding: 12px;
  `}
`,at=r.ZP.div`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,lt=(0,r.ZP)(m.rU)`
  display: flex;
  align-items: center;
`,ot=r.ZP.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 12px 0;
  > div:last-child {
    flex: 1;
    margin-left: 16px;
  }
`,Loading=()=>i.createElement(i.Fragment,null,i.createElement(ot,null,i.createElement(m.s7,{height:"32px",width:"32px"}),i.createElement(m.co,{height:"40px",width:"100%"})),i.createElement(ot,null,i.createElement(m.s7,{height:"32px",width:"32px"}),i.createElement(m.co,{height:"40px",width:"100%"})),i.createElement(ot,null,i.createElement(m.s7,{height:"32px",width:"32px"}),i.createElement(m.co,{height:"40px",width:"100%"}))),st=(0,o.connect)((e=>({backupCoins:selectors_getData(e).getOrElse([]),data:(0,Ue.ck)(e)})),(e=>({actions:(0,s.bindActionCreators)(c.Nw.wx.refresh,e)})))((e=>i.createElement(rt,null,i.createElement(at,null,i.createElement(m.xv,{size:"16px",weight:600,color:"grey800",capitalize:!0},i.createElement(d.Z,{id:"copy.holdings",defaultMessage:"Holdings"})),i.createElement(Ie.Ji,{to:"/prices"},i.createElement(lt,null,i.createElement(m.xv,{size:"14px",color:"blue600",weight:500,cursor:"pointer"},i.createElement(d.Z,{id:"copy.view_prices",defaultMessage:"View Prices"})),i.createElement(m.JO,{name:"arrow-right",color:"blue600",style:{marginLeft:"4px",marginTop:"1px"}})))),e.data.cata({Failure:e=>i.createElement(m.xv,{size:"16px",weight:500,color:"grey400",capitalize:!0},(null==e?void 0:e.toString())||"Failed to load balances"),Loading:()=>i.createElement(Loading,null),NotAsked:()=>i.createElement(Loading,null),Success:t=>i.createElement(template,Object.assign({},e,{coins:t}))}))));var ct=n("../blockchain-wallet-v4/src/utils/index.ts");const dt=(0,ct.createDeepEqualSelector)([c.wl.wx.AU.T],(e=>{const{coinfig:t}=window.coins[e],n=t.symbol;return{coinName:t.name,coinTicker:e,cryptoCurrency:n}})),mt=r.ZP.div`
  display: flex;
  justify-content: center;

  ${l.BC.atLeastTabletL`
    margin-top: 24px;
    margin-right: 24px;
  `}
`,ut=(0,r.ZP)(m.zx)`
  &:first-child {
    margin-right: 12px;
  }
`,Actions_template=({buySellActions:e,coinName:t,cryptoCurrency:n,swapActions:r})=>i.createElement(mt,null,i.createElement(ut,{"data-e2e":"buyButton",height:"42px",nature:"primary",onClick:()=>e.showModal({cryptoCurrency:n,orderType:"BUY",origin:"PriceChart"})},i.createElement(m.xv,{color:"white",size:"16px",lineHeight:"24px",weight:600},i.createElement(d.Z,{id:"price.chart.buy.coin",defaultMessage:"Buy {coinName}",values:{coinName:t}}))),i.createElement(ut,{"data-e2e":"swapButton",height:"42px",nature:"empty-secondary",onClick:()=>r.showModal("PriceChart")},i.createElement(m.xv,{color:"blue600",size:"16px",lineHeight:"24px",weight:600},i.createElement(d.Z,{id:"price.chart.swap.coin",defaultMessage:"Swap {coinName}",values:{coinName:t}})))),pt=(0,o.connect)((e=>dt(e)),(e=>({buySellActions:(0,s.bindActionCreators)(c.Nw.wx.buySell,e),swapActions:(0,s.bindActionCreators)(c.Nw.wx.swap,e)})))((e=>i.createElement(Actions_template,Object.assign({},e))));var gt=n("../../node_modules/ramda/es/pathOr.js"),xt=n("../../node_modules/ramda/es/map.js"),yt=n("../blockchain-wallet-v4/src/index.ts");const ht=(0,ct.createDeepEqualSelector)([c.wl.vE.Xd.getCurrency,c.wl.cb.getPriceChart,c.wl.wx.AU.T,c.wl.vE.aT.misc.getPriceIndexSeries],((e,t,n,i)=>{const r=e.getOrElse("USD"),a=yt.ei.getSymbol(r);return{cache:{coin:t.coin,time:t.time||"month"},currency:r,currencySymbol:a,data:(0,We.Z)((e=>({coin:n,data:(0,xt.Z)((e=>[1e3*e.timestamp,e.price]),e)})))(i)}})),bt=r.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
`,Chart_template_error=e=>i.createElement(bt,null,i.createElement(m.xv,{size:"12px",weight:400,color:"red600"},e.children)),template_loading=()=>i.createElement(m.Ee,{name:"chart-placeholder",width:"100%",height:"300px"});var ft=n("../../node_modules/react-use-measure/dist/web.js"),Et=n("../../node_modules/@visx/event/esm/localPoint.js"),wt=n("../../node_modules/@visx/gradient/esm/gradients/LinearGradient.js"),vt=n("../../node_modules/@visx/scale/esm/scales/time.js"),Ct=n("../../node_modules/@visx/scale/esm/scales/linear.js"),Zt=n("../../node_modules/@visx/shape/esm/shapes/AreaClosed.js"),Pt=n("../../node_modules/@visx/shape/esm/shapes/LinePath.js"),At=n("../../node_modules/@visx/shape/esm/shapes/Bar.js"),_t=n("../../node_modules/@visx/shape/esm/shapes/Line.js"),St=n("../../node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),kt=n("../../node_modules/@visx/tooltip/esm/tooltips/Tooltip.js"),Nt=n("../../node_modules/@visx/tooltip/esm/tooltips/TooltipWithBounds.js"),Tt=n("../../node_modules/d3-array/src/bisector.js"),Bt=n("../../node_modules/d3-array/src/extent.js"),Mt=n("../../node_modules/d3-array/src/min.js"),Ot=n("../../node_modules/d3-array/src/max.js"),zt=n("../../node_modules/d3-time-format/src/defaultLocale.js"),Lt=n("../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js"),$t=n("../blockchain-wallet-v4/src/exchange/utils.ts");const Rt=(0,zt.i$)("%b %d, '%y"),getYValue=e=>new Date(e[0]),getXValue=e=>e[1],jt=(0,Tt.Z)((e=>new Date(getYValue(e)))).left,Dt=r.ZP.div`
  position: relative;
  height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,Chart_template_success=({coin:e,currency:t,data:n})=>{const[r,a]=(0,ft.Z)({polyfill:Lt.Z}),l=a.width||100,o=a.height||100,s=(0,m.Il)(e)||"#000",{hideTooltip:c,showTooltip:d,tooltipData:u,tooltipLeft:p=0,tooltipTop:g=0}=(0,St.Z)(),x=(0,i.useMemo)((()=>Object.assign(Object.assign({},kt.j),{background:(0,m.Il)("grey900"),borderRadius:4,color:"white",fontFamily:'"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif '})),[]),y=(0,i.useMemo)((()=>(0,vt.Z)({domain:(0,Bt.Z)(n,getYValue),range:[0,l]})),[l,n]),h=(0,i.useMemo)((()=>(0,Ct.Z)({domain:[(0,Mt.Z)(n,getXValue)-o/5,(0,Ot.Z)(n,getXValue)+o/5],range:[o,0]})),[o,n]),b=(0,i.useCallback)((e=>{const{x:t}=(0,Et.Z)(e)||{x:0},i=y.invert(t),r=jt(n,i,1),a=n[r-1],l=n[r];let o=a;l&&getYValue(l)&&(o=i.valueOf()-getYValue(a).valueOf()>getYValue(l).valueOf()-i.valueOf()?l:a),d({tooltipData:o,tooltipLeft:y(getYValue(o)),tooltipTop:h(getXValue(o))})}),[d,h,y,n]);return i.createElement(Dt,null,i.createElement("svg",{ref:r,width:"100%",height:"100%",viewBox:`0 0 ${l} ${o}`},i.createElement(wt.Z,{id:s,fromOpacity:.5,toOpacity:0,from:s,to:"white"}),i.createElement(Zt.Z,{data:n,fill:`url(#${s})`,yScale:h,x:e=>{var t;return null!==(t=y(getYValue(e)))&&void 0!==t?t:0},y:e=>{var t;return null!==(t=h(getXValue(e)))&&void 0!==t?t:0},strokeWidth:0}),i.createElement(Pt.Z,{data:n,x:e=>{var t;return null!==(t=y(getYValue(e)))&&void 0!==t?t:0},y:e=>{var t;return null!==(t=h(getXValue(e)))&&void 0!==t?t:0},strokeWidth:2,stroke:s}),i.createElement(At.Z,{x:0,y:0,width:l,height:o,fill:"transparent",onTouchStart:b,onTouchMove:b,onMouseMove:b,onMouseLeave:()=>c()}),u?i.createElement("g",null,i.createElement(_t.Z,{from:{x:p,y:0},to:{x:p,y:window.innerHeight},stroke:s,opacity:.2,strokeWidth:2,pointerEvents:"none",strokeDasharray:"7,5"}),i.createElement("circle",{cx:p,cy:g+1,r:4,fill:"black",fillOpacity:.1,stroke:"black",strokeOpacity:.1,strokeWidth:2,pointerEvents:"none"}),i.createElement("circle",{cx:p,cy:g,r:4,fill:s,stroke:"white",strokeWidth:2,pointerEvents:"none"})):null),u?i.createElement(Nt.Z,{key:Math.random(),top:g,left:p,style:x},Rt(getYValue(u)),i.createElement("br",null),i.createElement("br",null),(0,$t.LE)({unit:t,value:getXValue(u)})):null)},It=(0,o.connect)((e=>ht(e)),(e=>({priceChartActions:(0,s.bindActionCreators)(c.Nw.wx.priceChart,e)})))((e=>((0,i.useEffect)((()=>{const t=(0,gt.Z)("BTC",["cache","coin"],e),n=(0,gt.Z)(Ze.tn.MONTH,["cache","time"],e);e.priceChartActions.initialized(t,n)}),[e.cache.coin,e.cache.time]),e.data.cata({Failure:e=>i.createElement(Chart_template_error,null,e),Loading:()=>i.createElement(template_loading,null),NotAsked:()=>i.createElement(template_loading,null),Success:t=>i.createElement(Chart_template_success,{currency:e.currency,coin:t.coin,data:t.data})})))),Ut=r.ZP.div`
  margin-top: 8px;
  margin-left: 0;

  ${l.BC.atLeastTabletL`
    margin-left: 24px;
  `}
`,CoinTicker_template_loading=()=>i.createElement(Ut,null,i.createElement(m.co,{width:"100px",height:"29px"}));var __rest=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};const Wt=r.ZP.div`
  margin-left: 0;

  ${l.BC.atLeastTabletL`
    margin-left: 24px;
  `}
`,CoinTicker_template_success=e=>{var{fiat:t}=e,n=__rest(e,["fiat"]);return i.createElement(Wt,null,i.createElement(m.xv,{size:"24px",weight:600,color:"black","data-e2e":n["data-e2e"]},t))},Yt=(0,o.connect)(((e,t)=>({data:c.wl.wx.JL.getData(t.coin,e)})))((({data:e})=>e.cata({Failure:()=>null,Loading:()=>i.createElement(CoinTicker_template_loading,null),NotAsked:()=>i.createElement(CoinTicker_template_loading,null),Success:e=>i.createElement(CoinTicker_template_success,Object.assign({},e))}))),Ft=(0,o.connect)((e=>({priceChart:c.wl.cb.getPriceChart(e)})))((({priceChart:{coin:e="BTC"}})=>i.createElement(Yt,{coin:e,"data-e2e":`coinTicker${e}`}))),Ht=(0,ct.createDeepEqualSelector)([(e,t)=>c.wl.vE.aT.misc.getPriceChange(t.priceChart.coin||"BTC",t.priceChart.time||Ze.tn.MONTH,e)],(e=>(0,We.Z)((e=>({priceChange:e})))(e))),Vt=r.ZP.div`
  margin-top: 8px;
  margin-left: 0;

  ${l.BC.atLeastTabletL`
    margin-left: 24px;
  `}
`,CoinPriceChange_template_loading=()=>i.createElement(Vt,null,i.createElement(m.co,{width:"100px",height:"16px"}));var qt=n("./src/scenes/Transactions/model.tsx");const Jt=r.ZP.div`
  margin-top: 8px;
  margin-left: 0;

  ${l.BC.atLeastTabletL`
    margin-left: 24px;
  `}
`,CoinPriceChange_template_success=({currency:e,priceChange:t})=>i.createElement(Jt,null,i.createElement(qt.Y,{currency:e,priceChange:t}," ")),Gt=(0,o.connect)(((e,t)=>({data:Ht(e,t)})))((({currency:e,data:t,dispatch:n,priceChart:r})=>t.cata({Failure:()=>null,Loading:()=>i.createElement(CoinPriceChange_template_loading,null),NotAsked:()=>i.createElement(CoinPriceChange_template_loading,null),Success:({priceChange:a})=>i.createElement(CoinPriceChange_template_success,{data:t,priceChange:a,dispatch:n,currency:e,priceChart:r})}))),Kt=(0,o.connect)((e=>({currency:c.wl.vE.Xd.getCurrency(e).getOrElse("USD"),priceChart:c.wl.cb.getPriceChart(e)})),(e=>({miscActions:(0,s.bindActionCreators)(c.Nw.vE.aT.misc,e)})))((e=>i.createElement(Gt,Object.assign({},e))));var Xt=n("../../node_modules/redux-form/es/Field.js"),Qt=n("../../node_modules/redux-form/es/reduxForm.js"),en=n("./src/components/Form/index.ts");const tn=r.ZP.div`
  padding-top: 16px;
  padding-left: 16px;
  width: fit-content;
  display: flex;
  justify-content: center;

  ${l.BC.atLeastTabletL`
    justify-content: flex-start;
  `}
`,nn=(0,o.connect)((e=>({priceChart:c.wl.cb.getPriceChart(e)})),(e=>({actions:(0,s.bindActionCreators)(c.Nw.wx.priceChart,e)}))),rn=(0,s.compose)((0,Qt.Z)({form:"priceChartCoin"}),nn)((({actions:{coinClicked:e},initialize:t,priceChart:{coin:n="BTC"}})=>{(0,i.useEffect)((()=>{t({coin:n})}),[n]);return i.createElement(tn,null,i.createElement(Xt.Z,{name:"coin",searchEnabled:!1,onChange:(t,n)=>{e(n)},component:en.rq}))})),an=(0,ct.createDeepEqualSelector)([c.wl.wx.AU.h],(e=>({time:e}))),ln=(0,r.ZP)(m.d0)`
  margin: 0 24px;
  ${l.BC.atLeastTabletL`
    margin-right: 24px;
    margin-bottom: 24px;
  `}
`,on=(0,o.connect)(null,(e=>({layoutActions:(0,s.bindActionCreators)(c.Nw.wx.layoutWallet,e)})))((({currentTab:e,handleClick:t})=>i.createElement(ln,null,i.createElement(m.gq,{width:"20%","data-e2e":"dayTab",selected:e===Ze.tn.DAY,onClick:()=>t(Ze.tn.DAY)},i.createElement(d.Z,{id:"copy.day",defaultMessage:"1D"})),i.createElement(m.gq,{width:"20%","data-e2e":"weekTab",selected:e===Ze.tn.WEEK,onClick:()=>t(Ze.tn.WEEK)},i.createElement(d.Z,{id:"copy.week",defaultMessage:"1W"})),i.createElement(m.gq,{width:"20%","data-e2e":"monthTab",selected:e===Ze.tn.MONTH,onClick:()=>t(Ze.tn.MONTH)},i.createElement(d.Z,{id:"copy.month",defaultMessage:"1M"})),i.createElement(m.gq,{width:"20%","data-e2e":"yearTab",selected:e===Ze.tn.YEAR,onClick:()=>t(Ze.tn.YEAR)},i.createElement(d.Z,{id:"copy.year",defaultMessage:"1Y"})),i.createElement(m.gq,{width:"20%","data-e2e":"allTab",selected:e===Ze.tn.ALL,onClick:()=>t(Ze.tn.ALL)},i.createElement(d.Z,{id:"copy.all",defaultMessage:"All"}))))),sn=(0,o.connect)((e=>an(e)),(e=>({actions:(0,s.bindActionCreators)(c.Nw.wx.priceChart,e)})))((({actions:e,time:t})=>{(0,i.useEffect)((()=>{e.timeClicked(Ze.tn.DAY)}),[]);return i.createElement(on,{currentTab:t,handleClick:t=>{e.timeClicked(t)}})})),cn=r.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  top: 0;
  right: 0;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  box-sizing: border-box;
  border: 1px solid ${e=>e.theme.grey000};
  margin-bottom: 36px;
`,dn=r.ZP.div`
  display: flex;

  flex-direction: column;
  ${l.BC.atLeastTabletL`
    flex-direction: row;
  `}
  justify-content: space-between;
  width: 100%;
`,mn=r.ZP.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${l.BC.atLeastTabletL`
    margin: 0;
    align-items: flex-start;
  `}
`,un=(0,r.ZP)(dn)`
  margin-bottom: 16px;
`,pn=(0,r.ZP)(dn)`
  margin-bottom: 24px;
`,gn=(0,r.ZP)(dn)`
  justify-content: flex-end;
`,Home_PriceChart=()=>i.createElement(cn,null,i.createElement(un,null,i.createElement(mn,null,i.createElement(rn,null),i.createElement(Ft,null),i.createElement(Kt,null)),i.createElement(mn,null,i.createElement(pt,null))),i.createElement(pn,null,i.createElement(It,null)),i.createElement(gn,null,i.createElement(sn,null))),xn=r.ZP.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${l.BC.atLeastLaptop`
    flex-direction: row;
  `}
`,yn=r.ZP.div`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 24px;
`,hn=(0,r.ZP)(yn)`
  flex: 2;
  ${l.BC.atLeastLaptop`
    margin-right: 24px;
  `}
`,bn=(0,r.ZP)(yn)`
  flex: 3;
  margin-top: 24px;

  ${l.BC.atLeastLaptop`
    margin-top: 0;
  `}
`,scenes_Home=()=>i.createElement(a.wX,null,i.createElement(De,null),i.createElement(xn,null,i.createElement(hn,null,i.createElement(st,null)),i.createElement(bn,null,i.createElement(Home_PriceChart,null))))},"./src/scenes/Transactions/model.tsx":(e,t,n)=>{n.d(t,{Y:()=>PriceChange});var i=n("../../node_modules/react/index.js"),r=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),a=n("../blockchain-wallet-v4/src/index.ts"),l=n("../blockchain-wallet-v4/src/exchange/utils.ts"),o=n("../blockchain-info-components/src/index.js");const s=(0,r.ZP)(o.xv)`
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
  color: ${e=>e.theme.grey600};
`,c=r.ZP.span`
  font-weight: 600;
  color: ${e=>"down"===e.change.movement?e.theme.red600:"up"===e.change.movement?e.theme.green600:e.theme.grey600};
`,PriceChange=({children:e,currency:t,isPortfolioPosition:n,priceChange:r})=>{const o=n?r.positionChange:r.overallChange;let d;const m=(0,l.M)(o.diff);return d="down"===o.movement?`-${a.ei.getSymbol(t)}${m.substring(1)}`:`${a.ei.getSymbol(t)}${m}`,i.createElement(s,null,i.createElement(c,{change:o},d," (",(0,l.M)(o.percentChange),")%"),e)}}}]);