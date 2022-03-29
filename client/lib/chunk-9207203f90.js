"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[6520],{"./src/components/DataError/index.tsx":(e,t,n)=>{n.d(t,{Z:()=>components_DataError});var a,r=n("../../node_modules/react/index.js"),i=n("./node_modules/react-intl/lib/src/components/message.js"),l=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),o=n("../blockchain-info-components/src/index.js"),s=n("../../node_modules/ramda/es/prop.js"),c=n("../blockchain-wallet-v4/src/redux/payment/model.js"),d=n("./src/services/misc/index.js"),m=n("./src/modals/components/index.tsx"),p=n("./src/components/Flyout/model.tsx");var u=(0,l.ZP)(o.xv)(a||(a=function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  width: 80%;\n  margin-bottom: 20px;\n"])));const g=function ErrorHandler(e){var t=e.message,n=e.onClick,a=e["data-e2e"],l=(0,s.Z)("message",t)||(0,s.Z)("description",t),g=(0,d.K)(t);return g?r.createElement(r.Fragment,null,r.createElement(u,{size:"18px",weight:400},t),r.createElement(o.zx,{nature:"primary",onClick:function onClick(){return n(g)}},r.createElement(o.xv,{size:"18px",weight:400,color:"white"},r.createElement(i.Z,{id:"components.dataerror.archiveaddress",defaultMessage:"Archive Address"})))):l===m.lh?r.createElement(m.wq,null):l===c.B?r.createElement(o.xv,{size:"16px",weight:400},r.createElement(i.Z,{id:"components.dataerror.feesfetchfailure",defaultMessage:"There was a problem fetching fees. Please try again later."})):l===p.k7?r.createElement(o.xv,{size:"16px",weight:400,style:{width:"300px"}},r.createElement(i.Z,{id:"modals.recurringbuys.period_fetch_error",defaultMessage:"There was an error fetching recurring buy frequency options. Please try again."})):"string"==typeof l?r.createElement(o.xv,{size:"16px",color:"error",weight:500},l):r.createElement(o.Qt,{inline:!0},r.createElement(o.xv,{size:"18px",weight:400},r.createElement(i.Z,{id:"components.dataerror.body",defaultMessage:"Please "})),r.createElement(o.rU,{size:"18px","data-e2e":a?"".concat(a,"Link"):"",onClick:n},r.createElement(i.Z,{id:"components.dataerror.click",defaultMessage:"click here"})),r.createElement(o.xv,{size:"18px",weight:400},r.createElement(i.Z,{id:"components.dataerror.refresh",defaultMessage:" to refresh."})))},x=l.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`,h=l.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`,E=(0,l.ZP)(o.xv)`
  margin-top: 30px;
  margin-bottom: 20px;
`,components_DataError=e=>r.createElement(x,null,r.createElement(h,null,r.createElement(o.Ee,{name:"empty-search",width:"260px"}),r.createElement(E,{size:"18px",weight:500},r.createElement(i.Z,{id:"components.dataerror.header",defaultMessage:"Oops, something went wrong here!"})),r.createElement(g,Object.assign({},e))))},"./src/modals/Brokerage/Banks/AddBankStatus/index.tsx":(e,t,n)=>{n.d(t,{Z:()=>C});var a=n("../../node_modules/react/index.js"),r=n("../../node_modules/react-redux/es/index.js"),i=n("../../node_modules/redux/es/redux.js"),l=n("./src/data/index.ts"),o=n("./src/modals/components/index.tsx"),s=n("../../node_modules/ramda/es/lift.js");const getData=e=>{const t=l.wl.wx.zT.getAddBankStatus(e),n=l.wl.wx.zT.getBankCredentials(e).getOrElse({});return(0,s.Z)((e=>({bankCredentials:n,bankStatus:e})))(t)};var c=n("./node_modules/react-intl/lib/src/components/message.js"),d=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),m=n("../blockchain-info-components/src/index.js"),p=n("./src/components/Flyout/index.tsx"),u=n("./src/data/types.ts");const g=(0,d.ZP)(p.o9)`
  padding-bottom: 0px;
  position: relative;
  height: 100%;
  display: flex;
`,x=(0,d.ZP)(m.JO)`
  position: absolute;
  padding: inherit;
  left: 0px;
  top: 0px;
`,h=d.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`,E=(0,d.ZP)(m.xv)`
  margin: 56px 0 16px 0;
  text-align: center;
