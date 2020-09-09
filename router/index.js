"use strict"

const router = require("express").Router()
const tasks = require("./tasks.js")
const UserController = require("../controllers/UserController.js")
const Access = require("../middlewares/access.js")


router.use("/tasks",tasks)
router.post("/register",UserController.register)
router.post("/login",UserController.login)
router.post("/Glogin",UserController.Glogin)
router.get("/user",Access.fetch)


module.exports = router