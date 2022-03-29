"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[6291],{"./src/components/Exchange/index.tsx":(e,t,n)=>{n.d(t,{HK:()=>d,bp:()=>h,UO:()=>f,xy:()=>g,lb:()=>x,im:()=>s});var a=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),l=n("../blockchain-info-components/src/index.js"),r=n("./src/components/Form/index.ts"),o=n("../../node_modules/react/index.js"),i=n("../../node_modules/react-dom/index.js");const s=a.ZP.div`
  padding: 32px;
  max-width: 440px;
  box-sizing: border-box;
  border: 1px solid ${e=>e.theme.grey000};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`,d=(0,a.ZP)((c=r.vK,(m=class extends o.PureComponent{constructor(){super(...arguments),this.state={fontRatio:1},this.valueLength=0,this.componentRef=o.createRef(),this.resizeInputFont=()=>{const e=this.selectInput();if(!e)return;const{maxFontSize:t,onUpdate:n}=this.props,a=Number(t.replace(/px/,"")),l=(r=e.offsetWidth,o=a,i=(e=>/px/.test(e)?.62:0)(t),s=this.valueLength,r/(o*i*s));var r,o,i,s;l>0&&this.setState({fontRatio:l>1?1:l}),e.style.fontSize=a*this.state.fontRatio+"px",n(e,l,a)},this.updateValueLength=()=>{const e=this.selectInput();if(!e)return;const t=(e=>{const{length:t}=String(e),n=/\.*/.exec(e),a=/1*/.exec(e),l=n?n[0].length:0,r=a?a[0].length:0,o=t-l-r;return o!==t?o+l/2+r/1.3:t})(e.value);t!==this.valueLength&&(this.valueLength=t,this.resizeInputFont())},this.onValueChange=e=>{this.props.input.onChange(e),requestAnimationFrame(this.updateValueLength)}}componentDidMount(){window.addEventListener("resize",this.resizeInputFont),requestAnimationFrame((()=>{this.updateValueLength(),this.resizeInputFont()}))}componentDidUpdate(){requestAnimationFrame(this.updateValueLength)}componentWillUnmount(){window.removeEventListener("resizes",this.resizeInputFont)}selectInput(){const e=this.componentRef.current;if(!e)return;const t=(0,i.findDOMNode)(e);return t?t.querySelector("input"):void 0}render(){return o.createElement(c,Object.assign({},this.props,{input:Object.assign(Object.assign({},this.props.input),{onChange:this.onValueChange}),ref:this.componentRef}))}}).defaultProps={onUpdate:()=>{}},m))`
  height: 86px;
  max-width: ${({fiatActive:e})=>e?"100%":"75%"};
  > div {
    border: none;
    height: 100%;
    padding: 0;
    display: flex !important;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
  input {
    outline: 0;
    position: relative;
    font-weight: 500;
    font-size: 62px;
    line-height: 88px;
    height: 88px;
    padding: 0;
    width: 100%;
    min-width: 45px;
    max-width: 100%;
    border: none;
    text-align: center;
    color: ${e=>e.theme.textBlack};
    background-color: ${e=>e.theme.white};
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
  }
`;var c,m;const u=(0,a.ZP)(l.xv)`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`,p=((0,a.ZP)(u)`
  color: ${e=>e.color||e.theme.grey700};
  font-size: 16px;
`,a.ZP.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 8px 0;
  width: 100%;
`),g=(0,a.ZP)(p)`
  padding: 10px 18px;
  min-height: 72px;
  border-bottom: 1px solid ${e=>e.theme.grey000};
  &:last-child {
    border-bottom: 0px;
  }
`,f=((0,a.ZP)(l.xv)`
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 28px;
  font-weight: 400;
  text-align: center;
  margin-top: 16px;
  color: ${e=>e.theme.grey500};
`,a.ZP.div``),h=(0,a.ZP)(l.xv)`
  display: flex;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  color: ${e=>e.theme[e.color||"blue900"]};
`,x=(0,a.ZP)(h)`
  margin-top: 2px;
  text-align: right;
  font-weight: 400;
  font-size: 13px;
  color: ${e=>e.theme[e.color||"grey500"]};
`},"./src/components/Flyout/index.tsx":(e,t,n)=>{n.d(t,{r0:()=>oe,aG:()=>P,FK:()=>Re,$K:()=>B,rR:()=>N,M_:()=>R,gi:()=>L,ub:()=>Oops,Tg:()=>Te,o9:()=>Ie,gN:()=>RecurringBuy_FrequencyScreen,Ff:()=>InterestUploadDocuments_GetStarted,Iq:()=>S,He:()=>Brokerage_OrderSummary,Hj:()=>RecurringBuy_RecurringBuyDetails,HN:()=>RecurringBuy_GettingStarted,dV:()=>De,X2:()=>$e,Z6:()=>Le,Dx:()=>Ue,yT:()=>InterestUploadDocuments_UploadAndVerify,gd:()=>InterestUploadDocuments_Uploaded,B4:()=>We,ZP:()=>components_Flyout,x9:()=>je});var a=n("../../node_modules/react/index.js"),l=n("../../node_modules/framer-motion/dist/es/render/dom/motion.js"),r=n("../../node_modules/framer-motion/dist/es/components/AnimatePresence/index.js"),o=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),i=n("../blockchain-info-components/src/index.js"),s=n("./src/services/styles/index.ts"),d=n("./node_modules/react-intl/lib/src/components/message.js"),c=n("../../node_modules/react-redux/es/index.js"),m=n("../../node_modules/redux-form/es/index.js"),u=n("../../node_modules/redux-form/es/Field.js"),p=n("../../node_modules/redux-form/es/reduxForm.js"),g=n("../blockchain-wallet-v4/src/exchange/currencies/index.ts"),f=n("../blockchain-wallet-v4/src/exchange/utils.ts"),h=n("./src/components/Exchange/index.tsx"),x=n("./src/components/Flyout/model.tsx"),y=n("./src/data/components/exchange/services.ts");var E=n("./src/components/Form/index.ts"),b=n("./src/components/Rows/index.ts"),v=n("./src/components/SimpleBuy/index.tsx"),w=n("./src/data/types.ts"),_=n("./src/utils/helpers.ts");const k=(0,o.ZP)(E.l0)`
  width: 100%;
  height: 100%;
`,Z=o.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`,M=o.ZP.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  position: relative;
  padding: 24px;
  justify-content: center;
  border: 0;
`,O=o.ZP.div`
  background-color: ${e=>e.theme["fiat-light"]};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  position: absolute;
  right: -20px;
`,C=(0,o.ZP)(h.HK)`
  ${e=>e.meta.error?`\n    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;\n    transform: translate3d(0, 0, 0);\n    backface-visibility: hidden;\n    perspective: 1000px;\n\n    input {\n      color: ${e.theme.grey700};\n    }`:""}

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`,LimitSection=({fee:e="0",fiatCurrency:t,limitAmount:n,orderType:l})=>{switch(l){case w.vU.WITHDRAW:const l=a.createElement(a.Fragment,null,(0,f.LE)({unit:t,value:(0,y.b)("FIAT",n)}),e>0&&a.createElement("div",{style:{display:"flex",marginTop:"4px"}},a.createElement(i.xv,{size:"14px",weight:500},a.createElement(d.Z,{id:"modals.withdraw.fee",defaultMessage:"Withdraw Fee"}))," ",a.createElement(i.xv,{size:"14px",color:"grey600",weight:500,style:{marginLeft:"4px"}},(0,f.LE)({unit:t,value:(0,y.b)("FIAT",e)}))));return a.createElement(b.R,{toolTip:a.createElement(i.Qt,{inline:!0},a.createElement(i.xv,{color:"grey600",size:"14px",weight:500},a.createElement(d.Z,{id:"modals.brokerage.withdraw_holding_period",defaultMessage:"Newly added funds are subject to a holding period. You can transfer between your Trading, Rewards, and Exchange accounts in the meantime."})),a.createElement(i.rU,{weight:500,size:"14px",target:"_blank",href:"/support/hc/en-us/articles/360051018131-Trading-Account-Withdrawal-Holds"},a.createElement(d.Z,{id:"buttons.learn_more",defaultMessage:"Learn More"}))),subTitle:l,title:a.createElement(d.Z,{id:"modals.withdraw.available_for_withdrawal",defaultMessage:"Available for Withdrawal"}),additionalText:a.createElement(Z,null,a.createElement(i.JO,{color:t,name:t,size:"32px"}),a.createElement(O,null,a.createElement(i.JO,{size:"24px",color:t,name:"arrow-up"})))});case w.vU.DEPOSIT:const r=a.createElement(a.Fragment,null,(0,f.LE)({unit:t,value:(0,y.b)("FIAT",n)})," ",a.createElement(d.Z,{id:"copy.available",defaultMessage:"Available"}));return a.createElement(b.R,{subTitle:r,title:a.createElement(d.Z,{id:"modals.brokerage.daily_limit",defaultMessage:"Daily Limit"}),additionalText:a.createElement(Z,null,a.createElement(i.JO,{color:t,name:t,size:"32px"}),a.createElement(O,null,a.createElement(i.JO,{size:"24px",color:t,name:"arrow-down"})))});default:return a.createElement(a.Fragment,null)}},debounceValidate=(e,t)=>(0,_.Ds)(((n,l)=>{const r=((e,t)=>{const n=(0,y.b)("FIAT",e.max),l=(0,y.b)("FIAT",e.min),r=(0,f.LE)({unit:"USD",value:n}),o=(0,f.LE)({unit:"USD",value:l});if(""!==t)return Number(t)>Number(n)?{amount:a.createElement(d.Z,{id:"copy.forms.amount_max",defaultMessage:"Your maximum amount is {amount}",values:{amount:r}})}:Number(t)<Number(l)?{amount:a.createElement(d.Z,{id:"copy.forms.amount_min",defaultMessage:"Your minimum amount is {amount}",values:{amount:o}})}:void 0})(e,l);r&&t((0,m.cS)("brokerageTx",r))}),300),renderAmount=e=>{var t;return a.createElement("div",{style:{display:"flex",flex:1,flexDirection:"column"}},a.createElement("div",{style:{alignItems:"center",display:"flex",flexDirection:"row",justifyContent:"center"}},a.createElement(i.xv,{size:"56px",color:"textBlack",weight:500},null===(t=g.Z[e.fiatCurrency])||void 0===t?void 0:t.units[e.fiatCurrency].symbol),a.createElement(C,Object.assign({},e))),a.createElement("div",{style:{alignItems:"center",display:"flex",flexDirection:"row",height:"1rem",justifyContent:"center",marginTop:"5px"}},e.meta.error&&a.createElement(i.xv,null,e.meta.error)))},z=(0,_.jz)((e=>{const t=(0,c.useDispatch)();return a.createElement(Ie,null,a.createElement(M,{id:"amount-row"},a.createElement(u.Z,Object.assign({"data-e2e":e.orderType===w.vU.DEPOSIT?"depositAmountInput":"withdrawAmountInput",name:"amount",component:renderAmount,fiatCurrency:e.fiatCurrency,onChange:debounceValidate(e.limits,t),normalize:x.Kt,maxFontSize:"56px",placeholder:"0",fiatActive:!0},{autoFocus:!0,hideError:!0}))))})),Account=({handleMethodClick:e,invalid:t,paymentAccount:n,paymentMethod:l})=>a.createElement(i.xu,{disabled:t,role:"button","data-e2e":"paymentMethodSelect",onClick:e,isMethod:!!n},a.createElement(v.$s,{showBackground:!n},(0,x.q7)(Object.assign(Object.assign({},l),n),!1,t)),a.createElement(x.KW,{isMethod:!!n},(0,x.G)(n)),a.createElement(x.$e,null,a.createElement(x.AD,{cursor:!0,disabled:t,name:"arrow-back",size:"20px",color:"grey600"}))),NextButton=({invalid:e,orderType:t,paymentAccount:n,pristine:l,submitting:r})=>a.createElement(i.zx,{"data-e2e":t===w.vU.DEPOSIT?"submitDepositAmount":"withdrawNext",height:"48px",size:"16px",nature:"primary",type:"submit",fullwidth:!0,disabled:e||l||r||!n,onClick:()=>{}},r?a.createElement(i.JA,{height:"16px",width:"16px",color:"white"}):a.createElement(d.Z,{id:"buttons.next",defaultMessage:"Next"})),P=(0,p.Z)({destroyOnUnmount:!1,form:"brokerageTx"})((({fee:e,fiatCurrency:t,handleBack:n,handleMethodClick:l,handleSubmit:r,invalid:o,minWithdrawAmount:i,orderType:s,paymentAccount:d,paymentMethod:c,pristine:m,submitting:u,withdrawableBalance:p})=>{const g=(0,x.e1)({fee:e,minWithdrawAmount:i,orderType:s,paymentMethod:c,withdrawableBalance:p});return a.createElement(k,{onSubmit:r},a.createElement(B,null,a.createElement(L,{"data-e2e":"depositBackToDepositMethods",mode:s===w.vU.DEPOSIT?"back":"close",onClick:n},a.createElement(x.YI,{fiatCurrency:t,orderType:s})),a.createElement(N,{mode:"top"},(s===w.vU.DEPOSIT||s===w.vU.WITHDRAW)&&a.createElement(LimitSection,{fee:e,fiatCurrency:t,orderType:s,limitAmount:p||c.limits.max}),a.createElement("div",{style:{display:"flex",flex:1,flexDirection:"column",justifyContent:"center"}},a.createElement(z,{fiatCurrency:t,limits:g,orderType:s}))),a.createElement(R,null,a.createElement(Account,{handleMethodClick:l,invalid:o,paymentAccount:d,paymentMethod:c}),a.createElement(NextButton,{paymentAccount:d,invalid:o,orderType:s,pristine:m,submitting:u}))))}));var A=n("../../node_modules/moment/moment.js"),T=n.n(A);const S=(0,a.memo)((({fiatCurrency:e,handleHeaderClick:t,locks:n,totalLockedAmount:l})=>a.createElement(B,null,a.createElement(L,{mode:"close","data-e2e":"fundsOnHoldFlyout",onClick:t},a.createElement(d.Z,{id:"copy.on_hold",defaultMessage:"On Hold"})),a.createElement(N,{mode:"top"},a.createElement("div",{style:{padding:"0 40px 32px"}},a.createElement(i.Qt,{inline:!0},a.createElement(i.xv,{weight:400,lineHeight:"24px",size:"14px",color:"grey600"},a.createElement(d.Z,{id:"modals.brokerage.withdraw_holding_period",defaultMessage:"Newly added funds are subject to a holding period. You can transfer between your Trading, Rewards, and Exchange accounts in the meantime."})),a.createElement(i.rU,{weight:400,size:"14px",target:"_blank",href:"/support/hc/en-us/articles/360051018131-Trading-Account-Withdrawal-Holds"},a.createElement(d.Z,{id:"buttons.learn_more",defaultMessage:"Learn More"})))),a.createElement("div",null,a.createElement(b.R,{text:(0,f.LE)({unit:e,value:(0,y.b)("FIAT",l)}),title:a.createElement(d.Z,{id:"copy.on_hold",defaultMessage:"On Hold"})})),n.length>0&&a.createElement("div",{style:{display:"flex",justifyContent:"space-between",padding:"32px 40px 9px"}},a.createElement(i.xv,{uppercase:!0,size:"12px",weight:500,color:"grey400",style:{letterSpacing:"1px"}},a.createElement(d.Z,{id:"copy.held_until",defaultMessage:"Held until"})),a.createElement(i.xv,{uppercase:!0,size:"12px",weight:500,color:"grey400",style:{letterSpacing:"1px"}},a.createElement(d.Z,{id:"copy.amount",defaultMessage:"Amount"}))),n.map((({amount:e,expiresAt:t})=>a.createElement(b.R,{key:t,text:(0,f.LE)({unit:e.currency,value:(0,y.b)("FIAT",e.amount)}),title:T()(t).format("MMMM Do YYYY")})))),a.createElement(R,null,a.createElement(i.zx,{fullwidth:!0,nature:"primary",onClick:t,"data-e2e":"onHoldGotItButton"},a.createElement(d.Z,{id:"copy.got_it",defaultMessage:"Got It"}))))));var D=n("../blockchain-wallet-v4/src/types/index.ts");const j=o.ZP.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`,B=(0,a.memo)((e=>a.createElement(j,null,e.children))),F=o.ZP.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: ${e=>"top"===e.mode?"flex-start":"middle"===e.mode?"space-around":"space-between"};
  ${e=>"middle"===e.mode&&"align-items: center;"}
`,N=(0,a.memo)((e=>a.createElement(F,{mode:e.mode},e.children))),I=o.ZP.div`
  width: 100%;
  box-sizing: border-box;
  padding: 40px;

  @media (max-width: 767px) {
    padding: 20px;
  }
`,R=a.memo((e=>a.createElement(I,null,e.children))),$=o.ZP.div`
  width: 100%;
  box-sizing: border-box;
  padding: 40px;
  border-bottom: ${e=>e.theme.grey000};

  @media (max-width: 767px) {
    padding: 20px;
  }
`,U=(0,o.ZP)(i.xv)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,W=o.ZP.div`
  display: flex;
  align-items: center;
`,L=(0,a.memo)((e=>a.createElement($,null,a.createElement(U,{color:"grey800",size:"20px",weight:600},a.createElement(W,null,"back"===e.mode&&a.createElement(i.JO,{cursor:!0,"data-e2e":e["data-e2e"],name:"arrow-back",size:"20px",color:"grey600",role:"button",style:{marginRight:"8px"},onClick:e.onClick}),e.children),"close"===e.mode&&a.createElement(i.JO,{cursor:!0,"data-e2e":"RecurringBuysCloseButton",name:"close",size:"20px",color:"grey600",role:"button",onClick:e.onClick})))),((e,t)=>e.mode===t.mode)),H=o.ZP.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,Y=o.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 28px;
  z-index: 100;
  background: ${e=>e.theme[e.color]};
  transform: translateX(31px);
  position: absolute;
