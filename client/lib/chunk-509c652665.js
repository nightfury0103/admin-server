"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[4438],{"./src/components/Box/index.tsx":(e,t,n)=>{n.d(t,{xu:()=>x,W2:()=>g,Ec:()=>Box_SavedRecurringBuy});var r=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),i=n("./src/services/styles/index.ts"),s=n("../../node_modules/react/index.js"),a=n("./node_modules/react-intl/lib/src/components/message.js"),l=n("../../node_modules/polished/dist/polished.esm.js"),o=n("../blockchain-info-components/src/index.js"),c=n("./src/components/Flyout/model.tsx");const d=(0,r.ZP)(o.xu)`
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
`,m=r.ZP.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`,u=r.ZP.div`
  display: flex;
  justify-content: flex-end;
`,p=r.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  min-width: 40px;
  border-radius: 20px;
  margin-right: 20px;
  background-color: ${e=>(0,l.$n)(.35,e.theme[e.coin])};
`,Box_SavedRecurringBuy=({action:e,amount:t,coin:n,nextPayment:r,onClick:i,period:l})=>s.createElement(d,{disabled:!1,isMethod:!1,isMobile:!1},s.createElement(m,null,s.createElement(p,{coin:n},s.createElement(o.JO,{cursor:!0,"data-e2e":`${n}savedRecurringBuy`,name:"sync-regular",size:"20px",color:n,role:"button"})),s.createElement(o.Qt,null,s.createElement(o.xv,{weight:600,size:"16px",color:"grey900",style:{marginBottom:"0"}},t," ",(0,c.O7)(l)),s.createElement(o.xv,{weight:500,size:"14px",color:"grey600",style:{marginBottom:"0"}},(0,c.Nd)(e,r)))),s.createElement(u,null,s.createElement(o.zx,{"data-e2e":`${n}savedRecurringBuyViewDetails`,nature:"empty-blue",onClick:i},s.createElement(a.Z,{id:"copy.view_details",defaultMessage:"View Details"})))),g=r.ZP.div`
  display: flex;
  > div {
    margin-right: 24px;
    &:last-child {
      margin-right: 0px;
    }
  }
  ${i.BC.laptop`
    flex-direction: column;
    align-items: start;
    > div {
      margin-right: 0;
      margin-bottom: 12px;
    }
  `};
`,x=r.ZP.div`
  position: relative;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.grey000};
  width: 280px;
`},"./src/components/Layout/index.ts":(e,t,n)=>{n.d(t,{M5:()=>l,wX:()=>o,bn:()=>c,wW:()=>d,Qc:()=>m,US:()=>u,bz:()=>p,Pj:()=>g,l0:()=>x});var r=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),i=n("../blockchain-info-components/src/index.js"),s=n("./src/services/styles/index.ts"),a=n("./src/components/Box/index.tsx");const l=r.ZP.div`
  background-color: ${e=>e.theme.white};
  position: sticky;
  width: 100%;
  z-index: 1;
  top: 0;
`,o=r.ZP.div`
  width: 100%;
  height: 100%;

  ${e=>e.centerContent&&"\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  "}
`,c=r.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  min-width: 40px;
  background-color: ${e=>e.theme.blue000};
  border-radius: 40px;
`,d=r.ZP.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  > :first-child {
    margin-right: 16px;
  }
  ${s.BC.mobile`
    flex-direction: column;
  `}
`,m=r.ZP.div`
  display: flex;
  align-items: center;
  > :first-child {
    margin-right: 16px;
  }
`,u=(0,r.ZP)(i.xv)`
  font-size: 32px;
  color: ${e=>e.theme.grey800};
  font-weight: 600;
  margin-right: 14px;
