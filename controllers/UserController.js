"use strict"

const {User} = require("../models/index.js")
const {encCompare} = require("../helpers/encryptor.js")
const {sign} = require("../helpers/jwt.js")

class UserController {
    
    static async login(req,res,next) {
        try {
            let {email,password} = req.body
            let user = await User.findOne({where:{email}})
            if (user) {
                if (encCompare(password,user.password)) {
                    let access_token = sign(user.dataValues)
                    res.status(200).json({"access_token":access_token})
                } else {
                    throw new Error("Wrong email/password combination")
                }
            } else {
                throw new Error("Wrong email/password combination")
            }
        } catch (error) {
            next(error)
        }
    }
    static async register(req,res,next) {
        try {
            let {name,email,password,organization} = req.body
            let result = await User.create({name,email,password,organization})
            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
        
    }
    static async Glogin(req,res,next) {

    }
}

module.exports = UserController