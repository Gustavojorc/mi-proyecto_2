import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './Routes'; // Importa las rutas
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes /> {/* Aquí usas AppRoutes en lugar de App */}
  </React.StrictMode>
);

// Si deseas medir el rendimiento de la app:
// reportWebVitals(console.log);
reportWebVitals();