`,p=(0,r.ZP)(i.xv)`
  font-size: 16px;
  color: ${e=>e.theme.grey600};
  font-weight: 500;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`,g=(0,r.ZP)(a.xu)`
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
`,x=r.ZP.div`
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
`},"./src/scenes/Interest/index.tsx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>H});var r=n("../../node_modules/react/index.js"),i=n("./node_modules/react-intl/lib/src/components/message.js"),s=n("../../node_modules/react-redux/es/index.js"),a=n("../../node_modules/react-router-bootstrap/lib/index.js"),l=n("../../node_modules/redux/es/redux.js"),o=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),c=n("../blockchain-wallet-v4/src/index.ts"),d=n("../blockchain-info-components/src/index.js"),m=n("./src/components/Box/index.tsx"),u=n("./src/components/Layout/index.ts"),p=n("./src/data/index.ts");const g=(0,o.ZP)(d.xv)`
  display: flex;
  align-items: center;
  left: 0;
  margin-bottom: 20px;
`;class x extends r.PureComponent{componentDidMount(){this.props.interestActions.fetchInterestEligible()}render(){const{instruments:e,interestEligible:t}=this.props;return t.cata({Failure:()=>null,Loading:()=>null,NotAsked:()=>null,Success:t=>{const n=e.map((e=>{var n;return null===(n=t[e])||void 0===n?void 0:n.ineligibilityReason}));return r.createElement(g,{size:"12px",weight:500,color:"grey600"},n.includes("REGION")&&r.createElement(r.Fragment,null,r.createElement(d.JO,{name:"info",color:"grey600",style:{marginRight:"8px"}}),r.createElement(i.Z,{id:"scenes.interest.regionblocked",defaultMessage:"Blockchain Rewards Account is currently not available in your country or region for some or all cryptos."}),r.createElement(d.rU,{size:"12px",weight:500,target:"_blank",href:"https://blockchain.zendesk.com/hc/en-us/articles/360043221472",style:{marginLeft:"4px"}},r.createElement(i.Z,{id:"buttons.learn_more",defaultMessage:"Learn More"}))),n.includes("BLOCKED")&&r.createElement(r.Fragment,null,r.createElement(i.Z,{id:"scenes.interest.userblocked.bo",defaultMessage:"Blockchain Rewards Account is currently not available."})," ",r.createElement(d.rU,{size:"12px",weight:500,target:"_blank",href:"/support/hc/en-us/requests/new?ticket_form_id=360000190032"},r.createElement(i.Z,{id:"buttons.contact_support",defaultMessage:"Contact Support"}))))}})}}const h=(0,s.connect)((e=>({interestEligible:p.wl.wx.bb.getInterestEligible(e)})),(e=>({interestActions:(0,l.bindActionCreators)(p.Nw.wx.interest,e)})))(x),y=(0,o.ZP)(m.xu)`
  width: 275px;
  margin-bottom: 24px;
`,f=(0,o.ZP)(y)`
  display: flex;
