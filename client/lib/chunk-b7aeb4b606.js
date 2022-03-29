"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[1637],{"./src/components/Setting/index.tsx":(e,t,n)=>{n.d(t,{u7:()=>s,GV:()=>r,g3:()=>i,O3:()=>c,iJ:()=>d,lU:()=>u,kW:()=>m,lw:()=>g,ZE:()=>p});var a=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),l=n("./src/services/styles/index.ts");const s=a.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 10px 0 10px 0;
  box-sizing: border-box;

  ${l.BC.atLeastTabletL`
    align-items: flex-end;
    width: 30%;
  `}
`,r=a.ZP.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px 0px;
  border-bottom: 1px solid ${e=>e.theme.grey000};

  ${l.BC.atLeastTabletL`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  `}
`,i=a.ZP.div`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 13px;
  margin-top: 5px;
  margin-bottom: 10px;
  color: ${e=>e.theme.grey700};

  & > * {
    display: inline;
    margin-right: 5px;
  }
`;var o=n("./src/components/Form/index.ts");const c=(0,a.ZP)(o.l0)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`,d=a.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 17px;
  color: ${e=>e.theme.black};
  margin-bottom: 3px;

  & > * {
    margin-right: 10px;
  }
`,u=a.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
`,m=a.ZP.div`
  display: block;
  padding: 1px 5px;
  box-sizing: border-box;
  border-radius: 3px;
  background-color: ${e=>e.active?e.theme.success:e.theme.error};
  color: ${e=>e.theme.white};
  font-size: 12px;
  font-weight: 500;
  text-transform: capitalize;
`,g=a.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 10px 0 10px 0;
  box-sizing: border-box;

  ${l.BC.atLeastTabletL`
    width: 50%; 
  `}
`,p=a.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  & > *:nth-child(2) {
    margin-top: 5px;
  }

  ${l.BC.atLeastTabletL`
  align-items: flex-end;
  `}
`},"./src/scenes/Settings/General/index.tsx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>se});var a=n("../../node_modules/react/index.js"),l=n("./node_modules/react-intl/lib/src/components/message.js"),s=n("../../node_modules/react-redux/es/index.js"),r=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),i=n("../blockchain-info-components/src/index.js"),o=n("./src/data/index.ts"),c=n("../../node_modules/redux/es/redux.js"),d=n("./src/components/Setting/index.tsx");const u=(0,s.connect)(null,(e=>({settingsActions:(0,c.bindActionCreators)(o.Nw.qz.Xd,e)})))((e=>a.createElement(d.GV,null,a.createElement(d.lw,null,a.createElement(d.iJ,null,a.createElement(l.Z,{id:"scenes.settings.general.about.title",defaultMessage:"About"})),a.createElement(d.g3,null,a.createElement(l.Z,{id:"scenes.settings.general.about.description",defaultMessage:"Learn more about our company."}))),a.createElement(d.u7,null,a.createElement(i.rU,{onClick:()=>{e.settingsActions.generalSettingsExternalRedirect("/about")},href:"/root/about",target:"_blank"},a.createElement(i.zx,{"data-e2e":"aboutLink",nature:"empty-blue"},a.createElement(i.JO,{name:"open-in-new-tab",size:"20px"})))))));var m=n("../../node_modules/ramda/es/path.js"),g=n("./src/data/types.ts"),p=n("../../node_modules/ramda/es/lift.js"),h=n("../blockchain-wallet-v4/src/types/index.ts");const selectors=e=>{const t=o.wl.wx.zT.getBankTransferAccounts(e),n=o.wl.wx.wd.getSBPaymentMethods(e),a=o.wl.vE.Xd.getInvitations(e).getOrElse({openBanking:!1});return(0,p.Z)(((e,t)=>({bankAccounts:e,paymentMethods:!a.openBanking&&Object.assign(Object.assign({},t),{methods:t.methods.filter((e=>e.type===h.t8.BANK_ACCOUNT||"USD"===e.currency))})||t})))(t,n)};var x=n("./src/services/styles/index.ts");const b=(0,r.ZP)(d.GV)`
  ${x.BC.atLeastTabletL`
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  `}
`,E=(0,r.ZP)(d.iJ)`
  margin-bottom: 18px;
