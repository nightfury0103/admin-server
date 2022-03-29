"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[243],{"./src/components/Box/index.tsx":(e,t,a)=>{a.d(t,{xu:()=>g,W2:()=>E,Ec:()=>Box_SavedRecurringBuy});var r=a("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),n=a("./src/services/styles/index.ts"),s=a("../../node_modules/react/index.js"),i=a("./node_modules/react-intl/lib/src/components/message.js"),l=a("../../node_modules/polished/dist/polished.esm.js"),c=a("../blockchain-info-components/src/index.js"),o=a("./src/components/Flyout/model.tsx");const d=(0,r.ZP)(c.xu)`
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
`,p=r.ZP.div`
  display: flex;
  justify-content: flex-end;
`,u=r.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  min-width: 40px;
  border-radius: 20px;
  margin-right: 20px;
  background-color: ${e=>(0,l.$n)(.35,e.theme[e.coin])};
`,Box_SavedRecurringBuy=({action:e,amount:t,coin:a,nextPayment:r,onClick:n,period:l})=>s.createElement(d,{disabled:!1,isMethod:!1,isMobile:!1},s.createElement(m,null,s.createElement(u,{coin:a},s.createElement(c.JO,{cursor:!0,"data-e2e":`${a}savedRecurringBuy`,name:"sync-regular",size:"20px",color:a,role:"button"})),s.createElement(c.Qt,null,s.createElement(c.xv,{weight:600,size:"16px",color:"grey900",style:{marginBottom:"0"}},t," ",(0,o.O7)(l)),s.createElement(c.xv,{weight:500,size:"14px",color:"grey600",style:{marginBottom:"0"}},(0,o.Nd)(e,r)))),s.createElement(p,null,s.createElement(c.zx,{"data-e2e":`${a}savedRecurringBuyViewDetails`,nature:"empty-blue",onClick:n},s.createElement(i.Z,{id:"copy.view_details",defaultMessage:"View Details"})))),E=r.ZP.div`
  display: flex;
  > div {
    margin-right: 24px;
    &:last-child {
      margin-right: 0px;
    }
  }
  ${n.BC.laptop`
    flex-direction: column;
    align-items: start;
    > div {
      margin-right: 0;
      margin-bottom: 12px;
    }
  `};
`,g=r.ZP.div`
  position: relative;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.grey000};
  width: 280px;
`},"./src/components/Layout/index.ts":(e,t,a)=>{a.d(t,{M5:()=>l,wX:()=>c,bn:()=>o,wW:()=>d,Qc:()=>m,US:()=>p,bz:()=>u,Pj:()=>E,l0:()=>g});var r=a("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),n=a("../blockchain-info-components/src/index.js"),s=a("./src/services/styles/index.ts"),i=a("./src/components/Box/index.tsx");const l=r.ZP.div`
  background-color: ${e=>e.theme.white};
  position: sticky;
  width: 100%;
  z-index: 1;
  top: 0;
`,c=r.ZP.div`
  width: 100%;
  height: 100%;

  ${e=>e.centerContent&&"\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  "}
`,o=r.ZP.div`
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
`,p=(0,r.ZP)(n.xv)`
  font-size: 32px;
  color: ${e=>e.theme.grey800};
  font-weight: 600;
  margin-right: 14px;
`,u=(0,r.ZP)(n.xv)`
  font-size: 16px;
  color: ${e=>e.theme.grey600};
  font-weight: 500;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`,E=(0,r.ZP)(i.xu)`
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
`,g=r.ZP.div`
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
`},"./src/scenes/Airdrops/index.tsx":(e,t,a)=>{a.r(t),a.d(t,{Header:()=>I,History:()=>N,MainTitle:()=>M,default:()=>_});var r,n=a("../../node_modules/react/index.js"),s=a("./node_modules/react-intl/lib/src/components/message.js"),i=a("../../node_modules/react-redux/es/index.js"),l=a("../../node_modules/ramda/es/lift.js"),c=a("../../node_modules/redux/es/redux.js"),o=a("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),d=a("../blockchain-info-components/src/index.js"),m=a("./src/components/Layout/index.ts"),p=a("./src/data/index.ts"),u=a("../../node_modules/react-router-bootstrap/lib/index.js");var E=o.ZP.div(r||(r=function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 40px;\n  width: 100%;\n"])));const g=function EmailRequired(){return n.createElement(E,null,n.createElement(d.Ee,{name:"empty-search",width:"260px"}),n.createElement(d.Qt,{inline:!0,style:{marginTop:"10px"}},n.createElement(d.xv,{size:"18px",weight:400},n.createElement(s.Z,{id:"components.emailrequired.emailrequired",defaultMessage:"Email is required to use this feature."})),n.createElement(u.Ji,{to:{pathname:"/security-center",state:{changeEmail:!0}}},n.createElement(d.rU,{size:"18px"},n.createElement(s.Z,{id:"components.emailrequired.addemail",defaultMessage:"Add email"})))))};var x=a("../blockchain-wallet-v4/src/index.ts"),h=a("./src/components/Cartridge/index.ts");const f=o.ZP.div`
  display: flex;
  align-items: center;
