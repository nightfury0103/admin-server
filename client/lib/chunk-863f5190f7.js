"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[873],{"./src/components/Flyout/SendRequestCrypto/index.tsx":(e,t,n)=>{n.d(t,{l:()=>a,S:()=>i});var o=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),l=n("../blockchain-info-components/src/index.js"),r=n("./src/components/Flyout/index.tsx");const a=(0,o.ZP)(l.xv)`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.spaceBetween?"space-between":"initial"};
  margin-bottom: ${e=>e.marginBottom?"24px":"0px"};
`,i=(0,o.ZP)(r.o9)`
  padding-top: 0px;
`},"./src/modals/SendCrypto/index.tsx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>je});var o=n("../../node_modules/react/index.js"),l=n("../../node_modules/react-redux/es/index.js"),r=n("../../node_modules/redux/es/redux.js"),a=n("../../node_modules/redux-form/es/reduxForm.js"),i=n("./src/components/Flyout/index.tsx"),c=n("./src/data/index.ts"),s=n("./src/data/components/sendCrypto/types.ts"),d=n("./src/data/types.ts"),m=n("./src/providers/ModalEnhancer/index.tsx"),u=n("./node_modules/react-intl/lib/src/components/message.js"),p=n("../../node_modules/redux-form/es/Field.js"),x=n("../../node_modules/redux-form/lib/reduxForm.js"),g=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),E=n("../blockchain-info-components/src/index.js"),y=n("./src/components/Flyout/SendRequestCrypto/index.tsx"),h=n("./src/components/Form/index.ts"),f=n("./src/modals/SendCrypto/model.tsx"),b=n("../../node_modules/ramda/es/map.js"),v=n("../blockchain-wallet-v4/src/utils/index.ts");const w={importedAddresses:!1,nonCustodialAccounts:!1,tradingAccounts:!0};var C=n("./src/data/coins/selectors/index.ts");const Z=(0,v.createDeepEqualSelector)([(e,t)=>(0,C.n6)(e,Object.assign({coins:t.sendableCoins},w)),(e,t)=>({ownProps:t,state:e})],((e,{ownProps:t})=>{const{coin:n}=(null==t?void 0:t.formValues)||{},o=[];return(0,b.Z)((e=>(0,b.Z)((e=>{e.coin===n&&o.push(e)}),e)),e),{accounts:o}})),T=g.ZP.div`
  display: flex;
  flex-direction: column;
`,O=(0,g.ZP)(y.l)`
  margin-bottom: 40px;
`,A=g.ZP.div`
  margin-top: 24px;
  width: 40%;
`,S=g.ZP.div`
  border-top: ${e=>`1px solid ${e.theme.grey000}`};
  padding: 40px 40px 0;
  text-align: center;
