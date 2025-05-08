'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Definimos el esquema para las canciones
var EsquemaCancion = new Schema({
    numero: { type: String, required: true },
    nombre: { type: String, required: true },
    duracion: { type: String, required: true },
    archivo: { type: String, required: true },
    // Relación con el álbum
    album: { type: Schema.ObjectId, ref: 'Album' }
});

// Exportamos el modelo de 'Cancion'
module.exports = mongoose.model('Cancion', EsquemaCancion);
