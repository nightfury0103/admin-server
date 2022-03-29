"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[3713],{"./src/components/DataError/index.tsx":(e,t,n)=>{n.d(t,{Z:()=>components_DataError});var i,r=n("../../node_modules/react/index.js"),a=n("./node_modules/react-intl/lib/src/components/message.js"),o=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),l=n("../blockchain-info-components/src/index.js"),s=n("../../node_modules/ramda/es/prop.js"),c=n("../blockchain-wallet-v4/src/redux/payment/model.js"),d=n("./src/services/misc/index.js"),m=n("./src/modals/components/index.tsx"),p=n("./src/components/Flyout/model.tsx");var u=(0,o.ZP)(l.xv)(i||(i=function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  width: 80%;\n  margin-bottom: 20px;\n"])));const g=function ErrorHandler(e){var t=e.message,n=e.onClick,i=e["data-e2e"],o=(0,s.Z)("message",t)||(0,s.Z)("description",t),g=(0,d.K)(t);return g?r.createElement(r.Fragment,null,r.createElement(u,{size:"18px",weight:400},t),r.createElement(l.zx,{nature:"primary",onClick:function onClick(){return n(g)}},r.createElement(l.xv,{size:"18px",weight:400,color:"white"},r.createElement(a.Z,{id:"components.dataerror.archiveaddress",defaultMessage:"Archive Address"})))):o===m.lh?r.createElement(m.wq,null):o===c.B?r.createElement(l.xv,{size:"16px",weight:400},r.createElement(a.Z,{id:"components.dataerror.feesfetchfailure",defaultMessage:"There was a problem fetching fees. Please try again later."})):o===p.k7?r.createElement(l.xv,{size:"16px",weight:400,style:{width:"300px"}},r.createElement(a.Z,{id:"modals.recurringbuys.period_fetch_error",defaultMessage:"There was an error fetching recurring buy frequency options. Please try again."})):"string"==typeof o?r.createElement(l.xv,{size:"16px",color:"error",weight:500},o):r.createElement(l.Qt,{inline:!0},r.createElement(l.xv,{size:"18px",weight:400},r.createElement(a.Z,{id:"components.dataerror.body",defaultMessage:"Please "})),r.createElement(l.rU,{size:"18px","data-e2e":i?"".concat(i,"Link"):"",onClick:n},r.createElement(a.Z,{id:"components.dataerror.click",defaultMessage:"click here"})),r.createElement(l.xv,{size:"18px",weight:400},r.createElement(a.Z,{id:"components.dataerror.refresh",defaultMessage:" to refresh."})))},f=o.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`,x=o.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`,h=(0,o.ZP)(l.xv)`
  margin-top: 30px;
  margin-bottom: 20px;
`,components_DataError=e=>r.createElement(f,null,r.createElement(x,null,r.createElement(l.Ee,{name:"empty-search",width:"260px"}),r.createElement(h,{size:"18px",weight:500},r.createElement(a.Z,{id:"components.dataerror.header",defaultMessage:"Oops, something went wrong here!"})),r.createElement(g,Object.assign({},e))))},"./src/modals/Onboarding/KycVerification/index.tsx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>Wt});var i=n("../../node_modules/react/index.js"),r=n("./node_modules/react-intl/lib/src/components/message.js"),a=n("../../node_modules/react-redux/es/index.js"),o=n("../../node_modules/ramda/es/pickBy.js"),l=n("../../node_modules/ramda/es/includes.js"),s=n("../../node_modules/redux/es/redux.js"),c=n("./src/components/DataError/index.tsx"),d=n("./src/components/Flyout/index.tsx"),m=n("./src/data/index.ts"),p=n("./src/data/types.ts"),u=n("./src/providers/ModalEnhancer/index.tsx"),g=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),f=n("../blockchain-info-components/src/index.js");const x=g.ZP.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`,h=(0,g.ZP)(f.xv)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,y=(0,g.ZP)(d.o9)`
  display: flex;
  flex-direction: column;
  flex: 1;
`,E=g.ZP.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  border-top: 1px solid ${e=>e.theme.grey000};
`,b=g.ZP.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,w=g.ZP.div`
  border-bottom: 1px solid ${e=>e.theme.grey000};
  padding: 28px 250px 28px 40px;
`,v=g.ZP.div`
  display: flex;
  flex-direction: column;
`,Z=g.ZP.div`
  display: flex;
  align-items: center;
`,C=g.ZP.div`
  display: flex;
  flex-direction: row;
  background-color: ${e=>e.theme.blue000};
  border-radius: 8px;
  margin-bottom: 24px;
  padding: 16px;
`,template=e=>i.createElement(x,null,i.createElement(d.o9,{style:{borderBottom:"grey000",paddingBottom:"0px"}},i.createElement(h,{color:"grey800",size:"20px",weight:600},i.createElement(Z,null,i.createElement(f.JO,{cursor:!0,"data-e2e":"kycAdditionalInfoBackButton",name:"arrow-left",size:"20px",color:"grey600",role:"button",style:{marginRight:"8px"},onClick:e.closeAllModals}),i.createElement(r.Z,{id:"modals.kycverification.additionalinfo.title",defaultMessage:"Additional Information Required"}))),i.createElement(f.xv,{color:"grey600",weight:500},i.createElement(r.Z,{id:"modals.kycverification.additionalinfo.description",defaultMessage:"We need to confirm your identity with a government issued ID and selfie. Before proceeding, make sure you have one of the following forms of ID handy and your camera is turned on."}))),i.createElement(E,null,i.createElement(w,null,i.createElement(f.xv,{color:"grey800",weight:600},i.createElement(r.Z,{id:"modals.kycverification.additionalinfo.requirement_1",defaultMessage:"Government Issued ID"}))),i.createElement(w,null,i.createElement(f.xv,{color:"grey800",weight:600},i.createElement(r.Z,{id:"modals.kycverification.additionalinfo.requirement_2",defaultMessage:"Valid Driver’s License"}))),i.createElement(w,null,i.createElement(f.xv,{color:"grey800",weight:600},i.createElement(r.Z,{id:"modals.kycverification.additionalinfo.requirement_3",defaultMessage:"National Identity Card"})))),i.createElement(y,{style:{paddingTop:"40px"}},i.createElement(b,null,i.createElement(f.xv,{color:"grey600",weight:500},i.createElement(r.Z,{id:"modals.kycverification.additionalinfo.disclaimer",defaultMessage:"our.com’s ID verification process is powered by our partner Veriff. We’ll take you to them on the next screen."}))),i.createElement(v,null,i.createElement(C,null,i.createElement(f.JO,{size:"20px",name:"info",color:"blue600"}),i.createElement(f.xv,{color:"blue600",weight:600,size:"14px",style:{marginLeft:"16px",marginTop:"1px"}},i.createElement(r.Z,{id:"modals.kycverification.additionalinfo.webcam_and_microphone",defaultMessage:"Be sure to enable your Webcam & Microphone."}))),i.createElement(f.zx,{"data-e2e":"kycAdditionalInfoNextButton",height:"48px",size:"16px",nature:"primary",type:"submit",onClick:e.goToNextStep,fullwidth:!0},i.createElement(r.Z,{id:"buttons.next",defaultMessage:"Next"}))))),_=(0,a.connect)(void 0,(e=>({closeAllModals:()=>e(m.Nw.qk.closeAllModals()),goToNextStep:()=>e(m.Nw.wx.identityVerification.goToNextStep())})))(template),k=g.ZP.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`,template_loading=()=>i.createElement(k,null,i.createElement(f.T_,{width:"80px",height:"80px"}));var P=n("../../node_modules/ramda/es/lift.js");const{VERIFY_EMAIL_FORM:M}=m.o4.wx.LE,getData=e=>{const t=m.wl.cr.getFormSyncErrors(M)(e),n=m.wl.wx.wd.isUserSddEligible(e),i=m.wl.vE.Xd.getEmail(e).getOrElse("");return(0,P.Z)((e=>({email:i,formErrors:t,isUserSddEligible:e})))(n)};var z=n("../../node_modules/redux-form/es/Field.js"),S=n("../../node_modules/redux-form/es/reduxForm.js"),A=n("./src/components/Form/index.ts"),L=n("./src/services/forms/index.js");const{VERIFY_EMAIL_FORM:T}=m.o4.wx.LE,j=g.ZP.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`,O=g.ZP.div`
  display: flex;
  background: ${e=>e.theme[e.color]};
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 20px;
`,I=g.ZP.div`
  display: flex;
  justify-content: flex-end;
`,N=g.ZP.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  padding: 0 40px;
  flex: 1;
  justify-content: center;
