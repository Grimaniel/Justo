const bcrypt = require('bcrypt');
const db = require('../config/db');
const path = require('path');

const showLoginForm = (req, res) => {

    res.sendFile(path.join(__dirname, '../views', 'login.html'));
};


const processLogin = (req, res) => {
    const {email, password} = req.body;
    console.log("ingreso: ", req.body)

    db.query('SELECT * FROM usuarios WHERE email = ? AND password != "" ', [
        email, password
    ], (err, results) => {
        console.log("consulta: ",results)
        if (err) {
            console.log(err);
            res.redirect('/login'); // Redireccionar en caso de error
        } else if (results.length > 0) {

            const user = results[0];
            console.log("user: ",user)
            bcrypt.compare(password, user.password, (err, result) => {
                console.log("result: ", result)
                if (result) {

                  req.session.loggedIn = true;
                  req.session.userId = user.idusuarios;
                  req.session.userName = user.nombre;
                  req.session.userType = user.tipo;
                  res.redirect('/hits');
                  
                } else {
                  res.send('Contraseña incorrecta');
                }
              });
            
        } else {
            
            res.render('login', {error: 'Credenciales inválidas'});
        }
    });
};

module.exports = {
    showLoginForm,
    processLogin
  };