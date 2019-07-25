const express = require('express');
const api = express.Router();

const userController = require('../Controllers/userController.js')
const likeController = require('../Controllers/likeController.js')

api.get('/', (req, res) => {
    res.json({response: 'Hola mundo'})
})

api.get('/users/:id', userController.findUserById)

api.post('/register', userController.register)

api.get('/likes/:id', likeController.getLikeByUserId)

api.post('/likes/:id', likeController.postLike)

api.post('/login', userController.login)

module.exports = api