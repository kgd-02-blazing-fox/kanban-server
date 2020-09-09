const jwt = require('jsonwebtoken')
const { User } = require('../models/index.js')
const secret = process.env.JWT_SECRET

module.exports = {
  authentication: async (req, res, next) => {
    try{
      let token = req.headers.token
      let decoded = await jwt.verify(token,secret)
      let matchUser = await User.findOne({where: {id:decoded.id}})
      if(matchUser) req.userData = decoded
      next()
    } catch (err) {
      next(err)
    }
  }
}