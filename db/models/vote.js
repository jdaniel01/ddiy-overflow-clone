"use strict";
module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define(
    "Vote",
    {
      ownerId: { type: DataTypes.INTEGER, allowNull: false },
      answerId: { type: DataTypes.INTEGER, allowNull: false },
      value: { type: DataTypes.BOOLEAN, allowNull: false },
    },
    {}
  );
  Vote.associate = function (models) {
    // associations can be defined here
    Vote.belongsTo(models.Answer, { foreignKey: "answerId" });
    Vote.belongsTo(models.User, { foreignKey: "ownerId" });
  };
  return Vote;
};
