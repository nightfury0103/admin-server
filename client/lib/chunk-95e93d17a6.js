"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[2857],{"./src/components/QRCode/Wrapper/index.js":(e,t,n)=>{n.d(t,{Z:()=>m});var o,s=n("../../node_modules/react/index.js"),r=n("../../node_modules/prop-types/index.js"),i=n.n(r),l=n("../../node_modules/qrcode.react/lib/index.js"),c=n.n(l);var a=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div(o||(o=function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  canvas {\n    padding: 12px;\n    border: 1px solid ",";\n    border-radius: 6px;\n    background-color: white;\n  }\n"])),(function(e){return e.theme.grey000})),d=function QRCodeWrapper(e){var t=e.size,n=e.value;return s.createElement(a,null,s.createElement(c(),{value:n,size:t}))};d.propTypes={size:i().number.isRequired,value:i().string.isRequired};const m=d},"./src/components/Clipboard/CopyClipboardButton/index.tsx":(e,t,n)=>{n.d(t,{Z:()=>x});var o=n("../../node_modules/react/index.js"),s=n("../../node_modules/react-redux/es/index.js"),r=n("../../node_modules/redux/es/redux.js"),i=n("./src/data/index.ts"),l=n("./src/services/alerts/index.ts"),c=n("../../node_modules/react-copy-to-clipboard/lib/index.js"),a=n.n(c),d=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),m=n("../blockchain-info-components/src/index.js");const p=(0,d.ZP)(m.hU)`
  width: 30px;
  min-width: 0;
  height: 30px;
  border: none;
  background: transparent;
  &:hover {
    border: none;
    background: transparent;
  }
  > span {
    margin-top: ${e=>e.active?"-2px":"-5px;"};
    margin-right: 0 !important;
    font-size: ${e=>e.active?"18px":e.size||"20px"};
    color: ${e=>e.active?e.theme.success:e.color?e.theme[e.color]:e.theme.grey400};
  }
`,template=e=>{const{active:t,color:n,handleClick:s,size:r,textToCopy:i}=e;return o.createElement(a(),{text:i,onCopy:s},o.createElement(p,{active:t,color:n,"data-e2e":"copyClipboardCopyButton",name:t?"check":"copy-clipboard",size:r}))};class u extends o.PureComponent{constructor(e){super(e),this.timeout=void 0,this.state={active:!1},this.handleClick=this.handleClick.bind(this)}componentWillUnmount(){clearTimeout(this.timeout)}handleClick(){const{alertActions:e}=this.props;this.setState({active:!0}),this.timeout=setTimeout((()=>{this.setState({active:!1})}),2e3),e.displaySuccess(l.Rf),this.props.onClick&&this.props.onClick()}render(){return o.createElement(template,{active:this.state.active,color:this.props.color,handleClick:this.handleClick,"data-e2e":this.props["data-e2e"],textToCopy:this.props.textToCopy,size:this.props.size})}}const x=(0,s.connect)(null,(e=>({alertActions:(0,r.bindActionCreators)(i.Nw.$u,e)})))(u)},"./src/components/Flyout/SendRequestCrypto/index.tsx":(e,t,n)=>{n.d(t,{l:()=>i,S:()=>l});var o=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),s=n("../blockchain-info-components/src/index.js"),r=n("./src/components/Flyout/index.tsx");const i=(0,o.ZP)(s.xv)`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.spaceBetween?"space-between":"initial"};
  margin-bottom: ${e=>e.marginBottom?"24px":"0px"};
`,l=(0,o.ZP)(r.o9)`
  padding-top: 0px;
`},"./src/components/IdentityVerification/IdvIntro/index.tsx":(e,t,n)=>{n.d(t,{Z:()=>x});var o=n("../../node_modules/react/index.js"),s=n("./node_modules/react-intl/lib/src/components/message.js"),r=n("../../node_modules/react-redux/es/index.js"),i=n("../../node_modules/redux/es/redux.js"),l=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),c=n("../blockchain-info-components/src/index.js"),a=n("./src/components/Flyout/index.tsx"),d=n("./src/data/index.ts"),m=n("./src/modals/Swap/components/index.tsx");const p=(0,l.ZP)(c.rU)`
  text-align: center;
  margin-top: 16px;
  display: block;
`,u=(0,r.connect)(void 0,(e=>({idvActions:(0,i.bindActionCreators)(d.Nw.wx.identityVerification,e)}))),x=(0,i.compose)(u)((e=>o.createElement(o.Fragment,null,o.createElement(a.o9,null,o.createElement(m.Fn,{spaceBetween:!0,marginBottom:!0},o.createElement(c.JO,{name:"arrow-switch-thick",color:"blue600",size:"24px"}),o.createElement(c.JO,{name:"close",color:"grey600",role:"button",cursor:!0,onClick:e.handleClose})),o.createElement(c.xv,{size:"24px",color:"grey900",weight:600},e.title),o.createElement(c.xv,{size:"16px",color:"grey600",weight:500,style:{marginTop:"10px"}},e.subTitle)),o.createElement(m.OC,null),o.createElement(a.o9,null,o.createElement(c.xv,{size:"20px",color:"grey800",weight:600,style:{marginBottom:"8px"}},e.subHeaderTitle),o.createElement(c.xv,{size:"14px",color:"grey600",weight:500,style:{marginBottom:"30px"}},e.subHeaderCopy),o.createElement(m.XO,{style:{marginBottom:"28px"}},o.createElement(m.bn,{size:"32px",style:{marginRight:"16px"}},o.createElement(c.xv,{color:"blue600",size:"20px",weight:600},"1")),o.createElement("div",null,o.createElement(c.xv,{color:"grey900",size:"14px",weight:600,lineHeight:"150%"},o.createElement(s.Z,{id:"scenes.verifyemail.title",defaultMessage:"Verify Your Email"})),o.createElement(c.xv,{size:"12px",lineHeight:"150%",weight:500},o.createElement(s.Z,{id:"copy.swap_confirm",defaultMessage:"Confirm your email address to protect your our.com Wallet."})))),o.createElement(m.XO,{style:{marginBottom:"28px"}},o.createElement(m.bn,{size:"32px",style:{marginRight:"16px"}},o.createElement(c.xv,{color:"blue600",size:"20px",weight:600},"2")),o.createElement("div",null,o.createElement(c.xv,{color:"grey900",size:"14px",weight:600,lineHeight:"150%"},o.createElement(s.Z,{id:"copy.swap_add_name",defaultMessage:"Add Your Name and Address"})),o.createElement(c.xv,{size:"12px",lineHeight:"150%",weight:500},o.createElement(s.Z,{id:"copy.swap_name_address",defaultMessage:"We need to know your name and address to comply with local laws."})))),o.createElement(m.XO,{style:{marginBottom:"62px"}},o.createElement(m.bn,{size:"32px",style:{marginRight:"16px"}},o.createElement(c.xv,{color:"blue600",size:"20px",weight:600},"3")),o.createElement("div",null,o.createElement(c.xv,{color:"grey900",size:"14px",weight:600,lineHeight:"150%"},e.resultTitle),o.createElement(c.xv,{size:"12px",lineHeight:"150%",weight:500},e.resultCopy))),o.createElement(c.zx,{nature:"primary","data-e2e":"swapVerify",height:"48px",onClick:()=>e.idvActions.verifyIdentity({needMoreInfo:!1,origin:"Unknown",tier:e.selectedTier}),fullwidth:!0},o.createElement(s.Z,{id:"buttons.verify_now",defaultMessage:"Verify Now"})),e.goBack&&o.createElement(p,{"data-e2e":"goBack",onClick:e.goBack,weight:500,size:"14px"},o.createElement(s.Z,{id:"buttons.go_back",defaultMessage:"Go Back"}))))))},"./src/modals/RequestCrypto/index.tsx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>ee});var o=n("../../node_modules/react/index.js"),s=n("../../node_modules/react-redux/es/index.js"),r=n("../../node_modules/redux/es/redux.js"),i=n("../../node_modules/redux-form/es/reduxForm.js"),l=n("./src/components/Flyout/index.tsx"),c=n("./src/data/index.ts"),a=n("./src/data/types.ts"),d=n("./src/providers/ModalEnhancer/index.tsx"),m=n("./node_modules/react-intl/lib/src/components/message.js"),p=n("../../node_modules/react-virtualized-auto-sizer/dist/index.esm.js"),u=n("../../node_modules/react-window/dist/index.esm.js"),x=n("../../node_modules/redux-form/es/Field.js"),g=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),h=n("../blockchain-info-components/src/index.js"),y=n("./src/components/Flyout/SendRequestCrypto/index.tsx"),E=n("./src/components/Form/index.ts"),w=n("./src/data/components/swap/types.ts");const f="requestCrypto",v=g.ZP.div`
  margin-left: 18px;
  margin-top: 6px;
