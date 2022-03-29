"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[233],{"./src/components/QRCode/Wrapper/index.js":(e,t,s)=>{s.d(t,{Z:()=>u});var n,r=s("../../node_modules/react/index.js"),a=s("../../node_modules/prop-types/index.js"),o=s.n(a),l=s("../../node_modules/qrcode.react/lib/index.js"),i=s.n(l);var c=s("../../node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div(n||(n=function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  canvas {\n    padding: 12px;\n    border: 1px solid ",";\n    border-radius: 6px;\n    background-color: white;\n  }\n"])),(function(e){return e.theme.grey000})),d=function QRCodeWrapper(e){var t=e.size,s=e.value;return r.createElement(c,null,r.createElement(i(),{value:s,size:t}))};d.propTypes={size:o().number.isRequired,value:o().string.isRequired};const u=d},"./src/scenes/Settings/Addresses/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>cs});var n=s("../../node_modules/react/index.js"),r=s("../../node_modules/react-router-dom/es/Switch.js"),a=s("../../node_modules/react-router-dom/es/Route.js"),o=s("../../node_modules/react-router-dom/es/Redirect.js"),l=s("../../node_modules/react-router-dom/es/withRouter.js"),i=s("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),c=s("../../node_modules/react-redux/es/index.js"),d=s("../../node_modules/redux/es/redux.js"),u=s("../../node_modules/redux-form/es/formValueSelector.js"),m=s("../blockchain-wallet-v4/src/index.ts"),p=s("../blockchain-wallet-v4/src/utils/bch.js"),h=s("./src/data/index.ts"),g=h.wl.vE.y0.bch.getActiveAddresses,f=s("./node_modules/react-intl/lib/src/components/message.js"),y=s("../../node_modules/ramda/es/filter.js"),b=s("../blockchain-info-components/src/index.js"),x=s("./src/components/Setting/index.tsx");const w=(0,i.ZP)(b.iA)`
  > div:last-child {
    border-bottom: none;
  }
`;var E=s("./src/components/Display/SwitchableDisplay/index.tsx"),v=s("./src/services/styles/index.ts");const A=(0,i.ZP)(b.pj)`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 23px;

  ${v.BC.mobile`
    flex-direction: column;
    align-items: flex-start;
  `};
`,_=(0,i.ZP)(b.xv)`
  margin-right: 6px;
  word-break: break-all;
`,MoreOptions=()=>n.createElement(b.rU,{weight:500,size:"13px","data-e2e":"importedAddressesMoreOptionsDropdown"},n.createElement(f.Z,{id:"buttons.manage",defaultMessage:"Manage"})),components_AddressRow=({address:e,archived:t,coin:s,dataE2e:r,renderOptions:a})=>n.createElement(b.SC,{"data-e2e":r},n.createElement(A,{width:"50%"},n.createElement(_,{weight:500,size:"13px","data-e2e":(t?"archived":"unarchived")+"ImportedAddressName"},e.addr),null==e.priv&&n.createElement(b.jL,{label:!0,type:"informational","data-e2e":"nonSpendableBadge"},n.createElement(f.Z,{id:"scenes.settings.addresses.btc.addressrow.watchonly",defaultMessage:"Non-Spendable"}))),n.createElement(b.pj,{width:"20%"},!t&&n.createElement(E.Z,{size:"13px",coin:s||"BTC",weight:500},e.info&&e.info.final_balance)),n.createElement(b.pj,{width:"20%"},n.createElement(b.xv,{size:"13px",weight:500},e.label?e.label:"")),n.createElement(b.pj,{width:"10%",style:{display:"flex",justifyContent:"flex-end"}},a&&n.createElement("div",null,n.createElement(b.zw,{color:"grey900",components:a(),down:!0,forceSelected:!0,margin:"0 3px 0 0",selectedComponent:n.createElement(MoreOptions,null),textAlign:"end",width:"100px"}))));var C,P,Z,k;function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var j=i.ZP.section(C||(C=_taggedTemplateLiteral(["\n  box-sizing: border-box;\n"]))),L=(0,i.ZP)(x.iJ)(P||(P=_taggedTemplateLiteral(["\n  align-items: center;\n  justify-content: space-between;\n  font-weight: 500;\n  font-size: 20px;\n  margin-top: 30px;\n"]))),S=(0,i.ZP)(x.g3)(Z||(Z=_taggedTemplateLiteral(["\n  margin-bottom: 20px;\n"]))),O=(0,i.ZP)(b.xv)(k||(k=_taggedTemplateLiteral(["\n  cursor: pointer;\n  text-align: right;\n"])));const M=function BchImportedAddresses(e){var t=e.importedAddresses,s=e.onEditLabel,r=e.onTransferAll,a=e.search,o=(0,y.Z)((function isMatch(e){return!a||e.addr.toLowerCase().indexOf(a)>-1}),t).map((function(e){return n.createElement(components_AddressRow,{key:e.addr,address:e,coin:"BCH",dataE2e:"bchImportedAddressRow",renderOptions:function renderOptions(){return[n.createElement(O,{size:"small",onClick:function onClick(){return s(e)},"data-e2e":"btcSignMessageImportedAddressLink"},n.createElement(f.Z,{id:"scenes.settings.addresses.edit_name",defaultMessage:"Edit Label"}))]}})}));return n.createElement(j,null,n.createElement(L,null,n.createElement("div",null,n.createElement(f.Z,{id:"scenes.settings.addresses.bch.importedaddresses.title",defaultMessage:"Imported Bitcoin Cash Addresses"}),n.createElement(S,null,n.createElement(f.Z,{id:"scenes.settings.addresses.bch.importedaddresses.desc",defaultMessage:"Imported funds are not protected by your Secret Private Key Recovery Phrase. To ensure these funds are secured, please transfer them directly into your wallet."}))),o.length>0&&n.createElement("div",null,n.createElement(b.zx,{"data-e2e":"bchTransferAllButton",height:"36px",size:"14px",onClick:r,nature:"primary",style:{marginRight:"-10px"}},n.createElement(f.Z,{id:"scenes.settings.addresses.bch.importedaddresses.success.transferall",defaultMessage:"Transfer All"})))),o.length>0&&n.createElement(w,{dataE2e:"bchImportedAddressesTable"},n.createElement(b.xD,null,n.createElement(b.pj,{width:"50%"},n.createElement(b.xv,{color:"grey900",size:"14px",weight:500},n.createElement(f.Z,{id:"copy.address",defaultMessage:"Address"}))),n.createElement(b.pj,{width:"20%"},n.createElement(b.xv,{color:"grey900",size:"14px",weight:500},n.createElement(f.Z,{id:"copy.balance",defaultMessage:"Balance"}))),n.createElement(b.pj,{width:"20%"},n.createElement(b.xv,{color:"grey900",size:"14px",weight:500},n.createElement(f.Z,{id:"scenes.settings.addresses.bch.importedaddresses.success.label",defaultMessage:"Label"}))),n.createElement(b.pj,{width:"10%",style:{display:"flex",justifyContent:"flex-end"}},n.createElement(b.xv,{color:"grey900",size:"14px",weight:500},n.createElement(f.Z,{id:"copy.actions",defaultMessage:"Actions"})))),o))};function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}var z=["data"];function _extends(){return _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},_extends.apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var s,n,r=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var s,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var s,n=_getPrototypeOf(e);if(t){var r=_getPrototypeOf(this).constructor;s=Reflect.construct(n,arguments,r)}else s=n.apply(this,arguments);return _possibleConstructorReturn(this,s)}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(e)}function _defineProperty(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var B=h.o4.cr.WALLET_TX_SEARCH,W=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(ImportedAddressesContainer,e);var t=_createSuper(ImportedAddressesContainer);function ImportedAddressesContainer(){var e;_classCallCheck(this,ImportedAddressesContainer);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return _defineProperty(_assertThisInitialized(e=t.call.apply(t,[this].concat(n))),"handleTransferAll",(function(){e.props.actions.showModal(h.o4.wx.Xt.z,{excludeHDWallets:!0,from:"allImportedAddresses"})})),_defineProperty(_assertThisInitialized(e),"handleEditLabel",(function(t){var s=(0,p.fromCashAddr)(t.addr);e.props.componentActions.editImportedAddressLabel(s)})),e}return function _createClass(e,t,s){return t&&_defineProperties(e.prototype,t),s&&_defineProperties(e,s),e}(ImportedAddressesContainer,[{key:"shouldComponentUpdate",value:function shouldComponentUpdate(e){return!m.Nt.Loading.is(e.data)}},{key:"render",value:function render(){var e=this,t=this.props,s=t.data,r=_objectWithoutProperties(t,z);return s.cata({Failure:function Failure(e){return n.createElement("div",null,e)},Loading:function Loading(){return n.createElement("div",null)},NotAsked:function NotAsked(){return n.createElement("div",null)},Success:function Success(t){return t.length?n.createElement(M,_extends({importedAddresses:t,onTransferAll:e.handleTransferAll,onEditLabel:e.handleEditLabel},r)):n.createElement("div",null)}})}}]),ImportedAddressesContainer}(n.Component);const T=(0,c.connect)((function mapStateToProps(e){return{data:g(e),search:(0,u.Z)(B)(e,"search")}}),(function mapDispatchToProps(e){return{actions:(0,d.bindActionCreators)(h.Nw.qk,e),componentActions:(0,d.bindActionCreators)(h.Nw.wx.manageAddresses,e),modalActions:(0,d.bindActionCreators)(h.Nw.qk,e)}}))(W);var I,R,D,N,U,$,Q,F,X=s("../../node_modules/ramda/es/map.js"),H=s("../../node_modules/ramda/es/lift.js"),K=function getData(e){var t=(0,X.Z)((function(e){return{label:e.label,value:e}})),s=h.wl.vE.Nu.iY.getAccounts(e),n=h.wl.vE.Nu.iY.getDefaultAccountIndex(e),r=h.wl.vE.y0.bch.getAccountsBalances(e).map(t);return(0,H.Z)((function combine(e,t,s){return{bchAccounts:e,defaultIndex:s,wallets:t}}))(s,r,n)},q=s("../../node_modules/ramda/es/take.js"),V=s("../../node_modules/ramda/es/path.js");function template_taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var J=i.ZP.section(I||(I=template_taggedTemplateLiteral(["\n  box-sizing: border-box;\n"]))),Y=(0,i.ZP)(x.iJ)(R||(R=template_taggedTemplateLiteral(["\n  font-weight: 500;\n  font-size: 20px;\n  justify-content: flex-start;\n"]))),G=(0,i.ZP)(x.g3)(D||(D=template_taggedTemplateLiteral(["\n  margin-bottom: 20px;\n"]))),ee=(0,i.ZP)(b.pj)(N||(N=template_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  min-height: 23px;\n\n  ",";\n"])),v.BC.mobile(U||(U=template_taggedTemplateLiteral(["\n    flex-direction: column;\n    align-items: flex-start;\n  "])))),te=(0,i.ZP)(ee)($||($=template_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  padding: 15px;\n"]))),se=(0,i.ZP)(b.xv)(Q||(Q=template_taggedTemplateLiteral(["\n  cursor: pointer;\n"]))),ne=(0,i.ZP)(b.xv)(F||(F=template_taggedTemplateLiteral(["\n  margin-right: 6px;\n  font-weight: 500;\n"])));const re=function WalletRow(e){var t=e.data,s=t.bchAccounts,r=t.defaultIndex,a=t.wallets,o=e.onEditBchAccountLabel,l=e.onMakeDefault,i=e.onSetArchived,c=e.onShowChangeAddrs,d=e.onShowFundRecovery,u=e.onShowXPub,m=e.search,p=e.walletActions,h=(0,y.Z)((function isMatch(e){return!m||e.label.toLowerCase().indexOf(m)>-1}),(0,q.Z)(s.length,a)),g=h.map((function(e,t){var s=(0,V.Z)(["value","index"],e)===r,a=(0,V.Z)(["value","archived"],e);return n.createElement(b.SC,{key:t,dataE2e:"bchWalletRow"},n.createElement(ee,{width:"50%"},n.createElement(ne,{size:"13px","data-e2e":"bchWalletName"},e.label),s&&n.createElement(b.jL,{label:!0,"data-e2e":"bchDefaultWalletBadge"},n.createElement(f.Z,{id:"scenes.settings.addresses.bch.wallets.defaultlabel",defaultMessage:"Default"})),a&&n.createElement(b.jL,{label:!0,type:"informational","data-e2e":"bchArchivedWalletBadge"},n.createElement(f.Z,{id:"scenes.settings.addresses.bch.wallets.archivedlabel",defaultMessage:"Archived"}))),n.createElement(b.pj,{width:"30%"},!a&&n.createElement(E.Z,{size:"13px",coin:"BCH",weight:500},e.value.balance)),n.createElement(b.pj,{width:"20%",style:{display:"flex",justifyContent:"flex-end"}},a?n.createElement(b.rU,{weight:500,size:"13px",onClick:function onClick(){return i(e.value,!1)},"data-e2e":"bchUnarchiveWalletLink"},n.createElement(f.Z,{id:"scenes.settings.addresses.bch.unarchive",defaultMessage:"Unarchive"})):n.createElement("div",null,n.createElement(b.zw,{color:"grey900",down:!0,forceSelected:!0,margin:"0 3px 0 0",width:"165px",textAlign:"end",selectedComponent:n.createElement(b.rU,{weight:500,size:"13px","data-e2e":"bchManageWalletLink"},n.createElement(f.Z,{id:"buttons.manage",defaultMessage:"Manage"})),components:[n.createElement(se,{key:"edit",size:"small",onClick:function onClick(){o(e.value),p.setManageWallet({currency:"BCH",selection:"EditWalletName"})},"data-e2e":"bchEditWalletNameLink"},n.createElement(f.Z,{id:"scenes.settings.addresses.bch.edit_name",defaultMessage:"Edit Wallet Name"})),!s&&!a&&n.createElement(se,{size:"small",onClick:function onClick(){return l(e.value)},"data-e2e":"bchMakeWalletDefaultLink"},n.createElement(f.Z,{id:"scenes.settings.addresses.bch.make_default",defaultMessage:"Make Default"})),!s&&(a?n.createElement(se,{size:"small",onClick:function onClick(){return i(e.value,!1)},"data-e2e":"bchUnarchiveWalletLink"},n.createElement(f.Z,{id:"scenes.settings.addresses.bch.unarchive",defaultMessage:"Unarchive"})):n.createElement(se,{size:"small",onClick:function onClick(){return i(e.value,!0)},"data-e2e":"bchArchiveWalletLink"},n.createElement(f.Z,{id:"scenes.settings.addresses.bch.archive",defaultMessage:"Archive"}))),n.createElement(se,{size:"small",key:"xpub",onClick:function onClick(){u(e.value),p.setManageWallet({currency:"BCH",selection:"ShowXPub"})},"data-e2e":"bchShowWalletXpub"},n.createElement(f.Z,{id:"scenes.settings.addresses.bch.show_xpub",defaultMessage:"Show xPub"})),n.createElement(se,{size:"small",key:"change",onClick:function onClick(){c(e.value),p.setManageWallet({currency:"BCH",selection:"ShowChangeAddresses"})},"data-e2e":"bchShowChangeAddressesLink"},n.createElement(f.Z,{id:"scenes.settings.addresses.bch.showchangeaddrs",defaultMessage:"Show Change Addresses"})),n.createElement(se,{size:"small",key:"recovery",onClick:function onClick(){d(e.value),p.setManageWallet({currency:"BCH",selection:"RecoverFunds"})},"data-e2e":"bchShowFundRecovery"},n.createElement(f.Z,{id:"scenes.settings.addresses.show_fund_recovery",defaultMessage:"Recover Funds"}))]}))))}));return n.createElement(J,null,n.createElement(Y,null,n.createElement(f.Z,{id:"scenes.settings.addresses.bch.wallets.title",defaultMessage:"Bitcoin Cash Wallets"})),n.createElement(G,null,n.createElement(f.Z,{id:"scenes.settings.addresses.bch.wallets.desc",defaultMessage:"Wallets allow you to organize your funds into categories, like spending or savings."})),n.createElement(w,null,n.createElement(b.xD,null,n.createElement(b.pj,{width:"50%"},n.createElement(b.xv,{color:"grey900",size:"14px",weight:500},n.createElement(f.Z,{id:"scenes.settings.addresses.bch.wallets.walletname",defaultMessage:"Wallet Name"}))),n.createElement(b.pj,{width:"30%"},n.createElement(b.xv,{color:"grey900",size:"14px",weight:500},n.createElement(f.Z,{id:"copy.balance",defaultMessage:"Balance"}))),n.createElement(b.pj,{width:"20%",style:{display:"flex",justifyContent:"flex-end"}},n.createElement(b.xv,{color:"grey900",size:"14px",weight:500},n.createElement(f.Z,{id:"scenes.settings.addresses.bch.wallets.actions",defaultMessage:"Actions"})))),m&&!h.length?n.createElement(b.SC,{dataE2e:"noBchWalletResults"},n.createElement(te,null,n.createElement(ne,{size:"13px"},n.createElement(b.xv,{size:"13px",weight:500},n.createElement(f.Z,{id:"scenes.settings.addresses.bch.wallets.nomatch",defaultMessage:"No wallets matched your search"}))))):g))};function Wallets_typeof(e){return Wallets_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Wallets_typeof(e)}var ae=["addressesBchActions","data","kvStoreBchActions","modalsActions","search"];function Wallets_extends(){return Wallets_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},Wallets_extends.apply(this,arguments)}function Wallets_objectWithoutProperties(e,t){if(null==e)return{};var s,n,r=function Wallets_objectWithoutPropertiesLoose(e,t){if(null==e)return{};var s,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}function Wallets_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Wallets_defineProperties(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Wallets_setPrototypeOf(e,t){return Wallets_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},Wallets_setPrototypeOf(e,t)}function Wallets_createSuper(e){var t=function Wallets_isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var s,n=Wallets_getPrototypeOf(e);if(t){var r=Wallets_getPrototypeOf(this).constructor;s=Reflect.construct(n,arguments,r)}else s=n.apply(this,arguments);return Wallets_possibleConstructorReturn(this,s)}}function Wallets_possibleConstructorReturn(e,t){if(t&&("object"===Wallets_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function Wallets_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function Wallets_getPrototypeOf(e){return Wallets_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},Wallets_getPrototypeOf(e)}var oe=h.o4.cr.WALLET_TX_SEARCH,le=function(e){!function Wallets_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Wallets_setPrototypeOf(e,t)}(BchWalletsContainer,e);var t=Wallets_createSuper(BchWalletsContainer);function BchWalletsContainer(){return Wallets_classCallCheck(this,BchWalletsContainer),t.apply(this,arguments)}return function Wallets_createClass(e,t,s){return t&&Wallets_defineProperties(e.prototype,t),s&&Wallets_defineProperties(e,s),e}(BchWalletsContainer,[{key:"shouldComponentUpdate",value:function shouldComponentUpdate(e){return!m.Nt.Loading.is(e.data)}},{key:"render",value:function render(){var e=this.props,t=e.addressesBchActions,s=e.data,r=e.kvStoreBchActions,a=e.modalsActions,o=e.search,l=Wallets_objectWithoutProperties(e,ae),i={onEditBchAccountLabel:function onEditBchAccountLabel(e){t.editBchAccountLabel(e.index,e.label)},onMakeDefault:function onMakeDefault(e){r.setDefaultAccountIdx(e.index)},onSetArchived:function onSetArchived(e,t){r.setAccountArchived(e.index,t)},onShowChangeAddrs:function onShowChangeAddrs(e){t.showChangeAddrs(e.index,e.xpub)},onShowFundRecovery:function onShowFundRecovery(e){a.showModal("FUND_RECOVERY_MODAL",{accountIndex:e.index,coin:"BCH"})},onShowXPub:function onShowXPub(e){a.showModal("SHOW_XPUB_MODAL",{xpub:e.xpub})}};return s.cata({Failure:function Failure(e){return n.createElement("div",null,e)},Loading:function Loading(){return n.createElement("div",null)},NotAsked:function NotAsked(){return n.createElement("div",null)},Success:function Success(e){return n.createElement(re,Wallets_extends({search:o&&o.toLowerCase(),data:e},i,l))}})}}]),BchWalletsContainer}(n.Component);const ie=(0,c.connect)((function mapStateToProps(e){return{data:K(e),search:(0,u.Z)(oe)(e,"search")}}),(function mapDispatchToProps(e){return{addressesBchActions:(0,d.bindActionCreators)(h.Nw.qz.I3,e),kvStoreBchActions:(0,d.bindActionCreators)(h.Nw.vE.Nu.iY,e),modalsActions:(0,d.bindActionCreators)(h.Nw.qk,e),walletActions:(0,d.bindActionCreators)(h.Nw.gU,e)}}))(le);function Bch_typeof(e){return Bch_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Bch_typeof(e)}function Bch_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Bch_defineProperties(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Bch_setPrototypeOf(e,t){return Bch_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},Bch_setPrototypeOf(e,t)}function Bch_createSuper(e){var t=function Bch_isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var s,n=Bch_getPrototypeOf(e);if(t){var r=Bch_getPrototypeOf(this).constructor;s=Reflect.construct(n,arguments,r)}else s=n.apply(this,arguments);return Bch_possibleConstructorReturn(this,s)}}function Bch_possibleConstructorReturn(e,t){if(t&&("object"===Bch_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function Bch_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function Bch_getPrototypeOf(e){return Bch_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},Bch_getPrototypeOf(e)}var ce=function(e){!function Bch_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Bch_setPrototypeOf(e,t)}(BchAddressesContainer,e);var t=Bch_createSuper(BchAddressesContainer);function BchAddressesContainer(){return Bch_classCallCheck(this,BchAddressesContainer),t.apply(this,arguments)}return function Bch_createClass(e,t,s){return t&&Bch_defineProperties(e.prototype,t),s&&Bch_defineProperties(e,s),e}(BchAddressesContainer,[{key:"render",value:function render(){return n.createElement(n.Fragment,null,n.createElement(ie,null),n.createElement(T,null))}}]),BchAddressesContainer}(n.PureComponent);const de=i.ZP.section`
  box-sizing: border-box;
`,ue=(0,i.ZP)(x.iJ)`
  justify-content: flex-start;
  margin-top: 30px;
`,me=(0,i.ZP)(b.xv)`
  cursor: pointer;
`,ArchivedAddresses_template=({archivedAddresses:e,onDelete:t,onToggleArchived:s,search:r})=>{const a=(0,y.Z)((e=>!r||e.addr.toLowerCase().indexOf(r)>-1),e).map((e=>n.createElement(components_AddressRow,{key:e.addr,archived:!0,address:e,dataE2e:"btcArchivedAddressRow",coin:"BTC",renderOptions:()=>[n.createElement(me,{size:"small",onClick:()=>s(e),"data-e2e":"btcUnarchivedAddressLink"},n.createElement(f.Z,{id:"scenes.settings.addresses.unarchive",defaultMessage:"Unarchive"})),n.createElement(me,{size:"small",onClick:()=>t(e),"data-e2e":"btcDeleteArchivedAddressLink"},n.createElement(f.Z,{id:"scenes.settings.addresses.delete_address",defaultMessage:"Delete"}))]})));return a.length>0?n.createElement(de,null,n.createElement(ue,null,n.createElement(f.Z,{id:"scenes.settings.addresses.btc.archivedaddresses.title",defaultMessage:"Archived Bitcoin Addresses"})),n.createElement(x.g3,{style:(0,v.W0)("mb-10")},n.createElement(f.Z,{id:"scenes.settings.addresses.btc.archivedaddresses.description",defaultMessage:"Archived addresses are addresses you may not need anymore that are hidden from the main view but still a part of your wallet. You can unarchive them any time."})),n.createElement(b.iA,{"data-e2e":"btcArchivedAddressesTable"},n.createElement(b.xD,null,n.createElement(b.pj,{width:"50%"},n.createElement(b.xv,{size:"13px",weight:500},n.createElement(f.Z,{id:"copy.address",defaultMessage:"Address"}))),n.createElement(b.pj,{width:"30%"},n.createElement(b.xv,{size:"13px",weight:500},n.createElement(f.Z,{id:"copy.balance",defaultMessage:"Balance"}))),n.createElement(b.pj,{width:"20%",style:{display:"flex",justifyContent:"flex-end"}},n.createElement(b.xv,{size:"13px",weight:500},n.createElement(f.Z,{id:"scenes.settings.addresses.btc.archivedaddresses.actions",defaultMessage:"Actions"})))),a)):null},{WALLET_TX_SEARCH:pe}=h.o4.cr;class he extends n.PureComponent{constructor(){super(...arguments),this.handleToggleArchived=e=>{const t=m.Yk.kL.isArchived(e);this.props.coreActions.setAddressArchived(e.addr,!t)},this.handleDelete=e=>{this.props.coreActions.deleteLegacyAddress(e.addr)}}render(){const{archivedAddresses:e,search:t}=this.props;return n.createElement(ArchivedAddresses_template,{search:t&&t.toLowerCase(),onToggleArchived:this.handleToggleArchived,archivedAddresses:e,onDelete:this.handleDelete})}}const ge=(0,d.compose)(m.Yk.M2.selectArchived,m.Yk.w5.selectAddresses,h.wl.vE.gU.getWallet),fe=(0,c.connect)((e=>({archivedAddresses:ge(e).toArray(),search:(0,u.Z)(pe)(e,"search")})),(e=>({coreActions:(0,d.bindActionCreators)(h.Nw.vE.gU,e)})))(he);var ye=s("../../node_modules/ramda/es/values.js");const be=i.ZP.section`
  box-sizing: border-box;
`,xe=(0,i.ZP)(x.iJ)`
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 20px;
`,we=(0,i.ZP)(x.iJ)`
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`,Ee=i.ZP.div`
  display: flex;
  margin-right: 0;
  > button {
    margin-left: 10px;
  }
`,ve=(0,i.ZP)(x.g3)`
  margin-bottom: 20px;
`,Ae=(0,i.ZP)(b.xv)`
  cursor: pointer;
`,ImportedAddresses_template=({failure:e,importedAddresses:t,onClickVerify:s,onEditLabel:r,onShowPriv:a,onShowSignMessage:o,onToggleArchived:l,onTransferAll:i,search:c})=>{const d=(0,y.Z)((e=>!c||e.addr.toLowerCase().indexOf(c)>-1),t).map((t=>n.createElement(components_AddressRow,{coin:"BTC",key:t.addr,address:t,dataE2e:"btcImportedAddressRow",renderOptions:()=>[n.createElement(Ae,{size:"small",onClick:()=>l(t),"data-e2e":"btcArchiveImportedAddressLink"},n.createElement(f.Z,{id:"scenes.settings.addresses.archive",defaultMessage:"Archive"}))].concat(t.priv?[!e&&n.createElement(Ae,{size:"small",onClick:()=>a(t),"data-e2e":"btcShowPrivKeyImportedAddressLink"},n.createElement(f.Z,{id:"copy.private_key",defaultMessage:"Private Key"})),n.createElement(Ae,{size:"small",onClick:()=>o(t),"data-e2e":"btcSignMessageImportedAddressLink"},n.createElement(f.Z,{id:"scenes.settings.addresses.sign_message",defaultMessage:"Sign Message"})),n.createElement(Ae,{size:"small",onClick:()=>r(t),"data-e2e":"btcSignMessageImportedAddressLink"},n.createElement(f.Z,{id:"scenes.settings.addresses.edit_name",defaultMessage:"Edit Label"}))]:[])})));return n.createElement(be,null,n.createElement(we,null,n.createElement("div",null,n.createElement(xe,null,n.createElement(f.Z,{id:"scenes.settings.addresses.btc.importedaddresses.success.title",defaultMessage:"Imported Bitcoin Addresses"})),n.createElement(ve,null,n.createElement(f.Z,{id:"scenes.settings.addresses.btc.importedaddresses.success.description1",defaultMessage:"Imported funds are not protected by your Secret Private Key Recovery Phrase. To ensure these funds are secured, please transfer them directly into your wallet."}))),n.createElement(Ee,null,n.createElement(b.zx,{"data-e2e":"btcVerifyMessageImportedAddressLink",height:"36px",nature:"empty-secondary",onClick:s,size:"14px"},n.createElement(f.Z,{id:"scenes.settings.addresses.btc.importedaddresses.success.verifymessage",defaultMessage:"Verify Message"})),d.length>0&&n.createElement(b.zx,{"data-e2e":"btcTransferAllImportedAddressLink",height:"36px",nature:"primary",onClick:i,size:"14px"},n.createElement(f.Z,{id:"scenes.settings.addresses.btc.importedaddresses.success.transferall",defaultMessage:"Transfer All"})))),d.length>0&&n.createElement(w,{"data-e2e":"btcImportedAddrTable"},n.createElement(b.xD,null,n.createElement(b.pj,{width:"50%"},n.createElement(b.xv,{color:"grey900",size:"14px",weight:500},n.createElement(f.Z,{id:"copy.address",defaultMessage:"Address"}))),n.createElement(b.pj,{width:"20%"},n.createElement(b.xv,{color:"grey900",size:"14px",weight:500},n.createElement(f.Z,{id:"copy.balance",defaultMessage:"Balance"}))),n.createElement(b.pj,{width:"20%"},n.createElement(b.xv,{color:"grey900",size:"14px",weight:500},n.createElement(f.Z,{id:"scenes.settings.addresses.btc.importedaddresses.success.label",defaultMessage:"Label"}))),n.createElement(b.pj,{width:"10%",style:{display:"flex",justifyContent:"flex-end"}},n.createElement(b.xv,{color:"grey900",size:"14px",weight:500},n.createElement(f.Z,{id:"scenes.settings.addresses.btc.importedaddresses.success.actions",defaultMessage:"Actions"})))),d))},{WALLET_TX_SEARCH:_e}=h.o4.cr;class Ce extends n.Component{constructor(){super(...arguments),this.handleClickVerify=()=>{this.props.modalActions.showModal("VERIFY_MESSAGE_MODAL",{origin:"SettingsPage"})},this.handleShowPriv=e=>{this.props.modalActions.showModal("SHOW_BTC_PRIVATE_KEY_MODAL",{addr:e.addr,balance:e.info.final_balance,origin:"SettingsPage"})},this.handleSignMessage=e=>{this.props.modalActions.showModal("SIGN_MESSAGE_MODAL",{address:e.addr,origin:"SettingsPage"})},this.handleEditLabel=e=>{this.props.componentActions.editImportedAddressLabel(e.addr)},this.handleToggleArchived=e=>{const t=2===e.tag;this.props.coreActions.setAddressArchived(e.addr,!t)},this.handleTransferAll=()=>{this.props.modalActions.showModal(h.o4.wx.Um.z,{excludeHDWallets:!0,from:"allImportedAddresses",origin:"SettingsPage"})}}shouldComponentUpdate(e){return!m.Nt.Loading.is(e.data)}render(){const{addressesWithoutRemoteData:e,search:t}=this.props;return this.props.activeAddresses.cata({Failure:()=>n.createElement(ImportedAddresses_template,{failure:!0,importedAddresses:(0,ye.Z)(e),onClickVerify:this.handleClickVerify,search:t&&t.toLowerCase(),onShowPriv:this.handleShowPriv,onToggleArchived:this.handleToggleArchived,onTransferAll:this.handleTransferAll,onShowSignMessage:this.handleSignMessage,onEditLabel:this.handleEditLabel}),Loading:()=>n.createElement("div",null),NotAsked:()=>n.createElement("div",null),Success:e=>n.createElement(ImportedAddresses_template,{importedAddresses:e,onClickVerify:this.handleClickVerify,search:t&&t.toLowerCase(),onToggleArchived:this.handleToggleArchived,onTransferAll:this.handleTransferAll,onShowPriv:this.handleShowPriv,onShowSignMessage:this.handleSignMessage,onEditLabel:this.handleEditLabel})})}}const Pe=(0,c.connect)((e=>({activeAddresses:h.wl.vE.y0.btc.getActiveAddresses(e),addressesWithoutRemoteData:h.wl.vE.gU.getAddresses(e),search:(0,u.Z)(_e)(e,"search")})),(e=>({componentActions:(0,d.bindActionCreators)(h.Nw.wx.manageAddresses,e),coreActions:(0,d.bindActionCreators)(h.Nw.vE.gU,e),modalActions:(0,d.bindActionCreators)(h.Nw.qk,e)})))(Ce),Btc_selectors_getData=e=>m.Nt.of(h.wl.vE.gU.getWalletContext(e)).getOrElse("");var Ze=s("./src/services/forms/index.js"),ke=s("../../node_modules/ramda/es/pipe.js"),je=s("../../node_modules/ramda/es/prop.js"),Le=s("../../node_modules/ramda/es/pluck.js"),Se=s("../../node_modules/ramda/es/reject.js"),Oe=s("../../node_modules/ramda/es/isNil.js"),Me=s("../../node_modules/ramda/es/sum.js"),ze=s("../../node_modules/ramda/es/pathOr.js");const getDefaultIdx=e=>m.Yk.LW.selectDefaultAccountIdx(m.Yk.w5.selectHdWallets(e.walletPath.wallet).get(0)),prepareWallet=(e,t)=>({archived:e.archived,balance:e.derivations?(0,ke.Z)((0,je.Z)("derivations"),(0,Le.Z)("info"),(0,Le.Z)("final_balance"),(0,Se.Z)(Oe.Z),Me.Z)(e):(0,ze.Z)(0,["info","final_balance"],e),default:t===e.index,index:e.index,label:e.label,type:"v4",xpub:e.xpub}),Wallets_selectors_getData=e=>{const t=getDefaultIdx(e),s=(0,X.Z)((e=>prepareWallet(e,t)));return h.wl.vE.y0.btc.getHDAccounts(e).map(s)},getWalletsWithoutRemoteData=e=>{const t=getDefaultIdx(e);return h.wl.vE.gU.getHDAccounts(e).map((e=>prepareWallet(e,t)))};var Be=s("../../node_modules/react-router-bootstrap/lib/index.js");const We=i.ZP.section`
  box-sizing: border-box;
`,Te=(0,i.ZP)(b.iA)`
  > div:last-child {
    border-bottom: none;
  }
`,Ie=(0,i.ZP)(x.iJ)`
  align-items: flex-start;
  justify-content: space-between;
`,Re=(0,i.ZP)(x.iJ)`
  justify-content: flex-start;
  font-weight: 500;
  font-size: 20px;
`,De=(0,i.ZP)(x.g3)`
  margin-bottom: 20px;
`,Ne=(0,i.ZP)(b.pj)`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 23px;

  ${v.BC.mobile`
    flex-direction: column;
    align-items: flex-start;
  `};
`,Ue=i.ZP.div`
  display: flex;
  margin-right: 0;
  > button {
    margin-left: 10px;
  }
`,$e=(0,i.ZP)(Ne)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px;
`,Qe=(0,i.ZP)(b.xv)`
  margin-right: 6px;
`,Fe=i.ZP.div`
  margin-bottom: 20px;
`,Xe=(0,i.ZP)(b.xv)`
  margin-top: 5px;
`,Btc_Wallets_template=({failure:e,message:t,onClickImport:s,onUnarchive:r,search:a,wallets:o})=>{const l=(0,y.Z)((e=>!a||e.label.toLowerCase().indexOf(a)>-1),(0,q.Z)(o.length,o)),i=l.map((e=>n.createElement(b.SC,{key:e.index,"data-e2e":"btcWalletRow"},n.createElement(Ne,{width:"50%"},n.createElement(Qe,{size:"13px",weight:500,"data-e2e":"btcWalletName"},e.label),e.default&&n.createElement(b.jL,{label:"true","data-e2e":"btcDefaultWalletBadge"},n.createElement(f.Z,{id:"scenes.settings.addresses.btc.wallets.defaultlabel",defaultMessage:"Default"})),e.archived&&n.createElement(b.jL,{label:"true",type:"informational","data-e2e":"btcArchivedWalletBadge"},n.createElement(f.Z,{id:"scenes.settings.addresses.btc.wallets.archivedlabel",defaultMessage:"Archived"}))),n.createElement(b.pj,{width:"30%"},!e.archived&&n.createElement(E.Z,{size:"13px",weight:500,coin:"BTC"},e.balance)),n.createElement(b.pj,{width:"20%",style:{display:"flex",justifyContent:"flex-end"}},e.archived?n.createElement(b.rU,{weight:500,size:"13px",onClick:()=>r(e.index),"data-e2e":"btcUnarchiveWalletLink"},n.createElement(f.Z,{id:"scenes.settings.addresses.btc.wallets.unarchive",defaultMessage:"Unarchive"})):n.createElement(Be.Ji,{to:`/settings/addresses/btc/${e.index}/bech32`},n.createElement(b.rU,{weight:500,size:"13px","data-e2e":"btcManageWalletLink"},n.createElement(f.Z,{id:"scenes.settings.addresses.btc.wallets.manage",defaultMessage:"Manage"})))))));return n.createElement(We,null,e&&n.createElement(Fe,null,n.createElement(b.jL,{type:"warning"},n.createElement(b.xv,{size:"14px",color:"error"},n.createElement(f.Z,{id:"scenes.settings.addresses.btc.failurealert",defaultMessage:"There is an issue with the wallet and this page may have limited functionality, such as balances not showing."}),n.createElement(Xe,{size:"14px",color:"error"},n.createElement(f.Z,{id:"scenes.settings.addresses.btc.failuremessage",defaultMessage:"Message: {errorMessage}",values:{errorMessage:t||n.createElement("span",null,"Please contact",n.createElement(b.rU,{size:"14px",href:"/support/hc/en-us/requests/new",target:"_blank"},"support")," ","for help resolving the problem")}}))))),n.createElement(Ie,null,n.createElement("div",null,n.createElement(Re,null,n.createElement(f.Z,{id:"scenes.settings.addresses.btc.wallets.bitcoinwallets",defaultMessage:"Bitcoin Wallets"})),n.createElement(De,null,n.createElement(f.Z,{id:"scenes.settings.addresses.btc.wallets.desc",defaultMessage:"Wallets allow you to organize your funds into categories, like spending or savings."}))),n.createElement(Ue,null,n.createElement(b.zx,{"data-e2e":"btcImportedAddressLink",height:"36px",nature:"empty-secondary",onClick:s,size:"14px"},n.createElement(f.Z,{id:"scenes.settings.addresses.btc.wallets.import",defaultMessage:"Import Address"})))),n.createElement(Te,null,n.createElement(b.xD,null,n.createElement(b.pj,{width:"50%"},n.createElement(b.xv,{color:"grey900",size:"14px",weight:500},n.createElement(f.Z,{id:"scenes.settings.addresses.btc.wallets.walletname",defaultMessage:"Wallet Name"}))),n.createElement(b.pj,{width:"30%"},n.createElement(b.xv,{color:"grey900",size:"14px",weight:500},n.createElement(f.Z,{id:"copy.balance",defaultMessage:"Balance"}))),n.createElement(b.pj,{width:"20%",style:{display:"flex",justifyContent:"flex-end"}},n.createElement(b.xv,{color:"grey900",size:"14px",weight:500},n.createElement(f.Z,{id:"scenes.settings.addresses.btc.wallets.manage",defaultMessage:"Manage"})))),a&&!l.length?n.createElement(b.SC,{"data-e2e":"btcNoWalletResults"},n.createElement($e,null,n.createElement(Qe,{size:"13px"},n.createElement(b.xv,{size:"13px",weight:500},n.createElement(f.Z,{id:"scenes.settings.addresses.btc.wallets.nomatch",defaultMessage:"No wallets matched your search"}))))):i))};var __rest=function(e,t){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(s[n[r]]=e[n[r]])}return s};const{WALLET_TX_SEARCH:He}=h.o4.cr;class Ke extends n.Component{constructor(){super(...arguments),this.onAddNewWallet=e=>{const t=e.map((e=>e.label));this.props.modalActions.showModal("ADD_BTC_WALLET_MODAL",{origin:"SettingsPage",uniqueWalletName:e=>(0,Ze.PD)(e,t)})},this.onUnarchive=e=>{this.props.coreActions.setAccountArchived(e,!1)},this.onClickImport=()=>{this.props.modalActions.showModal("IMPORT_BTC_ADDRESS_MODAL",{origin:"SettingsPage"})}}shouldComponentUpdate(e){return!m.Nt.Loading.is(e.data)}render(){const e=this.props,{data:t,search:s,walletsWithoutRemoteData:r}=e,a=__rest(e,["data","search","walletsWithoutRemoteData"]);return t.cata({Failure:e=>n.createElement(Btc_Wallets_template,Object.assign({failure:!0,message:e,wallets:r,search:s&&s.toLowerCase(),onUnarchive:this.onUnarchive,onClickImport:this.onClickImport},a)),Loading:()=>n.createElement("div",null),NotAsked:()=>n.createElement("div",null),Success:e=>n.createElement(Btc_Wallets_template,Object.assign({wallets:e,search:s&&s.toLowerCase(),onUnarchive:this.onUnarchive,onClickImport:this.onClickImport},a))})}}const Btc_Wallets_mapDispatchToProps=e=>({actions:(0,d.bindActionCreators)(h.Nw.vE.aT.btc,e),coreActions:(0,d.bindActionCreators)(h.Nw.vE.gU,e),modalActions:(0,d.bindActionCreators)(h.Nw.qk,e)}),Btc_Wallets_mapStateToProps=e=>({data:Wallets_selectors_getData(e),search:(0,u.Z)(He)(e,"search"),walletsWithoutRemoteData:getWalletsWithoutRemoteData(e)}),qe=((0,c.connect)(Btc_Wallets_mapStateToProps,Btc_Wallets_mapDispatchToProps),(0,c.connect)(Btc_Wallets_mapStateToProps,Btc_Wallets_mapDispatchToProps)(Ke));class Ve extends n.PureComponent{render(){return n.createElement(n.Fragment,null,n.createElement(qe,{context:this.props.data}),n.createElement(Pe,null),n.createElement(fe,null))}}const Je=(0,c.connect)((e=>({data:Btc_selectors_getData(e)})))(Ve);var Ye=s("../../node_modules/redux-form/es/reduxForm.js"),Ge=s("../../node_modules/@blockchain-com/components/esm/Molecules/Togglers/Toggler.js"),et=s("../../node_modules/@blockchain-com/components/esm/Molecules/Togglers/TogglerItem.js"),tt=s("../../node_modules/ramda/es/length.js"),st=s("../../node_modules/ramda/es/equals.js"),nt=s("./src/services/alerts/index.ts");const rt=(0,i.ZP)(b.iA)`
  margin-top: 8px;
  > div:last-child {
    border-bottom: none;
  }
`,UnusedAddresses_template=({onDeleteLabel:e,onEditLabel:t,search:s,unusedAddresses:r})=>{const a=(0,y.Z)((e=>!s||e.label.toLowerCase().indexOf(s.toLowerCase())>-1||e.address.toLowerCase().indexOf(s.toLowerCase())>-1),r).map(((s,r)=>n.createElement(b.SC,{key:r,"data-e2e":"btcUnusedAddressRow"},n.createElement(b.pj,{width:"40%",style:{wordBreak:"break-all"}},n.createElement(b.rU,{href:`https://blockchain.info/address/${s.address}`,size:"13px",weight:500,target:"_blank","data-e2e":"btcUnusedAddressLink"},s.address)),n.createElement(b.pj,{width:"40%"},n.createElement(b.xv,{size:"13px",weight:500,"data-e2e":"btcUnusedAddressLabel"},s.label)),n.createElement(b.pj,{width:"20%",style:{display:"flex",justifyContent:"flex-end"}},n.createElement(b.JO,{cursor:!0,"data-e2e":"btcEditAddressLabelLink",name:"pencil",onClick:()=>t(s.derivationIndex),style:{marginRight:10}}),n.createElement(b.JO,{cursor:!0,"data-e2e":"btcDeleteAddressLink",name:"trash",onClick:()=>e(s.derivationIndex)})))));return 0===r.length?n.createElement(b.xv,{color:"grey700","data-e2e":"btcWalletNoUnusedAddresses",size:"16px",style:{marginTop:20,textAlign:"center"},weight:500},n.createElement(f.Z,{id:"scenes.settings.addresses.btc.manageaddresses.usedaddresses.usedaddressestable.nounusedmessage",defaultMessage:"This wallet has no unused addresses."})):n.createElement(rt,null,n.createElement(b.xD,null,n.createElement(b.pj,{width:"40%"},n.createElement(b.xv,{color:"grey900",size:"14px",weight:500},n.createElement(f.Z,{id:"copy.address",defaultMessage:"Address"}))),n.createElement(b.pj,{width:"40%"},n.createElement(b.xv,{color:"grey900",size:"14px",weight:500},n.createElement(f.Z,{id:"scenes.settings.addresses.btc.manageaddresses.unusedaddresses.label",defaultMessage:"Label"}))),n.createElement(b.pj,{width:"20%",style:{display:"flex",justifyContent:"flex-end"}},n.createElement(b.xv,{color:"grey900",size:"14px",weight:500},n.createElement(f.Z,{id:"scenes.settings.addresses.btc.manageaddresses.unusedaddresses.actions",defaultMessage:"Actions"})))),a)},at=i.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,ot=i.ZP.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  > :nth-child(2) {
    margin: 0 16px;
  }
