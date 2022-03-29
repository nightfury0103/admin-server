"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[3477],{"./src/modals/Settings/TradingLimits/index.tsx":(e,t,i)=>{i.r(t),i.d(t,{default:()=>M});var l=i("../../node_modules/react/index.js"),n=i("../../node_modules/react-redux/es/index.js"),r=i("../../node_modules/redux/es/redux.js"),a=i("../blockchain-info-components/src/index.js"),s=i("./src/components/Flyout/index.tsx"),o=i("./src/data/index.ts"),d=i("./src/data/types.ts"),c=i("./src/providers/ModalEnhancer/index.tsx"),m=i("../blockchain-wallet-v4/src/index.ts");const selectors=e=>{const t=o.wl.qz.N5.getUserData(e).getOrElse({address:void 0,id:"",kycState:"NONE",mobile:"",mobileVerified:!1,state:"NONE",tiers:{current:0}}),i=o.wl.qz.N5.getTiers(e).getOrElse({}),l=o.wl.wx.wd.getSddEligible(e).getOrElse({eligible:!1,ineligibilityReason:"KYC_TIER",tier:0}),n=o.wl.wx.Xd.getProductsEligibility(e).getOrElse([]),r=o.wl.wx.bb.getInterestEDDStatus(e).getOrElse({});return m.Nt.Success({interestEDDStatus:r,productsEligibility:n,sddEligible:l,userData:t,userTiers:i})};var u=i("./node_modules/react-intl/lib/src/components/message.js"),E=i("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const g=E.ZP.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`,template_loading=()=>l.createElement(g,null,l.createElement(a.T_,{width:"80px",height:"80px"}),l.createElement(a.xv,{weight:600,color:"grey600",style:{marginTop:"24px"}},l.createElement(u.Z,{id:"modals.simplebuy.processing",defaultMessage:"Processing…"})));var p=i("../../node_modules/ramda/es/path.js"),f=i("../blockchain-wallet-v4/src/exchange/utils.ts"),x=i("./src/components/Cartridge/index.ts"),h=i("./src/modals/Settings/TradingLimits/model.ts");const y=E.ZP.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`,_=(0,E.ZP)(a.xv)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 7px;
`,S=E.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`,w=E.ZP.div`
  border-top: 1px solid ${e=>e.theme.grey000};
  padding: 20px 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: ${e=>e.isClickable?"pointer":"auto"};
`,v=(0,E.ZP)(w)`
  align-items: center;
  position: relative;
`,A=E.ZP.div`
  display: flex;
  flex-direction: row;
`,b=E.ZP.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`,D=(0,E.ZP)(s.o9)`
  position: fixed;
  max-width: 480px;
  background-color: ${e=>e.theme.white};
  z-index: 9999;
`,I=E.ZP.div`
  padding: 0 40px 35px;
`,C=(0,E.ZP)(s.o9)`
  flex: 1;
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
  margin-top: -16px;
`,N=E.ZP.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 40px;
  > span {
    padding: 3px 8px;
  }
`,R=E.ZP.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: flex-end;
  min-width: 75px;
`,L=E.ZP.div`
  span {
    margin-top: -8px;
    margin-right: -8px;
  }
`,T=(0,E.ZP)(a.xv)`
  color: ${e=>e.theme.grey900};
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
`,P=E.ZP.div`
  margin-top: 177px;
`,Z=(0,E.ZP)(a.xv)`
  color: ${e=>e.theme.grey900};
  font-size: 16px;
  font-weight: 600;
  margin-left: 20px;
