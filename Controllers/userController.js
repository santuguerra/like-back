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

}

const register = async (req, res) => {

    const {username, mail, password} = req.body

    const user = await User.create({
        username,
        mail,
        password
    })

    res.json({
        response: user
    })

}

const login = async (req, res) => {

    const { mail, password } = req.body
    
    let user = await User.findOne({
        where: { mail }
    })

    if (user !== null) {

        user = user.dataValues

        if (user.password === password) {
            res.status(200).json({
                result: user
            })
        } else {
            res.status(500).json({
                error: 'Passowrd failures'
            })
        }

    } else {
        res.status(404).json({
            error: 'Not found'
        })
    }

}

module.exports = {
    findUserById,
    register,
    login
}