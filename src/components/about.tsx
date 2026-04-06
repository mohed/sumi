import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import imageManifest from '@data/image-manifest.json';
import { buildAvifSrcset, buildWebpSrcset } from '@/lib/utils';
import ResponsiveImage from './responsive-image';

const aboutSizes = imageManifest.images.about.sizes;
const avifSrcset = buildAvifSrcset(aboutSizes);
const webpSrcset = buildWebpSrcset(aboutSizes);
const defaultSrc = imageManifest.images.about.default.webp;

export default function About() {
  const { t } = useTranslation('common');

  const bodyKeys = [
    'homePage.aboutIntro',
    'homePage.aboutBody1',
    'homePage.aboutBody2',
    'homePage.aboutBody3',
  ] as const;

  return (
    <section id="about" className="bg-bg-deepest border-b border-accent/35">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative min-h-[280px] sm:min-h-[320px] lg:min-h-[520px] overflow-hidden"
          >
            <ResponsiveImage
              avifSrcset={avifSrcset}
              webpSrcset={webpSrcset}
              src={defaultSrc}
              alt="Assorted sushi on a marble board with a wood table"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Fade to bg on desktop (right edge), subtle darken on mobile (bottom) */}
            <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse at 80% 50%, transparent 30%, var(--color-bg-deepest) 100%)',
              }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="flex flex-col justify-center px-6 py-12 lg:pl-14 xl:pl-20 lg:py-20"
          >
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-text-primary font-normal tracking-tight mb-6 lg:mb-8 leading-tight">
              {t('homePage.aboutTitle')}
            </h2>
            {bodyKeys.map((key, i) => (
              <p
                key={key}
                className={`text-text-secondary text-base leading-[1.8] ${i < bodyKeys.length - 1 ? 'mb-5' : ''}`}
              >
                {t(key)}
              </p>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