`,y=(0,d.ZP)(m.xv)`
  margin-bottom: 56px;
  text-align: center;
`,template_error_general=({bankStatus:e,brokerageActions:t,handleClose:n})=>a.createElement(g,null,a.createElement(x,{cursor:!0,name:"close",size:"20px",color:"grey600",role:"button",onClick:n}),a.createElement(h,null,a.createElement(m.Ee,{width:"100px",name:e===u.li.BANK_TRANSFER_ACCOUNT_EXPIRED?"bank-expired":e===u.li.BANK_TRANSFER_ACCOUNT_REJECTED?"bank-rejected":"bank-error"}),a.createElement(E,{color:"grey800",size:"20px",weight:600},e===u.li.BANK_TRANSFER_ACCOUNT_ALREADY_LINKED?a.createElement(c.Z,{id:"copy.bank_linked_error_title_already_linked",defaultMessage:"This bank has already been linked to your account."}):e===u.li.BANK_TRANSFER_ACCOUNT_NAME_MISMATCH?a.createElement(c.Z,{id:"copy.bank_linked_error_title_yourbank",defaultMessage:"Is this your bank?"}):e===u.li.BANK_TRANSFER_ACCOUNT_EXPIRED?a.createElement(c.Z,{id:"copy.bank_linked_error_title_expiredaccount",defaultMessage:"Expired Account Access"}):e===u.li.BANK_TRANSFER_ACCOUNT_REJECTED?a.createElement(c.Z,{id:"copy.bank_linked_error_title_connectionrejected",defaultMessage:"Connection Rejected"}):e===u.li.BANK_TRANSFER_ACCOUNT_FAILED?a.createElement(c.Z,{id:"copy.bank_linked_error_title_failedconnection",defaultMessage:"Failed Connection Request"}):(u.li.BANK_TRANSFER_ACCOUNT_INVALID,a.createElement(c.Z,{id:"scenes.exchange.confirm.oopsheader",defaultMessage:"Oops! Something went wrong."}))),a.createElement(y,{color:"grey600",weight:500},e===u.li.BANK_TRANSFER_ACCOUNT_ALREADY_LINKED?a.createElement(a.Fragment,null,a.createElement(c.Z,{id:"copy.bank_linked_error_alreadylinked1",defaultMessage:"Log into your Exchange account and link your Wallet. This will connect your bank. If any of this doesn’t look right to you, please"})," ",a.createElement(m.rU,{size:"16px",weight:500,target:"_blank",href:"/support/hc/en-us/requests/new?ticket_form_id=360000190032"},a.createElement(c.Z,{id:"copy.contact_us",defaultMessage:"contact us"}))," ",a.createElement(c.Z,{id:"copy.bank_linked_error_alreadylinked2",defaultMessage:"immediately."})):e===u.li.BANK_TRANSFER_ACCOUNT_NAME_MISMATCH?a.createElement(a.Fragment,null,a.createElement(c.Z,{id:"copy.bank_linked_error_yourbank",defaultMessage:"We noticed the names don’t match. The bank you link must have a matching legal first & last name as your our.com Account."})," ",a.createElement(m.rU,{size:"16px",weight:500,target:"_blank",href:"/support/hc/en-us/"},a.createElement(c.Z,{id:"buttons.learn_more_arrow",defaultMessage:"Learn more ->"}))):e===u.li.BANK_TRANSFER_ACCOUNT_INVALID?a.createElement(a.Fragment,null,a.createElement(c.Z,{id:"copy.bank_linked_error_account_invalid",defaultMessage:"You’ve tried to link an account which is not valid. Please check again or contact support."})):a.createElement(a.Fragment,null,a.createElement(c.Z,{id:"copy.bank_linked_error",defaultMessage:"Please try linking your bank again. If this keeps happening, please"})," ",a.createElement(m.rU,{size:"16px",weight:500,target:"_blank",href:"/support/hc/en-us/"},a.createElement(c.Z,{id:"buttons.contact_support",defaultMessage:"Contact Support"})),".")),a.createElement(m.zx,{"data-e2e":"bankLinkTryAgain",height:"48px",size:"16px",nature:"primary",onClick:()=>t.setAddBankStep({addBankStep:u.Hb.ADD_BANK}),fullwidth:!0},a.createElement(c.Z,{id:"buttons.tryagain",defaultMessage:"Try Again"})),a.createElement(m.zx,{"data-e2e":"bankLinkCancel",height:"48px",size:"16px",nature:"light",style:{marginTop:"16px"},onClick:n,fullwidth:!0},a.createElement(c.Z,{id:"buttons.cancel_goback",defaultMessage:"Cancel & Go Back"})))),b=(0,d.ZP)(p.o9)`
  padding-bottom: 0px;
  position: relative;
  height: 100%;
  display: flex;
