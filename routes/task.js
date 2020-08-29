const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/taskController')
const { authentication, isOwner } = require('../midlewares/auth')
router.post('/', authentication, TaskController.postTask)
router.get('/', authentication, TaskController.getTask)
router.get('/:id', authentication, TaskController.getTaskById)
router.put('/:id', authentication, TaskController.putTaskById)
router.delete('/:id', authentication, isOwner, TaskController.deleteTaskById)

module.exports = router