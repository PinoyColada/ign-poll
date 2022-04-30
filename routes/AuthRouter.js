const Router = require('express').Router()
const controller = require('../controllers/AuthController')
const middleware = require('../middleware')

Router.post('/signin', controller.Login)
Router.post('/signup', controller.Register)
Router.get(
    '/session',
    middleware.stripToken,
    middleware.verifyToken,
    controller.CheckSession
)


module.exports = Router