const { User } = require('../models/index')

class UserController {
  static register(req, res, next) {
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
      .then(data => {
        res.status(201).json({
          name: data.name,
          email: data.email,
        })
      })
      .catch(err => {
        next(err)
      })
  }

  static login(req, res, next) {
    res.status(200).json({
      msg: "CLEAR"
    })
  }
}

module.exports = UserController