var express = require("express");
var router = express.Router();
const { requireAuth } = require("../auth");
const db = require("../db/models");
/* GET home page. */
router.get("/", async (req, res) => {
  const filter = req.body.filter;
  if (!filter) {
    filter = {
      order: [["updatedAt", "DESC"]],
      limit: 10,
    };
  }
  const questions = await db.Question.findAll(filter);
  res.render("index", { title: "DDIY Overflow", questions });
});

router.get("/testingAuth", requireAuth, (req, res) => {
  res.send("You are logged in buddy");
});

module.exports = router;
