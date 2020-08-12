const express = require('express')
const router = express.Router()

const authenticate = require('../middlewares/authenticate')

const users = require('./user')
router.use('/', users)

const task = require('./task')
router.use('/tasks', authenticate, task)

module.exports = router