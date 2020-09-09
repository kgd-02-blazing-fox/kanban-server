const route = require('express').Router()
const TaskController = require('../controllers/task')
const { authorization } = require('../middlewares/authorization')

route.get('/', TaskController.showAll)
route.post('/', TaskController.add)

route.get('/:id', authorization, TaskController.showOne)
route.put('/:id', authorization, TaskController.edit)
route.delete('/:id', authorization, TaskController.delete)

module.exports = route