`,w=o.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,E=o.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,b=o.ZP.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 5%;
  align-items: center;
  align-content: center;
  justify-content: center;
`,v=o.ZP.div`
  cursor: pointer;
`;class Z extends r.PureComponent{constructor(e){super(e),this.renderAdditionalInfo=()=>{const{interestActions:e,interestUploadDocumentActions:t}=this.props,{showIntoModal:n}=this.state;return n?r.createElement(f,null,r.createElement(w,null,r.createElement(E,null,r.createElement(d.Ee,{name:"warning-circle-filled",width:"32px"}),r.createElement(v,{"data-e2e":"upgradeToGoldCloseButton",onClick:()=>{this.setState({showIntoModal:!1})}},r.createElement(d.JO,{size:"20px",color:"grey400",name:"close-circle"}))),r.createElement(d.xv,{size:"20px",color:"grey800",weight:600,style:{marginTop:"16px"}},r.createElement(i.Z,{id:"modals.kycverification.additionalinfo.title",defaultMessage:"More Information Needed"})),r.createElement(d.xv,{size:"14px",color:"grey600",weight:500,style:{lineHeight:1.5,marginTop:"4px"}},r.createElement(i.Z,{id:"scenes.interest.additional_information_required_description",defaultMessage:"our.com needs more information to verify your identity. This will speed up your future Deposits & Withrdawals as well as protect your account."})),r.createElement(d.rU,{onClick:()=>{t.showModal({origin:"InterestUploadDocument"})},style:{width:"100%"}},r.createElement(d.zx,{"data-e2e":"earnInterestSupplyInformationGetStarted",fullwidth:!0,nature:"primary",onClick:()=>{e.handleWithdrawalSupplyInformation({origin:"RewardsPage"})},style:{marginTop:"29px"}},r.createElement(i.Z,{id:"scenes.exchange.getstarted.status.getstarted.button",defaultMessage:"Get Started"}))))):null},this.renderSubmittedInfo=()=>{const{interestActions:e}=this.props,{showSubmittedModal:t}=this.state;return t?r.createElement(f,null,r.createElement(w,null,r.createElement(E,null,r.createElement(d.nZ,{height:"14px",width:"14px",borderWidth:"4px"}),r.createElement(v,{"data-e2e":"upgradeToGoldCloseButton",onClick:()=>{this.setState({showSubmittedModal:!1})}},r.createElement(d.JO,{size:"20px",color:"grey400",name:"close-circle"}))),r.createElement(d.xv,{size:"20px",color:"grey800",weight:600,style:{marginTop:"16px"}},r.createElement(i.Z,{id:"scenes.interest.additional_information_submitted_title",defaultMessage:"Documents Under Review"})),r.createElement(d.xv,{size:"14px",color:"grey600",weight:500,style:{lineHeight:1.5,marginTop:"4px"}},r.createElement(i.Z,{id:"scenes.interest.additional_information_submitted_description",defaultMessage:"We’ve successfully received your documents! A our.com team member is reviewing now and will get back to you."})),r.createElement(d.rU,{href:"/support/hc/en-us/requests/new?ticket_form_id=360001711712",style:{width:"100%"},target:"_blank"},r.createElement(d.zx,{"data-e2e":"earnInterestSupplyInformationContactSupport",fullwidth:!0,nature:"empty-blue",onClick:()=>{e.handleWithdrawalSupplyInformation({origin:"RewardsPage"})},style:{marginTop:"29px"}},r.createElement(i.Z,{id:"buttons.contact_support",defaultMessage:"Contact Support"}))))):null},this.state={showIntoModal:!0,showSubmittedModal:!0}}render(){const{idvActions:e,interestEDDStatus:t,interestRateArray:n,isGoldTier:s,preferencesActions:a,showInterestInfoBox:l,userData:o}=this.props,c=n.reduce(((e,t)=>Math.max(e,t)));return s||"REJECTED"!==o.kycState?r.createElement(r.Fragment,null,(null==t?void 0:t.eddNeeded)&&!(null==t?void 0:t.eddSubmitted)&&!(null==t?void 0:t.eddPassed)&&this.renderAdditionalInfo(),(null==t?void 0:t.eddSubmitted)&&(null==t?void 0:t.eddSubmitted)&&!(null==t?void 0:t.eddPassed)&&this.renderSubmittedInfo(),l&&!(null==t?void 0:t.eddNeeded)&&r.createElement(y,null,s?r.createElement(w,null,r.createElement(E,null,r.createElement(d.JO,{color:"blue600",name:"percentage",size:"32px"}),r.createElement(d.JO,{cursor:!0,name:"close",size:"16px",color:"grey400",role:"button",onClick:a.hideInterestInfoBox})),r.createElement(d.xv,{size:"20px",color:"grey800",weight:600,style:{marginTop:"16px"}},r.createElement(i.Z,{id:"scenes.interest.earnheaderverified",defaultMessage:"Earn rewards on your crypto today."})),r.createElement(d.xv,{size:"14px",color:"grey600",weight:500,style:{lineHeight:1.5,marginTop:"4px"}},r.createElement(i.Z,{id:"scenes.interest.earninfo.verified.copy",defaultMessage:"Earn up to {highestRate}% annually when you transfer crypto to your Rewards Account.",values:{highestRate:c}})),r.createElement(d.rU,{href:"/support/hc/en-us/categories/360003244552-Interest-Account",style:{width:"100%"},target:"_blank"},r.createElement(d.zx,{"data-e2e":"earnInterestLearnMore",fullwidth:!0,nature:"light",style:{marginTop:"45px"}},r.createElement(i.Z,{id:"buttons.learn_more",defaultMessage:"Learn More"})))):r.createElement(w,null,r.createElement(d.JO,{name:"percentage",color:"blue600",size:"32px"}),r.createElement(d.xv,{size:"20px",color:"grey800",weight:600,style:{marginTop:"16px"}},r.createElement(i.Z,{id:"scenes.interest.earnupgrade.header",defaultMessage:"Upgrade to Gold Level so you can earn rewards on your crypto."})),r.createElement(d.xv,{size:"14px",color:"grey600",weight:500,style:{lineHeight:1.5,marginTop:"10px"}},r.createElement(i.Z,{id:"scenes.interest.earnbody.access",defaultMessage:"Upgrade to Gold Level and access benefits like earning up to {highestRate}% annually on your crypto.",values:{highestRate:c}})),r.createElement(d.zx,{nature:"primary","data-e2e":"verifyIdentityBorrow",style:{marginTop:"20px"},disabled:"NONE"!==o.kycState,onClick:()=>e.verifyIdentity({needMoreInfo:!1,origin:"Interest",tier:2})},"UNDER_REVIEW"===o.kycState||"PENDING"===o.kycState?r.createElement(i.Z,{id:"scenes.interest.kycunderreview",defaultMessage:"Gold Verification In Review"}):r.createElement(i.Z,{id:"scenes.interest.verifyid",defaultMessage:"Upgrade Now"}))))):r.createElement(b,null,r.createElement("div",null,r.createElement(d.JO,{name:"alert-filled",color:"error",size:"40px"})),r.createElement(d.xv,{size:"16px",color:"grey800",weight:600,style:{marginTop:"16px"}},r.createElement(i.Z,{id:"scenes.interest.ineligible",defaultMessage:"You are not currently eligible to use this feature."})))}}const k=(0,s.connect)((e=>({showInterestInfoBox:p.wl.cb.getShowInterestInfoBox(e)})),(e=>({interestActions:(0,l.bindActionCreators)(p.Nw.wx.interest,e),interestUploadDocumentActions:(0,l.bindActionCreators)(p.Nw.wx.interestUploadDocument,e),preferencesActions:(0,l.bindActionCreators)(p.Nw.cb,e)})))(Z);var I=n("../../node_modules/ramda/es/values.js"),M=n("../../node_modules/ramda/es/lift.js");const selectors=e=>{const t=p.wl.qz.N5.getUserData(e),n=p.wl.wx.bb.getInterestRate(e),r=p.wl.wx.bb.getInterestInstruments(e),i=p.wl.wx.bb.getInterestEDDStatus(e).getOrElse({eddNeeded:!1});return(0,M.Z)(((e,t,n)=>({instruments:e.sort(),interestEDDStatus:i,interestRate:t,interestRateArray:(0,I.Z)(t),userData:n})))(r,n,t)},selectors_getData=e=>{const t=p.wl.wx.bb.getInterestAccountBalance(e),n=p.wl.wx.bb.getInterestEligible(e),r=p.wl.cb.getShowInterestInfoBox(e),i=p.wl.vE.Xd.getCurrency(e);return(0,M.Z)(((e,t,n)=>({interestAccountBalance:e,interestEligible:t,showInterestInfoBox:r,walletCurrency:n})))(t,n,i)};var z=n("./src/components/Display/FiatDisplay/index.tsx"),A=n("./src/data/components/exchange/services.ts");const _=(0,o.ZP)(m.xu)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 225px;
  width: 275px;
  margin-bottom: 24px;
