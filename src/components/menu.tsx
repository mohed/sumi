
import { motion } from 'framer-motion';
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

export default function Menu() {
  return (
    <section id="menu" className="bg-bg-deepest border-b border-accent">
      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-3xl lg:text-5xl text-text-primary font-normal mb-3">
            {menu.title}
          </h2>
          <p className="text-text-secondary text-base">{menu.subtitle}</p>
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14"
        >
          {menu.featuredItems.map((item) => {
            const imageData = cardImageMap[item.id as FeaturedItemId];
            return (
              <MenuCard
                key={item.id}
                name={item.name}
                category={item.category}
                description={item.description}
                formattedPrice={item.formattedPrice}
                badge={item.badge}
                imageData={imageData}
              />
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
