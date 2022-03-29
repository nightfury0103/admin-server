"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[2667],{"./src/components/DataError/index.tsx":(e,t,n)=>{n.d(t,{Z:()=>components_DataError});var r,i=n("../../node_modules/react/index.js"),a=n("./node_modules/react-intl/lib/src/components/message.js"),l=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),o=n("../blockchain-info-components/src/index.js"),s=n("../../node_modules/ramda/es/prop.js"),c=n("../blockchain-wallet-v4/src/redux/payment/model.js"),d=n("./src/services/misc/index.js"),m=n("./src/modals/components/index.tsx"),p=n("./src/components/Flyout/model.tsx");var u=(0,l.ZP)(o.xv)(r||(r=function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  width: 80%;\n  margin-bottom: 20px;\n"])));const g=function ErrorHandler(e){var t=e.message,n=e.onClick,r=e["data-e2e"],l=(0,s.Z)("message",t)||(0,s.Z)("description",t),g=(0,d.K)(t);return g?i.createElement(i.Fragment,null,i.createElement(u,{size:"18px",weight:400},t),i.createElement(o.zx,{nature:"primary",onClick:function onClick(){return n(g)}},i.createElement(o.xv,{size:"18px",weight:400,color:"white"},i.createElement(a.Z,{id:"components.dataerror.archiveaddress",defaultMessage:"Archive Address"})))):l===m.lh?i.createElement(m.wq,null):l===c.B?i.createElement(o.xv,{size:"16px",weight:400},i.createElement(a.Z,{id:"components.dataerror.feesfetchfailure",defaultMessage:"There was a problem fetching fees. Please try again later."})):l===p.k7?i.createElement(o.xv,{size:"16px",weight:400,style:{width:"300px"}},i.createElement(a.Z,{id:"modals.recurringbuys.period_fetch_error",defaultMessage:"There was an error fetching recurring buy frequency options. Please try again."})):"string"==typeof l?i.createElement(o.xv,{size:"16px",color:"error",weight:500},l):i.createElement(o.Qt,{inline:!0},i.createElement(o.xv,{size:"18px",weight:400},i.createElement(a.Z,{id:"components.dataerror.body",defaultMessage:"Please "})),i.createElement(o.rU,{size:"18px","data-e2e":r?"".concat(r,"Link"):"",onClick:n},i.createElement(a.Z,{id:"components.dataerror.click",defaultMessage:"click here"})),i.createElement(o.xv,{size:"18px",weight:400},i.createElement(a.Z,{id:"components.dataerror.refresh",defaultMessage:" to refresh."})))},h=l.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`,x=l.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`,w=(0,l.ZP)(o.xv)`
  margin-top: 30px;
  margin-bottom: 20px;
`,components_DataError=e=>i.createElement(h,null,i.createElement(x,null,i.createElement(o.Ee,{name:"empty-search",width:"260px"}),i.createElement(w,{size:"18px",weight:500},i.createElement(a.Z,{id:"components.dataerror.header",defaultMessage:"Oops, something went wrong here!"})),i.createElement(g,Object.assign({},e))))},"./src/modals/Interest/DepositForm/model.tsx":(e,t,n)=>{n.d(t,{Th:()=>c,t3:()=>d,yV:()=>m,e4:()=>p,Fn:()=>u,z:()=>g,Dy:()=>h,Jf:()=>x,JW:()=>w,vC:()=>y,y:()=>E,p6:()=>f,ne:()=>v,cQ:()=>b,sK:()=>Z,$s:()=>C,nd:()=>M,K:()=>k,WS:()=>A,je:()=>z,XD:()=>P,_U:()=>D,e0:()=>S,qO:()=>T,Of:()=>_,t8:()=>F,jm:()=>I,XU:()=>j});var r=n("../../node_modules/redux-form/es/Field.js"),i=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),a=n("../blockchain-info-components/src/index.js"),l=n("./src/components/Cartridge/index.ts"),o=n("./src/components/Flyout/index.tsx"),s=n("./src/components/Form/index.ts");const c="interestDepositForm",d=i.ZP.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`,m=(0,i.ZP)(s.l0)`
  height: 100%;
  display: flex;
  flex-direction: column;
`,p=(0,i.ZP)(o.o9)`
  padding-bottom: 0;
`,u=(0,i.ZP)(a.xv)`
  display: flex;
  width: 100%;
  align-items: center;
`,g=(0,i.ZP)(o.o9)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`,h=i.ZP.div`
  margin: 24px 0 10px 0;
  display: flex;
  justify-content: space-between;
`,x=(0,i.ZP)(r.Z)`
  > input {
    padding-left: ${e=>14*e.coin.length+"px"};
  }
  > div:last-child {
    display: none;
  }
`,w=i.ZP.div`
  display: flex;
  position: relative;
`,y=i.ZP.div`
  position: absolute;
  top: 16px;
  left: 12px;
`,E=(0,i.ZP)(a.xv)`
  display: inline-flex;
  font-weight: 500;
  font-size: 14px;
  padding: 6px 12px;
  border-radius: 32px;
  background-color: ${e=>e.theme.red000};
  color: ${e=>e.theme.red800};
  margin-bottom: 16px;
`,f=i.ZP.div`
  cursor: pointer;
  display: inline-block;
  padding: 0px 6px;
  border-radius: 10px;
  background-color: ${e=>e.theme.grey000};
`,v=i.ZP.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
`,b=i.ZP.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,Z=(0,i.ZP)(a.xv)`
  margin: 6px 0 8px;
`,C=i.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  background-color: ${e=>e.theme.greyFade000};
  border: 1px solid ${({theme:e})=>e.grey000};
  box-sizing: border-box;
  border-radius: 8px;
`,M=i.ZP.div`
  margin: 2px 5px 0 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,k=(0,i.ZP)(l.mO)`
  background-color: ${e=>e.theme.white};
  border: 1px solid ${e=>e.theme.grey100};
  color: ${e=>e.theme.blue600};
  cursor: pointer;
  margin-left: 10px;
`,A=i.ZP.div`
  display: flex;
`,z=i.ZP.div`
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
`,P=i.ZP.div`
  margin: -3px 0 24px 0;

  & > * {
    display: inline-block;
  }
`,D=i.ZP.div`
  margin-top: -3px;

  & > * {
    display: inline-block;
  }
`,S=(0,i.ZP)(a.JO)`
  margin-right: 20px;
`,T=i.ZP.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  > button {
    padding: 15px !important;
  }
`,_=i.ZP.div`
  display: inline;
`,F=(0,i.ZP)(a.xv)`
  font-size: 14px;
  font-weight: 500;
  padding-right: 5px;
  cursor: pointer;
  display: inline;
  color: ${e=>e.displayCoin?e.theme.grey800:e.theme.blue600};
`,I=(0,i.ZP)(a.xv)`
  font-size: 14px;
  font-weight: 500;
  padding-left: 5px;
  cursor: pointer;
  display: inline;
  color: ${e=>e.displayCoin?e.theme.blue600:e.theme.grey800};
`,j=i.ZP.div`
  display: inline;
`},"./src/modals/Interest/conversions.tsx":(e,t,n)=>{n.d(t,{v4:()=>calcCompoundInterest,Tp:()=>calcBasicInterest,v$:()=>amountToFiat,RX:()=>amountToCrypto,mT:()=>maxFiat});var r=n("../blockchain-wallet-v4/src/index.ts"),i=n("../blockchain-wallet-v4/src/exchange/utils.ts");const calcCompoundInterest=(e,t,n)=>{const r=parseFloat(e);if(!r)return"0.00";const a=r*Math.pow(1+t/36500,365*n);return(0,i.M)(a-r)},calcBasicInterest=(e,t)=>e*(1+t/100),amountToFiat=(e,t,n,i,a)=>e?r.ei.convertCoinToFiat({coin:n,currency:i,isStandard:!0,rates:a,value:t}):t,amountToCrypto=(e,t,n,i,a)=>e?t:r.ei.convertFiatToCoin({coin:n,currency:i,rates:a,value:t}),maxFiat=(e,t)=>(0,i.LE)({unit:t,value:e})},"./src/modals/Interest/index.tsx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>We});var r=n("../../node_modules/react/index.js"),i=n("../../node_modules/react-redux/es/index.js"),a=n("../../node_modules/redux/es/redux.js"),l=n("./src/components/Flyout/index.tsx"),o=n("./src/data/index.ts"),s=n("./src/data/types.ts"),c=n("./src/providers/ModalEnhancer/index.tsx"),d=n("../../node_modules/ramda/es/includes.js"),m=n("../blockchain-wallet-v4/src/exchange/currencies/index.ts"),p=n("./src/components/DataError/index.tsx"),u=n("../../node_modules/ramda/es/lift.js");const getData=e=>{const t=o.wl.wx.bb.getInterestAccountBalance(e),n=o.wl.wx.bb.getInterestLimits(e),r=o.wl.wx.bb.getInterestRate(e),i=o.wl.vE.AW.getEDDInterestFileUpload(e).getOrElse(!1);return(0,u.Z)(((e,t,n)=>({accountBalances:e,flagEDDInterestFileUpload:i,interestLimits:t,interestRate:n})))(t,n,r)};var g=n("./node_modules/react-intl/lib/src/components/message.js"),h=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),x=n("../blockchain-info-components/src/index.js");const w=h.ZP.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`,template_loading=()=>r.createElement(w,null,r.createElement(x.nZ,null),r.createElement(x.xv,{weight:600,color:"grey600",style:{marginTop:"24px"}},r.createElement(g.Z,{id:"modals.interest.withdrawal.loading",defaultMessage:"Doing Work..."})));var y=n("../../node_modules/moment/moment.js"),E=n.n(y),f=n("../../node_modules/ramda/es/pathOr.js"),v=n("../blockchain-wallet-v4/src/index.ts"),b=n("../blockchain-wallet-v4/src/exchange/utils.ts"),Z=n("./src/components/Display/FiatDisplay/index.tsx"),C=n("./src/data/components/exchange/services.ts");const M=h.ZP.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,k=(0,h.ZP)(l.o9)`
  padding-bottom: 0;