`,Type=({campaignName:e})=>{switch(e){case"SUNRIVER":return n.createElement(f,null,n.createElement(d.JO,{name:"XLM",color:"XLM",size:"24px",style:{marginRight:"8px"}}),n.createElement(d.xv,{size:"14px",weight:500},"Stellar (XLM)"));case"POWER_PAX":return n.createElement(f,null,n.createElement(d.xv,{size:"14px",weight:500},"USD Digital"));case"BLOCKSTACK":return n.createElement(f,null,n.createElement(d.JO,{name:"STX",color:"STX",size:"24px",style:{marginRight:"8px"}}),n.createElement(d.xv,{size:"14px",weight:500},"Blockstack (STX)"));default:return n.createElement(d.xv,null,"-")}},Status=({campaignName:e,campaignState:t,userCampaignState:a})=>{if("BLOCKSTACK"===e&&!0==("ENDED"===t&&"TASK_FINISHED"===a))return n.createElement(h.S0,null,n.createElement(d.xv,{size:"14px",weight:700,color:"blue600"},n.createElement(s.Z,{id:"scenes.pastairdrops.pending",defaultMessage:"Reward Pending"})));switch(!0){case"ENDED"===t&&"REWARD_RECEIVED"===a:return n.createElement(h.El,null,n.createElement(d.xv,{size:"14px",weight:700,color:"green600"},n.createElement(s.Z,{id:"scenes.pastairdrops.received",defaultMessage:"Received"})));case"ENDED"===t:return n.createElement(h.sx,null,n.createElement(d.xv,{size:"14px",weight:700,color:"grey600"},n.createElement(s.Z,{id:"scenes.pastairdrops.offerexpired",defaultMessage:"Offer Expired"})));default:return n.createElement(d.xv,null,"-")}},To=({campaignName:e,userCampaignState:t})=>{switch(e){case"SUNRIVER":return"REWARD_RECEIVED"===t?n.createElement(d.xv,{size:"14px",weight:500},"XLM Private Key Wallet"):n.createElement(d.xv,null,"-");case"BLOCKSTACK":return"REWARD_RECEIVED"===t?n.createElement(d.xv,{size:"14px",weight:500},"STX Private Key Wallet"):n.createElement(d.xv,null,"-");default:return n.createElement(d.xv,null,"-")}};function Success({userCampaignsInfoResponseList:e}){const t=e.filter((e=>"ENDED"===e.campaignState));return n.createElement("div",{style:{minWidth:"500px",paddingBottom:"45px"}},n.createElement(d.iA,{style:{minWidth:"500px"}},n.createElement(d.xD,null,n.createElement(d.pj,{width:"18%"},n.createElement(d.xv,{size:"12px",color:"grey600",weight:500},n.createElement(s.Z,{id:"scenes.pastairdrops.type",defaultMessage:"Type"}))),n.createElement(d.pj,{width:"18%"},n.createElement(d.xv,{size:"12px",color:"grey600",weight:500},n.createElement(s.Z,{id:"scenes.pastairdrops.status",defaultMessage:"Status"}))),n.createElement(d.pj,{width:"18%"},n.createElement(d.xv,{size:"12px",color:"grey600",weight:500},n.createElement(s.Z,{id:"scenes.pastairdrops.date",defaultMessage:"Date"}))),n.createElement(d.pj,{width:"18%"},n.createElement(d.xv,{size:"12px",color:"grey600",weight:500},n.createElement(s.Z,{id:"scenes.pastairdrops.to",defaultMessage:"To"}))),n.createElement(d.pj,{width:"28%"},n.createElement(d.xv,{size:"12px",color:"grey600",weight:500},n.createElement(s.Z,{id:"scenes.pastairdrops.amount",defaultMessage:"Amount"})))),t.map((e=>e.userCampaignTransactionResponseList.length?e.userCampaignTransactionResponseList.map((t=>{return n.createElement(d.SC,null,n.createElement(d.pj,{width:"18%"},n.createElement(Type,Object.assign({},e))),n.createElement(d.pj,{width:"18%"},n.createElement(Status,Object.assign({},e))),n.createElement(d.pj,{width:"18%"},n.createElement(d.xv,{size:"14px",weight:500},t.withdrawalAt?new Date(t.withdrawalAt).toLocaleDateString():"-")),n.createElement(d.pj,{width:"18%"},n.createElement(To,Object.assign({},e))),n.createElement(d.pj,{width:"28%"},n.createElement(d.xv,{size:"14px",weight:500},(a=t.withdrawalQuantity,r=t.withdrawalCurrency,x.ei.convertCoinToCoin({coin:r,value:a}))," ",t.withdrawalCurrency," (",(t.fiatValue/100).toFixed(2)," ",t.fiatCurrency,")")));var a,r})):n.createElement(d.SC,null,n.createElement(d.pj,{width:"18%"},n.createElement(Type,Object.assign({},e))),n.createElement(d.pj,{width:"18%"},n.createElement(Status,Object.assign({},e))),n.createElement(d.pj,{width:"18%"},n.createElement(d.xv,{size:"14px",weight:500},"-")),n.createElement(d.pj,{width:"18%"},n.createElement(To,Object.assign({},e))),n.createElement(d.pj,{width:"28%"},n.createElement(d.xv,null,"-")))))))}var w=a("./src/components/Box/index.tsx");const template_loading=()=>n.createElement(w.W2,null,n.createElement(d.co,{width:"330px",height:"270px"}),n.createElement(d.co,{width:"330px",height:"270px"})),{KYC_STATES:y}=p.o4.N5,b=(0,o.ZP)(d.xv)`
  margin-top: 8px;
  line-height: 1.5;
