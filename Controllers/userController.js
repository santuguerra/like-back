const User = require('../Models/User.js')

const findUserById = async (req, res) => {

    const { id } = req.params

    let user = await User.findOne({
        where: { id: id }
    })

    if (user !== null) {

        user = user.dataValues

        res.status(200).json({response: user})

    } else {

        res.status(404).json({error: 'not found'})

    }

    console.log('find user by id')

}

const createOrGetUser = async (req, res) => {

    const { mail } = req.body

    let user = await User.findOne({
        where: { mail: mail }
    })

    if (user === null) {

        user = await User.create({
            mail
        })

    }

    res.json({
        response: user
    })

    console.log('create or get user')

}

module.exports = {
    findUserById,
    createOrGetUser
}