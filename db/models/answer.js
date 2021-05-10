"use strict";
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define(
    "Answer",
    {
      answer: { type: DataTypes.TEXT, allowNull: false },
      ownerId: { type: DataTypes.INTEGER, allowNull: false},
      questionId: { type: DataTypes.INTEGER, allowNull: false },
      content: DataTypes.TEXT,
    },
    {}
  );
  Answer.associate = function (models) {
    // associations can be defined here
    Answer.belongsTo(models.Question, { foreignKey: "questionId" });
    Answer.belongsTo(models.User, { foreignKey: "ownerId" });
    Answer.hasMany(models.Vote, {
      foreignKey: "answerId",
      onDelete: 'CASCADE',
      hooks: true  
    });
  };
  return Answer;
};
