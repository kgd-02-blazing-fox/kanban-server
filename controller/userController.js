const { User } = require('../models/index')
const { comparePassword } = require('../helper/hashPassword')
const userToken = require('../helper/jwt')

class UserController {
  static register(req, res, next) {
    User.create({
      name: req.body.name,
      email: req.body.email,
      organization: req.body.organization,
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
    const payload = {
      email: req.body.email,
      password: req.body.password,
    }
    User.findOne({
      where: { email: payload.email }
    })
      .then(user => {
        if (user) {
          const valid = comparePassword(payload.password, user.password)
          if (valid) {
            let name = user.name
            let organization = user.organization
            let payload = {email: user.email, organization: user.organization }
            let access_token = userToken(payload)
            res.status(200).json({
              access_token, name, organization
            })
          } else {
            next({ msg: "EMAIL/PASSWORD INVALID" })
          }
        } else {
          next({ msg: "EMAIL/PASSWORD INVALID" })
        }
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = UserController