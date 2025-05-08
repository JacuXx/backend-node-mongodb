var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.connect('mongodb://127.0.0.1:27017/grupo4853')
    .then(() => {
        console.log("conexion exitosa");
        app.listen(port, function() {
            console.log("Servidor escuchando en http://localhost:" + port);
        });
    })
    .catch(() => {
        console.log("Error");
    });
