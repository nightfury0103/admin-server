"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[7411],{"./src/modals/Interest/DepositForm/model.tsx":(e,t,n)=>{n.d(t,{Th:()=>c,t3:()=>d,yV:()=>p,e4:()=>m,Fn:()=>u,z:()=>x,Dy:()=>g,Jf:()=>y,JW:()=>f,vC:()=>w,y:()=>h,p6:()=>b,ne:()=>E,cQ:()=>v,sK:()=>Z,$s:()=>C,nd:()=>P,K:()=>A,WS:()=>k,je:()=>_,XD:()=>F,_U:()=>T,e0:()=>N,qO:()=>S,Of:()=>O,t8:()=>M,jm:()=>$,XU:()=>j});var i=n("../../node_modules/redux-form/es/Field.js"),o=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),a=n("../blockchain-info-components/src/index.js"),r=n("./src/components/Cartridge/index.ts"),l=n("./src/components/Flyout/index.tsx"),s=n("./src/components/Form/index.ts");const c="interestDepositForm",d=o.ZP.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`,p=(0,o.ZP)(s.l0)`
  height: 100%;
  display: flex;
  flex-direction: column;
`,m=(0,o.ZP)(l.o9)`
  padding-bottom: 0;
`,u=(0,o.ZP)(a.xv)`
  display: flex;
  width: 100%;
  align-items: center;
`,x=(0,o.ZP)(l.o9)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`,g=o.ZP.div`
  margin: 24px 0 10px 0;
  display: flex;
  justify-content: space-between;
`,y=(0,o.ZP)(i.Z)`
  > input {
    padding-left: ${e=>14*e.coin.length+"px"};
  }
  > div:last-child {
    display: none;
  }
`,f=o.ZP.div`
  display: flex;
  position: relative;
`,w=o.ZP.div`
  position: absolute;
  top: 16px;
  left: 12px;
`,h=(0,o.ZP)(a.xv)`
  display: inline-flex;
  font-weight: 500;
  font-size: 14px;
  padding: 6px 12px;
  border-radius: 32px;
  background-color: ${e=>e.theme.red000};
  color: ${e=>e.theme.red800};
  margin-bottom: 16px;
`,b=o.ZP.div`
  cursor: pointer;
  display: inline-block;
  padding: 0px 6px;
  border-radius: 10px;
  background-color: ${e=>e.theme.grey000};
`,E=o.ZP.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
`,v=o.ZP.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,Z=(0,o.ZP)(a.xv)`
  margin: 6px 0 8px;
`,C=o.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  background-color: ${e=>e.theme.greyFade000};
  border: 1px solid ${({theme:e})=>e.grey000};
  box-sizing: border-box;
  border-radius: 8px;
`,P=o.ZP.div`
  margin: 2px 5px 0 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,A=(0,o.ZP)(r.mO)`
  background-color: ${e=>e.theme.white};
  border: 1px solid ${e=>e.theme.grey100};
  color: ${e=>e.theme.blue600};
  cursor: pointer;
  margin-left: 10px;
`,k=o.ZP.div`
  display: flex;
`,_=o.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-right: 1px solid ${({theme:e})=>e.grey000};
  margin-right: 16px;
  width: 114px;
  height: 48px;

  &:last-child {
    border-right: 1px solid transparent;
    margin-right: 0;
  }
`,F=o.ZP.div`
  margin: -3px 0 24px 0;

  & > * {
    display: inline-block;
  }
`,T=o.ZP.div`
  margin-top: -3px;

  & > * {
    display: inline-block;
  }
`,N=(0,o.ZP)(a.JO)`
  margin-right: 20px;
`,S=o.ZP.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  > button {
    padding: 15px !important;
  }
`,O=o.ZP.div`
  display: inline;
`,M=(0,o.ZP)(a.xv)`
  font-size: 14px;
  font-weight: 500;
  padding-right: 5px;
  cursor: pointer;
  display: inline;
  color: ${e=>e.displayCoin?e.theme.grey800:e.theme.blue600};
