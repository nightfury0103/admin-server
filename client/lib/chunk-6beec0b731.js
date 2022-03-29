"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[9557],{"./src/components/Clipboard/CopyClipboard/index.js":(e,t,n)=>{n.d(t,{Z:()=>x});var o,r,i,c=n("../../node_modules/react/index.js"),s=n("../../node_modules/react-redux/es/index.js"),a=n("../../node_modules/prop-types/index.js"),l=n.n(a),u=n("../../node_modules/redux/es/redux.js"),p=n("./src/data/index.ts"),d=n("./src/services/alerts/index.ts"),f=n("../../node_modules/react-copy-to-clipboard/lib/index.js"),y=n.n(f),m=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),b=n("../blockchain-info-components/src/index.js");function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var _=m.ZP.div(o||(o=_taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n"]))),h=m.ZP.span(r||(r=_taggedTemplateLiteral(["\n  display: block;\n  width: 100%;\n  height: 36px;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 36px;\n  padding-left: 10px;\n  align-items: center;\n  white-space: nowrap;\n  overflow: scroll;\n  padding-right: 10px;\n  color: ",";\n  border: 1px solid ",";\n  border-right: none;\n  border-radius: 4px 0 0 4px;\n  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,\n    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n"])),(function(e){return e.theme.grey700}),(function(e){return e.theme.grey100})),v=(0,m.ZP)(b.hU)(i||(i=_taggedTemplateLiteral(["\n  width: 50px;\n  min-width: 0;\n  height: 38px;\n  border-radius: 0 4px 4px 0;\n  border: 1px solid ",";\n  > span {\n    margin-top: ",";\n    margin-right: 0 !important;\n    font-size: ",";\n    color: ",";\n  }\n"])),(function(e){return e.theme.grey100}),(function(e){return e.active?"-2px":"-5px;"}),(function(e){return e.active?"18px":"20px"}),(function(e){return e.active?e.theme.success:e.theme.grey700})),C=function CopyClipboard(e){var t=e.active,n=e.address,o=e.handleClick;return c.createElement(_,null,c.createElement(h,{"data-e2e":"copyClipboardData"},n),c.createElement(y(),{text:n,onCopy:o},c.createElement(v,{active:t,name:t?"check":"copy-clipboard",color:"grey100","data-e2e":"copyClipboardCopyButton"})))};C.propTypes={active:l().bool.isRequired,address:l().string.isRequired,handleClick:l().func.isRequired};const g=C;function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var n,o=_getPrototypeOf(e);if(t){var r=_getPrototypeOf(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(e)}var O=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(CopyClipboardContainer,e);var t=_createSuper(CopyClipboardContainer);function CopyClipboardContainer(e){var n;return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,CopyClipboardContainer),(n=t.call(this,e)).timeout=void 0,n.state={active:!1},n.handleClick=n.handleClick.bind(_assertThisInitialized(n)),n}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(CopyClipboardContainer,[{key:"componentWillUnmount",value:function componentWillUnmount(){clearTimeout(this.timeout)}},{key:"handleClick",value:function handleClick(){var e=this,t=this.props,n=t.alertActions,o=t.coin;this.setState({active:!0}),this.timeout=setTimeout((function(){e.setState({active:!1})}),2e3),o?n.displaySuccess(d.Tk,{coinName:window.coins[o].name}):n.displaySuccess(d.Rf)}},{key:"render",value:function render(){return c.createElement(g,{active:this.state.active,address:this.props.address,handleClick:this.handleClick,"data-e2e":this.props["data-e2e"]})}}]),CopyClipboardContainer}(c.PureComponent);O.propTypes={address:l().string.isRequired};const x=(0,s.connect)(void 0,(function mapDispatchToProps(e){return{alertActions:(0,u.bindActionCreators)(p.Nw.$u,e)}}))(O)},"./src/components/QRCode/Wrapper/index.js":(e,t,n)=>{n.d(t,{Z:()=>p});var o,r=n("../../node_modules/react/index.js"),i=n("../../node_modules/prop-types/index.js"),c=n.n(i),s=n("../../node_modules/qrcode.react/lib/index.js"),a=n.n(s);var l=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div(o||(o=function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  canvas {\n    padding: 12px;\n    border: 1px solid ",";\n    border-radius: 6px;\n    background-color: white;\n  }\n"])),(function(e){return e.theme.grey000})),u=function QRCodeWrapper(e){var t=e.size,n=e.value;return r.createElement(l,null,r.createElement(a(),{value:n,size:t}))};u.propTypes={size:c().number.isRequired,value:c().string.isRequired};const p=u},"./src/modals/QRCode/index.js":(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var o,r=n("../../node_modules/react/index.js"),i=n("../../node_modules/react-redux/es/index.js"),c=n("../../node_modules/redux/es/redux.js"),s=n("./src/data/index.ts"),a=n("./src/providers/ModalEnhancer/index.tsx"),l=n("./node_modules/react-intl/lib/src/components/message.js"),u=n("../../node_modules/prop-types/index.js"),p=n.n(u),d=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),f=n("../blockchain-info-components/src/index.js"),y=n("./src/components/Clipboard/CopyClipboard/index.js"),m=n("./src/components/QRCode/Wrapper/index.js"),b=["close","closeAll","position","total"];function _objectWithoutProperties(e,t){if(null==e)return{};var n,o,r=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _=d.ZP.div(o||(o=function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  width: 100%;\n  padding: 30px 0;\n"]))),h=function QRCode(e){var t=e.close,n=e.closeAll,o=e.position,i=e.total,c=_objectWithoutProperties(e,b).value,s=c.amount,a=c.message,u=c.receiveAddress,p="bitcoin:".concat(u),d=s>0?s:null;return(d||a)&&(p+="?"),d&&!a&&(p+="amount=".concat(d)),!d&&a&&(p+="message=".concat(a)),d&&a&&(p+="amount=".concat(d,"&message=").concat(a)),r.createElement(f.u_,{size:"large",position:o,total:i},r.createElement(f.xB,{icon:"request",onClose:n},r.createElement(l.Z,{id:"modals.qrcode.title",defaultMessage:"Request"})),r.createElement(f.fe,null,r.createElement(f.xv,{size:"14px",weight:500},r.createElement(l.Z,{id:"modals.qrcode.scan",defaultMessage:"Scan QR Code"}),r.createElement(f.G0,{id:"qrcode.tooltip"},r.createElement(f.nw,{name:"info"}))),r.createElement(_,null,r.createElement(m.Z,{value:p,size:256})),r.createElement(y.Z,{address:p})),r.createElement(f.mz,null,r.createElement(f.rU,{onClick:t,size:"13px",weight:500,"data-e2e":"qrModalGoBack"},r.createElement(l.Z,{id:"buttons.go_back",defaultMessage:"Go Back"}))))};h.propTypes={value:p().object.isRequired};const v=h;function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var n,o=_getPrototypeOf(e);if(t){var r=_getPrototypeOf(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _getPrototypeOf(e){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(e)}var C=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(QRCodeContainer,e);var t=_createSuper(QRCodeContainer);function QRCodeContainer(){return _classCallCheck(this,QRCodeContainer),t.apply(this,arguments)}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(QRCodeContainer,[{key:"render",value:function render(){return r.createElement(v,this.props)}}]),QRCodeContainer}(r.PureComponent);const g=(0,c.compose)((0,a.Z)("QR_CODE_MODAL"),(0,i.connect)(void 0,(function mapDispatchToProps(e){return{modalActions:(0,c.bindActionCreators)(s.Nw.qk,e)}})))(C)}}]);