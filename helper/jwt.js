const jwt = require('jsonwebtoken')

function userToken(payload) {
  const token = jwt.sign(payload, process.env.JWT_SECRET)
  return token
}

module.exports = userToken