`,AirdropInfoHeader=()=>n.createElement(d.xv,{size:"20px",color:"grey800",weight:600,style:{marginTop:"16px"}},n.createElement(s.Z,{id:"scenes.airdrops.success.airdropprogram",defaultMessage:"Airdrop Program"})),AirdropInfoCopy=({kycState:e})=>{switch(e){case y.REJECTED:case y.EXPIRED:return n.createElement(b,{size:"14px",color:"grey600",weight:500},n.createElement(s.Z,{id:"scenes.airdrops.success.goldfailed",defaultMessage:"You are not enrolled in the Blockchain Airdrop program. There was an issue with your identity verification."}));case y.VERIFIED:return n.createElement(b,{size:"14px",color:"grey600",weight:500},n.createElement(s.Z,{id:"scenes.airdrops.success.goldverified",defaultMessage:"You are enrolled in the Blockchain Airdrop program. The easiest way to try and discover new cryptos."}));default:return n.createElement(b,{size:"14px",color:"grey600",weight:500},n.createElement(s.Z,{id:"scenes.airdrops.success.noactive",defaultMessage:"There are no active Airdrops at the moment. We'll notify you if a new one starts."}))}},AirdropInfoButton=({kycState:e})=>{switch(e){case y.PENDING:case y.UNDER_REVIEW:return n.createElement(h.sx,{style:{marginTop:"16px"}},n.createElement(s.Z,{id:"scenes.airdrop.enrollmentpending",defaultMessage:"Enrollment Pending"}));case y.REJECTED:case y.EXPIRED:return n.createElement(h.XG,{style:{marginTop:"24px"}},n.createElement(s.Z,{id:"scenes.airdrop.ineligible",defaultMessage:"Ineligible KYC State: {kycState}",values:{kycState:e}}));case y.VERIFIED:return n.createElement(n.Fragment,null,n.createElement(d.xv,{size:"14px",style:{marginBottom:"16px"},color:"grey600",weight:500},n.createElement(s.Z,{id:"scenes.airdrop.notify",defaultMessage:"We will notify you for future airdrops."})),n.createElement(h.El,null,n.createElement(s.Z,{id:"scenes.airdrop.enrolled",defaultMessage:"Enrolled"})));default:return n.createElement(n.Fragment,null)}},v=o.ZP.div`
  margin-top: 16px;
