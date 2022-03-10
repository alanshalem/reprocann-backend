import Paciente from '../models/Paciente.js';

export const getPacientes = (req, res) => {
	Paciente.find().exec((err, pacientes) => {
		if (err) return res.status(400).json({ success: false, err });
		return res.status(200).json({ success: true, pacientes: pacientes });
	});
};

export const createPaciente = async (req, res) => {
	const newPaciente = new Paciente(req.body);
	newPaciente.save((error) => {
		if (error) return res.status(400).json({ success: false, error });
		return res.status(200).json({ success: true });
	});
};

export const updatePacienteById = (req, res) => {
	Paciente.findByIdAndUpdate(
		req.params.id,
		{
			$set: req.body,
		},
		(err) => {
			if (err) return res.status(400).json({ success: false, err });
			return res.status(200).json({ success: true });
		}
	);
};

export const deletePacienteById = (req, res) => {
	Paciente.findByIdAndRemove(req.params.id).exec((err, deletedPaciente) => {
		if (err) return res.status(400).json({ success: false, err });
		return res.status(200).json(deletedPaciente);
	});
};

export const findPacienteById = (req, res) => {
	let id = req.params.id;
	Paciente.findById(id, (err, paciente) => {
		if (err) return res.status(400).json({ success: false, err });
		return res.status(200).json({ success: true, paciente });
	});
};
