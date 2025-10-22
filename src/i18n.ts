import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Hero Section
      hero: {
        name: "Alejandro Flores",
        title: "Mobile App Developer",
        subtitle: "Transform ideas into exceptional mobile applications for iOS and Android",
        appsStore: "2 Apps on App Store",
        comingSoon: "4 Apps Coming Soon",
        viewProjects: "View Projects",
        contact: "Contact"
      },
      // About Section
      about: {
        title: "About Me",
        description1: "I am <strong>Alejandro Flores González</strong>, a developer passionate about creating mobile experiences that make a difference. With experience in iOS and Android development, I specialize in converting innovative ideas into functional and attractive applications.",
        description2: "My focus is on <strong>code quality</strong>, <strong>user experience</strong>, and <strong>industry best practices</strong>. I have experience deploying applications both on <strong>Apple Store</strong> and <strong>Google Play Store</strong>, including complete handling of the publication process, reviews, and updates.",
        professionalExperience: "💼 Professional Experience",
        launchpad: "LaunchPad",
        thinkia: "Thinkia (formerly Search Engine Business)",
        movetia: "Movetia & Movilges",
        fiverr: "Fiverr",
        description3: "I have developed applications that have reached more than <strong>50,000 downloads</strong>, including experience with apps that were removed due to copyright issues, which has given me a deep understanding of store policies and how to create original and compliant content.",
        description4: "I also have experience implementing <strong>monetization systems with AdMob</strong>, optimizing ad integration to maximize revenue without compromising user experience.",
        description5: "I constantly seek new challenges that allow me to grow professionally and add real value to users and businesses.",
        connectLinkedin: "Connect on LinkedIn"
      },
      // Projects Section
      projects: {
        title: "My Projects",
        subtitle: "Applications that demonstrate my skills and creativity",
        viewProject: "View Project",
        comingSoon: "Coming Soon",
        technologies: "Technologies",
        features: "Features",
        all: "All",
        published: "Published",
        upcoming: "Upcoming",
        noResults: "No projects found",
        tryAnotherFilter: "Try another filter to see more projects",
        viewCode: "View Code"
      },
      // Stats Section
      stats: {
        title: "Numbers That Speak",
        subtitle: "Results that demonstrate my experience and dedication",
        totalProjects: "Total Projects",
        publishedApps: "Published Apps",
        downloadsReached: "Downloads Reached",
        yearsExperience: "Years of Experience",
        companiesWorked: "Companies Worked",
        comingSoonText: "<span class=\"text-cyan-400 font-bold\">+4 applications</span> coming soon to Google Play Store",
        experienceText: "Experience with apps that reached <span class=\"text-green-400 font-semibold\">+50K downloads</span> • <span class=\"text-blue-400 font-semibold\">4+ years</span> working in companies like <span class=\"text-purple-400 font-semibold\">LaunchPad, Thinkia, Movetia</span> • Advanced implementation of <span class=\"text-orange-400 font-semibold\">AdMob</span>"
      },
      // Skills Section
      skills: {
        title: "Technical Skills",
        subtitle: "Technologies and frameworks I master",
        moreTechnologies: "And many more technologies..."
      },
      // Contact Section
      contact: {
        title: "Ready to create something incredible?",
        subtitle: "I'm available for new projects and collaborations. Let's make your next great idea a reality!",
        sendEmail: "Send Email",
        professionalExperience: "💼 Professional Experience:",
        experienceText: "✅ 4+ years of experience • Apps with +50K downloads<br/>✅ Specialized in React Native, iOS, Android, AdMob"
      },
      // Footer
      footer: {
        description: "Mobile app developer passionate about creating exceptional experiences.",
        navigation: "Navigation",
        home: "Home",
        projects: "Projects",
        contact: "Contact",
        connectWithMe: "Connect With Me",
        rightsReserved: "© 2025 Alejandro Flores González. All rights reserved.",
        madeWith: "Made with ❤️ and lots of code (and a little bit of AI)"
      },
      // Navbar
      navbar: {
        home: "Home",
        about: "About",
        projects: "Projects",
        skills: "Skills",
        stats: "Stats",
        contact: "Contact"
      }
    }
  },
  es: {
    translation: {
      // Hero Section
      hero: {
        name: "Alejandro Flores",
        title: "Mobile App Developer",
        subtitle: "Transformo ideas en aplicaciones móviles excepcionales para iOS y Android",
        appsStore: "2 Apps en App Store",
        comingSoon: "4 Apps Coming Soon",
        viewProjects: "Ver Proyectos",
        contact: "Contactar"
      },
      // About Section
      about: {
        title: "Sobre Mí",
        description1: "Soy <strong>Alejandro Flores González</strong>, un desarrollador apasionado por crear experiencias móviles que marquen la diferencia. Con experiencia en desarrollo iOS y Android, me especializo en convertir ideas innovadoras en aplicaciones funcionales y atractivas.",
        description2: "Mi enfoque se centra en la <strong>calidad del código</strong>, la <strong>experiencia del usuario</strong> y las <strong>mejores prácticas de la industria</strong>. Tengo experiencia desplegando aplicaciones tanto en <strong>Apple Store</strong> como en <strong>Google Play Store</strong>, incluyendo el manejo completo del proceso de publicación, revisiones y actualizaciones.",
        professionalExperience: "💼 Experiencia Profesional",
        launchpad: "LaunchPad",
        thinkia: "Thinkia (antes Search Engine Business)",
        movetia: "Movetia & Movilges",
        fiverr: "Fiverr",
        description3: "He desarrollado aplicaciones que han alcanzado más de <strong>50,000 descargas</strong>, incluyendo experiencia con apps que fueron retiradas por temas de copyright, lo que me ha dado un profundo entendimiento de las políticas de las tiendas y cómo crear contenido original y compliant.",
        description4: "También tengo experiencia implementando <strong>sistemas de monetización con AdMob</strong>, optimizando la integración de anuncios para maximizar ingresos sin comprometer la experiencia del usuario.",
        description5: "Busco constantemente nuevos desafíos que me permitan crecer profesionalmente y aportar valor real a los usuarios y negocios.",
        connectLinkedin: "Conecta en LinkedIn"
      },
      // Projects Section
      projects: {
        title: "Mis Proyectos",
        subtitle: "Aplicaciones que demuestran mis habilidades y creatividad",
        viewProject: "Ver Proyecto",
        comingSoon: "Próximamente",
        technologies: "Tecnologías",
        features: "Características",
        all: "Todas",
        published: "Publicadas",
        upcoming: "Próximas",
        noResults: "No se encontraron proyectos",
        tryAnotherFilter: "Prueba con otro filtro para ver más proyectos",
        viewCode: "Ver Código"
      },
      // Stats Section
      stats: {
        title: "Números que Hablan",
        subtitle: "Resultados que demuestran mi experiencia y dedicación",
        totalProjects: "Proyectos Totales",
        publishedApps: "Apps Publicadas",
        downloadsReached: "Descargas Alcanzadas",
        yearsExperience: "Años de Experiencia",
        companiesWorked: "Empresas Trabajadas",
        comingSoonText: "<span class=\"text-cyan-400 font-bold\">+4 aplicaciones</span> próximas a lanzarse en Google Play Store",
        experienceText: "Experiencia con apps que alcanzaron <span class=\"text-green-400 font-semibold\">+50K descargas</span> • <span class=\"text-blue-400 font-semibold\">4+ años</span> trabajando en empresas como <span class=\"text-purple-400 font-semibold\">LaunchPad, Thinkia, Movetia</span> • Implementación avanzada de <span class=\"text-orange-400 font-semibold\">AdMob</span>"
      },
      // Skills Section
      skills: {
        title: "Habilidades Técnicas",
        subtitle: "Tecnologías y frameworks que domino",
        moreTechnologies: "Y muchas más tecnologías..."
      },
      // Contact Section
      contact: {
        title: "¿Listo para crear algo increíble?",
        subtitle: "Estoy disponible para nuevos proyectos y colaboraciones. ¡Hagamos realidad tu próxima gran idea!",
        sendEmail: "Enviar Email",
        professionalExperience: "💼 Experiencia Profesional:",
        experienceText: "✅ 4+ años de experiencia • Apps con +50K descargas<br/>✅ Especializado en React Native, iOS, Android, AdMob"
      },
      // Footer
      footer: {
        description: "Desarrollador de aplicaciones móviles apasionado por crear experiencias excepcionales.",
        navigation: "Navegación",
        home: "Inicio",
        projects: "Proyectos",
        contact: "Contacto",
        connectWithMe: "Conecta Conmigo",
        rightsReserved: "© 2025 Alejandro Flores González. Todos los derechos reservados.",
        madeWith: "Hecho con ❤️ y mucho código (y un poquillo de IA)"
      },
      // Navbar
      navbar: {
        home: "Inicio",
        about: "Sobre Mí",
        projects: "Proyectos",
        skills: "Habilidades",
        stats: "Estadísticas",
        contact: "Contacto"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    debug: false,
    detection: {
      order: ['navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
