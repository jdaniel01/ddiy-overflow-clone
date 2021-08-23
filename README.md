# Welcome to DDIY

## Live link: [ddiy](http://ddiy-overflow.herokuapp.com)

[DDIY](http://ddiy-overflow.herokuapp.com), inspired by [Stack Overflow](http://stackoverflow.com/), is a web application that allows users to ask STEM related questions with the hope of getting professional help. As a register user you can ask, answer and vote questions. And if you have not register yet, you can still view questions and answers.

#

## Table of content

1. [Getting started](https://github.com/jdaniel01/ddiy-overflow-clone#getting-started)
2. [Technologies Used](https://github.com/jdaniel01/ddiy-overflow-clone#technologies-used)
3. [Key Features](https://github.com/jdaniel01/ddiy-overflow-clone#key-features)
4. [Code Snippets](https://github.com/jdaniel01/ddiy-overflow-clone#code-snippets)
5. [Wiki](https://github.com/jdaniel01/ddiy-overflow-clone#wiki)
6. [Future goals](https://github.com/jdaniel01/ddiy-overflow-clone#future-goals)

#

## Technologies Used

**Front End**

- JavaScript
- HTML/Pug.js
- Css
- [Favicon.io](https://favicon.io)
- [Fontawesome](http://fontawesome.com/)
- Heroku

**Back End**

- Express.js
- Sequelize.js
- Faker.js
- Node.js
- Bcryptjs
- PostgreSQL and Postbird
- AJAX

#

## Key Features

- Uses AJAX and Faker.js to generate hundred of random generated questions/users/votes.
- Uses form validation, auth and csrfProtection to prevent csrf attacks and add user validation.
- Has a demo page that allows visitors to log in and have registered user privileges.

#

## Code Snippets

**Query for finding a question by its id with its associated answers**

* The following code allows us to get to a specific question based on its id. Once the question is displayed, the associated answers should be displayed. 

```js
const questionId = parseInt(req.params.id, 10);
const questionId = parseInt(req.params.id, 10);
const question = await Question.findByPk(questionId, {
  include: [User, Answer],
});

const answers = await Answer.findAll({
  where: {
    questionId: question.id,
  },
  include: [User, Vote],
});
```

**Query for modifying an answer**

* By using post, an answer can successfully be modified by the answer's owner. Most of the logic can be found in the associated pug.js file which ensures that **only** the answer owner can modified and even delete his/her answer

```js
const answerId = parseInt(req.params.id, 10);
const answer = await Answer.findByPk(answerId);
await answer.update({ answer: req.body.answer });
await answer.save();
res.redirect(`/questions/${answer.questionId}`);
```

**Query for down voting an answer**

* The following code snippet allows a user to down vote an answer. Below there are steps on how to find a vote by id, and let JavaScript decide weather to validate the down vote or not. This will be updated in the future to make voting dynamic by using a fetch call and DOM manipulation

```js
const answerId = req.params.answerId;
    const ownerId = req.session.auth.userId;
    const questionId = parseInt(req.params.id, 10);
    const question = await Question.findByPk(questionId, {
      include: [User, Answer],
    });
    const vote = await Vote.findOne({
      where: {
        answerId,
        ownerId,
      },
    });
    let downVote;

    if (vote) {
      await vote.destroy();
    } else {
      if (vote != null) {
        downVote = Vote.build({
          ownerId,
          answerId,
          value: false,
        });
        await downVote.save();
      }

```

#

## Wiki

[API Documentation](https://github.com/jdaniel01/ddiy-overflow-clone/wiki/API-Documentation)

[Feature List](https://github.com/jdaniel01/ddiy-overflow-clone/wiki/Feature-List)

[Frontend Routes](https://github.com/jdaniel01/ddiy-overflow-clone/wiki/Frontend-Routes)

[Schema](https://github.com/jdaniel01/ddiy-overflow-clone/wiki/Schema)

[User Stories](https://github.com/jdaniel01/ddiy-overflow-clone/wiki/user-stories)

![](https://github.com/nathanblaz/ddiy-stack-overflow-clone/blob/4dc10c0531e0204a0a7a40764f050f72aba4cd1c/data-model.png)

#

## Getting Started

1. Clone this repository
2. Install dependencies (`npm install`)
3. Create a `.env` file based on the `.env.example` and replace the value of `SESSION_SECRET` with your own `SESSION_SECRET` value. You can generate a value by using [UUID](https://www.npmjs.com/package/uuid) to have a more secure value.
4. Set up your PostgreSQL ddiy_app user, a password and database and make sure it matches the `.env` file. Make sure to give CREATEDB privileges to your ddiy_app user.
5. Enter the following commands:

```
npx dotenv sequelize-cli db:create
npx dotenv sequelize-cli db:migrate
npx dotenv sequelize-cli db:seed:all
npm start
```

#

## Future Goals

- Allow users to insert a code snippet
- Make the answer voting system be dynamic
- Question Categories
