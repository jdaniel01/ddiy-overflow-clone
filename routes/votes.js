const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require("../db/models");
const { User, Question, Answer, Vote } = db;
const { csrfProtection, asyncHandler } = require("./utils");
const { loginUser, logoutUser, requireAuth } = require("../auth");

router.get(
  "/questions/:id/answer/:answerId/upvote",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const answerId = req.params.answerId;
    let ownerId;
    if (!req.session.auth) {
      res.render("user-login", {
        title: "Must be logged in to vote",
      });
    }
    ownerId = req.session.auth.userId;
    const questionId = parseInt(req.params.id, 10);
    const question = await Question.findByPk(questionId, {
      include: [User, Answer],
    });
    const vote = await Vote.findOne({
      where: {
        answerId,
        ownerId,
      },
    });
    let upVote;
    console.log("This is value of vote", vote);
    console.log("This is value of vote", answerId);
    console.log("This is value of vote", ownerId);
    if (!vote) {
      upVote = Vote.build({
        ownerId,
        answerId,
        value: true,
      });
      await upVote.save();
    } else {
      await vote.destroy();
    }

    const answers = await Answer.findAll({
      where: {
        questionId: question.id,
      },
      include: [User, Vote],
    });
    console.log("Here we are***********");
    console.log(answers[0]);
    res.render("single-question", {
      vote,
      upVote,
      question,
      answers,
      csrfToken: req.csrfToken(),
    });
  })
);

router.get(
  "/questions/:id/answer/:answerId/downvote",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const answerId = req.params.answerId;
    let ownerId;
    if (!req.session.auth) {
      res.render("user-login", {
        title: "Must be logged in to vote",
      });
    }
    ownerId = req.session.auth.userId;
    const questionId = parseInt(req.params.id, 10);
    const question = await Question.findByPk(questionId, {
      include: [User, Answer],
    });
    const vote = await Vote.findOne({
      where: {
        answerId,
        ownerId,
      },
    });
    let downVote;

    if (!vote) {
      downVote = Vote.build({
        userId,
        answerId,
        value: false,
      });
      await downVote.save();
    } else {
      await vote.destroy();
    }

    // const votes = await Vote.findAll({
    //     where: {
    //         answerId
    //     }
    // })
    const answers = await Answer.findAll({
      where: {
        questionId: question.id,
      },
      include: [User, Vote],
    });

    res.render("single-question", {
      vote,
      downVote,
      question,
      answers,
      csrfToken: req.csrfToken(),
    });
  })
);

module.exports = router;
