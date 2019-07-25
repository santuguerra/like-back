const Sequelize = require('sequelize')
const connection = require('../sql.js')
const User = require('./User')

const Like = connection.define('like', {
    url: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Like