const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/register', userController.showRegistrationForm);
router.post('/register', userController.registerUser);

module.exports = router;