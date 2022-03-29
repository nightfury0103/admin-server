"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[897],{"./src/modals/Onboarding/UpgradeForAirdrop/index.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>M});var n,o,a,i,l,c,p,s,d,u,f,g=r("../../node_modules/react/index.js"),m=r("./node_modules/react-intl/lib/src/components/message.js"),y=r("../../node_modules/react-redux/es/index.js"),_=r("../../node_modules/redux/es/redux.js"),b=r("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),h=r("../blockchain-info-components/src/index.js"),x=r("./src/data/index.ts"),P=r("./src/providers/ModalEnhancer/index.tsx");function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,n=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _getPrototypeOf(e){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(e)}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var v=(0,b.ZP)(h.xB)(n||(n=_taggedTemplateLiteral(["\n  position: absolute;\n  border: none;\n  top: 3px;\n  right: -6px;\n  > span {\n    &:hover {\n      cursor: pointer;\n    }\n  }\n  z-index: 99;\n"]))),w=(0,b.ZP)(h.fe)(o||(o=_taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  padding: 0;\n"]))),O=b.ZP.div(a||(a=_taggedTemplateLiteral(["\n  width: 100%;\n  height: 150px;\n  background-image: url('/img/airdrop-welcome.png');\n  /* stylelint-disable */\n  background-image: -webkit-image-set(\n    url('/img/airdrop-welcome.png') 1x,\n    url('/img/airdrop-welcome@2x.png') 2x\n  );\n  /* stylelint-enable */\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 8px 8px 0 0;\n  box-sizing: border-box;\n"]))),k=b.ZP.div(i||(i=_taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  margin-top: -100px;\n  padding: 0;\n"]))),E=(0,b.ZP)(h.JO)(l||(l=_taggedTemplateLiteral(["\n  margin-bottom: 30px;\n"]))),A=(0,b.ZP)(h.xv)(c||(c=_taggedTemplateLiteral(["\n  width: 100%;\n  font-size: 24px;\n  font-weight: 600;\n  color: ",";\n  padding: 0 25px;\n"])),(function(e){return e.theme.grey800})),C=b.ZP.div(p||(p=_taggedTemplateLiteral(["\n  padding: 25px 34px;\n"]))),j=(0,b.ZP)(h.xv)(s||(s=_taggedTemplateLiteral(["\n  font-weight: 500;\n  line-height: 1.6;\n  max-width: 400px;\n  color: ",";\n"])),(function(e){return e.theme.grey600})),T=(0,b.ZP)(h.zx)(d||(d=_taggedTemplateLiteral(["\n  height: 46px;\n  font-weight: 600;\n  margin: 38px auto 0;\n  width: 285px;\n  border-radius: 8px;\n  background-color: ",";\n  border: none;\n  color: white;\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.green600}),(function(e){return e.theme.green700})),Z=(0,b.ZP)(h.Qt)(u||(u=_taggedTemplateLiteral(["\n  margin: 22px 10px 12px;\n"]))),L=(0,b.ZP)(h.rU)(f||(f=_taggedTemplateLiteral(["\n  display: inline-flex;\n"]))),z=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(UpgradeForAirdrop,e);var t=_createSuper(UpgradeForAirdrop);function UpgradeForAirdrop(){return _classCallCheck(this,UpgradeForAirdrop),t.apply(this,arguments)}return function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(UpgradeForAirdrop,[{key:"componentDidMount",value:function componentDidMount(){this.props.preferencesActions.hideUpgradeForAirdropModal()}},{key:"render",value:function render(){var e=this.props,t=e.actions,r=e.campaign,n=e.close,o=e.position,a=e.total;return g.createElement(h.u_,{size:"small",position:o,total:a,dataE2e:"infoModalUpgradeForAirdrop"},g.createElement(v,{onClose:n}),g.createElement(w,null,g.createElement(O,null),g.createElement(k,null,g.createElement(E,{name:"parachute",color:"green600",size:"40px"}),g.createElement(A,null,g.createElement(m.Z,{id:"modals.upgradeforairdrop.latestairdrop1",defaultMessage:"Our Latest Airdrop is Here!"}),g.createElement("br",null),g.createElement(m.Z,{id:"modals.upgradeforairdrop.unlock",defaultMessage:"Unlock Access Today."}))),g.createElement(C,null,g.createElement(j,{size:"16px"},g.createElement(m.Z,{id:"modals.upgradeforairdrop.goldprofilelevel1",defaultMessage:"Upgrade your profile to Gold Level to secure your spot in our next airdrop with Blockstack and get free Stacks (STX)."})),g.createElement(T,{onClick:function onClick(){return t.upgradeForAirdropSubmitClicked(r)},size:"16px"},g.createElement(m.Z,{defaultMessage:"Complete My Profile Now",id:"modals.upgradeforairdrop.completeprofile"})),g.createElement(Z,{inline:!0},g.createElement(h.xv,{size:"12px",color:"grey600"},g.createElement(m.Z,{id:"modals.upgradeforairdrop.regulations",defaultMessage:"*For regulatory reasons, USA, Canada and Japan nationals can't participate in the airdrop."})),g.createElement(L,{href:"/support/hc/en-us/articles/360035793932-How-to-participate-in-the-Blockstack-Airdrop",size:"12px",target:"_blank",rel:"noopener noreferrer"},g.createElement(m.Z,{id:"buttons.learn_more",defaultMessage:"Learn More"}))))))}}]),UpgradeForAirdrop}(g.PureComponent);z.defaultProps={campaign:"BLOCKSTACK"};const M=(0,_.compose)((0,y.connect)(void 0,(function mapDispatchToProps(e){return{actions:(0,_.bindActionCreators)(x.Nw.wx.onboarding,e),preferencesActions:(0,_.bindActionCreators)(x.Nw.cb,e)}})),(0,P.Z)("UPGRADE_FOR_AIRDROP_MODAL"))(z)}}]);