`,V=g.ZP.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  height: 250px;
  width: 100%;
`,D=g.ZP.span`
  display: inline;
  padding: 40px;
  text-align: center;
`,F=(0,g.ZP)(A.l0)`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`,B=g.ZP.label`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 12px;
  display: block;
  text-align: left;
`,R=(0,S.Z)({destroyOnUnmount:!1,form:T})((e=>{const[t,n]=(0,i.useState)(!1);return i.createElement(j,null,i.createElement(d.o9,null,i.createElement(I,null,i.createElement(f.JO,{cursor:!0,"data-e2e":"kycCloseModalIcon",name:"close",size:"20px",color:"grey600",role:"button",onClick:e.handleClose}))),i.createElement(N,null,i.createElement(V,null,i.createElement(O,{color:"blue600"},i.createElement(f.JO,{color:"white",name:"email",size:"24px"})),i.createElement(f.xv,{size:"20px",weight:600,color:"black",style:{marginTop:"8px"}},t?i.createElement(r.Z,{id:"modals.simplebuy.verifyemail.change_your_email",defaultMessage:"Change Your Email Address"}):i.createElement(r.Z,{id:"scenes.verifyemail.title",defaultMessage:"Verify Your Email"})),t?i.createElement(F,{onSubmit:e.handleSubmit},i.createElement(A.cw,null,i.createElement(A.xJ,null,i.createElement(B,{htmlFor:"email"},i.createElement(f.xv,{weight:500,size:"14px"},i.createElement(r.Z,{id:"modals.simplebuy.verifyemail.email_address",defaultMessage:"Email Address"}))),i.createElement(z.Z,{name:"email",component:A.zC,validate:[L.C1,L.u$],verified:e.isEmailVerified,errorBottom:!0}))),i.createElement(f.zx,{"data-e2e":"submitKYCVerifyEmail",height:"48px",size:"16px",nature:"primary",type:"submit",fullwidth:!0},e.submitting?i.createElement(f.JA,{height:"16px",width:"16px",color:"white"}):i.createElement(r.Z,{id:"modals.simplebuy.verifyemail.save_and_verify",defaultMessage:"Save & Verify"}))):i.createElement(i.Fragment,null,i.createElement(f.xv,{color:"grey900",style:{marginTop:"8px"},size:"16px",weight:500},i.createElement(r.Z,{id:"scenes.verifyemail.description",defaultMessage:"We sent a verification email to <b>{email}</b>. Please click the link in the email to continue.",values:{email:e.email}})),i.createElement(f.rU,{onClick:()=>n(!0),size:"16px",style:{marginTop:"40px"},weight:500,"data-e2e":"changeVerifyEmail",color:"blue600"},i.createElement(r.Z,{id:"modals.simplebuy.verifyemail.change_email",defaultMessage:"Change Email Address"}))))),!t&&i.createElement(D,null,i.createElement(f.xv,{color:"grey900",style:{display:"inline-block",marginRight:"2px"},size:"16px",weight:500},i.createElement(r.Z,{id:"modals.simplebuy.verifyemail.dint_get",defaultMessage:"Didn’t get the email?"})),i.createElement(f.rU,{onClick:()=>e.resendEmail(e.email),size:"16px",style:{marginTop:"40px"},weight:500,"data-e2e":"resendVerifyEmail",color:"blue600"},i.createElement(r.Z,{id:"modals.simplebuy.verifyemail.resend",defaultMessage:"Resend"}))))})),{VERIFY_EMAIL_FORM:J}=m.o4.wx.LE;class q extends i.PureComponent{constructor(){super(...arguments),this.handleSubmit=()=>{const{formValues:e,identityVerificationActions:t,securityCenterActions:n,settingsActions:i}=this.props;e&&(t.updateEmail(e.email),n.resendVerifyEmail(e.email),i.setEmail(e.email))},this.onResendEmail=e=>{const{securityCenterActions:t}=this.props;t.resendVerifyEmail(e)}}componentDidMount(){const{isEmailVerified:e,settingsActions:t}=this.props;e||t.fetchSettings(),this.props.buySellActions.fetchSDDEligibility()}render(){return this.props.data.cata({Failure:()=>null,Loading:()=>i.createElement(template_loading,null),NotAsked:()=>i.createElement(template_loading,null),Success:e=>i.createElement(R,Object.assign({},this.props,e,{resendEmail:this.onResendEmail,onSubmit:this.handleSubmit}))})}}const $=(0,a.connect)((e=>({data:getData(e),formValues:m.wl.cr.getFormValues(J)(e),isEmailVerified:m.wl.vE.Xd.getEmailVerified(e).getOrElse(!1)})),(e=>({buySellActions:(0,s.bindActionCreators)(m.Nw.wx.buySell,e),formActions:(0,s.bindActionCreators)(m.Nw.cr,e),identityVerificationActions:(0,s.bindActionCreators)(m.Nw.wx.identityVerification,e),profileActions:(0,s.bindActionCreators)(m.Nw.qz.N5,e),securityCenterActions:(0,s.bindActionCreators)(m.Nw.qz.cD,e),settingsActions:(0,s.bindActionCreators)(m.Nw.vE.Xd,e)})))(q);var U=n("../../node_modules/ramda/es/compose.js"),__rest=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};const{INFO_AND_RESIDENTIAL_FORM:W}=m.o4.wx.LE,formatUserData=e=>{var{state:t,kycState:n,id:i,address:r,mobile:a}=e,o=__rest(e,["state","kycState","id","address","mobile"]);return Object.assign(Object.assign(Object.assign({},o),{address:r}),r)},selectors_getData=e=>{const t=m.wl.cr.getFormSyncErrors(W)(e),n=m.wl.wx.LE.getSupportedCountries(e),i=(0,U.Z)((0,P.Z)(formatUserData),m.wl.qz.N5.getUserData)(e).getOrElse({});return(0,P.Z)((e=>({formErrors:t,userData:i,supportedCountries:e})))(n)};var Y=n("../../node_modules/ramda/es/map.js"),G=n("../../node_modules/ramda/es/replace.js"),K=n("../../node_modules/ramda/es/defaultTo.js"),X=n("./src/services/locales/index.js");const{INFO_AND_RESIDENTIAL_FORM:H}=m.o4.wx.LE,Q=g.ZP.label`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
  display: block;
  color: ${e=>e.theme.grey900};
`,ee=g.ZP.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`,te=(g.ZP.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`,g.ZP.div`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
`),ne=(0,g.ZP)(f.xv)`
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: ${e=>e.theme.grey600};
`,ie=(0,g.ZP)(A.l0)`
  height: 100%;
  display: flex;
  flex-direction: column;
`,re=(0,g.ZP)(f.xv)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,ae=g.ZP.div`
  display: flex;
  align-items: center;
`,oe=g.ZP.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`,le=(0,g.ZP)(f.xv)`
  display: inline-flex;
  font-weight: 500;
  font-size: 14px;
  padding: 6px 12px;
  border-radius: 32px;
  background-color: ${e=>e.theme.red000};
  color: ${e=>e.theme.red800};
  margin-bottom: 16px;
