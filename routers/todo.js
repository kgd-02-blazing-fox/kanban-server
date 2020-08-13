const express = require('express');

const TodoController = require('../controllers/todo.js');
const {authentication, authorization} = require('../middlewares/authentication.js');

const router = express.Router();

router.post('/', authentication, TodoController.addTodo);
router.get('/', authentication, TodoController.rootTodo);
router.get('/:id', authentication, authorization, TodoController.readTodoId);
router.put('/:id', authentication, authorization, TodoController.updateTodo);
router.delete('/:id', authentication, authorization, TodoController.deleteTodo);

module.exports = router;