import mongoose from 'mongoose';

const pacienteSchema = mongoose.Schema(
	{
		nombreCompleto: {
			type: String,
			required: true,
			trim: true,
		},
		dni: {
			type: Number,
			required: true,
			trim: true,
			unique: true,
		},
		direccion: {
			type: String,
			required: true,
			trim: true,
		},
		localidad: {
			type: String,
			required: true,
			trim: true,
		},
		provincia: {
			type: String,
			required: true,
			trim: true,
		},
		codigoVinculacion: {
			type: String,
			required: true,
			trim: true,
		},
		patologiaInformada: {
			type: String,
			required: true,
			trim: true,
		},
		motivoConsentimiento: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

const Paciente = mongoose.model('Paciente', pacienteSchema);

export default Paciente;