`,se=(0,G.Z)(/^0/,""),objectToDOB=({date:e="",month:t="",year:n=""})=>{return`${n}-${t}-${i=e,i.length>=2?i:`0${i}`}`;var i},DOBToObject=e=>{const[t="",n="",i=""]=(0,K.Z)("",e).split("-");return{date:se(i),month:n,year:t}},ce=(0,S.Z)({destroyOnUnmount:!1,form:H})((e=>{var t;const n=e.invalid||e.submitting;if(e.submitting)return i.createElement(ee,null,i.createElement(f.T_,{width:"80px",height:"80px"}));let a=e.formValues&&e.formValues.country&&e.formValues.country.code||e.countryCode;(null===(t=e.userData)||void 0===t?void 0:t.country)&&e.userData.country!==a&&(a=e.userData.country);const o="US"===a,l=(0,L.z9)(a)||(0,L.VK)(a),s=e.supportedCountries.find((e=>e.code===a));return s&&(!e.formValues||e.formValues&&!e.formValues.country)&&e.updateDefaultCountry(s),i.createElement(ie,{onSubmit:e.handleSubmit},i.createElement(d.o9,{style:{borderBottom:"grey000",paddingBottom:"0px"}},i.createElement(re,{color:"grey800",size:"20px",weight:600},i.createElement(ae,null,i.createElement(f.JO,{cursor:!0,"data-e2e":"kycBackToCryptoSelection",name:"arrow-left",size:"20px",color:"grey600",role:"button",style:{marginRight:"8px"},onClick:e.onClose}),i.createElement(r.Z,{id:"modals.simplebuy.info_and_residential.title",defaultMessage:"Info & Residential Address"})),i.createElement(f.JO,{cursor:!0,"data-e2e":"kycCloseModalIcon",name:"close",size:"20px",color:"grey600",role:"button",onClick:e.onClose}))),i.createElement(d.o9,{style:{paddingTop:"36px"}},e.error&&i.createElement(oe,null,i.createElement(le,null,i.createElement(f.JO,{name:"alert-filled",color:"red600",style:{marginRight:"4px"}}),"Error: ",e.error)),i.createElement(A.cw,{inline:!0},i.createElement(A.xJ,null,i.createElement(Q,{htmlFor:"firstName"},i.createElement(f.xv,{weight:500,size:"14px",color:"grey900"},i.createElement(r.Z,{id:"identityverification.personal.firstnamerequired",defaultMessage:"First Name *"}))),i.createElement(z.Z,{"date-e2e":"firstName",name:"firstName",validate:L.C1,component:A.zC,errorBottom:!0})),i.createElement(A.xJ,null,i.createElement(Q,{htmlFor:"lastName"},i.createElement(f.xv,{weight:500,size:"14px",color:"grey900"},i.createElement(r.Z,{id:"identityverification.personal.lastnamerequired",defaultMessage:"Last Name *"}))),i.createElement(z.Z,{"date-e2e":"lastName",name:"lastName",validate:L.C1,component:A.zC,errorBottom:!0}))),i.createElement(A.cw,null,i.createElement(ne,null,i.createElement(r.Z,{id:"modals.simplebuy.info_and_residential.id_or_password",defaultMessage:"As shown on your government issued ID or Passport"}))),i.createElement(A.cw,null,i.createElement(A.xJ,null,i.createElement(Q,{htmlFor:"dob"},i.createElement(f.xv,{weight:500,size:"14px",color:"grey900"},i.createElement(r.Z,{id:"identityverification.personal.dateofbirthrequired",defaultMessage:"Date of Birth *"}))),i.createElement(z.Z,{name:"dob",validate:[L.o4,L.xb],component:A.aJ,fullwidth:!0,label:!0,errorBottom:!0,countryIsUS:o,parse:objectToDOB,format:DOBToObject})),i.createElement(te,null,i.createElement(f.JO,{name:"info",style:{marginRight:"2px"}}),i.createElement(ne,null,i.createElement(r.Z,{id:"modals.simplebuy.info_and_residential.dob_caption",defaultMessage:"You must be 18 years of age or older to Buy Crypto."})))),i.createElement(A.cw,null,i.createElement(A.xJ,null,i.createElement(Q,{htmlFor:"line1"},i.createElement(f.xv,{weight:500,size:"14px",color:"grey900"},o?i.createElement(r.Z,{id:"identityverification.personal.address_line1required",defaultMessage:"Address Line 1 *"}):i.createElement(r.Z,{id:"identityverification.personal.streetline1required",defaultMessage:"Street Line 1 *"}))),i.createElement(z.Z,{name:"line1",errorBottom:!0,validate:L.C1,component:A.zC}))),i.createElement(A.cw,null,i.createElement(A.xJ,null,i.createElement(Q,{htmlFor:"line2"},i.createElement(f.xv,{weight:500,size:"14px",color:"grey900"},o?i.createElement(r.Z,{id:"identityverification.personal.address_line2",defaultMessage:"Address Line 2"}):i.createElement(r.Z,{id:"identityverification.personal.streetline2",defaultMessage:"Street Line 2"}))),i.createElement(z.Z,{name:"line2",errorBottom:!0,component:A.zC}))),i.createElement(A.cw,null,i.createElement(A.xJ,null,i.createElement(Q,{htmlFor:"city"},i.createElement(f.xv,{weight:500,size:"14px",color:"grey900"},i.createElement(r.Z,{id:"identityverification.personal.cityrequired",defaultMessage:"City *"}))),i.createElement(z.Z,{name:"city",errorBottom:!0,validate:L.C1,component:A.zC}))),i.createElement(A.cw,{inline:!0},i.createElement(A.xJ,null,i.createElement(A.lX,null,o?i.createElement(r.Z,{id:"identityverification.personal.staterequired",defaultMessage:"State *"}):i.createElement(r.Z,{id:"identityverification.personal.region",defaultMessage:"Region"})),o?i.createElement(z.Z,{name:"state",component:A.T3,errorBottom:!0,validate:[L.C1],normalize:e=>e&&e.code,format:e=>({code:e,name:(0,X.z1)(e)})}):i.createElement(z.Z,{name:"state",component:A.zC,errorBottom:!0,countryCode:a})),l&&i.createElement(A.xJ,null,i.createElement(A.lX,{htmlFor:"postCode"},i.createElement(f.xv,{weight:500,size:"14px",color:"grey900"},(0,L.z9)(a)?i.createElement(r.Z,{id:"identityverification.personal.zip",defaultMessage:"Zip Code *"}):i.createElement(r.Z,{id:"identityverification.personal.postcoderequired",defaultMessage:"Postcode *"}))),i.createElement(z.Z,{name:"postCode",errorBottom:!0,validate:L.j0,component:A.zC}))),i.createElement(A.cw,null,i.createElement(A.xJ,null,i.createElement(Q,{htmlFor:"country"},i.createElement(f.xv,{weight:500,size:"14px",color:"grey900"},i.createElement(r.Z,{id:"modals.simplebuy.info_and_residential.country",defaultMessage:"Country"}))),i.createElement(z.Z,{"data-e2e":"selectCountryDropdown",name:"country",validate:L.C1,elements:(c=e.supportedCountries,[{group:"",items:(0,Y.Z)((e=>({text:e.name,value:e})),c)}]),component:A.jL,menuPlacement:"auto",onChange:e.onCountrySelect,label:i.createElement(r.Z,{id:"components.selectboxcountry.label",defaultMessage:"Select country"})}))),i.createElement(f.zx,{"data-e2e":"submitKYCInforAndResidential",height:"48px",size:"16px",nature:"primary",type:"submit",fullwidth:!0,disabled:n},e.submitting?i.createElement(f.JA,{height:"16px",width:"16px",color:"white"}):i.createElement(r.Z,{id:"buttons.next",defaultMessage:"Next"}))));var c})),{INFO_AND_RESIDENTIAL_FORM:de}=m.o4.wx.LE;class me extends i.PureComponent{constructor(){super(...arguments),this.fetchData=()=>{this.props.identityVerificationActions.fetchSupportedCountries(),this.props.identityVerificationActions.fetchStates()},this.handleSubmit=()=>{const{checkSddEligibility:e,identityVerificationActions:t,onCompletionCallback:n}=this.props;t.saveInfoAndResidentialData(e,n)},this.onCountryChange=(e,t)=>{this.setDefaultCountry(t)},this.setDefaultCountry=e=>{this.props.formActions.change(de,"country",e),this.props.formActions.clearFields(de,!1,!1,"state")}}componentDidMount(){this.fetchData()}render(){return this.props.data.cata({Failure:()=>i.createElement(c.Z,{onClick:this.fetchData}),Loading:()=>i.createElement(template_loading,null),NotAsked:()=>i.createElement(template_loading,null),Success:e=>i.createElement(ce,Object.assign({},this.props,e,{onSubmit:this.handleSubmit,onCountrySelect:this.onCountryChange,updateDefaultCountry:this.setDefaultCountry,initialValues:Object.assign({},e.userData)}))})}}const pe=(0,a.connect)((e=>({countryCode:m.wl.vE.Xd.getCountryCode(e).getOrElse(null),data:selectors_getData(e),formValues:m.wl.cr.getFormValues(de)(e)})),(e=>({formActions:(0,s.bindActionCreators)(m.Nw.cr,e),identityVerificationActions:(0,s.bindActionCreators)(m.Nw.wx.identityVerification,e)})))(me);var ue,ge,fe,xe,he,ye,Ee,be,we,ve,Ze,Ce,_e,ke,Pe,Me,ze,Se,Ae,Le,Te,je,Oe,Ie,Ne,Ve,De,Fe,Be,Re,Je,qe,$e,Ue,We,Ye,Ge,Ke,Xe=n("./src/services/styles/index.ts");function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var He,Qe,et=g.ZP.form(ue||(ue=_taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n"]))),tt=(g.ZP.div(ge||(ge=_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n"]))),g.ZP.div(fe||(fe=_taggedTemplateLiteral(["\n  width: 50%;\n  ",";\n"])),Xe.BC.mobile(xe||(xe=_taggedTemplateLiteral(["\n    width: 100%;\n  "])))),g.ZP.div(he||(he=_taggedTemplateLiteral(["\n  width: 80%;\n"]))),g.ZP.div(ye||(ye=_taggedTemplateLiteral(["\n  width: 50%;\n  ",";\n"])),Xe.BC.mobile(Ee||(Ee=_taggedTemplateLiteral(["\n    width: 100%;\n  "])))),g.ZP.div(be||(be=_taggedTemplateLiteral(["\n  font-size: 14px;\n  margin-bottom: 10px;\n"]))),g.ZP.div(we||(we=_taggedTemplateLiteral(["\n  width: 90%;\n  max-width: 840px;\n  margin: 0 auto;\n  ",";\n  ",";\n"])),Xe.BC.tablet(ve||(ve=_taggedTemplateLiteral(["\n    max-width: 568px;\n  "]))),Xe.BC.mobile(Ze||(Ze=_taggedTemplateLiteral(["\n    max-width: 432px;\n  "]))))),nt=g.ZP.div(Ce||(Ce=_taggedTemplateLiteral(["\n  font-size: 30px;\n  font-weight: 600;\n  color: ",";\n  ",";\n"])),(function(e){return e.color&&e.theme[e.color]}),Xe.BC.mobile(_e||(_e=_taggedTemplateLiteral(["\n    font-size: 20px;\n    font-weight: 500;\n  "])))),it=g.ZP.div(ke||(ke=_taggedTemplateLiteral(["\n  margin-top: 5px;\n  font-size: 16px;\n  ",";\n"])),Xe.BC.mobile(Pe||(Pe=_taggedTemplateLiteral(["\n    font-size: 14px;\n  "])))),rt=(g.ZP.div(Me||(Me=_taggedTemplateLiteral(["\n  margin-top: 25px;\n"]))),g.ZP.div(ze||(ze=_taggedTemplateLiteral(["\n  font-size: 20px;\n  font-weight: 500;\n  margin-bottom: 20px;\n"]))),g.ZP.div(Se||(Se=_taggedTemplateLiteral(["\n  font-size: 16px;\n  font-weight: 500;\n  margin-bottom: 15px;\n"]))),g.ZP.div(Ae||(Ae=_taggedTemplateLiteral(["\n  margin-top: 5px;\n  a {\n    cursor: pointer;\n    color: ",";\n  }\n"])),(function(e){return e.theme.blue600})),g.ZP.div(Le||(Le=_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  padding-left: 20%;\n  ",";\n"])),Xe.BC.mobile(Te||(Te=_taggedTemplateLiteral(["\n    width: 100%;\n    padding-left: 0px;\n  "])))),g.ZP.span(je||(je=_taggedTemplateLiteral(["\n  margin-top: 5px;\n  font-size: 12px;\n  color: ",";\n  a {\n    cursor: pointer;\n    color: ",";\n  }\n"])),(function(e){return e.error?e.theme.error:e.theme.grey400}),(function(e){return e.theme.blue600})),g.ZP.div(Oe||(Oe=_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-top: 15px;\n"])))),at=((0,g.ZP)(rt)(Ie||(Ie=_taggedTemplateLiteral(["\n  a {\n    color: #545456;\n    font-weight: 400;\n    font-size: 14px;\n  }\n"]))),g.ZP.div(Ne||(Ne=_taggedTemplateLiteral(["\n  border: 1px solid ",";\n  padding: 30px;\n"])),(function(e){return e.theme.grey000})),g.ZP.div(Ve||(Ve=_taggedTemplateLiteral(["\n  height: 48px;\n  border: 1px solid ",";\n  padding: 0 15px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: ",";\n  justify-content: space-between;\n  border-radius: 4px;\n  ",";\n"])),(function(e){return e.theme.grey000}),(function(e){return e.width||"85%"}),Xe.BC.mobile(De||(De=_taggedTemplateLiteral(["\n    border: none;\n    width: 100%;\n    padding: 0px;\n    flex-direction: column;\n    width: fit-content;\n  "])))),(0,g.ZP)(et)(Fe||(Fe=_taggedTemplateLiteral(["\n  height: 100%;\n  label[for='","'] {\n    color: ",";\n  }\n  label[for='","'] + div {\n    .bc__control,\n    input {\n      background-color: ",";\n      border: 1px solid\n        ",";\n    }\n  }\n"])),(function(e){return e.activeField}),(function(e){return e.theme.blue900}),(function(e){return e.activeField}),(function(e){return e.theme.white}),(function(e){return e.activeFieldError?e.theme.error:e.theme.blue600}))),ot=(0,g.ZP)(nt)(Be||(Be=_taggedTemplateLiteral(["\n  margin-top: 40px;\n  font-weight: 500;\n  position: relative;\n  font-size: 24px;\n  ",";\n"])),Xe.BC.mobile(Re||(Re=_taggedTemplateLiteral(["\n    margin-top: 32px;\n  "])))),lt=(0,g.ZP)(it)(Je||(Je=_taggedTemplateLiteral(["\n  font-weight: 400;\n  margin-top: 10px;\n  ",";\n"])),Xe.BC.mobile(qe||(qe=_taggedTemplateLiteral(["\n    font-size: 16px;\n  "])))),st=(g.ZP.label($e||($e=_taggedTemplateLiteral(["\n  font-size: 16px;\n  font-weight: 400;\n  margin-bottom: 12px;\n  display: block;\n"]))),(0,g.ZP)(f.zx)(Ue||(Ue=_taggedTemplateLiteral(["\n  color: ",";\n  background-color: ",";\n  border-color: ",";\n"])),(function(e){return e.theme.white}),(function(e){return e.theme.grey200}),(function(e){return e.theme.grey200}))),ct=(0,g.ZP)(f.Ee)(We||(We=_taggedTemplateLiteral(["\n  margin-top: 40px;\n  margin-bottom: 40px;\n"]))),dt=g.ZP.div(Ye||(Ye=_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 90%;\n  max-width: 840px;\n  margin: 0 auto;\n  ",";\n  ",";\n"])),Xe.BC.tablet(Ge||(Ge=_taggedTemplateLiteral(["\n    max-width: 568px;\n  "]))),Xe.BC.mobile(Ke||(Ke=_taggedTemplateLiteral(["\n    max-width: 432px;\n    flex-direction: column-reverse;\n    align-items: center;\n    > div, button {\n      width: 100%;\n      text-align: center;\n      &:last-child {\n        margin-bottom: 14px;\n      }\n    }\n  "]))));function MoreInfo_taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var mt=g.ZP.div(He||(He=MoreInfo_taggedTemplateLiteral(["\n  display: flex;\n  height: 100%;\n  flex-direction: row;\n  ",";\n"])),Xe.BC.mobile(Qe||(Qe=MoreInfo_taggedTemplateLiteral(["\n    flex-direction: column;\n  "]))));const pt=(0,a.connect)(void 0,(function mapDispatchToProps(e){return{closeAllModals:function closeAllModals(){return e(m.Nw.qk.closeAllModals())},goToNextStep:function goToNextStep(){return e(m.Nw.wx.identityVerification.goToNextStep())}}}))((function MoreInfo(e){var t=e.closeAllModals,n=e.goToNextStep;return i.createElement(at,null,i.createElement(A.L2,{fields:i.createElement(mt,null,i.createElement(tt,null,i.createElement(ot,null,i.createElement(r.Z,{id:"identityverification.more_info.header",defaultMessage:"We Need Some More Information"})),i.createElement(ct,{name:"identity-verification"}),i.createElement(lt,null,i.createElement(r.Z,{id:"identityverification.more_info.more_info",defaultMessage:"We need to get a bit more information from you before you can start trading."}),i.createElement("br",null),i.createElement(r.Z,{id:"identityverification.more_info.required_docs",defaultMessage:"You'll need to provide a government issued ID and selfie. Please click Continue below to complete these final steps."})))),footer:i.createElement(dt,null,i.createElement(st,{"data-e2e":"moreInfoCancelButton",onClick:t},i.createElement(r.Z,{id:"buttons.cancel",defaultMessage:"Cancel"})),i.createElement(f.zx,{nature:"primary","data-e2e":"moreInfoContinueButton",onClick:n},i.createElement(r.Z,{id:"buttons.continue",defaultMessage:"Continue"})))}))})),KycVerification_selectors_getData=e=>({emailVerified:m.wl.vE.Xd.getEmailVerified(e).getOrElse(!1),step:m.wl.wx.LE.getVerificationStep(e),steps:m.wl.wx.LE.getSteps(e)}),{ID_VERIFICATION_SUBMITTED_FORM:ut}=m.o4.wx.LE,gt=g.ZP.div`
  display: flex;
  height: 100%;
  padding: 48px;
  text-align: center;
  align-items: center;
  flex-direction: column;
