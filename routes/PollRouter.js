const Router = require('express').Router()
const controller = require('../controllers/PollController')

Router.get('/', controller.GetPolls)
Router.get('/:user_id', controller.GetUserPolls)
Router.post('/:user_id', controller.CreatePoll)
// Router.put('/:poll_id', controller.UpdatePoll)
// Router.delete('/:poll_id', controller.DeletePoll)
// Router.delete('/:poll_id/:user_id', controller.DeletePollByUserId)

module.exports = Router