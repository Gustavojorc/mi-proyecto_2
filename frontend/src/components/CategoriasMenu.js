// src/components/CategoriasMenu.js
import React from 'react';
import './CategoriasMenu.css'; // Archivo CSS para estilizar

const CategoriasMenu = ({ categorias, onCategoryClick }) => {
  return (
    <div className="categorias-container">
      {categorias.map((categoria) => (
        <div 
          key={categoria.nombre} 
          className="categoria-card" 
          onClick={() => onCategoryClick(categoria.nombre)}
        >
          <img src={categoria.imagen} alt={categoria.nombre} className="categoria-imagen" />
          <h3>{categoria.nombre}</h3>
        </div>
      ))}
    </div>
  );
};

export default CategoriasMenu;
