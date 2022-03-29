"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[207],{"./src/components/LazyLoadContainer/index.js":(e,t,n)=>{n.d(t,{Z:()=>p});var r,a,i=n("../../node_modules/react/index.js"),s=n("../../node_modules/prop-types/index.js"),o=n.n(s),l=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js");function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var n,r=_getPrototypeOf(e);if(t){var a=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(e)}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var c=l.ZP.div(r||(r=_taggedTemplateLiteral(["\n  height: 100%;\n  overflow: auto;\n"]))),d=l.ZP.div(a||(a=_taggedTemplateLiteral(["\n  width: 100%;\n"]))),m=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(LazyLoadContainer,e);var t=_createSuper(LazyLoadContainer);function LazyLoadContainer(){var e;_classCallCheck(this,LazyLoadContainer);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return _defineProperty(_assertThisInitialized(e=t.call.apply(t,[this].concat(r))),"setWrapperRef",(function(t){e.wrapper=t})),_defineProperty(_assertThisInitialized(e),"setContainerRef",(function(t){e.container=t})),_defineProperty(_assertThisInitialized(e),"onScroll",(function(){var t=e.props,n=t.onLazyLoad,r=t.triggerDistance,a=e.wrapper.getBoundingClientRect(),i=e.container.getBoundingClientRect();a.bottom+r>i.bottom&&n()})),e}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(LazyLoadContainer,[{key:"render",value:function render(){var e=this.props,t=e.children,n=e.className;return i.createElement(c,{className:n,onScroll:this.onScroll,ref:this.setWrapperRef},i.createElement(d,{className:"container",ref:this.setContainerRef},t))}}]),LazyLoadContainer}(i.PureComponent);m.propTypes={onLazyLoad:o().func.isRequired,triggerDistance:o().number},m.defaultProps={triggerDistance:200};const p=m},"./src/components/Box/index.tsx":(e,t,n)=>{n.d(t,{xu:()=>f,W2:()=>g,Ec:()=>Box_SavedRecurringBuy});var r=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),a=n("./src/services/styles/index.ts"),i=n("../../node_modules/react/index.js"),s=n("./node_modules/react-intl/lib/src/components/message.js"),o=n("../../node_modules/polished/dist/polished.esm.js"),l=n("../blockchain-info-components/src/index.js"),c=n("./src/components/Flyout/model.tsx");const d=(0,r.ZP)(l.xu)`
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
`,m=r.ZP.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`,p=r.ZP.div`
  display: flex;
  justify-content: flex-end;
`,u=r.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  min-width: 40px;
  border-radius: 20px;
  margin-right: 20px;
  background-color: ${e=>(0,o.$n)(.35,e.theme[e.coin])};
`,Box_SavedRecurringBuy=({action:e,amount:t,coin:n,nextPayment:r,onClick:a,period:o})=>i.createElement(d,{disabled:!1,isMethod:!1,isMobile:!1},i.createElement(m,null,i.createElement(u,{coin:n},i.createElement(l.JO,{cursor:!0,"data-e2e":`${n}savedRecurringBuy`,name:"sync-regular",size:"20px",color:n,role:"button"})),i.createElement(l.Qt,null,i.createElement(l.xv,{weight:600,size:"16px",color:"grey900",style:{marginBottom:"0"}},t," ",(0,c.O7)(o)),i.createElement(l.xv,{weight:500,size:"14px",color:"grey600",style:{marginBottom:"0"}},(0,c.Nd)(e,r)))),i.createElement(p,null,i.createElement(l.zx,{"data-e2e":`${n}savedRecurringBuyViewDetails`,nature:"empty-blue",onClick:a},i.createElement(s.Z,{id:"copy.view_details",defaultMessage:"View Details"})))),g=r.ZP.div`
  display: flex;
  > div {
    margin-right: 24px;
    &:last-child {
      margin-right: 0px;
    }
  }
  ${a.BC.laptop`
    flex-direction: column;
    align-items: start;
    > div {
      margin-right: 0;
      margin-bottom: 12px;
    }
  `};
`,f=r.ZP.div`
  position: relative;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.grey000};
  width: 280px;
`},"./src/components/Layout/index.ts":(e,t,n)=>{n.d(t,{M5:()=>o,wX:()=>l,bn:()=>c,wW:()=>d,Qc:()=>m,US:()=>p,bz:()=>u,Pj:()=>g,l0:()=>f});var r=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),a=n("../blockchain-info-components/src/index.js"),i=n("./src/services/styles/index.ts"),s=n("./src/components/Box/index.tsx");const o=r.ZP.div`
  background-color: ${e=>e.theme.white};
  position: sticky;
  width: 100%;
  z-index: 1;
  top: 0;
`,l=r.ZP.div`
  width: 100%;
  height: 100%;

  ${e=>e.centerContent&&"\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  "}
`,c=r.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  min-width: 40px;
  background-color: ${e=>e.theme.blue000};
  border-radius: 40px;
