const userController = require('../controllers/userController.js')


const router = require('express').Router()

router.post('/reguser', userController.upload, userController.regUser);

router.get('/users', userController.getAllUsers);

router.post('/login', userController.login);

router.get('/:id/qr', userController.qrForUser);


module.exports = router