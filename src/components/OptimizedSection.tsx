import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface OptimizedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const OptimizedSection = ({ children, className = '', id }: OptimizedSectionProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '100px 0px'
  });

  return (
    <section ref={ref} id={id} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default OptimizedSection;
