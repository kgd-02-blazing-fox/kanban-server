const { Task } = require('../models/index')

function authorize(req, res, next) {
  console.log('AUTHORIZE');
  Task.findByPk(req.params.taskId)
  .then(task=>{
    if(task.UserId === req.userId){
      next()
    } else{
      const err = {
        status: 401,
        msg: "Unathorize"
      }
      next(err)
    }
  })
  .catch(err=>{
    next(err)
  })
}

module.exports = authorize