const bcrypt = require('bcrypt');
const User = require('../models/user');

const showRegistrationForm = (req, res) => {
    res.render('register', { error: null });
  };

const registerUser = async (req, res) => {
  const { email, password } = req.body;
    console.log("user y pass: ",req.body)
  try {
    
    const existingUser = await User.getUserByEmail(email);
    if (existingUser) {
      return res.render('register', { error: 'El correo electrónico ya está registrado' });
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    console.log("password: ",password)
    if (!passwordRegex.test(password)) {
        console.log("no ingreso ", passwordRegex.test(password));
        return res.render('register', { error: 'La contraseña no cumple los requisitos' });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

    
    const userId = await User.createUser(email, hashedPassword);

    res.redirect('/login');
  } catch (error) {
    console.log(error);
    res.render('register', { error: 'Ocurrió un error al registrar el usuario' });
  }
};

module.exports = {
  registerUser,
  showRegistrationForm
};
