const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');


router.get('/login', loginController.showLoginForm);


router.post('/login', loginController.processLogin);

module.exports = router;