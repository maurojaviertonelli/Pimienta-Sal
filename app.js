const mainRoutes = require('./src/routes/mainRoutes');

const express = require('express');

const app = express();

const path = require('path');

app.use('/', mainRoutes);  // se concatenan las rutas del primer y segundo parámetro 

app.use(express.static('./public'));

app.set('view engine', 'ejs')

app.listen(3002, () => {
    console.log("Servidor corriendo");
});







