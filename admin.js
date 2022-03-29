const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");
// const websockets = require('./websockets');

const app = express();

const fs = require("fs");
app.get(
  "/.well-known/acme-challenge/kl1VnngH5yqSdCBD4By-AiV3uSLCspupBtfgDocPAT4",
  (req, res) => {
    res.send(
      fs.readFileSync(
        "/root/.well-known/acme-challenge/kl1VnngH5yqSdCBD4By-AiV3uSLCspupBtfgDocPAT4",
        "utf8"
      )
    );
  }
);

// Connect Database
connectDB();
// Configuration
const PORT = process.env.PORT || "3001";
const HOST = process.env.HOST || "localhost";

// Init Middleware
app.use(express.json());

app.use(cors());
// Define Route
app.use("/admin/api/users", require("./routes/api/users"));
app.use("/admin/api/proxies", require("./routes/api/proxies"));
app.use("/admin/api/auth", require("./routes/api/auth"));
app.use("/admin/api/settings", require("./routes/api/settings"));
app.use("/admin/api/notification", require("./routes/api/notification"));

app.use(express.static("admin/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "admin", "build", "index.html"));
});

// const server = websockets(app);
// server.listen(PORT, HOST, () => console.log(`Server started on port ${PORT}`));
app.listen(PORT, HOST, () =>
  console.log(PORT, `Server started on port ${PORT}`)
);
