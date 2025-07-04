import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>Servicios Profesionales de Limpieza de Piscinas</h1>
          <h2>Cathedral City, California</h2>
          <p className="hero-subtitle">
            Mantenga su piscina cristalina y lista para disfrutar con nuestro servicio profesional y confiable
          </p>
          <div className="hero-features">
            <div className="feature">
              <span className="feature-icon">⭐</span>
              <span>10 años de experiencia</span>
            </div>
            <div className="feature">
              <span className="feature-icon">📅</span>
              <span>Disponible 6 días por semana</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🏠</span>
              <span>Servicio local en Cathedral City</span>
            </div>
          </div>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Solicitar Presupuesto Gratis
            </a>
            <a href="#services" className="btn btn-secondary">
              Ver Servicios
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="pool-image-placeholder">
            <span>🏊‍♂️</span>
            <p>Piscina Cristalina</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 