`;var b;!function(e){e[e.COIN_SELECT=0]="COIN_SELECT",e[e.IDV_INTRO=1]="IDV_INTRO",e[e.SHOW_ADDRESS=2]="SHOW_ADDRESS"}(b||(b={}));var C=n("../../node_modules/ramda/es/map.js"),k=n("../blockchain-wallet-v4/src/utils/index.ts"),_=n("./src/components/Balances/selectors.ts"),Z=n("./src/data/coins/model/request.ts"),z=n("./src/data/coins/selectors/index.ts");const S=(0,k.createDeepEqualSelector)([(e,t)=>(0,z.n6)(e,Object.assign({coins:t.requestableCoins},Z.r)),_.ck,c.wl.qz.N5.isSilverOrAbove,c.wl.cr.getFormValues(f)],((e,t,n,o)=>{const s=(null==o?void 0:o.coinSearch)||"ALL",r=[],i=n,l=t.getOrElse([]).map((e=>e.symbol)).reverse(),c=e.ETH.find((({type:e})=>e===w.l.ACCOUNT));(0,C.Z)((e=>(0,C.Z)((e=>{const{coinfig:t}=window.coins[e.coin],n=s.toLowerCase();let o=!1;"ALL"===s&&(o=!0),e.coin.toLowerCase().includes(n)&&(o=!0),t.name.toLowerCase().includes(n)&&(o=!0),t.displaySymbol.toLowerCase().includes(n)&&(o=!0),o&&r.push(e)}),e)),e);return{accounts:r.sort(((e,t)=>l.indexOf(t.coin)>l.indexOf(e.coin)?1:-1)),ethAccount:c,formValues:o,isAtLeastTier1:i}})),A=g.ZP.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  .coin-account-option {
    border-top: ${e=>`1px solid ${e.theme.grey000}`};
  }
`,O=(0,g.ZP)(y.l)`
  margin-bottom: 40px;
`,T=g.ZP.div`
  position: relative;
`,j=(0,g.ZP)(h.xv)`
  position: absolute;
  bottom: -24px;
  left: 0;
`,P=g.ZP.div`
  margin-top: 24px;
  position: relative;
`,F=(0,g.ZP)(h.JO)`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
`,R=g.ZP.div`
  border-top: ${e=>`1px solid ${e.theme.grey000}`};
  padding: 16px 40px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
  }
`,N=g.ZP.div`
  background-color: ${e=>e.theme.green100};
  padding: 2px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;class $ extends o.PureComponent{render(){const{data:e,formActions:t,formValues:n,handleClose:s,setStep:r,walletCurrency:i}=this.props,{coinfig:c}=window.coins.ETH,Row=({data:n,index:s,key:l,style:c})=>{const a=n[s];return o.createElement("div",{style:c},o.createElement(E.Xv,{key:l,account:a,coin:a.coin,onClick:()=>{a.type!==w.l.CUSTODIAL||e.isAtLeastTier1?(t.change(f,"selectedAccount",a),t.change(f,"step",b.SHOW_ADDRESS)):r(b.IDV_INTRO)},walletCurrency:i}))};return o.createElement(A,null,o.createElement(l.Z6,null,o.createElement(O,{spaceBetween:!0},o.createElement(h.JO,{name:"arrow-bottom-right",color:"blue600",size:"24px"}),o.createElement(h.JO,{name:"close",color:"grey600",role:"button","data-e2e":"close",size:"24px",cursor:!0,onClick:s})),o.createElement(T,null,o.createElement(h.xv,{size:"24px",color:"grey900",weight:600},o.createElement(m.Z,{id:"modals.requestcrypto.coinselect.title",defaultMessage:"Receive Crypto"})),o.createElement(h.xv,{size:"16px",color:"grey600",weight:500},o.createElement(m.Z,{id:"modals.requestcrypto.coinselect.subtitle",defaultMessage:"Select and share your address or QR code to receive crypto from anyone around the world."})),o.createElement(P,null,o.createElement(x.Z,{name:"coinSearch",type:"text",placeholder:"Search",component:E.zC}),o.createElement(F,{color:"grey200",name:"magnifier"})),n.coinSearch&&o.createElement(j,{size:"12px",color:"grey600",weight:600},e.accounts.length?o.createElement(o.Fragment,null,e.accounts.length," ",o.createElement(m.Z,{id:"copy.results",defaultMessage:"Results"})):o.createElement(m.Z,{id:"copy.no_results",defaultMessage:"No Results"})))),e.accounts.length?o.createElement(p.Z,null,(({height:t,width:n})=>o.createElement(u.t7,{className:"List",height:t,itemData:e.accounts,itemCount:e.accounts.length,itemSize:74,width:n},Row))):o.createElement(R,{role:"button",onClick:()=>{t.change(f,"selectedAccount",e.ethAccount),t.change(f,"step",b.SHOW_ADDRESS)}},o.createElement("div",null,o.createElement(N,null,o.createElement(h.JO,{name:"plus-in-circle-filled",color:"green600",size:"24px"})),o.createElement("div",null,o.createElement(h.xv,{size:"16px",color:"grey900",weight:600},o.createElement(m.Z,{id:"copy.receive_any_erc20",defaultMessage:"Receive Any Erc20 Token"})),o.createElement(h.xv,{size:"14px",color:"grey800",weight:500,style:{marginTop:"2px"}},o.createElement(m.Z,{id:"copy.view_eth_addr",defaultMessage:"View Your {eth} Address",values:{eth:c.name}})))),o.createElement(h.JO,{name:"chevron-right",size:"32px",color:"grey400"})))}}const M=(0,s.connect)(((e,t)=>({data:S(e,t)})),(e=>({modalActions:(0,r.bindActionCreators)(c.Nw.qk,e)}))),D=(0,r.compose)(M)($);var I=n("./src/components/IdentityVerification/IdvIntro/index.tsx");const RequestCrypto_InitTradingAccount=e=>o.createElement(I.Z,Object.assign({},e,{selectedTier:1,goBack:()=>e.setStep(b.COIN_SELECT),subHeaderCopy:o.createElement(m.Z,{id:"copy.trading_get_access",defaultMessage:"Get access to the Trading Account in seconds by completing your profile and getting Silver access."}),subHeaderTitle:o.createElement(m.Z,{id:"copy.trading_verify_email",defaultMessage:"Verify to use the Trading Account"}),subTitle:o.createElement(m.Z,{id:"copy.instantly_fund",defaultMessage:"Send, Receive and instantly fund your trades using the Trading Account."}),title:o.createElement(m.Z,{id:"copy.trading_account_access",defaultMessage:"Get Trading Account access"}),resultTitle:o.createElement(m.Z,{id:"copy.trading_start",defaultMessage:"Use the Trading Account"}),resultCopy:o.createElement(m.Z,{id:"copy.trade_and_fund",defaultMessage:"Send, Receive, Buy and Swap cryptocurrencies with your Trading Account."})})),selectors_getData=()=>Object.keys(window.coins).filter((e=>{const{products:t,type:n}=window.coins[e].coinfig;return(t.includes("PrivateKey")||t.includes("CustodialWalletBalance"))&&"FIAT"!==n.name}));var L=n("./src/components/Clipboard/CopyClipboardButton/index.tsx"),q=n("./src/components/QRCode/Wrapper/index.js");const B=g.ZP.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,U=g.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
  border-bottom: ${e=>`1px solid ${e.theme.grey000}`};
  &:first-child {
    border-top: ${e=>`1px solid ${e.theme.grey000}`};
  }
`,V=g.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  overflow-wrap: anywhere;
  word-break: break-all;
  hyphens: none;