`,A=(0,h.ZP)(x.xv)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 38px;
`,z=h.ZP.div`
  display: flex;
`,P=(0,h.ZP)(z)`
  flex-direction: column;
  min-height: 48px;
  justify-content: space-between;

  &:first-child {
    border-right: 1px solid ${({theme:e})=>e.grey000};
    width: 199px;
  }

  &:last-child {
    margin-left: 32px;
  }
`,D=h.ZP.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
`,S=h.ZP.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`,T=h.ZP.div`
  height: 1px;
  background: ${({theme:e})=>e.grey000};
  margin: 10px 0;
`,_=h.ZP.div`
  height: 1px;
  width: 100%;
  background: ${({theme:e})=>e.grey000};
  margin: 24px 0 8px 0;
  display: flex;
`,F=(0,h.ZP)(l.o9)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`,I=h.ZP.div`
  display: flex;
  justify-content: space-between;
  margin-top: 28px;
  > button {
    padding: 15px !important;
  }
`,j=h.ZP.div`
  display: flex;
  padding: 4px;
  margin-top: 20px;
  align-items: center;
`,O=h.ZP.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  margin-top: 32px;
  border-radius: 8px;
  &.new {
    border: 1px solid ${({theme:e})=>e.grey100};
  }
  &.old {
    background-color: ${({theme:e})=>e.grey000};
  }
`,R=h.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  background: ${e=>e.theme[e.color]};
  border-radius: 20px;
  min-height: 38px;
  min-width: 38px;
  max-height: 38px;
`,L=h.ZP.div`
  padding: 16px 0;