`,K=o.ZP.div`
  display: flex;
  justify-content: center;
`,J=(0,o.ZP)(i.xv)`
  margin: 32px 0 24px 0;
  width: 100%;
`,q=(0,o.ZP)(H)`
  text-align: center;
  a {
    color: ${e=>e.theme.blue600};
    text-decoration: none;
  }
`,V=o.ZP.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  height: 180px;
  margin-bottom: 15px;
`,Brokerage_OrderSummary=({baseAmount:e,baseCurrency:t,children:n,counterAmount:l,currencySymbol:r,frequencyText:o,handleClose:s,handleCompleteButton:c,handleOkButton:m,lockTime:u,orderState:p,orderType:g,outputCurrency:f,paymentState:h,paymentType:x})=>{const y="PENDING_DEPOSIT"===p,E=y&&x===D.t8.BANK_TRANSFER,b=y&&"WAITING_FOR_3DS_RESPONSE"===h,v=T().duration(u,"seconds").days();return a.createElement(B,null,a.createElement(L,{"data-e2e":"sbCloseModalIcon",mode:"close",onClick:s}),a.createElement(N,{mode:"middle"},a.createElement("div",{style:{padding:"0 77px",textAlign:"center"}},a.createElement(K,null,a.createElement(i.JO,{color:f,name:f,size:"64px"}),"FINISHED"===p?a.createElement(Y,{color:"white"},a.createElement(i.JO,{name:"checkmark-circle-filled",size:"24px",color:"green400"})):"FAILED"===p?a.createElement(Y,{color:"white"},a.createElement(i.JO,{name:"close-circle",size:"32px",color:"orange500"})):a.createElement(Y,{color:"grey600"},a.createElement(i.JO,{name:"pending",size:"32px",color:"white"}))),a.createElement(J,null,a.createElement(i.xv,{"data-e2e":"sbSddPurchasing",size:"20px",weight:600,color:"grey800"},E?a.createElement(d.Z,{id:"modals.simplebuy.summary.buy_started",defaultMessage:"{amount} {coin} Buy Started",values:{amount:e,coin:t}}):y?a.createElement(d.Z,{id:"modals.simplebuy.summary.pending_buy",defaultMessage:"Pending Buy"}):"FAILED"===p?a.createElement(d.Z,{id:"copy.bank_linked_error_title_connectionrejected",defaultMessage:"Connection Rejected"}):a.createElement(d.Z,{id:"modals.simplebuy.summary.purchased",defaultMessage:"{amount} {coin} Purchased",values:{amount:e,coin:t}})),a.createElement(i.xv,{size:"14px",weight:500,color:"grey600",style:{marginTop:"8px"}},"FINISHED"===p&&a.createElement(d.Z,{id:"modals.simplebuy.transferdetails.available1",defaultMessage:"Your {coin} is now available in your Trading Account.",values:{coin:t}}),"FAILED"===p&&a.createElement(a.Fragment,null,a.createElement(d.Z,{id:"modals.simplebuy.rejected.bank_failed",defaultMessage:"Please try making your purchase again. If this keeps happening, please"})," ",a.createElement(i.rU,{size:"14px",weight:500,target:"_blank",href:"/support/hc/en-us/sections/360007997071-Buy-Crypto"},a.createElement(d.Z,{id:"buttons.contact_support",defaultMessage:"Contact Support"})),"."),y||"PENDING_CONFIRMATION"===p&&a.createElement(d.Z,{id:"modals.simplebuy.transferdetails.pending1",defaultMessage:"Your order is pending. Your funds will be available in your Trading Account once the order is complete."}),E&&a.createElement(d.Z,{id:"modals.simplebuy.transferdetails.ach_pending",defaultMessage:"We are completing your purchase now. Expect the funds to be withdrawn from your bank in 5 business days. Check the status of your order at anytime from Wallet’s Activity."})),o&&"FAILED"!==p&&a.createElement(i.xv,{size:"14px",weight:500,color:"grey600",style:{marginTop:"8px"}},a.createElement(d.Z,{id:"modals.simplebuy.recurringbuy.success",defaultMessage:"We will buy {amount} of Bitcoin {frequency} at that moment’s market price. Cancel this recurring buy at anytime.",values:{amount:`${r}${l}`,frequency:o}}))),b&&a.createElement(H,null,a.createElement(i.zx,{"data-e2e":"sbRetryCard",size:"16px",height:"48px",nature:"primary",onClick:c},a.createElement(d.Z,{id:"modals.simplebuy.summary.complete_card_payment",defaultMessage:"Complete Card Payment"}))),"BUY"===g&&(x===D.t8.PAYMENT_CARD||x===D.t8.USER_CARD)&&a.createElement(q,null,a.createElement(i.xv,{color:"grey600",size:"14px",weight:500},a.createElement(d.Z,{id:"modals.simplebuy.summary.complete_card_info_main",defaultMessage:"Your final amount might change due to market activity. For security purposes, a {days} day holding period will be applied to your funds. You can Sell or Swap during this time. We will notify you once the funds are available to be withdrawn.",values:{days:v}})),a.createElement(i.xv,{color:"grey600",size:"14px",weight:500,style:{marginTop:"16px"}},a.createElement("span",null,a.createElement(d.Z,{id:"modals.simplebuy.summary.complete_card_info_additional",defaultMessage:"In the meantime, you can sell into Cash, swap, and trade within our.com."})," ",a.createElement("a",{href:"/support/hc/en-us/articles/360048200392",rel:"noopener noreferrer",target:"_blank"},a.createElement(d.Z,{id:"copy.learn_more",defaultMessage:"Learn more"}))))),"BUY"===g&&x===D.t8.BANK_TRANSFER&&"FAILED"!==p&&!E&&a.createElement(q,null,a.createElement(i.xv,{color:"grey600",size:"14px",weight:500},a.createElement(d.Z,{id:"modals.simplebuy.summary.ach_lock",defaultMessage:"Note: You will not be able to Send or Withdraw these funds from your Wallet for the next {days} days.",values:{days:v}})," ",a.createElement("span",null,a.createElement("a",{href:"/support/hc/en-us/articles/360048200392",rel:"noopener noreferrer",target:"_blank"},a.createElement(d.Z,{id:"copy.learn_more",defaultMessage:"Learn more"}))))))),a.createElement(R,null,n&&a.createElement(V,null,n),"BUY"===g&&"FAILED"!==p&&a.createElement(i.zx,{fullwidth:!0,"data-e2e":"sbDone",size:"16px",height:"48px",nature:"primary",onClick:m,style:{marginBottom:"16px"}},a.createElement(d.Z,{id:"buttons.ok",defaultMessage:"OK"}))))},G=o.ZP.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 56px;
  box-sizing: border-box;
