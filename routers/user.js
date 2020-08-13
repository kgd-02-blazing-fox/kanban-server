const express = require('express')
const router = express.Router()

const UserController = require('../controllers/user.js')

router.post('/register', UserController.register) 
router.post('/login', UserController.login)
router.post('/google', UserController.googleLogin);

module.exports = router