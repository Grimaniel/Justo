const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

// Ruta para mostrar el formulario de inicio de sesión
router.get('/login', loginController.showLoginForm);

// Ruta para procesar el inicio de sesión
router.post('/login', loginController.processLogin);

module.exports = router;