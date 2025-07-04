import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: '🏊‍♂️',
      title: 'Limpieza Regular de Piscina',
      description: 'Servicio semanal completo que incluye limpieza de hojas, desechos, cepillado de paredes y aspirado del fondo.',
      features: ['Limpieza de hojas y desechos', 'Cepillado de paredes', 'Aspirado del fondo', 'Verificación de químicos']
    },
    {
      id: 2,
      icon: '🧪',
      title: 'Mantenimiento de Químicos',
      description: 'Balanceo profesional de químicos para mantener el agua cristalina y segura para nadar.',
      features: ['Control de pH y cloro', 'Balanceo de alcalinidad', 'Tratamiento de algas', 'Análisis de agua']
    },
    {
      id: 3,
      icon: '✨',
      title: 'Limpieza Profunda',
      description: 'Servicio de limpieza profunda para piscinas que necesitan atención especial.',
      features: ['Limpieza de azulejos', 'Tratamiento de manchas', 'Limpieza de filtros', 'Descarga de agua']
    },
    {
      id: 4,
      icon: '🔍',
      title: 'Inspección y Consultoría',
      description: 'Evaluación profesional del estado de su piscina y recomendaciones personalizadas.',
      features: ['Inspección completa', 'Reporte detallado', 'Recomendaciones', 'Presupuesto personalizado']
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Nuestros Servicios</h2>
          <p>Servicios profesionales de limpieza y mantenimiento de piscinas en Cathedral City</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <h3>¿Necesita un servicio personalizado?</h3>
          <p>Contácteme para discutir sus necesidades específicas y obtener un presupuesto personalizado</p>
          <a href="#contact" className="btn btn-primary">
            Contactar Ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services; 