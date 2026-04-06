
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

  return (
    <section id="menu" className="bg-bg-deepest border-b border-accent/35">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-3xl lg:text-5xl text-text-primary font-normal tracking-tight mb-3">
            {t('homePage.menuTitle')}
          </h2>
          <p className="text-text-secondary text-base">{t('homePage.menuSubtitle')}</p>
        </motion.div>

        {/* Card grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
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

        {/* View Full Menu CTA */}
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
