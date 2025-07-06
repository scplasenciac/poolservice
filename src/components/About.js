import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Acerca de Ivan Castañeda</h2>
            <p>
              Con más de 10 años de experiencia en el cuidado y mantenimiento de piscinas, 
              he dedicado mi carrera a proporcionar servicios de la más alta calidad en Cathedral City, California.
            </p>
            <p>
              Mi pasión por mantener las piscinas en perfectas condiciones me ha llevado a desarrollar 
              técnicas especializadas que garantizan agua cristalina y equipos funcionando de manera óptima.
            </p>
            <p>
              Trabajo de lunes a sábado, de 6:00 AM a 6:00 PM, para asegurarme de que su piscina 
              esté siempre lista para disfrutar con familia y amigos.
            </p>
          </div>
          
          <div className="about-image">
            <div className="image-placeholder">
              <span>🏊‍♂️</span>
              <p>Ivan Castañeda</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 