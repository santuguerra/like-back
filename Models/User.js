const Sequelize = require('sequelize')
const connection = require('../sql.js')
const Like = require('./Like')

const User = connection.define('user', {
    mail: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

User.hasOne(Like)

module.exports = User