`,$=(0,o.ZP)(a.xv)`
  font-size: 14px;
  font-weight: 500;
  padding-left: 5px;
  cursor: pointer;
  display: inline;
  color: ${e=>e.displayCoin?e.theme.blue600:e.theme.grey800};
`,j=o.ZP.div`
  display: inline;
`},"./src/modals/Swap/EnterAmount/Checkout/index.tsx":(e,t,n)=>{n.d(t,{X2:()=>P,ZP:()=>$});var i=n("../../node_modules/react/index.js"),o=n("./node_modules/react-intl/lib/src/components/message.js"),a=n("./src/modals/Interest/DepositForm/model.tsx"),r=n("../../node_modules/redux-form/es/Field.js"),l=n("../../node_modules/redux-form/es/reduxForm.js"),s=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),c=n("../blockchain-wallet-v4/src/index.ts"),d=n("../blockchain-wallet-v4/src/exchange/currencies/index.ts"),p=n("../blockchain-wallet-v4/src/exchange/utils.ts"),m=n("../blockchain-info-components/src/index.js"),u=n("./src/components/Cartridge/index.ts"),x=n("./src/components/Display/CoinDisplay/index.tsx"),g=n("./src/components/Display/FiatDisplay/index.tsx"),y=n("./src/components/Exchange/index.tsx"),f=n("./src/components/Flyout/index.tsx"),w=n("./src/data/types.ts"),h=n("./src/services/forms/index.js"),b=n("./src/services/styles/index.ts"),E=n("./src/modals/Swap/components/index.tsx"),v=n("./node_modules/bignumber.js/bignumber.js"),Z=n.n(v),C=n("./src/data/components/exchange/services.ts");const getMaxMin=(e,t,n,i,o,a,r)=>{switch(e){case"max":const e=new(Z())((0,C.b)("FIAT",t.maxPossibleOrder)),l=new(Z())((0,C.K)(a.coin,e.dividedBy(n.price))),s=Number(i?i.effectiveBalance:a.balance);return(0,C.b)(a.coin,Math.min(s,l.toNumber()));case"min":const c=(0,C.b)("FIAT",t.minOrder),d=new(Z())(c).dividedBy(n.price).toNumber(),p=new(Z())(1).dividedBy(o.rate),m=(0,C.b)(r.coin,o.quote.networkFee);return(p.times(m).toNumber()+d).toPrecision(h.WQ)}},maximumAmount=(e,t,n)=>{if(!e)return!0;if(!t)return;const{baseRates:i,fix:o,limits:a,payment:r,quote:l,walletCurrency:s}=n,d=Number(getMaxMin("max",a,i,r,l,n.BASE,n.COUNTER)),p=c.ei.convertCoinToFiat({coin:n.BASE.coin,currency:s,isStandard:!0,rates:i,value:d});return Number(e)>("CRYPTO"===o?d:p)&&"ABOVE_MAX"},minimumAmount=(e,t,n)=>{if(!e)return!0;if(!t)return;const{baseRates:i,fix:o,limits:a,payment:r,quote:l,walletCurrency:s}=n,d=Number(getMaxMin("min",a,i,r,l,n.BASE,n.COUNTER)),p=c.ei.convertCoinToFiat({coin:n.BASE.coin,currency:s,isStandard:!0,rates:i,value:d});return Number(e)<("CRYPTO"===o?d:p)&&"BELOW_MIN"},incomingAmountNonZero=(e,t,n)=>{const{incomingAmount:i}=n;return!!i.isNegative&&"NEGATIVE_INCOMING_AMT"},P=(s.ZP.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${e=>e.center?"center":"flex-start"};
  width: ${e=>"small"===e.size?"10%":"45%"};
  height: 100%;
`,s.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  padding: 32px;
  width: 100%;
`),A=(0,s.ZP)(P)`
  position: relative;
  padding: 12px;
  justify-content: center;
  border: 0px;
