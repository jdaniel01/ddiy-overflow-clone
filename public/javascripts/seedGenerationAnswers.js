const fetch = require("node-fetch");

const seed = async () => {
  let answers = [];
  for (let i = 0; i < 100; i++) {
    let ownerId = Math.floor(Math.random() * 10) + 1;
    let questionId = Math.floor(Math.random() * 10) + 1;
    const x = await fetch(
      "https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1"
    );
    let answer = await x.json();
    answer = JSON.stringify(answer);
    answer = await JSON.parse(answer);
    // console.log(answer);
    const obj = {
      answer: answer[0],
      ownerId,
      questionId,
      content: "",
      createdAt: new Date().toISOString().split("T")[0],
      updatedAt: new Date().toISOString().split("T")[0],
    };
    answers.push(obj);
  }
  console.log(answers);
};

seed();