`,template_loading=()=>a.createElement(b,null,a.createElement(d.lw,null,a.createElement(E,null,a.createElement(l.Z,{id:"scenes.settings.linked_banks",defaultMessage:"Linked Banks"})),a.createElement(i.nZ,{height:"30px",width:"30px"})));var y=n("../../node_modules/ramda/es/any.js"),f=n("../../node_modules/redux-form/es/reduxForm.js"),w=n("./src/services/images/index.ts");const k=(0,r.ZP)(d.iJ)`
  margin-bottom: 18px;
`,C=r.ZP.div`
  display: flex;
  div:last-child {
    margin-top: 4px;
  }
`,v=r.ZP.div`
  text-align: ${e=>e.right?"right":"initial"};
`,A=(0,r.ZP)(i.zx)`
  &:hover {
    border-color: ${e=>e.theme.red400};
    background-color: transparent;
  }
`,B=r.ZP.div`
  margin-right: 14px;
  justify-content: center;
  flex-direction: column;
  display: flex;
`,Z=(0,r.ZP)(d.u7)`
  margin-top: 36px;
  ${x.BC.tablet`
    margin-top: 8px;
  `}
`,S=(0,r.ZP)(d.GV)`
  border-bottom: none;
`,M=(0,f.Z)({form:"linkedBanks"})((e=>{const t=e.bankAccounts.filter((e=>e.currency in h.E2)),n=(0,y.Z)((e=>e.type===h.t8.BANK_TRANSFER))(e.paymentMethods.methods);return a.createElement(S,null,a.createElement(d.lw,null,a.createElement(k,null,a.createElement(l.Z,{id:"scenes.settings.linked_banks",defaultMessage:"Linked Banks"})),a.createElement("div",null,!t.length&&a.createElement(i.xv,{size:"14px",color:"grey600",weight:500},a.createElement(l.Z,{id:"scenes.settings.no_linked_banks",defaultMessage:"No Linked Banks"})),t.map((t=>{var n,s,r,o,c;return a.createElement(i.xu,{key:t.id,onClick:()=>e.handleShowBankClick(t),"data-e2e":`bankAccountRow-${t.id}`,isMethod:!0,isMobile:x.BC.mobile,style:{width:"430px"}},a.createElement(C,null,a.createElement(B,null,a.createElement(i.Ee,{name:(0,w.t)(null===(n=t.details)||void 0===n?void 0:n.bankName)})),a.createElement(v,null,a.createElement(i.xv,{size:"16px",color:"grey800",weight:600},null===(s=t.details)||void 0===s?void 0:s.bankName),a.createElement(i.xv,{size:"14px",color:"grey600",weight:500,capitalize:!0},(null===(o=null===(r=t.details)||void 0===r?void 0:r.bankAccountType)||void 0===o?void 0:o.toLowerCase())||""," ",a.createElement(l.Z,{id:"scenes.settings.general.account",defaultMessage:"account"})," ",(null===(c=t.details)||void 0===c?void 0:c.accountNumber)||""))),a.createElement(C,null,a.createElement(A,{"data-e2e":`removeBankAccount-${t.id}`,nature:"light-red",disabled:e.submitting,style:{marginLeft:"18px",minWidth:"auto"},onClick:n=>{n.stopPropagation(),e.handleDeleteBank(t)}},a.createElement(l.Z,{id:"buttons.remove",defaultMessage:"Remove"}))))})))),n&&a.createElement(Z,null,a.createElement(i.zx,{nature:"primary","data-e2e":"addBankFromSettings",onClick:e.handleBankClick},a.createElement(l.Z,{id:"buttons.add_bank",defaultMessage:"Add a Bank"}))))}));class P extends a.PureComponent{constructor(){super(...arguments),this.handleBankClick=()=>{var e,t;let{fiatCurrency:n}=this.props;(0,m.Z)(["userData","limits"],this.props)&&(n=null===(t=null===(e=this.props.userData)||void 0===e?void 0:e.limits[0])||void 0===t?void 0:t.currency),this.props.brokerageActions.showModal({modalType:"USD"===n?"ADD_BANK_YODLEE_MODAL":"ADD_BANK_YAPILY_MODAL",origin:g.$p.ADD_BANK_SETTINGS}),this.props.brokerageActions.setAddBankStep({addBankStep:g.Hb.ADD_BANK})},this.handleShowBankClick=e=>{this.props.brokerageActions.showModal({modalType:"BANK_DETAILS_MODAL",origin:g.$p.BANK}),this.props.brokerageActions.setBankDetails({account:e})},this.handleDeleteBank=e=>{this.props.brokerageActions.showModal({modalType:"REMOVE_BANK_MODAL",origin:g.$p.BANK}),this.props.brokerageActions.setBankDetails({account:e})}}componentDidMount(){this.props.brokerageActions.fetchBankTransferAccounts(),this.props.buySellActions.fetchPaymentMethods(this.props.walletCurrency)}render(){return this.props.data.cata({Failure:()=>null,Loading:()=>a.createElement(template_loading,null),NotAsked:()=>null,Success:e=>a.createElement(M,Object.assign({},this.props,e,{handleBankClick:this.handleBankClick,handleShowBankClick:this.handleShowBankClick,handleDeleteBank:this.handleDeleteBank}))})}}const _=(0,s.connect)((e=>({data:selectors(e),fiatCurrency:o.wl.wx.XW.getFiatCurrency(e),userData:o.wl.qz.N5.getUserData(e).getOrElse({}),walletCurrency:o.wl.vE.Xd.getCurrency(e).getOrElse("USD")})),(e=>({brokerageActions:(0,c.bindActionCreators)(o.Nw.wx.brokerage,e),buySellActions:(0,c.bindActionCreators)(o.Nw.wx.buySell,e),custodialActions:(0,c.bindActionCreators)(o.Nw.gm,e),withdrawActions:(0,c.bindActionCreators)(o.Nw.wx.withdraw,e)})))(P),selectors_getData=e=>{const t=o.wl.wx.wd.getSBCards(e),n=o.wl.wx.wd.getSBPaymentMethods(e);return(0,p.Z)(((e,t)=>({cards:e,paymentMethods:t})))(t,n)},D=(0,r.ZP)(d.GV)`
  ${x.BC.atLeastTabletL`
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  `}
`,N=(0,r.ZP)(d.iJ)`
  margin-bottom: 18px;