`,lt=i.ZP.div`
  display: flex;
  flex-direction: row;
  align-content: space-between;
  align-items: center;
  margin-top: 24px;
  > :first-child {
    padding-right: 100px;
  }
`,it=(0,i.ZP)(b.xv)`
  cursor: pointer;
`,ct=(0,i.ZP)(b.rU)`
  &.active {
    color: ${({theme:e})=>e.grey000};
  }
`,dt=(0,i.ZP)(x.iJ)`
  justify-content: flex-start;
  font-weight: 500;
  font-size: 16px;
`;class ut extends n.PureComponent{constructor(){super(...arguments),this.onEditLabel=e=>{const{accountIndex:t,componentActions:s,derivation:n,walletIndex:r}=this.props;s.editAddressLabel(t,r,n,e)},this.onDeleteLabel=e=>{const{accountIndex:t,derivation:s,modalsActions:n,walletIndex:r}=this.props;n.showModal("DELETE_ADDRESS_LABEL_MODAL",{accountIdx:t,addressIdx:e,derivation:s,origin:"SettingsPage",walletIdx:r})},this.onEditBtcAccountLabel=()=>{const{accountIndex:e,accountLabel:t,walletActions:s}=this.props;s.editBtcAccountLabel(e,t)},this.onShowXPub=()=>{const{modalsActions:e,xpub:t}=this.props;e.showModal("SHOW_XPUB_MODAL",{origin:"SettingsPage",xpub:t})},this.onShowFundRecovery=e=>{const{modalsActions:t}=this.props;t.showModal("FUND_RECOVERY_MODAL",{accountIndex:e,coin:"BTC",origin:"SettingsPage"})},this.onMakeDefault=()=>{const{accountIndex:e,coreActions:t}=this.props;t.setDefaultAccountIdx(e)},this.onGenerateNextAddress=()=>{const{alertActions:e,componentActions:t,derivation:s,unusedAddresses:n,walletIndex:r}=this.props;(0,tt.Z)(n.getOrElse([]))>=15?e.displayError(nt.W1):t.generateNextReceiveAddress(r,s)},this.onSetArchived=()=>{const{accountIndex:e,coreActions:t,routerActions:s}=this.props;t.setAccountArchived(e,!0),s.push("/settings/addresses/btc")}}componentDidMount(){const{componentActions:e,derivation:t,walletIndex:s}=this.props;e.fetchUnusedAddresses(s,t)}componentDidUpdate(e){this.props.derivation!==e.derivation&&this.props.componentActions.fetchUnusedAddresses(this.props.walletIndex,this.props.derivation)}render(){const{accountLabel:e,derivation:t,isDefault:s,search:r,unusedAddresses:a,walletIndex:o}=this.props;return n.createElement(n.Fragment,null,n.createElement(at,null,n.createElement(ot,null,n.createElement(b.xv,{color:"grey900","data-e2e":"btcWalletName",size:"20px",weight:500},e),n.createElement(Ge.Z,null,n.createElement(et.Z,{selected:(0,st.Z)("bech32",t)},n.createElement(Be.Ji,{to:`/settings/addresses/btc/${o}/bech32`},n.createElement(ct,{weight:500,size:"13px","data-e2e":"btcManageSegwitWalletLink"},"Segwit"))),n.createElement(et.Z,{selected:(0,st.Z)("legacy",t)},n.createElement(Be.Ji,{to:`/settings/addresses/btc/${o}/legacy`},n.createElement(ct,{weight:500,size:"13px","data-e2e":"btcManageLegacyWalletLink"},"Legacy")))),s&&n.createElement(b.jL,{label:!0,"data-e2e":"btcDefaultWallet"},n.createElement(f.Z,{id:"scenes.settings.addresses.btc.manageaddresses.unusedaddresses.isdefault",defaultMessage:"Default"}))),n.createElement("div",null,n.createElement(b.zw,{color:"grey900",down:!0,forceSelected:!0,margin:"0 3px 0 0",width:"100px",textAlign:"end",selectedComponent:n.createElement(b.rU,{weight:500,size:"13px","data-e2e":"btcWalletMoreOptionsDropdown"},n.createElement(f.Z,{id:"buttons.manage",defaultMessage:"Manage"})),components:[n.createElement(it,{key:"editName",size:"small",onClick:()=>{this.onEditBtcAccountLabel(),this.props.walletActions.setManageWallet({currency:"BTC",selection:"EditWalletName"})},"data-e2e":"btcEditWalletNameLink"},n.createElement(f.Z,{id:"scenes.settings.manage_addresses.edit_name",defaultMessage:"Edit Name"})),!s&&n.createElement(n.Fragment,null,n.createElement(it,{size:"small",onClick:this.onMakeDefault,"data-e2e":"btcMakeWalletDefaultLink"},n.createElement(f.Z,{id:"scenes.settings.manage_addresses.make_default",defaultMessage:"Make Default"})),n.createElement(it,{size:"small",onClick:this.onSetArchived,"data-e2e":"btcArchiveWalletLink"},n.createElement(f.Z,{id:"scenes.settings.manage_addresses.archive",defaultMessage:"Archive"}))),n.createElement(it,{key:"showXpub",size:"small",onClick:()=>{this.onShowXPub(),this.props.walletActions.setManageWallet({currency:"BTC",selection:"ShowXPub"})},"data-e2e":"btcShowWalletXpubLink"},n.createElement(f.Z,{id:"scenes.settings.manage_addresses.show_xpub",defaultMessage:"Show xPub"})),n.createElement(it,{key:"recoverFunds",size:"small",onClick:()=>{this.onShowFundRecovery(o),this.props.walletActions.setManageWallet({currency:"BTC",selection:"RecoverFunds"})},"data-e2e":"btcShowWalletXpubLink"},n.createElement(f.Z,{id:"scenes.settings.addresses.show_fund_recovery",defaultMessage:"Recover Funds"}))].filter((e=>e))}))),n.createElement(lt,null,n.createElement("div",null,n.createElement(dt,null,n.createElement(f.Z,{id:"scenes.settings.addresses.btc.manageaddresses.unusedaddresses.title",defaultMessage:"Unused Addresses"})),n.createElement(x.g3,null,n.createElement(f.Z,{id:"scenes.settings.addresses.btc.manageaddresses.unusedaddresses.desc",defaultMessage:"Wallets contain an unlimited number of addresses that you can use to receive funds. Your wallet will automatically manage your bitcoin addresses for you. The addresses below are only a subset that you have manually created and labeled."}))),n.createElement("div",null,n.createElement(b.zx,{"data-e2e":"btcAddNextAddressButton",height:"36px",nature:"primary",onClick:this.onGenerateNextAddress,size:"14px"},n.createElement(f.Z,{id:"scenes.settings.addresses.btc.manageaddresses.unusedaddresses.addnext",defaultMessage:"Add Next Address"})))),a?a.cata({Failure:()=>n.createElement("div",null),Loading:()=>n.createElement(b.Re,{style:{margin:"25px auto"},width:"100px",height:"12px"}),NotAsked:()=>n.createElement("div",null),Success:e=>n.createElement(UnusedAddresses_template,{search:r,onDeleteLabel:this.onDeleteLabel,onEditLabel:this.onEditLabel,unusedAddresses:e})}):null)}}const mt=(0,c.connect)(((e,t)=>{const{derivation:s,walletIndex:n}=t,r=m.Yk.w5.selectHDAccounts(e.walletPath.wallet).get(n),a=parseInt(n,10)===m.Yk.LW.selectDefaultAccountIdx(m.Yk.w5.selectHdWallets(e.walletPath.wallet).get(0)),o=h.wl.wx.F4.getWalletUnusedAddresses(e,n,s);return{accountIndex:(0,je.Z)("index",r),accountLabel:(0,je.Z)("label",r),isDefault:a,search:(0,u.Z)("manageAddresses")(e,"search"),unusedAddresses:o,xpub:m.Yk.Jk.selectXpub(r,s)}}),(e=>({alertActions:(0,d.bindActionCreators)(h.Nw.$u,e),componentActions:(0,d.bindActionCreators)(h.Nw.wx.manageAddresses,e),coreActions:(0,d.bindActionCreators)(h.Nw.vE.gU,e),modalsActions:(0,d.bindActionCreators)(h.Nw.qk,e),routerActions:(0,d.bindActionCreators)(h.Nw.Nd,e),walletActions:(0,d.bindActionCreators)(h.Nw.gU,e)})))(ut);var pt=s("./src/components/Display/CoinDisplay/index.tsx");const ht=(0,i.ZP)(b.iA)`
  > div:last-child {
    border-bottom: none;
  }
