"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[6043],{"./src/modals/Onboarding/Welcome/index.tsx":(e,t,l)=>{l.r(t),l.d(t,{default:()=>k});var n=l("../../node_modules/react/index.js"),o=l("./node_modules/react-intl/lib/src/components/message.js"),s=l("../../node_modules/react-redux/es/index.js"),i=l("../../node_modules/redux/es/redux.js"),r=l("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),a=l("../blockchain-info-components/src/index.js"),c=l("./src/components/Flyout/index.tsx"),d=l("./src/data/index.ts"),p=l("./src/data/types.ts"),m=l("./src/providers/ModalEnhancer/index.tsx"),__rest=function(e,t){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(l[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(l[n[o]]=e[n[o]])}return l};const u=(0,r.ZP)(c.o9)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,x=r.ZP.div`
  display: flex;
  flex-direction: column;
`,h=r.ZP.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  span {
    margin-left: 8px;
  }
`,y=(0,r.ZP)(x)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  padding: 40px;
  text-align: center;
`,w=r.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  min-width: 48px;
  background-color: ${e=>e.theme.blue000};
  border-radius: 48px;
`,g=(0,r.ZP)(a.xv)`
  margin: 26px 0 13px;
`,b=(0,r.ZP)(a.xv)`
  margin-bottom: 50px;
`,f=r.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 5px;
  & > :first-child {
    margin-bottom: 15px;
  }
`;class E extends n.PureComponent{constructor(){super(...arguments),this.state={show:!1},this.handleClose=()=>{this.setState({show:!1}),setTimeout((()=>{this.props.close()}),c.x9)},this.handleSBClick=()=>{const{cryptoCurrency:e}=this.props;this.setState({show:!1}),setTimeout((()=>{this.props.close(),e?this.props.buySellActions.showModal({cryptoCurrency:e,origin:"WelcomeModal"}):this.props.buySellActions.showModal({origin:"WelcomeModal"})}),c.x9/2)}}componentDidMount(){this.setState({show:!0})}render(){const{show:e}=this.state,t=__rest(this.props,[]);return n.createElement(c.ZP,Object.assign({},t,{onClose:this.props.close,isOpen:e,"data-e2e":"welcomeModal"}),n.createElement(u,null,n.createElement(h,null,n.createElement(a.Ee,{name:"intro-hand",width:"28px",height:"28px"}),n.createElement(a.xv,{color:"grey600",size:"20px",weight:600},n.createElement(o.Z,{id:"modals.wallet.tour.wallet.tour",defaultMessage:"Welcome to Blockchain!"}))),n.createElement(y,null,n.createElement(w,null,n.createElement(a.JO,{color:"blue600",name:"cart-filled",size:"25px"})),n.createElement(g,{size:"20px",weight:600},n.createElement(o.Z,{id:"modals.wallet.welcome.sb.title",defaultMessage:"Own Crypto in a Few Minutes"})),n.createElement(b,{color:"grey600",size:"14x",weight:500},n.createElement(o.Z,{id:"modals.wallet.welcome.sb.verifybuy",defaultMessage:"Verify your identity and buy crypto."})),n.createElement(a.Ee,{name:"buy-wallet",width:"282px",height:"165px"})),n.createElement(f,null,n.createElement(a.zx,{capitalize:!0,"data-e2e":"toSimpleBuyModal",fullwidth:!0,height:"48px",nature:"primary",onClick:this.handleSBClick,size:"16px"},n.createElement(o.Z,{id:"modals.wallet.welcome.sb.button",defaultMessage:"Buy Crypto Now"})),n.createElement(a.zx,{capitalize:!0,"data-e2e":"skipTour",fullwidth:!0,height:"48px",nature:"light",onClick:this.handleClose,size:"16px"},n.createElement(o.Z,{id:"modals.wallet.welcome.sb.skip",defaultMessage:"Skip"})))))}}const C=(0,s.connect)((e=>({cryptoCurrency:d.wl.wx.wd.getCryptoCurrency(e)||void 0})),(e=>({buySellActions:(0,i.bindActionCreators)(d.Nw.wx.buySell,e),onboardingActions:(0,i.bindActionCreators)(d.Nw.wx.onboarding,e)}))),k=(0,i.compose)((0,m.Z)(p.tl.WELCOME_MODAL,{transition:c.x9}),C)(E)}}]);