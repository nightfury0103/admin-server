"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[8503],{"./src/components/Display/ComboDisplay/index.js":(e,t,n)=>{n.d(t,{Z:()=>g});var o,r,i=n("../../node_modules/react/index.js"),s=n("../../node_modules/prop-types/index.js"),a=n.n(s),c=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),l=n("../blockchain-info-components/src/index.js"),d=n("./src/components/Display/CoinDisplay/index.tsx"),p=n("./src/components/Display/FiatDisplay/index.tsx");function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var m=c.ZP.div(o||(o=_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n"]))),u=c.ZP.div(r||(r=_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  padding-left: 5px;\n"]))),f=function ComboDisplay(e){return i.createElement(m,null,i.createElement(d.Z,e),i.createElement(u,null,i.createElement(l.xv,{weight:400},"("),i.createElement(p.Z,e),i.createElement(l.xv,{weight:400},")")))};f.propTypes={coin:a().string.isRequired};const y=f;function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var n,o=_getPrototypeOf(e);if(t){var r=_getPrototypeOf(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _getPrototypeOf(e){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(e)}var h=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(ComboDisplayContainer,e);var t=_createSuper(ComboDisplayContainer);function ComboDisplayContainer(){return _classCallCheck(this,ComboDisplayContainer),t.apply(this,arguments)}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(ComboDisplayContainer,[{key:"render",value:function render(){return i.createElement(y,this.props)}}]),ComboDisplayContainer}(i.PureComponent);y.propTypes={children:a().string.isRequired,coin:a().string.isRequired};const g=h},"./src/components/EmptyResults/index.js":(e,t,n)=>{n.d(t,{Z:()=>p});var o,r,i=n("../../node_modules/react/index.js"),s=n("./node_modules/react-intl/lib/src/components/message.js"),a=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),c=n("../blockchain-info-components/src/index.js");function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var n,o=_getPrototypeOf(e);if(t){var r=_getPrototypeOf(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _getPrototypeOf(e){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(e)}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var l=a.ZP.div(o||(o=_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n"]))),d=(0,a.ZP)(c.xv)(r||(r=_taggedTemplateLiteral(["\n  margin: 15px 0 5px;\n"])));const p=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(EmptyResultsContainer,e);var t=_createSuper(EmptyResultsContainer);function EmptyResultsContainer(){return _classCallCheck(this,EmptyResultsContainer),t.apply(this,arguments)}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(EmptyResultsContainer,[{key:"render",value:function render(){return i.createElement(l,{"data-e2e":"noTransactionsFound"},i.createElement(c.Ee,{name:"empty-tx",width:"250px"}),i.createElement(d,{size:"16px",weight:500},i.createElement(s.Z,{id:"components.emptytx.header",defaultMessage:"Oops, we couldn't find any transactions!"})),i.createElement(c.Qt,{inline:!0},i.createElement(c.xv,{size:"12px",weight:400},i.createElement(s.Z,{id:"components.emptytx.body",defaultMessage:"Please try filtering by a different criteria or"})),i.createElement(c.xv,{size:"12px",weight:400},i.createElement(c.rU,{size:"12px",href:"/support/",target:"_blank",referrer:"noreferrer"},i.createElement(s.Z,{id:"components.emptytx.body2",defaultMessage:"reach out to us"}))),i.createElement(c.xv,{size:"12px",weight:400},i.createElement(s.Z,{id:"components.emptytx.body3",defaultMessage:"if you need help."}))))}}]),EmptyResultsContainer}(i.PureComponent)},"./src/components/LazyLoadContainer/index.js":(e,t,n)=>{n.d(t,{Z:()=>m});var o,r,i=n("../../node_modules/react/index.js"),s=n("../../node_modules/prop-types/index.js"),a=n.n(s),c=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js");function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var n,o=_getPrototypeOf(e);if(t){var r=_getPrototypeOf(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(e)}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var l=c.ZP.div(o||(o=_taggedTemplateLiteral(["\n  height: 100%;\n  overflow: auto;\n"]))),d=c.ZP.div(r||(r=_taggedTemplateLiteral(["\n  width: 100%;\n"]))),p=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(LazyLoadContainer,e);var t=_createSuper(LazyLoadContainer);function LazyLoadContainer(){var e;_classCallCheck(this,LazyLoadContainer);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return _defineProperty(_assertThisInitialized(e=t.call.apply(t,[this].concat(o))),"setWrapperRef",(function(t){e.wrapper=t})),_defineProperty(_assertThisInitialized(e),"setContainerRef",(function(t){e.container=t})),_defineProperty(_assertThisInitialized(e),"onScroll",(function(){var t=e.props,n=t.onLazyLoad,o=t.triggerDistance,r=e.wrapper.getBoundingClientRect(),i=e.container.getBoundingClientRect();r.bottom+o>i.bottom&&n()})),e}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(LazyLoadContainer,[{key:"render",value:function render(){var e=this.props,t=e.children,n=e.className;return i.createElement(l,{className:n,onScroll:this.onScroll,ref:this.setWrapperRef},i.createElement(d,{className:"container",ref:this.setContainerRef},t))}}]),LazyLoadContainer}(i.PureComponent);p.propTypes={onLazyLoad:a().func.isRequired,triggerDistance:a().number},p.defaultProps={triggerDistance:200};const m=p},"./src/components/Box/index.tsx":(e,t,n)=>{n.d(t,{xu:()=>y,W2:()=>f,Ec:()=>Box_SavedRecurringBuy});var o=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),r=n("./src/services/styles/index.ts"),i=n("../../node_modules/react/index.js"),s=n("./node_modules/react-intl/lib/src/components/message.js"),a=n("../../node_modules/polished/dist/polished.esm.js"),c=n("../blockchain-info-components/src/index.js"),l=n("./src/components/Flyout/model.tsx");const d=(0,o.ZP)(c.xu)`
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
`,p=o.ZP.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`,m=o.ZP.div`
  display: flex;
  justify-content: flex-end;
`,u=o.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  min-width: 40px;
  border-radius: 20px;
  margin-right: 20px;
  background-color: ${e=>(0,a.$n)(.35,e.theme[e.coin])};
`,Box_SavedRecurringBuy=({action:e,amount:t,coin:n,nextPayment:o,onClick:r,period:a})=>i.createElement(d,{disabled:!1,isMethod:!1,isMobile:!1},i.createElement(p,null,i.createElement(u,{coin:n},i.createElement(c.JO,{cursor:!0,"data-e2e":`${n}savedRecurringBuy`,name:"sync-regular",size:"20px",color:n,role:"button"})),i.createElement(c.Qt,null,i.createElement(c.xv,{weight:600,size:"16px",color:"grey900",style:{marginBottom:"0"}},t," ",(0,l.O7)(a)),i.createElement(c.xv,{weight:500,size:"14px",color:"grey600",style:{marginBottom:"0"}},(0,l.Nd)(e,o)))),i.createElement(m,null,i.createElement(c.zx,{"data-e2e":`${n}savedRecurringBuyViewDetails`,nature:"empty-blue",onClick:r},i.createElement(s.Z,{id:"copy.view_details",defaultMessage:"View Details"})))),f=o.ZP.div`
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
`,y=o.ZP.div`
  position: relative;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.grey000};
  width: 280px;
