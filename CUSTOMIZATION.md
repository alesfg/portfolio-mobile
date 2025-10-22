# Guía de Personalización del Portfolio

## 🎨 Personalizar Información Personal

### Editar Datos Básicos
Abre `/src/App.tsx` y busca:

```typescript
// Línea ~145
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
  <span className="text-white">Alejandro </span>
  <span className="text-gradient from-cyan-400 via-green-400 to-orange-500">
    Flores
  </span>
</h1>
```

Cambia "Alejandro Flores" por tu nombre.

### Actualizar Bio
Busca la sección "Sobre Mí" (línea ~230):

```typescript
<p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
  Soy <strong>Alejandro Flores González</strong>, un desarrollador...
</p>
```

## 📱 Agregar/Editar Aplicaciones

En el array `apps` (línea ~30), cada app tiene esta estructura:

```typescript
{
  name: 'Nombre de tu App',
  description: 'Descripción breve y atractiva',
  image: 'URL de la imagen (400x600px recomendado)',
  technologies: ['Tech1', 'Tech2', 'Tech3'],
  appStoreLink: 'https://apps.apple.com/...',
  status: 'Published', // o 'Coming Soon'
  platform: 'iOS' // o 'Android'
}
```

### Cambiar Imágenes de Apps

1. **Opción 1: Usar URLs externas** (actual)
   - Mantén las URLs de Unsplash o usa otras URLs

2. **Opción 2: Usar imágenes locales** (recomendado)
   ```bash
   # Crear carpeta de imágenes
   mkdir -p public/images/apps
   
   # Coloca tus screenshots ahí
   # Luego actualiza las URLs:
   image: '/images/apps/mi-app.png'
   ```

## 💼 Actualizar Habilidades

En el array `skills` (línea ~60):

```typescript
{ 
  name: 'Nombre de la tecnología', 
  icon: <IconComponent />,  // De react-icons
  level: 90  // 0-100
}
```

### Iconos Disponibles

Ya están importados estos paquetes de iconos:
- `FaApple, FaGooglePlay, FaReact, FaSwift, FaAndroid` - de `react-icons/fa`
- `SiTypescript, SiKotlin, SiFirebase, SiFlutter` - de `react-icons/si`

Para agregar más, visita: https://react-icons.github.io/react-icons/

## 🌟 Editar Testimonios

En el array `testimonials` (línea ~71):

```typescript
{
  name: 'Nombre del Cliente',
  role: 'Cargo',
  company: 'Empresa',
  text: 'Testimonio completo aquí...',
  rating: 5  // 1-5 estrellas
}
```

## 🎨 Cambiar Colores

Los colores principales están definidos inline. Para cambiarlos globalmente:

### Colores Neón Principales
Busca y reemplaza estos valores hexadecimales:
- `#00f3ff` - Azul neón (cyan)
- `#39ff14` - Verde neón
- `#ff6b35` - Naranja neón
- `#00ffff` - Cyan
- `#ff00ff` - Magenta
- `#bc13fe` - Púrpura

### Colores Tailwind
Los gradientes usan clases de Tailwind como:
- `from-cyan-400 to-green-400`
- `from-purple-500 to-fuchsia-500`

Cambia estos valores según tus preferencias.

## 📧 Actualizar Información de Contacto

### Email
Busca `alex@example.com` y reemplázalo con tu email real.

### LinkedIn
Ya está configurado correctamente:
```typescript
href="https://www.linkedin.com/in/alexfloresgonzalez/"
```

### Agregar más redes sociales

En el Footer (línea ~613), agrega:

```typescript
<motion.a
  href="https://twitter.com/tuusuario"
  whileHover={{ scale: 1.2, rotate: 5 }}
  className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center"
>
  <FaTwitter className="text-2xl" />
</motion.a>
```

## 🚀 Optimizar Imágenes

Para mejor rendimiento:

1. **Tamaño recomendado de screenshots**: 400x600px
2. **Formato**: WebP o PNG optimizado
3. **Herramientas**:
   - TinyPNG: https://tinypng.com/
   - Squoosh: https://squoosh.app/

## 📱 Ajustar Responsive

Los breakpoints de Tailwind ya están configurados:
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px

Ejemplo:
```typescript
className="text-2xl md:text-4xl lg:text-6xl"
// móvil: 2xl, tablet: 4xl, desktop: 6xl
```

## 🌐 SEO y Meta Tags

Edita `/index.html`:

```html
<meta name="description" content="Tu descripción aquí" />
<meta name="keywords" content="tus, palabras, clave" />
<meta name="author" content="Tu Nombre" />
<title>Tu Nombre - Mobile Developer</title>
```

## 📊 Analytics (Opcional)

Para agregar Google Analytics, añade en `/index.html` antes de `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🎭 Personalizar Animaciones

Las animaciones están en Framer Motion. Para ajustarlas:

### Velocidad de animación
```typescript
transition={{ duration: 0.8 }}  // Cambiar 0.8 por tu valor
```

### Tipo de animación
```typescript
transition={{ type: 'spring', stiffness: 200 }}
```

### Desactivar animaciones
Simplemente elimina las props `initial`, `animate`, y `transition` de los componentes `<motion.*>`.

## 🔧 Solución de Problemas

### Las imágenes no cargan
- Verifica que las URLs sean accesibles
- Si usas imágenes locales, asegúrate de que estén en `/public/`

### Los colores se ven diferentes
- Limpia el cache: `npm run build` y luego `npm run preview`
- Verifica que los valores hex estén correctos

### Errores de compilación
```bash
# Reinstalar dependencias
rm -rf node_modules
npm install

# Limpiar cache
npm run dev -- --force
```

## 📦 Despliegue

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Sube la carpeta 'dist' a Netlify
```

### GitHub Pages
```bash
# Agregar a vite.config.ts:
base: '/nombre-repo/'

npm run build
# Sube 'dist' a gh-pages branch
```

---

¿Necesitas ayuda? Revisa la documentación de:
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

