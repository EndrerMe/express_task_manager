const Sequelize = require("sequelize");
const sequelize = require('./../helpers/db.helper');
const User = require('./user.entity');

const Task = sequelize.define("Task", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'users',
            key: 'user_id',
        }
    }
});

Task.hasMany(User, { foreignKey: 'user_id', foreignKeyConstraint: true })

module.exports = Task;