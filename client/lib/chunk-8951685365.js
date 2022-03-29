"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[8147],{"./src/modals/Settings/RecoveryPhrase/index.tsx":(e,t,r)=>{r.r(t),r.d(t,{default:()=>re});var s=r("../../node_modules/react/index.js"),o=r("../../node_modules/react-redux/es/index.js"),n=r("../../node_modules/ramda/es/path.js"),a=r("../../node_modules/redux/es/redux.js"),l=r("./src/components/Flyout/index.tsx"),i=r("./src/data/index.ts"),c=r("./src/data/types.ts"),d=r("./src/providers/ModalEnhancer/index.tsx"),p=r("./node_modules/react-intl/lib/src/components/message.js"),m=r("../../node_modules/ramda/es/forEach.js"),h=r("../../node_modules/ramda/es/split.js"),u=r("../../node_modules/ramda/es/keysIn.js"),y=r("../../node_modules/ramda/es/sortBy.js"),x=r("../../node_modules/ramda/es/prop.js"),g=r("../../node_modules/ramda/es/map.js"),E=r("../../node_modules/ramda/es/take.js"),f=r("../../node_modules/ramda/es/range.js"),w=r("../../node_modules/redux-form/es/SubmissionError.js"),v=r("../../node_modules/redux-form/es/Field.js"),S=r("../../node_modules/redux-form/es/reduxForm.js"),b=r("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),P=r("../blockchain-info-components/src/index.js"),_=r("./src/components/Form/index.ts"),O=r("./src/services/forms/index.js"),__rest=function(e,t){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(r[s[o]]=e[s[o]])}return r};const k=(0,b.ZP)(_.l0)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`,Z=(0,b.ZP)(l.o9)`
  padding-bottom: 32px;
`,R=b.ZP.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`,C=b.ZP.div`
  border: solid 0.5px ${e=>e.theme.grey000};
`,j=(0,b.ZP)(l.o9)`
  padding-top: 24px;
`,z=b.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 80px;
  width: 100%;
  margin-bottom: 15px;
