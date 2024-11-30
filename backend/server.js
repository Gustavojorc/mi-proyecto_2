// server.js
const express = require('express');
const cors = require('cors'); // Para permitir solicitudes desde el frontend
const app = express();
const port = 5000; // Puerto del backend
const db = require('./config/db');

const productosRoutes = require('./routes/productos');
app.use('/api/productos', productosRoutes);

// Middleware
app.use(cors()); // Habilitar CORS para React
app.use(express.json()); // Parsear JSON en las solicitudes

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Servidor funcionando!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});
