const express = require('express');
const router = express.Router();
const { User, Question, Answer } = require('../db/models');
const { asyncHandler } = require('./utils');
const { Op } = require('sequelize');

router.get('/:filter', asyncHandler(async (req, res) => {
    const filter = req.params.filter
    console.log(filter);
    let results = [];

    if (filter.length) {
        let questions = await Question.findAll({
            where: {
                [Op.or]: [
                    { title: { [Op.startsWith]: filter } },
                    { title: { [Op.endsWith]: filter } },
                    { title: { [Op.substring]: filter } },
                    { title: { [Op.iLike]: filter } },
                    { query: { [Op.startsWith]: filter } },
                    { query: { [Op.endsWith]: filter } },
                    { query: { [Op.substring]: filter } },
                    { query: { [Op.iLike]: filter } }
                ]
            }
        });
        if (questions.length) {
            results.push(...questions)
        }
        let answers = await Answer.findAll({
            where: {
                [Op.or]: [
                    { answer: { [Op.startsWith]: filter } },
                    { answer: { [Op.endsWith]: filter } },
                    { answer: { [Op.substring]: filter } },
                    { answer: { [Op.iLike]: filter } },
                    { content: { [Op.startsWith]: filter } },
                    { content: { [Op.endsWith]: filter } },
                    { content: { [Op.substring]: filter } },
                    { content: { [Op.iLike]: filter } }
                ]
            }
        });
        if (answers.length) {
            results.push(...answers)
        }
        res.render('searches', {title: "Search Results", results});
    } else {
        res.render('searches', {title: "Search Results", errors: ["Please provide search criteria."]})
    }



}));


module.exports = router;
