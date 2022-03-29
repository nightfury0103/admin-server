"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[9502],{"./src/components/Public/index.js":(e,t,n)=>{n.d(t,{i:()=>a});var o,s,r,l=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),i=n("./src/services/styles/index.ts");function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var a=l.ZP.div(o||(o=_taggedTemplateLiteral(["\n  padding: 32px;\n  border-radius: 8px;\n  box-sizing: border-box;\n  background-color: ",";\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.21);\n  width: 480px;\n\n  ","\n  ","\n"])),(function(e){return e.theme.white}),i.BC.tablet(s||(s=_taggedTemplateLiteral(["\n    width: 100%;\n  "]))),i.BC.mobile(r||(r=_taggedTemplateLiteral(["\n    padding: 20px;\n  "]))))},"./src/components/QRCode/Reader/index.tsx":(e,t,n)=>{n.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var o=n("../../node_modules/react/index.js"),s=n("./node_modules/react-intl/lib/src/components/message.js"),r=n("../../node_modules/react-qr-reader/lib/index.js"),l=n.n(r),i=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),a=n("../blockchain-info-components/src/index.js"),c=n("./src/utils/helpers.ts");const d=i.ZP.div`
  > section > section > div {
    border: 30px solid rgba(0, 0, 0, 0.3) !important;
    box-shadow: rgba(255, 255, 255, 0.5) 0px 0px 0px 4px inset !important;
  }
`,p=i.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  padding: 20px;
  margin: 20px;
`,__WEBPACK_DEFAULT_EXPORT__=e=>{const{onError:t,onScan:n}=e,[r,i]=(0,o.useState)(!1),[m,u]=(0,o.useState)(!0);return(0,o.useEffect)((()=>{(0,c.Yf)().then((e=>{i(e),u(!1)}))}),[]),m?o.createElement(p,null,o.createElement(a.T_,{width:"80px",height:"80px"})):r?o.createElement(d,null,o.createElement(l(),{onScan:n,onError:t})):o.createElement(a.jL,{type:"warning"},o.createElement(s.Z,{id:"components.qrreader.warning",defaultMessage:"Your browser does not have webcam support."}))}},"./src/scenes/MobileLogin/index.tsx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var o=n("../../node_modules/react/index.js"),s=n("../../node_modules/react-redux/es/index.js"),r=n("../../node_modules/ramda/es/isNil.js"),l=n("../../node_modules/ramda/es/isEmpty.js"),i=n("../../node_modules/redux/es/redux.js"),a=n("./src/data/index.ts"),c=n("./src/services/alerts/index.ts"),d=n("./node_modules/react-intl/lib/src/components/message.js"),p=n("../../node_modules/react-router-bootstrap/lib/index.js"),m=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),u=n("../blockchain-info-components/src/index.js"),g=n("./src/components/Public/index.js"),b=n("./src/components/QRCode/Reader/index.tsx"),__rest=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(n[o[s]]=e[o[s]])}return n};const x=m.ZP.div`
  display: flex;
  justify-content: center;
`,f=m.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`,h=m.ZP.div`
  width: 100%;
  padding: 0 48px;
  margin-top: 24px;
  box-sizing: border-box;
`,E=m.ZP.div`
  width: 320px;
  height: 320px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  div {
    margin: 0 auto;
  }
`,y=m.ZP.div`
  margin: 24px 0;
`,w=(0,m.ZP)(u.xv)`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin-top: 12px;
  &:first-child {
    margin-top: 0px;
  }
  color: ${e=>e.theme.grey800};
`,template=e=>{const{close:t}=e,n=__rest(e,["close"]),{handleError:s,handleScan:r,isScanning:l}=n;return o.createElement(g.i,null,o.createElement(x,null,o.createElement(u.xv,{size:"20px",color:"blue900",weight:600,capitalize:!0},o.createElement(d.Z,{id:"scenes.mobilelogin.title",defaultMessage:"Login with Your Mobile App"}))),o.createElement(f,null,o.createElement(h,null,l?o.createElement(E,null,o.createElement(u.nZ,null)):o.createElement(b.Z,{onScan:r,onError:s})),o.createElement(y,null,o.createElement(w,null,o.createElement(d.Z,{id:"scenes.mobilelogin.openappstep1",defaultMessage:"1. Open your Mobile App and Log In"})),o.createElement(w,null,o.createElement(d.Z,{id:"scenes.mobilelogin.tapwebstep2",defaultMessage:'2. Tap "Pair Web Wallet" from the side navigiation.'})),o.createElement(w,null,o.createElement(d.Z,{id:"scenes.mobilelogin.showqrstep3",defaultMessage:'3. Tap "Show QR Code"'})),o.createElement(w,null,o.createElement(d.Z,{id:"scenes.mobilelogin.scanstep4",defaultMessage:"4. Scan your QR code here"})))),o.createElement(p.Ji,{to:"/login"},o.createElement(u.zx,{"data-e2e":"backToLogin",type:"submit",nature:"primary",fullwidth:!0,height:"56px"},o.createElement(u.xv,{color:"white",size:"16px",weight:600,onClick:t},o.createElement(d.Z,{id:"buttons.back",defaultMessage:"Back"})))))},j=(0,s.connect)((e=>({logginStarted:a.wl.I8.getMobileLoginStarted(e)})),(e=>({alertsActions:(0,i.bindActionCreators)(a.Nw.$u,e),authActions:(0,i.bindActionCreators)(a.Nw.I8,e),modalActions:(0,i.bindActionCreators)(a.Nw.qk,e)})))((e=>o.createElement(template,Object.assign({},e,{handleScan:t=>{(0,r.Z)(t)||(0,l.Z)(t)||e.authActions.mobileLogin(t)},handleError:t=>{(0,r.Z)(t)&&(0,l.Z)(t)&&e.alertsActions.displayError(c.Fc)},isScanning:e.logginStarted}))))}}]);