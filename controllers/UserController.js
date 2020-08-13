"use strict"

const {User} = require("../models/index.js")
const {encCompare} = require("../helpers/encryptor.js")
const {sign} = require("../helpers/jwt.js")
const {OAuth2Client} = require("google-auth-library")

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
            let access_token = sign(result.dataValues)
            res.status(201).json({"access_token":access_token})
        } catch (error) {
            next(error)
        }
        
    }
    static async Glogin(req,res,next) {
        try {
            const gClient = new OAuth2Client(process.env.GOOGLE_ID)
                const ticket = await gClient.verifyIdToken({
                    idToken:req.headers.google_token,
                    audience:process.env.GOOGLE_ID
                })
                const credential = ticket.getPayload()
                const user = await User.findOne({where:{email:credential.email}})
                if (user) {
                    console.log("reached glogin")   //change here
                    console.log(user)  //change here
                    let access_token = sign(user.dataValues)
                    res.status(200).json({access_token})
                } else {
                    console.log("reached gregister")   //change here
                    const userCreate = await User.create({
                        name:credential.email.substring(0, credential.email.lastIndexOf("@")),
                        email:credential.email
                    })
                
                    console.log(userCreate.dataValues)   //change here
                    let access_token = sign(userCreate.dataValues)
                    res.status(201).json({access_token})
                }
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController