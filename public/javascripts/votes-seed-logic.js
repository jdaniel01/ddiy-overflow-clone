
function makeVotes(num) {
    console.log("in the function.");
    let votes = [];
    let answerIds = [];
    let i = 0;
    while (i < num) {
        const answerId = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        if (!answerIds.includes(answerId)) {
            answerIds.push(answerId);
            i++
        }
        continue;
    }

    while (answerIds.length > 0) {
        const ownerId = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        let value = Math.floor(Math.random() * (2 - 1 + 1) + 1);
        if (value > 1) {
            value = true;
        } else {
            value = false;
        }
        const ansId = answerIds.pop();
        votes.push({ ownerId: ownerId, answerId: ansId, value: value, createdAt: 'new Date()', updatedAd: 'new Date()' })
    }
    console.log(votes);
    return votes;
}
console.log("before the function");
const checkVotes = () => {
    let votes = makeVotes(100);
    let tally = new Set();
    let finalVotes = [];
    votes.forEach(vote => {
        if (!tally[vote.answerId]) {
            tally[vote.answerId] = [vote.ownerId]
            finalVotes.push(vote);
        } else if (!tally[vote.answerId].includes(vote.ownderId)) {
            tally[vote.answerId].push(vote.ownerId)
            finalVotes.push(vote);
        }
    })
    console.log(finalVotes.length)
    console.log(finalVotes);
}
checkVotes();
