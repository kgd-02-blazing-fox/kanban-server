const express = require('express')
const router = express.Router()

const TaskController = require('../controller/taskController')

router.get('/', TaskController.getTask)
router.post('/', TaskController.newTask)

router.get('/:taskId', TaskController.spesificTask)
router.put('/:taskId', TaskController.editTask)

router.delete('/:taskId', TaskController.deleteTask)


module.exports = router