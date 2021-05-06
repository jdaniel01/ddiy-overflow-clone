var express = require("express");
var router = express.Router();
const { User } = require("../db/models");
const { check, validationResult } = require("express-validator");
const { asyncHandler, csrfProtection } = require("./utils");
const bcrypt = require("bcryptjs");
const { loginUser, logoutUser } = require("../auth");
const db = require("../db/models");

router.get("/", async (req, res) => {
  const user = await db.User.findByPk(3);
  loginUser(req, res, user);
  res.redirect(req.protocol + "://" + req.get("host"));
});

module.exports = router;