`,P=o.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`,C=o.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,j=o.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`,S=o.ZP.div`
  border: solid 1px ${e=>e.theme.grey000};
`;const T=function SummaryCard(e){var t;const{coin:n,interestAccountBalance:s,interestActions:a,interestEligible:l,interestRate:o,isGoldTier:c,walletCurrency:m}=e,{coinfig:u}=window.coins[n],{displaySymbol:p,name:g}=u,x=s&&s[n],h=x?x.balance:0,y=x?x.totalInterest:0,f=(0,A.b)(n,h),w=(0,A.b)(n,y),E=l[n]&&(null===(t=l[n])||void 0===t?void 0:t.eligible);return r.createElement(_,null,r.createElement(P,null,r.createElement(d.JO,{name:n,color:n,size:"32px"}),r.createElement(d.xv,{size:"20px",color:"grey800",weight:600,style:{lineHeight:"1.5",marginLeft:"8px"}},g)),r.createElement(P,null,r.createElement(d.G0,{id:"earninterest.calculation.tooltip"},r.createElement(d.nw,{name:"info",size:"14px"})),r.createElement(d.xv,{size:"12px",weight:500,style:{lineHeight:"1.5",marginLeft:"6px"}},h>0?r.createElement(i.Z,{id:"scenes.interest.summarycard.earning",defaultMessage:"Earning up to {interestRate}% annually on your {coinTicker}.",values:{coinTicker:p,interestRate:o[n]}}):r.createElement(i.Z,{id:"scenes.interest.summarycard.earn",defaultMessage:"Earn up to {interestRate}% annually on your {coinTicker}.",values:{coinTicker:p,interestRate:o[n]}}))),r.createElement(S,null),r.createElement(C,null,r.createElement(j,null,r.createElement(d.xv,{size:"12px",weight:500,style:{lineHeight:"1.5",marginTop:"5px"},color:"grey600"},r.createElement(i.Z,{id:"modals.interest.detailsbalance",defaultMessage:"{coin} Balance",values:{coin:p}})),r.createElement(d.xv,{"data-e2e":"btcBalance",size:"14px",weight:600,style:{lineHeight:"1.5"}},f," ",p),r.createElement(z.Z,{color:"grey600",coin:n,currency:m,loadingHeight:"24px",size:"12px",style:{lineHeight:"1.5"},weight:500},h)),r.createElement(j,null,r.createElement(d.xv,{size:"12px",weight:500,style:{lineHeight:"1.5",marginTop:"5px"},color:"grey600"},r.createElement(i.Z,{id:"scenes.interest.summarycard.totalinterest",defaultMessage:"Total Rewards Earned"})),r.createElement(d.xv,{"data-e2e":"btcInterest",size:"14px",weight:600,style:{lineHeight:"1.5"}},w," ",p),r.createElement(z.Z,{color:"grey600",coin:n,currency:m,loadingHeight:"24px",size:"12px",style:{lineHeight:"1.5"},weight:500},y))),h>0?r.createElement(d.zx,{disabled:!c||!E,style:{marginTop:"16px"},nature:"primary","data-e2e":"viewInterestDetails",fullwidth:!0,onClick:()=>a.showInterestModal({coin:n,step:"ACCOUNT_SUMMARY"})},r.createElement(i.Z,{id:"copy.view",defaultMessage:"View"})):r.createElement(d.zx,{disabled:!c||!E,style:{marginTop:"16px"},nature:"primary",fullwidth:!0,"data-e2e":"earnInterest",onClick:()=>a.showInterestModal({coin:n,step:"ACCOUNT_SUMMARY"})},r.createElement(i.Z,{id:"scenes.interest.summarycard.earnbutton",defaultMessage:"Earn Rewards"})))},D=(0,o.ZP)(d.co)`
  margin-bottom: 24px;
