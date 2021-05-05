"use strict";
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define(
    "Question",
    {
      title: { type: DataTypes.STRING, allowNull: false },
      query: { type: DataTypes.TEXT, allowNull: false },
      ownerId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  Question.associate = function (models) {
    // associations can be defined here
    Question.belongsTo(models.User, { foreignKey: "ownerId" });
    Question.hasMany(models.Answer, { foreignKey: "questionId" });
  };
  return Question;
};
