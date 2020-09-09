module.exports = {
  errorHandler: (err, req, res, next) => {
    let errMsg = {}
    if (err.name === 'SequelizeUniqueConstraintError') {
      errMsg.status = 404
      errMsg.message = 'Email already registered!'
    } else if (err.name === 'SequelizeValidationError') {
      errMsg.status = 400
      errMsg.message = []
      err.errors.forEach(e => {
        errMsg.message.push(e.message)
      });
    } else if (err.name === 'BadRequestError') {
      errMsg.status = 400
      errMsg.message = 'Empty / invalid input!'
    } else if (err.name === 'NotFoundError') {
      errMsg.status = 404
      errMsg.message = 'Record not Found!'
    } else if (err.name === 'ForbiddenError') {
      errMsg.status = 403
      errMsg.message = 'Forbidden Access'
    } else if (err.name === 'UnauthorizedError') {
      errMsg.status = 401
      errMsg.message = 'You must be logged in first!'
    } else if (err.name === 'SequelizeDatabaseError') {
      errMsg.status = 500
      errMsg.message = 'Internal Server Error'
    } else {
      errMsg.status = 500
      errMsg.message = err || 'Unknown Error'
    }
    res.status(errMsg.status).json(errMsg)
  }
}