`,template_success=e=>{const{accountBalances:t,coin:n,flagEDDInterestFileUpload:i,handleClose:a,handleDepositClick:l,handleSBClick:o,interestActions:s,interestLimits:c,interestRate:d,interestUploadDocumentActions:m,showSupply:p,stepMetadata:u,walletCurrency:h}=e,{coinfig:w}=window.coins[n],y=t&&t[n],N=v.ei.getSymbol(h),$=(0,f.Z)(1,[n,"lockUpDuration"],c)/86400,W=y&&y.balance,U=y&&y.totalInterest,B=y&&y.pendingInterest,Y=y&&parseInt(y.balance,10)-parseInt(y.locked,10),q=(0,C.b)(n,W),J=(0,C.b)(n,U),G=(0,C.b)(n,B);return r.createElement(M,null,r.createElement(k,null,r.createElement(A,{color:"grey800",size:"20px",weight:600},r.createElement(z,null,r.createElement(x.JO,{name:n,color:n,size:"24px",style:{marginRight:"16px"}}),r.createElement(g.Z,{id:"modals.interest.detailstitle",defaultMessage:"{displayName} Rewards Account",values:{displayName:w.name}})),r.createElement(x.JO,{onClick:a,cursor:!0,name:"close",size:"20px",color:"grey600","data-e2e":"closeInterest"})),!p&&r.createElement(r.Fragment,null,r.createElement(z,null,r.createElement(P,null,r.createElement(x.xv,{color:"grey600",size:"14px",weight:500,style:{marginBottom:"5px"}},r.createElement(g.Z,{id:"modals.interest.balance",defaultMessage:"Your {coin} Balance",values:{coin:w.name}})),y?r.createElement(r.Fragment,null,r.createElement(x.xv,{color:"grey800",size:"18px",weight:600},q," ",w.displaySymbol),r.createElement(Z.Z,{color:"grey600",size:"14px",weight:500,coin:n,style:{marginTop:"5px"}},y.balance)):r.createElement(x.xv,{color:"grey800",size:"18px",weight:600},"0 ",w.displaySymbol)),r.createElement(P,null,r.createElement(x.xv,{color:"grey600",size:"14px",weight:500,style:{marginBottom:"5px"}},r.createElement(g.Z,{id:"modals.interest.totalearned",defaultMessage:"Total Rewards Earned"})),y?r.createElement(r.Fragment,null,r.createElement(x.xv,{color:"grey800",size:"18px",weight:600},J," ",w.displaySymbol),r.createElement(Z.Z,{color:"grey600",size:"14px",weight:500,coin:n,style:{marginTop:"5px"}},y.totalInterest)):r.createElement(x.xv,{color:"grey800",size:"18px",weight:600},"0 ",w.displaySymbol))),r.createElement(_,null)),u&&u.depositSuccess&&r.createElement(r.Fragment,null,r.createElement(j,null,r.createElement(R,{color:p?"orange000":n},r.createElement(x.JO,{color:p?"orange600":"white",name:"timer",size:"24px"})),r.createElement(x.xv,{"data-e2e":"waitingConfirmation",color:"grey600",size:"14px",weight:500},r.createElement(g.Z,{id:"modals.interest.deposit.success.confirmtransfer",defaultMessage:"Waiting on your transfer to be confirmed by the network. Once it has a confirmation and our team has reviewed it, it will be displayed in Rewards Account history. No action is required at this time."}))),!p&&r.createElement(j,null,r.createElement(R,{color:"grey000"},r.createElement(x.JO,{color:"grey600",name:"check",size:"14px"})),r.createElement(x.xv,{color:"grey600",size:"14px",weight:500},r.createElement(g.Z,{id:"modals.interest.deposit.transferclears",defaultMessage:"Once the transfer clears, your balance will update and you’ll start earning rewards."})))),u&&u.withdrawSuccess&&r.createElement(j,null,r.createElement(R,{color:p?"white":n},r.createElement(x.JO,{color:p?"orange600":"white",name:"timer",size:"24px"})),r.createElement(x.xv,{color:"grey600",size:"14px",weight:500},r.createElement(g.Z,{id:"modals.interest.withdrawal.success",defaultMessage:"We are waiting on your withdrawal to be confirmed by the network and our team."}))),p&&u&&(u.withdrawSuccess||u.depositSuccess)&&r.createElement(O,{className:i?"new":"old"},r.createElement(x.xv,{color:"grey900",size:"16px",weight:600},r.createElement(g.Z,{id:"modals.interest.withdrawal.supply_information_title",defaultMessage:"More Info Needed"})),r.createElement(x.xv,{color:"grey600",size:"12px",weight:500,style:{marginTop:"16px"}},u.withdrawSuccess?i?r.createElement(g.Z,{id:"modals.interest.withdrawal.supply_information_description_1_new",defaultMessage:"Your recent withdrawal of {amount} requires further verification for legal and compliance reasons.",values:{amount:`${N}${(0,b.M)(u.withdrawalAmount)}`}}):r.createElement(g.Z,{id:"modals.interest.withdrawal.supply_information_description_1",defaultMessage:"You've requested a withdrawal for an amount that requires further verification for legal and compliance reasons."}):r.createElement(g.Z,{id:"modals.interest.deposit.supply_information_description_1",defaultMessage:"You've transferred an amount that requires further verification for legal and compliance reasons."})),r.createElement(x.xv,{color:"grey600",size:"12px",weight:500,style:{marginTop:"16px"}},u.withdrawSuccess?i?r.createElement(g.Z,{id:"modals.interest.withdrawal.supply_information_description_2_new",defaultMessage:"Please submit the additional information so we can start processing your withdrawal."}):r.createElement(g.Z,{id:"modals.interest.withdrawal.supply_information_description_2",defaultMessage:"You've requested a withdrawal for an amount that requires further verification for legal and compliance reasons."}):r.createElement(g.Z,{id:"modals.interest.deposit.supply_information_description_2",defaultMessage:"Your funds are safe with us and have started accruing rewards already. To avoid delays when you decide to withdraw your funds, submit your information now."})),r.createElement(L,null,i?r.createElement(x.zx,{"data-e2e":"earnInterestSupplyMoreInformation",fullwidth:!0,nature:"primary",onClick:()=>{m.showModal({origin:"InterestUploadDocument"})}},r.createElement(g.Z,{id:"scenes.interest.submit_information",defaultMessage:"Submit Information"})):r.createElement(x.rU,{href:"https://share.hsforms.com/1DS4i94fURdutr8OXYOxfrg2qt44",style:{width:"100%"},target:"_blank"},r.createElement(x.zx,{"data-e2e":"earnInterestSupplyMoreInformation",fullwidth:!0,nature:"primary",onClick:()=>{s.handleWithdrawalSupplyInformation({origin:"SavingsConfirmation"})}},r.createElement(g.Z,{id:"scenes.interest.submit_information",defaultMessage:"Submit Information"}))))),u&&u.error&&r.createElement(j,null,r.createElement(R,{color:"red000"},r.createElement(x.JO,{color:"red600",name:"forbidden",size:"24px"})),r.createElement("div",null,r.createElement(x.xv,{color:"red600",size:"14px",weight:500},r.createElement(g.Z,{id:"modals.interest.deposit.failure",defaultMessage:"Something went wrong. Please try again later or contact support if the issue persists."})),r.createElement(x.xv,{color:"red600",size:"14px",style:{marginTop:"8px"},weight:500},r.createElement(g.Z,{id:"modals.interest.deposit.failurereason",defaultMessage:"Error: {error}",values:{error:u.error}})))),!p&&r.createElement(I,null,r.createElement(x.zx,{"data-e2e":"interestDeposit",height:"48px",nature:"primary",onClick:l,width:"192px"},r.createElement(x.xv,{weight:600,color:"white"},r.createElement(g.Z,{id:"buttons.transfer",defaultMessage:"Transfer"}))),r.createElement(x.zx,{"data-e2e":"interestDeposit",height:"48px",nature:"empty",onClick:()=>o(n),width:"192px"},r.createElement(x.xv,{size:"16px",weight:600,color:"blue600"},r.createElement(g.Z,{id:"buttons.buy_coin",defaultMessage:"Buy {displayName}",values:{displayName:w.displaySymbol}})))),r.createElement(D,null,r.createElement(x.xv,{color:"grey800",weight:600,style:{marginBottom:"6px"}},r.createElement(g.Z,{id:"modals.interest.summary",defaultMessage:"Summary"})),r.createElement(T,null),u&&(u.depositSuccess||u.withdrawSuccess)&&r.createElement(r.Fragment,null,r.createElement(S,null,r.createElement(x.xv,{color:"grey600",size:"14px",weight:500},r.createElement(g.Z,{id:"modals.interest.status",defaultMessage:"Status"})),r.createElement(x.xv,{"data-e2e":"statusText",color:"orange600",size:"14px",weight:500},r.createElement(g.Z,{id:"modals.interest.statuspending",defaultMessage:"Pending {action}",values:{action:u.withdrawSuccess?"Withdrawal":"Transfer"}}))),r.createElement(T,null)),r.createElement(S,null,r.createElement(x.xv,{"data-e2e":"nextPayment",color:"grey600",size:"14px",weight:500},r.createElement(g.Z,{id:"modals.interest.summary.next",defaultMessage:"Next rewards payment"})),y?r.createElement(x.xv,{color:"grey600",size:"14px",weight:500},parseInt(y.balance,10)>0||u&&u.depositSuccess?E()().add(1,"month").startOf("month").format("MMMM D, YYYY"):"---"):r.createElement(x.xv,{color:"grey600",size:"14px",weight:500},"--")),r.createElement(T,null),r.createElement(S,null,r.createElement(x.xv,{color:"grey600",size:"14px",weight:500},r.createElement(g.Z,{id:"modals.interest.summary.accrued",defaultMessage:"Accrued rewards this month"}),r.createElement(x.G0,{id:"modals.interest.summary.accrued.tooltip"},r.createElement(x.nw,{name:"info",size:"12px"}))),y?r.createElement(x.xv,{color:"grey600",size:"14px",weight:500},G," ",w.displaySymbol):r.createElement(x.xv,{color:"grey600",size:"14px",weight:500},"--")),r.createElement(T,null),r.createElement(S,null,r.createElement(x.xv,{color:"grey600",size:"14px",weight:500},r.createElement(g.Z,{id:"modals.interest.summary.hold",defaultMessage:"Initial hold period"}),r.createElement(x.G0,{id:"modals.interest.summary.lock.tooltip"},r.createElement(x.nw,{name:"info",size:"12px"}))),r.createElement(x.xv,{"data-e2e":"holdPeriod",color:"grey600",size:"14px",weight:500},1===$?r.createElement(g.Z,{id:"modals.interest.summary.lockup.one",defaultMessage:"1 Day",values:{lockupPeriod:$}}):r.createElement(g.Z,{id:"modals.interest.summary.lockup",defaultMessage:"{lockupPeriod} Days",values:{lockupPeriod:$}}))),r.createElement(T,null),r.createElement(S,null,r.createElement(x.xv,{color:"grey600",size:"14px",weight:500},r.createElement(g.Z,{id:"modals.interest.summary.rate",defaultMessage:"Rewards rate"}),r.createElement(x.G0,{id:"modals.interest.summary.moreinterestdetails.tooltip"},r.createElement(x.nw,{name:"info",size:"12px"}))),r.createElement(x.xv,{"data-e2e":"interestRate",color:"grey600",size:"14px",weight:500},d[n],"%")))),!p&&r.createElement(F,null,r.createElement(I,null,r.createElement(x.zx,{disabled:!y||!Y,"data-e2e":"interestWithdraw",fullwidth:!0,height:"48px",nature:"grey800",onClick:()=>s.showInterestModal({coin:n,step:"WITHDRAWAL"})},r.createElement(x.xv,{color:"white",size:"16px",weight:600},r.createElement(g.Z,{id:"buttons.withdraw",defaultMessage:"Withdraw"}))))))},N=(0,h.ZP)(l.o9)`
  padding-bottom: 0px;
  position: relative;
  height: 100%;
`,$=(0,h.ZP)(x.JO)`
  position: absolute;
  padding: inherit;
  left: 380px;
  top: 0px;
