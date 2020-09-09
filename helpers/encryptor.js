"use strict"

const bcrypt = require("bcryptjs")

function encHash(string) {
    return bcrypt.hashSync(string,bcrypt.genSaltSync(5))
}

function encCompare(string,hash) {
    return bcrypt.compareSync(string,hash)
}

module.exports = {encHash,encCompare}