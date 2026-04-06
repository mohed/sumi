
import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import restaurantData from '@data/restaurant.json';
import imageManifest from '@data/image-manifest.json';

const { hero } = restaurantData;

const heroSizes = imageManifest.images.hero.sizes;
const avifSrcset = heroSizes.map((s) => `${s.avif} ${s.width}w`).join(', ');
const webpSrcset = heroSizes.map((s) => `${s.webp} ${s.width}w`).join(', ');
const defaultSrc = imageManifest.images.hero.default.avif;

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Hero() {
  const { t } = useTranslation('common');

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center border-b border-accent">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0 animate-hero-zoom">
        <picture>
          <source type="image/avif" srcSet={avifSrcset} sizes="100vw" />
          <source type="image/webp" srcSet={webpSrcset} sizes="100vw" />
          <img
            src={defaultSrc}
            alt="Five maki rolls on a dark stone platter"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
        </picture>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 px-6 text-center max-w-3xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          <motion.p
            variants={itemVariants}
            className="text-xs font-sans tracking-[0.25em] uppercase text-text-secondary"
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-serif font-normal text-text-primary leading-tight
                       text-[clamp(2.5rem,8vw,5.5rem)]"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-sans text-base sm:text-lg text-text-secondary max-w-lg leading-relaxed"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mt-2"
          >
            <Link
              to="/menu"
              className="px-8 py-3.5 bg-accent text-text-primary font-sans text-sm tracking-wider
                         hover:bg-accent-hover transition-colors duration-200 min-w-[160px] text-center rounded-sm"
            >
              {t('menu.viewFullMenu')}
            </Link>
            <a
              href={hero.secondaryCta.href}
              className="px-8 py-3.5 border border-white/30 text-text-primary font-sans text-sm tracking-wider
                         hover:border-white/60 transition-colors duration-200 min-w-[160px] text-center rounded-sm"
            >
              {t('reserve.reserveTable')}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label={t('hero.scrollDown')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40
                   hover:text-white/70 transition-colors animate-bounce"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  );
}
