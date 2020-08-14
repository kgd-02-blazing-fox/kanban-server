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
                req.organization = user.organization
                next()
            } else {
                throw new Error("Invalid token")
            }
        } catch (error) {
            next(error)
        }
    }
    static async fetch(req,res,next) {
        try {
            const credential = verify(req.headers.access_token)
            let user = await User.findOne({where:{email:credential.email}})
            if (user) {
                res.status(200).json({
                    name:user.name,
                    email:user.email,
                    organization:user.organization
                })
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
            if (task) {
                if (task.organization === req.organization) {
                    next()
                } else {
                    throw new Error("Unauthorized access")
                }
            } else throw new Error("File not found")
        } catch (error) { 
            next(error)
        }
    }
}

module.exports = Access