`,k=s.ZP.div`
  margin-top: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,_=s.ZP.div`
  display: flex;
`,F=(0,s.ZP)(_)`
  justify-content: space-between;
  width: 105%;
  ${b.BC.mobile`
    flex-direction: column;
    width: 100%;
    align-items: center;
  `};
`,T=s.ZP.div`
  margin-top: 2px;
  display: flex;
`,N=s.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,S=s.ZP.div`
  display: flex;
  justify-content: center;
  min-height: 32px;
`,O=s.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 32px;
`,M=(0,s.ZP)(u.XG)`
  border: 1px solid ${e=>e.theme.red000};
  cursor: pointer;
  color: ${e=>e.theme.red400};
`,normalizeAmount=(e,t)=>Number.isNaN(Number(e))&&"."!==e&&""!==e?t:(0,h.xl)(e,!1),$=(0,l.Z)({destroyOnUnmount:!1,form:"swapAmount"})((e=>{const{BASE:t,COUNTER:n,baseRates:l,fix:s,formErrors:h,formValues:b,limits:v,payment:Z,quote:C,userData:P,walletCurrency:$}=e,[j,z]=(0,i.useState)(1),I="string"==typeof h.amount&&h.amount,B=getMaxMin("max",v,l,Z,C,t,n),D=c.ei.convertCoinToFiat({coin:t.coin,currency:$,isStandard:!0,rates:l,value:B}),R=getMaxMin("min",v,l,Z,C,t,n),U=c.ei.convertCoinToFiat({coin:t.coin,currency:$,isStandard:!0,rates:l,value:R}),L=Z?Z.effectiveBalance:t.balance,q=!!(1===P.tiers.current&&"ABOVE_MAX"===I&&v.maxPossibleOrder<e.limits.maxOrder),W="FIAT"===s?c.ei.convertFiatToCoin({coin:t.coin,currency:$,rates:l,value:(null==b?void 0:b.amount)||0}):c.ei.convertCoinToFiat({coin:t.coin,currency:$,isStandard:!0,rates:l,value:(null==b?void 0:b.amount)||0}),X="FIAT"===s?(0,p.P2)({unit:{symbol:t.coin},value:W}):(0,p.LE)({unit:$,value:W}),handleMinMaxClick=()=>{"BELOW_MIN"===I&&e.swapActions.handleSwapMinAmountClick("FIAT"===s?U:R),"ABOVE_MAX"!==I&&"NEGATIVE_INCOMING_AMT"!==I||e.swapActions.handleSwapMinAmountClick("FIAT"===s?D:B)},G=Number(B)<Number(R),V=c.Nt.Failure.is(e.quoteR),{coinfig:K}=window.coins[t.coin],Y=K.type.erc20Address,J=e.payment&&t.type===w.l0.ACCOUNT&&Y&&!e.payment.isSufficientEthForErc20;return i.createElement(f.o9,{style:{paddingTop:"20px"}},i.createElement(E.Gq,{onSubmit:i=>{i.preventDefault(),e.swapActions.setStep({options:{baseAccountType:t.type,baseCoin:t.coin,counterAccountType:n.type,counterCoin:n.coin},step:"PREVIEW_SWAP"})}},i.createElement(A,{id:"amount-row"},"FIAT"===s&&i.createElement(m.xv,{size:"56px",color:"textBlack",weight:500},d.Z[$].units[$].symbol),i.createElement(r.Z,Object.assign({"data-e2e":"swapAmountInput",name:"amount",component:y.HK,validate:[maximumAmount,minimumAmount,incomingAmountNonZero],normalize:normalizeAmount,props:{disabled:G},onUpdate:((e,t,n,i)=>{Number(n)>0&&z(n>1?1:n);const o=t.closest("#amount-row");(e?o.children[0]:o.children[o.children.length-1]).style.fontSize=i*j+"px"}).bind(null,"FIAT"===s),maxFontSize:"56px",placeholder:"0",fiatActive:!1},{autoFocus:!0,hideError:!0})),"CRYPTO"===s&&i.createElement(m.xv,{size:"56px",color:"textBlack",weight:500},K.displaySymbol)),i.createElement(O,{style:{display:I||G?"none":"flex"}},i.createElement("div",{style:{width:"24px"}}),i.createElement(m.xv,{color:"grey600",size:"14px",weight:500,"data-e2e":"swapQuoteAmount"},X),i.createElement(m.JO,{color:"blue600",cursor:!0,name:"up-down-chevron",onClick:()=>e.swapActions.switchFix(W,"FIAT"===s?"CRYPTO":"FIAT"),role:"button",size:"24px","data-e2e":"swapSwitchIcon"})),i.createElement(S,{style:{display:!I||G?"none":"flex"}},i.createElement(i.Fragment,null,"BELOW_MIN"===I?i.createElement(M,{onClick:handleMinMaxClick,role:"button","data-e2e":"swapMin"},i.createElement(o.Z,{id:"copy.below_swap_min",defaultMessage:"Minimum Swap is {value}",values:{value:"FIAT"===s?(0,p.LE)({unit:$,value:U}):`${R} ${K.displaySymbol}`}})):q?i.createElement(N,null,i.createElement(u.S0,{style:{marginBottom:"26px"}},i.createElement(o.Z,{id:"copy.above_swap_max_silver",defaultMessage:"Upgrade your profile to swap this amount."})),i.createElement(F,null,i.createElement(m.zx,{"data-e2e":"swapUpgradePromptNotNow",nature:"light",onClick:handleMinMaxClick,height:"48px",width:"192px"},i.createElement(o.Z,{id:"copy.not_now",defaultMessage:"Not Now"})),i.createElement(m.zx,{"data-e2e":"swapLimitUpgradePrompt",nature:"primary",onClick:()=>e.idvActions.verifyIdentity({needMoreInfo:!1,origin:"Swap",tier:2}),height:"48px",width:"192px"},i.createElement(o.Z,{id:"scenes.exchange.exchangeform.limit_info.upgrade",defaultMessage:"Upgrade"})))):"NEGATIVE_INCOMING_AMT"===I?i.createElement(M,{"data-e2e":"swapBelowZero"},i.createElement(o.Z,{id:"copy.negative_incoming_swap",defaultMessage:"Amount is below withdrawal fee."})):i.createElement(M,{onClick:handleMinMaxClick,role:"button","data-e2e":"swapMax"},i.createElement(o.Z,{id:"copy.above_swap_max",defaultMessage:"You can swap up to {value}",values:{value:"FIAT"===s?(0,p.LE)({unit:$,value:D}):`${B} ${K.displaySymbol}`}})))),G&&i.createElement(S,null,i.createElement(M,{"data-e2e":"balanceBelowMin"},i.createElement(o.Z,{id:"copy.swap_not_enough_funds",defaultMessage:"This wallet does not have enough funds for a swap."}))),i.createElement(k,null,i.createElement("div",null,i.createElement(m.xv,{size:"14px",weight:500,color:"grey600"},K.displaySymbol," ",i.createElement(o.Z,{id:"copy.available",defaultMessage:"Available"})),i.createElement(T,null,i.createElement(x.Z,{size:"14px",weight:500,color:"grey900",coin:t.coin},L),i.createElement(m.xv,{size:"14px",weight:500,color:"grey600"}," ("),i.createElement(g.Z,{size:"14px",weight:500,color:"grey600",coin:t.coin},L),i.createElement(m.xv,{size:"14px",weight:500,color:"grey600"},")"))),i.createElement(_,null,i.createElement(a.K,{role:"button","data-e2e":"swapMin",onClick:()=>e.swapActions.handleSwapMinAmountClick("FIAT"===s?U:R)},i.createElement(o.Z,{id:"buttons.swap_min",defaultMessage:"Swap Min"})),i.createElement(a.K,{role:"button","data-e2e":"swapMax",onClick:()=>{e.swapActions.switchFix(W,"CRYPTO"),e.swapActions.handleSwapMinAmountClick(B)}},i.createElement(o.Z,{id:"buttons.swap_max",defaultMessage:"Swap Max"})))),i.createElement(m.zx,{nature:"primary","data-e2e":"previewSwap",type:"submit",jumbo:!0,fullwidth:!0,style:{marginTop:"24px"},disabled:e.invalid||V||J},i.createElement(o.Z,{id:"buttons.preview_swap",defaultMessage:"Preview Swap"})),V&&i.createElement(u.XG,{style:{marginTop:"16px"}},"Error:"," ",e.quoteR.cata({Failure:e=>e,Loading:()=>null,NotAsked:()=>null,Success:()=>null})),J&&i.createElement(u.XG,{style:{marginTop:"16px"}},i.createElement(o.Z,{id:"copy.not_enough_eth1",defaultMessage:"ETH is required to send {coin}. You do not have enough ETH in your Ether Wallet to perform a transaction. Note, ETH must be held in your Ether Wallet for this transaction, not Ether Trading Account.",values:{coin:K.displaySymbol}}))))}))},"./src/modals/Swap/components/index.tsx":(e,t,n)=>{n.d(t,{w5:()=>F,OC:()=>v,W1:()=>A,LJ:()=>E,XO:()=>S,Ay:()=>FromToLogoLeft,bn:()=>T,Wx:()=>P,iu:()=>k,R_:()=>_,Gq:()=>C,Fn:()=>Z,jI:()=>N});var i=n("../../node_modules/react/index.js"),o=n("../../node_modules/redux-form/es/Form.js"),a=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),r=n("../blockchain-wallet-v4/src/exchange/utils.ts"),l=n("../blockchain-info-components/src/index.js"),s=(n("./src/components/Cartridge/index.ts"),n("./src/components/Display/FiatDisplay/index.tsx")),c=n("./src/components/Flyout/index.tsx"),d=n("./src/data/components/exchange/services.ts"),p=n("./node_modules/react-intl/lib/src/components/message.js"),m=n("../../node_modules/react-redux/es/index.js"),u=n("../blockchain-wallet-v4/src/exchange/index.ts"),x=n("./src/data/index.ts"),g=n("./src/data/types.ts");const y=a.ZP.div`
  background-color: ${e=>e.theme.grey000};
  border-radius: 8px;
  overflow: hidden;