`,X=(0,o.ZP)(i.xv)`
  margin: 40px 0 24px;
`,Oops=e=>{let t=a.createElement(d.Z,{id:"buttons.close",defaultMessage:"Close"});return e.action,t=a.createElement(d.Z,{id:"buttons.tryagain",defaultMessage:"Try Again"}),a.createElement(G,null,a.createElement("div",null,a.createElement(i.Ee,{width:"48px",height:"48px",name:"world-alert",srcset:{"world-alert2":"2x","world-alert3":"3x"}}),a.createElement(X,{weight:600,size:"20px",lineHeight:"150%"},a.createElement(d.Z,{id:"modals.simplebuy.eligible.failure",defaultMessage:"Oops. Something went wrong on our side. Please try again."})),a.createElement(i.zx,{fullwidth:!0,height:"48px","data-e2e":e["data-e2e"],nature:"primary",size:"16px",onClick:e.handler},t)))};var Q=n("./src/data/index.ts"),ee=n("./src/services/forms/index.js");const{INTEREST_UPLOAD_DOCUMENT:te}=Q.o4.wx.oP,ne=o.ZP.div`
  display: flex;
  padding: 40px 40px 0 40px;
`,ae=o.ZP.div`
  padding: 0 40px;
  display: flex;
  flex-direction: column;
`,le=o.ZP.div`
  height: 20px;
  border-bottom: 1px solid ${e=>e.theme.grey000};
  margin-bottom: 40px;
`,re=(0,o.ZP)(E.l0)`
  height: 100%;
  display: flex;
  flex-direction: column;
`,minValue=e=>e&&e.length<4?a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.additional_info.error",defaultMessage:"Must be at least {minChars} characters length",values:{minChars:4}}):void 0,oe=(0,p.Z)({destroyOnUnmount:!1,form:te})((e=>{const t=(0,a.useCallback)((()=>{e.close()}),[]),n=e.invalid||e.submitting||!e.formValues,l="US"===(null==e?void 0:e.countryCode);return a.createElement(B,null,a.createElement(re,{onSubmit:e.handleSubmit},a.createElement(L,{"data-e2e":"InterestUploadDocumentsCloseButton",mode:"back",onClick:t},a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.additional_info.headline",defaultMessage:"Additional Information"})),a.createElement(N,{mode:"top"},a.createElement(ae,null,a.createElement(i.xv,{size:"14px",weight:500,color:"grey900",lineHeight:"20px"},a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.additional_info.description",defaultMessage:"Please fill out this form to the best of your knowledge and then proceed to upload documents on the next screen."}))),a.createElement(ne,null,a.createElement(E.xJ,null,a.createElement(E.lX,{htmlFor:"occupation"},a.createElement(i.xv,{weight:600,size:"14px",color:"grey900"},a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.additional_info.current_job",defaultMessage:"Current Job Title or Occupation"}))),a.createElement(u.Z,{name:"occupation",errorBottom:!0,component:E.zC,validate:[ee.C1,minValue]}))),a.createElement(le,null),a.createElement(ae,null,a.createElement(i.xv,{size:"14px",weight:500,color:"grey900",lineHeight:"20px"},a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.additional_info.intend_title",defaultMessage:"What’s the intended use of the account?"}))),a.createElement(ne,null,a.createElement(E.xJ,null,a.createElement(E.lX,{htmlFor:"expectedDeposits"},a.createElement(i.xv,{weight:600,size:"14px",color:"grey900"},a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.additional_info.total_amount",defaultMessage:"Expected amounts, currencies and period"}))),a.createElement(u.Z,{name:"expectedDeposits",errorBottom:!0,component:E.zC,validate:[ee.C1,minValue],placeholder:"over 100k, BTC, in a 2 years period"}))),a.createElement(le,null),l&&a.createElement(a.Fragment,null,a.createElement(ae,null,a.createElement(i.xv,{size:"14px",weight:500,color:"grey900",lineHeight:"20px"},a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.additional_info.ssn_title",defaultMessage:"What is your Social Security Number?"}))),a.createElement(ne,null,a.createElement(E.xJ,null,a.createElement(E.lX,{htmlFor:"ssn"},a.createElement(i.xv,{weight:600,size:"14px",color:"grey900"},a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.additional_info.ssn",defaultMessage:"SSN (US Only)"}))),a.createElement(u.Z,{name:"ssn",errorBottom:!0,component:E.zC,validate:[ee.Yh],placeholder:"123-1243-12412"}))))),a.createElement(R,null,a.createElement(i.zx,{nature:"primary","data-e2e":"additionalInfoUploadDocument",type:"submit",fullwidth:!0,height:"48px",style:{marginTop:"16px"},disabled:n},a.createElement(d.Z,{id:"buttons.next",defaultMessage:"Next"})))))})),ie=o.ZP.div`
  padding: 0 40px;
  display: flex;
  flex-direction: column;
`,se=o.ZP.div`
  margin-top: 44px;
