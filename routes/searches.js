const express = require('express');
const router = express.Router();
const { User, Question, Answer } = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { Op } = require('sequelize');

const makeRegex = (array) => {
    let regExps = ""
    for (let i = 0; i < array.length; i++) {
        regExps += `(${array[i]})`
    }
    return regExps;
}

router.post('/searches', asyncHandler(async (req, res) => {
    const { filter } = req.body;
    let filters = filter.split(' ');
    res.send(filters);
    let results = [];
    let searchRegex;
    let searchRegexArray;

    if (filters.length) {
        if (filters.length === 1 && (filters[0] !== "")) {
            searchRegex = await new RegExp(filters[0])
        } else if (filters.length > 1 && filters[0] !== "") {
            searchRegex = await new RegExp(makeRegex(filters));
        }
    }

    if (searchRegex.toString()) {
        res.send(searchRegex);
        let questions = await Question.findAll({
            where: {
                [Op.or]: [
                    { 'title': { [Op.startsWith]: `searchRegex` } },
                    { 'title': { [Op.endsWith]: searchRegex } },
                    { 'title': { [Op.substring]: searchRegex } },
                    { 'title': { [Op.iLike]: searchRegex } },
                    { 'query': { [Op.startsWith]: searchRegex } },
                    { 'query': { [Op.endsWith]: searchRegex } },
                    { 'query': { [Op.substring]: searchRegex } },
                    { 'query': { [Op.iLike]: searchRegex } }
                ]
            }
        });
        if (questions.length) {
            results.push(...questions)
        }
        let answers = await Answer.findAll({
            where: {
                [Op.or]: [
                    { answer: { [Op.startsWith]: searchRegex } },
                    { answer: { [Op.endsWith]: searchRegex } },
                    { answer: { [Op.substring]: searchRegex } },
                    { answer: { [Op.iLike]: searchRegex } },
                    { content: { [Op.startsWith]: searchRegex } },
                    { content: { [Op.endsWith]: searchRegex } },
                    { content: { [Op.substring]: searchRegex } },
                    { content: { [Op.iLike]: searchRegex } }
                ]
            }
        });
        if (answers.length) {
            results.push(...answers)
        }
        // res.render(answers);//('searches', {title: "Search Results", results});
        console.log(results);
        res.send(results);
    }



}));


module.exports = router;
