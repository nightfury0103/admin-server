"use strict";(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[5920],{"./src/scenes/UploadDocuments/index.js":(e,t,n)=>{n.r(t),n.d(t,{default:()=>H});var r,o,i,a,l,s,c,u,d,p,f,m=n("../../node_modules/react/index.js"),y=n("../../node_modules/react-redux/es/index.js"),g=n("../../node_modules/base-64/base64.js"),b=n.n(g),h=n("../../node_modules/prop-types/index.js"),_=n.n(h),x=n("../../node_modules/redux/es/redux.js"),w=n("./src/data/index.ts"),E=n("../../node_modules/react-dropzone/dist/es/index.js"),v=n("./node_modules/react-intl/lib/src/components/message.js"),P=n("../../node_modules/@blockchain-com/components/esm/Atoms/Icons/fa/solid/passport.js"),z=n("../../node_modules/@blockchain-com/components/esm/Atoms/Icons/fa/solid/id-badge.js"),D=n("../../node_modules/@blockchain-com/components/esm/Atoms/Icons/fa/solid/id-card.js"),A=n("../../node_modules/ramda/es/prop.js"),j=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),k=n("../blockchain-info-components/src/index.js"),T=n("./src/services/styles/index.ts");function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var C=j.ZP.div(r||(r=_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  border: 1px solid ",";\n  border-radius: 4px;\n  padding: 4px;\n  width: 100%;\n"])),(function(e){return e.theme.blue200})),O=j.ZP.div(o||(o=_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"]))),S=j.ZP.div(i||(i=_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n"]))),Z=j.ZP.div(a||(a=_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  width: 100%;\n  & > * {\n    fill: ",";\n  }\n"])),(function(e){return e.theme.blue900})),R=j.ZP.div(l||(l=_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),M=j.ZP.div(s||(s=_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-right: 20px;\n\n  & > * {\n    padding-bottom: 12px;\n  }\n"]))),U=(0,j.ZP)(k.zx)(c||(c=_taggedTemplateLiteral(["\n  margin-top: 16px;\n"]))),L=(0,j.ZP)(E.Z)(u||(u=_taggedTemplateLiteral(["\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 8px;\n  padding: 8px;\n"])),(function(e){return e.theme.white}),(function(e){return e.theme.blue200})),I=j.ZP.div(d||(d=_taggedTemplateLiteral(["\n  padding: 16px;\n  border: 1px dashed ",";\n  border-radius: 8px;\n"])),(function(e){return e.theme.blue200})),F=j.ZP.div(p||(p=_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 35px;\n  box-sizing: border-box;\n  background-color: ",";\n\n  ","\n"])),(function(e){return e.theme.grey000}),T.BC.tablet(f||(f=_taggedTemplateLiteral(["\n    flex-direction: column;\n  "])))),N=window.matchMedia("(max-width: 760px)"),q=function UploadDocuments(e){var t=e.data,n=e.deleteFileAt,r=e.files,o=e.loading,i=e.onDropAccepted,a=e.onSubmit,l=e.openDropzone,s=e.setDropzoneRef;return m.createElement(F,null,m.createElement(M,null,m.createElement(k.Qt,{inline:!0},m.createElement(k.xv,{color:"blue900",size:"16px",weight:400},m.createElement(v.Z,{id:"scenes.uploaddoc.hello",defaultMessage:"Hello "})),m.createElement(k.xv,{color:"blue900",size:"16px",weight:400},(0,A.Z)("firstName",t),",")),m.createElement(k.xv,{color:"blue900",size:"16px",weight:400},m.createElement(v.Z,{id:"scenes.uploaddoc.verify",defaultMessage:"We need to verify your identity in order to allow buys, sells or exchanges."})),m.createElement(k.xv,{color:"blue900",size:"16px",weight:400},m.createElement(v.Z,{id:"scenes.uploaddoc.docs",defaultMessage:"Please upload the following documents: "})),(0,A.Z)("documentsTypes",t)&&t.documentsTypes.map((function(e,t){return m.createElement(k.xv,{color:"blue900",key:t,size:"24px",weight:600},e)}))),m.createElement(I,null,m.createElement(L,{accept:"image/jpeg, application/pdf, image/png",disableClick:!0,onDropAccepted:i,ref:s},0===r.length?m.createElement(m.Fragment,null,N.matches?m.createElement(k.rU,{onClick:l,weight:500},m.createElement(v.Z,{id:"scenes.uploaddoc.browsefiles",defaultMessage:"Browse files"})):m.createElement(m.Fragment,null,m.createElement(k.xv,{color:"blue900",size:"20px",weight:400},m.createElement(v.Z,{id:"scenes.uploaddoc.dragdrop",defaultMessage:"Drag & Drop"})),m.createElement(k.Qt,{inline:!0},m.createElement(k.xv,{color:"blue900",weight:400},m.createElement(v.Z,{id:"scenes.uploaddoc.placefiles",defaultMessage:"Place your files here, "})),m.createElement(k.rU,{onClick:l,weight:500},m.createElement(v.Z,{id:"scenes.uploaddoc.browse",defaultMessage:"or browse"})))),m.createElement(Z,null,m.createElement(R,null,m.createElement(P.k,null),m.createElement(k.xv,{color:"blue900",size:"12px",weight:400},m.createElement(v.Z,{id:"scenes.uploaddoc.passport",defaultMessage:"Passport"}))),m.createElement(R,null,m.createElement(z.s,null),m.createElement(k.xv,{color:"blue900",size:"12px",weight:400},m.createElement(v.Z,{id:"scenes.uploaddoc.drivinglicense",defaultMessage:"Driving license"}))),m.createElement(R,null,m.createElement(D.V,null),m.createElement(k.xv,{color:"blue900",size:"12px",weight:400},m.createElement(v.Z,{id:"scenes.uploaddoc.idcard",defaultMessage:"ID Card"}))))):m.createElement(m.Fragment,null,m.createElement(S,null,r.map((function(e,t){return m.createElement(C,{key:t},m.createElement(O,null,m.createElement(k.xv,{color:"blue900",size:"12px",weight:400},e.name),m.createElement(k.xv,{color:"blue900",size:"12px",weight:400},"".concat((e.size/1024/1024).toFixed(2)," MB"))),m.createElement(k.xv,{color:"grey400",cursor:"pointer",onClick:function onClick(){return n(t)},size:"12px",weight:400},m.createElement(v.Z,{id:"scenes.uploaddoc.deletedoc",defaultMessage:"Delete"})))}))),m.createElement(k.rU,{cursor:"pointer",onClick:l,weight:500},m.createElement(v.Z,{id:"scenes.uploaddoc.browsecomputer",defaultMessage:"Browse my computer"}))),m.createElement(k.xv,{color:"grey400",size:"14px",weight:400},m.createElement(v.Z,{id:"scenes.uploaddoc.filesize",defaultMessage:"Please upload a JPG, PNG or PDF up to 3MB in size."})),r.length>0&&m.createElement(U,{nature:"primary",onClick:a,disabled:o},o?m.createElement(k.JA,{height:"20px",width:"20px",color:"white"}):m.createElement(v.Z,{id:"scenes.uploaddoc.uploadnow",defaultMessage:"Upload Now"})))))};q.propTypes={data:_().object,deleteFileAt:_().func.isRequired,files:_().array.isRequired,onDropAccepted:_().func.isRequired,onSubmit:_().func.isRequired,openDropzone:_().func.isRequired,setDropzoneRef:_().func.isRequired};const B=q;function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _toConsumableArray(e){return function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}(e)||function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function _unsupportedIterableToArray(e,t){if(!e)return;if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(e,t)}(e)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var n,r=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(e)}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var G=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(UploadDocumentsContainer,e);var t=_createSuper(UploadDocumentsContainer);function UploadDocumentsContainer(e){var n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,UploadDocumentsContainer),_defineProperty(_assertThisInitialized(n=t.call(this,e)),"onSubmit",(function(){var e=[],t=n.state,r=t.redirectUrl,o=t.token;n.state.files.forEach((function(t){var i=new FileReader;i.onload=function(t){var i=new Uint8Array(t.target.result).reduce((function(e,t){return e+String.fromCharCode(t)}),"");e.push(b().encode(i)),e.length>=n.state.files.length&&n.props.uploadDocuments(o,e,r)},i.readAsArrayBuffer(t)}))})),_defineProperty(_assertThisInitialized(n),"deleteFileAt",(function(e){n.setState((function(t){return t.files.splice(e,1),{files:t.files}}))})),_defineProperty(_assertThisInitialized(n),"onDropAccepted",(function(e){e.forEach((function(e){e.size>=3145728?n.props.displayError("File over size limit"):n.state.files.length>=3?n.props.displayError("Maximum number of files reached"):n.setState((function(t){return{files:[].concat(_toConsumableArray(t.files),[e])}}))}))})),_defineProperty(_assertThisInitialized(n),"openDropzone",(function(){n.dropzone&&n.dropzone.open()})),_defineProperty(_assertThisInitialized(n),"setDropzoneRef",(function(e){n.dropzone=e})),n.dropzone=null;var r=new URLSearchParams(e.location.search);return n.state={files:[],redirectUrl:r.get("redirect_url"),token:e.match.params.token},n}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(UploadDocumentsContainer,[{key:"componentDidMount",value:function componentDidMount(){this.props.fetchUploadData(this.state.token)}},{key:"render",value:function render(){var e=this.props.uploaded.cata({Failure:function Failure(e){return{loading:!1}},Loading:function Loading(){return{loading:!0}},NotAsked:function NotAsked(e){return{loading:!1}},Success:function Success(e){return{loading:!1}}}).loading;return m.createElement(B,{data:this.props.data,files:this.state.files,dropzoneRef:this.dropzoneRef,deleteFileAt:this.deleteFileAt,onDropAccepted:this.onDropAccepted,setDropzoneRef:this.setDropzoneRef,openDropzone:this.openDropzone,onSubmit:this.onSubmit,loading:e})}}]),UploadDocumentsContainer}(m.Component);_defineProperty(G,"propTypes",{data:_().object,displayError:_().func.isRequired,uploadDocuments:_().func.isRequired,uploaded:_().object});const H=(0,y.connect)((function mapStateToProps(e){return{data:w.wl.wx.GA.getData(e),uploaded:w.wl.wx.GA.getUploaded(e)}}),(function mapDispatchToProps(e){return{displayError:(0,x.bindActionCreators)(w.Nw.$u.displayError,e),fetchUploadData:(0,x.bindActionCreators)(w.Nw.wx.uploadDocuments.fetchData,e),uploadDocuments:(0,x.bindActionCreators)(w.Nw.wx.uploadDocuments.upload,e)}}))(G)}}]);