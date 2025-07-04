import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-header">
              <h2>Acerca de Ivan Castañeda</h2>
              <p>Su experto local en servicios de piscina en Cathedral City</p>
            </div>
            
            <div className="about-description">
              <p>
                Con más de <strong>10 años de experiencia</strong> en el mantenimiento y limpieza de piscinas, 
                me he dedicado a proporcionar servicios de la más alta calidad a las familias de Cathedral City 
                y sus alrededores.
              </p>
              
              <p>
                Mi compromiso es mantener su piscina en perfectas condiciones durante todo el año, 
                permitiéndole disfrutar de un oasis de relajación y diversión en su propio hogar.
              </p>
            </div>

            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">⭐</div>
                <div className="feature-content">
                  <h4>10+ Años de Experiencia</h4>
                  <p>Conocimiento profundo en todos los aspectos del mantenimiento de piscinas</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">📅</div>
                <div className="feature-content">
                  <h4>Disponibilidad Flexible</h4>
                  <p>Disponible de lunes a sábado para atender sus necesidades de piscina</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">🏠</div>
                <div className="feature-content">
                  <h4>Servicio Local</h4>
                  <p>Residente de Cathedral City, conozco la comunidad y sus necesidades específicas</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">🔧</div>
                <div className="feature-content">
                  <h4>Servicios Completos</h4>
                  <p>Desde limpieza básica hasta reparaciones complejas, cubro todas sus necesidades</p>
                </div>
              </div>
            </div>

            <div className="about-cta">
              <h3>¿Por qué elegir mis servicios?</h3>
              <ul>
                <li>✓ Atención personalizada y dedicada</li>
                <li>✓ Precios competitivos y transparentes</li>
                <li>✓ Trabajo puntual y confiable</li>
                <li>✓ Garantía de satisfacción</li>
                <li>✓ Respuesta rápida a emergencias</li>
              </ul>
            </div>
          </div>

          <div className="about-image">
            <div className="profile-placeholder">
              <span>👨‍🔧</span>
              <h3>Ivan Castañeda</h3>
              <p>Experto en Piscinas</p>
              <div className="credentials">
                <span>🏆 10+ años de experiencia</span>
                <span>📍 Cathedral City, CA</span>
                <span>📞 Disponible 6 días/semana</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 