`,O=(0,E.ZP)(a.xv)`
  color: ${e=>e.theme.grey900};
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
`,getItemBadgeStatus=(e,t,i=!1)=>void 0!==e&&h.Iy[e][t]||i?l.createElement(R,null,l.createElement(x.El,{fontSize:"12px"},l.createElement(u.Z,{id:"modals.tradinglimits.unlocked",defaultMessage:"Unlocked"}))):l.createElement(R,null,l.createElement(x.XG,{fontSize:"12px"},l.createElement(u.Z,{id:"modals.tradinglimits.locked",defaultMessage:"Locked"}))),getTierStatus=(e,t,i,n)=>"under_review"===i.state||"pending"===i.state?l.createElement(N,null,l.createElement(x.wF,{fontSize:"12px"},l.createElement(u.Z,{id:"copy.in_review",defaultMessage:"In Review"}))):n?l.createElement(N,null,l.createElement(x.XG,{fontSize:"12px"},l.createElement(u.Z,{id:"modals.tradinglimits.info_needed",defaultMessage:"Info Needed"}))):e&&e>=t?l.createElement("div",null,l.createElement(N,null,l.createElement(x.S0,{fontSize:"12px"},l.createElement(u.Z,{id:"modals.tradinglimits.approved",defaultMessage:"Approved"})))):l.createElement(L,null,l.createElement(a.JO,{name:"chevron-right",size:"32px",color:"grey400"})),template_success=e=>{var t;const{interestEDDStatus:i,sddEligible:n,userData:r,userTiers:s}=e;if(!Array.isArray(s))return null;const o=s.find((e=>e.index===h.iY.SILVER)),d=s.find((e=>e.index===h.iY.GOLD)),c=null!==(t=(0,p.Z)(["tiers","current"],r))&&void 0!==t?t:0,m=n&&n.tier===h.iY.SILVER_PLUS?h.iY.SILVER_PLUS:c,E=c===h.iY.NONE?c:m,g=E===h.iY.GOLD,x=E===h.iY.SILVER||g||E===h.iY.SILVER_PLUS,N=e.productsEligibility&&e.productsEligibility.find((e=>"SWAP"===e.product)),R=e.productsEligibility&&e.productsEligibility.find((e=>"SIMPLEBUY"===e.product)),L=e.productsEligibility&&e.productsEligibility.find((e=>"BROKERAGE"===e.product)),U=e.productsEligibility&&e.productsEligibility.find((e=>"SAVINGS"===e.product)),z="under_review"===d.state||"pending"===d.state;return l.createElement(y,null,l.createElement(D,null,l.createElement(S,null,l.createElement(a.JO,{cursor:!0,"data-e2e":"tradingLimitsCloseButton",name:"close",size:"20px",color:"grey600",role:"button",onClick:e.handleClose})),l.createElement(_,{color:"grey800",size:"24px",weight:600},l.createElement(u.Z,{id:"layouts.wallet.header.tradinglimits",defaultMessage:"Trading Limits"})),l.createElement(a.xv,{color:"grey600",size:"16px",weight:500,style:{marginTop:"8px"}},l.createElement(u.Z,{id:"modals.tradinglimits.description",defaultMessage:"Unlock features within your our.com Wallet. Some features may ask you to verify your identity."}))),l.createElement(P,null,l.createElement(w,{onClick:()=>x?null:e.identityVerificationActions.verifyIdentity({needMoreInfo:!1,origin:"Settings",tier:h.iY.SILVER}),isClickable:!x,"data-e2e":`continueKycTier${h.iY.SILVER}Btn`},l.createElement("div",null,l.createElement(a.Ee,{name:"tier-silver",size:"32px"})),l.createElement(b,null,l.createElement(T,null,l.createElement(u.Z,{id:"components.identityverification.tiercard.silver",defaultMessage:"Silver Level"})),l.createElement(O,{color:"grey900",size:"14px",weight:500},l.createElement(u.Z,{id:"modals.tradinglimits.silver_subheader",defaultMessage:"Trade up to {amount}/year.",values:{amount:(0,f.LE)({digits:0,unit:o.limits.currency||"USD",value:"2000"})}})),l.createElement(a.xv,{color:"grey600",lineHeight:"1.5",size:"12px",weight:500},l.createElement(u.Z,{id:"modals.tradinglimits.silver_desc",defaultMessage:"You’ll need to verify your email address, name, home address and date of birth."}))),getTierStatus(E,h.iY.SILVER,o,!1)),l.createElement(w,{onClick:()=>g||z?null:e.identityVerificationActions.verifyIdentity(h.iY.GOLD,!1),isClickable:!g,"data-e2e":`continueKycTier${h.iY.GOLD}Btn`},l.createElement("div",null,l.createElement(a.Ee,{name:"tier-gold",size:"32px"})),l.createElement(b,null,l.createElement(T,null,l.createElement(u.Z,{id:"components.identityverification.tiercard.gold",defaultMessage:"Gold Level"})),l.createElement(O,{color:"grey900",size:"14px",weight:500},l.createElement(u.Z,{id:"modals.tradinglimits.gold_subheader",defaultMessage:"Earn Rewards & trade up to {amount}/day.",values:{amount:(0,f.LE)({digits:0,unit:d.limits.currency||"USD",value:"500000"})}})),(null==i?void 0:i.eddNeeded)&&!(null==i?void 0:i.eddPassed)?l.createElement(a.Qt,{inline:!0},l.createElement(a.xv,{color:"grey600",size:"12px",weight:500},l.createElement(u.Z,{id:"modals.tradinglimits.gold_desc_high_edd",defaultMessage:"Due to the high balance in your account, we need further information for legal reasons."})),l.createElement(a.rU,{size:"12px",weight:500,target:"_blank",rel:"noopener noreferrer",href:"/support/hc/en-us/articles/360018080172-Identity-Verification-Overview"},l.createElement(u.Z,{id:"buttons.learn_more",defaultMessage:"Learn More"}))):l.createElement(a.Qt,{inline:!0},l.createElement(a.xv,{color:"grey600",size:"12px",weight:500},l.createElement(u.Z,{id:"modals.tradinglimits.gold_desc1",defaultMessage:"You’ll need to verify your identity by uploading an ID and a selfie."})),l.createElement(a.xv,{color:"grey600",italic:!0,size:"12px",weight:500},l.createElement(u.Z,{id:"modals.tradinglimits.gold_desc2",defaultMessage:"Requires Silver Tier approval."})))),getTierStatus(E===h.iY.SILVER_PLUS?h.iY.SILVER:E,h.iY.GOLD,d,(null==i?void 0:i.eddNeeded)&&!(null==i?void 0:i.eddPassed))),(null==i?void 0:i.eddNeeded)&&!(null==i?void 0:i.eddPassed)&&l.createElement(I,null,l.createElement(a.rU,{onClick:()=>{e.interestUploadDocumentActions.showModal({origin:"InterestUploadDocument"})},style:{width:"100%"}},l.createElement(a.zx,{"data-e2e":"earnInterestSupplyInformation",fullwidth:!0,nature:"primary"},l.createElement(u.Z,{id:"scenes.interest.submit_information",defaultMessage:"Submit Information"})))),l.createElement(v,null,l.createElement(A,null,l.createElement(a.JO,{name:"send",color:"blue600",size:"20px"}),l.createElement(Z,null,l.createElement(u.Z,{id:"modals.tradinglimits.send_crypto",defaultMessage:"Send Crypto"}))),getItemBadgeStatus(E,h.cq.SEND)),l.createElement(v,null,l.createElement(a.JO,{name:"qr-code",color:"blue600",size:"20px"}),l.createElement(Z,null,l.createElement(u.Z,{id:"modals.tradinglimits.receive_crypto",defaultMessage:"Receive Crypto"})),getItemBadgeStatus(E,h.cq.RECEIVE)),l.createElement(v,null,l.createElement(a.JO,{name:"arrow-switch-thick",color:"blue600",size:"20px"}),l.createElement(Z,null,l.createElement(u.Z,{id:"modals.tradinglimits.swap_crypto",defaultMessage:"Swap Crypto"})),getItemBadgeStatus(E,h.cq.SWAP,null==N?void 0:N.eligible)),l.createElement(v,null,l.createElement(a.JO,{name:"USD",color:"blue600",size:"20px"}),l.createElement(Z,null,l.createElement(u.Z,{id:"modals.tradinglimits.cash_accounts",defaultMessage:"Cash Accounts"})),getItemBadgeStatus(E,h.cq.CASH_ACCOUNT)),l.createElement(v,null,l.createElement(a.JO,{name:"credit-card-sb",color:"blue600",size:"20px"}),l.createElement(Z,null,l.createElement(u.Z,{id:"modals.tradinglimits.buy_with_a_card",defaultMessage:"Buy with a Card"})),getItemBadgeStatus(E,h.cq.BUY_WITH_A_CARD,null==R?void 0:R.eligible)),l.createElement(v,null,l.createElement(a.JO,{name:"bank-filled",color:"blue600",size:"20px"}),l.createElement(Z,null,l.createElement(u.Z,{id:"modals.tradinglimits.deposits_and_withdrawals",defaultMessage:"Deposits & Withdrawals"})),getItemBadgeStatus(E,h.cq.DEPOSIT_AND_WITHDRAWAL,null==L?void 0:L.eligible)),l.createElement(v,null,l.createElement(a.JO,{name:"percentage",color:"blue600",size:"20px"}),l.createElement(Z,null,l.createElement(u.Z,{id:"modals.tradinglimits.earn_interest",defaultMessage:"Earn Rewards"})),getItemBadgeStatus(E,h.cq.EARN_INTEREST,null==U?void 0:U.eligible))),l.createElement(C,null,!g&&!z&&l.createElement(a.zx,{fullwidth:!0,size:"16px",height:"48px",nature:"primary","data-e2e":"tradingLimitsUnlockAll",type:"button",onClick:()=>e.identityVerificationActions.verifyIdentity(2,!1)},x?l.createElement(u.Z,{id:"modals.tradinglimits.unlock_gold_tier",defaultMessage:"Unlock Gold Tier ->"}):l.createElement(u.Z,{id:"buttons.unlock_all",defaultMessage:"Unlock All  ->"}))))};class U extends l.PureComponent{constructor(e){super(e),this.handleClose=()=>{this.setState({show:!1}),setTimeout((()=>{this.props.close()}),s.x9)},this.state={show:!1}}componentDidMount(){this.setState({show:!0}),this.props.profileActions.fetchUserDataLoading(),this.props.profileActions.fetchUser(),this.props.fetchProductsEligibility(),this.props.fetchInterestEDDStatus(),this.props.buySellActions.fetchSDDEligibility()}render(){return l.createElement(s.ZP,Object.assign({},this.props,{onClose:this.handleClose,isOpen:this.state.show,"data-e2e":"tradingLimitsModal"}),l.createElement(s.FK,null,this.props.data.cata({Failure:e=>l.createElement(a.xv,{color:"red600",size:"14px",weight:400},e),Loading:()=>l.createElement(template_loading,null),NotAsked:()=>l.createElement(template_loading,null),Success:e=>l.createElement(template_success,Object.assign({},e,this.props,{handleClose:this.handleClose}))})))}}const z=(0,n.connect)((e=>({data:selectors(e)})),(e=>({buySellActions:(0,r.bindActionCreators)(o.Nw.wx.buySell,e),fetchInterestEDDStatus:()=>e(o.Nw.wx.interest.fetchEDDStatus()),fetchProductsEligibility:()=>e(o.Nw.wx.settings.fetchProductsEligibility()),identityVerificationActions:(0,r.bindActionCreators)(o.Nw.wx.identityVerification,e),interestUploadDocumentActions:(0,r.bindActionCreators)(o.Nw.wx.interestUploadDocument,e),profileActions:(0,r.bindActionCreators)(o.Nw.qz.N5,e)}))),M=(0,r.compose)((0,c.Z)(d.tl.TRADING_LIMITS_MODAL,{transition:s.x9}),z)(U)},"./src/modals/Settings/TradingLimits/model.ts":(e,t,i)=>{var l,n;i.d(t,{iY:()=>l,cq:()=>n,Iy:()=>r}),function(e){e[e.NONE=0]="NONE",e[e.SILVER=1]="SILVER",e[e.GOLD=2]="GOLD",e[e.SILVER_PLUS=3]="SILVER_PLUS"}(l||(l={})),function(e){e.BUY_WITH_A_CARD="buy_with_a_card",e.CASH_ACCOUNT="cash_account",e.DEPOSIT_AND_WITHDRAWAL="deposit_and_withdrawal",e.EARN_INTEREST="earn_interest",e.RECEIVE="receive",e.SEND="send",e.SWAP="swap"}(n||(n={}));const r={[l.NONE]:{[n.SEND]:!0,[n.RECEIVE]:!0,[n.SWAP]:!1,[n.CASH_ACCOUNT]:!1,[n.BUY_WITH_A_CARD]:!1,[n.DEPOSIT_AND_WITHDRAWAL]:!1,[n.EARN_INTEREST]:!1},[l.SILVER]:{[n.SEND]:!0,[n.RECEIVE]:!0,[n.SWAP]:!0,[n.CASH_ACCOUNT]:!1,[n.BUY_WITH_A_CARD]:!1,[n.DEPOSIT_AND_WITHDRAWAL]:!1,[n.EARN_INTEREST]:!1},[l.GOLD]:{[n.SEND]:!0,[n.RECEIVE]:!0,[n.SWAP]:!0,[n.CASH_ACCOUNT]:!0,[n.BUY_WITH_A_CARD]:!0,[n.DEPOSIT_AND_WITHDRAWAL]:!0,[n.EARN_INTEREST]:!0},[l.SILVER_PLUS]:{[n.SEND]:!0,[n.RECEIVE]:!0,[n.SWAP]:!0,[n.CASH_ACCOUNT]:!1,[n.BUY_WITH_A_CARD]:!0,[n.DEPOSIT_AND_WITHDRAWAL]:!1,[n.EARN_INTEREST]:!1}}}}]);