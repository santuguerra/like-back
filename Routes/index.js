const express = require('express');
const api = express.Router();

const userController = require('../Controllers/userController.js')
const likeController = require('../Controllers/likeController.js')

api.get('/', (req, res) => {
    res.json({response: 'Hola mundo'})
})

api.get('/users/:id', userController.findUserById)

api.post('/users', userController.createOrGetUser)

api.get('/likes/:id', likeController.getLikeByUserId)

api.post('/likes/:id', likeController.postLike)

api.delete('/likes/:id', likeController.deleteLike)

module.exports = api