`,W=h.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`,U=(0,h.ZP)(x.xv)`
  margin: 40px 0 16px 0;
  text-align: center;
`,B=(0,h.ZP)(x.xv)`
  margin-bottom: 56px;
  text-align: center;
`,template_unsupported=e=>{const{handleClose:t,walletCurrency:n}=e;return r.createElement(N,null,r.createElement($,{cursor:!0,name:"close",size:"20px",color:"grey600",role:"button",onClick:t}),r.createElement(W,null,r.createElement(x.Ee,{width:"48px",height:"48px",name:"world-alert",srcset:{"world-alert2":"2x","world-alert3":"3x"}}),r.createElement(U,{color:"grey800",size:"20px",weight:600},r.createElement(g.Z,{id:"modals.interest.unsupported-title",defaultMessage:"Rates Unavailable"})),r.createElement(B,{color:"grey600",weight:500},r.createElement(g.Z,{id:"modals.interest.unsupported-subcontent-1",defaultMessage:"Rewards rates are currently unavailable for {walletCurrency}. Please change your wallet's local currency in Preferences.",values:{walletCurrency:n}}))))};class Y extends r.PureComponent{constructor(){super(...arguments),this.handleDepositClick=()=>{const{coin:e,interestActions:t}=this.props;t.showInterestModal({coin:e,step:"DEPOSIT"})},this.handleFetchInterestLimits=()=>{const{coin:e,interestActions:t,walletCurrency:n}=this.props;t.fetchInterestLimits({coin:e,currency:n})},this.handleRefresh=()=>{const{coin:e,interestActions:t}=this.props;t.showInterestModal({coin:e,step:"ACCOUNT_SUMMARY"})}}componentDidMount(){this.handleFetchInterestLimits()}render(){const{data:e,walletCurrency:t}=this.props,n=[m.Z.TWD.code,m.Z.CLP.code];return e.cata({Failure:()=>r.createElement(p.Z,{onClick:this.handleRefresh}),Loading:()=>r.createElement(template_loading,null),NotAsked:()=>r.createElement(template_loading,null),Success:e=>(0,d.Z)(t,n)?r.createElement(template_unsupported,Object.assign({},e,this.props,{walletCurrency:t})):r.createElement(template_success,Object.assign({},e,this.props,{handleDepositClick:this.handleDepositClick,walletCurrency:t}))})}}const q=(0,i.connect)((e=>({data:getData(e)})),(e=>({buySellActions:(0,a.bindActionCreators)(o.Nw.wx.buySell,e),interestActions:(0,a.bindActionCreators)(o.Nw.wx.interest,e),interestUploadDocumentActions:(0,a.bindActionCreators)(o.Nw.wx.interestUploadDocument,e)})))(Y);var J=n("../../node_modules/ramda/es/propOr.js");const selectors_getCurrency=e=>o.wl.vE.Xd.getCurrency(e),selectors_getData=e=>{const t=o.wl.wx.bb.getCoinType(e),n=o.wl.wx.bb.getRates(e),r=o.wl.cr.getFormSyncErrors("interestDepositForm")(e),i=o.wl.wx.bb.getInterestLimits(e),a=o.wl.wx.bb.getInterestEDDStatus(e),l=o.wl.wx.bb.getInterestRate(e),s=o.wl.wx.bb.getDepositLimits(e),c=o.wl.wx.bb.getIsAmountDisplayedInCrypto(e),d=o.wl.vE.aT.misc.getRatesSelector("ETH",e),m=o.wl.wx.bb.getPayment(e),p=o.wl.vE.Xd.getCurrency(e),g=o.wl.wx.bb.getInterestEDDDepositLimits(e),h=o.wl.wx.bb.getAfterTransaction(e).getOrElse({}),x=(null==h?void 0:h.show)?h.amount:void 0;return(0,u.Z)(((e,n,i,a,l,o,d,m)=>{const{coinfig:p}=window.coins[t],u=Number("BCH"===t||"BTC"===t?(0,f.Z)("0",["selection","fee"],l):(0,J.Z)("0","fee",l)),g=p.type.erc20Address?(0,C.b)("ETH",u):(0,C.b)(t,u),h=v.ei.convertCoinToFiat({coin:t,currency:o,isStandard:!0,rates:p.type.erc20Address?a:e,value:g});return{coin:t,depositLimits:s,displayCoin:c,ethRates:a,feeCrypto:g,feeFiat:h,formErrors:r,interestEDDDepositLimits:d,interestEDDStatus:m,interestLimits:n,interestRate:i,payment:l,prefillAmount:x,rates:e}}))(n,i,l,d,m,p,g,a)},G=h.ZP.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`,DepositForm_template_loading=()=>r.createElement(G,null,r.createElement(x.nZ,null),r.createElement(x.xv,{weight:600,color:"grey800",style:{marginTop:"24px"}},r.createElement(g.Z,{id:"modals.interest.loading.doingwork",defaultMessage:"Doing Work..."})));var H=n("../../node_modules/redux-form/es/Field.js"),X=n("../../node_modules/redux-form/es/reduxForm.js"),K=n("./src/components/Form/index.ts"),V=n("./src/services/forms/index.js"),Q=n("./src/modals/Interest/conversions.tsx"),ee=n("./src/components/Cartridge/index.ts");const te=h.ZP.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`,ne=(0,h.ZP)(K.l0)`
  height: 100%;
  display: flex;
  flex-direction: column;
`,re=(0,h.ZP)(l.o9)`
  padding-bottom: 0;
`,ie=h.ZP.div`
  display: flex;
  align-items: center;
`,ae=(0,h.ZP)(x.JO)`
  margin-right: 20px;
`,le=h.ZP.div`
  display: flex;
  margin-top: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${e=>e.theme.grey000};
`,oe=h.ZP.div`
  width: 100%;
  &:last-child {
    margin-left: 32px;
  }
`,se=h.ZP.div`
  display: flex;
  margin: 24px 0 8px;
`,ce=h.ZP.div`
  cursor: pointer;
  display: inline-block;
  padding: 4px 8px;
  border-radius: 20px;
  background-color: ${e=>e.theme.grey000};
`,de=h.ZP.div`
  height: 48px;
  border-right: 1px solid ${e=>e.theme.grey000};
`,me=(0,h.ZP)(l.o9)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`,pe=h.ZP.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  margin-bottom: 10px;
`,ue=(0,h.ZP)(H.Z)`
  > input {
    padding-left: ${e=>e.coin.length*(e.displayCoin?18:14)+"px"};
  }
`,ge=h.ZP.div`
  display: flex;
  position: relative;
`,he=h.ZP.div`
  position: absolute;
  top: 16px;
  left: 16px;
`,xe=h.ZP.div`
  display: flex;
  flex-direction: column;
`,we=h.ZP.div`
  margin-top: 24px;
`,ye=h.ZP.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  opacity: ${({isOpacityApplied:e})=>e?.25:1};
  > button {
    padding: 15px !important;
  }
`,Ee=h.ZP.div`
  display: inline;
`,fe=(0,h.ZP)(x.xv)`
  font-size: 14px;
  font-weight: 500;
  padding-right: 5px;
  cursor: pointer;
  display: inline;
  color: ${e=>e.displayCoin?e.theme.grey800:e.theme.blue600};
`,ve=(0,h.ZP)(x.xv)`
  font-size: 14px;
  font-weight: 500;
  padding-left: 5px;
  cursor: pointer;
  display: inline;
  color: ${e=>e.displayCoin?e.theme.blue600:e.theme.grey800};
`,be=(0,h.ZP)(ee.wF)`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-top: 24px;
`,Ze=h.ZP.div`
  margin-top: 16px;
`;var Ce=n("./src/modals/Interest/DepositForm/model.tsx"),Me=n("../../node_modules/ramda/es/equals.js");const ke=(0,h.ZP)(x.d0)`
  width: 232px;
  margin-bottom: 12px;
