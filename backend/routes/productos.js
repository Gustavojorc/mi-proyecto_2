const express = require('express');
const router = express.Router();

// Ejemplo: Ruta para obtener todos los productos
router.get('/', (req, res) => {
    res.json({ mensaje: 'Aquí estarán los productos' });
});

module.exports = router;
