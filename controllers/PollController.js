const { Poll } = require('../models')
const { Option } = require('../models')

const GetPolls = async (req, res) => {
    try {
        const allPolls = await Poll.findAll({
            attributes: ['id', 'question', 'img', 'user_id'],
            order: [['updatedAt', 'DESC']]
        })
        res.send(allPolls)
    } catch (error) {
        throw error
    }
}

const GetUserPolls = async (req, res) => {
    try {
        const userPolls = await Poll.findAll({
            attributes: ['id', 'question', 'user_id'],
            order: [['updatedAt', 'DESC']],
            where: {
                user_id: req.params.user_id
            }
        })
        res.send(userPolls)
    } catch (error) {
        throw error
    }
}

// const GetAllVoteCounts

const GetOpinionByPollId = async (req, res) => {
    try {
        const pollChoices = await Option.findAll({
            attributes: ['choice', 'voteCount', 'poll_id'],
            order: [['updatedAt', 'DESC']],
            where: {
                poll_id: req.params.poll_id
            }
        })
        res.send(pollChoices)
    } catch (error) {
        throw error
    }
}

const CreatePoll = async (req, res) => {
    const user_id = parseInt(req.params.user_id)
    // const poll_id = Option.belongsTo(Poll, { as: 'poll_id' });  parameter for line 54--> , {include: [poll_id]}
    try {
        let buildPollBody = {
            user_id,
            ...req.body
        }
        const createPoll = await Poll.create(buildPollBody)
        res.send(createPoll)
    }
    catch (error) {
        throw error
    }
}

const IncrementVote = async (req, res) => {
    try {
        const voteIncrease = await Option.increment('voteCount',{ where: { id: req.params.id } })
        res.send(voteIncrease)
    } catch (error) {
        throw error
    }
}


module.exports = {
    GetPolls,
    GetUserPolls,
    GetOpinionByPollId,
    CreatePoll,
    IncrementVote
}