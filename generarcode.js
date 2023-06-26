const bcrypt = require('bcrypt');
const saltRounds = 10;

const plainPassword = '123456';

bcrypt.hash(plainPassword, saltRounds)
  .then((hash) => {
    console.log('Hash bcrypt generado:', hash);
  })
  .catch((error) => {
    console.error('Error al generar el hash bcrypt:', error);
  });