`,UsedTable=({children:e})=>n.createElement(ht,{"data-e2e":"btcUsedAddressesTable"},n.createElement(b.xD,null,n.createElement(b.pj,{width:"40%"},n.createElement(b.xv,{color:"grey900",size:"14px",weight:500},n.createElement(f.Z,{id:"copy.address",defaultMessage:"Address"}))),n.createElement(b.pj,{width:"40%"},n.createElement(b.xv,{color:"grey900",size:"14px",weight:500},n.createElement(f.Z,{id:"scenes.settings.addresses.btc.manageaddresses.usedaddresses.usedaddressestable.label",defaultMessage:"Label"}))),n.createElement(b.pj,{width:"20%",style:{display:"flex",justifyContent:"flex-end"}},n.createElement(b.xv,{color:"grey900",size:"14px",weight:500,style:{marginRight:"8px"}},n.createElement(f.Z,{id:"copy.balance",defaultMessage:"Balance"})),n.createElement(b.G0,{id:"settingsBtcUsedBalace"},n.createElement(b.nw,{name:"info"})))),e),UsedTableEntry=({address:e,search:t})=>!t||e.address.toLowerCase().indexOf(t.toLowerCase())>-1||e.label&&e.label.toLowerCase().indexOf(t.toLowerCase())>-1?n.createElement(b.SC,{"data-e2e":"btcUsedAddressesRow"},n.createElement(b.pj,{width:"40%",style:{wordBreak:"break-all"}},n.createElement(b.rU,{href:`/root/btc/address/${e.address}`,size:"13px",weight:500,target:"_blank","data-e2e":"btcUsedAddressLink"},e.address)),n.createElement(b.pj,{width:"40%"},n.createElement(b.xv,{size:"13px",weight:500},e.label)),n.createElement(b.pj,{width:"20%",style:{display:"flex",justifyContent:"flex-end"}},n.createElement(b.xv,{size:"13px",weight:500},n.createElement(pt.Z,{coin:"BTC",size:"13px",weight:400},e.final_balance)))):null,Table_template=({search:e,usedAddresses:t})=>n.createElement(n.Fragment,null,t.length?n.createElement(UsedTable,null,t.map(((t,s)=>n.createElement(UsedTableEntry,{key:s,address:t,search:e})))):n.createElement(b.xv,{color:"grey700","data-e2e":"btcNoUsedAddresses",size:"16px",style:{marginTop:20,textAlign:"center"},weight:500},n.createElement(f.Z,{id:"scenes.settings.addresses.btc.manageaddresses.usedaddresses.usedaddressestable.nousedmessage",defaultMessage:"This wallet has no used addresses."})));class gt extends n.PureComponent{componentDidMount(){const{derivation:e,walletIndex:t}=this.props;this.props.componentActions.fetchUsedAddresses(t,e)}render(){const{search:e,usedAddresses:t}=this.props;return t?t.cata({Failure:()=>n.createElement("div",null),Loading:()=>n.createElement(b.Re,{style:{margin:"25px auto"},width:"100px",height:"12px"}),NotAsked:()=>n.createElement("div",null),Success:t=>n.createElement(Table_template,{usedAddresses:t,search:e})}):null}}const ft=(0,c.connect)(((e,t)=>({search:(0,u.Z)("manageAddresses")(e,"search"),usedAddresses:h.wl.wx.F4.getWalletUsedAddresses(e,t.walletIndex,t.derivation)})),(e=>({componentActions:(0,d.bindActionCreators)(h.Nw.wx.manageAddresses,e)})))(gt),yt=i.ZP.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  > :first-child {
    padding-right: 100px;
  }
`,UsedAddresses_template=({derivation:e,onShowUsedAddresses:t,usedAddressesVisible:s,walletIndex:r})=>n.createElement(n.Fragment,null,n.createElement(yt,null,n.createElement("div",null,n.createElement(b.xv,{color:"black",weight:500,size:"16px"},n.createElement(f.Z,{id:"scenes.settings.addresses.btc.manageaddresses.usedaddresses.title",defaultMessage:"Used Addresses"})),n.createElement(x.g3,null,n.createElement(f.Z,{id:"scenes.settings.addresses.btc.manageaddresses.usedaddresses.usedaddressestable.message",defaultMessage:"Previously used addresses are helpful for viewing associated balances and debugging. We do not recommend re-using these addresses due to user privacy concerns. Change addresses are not shown here."}))),n.createElement("div",null,n.createElement(b.zx,{"data-e2e":"btcShowUsedAddressesLink",height:"36px",nature:"primary",onClick:t,size:"14px"},s?n.createElement(f.Z,{id:"scenes.settings.addresses.btc.manageaddresses.usedaddresses.hide",defaultMessage:"Hide Addresses"}):n.createElement(f.Z,{id:"scenes.settings.addresses.btc.manageaddresses.usedaddresses.show",defaultMessage:"Reveal Addresses"})))),s&&n.createElement(ft,{derivation:e,walletIndex:r}));class bt extends n.PureComponent{constructor(){super(...arguments),this.onShowUsedAddresses=()=>{const{componentActions:e,derivation:t,modalsActions:s,usedAddressesVisible:n,walletIndex:r}=this.props;n?e.toggleUsedAddresses(r,t,!1):s.showModal("SHOW_USED_ADDRESS_MODAL",{derivation:t,origin:"SettingsPage",walletIndex:r})}}render(){const{derivation:e,usedAddressesVisible:t,walletIndex:s}=this.props;return n.createElement(UsedAddresses_template,{derivation:e,onShowUsedAddresses:this.onShowUsedAddresses,usedAddressesVisible:t,walletIndex:s})}}const xt=(0,c.connect)(((e,t)=>({usedAddressesVisible:h.wl.wx.F4.getWalletUsedAddressVisibility(e,t.walletIndex,t.derivation)})),(e=>({componentActions:(0,d.bindActionCreators)(h.Nw.wx.manageAddresses,e),modalsActions:(0,d.bindActionCreators)(h.Nw.qk,e)})))(bt),{WALLET_TX_SEARCH:wt}=h.o4.cr,Et=i.ZP.section`
  box-sizing: border-box;
`;class vt extends n.PureComponent{render(){const e=this.props.match.params;return n.createElement(Et,null,n.createElement(mt,{derivation:e.derivation,walletIndex:e.walletIndex}),n.createElement(xt,{derivation:e.derivation,walletIndex:e.walletIndex}))}}const At=(0,Ye.Z)({form:wt})(vt);var _t=s("../../node_modules/ramda/es/isEmpty.js"),Ct=s("./src/components/Balances/selectors.ts"),Pt=s("./src/components/QRCode/Wrapper/index.js");const Zt=i.ZP.div`
  display: flex;
  margin-top: 1.5rem;
  padding-right: 1.5rem;
`,kt=i.ZP.div`
  margin-top: 1.5rem;

  > div {
    word-break: break-word;
  }

  > div:not(:first-child) {
    margin-top: 18px;
  }
`,jt=i.ZP.div`
  display: flex;
  flex-direction: column;
`,Lt=(0,i.ZP)(jt)`
  border-bottom: ${e=>`solid 1px ${e.theme.grey000}`};
  padding-bottom: 0.5rem;
`,St=(0,i.ZP)(b.xv)`
  white-space: nowrap;
`,Ot=(0,i.ZP)(b.xv)`
  word-wrap: break-word;
`,Mt=i.ZP.div`
  display: inline-block;
  margin-right: 1.5rem;
  border: none;
  border-radius: 1rem;

  ${v.BC.laptop`
    flex-direction: column;
  `};
`,Addresses_QrCodeAddressInfo=({addr:e,balance:t,coin:s,isEth:r,isLegacy:a,priv:o,showLegacyTitle:l})=>n.createElement(Zt,null,n.createElement(Mt,null,n.createElement(Pt.Z,{value:o,size:230})),n.createElement(kt,null,r&&a?l?n.createElement(Lt,null,n.createElement(St,{color:"blue600",size:"16px",weight:500},n.createElement(f.Z,{id:"scenes.settings.addresses.eth.legacy",defaultMessage:"Legacy Address Info"}))):n.createElement(Lt,null,n.createElement(St,{color:"blue600",size:"16px",weight:500},n.createElement(f.Z,{id:"scenes.settings.addresses.eth.address",defaultMessage:"Address Info"}))):null,n.createElement(jt,null,n.createElement(St,{color:"grey600",size:"12px",weight:500},n.createElement(f.Z,{id:"copy.balance",defaultMessage:"Balance"})),n.createElement(pt.Z,{coin:s,size:"14px",weight:600},t)),n.createElement(jt,null,n.createElement(St,{color:"grey600",size:"12px",weight:500},n.createElement(f.Z,{id:"copy.address",defaultMessage:"Address"})),n.createElement(Ot,{size:"14px",weight:600,"data-e2e":"xlmPrivateKeyAddress"},e)),n.createElement(jt,null,n.createElement(St,{color:"grey600",size:"12px",weight:500},n.createElement(f.Z,{id:"copy.private_key",defaultMessage:"Private Key"})),n.createElement(Ot,{size:"14px",weight:600,"data-e2e":"xlmPrivateKeyPrivKey"},o)))),zt=i.ZP.div`
  height: 19.5rem;
  width: 19.5rem;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
`,Bt=(0,i.ZP)(b.xv)`
  margin-bottom: 1.5rem;
`,Wt=(0,i.ZP)(b.xv)`
  margin-bottom: 0.25rem;
`,Tt=(0,i.ZP)(b.xv)`
  margin-bottom: 2rem;
`,It=(0,i.ZP)(b.JO)`
  margin-bottom: 20px;
`,Addresses_ViewKeys=({showQrCode:e,toggleQrCode:t})=>n.createElement(zt,null,n.createElement(It,{name:"key",color:"blue600",size:"16px"}),n.createElement(Bt,{color:"grey800",size:"20px",weight:600},n.createElement(f.Z,{id:"scenes.settings.addresses.viewkeys.header",defaultMessage:"View Your Private Keys."})),n.createElement(Wt,{color:"error",size:"14px",weight:600},n.createElement(f.Z,{id:"scenes.settings.addresses.viewkeys.warning",defaultMessage:"Warning"})),n.createElement(Tt,{color:"grey600",size:"14px",weight:500},n.createElement(f.Z,{id:"scenes.settings.addresses.viewkeys.warning-body",defaultMessage:"Do not share your private keys with anyone. We will never ask for them. Sharing your keys may result in a loss of funds."})),n.createElement(b.zx,{"data-e2e":"show_private_key_button",width:"262px",nature:"empty-blue",onClick:t},e?n.createElement(f.Z,{id:"buttons.hide",defaultMessage:"Hide"}):n.createElement(f.Z,{id:"buttons.show",defaultMessage:"Show"}))),Rt=i.ZP.div`
  display: ${e=>e.showQrCode?"flex":"inline-block"};
  border: ${e=>e.color?`solid 1px ${e.theme[e.color]}`:"none"};
  border-radius: 1rem;

  ${v.BC.laptop`
    flex-direction: column;
  `};
`,Dt=i.ZP.div`
  display: flex;
  flex-direction: column;
`,Eth_template=({addressInfo:e,coin:t,isEth:s,isLegacy:r,legacyAddressInfo:a,showQrCode:o,toggleQrCode:l})=>n.createElement(Rt,{color:"grey000",showQrCode:o},n.createElement(Addresses_ViewKeys,{showQrCode:o,toggleQrCode:l}),o&&n.createElement(Dt,null,s&&a&&n.createElement(Addresses_QrCodeAddressInfo,Object.assign({},a,{coin:t,isEth:s,isLegacy:r,showLegacyTitle:s})),n.createElement(Addresses_QrCodeAddressInfo,Object.assign({},e,{coin:t,isEth:s,isLegacy:r})))),isValid=e=>!(0,Oe.Z)(e)&&!(0,_t.Z)(e);class Nt extends n.Component{constructor(){super(...arguments),this.state={hasCheckedSecondPassword:!1,showQrCode:!1},this.toggleQrCode=()=>{this.state.hasCheckedSecondPassword?this.setState((e=>({showQrCode:!e.showQrCode}))):(this.props.showEthPrivateKey(this.props.isLegacy),this.setState((e=>({hasCheckedSecondPassword:!0,showQrCode:!e.showQrCode}))))},this.checkQrCode=({addressInfo:e,isLegacy:t,legacyAddressInfo:s})=>t?isValid((0,je.Z)("priv",s))&&isValid((0,je.Z)("priv",e)):isValid((0,je.Z)("priv",s))||isValid((0,je.Z)("priv",e))}componentDidMount(){this.props.isLegacy?this.props.fetchLegacyBalance():this.props.showEthPrivateKey(this.props.isLegacy)}componentWillUnmount(){this.props.clearShownEthPrivateKey(),this.props.clearShownEthLegacyPrivateKey()}render(){const{addressInfo:e,coin:t,isLegacy:s,legacyAddressInfo:r}=this.props,a=this.checkQrCode(this.props);return n.createElement(Eth_template,{addressInfo:e,coin:t,isEth:!0,isLegacy:s,legacyAddressInfo:r,showQrCode:this.state.showQrCode&&a,toggleQrCode:this.toggleQrCode})}}const Ut=(0,c.connect)(((e,t)=>function getData(e,t){var s=h.wl.vE.Nu.BF,n=s.getLegacyAccountAddress(e).getOrElse(""),r={addr:n,balance:h.wl.vE.aT.eth.getLegacyBalance(e).getOrElse(0),priv:e.securityCenter.shownEthLegacyPrivKey};return{addressInfo:{addr:s.getContext(e).getOrElse(""),balance:(0,Ct.k7)(e).getOrElse(0),priv:e.securityCenter.shownEthPrivKey},coin:"ETH",isLegacy:!!n,legacyAddressInfo:n?r:null}}(e)),(e=>({clearShownEthLegacyPrivateKey:()=>e(h.Nw.qz.Xd.clearShownEthLegacyPrivateKey()),clearShownEthPrivateKey:()=>e(h.Nw.qz.Xd.clearShownEthPrivateKey()),fetchLegacyBalance:()=>e(h.Nw.vE.aT.eth.fetchLegacyBalance()),showEthPrivateKey:t=>e(h.Nw.qz.Xd.showEthPrivateKey(t))})))(Nt);var $t=s("../../node_modules/redux-form/es/Field.js"),Qt=s("./src/components/Form/index.ts"),Ft=s("./src/components/HorizontalMenu/index.tsx"),Xt=s("./src/components/Layout/index.ts");const{WALLET_TX_SEARCH:Ht}=h.o4.cr,Kt=i.ZP.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,qt=i.ZP.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  ${v.BC.atLeastTablet`
    width: 300px;
  `}
