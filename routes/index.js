const express = require('express')
const router = express.Router()
const taskRoutes = require('./task')
const UserController = require('../controllers/userController')

router.get('/', (req, res) => {
  res.send("Hello , This Is Rest Api My Kanban Ichlasul")
})
router.post('/register', UserController.postRegister)
router.post('/login', UserController.postLogin)
router.post('/login/google', UserController.oauthGoogle)
router.use('/tasks', taskRoutes)

module.exports = router