"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[6386],{"./src/components/Public/index.js":(e,t,r)=>{r.d(t,{i:()=>s});var n,o,a,c=r("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),i=r("./src/services/styles/index.ts");function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var s=c.ZP.div(n||(n=_taggedTemplateLiteral(["\n  padding: 32px;\n  border-radius: 8px;\n  box-sizing: border-box;\n  background-color: ",";\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.21);\n  width: 480px;\n\n  ","\n  ","\n"])),(function(e){return e.theme.white}),i.BC.tablet(o||(o=_taggedTemplateLiteral(["\n    width: 100%;\n  "]))),i.BC.mobile(a||(a=_taggedTemplateLiteral(["\n    padding: 20px;\n  "]))))},"./src/scenes/RecoverWalletLegacy/index.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>U});var n,o,a,c,i=r("../../node_modules/react/index.js"),s=r("../../node_modules/react-redux/es/index.js"),l=r("../../node_modules/redux/es/redux.js"),u=r("./src/data/index.ts"),p=r("./node_modules/react-intl/lib/src/components/message.js"),f=r("../../node_modules/react-router-bootstrap/lib/index.js"),d=r("../../node_modules/redux-form/es/Field.js"),m=r("../../node_modules/redux-form/es/reduxForm.js"),g=r("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),y=r("../blockchain-info-components/src/index.js"),v=r("./src/components/Form/index.ts"),b=r("./src/components/Public/index.js"),h=r("./src/services/forms/index.js");function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var _=g.ZP.div(n||(n=_taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n"]))),w=(0,g.ZP)(v.lX)(o||(o=_taggedTemplateLiteral(["\n  > div {\n    margin-bottom: 0;\n  }\n  + div {\n    margin-bottom: 10px;\n  }\n"]))),x=(0,g.ZP)(v.cw)(a||(a=_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n"]))),E=(0,g.ZP)(f.Ji)(c||(c=_taggedTemplateLiteral(["\n  margin-right: 15px;\n"])));const P=(0,m.Z)({destroyOnUnmount:!1,form:"recover"})((function FirstStep(e){var t=e.handleSubmit,r=e.invalid,n=e.submitting;return i.createElement(b.i,null,i.createElement(_,null,i.createElement(y.xv,{size:"20px",color:"blue900",weight:600,capitalize:!0},i.createElement(p.Z,{id:"scenes.recover.firststep.funds",defaultMessage:"Recover Funds"}))),i.createElement(v.l0,{onSubmit:t},i.createElement(y.Qt,null,i.createElement(y.xv,{size:"13px",weight:400,color:"error"},i.createElement(p.Z,{id:"scenes.recover.firststep.warning",defaultMessage:"You should always pair or login if you have access to your wallet ID/wallet email and password."}))),i.createElement(v.cw,null,i.createElement(v.xJ,null,i.createElement(w,{htmlFor:"mnemonic"},i.createElement(p.Z,{id:"scenes.recover.firststep.mnemonic1",defaultMessage:"Your Secret Private Key Recovery Phrase"})),i.createElement(y.xv,{size:"12px",weight:400},i.createElement(p.Z,{id:"scenes.recover.firststep.mnemonic_explain",defaultMessage:"Enter your 12 word phrase, lowercase, with spaces between each word, to recover your funds & transactions."})),i.createElement(y.xv,{size:"12px",weight:400,style:{marginBottom:"16px"}},i.createElement(p.Z,{id:"scenes.recover.firststep.mnemonic_explain_verification",defaultMessage:"For your security, you may have to re-verify your identity before accessing your Trading or Rewards accounts."})),i.createElement(d.Z,{bgColor:"grey000",autoComplete:"off",autoFocus:!0,component:v.zC,disableSpellcheck:!0,name:"mnemonic",validate:[h.C1,h.$i]}))),i.createElement(x,null,i.createElement(E,{to:"/help"},i.createElement(y.rU,{size:"13px",weight:400},i.createElement(p.Z,{id:"buttons.go_back",defaultMessage:"Go Back"}))),i.createElement(y.zx,{"data-e2e":"recoverContinue",disabled:n||r,nature:"primary",type:"submit"},i.createElement(p.Z,{id:"buttons.continue",defaultMessage:"Continue"})))))}));var R,O=r("../../node_modules/redux-form/es/formValueSelector.js");var S=g.ZP.div(R||(R=function error_template_taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  display: flex;\n  text-align: center;\n  align-items: center;\n  flex-direction: column;\n"])));const C=function Error(e){return i.createElement(b.i,null,i.createElement(S,null,i.createElement(y.JO,{color:"error",name:"close-circle",size:"40px"}),i.createElement(y.xv,{size:"20px",weight:600,color:"black",style:{marginTop:"8px"}},i.createElement(p.Z,{id:"scenes.recover.restore_fails",defaultMessage:"Restoring Account Failed"})),i.createElement(y.xv,{color:"blue600",size:"16px",weight:500,cursor:"pointer",onClick:e.previousStep},i.createElement(p.Z,{id:"scenes.exchange.exchangeform.tryagain",defaultMessage:"Try Again"}))))};var j,L,k,Z=r("../../node_modules/ramda/es/has.js"),z=r("./src/components/Terms/index.tsx");function template_taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var T=g.ZP.div(j||(j=template_taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n"]))),W=(0,g.ZP)(v.cw)(L||(L=template_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n"]))),M=(0,g.ZP)(y.rU)(k||(k=template_taggedTemplateLiteral(["\n  margin-right: 15px;\n"]))),F=(0,h.yT)("password");const A=(0,m.Z)({destroyOnUnmount:!1,form:"recover"})((function SecondStep(e){var t=e.handleSubmit,r=e.invalid,n=e.isRegistering,o=e.isRestoringFromMetadata,a=e.password,c=e.previousStep;return i.createElement(b.i,null,i.createElement(T,null,i.createElement(y.xv,{size:"20px",color:"blue900",weight:600,capitalize:!0},i.createElement(p.Z,{id:"scenes.recover.secondstep.funds",defaultMessage:"Recover Funds"}))),i.createElement(v.l0,{onSubmit:t},!o&&i.createElement(v.cw,null,i.createElement(v.lX,{htmlFor:"email"},i.createElement(p.Z,{id:"scenes.recover.secondstep.email",defaultMessage:"New Email"})),i.createElement(d.Z,{bgColor:"grey000",name:"email",validate:[h.C1,h.u$],component:v.zC})),i.createElement(v.cw,null,i.createElement(v.lX,{htmlFor:"password"},i.createElement(p.Z,{id:"scenes.recover.secondstep.password",defaultMessage:"Password"})),i.createElement(d.Z,{bgColor:"grey000",name:"password",validate:[h.C1,h.ST],component:v.MY,showPasswordScore:!0,passwordScore:(0,Z.Z)("zxcvbn",window)?window.zxcvbn(a).score:0})),i.createElement(v.cw,null,i.createElement(v.lX,{htmlFor:"confirmationPassword"},i.createElement(p.Z,{id:"scenes.recover.secondstep.confirmapassword",defaultMessage:"Confirm Password"})),i.createElement(d.Z,{bgColor:"grey000",name:"confirmationPassword",validate:[h.C1,F],component:v.MY})),i.createElement(v.cw,null,i.createElement(z.Z,{recovery:!0})),i.createElement(W,null,i.createElement(M,{onClick:c,size:"13px",weight:400},i.createElement(p.Z,{id:"buttons.go_back",defaultMessage:"Go Back"})),i.createElement(y.zx,{"data-e2e":"recoverSubmit",disabled:n||r,nature:"primary",type:"submit"},n?i.createElement(y.JA,{height:"20px",width:"20px",color:"white"}):i.createElement(p.Z,{id:"scenes.recover.secondstep.recover",defaultMessage:"Recover Funds"})))))}));function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,n=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(e)}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var B=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(RecoverContainer,e);var t=_createSuper(RecoverContainer);function RecoverContainer(){var e;_classCallCheck(this,RecoverContainer);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return _defineProperty(_assertThisInitialized(e=t.call.apply(t,[this].concat(n))),"onSubmit",(function(){var t=e.props,r=t.authActions,n=t.email,o=t.language,a=t.mnemonic,c=t.password;r.restore(a,n,c,o)})),e}return function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(RecoverContainer,[{key:"componentDidMount",value:function componentDidMount(){var e=this.props,t=e.authActions,r=e.mnemonic;t.restoreFromMetadata(r)}},{key:"render",value:function render(){var e=this,t=this.props,r=t.kycReset,n=t.metadataRestore,o=t.password,a=t.previousStep,c=t.registering.cata({Failure:function Failure(){return!1},Loading:function Loading(){return!0},NotAsked:function NotAsked(){return!1},Success:function Success(){return!1}});return n.cata({Failure:function Failure(){return!1===r?i.createElement(C,{previousStep:a}):i.createElement(A,{previousStep:a,onSubmit:e.onSubmit,isRegistering:c,password:o})},Loading:function Loading(){return i.createElement(y.nZ,{width:"36px",height:"36px"})},NotAsked:function NotAsked(){return i.createElement(y.nZ,{width:"36px",height:"36px"})},Success:function Success(t){return i.createElement(A,{previousStep:a,onSubmit:e.onSubmit,isRegistering:c,isRestoringFromMetadata:t&&!!t.sharedKey,password:o})}})}}]),RecoverContainer}(i.PureComponent);const I=(0,s.connect)((function mapStateToProps(e){return{email:(0,O.Z)("recover")(e,"email"),language:u.wl.cb.getLanguage(e),metadataRestore:u.wl.I8.getMetadataRestore(e),mnemonic:(0,O.Z)("recover")(e,"mnemonic"),password:(0,O.Z)("recover")(e,"password")||"",registering:u.wl.I8.getRegistering(e)}}),(function mapDispatchToProps(e){return{alertActions:(0,l.bindActionCreators)(u.Nw.$u,e),authActions:(0,l.bindActionCreators)(u.Nw.I8,e)}}))(B);function RecoverWalletLegacy_typeof(e){return RecoverWalletLegacy_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},RecoverWalletLegacy_typeof(e)}function _extends(){return _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_extends.apply(this,arguments)}function RecoverWalletLegacy_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function RecoverWalletLegacy_setPrototypeOf(e,t){return RecoverWalletLegacy_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},RecoverWalletLegacy_setPrototypeOf(e,t)}function RecoverWalletLegacy_createSuper(e){var t=function RecoverWalletLegacy_isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,n=RecoverWalletLegacy_getPrototypeOf(e);if(t){var o=RecoverWalletLegacy_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return RecoverWalletLegacy_possibleConstructorReturn(this,r)}}function RecoverWalletLegacy_possibleConstructorReturn(e,t){if(t&&("object"===RecoverWalletLegacy_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function RecoverWalletLegacy_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function RecoverWalletLegacy_getPrototypeOf(e){return RecoverWalletLegacy_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},RecoverWalletLegacy_getPrototypeOf(e)}var N=function(e){!function RecoverWalletLegacy_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&RecoverWalletLegacy_setPrototypeOf(e,t)}(RecoverWalletLegacyContainer,e);var t=RecoverWalletLegacy_createSuper(RecoverWalletLegacyContainer);function RecoverWalletLegacyContainer(e){var r;return function RecoverWalletLegacy_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,RecoverWalletLegacyContainer),(r=t.call(this,e)).state={step:1},r}return function RecoverWalletLegacy_createClass(e,t,r){return t&&RecoverWalletLegacy_defineProperties(e.prototype,t),r&&RecoverWalletLegacy_defineProperties(e,r),e}(RecoverWalletLegacyContainer,[{key:"componentWillUnmount",value:function componentWillUnmount(){this.props.formActions.destroy("recover")}},{key:"render",value:function render(){var e=this;return 2===this.state.step?i.createElement(I,_extends({previousStep:function previousStep(){return e.setState({step:1})}},this.props)):i.createElement(P,_extends({onSubmit:function onSubmit(){return e.setState({step:2})}},this.props))}}]),RecoverWalletLegacyContainer}(i.PureComponent);const U=(0,s.connect)((function mapStateToProps(e){return{kycReset:u.wl.I8.getKycResetStatus(e)}}),(function mapDispatchToProps(e){return{formActions:(0,l.bindActionCreators)(u.Nw.cr,e)}}))(N)},"./src/components/Terms/index.tsx":(e,t,r)=>{r.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var n=r("../../node_modules/react/index.js"),o=r("./node_modules/react-intl/lib/src/components/message.js"),a=r("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),c=r("../blockchain-info-components/src/index.js");const i=a.ZP.div`
  & > * {
    display: inline-block;
  }
  ${e=>e.isCentered&&"\n    text-align: center;\n  "};
`,__WEBPACK_DEFAULT_EXPORT__=e=>{const{company:t,isCentered:r=null,recovery:a}=e;return"blockchain-kyc"===t?n.createElement(i,{isCentered:r},n.createElement(c.xv,{size:"12px",weight:400},n.createElement(o.Z,{id:"scenes.register.registerform.blockchainkyc.read",defaultMessage:"By hitting continue, I agree to Blockchain’s"})," "),n.createElement(c.rU,{href:"/root/legal/terms",target:"_blank",size:"12px",weight:500},n.createElement(o.Z,{id:"scenes.register.registerform.blockchain.terms",defaultMessage:"Terms of Service"})," "),"&  ",n.createElement(c.rU,{href:"/root/legal/privacy",target:"_blank",size:"12px",weight:500},n.createElement(o.Z,{id:"scenes.register.registerform.blockchain.privacypolicy",defaultMessage:"Privacy Policy."}))):n.createElement(i,{style:{paddingLeft:a?0:"4px"},isCentered:r},a?n.createElement(c.xv,{color:"grey800",size:"12px",weight:500,style:{margin:"4px 0"}},n.createElement(o.Z,{id:"scenes.register.registerform.blockchain.read-recovery",defaultMessage:"By recovering an account, you agree to Blockchain’s"})):n.createElement(c.xv,{color:"grey800",size:"12px",weight:500},n.createElement(o.Z,{id:"scenes.register.registerform.blockchain.read_1",defaultMessage:"By creating an account, you agree to Blockchain’s"})),n.createElement("span",null," "),n.createElement(c.rU,{href:"/root/legal/terms",target:"_blank",size:"12px",weight:500,"data-e2e":"blockchainTermsLink"},n.createElement(o.Z,{id:"scenes.register.registerform.blockchain.default.terms",defaultMessage:"Terms of Service"}))," ",n.createElement(c.xv,{color:"grey800",size:"12px",weight:500},"&")," ",n.createElement(c.rU,{href:"/root/legal/privacy",target:"_blank",size:"12px",weight:500,"data-e2e":"blockchainPrivacyLink"},n.createElement(o.Z,{id:"copy.privacy_policy",defaultMessage:"Privacy Policy"})),".")}}}]);