const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../db/models')
const { User, Question, Answer, } = db
const { csrfProtection, asyncHandler } = require('./utils');
const { loginUser, logoutUser, requireAuth } = require('../auth');

const answerValidators = [
    check('answer')
        .exists({ checkFalsy: true })
        .withMessage( 'Please enter a value for the answers' ),
];

router.post('/questions/:id/answers', answerValidators, asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id, 10);
    const answer = Answer.build({
        ownerId: req.sessions.auth.userId,
        answer,
    });
    const validatorErrors = validationResult(req);
    if (validatorErrors.isEmpty()) {
        await answer.save();
        res.redirect(`/questions/${question.id}`)
    }
    const errors = validatorErrors.array().map((error) => error.msg);
    const question = await Question.findByPk(questionId, {
        include: [User, Answer]
    });
    const answers = await Answer.findAll({
        where: {
            questionId: question.id
        },
        include: [User, Vote]
    });

    const isOwner = (req.session.auth.userId === question.ownerId) ? true : false

    res.render('single-question', {
        title: question.title,
        errors,
        answers,
        question,
        isOwner,
    });
}));




module.exports = router;