`,ft=g.ZP.div`
  margin: 42px 0;
`,xt=(0,g.ZP)(f.zx)`
  margin: 30px auto 0;
  height: 48px;
  font-size: 16px;
  width: 210px;
  min-width: 210px;
`;class ht extends i.PureComponent{componentDidMount(){const{campaign:e,identityVerificationActions:t}=this.props;e&&t.claimCampaignClicked(e)}render(){const{onClose:e,submitting:t}=this.props;return i.createElement(d.o9,null,i.createElement(gt,null,i.createElement(f.JO,{name:"checkmark-in-circle-filled",color:"success",size:"36px"}),i.createElement(f.xv,{color:"grey900",size:"20px",weight:600,lineHeight:"30px"},i.createElement(r.Z,{id:"modals.exchange.identityverification.submitted.appsubmitted",defaultMessage:"Application Submitted"})),i.createElement(f.xv,{color:"grey600",size:"16px",style:{marginBottom:"24px"}},i.createElement(r.Z,{id:"modals.exchange.identityverification.submitted.subheader2",defaultMessage:"You've successfully submitted your application. A Blockchain Support Member will review your information."})),i.createElement(ft,null,i.createElement(f.xv,{color:"grey900",size:"16px",weight:600,lineHeight:"30px"},i.createElement(r.Z,{id:"modals.exchange.identityverification.submitted.nextstepsheader",defaultMessage:"What happens next?"})),i.createElement(f.xv,{color:"grey600",size:"16px"},i.createElement(r.Z,{id:"modals.exchange.identityverification.submitted.view_status",defaultMessage:"You can view your application status by navigating to Settings and selecting Profile."})),i.createElement(f.xv,{color:"grey600",size:"16px"},i.createElement(r.Z,{id:"modals.exchange.identityverification.submitted.whileyouwait",defaultMessage:"While you wait, you can still trade and move currency up to your current limit."}))),i.createElement(A.l0,null,t&&i.createElement(f.JA,{height:"32px",width:"32px",color:"blue500"}),i.createElement(xt,{"data-e2e":"kycSubmittedDone",nature:"empty-secondary",disabled:t,onClick:e},i.createElement(r.Z,{id:"buttons.done",defaultMessage:"Done"})))))}}const yt=(0,a.connect)(null,(e=>({identityVerificationActions:(0,s.bindActionCreators)(m.Nw.wx.identityVerification,e)}))),Et=(0,s.compose)((0,S.Z)({form:ut}),yt)(ht);var bt=n("./src/components/SiftScience/index.tsx"),wt=n("../blockchain-wallet-v4/src/index.ts");const vt=g.ZP.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`,Zt=(0,g.ZP)(f.xv)`
  margin-top: 12px;
`,Ct=(0,g.ZP)(f.xv)`
  margin-top: 8px;
`,Verify_template_loading=()=>i.createElement(vt,null,i.createElement(f.T_,{width:"80px",height:"80px"}),i.createElement(Zt,{color:"grey800",weight:600,size:"20px"},i.createElement(r.Z,{id:"modals.kycverification.veriff.title",defaultMessage:"We’re Taking You to Veriff Now..."})),i.createElement(Ct,{color:"grey600",weight:600,size:"14px"},i.createElement(r.Z,{id:"modals.kycverification.veriff.desc",defaultMessage:"our.com’s end-to-end verification service."}))),Veriff_selectors_getData=e=>{const t=m.wl.wx.M4.getVeriffUrl(e),n=m.wl.vE.AW.getVeriffDomain(e);return(0,P.Z)(((e,t)=>({veriffDomain:t,veriffUrl:e})))(t,n)},_t=g.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 70px;
  width: 100%;

  ${Xe.BC.mobile`
    margin-top: 35px;
  `}
