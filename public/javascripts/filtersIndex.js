let newest;
let oldest;
let mostAnswered;
let span;
window.addEventListener("DOMContentLoaded", (event) => {
  // console.log("DOM fully loaded and parsed");
  span = document.getElementById("filter");
  newest = document.querySelector(".index-question--outer0");
  oldest = document.querySelector(".index-question--outer1");
  mostAnswered = document.querySelector(".index-question--outer2");
  switchDisplay("newest");
});
var switchDisplay = (option) => {
  // console.log(newest);
  if (option === "newest") {
    span.innerHTML = "Newest" + " Questions";
    oldest.hidden = true;
    mostAnswered.hidden = true;
    newest.hidden = false;
  } else if (option === "oldest") {
    span.innerHTML = "Oldest" + " Questions";
    oldest.hidden = false;
    mostAnswered.hidden = true;
    newest.hidden = true;
  } else if (option === "mostAnswered") {
    span.innerHTML = "Most Answered" + " Questions";
    oldest.hidden = true;
    mostAnswered.hidden = false;
    newest.hidden = true;
  } else {
  }
};
