const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// Rota principal
router.get('/', homeController.getHomePage);

module.exports = router;