`,H=g.ZP.div`
  background: ${e=>e.theme.grey000};
  margin: 16px 40px 0px 40px;
  padding: 16px;
  border-radius: 8px;
`,W=g.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0 36px;
  width: 100%;
`,J=g.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;

  & > :last-child {
    margin-top: 16px;
  }
`,X=g.ZP.div`
  flex-direction: column;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;class Q extends o.PureComponent{componentDidMount(){this.props.requestActions.getNextAddress(this.props.formValues.selectedAccount)}render(){const{formValues:e,handleClose:t,setStep:n,walletCurrency:s}=this.props,{selectedAccount:r}=e,{coinfig:i}=window.coins[r.coin];return o.createElement(B,null,o.createElement(l.o9,null,o.createElement(y.l,null,o.createElement(h.JO,{cursor:!0,onClick:()=>n(b.COIN_SELECT),name:"arrow-back",color:"grey600",size:"24px",style:{marginRight:"20px"}}),o.createElement(h.xv,{size:"24px",color:"grey800",weight:600},o.createElement(m.Z,{id:"modals.requestcrypto.showaddress.title",defaultMessage:"Scan or Share"})))),o.createElement(E.Xv,{account:r,coin:r.coin,displayOnly:!0,hideActionIcon:!0,walletCurrency:s}),o.createElement(U,null,o.createElement(V,null,o.createElement(h.xv,{color:"grey600",size:"14px",lineHeight:"21px",weight:500},o.createElement(m.Z,{id:"copy.address",defaultMessage:"Address"})),o.createElement(h.xv,{color:"grey800",size:"16px",weight:600,lineHeight:"24px"},this.props.addressR.cata({Failure:()=>o.createElement(m.Z,{id:"components.alerts.unknown_error",defaultMessage:"An error has occurred."}),Loading:()=>o.createElement(h.co,{width:"280px",height:"24px"}),NotAsked:()=>o.createElement(h.co,{width:"280px",height:"24px"}),Success:e=>e.address}))),o.createElement(v,null,this.props.addressR.cata({Failure:()=>o.createElement(o.Fragment,null),Loading:()=>o.createElement(o.Fragment,null),NotAsked:()=>o.createElement(o.Fragment,null),Success:e=>o.createElement(L.Z,{onClick:()=>this.props.requestActions.setAddressCopied(),textToCopy:e.address,color:"blue600",size:"24px"})}))),this.props.addressR.cata({Failure:()=>null,Loading:()=>null,NotAsked:()=>null,Success:e=>e.extras?Object.keys(e.extras).map((t=>o.createElement(U,{key:t},o.createElement(V,null,o.createElement(h.xv,{color:"grey600",size:"14px",lineHeight:"21px",weight:500},t),o.createElement(h.xv,{color:"grey800",size:"16px",weight:600,lineHeight:"24px"},e.extras[t])),o.createElement(v,null,o.createElement(L.Z,{onClick:()=>this.props.requestActions.setAddressCopied(),textToCopy:e.extras[t],color:"blue600",size:"24px"}))))):null}),i.type.isMemoBased&&r.type===a.l0.CUSTODIAL&&o.createElement(H,null,o.createElement(h.xv,{color:"grey600",size:"12px",weight:500},o.createElement(m.Z,{id:"modals.requestcrypto.showaddress.memo_required",defaultMessage:"If you send funds without the {coin} Memo Text, your funds will be lost and not credited to your account. Please send only {coin} to this address.",values:{coin:r.coin}}))),o.createElement(W,null,this.props.addressR.cata({Failure:e=>o.createElement(h.co,{width:"306px",height:"306px"},o.createElement(X,null,o.createElement(h.JO,{name:"alert-filled",size:"40px",color:"red600"}),o.createElement(h.xv,{size:"16px",weight:500,color:"red600"},e))),Loading:()=>o.createElement(h.co,{width:"306px",height:"306px"}),NotAsked:()=>o.createElement(h.co,{width:"306px",height:"306px"}),Success:e=>o.createElement(q.Z,{"data-e2e":"requestAddressQrCode",size:280,value:e.address})})),o.createElement(J,null,o.createElement(h.zx,{"data-e2e":"copyRequestLink",fullwidth:!0,height:"48px",nature:"primary",onClick:t},o.createElement(h.xv,{color:"white",size:"16px",weight:600},o.createElement(m.Z,{id:"copy.close",defaultMessage:"Close"})))))}}const Y=(0,s.connect)(((e,t)=>({addressR:c.wl.wx.WY.getNextAddress(e,t.formValues.selectedAccount)})),(e=>({requestActions:(0,r.bindActionCreators)(c.Nw.wx.request,e)})))(Q);class K extends o.PureComponent{constructor(e){super(e),this.setStep=e=>{this.props.formActions.change(f,"step",e)},this.handleClose=()=>{this.setState({show:!1}),setTimeout((()=>{this.props.close()}),l.x9)},this.state={show:!1}}componentDidMount(){this.setState({show:!0})}componentWillUnmount(){this.setStep(b.COIN_SELECT)}render(){const{formValues:e,position:t,total:n,userClickedOutside:s}=this.props,{step:r}=e||{},{show:i}=this.state,c=Object.assign(Object.assign({},this.props),{handleClose:this.handleClose,setStep:this.setStep});return o.createElement(l.ZP,{position:t,isOpen:i,userClickedOutside:s,onClose:this.handleClose,"data-e2e":"requestCryptoModal",total:n},r===b.COIN_SELECT&&o.createElement(l.FK,null,o.createElement(D,Object.assign({},c))),r===b.SHOW_ADDRESS&&o.createElement(l.FK,null,o.createElement(Y,Object.assign({},c))),r===b.IDV_INTRO&&o.createElement(l.FK,null,o.createElement(RequestCrypto_InitTradingAccount,Object.assign({},c))))}}const G=(0,s.connect)(((e,t)=>{let n;const o=c.wl.vE.Xd.getCurrency(e).getOrElse("USD"),s=c.wl.Nd.getCoinFromPageUrl(e);s&&(n=window.coins[s].coinfig.name);const r=null==t?void 0:t.preselectedCoin;return r&&(n=window.coins[r].coinfig.name),{formValues:c.wl.cr.getFormValues(f)(e),initialValues:{coinSearch:n,currencyDisplay:o,step:b.COIN_SELECT},requestableCoins:selectors_getData(),walletCurrency:o}}),(e=>({formActions:(0,r.bindActionCreators)(c.Nw.cr,e)}))),ee=(0,r.compose)((0,d.Z)(a.tl.REQUEST_CRYPTO_MODAL,{transition:l.x9}),G,(0,i.Z)({enableReinitialize:!0,form:f}))(K)},"./src/modals/Swap/components/index.tsx":(e,t,n)=>{n.d(t,{w5:()=>A,OC:()=>b,W1:()=>Z,LJ:()=>v,XO:()=>j,Ay:()=>FromToLogoLeft,bn:()=>O,Wx:()=>_,iu:()=>z,R_:()=>S,Gq:()=>k,Fn:()=>C,jI:()=>T});var o=n("../../node_modules/react/index.js"),s=n("../../node_modules/redux-form/es/Form.js"),r=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),i=n("../blockchain-wallet-v4/src/exchange/utils.ts"),l=n("../blockchain-info-components/src/index.js"),c=(n("./src/components/Cartridge/index.ts"),n("./src/components/Display/FiatDisplay/index.tsx")),a=n("./src/components/Flyout/index.tsx"),d=n("./src/data/components/exchange/services.ts"),m=n("./node_modules/react-intl/lib/src/components/message.js"),p=n("../../node_modules/react-redux/es/index.js"),u=n("../blockchain-wallet-v4/src/exchange/index.ts"),x=n("./src/data/index.ts"),g=n("./src/data/types.ts");const h=r.ZP.div`
  background-color: ${e=>e.theme.grey000};
  border-radius: 8px;
  overflow: hidden;
`,y=r.ZP.div`
  background-color: ${e=>e.theme.white};
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.grey100};

  & > div:first-child {
    border: 0;
  }
`,E=r.ZP.div`
  transition: transform 0.2s;
  transform: ${e=>e.toggle?"rotate(180deg)":"none"};
  margin-right: -6px;
`,w=(0,r.ZP)(a.X2)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  &:last-child {
    border-bottom-width: ${e=>e.toggle?"0px":"1px"};
  }