`},"./src/components/Layout/index.ts":(e,t,n)=>{n.d(t,{M5:()=>a,wX:()=>c,bn:()=>l,wW:()=>d,Qc:()=>p,US:()=>m,bz:()=>u,Pj:()=>f,l0:()=>y});var o=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),r=n("../blockchain-info-components/src/index.js"),i=n("./src/services/styles/index.ts"),s=n("./src/components/Box/index.tsx");const a=o.ZP.div`
  background-color: ${e=>e.theme.white};
  position: sticky;
  width: 100%;
  z-index: 1;
  top: 0;
`,c=o.ZP.div`
  width: 100%;
  height: 100%;

  ${e=>e.centerContent&&"\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  "}
`,l=o.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  min-width: 40px;
  background-color: ${e=>e.theme.blue000};
  border-radius: 40px;
`,d=o.ZP.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  > :first-child {
    margin-right: 16px;
  }
  ${i.BC.mobile`
    flex-direction: column;
  `}
`,p=o.ZP.div`
  display: flex;
  align-items: center;
  > :first-child {
    margin-right: 16px;
  }
`,m=(0,o.ZP)(r.xv)`
  font-size: 32px;
  color: ${e=>e.theme.grey800};
  font-weight: 600;
  margin-right: 14px;
`,u=(0,o.ZP)(r.xv)`
  font-size: 16px;
  color: ${e=>e.theme.grey600};
  font-weight: 500;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`,f=(0,o.ZP)(s.xu)`
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
`,y=o.ZP.div`
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
`},"./src/scenes/Transactions/NonCustodialTx/Confirmations/index.tsx":(e,t,n)=>{n.d(t,{Z:()=>g});var o=n("../../node_modules/react/index.js"),r=n("./node_modules/react-intl/lib/src/components/message.js"),i=n("../../node_modules/react-redux/es/index.js"),s=n("../../node_modules/ramda/es/toString.js"),a=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),c=n("../blockchain-info-components/src/index.js"),l=n("./src/data/index.ts"),d=n("./src/services/styles/index.ts"),p=n("./src/scenes/Transactions/components/index.tsx"),m=n("../../node_modules/ramda/es/toLower.js");const getBlockHeight=(e,t)=>{const{coinfig:n}=window.coins[t];return l.wl.vE.aT.coins.getCustodialCoins().includes(t)?null:l.wl.vE.aT.coins.getErc20Coins().includes(t)?l.wl.vE.aT.eth.getHeight(e).getOrElse(0):l.wl.vE.aT[(0,m.Z)(t)].getHeight(e).getOrElse(0)},u=a.ZP.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 9;
  ${d.BC.atLeastMobile`
    flex-direction: row;
  `}
`,f=(0,a.ZP)(p.qe)`
  * {
    white-space: nowrap;
  }
`,y=(0,a.ZP)(c.G0)`
  position: relative;
  display: flex;
  justify-items: flex-start;
`,h=a.ZP.div`
  display: flex;
  justify-items: center;
  margin-left: 4px;
  & > :last-child {
    display: inline;
  }
`,g=(0,i.connect)(((e,t)=>({blockHeight:getBlockHeight(e,t.coin),domains:l.wl.vE.AW.getDomains(e).getOrElse({comRoot:"/root"})})))((e=>{const{blockHeight:t,coin:n,domains:i,isConfirmed:a,txBlockHeight:l=0}=e,d=t-l+1,m=e.confirmations||d>0&&l?d:0,{coinfig:g}=window.coins[n],{parentChain:x=n}=g.type,{minimumOnChainConfirmations:b=3}=window.coins[x].coinfig.type;return o.createElement(u,null,m>=b||a?o.createElement(p.qe,null,o.createElement(r.Z,{id:"scenes.transactions.content.pages.listitem.confirmation.confirmed",defaultMessage:"Transaction Confirmed"})):o.createElement(f,{size:"14px",weight:400,color:"grey400"},o.createElement(r.Z,{id:"scenes.transactions.content.pages.listitem.confirmation.unconfirmed",defaultMessage:"Pending: {count}/{total} Confirmations",values:{count:(0,s.Z)(m),total:b}})),o.createElement(h,null,m<b&&o.createElement(y,{id:"confirmations","data-iscapture":"true","data-offset":"{'left': 0.75}"},o.createElement(c.JO,{name:"question-in-circle"})),o.createElement(c.rU,{href:`${i.comRoot}/search/?search=${e.hash}`,target:"_blank","data-e2e":"transactionListItemExplorerLink"},o.createElement(c.JO,{name:"open-in-new-tab",color:"marketing-primary",cursor:!0,size:"17px"}))),o.createElement(c.u,{id:"confirmations",offset:{bottom:8}},o.createElement(r.Z,{id:"scenes.transactions.content.list.listitem.transactionunconfirmed",defaultMessage:"Your transaction will be complete after it has {minimumOnChainConfirmations} confirmations.",values:{minimumOnChainConfirmations:b}}),o.createElement("span",null," "),o.createElement(c.rU,{href:"/support/hc/en-us/articles/217116406-Why-hasn-t-my-transaction-confirmed-yet-",target:"_blank",size:"11px",weight:500,altFont:!0},"Learn more.")))}))},"./src/scenes/Transactions/NonCustodialTx/index.tsx":(e,t,n)=>{n.d(t,{Z:()=>S});var o=n("../../node_modules/react/index.js"),r=n("../../node_modules/react-redux/es/index.js"),i=n("../../node_modules/redux/es/redux.js"),s=n("./src/data/index.ts"),a=n("./node_modules/react-intl/lib/src/components/message.js"),c=n("../../node_modules/ramda/es/prop.js"),l=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),d=n("../blockchain-info-components/src/index.js"),p=n("./src/services/styles/index.ts"),m=n("./src/scenes/Transactions/components/index.tsx"),u=n("./src/scenes/Transactions/NonCustodialTx/Confirmations/index.tsx");const f=l.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`,y=l.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`,h=(0,l.ZP)(d.JO)`
  padding-left: 10px;
`,template=e=>{const{handleChange:t,value:n}=e;return o.createElement(f,{onClick:t},n?o.createElement(y,null,o.createElement(m.qe,{"data-e2e":"transactionListItemDescription"},n),o.createElement(h,{name:"pencil",color:"received",size:"14px",cursor:!0})):o.createElement(y,{"data-e2e":"transactionListItemAddDescription"},o.createElement(m.qe,{"data-e2e":"editTransactionDescriptionLink"},o.createElement(a.Z,{id:"components.editdescription.add",defaultMessage:"Add a description"})),o.createElement(h,{name:"pencil",color:"received",size:"14px",cursor:!0})))};class g extends o.PureComponent{constructor(e){super(e),this.handleConfirm=e=>{const{handleEditDescription:t}=this.props;this.setState({newDescription:e}),t(e)},this.handleChange=()=>{this.props.modalActions.showModal("EDIT_TX_DESCRIPTION_MODAL",{handleConfirm:this.handleConfirm,origin:"TransactionList",value:this.state.newDescription})},this.state={newDescription:this.props.description}}render(){const{newDescription:e}=this.state;return o.createElement(template,{value:e,handleChange:this.handleChange})}}const mapDispatchToProps=e=>({modalActions:(0,i.bindActionCreators)(s.Nw.qk,e)}),x=((0,r.connect)(null,mapDispatchToProps),(0,r.connect)(null,mapDispatchToProps)(g));var b=n("../../node_modules/ramda/es/curry.js"),E=n("../../node_modules/reselect/es/index.js"),w=n("../blockchain-wallet-v4/src/index.ts"),_=n("../blockchain-wallet-v4/src/exchange/utils.ts");const v=(0,b.Z)(((e,t,n)=>(0,E.P1)([n=>s.wl.vE.aT.btc.getFiatAtTime(e,t)(n)],(e=>(e||w.Nt.NotAsked).map((e=>(0,_.LE)({unit:t,value:e})))))(n))),P=l.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
`,template_error=e=>o.createElement(P,null,o.createElement(d.xv,{size:"12px",weight:400,color:"red600"},e.children)),template_loading=()=>o.createElement(d.co,{width:"40px",height:"15px"}),Success=e=>e.fiatAtTime;Success.defaultProps={fiatAtTime:"N/A"};const C=Success;class j extends o.PureComponent{componentDidMount(){const{amount:e,currency:t,hash:n,time:o}=this.props;this.props.actions.fetchFiatAtTime(n,e,1e3*o,t)}render(){const{data:e}=this.props;return e.cata({Failure:e=>o.createElement(template_error,null,e),Loading:()=>o.createElement(template_loading,null),NotAsked:()=>null,Success:e=>o.createElement(C,{fiatAtTime:e})})}}const T=(0,r.connect)(((e,t)=>({data:v(t.hash,t.currency,e)})),(e=>({actions:(0,i.bindActionCreators)(s.Nw.vE.aT.btc,e)})))(j),NonCustodialTx_Status=e=>o.createElement(d.xv,{size:"16px",color:"grey800",weight:600,"data-e2e":"txTypeText"},"sent"===e.type&&o.createElement(a.Z,{id:"scenes.transactions.bitcoin.content.list.listitem.status.sent",defaultMessage:"Sent {coin}",values:{coin:e.coinTicker}}),"received"===e.type&&o.createElement(a.Z,{id:"scenes.transactions.bitcoin.content.list.listitem.status.received",defaultMessage:"Received {coin}",values:{coin:e.coinTicker}}),"transferred"===e.type&&o.createElement(a.Z,{id:"scenes.transactions.bitcoin.content.list.listitem.status.transferred",defaultMessage:"Transferred {coin}",values:{coin:e.coinTicker}}));var O=n("./src/components/Display/ComboDisplay/index.js");class Z extends o.PureComponent{componentDidMount(){const{coin:e,feeR:t,hash:n}=this.props,{coinfig:o}=window.coins[e];w.Nt.NotAsked.is(t)&&o.type.erc20Address&&this.props.ethActions.fetchErc20TxFee(n,e)}render(){const{coin:e,feeR:t}=this.props,{coinfig:n}=window.coins[e];return o.createElement(o.Fragment,null,o.createElement(m.yD,null,o.createElement(a.Z,{id:"copy.transaction_fee",defaultMessage:"Transaction Fee"})),t.cata({Failure:()=>o.createElement(d.xv,{size:"14px",weight:500,color:"red600"},o.createElement(a.Z,{id:"scenes.transactions.bitcoin.content.pages.listitem.fee.error",defaultMessage:"Failed to retrieve fee!"})),Loading:()=>o.createElement(d.Re,{width:"60px",height:"16px"}),NotAsked:()=>o.createElement(d.Re,{width:"60px",height:"16px"}),Success:t=>o.createElement(O.Z,{coin:n.type.erc20Address?"ETH":e,size:"14px",weight:600,color:"grey800"},t)}))}}const k=(0,r.connect)(void 0,(e=>({ethActions:(0,i.bindActionCreators)(s.Nw.vE.aT.eth,e)})))(Z),z=l.ZP.div`
  margin-left: 6px;