`,A=(0,b.ZP)(l.o9)`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`,M=(0,S.Z)({form:"confirmRecoveryWords"})((e=>{const{handleBackArrow:t,indexes:r,invalid:o,submitting:n}=e,a=__rest(e,["handleBackArrow","indexes","invalid","submitting"]),{handleSubmit:l}=a;return s.createElement(k,{onSubmit:l},s.createElement(Z,null,s.createElement(R,null,s.createElement(P.JO,{cursor:!0,"data-e2e":"recoveryBackArrow",name:"arrow-left",size:"20px",color:"grey600",style:{marginRight:"24px"},role:"button",onClick:t}),s.createElement(P.xv,{color:"grey800",size:"20px",weight:600},s.createElement(p.Z,{id:"modals.recoveryphrase.confirmwords.header",defaultMessage:"Confirm Your Phrase"}))),s.createElement(P.xv,{color:"grey600",weight:500},s.createElement(p.Z,{id:"modals.recoveryphrase.confirmwords.body",defaultMessage:"Please enter the words that match the numbers you see below."}))),s.createElement(C,null),s.createElement(j,null,r.map((e=>s.createElement(z,{key:e},s.createElement(P.xv,{size:"14px",weight:500,"data-e2e":"wordLabel",lineHeight:"20px"},`${(e=>{switch(e){case 0:return`${e+1}st`;case 1:return`${e+1}nd`;case 2:return`${e+1}rd`;default:return`${e+1}th`}})(e)} word`),s.createElement(v.Z,{component:_.zC,"data-e2e":"wordInput",disableSpellcheck:!0,errorBottom:!0,name:`w${e}`,noLastPass:!0,validate:[O.C1]}))))),s.createElement(A,null,s.createElement(P.zx,{capitalize:!0,"data-e2e":"confirmButton",disabled:n||o,fullwidth:!0,height:"48px",nature:"primary",size:"16px",type:"submit"},s.createElement(p.Z,{id:"modals.recoveryphrase.confirmwords.button",defaultMessage:"Confirm"}))))}));var ConfirmWords_rest=function(e,t){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(r[s[o]]=e[s[o]])}return r};class B extends s.PureComponent{constructor(e){super(e),this.handleSubmit=e=>{const t={};if((0,a.compose)((0,m.Z)((r=>{e[r]!==this.props.recoveryPhrase[(0,h.Z)("w",r)[1]]&&(t[r]=s.createElement(p.Z,{id:"modals.recoveryphrase.confirmwords.incorrect",defaultMessage:"Incorrect Word"}))})),u.Z)(e),(0,u.Z)(t).length)throw new w.t(t);this.props.walletActions.verifyMnemonic(),this.props.walletActions.updateMnemonicBackup(),this.props.recoveryPhraseActions.setStep("CONFIRM_WORDS_SUCCESS")},this.state={indexes:[]}}componentDidMount(){const e=(0,y.Z)((0,x.Z)(0)),t=(0,g.Z)((e=>[Math.random(),e])),r=(0,a.compose)((0,E.Z)(5),(0,g.Z)((0,x.Z)(1)),e,t)((0,f.Z)(0,12));this.setState({indexes:r})}render(){const e=ConfirmWords_rest(this.props,[]);return s.createElement(M,Object.assign({},e,{indexes:this.state.indexes,onSubmit:this.handleSubmit}))}}const W=B,T=b.ZP.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,D=b.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 40px;
`,N=(0,b.ZP)(l.o9)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70%;
`,RecoveryPhrase_ConfirmWordsSuccess=e=>s.createElement(T,null,s.createElement(D,null,s.createElement(P.JO,{cursor:!0,name:"close",size:"20px",color:"grey600",role:"button",onClick:()=>e.handleClose()})),s.createElement(N,null,s.createElement(P.JO,{name:"checkmark-circle-filled",color:"green400",size:"72px",style:{marginBottom:"25px"}}),s.createElement(P.xv,{color:"grey800",size:"20px",weight:600,style:{lineHeight:1.7}},s.createElement(p.Z,{id:"modals.recoveryphrase.success",defaultMessage:"Success!"})),s.createElement(P.xv,{size:"14px",color:"grey500",weight:500,style:{lineHeight:1.7}},s.createElement(p.Z,{id:"modals.recoveryphrase.success.body",defaultMessage:"Your Wallet is now backed up."})),s.createElement(P.zx,{capitalize:!0,"data-e2e":"continueToSend",fullwidth:!0,height:"48px",nature:"primary",size:"16px",onClick:e.handleClose,style:{marginTop:"40px"}},s.createElement(p.Z,{id:"modals.recoveryphrase.success.close",defaultMessage:"Close"})))),F=b.ZP.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`,I=b.ZP.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`,K=(0,b.ZP)(l.o9)`
  padding-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 5px;
  & > :first-child {
    margin-bottom: 15px;
  }
`,H=b.ZP.div`
  display: flex;
  margin-top: 48px;
