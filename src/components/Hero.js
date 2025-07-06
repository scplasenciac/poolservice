import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content-with-image">
          <div className="hero-content-text">
            <h1>Servicios Profesionales de Limpieza de Piscinas</h1>
            <p>
              Mantenga su piscina cristalina y en perfectas condiciones con nuestros servicios 
              especializados en Cathedral City, California.
            </p>
            
            <div className="hero-features">
              <div className="feature">
                <span>🏊‍♂️</span>
                <span>10+ años de experiencia</span>
              </div>
              <div className="feature">
                <span>⏰</span>
                <span>Disponible 6 días por semana</span>
              </div>
              <div className="feature">
                <span>📍</span>
                <span>Servicio en Cathedral City, Rancho Mirage, Palm Desert, Indio</span>
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
          <div className="hero-content-image">
            <img src="/pool.jpg" alt="Piscina limpia" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 