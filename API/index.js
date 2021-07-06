const Express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');
const bodyParser = require('body-parser');
const app = Express();

// Conecto a la base de datos en MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/APIVeterinaria', {
	useNewUrlParser : true,
	useUnifiedTopology : true,
	useFindAndModify : false
});

// Incluyo el bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended :true }));

// Defino el routing de la aplicacion
app.use('/', router());

//Arrancando el servidor
app.listen(4000, () => {
	console.log('Servidor corriendo.');
});