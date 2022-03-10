import express from 'express';
import {
	createPaciente,
	deletePacienteById,
	findPacienteById,
	getPacientes,
	updatePacienteById,
} from '../controllers/pacienteController.js';
const router = express.Router();

router.get('/', getPacientes);
router.post('/add', createPaciente);
router.get('/:id', findPacienteById);
router.post('/update/:id', updatePacienteById);
router.delete('/delete/:id', deletePacienteById);

export default router;
