"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[4342],{"./src/modals/Wallet/ResetAccountFailed/index.tsx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n("../../node_modules/react/index.js"),o=n("./node_modules/react-intl/lib/src/components/message.js"),a=n("../../node_modules/react-redux/es/index.js"),l=n("../../node_modules/redux/es/redux.js"),s=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),c=n("../blockchain-info-components/src/index.js"),i=n("./src/data/index.ts"),d=n("./src/providers/ModalEnhancer/index.tsx");const u=s.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  margin: 30px 0 10px;
  overflow: hidden;
  text-align: center;
`,m=s.ZP.div`
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
`,p=s.ZP.div`
  display: flex;
  align-items: center;
  height: 64px;
  width: 100%;
  background-color: ${e=>e.theme.grey000};
  border-radius: 8px;
  margin-top: 24px;
`;class x extends r.PureComponent{render(){return r.createElement(c.u_,{size:"medium"},r.createElement(u,null,r.createElement(c.JO,{name:"alert-filled",size:"48px",color:"orange600",style:{marginBottom:"16px"}}),r.createElement(c.xv,{size:"20px",weight:600,color:"grey900"},r.createElement(o.Z,{defaultMessage:"Fund Recovery Failed",id:"modals.resetaccountfailure.title"}))),r.createElement(m,null,r.createElement(c.xv,{size:"14px",weight:500,color:"grey900"},r.createElement(o.Z,{defaultMessage:"Don’t worry, your account is safe.  Please contact support to finish the Account Recovery process. Your account will not show balances or transaction history until you complete the recovery process.",id:"modals.resetaccountfailure.body"})),r.createElement(p,null,r.createElement(c.xv,{size:"12px",color:"grey600",weight:500},r.createElement(o.Z,{defaultMessage:"Fund recovery failures can happen for a number of reasons. Our support team is able to help recover your account. <a>Learn more</a>",id:"modals.resetaccountfailure.information",values:{a:e=>r.createElement("a",{href:"/support/hc/en-us/articles/4404679303700",rel:"noopener noreferrer",target:"_blank"},e)}}))),r.createElement(c.rU,{target:"_blank",href:"/support/hc/en-us/requests/new?ticket_form_id=360003112491"},r.createElement(c.zx,{nature:"primary",width:"440px","data-e2e":"contactSupportResetFailure"},r.createElement(o.Z,{id:"buttons.contact_support",defaultMessage:"Contact Support"})))))}}const mapDispatchToProps=e=>({closeModal:()=>e(i.Nw.qk.closeModal())}),f=(0,a.connect)(null,mapDispatchToProps),g=(0,l.compose)((0,a.connect)(null,mapDispatchToProps),(0,d.Z)("RESET_ACCOUNT_FAILED"),f)(x)}}]);