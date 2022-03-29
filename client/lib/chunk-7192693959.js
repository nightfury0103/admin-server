"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[4546],{"./src/components/Display/ComboDisplay/index.js":(e,t,n)=>{n.d(t,{Z:()=>y});var o,r,i=n("../../node_modules/react/index.js"),s=n("../../node_modules/prop-types/index.js"),l=n.n(s),a=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),c=n("../blockchain-info-components/src/index.js"),d=n("./src/components/Display/CoinDisplay/index.tsx"),p=n("./src/components/Display/FiatDisplay/index.tsx");function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var u=a.ZP.div(o||(o=_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n"]))),m=a.ZP.div(r||(r=_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  padding-left: 5px;\n"]))),x=function ComboDisplay(e){return i.createElement(u,null,i.createElement(d.Z,e),i.createElement(m,null,i.createElement(c.xv,{weight:400},"("),i.createElement(p.Z,e),i.createElement(c.xv,{weight:400},")")))};x.propTypes={coin:l().string.isRequired};const f=x;function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var n,o=_getPrototypeOf(e);if(t){var r=_getPrototypeOf(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _getPrototypeOf(e){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(e)}var g=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(ComboDisplayContainer,e);var t=_createSuper(ComboDisplayContainer);function ComboDisplayContainer(){return _classCallCheck(this,ComboDisplayContainer),t.apply(this,arguments)}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(ComboDisplayContainer,[{key:"render",value:function render(){return i.createElement(f,this.props)}}]),ComboDisplayContainer}(i.PureComponent);f.propTypes={children:l().string.isRequired,coin:l().string.isRequired};const y=g},"./src/components/Send/RecoveryPhrase/index.tsx":(e,t,n)=>{n.d(t,{Z:()=>g});var o=n("../../node_modules/react/index.js"),r=n("./node_modules/react-intl/lib/src/components/message.js"),i=n("../../node_modules/react-redux/es/index.js"),s=n("../../node_modules/redux/es/redux.js"),l=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),a=n("../blockchain-info-components/src/index.js"),c=n("./src/components/Cartridge/index.ts"),d=n("./src/data/index.ts");const p=l.iv`
  display: flex;
  align-items: center;
  font-size: 14px;
`,u=(0,l.ZP)(c.S0)`
  ${p}
`,m=l.ZP.div`
  display: inline;
`,x=l.ZP.span`
  color: ${e=>e.theme.blue600};
  text-decoration: underline;
  cursor: pointer;
`;class f extends o.PureComponent{constructor(){super(...arguments),this.handleClick=()=>{this.props.modalActions.showModal("RECOVERY_PHRASE_MODAL",{origin:"Send"})}}render(){return o.createElement(u,null,o.createElement(a.JO,{name:"alert-filled",color:"blue600",size:"24px",style:{marginRight:"12px"}}),o.createElement(m,null,o.createElement(r.Z,{id:"modals.send.firststep.fromcustody2",defaultMessage:"Please backup your Wallet before before sending crypto to it."})," ",o.createElement(x,{onClick:this.handleClick,"data-e2e":"withdrawBackupLink"},o.createElement(r.Z,{id:"modals.send.firststep.backupnow",defaultMessage:"Backup now."}))))}}const g=(0,i.connect)(null,(e=>({modalActions:(0,s.bindActionCreators)(d.Nw.qk,e)})))(f)},"./src/components/Send/index.tsx":(e,t,n)=>{n.d(t,{Ig:()=>w,ii:()=>_,ky:()=>j,EY:()=>C,cY:()=>E,K2:()=>v,T7:()=>k,ao:()=>P,Lr:()=>Z,X2:()=>b});var o=n("../../node_modules/react/index.js"),r=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),i=n("../blockchain-wallet-v4/src/redux/payment/btc/utils.ts"),s=n("../blockchain-info-components/src/index.js"),l=n("./src/components/Form/index.ts"),a=n("./src/services/styles/index.ts"),c=n("../../node_modules/react-redux/es/index.js"),d=n("../../node_modules/redux/es/redux.js"),p=n("./src/data/index.ts"),u=n("../../node_modules/ramda/es/lift.js");const selectors=e=>{const t=p.wl.wx.XW.getWithdrawalLocks(e),n=p.wl.vE.AW.getWithdrawalLocksFundsOnHold(e).getOrElse(!1);return(0,u.Z)((e=>({onHold:n,withdrawalLocks:e})))(t)};var m=n("./src/components/Brokerage/WithdrawalLockHold.tsx"),x=n("./src/components/Cartridge/index.ts");const f=r.iv`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
`,g=(0,r.ZP)(x.S0)`
  ${f}
`,template=({withdrawalLocks:e})=>o.createElement(g,null,e&&o.createElement(m.Z,{amount:e.totalLocked.amount,currency:e.totalLocked.currency,mode:"tooltip"}));class y extends o.PureComponent{componentDidMount(){const{sendActions:e}=this.props;e.getLockRule()}render(){const{data:e}=this.props;return e.cata({Failure:()=>null,Loading:()=>null,NotAsked:()=>null,Success:e=>e.onHold?o.createElement(template,Object.assign({},e)):null})}}const h=(0,c.connect)((e=>({data:selectors(e)})),(e=>({sendActions:(0,d.bindActionCreators)(p.Nw.wx.send,e)})))(y),b=r.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`,w=r.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  ${a.BC.mobile`
    width: 100%;
  `};
`,_=(0,r.ZP)(w)`
  align-items: flex-end;
`,E=(r.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid ${e=>e.theme.grey200};

  &:hover {
    background-color: ${e=>e.theme.grey000};
  }
`,r.ZP.div`
  display: flex;
  flex-direction: ${e=>e.toggled?"column":"row"};
  align-items: center;
  justify-content: space-between;
  width: 100%;
`),v=(0,r.ZP)(l.cw)`
  ${a.BC.mobile`
    flex-direction: column;
  `};
`,k=(0,r.ZP)(l.lX)`
  width: 100%;
  display: flex;
  white-space: nowrap;
  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`,P=r.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`,Z=r.ZP.div`
  width: 100%;
  margin-bottom: 10px;
`,C=(0,r.ZP)(s.jL)`
  margin-bottom: 18px;
`,j=(0,o.memo)((({account:e})=>e.type!==i._t.CUSTODIAL?null:o.createElement(h,null)))},"./src/components/UnstoppableDomains/index.tsx":(e,t,n)=>{n.d(t,{Z:()=>u});var o=n("../../node_modules/react/index.js"),r=n("../../node_modules/react-redux/es/index.js"),i=n("../../node_modules/redux/es/redux.js"),s=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),l=n("../blockchain-info-components/src/index.js"),a=n("./src/data/index.ts"),c=n("../../node_modules/ramda/es/lift.js");const getData=e=>{const t=a.wl.wx.lW.getUnstoppableDomainResults(e);return(0,c.Z)((e=>({unstoppableDomains:e})))(t)},d=s.ZP.div`
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${e=>e.theme.grey000};
  }