`;class z extends o.PureComponent{render(){const{close:e,data:t,formActions:n,sendCryptoActions:l,sendableCoins:r,walletCurrency:a}=this.props;return o.createElement(T,null,o.createElement(i.Z6,null,o.createElement(O,{spaceBetween:!0},o.createElement(E.JO,{name:"arrow-top-right",color:"blue600",size:"48px"}),o.createElement(E.JO,{name:"close",color:"grey600",role:"button","data-e2e":"close",size:"24px",cursor:!0,onClick:e})),o.createElement("div",null,o.createElement(E.xv,{size:"24px",color:"grey900",weight:600},o.createElement(u.Z,{id:"modals.sendcrypto.coinselect.title",defaultMessage:"Send Crypto"})),o.createElement(E.xv,{size:"16px",color:"grey600",weight:500,style:{marginTop:"10px"}},o.createElement(u.Z,{id:"modals.sendcrypto.coinselect.subtitle",defaultMessage:"Select the wallet you want to send from."})),o.createElement(A,null,o.createElement(p.Z,{component:h.bX,height:"32px",name:"coin",type:"send"})))),t.accounts.map((e=>o.createElement(h.Xv,{key:e.coin+e.address,account:e,coin:e.coin,onClick:()=>{n.change(f.i,"selectedAccount",e),l.setStep({step:s.C.ENTER_TO}),l.fetchSendLimits({account:e})},walletCurrency:a}))),0===t.accounts.length&&o.createElement(S,null,o.createElement(E.xv,{size:"16px",color:"grey900",weight:500,style:{marginTop:"10px"}},o.createElement(u.Z,{id:"modals.sendcrypto.coinselect.noaccounts",defaultMessage:"Currently there are no accounts for the selected crypto."}))))}}const k=(0,l.connect)(((e,t)=>({data:Z(e,t)})),(e=>({modalActions:(0,r.bindActionCreators)(c.Nw.qk,e)}))),j=(0,r.compose)((0,x.Z)({destroyOnUnmount:!1,form:f.i}),k)(z);var P=n("./node_modules/bignumber.js/bignumber.js"),N=n.n(P),F=n("../blockchain-wallet-v4/src/exchange/index.ts"),M=n("../blockchain-wallet-v4/src/redux/data/misc/selectors.ts"),__rest=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(n[o[l]]=e[o[l]])}return n};const components_CollapseText=e=>{var{place:t,text:n}=e,l=__rest(e,["place","text"]);const r=`${n.slice(0,4)}...${n.slice(-4)}`;return o.createElement(E.G0,{id:"collapsed-text"},o.createElement(E.xv,Object.assign({},l,{style:{display:"inline-flex"}}),r),o.createElement(E.u,{maxWidth:"auto",id:"collapsed-text",place:t||"right"},n))};var _=n("./src/components/Display/CoinDisplay/index.tsx"),R=n("./src/components/Display/FiatDisplay/index.tsx");const I=(0,g.ZP)(h.l0)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 100%;
`,L=(0,g.ZP)(i.X2)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div:last-child * {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`,B=(0,l.connect)(((e,t)=>{const{coin:n}=t.formValues.selectedAccount,o=(0,M.getRatesSelector)(n,e);return{feesR:c.wl.wx.fM.getWithdrawalFees(e,n),rates:o.getOrElse({})}})),D=(0,r.compose)(B,(0,x.Z)({destroyOnUnmount:!1,form:f.i}))((e=>{const{feesR:t,formValues:n,rates:l,sendCryptoActions:r,walletCurrency:a}=e,{amount:c,fix:d,selectedAccount:m,to:p}=n,{coin:x}=m,g="FIAT"===d?(0,F.convertFiatToCoin)({coin:x,currency:a,rates:l,value:c}):c,h=(0,F.convertCoinToCoin)({baseToStandard:!1,coin:x,value:g}),f=t.getOrElse(0)||0,b=(0,F.convertCoinToCoin)({baseToStandard:!1,coin:x,value:f}),v=new(N())(h).plus(b);return o.createElement(I,{onSubmit:e=>{e.preventDefault(),r.submitTransaction()}},o.createElement("div",null,o.createElement(i.o9,null,o.createElement(y.l,null,o.createElement(E.JO,{cursor:!0,onClick:()=>r.setStep({step:s.C.ENTER_AMOUNT}),name:"arrow-back",role:"button",color:"grey600",size:"24px",style:{marginRight:"20px"}}),o.createElement(E.xv,{size:"24px",color:"grey800",weight:600},o.createElement(u.Z,{id:"modals.sendcrypto.enteramount.title",defaultMessage:"Send"})))),o.createElement(y.S,null,o.createElement(_.Z,{coin:x,size:"32px",weight:600,color:"black"},v)),o.createElement(L,null,o.createElement("div",null,o.createElement(E.xv,{size:"16px",weight:500,color:"black"},o.createElement(u.Z,{id:"copy.send",defaultMessage:"Send"}))),o.createElement("div",null,o.createElement(_.Z,{coin:x,size:"16px",weight:500,color:"black"},h),o.createElement(R.Z,{coin:x,size:"14px",weight:500,color:"grey500"},h))),o.createElement(L,null,o.createElement("div",null,o.createElement(E.xv,{size:"16px",weight:500,color:"black"},o.createElement(u.Z,{id:"copy.from",defaultMessage:"From"}))),o.createElement("div",null,o.createElement(E.xv,{size:"16px",weight:500,color:"black"},m.label))),o.createElement(L,null,o.createElement("div",null,o.createElement(E.xv,{size:"16px",weight:500,color:"black"},o.createElement(u.Z,{id:"copy.to",defaultMessage:"To"}))),o.createElement("div",null,o.createElement(E.xv,{size:"16px",weight:500,color:"black"},o.createElement(components_CollapseText,{text:p,size:"16px",color:"black",weight:500,place:"left"})))),o.createElement(L,null,o.createElement("div",null,o.createElement(E.xv,{size:"16px",weight:500,color:"black"},o.createElement(u.Z,{id:"copy.fee",defaultMessage:"Fee"}))),o.createElement("div",null,o.createElement(_.Z,{coin:x,size:"16px",weight:500,color:"black"},b),o.createElement(R.Z,{coin:x,size:"14px",weight:500,color:"grey500"},b))),o.createElement(L,null,o.createElement("div",null,o.createElement(E.xv,{size:"16px",weight:600,color:"black"},o.createElement(u.Z,{id:"copy.total",defaultMessage:"Total"}))),o.createElement("div",null,o.createElement(_.Z,{coin:x,size:"16px",weight:600,color:"black"},v),o.createElement(R.Z,{coin:x,size:"14px",weight:600,color:"grey500"},v)))),o.createElement(i.o9,null,o.createElement(E.zx,{"data-e2e":"sendBtn",nature:"primary",jumbo:!0,fullwidth:!0,type:"submit"},o.createElement(u.Z,{id:"buttons.send",defaultMessage:"Send"})," ",o.createElement(_.Z,{coin:x,size:"16px",weight:600,color:"white"},v)),o.createElement(E.zx,{style:{marginTop:"16px"},"data-e2e":"cancelBtn",nature:"light-red",jumbo:!0,fullwidth:!0,onClick:()=>e.close()},o.createElement(u.Z,{id:"buttons.cancel",defaultMessage:"Cancel"}))))}));var V=n("../../node_modules/ramda/es/isEmpty.js"),$=n("../blockchain-wallet-v4/src/exchange/currencies/index.ts"),U=n("./src/components/Cartridge/index.ts"),J=n("./src/components/Exchange/index.tsx"),X=n("./src/components/Flyout/Banners/UpgradeToGold.tsx"),Y=n("./src/components/SimpleBuy/index.tsx"),W=n("./src/services/forms/index.js"),K=n("./src/services/styles/index.ts"),q=n("./src/utils/helpers.ts"),G=n("./src/modals/Settings/TradingLimits/model.ts"),Q=n("./src/modals/Swap/EnterAmount/Checkout/index.tsx");const H=(0,g.ZP)(h.l0)``,ee=(0,g.ZP)(U.S0)`
  cursor: pointer;
`,te=(0,g.ZP)(U.XG)`
  cursor: pointer;
`,ne=g.ZP.div`
  margin-top: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,oe=(0,g.ZP)(Q.X2)`
  position: relative;
  padding: 24px;
  justify-content: center;
  border: 0;
`,le=(0,g.ZP)(Y.Uq)`
  justify-content: space-between;
  ${K.BC.tablet`
    padding: 16px 20px;
  `}
`,re=g.ZP.div`
  display: flex;
  align-items: center;
`,ae=g.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 24px;
  z-index: 100;
  background: white;
`,ie=(0,g.ZP)(E.JO)`
  background: rgba(${e=>(0,q.oo)(e.theme[e.background]||"#000000")}, 0.15);
  border-radius: 50%;

  & :not(::before) {
    opacity: 0.15;
  }

  &::before {
    color: ${e=>e.theme[e.background]};
  }
`,ce=g.ZP.div`
  z-index: 10;
`,se=g.ZP.div`
  height: 32px;
`,de=g.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,me=(0,l.connect)(((e,t)=>{const{coin:n}=t.formValues.selectedAccount,o=(0,M.getRatesSelector)(n,e);return{feesR:c.wl.wx.fM.getWithdrawalFees(e,n),minR:c.wl.wx.fM.getWithdrawalMin(e,n),rates:o.getOrElse({})}})),ue=(0,r.compose)(me,(0,x.Z)({destroyOnUnmount:!1,form:f.i,validate:(e,t)=>{var n;const{feesR:o,minR:l,rates:r,sendLimits:a,walletCurrency:i}=t,{amount:c,fix:s,selectedAccount:d}=e,{coin:m}=d,u=o.getOrElse(0)||0,p="FIAT"===s?(0,F.convertFiatToCoin)({coin:m,currency:i,maxPrecision:8,rates:r,value:c}):c,x=(0,F.convertCoinToCoin)({baseToStandard:!1,coin:m,value:p}),g=(0,F.convertCoinToCoin)({baseToStandard:!1,coin:m,value:u}),E=((e,t)=>!!e&&Number(e)<Number(t))(p,l.getOrElse(0)||0);let y=((e,t,n)=>!!e&&Number(e)>Number(t)-Number(n))(x,d.balance,g);if((null===(n=null==a?void 0:a.globalLimit)||void 0===n?void 0:n.available)&&!y){const{value:e}=a.globalLimit.available,t="FIAT"===s?e:(0,F.convertFiatToCoin)({coin:m,currency:i,maxPrecision:8,rates:r,value:e}),n="FIAT"===s?(0,F.convertCoinToFiat)({coin:m,currency:i,isStandard:!0,rates:r,value:u}):(0,F.convertCoinToCoin)({baseToStandard:!1,coin:m,value:u});y=((e,t,n,o)=>!!e&&Number(e)>Number(n)&&Number(n)+Number(o)<=Number(t))(c,d.balance,t,n)}return{amount:E?"BELOW_MIN":!!y&&"ABOVE_MAX"}}}))((e=>{var t,n;const[l,r]=(0,o.useState)(1),{formActions:a,formErrors:c,formValues:d,minR:m,rates:x,sendCryptoActions:g,sendLimits:h,verifyIdentity:b,walletCurrency:v}=e,w="string"==typeof c.amount&&c.amount,{amount:C,fix:Z,selectedAccount:T,to:O}=d,{coin:A}=T,S=Number((0,F.convertCoinToCoin)({coin:A,value:T.balance})),z=m.getOrElse(0),k=Number((0,F.convertCoinToCoin)({coin:A,value:Number(T.balance)-Number((0,F.convertCoinToCoin)({baseToStandard:!1,coin:A,value:e.feesR.getOrElse(0)||0}))})),j="FIAT"===Z?(0,F.convertFiatToCoin)({coin:A,currency:v,maxPrecision:8,rates:x,value:C}):C,P="CRYPTO"===Z?(0,F.convertCoinToFiat)({coin:A,currency:v,isStandard:!0,rates:x,value:C||0}):C,N="CRYPTO"===Z?P:j;return o.createElement(H,{onSubmit:()=>g.setStep({step:s.C.CONFIRM})},o.createElement(i.o9,null,o.createElement(y.l,null,o.createElement(E.JO,{cursor:!0,onClick:()=>g.setStep({step:s.C.ENTER_TO}),name:"arrow-back",role:"button",color:"grey600",size:"24px",style:{marginRight:"20px"}}),o.createElement(E.xv,{size:"24px",color:"grey800",weight:600},o.createElement(u.Z,{id:"modals.sendcrypto.enteramount.title",defaultMessage:"Send"})))),o.createElement(le,null,o.createElement("div",null,o.createElement(E.xv,{size:"14px",color:"grey600",weight:600},o.createElement(u.Z,{defaultMessage:"From",id:"copy.from"}),": ",T.label," (",S," ",A,")"),o.createElement(E.xv,{size:"16px",color:"grey900",weight:600,style:{marginTop:"6px"}},o.createElement(u.Z,{defaultMessage:"To:",id:"copy.to:"})," ",o.createElement(components_CollapseText,{text:O,size:"16px",color:"grey900",weight:600,place:"right"}))),o.createElement(re,null,o.createElement(E.JO,{size:"32px",color:A,name:A,style:{left:"5px",position:"relative"}}),o.createElement(ce,null,o.createElement(ae,null,o.createElement(ie,{name:"arrow-top-right",size:"24px",background:A}))))),o.createElement(i.o9,{style:{display:"flex",flex:1,flexDirection:"column",justifyContent:"space-between",paddingTop:"0px"}},o.createElement(oe,{id:"amount-row"},"FIAT"===Z&&o.createElement(E.xv,{size:"56px",color:"textBlack",weight:500},$.Z[v].units[v].symbol),o.createElement(p.Z,Object.assign({"data-e2e":"sendAmountInput",name:"amount",component:J.HK,normalize:(e,t,n)=>Number.isNaN(Number(e))&&"."!==e&&""!==e?t:(0,W.xl)(e,n&&"FIAT"===n.fix),onUpdate:((e,t,n,o)=>{Number(n)>0&&r(n>1?1:n);const a=t.closest("#amount-row");(e?a.children[0]:a.children[a.children.length-1]).style.fontSize=o*(l-.3)+"px"}).bind(null,"FIAT"===Z),maxFontSize:"56px",placeholder:"0",fiatActive:!0},{autoFocus:!0,hideError:!0})),"CRYPTO"===Z&&o.createElement(E.xv,{size:"56px",color:"textBlack",weight:500},A)),o.createElement(se,null,o.createElement(de,null,o.createElement("div",null),o.createElement(E.xv,{color:"grey600",size:"14px",weight:500,"data-e2e":"sendQuoteAmount"},N),o.createElement(E.JO,{color:"blue600",cursor:!0,name:"up-down-chevron",onClick:()=>{a.change(f.i,"fix","CRYPTO"===Z?"FIAT":"CRYPTO"),a.change(f.i,"amount","CRYPTO"===Z?P:j)},role:"button",size:"24px","data-e2e":"sendSwitchIcon"})),w?o.createElement("div",{style:{display:"flex",justifyContent:"center",marginTop:"12px",width:"100%"}},o.createElement(te,{onClick:()=>{a.change(f.i,"fix","CRYPTO"),a.change(f.i,"amount","ABOVE_MAX"===w?k:z)}},"ABOVE_MAX"===w?o.createElement(u.Z,{id:"copy.above_max",defaultMessage:"Amount is above Max"}):o.createElement(u.Z,{id:"copy.below_min",defaultMessage:"Amount is below Min"}))):null),o.createElement(ne,null,o.createElement(E.xv,{cursor:"pointer",role:"button",onClick:()=>{a.change(f.i,"fix","CRYPTO"),a.change(f.i,"amount",k)}},o.createElement(E.xv,{color:"blue600",weight:600,size:"12px"},o.createElement(u.Z,{id:"copy.available",defaultMessage:"Available"})),o.createElement(E.xv,{color:"black",weight:600,size:"14px",style:{marginTop:"4px",textAlign:"right"}},k," ",A)),o.createElement("div",null,o.createElement(E.xv,{color:"blue600",weight:600,size:"12px"},o.createElement(u.Z,{id:"copy.network_fee",defaultMessage:"Network Fee"})),o.createElement(E.xv,{color:"black",weight:600,size:"14px",style:{marginTop:"4px"}},e.feesR.cata({Failure:t=>o.createElement(ee,{pointer:!0,"data-e2e":"retryFetchFees",onClick:()=>e.sendCryptoActions.fetchWithdrawalFees()},o.createElement(E.xv,{size:"10px",color:"blue600",weight:600},o.createElement(u.Z,{id:"copy.retry",defaultMessage:"Retry"}))),Loading:()=>o.createElement(E.co,{height:"24px",width:"52px"}),NotAsked:()=>o.createElement(E.co,{height:"24px",width:"52px"}),Success:e=>`${e} ${A}`}))))),o.createElement(i.o9,{style:{paddingTop:"0px"}},(0,V.Z)(h)||(null===(n=null===(t=null==h?void 0:h.globalLimit)||void 0===t?void 0:t.suggestedUpgrade)||void 0===n?void 0:n.requiredTier)!==G.iY.GOLD?null:o.createElement(X.Z,{limits:h,verifyIdentity:b}),o.createElement(E.zx,{nature:"primary",type:"submit","data-e2e":"enterAmountBtn",fullwidth:!0,jumbo:!0,disabled:!C||!!c.amount},o.createElement(u.Z,{id:"buttons.next",defaultMessage:"Next"}))))}));var pe=n("./src/components/QRCode/Capture/index.js");const xe=g.ZP.div`
  width: 100%;
  position: relative;
`,ge=g.ZP.div`
  position: absolute;
  top: 3px;
  right: 3px;
`,Ee=g.ZP.input`
  width: 100%;
  padding: 16px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  box-sizing: border-box;
  border: 1px solid ${e=>e.theme.grey100};
  &::placeholder {
    color: ${e=>e.theme.grey400};
    font-weight: 500;
    font-size: 16px;
  }
`,Form_TextWithQRScanner=e=>o.createElement(xe,null,o.createElement(Ee,Object.assign({},e,e.input),e.children),o.createElement(ge,null,o.createElement(pe.Z,{onScan:e.onScan,border:[]}))),ye="INVALID_ADDR",he=(0,g.ZP)(h.l0)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
`,fe=(0,g.ZP)(i.o9)`
  display: flex;
  padding-top: 24px;
`,be=(0,g.ZP)(i.o9)`
  display: flex;
  padding-top: 0px;
`;class ve extends o.PureComponent{render(){const{formErrors:e,formValues:t,sendCryptoActions:n,walletCurrency:l}=this.props,{selectedAccount:r,to:a}=t,{coinfig:c}=window.coins[r.coin],d="string"==typeof e.to&&e.to===ye;return o.createElement(he,{onSubmit:()=>n.setStep({step:s.C.ENTER_AMOUNT})},o.createElement("div",null,o.createElement(i.o9,null,o.createElement(y.l,null,o.createElement(E.JO,{cursor:!0,onClick:()=>n.setStep({step:s.C.COIN_SELECTION}),role:"button",name:"arrow-back",color:"grey600",size:"24px",style:{marginRight:"20px"}}),o.createElement(E.xv,{size:"24px",color:"grey800",weight:600},o.createElement(u.Z,{id:"modals.sendcrypto.enteramount.title",defaultMessage:"Send"})))),o.createElement(h.Xv,{account:r,walletCurrency:l,coin:r.coin,displayOnly:!0,hideActionIcon:!0}),o.createElement(f.t,null,o.createElement(u.Z,{id:"copy.to",defaultMessage:"To"})),o.createElement(fe,null,o.createElement(p.Z,{name:"to",component:Form_TextWithQRScanner,onScan:e=>this.props.formActions.change(f.i,"to",e),placeholder:`${c.name} Address`})),d&&o.createElement(be,null,o.createElement(U.XG,null,o.createElement(u.Z,{id:"copy.invalid_addr",defaultMessage:"Invalid Address"})))),o.createElement(i.o9,null,o.createElement(E.zx,{nature:"primary",type:"submit","data-e2e":"enterToBtn",fullwidth:!0,jumbo:!0,disabled:!a||d},o.createElement(u.Z,{id:"buttons.next",defaultMessage:"Next"}))))}}const we=(0,x.Z)({destroyOnUnmount:!1,form:f.i,validate:e=>{return(t=e.to)?t.match(/[a-zA-Z0-9]{15,}/)?{to:!0}:{to:ye}:{to:!0};var t}})(ve),selectors_getData=()=>Object.keys(window.coins).filter((e=>{const{products:t,type:n}=window.coins[e].coinfig;return!t.includes("PrivateKey")&&t.includes("CustodialWalletBalance")&&"FIAT"!==n.name})),Ce=(0,g.ZP)(i.o9)`
  min-height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`,Ze=g.ZP.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
`,Te=g.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,Oe=g.ZP.div`
  position: relative;
`,Ae=g.ZP.div`
  position: absolute;
  top: -9px;
  right: -9px;
  padding: 2px;
  border-radius: 50%;
  background: ${({theme:e})=>e.white};
`,Se=(0,l.connect)((e=>({transaction:c.wl.wx.fM.getTransaction(e)})))((e=>{const t=e.transaction.cata({Failure:()=>o.createElement(E.JO,{name:"close-circle",size:"24px",color:"red600"}),Loading:()=>o.createElement(E.nZ,{height:"14px",width:"14px"}),NotAsked:()=>o.createElement(E.nZ,{height:"14px",width:"14px"}),Success:()=>o.createElement(E.JO,{name:"checkmark-circle-filled",size:"24px",color:"green600"})}),n=e.transaction.cata({Failure:e=>o.createElement(E.xv,{color:"red600",weight:600},"Error: ",e),Loading:()=>o.createElement(u.Z,{id:"copy.loading",defaultMessage:"Loading..."}),NotAsked:()=>o.createElement(u.Z,{id:"copy.loading",defaultMessage:"Loading..."}),Success:e=>{var t;return o.createElement(o.Fragment,null,new(N())(e.amount.value).plus((null===(t=e.fee)||void 0===t?void 0:t.value)||0).toString()," ",e.amount.symbol," ",o.createElement(u.Z,{id:"copy.sent",defaultMessage:"Sent"}))}});return o.createElement(Ce,null,o.createElement(Ze,null,o.createElement(E.JO,{onClick:e.close,cursor:!0,name:"close-circle",size:"20px",color:"grey400"})),o.createElement(Te,null,o.createElement(Oe,null,o.createElement(E.JO,{size:"72px",name:e.formValues.selectedAccount.coin}),o.createElement(Ae,null,t)),o.createElement(E.xv,{style:{marginTop:"32px"},size:"20px",weight:600,color:"grey800"},n)),e.transaction.cata({Failure:()=>o.createElement(E.zx,{nature:"light-red","data-e2e":"sendTryAgain",fullwidth:!0,jumbo:!0,onClick:()=>e.sendCryptoActions.setStep({step:s.C.ENTER_TO})},o.createElement(u.Z,{id:"copy.try_again",defaultMessage:"Try Again"})),Loading:()=>o.createElement(E.zx,{hidden:!0,fullwidth:!0,jumbo:!0,"data-e2e":""}),NotAsked:()=>o.createElement(E.zx,{hidden:!0,fullwidth:!0,jumbo:!0,"data-e2e":""}),Success:t=>o.createElement(E.zx,{nature:"light","data-e2e":"viewDetails",fullwidth:!0,jumbo:!0,onClick:()=>e.routerActions.push(`/${t.amount.symbol}/transactions`)},o.createElement(u.Z,{id:"copy.view_details",defaultMessage:"View Details"}))}))}));class ze extends o.PureComponent{constructor(e){super(e),this.handleClose=()=>{this.setState({show:!1}),setTimeout((()=>{this.props.close()}),i.x9)},this.state={show:!1}}componentDidMount(){this.setState({show:!0}),this.props.sendCryptoActions.fetchWithdrawalFees(),this.props.sendCryptoActions.fetchWithdrawalLocks()}componentWillUnmount(){this.props.sendCryptoActions.setStep({step:s.C.COIN_SELECTION})}render(){return o.createElement(i.ZP,Object.assign({},this.props,{isOpen:this.state.show,onClose:this.handleClose}),this.props.step===s.C.COIN_SELECTION&&o.createElement(i.FK,null,o.createElement(j,Object.assign({},this.props))),this.props.step===s.C.ENTER_TO&&o.createElement(i.FK,null,o.createElement(we,Object.assign({},this.props))),this.props.step===s.C.ENTER_AMOUNT&&o.createElement(i.FK,null,o.createElement(ue,Object.assign({},this.props))),this.props.step===s.C.CONFIRM&&o.createElement(i.FK,null,o.createElement(D,Object.assign({},this.props))),this.props.step===s.C.STATUS&&o.createElement(i.FK,null,o.createElement(Se,Object.assign({},this.props))))}}const ke=(0,l.connect)((e=>({formErrors:c.wl.cr.getFormSyncErrors(f.i)(e),formValues:c.wl.cr.getFormValues(f.i)(e),initialValues:{coin:e.components.sendCrypto.initialCoin,fix:"CRYPTO"},sendLimits:c.wl.wx.fM.getSendLimits(e).getOrElse({}),sendableCoins:selectors_getData(),step:c.wl.wx.fM.getStep(e),walletCurrency:c.wl.vE.Xd.getCurrency(e).getOrElse("USD")})),(e=>({formActions:(0,r.bindActionCreators)(c.Nw.cr,e),routerActions:(0,r.bindActionCreators)(c.Nw.Nd,e),sendCryptoActions:(0,r.bindActionCreators)(c.Nw.wx.sendCrypto,e),verifyIdentity:()=>e(c.Nw.wx.identityVerification.verifyIdentity({needMoreInfo:!1,origin:"Send",tier:2}))}))),je=(0,r.compose)((0,m.Z)(d.tl.SEND_CRYPTO_MODAL,{transition:i.x9}),ke,(0,a.Z)({destroyOnUnmount:!1,enableReinitialize:!0,form:f.i}))(ze)}}]);