`,LoadingCard=()=>r.createElement(D,{width:"330px",height:"275px"});class R extends r.PureComponent{render(){return this.props.data.cata({Failure:()=>null,Loading:()=>r.createElement(LoadingCard,null),NotAsked:()=>r.createElement(LoadingCard,null),Success:e=>r.createElement(T,Object.assign({},this.props,e))})}}const N=(0,s.connect)((e=>({data:selectors_getData(e)})),(e=>({interestActions:(0,l.bindActionCreators)(p.Nw.wx.interest,e),profileActions:(0,l.bindActionCreators)(p.Nw.qz.N5,e)})))(R);var B=n("./src/scenes/Interest/template.header.tsx");const U=(0,o.ZP)(m.W2)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100%;
`,O=o.ZP.div`
  width: 100%;
  display: flex;
  margin-bottom: 26px;
`;class G extends r.PureComponent{constructor(e){super(e),this.checkUserData=()=>{const e=this.props.data.getOrElse({userData:{tiers:{current:0}}}),t=(e.userData.tiers?e.userData.tiers.current:0)>=2;this.setState({isGoldTier:t})},this.state={isGoldTier:!0}}componentDidMount(){this.props.interestActions.fetchInterestInstruments(),this.props.interestActions.fetchInterestRate(),this.props.interestActions.fetchInterestBalance(),this.props.interestActions.fetchEDDStatus()}componentDidUpdate(e){!c.Nt.Success.is(e.data)&&c.Nt.Success.is(this.props.data)&&this.checkUserData()}render(){const{isGoldTier:e}=this.state,{data:t}=this.props;return r.createElement(u.wX,null,r.createElement(B.Z,null),e&&r.createElement(O,null,r.createElement(d.d0,null,r.createElement(a.Ji,{to:"/rewards",exact:!0},r.createElement(d.gq,{"data-e2e":"interestTabMenuAccounts"},r.createElement(i.Z,{id:"scenes.interest.tab.accounts",defaultMessage:"Accounts"}))),r.createElement(a.Ji,{to:"/rewards/history"},r.createElement(d.gq,{"data-e2e":"interestTabMenuHistory"},r.createElement(i.Z,{id:"scenes.interest.tab.history",defaultMessage:"Transaction History"}))))),t.cata({Failure:()=>r.createElement(d.xv,{size:"16px",weight:500},"Oops. Something went wrong. Please refresh and try again."),Loading:()=>r.createElement(d.co,{width:"275px",height:"275px"}),NotAsked:()=>r.createElement(d.co,{width:"275px",height:"275px"}),Success:t=>r.createElement(r.Fragment,null,r.createElement(U,null,r.createElement(k,Object.assign({},t,this.props,{isGoldTier:e})),e&&t.instruments.map((n=>window.coins[n]?r.createElement(N,Object.assign({},t,this.props,{isGoldTier:e,coin:n,key:n})):null))),r.createElement(h,Object.assign({},t,this.props)))}))}}const H=(0,s.connect)((e=>({data:selectors(e)})),(e=>({idvActions:(0,l.bindActionCreators)(p.Nw.wx.identityVerification,e),interestActions:(0,l.bindActionCreators)(p.Nw.wx.interest,e)})))(G)},"./src/scenes/Interest/template.header.tsx":(e,t,n)=>{n.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var r=n("../../node_modules/react/index.js"),i=n("./node_modules/react-intl/lib/src/components/message.js"),s=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),a=n("../blockchain-info-components/src/index.js"),l=n("./src/components/Layout/index.ts");const o=(0,s.ZP)(a.rU)`
  display: inline-flex;
`,c=(0,s.ZP)(a.xv)`
  margin-left: 3px;
  font-size: 15px;
  font-weight: 500;
  color: ${e=>e.theme.blue600};
`,d=(0,s.ZP)(a.xv)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,m=s.ZP.div`
  display: flex;
  flex-grow: 2;
`,u=(0,s.ZP)(l.bz)`
  display: contents;
`,__WEBPACK_DEFAULT_EXPORT__=()=>r.createElement(r.Fragment,null,r.createElement(l.wW,null,r.createElement(l.bn,null,r.createElement(a.JO,{color:"blue600",name:"percentage",size:"24px"})),r.createElement(l.US,null,r.createElement(i.Z,{id:"scenes.interest.interestaccount",defaultMessage:"Rewards Account"}))),r.createElement(u,null,r.createElement(i.Z,{id:"scenes.interest.subheader",defaultMessage:"Deposit crypto and watch it grow. Rewards are paid by the end of the day on the 1st of each month."}),r.createElement(o,{href:"/support/hc/en-us/articles/360043658491-How-the-Interest-Account-works",target:"_blank"},r.createElement(c,{size:"16px"},r.createElement(i.Z,{id:"buttons.learn_more",defaultMessage:"Learn More"}))),r.createElement(m,null),r.createElement(d,null,r.createElement(a.G0,{id:"scenes.interest.legaldisclaimer"},r.createElement(a.JO,{name:"info",size:"12px",color:"blue600"}),r.createElement(a.xv,{size:"12px",color:"blue600",weight:500,style:{margin:"-2px 0 0 5px"}},r.createElement(i.Z,{id:"scenes.interest.legaldiscalimer",defaultMessage:"Legal disclaimer"}))))))}}]);