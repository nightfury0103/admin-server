"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[7532],{"./src/components/Box/index.tsx":(e,t,n)=>{n.d(t,{xu:()=>u,W2:()=>p,Ec:()=>Box_SavedRecurringBuy});var i=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),s=n("./src/services/styles/index.ts"),l=n("../../node_modules/react/index.js"),a=n("./node_modules/react-intl/lib/src/components/message.js"),r=n("../../node_modules/polished/dist/polished.esm.js"),c=n("../blockchain-info-components/src/index.js"),o=n("./src/components/Flyout/model.tsx");const d=(0,i.ZP)(c.xu)`
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
`,g=i.ZP.div`
  display: flex;
  justify-content: flex-end;
`,x=i.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  min-width: 40px;
  border-radius: 20px;
  margin-right: 20px;
  background-color: ${e=>(0,r.$n)(.35,e.theme[e.coin])};
`,Box_SavedRecurringBuy=({action:e,amount:t,coin:n,nextPayment:i,onClick:s,period:r})=>l.createElement(d,{disabled:!1,isMethod:!1,isMobile:!1},l.createElement(m,null,l.createElement(x,{coin:n},l.createElement(c.JO,{cursor:!0,"data-e2e":`${n}savedRecurringBuy`,name:"sync-regular",size:"20px",color:n,role:"button"})),l.createElement(c.Qt,null,l.createElement(c.xv,{weight:600,size:"16px",color:"grey900",style:{marginBottom:"0"}},t," ",(0,o.O7)(r)),l.createElement(c.xv,{weight:500,size:"14px",color:"grey600",style:{marginBottom:"0"}},(0,o.Nd)(e,i)))),l.createElement(g,null,l.createElement(c.zx,{"data-e2e":`${n}savedRecurringBuyViewDetails`,nature:"empty-blue",onClick:s},l.createElement(a.Z,{id:"copy.view_details",defaultMessage:"View Details"})))),p=i.ZP.div`
  display: flex;
  > div {
    margin-right: 24px;
    &:last-child {
      margin-right: 0px;
    }
  }
  ${s.BC.laptop`
    flex-direction: column;
    align-items: start;
    > div {
      margin-right: 0;
      margin-bottom: 12px;
    }
  `};
`,u=i.ZP.div`
  position: relative;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.grey000};
  width: 280px;
`},"./src/components/Layout/index.ts":(e,t,n)=>{n.d(t,{M5:()=>r,wX:()=>c,bn:()=>o,wW:()=>d,Qc:()=>m,US:()=>g,bz:()=>x,Pj:()=>p,l0:()=>u});var i=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),s=n("../blockchain-info-components/src/index.js"),l=n("./src/services/styles/index.ts"),a=n("./src/components/Box/index.tsx");const r=i.ZP.div`
  background-color: ${e=>e.theme.white};
  position: sticky;
  width: 100%;
  z-index: 1;
  top: 0;
`,c=i.ZP.div`
  width: 100%;
  height: 100%;

  ${e=>e.centerContent&&"\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  "}
`,o=i.ZP.div`
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
  ${l.BC.mobile`
    flex-direction: column;
  `}
`,m=i.ZP.div`
  display: flex;
  align-items: center;
  > :first-child {
    margin-right: 16px;
  }
`,g=(0,i.ZP)(s.xv)`
  font-size: 32px;
  color: ${e=>e.theme.grey800};
  font-weight: 600;
  margin-right: 14px;
`,x=(0,i.ZP)(s.xv)`
  font-size: 16px;
  color: ${e=>e.theme.grey600};
  font-weight: 500;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`,p=(0,i.ZP)(a.xu)`
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
`,u=i.ZP.div`
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
`},"./src/scenes/TheExchange/index.tsx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var i=n("../../node_modules/react/index.js"),s=n("../../node_modules/react-redux/es/index.js"),l=n("../../node_modules/redux/es/redux.js"),a=n("./src/data/index.ts"),r=n("./node_modules/react-intl/lib/src/components/message.js"),c=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),o=n("../blockchain-info-components/src/index.js"),d=n("./src/components/Box/index.tsx"),m=n("./src/components/Layout/index.ts"),g=n("./src/components/Cartridge/index.ts");const template_linktoexchange=e=>{const t=`${e.domains.exchange}/trade`;return i.createElement(o.rU,{href:`${t}?utm_source=web_wallet&utm_medium=referral&utm_campaign=sidenav_exchange_linked`,rel:"noopener noreferrer",target:"_blank"},i.createElement(o.zx,{"data-e2e":"launchExchange",nature:"primary",height:"48px",fullwidth:!0},i.createElement(r.Z,{id:"scenes.exchange.launchexchange",defaultMessage:"Launch Exchange"})))},x=c.ZP.div`
  display: flex;
  flex-direction: column;
  & > :first-child {
    margin-bottom: 20px;
  }