`,k=(0,d.ZP)(m.JO)`
  position: absolute;
  padding: inherit;
  left: 0px;
  top: 0px;
`,f=d.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`,_=d.ZP.div`
  display: flex;
  flex-direction: column;
`,w=(0,d.ZP)(m.xv)`
  margin: 56px 0 16px 0;
  text-align: center;
`,Z=(0,d.ZP)(m.xv)`
  margin-bottom: 56px;
  text-align: center;
`,template_success=e=>{var t,n;let r="";if(e.yapilyBankId&&(null===(t=e.bankCredentials)||void 0===t?void 0:t.attributes)){const t=null===(n=e.bankCredentials.attributes)||void 0===n?void 0:n.institutions.find((t=>t.id===e.yapilyBankId));r=t?t.fullName:""}return a.createElement(b,null,a.createElement(k,{cursor:!0,name:"close",size:"20px",color:"grey600",role:"button",onClick:e.handleClose}),a.createElement(_,null,a.createElement(f,null,a.createElement(m.Ee,{width:"100px",name:"bank-success"}),a.createElement(w,{color:"grey800",size:"20px",weight:600},a.createElement(c.Z,{id:"copy.bank_linked.title",defaultMessage:"Bank Linked!"})),a.createElement(Z,{color:"grey600",weight:500},e.yapilyBankId?a.createElement(c.Z,{id:"copy.bank_linked.name",defaultMessage:"Your {bankName} account is now linked to your our.com Wallet",values:{bankName:r}}):a.createElement(c.Z,{id:"copy.bank_linked",defaultMessage:"Your bank account is now linked to your our.com Wallet"})),a.createElement(m.zx,{nature:"primary","data-e2e":"obContinueBankStatus",type:"submit",fullwidth:!0,height:"48px",onClick:()=>e.handleClose()},a.createElement(c.Z,{id:"buttons.continue",defaultMessage:"Continue"})))))};class v extends a.PureComponent{render(){return this.props.data.cata({Failure:()=>null,Loading:()=>a.createElement(o.gb,{text:o.Ue.PROCESSING}),NotAsked:()=>a.createElement(o.gb,{text:o.Ue.PROCESSING}),Success:e=>"ACTIVE"===e.bankStatus?a.createElement(template_success,Object.assign({},e,this.props)):a.createElement(template_error_general,Object.assign({},e,this.props))})}}const C=(0,r.connect)((e=>({data:getData(e)})),(e=>({brokerageActions:(0,i.bindActionCreators)(l.Nw.wx.brokerage,e)})))(v)},"./src/modals/components/index.tsx":(e,t,n)=>{n.d(t,{Ue:()=>b,rD:()=>BankSearchIcon,mf:()=>C,Vd:()=>v,mZ:()=>BankWaitIndicator,zK:()=>s,lh:()=>y,Hr:()=>Hr,wq:()=>IneligibleErrorMessage,Oi:()=>u,dC:()=>LinkViaDesktop,gb:()=>Loading,H:()=>LoadingUpdating,EA:()=>ModalNavWithBackArrow,YX:()=>ModalNavWithCloseIcon,Zu:()=>c,ty:()=>N,NA:()=>ScanWithPhone,$0:()=>d,FP:()=>SimpleBankRow});var a=n("../../node_modules/react/index.js"),r=n("./node_modules/react-intl/lib/src/components/message.js"),i=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),l=n("../blockchain-info-components/src/index.js"),o=n("./src/components/Flyout/index.tsx");const s=(0,i.ZP)(o.o9)`
  padding: 37px 0 34px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`,c=(0,i.ZP)(l.xv)`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  padding-left: 40px;
`,d=i.ZP.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  align-items: center;
  padding: 20px;
