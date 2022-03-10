import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import conectarDB from './config/db.js';
import pacienteRoutes from './routes/pacienteRoutes.js';

const app = express();
// Configurar CORS
app.use(cors({ credentials: true, origin: true }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

dotenv.config();

// Conexión a la base de datos
conectarDB();

// Rutas
app.use('/api/pacientes', pacienteRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
	console.log(`SERVER ON PORT: ${PORT}`);
});
