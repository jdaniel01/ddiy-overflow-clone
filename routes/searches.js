const express = require('express');
const router = express.Router();
const { User, Question, Answer } = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const {Op} = require('sequelize');

function includedResults(searchKeys, array) {
    let results = { users: [], questions: [], answers: [] };

    searchKeys.forEach(searchKey => {
        array.forEach(obj => {
            if (obj.name) {
                if (obj.name.includes(searchKey)) {
                    results.users.push(obj.name);
                }
            }
            else if (obj.title) {
                if (obj.title.includes(searchKey)) {
                    results.push(obj.title);
                }
                if (obj.query.includes(searchKey)) {
                    results.push(obj.query);
                }
            }
            else if (obj.answer) {
                if (obj.answer.includes(searchKey)) {
                    results.push(obj.answer);
                }
                if (obj.content.includes(searchKey)) {
                    results.push(obj.content);
                }
            }

        })
    })
    return results;
}

router.post('/searches', asyncHandler(async (req, res) => {
    const { filter } = req.body
    let filters = filter.split(' ' || ', ' || ",");
    let results = { beginning: [], middle: [], end: [] }
    let searchWords = [];
    if (filters.length) {
        if (filters.length === 1 && (filters[0] !== "")) {
            searchWords = filters;
        } else if (filters[0] !== "") {
            let i = 0;
            while (searchWords.length < filters.length) {
                searchWords.push(filters[i])
                i++;
            }
            i = 0;
        }
    }
    if (!searchWords.length) {
        res.render('searches', { title: "Search Results", errors: ["You must provide search criteria."] })
    } else {
        searchWords.forEach(async word => {

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
                    ], include: {User}
                }
            });

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
                    ], include: {User, Question}
                }
            });

            //     let answers = await Answer.findAll();
            //     console.log(users);
            res.render('searches', {questions, answers});
        })
        // let tables = [questions, users, answers];
        // console.log(tables)
        // let results = [];
        // tables.forEach(table => {
        //     results.push(...includedResults(searchWords, table));
        // })
        // console.log(results[0]);
    }
}));


module.exports = router;
