const bcrypt = require('bcryptjs')

function hashPassword(password){
    const salt = bcrypt.genSaltSync(process.env.SALT)
    const hash = bcrypt.hashSync(password, salt)

    return hash
}

function comparePassword(inputPassword, dbPassword){
    return bcrypt.compareSync(inputPassword, dbPassword)
}

module.exports = { hashPassword, comparePassword }