`,f=a.ZP.div`
  background-color: ${e=>e.theme.white};
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.grey100};

  & > div:first-child {
    border: 0;
  }
`,w=a.ZP.div`
  transition: transform 0.2s;
  transform: ${e=>e.toggle?"rotate(180deg)":"none"};
  margin-right: -6px;
`,h=(0,a.ZP)(c.X2)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  &:last-child {
    border-bottom-width: ${e=>e.toggle?"0px":"1px"};
  }
`,b=a.ZP.div`
  padding: 16px;
`,E=(0,m.connect)(((e,t)=>({baseRates:x.wl.vE.aT.misc.getRatesSelector(t.base.type===g.l0.ACCOUNT?t.base.baseCoin:t.base.coin,e).getOrElse({}),counterRates:x.wl.vE.aT.misc.getRatesSelector(t.counter.coin,e).getOrElse({}),paymentR:x.wl.wx.LF.getPayment(e).getOrElse({}),quoteR:x.wl.wx.LF.getQuote(e).getOrElse({}),walletCurrency:x.wl.vE.Xd.getCurrency(e).getOrElse("USD")})))((({base:e,basePayment:t,baseRates:n,counter:o,counterQuote:a,counterRates:m,paymentR:x,quoteR:E,walletCurrency:v})=>{var Z;const[C,P]=(0,i.useState)(!1),networkFee=e=>{var t;return e?"BTC"===e.coin||"BCH"===e.coin?null===(t=e.selection)||void 0===t?void 0:t.fee:e.fee:0},A=(0,u.convertCoinToFiat)({coin:e.type===g.l0.ACCOUNT?e.baseCoin:e.coin,currency:v,rates:n,value:networkFee(x)}),k=(0,u.convertCoinToFiat)({coin:o.coin,currency:v,rates:m,value:(null===(Z=null==E?void 0:E.quote)||void 0===Z?void 0:Z.networkFee)||"0"}),_=window.coins[o.coin].coinfig?window.coins[o.coin].coinfig.name:o.coin,F=window.coins[e.coin].coinfig?window.coins[e.coin].coinfig.name:e.coin,T=e.type===g.l0.CUSTODIAL&&o.type===g.l0.CUSTODIAL,N=e.type===g.l0.ACCOUNT&&o.type===g.l0.ACCOUNT;return T?i.createElement(y,null,i.createElement(f,null,i.createElement(h,null,i.createElement(c.Dx,null,i.createElement(p.Z,{id:"copy.network_fees",defaultMessage:"Network Fees"})),i.createElement(c.B4,{"data-e2e":"swapNetworkFee"},i.createElement(p.Z,{id:"modals.brokerage.free",defaultMessage:"Free"})))),i.createElement(b,null,i.createElement(l.xv,{size:"12px"},i.createElement(p.Z,{id:"copy.no_network_fees",defaultMessage:"When using Trading Accounts, there are no network fees."})))):i.createElement(y,null,i.createElement(f,null,i.createElement(h,null,i.createElement(c.Dx,null,i.createElement(p.Z,{id:"copy.network_fees",defaultMessage:"Network Fees"})),i.createElement(c.B4,{"data-e2e":"swapNetworkFee"},i.createElement(h,{style:{border:"unset",padding:"0px"}},i.createElement(l.xv,{color:"grey900"},"~"),i.createElement(s.Z,{size:"14px",weight:500,color:"grey900",coin:v},Number(A)+Number(k)),i.createElement(w,{toggle:C},i.createElement(l.JO,{role:"button","data-e2e":"toggleSwapFeesDropdown",name:"chevron-down",cursor:!0,size:"24px",color:"blue600",onClick:()=>{P((e=>!e))}}))))),C&&i.createElement(i.Fragment,null,e.type===g.l0.ACCOUNT&&i.createElement(h,{toggle:C},i.createElement(c.Dx,{style:{fontSize:"12px"},color:"grey900"},i.createElement(p.Z,{id:"copy.coin_network_fee",defaultMessage:"{coin} Network Fee",values:{coin:e.coin}})),i.createElement(c.B4,{color:"grey900",size:"12px","data-e2e":"swapOutgoingFee",style:{alignItems:"flex-end",display:"flex",flexDirection:"column"}},t.cata({Failure:e=>e,Loading:()=>i.createElement(l.co,{height:"18px",width:"70px"}),NotAsked:()=>i.createElement(l.co,{height:"18px",width:"70px"}),Success:t=>i.createElement(i.Fragment,null,i.createElement(l.xv,{size:"12px",color:"grey900"},(0,r.P2)({unit:{symbol:e.baseCoin},value:(0,d.b)(e.baseCoin,networkFee(t))})),i.createElement(s.Z,{size:"12px",weight:500,color:"grey400",coin:e.baseCoin},networkFee(t)))}))),o.type===g.l0.ACCOUNT&&i.createElement(h,{toggle:C},i.createElement(c.Dx,{style:{fontSize:"12px"},color:"grey900"},i.createElement(p.Z,{id:"copy.coin_network_fee",defaultMessage:"{coin} Network Fee",values:{coin:o.coin}})),i.createElement(c.B4,{"data-e2e":"swapIncomingFee",style:{alignItems:"flex-end",display:"flex",flexDirection:"column"}},a.cata({Failure:e=>e,Loading:()=>i.createElement(l.co,{height:"18px",width:"70px"}),NotAsked:()=>i.createElement(l.co,{height:"18px",width:"70px"}),Success:e=>i.createElement(i.Fragment,null,i.createElement(l.xv,{size:"12px",color:"grey900"},(0,r.P2)({unit:{symbol:o.coin},value:(0,d.b)(o.coin,e.quote.networkFee)})),i.createElement(s.Z,{style:{justifyContent:"flex-end"},size:"12px",weight:500,color:"grey400",coin:o.coin},e.quote.networkFee))}))))),i.createElement(b,null,i.createElement(l.Qt,{inline:!0},i.createElement(l.xv,{size:"14px"},i.createElement(p.Z,{id:"copy.network_fees_set",defaultMessage:"Network fees are set by the"}))," ",i.createElement(l.xv,{size:"14px"},N?`${F} and ${_}`:e.type!==g.l0.CUSTODIAL&&o.type===g.l0.CUSTODIAL?F:_)," ",i.createElement(l.xv,{size:"14px"},T?i.createElement(p.Z,{id:"copy.networks",defaultMessage:"networks"}):i.createElement(p.Z,{id:"copy.network",defaultMessage:"network"}),".")," ",i.createElement(l.rU,{href:"/support/hc/en-us/articles/360018355011-What-fees-are-applied-to-my-Swap-order-",size:"14px",rel:"noopener noreferrer",target:"_blank"},i.createElement(p.Z,{id:"modals.simplebuy.confirm.learn_more_about_fees",defaultMessage:"Learn more about fees"})))))})),v=a.ZP.div`
  border-top: 1px solid ${e=>e.theme.grey000};
`,Z=(0,a.ZP)(l.xv)`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.spaceBetween?"space-between":"initial"};
  margin-bottom: ${e=>e.marginBottom?"16px":"0px"};
`,C=(0,a.ZP)(o.Z)`
  margin-top: ${e=>e.marginTop?"36px":"0px"};
`,P=a.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: ${e=>`1px solid ${e.theme.grey000}`};
  padding: 16px 40px;
  cursor: pointer;
  &:hover {
    background-color: ${e=>e.theme.blue000};
  }
  &:first-child {
    border-top: 0;
  }
