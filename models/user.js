const db = require('../config/db');

const createUser = (email, password) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO usuarios (nombre, email, password, tipo) VALUES (?, ?, ?, ?)', ['anonymus', email, password, '1'], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.insertId);
      }
    });
  });
};

const getUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM usuarios WHERE email = ?', [email], (err, results) => {
      if (err) {
        reject(err);
      } else {
        if (results.length > 0) {
          resolve(results[0]);
        } else {
          resolve(null);
        }
      }
    });
  });
};

module.exports = {
  createUser,
  getUserByEmail,
};