`,f=r.ZP.div`
  padding: 16px;
`,v=(0,p.connect)(((e,t)=>({baseRates:x.wl.vE.aT.misc.getRatesSelector(t.base.type===g.l0.ACCOUNT?t.base.baseCoin:t.base.coin,e).getOrElse({}),counterRates:x.wl.vE.aT.misc.getRatesSelector(t.counter.coin,e).getOrElse({}),paymentR:x.wl.wx.LF.getPayment(e).getOrElse({}),quoteR:x.wl.wx.LF.getQuote(e).getOrElse({}),walletCurrency:x.wl.vE.Xd.getCurrency(e).getOrElse("USD")})))((({base:e,basePayment:t,baseRates:n,counter:s,counterQuote:r,counterRates:p,paymentR:x,quoteR:v,walletCurrency:b})=>{var C;const[k,_]=(0,o.useState)(!1),networkFee=e=>{var t;return e?"BTC"===e.coin||"BCH"===e.coin?null===(t=e.selection)||void 0===t?void 0:t.fee:e.fee:0},Z=(0,u.convertCoinToFiat)({coin:e.type===g.l0.ACCOUNT?e.baseCoin:e.coin,currency:b,rates:n,value:networkFee(x)}),z=(0,u.convertCoinToFiat)({coin:s.coin,currency:b,rates:p,value:(null===(C=null==v?void 0:v.quote)||void 0===C?void 0:C.networkFee)||"0"}),S=window.coins[s.coin].coinfig?window.coins[s.coin].coinfig.name:s.coin,A=window.coins[e.coin].coinfig?window.coins[e.coin].coinfig.name:e.coin,O=e.type===g.l0.CUSTODIAL&&s.type===g.l0.CUSTODIAL,T=e.type===g.l0.ACCOUNT&&s.type===g.l0.ACCOUNT;return O?o.createElement(h,null,o.createElement(y,null,o.createElement(w,null,o.createElement(a.Dx,null,o.createElement(m.Z,{id:"copy.network_fees",defaultMessage:"Network Fees"})),o.createElement(a.B4,{"data-e2e":"swapNetworkFee"},o.createElement(m.Z,{id:"modals.brokerage.free",defaultMessage:"Free"})))),o.createElement(f,null,o.createElement(l.xv,{size:"12px"},o.createElement(m.Z,{id:"copy.no_network_fees",defaultMessage:"When using Trading Accounts, there are no network fees."})))):o.createElement(h,null,o.createElement(y,null,o.createElement(w,null,o.createElement(a.Dx,null,o.createElement(m.Z,{id:"copy.network_fees",defaultMessage:"Network Fees"})),o.createElement(a.B4,{"data-e2e":"swapNetworkFee"},o.createElement(w,{style:{border:"unset",padding:"0px"}},o.createElement(l.xv,{color:"grey900"},"~"),o.createElement(c.Z,{size:"14px",weight:500,color:"grey900",coin:b},Number(Z)+Number(z)),o.createElement(E,{toggle:k},o.createElement(l.JO,{role:"button","data-e2e":"toggleSwapFeesDropdown",name:"chevron-down",cursor:!0,size:"24px",color:"blue600",onClick:()=>{_((e=>!e))}}))))),k&&o.createElement(o.Fragment,null,e.type===g.l0.ACCOUNT&&o.createElement(w,{toggle:k},o.createElement(a.Dx,{style:{fontSize:"12px"},color:"grey900"},o.createElement(m.Z,{id:"copy.coin_network_fee",defaultMessage:"{coin} Network Fee",values:{coin:e.coin}})),o.createElement(a.B4,{color:"grey900",size:"12px","data-e2e":"swapOutgoingFee",style:{alignItems:"flex-end",display:"flex",flexDirection:"column"}},t.cata({Failure:e=>e,Loading:()=>o.createElement(l.co,{height:"18px",width:"70px"}),NotAsked:()=>o.createElement(l.co,{height:"18px",width:"70px"}),Success:t=>o.createElement(o.Fragment,null,o.createElement(l.xv,{size:"12px",color:"grey900"},(0,i.P2)({unit:{symbol:e.baseCoin},value:(0,d.b)(e.baseCoin,networkFee(t))})),o.createElement(c.Z,{size:"12px",weight:500,color:"grey400",coin:e.baseCoin},networkFee(t)))}))),s.type===g.l0.ACCOUNT&&o.createElement(w,{toggle:k},o.createElement(a.Dx,{style:{fontSize:"12px"},color:"grey900"},o.createElement(m.Z,{id:"copy.coin_network_fee",defaultMessage:"{coin} Network Fee",values:{coin:s.coin}})),o.createElement(a.B4,{"data-e2e":"swapIncomingFee",style:{alignItems:"flex-end",display:"flex",flexDirection:"column"}},r.cata({Failure:e=>e,Loading:()=>o.createElement(l.co,{height:"18px",width:"70px"}),NotAsked:()=>o.createElement(l.co,{height:"18px",width:"70px"}),Success:e=>o.createElement(o.Fragment,null,o.createElement(l.xv,{size:"12px",color:"grey900"},(0,i.P2)({unit:{symbol:s.coin},value:(0,d.b)(s.coin,e.quote.networkFee)})),o.createElement(c.Z,{style:{justifyContent:"flex-end"},size:"12px",weight:500,color:"grey400",coin:s.coin},e.quote.networkFee))}))))),o.createElement(f,null,o.createElement(l.Qt,{inline:!0},o.createElement(l.xv,{size:"14px"},o.createElement(m.Z,{id:"copy.network_fees_set",defaultMessage:"Network fees are set by the"}))," ",o.createElement(l.xv,{size:"14px"},T?`${A} and ${S}`:e.type!==g.l0.CUSTODIAL&&s.type===g.l0.CUSTODIAL?A:S)," ",o.createElement(l.xv,{size:"14px"},O?o.createElement(m.Z,{id:"copy.networks",defaultMessage:"networks"}):o.createElement(m.Z,{id:"copy.network",defaultMessage:"network"}),".")," ",o.createElement(l.rU,{href:"/support/hc/en-us/articles/360018355011-What-fees-are-applied-to-my-Swap-order-",size:"14px",rel:"noopener noreferrer",target:"_blank"},o.createElement(m.Z,{id:"modals.simplebuy.confirm.learn_more_about_fees",defaultMessage:"Learn more about fees"})))))})),b=r.ZP.div`
  border-top: 1px solid ${e=>e.theme.grey000};
