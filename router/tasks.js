"use strict"

const router = require("express").Router()
const TaskController = require("../controllers/TaskController.js")
const Access = require("../helpers/access.js")

router.get("/",Access.authenticate,TaskController.getByOrganization)
router.post("/",Access.authenticate,TaskController.postByOrganization)
router.put("/:id",Access.authenticate,Access.authorize,TaskController.putIdByOrganization)
router.patch("/:id",Access.authenticate,Access.authorize,TaskController.patchIdByOrganization)
router.delete("/:id",Access.authenticate,Access.authorize,TaskController.delIdByOrganization)

module.exports = router