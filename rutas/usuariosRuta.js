'use strict'

var express = require('express');
var UsuarioControl = require('../controlador/usuarioControl'); // Importamos el controlador

var api = express.Router();

// Definimos la ruta para registrar un usuario
api.post('/registro', UsuarioControl.registrarUsuario);

// Ruta de prueba para verificar que el controlador está funcionando
api.get('/probando-controlador', UsuarioControl.prueba);

module.exports = api;
