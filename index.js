import express from 'express';
import UsuarioRoutes from './routes/UsuarioRoutes.js';

const app = express();
const port = 3000;

// habilitar el pug
app.set('view engine', 'pug');
app.set('views', './views');

// carpeta publica
app.use(express.static('public'));

app.use('/auth', UsuarioRoutes);

app.listen(port, () => {
      console.log(`Servidor escuchando en http://localhost:${port}`);
});