// require('dotenv').config()

if (process.env.NODE_ENV === "development") {
  require('dotenv').config()
  console.log('Starting...... Go!!.....')
}

const cors = require('cors')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const route = require('./routes/index.js')
const { errorHandler } = require('./middlewares/errorHandler.js')
const baseUrl = process.env.BASE_URL || `http://localhost:${port}`


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(route)
app.use(errorHandler)

app.listen(port, () => console.log(`connect @${port} ${baseUrl} Go!`))
