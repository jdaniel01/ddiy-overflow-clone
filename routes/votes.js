const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require("../db/models");
const { User, Question, Answer, Vote } = db;
const { csrfProtection, asyncHandler } = require("./utils");
const { loginUser, logoutUser, requireAuth } = require("../auth");

router.get('/questions/:id/answer/:answerId/upvote', csrfProtection, asyncHandler(async (req, res) => {
    const answerId = req.params.answerId;
    const ownerId = req.session.auth.userId;
    const questionId = parseInt(req.params.id, 10);
    const question = await Question.findByPk(questionId, {
        include: [User, Answer],
      });
    const vote = await Vote.findOne({
        where: {
            answerId, ownerId
        }
    })
    let upVote;
    if (!vote) {
        upVote = Vote.build({
            ownerId,
            answerId,
            value: true,
        });
        await upVote.save()
    }
    else {
        await vote.destroy();
    }

    const answers = await Answer.findAll({
        where: {
          questionId: question.id,
        },
        include: [User, Vote],
      });

    res.redirect(`/questions/${question.id}`)
    res.render('single-question', {
        vote,
        upVote,
        question,
        answers,
        csrfToken: req.csrfToken()
    })
}))

router.get('/questions/:id/answer/:answerId/downvote', csrfProtection, asyncHandler(async (req, res) => {
    const answerId = req.params.answerId;
    const ownerId = req.session.auth.userId;
    const questionId = parseInt(req.params.id, 10);
    const question = await Question.findByPk(questionId, {
      include: [User, Answer],
    });
    const vote = await Vote.findOne({
        where: {
            answerId, ownerId
        }
    })
    let downVote;

    if (vote) {
        await vote.destroy();
    }
    else {
        if (vote != null) {
            downVote = Vote.build({
                ownerId,
                answerId,
                value: false,
            });
            await downVote.save()
        }
        // else {
        //     res.redirect('back');
        // }
    }
    let userAuth = req.session.auth.userId;
    const isUserLoggedIn = userAuth === question.ownerId ? true : false;

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
    res.redirect(`/questions/${question.id}`)


    res.render('single-question', {
        vote,
        downVote,
        question,
        answers,
        isUserLoggedIn,
        csrfToken: req.csrfToken()
    })
}))


module.exports = router;
