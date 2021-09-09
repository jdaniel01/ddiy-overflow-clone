const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require("../db/models");
const { User, Question, Answer, Vote } = db;
const { csrfProtection, asyncHandler } = require("./utils");
const { loginUser, logoutUser, requireAuth } = require("../auth");
// const { voteUp, voteDown } = require("../public/javascripts/votes")

const answerValidators = [
  check("answer")
    .exists({ checkFalsy: true })
    .withMessage("Please enter a value for the answers"),
];

router.post(
  "/questions/:id/answers",
  answerValidators,
  asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id, 10);
    const { answer } = req.body;
    let answerForQuestion;
    if (!req.session.auth) {
      res.render("user-login", {
        title: "Must be logged in to post answer",
      });
    } else {
      answerForQuestion = Answer.build({
        ownerId: req.session.auth.userId,
        answer,
        questionId,
      });
    }
    const validatorErrors = validationResult(req);
    if (validatorErrors.isEmpty()) {
      await answerForQuestion.save();
      res.redirect(`/questions/${questionId}`);
    }
    const errors = validatorErrors.array().map((error) => error.msg);
    const question = await Question.findByPk(questionId, {
      include: [User, Answer],
    });
    const answers = await Answer.findAll({
      where: {
        questionId: question.id,
      },
      include: [User, Vote],
    });

    res.render("single-question", {
      title: question.title,
      errors,
      answers,
      question,
      // voteUp,
      // voteDown,
      answerForQuestion,
      isOwner,
    });
  })
);

router.post(
  "/questions/:id/answers/delete",
  requireAuth,
  asyncHandler(async (req, res) => {
    const answerId = parseInt(req.params.id, 10);
    const answer = await Answer.findByPk(answerId);

    await answer.destroy();
    // res.redirect(`/questions/${id}`);
    res.redirect("back");
  })
);

router.post(
  "/questions/:id/answers/edit",
  requireAuth,
  asyncHandler(async (req, res) => {
    const answerId = parseInt(req.params.id, 10);
    const answer = await Answer.findByPk(answerId);
    await answer.update({ answer: req.body.answer });
    await answer.save();
    res.redirect(`/questions/${answer.questionId}`);
  })
);

router.get(
  "/questions/:id/answers/edit",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const answerId = parseInt(req.params.id, 10);
    const answer = await Answer.findByPk(answerId);
    res.render("edit-answer", {
      answer: answer.answer,
      answer,
      csrfToken: req.csrfToken(),
    });
  })
);
module.exports = router;

// router.post('/questions/:id/answers/edit', requireAuth, asyncHandler(async (req, res) => {
//     const answerId = parseInt(req.params.id, 10);
//     const answer = await Answer.findByPk(answerId);
//     const questionId = parseInt(req.params.id, 10);
//     const question = await Question.findByPk(questionId)
//     await answer.update({ answer: req.body.answer });
//     await answer.save();
//     res.redirect(`/questions/${question}/answers/edit`);
// }));
