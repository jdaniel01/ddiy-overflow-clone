const express = require('express');
const router = express.Router();
const { User, Question, Answer } = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { Op } = require('sequelize');

router.post('/searches', asyncHandler(async (req, res) => {
    const { filter } = req.body;
    let filters = filter.split(' ' || ', ' || ",");

    let results = [];
    let searchRegex;


    if (filters.length) {
        if (filters.length === 1 && (filters[0] !== "")) {
            searchRegex = new RegExp(filters[0])
        } else if (filters[0] !== "") {
            searchRegex = makeRegex(filters);
        }
    }


    if (!searchWords.length) {
        res.render('searches', { title: "Search Results", errors: ["You must provide search criteria."] })
    } else {

        await searchWords.forEach(async word => {

            let questions = await Question.findAll({
                where: {
                    [Op.or]: [
                        { title: { [Op.startsWith]: word } },
                        { title: { [Op.endsWith]: word } },
                        { title: { [Op.substring]: word } },
                        { title: { [Op.iLike]: word } },
                        { query: { [Op.startsWith]: word } },
                        { query: { [Op.endsWith]: word } },
                        { query: { [Op.substring]: word } },
                        { query: { [Op.iLike]: word } }
                    ]
                }
            });
            if (questions.length) {
                results.push(...questions)
            }
            let answers = await Answer.findAll({
                where: {
                    [Op.or]: [
                        { answer: { [Op.startsWith]: word } },
                        { answer: { [Op.endsWith]: word } },
                        { answer: { [Op.substring]: word } },
                        { answer: { [Op.iLike]: word } },
                        { content: { [Op.startsWith]: word } },
                        { content: { [Op.endsWith]: word } },
                        { content: { [Op.substring]: word } },
                        { content: { [Op.iLike]: word } }
                    ]
                }
            });
            if (answers.length) {
                results.push(...answers)
            }
            // res.render(answers);//('searches', {title: "Search Results", results});
            console.log(results);
            res.send(results);
        })
    }


}));


module.exports = router;