`,DepositForm_TabMenuTimeFrame=e=>{const[t,n]=(0,r.useState)("long"),handleTimeFrameChange=t=>{n(t),e.input.onChange(t)};return r.createElement(ke,null,r.createElement(x.gq,{width:"50%","data-e2e":"longTerm",selected:(0,Me.Z)(t,"long"),onClick:()=>handleTimeFrameChange("long")},r.createElement(g.Z,{id:"modals.interest.deposit.longterm",defaultMessage:"Long-term"})),r.createElement(x.gq,{width:"50%","data-e2e":"shortTerm",selected:(0,Me.Z)(t,"short"),onClick:()=>handleTimeFrameChange("short")},r.createElement(g.Z,{id:"modals.interest.deposit.shortterm",defaultMessage:"Short-term"})))};var Ae=n("./node_modules/bignumber.js/bignumber.js"),ze=n.n(Ae);const minDepositAmount=(e,t,n)=>{if(!e)return!0;const r=n.displayCoin?n.depositLimits.minCoin:n.depositLimits.minFiat;return!!new(ze())(e).isLessThan(r)&&"BELOW_MIN"},maxDepositAmount=(e,t,n)=>{if(!e)return!0;const r=n.displayCoin?n.depositLimits.maxCoin:n.depositLimits.maxFiat;return!!new(ze())(r).isLessThan(e)&&"ABOVE_MAX"},Pe=(0,i.connect)((e=>({values:o.wl.cr.getFormValues(Ce.Th)(e)})),(e=>({formActions:(0,a.bindActionCreators)(o.Nw.cr,e),interestActions:(0,a.bindActionCreators)(o.Nw.wx.interest,e)}))),De=(0,a.compose)((0,X.Z)({destroyOnUnmount:!1,form:Ce.Th}),Pe)((e=>{var t;const{coin:n,depositLimits:i,displayCoin:a,feeCrypto:l,feeFiat:o,formActions:s,formErrors:c,handleDisplayToggle:d,interestActions:m,interestEDDDepositLimits:p,interestEDDStatus:u,interestLimits:h,interestRate:w,invalid:y,payment:E,rates:f,submitting:Z,values:C,walletCurrency:M}=e,{coinfig:k}=window.coins[n],A=v.ei.getSymbol(M),z=C&&C.depositAmount||"0",P=C&&(null==C?void 0:C.interestDepositAccount)&&"CUSTODIAL"===C.interestDepositAccount.type,D=(0,Q.v$)(a,z,n,M,f),S=(0,Q.RX)(a,z,n,M,f),T=C&&C.loanTimeFrame,_=((null===(t=h[n])||void 0===t?void 0:t.lockUpDuration)||7200)/86400,F=(0,Q.mT)(i.maxFiat,M),I=c.depositAmount&&"string"==typeof c.depositAmount&&c.depositAmount,j=!!window.coins[n].coinfig.type.erc20Address,O=E&&j&&!!window.coins[n].coinfig.type.erc20Address&&!E.isSufficientEthForErc20,R=((e,t,n)=>{var r;const{depositLimits:i}=e;if(!i||0===i.length)return!1;const a=(null===(r=i.find((e=>e.savingsCurrency===t)))||void 0===r?void 0:r.amount)||0;return Number(n)>a})(p,n,D)&&!(null==u?void 0:u.eddSubmitted)&&!(null==u?void 0:u.eddPassed);return Z?r.createElement(Ce.t3,null,r.createElement(x.nZ,null),r.createElement(x.xv,{weight:600,color:"grey800",size:"20px",style:{marginTop:"24px"}},r.createElement(g.Z,{id:"modals.interest.deposit.sendingtitle",defaultMessage:"In Progress..."})),r.createElement(x.xv,{weight:600,color:"grey600",size:"16px",style:{marginTop:"24px"}},r.createElement(g.Z,{id:"modals.interest.deposit.sendingsubtitle",defaultMessage:"Sending {displayName} to your Rewards Account",values:{displayName:k.displaySymbol}}))):r.createElement(Ce.yV,{onSubmit:()=>{m.submitDepositForm(n),e.setShowSupply(R)}},r.createElement(Ce.e4,null,r.createElement(Ce.Fn,{color:"grey800",size:"20px",weight:600},r.createElement(Ce.e0,{onClick:()=>m.setInterestStep({name:"ACCOUNT_SUMMARY"}),cursor:!0,role:"button",name:"arrow-left",size:"20px",color:"grey600"}),r.createElement(g.Z,{id:"modals.interest.deposit.title_transfer",defaultMessage:"Transfer {displayName}",values:{displayName:k.name}})),r.createElement(Ce.XU,null,r.createElement(x.xv,{color:"grey600",weight:500,size:"14px",style:{lineHeight:"1.5",margin:"18px 0 8px 0"}},r.createElement(g.Z,{id:"modals.interest.deposit.subheader_transfer",defaultMessage:"Transfer {displayName} to your Rewards Account and earn up to {rate}% in rewards annually on your crypto.",values:{displayName:k.name,rate:w[n]}})," ",!O&&r.createElement(r.Fragment,null,r.createElement(g.Z,{id:"modals.interest.deposit.youcantransfer",defaultMessage:"You can transfer up to",values:{coin:n}})," ",r.createElement(Ce.p6,{onClick:()=>s.change(Ce.Th,"depositAmount",a?i.maxCoin:i.maxFiat)},a?r.createElement(x.xv,{color:"blue600",size:"14px",weight:500},i.maxCoin," "):r.createElement(x.xv,{color:"blue600",size:"14px",weight:500},F," "))," ",r.createElement(g.Z,{id:"modals.interest.deposit.uptoamount2",defaultMessage:"of {coin} from this wallet.",values:{coin:k.displaySymbol}}),r.createElement(x.G0,{id:"modals.interest.depositmax.tooltip"},r.createElement(x.nw,{name:"info",size:"12px"}))))),j&&O&&r.createElement(Ce.y,null,r.createElement(x.JO,{name:"alert-filled",color:"red600",style:{marginRight:"4px"}}),r.createElement(g.Z,{id:"modals.interest.deposit.notenougheth",defaultMessage:"ETH is required to send {coinTicker}. You do not have enough ETH to perform a transaction.",values:{coinTicker:n}})),r.createElement(K.nM,Object.assign({},e,{includeCustodial:!0,fiatCurrency:M,name:"interestDepositAccount"})),r.createElement(Ce.Dy,null,r.createElement(x.xv,{color:"grey600",weight:500,size:"14px"},r.createElement(g.Z,{id:"modals.interest.deposit.transferamount",defaultMessage:"Enter transfer amount"})," "),r.createElement(Ce.Of,null,r.createElement(Ce.t8,{displayCoin:a,onClick:()=>d(!1),"data-e2e":"toggleFiat"},M),"|"," ",r.createElement(Ce.jm,{displayCoin:a,onClick:()=>d(!0),"data-e2e":"toggleCoin"},k.displaySymbol))),r.createElement(Ce.JW,null,r.createElement(Ce.Jf,Object.assign({coin:n,component:K.Jx,"data-e2e":"depositAmount",disabled:O,displayCoin:a,name:"depositAmount",validate:[V.C1,minDepositAmount,maxDepositAmount]},{errorBottom:!0,errorLeft:!0})),r.createElement(Ce.vC,null,a?r.createElement(x.xv,{color:"grey800",size:"14px",weight:600},n):r.createElement(x.xv,{color:"grey800",size:"14px",weight:600},A))),I&&r.createElement(Ce.nd,null,"ABOVE_MAX"===I?r.createElement(r.Fragment,null,r.createElement(x.xv,{size:"14px",weight:500,color:"red600"},r.createElement(g.Z,{id:"modals.interest.deposit.maxtransfer",defaultMessage:"Maximum transfer: {maxFiat}",values:{maxFiat:a?i.maxCoin:(0,b.LE)({unit:M,value:i.maxFiat})}})),r.createElement(Ce.K,{"data-e2e":"interestMax",role:"button",onClick:()=>m.handleTransferMaxAmountClick({amount:a?i.maxCoin:i.maxFiat,coin:a||M})},r.createElement(g.Z,{id:"modals.interest.deposit.maxtransfer.button",defaultMessage:"Transfer Max"}))):r.createElement(r.Fragment,null,r.createElement(x.xv,{size:"14px",weight:500,color:"red600"},r.createElement(g.Z,{id:"modals.interest.deposit.mintransfer",defaultMessage:"Minimum transfer: {minFiat}",values:{minFiat:a?i.minCoin:(0,b.LE)({unit:M,value:i.minFiat})}})),r.createElement(Ce.K,{"data-e2e":"interestMin",role:"button",onClick:()=>m.handleTransferMinAmountClick({amount:a?i.minCoin:i.minFiat,coin:a||M})},r.createElement(g.Z,{id:"modals.interest.deposit.mintransfer.button",defaultMessage:"Transfer Min"})))),R&&r.createElement(be,null,r.createElement(x.JO,{name:"info",color:"orange600",size:"18px",style:{marginRight:"12px"}}),r.createElement(g.Z,{id:"modals.interest.deposit.edd_need",defaultMessage:"Transferring this amount requires further verification. We'll ask you for those details in the next step."})),r.createElement(Ce.ne,null,r.createElement(Ce.cQ,null,r.createElement(x.xv,{color:"grey800",weight:600},r.createElement(g.Z,{id:"modals.interest.deposit.calc",defaultMessage:"Rewards Calculator"})),r.createElement(x.G0,{id:"modals.interest.calculator.tooltip"},r.createElement(x.nw,{name:"info",size:"14px"}))),r.createElement(Ce.sK,{color:"grey600",size:"12px",weight:500},a?r.createElement(g.Z,{id:"modals.interest.deposit.calcdesccoin",defaultMessage:"With {depositAmount} {coinTicker} in your Rewards Account you can earn:",values:{coinTicker:n,depositAmount:z}}):r.createElement(g.Z,{id:"modals.interest.deposit.calcdesc",defaultMessage:"With {currencySymbol} {depositAmountFiat} in your Rewards Account you can earn:",values:{currencySymbol:A,depositAmountFiat:(0,b.M)(D)}})),r.createElement(Ce.$s,null,r.createElement(H.Z,{component:DepositForm_TabMenuTimeFrame,name:"loanTimeFrame"}),r.createElement(Ce.WS,null,"short"===T?r.createElement(r.Fragment,null,r.createElement(Ce.je,null,r.createElement(x.xv,{color:"grey600",size:"12px",weight:500},r.createElement(g.Z,{id:"modals.interest.deposit.daily",defaultMessage:"Daily"})),r.createElement(x.xv,{color:"grey800",weight:600},A,(0,Q.v4)(D,w[n],1/365))),r.createElement(Ce.je,null,r.createElement(x.xv,{color:"grey600",size:"12px",weight:500},r.createElement(g.Z,{id:"modals.interest.deposit.weekly",defaultMessage:"Weekly"})),r.createElement(x.xv,{color:"grey800",weight:600},A,(0,Q.v4)(D,w[n],1/52))),r.createElement(Ce.je,null,r.createElement(x.xv,{color:"grey600",size:"12px",weight:500},r.createElement(g.Z,{id:"modals.interest.deposit.monthly",defaultMessage:"Monthly"})),r.createElement(x.xv,{color:"grey800",weight:600},A,(0,Q.v4)(D,w[n],1/12)))):r.createElement(r.Fragment,null,r.createElement(Ce.je,null,r.createElement(x.xv,{color:"grey600",size:"12px",weight:500},r.createElement(g.Z,{id:"modals.interest.deposit.year",defaultMessage:"1 Year"})),r.createElement(x.xv,{color:"grey800",weight:600},A,(0,Q.v4)(D,w[n],1))),r.createElement(Ce.je,null,r.createElement(x.xv,{color:"grey600",size:"12px",weight:500},r.createElement(g.Z,{id:"modals.interest.deposit.threeyear",defaultMessage:"3 Years"})),r.createElement(x.xv,{color:"grey800",weight:600},A,(0,Q.v4)(D,w[n],3))),r.createElement(Ce.je,null,r.createElement(x.xv,{color:"grey600",size:"12px",weight:500},r.createElement(g.Z,{id:"modals.interest.deposit.fiveyears",defaultMessage:"5 Years"})),r.createElement(x.xv,{color:"grey800",weight:600},A,(0,Q.v4)(D,w[n],5))))),r.createElement(x.xv,{size:"11px",weight:400,style:{marginTop:"6px"}},r.createElement(g.Z,{id:"modals.interest.deposit.calcrate",defaultMessage:"Estimates based on current rewards rate and {coinTicker} price.",values:{coinTicker:k.displaySymbol}}))))),r.createElement(Ce.z,null,r.createElement(H.Z,{component:K.Jg,hideErrors:!0,name:"terms",validate:[V.C1]},r.createElement(Ce.XD,null,r.createElement(x.xv,{lineHeight:"1.4",size:"14px",weight:500},r.createElement(g.Z,{id:"modals.interest.deposit.termsread",defaultMessage:"I have read and agreed to the"}))," ",r.createElement(x.rU,{href:"/root/legal/reward-terms",target:"_blank",size:"14px",weight:500},r.createElement(g.Z,{id:"modals.interest.deposit.termsservice",defaultMessage:"Terms of Service"}))," ",r.createElement(x.xv,{lineHeight:"1.4",size:"14px",weight:500},"&")," ",r.createElement(x.rU,{href:"/root/legal/privacy",target:"_blank",size:"14px",weight:500},r.createElement(g.Z,{id:"modals.interest.deposit.privacy",defaultMessage:"Privacy"})),".")),r.createElement(H.Z,{component:K.Jg,hideErrors:!0,name:"agreement",validate:[V.C1]},r.createElement(Ce._U,null,r.createElement(x.xv,{lineHeight:"1.4",size:"14px",weight:500},P?r.createElement(g.Z,{id:"modals.interest.deposit.agreement.custodial1",defaultMessage:"By accepting this, you agree to transfer {depositAmountFiat} ({depositAmountCrypto}) from your {displayName} Trading Account to your Rewards Account. An initial hold period of {lockupPeriod} days will be applied to your funds.",values:{depositAmountCrypto:`${S} ${k.displaySymbol}`,depositAmountFiat:`${A}${(0,b.M)(D)}`,displayName:k.name,lockupPeriod:_}}):r.createElement(g.Z,{id:"modals.interest.deposit.agreement2",defaultMessage:"By accepting this, you agree to transfer {depositAmountFiat} ({depositAmountCrypto}) plus a network fee of ~{depositFeeFiat} ({depositFeeCrypto}) from your {displayName} Wallet to your Rewards Account. An initial hold period of {lockupPeriod} days will be applied to your funds.",values:{depositAmountCrypto:`${S} ${k.displaySymbol}`,depositAmountFiat:`${A}${(0,b.M)(D)}`,depositFeeCrypto:j?`${l} ETH`:`${l} ${k.displaySymbol}`,depositFeeFiat:`${A}${(0,b.M)(Number(o))}`,displayName:k.name,lockupPeriod:_}})))),r.createElement(Ce.qO,null,r.createElement(x.zx,{"data-e2e":"interestDepositSubmit",disabled:y||O,fullwidth:!0,height:"48px",nature:"primary",type:"submit"},r.createElement(x.xv,{size:"16px",weight:600,color:"white"},r.createElement(g.Z,{id:"modals.interest.deposit.confirmtransfer",defaultMessage:"Confirm Transfer"}))))))}));class Se extends r.PureComponent{constructor(){super(...arguments),this.handleDisplayToggle=e=>{const{data:t,formActions:n,interestActions:r}=this.props,{displayCoin:i}=t.getOrElse({displayCoin:!1});e!==i&&(n.clearFields("interestDepositForm",!1,!1,"depositAmount"),r.setCoinDisplay({isAmountDisplayedInCrypto:e}))},this.handleRefresh=()=>{this.handleInitializeDepositForm()},this.handleInitializeDepositForm=()=>{const{coin:e,currency:t,interestActions:n}=this.props,r=t.getOrElse("GBP");n.initializeDepositForm({coin:e,currency:r})}}componentDidMount(){const{walletCurrency:e}=this.props;this.handleInitializeDepositForm(),this.props.interestActions.fetchEDDDepositLimits({currency:e})}render(){const{currency:e,data:t}=this.props,n=e.getOrElse("GBP");return t.cata({Failure:()=>r.createElement(p.Z,{onClick:this.handleRefresh}),Loading:()=>r.createElement(DepositForm_template_loading,null),NotAsked:()=>r.createElement(DepositForm_template_loading,null),Success:e=>r.createElement(De,Object.assign({},this.props,e,{walletCurrency:n,handleDisplayToggle:this.handleDisplayToggle}))})}}const Te=(0,i.connect)((e=>({currency:selectors_getCurrency(e),data:selectors_getData(e)})),(e=>({formActions:(0,a.bindActionCreators)(o.Nw.cr,e),interestActions:(0,a.bindActionCreators)(o.Nw.wx.interest,e)})))(Se),WithdrawalForm_selectors=e=>{const t=o.wl.wx.bb.getCoinType(e),n=o.wl.wx.bb.getIsAmountDisplayedInCrypto(e),r=o.wl.wx.bb.getInterestAccountBalance(e),i=o.wl.wx.bb.getRates(e),a=o.wl.wx.bb.getWithdrawalMinimums(e),l=o.wl.wx.bb.getInterestLimits(e),s=o.wl.wx.bb.getInterestEDDStatus(e),c=o.wl.wx.bb.getInterestEDDWithdrawLimits(e),d=o.wl.vE.AW.getEDDInterestFileUpload(e).getOrElse(!1);return(0,u.Z)(((e,r,i,a,l,o)=>({accountBalances:e,availToWithdraw:new(ze())(Number(e[t].balance)).minus(e[t].locked),coin:t,displayCoin:n,flagEDDInterestFileUpload:d,interestEDDStatus:l,interestEDDWithdrawLimits:o,interestLimits:r,rates:i,withdrawalMinimums:a})))(r,l,i,a,s,c)},_e=h.ZP.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`,WithdrawalForm_template_loading=()=>r.createElement(_e,null,r.createElement(x.nZ,null),r.createElement(x.xv,{weight:600,color:"grey600",style:{marginTop:"24px"}},r.createElement(g.Z,{id:"modals.interest.withdrawal.loading",defaultMessage:"Doing Work..."})));var Fe=n("../blockchain-wallet-v4/src/exchange/index.ts"),Ie=n("../../node_modules/ramda/es/propEq.js");const maximumWithdrawalAmount=(e,t,n)=>{const{availToWithdraw:i,coin:a,displayCoin:l,rates:o,walletCurrency:s}=n,c=(0,C.b)(a,i),d=l?c:(0,Fe.convertCoinToFiat)({coin:a,currency:s,isStandard:!0,rates:o,value:c});return!!new(ze())(Number(d)).isLessThan(Number(e))&&r.createElement(g.Z,{id:"interest.withdrawal.validation.abovemax",defaultMessage:"Amount is above the maximum withdrawal amount."})},minimumWithdrawalAmount=(e,t,n)=>{const{coin:i,displayCoin:a,rates:l,walletCurrency:o,withdrawalMinimums:s}=n,c=s.find((0,Ie.Z)("symbol",i)).value,d=a?c:v.ei.convertCoinToFiat({coin:i,currency:o,isStandard:!0,rates:l,value:c});return!!new(ze())(Number(d)).isGreaterThan(Number(e))&&r.createElement(g.Z,{id:"interest.withdrawal.validation.belowminamount",defaultMessage:"Amount is below the minimum withdrawal amount of {withdrawalMin} {currency}.",values:{currency:a?i:o,withdrawalMin:d}})},je="interestWithdrawalForm",Oe=(0,a.compose)((0,X.Z)({form:je}),(0,i.connect)((e=>({values:o.wl.cr.getFormValues(je)(e)}))))((e=>{const{accountBalances:t,availToWithdraw:n,coin:i,displayCoin:a,flagEDDInterestFileUpload:l,formActions:o,handleDisplayToggle:s,interestActions:c,interestEDDStatus:d,interestEDDWithdrawLimits:m,invalid:p,rates:u,submitting:h,values:w,walletCurrency:y}=e,E=v.ei.getSymbol(y),{coinfig:f}=window.coins[i],M=f.displaySymbol,k=f.name,A=t[i],z=A&&A.balance,P=A&&A.totalInterest,D=(0,C.b)(i,z),S=(0,C.b)(i,P),T=(0,C.b)(i,n),_=w&&w.withdrawalAmount||0,F=(0,Fe.convertCoinToFiat)({coin:i,currency:y,isStandard:!0,rates:u,value:T}),I=(0,Q.v$)(a,_,i,y,u),j=(0,Q.RX)(a,_,i,y,u);if(!A)return null;const O=!!(null==m?void 0:m.withdrawLimits)&&Number(I)>Number(null==m?void 0:m.withdrawLimits.amount)&&!(null==d?void 0:d.eddSubmitted)&&!(null==d?void 0:d.eddPassed);return h?r.createElement(te,null,r.createElement(x.nZ,null),r.createElement(x.xv,{weight:600,color:"grey800",size:"20px",style:{marginTop:"24px"}},r.createElement(g.Z,{id:"modals.interest.withdrawal.progress",defaultMessage:"In Progress..."})),r.createElement(x.xv,{weight:600,color:"grey600",size:"16px",style:{marginTop:"24px"}},r.createElement(g.Z,{id:"modals.interest.withdrawal.progressmsg",defaultMessage:"Requesting a withdrawal from your Rewards Account"}))):r.createElement(ne,{onSubmit:t=>{t.preventDefault(),c.requestWithdrawal({coin:i,withdrawalAmountCrypto:j,withdrawalAmountFiat:I}),e.setShowSupply(O)}},r.createElement(re,null,r.createElement(ie,null,r.createElement(ae,{color:"grey600",cursor:!0,name:"arrow-left",onClick:()=>c.showInterestModal({coin:i,step:"ACCOUNT_SUMMARY"}),size:"20px"}),r.createElement(x.xv,{color:"grey800",size:"20px",weight:600},r.createElement(g.Z,{id:"buttons.withdraw_value",defaultMessage:"Withdraw {value}",values:{value:k}}))),r.createElement(le,null,r.createElement(oe,null,r.createElement(x.xv,{color:"grey600",weight:500,size:"14px"},r.createElement(g.Z,{id:"modals.interest.withdrawal.balance1",defaultMessage:"Your {coinTicker} Balance",values:{coinTicker:M}})),r.createElement(x.xv,{color:"grey800",size:"18px",style:{marginTop:"8px"},weight:600},D," ",M),r.createElement(Z.Z,{coin:i,color:"grey600",size:"14px",style:{marginTop:"5px"},weight:500},A.balance)),r.createElement(de,null),r.createElement(oe,null,r.createElement(x.xv,{color:"grey600",weight:500,size:"14px"},r.createElement(g.Z,{id:"modals.interest.withdrawal.totalinterest",defaultMessage:"Total Rewards Earned"})),r.createElement(x.xv,{color:"grey800",size:"18px",style:{marginTop:"8px"},weight:600},S," ",M),r.createElement(Z.Z,{coin:i,color:"grey600",size:"14px",style:{marginTop:"5px"},weight:600},A.totalInterest))),r.createElement(se,null,r.createElement(x.xv,{color:"grey600",weight:500,size:"14px"},r.createElement(g.Z,{id:"modals.interest.withdrawal.accountAmount",defaultMessage:"Select the account you would like to withdraw your Rewards Account funds to. You can withdraw up to"})," ",a?r.createElement(ce,{onClick:()=>{o.change(je,"withdrawalAmount",T)}},r.createElement(x.xv,{color:"blue600",size:"14px",weight:500},T," ",M)):r.createElement(ce,{onClick:()=>{o.touch(je,"withdrawalAmount"),o.change(je,"withdrawalAmount",F)}},r.createElement(x.xv,{color:"blue600",size:"14px",weight:500},(0,b.LE)({unit:y,value:F}))))),r.createElement(K.nM,Object.assign({},e,{includeCustodial:!0,fiatCurrency:y,name:"interestWithdrawalAccount"})),r.createElement(pe,null,r.createElement(x.xv,{color:"grey600",weight:500,size:"14px"},r.createElement(g.Z,{id:"modals.interest.withdrawal.enteramount",defaultMessage:"Enter withdrawal amount"})),r.createElement(Ee,null,r.createElement(fe,{displayCoin:a,onClick:()=>s(!1),"data-e2e":"toggleFiat"},y),"|"," ",r.createElement(ve,{displayCoin:a,onClick:()=>s(!0),"data-e2e":"toggleCoin"},M))),r.createElement(ge,null,r.createElement(ue,Object.assign({coin:i,component:K.Jx,"data-e2e":"withdrawalAmount",displayCoin:a,name:"withdrawalAmount",validate:[V.C1,maximumWithdrawalAmount,minimumWithdrawalAmount]},{errorBottom:!0,errorIcon:"alert-filled",errorLeft:!0})),r.createElement(he,null,a?r.createElement(x.xv,{color:"grey800",size:"14px",weight:600},M):r.createElement(x.xv,{color:"grey800",size:"14px",weight:600},E))),O&&l&&r.createElement(Ze,null,r.createElement(x.xv,{color:"orange600",size:"14px",weight:500},r.createElement(g.Z,{id:"modals.interest.withdrawal.edd_need_further_information",defaultMessage:"We will need to further verify your identity to make this withdrawal."}))),O&&!l&&r.createElement(be,null,r.createElement(x.JO,{name:"info",color:"orange600",size:"18px",style:{marginRight:"12px"}}),r.createElement(Ze,null,r.createElement(g.Z,{id:"modals.interest.withdrawal.edd_need",defaultMessage:"This amount requires further information. Confirm the withdrawal and follow the instructions on the next screen."})))),r.createElement(me,null,r.createElement(xe,null,r.createElement(x.xv,{color:"grey600",weight:500,size:"14px"},r.createElement(g.Z,{id:"modals.interest.withdrawal.recap",defaultMessage:"You are requesting to withdraw <b>{withdrawalAmountFiat}</b> ({withdrawalAmountCrypto}) from your Rewards Account. After confirming this withdrawal, you will not continue to earn rewards on the amount withdrawn.",values:{withdrawalAmountCrypto:`${j} ${M}`,withdrawalAmountFiat:`${E}${(0,b.M)(I)}`}})),r.createElement(we,null,r.createElement(x.xv,{color:"grey600",weight:500,size:"14px"},r.createElement(g.Z,{id:"modals.interest.withdrawal.available",defaultMessage:"A small network fee will be applied, and your {coinTicker} will be available in your {coinTicker} Wallet within 2 days.",values:{coinTicker:M}})))),r.createElement(ye,null,r.createElement(x.zx,{"data-e2e":"interestWithdrawalSubmit",disabled:p,fullwidth:!0,height:"48px",nature:"primary",type:"submit"},r.createElement(x.xv,{size:"16px",weight:600,color:"white"},r.createElement(g.Z,{id:"buttons.confirm_withdraw",defaultMessage:"Confirm Withdraw"}))))))}));class Re extends r.PureComponent{constructor(){super(...arguments),this.handleDisplayToggle=e=>{const{displayCoin:t}=this.props.data.getOrElse({displayCoin:!1});e!==t&&(this.props.formActions.clearFields("interestWithdrawalForm",!1,!1,"withdrawalAmount"),this.props.interestActions.setCoinDisplay({isAmountDisplayedInCrypto:e}))},this.handleRefresh=()=>{const{coin:e,interestActions:t,walletCurrency:n}=this.props;t.initializeWithdrawalForm({coin:e,walletCurrency:n})}}componentDidMount(){const{walletCurrency:e}=this.props;this.handleRefresh(),this.props.interestActions.fetchEDDWithdrawLimits({currency:e})}render(){const{data:e}=this.props;return e.cata({Failure:()=>r.createElement(p.Z,{onClick:this.handleRefresh}),Loading:()=>r.createElement(WithdrawalForm_template_loading,null),NotAsked:()=>r.createElement(WithdrawalForm_template_loading,null),Success:e=>r.createElement(Oe,Object.assign({},e,this.props,{handleDisplayToggle:this.handleDisplayToggle}))})}}const Le=(0,i.connect)((e=>({data:WithdrawalForm_selectors(e)})),(e=>({formActions:(0,a.bindActionCreators)(o.Nw.cr,e),interestActions:(0,a.bindActionCreators)(o.Nw.wx.interest,e)})))(Re);class Ne extends r.PureComponent{constructor(e){super(e),this.handleClose=()=>{this.setState({show:!1}),setTimeout((()=>{this.props.close(s.tl.INTEREST_MODAL)}),l.x9)},this.handleSBClick=e=>{this.setState({show:!1}),this.props.close(s.tl.INTEREST_MODAL),setTimeout((()=>{this.props.buySellActions.showModal({cryptoCurrency:e,origin:"InterestPage"})}),l.x9/2)},this.showSupply=e=>{this.setState({showSupplyInformation:e})},this.state={show:!1,showSupplyInformation:!1}}componentDidMount(){this.setState({show:!0}),this.props.fetchInterestEDDStatus()}render(){const{coin:e,position:t,step:n,total:i,walletCurrency:a}=this.props;return r.createElement(l.ZP,{position:t,isOpen:this.state.show,userClickedOutside:this.props.userClickedOutside,onClose:this.handleClose,"data-e2e":"interestModal",total:i},"ACCOUNT_SUMMARY"===n.name&&r.createElement(l.FK,null,r.createElement(q,{handleClose:this.handleClose,handleSBClick:()=>this.handleSBClick(e),stepMetadata:n.data,coin:e,walletCurrency:a,showSupply:this.state.showSupplyInformation})),"DEPOSIT"===n.name&&r.createElement(l.FK,null,r.createElement(Te,{coin:e,walletCurrency:a,setShowSupply:this.showSupply})),"WITHDRAWAL"===n.name&&r.createElement(l.FK,null,r.createElement(Le,{coin:e,walletCurrency:a,setShowSupply:this.showSupply})))}}const $e=(0,i.connect)((e=>({coin:o.wl.wx.bb.getCoinType(e),step:o.wl.wx.bb.getStep(e),walletCurrency:o.wl.vE.Xd.getCurrency(e).getOrElse("USD")})),(e=>({buySellActions:(0,a.bindActionCreators)(o.Nw.wx.buySell,e),fetchInterestEDDStatus:()=>e(o.Nw.wx.interest.fetchEDDStatus()),interestActions:(0,a.bindActionCreators)(o.Nw.wx.interest,e)}))),We=(0,a.compose)((0,c.Z)(s.tl.INTEREST_MODAL,{transition:l.x9}),$e)(Ne)},"./src/modals/components/index.tsx":(e,t,n)=>{n.d(t,{Ue:()=>E,rD:()=>BankSearchIcon,mf:()=>k,Vd:()=>M,mZ:()=>BankWaitIndicator,zK:()=>s,lh:()=>y,Hr:()=>Hr,wq:()=>IneligibleErrorMessage,Oi:()=>u,dC:()=>LinkViaDesktop,gb:()=>Loading,H:()=>LoadingUpdating,EA:()=>ModalNavWithBackArrow,YX:()=>ModalNavWithCloseIcon,Zu:()=>c,ty:()=>z,NA:()=>ScanWithPhone,$0:()=>d,FP:()=>SimpleBankRow});var r=n("../../node_modules/react/index.js"),i=n("./node_modules/react-intl/lib/src/components/message.js"),a=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),l=n("../blockchain-info-components/src/index.js"),o=n("./src/components/Flyout/index.tsx");const s=(0,a.ZP)(o.o9)`
  padding: 37px 0 34px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`,c=(0,a.ZP)(l.xv)`
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
`,p=a.ZP.div`
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
`,u=a.ZP.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`,g=a.ZP.img`
  margin-bottom: 32px;
  max-height: 60px;