`,p=c.ZP.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  & > :first-child {
    margin-bottom: 20px;
  }
`,u=c.iv`
  width: 120px;
`,h=(0,c.ZP)(g.wF)`
  ${u}
`,y=(0,c.ZP)(g.El)`
  ${u}
`,template_connect=e=>i.createElement(d.xu,null,i.createElement(x,null,i.createElement(o.xv,{size:"20px",weight:600,color:"grey800"},i.createElement(r.Z,{id:"scenes.exchange.empty.walletconnect.header",defaultMessage:"Exchange Link"})),i.createElement(o.xv,{size:"14px",weight:500,color:"grey600",lineHeight:"20px"},i.createElement(r.Z,{id:"scenes.exchange.empty.walletconnect.body",defaultMessage:"Easily connect your Wallet to the Exchange and send crypto back and forth. No need to copy past wallet addresses all while keeping control of your private keys."}))),i.createElement(p,null,e.isExchangeAccountLinked?i.createElement(i.Fragment,null,i.createElement(y,null,i.createElement(r.Z,{id:"scenes.exchange.empty.connected.cartridge",defaultMessage:"Connected"})),e.isExchangeRelinkRequired?i.createElement(o.zx,{"data-e2e":"linkAgain",nature:"primary",height:"48px",fullwidth:!0,onClick:e.profileActions.shareWalletAddressesWithExchange},i.createElement(r.Z,{id:"scenes.exchange.reconnectnow",defaultMessage:"Reconnect Now"})):i.createElement(template_linktoexchange,Object.assign({},e))):i.createElement(i.Fragment,null,i.createElement(h,null,i.createElement(r.Z,{id:"scenes.exchange.empty.notconnected.cartridge",defaultMessage:"Not Connected"})),i.createElement(o.zx,{"data-e2e":"connectToExchange",nature:"primary",height:"48px",fullwidth:!0,onClick:e.onSignup},i.createElement(r.Z,{id:"scenes.exchange.connectnow",defaultMessage:"Connect Now"}))))),E=c.ZP.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 220px;
`,template_info=()=>i.createElement(m.Pj,null,i.createElement(o.lr,{height:220,arrows:!1,chips:!1},i.createElement(E,null,i.createElement(o.xv,{size:"20px",weight:600,color:"grey800",style:{marginBottom:"20px"}},i.createElement(r.Z,{id:"scenes.exchange.empty.carousel.access",defaultMessage:"Access More Assets"})),i.createElement(o.xv,{size:"14px",weight:500,color:"grey600",lineHeight:"20px"},i.createElement(r.Z,{id:"scenes.exchange.empty.carousel.accessbody",defaultMessage:"Expand your crypto portfolio. Easily deposit and withdraw dollars, euros and trade today’s top crypto currencies. Gain access to exclusive and emerging digital assets."}))),i.createElement(E,null,i.createElement(o.xv,{size:"20px",weight:600,color:"grey800",style:{marginBottom:"20px"}},i.createElement(r.Z,{id:"scenes.exchange.empty.carousel.unlock",defaultMessage:"Unlock Unlimited Trading"})),i.createElement(o.xv,{size:"14px",weight:500,color:"grey600",lineHeight:"20px"},i.createElement(r.Z,{id:"scenes.exchange.empty.carousel.unlockbody",defaultMessage:"Already Verified? Share your Gold or Silver status to begin trading on the Exchange immediately."}))),i.createElement(E,null,i.createElement(o.xv,{size:"20px",weight:600,color:"grey800",style:{marginBottom:"20px"}},i.createElement(r.Z,{id:"scenes.exchange.empty.carousel.seamless",defaultMessage:"Seamlessly Transfer Crypto"})),i.createElement(o.xv,{size:"14px",weight:500,color:"grey600",lineHeight:"20px"},i.createElement(r.Z,{id:"scenes.exchange.empty.carousel.seamlessbody",defaultMessage:"Link your Wallet to the Exchange to easily sweep crypto back and forth. No copy pasting or typos. It's the most secure way to trade while keeping your keys."}))))),f=c.ZP.div`
  width: 100%;
`,template=e=>i.createElement(f,null,i.createElement(m.wW,null,i.createElement(m.Qc,null,i.createElement(m.bn,null,i.createElement(o.JO,{name:"blockchain-logo",color:"blue600",size:"26px"})),i.createElement(m.US,null,i.createElement(r.Z,{id:"scenes.exchange.blockchain",defaultMessage:"Exchange"})))),i.createElement(m.bz,null,i.createElement(r.Z,{id:"scenes.exchange.subheader",defaultMessage:"We built our own exchange that defines speed, reliability and liquidity. Upgrade your trading."})),i.createElement(d.W2,null,i.createElement(template_info,null),i.createElement(template_connect,Object.assign({},e))));class w extends i.PureComponent{constructor(){super(...arguments),this.onSignup=()=>{this.props.modalActions.showModal("LINK_TO_EXCHANGE_ACCOUNT_MODAL",{origin:"TheExchangePage"})}}render(){return i.createElement(template,Object.assign({onSignup:this.onSignup},this.props))}}const b=(0,s.connect)((e=>({domains:a.wl.vE.AW.getDomains(e).getOrElse({exchange:"/exchange"}),isExchangeAccountLinked:a.wl.qz.N5.isExchangeAccountLinked(e).getOrElse(!1),isExchangeRelinkRequired:a.wl.qz.N5.isExchangeRelinkRequired(e).getOrElse(!1)})),(e=>({modalActions:(0,l.bindActionCreators)(a.Nw.qk,e),preferencesActions:(0,l.bindActionCreators)(a.Nw.cb,e),profileActions:(0,l.bindActionCreators)(a.Nw.qz.N5,e)})))(w)}}]);