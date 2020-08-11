const express = require('express')
const router = express.Router()

const authenticate = require('../middlewares/authenticate')

const users = require('./user')
router.use('/', users)

// const kanbans = require('./user')
// router.use('/kanbans', kanbans)

module.exports = router