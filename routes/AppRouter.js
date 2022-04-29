const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const PollRouter = require('./PollRouter')

Router.use('/auth', AuthRouter)
Router.use('/poll', PollRouter)

module.exports = Router