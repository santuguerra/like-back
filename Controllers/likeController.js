const Like = require('../Models/Like.js')
const User = require('../Models/User.js')

const getLikeByUserId = async (req, res) => {

    const id = req.params.id

    let likes = await Like.findAll({
        where: {
            userId: id
        }
    })

    res.status(200).json({
        response: likes
    })

    console.log('get like by userid')

}

const postLike = async (req, res) => {

    const { url } = req.body

    const id = req.params.id

    let user = await User.findOne({
        where: {
            id
        }
    })

    if (user !== null) {

        user = user.dataValues

        const like = await Like.create({
            url,
            userId: user.id
        })

        res.status(200).json({
            response: like
        })

    } else {

        res.status(500).json({
            response: 'User not found'
        })

    }

    console.log('post like')

}

const deleteLike = async (req, res) => {

    const { url } = req.body

    const id = req.params.id

    let user = await User.findOne({
        where: {
            id
        }
    })

    if (user !== null) {

        user = user.dataValues

        const like = await Like.findOne({
            where: {
                url,
                userId: user.id
            }
        })

        if (like !== null) {

            Like.destroy({
                where: {
                    id: like.id
                }
            })

        }

        res.status(200).json('deleted like')

    } else {

        res.status(500).json({
            response: 'User not found'
        })

    }

    console.log('delete')

}

module.exports = {
    getLikeByUserId,
    postLike,
    deleteLike
}