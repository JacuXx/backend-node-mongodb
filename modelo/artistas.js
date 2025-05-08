// Importamos mongoose para interactuar con MongoDB
var mongoose = require('mongoose');

// Definimos un esquema para los artistas
var Schema = mongoose.Schema;

// Creamos el esquema para la colección 'artista'
var ArtistaSchema = new Schema({
    nombre: { type: String, required: true },  // Nombre del artista
    descripcion: { type: String, required: true },  // Descripción del artista
    imagen: { type: String, default: 'null' }  // Imagen del artista (puede ser una URL o un valor por defecto)
});

// Exportamos el modelo basado en el esquema, para poder usarlo en otras partes del proyecto
module.exports = mongoose.model('Artista', ArtistaSchema);