`,A=(0,a.ZP)(P)`
  border-top: 0px;
  position: relative;
  &:after {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: ${e=>e.theme.grey000};
    content: '';
  }
`,k=(0,a.ZP)(l.xv)`
  color: ${e=>e.theme.grey800};
  font-weight: 600;
  max-width: 200px;
`,_=(0,a.ZP)(l.xv)`
  color: ${e=>e.color||e.theme.grey600};
  margin-top: 4px;
  font-weight: ${e=>e.weight?e.weight:600};
  font-size: 14px;
`,F=a.ZP.div`
  display: flex;
  align-items: center;
`,T=a.ZP.div`
  position: ${e=>e.position};
  left: 67px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${e=>e.size};
  height: ${e=>e.size};
  border-radius: ${e=>e.size};
  z-index: 100;
  background: ${e=>e.theme.blue000};
`,N=a.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 24px;
`,S=a.ZP.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,O=(0,a.ZP)(c.X2)`
  display: flex;
  justify-content: space-between;
`,M=a.ZP.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & div:first-child {
    margin-right: 16px;
  }
`,$=a.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,FromToLogoLeft=({accountType:e,amount:t,base:n,children:o,coinCode:a,label:p})=>{const m=n?"Outgoing":"Incoming";return i.createElement(O,null,i.createElement(M,null,i.createElement(l.XP,{accountType:e,coin:a}),i.createElement("div",null,i.createElement(c.B4,{"data-e2e":`swap${m}Wallet`},o),i.createElement(c.Dx,null,i.createElement(l.xv,{"data-e2e":`swap${m}AccountType`,size:"14px",weight:500,color:"grey600"},p)))),i.createElement($,null,i.createElement(c.B4,{"data-e2e":`swap${m}Value`},(0,r.P2)({unit:{symbol:a},value:t})),i.createElement(c.Dx,null,i.createElement(s.Z,{size:"14px",weight:500,color:"grey600",coin:a},(0,d.K)(a,t)))))}}}]);