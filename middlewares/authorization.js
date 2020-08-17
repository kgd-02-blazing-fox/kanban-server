const { Task } = require('../models/index.js')
const customError = require('http-errors')

module.exports = {
  authorization: async (req, res, next) => {
    try {
      let taskId = Number(req.params.id)
      let userId = Number(req.userData.id)
      let found = await Task.findOne({where: {id: taskId}})
      if (found) {
        if(found.userId === userId) {
          next()
        } else {
          throw new customError(403)
        }
      } else {
        throw new customError(404)
      }
    } catch (err) {
      console.log('asd')
      console.log('error di authorization')
      next(err)
    }
  }
}