
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import MenuCard from './menu-card';
import restaurantData from '@data/restaurant.json';
import imageManifest from '@data/image-manifest.json';

const { menu } = restaurantData;

const cardImageMap = {
  'signature-rolls': imageManifest.images.menuCards.rolls,
  'chef-selection': imageManifest.images.menuCards.nigiri,
  'omakase-set': imageManifest.images.menuCards.omakase,
} as const;

type FeaturedItemId = keyof typeof cardImageMap;

const featuredDisplayNames: Record<string, string> = {
  'signature-rolls': 'homePage.featuredItem1Name',
  'chef-selection': 'homePage.featuredItem2Name',
  'omakase-set': 'homePage.featuredItem3Name',
};

const featuredDisplayDescs: Record<string, string> = {
  'signature-rolls': 'homePage.featuredItem1Desc',
  'chef-selection': 'homePage.featuredItem2Desc',
  'omakase-set': 'homePage.featuredItem3Desc',
};

export default function Menu() {
  const { t } = useTranslation('common');

  const getItemImageData = (itemId: FeaturedItemId) => cardImageMap[itemId];

  return (
    <section id="menu" className="bg-bg-deepest border-b border-accent/35">
      {/* Header & Desktop cards - constrained container */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-4xl lg:text-7xl text-text-primary font-normal tracking-tight mb-3">
            {t('homePage.menuTitle')}
          </h2>
          <p className="text-text-secondary text-lg">{t('homePage.menuSubtitle')}</p>
        </motion.div>

        {/* Desktop: Card grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="hidden md:grid grid-cols-3 gap-6 mb-12"
        >
          {menu.featuredItems.map((item) => {
            const imageData = cardImageMap[item.id as FeaturedItemId];
            return (
              <MenuCard
                key={item.id}
                name={t(featuredDisplayNames[item.id as FeaturedItemId])}
                category={item.category}
                description={t(featuredDisplayDescs[item.id as FeaturedItemId])}
                formattedPrice={item.formattedPrice}
                badge={t(`menu.${item.badge.toLowerCase()}` as const)}
                imageData={imageData}
              />
            );
          })}
        </motion.div>
      </div>

      {/* Mobile: Full-width, full-bleed section outside container */}
      <div className="md:hidden">
        {menu.featuredItems.map((item, index) => {
          const imageData = getItemImageData(item.id as FeaturedItemId);
          const avifSrcset = imageData.sizes.map((s) => `${s.avif} ${s.width}w`).join(', ');
          const webpSrcset = imageData.sizes.map((s) => `${s.webp} ${s.width}w`).join(', ');
          // Alternating backgrounds: black (0, 2) → grey (1) → black
          const bgClass = index % 2 === 1 ? 'bg-bg-raised' : 'bg-bg-deepest';
          const hasBorder = index < menu.featuredItems.length - 1;
          return (
            <div key={item.id} className={`${bgClass} ${hasBorder ? 'border-b border-accent/35' : ''}`}>
              {/* Image - truly full width, no parent constraints */}
              <div className="w-full">
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
                    src={imageData.default.avif}
                    alt={t(featuredDisplayNames[item.id as FeaturedItemId])}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                  />
                </picture>
              </div>
              {/* Text content - centered with max-width for readability */}
              <div className="px-6 py-16 max-w-2xl mx-auto">
                <p className="text-sm tracking-[0.25em] uppercase text-accent mb-2">
                  {item.category}
                </p>
                <h3 className="font-serif text-3xl text-text-primary mb-2">
                  {t(featuredDisplayNames[item.id as FeaturedItemId])}
                </h3>
                <div className="w-8 border-t border-accent mb-6" />
                <p className="text-lg text-text-secondary mb-4">
                  {t(featuredDisplayDescs[item.id as FeaturedItemId])}
                </p>
                <p className="font-serif text-3xl text-accent">
                  {item.formattedPrice}
                </p>
                {item.badge && (
                  <span className="inline-block mt-3 text-xs tracking-[0.15em] uppercase text-text-muted">
                    {t(`menu.${item.badge.toLowerCase()}` as const)}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* View Full Menu CTA - back in constrained container */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center"
        >
          <Link
            to="/menu"
            className="inline-block px-8 py-3.5 border border-white/30 text-text-primary font-sans text-sm tracking-wider
                       hover:border-white/60 transition-colors duration-200 rounded-sm"
          >
            {t('menu.viewFullMenu')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
