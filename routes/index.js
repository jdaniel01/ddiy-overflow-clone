var express = require("express");
var router = express.Router();
const { requireAuth } = require("../auth");
const db = require("../db/models");
const { Op } = require("sequelize");

/* GET home page. */
//really long function to get all filters
const getFilters = async (req, res, next) => {
  //newest filter
  let newest = await db.Question.findAll({
    order: [["updatedAt", "DESC"]],
    limit: 10,
  });
  //oldest
  let oldest = await db.Question.findAll({
    order: [["updatedAt", "ASC"]],
    limit: 10,
  });
  //most answers
  //first get all answers
  let mostAnswer = await db.Answer.findAll({});
  //create helper functions to find single question with most answers
  const findMostFrequent = (mostAnswer) => {
    if (!mostAnswer) return;
    let mf = 1;
    let m = 0;
    let item;
    for (let i = 0; i < mostAnswer.length; i++) {
      for (let j = i; j < mostAnswer.length; j++) {
        if (mostAnswer[i].questionId == mostAnswer[j].questionId) m++;
        if (mf < m) {
          mf = m;
          item = mostAnswer[i].questionId;
        }
      }
      m = 0;
    }
    // console.log("inside fmf1 " + item);
    return item;
  };
  //make an array of most answered in order
  const makeMAArr = (fmf, ma) => {
    // console.log("length = " + ma.length);
    let arr = [];
    let mf = true;
    while (mf) {
      mf = fmf(ma);
      if (mf === undefined) continue;
      // console.log(mf);
      arr.push(mf);
      // console.log("after push to arr " + mf);
      // console.log(arr);
      ma = ma.filter((e) => e.questionId !== mf);
      // console.log(ma);
    }
    return arr;
  };
  //initializing array of most answers ids
  let MAArr = makeMAArr(findMostFrequent, mostAnswer);
  //using it to make call to get list
  mostAnswer = await db.Question.findAll({
    where: {
      id: {
        [Op.in]: MAArr,
      },
    },
    limit: 10,
  });
  let filterOptions = [newest, oldest, mostAnswer];
  req.filters = filterOptions;
  //no answers
  //now next
  next();
};

//routers start
router.get("/", getFilters, async (req, res) => {
  // console.log(req.filters[0].length);
  let questions = req.filters;

  res.render("index", { title: "DDIY Overflow", questions });
});

router.get("/testingAuth", requireAuth, (req, res) => {
  res.send("You are logged in buddy");
});
router.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

module.exports = router;