`,D=l.ZP.div`
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  white-space: nowrap;
  width: 50%;
  ${p.BC.atLeastTabletL`
    display: flex;
  `}
`,R=l.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 20%;
  align-items: flex-end;
  ${p.BC.mobile`
    min-width: 50%;
  `};
`,A=(0,l.ZP)(d.xv)`
  display: flex;
  align-items: center;
`,NonCustodialTx_template=({coin:e,coinTicker:t,currency:n,handleEditDescription:r,handleRetrySendEth:i,handleToggle:s,isToggled:l,transaction:p})=>o.createElement(m._$,{className:l?"active":"","data-e2e":"transactionRow"},o.createElement(m.xC,{onClick:()=>s()},o.createElement(m.X2,{"data-e2e":"transactionDateColumn",width:"30%"},o.createElement(m.AB,{coin:e,type:p.type}),o.createElement(m.Xm,{"data-e2e":"transactionListItemStatus"},o.createElement(NonCustodialTx_Status,{type:p.type,coinTicker:t}),o.createElement(m.EK,{time:1e3*Number(p.time)})),"rbf"in p&&p.rbf&&o.createElement(z,null,o.createElement(d.jL,{label:"true",size:"10px",type:"informational"},o.createElement(a.Z,{id:"components.txlistitem.rbf",defaultMessage:"Replace-By-Fee"}))),"erc20"in p&&p.erc20&&o.createElement(z,null,o.createElement(d.jL,{label:"true",size:"10px",type:"informational"},o.createElement(a.Z,{id:"components.txlistitem.erc20fee",defaultMessage:"ERC20 Fee"}))),"state"in p&&"PENDING"===p.state&&"sent"===p.type&&o.createElement(d.G0,{id:"transaction.pending.eth","data-place":"right"},o.createElement(z,{onClick:e=>i(e,p.hash,p.erc20)},o.createElement(d.jL,{label:"true"},o.createElement(a.Z,{id:"components.txlistitem.retrytx",defaultMessage:"Resend Transaction"}))))),o.createElement(D,{"data-e2e":"transactionAddressesColumn"},o.createElement(m.sA,{to:(0,m.V_)(p),from:(0,m.Jc)(p)})),o.createElement(R,{"data-e2e":"transactionAmountColumn"},o.createElement(m.kl,{coin:e},p.amount),o.createElement(m.Hx,{coin:e,size:"14px",weight:500,color:"grey600"},p.amount))),l&&o.createElement(m.XW,{"data-e2e":"expandedTransactionRow"},o.createElement(m.Gk,{"data-e2e":"descriptionTransactionColumn"},o.createElement(m.yD,null,o.createElement(a.Z,{id:"components.txlistitem.description",defaultMessage:"Description"})),r&&o.createElement(x,{description:p.description,handleEditDescription:r}),"BTC"===e&&o.createElement(o.Fragment,null,o.createElement(m.yD,null,o.createElement(a.Z,{id:"components.txlistitem.valueattime",defaultMessage:"Value When {type}",values:{type:p.type}})),o.createElement(m.qe,{"data-e2e":"valueAtTimeOfTransaction"},o.createElement(T,{amount:Number(p.amount),hash:p.hash,time:Number(p.time),currency:n}))),"memo"in p&&o.createElement(o.Fragment,null,o.createElement(m.yD,null,o.createElement(a.Z,{id:"components.txlistitem.memo",defaultMessage:"Memo"})," ",p.memoType),o.createElement(m.qe,{size:"14px",capitalize:!0,weight:400,"data-e2e":"xlmTransactionMemo"},p.memo))),"inputs"in p&&p.inputs&&p.outputs&&o.createElement(m.Gk,{"data-e2e":"sentFromTransactionColumn"},o.createElement(m.yD,null,o.createElement(a.Z,{id:"components.txlistitem.sentfrom",defaultMessage:"Sent From"})),(0,c.Z)("inputs",p).map((e=>o.createElement(m.qe,{key:e.address,size:"13px"},e.address))),o.createElement(m.yD,null,o.createElement(a.Z,{id:"components.txlistitem.receivedby",defaultMessage:"Received By"})),(0,c.Z)("outputs",p).map((e=>o.createElement(A,{key:e.address,size:"14px",weight:400},o.createElement(m.qe,{size:"13px"},e.address),e.change&&o.createElement(m.qe,null,o.createElement(d.G0,{id:"txlist.change.tooltip"},o.createElement(d.nw,{name:"info",size:"12px"}))))))),o.createElement(m.Gk,{"data-e2e":"statusTransactionColumn"},o.createElement(m.yD,null,o.createElement(a.Z,{id:"components.txlistitem.status",defaultMessage:"Status"})),o.createElement(u.Z,{coin:e,hash:p.hash,txBlockHeight:p.blockHeight}),"received"!==p.type&&"fee"in p&&o.createElement(k,{coin:e,feeR:p.fee,hash:p.hash}))));class L extends o.PureComponent{constructor(e){super(e),this.handleToggle=()=>{this.setState((e=>({isToggled:!e.isToggled})))},this.handleEditDescription=e=>{const{coin:t,transaction:n}=this.props,{coinfig:o}=window.coins[t];switch(!0){case"ETH"===t:this.props.ethActions.setTxNotesEth(n.hash,e);break;case"BTC"===t:this.props.walletActions.setTransactionNote(n.hash,e);break;case"BCH"===t:this.props.bchActions.setTxNotesBch(n.hash,e);break;case"XLM"===t:this.props.xlmActions.setTxNotesXlm(n.hash,e);break;case!!o.type.erc20Address:this.props.ethActions.setTxNotesErc20(t,n.hash,e);break;default:this.props.logActions.logErrorMessage("components/NonCustodialTx","handleEditDescription","Unsupported Coin Code")}},this.handleRetrySendEth=(e,t,n)=>{e.stopPropagation(),this.props.sendEthActions.retrySendEth(t,n)},this.state={isToggled:!1}}render(){return o.createElement(NonCustodialTx_template,Object.assign({},this.props,{handleEditDescription:this.handleEditDescription,handleRetrySendEth:this.handleRetrySendEth,handleToggle:this.handleToggle,isToggled:this.state.isToggled}))}}const S=(0,r.connect)(void 0,(e=>({bchActions:(0,i.bindActionCreators)(s.Nw.vE.Nu.iY,e),ethActions:(0,i.bindActionCreators)(s.Nw.vE.Nu.BF,e),ethTxActions:(0,i.bindActionCreators)(s.Nw.vE.aT.eth,e),logActions:(0,i.bindActionCreators)(s.Nw.TD,e),preferencesActions:(0,i.bindActionCreators)(s.Nw.cb,e),sendEthActions:(0,i.bindActionCreators)(s.Nw.wx.sendEth,e),walletActions:(0,i.bindActionCreators)(s.Nw.vE.gU,e),xlmActions:(0,i.bindActionCreators)(s.Nw.vE.Nu.F2,e)})))(L)},"./src/scenes/Transactions/components/index.tsx":(e,t,n)=>{n.d(t,{sA:()=>Addresses,V_:()=>toAccountFormatter,Jc:()=>fromAccountFormatter,_$:()=>u,xC:()=>f,JX:()=>y,XW:()=>h,Gk:()=>g,a1:()=>x,AB:()=>IconTx,X2:()=>b,yD:()=>E,qe:()=>w,kl:()=>_,Hx:()=>v,i9:()=>P,Xm:()=>C,EK:()=>Timestamp});var o=n("../../node_modules/react/index.js"),r=n("./node_modules/react-intl/lib/src/components/message.js"),i=n("../../node_modules/moment/moment.js"),s=n.n(i),a=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),c=n("../blockchain-info-components/src/index.js"),l=n("./src/components/Display/CoinDisplay/index.tsx"),d=n("./src/components/Display/FiatDisplay/index.tsx");const p=a.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`,Addresses=({from:e,to:t})=>o.createElement(p,null,o.createElement(c.Qt,{inline:!0,style:{marginBottom:"5px"}},o.createElement(c.xv,{size:"14px",color:"grey600",weight:500},o.createElement(r.Z,{id:"copy.to:",defaultMessage:"To: "})),o.createElement(c.xv,{size:"14px",color:"grey600",weight:500,"data-e2e":"transactionListItemTo"},t)),o.createElement(c.Qt,{inline:!0},o.createElement(c.xv,{size:"14px",color:"grey600",weight:500},o.createElement(r.Z,{id:"copy.from",defaultMessage:"From"}),":"),o.createElement(c.xv,{size:"14px",color:"grey600",weight:500,"data-e2e":"transactionListItemFrom"},e))),m=a.ZP.span`
  font-size: 12px;
  color: ${e=>e.theme.grey300};

  &::before {
    content: '(';
  }
  &::after {
    content: ')';
  }