`,de=o.ZP.div`
  padding: 20px 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,ce=o.ZP.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`,me=(0,o.ZP)(i.xv)`
  color: ${e=>e.theme.grey900};
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
`,ue=(0,o.ZP)(i.xv)`
  color: ${e=>e.theme.grey900};
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
`,InterestUploadDocuments_GetStarted=({nextStep:e,previousStep:t})=>a.createElement(B,null,a.createElement(L,{"data-e2e":"InterestUploadDocumentsCloseButton",mode:"back",onClick:t},a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.get_started.title",defaultMessage:"Upload & Verify"})),a.createElement(N,{mode:"top"},a.createElement(ie,null,a.createElement(i.xv,{size:"14px",weight:500,color:"grey900",lineHeight:"20px"},a.createElement(a.Fragment,null,a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.get_started.description",defaultMessage:"Please upload a clear photo of each file or document listed below."})," ",a.createElement(i.rU,{size:"16px",weight:500,target:"_blank",href:"/support/hc/en-us/"},a.createElement(d.Z,{id:"buttons.learn_more_arrow",defaultMessage:"Learn more ->"}))))),a.createElement(se,null,a.createElement(de,null,a.createElement("div",null,a.createElement(i.Ee,{name:"proof-of-address",size:"32px"})),a.createElement(ce,null,a.createElement(me,null,a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.get_started.proof_of_current_address",defaultMessage:"Proof of Current Address"})),a.createElement(ue,{color:"grey900",size:"14px",weight:500},a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.get_started.bank_acccount_statement",defaultMessage:"Bank Account Statement or Utility Bill"})),a.createElement(i.xv,{color:"grey600",lineHeight:"1.5",size:"12px",weight:500},a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.get_started.bank_acccount_statement.description",defaultMessage:"Must be dated within the last 90 days or a council tax bill for the current tax year."})))),a.createElement(de,null,a.createElement("div",null,a.createElement(i.Ee,{name:"source-of-wealth",size:"32px"})),a.createElement(ce,null,a.createElement(me,null,a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.get_started.source_of_wealth.source_of_wealth",defaultMessage:"Source of Wealth"})),a.createElement(ue,{color:"grey900",size:"14px",weight:500},a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.get_started.source_of_wealth.bank_account",defaultMessage:"Bank Account Statement or Pay Stub"})),a.createElement(i.xv,{color:"grey600",lineHeight:"1.5",size:"12px",weight:500},a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.get_started.source_of_wealth.information",defaultMessage:"Information and/or supporting documentation to establish source of wealth."})))))),a.createElement(R,null,a.createElement(i.zx,{nature:"primary","data-e2e":"additionalInfoUploadDocument",type:"button",fullwidth:!0,height:"48px",style:{marginTop:"16px"},onClick:e},a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.get_started.button",defaultMessage:"Get Started"})))),pe=o.ZP.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${e=>e.theme.grey100};
  box-sizing: border-box;
  border-radius: 12px;
  padding: 16px 24px;
  ${e=>e.isDragging&&o.iv`
      border-color: ${e=>e.theme.blue600};
    `}
  ${e=>e.error&&o.iv`
      border-color: ${e=>e.theme.red400};
      background-color: ${e=>e.theme.red100};
    `}
`,ge=o.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    flex-direction: column;
    justify-content: center;
  }
`,fe=o.ZP.div`
  display: flex;
  flex-direction: column;
  margin-left: 22px;
  min-height: 36px;
  width: 230px;
`,he=o.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 65px;
`,xe=o.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  > div {
    margin: 0 8px;
  }
`,components_DragAndDrop=e=>{const t=(0,a.useRef)(null),n=(0,a.useRef)(null),[l,r]=(0,a.useState)(!1),[o,s]=(0,a.useState)(0),handleDrag=e=>{e.preventDefault(),e.stopPropagation()},handleDragIn=e=>{e.preventDefault(),e.stopPropagation(),s(o+1),e.dataTransfer.items&&e.dataTransfer.items.length>0&&r(!0)},handleDragOut=e=>{e.preventDefault(),e.stopPropagation(),s(o-1),0===o&&r(!1)},handleDrop=t=>{t.preventDefault(),t.stopPropagation(),r(!0),t.dataTransfer.files&&t.dataTransfer.files.length>0&&(e.handleDrop(t.dataTransfer.files),t.dataTransfer.clearData(),s(0),r(!1))};return(0,a.useEffect)((()=>{let e;if(t&&t.current&&void 0!==t.current)return t.current.addEventListener("dragenter",handleDragIn,!1),t.current.addEventListener("dragleave",handleDragOut,!1),t.current.addEventListener("dragover",handleDrag,!1),t.current.addEventListener("drop",handleDrop,!1),e=t.current,()=>{e&&(e.removeEventListener("dragenter",handleDragIn,!1),e.removeEventListener("dragleave",handleDragOut,!1),e.removeEventListener("dragover",handleDrag,!1),e.removeEventListener("drop",handleDrop,!1))}}),[]),a.createElement("div",{style:{position:"relative"},ref:t},a.createElement("input",{type:"file",size:50,onChange:t=>{t.preventDefault(),t.stopPropagation(),t.target.files[0]&&(e.handleDrop(t.target.files[0]),s(0))},style:{display:"none"},ref:n}),a.createElement(pe,{isDragging:l,error:e.error},a.createElement(ge,null,a.createElement(i.JO,{name:e.error?"close-circle":e.fileUploaded?"checkmark-circle-filled":"plus-in-circle-filled",size:"22px",color:e.error?"red600":e.fileUploaded?"green400":"blue600"})),a.createElement(fe,null,a.createElement("div",null,a.createElement(i.xv,{size:"14px",weight:600,lineHeight:"20px",color:e.error?"red400":"grey900"},(c=(null==e?void 0:e.isOptional)||!1,m=e.isProofOfAddress||!1,u=e.docNumber,m?c?a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.upload_and_verify.proof_of_address_optional",defaultMessage:"Proof of Address {no} (Optional)",values:{no:u}}):a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.upload_and_verify.proof_of_address",defaultMessage:"Proof of Address {no}",values:{no:u}}):c?a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.upload_and_verify.source_of_wealth_optional",defaultMessage:"Source of Wealth {no} (Optional)",values:{no:u}}):a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.upload_and_verify.source_of_wealth",defaultMessage:"Source of Wealth {no}",values:{no:u}})))),a.createElement("div",null,e.fileUploaded?a.createElement(i.xv,{size:"12px",weight:500,lineHeight:"20px"},e.fileName):a.createElement(i.xv,{size:"12px",weight:500,lineHeight:"20px"},a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.upload_and_verify.drag_and_drop",defaultMessage:"Drag and Drop or"})," ",a.createElement(i.rU,{size:"14px",weight:500,onClick:e=>{n&&n.current&&void 0!==n.current&&n.current.click()}},a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.upload_and_verify.browse",defaultMessage:"browse ->"}))))),e.fileUploaded&&a.createElement(he,null,a.createElement(xe,null,a.createElement(i.rU,{size:"14px",weight:500,onClick:e.onFileDelete},a.createElement(i.Ee,{name:"file-delete"})),a.createElement(i.rU,{size:"14px",weight:500,onClick:e.onFileDownload},a.createElement(i.Ee,{name:"file-download"}))))));var c,m,u};var __awaiter=function(e,t,n,a){return new(n||(n=Promise))((function(l,r){function fulfilled(e){try{step(a.next(e))}catch(e){r(e)}}function rejected(e){try{step(a.throw(e))}catch(e){r(e)}}function step(e){e.done?l(e.value):function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((a=a.apply(e,t||[])).next())}))};const ye=(0,o.ZP)(i.xv)`
  color: ${e=>e.theme.grey900};
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
`,Ee=(0,o.ZP)(i.xv)`
  color: ${e=>e.theme.grey900};
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
`,be=o.ZP.div`
  height: 20px;
  border-bottom: 1px solid ${e=>e.theme.grey000};
  margin: 40px 0;
