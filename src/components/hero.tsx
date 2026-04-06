
import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import restaurantData from '@data/restaurant.json';
import imageManifest from '@data/image-manifest.json';
import { buildAvifSrcset, buildWebpSrcset } from '@/lib/utils';
import ResponsiveImage from './responsive-image';

const { hero } = restaurantData;

const heroSizes = imageManifest.images.hero.sizes;
const avifSrcset = buildAvifSrcset(heroSizes);
const webpSrcset = buildWebpSrcset(heroSizes);
const defaultSrc = imageManifest.images.hero.default.webp;

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
    <section className="relative h-screen overflow-hidden flex items-center justify-center border-b border-accent/35">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0 animate-hero-zoom">
        <ResponsiveImage
          avifSrcset={avifSrcset}
          webpSrcset={webpSrcset}
          src={defaultSrc}
          alt="Five maki rolls on a dark stone platter"
          loading="eager"
          fetchPriority="high"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark overlay — gradient for cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-black/10" />

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
            className="text-xs font-sans tracking-[0.25em] uppercase text-text-secondary [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]"
          >
            {t('homePage.heroEyebrow')}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-serif font-normal text-text-primary leading-tight tracking-tight text-[clamp(2rem,5vw,4rem)] [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]"
          >
            {t('homePage.heroHeadline')}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-sans text-base sm:text-lg text-text-secondary max-w-lg leading-relaxed [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]"
          >
            {t('homePage.heroSubheadline')}
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

    </section>
  );
}
