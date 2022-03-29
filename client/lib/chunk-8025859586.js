"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[8040],{"./src/modals/Mobile/MobileNumberAdd/index.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var n,o=r("../../node_modules/react/index.js"),i=r("../../node_modules/react-redux/es/index.js"),s=r("../../node_modules/redux/es/redux.js"),l=r("./src/data/index.ts"),a=r("./src/providers/ModalEnhancer/index.tsx"),c=r("../../node_modules/redux-form/es/formValueSelector.js"),u=r("../blockchain-wallet-v4/src/utils/index.ts"),d=(0,c.Z)("mobileNumberAdd"),m=(0,u.createDeepEqualSelector)([l.wl.vE.Xd.getSmsNumber,function(e){return d(e,"mobileNumber")}],(function(e,t){return{smsNumber:e.getOrElse(""),smsNumberNew:t}})),f=r("./node_modules/react-intl/lib/src/components/message.js"),p=r("../../node_modules/redux-form/es/Field.js"),b=r("../../node_modules/redux-form/es/reduxForm.js"),y=r("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),_=r("../blockchain-info-components/src/index.js"),h=r("./src/components/Form/index.ts"),v=r("./src/services/forms/index.js"),g=r("./src/services/styles/index.ts");var x=y.ZP.div(n||(n=function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding-top: 5px;\n\n  & > :last-child {\n    flex-basis: 200px;\n  }\n"])));const O=(0,b.Z)({form:"mobileNumberAdd"})((function MobileNumberAdd(e){var t=e.close,r=e.closeAll,n=e.handleSubmit,i=e.invalid,s=e.position,l=e.pristine,a=e.smsNumber,c=e.submitting,u=e.total;return o.createElement(_.u_,{size:"large",position:s,total:u},o.createElement(h.l0,{onSubmit:n},o.createElement(_.xB,{icon:"mobile",onClose:r},o.createElement(f.Z,{id:"modals.mobilenumberchange.addnumbertitle",defaultMessage:"Add Mobile Number"})),o.createElement(_.fe,null,o.createElement(_.xv,{size:"14px",weight:400},o.createElement(f.Z,{id:"modals.mobilenumberchange.explain",defaultMessage:"Use your mobile phone to receive a one-time-password after a login attempt."})),o.createElement(x,null,o.createElement(_.xv,{size:"14px",weight:400,style:(0,g.W0)("pr-5")},o.createElement(f.Z,{id:"modals.mobilenumberchange.mobile",defaultMessage:"Mobile number: "})),o.createElement(p.Z,{name:"mobileNumber",validate:[v.MM,v.C1],component:h.ZF,defaultValue:a,errorBottom:!0}))),o.createElement(_.mz,{align:"spaced"},o.createElement(_.rU,{size:"13px",weight:500,onClick:t},o.createElement(f.Z,{id:"buttons.cancel",defaultMessage:"Cancel"})),o.createElement(_.zx,{type:"submit",nature:"primary",capitalize:!0,disabled:c||i||l},o.createElement(f.Z,{id:"modals.mobilenumberchange.update",defaultMessage:"Update"})))))}));function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _extends(){return _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_extends.apply(this,arguments)}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,n=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(e)}var E=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(MobileNumberAddContainer,e);var t=_createSuper(MobileNumberAddContainer);function MobileNumberAddContainer(e){var r;return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,MobileNumberAddContainer),(r=t.call(this,e)).onSubmit=r.onSubmit.bind(_assertThisInitialized(r)),r}return function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(MobileNumberAddContainer,[{key:"onSubmit",value:function onSubmit(){var e=this.props.smsNumberNew;this.props.settingsActions.updateMobile(e),this.props.modalActions.closeModal(),this.props.modalActions.showModal("MOBILE_NUMBER_VERIFY_MODAL",{mobileNumber:e})}},{key:"render",value:function render(){var e=this.props,t=e.countryCode,r=e.smsNumber;return o.createElement(O,_extends({},this.props,{smsNumber:r,countryCode:t,onSubmit:this.onSubmit}))}}]),MobileNumberAddContainer}(o.PureComponent);const w=(0,s.compose)((0,a.Z)("MOBILE_NUMBER_ADD_MODAL"),(0,i.connect)((function mapStateToProps(e){return m(e)}),(function mapDispatchToProps(e){return{modalActions:(0,s.bindActionCreators)(l.Nw.qk,e),settingsActions:(0,s.bindActionCreators)(l.Nw.qz.Xd,e)}})))(E)}}]);