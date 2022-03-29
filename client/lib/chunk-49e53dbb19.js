"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[6172],{"./src/components/Terms/index.tsx":(e,t,r)=>{r.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var n=r("../../node_modules/react/index.js"),a=r("./node_modules/react-intl/lib/src/components/message.js"),l=r("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),i=r("../blockchain-info-components/src/index.js");const s=l.ZP.div`
  & > * {
    display: inline-block;
  }
  ${e=>e.isCentered&&"\n    text-align: center;\n  "};
`,__WEBPACK_DEFAULT_EXPORT__=e=>{const{company:t,isCentered:r=null,recovery:l}=e;return"blockchain-kyc"===t?n.createElement(s,{isCentered:r},n.createElement(i.xv,{size:"12px",weight:400},n.createElement(a.Z,{id:"scenes.register.registerform.blockchainkyc.read",defaultMessage:"By hitting continue, I agree to Blockchain’s"})," "),n.createElement(i.rU,{href:"/root/legal/terms",target:"_blank",size:"12px",weight:500},n.createElement(a.Z,{id:"scenes.register.registerform.blockchain.terms",defaultMessage:"Terms of Service"})," "),"&  ",n.createElement(i.rU,{href:"/root/legal/privacy",target:"_blank",size:"12px",weight:500},n.createElement(a.Z,{id:"scenes.register.registerform.blockchain.privacypolicy",defaultMessage:"Privacy Policy."}))):n.createElement(s,{style:{paddingLeft:l?0:"4px"},isCentered:r},l?n.createElement(i.xv,{color:"grey800",size:"12px",weight:500,style:{margin:"4px 0"}},n.createElement(a.Z,{id:"scenes.register.registerform.blockchain.read-recovery",defaultMessage:"By recovering an account, you agree to Blockchain’s"})):n.createElement(i.xv,{color:"grey800",size:"12px",weight:500},n.createElement(a.Z,{id:"scenes.register.registerform.blockchain.read_1",defaultMessage:"By creating an account, you agree to Blockchain’s"})),n.createElement("span",null," "),n.createElement(i.rU,{href:"/root/legal/terms",target:"_blank",size:"12px",weight:500,"data-e2e":"blockchainTermsLink"},n.createElement(a.Z,{id:"scenes.register.registerform.blockchain.default.terms",defaultMessage:"Terms of Service"}))," ",n.createElement(i.xv,{color:"grey800",size:"12px",weight:500},"&")," ",n.createElement(i.rU,{href:"/root/legal/privacy",target:"_blank",size:"12px",weight:500,"data-e2e":"blockchainPrivacyLink"},n.createElement(a.Z,{id:"copy.privacy_policy",defaultMessage:"Privacy Policy"})),".")}},"./src/scenes/Signup/index.tsx":(e,t,r)=>{r.r(t),r.d(t,{default:()=>he});var n=r("../../node_modules/react/index.js"),a=r("../../node_modules/react-redux/es/index.js"),l=r("../../node_modules/ramda/es/pathOr.js"),i=r("../../node_modules/ramda/es/find.js"),s=r("../../node_modules/ramda/es/propEq.js"),o=r("../../node_modules/redux/es/redux.js"),c=r("../../node_modules/redux-form/es/reduxForm.js"),m=r("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),d=r("../blockchain-wallet-v4/src/index.ts"),g=r("./src/data/index.ts"),u=r("./node_modules/react-intl/lib/src/components/message.js"),h=r("../../node_modules/react-router-bootstrap/lib/index.js"),p=r("../../node_modules/ramda/es/propOr.js"),w=r("../../node_modules/ramda/es/isNil.js"),E=r("../../node_modules/ramda/es/isEmpty.js"),x=r("../blockchain-wallet-v4/src/exchange/currencies/index.ts"),b=r("../blockchain-info-components/src/index.js"),f=r("./src/services/styles/index.ts");const y=m.ZP.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 29rem;

  &:first-child {
    margin-right: ${e=>e.hideMargin?"0":"2.5rem"};
  }

  ${f.BC.tabletL`
    &:first-child {
      margin-right: 0;
    }
  `}

  ${f.BC.tablet`
    width: 100%;
  `}
`,v=m.ZP.div`
  padding: 2rem;
  background: ${e=>e.theme.white};
  border-radius: 0.75rem;
  box-sizing: border-box;

  ${f.BC.tablet`
    width: 100%;
    padding: 1.5rem;
  `}
`,Z=m.ZP.div`
  align-items: center;
  display: flex;
`,k=m.ZP.div`
  display: flex;
  background: ${e=>e.theme[e.color]};
  height: 3rem;
  width: 3rem;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 1.25rem;

  ${f.BC.tablet`
    height: 2.5rem;
    width: 2.5rem;
    flex-shrink: 0;
  `}
`,C=m.ZP.div`
  display: flex;

  ${f.BC.tabletL`
    flex-direction: column;
    justify-content: center;
  `}

  ${f.BC.tablet`
    width: 100%;
  `}
`,P=m.ZP.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`,M=(0,m.ZP)(b.xv)`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`,z=m.ZP.div`
  display: flex;
  margin-bottom: 0.75rem;
  justify-content: flex-start;
  flex-wrap: wrap;

  > div:first-child {
    margin-right: 8px;

    ${f.BC.tablet`
      margin-bottom: 4px;
    `}
  }
`,S=m.ZP.div`
  display: flex;
  justify-content: center;
  margin-top: 1.25rem;
  margin-bottom: 2.5rem;
`,F=(0,m.ZP)(b.xv)`
  &:hover {
    color: ${e=>e.theme.white};
    font-weight: 600;
  }
`;var _=r("../../node_modules/redux-form/es/Field.js"),j=r("./src/components/Form/index.ts"),B=r("./src/components/Terms/index.tsx"),$=r("./src/services/browser/index.tsx"),A=r("./src/services/forms/index.js");const L=(0,$.T)(),O=(0,m.ZP)(j.l0)`
  margin-top: 20px;

  > div * {
    max-height: 26rem;
    transition: all 0.5s ease;
  }
`,T=m.ZP.div`
  margin-bottom: 10px;
`,J=(0,m.ZP)(b.xv)`
  margin-top: 4px;
`,U=m.ZP.div`
  margin-top: 0.25rem;
  margin-right: 0 !important;
`,D=(0,m.ZP)(j.xJ)`
  .bc__control {
    border-radius: ${e=>e.setBorder?"8px 8px 0 0 ":"8px"};
  }

  .bc__menu {
    overflow: hidden;
  }
`,I=(0,m.ZP)(j.xJ)`
  .bc__control {
    border-radius: ${e=>e.setBorder?"0 0 8px 8px":"8px"};
  }
  .bc__menu {
    overflow: hidden;
  }
`,W=(0,A.yT)("password"),components_SignupForm=e=>{const{formValues:t,invalid:r,isFormSubmitting:a,onCountrySelect:l,onSignupSubmit:i,showState:s,signupCountryEnabled:o,userGeoData:c}=e,{password:m=""}=t||{},d=window.zxcvbn?window.zxcvbn(m).score:0;return(0,n.useEffect)((()=>{(null==c?void 0:c.countryCode)&&o&&e.setDefaultCountry(c.countryCode)}),[]),n.createElement(O,{override:!0,onSubmit:i},!L&&n.createElement(T,null,n.createElement(b.jL,{type:"warning"},n.createElement(u.Z,{defaultMessage:"Your browser is not supported. Please update to at least Chrome 45, Firefox 45, Safari 8, IE 11, or Opera ",id:"scenes.register.browserwarning"}))),n.createElement(j.cw,null,n.createElement(j.xJ,null,n.createElement(j.lX,{htmlFor:"email"},n.createElement(u.Z,{id:"scenes.register.youremail",defaultMessage:"Your Email"})),n.createElement(_.Z,{autoFocus:!0,bgColor:"grey000",component:j.zC,"data-e2e":"signupEmail",disabled:!L,name:"email",validate:[A.C1,A.u$]}))),n.createElement(j.cw,null,n.createElement(j.xJ,null,n.createElement(j.lX,{htmlFor:"password",id:"password"},n.createElement(u.Z,{defaultMessage:"Password",id:"scenes.register.password"})),n.createElement(_.Z,{bgColor:"grey000",component:j.MY,"data-e2e":"signupPassword",disabled:!L,name:"password",passwordScore:d,showPasswordScore:!0,validate:[A.C1,A.ST]})),m.length>0&&n.createElement("div",null,n.createElement(J,{size:"12px",weight:400},d<=1&&n.createElement(u.Z,{id:"formhelper.passwordsuggest.weak",defaultMessage:"Weak. Use at least 8 characters, a mix of letters, numbers and symbols."}),d>=2&&d<4&&n.createElement(u.Z,{id:"formhelper.passwordsuggest.medium",defaultMessage:"Medium. Use at least 8 characters, a mix of letters, numbers and symbols."}),4===d&&n.createElement(u.Z,{id:"formhelper.passwordsuggest.great",defaultMessage:"Great password."})))),n.createElement(j.cw,null,n.createElement(j.xJ,null,n.createElement(j.lX,{htmlFor:"confirmationPassword",id:"confirmationPassword"},n.createElement(u.Z,{defaultMessage:"Confirm Password",id:"scenes.register.confirmpassword"})),n.createElement(_.Z,{bgColor:"grey000",component:j.MY,"data-e2e":"signupConfirmPassword",disabled:!L,name:"confirmationPassword",validate:[A.C1,W]}))),o&&n.createElement(j.cw,null,n.createElement(D,{setBorder:s},n.createElement(j.lX,{htmlFor:"country",id:"country"},n.createElement(u.Z,{defaultMessage:"Country of Residence",id:"scenes.register.countryofresidence"})),n.createElement(_.Z,{"data-e2e":"selectCountryDropdown",name:"country",validate:A.C1,component:j.hT,menuPlacement:"auto",onChange:l,label:n.createElement(u.Z,{id:"scenes.register.select_a_country",defaultMessage:"Select a Country"})})),s?n.createElement(I,{setBorder:s},n.createElement(_.Z,{name:"state",component:j.T3,errorBottom:!0,validate:[A.C1],normalize:e=>e&&e.code,label:n.createElement(u.Z,{id:"components.selectboxstate.label",defaultMessage:"Select state"})})):null),n.createElement(j.cw,{inline:!0},n.createElement(U,null,n.createElement(_.Z,{name:"secretPhase",validate:[A.C1],component:j.Jg,hideErrors:!0})),n.createElement(j.lX,null,n.createElement(b.Qt,{inline:!0},n.createElement(b.xv,{color:"grey800",size:"12px",weight:500},n.createElement(u.Z,{id:"scenes.register.backupphrase1",defaultMessage:"I understand that our.com never stores passwords and therefore cannot recover or reset my password. If I lose access to my wallet, I must use my"})),n.createElement(b.rU,{href:"/support/hc/en-us/articles/209564506-Make-a-Wallet-Backup",target:"_blank",size:"12px",weight:500,"data-e2e":"blockchainTermsLink"},n.createElement(u.Z,{id:"scenes.securitysettings.basicsecurity.secretrecoveryphrase.title",defaultMessage:"Secret Private Key Recovery Phrase"})),n.createElement(b.xv,{color:"grey800",size:"12px",weight:500},n.createElement(u.Z,{id:"scenes.register.backupphrase2",defaultMessage:"to access my funds."}))))),n.createElement(j.cw,null,n.createElement(j.xJ,null,n.createElement(B.Z,{style:{textAlign:"center",width:"397px"},isCentered:!0}))),n.createElement(b.zx,{"data-e2e":"signupButton",disabled:a||r,fullwidth:!0,height:"48px",nature:"primary",type:"submit"},a?n.createElement(b.JA,{height:"20px",width:"20px",color:"white"}):n.createElement(b.xv,{color:"whiteFade900",size:"16px",weight:600},n.createElement(u.Z,{id:"scenes.public.register.createWallet",defaultMessage:"Create Wallet"}))))},G=(0,m.ZP)(v)`
  max-width: 27rem;
`,V=m.ZP.div`
  display: flex;
  margin-bottom: 16px;
  width: 100%;
`,N=m.ZP.div`
  display: flex;
  min-width: 0;
`,H=m.ZP.div`
  display: flex;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  border: 1px solid ${e=>e.theme.grey100};
  padding: 12px;
  margin-right: 16px;
  margin-top: 32px;
  min-width: 0;
`,Y=(0,m.ZP)(H)`
  flex: 3;
  justify-content: initial;
  margin-right: 0;
  min-width: initial;

  > * {
    margin-right: 8px;
  }
`,R=(0,m.ZP)(b.xv)`
  padding-left: 4px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`,Signup_BuyGoal=e=>{const{goals:t}=e,r=(0,i.Z)((0,s.Z)("name","simpleBuy"),t),a=(0,p.Z)({},"data",r),{amount:l,crypto:o,fiatCurrency:c}=a,m=!((0,w.Z)(a)||(0,E.Z)(a)||!c||!o||!l);return n.createElement(n.Fragment,null,n.createElement(C,null,n.createElement(G,null,n.createElement(Z,null,n.createElement(b.xv,{size:"24px",color:"textBlack",weight:600},n.createElement(u.Z,{defaultMessage:"Sign Up to Continue Your Crypto Purchase.",id:"scenes.register.simplebuy.signup"}))),m&&n.createElement(n.Fragment,null,n.createElement(V,null,n.createElement(H,null,n.createElement(N,null,n.createElement(b.xv,{size:"16px",color:"grey400",weight:500},x.Z[c].units[c].symbol),n.createElement(R,{size:"16px",color:"black",weight:500},l))),n.createElement(Y,null,n.createElement(b.JO,{color:o,name:o,size:"24px",weight:400}),n.createElement(b.xv,{capitalize:!0,color:"black",size:"16px",weight:500},window.coins[o].coinfig.name),n.createElement(b.xv,{color:"grey400",size:"16px",uppercase:!0,weight:500},o))),n.createElement(b.xv,{size:"14px",color:"grey600",weight:500},n.createElement(u.Z,{id:"scenes.register.simplebuy.change",defaultMessage:"You will be able to change your amount later."}))),n.createElement(components_SignupForm,Object.assign({},e)))),n.createElement(h.Ji,{to:"/login"},n.createElement(b.rU,null,n.createElement(S,null,n.createElement(b.xv,{size:"14px",color:"whiteFade600",weight:500},n.createElement(u.Z,{id:"scenes.register.wallet.link",defaultMessage:"Already have a wallet?"}))," ",n.createElement(F,{color:"whiteFade900",size:"14px",weight:500},n.createElement(u.Z,{id:"scenes.register.wallet.signin",defaultMessage:"Sign In"}))))))},X=m.ZP.div`
  height: 1px;
  width: 12.5rem;
  margin: ${e=>e.showForm?"1.5rem auto 0":"0"};
  background-color: ${e=>e.theme.grey000};
  visibility: ${e=>e.showForm?"visible":"hidden"};
  transition: all 0.5s ease;
`,Q=m.ZP.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  max-height: ${e=>e.showForm?"5.25rem":"0"};
  visibility: ${e=>e.showForm?"visible":"hidden"};
  transition: all 0.5s ease;
  ${f.BC.mobile`
    img {
      height: auto;
      width: 40%;
    }
  `};
`,q=m.ZP.div`
  margin: 2rem 0 0;
  > a {
    margin: 0 8px;
  }
`,K=m.ZP.div`
  height: 1rem;
`,components_SignupCard=e=>{const{isFormSubmitting:t,isLinkAccountGoal:r,onSignupSubmit:a,showForm:l,toggleSignupFormVisibility:i}=e,s=l?a:i,o=l||r;return n.createElement(y,{hideMargin:o},n.createElement(v,null,n.createElement(Z,null,n.createElement(k,{color:"blue600"},n.createElement(b.JO,{color:"white",name:"wallet-filled",size:"28px"})),n.createElement(b.xv,{size:"24px",color:"textBlack",weight:600},r?n.createElement(u.Z,{id:"scenes.register.walletcard.linktitle",defaultMessage:"Create a New Wallet"}):n.createElement(u.Z,{id:"scenes.register.walletcard.title",defaultMessage:"Blockchain Wallet"}))),r?n.createElement(K,null):!o&&n.createElement(P,null,n.createElement(M,{color:"grey800",size:"18px",weight:600},n.createElement(u.Z,{id:"scenes.register.walletcard.infotitleuppercase",defaultMessage:"Be Your Own Bank"})),n.createElement(z,null,n.createElement(b.Qt,{inline:!0},n.createElement(b.xv,{color:"grey800",size:"16px",weight:600},n.createElement(u.Z,{id:"scenes.register.walletcard.item.1.bold",defaultMessage:"Easily buy and sell"})),n.createElement(b.xv,{color:"grey600",size:"16px",weight:500},n.createElement(u.Z,{id:"scenes.register.walletcard.item.1.regular1",defaultMessage:"Bitcoin, Ether and more."})))),n.createElement(z,null,n.createElement(b.Qt,{inline:!0},n.createElement(b.xv,{color:"grey800",size:"16px",weight:600},n.createElement(u.Z,{id:"scenes.register.walletcard.item.2.bold",defaultMessage:"Securely store your"})),n.createElement(b.xv,{color:"grey600",size:"16px",weight:500},n.createElement(u.Z,{id:"scenes.register.walletcard.item.2.regular",defaultMessage:"crypto on mobile and desktop."})))),n.createElement(z,null,n.createElement(b.Qt,{inline:!0},n.createElement(b.xv,{color:"grey800",size:"16px",weight:600},n.createElement(u.Z,{id:"scenes.register.walletcard.item.3.bold",defaultMessage:"Control your money"})),n.createElement(b.xv,{color:"grey600",size:"16px",weight:500},n.createElement(u.Z,{id:"scenes.register.walletcard.item.3.regular",defaultMessage:"by holding your private keys."}))))),o?n.createElement(components_SignupForm,Object.assign({},e)):n.createElement(b.zx,{"data-e2e":"signupButton",fullwidth:!0,height:"48px",nature:"primary",onClick:s,style:{borderRadius:"8px"},type:"submit"},t?n.createElement(b.JA,{height:"20px",width:"20px",color:"white"}):n.createElement(b.xv,{color:"whiteFade900",size:"16px",weight:600},n.createElement(u.Z,{id:"scenes.public.register.createWallet",defaultMessage:"Create Wallet"}))),!r&&n.createElement(n.Fragment,null,n.createElement(X,{showForm:l}),n.createElement(Q,{showForm:l},n.createElement(q,null,n.createElement(b.Ct,{type:"applestore"}),n.createElement(b.Ct,{type:"googleplay"}))))),n.createElement(h.Ji,{to:"/login"},n.createElement(b.rU,null,n.createElement(S,null,n.createElement(b.xv,{size:"14px",color:"white",weight:500},n.createElement(u.Z,{id:"scenes.register.wallet.link",defaultMessage:"Already have a wallet?"}))," ",n.createElement(F,{color:"white",size:"14px",weight:500},n.createElement(u.Z,{id:"scenes.register.wallet.signin",defaultMessage:"Sign In"})),n.createElement(b.JO,{size:"18px",color:"white",name:"arrow-right"})))))},ee=m.ZP.div`
  box-sizing: border-box;
  width: 360px;
  margin: 2rem 4rem 0 0;
  padding: 0;

  img {
    background-color: white;
    border-radius: 1.75rem;
    padding: 0.5rem;
    margin-bottom: 1.5rem;
  }
`,te=(0,m.ZP)(b.xv)`
  color: white;
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 0.625rem;
`,re=(0,m.ZP)(b.xv)`
  font-size: 1rem;
  margin-top: 20px;
  font-weight: 500;
  line-height: 150%;
`,ne=m.ZP.ul`
  margin-bottom: 0;
  margin-top: 8px;
  padding-left: 0;
  list-style: none;
`,ae=m.ZP.li`
  margin-top: 8px;

  div {
    display: inline;
  }

  ::before {
    content: '–';
    color: ${e=>e.theme.whiteFade600};
    padding-right: 0.5rem;
  }
`,Signup_ExchangeLinkGoal=e=>n.createElement(C,null,n.createElement(ee,null,n.createElement(b.Ee,{height:"2rem",name:"refresh"}),n.createElement(te,null,n.createElement(u.Z,{id:"scenes.linkaccount.authorize2",defaultMessage:"Connect Your Wallet"})),n.createElement(b.xv,{weight:500,color:"whiteFade600",lineHeight:"150%"},n.createElement(u.Z,{id:"scenes.linkaccount.subtitle",defaultMessage:"To The Exchange"})),n.createElement(re,{color:"white"},n.createElement(u.Z,{id:"scenes.linkaccount.able_to",defaultMessage:"The Exchange will be able to:"})),n.createElement(ne,null,n.createElement(ae,null,n.createElement(b.xv,{weight:500,color:"whiteFade600",lineHeight:"150%"},n.createElement(u.Z,{id:"scenes.linkaccount.able_to1",defaultMessage:"Access your profile information"}))),n.createElement(ae,null,n.createElement(b.xv,{weight:500,color:"whiteFade600",lineHeight:"150%"},n.createElement(u.Z,{id:"scenes.linkaccount.able_to2",defaultMessage:"Send & receive currency between apps"}))),n.createElement(ae,null,n.createElement(b.xv,{weight:500,color:"whiteFade600",lineHeight:"150%"},n.createElement(u.Z,{id:"scenes.linkaccount.able_to3",defaultMessage:"Add your linked banks"})))),n.createElement(re,{color:"white"},n.createElement(u.Z,{id:"scenes.linkaccount.can_not_do",defaultMessage:"The Exchange will not be able to:"})),n.createElement(ne,null,n.createElement(ae,null,n.createElement(b.xv,{weight:500,color:"whiteFade600",lineHeight:"150%"},n.createElement(u.Z,{id:"scenes.linkaccount.trade",defaultMessage:"Trade on your behalf"}))),n.createElement(ae,null,n.createElement(b.xv,{weight:500,color:"whiteFade600",lineHeight:"150%"},n.createElement(u.Z,{id:"scenes.linkaccount.view_pw",defaultMessage:"View your our.com password"}))))),n.createElement(components_SignupCard,Object.assign({},e))),le=m.ZP.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 4rem;
`,ie=m.ZP.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  ${f.BC.tabletL`
    align-items: flex-start;
  `}
`,se=(0,m.ZP)(b.xv)`
  font-size: 32px;
  color: ${f.BC.tabletL`
    font-size: 32px;
  `};
`,oe=(0,m.ZP)(b.xv)`
  margin-top: 1.25rem;
  font-size: 24px;

  ${f.BC.tabletL`
    font-size: 20px;
  `}
`,components_Header=()=>n.createElement(le,null,n.createElement(ie,null,n.createElement(se,{color:"whiteFade900",weight:700,"data-e2e":"signupSecureHeader"},n.createElement(u.Z,{id:"scenes.register.securelybuy",defaultMessage:"Securely Buy, Sell, and Store Crypto."})),n.createElement(oe,{color:"whiteFade800",weight:500,"data-e2e":"signupSecureSubHeader"},n.createElement(u.Z,{id:"scenes.register.getstarted",defaultMessage:"Get Started by Signing Up Now."})))),ce=((0,m.ZP)(b.zx)`
  color: ${e=>e.theme.white};
  background-color: ${e=>e.theme.black};
  position: relative;
  border: none;

  &:hover {
    background-color: ${e=>e.theme.greyFade800};
  }
`,(0,m.ZP)(b.JO)`
  position: absolute;
  right: 1rem;

  ${f.BC.tablet`
    display: none;
  `}
`,e=>{const{isLinkAccountGoal:t,showForm:r}=e;return n.createElement(n.Fragment,null,n.createElement(components_Header,null),n.createElement(C,null,n.createElement(components_SignupCard,Object.assign({},e)),!1))}),me=m.ZP.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`,de="register";class ge extends n.PureComponent{constructor(e){super(e),this.onSubmit=e=>{e.preventDefault();const{authActions:t,formValues:r,language:n}=this.props,{country:a,email:l,password:i,state:s}=r;t.register({country:a,email:l,language:n,password:i,state:s})},this.toggleSignupFormVisibility=()=>{this.setState({showForm:!0})},this.onCountryChange=(e,t)=>{this.setDefaultCountry(t),this.props.formActions.clearFields(de,!1,!1,"state")},this.setDefaultCountry=e=>{this.setState({showState:"US"===e})},this.setCountryOnLoad=e=>{this.setDefaultCountry(e),this.props.formActions.change(de,"country",e)},this.state={showForm:e.search.includes("showWallet"),showState:!1}}componentDidMount(){const{authActions:e,websocketActions:t}=this.props;t.startSocket(),e.getUserGeoLocation()}render(){const{goals:e,isLoadingR:t,signupCountryEnabled:r}=this.props,a=d.Nt.Loading.is(t),o=(0,l.Z)("",["data","email"],(0,i.Z)((0,s.Z)("name","simpleBuy"),e)),c=o?{email:o}:{},m=!!(0,i.Z)((0,s.Z)("name","linkAccount"),e),g=!!(0,i.Z)((0,s.Z)("name","simpleBuy"),e),u=Object.assign({initialValues:c,isFormSubmitting:a,isLinkAccountGoal:m,onCountrySelect:this.onCountryChange,onSignupSubmit:this.onSubmit,setDefaultCountry:this.setCountryOnLoad,showForm:this.state.showForm,showState:this.state.showState,signupCountryEnabled:r,toggleSignupFormVisibility:this.toggleSignupFormVisibility},this.props);return n.createElement(me,null,m&&n.createElement(Signup_ExchangeLinkGoal,Object.assign({},u)),g&&n.createElement(Signup_BuyGoal,Object.assign({},u)),!m&&!g&&n.createElement(ce,Object.assign({},u)))}}const ue=(0,a.connect)((e=>({formValues:g.wl.cr.getFormValues(de)(e),goals:g.wl.P7.getGoals(e),isLoadingR:g.wl.I8.getRegistering(e),language:g.wl.cb.getLanguage(e),search:g.wl.Nd.getSearch(e),signupCountryEnabled:g.wl.vE.AW.getFeatureSignupCountry(e).getOrElse(!1),userGeoData:g.wl.I8.getUserGeoData(e)})),(e=>({alertActions:(0,o.bindActionCreators)(g.Nw.$u,e),authActions:(0,o.bindActionCreators)(g.Nw.I8,e),formActions:(0,o.bindActionCreators)(g.Nw.cr,e),websocketActions:(0,o.bindActionCreators)(g.Nw.ws,e)}))),he=(0,o.compose)((0,c.Z)({form:de}),ue)(ge)},"./src/services/browser/index.tsx":(e,t,r)=>{r.d(t,{T:()=>isBrowserSupported,F:()=>isBrowserSafari});var n=r("../../node_modules/bowser/es5.js"),a=r.n(n);const isBrowserSupported=()=>a().getParser(window.navigator.userAgent).satisfies({chrome:">60",chromium:">60",edge:">17",firefox:">60",opera:">50",safari:">11",vivaldi:">3"}),isBrowserSafari=()=>a().getParser(window.navigator.userAgent).satisfies({safari:">11"})}}]);