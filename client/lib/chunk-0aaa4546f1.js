"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[5940],{"./src/modals/Generic/Confirm/index.js":(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var r,o,a,s=n("../../node_modules/react/index.js"),i=n("../../node_modules/react-redux/es/index.js"),l=n("../../node_modules/redux/es/redux.js"),c=n("./src/data/index.ts"),u=n("./src/providers/ModalEnhancer/index.tsx"),d=n("../../node_modules/redux-form/es/reduxForm.js"),f=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),m=n("../blockchain-info-components/src/index.js"),p=n("./src/components/Form/index.ts"),y=n("./node_modules/react-intl/lib/src/components/message.js"),_=n("../../node_modules/ramda/es/prop.js"),g=n("./src/services/alerts/index.ts");function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var h=f.ZP.div(r||(r=_taggedTemplateLiteral(["\n  font-weight: 400;\n  color: ",";\n  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,\n    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n"])),(function(e){return e.theme.grey700})),b=f.ZP.span(o||(o=_taggedTemplateLiteral(["\n  margin-right: 20px;\n  font-size: 14px;\n  cursor: pointer;\n"]))),v=(0,f.ZP)(m.Ee)(a||(a=_taggedTemplateLiteral(["\n  display: block;\n  margin: 0px auto 20px auto;\n"])));const w=(0,d.Z)({form:"confirmModal"})((function ConfirmTemplate(e){var t=e.cancel,n=e.close,r=e.confirm,o=e.handleSubmit,a=e.hideCancel,i=e.image,l=e.message,c=e.messageValues,u=e.nature,d=e.position,f=e.title,w=e.total;return s.createElement(m.u_,{size:"medium",position:d,total:w},s.createElement(p.l0,{onSubmit:o},s.createElement(h,null,s.createElement(m.xB,{onClose:n},function selectTitle(e){switch(e){case g.t_:return s.createElement(y.Z,{id:"modals.confirm.title/bitpay",defaultMessage:"You've Entered a BitPay URL"});case g.j5:return s.createElement(y.Z,{id:"modals.confirm.title.verify_identity",defaultMessage:"Verify Your Identity"});case g.pd:return s.createElement(y.Z,{id:"modals.confirm.title.phone_call",defaultMessage:"Trade In Progress"});case g.QS:return s.createElement(y.Z,{id:"modals.confirm.title.lockbox",defaultMessage:"Unpair Device"});case g.ak:return s.createElement(y.Z,{id:"modals.confirm.title.archive_address",defaultMessage:"Archive Vulnerable Address"});case g.dJ:return s.createElement(y.Z,{id:"modals.confirm.title.lockbox_software_download",defaultMessage:"Lockbox Software Download"});default:return s.createElement(y.Z,{id:"modals.confirm.title",defaultMessage:"Confirm"})}}(f)),s.createElement(m.fe,null,i&&s.createElement(v,{name:i}),s.createElement(m.xv,{size:"16px",weight:400},function selectMessage(e,t){switch(e){case g.o4:return s.createElement(y.Z,{id:"modals.confirm.message.bitpay",defaultMessage:"Click OK to autopopulate your BitPay invoice payment information."});case g.qb:return s.createElement(y.Z,{id:"modals.confirm.message.verify_identity",defaultMessage:"Verifying your identity will raise your buy and sell limits, allowing you to trade higher amounts. It will also speed up waiting times for trades. It only takes a few minutes to go through the process."});case g.wh:return s.createElement(s.Fragment,null,s.createElement(m.xv,{size:"18px"},s.createElement(y.Z,{id:"modals.confirm.message.phone_call",defaultMessage:"Would you like to speed up the process?"})),s.createElement(m.xv,{size:"14px",weight:400},s.createElement("br",null),s.createElement(y.Z,{id:"modals.confirm.message.phone_call_1",defaultMessage:"You can receive your funds in only 3 business days by a quick and painless phone call to verify your identity."}),s.createElement("br",null),s.createElement("br",null),s.createElement(y.Z,{id:"modals.confirm.message.phone_call_2",defaultMessage:"If this sounds good to you, you will receive a call within the next 24 hours to <b>{smsNumber}</b>.",values:t})));case g.J8:return s.createElement(y.Z,{id:"modals.confirm.message.lockbox",defaultMessage:"Are you sure you want to unpair your device? You will lose all balance, transaction, and account data."});case g.wl:return s.createElement(y.Z,{id:"modals.confirm.title.archive_address_msg",defaultMessage:"A security issue effects address {addr}. Please Archive it, and if you continue to have issues contact {support}.",values:{addr:(0,_.Z)("vulnerableAddress",t),support:s.createElement(m.rU,{size:"16px",weight:500,target:"_blank",href:"/support"},"support")}});case g.pK:return s.createElement(y.Z,{id:"modals.confirm.message.lockbox_software_download",defaultMessage:"The Lockbox software is now downloading. Once the download has finished, install and open the software, plug in your device and follow the in app instructions."});default:return s.createElement(y.Z,{id:"modals.confirm.message",defaultMessage:"Please confirm."})}}(l,c))),s.createElement(m.mz,{align:"right"},!a&&s.createElement(b,{"data-e2e":"cancelConfirmModalLink",onClick:n},function selectCancel(e){switch(e){case g.dL:return s.createElement(y.Z,{id:"modals.confirm.cancel.verify_identity",defaultMessage:"I'll Do This Later"});case g.bg:return s.createElement(y.Z,{id:"modals.confirm.cancel.phone_call",defaultMessage:"No, Thanks"});default:return s.createElement(y.Z,{id:"buttons.cancel",defaultMessage:"Cancel"})}}(t)),s.createElement(m.zx,{type:"submit",nature:u||"primary",capitalize:!0,"data-e2e":"confirmModalSubmitButton"},function selectConfirm(e){switch(e){case g.a4:return s.createElement(y.Z,{id:"modals.confirm.confirm.verify_identity",defaultMessage:"Verify My Identity"});case g.cx:return s.createElement(y.Z,{id:"modals.confirm.title.archive_address_confirm",defaultMessage:"Archive Address"});case g.R2:return s.createElement(y.Z,{id:"modals.confirm.confirm.phone_call",defaultMessage:"Give Me A Call"});default:return s.createElement(y.Z,{id:"modals.confirm.button",defaultMessage:"OK"})}}(r))))))}));function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _extends(){return _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_extends.apply(this,arguments)}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var n,r=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(e)}var E=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(ConfirmContainer,e);var t=_createSuper(ConfirmContainer);function ConfirmContainer(e){var n;return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ConfirmContainer),(n=t.call(this,e)).onSubmit=n.onSubmit.bind(_assertThisInitialized(n)),n}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(ConfirmContainer,[{key:"onSubmit",value:function onSubmit(){this.props.actions.submitConfirmation(this.props.value),this.props.close()}},{key:"render",value:function render(){return s.createElement(w,_extends({},this.props,{onSubmit:this.onSubmit}))}}]),ConfirmContainer}(s.PureComponent);const x=(0,l.compose)((0,u.Z)("CONFIRMATION_MODAL"),(0,i.connect)(null,(function mapDispatchToProps(e){return{actions:(0,l.bindActionCreators)(c.Nw.gU,e),modalActions:(0,l.bindActionCreators)(c.Nw.qk,e)}})))(E)}}]);