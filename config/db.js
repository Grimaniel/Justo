const mysql = require('mysql');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'giuseppidb'
});

// Conexión a la base de datos
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar con la base de datos:', error);
    throw error;
  }
  console.log('Conexión exitosa a la base de datos ______');
});

// Exportación de la conexión para su uso en otros archivos
module.exports = connection;