`,LinkedCards_template_loading=()=>a.createElement(D,null,a.createElement(d.lw,null,a.createElement(N,null,a.createElement(l.Z,{id:"scenes.settings.linked_cards",defaultMessage:"Linked Cards"})),a.createElement(i.nZ,{height:"30px",width:"30px"})));var z=n("./src/components/Form/CreditCardBox/model.ts");const L=(0,r.ZP)(d.GV)`
  ${x.BC.atLeastLaptopL`
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  `}
`,T=(0,r.ZP)(d.u7)`
  margin-top: 36px;
  ${x.BC.tablet`
    margin-top: 8px;
  `}
`,j=r.ZP.img`
  margin-right: 14px;
  width: 24px;
`,O=r.ZP.div`
  margin-right: 14px;
  justify-content: center;
  flex-direction: column;
  display: flex;
`,R=(0,f.Z)({form:"linkedCards"})((e=>{const t=e.paymentMethods.methods.find((e=>e.type===h.t8.PAYMENT_CARD)),n=e.cards.filter((e=>"ACTIVE"===e.state));return a.createElement(L,null,a.createElement(d.lw,null,a.createElement(k,null,a.createElement(l.Z,{id:"scenes.settings.linked_cards",defaultMessage:"Linked Cards"})),!n.length&&a.createElement(i.xv,{size:"14px",color:"grey600",weight:500},a.createElement(l.Z,{id:"scenes.settings.no_credit_cards",defaultMessage:"No Credit Cards"})),n.map((n=>{const s=z.QU.find((e=>e.type===(n.card?n.card.type:"")));if("ACTIVE"!==n.state)return;const r=(null==n?void 0:n.card.label)&&(null==n?void 0:n.card.label.toLowerCase())||(null==n?void 0:n.card.type);return a.createElement(i.xu,{isMobile:x.BC.mobile,key:n.id,style:{width:"430px"}},a.createElement(C,null,a.createElement(O,null,a.createElement(j,{src:s?s.logo:z.US})),a.createElement(v,null,a.createElement(i.xv,{size:"16px",color:"grey800",weight:600,capitalize:!0},r.length>22?`${r.slice(0,22)}…`:r),t&&a.createElement(i.xv,{size:"14px",color:"grey600",weight:500},a.createElement(l.Z,{id:"scenes.settings.card_ending_in",defaultMessage:"Card Ending in {cardNumber}",values:{cardNumber:n.card.number}})))),a.createElement(C,null,a.createElement(A,{"data-e2e":"removeCard",nature:"light-red",disabled:e.submitting,style:{marginLeft:"18px",minWidth:"auto"},onClick:t=>{t.stopPropagation(),e.buySellActions.deleteCard(n.id)}},a.createElement(l.Z,{id:"buttons.remove",defaultMessage:"Remove"}))))}))),a.createElement(T,null,a.createElement(i.zx,{nature:"primary","data-e2e":"addCardFromSettings",onClick:()=>e.handleCreditCardClick()},a.createElement(l.Z,{id:"buttons.add_card",defaultMessage:"Add Card"}))))}));class F extends a.PureComponent{constructor(){super(...arguments),this.handleCreditCardClick=()=>{this.props.buySellActions.showModal({origin:"SettingsGeneral"}),this.props.buySellActions.setFiatCurrency(this.props.fiatCurrency||"USD"),this.props.buySellActions.setStep({step:"ADD_CARD"}),this.props.buySellActions.addCardFinished()}}componentDidMount(){this.props.buySellActions.fetchCards(!1),this.props.buySellActions.fetchPaymentMethods(this.props.fiatCurrency)}render(){return this.props.data.cata({Failure:()=>null,Loading:()=>a.createElement(LinkedCards_template_loading,null),NotAsked:()=>null,Success:e=>a.createElement(R,Object.assign({},e,this.props,{handleCreditCardClick:this.handleCreditCardClick}))})}}const U=(0,s.connect)((e=>({data:selectors_getData(e),fiatCurrency:o.wl.vE.Xd.getCurrency(e).getOrElse("USD")})),(e=>({buySellActions:(0,c.bindActionCreators)(o.Nw.wx.buySell,e)})))(F),LinkedWireBanks_selectors_getData=e=>{const t=o.wl.wx.zT.getBankTransferAccounts(e),n=o.wl.gm.getBeneficiaries(e),a=o.wl.wx.wd.getSBPaymentMethods(e);return(0,p.Z)(((e,t,n)=>({bankAccounts:e,beneficiaries:t,paymentMethods:n})))(t,n,a)},I=(0,r.ZP)(d.GV)`
  ${x.BC.atLeastTabletL`
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  `}
`,$=(0,r.ZP)(d.iJ)`
  margin-bottom: 18px;
