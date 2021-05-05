"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      bio: DataTypes.TEXT,
      hashedPassword: { type: DataTypes.STRING.BINARY, allowNull: false },
      avatar: DataTypes.TEXT,
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Question, { foreignKey: "ownerId" });
    User.hasMany(models.Answer, { foreignKey: "ownerId" });
    User.hasMany(models.Vote, { foreignKey: "ownerId" });
  };
  return User;
};
