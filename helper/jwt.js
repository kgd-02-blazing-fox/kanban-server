const jwt = require('jsonwebtoken')

function userToken(paylaod) {
  const token = jwt.sign(paylaod, process.env.JWT_SECRET)
  return token
}

module.exports = userToken