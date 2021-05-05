'use strict';

const faker = require('faker');
const bcrypt = require('bcryptjs');

// const fakeUsersGenerator = async () => {
  let users = [];
  
  for (let i = 0; i < 100; i++) {
    users.push({
      name: faker.internet.userName(),
      email: faker.internet.email(),
      bio: faker.lorem.sentence(),
      hashedPassword: bcrypt.hashSync(faker.internet.password(), 10),
      avatar: faker.image.avatar(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
//   return users;
// }

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', users)
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Users', null, {});
  }
};
