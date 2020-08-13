const express = require('express')
const router = express.Router()

const User = require('./user.js')
const Todo = require('./todo.js')
const Api = require('./api.js')

router.use('/users', User)
router.use('/todo.js', Todo)
router.use('/api.js', Api)

module.exports = router;