`,toAccountFormatter=e=>{const{to:t,type:n}=e;return o.createElement("span",null,t," ","received"===n&&"toAddress"in e?o.createElement(m,null,e.toAddress):"")},fromAccountFormatter=e=>{var t,n;const{from:r,type:i}=e,s="inputs"in e&&e.inputs||[];return o.createElement("span",null,r," ","sent"===i&&1===s.length?o.createElement(m,null,null===(t=s[0])||void 0===t?void 0:t.address):"sent"===i&&s.length>1?o.createElement(m,null,null===(n=s[0])||void 0===n?void 0:n.address,", +",s.length-1):"")},u=a.ZP.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
  &:not(:last-child) {
    border-bottom: 1px solid ${e=>e.theme.grey000};
  }
`,f=a.ZP.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  padding: 14px;
`,y=a.ZP.div`
  width: ${e=>e.width};
`,h=a.ZP.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 20px;
  padding-top: 8px;
`,g=a.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 33.333%;
  &:last-child {
    align-items: flex-end;
  }
`,x=a.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  border-radius: 16px;
`,IconTx=({coin:e,subType:t,type:n})=>{const r=e||"grey600",i="PENDING"!==n&&e?r:"grey000";return o.createElement(x,{color:i},(()=>{switch(n){case"PENDING":return o.createElement(c.JO,{size:"20px",weight:600,name:"timer",color:"grey700"});case"BUY":const e="recurringBuy"===t;return o.createElement(c.JO,{size:e?"15px":"24px",weight:600,name:e?"sync-regular":"plus",color:r});case"SELL":return o.createElement(c.JO,{size:"24px",weight:600,name:"minus",color:r});case"DEPOSIT":case"WITHDRAWAL":return o.createElement(c.JO,{size:"20px",weight:600,color:"USD",name:"DEPOSIT"===n?"arrow-down":"arrow-up"});case"SWAP":return o.createElement(c.JO,{size:"12px",weight:600,name:"arrows-horizontal",color:r});case"received":return o.createElement(c.JO,{size:"12px",weight:600,name:"arrow-bottom-right",color:r});case"sent":return o.createElement(c.JO,{size:"18px",weight:600,name:"arrow-top-right",color:r});case"transferred":return o.createElement(c.JO,{size:"12px",weight:600,name:"arrow-top-right-bottom-left",color:r});default:return o.createElement(o.Fragment,null)}})())},b=(0,a.ZP)(y)`
  display: flex;
  align-items: center;
`,E=(0,a.ZP)(c.xv)`
  font-weight: 500;
  font-size: 13px;
  margin-top: 12px;
  color: ${e=>e.theme.grey600};
`,w=(0,a.ZP)(c.xv)`
  font-weight: 600;
  font-size: ${e=>e.size||"14px"};
  margin-top: 4px;
  color: ${e=>e.theme.grey800};
`,_=(0,a.ZP)(l.Z)`
  color: ${e=>e.theme.grey800};
  justify-content: flex-end;
  font-size: 16px !important;
  font-weight: 600 !important;
`,v=(0,a.ZP)(d.Z)`
  color: ${e=>e.theme.grey600};
  margin-top: 4px;
  justify-content: flex-end;
`,P=a.ZP.div`
  display: flex;
  margin-top: 4px;
  justify-content: flex-end;
`,C=a.ZP.div`
  margin-left: 16px;
`,Timestamp=({time:e})=>o.createElement(c.xv,{size:"13px",weight:500,color:"grey600",style:{marginTop:"4px"},"data-e2e":"txTimeOrStatus"},s()(e).local().format("h:mm a on D MMM YYYY"))}}]);