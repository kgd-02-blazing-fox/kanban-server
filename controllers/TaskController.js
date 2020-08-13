"use strict"

const {User,Task} = require("../models/index.js")

class TaskController {

    static async getByOrganization(req,res,next) {
        try {
            let user = await User.findByPk(req.access_id)
            let results = await Task.findAll({where:{organization:user.organization},order:[["createdAt","ASC"]]})
            res.status(200).json(results)
        } catch (error) {
            next(error)
            //user not found -- filtered by authentication
            //task not found -- optional
            //internal error
        }
    }
    static async postByOrganization(req,res,next) {
        try {
            let user = await User.findByPk(req.access_id)
            let form = {
                title:req.body.title,
                description:req.body.description,
                category:req.body.category,
                organization:user.organization,
                UserId:req.access_id
            }
            let results = await Task.create(form)
            res.status(201).json(results)
        } catch (error) {
            next(error)
            //user not found -- filtered by authentication
            //bad requests (requirements)
            //internal error
        }
    }
    static async putIdByOrganization(req,res,next) {
        try {
            let {title,description} = req.body
            let result = await Task.update({title,description},{where:{id:req.params.id},returning:true})
            res.status(201).json(result[1][0])
        } catch (error) {
            next(error)
            //task not found -- filtered by authorization
            //bad requests (requirements)
            //internal error
        }
    }
    static async patchIdByOrganization(req,res,next) {
        try {
            let {category} = req.body
            let result = await Task.update({category},{where:{id:req.params.id},returning:true})
            res.status(201).json(result[1][0])
        } catch (error) {
            next(error)
            //task not found -- filtered by authorization
            //bad requests (requirements)
            //internal error
        }
    }
    static async delIdByOrganization(req,res,next) {
        try {
            let task = await Task.findByPk(req.params.id)
            let result = await Task.destroy({where:{id:req.params.id},returning:true})
            res.status(200).json(task)
        } catch (error) {
            next(error)
            //task not found -- filtered by authorization
            //internal error
        }
    }
}

module.exports = TaskController