`,m=i.ZP.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px auto 0;
  padding: 15px;
  border: 2px solid ${e=>e.theme.blue600};
  border-radius: 4px;

  & img {
    width: 150px;
  }
`,p=i.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s ease-out;
  margin-bottom: 15px;

  & > div:first-child {
    margin-right: 10px;
  }

  &.active {
    opacity: 1;
  }
`,u=i.ZP.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`,g=i.ZP.img`
  margin-bottom: 32px;
  max-height: 60px;
`,ScanWithPhone=({children:e,logo:t,qrCode:n})=>a.createElement(d,null,t&&a.createElement(g,{src:t}),a.createElement(l.xv,{weight:600,size:"20px",color:"grey900"},e),a.createElement(l.xv,{weight:500,size:"14px",color:"grey600"},a.createElement(r.Z,{id:"modals.brokerage.use_phone_camera",defaultMessage:"Use your phone’s camera to scan the QR code."})),a.createElement(m,null,n?a.createElement("img",{alt:"Use your phone’s camera to scan the QR code.",src:n}):a.createElement(l.nZ,{width:"30px",height:"30px"}))),BankWaitIndicator=({qrCode:e})=>{const[t,n]=(0,a.useState)(0);return e&&setTimeout((()=>{n(t+1)}),3e4),a.createElement(p,{className:e?"active":""},a.createElement(l.nZ,{width:"10px",height:"10px",borderWidth:"3px"}),a.createElement(l.xv,{size:"14px",weight:500},0===t&&a.createElement(r.Z,{id:"modals.brokerage.waiting_to_hear",defaultMessage:"Waiting to hear from your bank"}),t>0&&a.createElement(r.Z,{id:"modals.brokerage.this_can_take_a_while",defaultMessage:"This can take several minutes, hold tight!"})))},x=(0,i.ZP)(l.zx)`
  margin: 20px 0 0;
  display: unset;
`,LinkViaDesktop=({authUrl:e,children:t,onClick:n=(()=>{})})=>e?a.createElement(d,null,a.createElement(l.xv,{weight:600,size:"20px",color:"grey900"},t),a.createElement(x,{"data-e2e":"yapilyBankLink",nature:"empty-blue",onClick:()=>{window.open(e,"_blank"),n()}},a.createElement(r.Z,{id:"modals.brokerage.continue_in_browser",defaultMessage:"Continue in browser"}))):null,h=(0,i.ZP)(l.xv)`
  width: 300px;
`,E=i.ZP.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`,y="BROKERAGE_INELIGIBLE",IneligibleErrorMessage=()=>a.createElement(h,{size:"16px",weight:400},a.createElement(r.Z,{id:"modals.brokerage.ineligible_error",defaultMessage:"You are not eligible to make deposits and withdrawals with this currency."}));var b;!function(e){e.GETTING_READY="Getting Ready...",e.LOADING="Loading...",e.PROCESSING="Processing..."}(b||(b={}));const Loading=({text:e})=>a.createElement(E,null,a.createElement(l.nZ,null),a.createElement(l.xv,{weight:600,color:"grey600",style:{marginTop:"24px"}},e===b.LOADING&&a.createElement(r.Z,{id:"copy.loading",defaultMessage:"Loading..."}),e===b.GETTING_READY&&a.createElement(r.Z,{id:"loader.message.gettingready",defaultMessage:"Getting Ready..."}),e===b.PROCESSING&&a.createElement(r.Z,{id:"modals.simplebuy.processing",defaultMessage:"Processing…"}))),k=i.ZP.div`
  transform: translate(47px, 35px);
  border: 5px solid white;
  border-radius: 50%;
  background-color: white;
