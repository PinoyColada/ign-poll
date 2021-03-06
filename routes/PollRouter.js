const Router = require('express').Router()
const controller = require('../controllers/PollController')

Router.get('/', controller.GetPolls)
Router.get('/:user_id', controller.GetUserPolls)
Router.get('/pollInfo/:poll_id', controller.GetOpinionByPollId)
Router.put('/pollInfo/vote/:option_id', controller.IncrementVote)
Router.post('/:user_id', controller.CreatePoll)
Router.post('/:user_id/:poll_id', controller.CreateChoice)
Router.delete('/:poll_id', controller.DeletePoll)

module.exports = Router