`,ve=o.ZP.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
`,we=o.ZP.div`
  margin-top: 16px;
`,_e=(0,o.ZP)(we)`
  margin-top: 40px;
`,InterestUploadDocuments_UploadAndVerify=e=>{const[t,n]=(0,a.useState)(!1),[l,r]=(0,a.useState)({proofOfAddress1:!1,proofOfAddress2:!1,sourceOfWealth1:!1,sourceOfWealth2:!1}),[o,s]=(0,a.useState)({proofOfAddress1:!1,proofOfAddress2:!1,sourceOfWealth1:!1,sourceOfWealth2:!1}),[c,m]=(0,a.useState)({proofOfAddress1:null,proofOfAddress2:null,sourceOfWealth1:null,sourceOfWealth2:null}),{maxAllowedFileSizeMBs:u,validTypes:p}=e.documentLimits,g=p.join(","),getSizeInMB=(e,t=!0)=>{const n=e/1024/1024;return`${Math.round(100*n)/100}${t?"MB":""}`},handleDrop=(e,t)=>{let n;if(e.length){if(e&&e.length>1)return void s(Object.assign(Object.assign({},o),{[t]:!0}));n=e[0]}else n=e;const a=n.name.split(".").pop()||"",i=getSizeInMB(Number(n.size),!1);p.includes(a)?Number(i)>u?s(Object.assign(Object.assign({},o),{[t]:!0})):(s(Object.assign(Object.assign({},o),{[t]:!1})),r(Object.assign(Object.assign({},l),{[t]:!0})),c[t]=n,m(c)):s(Object.assign(Object.assign({},o),{[t]:!0}))},fileDownload=e=>{const t=c[e],n=document.createElement("a");n.href=window.URL.createObjectURL(t),n.download=t.name,n.click()},fileDelete=e=>{const{keepSecond:t,name:n,secondName:a}=e;if(t&&a&&c[a]){const e=c[a],t=o[a];m(Object.assign(Object.assign({},c),{[n]:e,[a]:null})),r(Object.assign(Object.assign({},l),{[n]:!0,[a]:!1})),s(Object.assign(Object.assign({},o),{[a]:t}))}else m(Object.assign(Object.assign({},c),{[n]:null})),r(Object.assign(Object.assign({},l),{[n]:!1})),s(Object.assign(Object.assign({},o),{[n]:!1}))},getFileName=e=>{if(c[e])return`${c[e].name}  - ${getSizeInMB(Number(c[e].size))}`},f=null===c.proofOfAddress1||null===c.sourceOfWealth1||Object.values(o).some((e=>e))||t;return a.createElement(B,null,a.createElement(L,{"data-e2e":"InterestUploadAndVerifiedNextStep",mode:"back",onClick:e.previousStep},a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.get_started.title",defaultMessage:"Upload & Verify"})),a.createElement(N,{mode:"top"},a.createElement(ve,null,a.createElement(i.xv,{color:"grey900",lineHeight:"20px",size:"14px",weight:500,style:{marginBottom:"45px"}},a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.upload_and_verify.please_upload",defaultMessage:"Please upload a high resolution file ({files}) of each item below. Max file size is {maxSize}MB each.",values:{files:g,maxSize:u}})),a.createElement(ye,null,a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.get_started.proof_of_current_address",defaultMessage:"Proof of Current Address"})),a.createElement(Ee,{color:"grey900",size:"14px",weight:500,lineHeight:"20px"},a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.get_started.bank_acccount_statement",defaultMessage:"Bank Account Statement or Utility Bill"})),a.createElement(i.xv,{color:"grey600",lineHeight:"1.5",size:"12px",weight:500},a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.get_started.bank_acccount_statement.description",defaultMessage:"Must be dated within the last 90 days or a council tax bill for the current tax year."})),a.createElement(we,null,a.createElement(components_DragAndDrop,{handleDrop:e=>handleDrop(e,"proofOfAddress1"),docNumber:"1",fileUploaded:l.proofOfAddress1,isProofOfAddress:!0,error:o.proofOfAddress1,fileName:getFileName("proofOfAddress1"),onFileDelete:()=>fileDelete({keepSecond:!0,name:"proofOfAddress1",secondName:"proofOfAddress2"}),onFileDownload:()=>fileDownload("proofOfAddress1")})),l.proofOfAddress1&&a.createElement(_e,null,a.createElement(components_DragAndDrop,{handleDrop:e=>handleDrop(e,"proofOfAddress2"),docNumber:"2",fileUploaded:l.proofOfAddress2,isOptional:!0,isProofOfAddress:!0,error:o.proofOfAddress2,fileName:getFileName("proofOfAddress2"),onFileDelete:()=>fileDelete({name:"proofOfAddress2"}),onFileDownload:()=>fileDownload("proofOfAddress2")}))),a.createElement(be,null),a.createElement(ve,null,a.createElement(ye,null,a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.get_started.source_of_wealth.source_of_wealth",defaultMessage:"Source of Wealth"})),a.createElement(Ee,{color:"grey900",size:"14px",weight:500,lineHeight:"20px"},a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.get_started.source_of_wealth.bank_account_stub",defaultMessage:"Bank Account Statement or Pay Stub/Slip."})),a.createElement(we,null,a.createElement(components_DragAndDrop,{handleDrop:e=>handleDrop(e,"sourceOfWealth1"),docNumber:"1",fileUploaded:l.sourceOfWealth1,error:o.sourceOfWealth1,fileName:getFileName("sourceOfWealth1"),onFileDelete:()=>fileDelete({keepSecond:!0,name:"sourceOfWealth1",secondName:"sourceOfWealth2"}),onFileDownload:()=>fileDownload("sourceOfWealth1")})),l.sourceOfWealth1&&a.createElement(_e,null,a.createElement(components_DragAndDrop,{handleDrop:e=>handleDrop(e,"sourceOfWealth2"),docNumber:"2",fileUploaded:l.sourceOfWealth2,isOptional:!0,error:o.sourceOfWealth2,fileName:getFileName("sourceOfWealth2"),onFileDelete:()=>fileDelete({name:"sourceOfWealth2"}),onFileDownload:()=>fileDownload("sourceOfWealth2")})))),a.createElement(R,null,a.createElement(i.zx,{nature:"primary","data-e2e":"additionalInfoUploadDocument",type:"button",fullwidth:!0,height:"48px",style:{marginTop:"16px"},onClick:()=>(()=>{n(!0);const t=[];__awaiter(void 0,void 0,void 0,(function*(){return Promise.all(Object.entries(c).map((e=>__awaiter(void 0,void 0,void 0,(function*(){const n=e[1];if(null!==n){const l=(yield(0,_.s3)(n)).split("base64,")[1];t.push({category:(a=e[0],a.includes("proofOfAddress")?"PROOF_OF_ADDRESS":"PROOF_OF_INCOME"),file:l})}var a})))))})).then((()=>{e.submitData(t),n(!1)}))})(),disabled:f},a.createElement(d.Z,{id:"buttons.submit",defaultMessage:"Submit"}))))},ke=o.ZP.div`
  padding: 0 40px;
  display: flex;
  flex-direction: column;
`,Ze=o.ZP.div`
  text-align: center;
`,InterestUploadDocuments_Uploaded=({close:e})=>{const t=(0,a.useCallback)((()=>{e()}),[]);return a.createElement(B,null,a.createElement(L,{"data-e2e":"InterestUploadDocumentsCloseButton",mode:"close",onClick:t}),a.createElement(N,{mode:"middle"},a.createElement(Ze,null,a.createElement(i.Ee,{name:"cloud-check",size:"102px"}),a.createElement(ke,{style:{marginTop:"27px"}},a.createElement(i.xv,{size:"20px",weight:600,color:"grey900",lineHeight:"30px"},a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.uploaded.documents_uploaded",defaultMessage:"Documents Uploaded!"}))),a.createElement(ke,null,a.createElement(i.xv,{size:"14px",weight:500,color:"grey900",lineHeight:"20px"},a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.uploaded.description_1",defaultMessage:"We’ve successfully received your files. A our.com team memeber will review and get back to you."}))),a.createElement(ke,{style:{marginTop:"20px"}},a.createElement(i.xv,{size:"14px",weight:500,color:"grey900",lineHeight:"20px"},a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.uploaded.description_2",defaultMessage:"If you have any questions, please contact us."})),a.createElement(i.xv,{size:"14px",weight:500,color:"grey900",lineHeight:"20px"},a.createElement(i.rU,{size:"14px",weight:500},a.createElement(d.Z,{id:"modals.interest.withdrawal.upload_documents.uploaded.email",defaultMessage:"support@our.com"})))))),a.createElement(R,null,a.createElement(i.zx,{nature:"primary","data-e2e":"additionalInfoUploadDocument",type:"button",fullwidth:!0,height:"48px",style:{marginTop:"16px"},onClick:t},a.createElement(d.Z,{id:"buttons.ok",defaultMessage:"OK"}))))},RowDisplay=({method:e,paymentInfo:t,period:n,setPeriod:l})=>{const r=new Date,o=[{eligibleMethods:Object.values(D.t8),nextPayment:r.toString(),period:w.U3.ONE_TIME},...t].filter((e=>e.period===n))[0],s=o&&o.eligibleMethods.includes(e)||!1,c=(0,a.useCallback)((e=>()=>{s&&l(e)}),[l,s]),m={children:a.createElement(a.Fragment,null,a.createElement(i.xv,{weight:600,size:"16px",color:"grey900"},(0,x.SI)(n)),a.createElement(i.xv,{weight:500,size:"14px",color:"grey600"},(0,x.R0)(n,null==o?void 0:o.nextPayment))),disabled:!s,onClick:c(n)};return s||(m.toolTip=a.createElement(d.Z,{id:"modals.recurringbuys.frequency_disabled",defaultMessage:"{period} recurring buys are unavailable for your payment method at this time.",values:{period:(0,x.SI)(n)}})),a.createElement(b.w,Object.assign({},m))},RecurringBuy_FrequencyScreen=({children:e,headerAction:t,headerMode:n,method:l,paymentInfo:r,setPeriod:o})=>{const i=Object.values(w.U3);return a.createElement(B,null,a.createElement(L,{"data-e2e":"closeRecurringBuyModalFrequencyStep",mode:n,onClick:t},e?a.createElement(a.Fragment,null,e):a.createElement(d.Z,{id:"modals.recurringbuys.select_a_frequency",defaultMessage:"Select a Frequency"})),a.createElement(N,{mode:"top"},i.map((e=>a.createElement(RowDisplay,Object.assign({key:e},{method:l,paymentInfo:r,period:e,setPeriod:o}))))))},Me=o.ZP.div`
  display: flex;
  justify-content: center;
`,Oe=o.ZP.div`
  margin-top: 18px;
  padding: 0 40px;
  display: flex;
  flex-direction: column;

  a {
    display: content;
    margin-left: 2px;
  }
`,Ce=(0,o.ZP)(i.xv)`
  text-align: center;
  line-height: 24px;
  font-size: 14px;
  margin: 0 25px;
  color: ${e=>e.theme.grey900};
`,RecurringBuy_GettingStarted=({amount:e,close:t,nextStep:n,outputCurrency:l})=>{const r=(0,a.useCallback)((()=>{t()}),[]);return a.createElement(B,null,a.createElement(L,{"data-e2e":"RecurringBuysCloseButton",mode:"close",onClick:r}),a.createElement(N,{mode:"middle"},a.createElement("div",null,a.createElement(Me,null,a.createElement(i.Ee,{name:"recurring-buy-get-started",height:"130px",width:"222px"})),a.createElement(Oe,null,a.createElement(Me,null,a.createElement(i.xv,{size:"20px",weight:600,color:"grey900",lineHeight:"30px"},a.createElement(d.Z,{id:"modals.recurringbuys.get_started.title",defaultMessage:"Set Up a Recurring Buy"}))),a.createElement(Ce,null,a.createElement(d.Z,{id:"modals.recurringbuys.get_started.description",defaultMessage:"Buy {amount} of {outputCurrency} every day, week or month with a Recurring Buy. No need to ever time the market.",values:{amount:e,outputCurrency:l}}),a.createElement(i.rU,{size:"14px",weight:500,target:"_blank",href:"/support/hc/en-us/sections/4405090131860-Recurring-Buys-"},a.createElement(d.Z,{id:"buttons.learn_more_arrow",defaultMessage:"Learn more ->"})))))),a.createElement(R,null,a.createElement(i.zx,{nature:"primary","data-e2e":"getStartedWithRecurringBuys",type:"button",fullwidth:!0,height:"48px",style:{marginTop:"16px"},onClick:n},a.createElement(d.Z,{id:"modals.recurringbuys.get_started.get_started",defaultMessage:"Get Started"})),a.createElement(i.zx,{nature:"light","data-e2e":"maybeLaterRecurringBuys",type:"button",fullwidth:!0,height:"48px",style:{marginTop:"16px"},onClick:r},a.createElement(d.Z,{id:"modals.recurringbuys.get_started.maybe_later",defaultMessage:"Maybe Later"}))))};var ze=n("../blockchain-wallet-v4/src/index.ts"),Pe=n("./src/components/Rows/Checkout.tsx");const Ae=o.ZP.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px 24px;
  > div {
    display: flex;
    flex-direction: row;
  }
`,Te=(0,a.memo)((e=>a.createElement(Ae,{"data-e2e":e["data-e2e"]},a.createElement("div",null,a.createElement(i.xv,{size:"32px",weight:600,color:"grey800"},e.title)),a.createElement("div",null,a.createElement(i.xv,{size:"20px",weight:600,color:"grey600",style:{marginTop:"8px"}},e.subTitle)))),((e,t)=>e.title===t.title&&e.subTitle===t.subTitle)),Se=(0,o.ZP)(i.jL)`
  border: unset;
`,RecurringBuy_RecurringBuyDetails=({closeClick:e,complete:t,crypto:n,currency:l,id:r,nextPayment:o,paymentMethod:s,period:c,removeClick:m,standardAmount:u})=>{const p=(0,a.useCallback)((()=>{e()}),[e]),g=(0,a.useCallback)((()=>{m(r)}),[m,r]),f={children:t&&a.createElement(d.Z,{id:"copy.complete",defaultMessage:"Complete"})||a.createElement(a.Fragment,null,(0,x.SI)(c)," ",(0,x.R0)(c,o)),type:t?"success":void 0},h=`${ze.ei.getSymbol(l)}${u}`;return a.createElement(B,null,a.createElement(L,{"data-e2e":"recurringBuyDetailsClose",mode:"close",onClick:p},a.createElement(d.Z,{id:"copy.recurring_buy",defaultMessage:"Recurring Buy"})),a.createElement(N,{mode:"top"},a.createElement(Te,{"data-e2e":"recurringBuyAmount",subTitle:a.createElement(Se,Object.assign({},f)),title:`${h} of ${n}`}),a.createElement(Pe.Z,{subTitle:h,title:a.createElement(d.Z,{id:"copy.amount",defaultMessage:"Amount"})}),a.createElement(Pe.Z,{subTitle:n,title:"Crypto"}),a.createElement(Pe.Z,{subTitle:a.createElement(a.Fragment,null,(0,x.SI)(c)," ",(0,x.R0)(c,o)),title:a.createElement(d.Z,{id:"copy.frequency",defaultMessage:"Frequency"})}),a.createElement(Pe.Z,{subTitle:(0,x.vw)(s),title:a.createElement(d.Z,{id:"checkout.payment_method",defaultMessage:"Payment Method"})}),a.createElement(Pe.Z,{subTitle:T()(o).format("ddd, MMMM Do"),title:a.createElement(d.Z,{id:"copy.next_buy",defaultMessage:"Next Buy"})})),a.createElement(R,null,a.createElement(i.zx,{"data-e2e":"removeRecurringBuyButton",nature:"light-red",fullwidth:!0,onClick:g},a.createElement(d.Z,{id:"buttons.remove",defaultMessage:"Remove"}))))},De=(0,a.memo)((({activeDetails:e,close:t,goBack:n,removeClick:l})=>{const[r,o]=(0,a.useState)(!1),{id:s}=e,c=(0,a.useCallback)((()=>{o(!0),l(s)}),[o,l,s]),m=(0,a.useCallback)((()=>{t()}),[t]);return a.createElement(B,null,a.createElement(L,{"data-e2e":"removeRecurringBuyConfirmHeader",mode:"back",onClick:n},a.createElement(d.Z,{id:"copy.back",defaultMessage:"Back"})),a.createElement(N,{mode:"middle"},a.createElement("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",padding:"0 40px",textAlign:"center"}},a.createElement(i.JO,{name:"alert-filled",size:"52px",color:"orange500",style:{marginBottom:"22px"}}),a.createElement(i.xv,{size:"20px",weight:600,color:"grey800",style:{marginBottom:"40px"}},a.createElement(d.Z,{id:"modals.recurringbuys.delete_confirmation_title",defaultMessage:"Are you sure you want to remove this Recurring Buy?"})),a.createElement("div",{style:{width:"100%"}},a.createElement(i.zx,{"data-e2e":"removeRecurringBuyConfirmButton",nature:"light-red",fullwidth:!0,onClick:c,style:{marginBottom:"16px"}},r?a.createElement(i.JA,{height:"16px",width:"16px",color:"red400"}):a.createElement(d.Z,{id:"buttons.remove",defaultMessage:"Remove"})),a.createElement(i.zx,{"data-e2e":"removeRecurringBuyKeepButton",nature:"light",fullwidth:!0,onClick:m,disabled:r},a.createElement(d.Z,{id:"buttons.keep",defaultMessage:"Keep"}))))))}),((e,t)=>e.activeDetails.id===t.activeDetails.id));var __rest=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n};const je=500,Be=(0,l.E)(i.u_),Fe=(0,o.ZP)(Be)`
  border-radius: 0px;
  overflow: auto;
  position: absolute;
  top: 0;
  right: 0;
  width: ${480}px;
  height: 100vh;
  color: ${e=>e.theme.grey700};
  ${s.BC.mobile`
    width: 100%;
    height: calc(100vh - 80px);
    padding-bottom: 20px;
  `};
`,Ne=o.ZP.div`
  height: 100%;
`,Ie=o.ZP.div`
  width: 100%;
  box-sizing: border-box;
  padding: 40px;
  ${s.BC.tablet`
    padding: 20px;
  `}
`,Re=(0,o.ZP)((e=>a.createElement(l.E.div,Object.assign({initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},e))))`
  height: 100%;
  width: 100%;
`,$e=o.ZP.div`
  padding: 16px 40px;
  box-sizing: border-box;
  border-top: 1px solid ${e=>e.theme.grey000};
  &:last-child {
    border-bottom: 1px solid ${e=>e.theme.grey000};
  }
`,Ue=(o.ZP.div`
  display: flex;
  align-items: center;
`,(0,o.ZP)(i.xv)`
  font-size: 14px;
  font-weight: 500;
  color: ${e=>e.theme.grey900};
  margin-top: ${e=>e.asValue?"4px":"0px"};
`),We=(0,o.ZP)(i.xv)`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.grey800};
  margin-top: ${e=>e.asTitle?"0px":"4px"};
`,Le=(o.ZP.div`
  display: flex;
  align-items: center;
  margin-top: 54px;
  min-height: 76px;
  input {
    color: ${e=>e.theme.black};
    padding-left: 8px;
    font-size: ${e=>e.isCrypto?"36px":"56px"};
    font-weight: 500;
    border: 0px !important;
    &::placeholder {
      font-size: ${e=>e.isCrypto?"36px":"56px"};
      color: ${e=>e.theme.grey600};
    }
  }
  > div {
    height: auto;
    white-space: nowrap;
    input {
      height: auto;
      outline: 0;
    }
  }
  > div > div:last-child {
    display: none;
  }
`,(0,o.ZP)(Ie)`
  background-color: ${e=>e.theme.white};
  position: sticky;
  top: 0;
  z-index: 99;
`),components_Flyout=e=>{var{children:t,isOpen:n}=e,l=__rest(e,["children","isOpen"]);return a.createElement(r.M,null,n&&!l.userClickedOutside?a.createElement(Fe,Object.assign({transition:{bounce:0,type:"spring"},initial:{x:480},animate:{x:0},exit:{x:480}},l),a.createElement(Ne,null,t)):null)}},"./src/components/Flyout/model.tsx":(e,t,n)=>{n.d(t,{uL:()=>availableMethodsToolTip,Br:()=>Bank,zn:()=>BankWire,YI:()=>DepositOrWithdrawal,Nd:()=>getActionText,G:()=>getBankText,e1:()=>getBrokerageLimits,Zu:()=>getDefaultMethod,q7:()=>getIcon,vw:()=>getPaymentMethodText,B_:()=>getPeriodForSuccess,R0:()=>getPeriodSubTitleText,O7:()=>getPeriodText,SI:()=>getPeriodTitleText,Q:()=>getText,Kt:()=>normalizeAmount,$e:()=>Z,KW:()=>k,k7:()=>E,AD:()=>z,NZ:()=>O});var a=n("../../node_modules/react/index.js"),l=n("./node_modules/react-intl/lib/src/components/message.js"),r=n("../../node_modules/moment/moment.js"),o=n.n(r),i=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),s=n("../blockchain-wallet-v4/src/exchange/utils.ts"),d=n("../blockchain-wallet-v4/src/types/index.ts"),c=n("../blockchain-info-components/src/index.js"),m=n("./src/components/Cartridge/index.ts"),u=n("./src/components/Display/CoinDisplay/index.tsx"),p=n("./src/components/Form/CreditCardBox/model.ts"),g=n("./src/components/SimpleBuy/index.tsx"),f=n("./src/data/components/exchange/services.ts"),h=n("./src/data/types.ts"),x=n("./src/services/forms/index.js"),y=n("./src/services/images/index.ts");const E="RECURRING_BUY_PERIOD_FETCH",b=(0,i.ZP)(c.xv)`
  font-size: 14px;
  font-weight: 500;
  color: ${e=>e.theme.grey900};
  margin-top: ${e=>e.asValue?"4px":"0px"};
`,v=(i.ZP.div`
  padding: 16px 40px;
  box-sizing: border-box;
  border-top: 1px solid ${e=>e.theme.grey000};
  &:last-child {
    border-bottom: 1px solid ${e=>e.theme.grey000};
  }
`,i.ZP.div`
  display: flex;
  align-items: center;
`),w=(0,i.ZP)(c.xv)`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.grey800};
  margin-top: ${e=>e.asTitle?"0px":"4px"};
`,_=(0,i.ZP)(c.JO)`
  ${e=>e.disabled&&i.iv`
      cursor: not-allowed;
    `}
`,getDefaultMethod=(e,t)=>e?Object.assign(Object.assign({},e),{type:d.t8.BANK_TRANSFER}):1===t.length?Object.assign(Object.assign({},t[0]),{type:d.t8.BANK_TRANSFER}):void 0,getPeriodTitleText=e=>{let t;switch(e){default:case h.U3.ONE_TIME:t=a.createElement(l.Z,{id:"modals.recurringbuys.time_options.one_time",defaultMessage:"One Time"});break;case h.U3.DAILY:t=a.createElement(l.Z,{id:"modals.recurringbuys.time_options.daily",defaultMessage:"Daily"});break;case h.U3.WEEKLY:t=a.createElement(l.Z,{id:"modals.recurringbuys.time_options.weekly",defaultMessage:"Weekly"});break;case h.U3.BI_WEEKLY:t=a.createElement(l.Z,{id:"modals.recurringbuys.time_options.bi_weekly",defaultMessage:"Twice a Month"});break;case h.U3.MONTHLY:t=a.createElement(l.Z,{id:"modals.recurringbuys.time_options.monthly",defaultMessage:"Monthly"})}return t},getPeriodSubTitleText=(e,t=Date.now())=>{let n;const l=o()(t);switch(e){default:case h.U3.DAILY:n=a.createElement(a.Fragment,null);break;case h.U3.WEEKLY:n=a.createElement(a.Fragment,null,"On ",l.format("dddd"),"s");break;case h.U3.BI_WEEKLY:n=a.createElement(a.Fragment,null,"On the ",l.format("Do")," and ",l.add(2,"weeks").format("Do"));break;case h.U3.MONTHLY:n=a.createElement(a.Fragment,null,"On the ",l.format("Do"))}return n},getPeriodForSuccess=(e,t=Date.now())=>{let n;const l=o()(t);switch(e){default:case h.U3.DAILY:n=a.createElement(a.Fragment,null,"every day");break;case h.U3.WEEKLY:n=a.createElement(a.Fragment,null,"every ",l.format("dddd"));break;case h.U3.BI_WEEKLY:n=a.createElement("span",{style:{textTransform:"lowercase"}},getPeriodSubTitleText(e,t)," of each month");break;case h.U3.MONTHLY:n=a.createElement("span",{style:{textTransform:"lowercase"}},getPeriodSubTitleText(e,t))}return n},getPeriodText=e=>{let t;switch(e){default:case h.U3.DAILY:t=a.createElement(l.Z,{id:"modals.recurringbuys.timeframe.every_day",defaultMessage:"Every day"});break;case h.U3.WEEKLY:t=a.createElement(l.Z,{id:"copy.once_a_week",defaultMessage:"Once a Week"});break;case h.U3.BI_WEEKLY:t=a.createElement(l.Z,{id:"copy.twice_a_month",defaultMessage:"Twice a Month"});break;case h.U3.MONTHLY:t=a.createElement(l.Z,{id:"copy.once_a_month",defaultMessage:"Once a Month"})}return t},getActionText=(e,t)=>{let n,r=!1,i=o()();switch(t&&(r=o()(t).calendar().startsWith("Today"),i=o()(t)),i=i.format("ddd, MMMM Do"),e){default:case h.Xv.BUY:n=r?a.createElement(l.Z,{id:"scenes.coin.recurringbuy.next_buy_is_today",defaultMessage:"Next Buy is Today"}):a.createElement(l.Z,{id:"scenes.coin.recurringbuy.next_buy_on_date",defaultMessage:"Next Buy on {date}",values:{date:i}});break;case h.Xv.SELL:n=a.createElement(l.Z,{id:"scenes.coin.recurringbuy.next_sell_on_date",defaultMessage:"Next Sell on {date}",values:{date:i}});break;case h.Xv.DEPOSIT:n=a.createElement(l.Z,{id:"scenes.coin.recurringbuy.next_deposit_on_date",defaultMessage:"Next Deposit on {date}",values:{date:i}});break;case h.Xv.WITHDRAWAL:n=a.createElement(l.Z,{id:"scenes.coin.recurringbuy.next_withdrawal_on_date",defaultMessage:"Next Withdrawal on {date}",values:{date:i}});break;case h.Xv.SWAP:n=a.createElement(l.Z,{id:"scenes.coin.recurringbuy.next_swap_on_date",defaultMessage:"Next Swap on {date}",values:{date:i}})}return n},getPaymentMethodText=e=>{let t;switch(e){case d.t8.BANK_TRANSFER:case d.t8.LINK_BANK:case d.t8.BANK_ACCOUNT:t=a.createElement(l.Z,{id:"copy.bank_account",defaultMessage:"Bank Account"});break;case d.t8.FUNDS:t=a.createElement(l.Z,{id:"copy.wallet_funds",defaultMessage:"Wallet Funds"});break;case d.t8.PAYMENT_CARD:case d.t8.USER_CARD:t=a.createElement(l.Z,{id:"simplebuy.confirm.payment_card",defaultMessage:"Credit Card"});break;default:t=a.createElement(a.Fragment,null,e)}return t},availableMethodsToolTip=e=>{const t=e.map(((e,t,n)=>a.createElement(a.Fragment,null,getPaymentMethodText(e),t+1===n.length?"":", ")));return a.createElement(l.Z,{id:"modals.recurringbuys.available_methods_tool_tip",defaultMessage:"Recurring Buys are only available for these methods at this time: {methods}",values:{methods:t}})},k=(0,i.ZP)(c.xv)`
  flex: 1;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  ${e=>!e.isMethod&&i.iv`
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 35px;
    `}
`,Z=i.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${e=>e.disabled&&i.iv`
      cursor: not-allowed;
    `}
