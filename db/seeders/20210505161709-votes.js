'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Votes', [
    {
      ownerId: 85,
      answerId: 51,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 11,
      answerId: 85,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 59,
      answerId: 66,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 40,
      answerId: 100,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 86,
      answerId: 12,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 94,
      answerId: 31,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 75,
      answerId: 58,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 33,
      answerId: 71,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 15,
      answerId: 72,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 20,
      answerId: 33,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 29,
      answerId: 86,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 69,
      answerId: 32,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 63,
      answerId: 87,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 43,
      answerId: 36,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 94,
      answerId: 92,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 10,
      answerId: 97,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 67,
      answerId: 63,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 76,
      answerId: 70,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 18,
      answerId: 74,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 29,
      answerId: 84,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 75,
      answerId: 65,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 37,
      answerId: 98,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 87,
      answerId: 29,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 63,
      answerId: 13,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 80,
      answerId: 91,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 80,
      answerId: 88,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 41,
      answerId: 69,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 18,
      answerId: 16,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 60,
      answerId: 89,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 22,
      answerId: 64,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 96,
      answerId: 75,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 28,
      answerId: 56,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 5,
      answerId: 90,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 2,
      answerId: 35,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 55,
      answerId: 11,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 92,
      answerId: 60,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 68,
      answerId: 17,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 79,
      answerId: 5,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 44,
      answerId: 14,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 76,
      answerId: 30,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 55,
      answerId: 46,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 38,
      answerId: 93,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 78,
      answerId: 95,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 41,
      answerId: 2,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 71,
      answerId: 3,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 6,
      answerId: 38,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 35,
      answerId: 8,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 17,
      answerId: 73,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 94,
      answerId: 39,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 92,
      answerId: 27,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 67,
      answerId: 45,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 28,
      answerId: 6,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 52,
      answerId: 23,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 78,
      answerId: 20,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 89,
      answerId: 44,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 76,
      answerId: 96,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 2,
      answerId: 37,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 70,
      answerId: 57,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 80,
      answerId: 28,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 9,
      answerId: 48,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 90,
      answerId: 94,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 46,
      answerId: 40,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 26,
      answerId: 76,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 92,
      answerId: 26,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 25,
      answerId: 59,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 32,
      answerId: 54,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 59,
      answerId: 68,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 65,
      answerId: 34,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 33,
      answerId: 81,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 99,
      answerId: 67,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 28,
      answerId: 19,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 12,
      answerId: 82,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 69,
      answerId: 15,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 82,
      answerId: 41,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 66,
      answerId: 4,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 78,
      answerId: 42,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 73,
      answerId: 24,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 9,
      answerId: 43,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 72,
      answerId: 47,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 27,
      answerId: 1,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 62,
      answerId: 18,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 97,
      answerId: 52,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 71,
      answerId: 7,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 71,
      answerId: 21,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 23,
      answerId: 53,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 37,
      answerId: 99,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 58,
      answerId: 77,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 34,
      answerId: 78,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 91,
      answerId: 62,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 6,
      answerId: 10,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 100,
      answerId: 49,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 82,
      answerId: 83,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 92,
      answerId: 80,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 97,
      answerId: 79,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 69,
      answerId: 55,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 89,
      answerId: 50,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 77,
      answerId: 61,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 23,
      answerId: 9,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 2,
      answerId: 22,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 30,
      answerId: 25,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 47,
      answerId: 7,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 37,
      answerId: 5,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 22,
      answerId: 9,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 13,
      answerId: 46,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 94,
      answerId: 86,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 90,
      answerId: 41,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 17,
      answerId: 31,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 4,
      answerId: 42,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 24,
      answerId: 65,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 84,
      answerId: 70,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 50,
      answerId: 89,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 90,
      answerId: 17,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 87,
      answerId: 13,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 85,
      answerId: 51,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 52,
      answerId: 28,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 99,
      answerId: 80,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 11,
      answerId: 54,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 32,
      answerId: 97,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 18,
      answerId: 83,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 59,
      answerId: 72,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 20,
      answerId: 63,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 55,
      answerId: 45,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 24,
      answerId: 95,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 28,
      answerId: 73,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 9,
      answerId: 87,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 48,
      answerId: 55,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 15,
      answerId: 39,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 78,
      answerId: 56,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 46,
      answerId: 88,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 78,
      answerId: 10,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 36,
      answerId: 6,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 47,
      answerId: 67,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 42,
      answerId: 29,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 62,
      answerId: 100,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 41,
      answerId: 57,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 32,
      answerId: 21,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 5,
      answerId: 8,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 75,
      answerId: 75,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 97,
      answerId: 92,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 16,
      answerId: 38,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 85,
      answerId: 64,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 52,
      answerId: 24,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 52,
      answerId: 26,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 66,
      answerId: 23,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 63,
      answerId: 30,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 71,
      answerId: 3,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 50,
      answerId: 33,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 66,
      answerId: 85,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 38,
      answerId: 60,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 58,
      answerId: 82,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 22,
      answerId: 32,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 68,
      answerId: 71,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 77,
      answerId: 27,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 35,
      answerId: 19,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 34,
      answerId: 96,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 93,
      answerId: 14,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 36,
      answerId: 44,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 61,
      answerId: 69,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 76,
      answerId: 61,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 33,
      answerId: 35,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 8,
      answerId: 20,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 35,
      answerId: 90,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 83,
      answerId: 78,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 42,
      answerId: 18,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 38,
      answerId: 43,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 90,
      answerId: 94,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 18,
      answerId: 52,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 16,
      answerId: 76,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 87,
      answerId: 98,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 12,
      answerId: 36,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 33,
      answerId: 84,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 79,
      answerId: 22,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 61,
      answerId: 53,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 54,
      answerId: 37,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 37,
      answerId: 12,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 9,
      answerId: 34,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 73,
      answerId: 77,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 97,
      answerId: 1,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 66,
      answerId: 47,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 16,
      answerId: 4,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 95,
      answerId: 81,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 24,
      answerId: 2,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 7,
      answerId: 62,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 5,
      answerId: 58,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 61,
      answerId: 16,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 67,
      answerId: 66,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 41,
      answerId: 40,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 84,
      answerId: 99,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 22,
      answerId: 79,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 40,
      answerId: 93,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 40,
      answerId: 15,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 83,
      answerId: 91,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 59,
      answerId: 49,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 100,
      answerId: 59,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 10,
      answerId: 50,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 35,
      answerId: 74,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 37,
      answerId: 48,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 91,
      answerId: 25,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 65,
      answerId: 68,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 7,
      answerId: 11,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 39,
      answerId: 100,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 18,
      answerId: 89,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 7,
      answerId: 11,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 74,
      answerId: 70,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 81,
      answerId: 56,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 6,
      answerId: 9,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 34,
      answerId: 82,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 13,
      answerId: 13,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 75,
      answerId: 73,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 13,
      answerId: 31,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 35,
      answerId: 61,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 69,
      answerId: 52,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 37,
      answerId: 49,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 88,
      answerId: 26,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 33,
      answerId: 95,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 50,
      answerId: 24,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 22,
      answerId: 47,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 41,
      answerId: 35,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 21,
      answerId: 57,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 30,
      answerId: 71,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 3,
      answerId: 34,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 44,
      answerId: 3,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 23,
      answerId: 7,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 36,
      answerId: 66,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 34,
      answerId: 32,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 7,
      answerId: 50,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 82,
      answerId: 88,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 96,
      answerId: 68,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 16,
      answerId: 55,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 39,
      answerId: 36,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 11,
      answerId: 53,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 78,
      answerId: 42,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 4,
      answerId: 96,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 49,
      answerId: 20,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 46,
      answerId: 90,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 36,
      answerId: 16,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 66,
      answerId: 94,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 46,
      answerId: 18,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 18,
      answerId: 22,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 46,
      answerId: 60,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 77,
      answerId: 37,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 24,
      answerId: 63,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 4,
      answerId: 29,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 93,
      answerId: 23,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 88,
      answerId: 28,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 7,
      answerId: 72,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 98,
      answerId: 87,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 12,
      answerId: 25,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 61,
      answerId: 19,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 26,
      answerId: 2,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 53,
      answerId: 65,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 1,
      answerId: 33,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 34,
      answerId: 46,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 73,
      answerId: 92,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 5,
      answerId: 69,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 72,
      answerId: 10,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 5,
      answerId: 85,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 72,
      answerId: 48,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 51,
      answerId: 91,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 71,
      answerId: 27,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 95,
      answerId: 93,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 86,
      answerId: 76,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 6,
      answerId: 51,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 95,
      answerId: 80,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 89,
      answerId: 75,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 3,
      answerId: 67,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 15,
      answerId: 59,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 80,
      answerId: 8,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 64,
      answerId: 62,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 67,
      answerId: 40,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 2,
      answerId: 83,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 81,
      answerId: 30,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 6,
      answerId: 64,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 12,
      answerId: 45,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 95,
      answerId: 54,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 28,
      answerId: 21,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 63,
      answerId: 86,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 13,
      answerId: 78,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 8,
      answerId: 1,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 67,
      answerId: 17,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 61,
      answerId: 43,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 89,
      answerId: 15,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 46,
      answerId: 77,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 38,
      answerId: 39,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 4,
      answerId: 84,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 1,
      answerId: 58,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 29,
      answerId: 44,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 10,
      answerId: 97,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 56,
      answerId: 99,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 8,
      answerId: 4,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 24,
      answerId: 98,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 44,
      answerId: 41,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 46,
      answerId: 12,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 95,
      answerId: 38,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 20,
      answerId: 5,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 25,
      answerId: 79,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 18,
      answerId: 14,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 99,
      answerId: 74,
      value: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 1,
      answerId: 81,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ownerId: 99,
      answerId: 6,
      value: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Votes', null, {});
  }
};