`,kt=(0,g.ZP)(f.xv)`
  margin: 32px 0 38px 0;
  width: 100%;
  line-height: 37px;
`,Pt=g.ZP.div`
  margin-bottom: 54px;
  max-width: 428px;
  width: 100%;
  line-height: 24px;

  > div:first-child {
    margin-bottom: 32px;
  }
`,Mt=(0,g.ZP)(f.zx)`
  margin: 42px 20px 0;
  max-width: 400px;
`,zt=(0,g.ZP)(f.xv)`
  margin-top: 42px;
`,template_failure=e=>i.createElement(_t,{"data-e2e":"veriffFailureContainer"},i.createElement(f.Ee,{name:"gold-notice",width:"70",height:"66"}),i.createElement(kt,{color:"black",size:"24px",weight:600},i.createElement(r.Z,{id:"identityverification.failure.header",defaultMessage:"Gold Unavailable At This Time"})),i.createElement(Pt,null,i.createElement(f.xv,{color:"grey800",size:"14px"},i.createElement(r.Z,{id:"identityverification.failure.content1",defaultMessage:"We're sorry but we can't verify you for Gold at this time. This can be for a number of reasons, for example your country might not be supported right now. If you're Silver verified you can still Buy, Sell or Swap a limited amount of crypto now."})),i.createElement(f.xv,{color:"grey800",size:"14px"},i.createElement(r.Z,{id:"identityverification.failure.content2",defaultMessage:"If you want to learn more about our verification process. Visit our"})," ",i.createElement(f.rU,{href:"/support/",size:"14px",target:"_blank",weight:500},i.createElement(r.Z,{id:"identityverification.failure.link",defaultMessage:"Support Center"})),"."),i.createElement(zt,{color:"red500",size:"14px",weight:500},i.createElement(r.Z,{id:"identityverification.failure.error",defaultMessage:"Server Error: {description}",values:e.message}))),i.createElement(Mt,{jumbo:!0,"data-e2e":"kycCloseModal",fullwidth:!0,nature:"primary",onClick:e.onClose},i.createElement(r.Z,{id:"buttons.continue",defaultMessage:"Continue"})));var St=n("../../node_modules/@veriff/incontext-sdk/dist/index.esm.js");const At=function Veriff_template_success_Success({handleVeriffMessage:e,url:t}){const[n,r]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{n||document.getElementById("veriffFrame")||((0,St.f)({onEvent:e,url:t}),r(!0))}),[n]),null};class Lt extends i.PureComponent{constructor(){super(...arguments),this.state={loading:!1},this.handleVeriffMessage=e=>{"FINISHED"===e&&(this.setState({loading:!0}),this.props.actions.syncVeriff()),"CANCELED"===e&&(this.props.onClose(),this.props.kycActions.resetVerificationStep())}}componentDidMount(){const{data:e}=this.props;wt.Nt.Success.is(e)||this.props.actions.fetchVeriffUrl()}componentWillUnmount(){this.setState({loading:!1})}render(){const{onClose:e}=this.props;return this.state.loading?i.createElement(Verify_template_loading,null):this.props.data.cata({Failure:t=>i.createElement(template_failure,{message:t,onClose:e}),Loading:()=>i.createElement(Verify_template_loading,null),NotAsked:()=>i.createElement(Verify_template_loading,null),Success:e=>i.createElement(At,{url:e.veriffUrl,handleVeriffMessage:this.handleVeriffMessage})})}}const Tt=(0,a.connect)((e=>({data:Veriff_selectors_getData(e)})),(e=>({actions:(0,s.bindActionCreators)(m.Nw.wx.veriff,e),kycActions:(0,s.bindActionCreators)(m.Nw.wx.identityVerification,e)})))(Lt);var jt=n("../../node_modules/ramda/es/anyPass.js"),Ot=n("../../node_modules/ramda/es/equals.js");const{EXPIRED:It,GENERAL:Nt}=m.o4.N5.DOC_RESUBMISSION_REASONS,{getEmail:Vt}=m.wl.vE.Xd,{getKycFlowConfig:Dt,getPreIdvData:Ft,getSupportedDocuments:Bt}=m.wl.wx.LE,Verify_selectors_getData=e=>{const t=Vt(e),n=Bt(e),i=Dt(e);return(0,P.Z)(((t,n,i)=>({deeplink:"https://blockchainwallet.page.link/dashboard",docTypes:n,email:t,flowConfig:i,needsDocResubmit:m.wl.qz.N5.getKycDocResubmissionStatus(e).map((0,jt.Z)([(0,Ot.Z)(Nt),(0,Ot.Z)(It)])).getOrElse(!1)})))(t,n,i)},getPreIdvData=e=>{const t=Ft(e),n=m.wl.vE.AW.getSiftKey(e).getOrElse("");return(0,P.Z)((e=>Object.assign(Object.assign({},e),{siftKey:n})))(t)};class Rt extends i.PureComponent{componentDidMount(){const{actions:e}=this.props;e.fetchSupportedDocuments(),e.checkKycFlow()}render(){const{actions:e,data:t,onClose:n,preIdvData:r}=this.props,a=t.cata({Failure:e=>i.createElement(c.Z,{message:e}),Loading:()=>i.createElement(Verify_template_loading,null),NotAsked:()=>null,Success:()=>i.createElement(Tt,{onClose:n})}),o=r.cata({Failure:()=>null,Loading:()=>null,NotAsked:()=>null,Success:t=>i.createElement(bt.Z,Object.assign({},t,{onDone:e.preIdvCheckFinished}))});return i.createElement(i.Fragment,null,a,o)}}const Jt=(0,a.connect)((e=>({data:Verify_selectors_getData(e),preIdvData:getPreIdvData(e)})),(e=>({actions:(0,s.bindActionCreators)(m.Nw.wx.identityVerification,e),modalActions:(0,s.bindActionCreators)(m.Nw.qk,e)})))(Rt),{STEPS:qt}=m.o4.wx.LE,$t={[qt.infoAndResidential]:i.createElement(r.Z,{id:"modals.identityverification.steps.info_and_residential",defaultMessage:"Info and residential"}),[qt.moreInfo]:i.createElement(r.Z,{id:"modals.identityverification.steps.more_info",defaultMessage:"Info"}),[qt.additionalInfo]:i.createElement(r.Z,{id:"modals.identityverification.steps.additional_info",defaultMessage:"Additional Info"}),[qt.verify]:i.createElement(r.Z,{id:"modals.identityverification.steps.verify",defaultMessage:"Verify"}),[qt.submitted]:i.createElement(r.Z,{id:"modals.identityverification.steps.submitted",defaultMessage:"Submitted"})};class Ut extends i.PureComponent{constructor(e){super(e),this.getSteps=e=>(0,o.Z)(((t,n)=>(0,l.Z)(n,e)),$t),this.handleClose=()=>{this.setState({show:!1}),setTimeout(this.props.close,d.x9)},this.initializeVerification=()=>{const{needMoreInfo:e,tier:t}=this.props;this.props.actions.initializeVerification(t,e)},this.getStepComponent=(e,t)=>t===qt.infoAndResidential?e?i.createElement(pe,{checkSddEligibility:this.props.checkSddEligibility,onClose:this.handleClose,onCompletionCallback:this.props.onCompletionCallback}):i.createElement($,{handleClose:this.handleClose}):t===qt.moreInfo?i.createElement(pt,null):t===qt.additionalInfo?i.createElement(_,{onClose:this.handleClose}):t===qt.verify?i.createElement(Jt,{onClose:this.handleClose}):t===qt.submitted?i.createElement(Et,{onClose:this.handleClose}):void 0,this.state={show:!1}}componentDidMount(){this.setState({show:!0}),this.initializeVerification()}render(){const{show:e}=this.state,{emailVerified:t,step:n,steps:r}=this.props;return r.cata({Failure:e=>i.createElement(d.ZP,Object.assign({},this.props,{onClose:this.handleClose,isOpen:this.state.show,"data-e2e":"identityVerificationModal"}),i.createElement(c.Z,{onClick:this.initializeVerification,message:e})),Loading:()=>i.createElement(d.ZP,Object.assign({},this.props,{onClose:this.handleClose,isOpen:this.state.show,"data-e2e":"identityVerificationModal"}),i.createElement(d.FK,null,i.createElement(template_loading,null))),NotAsked:()=>i.createElement(d.ZP,Object.assign({},this.props,{onClose:this.handleClose,isOpen:this.state.show,"data-e2e":"identityVerificationModal"}),i.createElement(template_loading,null)),Success:()=>i.createElement(d.ZP,Object.assign({},this.props,{isOpen:e,onClose:this.handleClose,"data-e2e":"identityVerificationModal"}),i.createElement(d.FK,null,this.getStepComponent(t,n)))})}}Ut.defaultProps={step:qt.infoAndResidential};const Wt=(0,s.compose)((0,u.Z)(p.tl.KYC_MODAL,{preventEscapeClose:!0}),(0,a.connect)(KycVerification_selectors_getData,(e=>({actions:(0,s.bindActionCreators)(m.Nw.wx.identityVerification,e)}))))(Ut)},"./src/modals/components/index.tsx":(e,t,n)=>{n.d(t,{Ue:()=>E,rD:()=>BankSearchIcon,mf:()=>k,Vd:()=>_,mZ:()=>BankWaitIndicator,zK:()=>s,lh:()=>y,Hr:()=>Hr,wq:()=>IneligibleErrorMessage,Oi:()=>u,dC:()=>LinkViaDesktop,gb:()=>Loading,H:()=>LoadingUpdating,EA:()=>ModalNavWithBackArrow,YX:()=>ModalNavWithCloseIcon,Zu:()=>c,ty:()=>M,NA:()=>ScanWithPhone,$0:()=>d,FP:()=>SimpleBankRow});var i=n("../../node_modules/react/index.js"),r=n("./node_modules/react-intl/lib/src/components/message.js"),a=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),o=n("../blockchain-info-components/src/index.js"),l=n("./src/components/Flyout/index.tsx");const s=(0,a.ZP)(l.o9)`
  padding: 37px 0 34px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`,c=(0,a.ZP)(o.xv)`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  padding-left: 40px;
