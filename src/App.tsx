import { motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { 
  FaApple, 
  FaGooglePlay, 
  FaLinkedin, 
  FaGithub, 
  FaEnvelope,
  FaReact,
  FaSwift,
  FaAndroid,
  FaCode,
  FaStar,
  FaRocket,
  FaMobileAlt
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiKotlin, 
  SiFirebase, 
  SiTailwindcss,
  SiFlutter
} from 'react-icons/si';
import Navbar from './components/Navbar';
import OptimizedImage from './components/OptimizedImage';
import SimpleStatsSection from './components/SimpleStatsSection';
import ProjectsSection from './components/ProjectsSection';
import './App.css';

function App() {
  const apps = [
    {
      name: 'Italian Brainrot Dex',
      description: 'Una aplicación innovadora para aprender italiano de manera divertida y memorable con contenido moderno.',
      image: 'https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?w=400&h=600&fit=crop',
      technologies: ['React Native', 'Expo', 'Swift', 'SwiftUI', 'CoreData', 'AdMob'],
      appStoreLink: 'https://apps.apple.com/es/app/italian-brainrot-dex/id6749838045',
      status: 'Published' as const,
      platform: 'iOS & Android' as const,
      features: [
        'Aprendizaje gamificado',
        'Contenido multimedia interactivo',
        'Seguimiento de progreso',
        'Modo offline disponible'
      ]
    },
    {
      name: 'Cat Library',
      description: 'Tu biblioteca digital de gatos. Explora, aprende y guarda información sobre diferentes razas felinas.',
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=600&fit=crop',
      technologies: ['React Native', 'Expo', 'Swift', 'SwiftUI', 'API Integration', 'AdMob'],
      appStoreLink: 'https://apps.apple.com/es/app/cat-library/id6754114981',
      status: 'Published' as const,
      platform: 'iOS & Android' as const,
      features: [
        'Base de datos de 100+ razas',
        'Galería de imágenes HD',
        'Información detallada',
        'Favoritos personalizados'
      ]
    },
    {
      name: 'Naturalia - Vida Natural',
      description: 'Tu compañero para una vida más natural y sostenible. Descubre consejos, rutinas y productos eco-friendly.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop',
      technologies: ['React Native', 'Expo', 'Firebase', 'AdMob'],
      appStoreLink: '#',
      status: 'Coming Soon' as const,
      platform: 'Android' as const,
      features: [
        'Guías de vida natural',
        'Productos eco-friendly',
        'Rutinas sostenibles',
        'Comunidad verde'
      ]
    },
    {
      name: 'Vida Virtual - Hábitos RPG',
      description: 'Transforma tu vida real en un juego RPG. Completa misiones, sube de nivel y mejora tus hábitos diarios.',
      image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=600&fit=crop',
      technologies: ['React Native', 'Expo', 'Firebase', 'AdMob', 'Gamification'],
      appStoreLink: '#',
      status: 'Coming Soon' as const,
      platform: 'Android' as const,
      features: [
        'Sistema de niveles RPG',
        'Misiones diarias',
        'Logros y recompensas',
        'Estadísticas de progreso'
      ]
    }
  ];

  const skills = [
    { name: 'React Native', icon: <FaReact />, level: 95 },
    { name: 'TypeScript', icon: <SiTypescript />, level: 90 },
    { name: 'Expo', icon: <FaReact />, level: 88 },
    { name: 'AdMob', icon: <FaRocket />, level: 85 },
    { name: 'SwiftUI', icon: <FaApple />, level: 85 },
    { name: 'Kotlin', icon: <SiKotlin />, level: 80 },
    { name: 'Flutter', icon: <SiFlutter />, level: 75 },
    { name: 'Firebase', icon: <SiFirebase />, level: 85 },
    { name: 'Android SDK', icon: <FaAndroid />, level: 88 },
  ];


  return (
    <div className="min-h-screen bg-gray-900">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1f2937',
            color: '#fff',
            border: '1px solid #374151',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
      
      <Navbar />
      
      {/* SECTION 1: Hero/Banner - Dark Mode Professional */}
      <section id="hero" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 rounded-full blur-3xl top-20 -left-20" style={{ backgroundColor: 'rgba(0, 243, 255, 0.1)', animation: 'float 6s ease-in-out infinite' }}></div>
          <div className="absolute w-96 h-96 rounded-full blur-3xl bottom-20 -right-20" style={{ backgroundColor: 'rgba(57, 255, 20, 0.1)', animation: 'float 6s ease-in-out infinite', animationDelay: '2s' }}></div>
          <div className="absolute w-96 h-96 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: 'rgba(255, 107, 53, 0.1)', animation: 'float 6s ease-in-out infinite', animationDelay: '4s' }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col justify-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-block mb-6"
            >
              <img 
                src="/cartoon.png" 
                alt="Alejandro Flores - Mobile Developer" 
                className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full shadow-2xl border-4 border-cyan-400/30"
                style={{ 
                  filter: 'drop-shadow(0 0 20px rgba(0, 243, 255, 0.3))',
                  animation: 'float 6s ease-in-out infinite'
                }}
              />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="text-white">Alejandro </span>
              <span className="text-gradient from-cyan-400 via-green-400 to-orange-500">
                Flores
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-4">
              Mobile App Developer
            </h2>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Transformo ideas en aplicaciones móviles excepcionales para iOS y Android
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 rounded-lg"
                style={{ backgroundColor: 'rgba(0, 243, 255, 0.2)', borderWidth: '2px', borderColor: '#00f3ff' }}
              >
                <p className="text-white font-semibold">2 Apps en App Store</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 rounded-lg"
                style={{ backgroundColor: 'rgba(57, 255, 20, 0.2)', borderWidth: '2px', borderColor: '#39ff14' }}
              >
                <p className="text-white font-semibold">4 Apps Coming Soon</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center gap-6"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-green-400 text-white font-bold rounded-lg shadow-lg transition-shadow"
                style={{ boxShadow: '0 10px 25px rgba(0, 243, 255, 0.3)' }}
              >
                Ver Proyectos
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Contactar
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: About - Glassmorphism */}
      <section id="about" className="relative py-20 px-6 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?w=1200')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10 container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              Sobre Mí
            </h2>
            
            <div className="h-1 w-24 bg-gradient-to-r from-white/50 to-transparent mx-auto mb-8"></div>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              Soy <strong>Alejandro Flores González</strong>, un desarrollador apasionado por crear experiencias móviles que marquen la diferencia. Con experiencia en desarrollo iOS y Android, me especializo en convertir ideas innovadoras en aplicaciones funcionales y atractivas.
            </p>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              Mi enfoque se centra en la <strong>calidad del código</strong>, la <strong>experiencia del usuario</strong> y las <strong>mejores prácticas de la industria</strong>. Tengo experiencia desplegando aplicaciones tanto en <strong>Apple Store</strong> como en <strong>Google Play Store</strong>, incluyendo el manejo completo del proceso de publicación, revisiones y actualizaciones.
            </p>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              He desarrollado aplicaciones que han alcanzado más de <strong>50,000 descargas</strong>, incluyendo experiencia con apps que fueron retiradas por temas de copyright, lo que me ha dado un profundo entendimiento de las políticas de las tiendas y cómo crear contenido original y compliant.
            </p>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              También tengo experiencia implementando <strong>sistemas de monetización con AdMob</strong>, optimizando la integración de anuncios para maximizar ingresos sin comprometer la experiencia del usuario.
            </p>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Busco constantemente nuevos desafíos que me permitan crecer profesionalmente y aportar valor real a los usuarios y negocios.
            </p>

            <div className="mt-10 flex justify-center">
              <motion.a
                href="https://www.linkedin.com/in/alexfloresgonzalez/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="glass-dark px-8 py-4 rounded-xl flex items-center gap-3 text-white font-semibold hover:bg-white/20 transition-colors"
              >
                <FaLinkedin className="text-2xl" />
                <span>Conecta en LinkedIn</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: Projects - Subtle Gradients */}
      <ProjectsSection apps={apps} />

      {/* SECTION 4: Statistics */}
      <section id="stats" className="py-24 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Números que Hablan
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Resultados que demuestran mi experiencia y dedicación
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md border border-white/15 rounded-3xl p-10 shadow-lg">
                <div className="text-5xl mb-6">🚀</div>
                <div className="text-6xl md:text-7xl lg:text-8xl font-black mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-tight">
                  8+
                </div>
                <p className="text-gray-300 font-semibold text-lg md:text-xl leading-tight">
                  Proyectos Totales
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md border border-white/15 rounded-3xl p-10 shadow-lg">
                <div className="text-5xl mb-6">📱</div>
                <div className="text-6xl md:text-7xl lg:text-8xl font-black mb-3 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent tracking-tight">
                  2
                </div>
                <p className="text-gray-300 font-semibold text-lg md:text-xl leading-tight">
                  Apps Publicadas
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md border border-white/15 rounded-3xl p-8 md:p-10 shadow-lg">
                <div className="text-5xl mb-6">⬇️</div>
                <div className="text-5xl md:text-6xl lg:text-7xl font-black mb-3 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent tracking-tight">
                  50K+
                </div>
                <p className="text-gray-300 font-semibold text-lg md:text-xl leading-tight">
                  Descargas Alcanzadas
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md border border-white/15 rounded-3xl p-10 shadow-lg">
                <div className="text-5xl mb-6">💼</div>
                <div className="text-6xl md:text-7xl lg:text-8xl font-black mb-3 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent tracking-tight">
                  4+
                </div>
                <p className="text-gray-300 font-semibold text-lg md:text-xl leading-tight">
                  Años de Experiencia
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-20">
            <div className="inline-block bg-gradient-to-r from-cyan-400/15 to-purple-400/15 backdrop-blur-sm border border-cyan-400/25 rounded-3xl px-12 py-8 shadow-2xl">
              <p className="text-gray-200 text-xl md:text-2xl font-semibold mb-3">
                <span className="text-cyan-400 font-bold">+4 aplicaciones</span> próximas a lanzarse en Google Play Store
              </p>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-4xl">
                Experiencia con apps que alcanzaron <span className="text-green-400 font-semibold">+50K descargas</span> • 
                Conocimiento profundo en <span className="text-blue-400 font-semibold">políticas de tiendas</span> • 
                Implementación avanzada de <span className="text-orange-400 font-semibold">AdMob</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Skills - Tech/Futuristic */}
      <section id="skills" className="relative py-20 px-6 bg-gray-950 overflow-hidden">
        {/* Futuristic grid background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 243, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 243, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

          {/* Animated lines */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
            className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          ></motion.div>
          <motion.div
            animate={{ x: ['100%', '-100%'] }}
            transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
            className="absolute top-2/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent"
          ></motion.div>
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
            className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          ></motion.div>
        </div>

        <div className="relative z-10 container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient from-cyan-400 via-purple-500 to-fuchsia-500">
                Habilidades Técnicas
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Tecnologías y frameworks que domino
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300" style={{ borderColor: 'rgba(0, 255, 255, 0.3)' }}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform" style={{ color: '#00ffff' }}>
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
                      <div className="h-3 bg-gray-700/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                    <span className="text-2xl font-bold" style={{ color: '#00ffff' }}>{skill.level}%</span>
                  </div>
                </div>

                {/* Geometric corner decoration */}
                <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 group-hover:w-6 group-hover:h-6 transition-all" style={{ borderColor: '#ff00ff' }}></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 group-hover:w-6 group-hover:h-6 transition-all" style={{ borderColor: '#00ffff' }}></div>
              </motion.div>
            ))}
          </div>

          {/* Additional tech logos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 mb-6">Y muchas más tecnologías...</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-50">
              <FaCode className="text-4xl text-white" />
              <FaRocket className="text-4xl text-white" />
              <SiTailwindcss className="text-4xl text-white" />
            </div>
          </motion.div>
        </div>
      </section>


      {/* SECTION 6: CTA - Bold & Colorful */}
      <section id="contact" className="relative py-20 px-6 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 overflow-hidden">
        {/* Animated blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ repeat: Infinity, duration: 20 }}
            className="absolute w-96 h-96 bg-yellow-400/30 rounded-full blur-3xl -top-20 -left-20"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{ repeat: Infinity, duration: 25 }}
            className="absolute w-96 h-96 bg-green-400/30 rounded-full blur-3xl -bottom-20 -right-20"
          ></motion.div>
        </div>

        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              ¿Listo para crear algo increíble?
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Estoy disponible para nuevos proyectos y colaboraciones. 
              <br className="hidden md:block" />
              ¡Hagamos realidad tu próxima gran idea!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <motion.a
                href="mailto:alexbeardev@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-purple-600 font-bold text-lg rounded-2xl shadow-2xl hover:shadow-white/50 transition-all flex items-center gap-3"
              >
                <FaEnvelope className="text-2xl" />
                Enviar Email
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/alexfloresgonzalez/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center gap-3"
              >
                <FaLinkedin className="text-2xl" />
                LinkedIn
              </motion.a>
              
              <motion.a
                href="https://github.com/alesfg"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-gray-500/50 transition-all flex items-center gap-3"
              >
                <FaGithub className="text-2xl" />
                GitHub
              </motion.a>
            </div>

            <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/30">
              <p className="text-white text-lg mb-2">
                <strong>📱 Especializado en:</strong>
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-white/20 rounded-full text-white font-semibold">iOS</span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-white font-semibold">Android</span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-white font-semibold">React Native</span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-white font-semibold">Expo</span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-white font-semibold">AdMob</span>
              </div>
              <p className="text-white/80 text-sm mt-4">
                ✅ Experiencia publicando en App Store y Play Store<br/>
                ✅ Apps con +50K descargas • Conocimiento en políticas de tiendas
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7: Footer - Bold & Colorful */}
      <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gradient from-cyan-400 to-green-400">
                Alejandro Flores
              </h3>
              <p className="text-gray-400">
                Desarrollador de aplicaciones móviles apasionado por crear experiencias excepcionales.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Navegación</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Inicio</a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">Proyectos</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contacto</a>
                </li>
              </ul>
            </div>

      <div>
              <h4 className="text-xl font-bold mb-4">Conecta Conmigo</h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/alexfloresgonzalez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  <FaLinkedin className="text-2xl" />
                </motion.a>
                <motion.a
                  href="https://github.com/alesfg"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-gray-500/50 transition-all"
                >
                  <FaGithub className="text-2xl" />
                </motion.a>
                <motion.a
                  href="mailto:alexbeardev@gmail.com"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-12 h-12 bg-gradient-to-br from-pink-600 to-purple-600 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                >
                  <FaEnvelope className="text-2xl" />
                </motion.a>
              </div>
            </div>
      </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Alejandro Flores González. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 mt-2 text-sm">
              Hecho con ❤️ y mucho código
        </p>
      </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
