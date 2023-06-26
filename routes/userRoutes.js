const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Ruta para mostrar el formulario de registro
router.get('/register', userController.showRegistrationForm);

// Ruta para procesar el registro de usuario
router.post('/register', userController.registerUser);

module.exports = router;