`,S=(0,o.ZP)(w.xu)`
  background-image: url('/img/airdrop-welcome.png');
  /* stylelint-disable */
  background-image: -webkit-image-set(
    url('/img/airdrop-welcome.png') 1x,
    url('/img/airdrop-welcome@2x.png') 2x
  );
  /* stylelint-enable */
  background-repeat: no-repeat;
`,Airdrops_AirdropInfo=e=>n.createElement(S,null,n.createElement(d.JO,{name:"parachute",color:"green600",size:"32px"}),n.createElement(AirdropInfoHeader,null),n.createElement(AirdropInfoCopy,Object.assign({},e)),n.createElement(v,null,n.createElement(AirdropInfoButton,Object.assign({},e))));var C=a("./node_modules/bignumber.js/bignumber.js");const{KYC_STATES:D}=p.o4.N5,R=(0,o.ZP)(h.mO)`
  cursor: pointer;
  background-color: ${e=>e.theme.blue600};
  font-weight: 600;
`,Z=o.ZP.div`
  height: 100%;
  padding-left: 20px;
  border-left: 1px solid ${e=>e.theme.grey000};

  > div:first-child {
    margin-bottom: 4px;
  }
`,Ended=()=>n.createElement(h.sx,null,n.createElement(s.Z,{id:"scenes.airdrop.stx.expired",defaultMessage:"Offer Expired"})),StxHeader=({stxCampaign:e})=>{switch(e.userCampaignState){case"TASK_FINISHED":case"REWARD_RECEIVED":return n.createElement("span",null,"STX Private Key Wallet");default:return n.createElement(s.Z,{id:"scenes.airdrops.stx",defaultMessage:"Blockstack"})}},StxInfo=({stxCampaign:e})=>{switch(e.userCampaignState){case"TASK_FINISHED":case"REWARD_RECEIVED":return n.createElement(n.Fragment,null,n.createElement(d.xv,{color:"grey800",size:"14px",weight:700,style:{margin:"16px 0 4px"}},n.createElement(s.Z,{id:"scenes.airdrops.stx.wallet.q1",defaultMessage:"Where are my Stacks?"})),n.createElement(d.xv,{size:"13px",color:"grey600",weight:500},n.createElement(s.Z,{id:"scenes.airdrops.stx.wallet.a1",defaultMessage:"Your Stacks (STX) are saved in your Blockchain Wallet."})));default:return n.createElement(d.xv,{size:"12px",color:"grey600",weight:500,lineHeight:"1.5",style:{marginTop:"16px"}},n.createElement(s.Z,{id:"scenes.airdrop.stx.stxinfo1",defaultMessage:"Own your digital identity and data with hundreds of decentralized apps built with Blockstack."})," ",n.createElement(d.rU,{href:"https://blockstack.org/try-blockstack",target:"_blank",rel:"noopener noreferrer",size:"12px"},n.createElement(s.Z,{id:"buttons.learn_more",defaultMessage:"Learn More"})))}},StxDateOrAmount=({stxCampaign:e})=>{switch(e.userCampaignState){case"TASK_FINISHED":return null;case"REWARD_RECEIVED":return n.createElement(Z,null,n.createElement(d.xv,{size:"14px",color:"grey800",weight:600},(e=>{const t=e.userCampaignTransactionResponseList.length&&e.userCampaignTransactionResponseList[0].withdrawalQuantity;if(t)return new C.BigNumber(t).dividedBy(1e7).toString().concat(" STX")})(e)),n.createElement(d.xv,{size:"12px",color:"grey600",weight:500},"STX Private Key Wallet"));default:return n.createElement(Z,null,n.createElement(d.xv,{size:"16px",color:"grey800",weight:600},n.createElement(s.Z,{id:"scenes.airdrop.stx.jan",defaultMessage:"Jan. 2020"})),n.createElement(d.xv,{size:"12px",color:"grey600",weight:500},n.createElement(s.Z,{id:"scenes.airdrop.stx.date",defaultMessage:"Airdrop Date"})))}},StxStatus=({identityVerificationActions:e,kycState:t,userCampaignsInfoResponseList:a})=>{const r=a.find((e=>"BLOCKSTACK"===e.campaignName));if(t!==D.VERIFIED&&r&&"ENDED"===r.campaignState)return n.createElement(Ended,null);switch(t){case D.REJECTED:case D.EXPIRED:return n.createElement(h.XG,null,n.createElement(s.Z,{id:"scenes.airdrop.stx.ineligible",defaultMessage:"Ineligible"}));case D.PENDING:case D.UNDER_REVIEW:return n.createElement(h.sx,null,n.createElement(s.Z,{id:"scenes.airdrop.stx.pending",defaultMessage:"Pending KYC"}));case D.VERIFIED:if(!r)return null;switch(r.userCampaignState){case"FAILED":return n.createElement(h.XG,null,n.createElement(s.Z,{id:"scenes.airdrop.stx.failed",defaultMessage:"Failed"}));case"REWARD_RECEIVED":return n.createElement(h.El,null,n.createElement(s.Z,{id:"scenes.airdrop.stx.received",defaultMessage:"Received"}));case"NONE":return"ENDED"===r.campaignState?n.createElement(Ended,null):n.createElement(R,{onClick:()=>e.claimCampaignClicked("BLOCKSTACK")},n.createElement(s.Z,{id:"scenes.airdrop.stx.claim",defaultMessage:"Claim"}));case"TASK_FINISHED":return n.createElement(h.S0,null,n.createElement(s.Z,{id:"scenes.airdrop.stx.reward_pending",defaultMessage:"Reward Pending"}));case"REWARD_SENT":case"REGISTERED":return r.attributes["x-campaign-reject-reason"]?n.createElement(h.XG,null,n.createElement(s.Z,{id:"scenes.airdrop.stx.ineligible",defaultMessage:"Ineligible"})):n.createElement(h.El,null,n.createElement(s.Z,{id:"scenes.airdrop.stx.claimed",defaultMessage:"Claimed"}));default:return null}case D.NONE:default:return n.createElement(Ended,null)}},StxFooterCta=({kycState:e,tags:t,userCampaignsInfoResponseList:a})=>{const r=a.find((e=>"BLOCKSTACK"===e.campaignName));if(r)switch(r.userCampaignState){case"REWARD_SENT":case"TASK_FINISHED":case"REWARD_RECEIVED":return n.createElement(d.xv,{size:"12px",color:"grey600",weight:500},n.createElement(s.Z,{id:"scenes.airdrop.stx.wallet.balance",defaultMessage:"Please note the balance is currently non-transferable. Learn more about this and future wallet support for STX"})," ",n.createElement(d.rU,{href:"/support/hc/en-us/articles/360038745191",target:"_blank",size:"12px",weight:500,style:{textDecoration:"underline"}},n.createElement(s.Z,{id:"copy.here",defaultMessage:"here"})),".");case"FAILED":return n.createElement(d.rU,{href:"/support",target:"_blank",rel:"noopener noreferrer"},n.createElement(d.zx,{nature:"light",fullwidth:!0,"data-e2e":"contactSupport"},n.createElement(s.Z,{id:"buttons.contact_support",defaultMessage:"Contact Support"})));case void 0:case"REGISTERED":case"NONE":return null}switch(e){case D.REJECTED:case D.EXPIRED:case D.PENDING:case D.UNDER_REVIEW:case D.NONE:return n.createElement(d.rU,{href:"https://blockstack.org/try-blockstack",target:"_blank",rel:"noopener noreferrer"},n.createElement(d.zx,{nature:"light",fullwidth:!0,"data-e2e":"stxLearnMore"},n.createElement(s.Z,{id:"buttons.learn_more",defaultMessage:"Learn More"})));case D.VERIFIED:return t.BLOCKSTACK?n.createElement(d.rU,{href:"/root/getcrypto",target:"_blank",rel:"noopener noreferrer"},n.createElement(d.zx,{nature:"light",fullwidth:!0,"data-e2e":"stxShare"},n.createElement(s.Z,{id:"scenes.airdrop.stx.share",defaultMessage:"Share"}))):n.createElement(d.rU,{href:"https://blockstack.org/try-blockstack",target:"_blank",rel:"noopener noreferrer"},n.createElement(d.zx,{nature:"light",fullwidth:!0,"data-e2e":"stxLearnMore"},n.createElement(s.Z,{id:"buttons.learn_more",defaultMessage:"Learn More"})));default:return null}},k=o.ZP.div`
  display: flex;
  align-items: center;