`,$=b.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${e=>e.size};
  height: ${e=>e.size};
  border-radius: ${e=>e.size};
  background: ${e=>e.theme[e.color]};
`;class V extends s.PureComponent{constructor(){super(...arguments),this.handleBackupNow=()=>{this.props.recoveryPhraseActions.setStep("FIRST_SET_WORDS"),this.props.walletActions.triggerMnemonicViewedAlert()}}render(){return s.createElement(F,null,s.createElement(l.o9,null,s.createElement(I,null,s.createElement(P.xv,{color:"grey900",size:"24px",weight:600},s.createElement(p.Z,{id:"scenes.securitysettings.basicsecurity.seceretphrase.title",defaultMessage:"Secret Private Key Recovery Phrase"}))),s.createElement(P.xv,{color:"grey600",size:"14px",weight:500},s.createElement(p.Z,{id:"modals.recoveryphrase.backupyourwallet.content.subheader",defaultMessage:"In crypto, when you hold the private keys, you're in control of the funds in your Private Key Wallet. The downside is that WHOEVER holds your private keys can control your Private Key Wallet."})),s.createElement(P.xv,{color:"grey600",size:"14px",weight:500,style:{marginTop:"25px"},lineHeight:"1.5"},s.createElement(p.Z,{id:"modals.recoveryphrase.backupyourwallet.content.youmust",defaultMessage:"So you must:"})),s.createElement(P.xv,{color:"grey600",size:"14px",weight:500,lineHeight:"1.5"},s.createElement(p.Z,{id:"modals.recoveryphrase.backupyourwallet.content.one",defaultMessage:"1. Write down the 12 word phrase on the next screen in the exact order it appears."})),s.createElement(P.xv,{color:"grey600",size:"14px",weight:500,lineHeight:"1.5"},s.createElement(p.Z,{id:"modals.recoveryphrase.backupyourwallet.content.two",defaultMessage:"2. Keep it safe, ideally on a securely stored piece of paper (in other words, not a digital copy)."})),s.createElement(P.xv,{color:"grey600",size:"14px",weight:500,lineHeight:"1.5"},s.createElement(p.Z,{id:"modals.recoveryphrase.backupyourwallet.content.three_update",defaultMessage:"3. NEVER share your Secret Private Key Recovery Phrase with anyone."})),s.createElement(P.xv,{color:"grey900",size:"14px",weight:600,style:{marginTop:"25px"},lineHeight:"1.5"},s.createElement(p.Z,{id:"modals.recoveryphrase.backupyourwallet.content.warning",defaultMessage:"Warning: If someone has your Secret Private Key Recovery Phrase they will have access to your Private Key Wallet and can withdraw funds."})),s.createElement(H,null,s.createElement($,{color:"red100",size:"40px"},s.createElement($,{color:"red400",size:"20px"},s.createElement(P.xv,{color:"white",size:"14px",weight:600},"!"))),s.createElement(P.xv,{color:"error",weight:600,style:{marginLeft:"20px"}},s.createElement(p.Z,{id:"modals.recoveryphrase.backupyourwallet.content.warningtwo_new",defaultMessage:"our.com will never ask to view or receive your Secret Private Key Recovery Phrase."})))),s.createElement(K,null,s.createElement(P.zx,{capitalize:!0,"data-e2e":"toBackupFlyout",fullwidth:!0,height:"48px",nature:"primary",onClick:this.handleBackupNow,size:"16px"},s.createElement(p.Z,{id:"modals.recoveryphrase.backupyourwallet.viewsecretphrase",defaultMessage:"View Secret Private Key Recovery Phrase"})),s.createElement(P.zx,{capitalize:!0,"data-e2e":"skipBackup",fullwidth:!0,height:"48px",nature:"light",onClick:this.props.handleClose,size:"16px"},s.createElement(p.Z,{id:"modals.recoveryphrase.backupyourwallet.later",defaultMessage:"Do This Later"}))))}}const Y=V,L=b.ZP.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,U=b.ZP.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`,J=b.ZP.div`
  padding: 16px;
  border-top: 1px solid ${e=>e.theme.grey000};
  display: flex;
  align-items: center;
`,q=b.ZP.div`
  padding-left: 20px;
