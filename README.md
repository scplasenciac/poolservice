# PoolPro Ivan - Servicios de Limpieza de Piscinas

Sitio web profesional para Ivan Castañeda, especialista en servicios de limpieza y mantenimiento de piscinas en Cathedral City, California.

## 🏊‍♂️ Características

- Diseño responsive y moderno
- Información detallada de servicios
- Formulario de contacto
- Optimizado para SEO
- Disponible en desarrollo y producción

## 🚀 Ambientes

### Desarrollo (Localhost)
Para desarrollo local:

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
# o
npm start
```

El sitio estará disponible en: `http://localhost:3000`

### Producción (GitHub Pages)
Para build de producción:

```bash
# Build para producción
npm run build:prod

# Build optimizado para GitHub Pages
npm run build:github

# Preview del build
npm run preview
```

## 📦 Scripts Disponibles

- `npm run dev` - Ejecuta en modo desarrollo con variables de entorno de desarrollo
- `npm run build:dev` - Build para desarrollo
- `npm run build:prod` - Build para producción
- `npm run build:github` - Build optimizado para GitHub Pages (sin source maps)
- `npm run preview` - Servir el build localmente para preview

## 🔧 Configuración

### Variables de Entorno

#### Desarrollo (`env.development`)
```
REACT_APP_ENV=development
REACT_APP_API_URL=http://localhost:3000
REACT_APP_BASE_URL=http://localhost:3000
REACT_APP_TITLE=PoolPro Ivan - Development
REACT_APP_DEBUG=true
REACT_APP_LOG_LEVEL=debug
```

#### Producción (`env.production`)
```
REACT_APP_ENV=production
REACT_APP_API_URL=https://your-production-api.com
REACT_APP_BASE_URL=https://your-username.github.io/poolman_v1
REACT_APP_TITLE=PoolPro Ivan - Professional Pool Services
REACT_APP_DEBUG=false
REACT_APP_LOG_LEVEL=error
```

## 🌐 Despliegue en GitHub Pages

1. **Configurar GitHub Pages**:
   - Ve a Settings > Pages en tu repositorio
   - Selecciona "Deploy from a branch"
   - Selecciona la rama `gh-pages`

2. **Deploy Automático**:
   - El workflow de GitHub Actions se ejecutará automáticamente
   - Cada push a `main` desplegará automáticamente
   - El sitio estará disponible en: `https://your-username.github.io/poolman_v1`

3. **Deploy Manual**:
   ```bash
   npm run build:github
   # Subir la carpeta build/ a la rama gh-pages
   ```

## 📁 Estructura del Proyecto

```
poolman_v1/
├── public/                 # Archivos públicos
├── src/
│   ├── components/         # Componentes React
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── Services.js
│   │   ├── About.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── config/
│   │   └── environment.js  # Configuración de ambientes
│   ├── App.js
│   └── index.js
├── env.development         # Variables de entorno desarrollo
├── env.production          # Variables de entorno producción
├── .github/workflows/      # GitHub Actions
└── package.json
```

## 🛠️ Tecnologías

- React 19
- CSS3 con Flexbox y Grid
- Responsive Design
- GitHub Pages
- GitHub Actions

## 📞 Información de Contacto

- **Ivan Castañeda**
- **Teléfono**: (760) 555-1234
- **Ubicación**: Cathedral City, California
- **Horarios**: Lunes - Sábado, 6:00 AM - 6:00 PM
- **Experiencia**: 10 años en servicios de piscinas

## 📝 Licencia

Este proyecto es privado y está diseñado específicamente para Ivan Castañeda.
