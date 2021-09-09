// window.addEventListener('load', event => {
//     //onclick=`location.href="/questions/${question.id}/answer/${answer.id}/downvote"`
//     //onclick=`location.href="/questions/${question.id}/answer/${answer.id}/upvote"`
//     //upVote and downVote
//     const upBtn = document.querySelector('#upVote');
//     upBtn.addEventListener('click', async (e) => {
//         e.preventDefault()
//         // let result = fetch(`"/questions/${ question.id } / answer / ${ answer.id } / upvote"`)
//     })
//     const downBtn = document.querySelector('#downVote');
//     downBtn.addEventListener('click', (e) => {

//     })

// })

async function voteUp(qId, aId) {
    console.log("@@@@@@@@@@@@@@@@@@", qId, aId)
    let res = await fetch(`/questions/${qId}/answer/${aId}/upvote`)
    let element = document.getElementById(`${qId}${aId}Totalvotes`);
    if (res.ok) {
        element.innerHTML = Number(element.innerHTML)++
    }
}


async function voteDown(qId, aId) {
    console.log("@@@@@@@@@@@@@@@@@@", qId, aId)
    let res = await fetch(`/questions/${qId}/answer/${aId}/downvote`)
    let element = document.getElementById(`${qId}${aId}Totalvotes`);
    if (res.ok) {
        element.innerHTML = Number(element.innerHTML)--
    }
}

module.exports = { voteUp, voteDown }