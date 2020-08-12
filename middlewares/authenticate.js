const jwt = require('jsonwebtoken')
const { User } = require('../models/index')

let authenticate = (req, res, next) => {
  const payload = jwt.verify(req.headers.access_token, process.env.JWT_SECRET)
  // console.log(payload.email);
  // next()
  User.findOne({
    where: { email: payload.email }
  })
    .then(user => {
      if (user) {
        req.userName = user.name
        req.userId = user.id
        req.userOrganization = user.organization
        next()
      } else {
        next({
          name: "bad request",
          msg: "false credentials"
        })
      }
    })
    .catch(err => {
      next(err)
    })
}

module.exports = authenticate