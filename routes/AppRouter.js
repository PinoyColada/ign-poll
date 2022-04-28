const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')

Router.use('/auth', AuthRouter)

module.exports = Router