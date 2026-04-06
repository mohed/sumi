
import { motion } from 'framer-motion';
import restaurantData from '@data/restaurant.json';
import imageManifest from '@data/image-manifest.json';

const { about } = restaurantData;

const aboutSizes = imageManifest.images.about.sizes;
const avifSrcset = aboutSizes.map((s) => `${s.avif} ${s.width}w`).join(', ');
const webpSrcset = aboutSizes.map((s) => `${s.webp} ${s.width}w`).join(', ');
const defaultSrc = imageManifest.images.about.default.webp;

export default function About() {
  return (
    <section id="about" className="bg-bg-deepest py-20 border-b border-accent/35">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image with radial fade */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative min-h-[360px] lg:min-h-[520px] overflow-hidden rounded-sm"
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
              {about.title}
            </h2>
            <p className="text-text-secondary text-base leading-[1.8] mb-5">
              {about.intro}
            </p>
            {about.body.map((para, i) => (
              <p
                key={i}
                className="text-text-secondary text-base leading-[1.8] mb-5 last:mb-0"
              >
                {para}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
