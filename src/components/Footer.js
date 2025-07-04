import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>PoolPro Ivan</h3>
            <p>Servicios profesionales de limpieza y mantenimiento de piscinas en Cathedral City, California.</p>
            <div className="footer-contact">
              <p>📞 (760) 555-1234</p>
              <p>📧 ivan@poolprocathedralcity.com</p>
              <p>📍 Cathedral City, CA</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Servicios</h4>
            <ul>
              <li>Limpieza Regular de Piscina</li>
              <li>Mantenimiento de Químicos</li>
              <li>Limpieza Profunda</li>
              <li>Inspección y Consultoría</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Horario de Atención</h4>
            <ul>
              <li>Lunes: 7:00 AM - 6:00 PM</li>
              <li>Martes: 7:00 AM - 6:00 PM</li>
              <li>Miércoles: 7:00 AM - 6:00 PM</li>
              <li>Jueves: 7:00 AM - 6:00 PM</li>
              <li>Viernes: 7:00 AM - 6:00 PM</li>
              <li>Sábado: 7:00 AM - 6:00 PM</li>
              <li>Domingo: Cerrado</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Información</h4>
            <ul>
              <li>10+ años de experiencia</li>
              <li>Servicio local en Cathedral City</li>
              <li>Presupuestos gratuitos</li>
              <li>Respuesta rápida a emergencias</li>
              <li>Garantía de satisfacción</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 PoolPro Ivan - Servicios de Piscina en Cathedral City. Todos los derechos reservados.</p>
            <div className="footer-links">
              <a href="#home">Inicio</a>
              <a href="#services">Servicios</a>
              <a href="#about">Acerca de</a>
              <a href="#contact">Contacto</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 