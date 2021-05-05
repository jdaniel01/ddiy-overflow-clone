const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../db/models')
const { User, Question, Answer, Vote } = db
const { csrfProtection, asyncHandler } = require('./utils');
const { loginUser, logoutUser, requireAuth } = require('../auth');

const questionValidators = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for the question title')
        .isLength({ max: 150 })
        .withMessage('Title must not be more than 50 characters long'),
    check('query')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for the content of the question')
]

router.get('/questions', csrfProtection, (req, res) => {
    res.render('new-question', {
        csrfToken: req.csrfToken(),
    })
})

router.post('/questions', csrfProtection, questionValidators , asyncHandler(async (req, res) => {
    const { title, query } = req.body;
    const question = Question.build({
        ownerId: req.session.auth.userId,
        title,
        query,
    });
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        await question.save();
        res.redirect(`/questions/${question.id}`)
    }
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render("new-question", {
        title,
        query,
        question,
        errors,
        csrfToken: req.csrfToken(),
    });
}));

router.get('/questions/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id, 10);
    const question = await Question.findByPk(questionId, {
        include: [User, Answer]
    });
    
    const answers = await Answer.findAll({
        where: {
            questionId: question.id
        },
        include: [User, Vote]
    });

    const isUserLoggedIn = (req.session.auth.userId === question.ownerId) ? true : false
    const isOwner = (req.session.auth.userId === question.ownerId) ? true : false



    res.render('single-question', {
        title: question.title,
        answers,
        question,
        isUserLoggedIn,
        isOwner,
        csrfToken: req.csrfToken(),
    });
}));

router.post('/questions/:id/edit', requireAuth, asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id, 10);
    const question = await Question.findByPk(questionId);
    await question.update({ title: req.body.title, query: req.body.query });
    await question.save();
    console.log('Hey helloooooo *****')
    // res.render('edit-question', {
    //     question
    // })
    res.redirect(`/questions/${questionId}`);
}));

router.get('/questions/:id/edit', csrfProtection, asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id, 10);
    const question = await Question.findByPk(questionId);
    console.log(question)
    const isUserLoggedIn = (req.session.auth.userId === question.ownerId) ? true : false
    res.render('edit-question', {
        title: question.title,
        isUserLoggedIn,
        question,
        csrfToken: req.csrfToken(),
    })
}))

// router.get('/questions/:id/delete', asyncHandler(async (req, res) => {
//     const question = await Question.findByPk(req.params.id);
//     if (req.session.auth.userId === question.ownerId) {
//         await question.destroy();
//         res.redirect('/');
//     }
//     else {
//         alert('This is not working')
//     }

// }))
router.post('/questions/:id/delete', requireAuth, asyncHandler(async (req, res) => {

    const id = parseInt(req.params.id, 10)
    const question = await Question.findByPk(id);

    await question.destroy();
    res.redirect('/');
    

}));

module.exports = router;
