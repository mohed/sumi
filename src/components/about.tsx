
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import imageManifest from '@data/image-manifest.json';

const aboutSizes = imageManifest.images.about.sizes;
const avifSrcset = aboutSizes.map((s) => `${s.avif} ${s.width}w`).join(', ');
const webpSrcset = aboutSizes.map((s) => `${s.webp} ${s.width}w`).join(', ');
const defaultSrc = imageManifest.images.about.default.webp;

export default function About() {
  const { t } = useTranslation('common');

  return (
    <section id="about" className="bg-bg-deepest border-b border-accent/35">
      {/* Desktop layout (md and up) */}
      <div className="hidden md:block py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image with radial fade */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative min-h-[280px] sm:min-h-[320px] md:min-h-[400px] lg:min-h-[520px] overflow-hidden rounded-sm"
            >
              <picture>
                <source
                  type="image/avif"
                  srcSet={avifSrcset}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <source
                  type="image/webp"
                  srcSet={webpSrcset}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <img
                  src={defaultSrc}
                  alt="Assorted sushi on a marble board with a wood table"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </picture>
              {/* Radial fade to black from right edge inward */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(ellipse at 80% 50%, transparent 30%, var(--color-bg-deepest) 100%)',
                }}
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              className="flex flex-col justify-center px-8 lg:pl-14 xl:pl-20 py-12 lg:py-0"
            >
              <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-text-primary font-normal tracking-tight mb-8 leading-tight">
                {t('homePage.aboutTitle')}
              </h2>
              <p className="text-text-secondary text-base leading-[1.8] mb-5">
                {t('homePage.aboutIntro')}
              </p>
              <p className="text-text-secondary text-base leading-[1.8] mb-5">
                {t('homePage.aboutBody1')}
              </p>
              <p className="text-text-secondary text-base leading-[1.8] mb-5">
                {t('homePage.aboutBody2')}
              </p>
              <p className="text-text-secondary text-base leading-[1.8]">
                {t('homePage.aboutBody3')}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile layout (below md) - full-width image at top */}
      <div className="md:hidden">
        {/* Full-width image with no padding */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative w-full h-auto min-h-[280px] sm:min-h-[320px] overflow-hidden"
        >
          <picture>
            <source
              type="image/avif"
              srcSet={avifSrcset}
              sizes="100vw"
            />
            <source
              type="image/webp"
              srcSet={webpSrcset}
              sizes="100vw"
            />
            <img
              src={defaultSrc}
              alt="Assorted sushi on a marble board with a wood table"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </picture>
        </motion.div>

        {/* Text content with padding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="px-6 py-12"
        >
          <h2 className="font-serif text-2xl sm:text-3xl text-text-primary font-normal tracking-tight mb-6 leading-tight">
            {t('homePage.aboutTitle')}
          </h2>
          <p className="text-text-secondary text-base leading-[1.8] mb-5">
            {t('homePage.aboutIntro')}
          </p>
          <p className="text-text-secondary text-base leading-[1.8] mb-5">
            {t('homePage.aboutBody1')}
          </p>
          <p className="text-text-secondary text-base leading-[1.8] mb-5">
            {t('homePage.aboutBody2')}
          </p>
          <p className="text-text-secondary text-base leading-[1.8]">
            {t('homePage.aboutBody3')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
