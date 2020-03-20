const Sequelize = require("sequelize");

const sequelize = new Sequelize("task_manager", "root", "root", {
    dialect: "mysql",
    host: "localhost",
    define: {
      timestamps: false
    }
});

module.exports = sequelize;
