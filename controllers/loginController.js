const bcrypt = require('bcrypt');
const db = require('../config/db');
const path = require('path');
// Controlador para mostrar el formulario de inicio de sesión
const showLoginForm = (req, res) => {
    //res.render('login'); // Renderizar la vista del formulario de inicio de sesión
    res.sendFile(path.join(__dirname, '../views', 'login.html'));
};

// Controlador para procesar el inicio de sesión
const processLogin = (req, res) => {
    const {email, password} = req.body;
    console.log("ingreso: ", req.body)
    // Consultar la base de datos para verificar las credenciales del usuario
    db.query('SELECT * FROM usuarios WHERE email = ? AND password != "" ', [
        email, password
    ], (err, results) => {
        console.log("consulta: ",results)
        if (err) {
            console.log(err);
            res.redirect('/login'); // Redireccionar en caso de error
        } else if (results.length > 0) {
            // Las credenciales son correctas, iniciar sesión exitoso
            const user = results[0];
            console.log("user: ",user)
            bcrypt.compare(password, user.password, (err, result) => {
                console.log("result: ", result)
                if (result) {
                  // Si la contraseña coincide, redirige a la página de hits
                  req.session.loggedIn = true;
                  req.session.userId = user.idusuarios;
                  req.session.userName = user.nombre;
                  req.session.userType = user.tipo;
                  res.redirect('/hits');
                  //res.sendFile(path.join(__dirname, 'views', 'hits.html'));
                } else {
                  res.send('Contraseña incorrecta');
                }
              });
            //req.session.loggedIn = true; // Establecer la sesión como iniciada
            //res.redirect('/hits'); // Redireccionar a la página de hits
        } else {
            // Las credenciales son incorrectas, mostrar mensaje de error
            res.render('login', {error: 'Credenciales inválidas'});
        }
    });
};

module.exports = {
    showLoginForm,
    processLogin
  };