`,f=(0,i.ZP)(l.xv)`
  font-weight: 600;
  font-size: 20px;
  margin-top: 22px;
`,_=(0,i.ZP)(l.xv)`
  font-size: 14px;
  font-weight: 500;
  margin: 5px 30px;
`,LoadingUpdating=()=>a.createElement(E,null,a.createElement(k,null,a.createElement(l.nZ,{borderWidth:"7px",height:"32px",width:"32px"})),a.createElement(l.Ee,{name:"blockchain-logo-circle",width:"106px"}),a.createElement(f,{color:"grey900"},a.createElement(r.Z,{defaultMessage:"Updating Your Wallet...",id:"modals.brokerage.updating_your_wallet"})),a.createElement(_,{color:"grey600"},a.createElement(r.Z,{defaultMessage:"This could take up to 30 seconds. Please do not go back or close the app.",id:"modals.brokerage.this_could_take"}))),w=i.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 0px solid ${e=>e.theme.grey000};
  border-bottom-width: 1px;
  padding: 28px 40px;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  ${e=>e.onClick&&i.iv`
      cursor: pointer;
      * {
        cursor: pointer;
      }
      &:hover {
        background-color: ${e=>e.theme.blue000};
      }
    `}
`,Z=i.ZP.div`
  height: 30px;
  width: 30px;
  background: url('${e=>e.url}') 0 0 no-repeat;
  background-size: 30px;
  background-position: center;
`,v=i.ZP.div`
  position: relative;
`,C=i.ZP.input`
  border: 1px solid ${e=>e.theme.grey000};
  font-size: 16px;
  width: 100%;
  border-width: 1px 0;
  padding: 20px 0 20px 40px;

  &:active,
  &:focus {
    outline: none;
  }
`,BankSearchIcon=()=>a.createElement(l.JO,{size:"20px",color:"grey600",name:"magnifier",style:{position:"absolute",right:"60px",top:"20px"}}),SimpleBankRow=e=>a.createElement(w,{onClick:e.onClick},a.createElement("div",null,a.createElement(Z,{url:e.institution.media[0].source}),a.createElement(l.xv,{color:"grey900",style:{marginLeft:"20px"},weight:600},e.institution.name)),a.createElement(l.JO,{cursor:!0,name:"chevron-right",size:"20px",color:"grey600",role:"button",style:{marginRight:"24px"}})),ModalNavWithBackArrow=e=>a.createElement(c,{color:"grey800",size:"20px",weight:600},a.createElement(l.JO,{cursor:!0,name:"arrow-back",size:"20px",color:"grey600",role:"button",style:{marginRight:"24px"},onClick:()=>e.handleClose()}),e.children),ModalNavWithCloseIcon=e=>a.createElement(c,{color:"grey800",size:"20px",weight:600,style:{justifyContent:"space-between"}},e.children,a.createElement(l.JO,{cursor:!0,name:"close",size:"20px",color:"grey600",role:"button",style:{marginRight:"24px"},onClick:()=>e.handleClose()})),A=i.ZP.hr`
  border: none;
  border-top: 1px solid ${e=>e.theme.grey100};
  text-align: center;
  overflow: visible;
  color: #333;
  height: 5px;
  width: 100%;

  &:after {
    content: 'OR';
    padding: 0 4px;
    position: relative;
    top: -10px;
    background: ${e=>e.theme.alwaysWhite};
  }
`,Hr=()=>a.createElement("div",{style:{width:"100%"}},a.createElement(l.xv,{weight:600,size:"16px",color:"grey900"},a.createElement(A,null))),N=((0,i.ZP)(l.xv)`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.spaceBetween?"space-between":"initial"};
  margin-bottom: ${e=>e.marginBottom?"16px":"0px"};
`,({amount:e,currency:t})=>a.createElement(r.Z,{id:"modals.send.over_your_limit",defaultMessage:"Over your limit! Send up to {currency}{amount}.",values:{amount:e,currency:t}}))}}]);