`;class p extends o.PureComponent{constructor(){super(...arguments),this.handleClick=e=>{this.props.formActions.change(this.props.form,"to",{value:{label:e,value:e}})}}componentWillUnmount(){this.props.sendActions.fetchUnstoppableDomainResultsNotAsked()}render(){return this.props.data.cata({Failure:e=>o.createElement(o.Fragment,null,e),Loading:()=>o.createElement(l.T_,{height:"24px",width:"24px"}),NotAsked:()=>null,Success:e=>o.createElement(d,{onClick:()=>this.handleClick(e.unstoppableDomains.address)},o.createElement(l.xv,{size:"14px",weight:500,color:"grey800"},e.unstoppableDomains.address))})}}const u=(0,r.connect)((e=>({data:getData(e)})),(e=>({formActions:(0,i.bindActionCreators)(a.Nw.cr,e),sendActions:(0,i.bindActionCreators)(a.Nw.wx.send,e)})))(p)},"./src/modals/components/index.tsx":(e,t,n)=>{n.d(t,{Ue:()=>b,rD:()=>BankSearchIcon,mf:()=>Z,Vd:()=>P,mZ:()=>BankWaitIndicator,zK:()=>a,lh:()=>h,Hr:()=>Hr,wq:()=>IneligibleErrorMessage,Oi:()=>m,dC:()=>LinkViaDesktop,gb:()=>Loading,H:()=>LoadingUpdating,EA:()=>ModalNavWithBackArrow,YX:()=>ModalNavWithCloseIcon,Zu:()=>c,ty:()=>j,NA:()=>ScanWithPhone,$0:()=>d,FP:()=>SimpleBankRow});var o=n("../../node_modules/react/index.js"),r=n("./node_modules/react-intl/lib/src/components/message.js"),i=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),s=n("../blockchain-info-components/src/index.js"),l=n("./src/components/Flyout/index.tsx");const a=(0,i.ZP)(l.o9)`
  padding: 37px 0 34px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`,c=(0,i.ZP)(s.xv)`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  padding-left: 40px;
