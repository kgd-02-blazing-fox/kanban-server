"use strict"
if (process.env.NODE_ENV === "development") require("dotenv").config()

const express = require("express")
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const port = process.env.PORT || 3000
const cors = require("cors")
const index = require("./router")
const {errorHandling} = require("./middlewares/errorhandling.js")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use("/",index)
app.use(errorHandling)

io.on('connect',(socket)=>{
  console.log('A user has been connected')

  socket.on('afterUpdate',()=>{
      socket.broadcast.emit('latestUpdate')
  })

  socket.on('leave',()=>{
    console.log('Disconnected')
    socket.disconnect()
  })
})

server.listen(port,()=>{
    if (process.env.NODE_ENV === "development")
    console.log(`Kanban listening at http://localhost:${port} from npm run dev`)
})

