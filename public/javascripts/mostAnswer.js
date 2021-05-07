const db = require("../../db/models");
/* GET home page. */
//really long function to get all filters
const getFilters = async () => {
  //newest filter
  let newest = await db.Question.findAll({
    order: [["updatedAt", "DESC"]],
    limit: 10,
  });
  //oldest
  let oldest = await db.Question.findAll({
    order: [["updatedAt", "ASC"]],
    limit: 10,
  });
  //most answers
  //first get all answers
  let mostAnswer = await db.Answer.findAll({ limit: 10 });
  //create helper functions to find single question with most answers
  const findMostFrequent = (mostAnswer) => {
    if (mostAnswer === []) return;
    let mf = 1;
    let m = 0;
    let item;
    for (let i = 0; i < mostAnswer.length; i++) {
      for (let j = i; j < mostAnswer.length; j++) {
        if (mostAnswer[i].questionId == mostAnswer[j].questionId) m++;
        if (mf < m) {
          mf = m;
          item = mostAnswer[i].questionId;
        }
      }
      m = 0;
    }
    return item;
  };
  //make an array of most answered in order
  const makeMAArr = (fmf, ma) => {
    let arr = [];
    let mf = 1;
    while (mf) {
      mf = fmf(ma);
      console.log(mf);
      arr.push(mf);
      console.log(arr);
      //ma = ma.filter((e) => e.questionId !== mf);
      console.log(ma);
    }
    return arr;
  };
  //initializing array
  console.log("here");

  console.log(makeMAArr(findMostFrequent, mostAnswer));
  //trying to comnsole log this dumb araray
};

getFilters();
