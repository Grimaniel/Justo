const express = require('express');
const app = express();
const path = require('path');
const routesLogin = require('./routes/loginRoutes');
const routesHits = require('./routes/hitsRoutes');
const routesLogout = require('./routes/logoutRoutes');
const userRoutes = require('./routes/userRoutes');
const session = require('express-session');

app.use(session({
    secret: 'grimaniel', 
    resave: false,
    saveUninitialized: false
  }));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
// Configuración de la carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de las rutas
app.use(routesLogin);
app.use(routesHits);
app.use(routesLogout);
app.use(userRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});



app.get('/hits', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'hits.html'));
});

// Configuración del puerto de escucha
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando_________ en el puerto ${port}`);
});