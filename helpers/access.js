"use strict"

const {verify} = require("./jwt.js")
const {User,Task} = require("../models/index.js")

class Access {
    static async authenticate(req,res,next) {
        try {
            const credential = verify(req.headers.access_token)
            let user = await User.findOne({where:{email:credential.email}})
            if (user) {
                req.access_id = user.id
                next()
            } else {
                throw new Error("Invalid token")
            }
        } catch (error) {
            next(error)
        }
    }

    static async authorize(req,res,next) {
        try {
            let task = await Task.findByPk(req.params.id)
            if (task.UserId === req.access_id) {
                next()
            } else {
                throw new Error("Unauthorized access")
            }
        } catch (error) { 
            next(error)
        }
    }
}

module.exports = Access