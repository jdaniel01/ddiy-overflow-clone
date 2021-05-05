const fetch = require('node-fetch');

async function createTitleText(num) {
    let res = await fetch(`https://hipsum.co/api/?type=hipster-centric&sentences=${num}`);
    if (res) {
        let titleText = await res.json();
        titleText = JSON.stringify(titleText);
        titleText = await JSON.parse(titleText);
        return titleText[0];
        // let answer = await x.json();
//       answer = JSON.stringify(answer);
//       answer = await JSON.parse(answer);
    }
} 

async function createQueryText(num) {
    // let questions = [];
    let res = await fetch(`https://hipsum.co/api/?type=hipster-centric&paras=${num}`);
    if (res) {
        let queryText = await res.json();
        queryText = JSON.stringify(queryText);
        queryText = await JSON.parse(queryText);
        return queryText[0];
    }
}

async function buildSeedData(num) {
    let questions = [];
    for (let i = 0; i < num; i++) {
        let title = await createTitleText(1);
        title = title + i.toString()+'?';
        let query = await createQueryText(3);
        let ownerId = Math.floor(Math.random() * 10)+1;
        let createdAt = (new Date()).toISOString().split('T')[0]; // format date as YYYY-MM-DD
        createdAt = createdAt.toString();
        let updatedAt = (new Date()).toISOString().split('T')[0]; // format date as YYYY-MM-DD
        updatedAt = updatedAt.toString();
        const obj = {title, query, ownerId, createdAt, updatedAt};
        questions.push(obj);
    }
    console.log(questions);
}

buildSeedData(100);