`,X=(0,b.ZP)(l.o9)`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  height: 100%;
`,ShowRecoveryWords_template=({handleBackArrow:e,handleNextButton:t,step:r,words:o})=>s.createElement(L,null,s.createElement(l.o9,null,s.createElement(U,null,s.createElement(P.JO,{cursor:!0,name:"arrow-left",size:"20px",color:"grey600",style:{marginRight:"24px"},role:"button",onClick:e,"data-e2e":"recoveryBackArrow"}),s.createElement(P.xv,{color:"grey800",size:"20px",weight:600},s.createElement(p.Z,{id:"modals.recoveryphrase.firstsetwords.header_new",defaultMessage:"Secret Private Key Recovery Phrase"}))),s.createElement(P.xv,{color:"grey600",weight:500},s.createElement(p.Z,{id:"modals.recoveryphrase.firstsetwords.body_new",defaultMessage:"Carefully write down these 12 words in order. Do not email or screenshot your Secret Private Key Recovery Phrase."}))),"FIRST_SET_WORDS"===r&&o.map(((e,t)=>{if(t<6)return s.createElement(J,null,s.createElement(q,{"data-e2e":"backupWords"},s.createElement(l.Dx,null,t+1),s.createElement(l.B4,null,e)))})),"SECOND_SET_WORDS"===r&&o.map(((e,t)=>{if(t>=6)return s.createElement(J,null,s.createElement(q,{"data-e2e":"backupWords"},s.createElement(l.Dx,null,t+1),s.createElement(l.B4,null,e)))})),s.createElement(X,null,s.createElement(P.zx,{capitalize:!0,"data-e2e":"toRecoveryTwo",fullwidth:!0,height:"48px",nature:"primary",size:"16px",onClick:t},s.createElement(p.Z,{id:"modals.recoveryphrase.firstsetwords.nextbutton",defaultMessage:"Next"}))));class G extends s.PureComponent{constructor(){super(...arguments),this.handleNextButton=()=>{"FIRST_SET_WORDS"===this.props.step?this.props.recoveryPhraseActions.setStep("SECOND_SET_WORDS"):this.props.recoveryPhraseActions.setStep("CONFIRM_WORDS")}}render(){const{handleBackArrow:e,recoveryPhrase:t,step:r}=this.props;return s.createElement(ShowRecoveryWords_template,{handleBackArrow:e,handleNextButton:this.handleNextButton,words:t,step:r})}}const Q=G;class ee extends s.PureComponent{constructor(e){super(e),this.getWords=()=>{this.props.settingsActions.showBackupRecovery()},this.handleClose=()=>{this.setState({show:!1}),setTimeout((()=>{this.props.close()}),l.x9)},this.handleBackArrow=()=>{"FIRST_SET_WORDS"===this.props.step?this.props.recoveryPhraseActions.setStep("RECOVERY_PHRASE_INTRO"):"SECOND_SET_WORDS"===this.props.step?this.props.recoveryPhraseActions.setStep("FIRST_SET_WORDS"):this.props.recoveryPhraseActions.setStep("SECOND_SET_WORDS")},this.state={show:!1}}componentDidMount(){this.setState({show:!0}),this.getWords()}componentWillUnmount(){this.props.recoveryPhraseActions.setStep("RECOVERY_PHRASE_INTRO")}render(){return s.createElement(l.ZP,Object.assign({},this.props,{isOpen:this.state.show,onClose:this.handleClose,"data-e2e":"recoveryPhraseModal"}),"RECOVERY_PHRASE_INTRO"===this.props.step&&s.createElement(l.FK,null,s.createElement(Y,Object.assign({},this.props,{handleClose:this.handleClose}))),"FIRST_SET_WORDS"===this.props.step&&s.createElement(l.FK,null,s.createElement(Q,Object.assign({},this.props,{handleBackArrow:this.handleBackArrow}))),"SECOND_SET_WORDS"===this.props.step&&s.createElement(l.FK,null,s.createElement(Q,Object.assign({},this.props,{handleBackArrow:this.handleBackArrow}))),"CONFIRM_WORDS"===this.props.step&&s.createElement(l.FK,null,s.createElement(W,Object.assign({},this.props,{handleBackArrow:this.handleBackArrow}))),"CONFIRM_WORDS_SUCCESS"===this.props.step&&s.createElement(l.FK,null,s.createElement(RecoveryPhrase_ConfirmWordsSuccess,Object.assign({},this.props,{handleClose:this.handleClose}))))}}const te=(0,o.connect)((e=>({isMnemonicVerified:i.wl.vE.gU.isMnemonicVerified(e),recoveryPhrase:(0,n.Z)(["securityCenter","recovery_phrase"],e),step:i.wl.wx.lk.getStep(e)})),(e=>({recoveryPhraseActions:(0,a.bindActionCreators)(i.Nw.wx.recoveryPhrase,e),settingsActions:(0,a.bindActionCreators)(i.Nw.qz.Xd,e),walletActions:(0,a.bindActionCreators)(i.Nw.vE.gU,e)}))),re=(0,a.compose)((0,d.Z)(c.tl.RECOVERY_PHRASE_MODAL,{transition:l.x9}),te)(ee)}}]);