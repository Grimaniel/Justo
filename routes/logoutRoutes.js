const express = require('express');
const router = express.Router();

// Ruta para cerrar sesión
router.post('/logout', (req, res) => {
  // Destruir la sesión
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }

    
    res.redirect('/login');
  });
});

module.exports = router;