`,LinkedWireBanks_template_loading=()=>a.createElement(I,null,a.createElement(d.lw,null,a.createElement($,null,a.createElement(l.Z,{id:"scenes.settings.linked_banks",defaultMessage:"Linked Banks"})),a.createElement(i.nZ,{height:"30px",width:"30px"})));var V=n("../blockchain-wallet-v4/src/exchange/utils.ts"),G=n("./src/data/components/exchange/services.ts");const W=r.ZP.div`
  margin-right: 14px;
  justify-content: center;
  flex-direction: column;
  display: flex;
`,J=(0,f.Z)({form:"linkedBanks"})((e=>{const t=e.beneficiaries.filter((e=>e.currency in h.E2));return a.createElement(d.GV,null,a.createElement(d.lw,null,a.createElement("div",null,t.map((t=>{const n=((e,t)=>{const n=e.find((e=>e.type===h.t8.FUNDS&&e.currency===t));return n?Number(n.limits.max):null})(e.paymentMethods.methods,t.currency);return a.createElement(i.xu,{style:{width:"430px"},isMobile:x.BC.mobile,key:t.id},a.createElement(C,null,a.createElement(W,null,a.createElement(i.Ee,{name:(0,w.t)(t.agent)})),a.createElement(v,null,a.createElement(i.xv,{size:"16px",color:"grey800",weight:600},t.name),n&&a.createElement(i.xv,{size:"14px",color:"grey600",weight:500},a.createElement(l.Z,{id:"scenes.settings.linked_banks.daily_limit",defaultMessage:"{amount} Daily Limit",values:{amount:(0,V.LE)({unit:t.currency||"EUR",value:(0,G.b)("FIAT",n)})}})))),a.createElement(C,null,a.createElement(v,{right:!0},a.createElement(i.xv,{size:"16px",color:"grey800",weight:600},t.address))))})))))}));class K extends a.PureComponent{componentDidMount(){this.props.custodialActions.fetchCustodialBeneficiaries(),this.props.brokerageActions.fetchBankTransferAccounts(),this.props.buySellActions.fetchPaymentMethods(this.props.fiatCurrency)}render(){return this.props.data.cata({Failure:()=>null,Loading:()=>a.createElement(LinkedWireBanks_template_loading,null),NotAsked:()=>null,Success:e=>a.createElement(J,Object.assign({},this.props,e))})}}const X=(0,s.connect)((e=>({data:LinkedWireBanks_selectors_getData(e),fiatCurrency:o.wl.wx.XW.getFiatCurrency(e)})),(e=>({brokerageActions:(0,c.bindActionCreators)(o.Nw.wx.brokerage,e),buySellActions:(0,c.bindActionCreators)(o.Nw.wx.buySell,e),custodialActions:(0,c.bindActionCreators)(o.Nw.gm,e),withdrawActions:(0,c.bindActionCreators)(o.Nw.wx.withdraw,e)})))(K),q=r.ZP.div`
  display: block;
  padding-top: 10px;
  & > * {
    display: inline;
    margin-right: 5px;
  }
