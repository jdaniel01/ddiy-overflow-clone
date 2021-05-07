const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require("../db/models");
const { User, Question, Answer, Vote } = db;
const { csrfProtection, asyncHandler } = require("./utils");
const { loginUser, logoutUser, requireAuth } = require("../auth");

router.post('/questions/:id/answer/answerId', csrfProtection, asyncHandler(async (req, res) => {
    const answerId = req.params.answerId;
    const userId = req.session.auth.userId;
    const vote = await Vote.findOne({
        where: answerId, userId
    })
    let upAndDownVote;

    if (vote) {
        upAndDownVote = Vote.build({
            userId,
            answerId
        });
        await upAndDownVote.save()
    }
    else {
        await vote.destroy();
    }

    const votes = await Vote.findAll({
        where: {
            answerId
        }
    })

    res.render('votes', {
        vote,
        votes,
        upAndDownVote,
        csrfToken: req.csrfToken()
    })
}))




module.exports = router;
