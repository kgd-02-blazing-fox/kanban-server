"use strict"

function errorHandling(err,req,res,next) {
    console.log(err)
}

module.exports = {errorHandling}