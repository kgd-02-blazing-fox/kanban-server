require('dotenv').config()

const express = require('express');
const app = express();
const router = require('./routers/index.js')

const PORT = process.env.PORT

const cors = require('cors')
const {errorHandler} = require('./middlewares/errorHandler.js');

app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(express.json());

app.use('/', router)
app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`app running ${PORT}`)
})