`;class Y extends a.PureComponent{constructor(){super(...arguments),this.onShowCode=()=>{this.props.modalActions.showModal("PAIRING_CODE_MODAL",{origin:"SettingsPage"})}}render(){return a.createElement(d.GV,null,a.createElement(d.lw,null,a.createElement(d.iJ,null,a.createElement(l.Z,{id:"scenes.settings.general.pairingcode.title",defaultMessage:"Mobile App Pairing Code"})),a.createElement(d.g3,null,a.createElement(l.Z,{id:"scenes.settings.general.pairingcode.description",defaultMessage:"Scan the code (click on 'Show Pairing Code') with your Blockchain Wallet (iOS or Android) for a seamless connection to your wallet."}),a.createElement(l.Z,{id:"scenes.settings.general.pairingcode.description2",defaultMessage:"Download our mobile applications below."}),a.createElement(i.xv,{color:"error",size:"13px",weight:600},a.createElement(l.Z,{id:"scenes.settings.general.pairingcode.warning",defaultMessage:"Do not share your Pairing Code with others."})),a.createElement(q,null,a.createElement(i.Ct,{size:"34px",type:"applestore"}),a.createElement(i.Ct,{size:"34px",type:"googleplay"})))),a.createElement(d.u7,null,a.createElement(i.zx,{"data-e2e":"showQrCode",nature:"empty-blue",onClick:this.onShowCode},a.createElement(l.Z,{id:"scenes.settings.general.pairingcode.settings.show",defaultMessage:"Show Pairing Code"}))))}}const H=(0,s.connect)(null,(e=>({modalActions:(0,c.bindActionCreators)(o.Nw.qk,e)})))(Y),Q=(0,s.connect)(null,(e=>({settingsActions:(0,c.bindActionCreators)(o.Nw.qz.Xd,e)})))((e=>a.createElement(d.GV,null,a.createElement(d.lw,null,a.createElement(d.iJ,null,a.createElement(l.Z,{id:"scenes.settings.general.privacypolicy.title",defaultMessage:"Privacy Policy"})),a.createElement(d.g3,null,a.createElement(l.Z,{id:"scenes.settings.general.privacypolicy.description",defaultMessage:"Read about the privacy and security of your personal information."}))),a.createElement(d.u7,null,a.createElement(i.rU,{onClick:()=>{e.settingsActions.generalSettingsExternalRedirect("/legal/privacy")},href:"/root/legal/privacy",target:"_blank"},a.createElement(i.zx,{"data-e2e":"privacyLink",nature:"empty-blue"},a.createElement(i.JO,{name:"open-in-new-tab",size:"20px"}))))))),ee=(0,s.connect)(null,(e=>({settingsActions:(0,c.bindActionCreators)(o.Nw.qz.Xd,e)})))((e=>a.createElement(d.GV,null,a.createElement(d.lw,null,a.createElement(d.iJ,null,a.createElement(l.Z,{id:"scenes.settings.general.termsofservice.title",defaultMessage:"Terms of Service"})),a.createElement(d.g3,null,a.createElement(l.Z,{id:"scenes.settings.general.termsofservice.description",defaultMessage:"Read our terms and services agreement."}))),a.createElement(d.u7,null,a.createElement(i.rU,{onClick:()=>{e.settingsActions.generalSettingsExternalRedirect("/legal/terms")},href:"/root/legal/terms",target:"_blank"},a.createElement(i.zx,{"data-e2e":"termsLink",nature:"empty-blue"},a.createElement(i.JO,{name:"open-in-new-tab",size:"20px"}))))))),te=(0,s.connect)((e=>({guid:o.wl.vE.gU.getGuid(e)})))((e=>a.createElement(d.GV,null,a.createElement(d.lw,null,a.createElement(d.iJ,null,a.createElement(l.Z,{id:"scenes.settings.general.walletid.title",defaultMessage:"Wallet ID"})),a.createElement(d.g3,null,a.createElement(l.Z,{id:"scenes.settings.general.walletid.description",defaultMessage:"Wallet ID is your unique identifier. It is completely individual to you, and it is what you will use to log in and access your wallet. It is NOT a bitcoin address for sending or receiving."}),a.createElement(i.xv,{color:"error",size:"13px",weight:600},a.createElement(l.Z,{id:"scenes.settings.general.walletid.warning",defaultMessage:"Do not share your Wallet ID with others."})))),a.createElement(d.u7,null,a.createElement(i.xv,{color:"grey800","data-e2e":"walletId",size:"14px",weight:600},e.guid))))),ne=(0,s.connect)((e=>({version:o.wl.vE.gU.getVersion(e)})))((e=>a.createElement(d.GV,null,a.createElement(d.lw,null,a.createElement(d.iJ,null,a.createElement(l.Z,{id:"scenes.settings.general.wallet_version.title",defaultMessage:"Wallet Version"})),a.createElement(d.g3,null,e.version))))),ae=r.ZP.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`,le=(0,r.ZP)(i.xv)`
  margin: 4px 0;
`,se=(0,s.connect)((e=>({showPairingCode:o.wl.vE.AW.getPairingCodeFlag(e).getOrElse(!1)})))((e=>a.createElement("section",null,a.createElement(ae,null,a.createElement(le,{size:"26px",weight:600,color:"black"},a.createElement(l.Z,{id:"scenes.settings.general.title",defaultMessage:"General Information"})),a.createElement(i.xv,{size:"14px",weight:500,color:"grey700"},a.createElement(l.Z,{id:"scenes.settings.general.subtitle",defaultMessage:"View your wallet ID and other helpful links."}))),a.createElement(te,null),e.showPairingCode&&a.createElement(H,null),a.createElement(_,null),a.createElement(X,null),a.createElement(U,null),a.createElement(Q,null),a.createElement(ee,null),a.createElement(u,null),a.createElement(ne,null))))},"./src/services/images/index.ts":(e,t,n)=>{n.d(t,{t:()=>getBankLogoImageName});const getBankLogoImageName=e=>{switch(e){case"Acorns":return"bank-logo-acorns";case"Ally Bank":case"Ally":return"bank-logo-ally";case"Bank Of America":case"Bank of America (Fidelity NetBenefits)":return"bank-logo-bank-of-america";case"BB&T":return"bank-logo-bbt";case"Capital One":return"bank-logo-capital-one";case"Chase":return"bank-logo-chase";case"Citi Bank":return"bank-logo-citi-bank";case"Citizens":case"Citizens Bank of Philadelphia":case"Citizens State Bank (WI)":case"Citizens Tri-County Bank":return"bank-logo-citizens";case"Dag Site":return"bank-logo-dag-site";case"Navy Federal":case"Navy Federal Credit Union":return"bank-logo-navy-federal";case"PNC":case"PNC Bank":return"bank-logo-pnc";case"Regions":case"Regions Bank":case"Regions Bank (Mortgage)":case"Regions Bank - Credit Cards":case"Regions Retirement 24/7":return"bank-logo-regions";case"Robinhood":return"bank-logo-robinhood";case"SunTrust":case"Suntrust Bank":return"bank-logo-suntrust";case"TD Ameritrade Inc.":case"TD Canada Trust":case"TD":return"bank-logo-td";case"U.S. Bank":return"bank-logo-us-bank";case"USAA":return"bank-logo-usaa";case"Venmo":return"bank-logo-venmo";case"Wells Fargo":case"Wells Fargo Asset Management":case"Wells Fargo Retirement Services":return"bank-logo-wells-fargo";default:return"bank"}}}}]);