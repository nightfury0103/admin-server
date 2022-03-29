"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[1376],{"./src/modals/Onboarding/NabuUserConflictRedirect/index.tsx":(e,n,t)=>{t.r(n),t.d(n,{default:()=>g});var l=t("../../node_modules/react/index.js"),s=t("./node_modules/react-intl/lib/src/components/message.js"),o=t("../../node_modules/react-redux/es/index.js"),c=t("../../node_modules/redux/es/redux.js"),r=t("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),a=t("../blockchain-info-components/src/index.js"),i=t("./src/data/index.ts"),d=t("./src/providers/ModalEnhancer/index.tsx");const u=r.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  margin: 30px 0 10px;
  overflow: hidden;
  text-align: center;
`,m=r.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  text-align: center;
  margin: 4px 0 14px;

  & > :last-child {
    margin: 15px 0;
  }
`;class x extends l.PureComponent{render(){const{errorMessage:e}=this.props;return l.createElement(a.u_,{size:"small"},l.createElement(u,null,l.createElement(a.JO,{name:"alert-filled",size:"48px",color:"orange600",style:{marginBottom:"16px"}}),l.createElement(a.xv,{size:"20px",weight:500},l.createElement(s.Z,{defaultMessage:"Your Trading Account is linked to another wallet",id:"modals.nabuuserconflict.title"}))),l.createElement(m,null,l.createElement(a.xv,{size:"14px",weight:500},l.createElement(s.Z,{defaultMessage:"Your our.com trading account is associated with another wallet. Please log into your wallet referenced below for account access.",id:"modals.nabuuserconflict.body"})),l.createElement(a.xv,{size:"14px",weight:400},e)))}}const mapDispatchToProps=e=>({closeModal:()=>e(i.Nw.qk.closeModal())}),p=(0,o.connect)(null,mapDispatchToProps),g=(0,c.compose)((0,o.connect)(null,mapDispatchToProps),(0,d.Z)("NABU_USER_CONFLICT_REDIRECT"),p)(x)}}]);