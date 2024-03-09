import express from 'express';
import UsuarioRoutes from './routes/UsuarioRoutes.js';

const app = express();
const port = 3000;

app.use('/', UsuarioRoutes);

app.listen(port, () => {
      console.log(`Servidor escuchando en http://localhost:${port}`);
});