const Sequelize = require('sequelize')
const connection = require('../sql.js')
const Like = require('./Like')

const User = connection.define('user', {
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mail: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

User.hasOne(Like)

module.exports = User