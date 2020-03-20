const Sequelize = require("sequelize");
const sequelize = require('./../helpers/db.helper');

const User = sequelize.define("User", {
    user_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    first_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
});

module.exports = User;