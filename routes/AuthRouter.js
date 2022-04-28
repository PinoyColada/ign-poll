const Router = require('express').Router()
const controller = require('../controllers/AuthController')
const middleware = require('../middleware')

Router.post('/signin', controller.Login)
Router.post('/signup', controller.Register)
// Router.put('/update/:user_id',
//     middleware.stripToken,
//     middleware.verifyToken,
//     controller.UpdatePassword
// )
Router.get(
    '/session',
    middleware.stripToken,
    middleware.verifyToken,
    controller.CheckSession
)
// Router.delete(
//     '/delete_profile/:user_id',
//     middleware.stripToken,
//     middleware.verifyToken,
//     controller.DeleteProfile
// )


module.exports = Router