var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    rol: { type: String, default: 'ROLE_USER' },
    imagen: { type: String, default: 'null' }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