`,j=o.ZP.div`
  display: flex;
  align-items: center;
  margin-top: 26px;
  min-height: 50px;
  > div {
    width: 50%;
  }
`,Airdrops_StxAirdrop=e=>{if(!0===e.userDoesNotExistYet)return null;const t=e.userCampaignsInfoResponseList.find((e=>"BLOCKSTACK"===e.campaignName));return t&&t.userCampaignState&&"NONE"!==t.userCampaignState?n.createElement(w.xu,null,n.createElement("div",null,n.createElement(k,null,n.createElement(d.JO,{name:"STX",color:"STX",size:"32px"}),n.createElement(d.xv,{size:"20px",color:"grey800",weight:600,style:{marginLeft:"16px"}},n.createElement(StxHeader,{stxCampaign:t}))),n.createElement(StxInfo,{stxCampaign:t}),n.createElement(j,null,n.createElement("div",null,n.createElement(StxStatus,Object.assign({},e))),n.createElement(StxDateOrAmount,{stxCampaign:t})),n.createElement("div",{style:{marginTop:"26px"}},n.createElement(StxFooterCta,Object.assign({},e))))):null},template_success=e=>n.createElement(w.W2,null,n.createElement(Airdrops_AirdropInfo,Object.assign({},e)),n.createElement(Airdrops_StxAirdrop,Object.assign({},e))),z=o.ZP.div`
  width: 100%;
