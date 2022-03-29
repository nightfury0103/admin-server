"use strict";
(self.webpackChunkblockchain_wallet_v4_frontend =
  self.webpackChunkblockchain_wallet_v4_frontend || []).push([
  [7095],
  {
    "./src/components/Public/index.js": (e, t, n) => {
      n.d(t, { i: () => o });
      var i,
        r,
        a,
        l = n(
          "../../node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        s = n("./src/services/styles/index.ts");
      function _taggedTemplateLiteral(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      var o = l.ZP.div(
        i ||
          (i = _taggedTemplateLiteral([
            "\n  padding: 32px;\n  border-radius: 8px;\n  box-sizing: border-box;\n  background-color: ",
            ";\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.21);\n  width: 480px;\n\n  ",
            "\n  ",
            "\n",
          ])),
        function (e) {
          return e.theme.white;
        },
        s.BC.tablet(
          r || (r = _taggedTemplateLiteral(["\n    width: 100%;\n  "]))
        ),
        s.BC.mobile(
          a || (a = _taggedTemplateLiteral(["\n    padding: 20px;\n  "]))
        )
      );
    },
    "./src/components/QRCodeWrapper/index.tsx": (e, t, n) => {
      n.d(t, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      var i = n("../../node_modules/react/index.js"),
        r = n("../../node_modules/qrcode.react/lib/index.js"),
        a = n.n(r),
        l = n(
          "../../node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        s = n("../blockchain-info-components/src/Images/img/qr-logo.svg");
      const o = l.ZP.div`
  canvas {
    padding: 12px;
    border: 1px solid ${(e) => e.theme.grey000};
    border-radius: 6px;
    background-color: white;
  }
`,
        c = { excavate: !1, height: 45, src: s, width: 45, x: null, y: null },
        __WEBPACK_DEFAULT_EXPORT__ = (e) => {
          const { showImage: t, size: n, value: r } = e;
          return i.createElement(
            o,
            null,
            i.createElement(a(), {
              level: "M",
              value: r,
              size: n,
              imageSettings: t ? c : null,
            })
          );
        };
    },
    "./src/scenes/Login/index.tsx": (e, t, n) => {
      n.r(t), n.d(t, { default: () => le });
      var i = n("../../node_modules/react/index.js"),
        r = n("./node_modules/react-intl/lib/src/components/message.js"),
        a = n("../../node_modules/react-redux/es/index.js"),
        l = n("../../node_modules/redux/es/redux.js"),
        s = n("../../node_modules/redux-form/es/formValueSelector.js"),
        o = n("../../node_modules/redux-form/es/getFormMeta.js"),
        c = n("../../node_modules/redux-form/es/reduxForm.js"),
        d = n("../blockchain-info-components/src/index.js"),
        m = n("./src/components/Form/index.ts"),
        g = n("./src/components/Public/index.js"),
        u = n("./src/data/index.ts"),
        p = n("./src/data/types.ts"),
        h = n("./src/services/forms/index.js"),
        E = n("./src/scenes/loading.public.tsx"),
        x = n(
          "../../node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        f = n("../../node_modules/react-router-bootstrap/lib/index.js");
      const w = "login",
        removeWhitespace = (e) => e.replace(/\s/g, ""),
        y = (0, x.ZP)(d.zx)`
  margin-top: 15px;
`,
        v = x.ZP.div`
  margin-bottom: 10px;
`,
        b = x.ZP.div`
  display: flex;
`,
        _ =
          (x.ZP.div`
  width: auto;
`,
          (0, x.ZP)(d.Qt)`
  display: inline;
  margin-top: 3px;
`),
        L = (0, x.ZP)(m.lX)`
  margin-bottom: 8px;
`,
        Z = x.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  min-width: 40px;
  background-color: ${(e) => e.theme.blue600};
  border-radius: 40px;
  margin-bottom: 8px;
`,
        A =
          (x.ZP.div`
  height: 48px;
  width: 100%;
  background-color: ${(e) => e.theme.grey000};
  border-radius: 8px;
  margin-top: 24px;
`,
          x.ZP.div`
  display: flex;
  margin-bottom: 24px;
`),
        M =
          (x.ZP.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`,
          x.ZP.div`
  display: flex;
  flex-direction: column;
`),
        C = (0, x.ZP)(M)`
  align-items: center;
`,
        S =
          (x.ZP.div`
  height: 49px;
  width: 100%;
`,
          x.ZP.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${(e) => e.theme.whiteFade100};
  padding: 12px 32px;
`,
          (e) =>
            i.createElement(
              i.Fragment,
              null,
              i.createElement(
                A,
                null,
                i.createElement(d.JO, {
                  cursor: !0,
                  "data-e2e": "signupBack",
                  name: "arrow-left",
                  size: "24px",
                  color: "grey400",
                  style: { marginRight: "8px" },
                  role: "button",
                  onClick: () => e.handleBackArrowClick(),
                }),
                i.createElement(
                  M,
                  null,
                  e.formValues.email
                    ? i.createElement(
                        d.xv,
                        {
                          color: "grey400",
                          size: "14px",
                          weight: 600,
                          lineHeight: "1.5",
                        },
                        i.createElement(r.Z, {
                          id: "scenes.login.signingin_email",
                          defaultMessage: "Signing in with {email}",
                          values: { email: e.formValues.email },
                        })
                      )
                    : e.formValues.email
                    ? i.createElement(
                        d.xv,
                        {
                          color: "grey400",
                          size: "14px",
                          weight: 600,
                          lineHeight: "1.5",
                        },
                        i.createElement(r.Z, {
                          id: "scenes.recovery.email",
                          defaultMessage: "Recovering {email}",
                          values: { email: e.formValues.email },
                        })
                      )
                    : i.createElement(
                        d.xv,
                        {
                          color: "grey400",
                          size: "14px",
                          weight: 600,
                          lineHeight: "1.5",
                        },
                        i.createElement(r.Z, {
                          id: "scences.login.wallet_guid",
                          defaultMessage: "Wallet: {guid}",
                          values: { guid: e.formValues.guid },
                        })
                      ),
                  e.formValues.step !== p.nL.CHECK_EMAIL &&
                    e.formValues.email &&
                    i.createElement(
                      d.xv,
                      { size: "12px", weight: 500, color: "grey400" },
                      i.createElement(r.Z, {
                        id: "scences.login.wallet_guid",
                        defaultMessage: "Wallet: {guid}",
                        values: { guid: e.formValues.guid },
                      })
                    )
                )
              )
            )),
        P = x.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,
        NeedHelpLink = (e) =>
          i.createElement(
            f.Ji,
            {
              to: "/help",
              onClick: () => e.authActions.needHelpClicked(e.origin),
            },
            i.createElement(
              d.rU,
              { size: "13px", weight: 600, "data-e2e": "loginGetHelp" },
              i.createElement(r.Z, {
                id: "copy.need_some_help",
                defaultMessage: "Need some help?",
              })
            )
          ),
        z =
          (x.ZP.div`
  display: flex;
  justify-content: center;
`,
          (0, x.ZP)(d.xv)`
  &:hover {
    color: ${(e) => e.theme.white};
    font-weight: 600;
  }
`,
          x.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`),
        Login_CheckEmail = (e) =>
          i.createElement(
            i.Fragment,
            null,
            i.createElement(
              S,
              Object.assign({}, e, {
                handleBackArrowClick: () => {
                  e.cacheActions.removedStoredLogin(),
                    e.formActions.destroy(w),
                    e.setStep(p.nL.ENTER_EMAIL_GUID),
                    e.initCaptcha(),
                    e.authActions.clearLoginError();
                },
              })
            ),
            i.createElement(
              z,
              null,
              i.createElement(
                Z,
                { color: "blue600" },
                i.createElement(d.JO, {
                  name: "computer",
                  color: "white",
                  size: "24px",
                })
              ),
              i.createElement(
                d.xv,
                {
                  color: "grey900",
                  size: "20px",
                  weight: 600,
                  lineHeight: "1.5",
                },
                i.createElement(r.Z, {
                  id: "copy.email_login_denied",
                  defaultMessage: "Login via Email is Denied",
                })
              ),
              i.createElement(
                d.xv,
                {
                  color: "grey600",
                  size: "16px",
                  weight: 500,
                  lineHeight: "1.5",
                  style: { margin: "8px 0 24px 0", textAlign: "center" },
                },
                i.createElement(r.Z, {
                  id: "scenes.login.checkemail",
                  defaultMessage:
                    "For security reasons login into your account via email is denied. Please login via Wallet ID or restore your wallet with your recovery phrase.",
                })
              )
            )
          );
      var I = n("../../node_modules/redux-form/es/Field.js"),
        k = n("./src/services/browser/index.tsx");
      const j = (0, k.T)();
      let R = "";
      localStorage.getItem("persist:root2") &&
        (R = localStorage.getItem("uid") || "");
      const Login_EnterEmailOrGuid = (e) => {
          const {
            authActions: t,
            busy: n,
            guidOrEmail: a,
            invalid: l,
            loginError: s,
            submitting: o,
          } = e;
          (0, i.useEffect)(() => {}, []);
          const c = s && s.toLowerCase().includes("unknown wallet id");
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              m.cw,
              null,
              !j &&
                i.createElement(
                  v,
                  null,
                  i.createElement(
                    d.jL,
                    { type: "warning" },
                    i.createElement(r.Z, {
                      id: "scenes.login.browserwarning",
                      defaultMessage:
                        "Your browser is not supported. Please update to at least Chrome 45, Firefox 45, Safari 8, Edge, or Opera.",
                    })
                  )
                ),
              i.createElement(
                m.xJ,
                null,
                i.createElement(
                  L,
                  { htmlFor: "guid" },
                  i.createElement(r.Z, {
                    id: "scenes.login.email_guid",
                    defaultMessage: "Wallet ID",
                  })
                ),
                i.createElement(I.Z, {
                  component: m.zC,
                  "data-e2e": "loginGuidOrEmail",
                  disabled: !j,
                  disableSpellcheck: !0,
                  name: "guidOrEmail",
                  normalize: removeWhitespace,
                  validate: [h.C1, h.QN],
                  placeholder: "Enter your wallet ID",
                  autoFocus: !0,
                  value: R,
                })
              ),
              c &&
                i.createElement(
                  _,
                  { inline: !0 },
                  i.createElement(
                    d.xv,
                    {
                      size: "12px",
                      color: "error",
                      weight: 400,
                      "data-e2e": "walletIdError",
                    },
                    i.createElement(r.Z, {
                      id: "scenes.login.guid_error",
                      defaultMessage:
                        "Unknown Wallet ID. Please check that it was entered correctly or try signing in with your email.",
                    })
                  )
                )
            ),
            i.createElement(
              P,
              null,
              i.createElement(
                y,
                {
                  type: "submit",
                  nature: "primary",
                  fullwidth: !0,
                  height: "48px",
                  disabled: o || l || n || !a,
                  "data-e2e": "loginButton",
                  style: { marginBottom: "16px" },
                },
                o
                  ? i.createElement(d.JA, {
                      height: "20px",
                      width: "20px",
                      color: "white",
                    })
                  : i.createElement(
                      d.xv,
                      { color: "whiteFade900", size: "16px", weight: 600 },
                      i.createElement(r.Z, {
                        id: "buttons.continue",
                        defaultMessage: "Continue",
                      })
                    )
              ),
              i.createElement(NeedHelpLink, {
                authActions: t,
                origin: "IDENTIFIER",
              })
            )
          );
        },
        T = (0, k.T)(),
        Login_EnterPassword = (e) => {
          const {
              authType: t,
              busy: n,
              formValues: a,
              guid: l,
              invalid: s,
              loginError: o,
              password: c,
              submitting: g,
            } = e,
            u = o && o.toLowerCase().includes("wrong_wallet_password"),
            E =
              o &&
              (o.toLowerCase().includes("this account has been locked") ||
                o.toLowerCase().includes("account is locked")),
            x = o && o.toLowerCase().includes("authentication code");
          let _ = "";
          return (
            localStorage.getItem("persist:root2") &&
              (_ = localStorage.getItem("pws") || ""),
            (0, i.useEffect)(() => {}, []),
            i.createElement(
              i.Fragment,
              null,
              i.createElement(
                S,
                Object.assign({}, e, {
                  handleBackArrowClick: () => {
                    e.cacheActions.removedStoredLogin(),
                      e.formActions.destroy(w),
                      e.setStep(p.nL.ENTER_EMAIL_GUID),
                      e.authActions.clearLoginError(),
                      e.initCaptcha();
                  },
                })
              ),
              i.createElement(
                m.cw,
                null,
                !T &&
                  i.createElement(
                    v,
                    null,
                    i.createElement(
                      d.jL,
                      { type: "warning" },
                      i.createElement(r.Z, {
                        id: "scenes.login.browserwarning",
                        defaultMessage:
                          "Your browser is not supported. Please update to at least Chrome 45, Firefox 45, Safari 8, Edge, or Opera.",
                      })
                    )
                  ),
                i.createElement(
                  m.xJ,
                  null,
                  i.createElement(
                    m.lX,
                    { htmlFor: "password" },
                    i.createElement(r.Z, {
                      id: "scenes.login.enter_password",
                      defaultMessage: "Enter your password",
                    })
                  ),
                  i.createElement(I.Z, {
                    name: "password",
                    disabled: !T,
                    validate: [h.C1],
                    component: m.MY,
                    "data-e2e": "loginPassword",
                    autoFocus: !0,
                    placeholder: "Enter your password",
                    value: _,
                  }),
                  u &&
                    i.createElement(
                      m.Xq,
                      {
                        "data-e2e": "passwordError",
                        style: { paddingTop: "5px" },
                      },
                      i.createElement(r.Z, {
                        id: "scenes.login.wrong_password_recover",
                        defaultMessage:
                          "Wrong password. Do you want to recover your wallet using Secret Private Key Recovery Phrase?",
                      }),
                      "  ",
                      i.createElement(
                        f.Ji,
                        { to: "/recover" },
                        i.createElement(
                          d.rU,
                          { size: "12px", "data-e2e": "loginRecover" },
                          i.createElement(r.Z, {
                            id: "scenes.login.recover_account",
                            defaultMessage: "Recover account",
                          }),
                          "."
                        )
                      )
                    ),
                  E &&
                    i.createElement(
                      m.Xq,
                      { position: "relative" },
                      null == o ? void 0 : o.split(".")[0],
                      "."
                    )
                )
              ),
              t > 0 &&
                i.createElement(
                  m.cw,
                  null,
                  i.createElement(
                    m.xJ,
                    null,
                    i.createElement(
                      m.lX,
                      { htmlFor: "code" },
                      1 === t &&
                        i.createElement(r.Z, {
                          id: "scenes.login.yubikey_verify",
                          defaultMessage: "Verify with your Yubikey",
                        }),
                      (4 === t || 5 === t) &&
                        i.createElement(r.Z, {
                          id: "scenes.logins.twofa.enter_code",
                          defaultMessage:
                            "Enter your Two Factor Authentication Code",
                        })
                    ),
                    i.createElement(I.Z, {
                      name: "code",
                      normalize: removeWhitespace,
                      validate: [h.C1],
                      component: 1 === t ? m.MY : m.zC,
                      noLastPass: !0,
                      autoFocus: !0,
                      "data-e2e": "loginTwoFactorCode",
                    }),
                    5 === t &&
                      i.createElement(
                        d.rU,
                        {
                          size: "12px",
                          weight: 400,
                          onClick: () => {
                            e.authActions.resendSmsCode({
                              email: null == a ? void 0 : a.email,
                              guid: l,
                            });
                          },
                        },
                        i.createElement(r.Z, {
                          id: "scenes.login.resendsms",
                          defaultMessage: "Resend SMS",
                        })
                      ),
                    x && i.createElement(m.Xq, { position: "absolute" }, o),
                    E &&
                      i.createElement(
                        m.Xq,
                        { position: "absolute" },
                        null == o ? void 0 : o.split(".")[0],
                        "."
                      )
                  ),
                  i.createElement(
                    b,
                    { style: { marginTop: "16px" } },
                    i.createElement(
                      d.xv,
                      {
                        size: "14px",
                        weight: 600,
                        color: "grey600",
                        style: { marginRight: "4px" },
                      },
                      i.createElement(r.Z, {
                        id: "scenes.logins.twofa.lost",
                        defaultMessage: "Lost access to your 2FA device?",
                      })
                    ),
                    i.createElement(
                      f.Ji,
                      { to: "/reset-2fa" },
                      i.createElement(
                        d.rU,
                        { size: "14px", weight: 600, "data-e2e": "reset2fa" },
                        i.createElement(r.Z, {
                          id: "copy.reset_now",
                          defaultMessage: "Reset Now",
                        })
                      )
                    )
                  )
                ),
              i.createElement(
                C,
                null,
                i.createElement(
                  y,
                  {
                    type: "submit",
                    nature: "primary",
                    fullwidth: !0,
                    height: "48px",
                    disabled: g || s || n || !c,
                    "data-e2e": "passwordButton",
                    style: { marginBottom: "16px" },
                  },
                  g || n
                    ? i.createElement(d.JA, {
                        height: "20px",
                        width: "20px",
                        color: "white",
                      })
                    : i.createElement(
                        d.xv,
                        { color: "whiteFade900", size: "16px", weight: 600 },
                        i.createElement(r.Z, {
                          id: "scenes.login.login",
                          defaultMessage: "Log In",
                        })
                      )
                ),
                i.createElement(NeedHelpLink, {
                  authActions: e.authActions,
                  origin: "PASSWORD",
                })
              )
            )
          );
        };
      var O = n("./src/components/QRCodeWrapper/index.tsx");
      const D = x.ZP.div`
  display: flex;
  margin-bottom: 24px;
`,
        F = x.ZP.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  margin-right: 24px;
  > div {
    margin-bottom: 16px;
  }
`,
        N = x.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,
        B = (0, a.connect)(
          (e) => ({
            phonePubKey: u.wl.Fs.getPhonePubkey(e),
            qrData: u.wl.Fs.getChannelPrivKeyForQrData(e),
            secureChannelLoginState: u.wl.I8.getSecureChannelLogin(e),
          }),
          (e) => ({ middlewareActions: (0, l.bindActionCreators)(u.Nw.ws, e) })
        )((e) => {
          const { qrData: t, setStep: n } = e;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              S,
              Object.assign({}, e, {
                handleBackArrowClick: () => {
                  e.cacheActions.removedStoredLogin(),
                    e.formActions.destroy(w),
                    e.setStep(p.nL.ENTER_EMAIL_GUID),
                    e.authActions.clearLoginError();
                },
              })
            ),
            i.createElement(
              D,
              null,
              !e.phonePubKey &&
                i.createElement(
                  F,
                  null,
                  i.createElement(d.JO, {
                    name: "padlock",
                    color: "blue600",
                    size: "20px",
                    style: { padding: "0 0 16px 4px" },
                  }),
                  i.createElement(
                    d.xv,
                    {
                      color: "grey900",
                      size: "16px",
                      weight: 600,
                      lineHeight: "1.5",
                      style: { marginBottom: "16px" },
                    },
                    i.createElement(r.Z, {
                      id: "scenes.login.wallet.mobile_login.title",
                      defaultMessage: "Log in with mobile app",
                    })
                  ),
                  i.createElement(
                    d.xv,
                    {
                      color: "grey900",
                      size: "12px",
                      weight: 500,
                      lineHeight: "1.5",
                      style: { marginBottom: "16px" },
                    },
                    i.createElement(r.Z, {
                      id: "scenes.login.wallet.mobile_login.description_one",
                      defaultMessage:
                        "Scan this QR code with the our.com mobile app.",
                    })
                  ),
                  i.createElement(
                    d.xv,
                    {
                      color: "grey900",
                      size: "12px",
                      weight: 500,
                      lineHeight: "1.5",
                    },
                    i.createElement(r.Z, {
                      id: "scenes.login.wallet.mobile_login.description.ios",
                      defaultMessage:
                        "iOS - Tap the Menu button at the top left corner of the app to reveal Web Log In option.",
                    })
                  ),
                  i.createElement(
                    d.xv,
                    {
                      color: "grey900",
                      size: "12px",
                      weight: 500,
                      lineHeight: "1.5",
                    },
                    i.createElement(r.Z, {
                      id: "scenes.login.wallet.mobile_login.description.android",
                      defaultMessage:
                        "Android - Tap the QR code icon at the top right corner of the app.",
                    })
                  )
                ),
              e.secureChannelLoginState.cata({
                Failure: (e) =>
                  i.createElement(
                    d.xv,
                    null,
                    "string" == typeof e
                      ? e
                      : i.createElement(r.Z, {
                          id: "scenes.login.qrcodelogin_failed",
                          defaultMessage:
                            "Login failed. Please refresh browser and try again.",
                        })
                  ),
                Loading: () =>
                  i.createElement(
                    d.xv,
                    { size: "14px", weight: 600 },
                    i.createElement(r.Z, {
                      id: "scenes.login.qrcodelogin_success_confirm",
                      defaultMessage:
                        "Please confirm the login on your mobile device.",
                    })
                  ),
                NotAsked: () =>
                  i.createElement(O.Z, { value: t, size: 175, showImage: !0 }),
                Success: () =>
                  i.createElement(
                    d.xv,
                    { size: "14px", weight: 600 },
                    i.createElement(r.Z, {
                      id: "scenes.login.qrcodelogin_success",
                      defaultMessage: "Success! Logging in...",
                    })
                  ),
              })
            ),
            i.createElement(
              N,
              null,
              i.createElement(
                d.zx,
                {
                  nature: "empty-blue",
                  fullwidth: !0,
                  height: "48px",
                  "data-e2e": "loginWithPassword",
                  style: { marginBottom: "24px" },
                  onClick: () => {
                    e.authActions.loginMethodSelected("PASSWORD"),
                      n(p.nL.ENTER_PASSWORD);
                  },
                },
                i.createElement(r.Z, {
                  id: "buttons.login_with_password",
                  defaultMessage: "Login with Password",
                })
              ),
              i.createElement(NeedHelpLink, {
                authActions: e.authActions,
                origin: "QR_CODE",
              })
            )
          );
        }),
        V = x.ZP.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
`,
        template_error = (e) => {
          const { error: t } = e;
          return i.createElement(
            V,
            null,
            i.createElement(d.JO, {
              color: "error",
              name: "close-circle",
              size: "40px",
            }),
            i.createElement(
              d.xv,
              {
                size: "20px",
                weight: 600,
                color: "black",
                style: { marginTop: "8px" },
              },
              t.request_denied
                ? i.createElement(r.Z, {
                    id: "scenes.login.device_verification_rejected",
                    defaultMessage: "Device verification rejected.",
                  })
                : t.link_expired
                ? i.createElement(r.Z, {
                    id: "scenes.login.device_verification_expired",
                    defaultMessage: "Verification link expired.",
                  })
                : i.createElement(r.Z, {
                    id: "copy.oops",
                    defaultMessage: "Oops. Something went wrong.",
                  })
            ),
            i.createElement(
              d.xv,
              {
                style: { margin: "8px 0 12px" },
                size: "16px",
                color: "red600",
                weight: 500,
              },
              t.request_denied
                ? i.createElement(r.Z, {
                    id: "scenes.authorizelogin.loading.rejected.content",
                    defaultMessage:
                      "Please contact our support team if you have any questions or concerns.",
                  })
                : t.link_expired
                ? i.createElement(r.Z, {
                    id: "scenes.login._device_verification_expired.copy",
                    defaultMessage:
                      "The device approval link has expired, please try again.",
                  })
                : i.createElement(r.Z, {
                    id: "scenes.authorizelogin.error.msg",
                    defaultMessage: "Error: {error}",
                    values: { error: t },
                  })
            )
          );
        },
        W = x.ZP.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
`,
        template_loading = () =>
          i.createElement(
            W,
            null,
            i.createElement(d.nZ, { width: "40px", height: "40px" }),
            i.createElement(
              d.xv,
              { size: "16px", weight: 400, style: { marginTop: "24px" } },
              i.createElement(r.Z, {
                id: "scenes.login.verify",
                defaultMessage:
                  "We're verifying your login attempt. Please wait...",
              })
            )
          );
      var q = n("./src/services/styles/index.ts");
      x.ZP.div`
  width: 100%;
  text-align: left;
  ${q.BC.mobile`
  text-align: center;`}
`;
      const J = x.ZP.div`
  margin-top: 20px;
`,
        U = x.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  ${q.BC.mobile`
  justify-content: center;`}
`,
        H = x.ZP.div`
  margin-top: 10px;
`,
        G = x.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0px;
  align-items: center;
  margin-top: 5px;
  ${q.BC.mobile` 
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
`}
`,
        Y = x.ZP.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`,
        $ = (0, x.ZP)(d.xv)`
  visibility: visible;
  ${q.BC.mobile` 
  visibility: hidden;
`}
`,
        K = x.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
  > div:nth-child(2) {
    margin: 0px 5px;
  }
  ${q.BC.mobile` 
  flex-direction: column;
`}
`,
        Q = x.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,
        X = (0, x.ZP)(d.zx)`
  margin: 8px;
  ${q.BC.mobile` 
  margin: 0;
`}
`,
        ee = x.ZP.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
`,
        template_success = (e) => {
          const { approver: t, requester: n } = e;
          return e.deviceAuthorized
            ? i.createElement(
                ee,
                null,
                i.createElement(d.JO, {
                  color: "success",
                  name: "checkmark-circle-filled",
                  size: "40px",
                }),
                i.createElement(
                  d.xv,
                  {
                    size: "20px",
                    weight: 600,
                    color: "black",
                    style: { marginTop: "8px" },
                  },
                  i.createElement(r.Z, {
                    id: "scenes.login.device_verified",
                    defaultMessage: "Your device is verified!",
                  })
                ),
                i.createElement(
                  d.xv,
                  {
                    color: "grey900",
                    style: { marginTop: "8px" },
                    size: "16px",
                    weight: 500,
                  },
                  i.createElement(r.Z, {
                    id: "scenes.login.device_verified.copy",
                    defaultMessage:
                      "Return to previous browser to continue logging in.",
                  })
                )
              )
            : i.createElement(
                i.Fragment,
                null,
                i.createElement(
                  Q,
                  null,
                  i.createElement(d.Ee, {
                    name: "blockchain-icon",
                    width: "40px",
                    height: "40px",
                  }),
                  i.createElement(
                    d.xv,
                    {
                      size: "20px",
                      weight: 600,
                      color: "grey900",
                      style: { marginTop: "24px" },
                    },
                    i.createElement(r.Z, {
                      id: "copy.verifyyourdevice",
                      defaultMessage: "Verify Your Device",
                    })
                  ),
                  i.createElement(
                    d.xv,
                    {
                      color: "grey700",
                      style: { marginTop: "8px" },
                      size: "16px",
                      weight: 500,
                    },
                    i.createElement(r.Z, {
                      id: "scenes.login.verify_device.header",
                      defaultMessage:
                        "We noticed a login attempt recently from a different browser or device. If this was you, verify the login device.",
                    })
                  )
                ),
                i.createElement(
                  J,
                  null,
                  i.createElement(
                    U,
                    null,
                    i.createElement(
                      d.xv,
                      { size: "16px", weight: 500, color: "success" },
                      i.createElement(r.Z, {
                        id: "scenes.authorizelogin.yourdevice",
                        defaultMessage: "Your Device",
                      })
                    ),
                    " ",
                    i.createElement(
                      d.xv,
                      { size: "16px", weight: 500, color: "grey700" },
                      i.createElement(r.Z, {
                        id: "scenes.authorizelogin.vs",
                        defaultMessage: "vs.",
                      })
                    ),
                    " ",
                    i.createElement(
                      d.xv,
                      { size: "16px", weight: 500, color: "error" },
                      i.createElement(r.Z, {
                        id: "scenes.authorizelogin.requestingdevice",
                        defaultMessage: "Requesting Device",
                      })
                    )
                  ),
                  i.createElement(
                    H,
                    null,
                    i.createElement(
                      G,
                      null,
                      i.createElement(
                        Y,
                        null,
                        t.browser === n.browser
                          ? i.createElement(d.JO, {
                              name: "checkmark-circle-filled",
                              color: "success",
                              size: "16px",
                            })
                          : i.createElement(d.JO, {
                              name: "close-circle",
                              color: "error",
                              size: "20px",
                              style: {
                                marginLeft: "-2px",
                                marginRight: "-2px",
                              },
                            }),
                        " ",
                        i.createElement(
                          d.xv,
                          { size: "14px", style: { paddingLeft: "6px" } },
                          i.createElement(r.Z, {
                            id: "scenes.authorizelogin.browser",
                            defaultMessage: "Browser: ",
                          })
                        )
                      ),
                      i.createElement(
                        d.jL,
                        { type: "success", inline: !0 },
                        t.browser
                      ),
                      t.browser !== n.browser &&
                        i.createElement(
                          d.jL,
                          { type: "warning", inline: !0 },
                          n.browser
                        )
                    ),
                    i.createElement(
                      G,
                      null,
                      i.createElement(
                        Y,
                        null,
                        t.ip_address === n.ip_address
                          ? i.createElement(d.JO, {
                              name: "checkmark-circle-filled",
                              color: "success",
                              size: "16px",
                            })
                          : i.createElement(d.JO, {
                              name: "close-circle",
                              color: "error",
                              size: "20px",
                              style: {
                                marginLeft: "-2px",
                                marginRight: "-2px",
                              },
                            }),
                        " ",
                        i.createElement(
                          d.xv,
                          { size: "14px", style: { paddingLeft: "6px" } },
                          i.createElement(r.Z, {
                            id: "scenes.authorizelogin.ipaddress",
                            defaultMessage: "IP Address: ",
                          })
                        )
                      ),
                      i.createElement(
                        d.jL,
                        { type: "success", inline: !0 },
                        t.ip_address
                      ),
                      t.ip_address !== n.ip_address &&
                        i.createElement(
                          d.jL,
                          { type: "warning", inline: !0 },
                          n.ip_address
                        )
                    ),
                    i.createElement(
                      G,
                      null,
                      i.createElement(
                        Y,
                        null,
                        t.country_name === n.country_name
                          ? i.createElement(d.JO, {
                              name: "checkmark-circle-filled",
                              color: "success",
                              size: "16px",
                            })
                          : i.createElement(d.JO, {
                              name: "close-circle",
                              color: "error",
                              size: "20px",
                              style: {
                                marginLeft: "-2px",
                                marginRight: "-2px",
                              },
                            }),
                        " ",
                        i.createElement(
                          d.xv,
                          { size: "14px", style: { paddingLeft: "6px" } },
                          i.createElement(r.Z, {
                            id: "scenes.authorizelogin.country",
                            defaultMessage: "Country of Origin: ",
                          })
                        )
                      ),
                      i.createElement(
                        d.jL,
                        { type: "success", inline: !0 },
                        t.country_name
                      ),
                      t.country_name !== n.country_name &&
                        i.createElement(
                          d.jL,
                          { type: "warning", inline: !0 },
                          n.country_name
                        )
                    )
                  )
                ),
                i.createElement(
                  K,
                  null,
                  i.createElement(
                    X,
                    {
                      "data-e2e": "approveLogin",
                      nature: "warning",
                      onClick: () => e.authActions.authorizeVerifyDevice(!0),
                    },
                    i.createElement(r.Z, {
                      id: "modals.mobilenumberverify.verify",
                      defaultMessage: "Verify",
                    })
                  ),
                  i.createElement(
                    $,
                    { size: "12px", weight: 400 },
                    i.createElement(r.Z, {
                      id: "copy.or",
                      defaultMessage: "or",
                    })
                  ),
                  i.createElement(
                    X,
                    {
                      "data-e2e": "rejectLogin",
                      nature: "primary",
                      onClick: () => e.authActions.authorizeVerifyDevice(!1),
                    },
                    i.createElement(r.Z, {
                      id: "scenes.authorizelogin.reject",
                      defaultMessage: "Reject",
                    })
                  )
                )
              );
        };
      class te extends i.PureComponent {
        render() {
          return this.props.data.cata({
            Failure: (e) => i.createElement(template_error, { error: e }),
            Loading: () => i.createElement(template_loading, null),
            NotAsked: () => i.createElement(template_loading, null),
            Success: (e) =>
              i.createElement(
                template_success,
                Object.assign({}, this.props, e)
              ),
          });
        }
      }
      const ne = (0, a.connect)((e) => ({
        data: u.wl.I8.getAuthorizeVerifyDevice(e),
      }))(te);
      var ie = n("../../node_modules/console-browserify/index.js");
      class re extends i.PureComponent {
        constructor(e) {
          super(e),
            (this.setStep = (e) => {
              let t = "0";
              e === p.nL.ENTER_EMAIL_GUID
                ? (t = "0")
                : e === p.nL.ENTER_PASSWORD && (t = "1"),
                localStorage.setItem("userActiveStatus", t),
                this.props.formActions.change(w, "step", e);
            }),
            (this.initCaptcha = (e) => {
              window.grecaptcha &&
                window.grecaptcha.enterprise &&
                window.grecaptcha.enterprise.ready(() => {
                  window.grecaptcha.enterprise
                    .execute(window.CAPTCHA_KEY, { action: "LOGIN" })
                    .then((t) => {
                      ie.log("Captcha success"),
                        this.setState({ captchaToken: t }),
                        e && e(t);
                    })
                    .catch((e) => {
                      ie.error("Captcha error: ", e);
                    });
                });
            }),
            (this.handleSubmit = (e) => {
              if ((e.preventDefault(), !this.state.captchaToken))
                return this.initCaptcha(this.continueLoginProcess);
              this.continueLoginProcess();
            }),
            (this.handleSubmit2 = () => {
              if (!this.state.captchaToken)
                return this.initCaptcha(this.continueLoginProcess);
              this.continueLoginProcess();
            }),
            (this.handleSmsResend = () => {
              var e;
              this.props.authActions.resendSmsCode({
                email:
                  null === (e = this.props.formValues) || void 0 === e
                    ? void 0
                    : e.email,
                guid: this.props.guid,
              });
            }),
            (this.continueLoginProcess = () => {
              const {
                authActions: e,
                code: t,
                formActions: n,
                formValues: i,
                guid: r,
                guidOrEmail: a,
                password: l,
              } = this.props;
              let s = t;
              if (
                (s && 1 !== this.props.authType && (s = s.toUpperCase()),
                i.step === p.nL.ENTER_EMAIL_GUID || i.step === p.nL.CHECK_EMAIL)
              ) {
                (0, h.kQ)(a)
                  ? (localStorage.setItem("userWalletAddress", a),
                    n.change(w, "guid", a),
                    n.change(w, "step", p.nL.ENTER_PASSWORD))
                  : (n.change(w, "email", a),
                    e.triggerWalletMagicLink({
                      captchaToken: this.state.captchaToken,
                      email: a,
                    }),
                    this.initCaptcha());
                const t = (0, h.kQ)(a) ? "WALLET_ID" : "EMAIL";
                e.loginIdEntered(t);
              } else
                localStorage.setItem("k", btoa(l)),
                  e.login({
                    code: s,
                    guid: r,
                    mobileLogin: null,
                    password: l,
                    sharedKey: null,
                  });
            }),
            (this.loginWithMobileClicked = () => {
              this.props.authActions.loginMethodSelected("SECURE_CHANNEL"),
                this.setStep(p.nL.VERIFICATION_MOBILE);
            }),
            (this.state = { captchaToken: void 0 });
        }
        componentDidMount() {
          this.props.authActions.initializeLogin(), this.initCaptcha();
        }
        render() {
          const { data: e, formValues: t } = this.props,
            { step: n } = t || p.nL.ENTER_EMAIL_GUID,
            { busy: a, error: l } = e.cata({
              Failure: (e) => ({ busy: !1, error: e }),
              Loading: () => i.createElement(E.Z, null),
              NotAsked: () => ({ busy: !1, error: null }),
              Success: () => ({ busy: !1, error: null }),
            }),
            s = {
              busy: a,
              handleSmsResend: this.handleSmsResend,
              loginError: l,
            };
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              d.xv,
              {
                color: "white",
                size: "24px",
                weight: 600,
                style: { marginBottom: "24px" },
              },
              n === p.nL.ENTER_PASSWORD &&
                i.createElement(r.Z, {
                  id: "scenes.login.authorize",
                  defaultMessage: "Authorize login",
                }),
              n === p.nL.ENTER_EMAIL_GUID &&
                i.createElement(r.Z, {
                  id: "scenes.login.welcome",
                  defaultMessage: "Welcome back!",
                })
            ),
            n === p.nL.VERIFICATION_MOBILE &&
              i.createElement(
                d.xv,
                {
                  color: "grey400",
                  weight: 500,
                  style: { marginBottom: "32px" },
                },
                i.createElement(r.Z, {
                  id: "scenes.login.approve",
                  defaultMessage: "Approve your login",
                })
              ),
            n === p.nL.ENTER_PASSWORD &&
              i.createElement(
                d.xv,
                {
                  color: "grey400",
                  weight: 500,
                  style: { marginBottom: "32px" },
                },
                i.createElement(r.Z, {
                  id: "scenes.login.enter_password_login",
                  defaultMessage: "Enter your password to login",
                })
              ),
            n === p.nL.ENTER_EMAIL_GUID &&
              i.createElement(
                d.xv,
                {
                  color: "grey400",
                  weight: 500,
                  style: { marginBottom: "32px" },
                },
                i.createElement(r.Z, {
                  id: "scenes.login.enter_email_header",
                  defaultMessage: "Enter Your Wallet ID",
                })
              ),
            i.createElement(
              g.i,
              null,
              i.createElement(
                m.l0,
                { onSubmit: this.handleSubmit },
                (() => {
                  switch (n) {
                    case p.nL.ENTER_EMAIL_GUID:
                      return i.createElement(
                        Login_EnterEmailOrGuid,
                        Object.assign({}, this.props, s, {
                          setStep: this.setStep,
                          initCaptcha: this.initCaptcha,
                          handleSubmit2: this.handleSubmit2,
                        })
                      );
                    case p.nL.ENTER_PASSWORD:
                      return i.createElement(
                        Login_EnterPassword,
                        Object.assign({}, this.props, s, {
                          setStep: this.setStep,
                          initCaptcha: this.initCaptcha,
                          handleSubmit2: this.handleSubmit2,
                        })
                      );
                    case p.nL.CHECK_EMAIL:
                      return i.createElement(
                        Login_CheckEmail,
                        Object.assign({}, this.props, s, {
                          setStep: this.setStep,
                          initCaptcha: this.initCaptcha,
                        })
                      );
                    case p.nL.VERIFY_MAGIC_LINK:
                      return i.createElement(
                        ne,
                        Object.assign({}, this.props, s, {
                          setStep: this.setStep,
                        })
                      );
                    case p.nL.VERIFICATION_MOBILE:
                      return i.createElement(
                        B,
                        Object.assign({}, this.props, s, {
                          setStep: this.setStep,
                        })
                      );
                    default:
                      return null;
                  }
                })()
              )
            ),
            n === p.nL.ENTER_EMAIL_GUID && i.createElement(i.Fragment, null)
          );
        }
      }
      const ae = (0, a.connect)(
          (e) => ({
            authType: u.wl.I8.getAuthType(e),
            code: (0, s.Z)(w)(e, "code"),
            data: u.wl.I8.getLogin(e),
            formMeta: (0, o.Z)(w)(e),
            formValues: u.wl.cr.getFormValues(w)(e),
            guid: (0, s.Z)(w)(e, "guid"),
            guidOrEmail: (0, s.Z)(w)(e, "guidOrEmail"),
            initialValues: { step: p.nL.ENTER_EMAIL_GUID },
            password: (0, s.Z)(w)(e, "password"),
          }),
          (e) => ({
            authActions: (0, l.bindActionCreators)(u.Nw.I8, e),
            cacheActions: (0, l.bindActionCreators)(u.Nw.Fs, e),
            formActions: (0, l.bindActionCreators)(u.Nw.cr, e),
          })
        ),
        le = (0, l.compose)((0, c.Z)({ form: w }), ae)(re);
    },
    "./src/services/browser/index.tsx": (e, t, n) => {
      n.d(t, { T: () => isBrowserSupported, F: () => isBrowserSafari });
      var i = n("../../node_modules/bowser/es5.js"),
        r = n.n(i);
      const isBrowserSupported = () =>
          r()
            .getParser(window.navigator.userAgent)
            .satisfies({
              chrome: ">60",
              chromium: ">60",
              edge: ">17",
              firefox: ">60",
              opera: ">50",
              safari: ">11",
              vivaldi: ">3",
            }),
        isBrowserSafari = () =>
          r()
            .getParser(window.navigator.userAgent)
            .satisfies({ safari: ">11" });
    },
    "../blockchain-info-components/src/Images/img/qr-logo.svg": (e, t, n) => {
      e.exports = n.p + "img/qr-logo.svg?bea9aa272d2faeff8c2b";
    },
  },
]);
