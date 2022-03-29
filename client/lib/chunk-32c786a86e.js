"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[9803],{"./src/modals/Transactions/EditDescription/index.js":(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var r,o,i=n("../../node_modules/react/index.js"),s=n("../../node_modules/react-redux/es/index.js"),c=n("../../node_modules/redux/es/redux.js"),a=n("../../node_modules/redux-form/es/formValueSelector.js"),l=n("./src/data/index.ts"),u=n("./src/providers/ModalEnhancer/index.tsx"),p=n("./node_modules/react-intl/lib/src/components/message.js"),f=n("../../node_modules/redux-form/es/Field.js"),d=n("../../node_modules/redux-form/es/reduxForm.js"),m=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),y=n("../blockchain-info-components/src/index.js"),_=n("./src/components/Form/index.ts");function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var b=m.ZP.div(r||(r=_taggedTemplateLiteral(["\n  font-weight: 400;\n  color: ",";\n  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,\n    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n"])),(function(e){return e.theme.grey700})),h=m.ZP.label(o||(o=_taggedTemplateLiteral(["\n  display: block;\n  font-size: 12px;\n  margin-bottom: 5px;\n"])));const g=(0,d.Z)({form:"editTransactionDescription"})((function EditTxDescription(e){var t=e.closeAll,n=e.handleSubmit,r=e.invalid,o=e.position,s=e.submitting;return i.createElement(y.u_,{size:"large",position:o},i.createElement(_.l0,{onSubmit:n},i.createElement(b,null,i.createElement(y.xB,{icon:"pencil",onClose:t},i.createElement(p.Z,{id:"modals.edittransactiondesc.title",defaultMessage:"Edit Transaction Description"})),i.createElement(y.fe,null,i.createElement(_.cw,null,i.createElement(_.xJ,{"data-e2e":"editTransactionDescriptionInput"},i.createElement(h,{htmlFor:"description"},i.createElement(p.Z,{id:"modals.edittransactiondesc.description",defaultMessage:"Description"})),i.createElement(f.Z,{name:"description",component:_.zC,maxLength:100})))),i.createElement(y.mz,{align:"right"},i.createElement(y.zx,{type:"submit",nature:"primary",capitalize:!0,disabled:s||r,"data-e2e":"saveTransactionDescriptionButton"},i.createElement(p.Z,{id:"modals.edittransactiondesc.button",defaultMessage:"Change Description"}))))))}));function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _extends(){return _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_extends.apply(this,arguments)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var n,r=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(e)}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(EditTxDescriptionContainer,e);var t=_createSuper(EditTxDescriptionContainer);function EditTxDescriptionContainer(){var e;_classCallCheck(this,EditTxDescriptionContainer);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return _defineProperty(_assertThisInitialized(e=t.call.apply(t,[this].concat(r))),"onSubmit",(function(){e.props.close(),e.props.handleConfirm(e.props.description)})),e}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(EditTxDescriptionContainer,[{key:"componentDidMount",value:function componentDidMount(){this.props.formActions.initialize("editTransactionDescription",{description:this.props.value})}},{key:"render",value:function render(){return i.createElement(g,_extends({},this.props,{onSubmit:this.onSubmit}))}}]),EditTxDescriptionContainer}(i.PureComponent);const v=(0,c.compose)((0,u.Z)("EDIT_TX_DESCRIPTION_MODAL"),(0,s.connect)((function mapStateToProps(e){return{description:(0,a.Z)("editTransactionDescription")(e,"description")}}),(function mapDispatchToProps(e){return{actions:(0,c.bindActionCreators)(l.Nw.qz.Xd,e),formActions:(0,c.bindActionCreators)(l.Nw.cr,e)}})))(x)}}]);