`,d=a.ZP.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  align-items: center;
  padding: 20px;
`,m=a.ZP.div`
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
`,p=a.ZP.div`
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
`,u=a.ZP.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`,g=a.ZP.img`
  margin-bottom: 32px;
  max-height: 60px;
`,ScanWithPhone=({children:e,logo:t,qrCode:n})=>i.createElement(d,null,t&&i.createElement(g,{src:t}),i.createElement(o.xv,{weight:600,size:"20px",color:"grey900"},e),i.createElement(o.xv,{weight:500,size:"14px",color:"grey600"},i.createElement(r.Z,{id:"modals.brokerage.use_phone_camera",defaultMessage:"Use your phone’s camera to scan the QR code."})),i.createElement(m,null,n?i.createElement("img",{alt:"Use your phone’s camera to scan the QR code.",src:n}):i.createElement(o.nZ,{width:"30px",height:"30px"}))),BankWaitIndicator=({qrCode:e})=>{const[t,n]=(0,i.useState)(0);return e&&setTimeout((()=>{n(t+1)}),3e4),i.createElement(p,{className:e?"active":""},i.createElement(o.nZ,{width:"10px",height:"10px",borderWidth:"3px"}),i.createElement(o.xv,{size:"14px",weight:500},0===t&&i.createElement(r.Z,{id:"modals.brokerage.waiting_to_hear",defaultMessage:"Waiting to hear from your bank"}),t>0&&i.createElement(r.Z,{id:"modals.brokerage.this_can_take_a_while",defaultMessage:"This can take several minutes, hold tight!"})))},f=(0,a.ZP)(o.zx)`
  margin: 20px 0 0;
  display: unset;