`,d=i.ZP.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  align-items: center;
  padding: 20px;
`,p=i.ZP.div`
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
`,u=i.ZP.div`
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
`,m=i.ZP.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`,x=i.ZP.img`
  margin-bottom: 32px;
  max-height: 60px;
`,ScanWithPhone=({children:e,logo:t,qrCode:n})=>o.createElement(d,null,t&&o.createElement(x,{src:t}),o.createElement(s.xv,{weight:600,size:"20px",color:"grey900"},e),o.createElement(s.xv,{weight:500,size:"14px",color:"grey600"},o.createElement(r.Z,{id:"modals.brokerage.use_phone_camera",defaultMessage:"Use your phone’s camera to scan the QR code."})),o.createElement(p,null,n?o.createElement("img",{alt:"Use your phone’s camera to scan the QR code.",src:n}):o.createElement(s.nZ,{width:"30px",height:"30px"}))),BankWaitIndicator=({qrCode:e})=>{const[t,n]=(0,o.useState)(0);return e&&setTimeout((()=>{n(t+1)}),3e4),o.createElement(u,{className:e?"active":""},o.createElement(s.nZ,{width:"10px",height:"10px",borderWidth:"3px"}),o.createElement(s.xv,{size:"14px",weight:500},0===t&&o.createElement(r.Z,{id:"modals.brokerage.waiting_to_hear",defaultMessage:"Waiting to hear from your bank"}),t>0&&o.createElement(r.Z,{id:"modals.brokerage.this_can_take_a_while",defaultMessage:"This can take several minutes, hold tight!"})))},f=(0,i.ZP)(s.zx)`
  margin: 20px 0 0;
  display: unset;
`,LinkViaDesktop=({authUrl:e,children:t,onClick:n=(()=>{})})=>e?o.createElement(d,null,o.createElement(s.xv,{weight:600,size:"20px",color:"grey900"},t),o.createElement(f,{"data-e2e":"yapilyBankLink",nature:"empty-blue",onClick:()=>{window.open(e,"_blank"),n()}},o.createElement(r.Z,{id:"modals.brokerage.continue_in_browser",defaultMessage:"Continue in browser"}))):null,g=(0,i.ZP)(s.xv)`
  width: 300px;