`,d=r.ZP.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  > :first-child {
    margin-right: 16px;
  }
  ${i.BC.mobile`
    flex-direction: column;
  `}
`,m=r.ZP.div`
  display: flex;
  align-items: center;
  > :first-child {
    margin-right: 16px;
  }
`,p=(0,r.ZP)(a.xv)`
  font-size: 32px;
  color: ${e=>e.theme.grey800};
  font-weight: 600;
  margin-right: 14px;
`,u=(0,r.ZP)(a.xv)`
  font-size: 16px;
  color: ${e=>e.theme.grey600};
  font-weight: 500;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`,g=(0,r.ZP)(s.xu)`
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
`,f=r.ZP.div`
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
`},"./src/scenes/InterestHistory/index.tsx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>le});var r=n("../../node_modules/react/index.js"),a=n("../../node_modules/react-redux/es/index.js"),i=n("../../node_modules/redux/es/redux.js"),s=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),o=n("./src/components/Layout/index.ts"),l=n("./src/components/LazyLoadContainer/index.js"),c=n("./src/data/index.ts"),d=n("./src/scenes/Interest/template.header.tsx"),m=n("./node_modules/react-intl/lib/src/components/message.js"),p=n("../../node_modules/react-router-bootstrap/lib/index.js"),u=n("../blockchain-info-components/src/index.js");const g=s.ZP.div`
  width: 100%;
  display: flex;
`,template_menu=()=>r.createElement(g,null,r.createElement(u.d0,null,r.createElement(p.Ji,{to:"/rewards",exact:!0},r.createElement(u.gq,{"data-e2e":"interestTabMenuAccountss"},r.createElement(m.Z,{id:"scenes.interest.tab.accounts",defaultMessage:"Accounts"}))),r.createElement(p.Ji,{to:"/rewards/history"},r.createElement(u.gq,{"data-e2e":"interestTabMenuHistory"},r.createElement(m.Z,{id:"scenes.interest.tab.history",defaultMessage:"Transaction History"})))));var f=n("../../node_modules/redux-form/es/Field.js"),h=n("../../node_modules/redux-form/es/reduxForm.js"),x=n("./src/components/Form/SelectBoxCoin/index.tsx"),y=n("./src/components/Cartridge/index.ts"),E=n("./src/components/Display/CoinDisplay/index.tsx"),w=n("./src/components/Display/FiatDisplay/index.tsx");const b=(0,s.ZP)(u.pj)`
  flex-direction: column;
  align-items: flex-end;
`,v=(0,s.ZP)(E.Z)`
  justify-content: flex-end;
`,Z=(0,s.ZP)(w.Z)`
  justify-content: flex-end;