`,LinkViaDesktop=({authUrl:e,children:t,onClick:n=(()=>{})})=>e?i.createElement(d,null,i.createElement(o.xv,{weight:600,size:"20px",color:"grey900"},t),i.createElement(f,{"data-e2e":"yapilyBankLink",nature:"empty-blue",onClick:()=>{window.open(e,"_blank"),n()}},i.createElement(r.Z,{id:"modals.brokerage.continue_in_browser",defaultMessage:"Continue in browser"}))):null,x=(0,a.ZP)(o.xv)`
  width: 300px;
`,h=a.ZP.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`,y="BROKERAGE_INELIGIBLE",IneligibleErrorMessage=()=>i.createElement(x,{size:"16px",weight:400},i.createElement(r.Z,{id:"modals.brokerage.ineligible_error",defaultMessage:"You are not eligible to make deposits and withdrawals with this currency."}));var E;!function(e){e.GETTING_READY="Getting Ready...",e.LOADING="Loading...",e.PROCESSING="Processing..."}(E||(E={}));const Loading=({text:e})=>i.createElement(h,null,i.createElement(o.nZ,null),i.createElement(o.xv,{weight:600,color:"grey600",style:{marginTop:"24px"}},e===E.LOADING&&i.createElement(r.Z,{id:"copy.loading",defaultMessage:"Loading..."}),e===E.GETTING_READY&&i.createElement(r.Z,{id:"loader.message.gettingready",defaultMessage:"Getting Ready..."}),e===E.PROCESSING&&i.createElement(r.Z,{id:"modals.simplebuy.processing",defaultMessage:"Processing…"}))),b=a.ZP.div`
  transform: translate(47px, 35px);
  border: 5px solid white;
  border-radius: 50%;
  background-color: white;
`,w=(0,a.ZP)(o.xv)`
  font-weight: 600;
  font-size: 20px;
  margin-top: 22px;
`,v=(0,a.ZP)(o.xv)`
  font-size: 14px;
  font-weight: 500;
  margin: 5px 30px;
`,LoadingUpdating=()=>i.createElement(h,null,i.createElement(b,null,i.createElement(o.nZ,{borderWidth:"7px",height:"32px",width:"32px"})),i.createElement(o.Ee,{name:"blockchain-logo-circle",width:"106px"}),i.createElement(w,{color:"grey900"},i.createElement(r.Z,{defaultMessage:"Updating Your Wallet...",id:"modals.brokerage.updating_your_wallet"})),i.createElement(v,{color:"grey600"},i.createElement(r.Z,{defaultMessage:"This could take up to 30 seconds. Please do not go back or close the app.",id:"modals.brokerage.this_could_take"}))),Z=a.ZP.div`
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

  ${e=>e.onClick&&a.iv`
      cursor: pointer;
      * {
        cursor: pointer;
      }
      &:hover {
        background-color: ${e=>e.theme.blue000};
      }
    `}
`,C=a.ZP.div`
  height: 30px;
  width: 30px;
  background: url('${e=>e.url}') 0 0 no-repeat;
  background-size: 30px;
  background-position: center;
`,_=a.ZP.div`
  position: relative;
`,k=a.ZP.input`
  border: 1px solid ${e=>e.theme.grey000};
  font-size: 16px;
  width: 100%;
  border-width: 1px 0;
  padding: 20px 0 20px 40px;

  &:active,
  &:focus {
    outline: none;
  }
`,BankSearchIcon=()=>i.createElement(o.JO,{size:"20px",color:"grey600",name:"magnifier",style:{position:"absolute",right:"60px",top:"20px"}}),SimpleBankRow=e=>i.createElement(Z,{onClick:e.onClick},i.createElement("div",null,i.createElement(C,{url:e.institution.media[0].source}),i.createElement(o.xv,{color:"grey900",style:{marginLeft:"20px"},weight:600},e.institution.name)),i.createElement(o.JO,{cursor:!0,name:"chevron-right",size:"20px",color:"grey600",role:"button",style:{marginRight:"24px"}})),ModalNavWithBackArrow=e=>i.createElement(c,{color:"grey800",size:"20px",weight:600},i.createElement(o.JO,{cursor:!0,name:"arrow-back",size:"20px",color:"grey600",role:"button",style:{marginRight:"24px"},onClick:()=>e.handleClose()}),e.children),ModalNavWithCloseIcon=e=>i.createElement(c,{color:"grey800",size:"20px",weight:600,style:{justifyContent:"space-between"}},e.children,i.createElement(o.JO,{cursor:!0,name:"close",size:"20px",color:"grey600",role:"button",style:{marginRight:"24px"},onClick:()=>e.handleClose()})),P=a.ZP.hr`
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
`,Hr=()=>i.createElement("div",{style:{width:"100%"}},i.createElement(o.xv,{weight:600,size:"16px",color:"grey900"},i.createElement(P,null))),M=((0,a.ZP)(o.xv)`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.spaceBetween?"space-between":"initial"};
  margin-bottom: ${e=>e.marginBottom?"16px":"0px"};
`,({amount:e,currency:t})=>i.createElement(r.Z,{id:"modals.send.over_your_limit",defaultMessage:"Over your limit! Send up to {currency}{amount}.",values:{amount:e,currency:t}}))}}]);