const db = require('../config/db');

const getHitsList = (req, res) => {
    const userId = req.session.userId;
    const userType = req.session.userType;
    const userName = req.session.userName;
    let sqlQuery = '';
    let userNameType ='';
    console.log("id: ", req.session)

    if (userType === 1) {
        // Si el usuario es un sicario, muestra solo sus objetivos
        sqlQuery = 'SELECT * FROM Objetivos WHERE idusuarios = ?';
        userNameType = 'Asesino a Sueldo';
      } else if (userType === 2) {
        // Si el usuario es un jefe, muestra sus objetivos y los objetivos de los sicarios bajo su cargo
        sqlQuery = 'SELECT * FROM Objetivos WHERE idusuarios = ? ' +
        'OR idusuarios IN (SELECT id_sicario FROM asignacionesjefessicarios WHERE id_jefe = ?)';
        userNameType = 'Jefe';
    } else if (userType === 3) {
        // Si el usuario es un gerente, muestra todos los objetivos
        sqlQuery = 'SELECT * FROM Objetivos';
        userNameType = 'Gerente';
      }
db.query(sqlQuery, [userId, userId], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error al obtener la lista de hits');
    } else {
      console.log("results: ", results)
      const hits = results.map((hit) => {
        return {
          id: hit.idobjetivos,
          descripcion: hit.descripcion,
          estado: hit.estado,
        };
      });
      res.render('hits', { nombreUsuario: userName, 
        tipoUsuario: userNameType, hits: results });
    }
  });
};
const createHit = (req, res) => {
    // Obtener los datos del formulario de creación de Hits
    const { descripcion, estado } = req.body;
  
    // Validar los datos (realiza las validaciones necesarias)
  
    // Insertar el nuevo Hit en la base de datos
    const sqlQuery = 'INSERT INTO Hits (descripcion, estado) VALUES (?, ?)';
    db.query(sqlQuery, [descripcion, estado], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error al crear el Hit');
      } else {
        res.redirect('/hits');
      }
    });
  };

  const renderCreateHitForm = (req, res) => {
    res.render('createHit');
  };
module.exports = {
  getHitsList,
  createHit,
  renderCreateHitForm
};
