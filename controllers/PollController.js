const { Poll } = require('../models')
const { Option } = require('../models')

const GetPolls = async (req, res) => {
    try {
        const allPollsWithOptions = await Poll.findAll({
            attributes: ['id', 'question', 'user_id'],
            order: [['updatedAt', 'DESC']],
            include: [
                { model: Option }
            ]
        })
        res.send(allPollsWithOptions)
    } catch (error) {
        throw error
    }
}

const GetUserPolls = async (req, res) => {
    try {
        const userPolls = await Poll.findAll({
            attributes: ['id', 'question', 'user_id'],
            order: [['updatedAt', 'DESC']],
            include: [
                { model: Option }
            ],
            where: {
                user_id: req.params.user_id
            }
        })
        res.send(userPolls)
    } catch (error) {
        throw error
    }
}

const CreatePoll = async (req, res) => {
    const user_id = parseInt(req.params.user_id)
    const poll_id = Option.belongsTo(Poll, { as: 'poll_id' });
    try {
        let buildPollBody = {
            user_id,
            ...req.body
        }
        const createPoll = await Posts.create(buildPollBody, {include: [poll_id]})
        res.send(createPoll)
    }
    catch (error) {
        throw error
    }
}


module.exports = {
    GetPolls,
    GetUserPolls,
    CreatePoll
}