`,M=(0,i.ZP)(b)`
  margin-top: 4px;
  text-transform: capitalize;
  color: ${e=>e.theme.grey600};
  font-weight: 500;
  font-size: 14px;
`,O=(0,i.ZP)(c.xv)`
  margin-top: 4px;
  padding: 5px 0;
`,C=(0,i.ZP)(w)`
  margin-top: 0;
`,renderBank=e=>a.createElement(a.Fragment,null,a.createElement(C,null,(e=>{var t,n;return"agent"in e?e.name:"details"in e&&(null===(t=e.details)||void 0===t?void 0:t.bankName)?e.details.bankName?e.details.bankName:null===(n=e.details)||void 0===n?void 0:n.accountNumber:a.createElement(l.Z,{id:"copy.bank_account",defaultMessage:"Bank Account"})})(e)),a.createElement(M,null,(e=>{var t,n,l,r;return"agent"in e?e.address:"details"in e&&(null===(t=e.details)||void 0===t?void 0:t.bankAccountType)?`${(null===(l=null===(n=e.details)||void 0===n?void 0:n.bankAccountType)||void 0===l?void 0:l.toLowerCase())||""} account ${(null===(r=e.details)||void 0===r?void 0:r.accountNumber)||""}`:a.createElement(a.Fragment,null)})(e))),getIcon=(e,t=!1,n)=>{var l;if(t&&!e)return a.createElement(_,{disabled:n,size:"18px",color:"blue600",name:"credit-card-sb"});if(!e)return a.createElement(_,{cursor:!0,disabled:n,name:"plus-in-circle-filled",size:"22px",color:"blue600"});switch(e.type){case d.t8.USER_CARD:const t=p.QU.find((t=>t.type===(e.card?e.card.type:"")));return a.createElement("img",{height:"18px",width:"auto",src:t?t.logo:p.US,alt:""});case d.t8.FUNDS:return a.createElement(c.JO,{size:"32px",color:"USD",name:e.currency});case d.t8.BANK_TRANSFER:return a.createElement(c.Ee,{name:(0,y.t)(null===(l=e.details)||void 0===l?void 0:l.bankName),height:"48px"});case d.t8.BANK_ACCOUNT:return a.createElement(c.JO,{name:"bank-filled",color:"blue600"});default:return a.createElement(a.Fragment,null)}},getBankText=e=>e?renderBank(e):a.createElement(l.Z,{id:"modals.brokerage.add_a_bank_account",defaultMessage:"Add a Bank Account"}),getText=(e,t,n=!1)=>{return n&&!e?a.createElement(c.xv,{weight:600,color:"grey900",style:{paddingBottom:"3px",paddingTop:"4px"}},a.createElement(l.Z,{id:"modals.simplebuy.confirm.credit_or_debit",defaultMessage:"Credit or Debit Card"})):e?e.type===d.t8.USER_CARD?(r=e,a.createElement(a.Fragment,null,a.createElement(C,{capitalize:!0},(e=>e.card?e.card.label?e.card.label.toLowerCase():e.card.type:"Credit or Debit Card")(r)),a.createElement(M,null,r.card?a.createElement(l.Z,{id:"modals.simplebuy.card_ending_in",defaultMessage:"Card Ending in {lastFour}",values:{lastFour:r.card.number}}):a.createElement(l.Z,{id:"modals.simplebuy.paymentcard",defaultMessage:"Credit or Debit Card"})))):e.type===d.t8.BANK_TRANSFER?renderBank(e):((e,t)=>{var n;return a.createElement(a.Fragment,null,a.createElement(C,null,e.currency),a.createElement(M,null,(0,s.LE)({unit:e.currency,value:(0,f.b)("FIAT",(null===(n=t[e.currency])||void 0===n?void 0:n.available)||"0")})," ",a.createElement(l.Z,{id:"copy.available",defaultMessage:"Available"})))})(e,t):a.createElement(c.xv,{weight:600,color:"grey900",style:{paddingBottom:"3px",paddingTop:"4px"}},a.createElement(l.Z,{id:"modals.simplebuy.confirm.jump_to_payment",defaultMessage:"Add Payment Method"}));var r},ActiveToggle=({isActive:e})=>a.createElement(a.Fragment,null,e?a.createElement(c.JO,{name:"checkmark-circle-filled",size:"24px",color:"green600",role:"button",style:{justifyContent:"flex-start"}}):a.createElement(c.Ee,{name:"circle-empty",width:"24px",height:"24px",style:{justifyContent:"flex-start"}})),z=(0,i.ZP)(c.JO)`
  transform: rotate(180deg);
  ${e=>e.disabled&&i.iv`
      cursor: not-allowed;
    `}
