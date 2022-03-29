"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[9417],{"./src/modals/Addresses/UpgradeAddressLabels/index.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var o=r("../../node_modules/react/index.js"),n=r("../../node_modules/prop-types/index.js"),s=r.n(n),a=r("./src/providers/ModalEnhancer/index.tsx"),i=r("./node_modules/react-intl/lib/src/components/message.js"),u=r("../../node_modules/redux-form/es/reduxForm.js"),c=r("../blockchain-info-components/src/index.js"),l=r("./src/components/Form/index.ts"),p=function UpgradeAddressLabels(e){var t=e.duration,r=e.position,n=e.total;return o.createElement(c.u_,{size:"large",position:r,total:n},o.createElement(l.l0,null,o.createElement(c.fe,null,o.createElement(c.xv,{size:"14px",weight:400},o.createElement(i.Z,{id:"modals.upgradeaddresslabels.explain",defaultMessage:"Upgrading your wallet. This should take around {duration} seconds.",values:{duration:t}})))))};p.propTypes={payload:s().shape({duration:s().number.isRequired})};const f=(0,u.Z)({form:"upgradeAddressLabels"})(p);function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,o=_getPrototypeOf(e);if(t){var n=_getPrototypeOf(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _getPrototypeOf(e){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(e)}var d=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(UpgradeAddressLabelsContainer,e);var t=_createSuper(UpgradeAddressLabelsContainer);function UpgradeAddressLabelsContainer(){return _classCallCheck(this,UpgradeAddressLabelsContainer),t.apply(this,arguments)}return function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(UpgradeAddressLabelsContainer,[{key:"render",value:function render(){return o.createElement(f,this.props)}}]),UpgradeAddressLabelsContainer}(o.PureComponent);d.propTypes={duration:s().number};const y=(0,a.Z)("UPGRADE_ADDRESS_LABELS_MODAL")(d)}}]);