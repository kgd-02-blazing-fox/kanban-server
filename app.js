"use strict"
if (process.env.NODE_ENV === "development") require("dotenv").config()

const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const cors = require("cors")
const index = require("./router")
const {errorHandling} = require("./helpers/errorhandling.js")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use("/",index)
app.use(errorHandling)


app.listen(port,()=>{
    if (process.env.NODE_ENV === "development")
    console.log(`Kanban listening at http://localhost:${port} from npm run dev`)
    else
    console.log(`Kanban listening at http://localhost:${port} by manual execution`) //change here later
})

