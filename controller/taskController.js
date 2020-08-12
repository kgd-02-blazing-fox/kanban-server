const { Task } = require('../models/index')

class TaskController {
  static getTask(req, res, next) {
    const organization = req.userOrganization
    console.log(organization);
    Task.findAll({
      where: { organization }
    })
    .then(result => {
      // console.log(result);
      res.status(200).json(result)
    }).catch((err) => {
      next(err)
    });
  }

  static newTask(req, res, next) {
    Task.create({
      user: req.userName,
      UserId: req.userId,
      content: req.body.content,
      status: req.body.status,
      organization: req.userOrganization
    })
    .then(response=>{
      res.status(200).json(response)
    })
    .catch(err=>{
      next(err)
    })
  }

  static spesificTask(req, res, next) {
    res.status(200).json({
      msg: `BISA GET SPESIFIC ${req.params.taskId}`
    })
  }

  static editTask(req, res, next) {
    res.status(200).json({
      msg: "BISA di PUT"
    })
  }

  static deleteTask(req, res, next) {
    res.status(200).json({
      msg: "BISA di DELETE"
    })
  }
}

module.exports = TaskController