`,Vt=(0,i.ZP)(b.JO)`
  position: absolute;
  top: 10px;
  right: 10px;
`,Jt=i.ZP.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`,Yt=(0,i.ZP)(b.xv)`
  margin: 4px 0;
`,Gt=(0,d.compose)(l.Z,(0,Ye.Z)({form:Ht}))((()=>n.createElement(Xt.M5,null,n.createElement(Jt,null,n.createElement(Yt,{size:"26px",weight:600,color:"black"},n.createElement(f.Z,{id:"scenes.settings.menu.title",defaultMessage:"Wallets & Addresses"})),n.createElement(b.xv,{size:"14px",weight:500,color:"grey700"},n.createElement(f.Z,{id:"scenes.settings.addresses.subtitle",defaultMessage:"Manage your wallets, addresses and private keys."}))),n.createElement(Ft.Z,{border:!1},n.createElement(Kt,null,n.createElement(b.d0,null,n.createElement(Be.Ji,{to:"/settings/addresses/btc"},n.createElement(b.gq,{activeClassName:"active","data-e2e":"btcWalletSettingsLink"},n.createElement(f.Z,{id:"scenes.settings.addresses.menutop.btc",defaultMessage:"Bitcoin"}))),n.createElement(Be.Ji,{to:"/settings/addresses/bch"},n.createElement(b.gq,{activeClassName:"active","data-e2e":"bchWalletSettingsLink"},n.createElement(f.Z,{id:"scenes.settings.addresses.menutop.bch",defaultMessage:"Bitcoin Cash"}))),n.createElement(Be.Ji,{to:"/settings/addresses/eth"},n.createElement(b.gq,{activeClassName:"active","data-e2e":"ethWalletSettingsLink"},n.createElement(f.Z,{id:"scenes.settings.addresses.menutop.eth",defaultMessage:"Ethereum"}))),n.createElement(Be.Ji,{to:"/settings/addresses/xlm"},n.createElement(b.gq,{activeClassName:"active","data-e2e":"xlmWalletSettingsLink"},n.createElement(f.Z,{id:"scenes.settings.addresses.menutop.xlm",defaultMessage:"Stellar"})))),n.createElement(qt,{"data-e2e":"walletSettingsSearch"},n.createElement($t.Z,{name:"search",height:"40px",placeholder:"Search",component:Qt.zC}),n.createElement(Vt,{name:"magnifier",size:"20px"})))))));const es=i.ZP.div`
  display: ${e=>e.showQrCode?"flex":"inline-block"};
  border: ${e=>e.color?`solid 1px ${e.theme[e.color]}`:"none"};
  border-radius: 1rem;

  ${v.BC.laptop`
    flex-direction: column;
  `};
`,ts=i.ZP.div`
  display: flex;
  flex-direction: column;
`,Xlm_template=({addressInfo:e,coin:t,showQrCode:s,toggleQrCode:r})=>n.createElement(es,{color:"grey000",showQrCode:s},n.createElement(Addresses_ViewKeys,{showQrCode:s,toggleQrCode:r}),s&&n.createElement(ts,null,n.createElement(Addresses_QrCodeAddressInfo,Object.assign({},e,{coin:t}))));class ss extends n.Component{constructor(){super(...arguments),this.state={hasCheckedSecondPassword:!1,showQrCode:!1},this.toggleQrCode=()=>{this.state.hasCheckedSecondPassword?this.setState((e=>({showQrCode:!e.showQrCode}))):(this.props.showXlmPrivateKey(),this.setState((e=>({hasCheckedSecondPassword:!0,showQrCode:!e.showQrCode}))))}}componentWillUnmount(){this.props.clearShownXlmPrivateKey()}render(){const{addressInfo:e,coin:t}=this.props,s=(r=(0,je.Z)("priv",e),!(0,Oe.Z)(r)&&!(0,_t.Z)(r));var r;return n.createElement(Xlm_template,{addressInfo:e,coin:t,showQrCode:this.state.showQrCode&&s,toggleQrCode:this.toggleQrCode})}}const ns=(0,c.connect)(((e,t)=>function getData(e,t){var s=h.wl.vE.Nu.F2.getDefaultAccountId(e).getOrElse(""),n=h.wl.vE.aT.xlm.getAccountBalance(s,e).getOrElse(0);return{addressInfo:{addr:s,balance:m.ei.convertCoinToCoin({baseToStandard:!1,coin:"XLM",value:n}),priv:e.securityCenter.shownXlmPrivKey},coin:"XLM"}}(e)),(e=>({clearShownXlmPrivateKey:()=>e(h.Nw.qz.Xd.clearShownXlmPrivateKey()),fetchLegacyBalance:()=>e(h.Nw.vE.aT.eth.fetchLegacyBalance()),showXlmPrivateKey:()=>e(h.Nw.qz.Xd.showXlmPrivateKey())})))(ss);function Addresses_typeof(e){return Addresses_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Addresses_typeof(e)}var rs,as;function Addresses_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Addresses_defineProperties(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Addresses_setPrototypeOf(e,t){return Addresses_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},Addresses_setPrototypeOf(e,t)}function Addresses_createSuper(e){var t=function Addresses_isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var s,n=Addresses_getPrototypeOf(e);if(t){var r=Addresses_getPrototypeOf(this).constructor;s=Reflect.construct(n,arguments,r)}else s=n.apply(this,arguments);return Addresses_possibleConstructorReturn(this,s)}}function Addresses_possibleConstructorReturn(e,t){if(t&&("object"===Addresses_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function Addresses_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function Addresses_getPrototypeOf(e){return Addresses_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},Addresses_getPrototypeOf(e)}function Addresses_taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var os=i.ZP.div(rs||(rs=Addresses_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]))),ls=i.ZP.section(as||(as=Addresses_taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n"]))),is=function(e){!function Addresses_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Addresses_setPrototypeOf(e,t)}(AddressesContainer,e);var t=Addresses_createSuper(AddressesContainer);function AddressesContainer(){return Addresses_classCallCheck(this,AddressesContainer),t.apply(this,arguments)}return function Addresses_createClass(e,t,s){return t&&Addresses_defineProperties(e.prototype,t),s&&Addresses_defineProperties(e,s),e}(AddressesContainer,[{key:"render",value:function render(){return n.createElement(os,null,n.createElement(Gt,null),n.createElement(ls,null,n.createElement(r.Z,null,n.createElement(a.Z,{component:At,path:"/settings/addresses/btc/:walletIndex/:derivation"}),n.createElement(a.Z,{component:Je,exact:!0,path:"/settings/addresses/btc"}),n.createElement(a.Z,{component:ce,exact:!0,path:"/settings/addresses/bch"}),n.createElement(a.Z,{component:Ut,exact:!0,path:"/settings/addresses/eth"}),n.createElement(a.Z,{component:ns,exact:!0,path:"/settings/addresses/xlm"}),n.createElement(o.Z,{from:"/settings/addresses",to:"/settings/addresses/btc"}))))}}]),AddressesContainer}(n.PureComponent);const cs=(0,l.Z)(is)},"./src/components/Box/index.tsx":(e,t,s)=>{s.d(t,{xu:()=>g,W2:()=>h,Ec:()=>Box_SavedRecurringBuy});var n=s("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),r=s("./src/services/styles/index.ts"),a=s("../../node_modules/react/index.js"),o=s("./node_modules/react-intl/lib/src/components/message.js"),l=s("../../node_modules/polished/dist/polished.esm.js"),i=s("../blockchain-info-components/src/index.js"),c=s("./src/components/Flyout/model.tsx");const d=(0,n.ZP)(i.xu)`
  cursor: unset;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 49%;
  min-width: 392px;

  @media (max-width: 767px) {
    width: 100%;
  }

  @media (max-width: 1114px) {
    width: 100%;
  }
`,u=n.ZP.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`,m=n.ZP.div`
  display: flex;
  justify-content: flex-end;
`,p=n.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  min-width: 40px;
  border-radius: 20px;
  margin-right: 20px;
  background-color: ${e=>(0,l.$n)(.35,e.theme[e.coin])};
`,Box_SavedRecurringBuy=({action:e,amount:t,coin:s,nextPayment:n,onClick:r,period:l})=>a.createElement(d,{disabled:!1,isMethod:!1,isMobile:!1},a.createElement(u,null,a.createElement(p,{coin:s},a.createElement(i.JO,{cursor:!0,"data-e2e":`${s}savedRecurringBuy`,name:"sync-regular",size:"20px",color:s,role:"button"})),a.createElement(i.Qt,null,a.createElement(i.xv,{weight:600,size:"16px",color:"grey900",style:{marginBottom:"0"}},t," ",(0,c.O7)(l)),a.createElement(i.xv,{weight:500,size:"14px",color:"grey600",style:{marginBottom:"0"}},(0,c.Nd)(e,n)))),a.createElement(m,null,a.createElement(i.zx,{"data-e2e":`${s}savedRecurringBuyViewDetails`,nature:"empty-blue",onClick:r},a.createElement(o.Z,{id:"copy.view_details",defaultMessage:"View Details"})))),h=n.ZP.div`
  display: flex;
  > div {
    margin-right: 24px;
    &:last-child {
      margin-right: 0px;
    }
  }
  ${r.BC.laptop`
    flex-direction: column;
    align-items: start;
    > div {
      margin-right: 0;
      margin-bottom: 12px;
    }
  `};
`,g=n.ZP.div`
  position: relative;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.grey000};
  width: 280px;
`},"./src/components/HorizontalMenu/index.tsx":(e,t,s)=>{s.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var n=s("../../node_modules/react/index.js"),r=s("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),a=s("./src/services/styles/index.ts");const o=r.ZP.div`
  box-sizing: border-box;
  background-color: ${e=>e.theme.white};
  border-bottom: 1px solid ${e=>e.border?e.theme.grey000:"transparent"};
  margin-bottom: ${e=>e.marginBottom};
  padding-bottom: 12px;
  width: 100%;

  ${a.BC.tabletL`
    margin-left: 0px;
  `}
`,l=r.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  ${a.BC.atLeastTabletL`
    flex-direction: row;
    justify-content: space-between;
  `}
`,__WEBPACK_DEFAULT_EXPORT__=({border:e=!0,children:t,marginBottom:s="12px"})=>n.createElement(o,{border:e,marginBottom:s},n.createElement(l,null,t))},"./src/components/Layout/index.ts":(e,t,s)=>{s.d(t,{M5:()=>l,wX:()=>i,bn:()=>c,wW:()=>d,Qc:()=>u,US:()=>m,bz:()=>p,Pj:()=>h,l0:()=>g});var n=s("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),r=s("../blockchain-info-components/src/index.js"),a=s("./src/services/styles/index.ts"),o=s("./src/components/Box/index.tsx");const l=n.ZP.div`
  background-color: ${e=>e.theme.white};
  position: sticky;
  width: 100%;
  z-index: 1;
  top: 0;
`,i=n.ZP.div`
  width: 100%;
  height: 100%;

  ${e=>e.centerContent&&"\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  "}
`,c=n.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  min-width: 40px;
  background-color: ${e=>e.theme.blue000};
  border-radius: 40px;
`,d=n.ZP.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  > :first-child {
    margin-right: 16px;
  }
  ${a.BC.mobile`
    flex-direction: column;
  `}
`,u=n.ZP.div`
  display: flex;
  align-items: center;
  > :first-child {
    margin-right: 16px;
  }
`,m=(0,n.ZP)(r.xv)`
  font-size: 32px;
  color: ${e=>e.theme.grey800};
  font-weight: 600;
  margin-right: 14px;
`,p=(0,n.ZP)(r.xv)`
  font-size: 16px;
  color: ${e=>e.theme.grey600};
  font-weight: 500;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`,h=(0,n.ZP)(o.xu)`
  background-image: url('/img/buy-sell-learn-more.png');
  /* stylelint-disable */
  background-image: -webkit-image-set(
    url('/img/buy-sell-learn-more.png') 1x,
    url('/img/buy-sell-learn-more@2x.png') 2x
  );
  /* stylelint-enable */
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,g=n.ZP.div`
  position: relative;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.grey000};
  background-image: url('/img/bg-banner-pattern.svg');
  background-repeat: repeat-y;
  background-position: right;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`},"./src/components/Setting/index.tsx":(e,t,s)=>{s.d(t,{u7:()=>a,GV:()=>o,g3:()=>l,O3:()=>c,iJ:()=>d,lU:()=>u,kW:()=>m,lw:()=>p,ZE:()=>h});var n=s("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),r=s("./src/services/styles/index.ts");const a=n.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 10px 0 10px 0;
  box-sizing: border-box;

  ${r.BC.atLeastTabletL`
    align-items: flex-end;
    width: 30%;
  `}
`,o=n.ZP.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px 0px;
  border-bottom: 1px solid ${e=>e.theme.grey000};

  ${r.BC.atLeastTabletL`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  `}
`,l=n.ZP.div`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 13px;
  margin-top: 5px;
  margin-bottom: 10px;
  color: ${e=>e.theme.grey700};

  & > * {
    display: inline;
    margin-right: 5px;
  }
`;var i=s("./src/components/Form/index.ts");const c=(0,n.ZP)(i.l0)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`,d=n.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 17px;
  color: ${e=>e.theme.black};
  margin-bottom: 3px;

  & > * {
    margin-right: 10px;
  }
`,u=n.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
`,m=n.ZP.div`
  display: block;
  padding: 1px 5px;
  box-sizing: border-box;
  border-radius: 3px;
  background-color: ${e=>e.active?e.theme.success:e.theme.error};
  color: ${e=>e.theme.white};
  font-size: 12px;
  font-weight: 500;
  text-transform: capitalize;
`,p=n.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 10px 0 10px 0;
  box-sizing: border-box;

  ${r.BC.atLeastTabletL`
    width: 50%; 
  `}
`,h=n.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  & > *:nth-child(2) {
    margin-top: 5px;
  }

  ${r.BC.atLeastTabletL`
  align-items: flex-end;
  `}
`}}]);