'use strict'

var bcrypt = require('bcrypt');
var usuariosModelo = require('../modelo/usuarios');  // Importamos el modelo de usuarios

// Función de prueba para verificar que el controlador funcione correctamente
function prueba(req, res) {
    res.status(200).send({
        mesagge: 'Probando una acción del controlador de usuarios del api REST con node y mongo'
    });
}

// Función para registrar un usuario
async function registrarUsuario(req, res) {
    var usuario = new usuariosModelo();
    var params = req.body; // Recibimos los datos a través del cuerpo de la solicitud (POST)

    console.log(params);

    // Asignamos los valores al nuevo usuario
    usuario.nombre = params.nombre;
    usuario.apellido = params.apellido;
    usuario.email = params.email;
    usuario.password = params.password;
    usuario.rol = 'ROLE_USER'; // Por defecto, todos los usuarios son de tipo 'ROLE_USER'
    usuario.imagen = 'null';  // Imagen por defecto

    // Verificamos que la contraseña haya sido proporcionada
    if (params.password) {
        try {
            // Encriptamos la contraseña con bcrypt
            const hash = await bcrypt.hash(params.password, 10);
            usuario.password = hash; // Asignamos la contraseña encriptada

            // Verificamos que todos los campos necesarios hayan sido completados
            if (usuario.nombre != null && usuario.apellido != null && usuario.email != null) {
                // Guardamos el usuario en la base de datos utilizando promesas
                const usuarioAlmacenado = await usuario.save();
                
                return res.status(200).send({ usuarios: usuarioAlmacenado });
            } else {
                res.status(200).send({ message: 'Introduce todos los campos' });
            }
        } catch (err) {
            res.status(500).send({ message: 'Error al encriptar la contraseña' });
        }
    } else {
        res.status(500).send({ message: 'Introduce la contraseña' });
    }
}

module.exports = {
    prueba,
    registrarUsuario
};