`,P=s.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  min-width: 32px;
  border-radius: 32px;
  background: ${e=>e.theme[e.color]};
`,_=(0,s.ZP)(y.sx)`
  font-size: 12px;
  margin-left: 8px;
`,T=(0,s.ZP)(y.XG)`
  font-size: 12px;
  margin-left: 8px;
`,j=(0,s.ZP)(u.xv)`
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  color: ${e=>e.theme.grey600};
  line-height: 1.5;
  * {
    font-size: 14px !important;
    font-weight: 500 !important;
    color: ${e=>e.theme.grey600} !important;
  }
`,C=(0,s.ZP)(u.pj)`
  align-items: center;
  > ${j} {
    margin-left: 20px;
  }
`,z=(0,s.ZP)(u.xv)`
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
`,R=(0,s.ZP)(j)`
  margin-right: 8px;
  font-size: 16px;
`,L=s.ZP.div`
  display: flex;
  width: 40%;
  align-items: center;
`;class A extends r.PureComponent{constructor(){super(...arguments),this.onChange=e=>{const{interestActions:t}=this.props,n="ALL"===e?void 0:e;t.fetchInterestTransactions({coin:n,reset:!0})}}render(){const{txPages:e}=this.props;return e?r.createElement(L,null,r.createElement(R,null,r.createElement(m.Z,{id:"scenes.interest.history.filter",defaultMessage:"Filter by:"})),r.createElement(f.Z,{component:x.Z,height:"32px",name:"coin",onChange:this.onChange,props:{additionalOptions:[{text:"All Coins",value:"ALL"}]},type:"request"})):null}}const M=(0,a.connect)(null,(e=>({formActions:(0,i.bindActionCreators)(c.Nw.cr,e),interestActions:(0,i.bindActionCreators)(c.Nw.wx.interest,e)}))),k=(0,i.compose)((0,h.Z)({form:"interestHistoryCoin",initialValues:{coin:"ALL"}}),M)(A);var O=n("../../node_modules/react-csv/index.js"),D=n("../../node_modules/ramda/es/flatten.js"),S=n("../../node_modules/ramda/es/map.js");const F=s.iv`
  border: 1px solid ${e=>e.theme.grey100};
  border-radius: 8px;
  margin-right: 12px;
`,I=(0,s.ZP)(O.CSVLink)`
  text-decoration: none;
`,$=(0,s.ZP)(u.hU)`
  ${F};
  color: ${e=>e.theme.blue600};
`,N=(0,s.ZP)(u.hU)`
  ${F};
  color: ${e=>e.theme.white};
  background-color: ${e=>e.theme.green600};
  opacity: 1;
`,H=(0,s.ZP)(u.hU)`
  ${F};
  color: ${e=>e.theme.white};
  background-color: ${e=>e.theme.red600};
  opacity: 1;
`,W=(0,s.ZP)(u.zx)`
  margin-right: 12px;
  opacity: 1;

  & > :first-child {
    margin-right: 8px;
  }
`;class B extends r.PureComponent{constructor(){super(...arguments),this.state={hasSavedReport:!1},this.handleDownload=()=>{const{interestActions:e}=this.props;e.fetchInterestTransactionsReport()},this.handleSaveReport=()=>{this.setState({hasSavedReport:!0})}}componentDidUpdate(e){var t;const{formValues:n,interestActions:r}=this.props;(null===(t=e.formValues)||void 0===t?void 0:t.coin)!==(null==n?void 0:n.coin)&&(r.clearInterestTransactionsReport(),this.setState({hasSavedReport:!1}))}componentWillUnmount(){this.props.interestActions.clearInterestTransactionsReport()}render(){const{transactionsReportR:e,txPages:t}=this.props,n=(0,D.Z)(t&&t.map((e=>(0,S.Z)((e=>e),e&&e.data||[]))));return(null==n?void 0:n.length)>0&&e.cata({Failure:()=>r.createElement(H,{"data-e2e":"interestTxReportFailed",height:"45px",name:"alert-filled",nature:"primary",width:"140px"},r.createElement(m.Z,{id:"copy.failed",defaultMessage:"Failed"})),Loading:()=>r.createElement(W,{"data-e2e":"loadingTransactionsReportButton",disabled:!0,height:"45px",nature:"empty-blue"},r.createElement(u.JA,{height:"16px",width:"16px"}),r.createElement(m.Z,{id:"copy.loading",defaultMessage:"Loading..."})),NotAsked:()=>r.createElement($,{"data-e2e":"generateInterestTxReport",height:"45px",onClick:this.handleDownload,name:"download",nature:"light",width:"140px"},r.createElement(m.Z,{id:"copy.download",defaultMessage:"Download"})),Success:e=>this.state.hasSavedReport?r.createElement(N,{"data-e2e":"interestTxReportSaved",disabled:!0,height:"45px",name:"checkmark-in-circle-filled",nature:"primary",width:"140px"},r.createElement(m.Z,{id:"copy.saved",defaultMessage:"Saved"})):r.createElement(I,{data:e,filename:"Interest_Transactions.csv",onClick:this.handleSaveReport,target:"_blank",width:"100%"},r.createElement($,{"data-e2e":"saveInterestTxReport",height:"45px",name:"download",nature:"light",width:"140px"},r.createElement(m.Z,{id:"scenes.interest.transactions.savereport",defaultMessage:"Save Report"})))})}}const J=(0,a.connect)((e=>({formValues:c.wl.cr.getFormValues("interestHistoryCoin")(e),transactionsReportR:c.wl.wx.bb.getInterestTransactionsReport(e),txPages:c.wl.wx.bb.getInterestTransactions(e)})),(e=>({interestActions:(0,i.bindActionCreators)(c.Nw.wx.interest,e)})))(B);var U=n("../../node_modules/ramda/es/lift.js");const getData=e=>{const t=c.wl.wx.bb.getRates(e),n=c.wl.wx.bb.getInterestTransactions(e),r=c.wl.vE.Xd.getCurrency(e);return(0,U.Z)(((e,t)=>({rates:e,txPages:n,walletCurrency:t})))(t,r)},V=s.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,template_loading=()=>r.createElement(o.wX,{centerContent:!0},r.createElement(V,null,r.createElement(u.nZ,{width:"36px",height:"36px"}),r.createElement(u.xv,{size:"18px",weight:600,color:"grey600",style:{marginTop:"16px"}},r.createElement(m.Z,{id:"modals.interest.withdrawal.loading",defaultMessage:"Doing Work..."}))));var X,q=n("../../node_modules/moment/moment.js"),Y=n.n(q),G=n("../../node_modules/ramda/es/last.js"),K=n("../../node_modules/ramda/es/head.js"),Q=n("../blockchain-wallet-v4/src/index.ts");var ee=s.ZP.div(X||(X=function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 100px;\n  & > :first-child {\n    margin-bottom: 10px;\n  }\n"])));const te=function Empty(){return r.createElement(ee,null,r.createElement(u.xv,{size:"20px",weight:600,color:"grey800",lineHeight:"20px"},r.createElement(m.Z,{id:"scenes.exchangehistory.empty.transactions",defaultMessage:"Transactions"})),r.createElement(u.xv,{size:"14px",weight:500,color:"grey600",lineHeight:"20px"},r.createElement(m.Z,{id:"scenes.interesthistory.empty.here",defaultMessage:"All your Interest transactions will show up here."})))},ne=s.ZP.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
  width: 100%;
`,re=s.ZP.div`
  min-width: 900px;
  padding-bottom: 45px;
`;const ae=function TransactionList(e){const{interestActions:t,txPages:n,walletCurrency:a}=e,i=(0,D.Z)(n&&n.map((e=>(0,S.Z)((e=>e),e&&e.data||[]))));return i&&i.length>0?r.createElement(re,{style:{minWidth:"900px",paddingBottom:"45px"}},r.createElement(u.xv,{size:"24px",weight:600,color:"grey800",style:{lineHeight:1.5,marginBottom:"16px"}},r.createElement(m.Z,{id:"scenes.interest.history.header",defaultMessage:"History"})),r.createElement(u.iA,{style:{minWidth:"900px"}},r.createElement(u.xD,null,r.createElement(u.pj,{width:"20%"},r.createElement(u.xv,{size:"12px",weight:500},r.createElement(m.Z,{id:"scenes.interest.history.type",defaultMessage:"Type"}))),r.createElement(u.pj,{width:"20%"},r.createElement(u.xv,{size:"12px",weight:500},r.createElement(m.Z,{id:"copy.date",defaultMessage:"Date"}))),r.createElement(u.pj,{width:"20%"},r.createElement(u.xv,{size:"12px",weight:500},r.createElement(m.Z,{id:"copy.from",defaultMessage:"From"}))),r.createElement(u.pj,{width:"20%"},r.createElement(u.xv,{size:"12px",weight:500},r.createElement(m.Z,{id:"copy.to",defaultMessage:"To"}))),r.createElement(b,{width:"20%"},r.createElement(u.xv,{size:"12px",weight:500},r.createElement(m.Z,{id:"copy.amount",defaultMessage:"Amount"})))),i.map((e=>{const{amount:n,extraAttributes:i,id:s,insertedAt:o,state:l,type:c}=e,d=window.coins[n.symbol].coinfig.name,p=i&&"INTERNAL"===i.transferType;return r.createElement(u.SC,{key:s},r.createElement(C,{width:"20%"},"WITHDRAWAL"===c?r.createElement(r.Fragment,null,r.createElement(P,{color:n.symbol},r.createElement(u.JO,{name:"arrow-up",color:"white",size:"20px",weight:600,"data-e2e":s})),r.createElement(j,{"data-e2e":"withdrawalTx"},n.symbol," Withdraw"),"REJECTED"===l||"FAILED"===l?r.createElement(T,null,r.createElement(m.Z,{id:"copy.failed",defaultMessage:"Failed"})):"REFUNDED"===l?r.createElement(_,null,r.createElement(m.Z,{id:"copy.refunded",defaultMessage:"Refunded"})):"COMPLETE"!==l?r.createElement(_,null,r.createElement(m.Z,{id:"copy.pending",defaultMessage:"Pending"})):r.createElement(r.Fragment,null)):"DEPOSIT"===c?r.createElement(r.Fragment,null,r.createElement(P,{color:n.symbol},r.createElement(u.JO,{name:"arrow-down",color:"white",size:"20px",weight:600})),r.createElement(j,{"data-e2e":"depositTx"},n.symbol," Deposit"),"REJECTED"===l||"FAILED"===l?r.createElement(T,null,r.createElement(m.Z,{id:"copy.failed",defaultMessage:"Failed"})):"REFUNDED"===l?r.createElement(_,null,r.createElement(m.Z,{id:"copy.refunded",defaultMessage:"Refunded"})):"COMPLETE"!==l?r.createElement(_,null,r.createElement(m.Z,{id:"copy.pending",defaultMessage:"Pending"})):r.createElement(r.Fragment,null)):r.createElement(r.Fragment,null,r.createElement(u.JO,{name:"percentage",color:n.symbol,size:"32px"}),r.createElement(j,{"data-e2e":"interestEarnedTx"},r.createElement(m.Z,{id:"modals.interest.symbolearned",defaultMessage:"{symbol} Rewards Earned",values:{symbol:n.symbol}})))),r.createElement(u.pj,{width:"20%"},r.createElement(j,{"data-e2e":"interestTransactionDate"},Y()(o).local().format("MMMM D YYYY @ h:mm A"))),"DEPOSIT"===c?r.createElement(r.Fragment,null,r.createElement(u.pj,{width:"20%"},r.createElement(j,{"data-e2e":"interestTransactionFrom"},p?r.createElement("span",null,d," Trading Account"):r.createElement("span",null,d," Private Key Wallet"))),r.createElement(u.pj,{width:"20%"},r.createElement(j,{"data-e2e":"interestTransactionTo"},r.createElement(m.Z,{id:"modals.interest.detailstitle",defaultMessage:"{displayName} Rewards Account",values:{displayName:d}})))):"WITHDRAWAL"===c?r.createElement(r.Fragment,null,r.createElement(u.pj,{width:"20%"},r.createElement(j,{"data-e2e":"interestTransactionFrom"},r.createElement(m.Z,{id:"modals.interest.detailstitle",defaultMessage:"{displayName} Rewards Account",values:{displayName:d}}))),r.createElement(u.pj,{width:"20%"},r.createElement(j,{"data-e2e":"interestTransactionTo"},p?r.createElement("span",null,d," Trading Account"):r.createElement("span",null,d," Private Key Wallet")))):r.createElement(r.Fragment,null,r.createElement(u.pj,{width:"20%"},r.createElement(j,{"data-e2e":"interestTransactionFrom"},"our.com")),r.createElement(u.pj,{width:"20%"},r.createElement(j,{"data-e2e":"interestTransactionTo"},r.createElement(m.Z,{id:"modals.interest.detailstitle",defaultMessage:"{displayName} Rewards Account",values:{displayName:d}})))),r.createElement(b,{width:"20%"},r.createElement("div",null,r.createElement(v,{coin:n.symbol,color:"grey800",weight:600,"data-e2e":"interestTxCoinAmount",size:"14px",style:{lineHeight:"1.5",marginBottom:"4px"}},Q.ei.convertCoinToCoin({baseToStandard:!1,coin:n.symbol,value:n.value})),r.createElement(Z,{color:"grey600",coin:n.symbol,currency:a,"data-e2e":"interestTxFiatAmount",size:"12px",style:{alignItems:"right"},weight:500},Q.ei.convertCoinToCoin({baseToStandard:!1,coin:n.symbol,value:n.value})),"DEPOSIT"===c&&!p&&r.createElement(z,{"data-e2e":"viewTxHash",onClick:()=>t.routeToTxHash({coin:n.symbol,txHash:i.hash})},r.createElement(m.Z,{id:"copy.viewTransaction",defaultMessage:"View Transaction"})),"WITHDRAWAL"===c&&"COMPLETE"===l&&!p&&r.createElement(z,{"data-e2e":"viewTxHash",onClick:()=>t.routeToTxHash({coin:n.symbol,txHash:i.txHash})},r.createElement(m.Z,{id:"copy.viewTransaction",defaultMessage:"View Transaction"})))))}))),Q.Nt.Loading.is((0,G.Z)(n))&&r.createElement(ne,null,r.createElement(u.JA,null))):Q.Nt.Loading.is((0,K.Z)(n))?r.createElement(template_loading,null):r.createElement(te,null)},ie=(0,s.ZP)(l.Z)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
`,se=s.ZP.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;
`;class oe extends r.Component{constructor(){super(...arguments),this.onFetchMoreTransactions=()=>{this.props.interestActions.fetchInterestTransactions({reset:!1})}}componentDidMount(){this.props.interestActions.fetchInterestTransactions({reset:!0})}componentWillUnmount(){this.props.interestActions.fetchInterestTransactionsSuccess({reset:!0,transactions:[]}),this.props.interestActions.setTransactionsNextPage({nextPage:null})}render(){const{data:e}=this.props;return r.createElement(o.wX,null,r.createElement(d.Z,null),e.cata({Failure:()=>null,Loading:()=>r.createElement(template_loading,null),NotAsked:()=>r.createElement(template_loading,null),Success:e=>r.createElement(r.Fragment,null,r.createElement(se,null,r.createElement(template_menu,null),r.createElement(J,null),r.createElement(k,Object.assign({},e))),r.createElement(ie,{onLazyLoad:this.onFetchMoreTransactions},r.createElement(ae,Object.assign({},e,this.props))))}))}}const le=(0,a.connect)((e=>({data:getData(e)})),(e=>({interestActions:(0,i.bindActionCreators)(c.Nw.wx.interest,e)})))(oe)},"./src/scenes/Interest/template.header.tsx":(e,t,n)=>{n.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var r=n("../../node_modules/react/index.js"),a=n("./node_modules/react-intl/lib/src/components/message.js"),i=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),s=n("../blockchain-info-components/src/index.js"),o=n("./src/components/Layout/index.ts");const l=(0,i.ZP)(s.rU)`
  display: inline-flex;
`,c=(0,i.ZP)(s.xv)`
  margin-left: 3px;
  font-size: 15px;
  font-weight: 500;
  color: ${e=>e.theme.blue600};
`,d=(0,i.ZP)(s.xv)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,m=i.ZP.div`
  display: flex;
  flex-grow: 2;
`,p=(0,i.ZP)(o.bz)`
  display: contents;
`,__WEBPACK_DEFAULT_EXPORT__=()=>r.createElement(r.Fragment,null,r.createElement(o.wW,null,r.createElement(o.bn,null,r.createElement(s.JO,{color:"blue600",name:"percentage",size:"24px"})),r.createElement(o.US,null,r.createElement(a.Z,{id:"scenes.interest.interestaccount",defaultMessage:"Rewards Account"}))),r.createElement(p,null,r.createElement(a.Z,{id:"scenes.interest.subheader",defaultMessage:"Deposit crypto and watch it grow. Rewards are paid by the end of the day on the 1st of each month."}),r.createElement(l,{href:"/support/hc/en-us/articles/360043658491-How-the-Interest-Account-works",target:"_blank"},r.createElement(c,{size:"16px"},r.createElement(a.Z,{id:"buttons.learn_more",defaultMessage:"Learn More"}))),r.createElement(m,null),r.createElement(d,null,r.createElement(s.G0,{id:"scenes.interest.legaldisclaimer"},r.createElement(s.JO,{name:"info",size:"12px",color:"blue600"}),r.createElement(s.xv,{size:"12px",color:"blue600",weight:500,style:{margin:"-2px 0 0 5px"}},r.createElement(a.Z,{id:"scenes.interest.legaldiscalimer",defaultMessage:"Legal disclaimer"}))))))}}]);