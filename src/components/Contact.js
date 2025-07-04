import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('¡Gracias por su mensaje! Me pondré en contacto con usted pronto.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contácteme</h2>
          <p>Estoy disponible para atender sus necesidades de piscina en Cathedral City</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Información de Contacto</h3>
            
            <div className="contact-item">
              <div className="contact-icon">👨‍🔧</div>
              <div className="contact-details">
                <h4>Ivan Castañeda</h4>
                <p>Experto en Servicios de Piscina</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-details">
                <h4>Teléfono</h4>
                <a href="tel:+17605551234">(760) 555-1234</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h4>Email</h4>
                <a href="mailto:ivan@poolprocathedralcity.com">ivan@poolprocathedralcity.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h4>Área de Servicio</h4>
                <p>Cathedral City, California</p>
                <p>Y comunidades cercanas</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">🕒</div>
              <div className="contact-details">
                <h4>Horario de Atención</h4>
                <p>Lunes a Sábado: 7:00 AM - 6:00 PM</p>
                <p>Domingo: Cerrado</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">⚡</div>
              <div className="contact-details">
                <h4>Servicios de Emergencia</h4>
                <p>Disponible para emergencias urgentes</p>
                <p>Respuesta rápida garantizada</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h3>Solicitar Presupuesto Gratis</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre Completo *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Teléfono *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Dirección</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Dirección de la piscina"
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Servicio de Interés</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Seleccionar servicio</option>
                  <option value="limpieza-regular">Limpieza Regular</option>
                  <option value="mantenimiento-quimicos">Mantenimiento de Químicos</option>
                  <option value="reparaciones">Reparaciones</option>
                  <option value="limpieza-profunda">Limpieza Profunda</option>
                  <option value="mantenimiento-jardin">Mantenimiento de Jardín</option>
                  <option value="inspeccion">Inspección y Consultoría</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Describa sus necesidades específicas..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 