`,P=(0,i.ZP)(b)`
  text-transform: capitalize;
  color: ${e=>e.theme.grey600};
  font-weight: 500;
  font-size: 14px;
`,A=(0,i.ZP)(w)`
  color: ${e=>e.theme.grey900};
  font-weight: 600;
  font-size: 16px;
`,T=i.ZP.div`
  display: flex;
  margin-top: 8px;
  align-items: center;
`,S=(0,i.ZP)(m.sx)`
  margin-right: 8px;

  & span:last-child {
    padding-left: 3px;
  }
`,Bank=({bankDetails:e,icon:t,isActive:n,onClick:r,text:o})=>{var i,s;return a.createElement(g.Uq,{"data-e2e":`sb${null===(i=null==e?void 0:e.bankAccountType)||void 0===i?void 0:i.toLowerCase()}Banks`,role:"button",onClick:r},a.createElement(g.R2,null,t),a.createElement(g.EG,null,a.createElement(A,{asTitle:!0},o),a.createElement(P,{asValue:!0},`${(null===(s=null==e?void 0:e.bankAccountType)||void 0===s?void 0:s.toLowerCase())||""} account ${(null==e?void 0:e.accountNumber)||""}`),a.createElement(T,null,a.createElement(m.El,null,a.createElement(l.Z,{id:"modals.brokerage.free",defaultMessage:"Free"})))),a.createElement(ActiveToggle,{isActive:n}))},BankWire=({beneficiary:e,isActive:t=!1,minAmount:n,onClick:r,type:o="WITHDRAWAL"})=>a.createElement(g.Uq,{onClick:r},a.createElement(v,null,a.createElement(g.$s,{showBackground:!0},a.createElement(c.JO,{name:"bank-filled",color:"blue600",size:"16px"}))),a.createElement(v,{style:{width:"100%"}},a.createElement(g.VY,null,a.createElement(w,{asTitle:!0},e.name),a.createElement(b,{asValue:!0},e.agent.account),"DEPOSIT"===o&&a.createElement(T,null,n&&a.createElement(S,null,a.createElement(u.Z,{size:"14px",marginRight:"2px",weight:600,color:"inherit",coin:n.symbol},n.value),a.createElement(l.Z,{id:"modals.brokerage.min_withdrawal",defaultMessage:"Min Withdrawal"})),a.createElement(m.wF,null,a.createElement(l.Z,{id:"modals.brokerage.wire_fee",defaultMessage:"Wire Fee"}))))),"DEPOSIT"===o?a.createElement(z,{cursor:!0,disabled:!1,name:"arrow-back",size:"20px",color:"grey600"}):a.createElement(ActiveToggle,{isActive:t})),DepositOrWithdrawal=e=>e.orderType===h.vU.DEPOSIT?a.createElement(l.Z,{id:"modals.brokerage.deposit_fiat",defaultMessage:"Deposit {fiat}",values:{fiat:e.fiatCurrency}}):a.createElement(l.Z,{id:"modals.brokerage.withdraw_fiat",defaultMessage:"Withdraw {fiat}",values:{fiat:e.fiatCurrency}}),getBrokerageLimits=e=>e.orderType===h.vU.DEPOSIT?e.paymentMethod.limits:e.orderType===h.vU.WITHDRAW&&e.withdrawableBalance&&e.minWithdrawAmount?{max:(Number(e.withdrawableBalance)-Number(e.fee||"0")).toString(),min:e.minWithdrawAmount}:{max:"0",min:"0"},normalizeAmount=(e,t)=>isNaN(Number(e))&&"."!==e&&""!==e?t:(0,x.xl)(e,!0)},"./src/components/Rows/Checkout.tsx":(e,t,n)=>{n.d(t,{Z:()=>f});var a=n("../../node_modules/react/index.js"),l=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),r=n("../blockchain-info-components/src/index.js");const o=l.ZP.div`
  padding: 0 40px;
  box-sizing: border-box;
  border-top: 1px solid ${e=>e.theme.grey000};

  &:last-child {
    border-bottom: 1px solid ${e=>e.theme.grey000};
  }