`,I=o.ZP.div`
  margin-bottom: 40px;
`,N=o.ZP.div`
  margin-top: 120px;
`,M=(0,o.ZP)(d.xv)`
  margin-bottom: 8px;
`;class T extends n.PureComponent{componentDidMount(){this.props.profileActions.fetchUserCampaigns()}render(){const{data:e,hasEmail:t}=this.props,a=this.props.data.getOrElse({kycState:"NONE"}),r=e.cata({Failure:e=>"INVALID_CREDENTIALS"===e.type?n.createElement(template_success,Object.assign({},this.props,{userDoesNotExistYet:!0,userCampaignsInfoResponseList:[],kycState:"NONE",tags:{}})):n.createElement(d.xv,{size:"16px",weight:500},"Oops. Something went wrong and we don't know why. ",n.createElement("b",null,"Here's the error: ",e.type)),Loading:()=>n.createElement(template_loading,null),NotAsked:()=>n.createElement(template_loading,null),Success:e=>n.createElement(template_success,Object.assign({},e,this.props))}),i=e.cata({Failure:e=>"INVALID_CREDENTIALS"===e.type?n.createElement(d.xv,{weight:500,size:"12px"},n.createElement(s.Z,{id:"scenes.airdrops.upgradetoview",defaultMessage:"Please upgrade to view past airdrops."})):n.createElement(d.xv,{size:"16px",weight:500},"Oops. Something went wrong and we don't know why. ",n.createElement("b",null,"Here's the error: ",e.type)),Loading:()=>n.createElement(d.xv,{weight:500},"Loading..."),NotAsked:()=>n.createElement(d.xv,{weight:500},"Loading..."),Success:e=>n.createElement(Success,Object.assign({},e,this.props))});return t?n.createElement(z,null,n.createElement(m.wW,null,n.createElement(m.bn,null,n.createElement(d.JO,{name:"parachute",color:"blue600",size:"24px"})),n.createElement(m.US,null,n.createElement(s.Z,{id:"scenes.airdrops.header",defaultMessage:"Airdrops"}))),n.createElement(m.bz,null,n.createElement(s.Z,{id:"scenes.airdrops.blockchain.safest",defaultMessage:"The safest and easiest way to try and discover new crypto."})),r,"VERIFIED"===a.kycState&&n.createElement(n.Fragment,null,n.createElement(N,null,n.createElement(M,{size:"24px",color:"grey800",weight:600},n.createElement(s.Z,{id:"scenes.airdrops.pastairdrops",defaultMessage:"Past Airdrops"}))),i)):n.createElement(g,null)}}const _=(0,i.connect)((e=>({data:(0,l.Z)(((e,t)=>Object.assign(Object.assign({},e),t)))(p.wl.qz.N5.getUserData(e),p.wl.qz.N5.getUserCampaigns(e)),hasEmail:p.wl.vE.Xd.getEmail(e).map(Boolean).getOrElse(!1)})),(e=>({identityVerificationActions:(0,c.bindActionCreators)(p.Nw.wx.identityVerification,e),profileActions:(0,c.bindActionCreators)(p.Nw.qz.N5,e)})))(T)}}]);