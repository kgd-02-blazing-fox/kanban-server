const { Task } = require('../models/index')

class TaskController {
  static getTask(req, res, next) {
    const organization = req.userOrganization
    console.log(organization);
    Task.findAll({
      where: { organization }
    })
      .then(result => {
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
      .then(response => {
        res.status(200).json(response)
      })
      .catch(err => {
        next(err)
      })
  }

  static spesificTask(req, res, next) {
    Task.findByPk(req.params.taskId)
      .then(task => {
        res.status(200).json(task)
      })
      .catch(err => {
        next(err)
      })
  }

  static editTask(req, res, next) {
    const id = req.params.taskId
    Task.update(
      {
        content: req.body.content,
        status: req.body.status,
      },
      {
        where: { id },
        returning: true
      })
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        console.log("EROR");
        next(err)
      })
  }

  static updateTaskStatus(req,res,next){
    const id = req.params.taskId
    Task.update(
      {
        status: req.body.status,
      },
      {
        where: { id },
        returning: true
      })
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        console.log("EROR");
        next(err)
      })
  }

  static deleteTask(req, res, next) {
    Task.destroy({
      where: { id: req.params.taskId },
      returning: true
    })
      .then(data => {
        res.status(200).json({
          msg: "Task Deleted!"
        })
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = TaskController