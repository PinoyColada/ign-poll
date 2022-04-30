const { Poll } = require('../models')
const { Option } = require('../models')
const sequelize = require("sequelize");

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
            attributes: ['id', 'question', 'img', 'user_id'],
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
            attributes: ['id','choice', 'vote_count', 'poll_id'],
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

const CreateChoice = async (req, res) => {
    const poll_id = parseInt(req.params.poll_id)
    try {
        let buildChoiceBody = {
            poll_id,
            ...req.body
        }
        const createChoice = await Option.create(buildChoiceBody)
        res.send(createChoice)
    }
    catch (error) {
        throw error
    }
}

const IncrementVote = async (req, res) => {
    try {
        // let option_id = parseInt(req.params.id)
        // const voteIncrease = await Option.increment('voteCount' ,{
        //     by: 1,
        //     where: { id: option_id },
        //     returning: true })
        // res.send(voteIncrease)
        const voteIncrease = await Option.update(
            { vote_count: sequelize.literal('vote_count+ 1') },
              { where: { id: req.body.id } });
        res.send(voteIncrease)

    } catch (error) {
        throw error
    }
}

const DeletePoll = async (req, res) => {
    try {
        let poll_id = parseInt(req.params.poll_id)
        await Poll.destroy({ where: { id: poll_id } })
        res.send({ message: `Your poll, ${poll_id}, was deleted` })
    } catch (error) {
        throw error
    }
}


module.exports = {
    GetPolls,
    GetUserPolls,
    GetOpinionByPollId,
    CreatePoll,
    CreateChoice,
    IncrementVote,
    DeletePoll
}