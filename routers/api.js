  
const express = require('express');
const ApiController = require('../controllers/api.js');

const router = express.Router();

router.get('/news', ApiController.news);

module.exports = router;