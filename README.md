# Welcome to DDIY

## Live link: [ddiy](http://ddiy-overflow.herokuapp.com)

[DDIY](http://ddiy-overflow.herokuapp.com), inspired by [Stack Overflow](http://stackoverflow.com/), is a web application that allows users to ask STEM related questions with the hope of getting professional help. As a register user you can ask, answer and vote questions. And if you have not register yet, you can still view questions and answers.

# 
## Table of content
1. [Getting started](https://github.com/jdaniel01/#getting-started)
2. [Technologies Used](https://github.com/jdaniel01/#technologies-used)
3. [Key Features](https://github.com/jdaniel01/#key-features)
4. [Code Snippets](https://github.com/jdaniel01/#code-snippets)
5. [Wiki](https://github.com/jdaniel01/#wiki-pages)
6. [Future goals](https://github.com/jdaniel01/#future-goals)

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
## Technologies Used
**Front End**
* JavaScript
* HTML/Pug.js
* Css
* [Favicon.io](https://favicon.io)
* [Fontawesome](http://fontawesome.com/)
* Heroku

**Back End**
* Express.js
* Sequelize.js
* Faker.js
* Node.js
* Bcryptjs
* PostgreSQL and Postbird
* AJAX

#
## Key Features 
* Uses AJAX and Faker.js to generate hundred of random generated questios/users/votes.
* Uses form validation, auth and csrfProtection to prevent csrf attacjs and add user validation.
* Has a demo page that allows visitors to log in and have registered user privileges.

#
## Code Snippets