`,C=(0,r.ZP)(l.xv)`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.spaceBetween?"space-between":"initial"};
  margin-bottom: ${e=>e.marginBottom?"16px":"0px"};
`,k=(0,r.ZP)(s.Z)`
  margin-top: ${e=>e.marginTop?"36px":"0px"};
`,_=r.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: ${e=>`1px solid ${e.theme.grey000}`};
  padding: 16px 40px;
  cursor: pointer;
  &:hover {
    background-color: ${e=>e.theme.blue000};
  }
  &:first-child {
    border-top: 0;
  }
`,Z=(0,r.ZP)(_)`
  border-top: 0px;
  position: relative;
  &:after {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: ${e=>e.theme.grey000};
    content: '';
  }
`,z=(0,r.ZP)(l.xv)`
  color: ${e=>e.theme.grey800};
  font-weight: 600;
  max-width: 200px;
`,S=(0,r.ZP)(l.xv)`
  color: ${e=>e.color||e.theme.grey600};
  margin-top: 4px;
  font-weight: ${e=>e.weight?e.weight:600};
  font-size: 14px;
`,A=r.ZP.div`
  display: flex;
  align-items: center;
`,O=r.ZP.div`
  position: ${e=>e.position};
  left: 67px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${e=>e.size};
  height: ${e=>e.size};
  border-radius: ${e=>e.size};
  z-index: 100;
  background: ${e=>e.theme.blue000};
`,T=r.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 24px;
`,j=r.ZP.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,P=(0,r.ZP)(a.X2)`
  display: flex;
  justify-content: space-between;
`,F=r.ZP.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & div:first-child {
    margin-right: 16px;
  }
`,R=r.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,FromToLogoLeft=({accountType:e,amount:t,base:n,children:s,coinCode:r,label:m})=>{const p=n?"Outgoing":"Incoming";return o.createElement(P,null,o.createElement(F,null,o.createElement(l.XP,{accountType:e,coin:r}),o.createElement("div",null,o.createElement(a.B4,{"data-e2e":`swap${p}Wallet`},s),o.createElement(a.Dx,null,o.createElement(l.xv,{"data-e2e":`swap${p}AccountType`,size:"14px",weight:500,color:"grey600"},m)))),o.createElement(R,null,o.createElement(a.B4,{"data-e2e":`swap${p}Value`},(0,i.P2)({unit:{symbol:r},value:t})),o.createElement(a.Dx,null,o.createElement(c.Z,{size:"14px",weight:500,color:"grey600",coin:r},(0,d.K)(r,t)))))}}}]);