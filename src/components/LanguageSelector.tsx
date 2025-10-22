import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      className="fixed top-6 right-6 z-50"
    >
      <div className="flex bg-gray-900/80 backdrop-blur-md rounded-full p-1 border border-white/20">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => changeLanguage('es')}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
            i18n.language === 'es'
              ? 'bg-cyan-400 text-gray-900 shadow-lg'
              : 'text-white hover:bg-white/10'
          }`}
        >
          🇪🇸 ES
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => changeLanguage('en')}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
            i18n.language === 'en'
              ? 'bg-cyan-400 text-gray-900 shadow-lg'
              : 'text-white hover:bg-white/10'
          }`}
        >
          🇺🇸 EN
        </motion.button>
      </div>
    </motion.div>
  );
};

export default LanguageSelector;
