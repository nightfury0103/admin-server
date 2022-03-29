"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[5468],{"./src/modals/Generic/PromptInput/index.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>P});var n,o=r("../../node_modules/react/index.js"),a=r("../../node_modules/react-redux/es/index.js"),i=r("../../node_modules/redux/es/redux.js"),s=r("../../node_modules/redux-form/es/formValueSelector.js"),u=r("./src/data/index.ts"),l=r("./src/providers/ModalEnhancer/index.tsx"),c=r("./node_modules/react-intl/lib/src/components/message.js"),p=r("../../node_modules/redux-form/es/Field.js"),f=r("../../node_modules/redux-form/es/reduxForm.js"),m=r("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),d=r("../blockchain-info-components/src/index.js"),y=r("./src/components/Form/index.ts"),_=r("./src/services/forms/index.js");function _toConsumableArray(e){return function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}(e)||function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function _unsupportedIterableToArray(e,t){if(!e)return;if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)}(e)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var b=m.ZP.div(n||(n=function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  font-weight: 400;\n  color: ",";\n  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,\n    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n"])),(function(e){return e.theme.grey700}));const h=(0,f.Z)({form:"promptInputModal"})((function PromptTemplate(e){var t=e.closeAll,r=e.handleSubmit,n=e.invalid,a=e.maxLength,i=e.position,s=e.pristine,u=e.secret,l=e.submitting,f=e.title,m=e.total,h=e.validations;return o.createElement(d.u_,{size:"large",position:i,total:m},o.createElement(y.l0,{onSubmit:r},o.createElement(b,null,o.createElement(d.xB,{onClose:t},f),o.createElement(d.fe,null,o.createElement(y.cw,null,o.createElement(y.xJ,{"data-e2e":"inputModalInputField"},o.createElement(p.Z,{name:"value",validate:[_.C1].concat(_toConsumableArray(h)),component:u?y.MY:y.zC,maxLength:a})))),o.createElement(d.mz,{align:"right"},o.createElement(d.zx,{type:"submit",nature:"primary",capitalize:!0,disabled:l||n||s,"data-e2e":"inputModalSubmitButton"},o.createElement(c.Z,{id:"modals.prompt.button",defaultMessage:"Submit"}))))))}));function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _extends(){return _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_extends.apply(this,arguments)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,n=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(e)}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(PromptContainer,e);var t=_createSuper(PromptContainer);function PromptContainer(){var e;_classCallCheck(this,PromptContainer);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return _defineProperty(_assertThisInitialized(e=t.call.apply(t,[this].concat(n))),"onSubmit",(function(){e.props.actions.submitPromptInput(e.props.value)})),e}return function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(PromptContainer,[{key:"render",value:function render(){return o.createElement(h,_extends({},this.props,{maxLength:this.props.maxLength,initialValues:{value:this.props.initial},onSubmit:this.onSubmit}))}}]),PromptContainer}(o.PureComponent);const P=(0,i.compose)((0,l.Z)("PROMPT_INPUT_MODAL"),(0,a.connect)((function mapStateToProps(e){return{value:(0,s.Z)("promptInputModal")(e,"value")}}),(function mapDispatchToProps(e){return{actions:(0,i.bindActionCreators)(u.Nw.gU,e)}})))(v)}}]);