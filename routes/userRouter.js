const userController = require('../controllers/userController.js')


const router = require('express').Router()

router.post('/regUser', userController.upload, userController.regUser)

router.get('/users', userController.getAllUsers)

router.post('/login', userController.login)


module.exports = router