"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[4016],{"./src/components/Box/index.tsx":(e,t,l)=>{l.d(t,{xu:()=>x,W2:()=>g,Ec:()=>Box_SavedRecurringBuy});var i=l("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),n=l("./src/services/styles/index.ts"),r=l("../../node_modules/react/index.js"),a=l("./node_modules/react-intl/lib/src/components/message.js"),o=l("../../node_modules/polished/dist/polished.esm.js"),s=l("../blockchain-info-components/src/index.js"),c=l("./src/components/Flyout/model.tsx");const d=(0,i.ZP)(s.xu)`
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
`,m=i.ZP.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`,p=i.ZP.div`
  display: flex;
  justify-content: flex-end;
`,u=i.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  min-width: 40px;
  border-radius: 20px;
  margin-right: 20px;
  background-color: ${e=>(0,o.$n)(.35,e.theme[e.coin])};
`,Box_SavedRecurringBuy=({action:e,amount:t,coin:l,nextPayment:i,onClick:n,period:o})=>r.createElement(d,{disabled:!1,isMethod:!1,isMobile:!1},r.createElement(m,null,r.createElement(u,{coin:l},r.createElement(s.JO,{cursor:!0,"data-e2e":`${l}savedRecurringBuy`,name:"sync-regular",size:"20px",color:l,role:"button"})),r.createElement(s.Qt,null,r.createElement(s.xv,{weight:600,size:"16px",color:"grey900",style:{marginBottom:"0"}},t," ",(0,c.O7)(o)),r.createElement(s.xv,{weight:500,size:"14px",color:"grey600",style:{marginBottom:"0"}},(0,c.Nd)(e,i)))),r.createElement(p,null,r.createElement(s.zx,{"data-e2e":`${l}savedRecurringBuyViewDetails`,nature:"empty-blue",onClick:n},r.createElement(a.Z,{id:"copy.view_details",defaultMessage:"View Details"})))),g=i.ZP.div`
  display: flex;
  > div {
    margin-right: 24px;
    &:last-child {
      margin-right: 0px;
    }
  }
  ${n.BC.laptop`
    flex-direction: column;
    align-items: start;
    > div {
      margin-right: 0;
      margin-bottom: 12px;
    }
  `};
`,x=i.ZP.div`
  position: relative;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.grey000};
  width: 280px;
`},"./src/components/Layout/index.ts":(e,t,l)=>{l.d(t,{M5:()=>o,wX:()=>s,bn:()=>c,wW:()=>d,Qc:()=>m,US:()=>p,bz:()=>u,Pj:()=>g,l0:()=>x});var i=l("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),n=l("../blockchain-info-components/src/index.js"),r=l("./src/services/styles/index.ts"),a=l("./src/components/Box/index.tsx");const o=i.ZP.div`
  background-color: ${e=>e.theme.white};
  position: sticky;
  width: 100%;
  z-index: 1;
  top: 0;
`,s=i.ZP.div`
  width: 100%;
  height: 100%;

  ${e=>e.centerContent&&"\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  "}
`,c=i.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  min-width: 40px;
  background-color: ${e=>e.theme.blue000};
  border-radius: 40px;
`,d=i.ZP.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  > :first-child {
    margin-right: 16px;
  }
  ${r.BC.mobile`
    flex-direction: column;
  `}
`,m=i.ZP.div`
  display: flex;
  align-items: center;
  > :first-child {
    margin-right: 16px;
  }
`,p=(0,i.ZP)(n.xv)`
  font-size: 32px;
  color: ${e=>e.theme.grey800};
  font-weight: 600;
  margin-right: 14px;
`,u=(0,i.ZP)(n.xv)`
  font-size: 16px;
  color: ${e=>e.theme.grey600};
  font-weight: 500;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`,g=(0,i.ZP)(a.xu)`
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
`,x=i.ZP.div`
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
`},"./src/scenes/Prices/index.tsx":(e,t,l)=>{l.r(t),l.d(t,{default:()=>X});var i=l("../../node_modules/react/index.js"),n=l("./node_modules/react-intl/lib/src/components/message.js"),r=l("../../node_modules/react-redux/es/index.js"),a=l("../../node_modules/redux/es/redux.js"),o=l("../../node_modules/redux-form/es/Field.js"),s=l("../../node_modules/redux-form/es/formValueSelector.js"),c=l("../../node_modules/redux-form/es/reduxForm.js"),d=l("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),m=l("../blockchain-info-components/src/index.js"),p=l("./src/components/Form/index.ts"),u=l("./src/components/Layout/index.ts"),g=l("./src/data/index.ts"),x=l("../../node_modules/ramda/es/lift.js"),h=l("../blockchain-wallet-v4/src/utils/index.ts"),y=l("./src/components/Balances/selectors.ts");const b=(0,h.createDeepEqualSelector)([g.wl.Hj.f,g.wl.Hj.$,e=>e],((e,t,l)=>(0,x.Z)(((e,t)=>{const i=g.wl.vE.aT.coins.getAllCoins().map((i=>{const{coinfig:n}=window.coins[i],r=e[n.symbol],a=t[n.symbol],o=(0,y.uZ)(n.symbol)(l).getOrElse(0).valueOf(),s=Number((r-a)/a*100),c=Number.isNaN(s)?"0":s.toPrecision(2);return{balance:"ERC20"===n.type.name?(0,y.uH)(n.symbol)(l).getOrElse(0):o,coin:n.symbol,coinModel:i,name:`${n.name} (${n.displaySymbol})`,price:r,priceChange:c,products:n.products}}));return null==i?void 0:i.filter((({price:e})=>!!e||0===e))}))(e,t))),f=d.ZP.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 120px;
  align-items: center;
  justify-content: center;
`,template_failure=()=>i.createElement(f,null,i.createElement(m.xv,{weight:600,color:"grey600"},i.createElement(n.Z,{id:"scenes.prices.failure",defaultMessage:"Failed to load asset prices."}))),w=d.ZP.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 120px;
  align-items: center;
  justify-content: center;
`,template_loading=()=>i.createElement(w,null,i.createElement(m.nZ,{width:"40px",height:"40px"}));var E=l("../../node_modules/react-table/index.js"),v=l("../../node_modules/react-virtualized-auto-sizer/dist/index.esm.js"),P=l("../../node_modules/react-window/dist/index.esm.js"),Z=l("../blockchain-wallet-v4/src/types/index.ts");const j=d.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-right: 8px;
`,getActionsColumn=(e,t)=>({Cell:({row:{original:l}})=>i.createElement(j,null,l.products.includes("CustodialWalletBalance")?i.createElement(i.Fragment,null,i.createElement(m.zx,{"data-e2e":`${l.coin}BuySellBtn`,height:"32px",nature:"primary",onClick:()=>{t.showModal({cryptoCurrency:l.coin,orderType:Z.mr.BUY,origin:"Prices"})},width:"96px",style:{marginRight:"12px"}},i.createElement(m.xv,{size:"14px",color:"white",weight:600},Number(l.balance)>0?i.createElement(n.Z,{id:"buttons.buy_sell",defaultMessage:"Buy & Sell"}):i.createElement(n.Z,{id:"buttons.buy",defaultMessage:"Buy"}))),i.createElement(m.zx,{"data-e2e":`${l.coin}SwapBtn`,height:"32px",nature:"empty-blue",onClick:()=>e.showModal("SWAP_MODAL",{origin:"Prices"}),width:"68px"},i.createElement(m.xv,{size:"14px",color:"blue600",weight:600},i.createElement(n.Z,{id:"buttons.swap",defaultMessage:"Swap"})))):null),Header:()=>i.createElement(M,null,i.createElement(n.Z,{id:"copy.actions",defaultMessage:"Actions"})),accessor:"actions",disableGlobalFilter:!0,disableSortBy:!0});var C=l("../blockchain-wallet-v4/src/index.ts"),k=l("./src/components/Display/CoinDisplay/index.tsx");const S=(0,d.ZP)(k.Z)`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${e=>e.color};
`,getBalanceColumn=()=>({Cell:({row:{original:e}})=>{const{balance:t,coin:l}=e;return i.createElement(S,{coin:l,color:"0"!==t?"grey900":"grey400"},t)},Header:()=>i.createElement(M,null,i.createElement(n.Z,{id:"copy.balance",defaultMessage:"Balance"})),accessor:"balance",disableGlobalFilter:!0,sortType:(e,t)=>{const l=Number(C.ei.convertCoinToCoin({coin:e.original.coin,value:e.original.balance})),i=Number(C.ei.convertCoinToCoin({coin:t.original.coin,value:t.original.balance}));return l>i?1:i>l?-1:0}}),_=d.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 8px;
`,$=(0,d.ZP)(_)`
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`,z=(0,d.ZP)(m.JO)`
  margin-right: 16px;
`,getNameColumn=e=>({Cell:({row:{original:t}})=>i.createElement($,{onClick:()=>{e.showModal("REQUEST_CRYPTO_MODAL",{origin:"Prices",preselectedCoin:t.coin})}},i.createElement(z,{name:t.coin,size:"32px",color:t.coin}),i.createElement(A,null,t.name)),Header:()=>i.createElement(_,null,i.createElement(M,null,i.createElement(n.Z,{id:"copy.name",defaultMessage:"Name"}))),accessor:"name",sortType:"alphanumeric"});var N=l("../blockchain-wallet-v4/src/exchange/utils.ts");const getPriceColumn=e=>({Cell:({row:{original:t}})=>i.createElement(A,null,(0,N.LE)({unit:e,value:t.price})),Header:()=>i.createElement(M,null,i.createElement(n.Z,{id:"copy.price",defaultMessage:"Price"})),accessor:"price",disableGlobalFilter:!0,sortType:(e,t,l)=>e.original[l]>t.original[l]?1:t.original[l]>e.original[l]?-1:0}),F=d.ZP.div`
  /* make table full page width */
  display: block;
  max-width: 100%;

  /* make the table scrollable when it gets too small */
  .tableWrap {
    display: block;
    max-width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
  }

  .table {
    /* make sure the inner table is always as wide as needed */
    display: block;
    width: 99%;
    height: calc(100vh - 220px);
    border-spacing: 0;
    border: 1px solid ${e=>e.theme.grey100};
    border-radius: 8px;

    .th {
      display: table-header-group;
      padding: 16px 8px;
    }

    .th,
    .td {
      vertical-align: middle;
      display: table-cell;
      margin: 0;
      text-align: left;
      width: 20%;
    }

    .td {
      border-top: 1px solid ${e=>e.theme.grey100};
      height: 90px;
      padding: 0;
    }

    .tr {
      display: table;
      width: 100%;
    }
  }
`,M=(0,d.ZP)(m.xv)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${e=>e.theme.grey400};
`,A=(0,d.ZP)(m.xv)`
  font-style: normal;
  font-weight: 500;
  font-size: ${e=>e.size?e.size:"16px"};
  line-height: 24px;
  color: ${e=>e.color?e.color:e.theme.grey900};
`,B=d.ZP.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > :last-child {
    margin-left: 8px;
    margin-top: -2px;
  }
`,O=d.ZP.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 120px;
`,T=d.ZP.div`
  height: calc(100% - 52px);
`,D={disableMultiSort:!0,disableSortRemove:!0},H={sortBy:[{desc:!0,id:"price"}]},template_success=e=>{var t,l;const{buySellActions:r,data:a,modalActions:o,routerActions:s,walletCurrency:c}=e,d=i.useMemo((({buySellActions:e,modalActions:t,walletCurrency:l})=>()=>[getNameColumn(t),getPriceColumn(l),{Cell:({cell:{value:e}})=>i.createElement(A,{color:Number(e)>=0?"green600":"red600"},e,"%"),Header:()=>i.createElement(M,null,i.createElement(n.Z,{id:"copy.price_change",defaultMessage:"Price Change"})),accessor:"priceChange",disableGlobalFilter:!0,sortType:(e,t,l)=>Number(e.original[l])>Number(t.original[l])?1:Number(t.original[l])>Number(e.original[l])?-1:0},getBalanceColumn(),getActionsColumn(t,e)])({buySellActions:r,modalActions:o,routerActions:s,walletCurrency:c}),[]),{getTableBodyProps:m,getTableProps:p,headerGroups:u,prepareRow:g,rows:x,setGlobalFilter:h,state:y}=(0,E.useTable)(Object.assign({columns:d,data:a,initialState:H},D),E.useGlobalFilter,E.useSortBy);y.globalFilter!==e.textFilter&&h(e.textFilter);const b=(null===(t=y.globalFilter)||void 0===t?void 0:t.length)>20&&`${y.globalFilter.substring(0,20)}…`||y.globalFilter,f=i.useCallback((({index:e,style:t})=>{const l=x[e];return g(l),i.createElement("div",Object.assign({key:`row-${l.id}`},l.getRowProps({style:t}),{className:"tr"}),l.cells.map((e=>i.createElement("div",Object.assign({key:`cell-${e.row.id}`},e.getCellProps(),{className:"td"}),e.render("Cell")))))}),[g,x]);return i.createElement(F,null,(null===(l=y.globalFilter)||void 0===l?void 0:l.length)&&!x.length?i.createElement(O,null,i.createElement(A,{color:"grey900",size:"18px"},i.createElement("span",{role:"img","aria-label":"detective emoji"},"🕵️‍♀️"),"   ",i.createElement(n.Z,{id:"scenes.prices.noresults",defaultMessage:"No assets match {filterValue}",values:{filterValue:`"${b}"`}}))):i.createElement("div",Object.assign({},p(),{className:"table"}),i.createElement("div",null,u.map((e=>i.createElement("div",Object.assign({},e.getHeaderGroupProps(),{className:"tr"}),e.headers.map((e=>i.createElement("div",Object.assign({key:e.key},e.getHeaderProps(e.getSortByToggleProps()),{className:"th"}),i.createElement(B,null,e.render("Header"),i.createElement("div",null,e.isSorted?e.isSortedDesc?i.createElement("span",null,"▾"):i.createElement("span",null,"▴"):""))))))))),i.createElement(T,null,i.createElement(v.Z,null,(({height:e,width:t})=>i.createElement("div",Object.assign({},m()),i.createElement(P.t7,{height:e,width:t,itemCount:x.length,itemSize:90},f)))))))},R=d.ZP.div`
  width: 100%;
  margin-bottom: 32px;
`,G=d.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`,L=d.ZP.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > :first-child {
    margin-right: 16px;
  }
`,V=d.ZP.div`
  display: flex;
  justify-content: flex-start;
  margin: 16px 8px 0 0;
`,W=d.ZP.div`
  display: flex;
  position: relative;
  width: 300px;
`,J=(0,d.ZP)(o.Z)`
  div > input {
    padding-left: 40px;
  }
`,U=d.ZP.div`
  position: absolute;
  top: 12px;
  left: 10px;
`,Scene=({children:e})=>i.createElement(u.wX,null,i.createElement(R,null,i.createElement(G,null,i.createElement("div",null,i.createElement(L,null,i.createElement(m.JO,{size:"36px",color:"blue600",name:"compass"}),i.createElement(m.xv,{color:"grey800",size:"32px",weight:600},i.createElement(n.Z,{id:"copy.prices",defaultMessage:"Prices"}))),i.createElement(V,null,i.createElement(m.xv,{color:"grey600",size:"16px",weight:500},i.createElement(n.Z,{id:"scenes.prices.subtitle",defaultMessage:"Buy, Sell and Swap all of the assets offered by our wallet."})))),i.createElement(W,null,i.createElement(J,{component:p.zC,height:"42px","data-e2e":"pricesTextFilter",name:"textFilter",placeholder:"Search"}),i.createElement(U,null,i.createElement(m.JO,{name:"magnifier",size:"20px",color:"grey400"}))))),e),Q=(0,r.connect)((e=>({rowDataR:b(e),textFilter:(0,s.Z)("prices")(e,"textFilter"),walletCurrency:g.wl.vE.Xd.getCurrency(e).getOrElse("USD")})),(e=>({buySellActions:(0,a.bindActionCreators)(g.Nw.wx.buySell,e),modalActions:(0,a.bindActionCreators)(g.Nw.qk,e),priceActions:(0,a.bindActionCreators)(g.Nw.Hj,e),routerActions:(0,a.bindActionCreators)(g.Nw.Nd,e)}))),X=(0,a.compose)((0,c.Z)({form:"prices"}),Q)((e=>{const{priceActions:t,rowDataR:l}=e;return(0,i.useEffect)((()=>{t.fetchCoinPrices(),t.fetchCoinPricesPreviousDay()}),[]),l.cata({Failure:()=>i.createElement(Scene,null,i.createElement(template_failure,null)),Loading:()=>i.createElement(Scene,null,i.createElement(template_loading,null)),NotAsked:()=>i.createElement(Scene,null,i.createElement(template_loading,null)),Success:t=>i.createElement(Scene,null,i.createElement(template_success,Object.assign({data:t},e)))})}))}}]);