`,ScanWithPhone=({children:e,logo:t,qrCode:n})=>r.createElement(d,null,t&&r.createElement(g,{src:t}),r.createElement(l.xv,{weight:600,size:"20px",color:"grey900"},e),r.createElement(l.xv,{weight:500,size:"14px",color:"grey600"},r.createElement(i.Z,{id:"modals.brokerage.use_phone_camera",defaultMessage:"Use your phone’s camera to scan the QR code."})),r.createElement(m,null,n?r.createElement("img",{alt:"Use your phone’s camera to scan the QR code.",src:n}):r.createElement(l.nZ,{width:"30px",height:"30px"}))),BankWaitIndicator=({qrCode:e})=>{const[t,n]=(0,r.useState)(0);return e&&setTimeout((()=>{n(t+1)}),3e4),r.createElement(p,{className:e?"active":""},r.createElement(l.nZ,{width:"10px",height:"10px",borderWidth:"3px"}),r.createElement(l.xv,{size:"14px",weight:500},0===t&&r.createElement(i.Z,{id:"modals.brokerage.waiting_to_hear",defaultMessage:"Waiting to hear from your bank"}),t>0&&r.createElement(i.Z,{id:"modals.brokerage.this_can_take_a_while",defaultMessage:"This can take several minutes, hold tight!"})))},h=(0,a.ZP)(l.zx)`
  margin: 20px 0 0;
  display: unset;
