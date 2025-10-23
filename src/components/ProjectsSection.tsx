import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaApple, FaGooglePlay, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import OptimizedImage from './OptimizedImage';

interface App {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  appStoreLink: string;
  status: 'Published' | 'Coming Soon';
  platform: 'iOS' | 'Android' | 'iOS & Android';
  githubLink?: string;
  features?: string[];
}

interface ProjectsSectionProps {
  apps: App[];
}

const ProjectsSection = ({ apps }: ProjectsSectionProps) => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  const [selectedApp, setSelectedApp] = useState<App | null>(null);

  const filters = [
    { key: 'all', label: t('projects.all'), icon: '📱' },
    { key: 'published', label: t('projects.published'), icon: '✅' },
    { key: 'upcoming', label: t('projects.upcoming'), icon: '🚀' },
    { key: 'ios', label: 'iOS', icon: '🍎' },
    { key: 'android', label: 'Android', icon: '🤖' }
  ];

  const filteredApps = apps.filter(app => {
    if (filter === 'all') return true;
    if (filter === 'published') return app.status === 'Published';
    if (filter === 'upcoming') return app.status === 'Coming Soon';
    if (filter === 'ios') return app.platform === 'iOS & Android';
    if (filter === 'android') return app.platform === 'Android' || app.platform === 'iOS & Android';
    return true;
  });

  const ProjectCard = ({ app, index }: { app: App; index: number }) => (
    <motion.div
      key={app.name}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
      onClick={() => setSelectedApp(app)}
    >
      <div className="relative overflow-hidden bg-white h-80">
        <OptimizedImage
          src={app.image}
          alt={app.name}
          className="w-full h-full"
          objectFit="contain"
        />
        <div className="absolute top-4 right-4">
          {app.status === 'Published' ? (
            <span className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-semibold shadow-lg">
              ✓ {t('projects.published')}
            </span>
          ) : (
            <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full text-sm font-semibold shadow-lg">
              🚀 {t('projects.comingSoon')}
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-2xl font-bold text-gray-900">{app.name}</h3>
          <div className="flex gap-2">
            {app.platform === 'iOS & Android' ? (
              <>
                <FaApple className="text-3xl text-gray-700" />
                <FaGooglePlay className="text-3xl text-green-600" />
              </>
            ) : app.platform === 'iOS' ? (
              <FaApple className="text-3xl text-gray-700" />
            ) : (
              <FaGooglePlay className="text-3xl text-green-600" />
            )}
          </div>
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed">
          {app.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {app.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {app.status === 'Published' && (
            <motion.a
              href={app.appStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt className="text-sm" />
              {t('projects.viewProject')}
            </motion.a>
          )}
          {app.githubLink && (
            <motion.a
              href={app.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition-all flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub />
              {t('projects.viewCode')}
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-slate-50 via-blue-50/30 to-purple-50/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filterItem) => (
            <motion.button
              key={filterItem.key}
              onClick={() => setFilter(filterItem.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                filter === filterItem.key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <span className="mr-2">{filterItem.icon}</span>
              {filterItem.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredApps.map((app, index) => (
              <ProjectCard key={app.name} app={app} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No results message */}
        {filteredApps.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              {t('projects.noResults')}
            </h3>
            <p className="text-gray-500">
              {t('projects.tryAnotherFilter')}
            </p>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedApp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedApp(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <button
                  onClick={() => setSelectedApp(null)}
                  className="float-right text-3xl text-gray-500 hover:text-gray-700 transition"
                >
                  ✕
                </button>
                
                <div className="flex items-center justify-between mb-4 pr-12">
                  <h2 className="text-4xl font-bold text-gray-900">
                    {selectedApp.name}
                  </h2>
                  <div className="flex gap-2">
                    {selectedApp.platform === 'iOS & Android' ? (
                      <>
                        <FaApple className="text-4xl text-gray-700" />
                        <FaGooglePlay className="text-4xl text-green-600" />
                      </>
                    ) : selectedApp.platform === 'iOS' ? (
                      <FaApple className="text-4xl text-gray-700" />
                    ) : (
                      <FaGooglePlay className="text-4xl text-green-600" />
                    )}
                  </div>
                </div>
                
                <div className="relative rounded-xl overflow-hidden mb-4 bg-white h-[350px] md:h-[450px] lg:h-[500px]">
                  <OptimizedImage
                    src={selectedApp.image}
                    alt={selectedApp.name}
                    className="w-full h-full"
                    objectFit="contain"
                  />
                </div>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {selectedApp.description}
                </p>

                {selectedApp.features && (
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('projects.features')}</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedApp.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-700">
                          <span className="text-green-500">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedApp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {selectedApp.status === 'Published' && (
                    <motion.a
                      href={selectedApp.appStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center gap-2"
                    >
                      <FaExternalLinkAlt />
                      {t('projects.viewProject')}
                    </motion.a>
                  )}
                  {selectedApp.githubLink && (
                    <motion.a
                      href={selectedApp.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="px-8 py-4 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition-all flex items-center gap-2"
                    >
                      <FaGithub />
                      {t('projects.viewCode')}
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
