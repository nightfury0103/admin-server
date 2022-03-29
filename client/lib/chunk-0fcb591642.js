"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[7037],{"./src/components/QRCode/Wrapper/index.js":(e,t,n)=>{n.d(t,{Z:()=>p});var r,o=n("../../node_modules/react/index.js"),a=n("../../node_modules/prop-types/index.js"),i=n.n(a),s=n("../../node_modules/qrcode.react/lib/index.js"),c=n.n(s);var l=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div(r||(r=function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  canvas {\n    padding: 12px;\n    border: 1px solid ",";\n    border-radius: 6px;\n    background-color: white;\n  }\n"])),(function(e){return e.theme.grey000})),u=function QRCodeWrapper(e){var t=e.size,n=e.value;return o.createElement(l,null,o.createElement(c(),{value:n,size:t}))};u.propTypes={size:i().number.isRequired,value:i().string.isRequired};const p=u},"./src/modals/Btc/ShowBtcPrivateKey/index.js":(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var r,o,a,i,s,c,l=n("../../node_modules/react/index.js"),u=n("../../node_modules/react-redux/es/index.js"),p=n("../../node_modules/redux/es/redux.js"),d=n("./src/data/index.ts"),f=n("./src/providers/ModalEnhancer/index.tsx"),m=n("./node_modules/react-intl/lib/src/components/message.js"),y=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),h=n("../blockchain-wallet-v4/src/index.ts"),v=n("../blockchain-info-components/src/index.js"),b=n("./src/components/Display/CoinDisplay/index.tsx"),g=n("./src/components/QRCode/Wrapper/index.js"),_=n("./src/services/styles/index.ts"),w=["close","onContinue","position","step","total"];function _objectWithoutProperties(e,t){if(null==e)return{};var n,r,o=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var x=y.ZP.div(r||(r=_taggedTemplateLiteral(["\n  position: relative;\n  width: 60%;\n  height: auto;\n  background-color: ",";\n"])),(function(e){return e.theme.white})),P=y.ZP.div(o||(o=_taggedTemplateLiteral(["\n  min-width: 0;\n  > div {\n    word-break: break-word;\n  }\n  > div:not(:first-child) {\n    margin-top: 10px;\n  }\n"]))),E=y.ZP.div(a||(a=_taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n"]))),C=(0,y.ZP)(v.xv)(i||(i=_taggedTemplateLiteral(["\n  white-space: nowrap;\n"]))),O=(0,y.ZP)(v.xv)(s||(s=_taggedTemplateLiteral(["\n  min-width: 0;\n  word-wrap: break-word;\n"]))),j=(0,y.ZP)(v.lq)(c||(c=_taggedTemplateLiteral(["\n  flex: 1;\n"]))),S=function FirstStep(){return l.createElement("div",null,l.createElement(v.xv,{size:"13px",color:"error",weight:500,uppercase:!0},l.createElement(m.Z,{id:"modals.showbtcpriv.warning",defaultMessage:"Warning"})),l.createElement(v.xv,{size:"14px",style:(0,_.W0)("mt-10"),weight:400},l.createElement(m.Z,{id:"modals.showbtcpriv.warning.message",defaultMessage:"Don't share your private key with anyone. This may result in a loss of funds."})))},k=function SecondStep(e){var t=e.addr,n=e.balance,r=e.format,o=e.formats,a=e.onChangeFormat,i=e.priv;return l.createElement("div",{style:(0,_.fU)("row")},l.createElement("div",{style:(0,_.W0)("mr-25")},l.createElement(g.Z,{value:i,size:120})),l.createElement(P,null,l.createElement(E,null,l.createElement(C,{size:"14px",weight:500},l.createElement(m.Z,{id:"copy.balance",defaultMessage:"Balance"})),":  ",l.createElement(b.Z,{coin:"BTC",size:"14px"},n)),l.createElement(E,null,l.createElement(C,{size:"14px",weight:500},l.createElement(m.Z,{id:"copy.address",defaultMessage:"Address"})),":  ",l.createElement(v.xv,{size:"14px",weight:400,"data-e2e":"btcAddressValue"},t)),l.createElement(E,null,l.createElement(C,{size:"14px",weight:500},l.createElement(m.Z,{id:"copy.private_key",defaultMessage:"Private Key"})),":  ",h.P6.btc.formatPrivateKeyString(i,r,t).fold((function(e){return l.createElement(v.xv,{size:"14px",weight:400,color:"error"},e.message)}),(function(e){return l.createElement(O,{size:"14px",weight:400,"data-e2e":"btcPrivateKeyValue"},e)}))),l.createElement(E,null,l.createElement(C,{size:"14px",weight:500},l.createElement(m.Z,{id:"modals.showbtcpriv.priv_key_format",defaultMessage:"Private Key Format"})),":  ",l.createElement(x,{"data-e2e":"dropdownSelect"},l.createElement(j,{label:"Export Format",value:r,searchEnabled:!1,onChange:a,elements:o})))))};const z=function ShowBtcPrivateKeyTemplate(e){var t=e.close,n=e.onContinue,r=e.position,o=e.step,a=e.total,i=_objectWithoutProperties(e,w);return l.createElement(v.u_,{size:"large",position:r,total:a},l.createElement(v.xB,{icon:"lock",closeButton:!1},l.createElement(m.Z,{id:"copy.private_key",defaultMessage:"Private Key"})),l.createElement(v.fe,null,0===o?l.createElement(S,null):l.createElement(k,i)),l.createElement(v.mz,{align:"right"},l.createElement(v.xv,{cursor:"pointer",size:"small",weight:400,style:(0,_.W0)("mr-15"),onClick:t,"data-e2e":"btcPrivateKeyCloseButton"},l.createElement(m.Z,{id:"buttons.close",defaultMessage:"Close"})),0===o&&l.createElement(v.zx,{nature:"primary",onClick:n,"data-e2e":"btcPrivateKeyContinueButton"},l.createElement(m.Z,{id:"buttons.continue",defaultMessage:"Continue"}))))};function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _extends(){return _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_extends.apply(this,arguments)}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var n,r=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(e)}var B=[{group:"",items:[{text:"WIF",value:"wif"},{text:"Base-58",value:"base58"}]}],T=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(ShowBtcPrivateKeyContainer,e);var t=_createSuper(ShowBtcPrivateKeyContainer);function ShowBtcPrivateKeyContainer(e){var n;return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ShowBtcPrivateKeyContainer),(n=t.call(this,e)).state={format:"wif"},n.handleChangeFormat=n.handleChangeFormat.bind(_assertThisInitialized(n)),n}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(ShowBtcPrivateKeyContainer,[{key:"componentWillUnmount",value:function componentWillUnmount(){this.props.actions.clearShownBtcPrivateKey()}},{key:"handleChangeFormat",value:function handleChangeFormat(e){this.setState({format:e})}},{key:"render",value:function render(){var e=this,t=null==this.props.priv?0:1;return l.createElement(z,_extends({},this.props,{step:t,format:this.state.format,formats:B,onContinue:function nextStep(){return e.props.actions.showBtcPrivateKey(e.props.addr)},onChangeFormat:this.handleChangeFormat}))}}]),ShowBtcPrivateKeyContainer}(l.Component);const Z=(0,p.compose)((0,f.Z)("SHOW_BTC_PRIVATE_KEY_MODAL"),(0,u.connect)((function mapStateToProps(e){return{priv:e.securityCenter.shownBtcPrivKey}}),(function mapDispatchToProps(e){return{actions:(0,p.bindActionCreators)(d.Nw.qz.Xd,e)}})))(T)}}]);