const route = require('express').Router()
const userRoute = require('./user')
const taskRoute = require('./task')
const { authentication } = require('../middlewares/authentication')

route.use('/user', userRoute)
route.use('/task', authentication, taskRoute)

module.exports = route