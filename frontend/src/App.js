import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src="/logo.png" alt="Logo" className="logo" />
        <div className="header-text">
          <h1>Refaccionaria Duran</h1>
          <p>¡Tu mejor aliado en refacciones diésel!</p>
        </div>
        <nav>
          <a href="/">Inicio</a>
          <a href="/nosotros">Nosotros</a>
          <a href="/contacto">Contacto</a>
          <a href="/login">Iniciar sesión</a>
        </nav>
      </header>

      <section className="categories">
        <h1>Encuentra tus Refacciones</h1>
        <div className="category-menu">
          <a href="/muelles" className="category-item">
            <img src="/Muellas.png" alt="Muelles" />
            <p>Muelles</p>
          </a>
          <a href="/perchas" className="category-item">
            <img src="/perchas.webp" alt="Perchas" />
            <p>Perchas</p>
          </a>
          <a href="/llantas" className="category-item">
            <img src="/llantas.jpg" alt="Llantas" />
            <p>Llantas</p>
          </a>
          <a href="/rines" className="category-item">
            <img src="/rines.webp" alt="Rines" />
            <p>Rines</p>
          </a>
          <a href="/cilindros" className="category-item">
            <img src="/cilindros.png" alt="Cilindros" />
            <p>Cilindros</p>
          </a>
          <a href="/monoblock" className="category-item">
            <img src="/Monoblock.webp" alt="Monoblock" />
            <p>Monoblock</p>
          </a>
          <a href="/faros" className="category-item">
            <img src="/faros.webp" alt="Faros" />
            <p>Faros</p>
          </a>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Refaccionaria Duran | <a href="/contacto">Contacto</a></p>
      </footer>
    </div>
  );
}

export default App;
