'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Importamos las rutas de los usuarios
var user_routes = require('./rutas/usuariosRuta');

// Middleware para manejar datos del cuerpo de la solicitud
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Ruta de prueba para verificar que el controlador funcione correctamente
app.get('/pruebas', function(req, res) {
    res.status(200).send({ message: 'Bienvenido al curso Alan Reynoso Jacuinde' });  // Corregido "mesage" a "message"
});

// Usamos las rutas de usuarios con el prefijo '/api'
app.use('/api', user_routes);

module.exports = app;