`,i=l.ZP.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  min-height: 60px;
  align-items: center;
`,s=l.ZP.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`,d=(0,l.ZP)(r.xv)`
  font-size: ${e=>e.hasSubTitle?"14px":"16px"};
  font-weight: 500;
  color: ${e=>e.hasSubTitle?e.theme.grey600:e.theme.grey900};
  display: flex;
  flex-direction: column;
  justify-content: center;
`,c=l.ZP.div`
  text-align: right;
`,m=(0,l.ZP)(d)`
  font-weight: 600;
`,u=(0,l.ZP)(r.xv)`
  font-weight: 500;
  color: ${e=>e.theme.grey400};
  text-align: right;
  font-size: 12px;
`,p=l.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin-left: 4px;
`,g=l.ZP.div`
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
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
`,f=(0,a.memo)((e=>{const[t,n]=(0,a.useState)(!1);return a.createElement(o,null,a.createElement(i,null,a.createElement(s,null,a.createElement("div",{style:{display:"flex"}},a.createElement(d,{hasSubTitle:Object.prototype.hasOwnProperty.call(e,"subTitle")},e.title),e.toolTip&&a.createElement(p,null,a.createElement(r.JO,{name:"question-in-circle-filled",size:"16px",color:t?"blue600":"grey300",onClick:()=>n(!t)}))),e.subTitle&&a.createElement(d,null,e.subTitle)),a.createElement(c,null,a.createElement(m,null,e.text),e.additionalText&&a.createElement(u,null,e.additionalText))),e.toolTip&&t&&a.createElement(g,null,e.toolTip))}))},"./src/components/Rows/index.ts":(e,t,n)=>{n.d(t,{R:()=>a.Z,w:()=>OptionRightAction});var a=n("./src/components/Rows/Checkout.tsx"),l=n("../../node_modules/react/index.js"),r=n("../../node_modules/polished/dist/polished.esm.js"),o=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),i=n("../blockchain-info-components/src/index.js");const s=o.ZP.div`
  padding: 16px 40px;
  box-sizing: border-box;
  border-top: 1px solid ${e=>e.theme.grey000};
  &:last-child {
    border-bottom: 1px solid ${e=>e.theme.grey000};
  }
`,d=(0,o.ZP)(s)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};

  & > div.disabledText > div {
    color: ${e=>(0,r.m4)(e.theme.grey900,.5)};
  }

  & > div {
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`,OptionRightAction=({children:e,disabled:t,onClick:n,toolTip:a})=>{const r=(0,l.useCallback)((()=>{t||n()}),[t,n]),o=`disabledRow${Date.now()}`;return l.createElement(d,{disabled:t,role:"button",onClick:r},l.createElement("div",{className:t?"disabledText":""},e),t?l.createElement("div",{style:{height:"auto"}},l.createElement(i.u,{id:o},l.createElement("span",null,a)),l.createElement(i.G0,{id:o},l.createElement(i.nw,{name:"info",size:"15px"}))):l.createElement(i.JO,{name:"chevron-right",size:"25px",color:"grey400"}))}},"./src/components/SimpleBuy/index.tsx":(e,t,n)=>{n.d(t,{VY:()=>l,dk:()=>m,Uq:()=>r,R2:()=>o,$s:()=>u,iD:()=>s,m5:()=>d,EG:()=>c});var a=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const l=a.ZP.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${e=>e.theme.grey800};
  margin-left: 16px;
  flex: 1;
`,r=a.ZP.div`
  display: flex;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
  padding: 16px 40px;
  flex-direction: row;
  border-bottom: 1px solid ${e=>e.theme.grey000};
  transition: background-color 0.3s;
  ${e=>e.onClick&&a.iv`
      cursor: pointer;
      * {
        cursor: pointer;
      }
      &:hover {
        background-color: ${e=>e.theme.blue000};
      }
    `}
`,o=a.ZP.div`
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 500;
  max-width: 32px;
  color: ${e=>e.theme.grey800};
`;var i=n("./src/components/Flyout/index.tsx");const s=(0,a.ZP)(i.Dx)`
  align-items: left;
  font-weight: 500;
  font-size: 14px;
  color: ${e=>e.theme.grey900};
  line-height: 21px;
  margin-top: 3px;
  width: 100%;
`,d=(0,a.ZP)(i.Dx)`
  align-items: left;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  color: ${e=>e.theme.textBlack};
  width: 100%;
`,c=a.ZP.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${e=>e.theme.grey800};
  margin-left: 16px;
`,m=(0,a.ZP)(i.Dx)`
  align-items: left;
  font-weight: 500;
  font-size: 12px;
  color: ${e=>e.theme.grey600};
  width: 100%;
  line-height: 21px;
`,u=(0,a.ZP)(o)`
  align-items: center;
  justify-content: center;
  ${e=>e.showBackground&&a.iv`
      background-color: ${e=>e.theme.blue000};
      width: 32px;
      height: 32px;
      border-radius: 50%;
    `}
`},"./src/services/images/index.ts":(e,t,n)=>{n.d(t,{t:()=>getBankLogoImageName});const getBankLogoImageName=e=>{switch(e){case"Acorns":return"bank-logo-acorns";case"Ally Bank":case"Ally":return"bank-logo-ally";case"Bank Of America":case"Bank of America (Fidelity NetBenefits)":return"bank-logo-bank-of-america";case"BB&T":return"bank-logo-bbt";case"Capital One":return"bank-logo-capital-one";case"Chase":return"bank-logo-chase";case"Citi Bank":return"bank-logo-citi-bank";case"Citizens":case"Citizens Bank of Philadelphia":case"Citizens State Bank (WI)":case"Citizens Tri-County Bank":return"bank-logo-citizens";case"Dag Site":return"bank-logo-dag-site";case"Navy Federal":case"Navy Federal Credit Union":return"bank-logo-navy-federal";case"PNC":case"PNC Bank":return"bank-logo-pnc";case"Regions":case"Regions Bank":case"Regions Bank (Mortgage)":case"Regions Bank - Credit Cards":case"Regions Retirement 24/7":return"bank-logo-regions";case"Robinhood":return"bank-logo-robinhood";case"SunTrust":case"Suntrust Bank":return"bank-logo-suntrust";case"TD Ameritrade Inc.":case"TD Canada Trust":case"TD":return"bank-logo-td";case"U.S. Bank":return"bank-logo-us-bank";case"USAA":return"bank-logo-usaa";case"Venmo":return"bank-logo-venmo";case"Wells Fargo":case"Wells Fargo Asset Management":case"Wells Fargo Retirement Services":return"bank-logo-wells-fargo";default:return"bank"}}}}]);