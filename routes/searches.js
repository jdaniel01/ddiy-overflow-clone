const express = require("express");
const router = express.Router();
const { User, Question, Answer } = require("../db/models");
const { asyncHandler } = require("./utils");
const { Op } = require("sequelize");

router.get(
  "/:filter",
  asyncHandler(async (req, res) => {
    const filter = req.params.filter;
    // TODO need to change filter into a new regex with the correct symbols (ie parens, brace, etc.)
    console.log(filter);
    let results = [];

    if (filter.length) {
      let questions = await Question.findAll({
        where: {
          [Op.or]: [
            //TODO implement new regext with query.
            { title: { [Op.substring]: '%' + filter + '%' } },
            { title: { [Op.iLike]: filter } },
            { query: { [Op.substring]: '%' + filter + '%' } },
            { query: { [Op.iLike]: filter } },
          ],
        },
      });
      if (questions.length) {
        results.push(...questions);
      }
      let answers = await Answer.findAll({
        where: {
          [Op.or]: [
            { answer: { [Op.substring]: '%' + filter + '%' } },
            { answer: { [Op.iLike]: '%' + filter + '%' } },
            { content: { [Op.substring]: '%' + filter + '%' } },
            { content: { [Op.iLike]: '%' + filter + '%' } },
          ],
        },
      });
      if (answers.length) {
        results.push(...answers);
      }
      if (results.length) {
        res.render("searches", { title: `Search Results for "${filter}"`, results });
      } else {
        res.render("searches", {
          title: "Search Results",
          message: `Your search for "${filter}" yeilded no results.`
        })
      }
    } else {
      res.render("searches", {
        title: "Search Results",
        errors: ["Please provide search criteria."],
      });
    }
  })
);

module.exports = router;
