const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');

module.exports = function() {
	// Agrega nuevo cliente a la base de datos
	router.post('/pacientes', pacienteController.nuevoCliente);

	// Consulta todos los clientes de la base de datos
	router.get('/pacientes', pacienteController.obtenerPacientes);

	// Consulta paciente en especifico por su ID
	router.get('/pacientes/:id', pacienteController.obtenerPaciente);

	// Actualiza un paciente
	router.put('/pacientes/:id', pacienteController.actualizarPaciente);

	// Elimina un paciente
	router.delete('/pacientes/:id', pacienteController.eliminarPaciente);

	return router;
};