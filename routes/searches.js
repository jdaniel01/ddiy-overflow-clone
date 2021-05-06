const express = require('express');
const router = express.Router();
const {User, Question, Answer} = require('../db/models');
const {csrfProtection, asyncHandler} = require('./utils');

function includedResults(searchElement, array) {
    let results = [];
    array.forEach(obj => {
        for (let key in obj) {
            if(key.value.includes(searchElement)){
                if (obj.name){
                    const userName = obj.name;
                }
                else if (obj.title){
                    const title = obj.title;
                    const query = obj.query;
                }
                else if (obj.answer){
                    const answer = obj.answer;
                    const content = obj.content;
                }

                if(userName && userName.includes(searchElement)) {
                    results.push(userName);
                }
            }
        }
    })
    return results;
}

router.post('/searches', asyncHandler(async (req, res)=> {
    const {filter} = req.body
    let filters = filter.split(' ' || ', ' || ",");
    let results = {beginning: [], middle: [], end: []}
    let searchWords = [];
    if (filters.length){
        if (filters.length === 1 && (filters[0] !== "")){
            searchWords = filters;
        } else if (filters[0] !== ""){
            let i = 0;
            while (searchWords.length < filters.length){
                searchWords.push(filters[i])
                i++;
            }
            i=0;
        }
    }
    if(!searchWords.length){
        res.render('searches', {title: "Search Results", errors: ["You must provide search criteria."]})
    }else{

        res.send(searchWords);


    }



}));


module.exports = router;
