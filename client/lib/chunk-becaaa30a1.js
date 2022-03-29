"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[4597],{"./src/modals/BitPay/InvoiceExpired/index.js":(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var o,r,i,c,a,s=n("../../node_modules/react/index.js"),l=n("../../node_modules/react-redux/es/index.js"),p=n("../../node_modules/redux/es/redux.js"),u=n("./src/data/index.ts"),f=n("./src/providers/ModalEnhancer/index.tsx"),d=n("./node_modules/react-intl/lib/src/components/message.js"),y=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),m=n("../blockchain-info-components/src/index.js");function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var _=y.ZP.div(o||(o=_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  height: 435px;\n  padding: 48px 32px 0 32px;\n  box-sizing: border-box;\n  text-align: center;\n"]))),x=(0,y.ZP)(m.xv)(r||(r=_taggedTemplateLiteral(["\n  margin-bottom: 16px;\n  font-size: 26px;\n  b {\n    font-weight: 500;\n    color: ",";\n  }\n"])),(function(e){return e.theme.success})),b=(0,y.ZP)(m.xv)(i||(i=_taggedTemplateLiteral(["\n  margin-bottom: 24px;\n  font-size: 18px;\n"]))),g=(0,y.ZP)(m.Ee)(c||(c=_taggedTemplateLiteral(["\n  width: 20%;\n  margin-bottom: 24px;\n  margin-top: 14px;\n"]))),h=(0,y.ZP)(m.zx)(a||(a=_taggedTemplateLiteral(["\n  height: 50px;\n  font-size: 18px;\n  font-weight: 500;\n  margin-top: 50px;\n  padding: 16px 0;\n"])));const v=function BitPayInvoiceExpired(e){var t=e.close,n=e.position,o=e.total;return s.createElement(m.u_,{size:"small",position:n,total:o},s.createElement(m.xB,{onClose:t}),s.createElement(_,{"data-e2e":"bitpayInvoiceExpired"},s.createElement(g,{name:"close-error"}),s.createElement(x,{size:"20px",color:"blue900"},s.createElement(d.Z,{defaultMessage:"BitPay Invoice Expired",id:"modals.bitpayexpired.invoice_expired"})),s.createElement(b,null,s.createElement(d.Z,{defaultMessage:"An invoice is only valid for 15 minutes. Return to the merchant if you would like to resubmit a payment.",id:"modals.bitpayexpired.expired_msg"})),s.createElement(h,{nature:"primary",size:"20px",fullwidth:!0,onClick:t},s.createElement(d.Z,{defaultMessage:"OK",id:"modals.support.contact_support"}))))};function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var n,o=_getPrototypeOf(e);if(t){var r=_getPrototypeOf(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _getPrototypeOf(e){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(e)}var P=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(BitPayInvoiceExpired,e);var t=_createSuper(BitPayInvoiceExpired);function BitPayInvoiceExpired(){return _classCallCheck(this,BitPayInvoiceExpired),t.apply(this,arguments)}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(BitPayInvoiceExpired,[{key:"render",value:function render(){return s.createElement(v,this.props)}}]),BitPayInvoiceExpired}(s.PureComponent);const E=(0,p.compose)((0,f.Z)("BITPAY_INVOICE_EXPIRED_MODAL"),(0,l.connect)(void 0,(function mapDispatchToProps(e){return{modalActions:(0,p.bindActionCreators)(u.Nw.qk,e)}})))(P)}}]);