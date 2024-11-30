import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src="/logo.png" alt="Logo" />
        <nav>
          <a href="/">Inicio</a>
          <a href="/productos">Productos</a>
          <a href="/nosotros">Nosotros</a>
          <a href="/contacto">Contacto</a>
          <a href="/login">Iniciar sesión</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Bienvenidos a Refaccionaria Duran</h1>
        <p>Encuentra las mejores piezas para tus vehículos y maquinaria</p>
        <a href="/productos" className="cta-button">Ver Productos</a>
      </section>

      <section className="product-grid">
        <div className="product-card">
          <img src="/product1.jpg" alt="Producto 1" />
          <h3>Refacción 1</h3>
          <p>$50.00</p>
          <a href="/producto/1" className="btn">Ver detalles</a>
        </div>
        <div className="product-card">
          <img src="/product2.jpg" alt="Producto 2" />
          <h3>Refacción 2</h3>
          <p>$80.00</p>
          <a href="/producto/2" className="btn">Ver detalles</a>
        </div>
        <div className="product-card">
          <img src="/product3.jpg" alt="Producto 3" />
          <h3>Refacción 3</h3>
          <p>$120.00</p>
          <a href="/producto/3" className="btn">Ver detalles</a>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Refaccionaria Duran | <a href="/contacto">Contacto</a></p>
      </footer>
    </div>
  );
}

export default App;


