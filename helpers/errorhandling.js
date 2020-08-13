"use strict"

function errorHandling(err,req,res,next) {
    console.log(err) //debug purposes

    if (err.name !== "Error") {
        if (err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError") {
            res.status(400).json({"message":err.errors[0].message})
        } else {
            res.status(500).json({"message":"Internal error"})
        }
    } else {
        switch (err.message) {
            case "Wrong email/password combination":
                res.status(400).json({"message":"Username/password didn't match"})
                break;
            case "File not found":
                res.status(404).json({"message":"File not found"})
                break;
            case "Invalid token":
                res.status(401).json({"message":"Access denied"})
                break;
            case "Unauthorized access":
                res.status(401).json({"message":"Unauthorized access"})
                break;
            default:
                res.status(500).json({"message":"Internal error"})
                break;
        }
    }

}

module.exports = {errorHandling}