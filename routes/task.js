const express = require('express')
const router = express.Router()
const authorize = require('../middlewares/authorize')

const TaskController = require('../controller/taskController')

router.get('/', TaskController.getTask)
router.post('/', TaskController.newTask)

router.get('/:taskId', authorize, TaskController.spesificTask)
router.put('/:taskId', authorize, TaskController.editTask)
router.put('/status/:taskId', authorize, TaskController.updateTaskStatus)

router.delete('/:taskId', authorize, TaskController.deleteTask)

module.exports = router