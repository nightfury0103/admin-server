"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[6766],{"./src/modals/Onboarding/KycTierUpgrade/index.js":(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var r=n("../../node_modules/react/index.js"),o=n("./node_modules/react-intl/lib/src/components/message.js"),a=n("../../node_modules/react-redux/es/index.js"),i=n("../../node_modules/ramda/es/path.js"),c=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),l=n("../blockchain-info-components/src/index.js"),s=n("../../node_modules/ramda/es/prop.js"),u={1:{level:"SILVER",limit:"ANNUAL",requirements:[{complete:function complete(e){return 1===e.emailVerified},name:"EMAIL"},{complete:function complete(e){var t=e.userData;return(0,s.Z)("firstName",t)&&(0,s.Z)("lastName",t)},name:"NAME"},{complete:function complete(e){var t=e.userData;return(0,s.Z)("dob",t)},name:"DOB"},{complete:function complete(e){var t=e.userData;return(0,i.Z)(["address","city"],t)&&(0,i.Z)(["address","country"],t)&&(0,i.Z)(["address","line1"],t)},name:"ADDRESS"}],time:"3"},2:{level:"GOLD",limit:"DAILY",requirements:[{complete:function complete(e){return"verified"===e.userTiers[1].state},name:"TIER1"},{complete:function complete(e){var t=e.userData;return"NONE"!==(0,s.Z)("kycState",t)},name:"GOVID"},{complete:function complete(e){var t=e.userData;return"NONE"!==(0,s.Z)("kycState",t)},name:"SELFIE"}],time:"10"}},p={GOLD:r.createElement(o.Z,{id:"components.identityverification.tiercard.gold",defaultMessage:"Gold Level"}),SILVER:r.createElement(o.Z,{id:"components.identityverification.tiercard.silver",defaultMessage:"Silver Level"})},d=(o.Z,o.Z,l.xv,o.Z,l.xv,o.Z,l.xv,o.Z,l.xv,o.Z,l.xv,o.Z,l.xv,o.Z,l.xv,o.Z,l.xv,o.Z,l.xv,o.Z,o.Z,o.Z,n("./src/data/index.ts")),f=n("./src/providers/ModalEnhancer/index.tsx"),m=n("../../node_modules/ramda/es/propOr.js"),y=n("../blockchain-wallet-v4/src/exchange/utils.ts");function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}var g,_,v,x,b;function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var n,r=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _getPrototypeOf(e){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(e)}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var h=c.ZP.div(g||(g=_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  height: 435px;\n  padding: 48px 32px 0 32px;\n  box-sizing: border-box;\n  text-align: center;\n"]))),w=(0,c.ZP)(l.xv)(_||(_=_taggedTemplateLiteral(["\n  margin-bottom: 8px;\n  font-size: 20px;\n  b {\n    font-weight: 500;\n    color: ",";\n  }\n"])),(function(e){return e.theme.success})),O=(0,c.ZP)(l.xv)(v||(v=_taggedTemplateLiteral(["\n  margin-bottom: 16px;\n  font-size: 14px;\n"]))),Z=(0,c.ZP)(l.Ee)(x||(x=_taggedTemplateLiteral(["\n  width: 100%;\n  align-self: flex-end;\n"]))),E=(0,c.ZP)(l.zx).attrs({fullwidth:!0,nature:"primary"})(b||(b=_taggedTemplateLiteral(["\n  height: auto;\n  font-size: 17px;\n  font-weight: 500;\n  padding: 15px 0;\n  margin-bottom: 32px;\n"]))),P=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(KycTierUpgrade,e);var t=_createSuper(KycTierUpgrade);function KycTierUpgrade(){return _classCallCheck(this,KycTierUpgrade),t.apply(this,arguments)}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(KycTierUpgrade,[{key:"componentDidMount",value:function componentDidMount(){this.props.dontShowAgain()}},{key:"render",value:function render(){var e=this.props,t=e.amountLeft,n=e.nextTier,a=e.nextTierAmount,c=e.position,s=e.total,d=e.upgrade;return r.createElement(l.u_,{size:"small",position:c,total:s},r.createElement(h,{"data-e2e":"swapGetStarted"},r.createElement(w,{size:"20px"},r.createElement(o.Z,{defaultMessage:"Heads up! You have <b>{amount}</b> left to Swap",id:"modals.swap_upgrade.heads_up",values:{amount:t}})),r.createElement(O,null,r.createElement(o.Z,{defaultMessage:"Upgrade to {nextLevel} and Swap up to {amount} every day.",id:"modals.swap_upgrade.amount_after_upgrade",values:{amount:a,nextLevel:p[(0,i.Z)([n,"level"],u)]}})),r.createElement(E,{nature:"primary",size:"20px",fullwidth:!0,onClick:d},r.createElement(o.Z,{defaultMessage:"Upgrade Now",id:"modals.swap_upgrade.upgrade_now"})),r.createElement(Z,{name:"identity-verification"})))}}]),KycTierUpgrade}(r.PureComponent),T=(0,a.connect)(((e,{currentTier:t,nextTier:n})=>{const r=d.wl.qz.N5.getTiers(e).map((0,i.Z)([n-1,"limits"])),o=r.map((0,m.Z)("USD","currency")).getOrElse("USD"),a=d.wl.qz.N5.getUserData(e).map((e=>e.limits[t-1].annual)).getOrElse("0"),c=r.map((0,m.Z)(0,"daily")).getOrElse(0);return{amountLeft:(0,y.LE)({unit:o,value:a}),nextTierAmount:(0,y.LE)({unit:o,value:c})}}),(function mapDispatchToProps(e,t){var n=t.nextTier;return{dontShowAgain:function dontShowAgain(){return e(d.Nw.cb.hideSwapUpgradeModal())},upgrade:function upgrade(){e(d.Nw.qk.closeModal()),e(d.Nw.wx.identityVerification.verifyIdentity({origin:"Onboarding",tier:n}))}}}))(P);const S=(0,f.Z)("KYC_TIER_UPGRADE_MODAL")(T)}}]);