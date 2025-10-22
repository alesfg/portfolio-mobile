import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '50px 0px'
  });

  const stats = [
    { 
      value: 8, 
      label: 'Proyectos Totales', 
      suffix: '+',
      icon: '🚀',
      color: 'from-cyan-400 to-blue-500'
    },
    { 
      value: 2, 
      label: 'Apps Publicadas', 
      suffix: '',
      icon: '📱',
      color: 'from-green-400 to-emerald-500'
    },
    { 
      value: 50000, 
      label: 'Descargas Alcanzadas', 
      suffix: '+',
      icon: '⬇️',
      color: 'from-orange-400 to-red-500'
    },
    { 
      value: 4, 
      label: 'Años de Experiencia', 
      suffix: '+',
      icon: '💼',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <section id="stats" className="py-24 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
      {/* Background Elements - Optimized for Mac */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-80 h-80 rounded-full blur-3xl top-16 -left-16 opacity-60" style={{ backgroundColor: 'rgba(0, 243, 255, 0.08)' }}></div>
        <div className="absolute w-80 h-80 rounded-full blur-3xl bottom-16 -right-16 opacity-60" style={{ backgroundColor: 'rgba(57, 255, 20, 0.08)' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Números que Hablan
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Resultados que demuestran mi experiencia y dedicación
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md border border-white/15 rounded-3xl p-10 hover:border-white/25 hover:shadow-2xl transition-all duration-500 shadow-lg">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={inView ? { rotate: [0, 5, -5, 0] } : { rotate: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.2 + 0.3,
                    type: 'spring',
                    stiffness: 200
                  }}
                  className="text-5xl mb-6 opacity-90"
                >
                  {stat.icon}
                </motion.div>
                
                <motion.div
                  className={`text-6xl md:text-7xl lg:text-8xl font-black mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent tracking-tight`}
                  style={{
                    textShadow: '0 0 30px rgba(255, 255, 255, 0.1)',
                    WebkitTextStroke: '0.5px rgba(255, 255, 255, 0.1)'
                  }}
                >
                  {inView && (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      delay={index * 0.2}
                      suffix={stat.suffix}
                    />
                  )}
                  {!inView && <span>{stat.value}{stat.suffix}</span>}
                </motion.div>
                
                <p className="text-gray-300 font-semibold text-lg md:text-xl leading-tight">
                  {stat.label}
                </p>

                {/* Hover effect line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  className={`h-1.5 bg-gradient-to-r ${stat.color} rounded-full mt-6 shadow-lg`}
                  style={{ boxShadow: `0 0 10px rgba(0, 0, 0, 0.3)` }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info - Optimized for Mac */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20"
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
