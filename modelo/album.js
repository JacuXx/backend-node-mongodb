'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Definimos el esquema para los álbumes
var EsquemaAlbum = new Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    year: { type: Number, required: true },
    imagen: { type: String, default: 'null' },
    // Relación con el artista
    artista: { type: Schema.ObjectId, ref: 'Artista' }
});

// Exportamos el modelo de 'Album'
module.exports = mongoose.model('Album', EsquemaAlbum);
