const express = require('express');
const router = express.Router();


router.post('/logout', (req, res) => {

  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }

    
    res.redirect('/login');
  });
});

module.exports = router;
