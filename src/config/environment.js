// Environment Configuration
const config = {
  // Environment
  ENV: process.env.REACT_APP_ENV || 'development',
  
  // URLs
  API_URL: process.env.REACT_APP_API_URL || 'http://localhost:3000',
  BASE_URL: process.env.REACT_APP_BASE_URL || 'http://localhost:3000',
  
  // App Info
  TITLE: process.env.REACT_APP_TITLE || 'PoolPro Ivan',
  
  // Debug Settings
  DEBUG: process.env.REACT_APP_DEBUG === 'true',
  LOG_LEVEL: process.env.REACT_APP_LOG_LEVEL || 'info',
  
  // Contact Information
  PHONE: '+1 (760) 555-1234',
  EMAIL: 'ivan@poolpro.com',
  ADDRESS: 'Cathedral City, California',
  
  // Business Hours
  BUSINESS_HOURS: 'Monday - Saturday, 6:00 AM - 6:00 PM',
  
  // Services
  SERVICES: [
    {
      id: 'regular-cleaning',
      title: 'Limpieza Regular de Piscina',
      description: 'Limpieza semanal profesional que incluye aspirado, cepillado de paredes y limpieza de skimmers',
      price: 'Desde $75',
      icon: '🏊‍♂️'
    },
    {
      id: 'chemical-maintenance',
      title: 'Mantenimiento de Químicos',
      description: 'Balanceo químico completo del agua, control de pH, cloro y alcalinidad para agua cristalina',
      price: 'Desde $45',
      icon: '🧪'
    },
    {
      id: 'deep-cleaning',
      title: 'Limpieza Profunda',
      description: 'Limpieza exhaustiva que incluye drenado, limpieza de azulejos, filtros y equipos',
      price: 'Desde $150',
      icon: '✨'
    },
    {
      id: 'inspection-consulting',
      title: 'Inspección y Consultoría',
      description: 'Evaluación completa del estado de su piscina y asesoramiento profesional personalizado',
      price: 'Consultar',
      icon: '🔍'
    }
  ]
};

// Helper functions
export const isDevelopment = () => config.ENV === 'development';
export const isProduction = () => config.ENV === 'production';

export const log = (message, level = 'info') => {
  if (config.DEBUG || level === 'error') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
  }
};

export const getServiceById = (id) => {
  return config.SERVICES.find(service => service.id === id);
};

export default config; 