`,LinkViaDesktop=({authUrl:e,children:t,onClick:n=(()=>{})})=>e?r.createElement(d,null,r.createElement(l.xv,{weight:600,size:"20px",color:"grey900"},t),r.createElement(h,{"data-e2e":"yapilyBankLink",nature:"empty-blue",onClick:()=>{window.open(e,"_blank"),n()}},r.createElement(i.Z,{id:"modals.brokerage.continue_in_browser",defaultMessage:"Continue in browser"}))):null,x=(0,a.ZP)(l.xv)`
  width: 300px;
`,w=a.ZP.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`,y="BROKERAGE_INELIGIBLE",IneligibleErrorMessage=()=>r.createElement(x,{size:"16px",weight:400},r.createElement(i.Z,{id:"modals.brokerage.ineligible_error",defaultMessage:"You are not eligible to make deposits and withdrawals with this currency."}));var E;!function(e){e.GETTING_READY="Getting Ready...",e.LOADING="Loading...",e.PROCESSING="Processing..."}(E||(E={}));const Loading=({text:e})=>r.createElement(w,null,r.createElement(l.nZ,null),r.createElement(l.xv,{weight:600,color:"grey600",style:{marginTop:"24px"}},e===E.LOADING&&r.createElement(i.Z,{id:"copy.loading",defaultMessage:"Loading..."}),e===E.GETTING_READY&&r.createElement(i.Z,{id:"loader.message.gettingready",defaultMessage:"Getting Ready..."}),e===E.PROCESSING&&r.createElement(i.Z,{id:"modals.simplebuy.processing",defaultMessage:"Processing…"}))),f=a.ZP.div`
  transform: translate(47px, 35px);
  border: 5px solid white;
  border-radius: 50%;
  background-color: white;
`,v=(0,a.ZP)(l.xv)`
  font-weight: 600;
  font-size: 20px;
  margin-top: 22px;
`,b=(0,a.ZP)(l.xv)`
  font-size: 14px;
  font-weight: 500;
  margin: 5px 30px;
`,LoadingUpdating=()=>r.createElement(w,null,r.createElement(f,null,r.createElement(l.nZ,{borderWidth:"7px",height:"32px",width:"32px"})),r.createElement(l.Ee,{name:"blockchain-logo-circle",width:"106px"}),r.createElement(v,{color:"grey900"},r.createElement(i.Z,{defaultMessage:"Updating Your Wallet...",id:"modals.brokerage.updating_your_wallet"})),r.createElement(b,{color:"grey600"},r.createElement(i.Z,{defaultMessage:"This could take up to 30 seconds. Please do not go back or close the app.",id:"modals.brokerage.this_could_take"}))),Z=a.ZP.div`
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
`,C=a.ZP.div`
  height: 30px;
  width: 30px;
  background: url('${e=>e.url}') 0 0 no-repeat;
  background-size: 30px;
  background-position: center;
`,M=a.ZP.div`
  position: relative;
`,k=a.ZP.input`
  border: 1px solid ${e=>e.theme.grey000};
  font-size: 16px;
  width: 100%;
  border-width: 1px 0;
  padding: 20px 0 20px 40px;

  &:active,
  &:focus {
    outline: none;
  }
`,BankSearchIcon=()=>r.createElement(l.JO,{size:"20px",color:"grey600",name:"magnifier",style:{position:"absolute",right:"60px",top:"20px"}}),SimpleBankRow=e=>r.createElement(Z,{onClick:e.onClick},r.createElement("div",null,r.createElement(C,{url:e.institution.media[0].source}),r.createElement(l.xv,{color:"grey900",style:{marginLeft:"20px"},weight:600},e.institution.name)),r.createElement(l.JO,{cursor:!0,name:"chevron-right",size:"20px",color:"grey600",role:"button",style:{marginRight:"24px"}})),ModalNavWithBackArrow=e=>r.createElement(c,{color:"grey800",size:"20px",weight:600},r.createElement(l.JO,{cursor:!0,name:"arrow-back",size:"20px",color:"grey600",role:"button",style:{marginRight:"24px"},onClick:()=>e.handleClose()}),e.children),ModalNavWithCloseIcon=e=>r.createElement(c,{color:"grey800",size:"20px",weight:600,style:{justifyContent:"space-between"}},e.children,r.createElement(l.JO,{cursor:!0,name:"close",size:"20px",color:"grey600",role:"button",style:{marginRight:"24px"},onClick:()=>e.handleClose()})),A=a.ZP.hr`
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
`,Hr=()=>r.createElement("div",{style:{width:"100%"}},r.createElement(l.xv,{weight:600,size:"16px",color:"grey900"},r.createElement(A,null))),z=((0,a.ZP)(l.xv)`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.spaceBetween?"space-between":"initial"};
  margin-bottom: ${e=>e.marginBottom?"16px":"0px"};
`,({amount:e,currency:t})=>r.createElement(i.Z,{id:"modals.send.over_your_limit",defaultMessage:"Over your limit! Send up to {currency}{amount}.",values:{amount:e,currency:t}}))}}]);