`,y=i.ZP.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`,h="BROKERAGE_INELIGIBLE",IneligibleErrorMessage=()=>o.createElement(g,{size:"16px",weight:400},o.createElement(r.Z,{id:"modals.brokerage.ineligible_error",defaultMessage:"You are not eligible to make deposits and withdrawals with this currency."}));var b;!function(e){e.GETTING_READY="Getting Ready...",e.LOADING="Loading...",e.PROCESSING="Processing..."}(b||(b={}));const Loading=({text:e})=>o.createElement(y,null,o.createElement(s.nZ,null),o.createElement(s.xv,{weight:600,color:"grey600",style:{marginTop:"24px"}},e===b.LOADING&&o.createElement(r.Z,{id:"copy.loading",defaultMessage:"Loading..."}),e===b.GETTING_READY&&o.createElement(r.Z,{id:"loader.message.gettingready",defaultMessage:"Getting Ready..."}),e===b.PROCESSING&&o.createElement(r.Z,{id:"modals.simplebuy.processing",defaultMessage:"Processing…"}))),w=i.ZP.div`
  transform: translate(47px, 35px);
  border: 5px solid white;
  border-radius: 50%;
  background-color: white;
`,_=(0,i.ZP)(s.xv)`
  font-weight: 600;
  font-size: 20px;
  margin-top: 22px;
`,E=(0,i.ZP)(s.xv)`
  font-size: 14px;
  font-weight: 500;
  margin: 5px 30px;
`,LoadingUpdating=()=>o.createElement(y,null,o.createElement(w,null,o.createElement(s.nZ,{borderWidth:"7px",height:"32px",width:"32px"})),o.createElement(s.Ee,{name:"blockchain-logo-circle",width:"106px"}),o.createElement(_,{color:"grey900"},o.createElement(r.Z,{defaultMessage:"Updating Your Wallet...",id:"modals.brokerage.updating_your_wallet"})),o.createElement(E,{color:"grey600"},o.createElement(r.Z,{defaultMessage:"This could take up to 30 seconds. Please do not go back or close the app.",id:"modals.brokerage.this_could_take"}))),v=i.ZP.div`
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

  ${e=>e.onClick&&i.iv`
      cursor: pointer;
      * {
        cursor: pointer;
      }
      &:hover {
        background-color: ${e=>e.theme.blue000};
      }
    `}
`,k=i.ZP.div`
  height: 30px;
  width: 30px;
  background: url('${e=>e.url}') 0 0 no-repeat;
  background-size: 30px;
  background-position: center;
`,P=i.ZP.div`
  position: relative;
`,Z=i.ZP.input`
  border: 1px solid ${e=>e.theme.grey000};
  font-size: 16px;
  width: 100%;
  border-width: 1px 0;
  padding: 20px 0 20px 40px;

  &:active,
  &:focus {
    outline: none;
  }
`,BankSearchIcon=()=>o.createElement(s.JO,{size:"20px",color:"grey600",name:"magnifier",style:{position:"absolute",right:"60px",top:"20px"}}),SimpleBankRow=e=>o.createElement(v,{onClick:e.onClick},o.createElement("div",null,o.createElement(k,{url:e.institution.media[0].source}),o.createElement(s.xv,{color:"grey900",style:{marginLeft:"20px"},weight:600},e.institution.name)),o.createElement(s.JO,{cursor:!0,name:"chevron-right",size:"20px",color:"grey600",role:"button",style:{marginRight:"24px"}})),ModalNavWithBackArrow=e=>o.createElement(c,{color:"grey800",size:"20px",weight:600},o.createElement(s.JO,{cursor:!0,name:"arrow-back",size:"20px",color:"grey600",role:"button",style:{marginRight:"24px"},onClick:()=>e.handleClose()}),e.children),ModalNavWithCloseIcon=e=>o.createElement(c,{color:"grey800",size:"20px",weight:600,style:{justifyContent:"space-between"}},e.children,o.createElement(s.JO,{cursor:!0,name:"close",size:"20px",color:"grey600",role:"button",style:{marginRight:"24px"},onClick:()=>e.handleClose()})),C=i.ZP.hr`
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
`,Hr=()=>o.createElement("div",{style:{width:"100%"}},o.createElement(s.xv,{weight:600,size:"16px",color:"grey900"},o.createElement(C,null))),j=((0,i.ZP)(s.xv)`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.spaceBetween?"space-between":"initial"};
  margin-bottom: ${e=>e.marginBottom?"16px":"0px"};
`,({amount:e,currency:t})=>o.createElement(r.Z,{id:"modals.send.over_your_limit",defaultMessage:"Over your limit! Send up to {currency}{amount}.",values:{amount:e,currency:t}}))}}]);