import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, fadeLeft } from '@/lib/animations';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/navbar';
import MenuItemRow from '../components/menu-item-row';
import MenuFooter from '../components/menu-footer';
import restaurantData from '@data/restaurant.json';

const { menu, assets } = restaurantData;

interface MenuItemWithDesc {
  name: string;
  description: string;
  formattedPrice: string;
}

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

const makiItemNames: Record<string, { name: string; desc: string }> = {
  'Signature Roll':         { name: 'homePage.makiSection.signatureRoll',      desc: 'homePage.makiSection.signatureRollDesc' },
  'Torched Yellowtail':     { name: 'homePage.makiSection.torchedYellowtail', desc: 'homePage.makiSection.torchedYellowtailDesc' },
  'Nordic Crunch':          { name: 'homePage.makiSection.nordicCrunch',       desc: 'homePage.makiSection.nordicCrunchDesc' },
  'Spicy Tuna':            { name: 'homePage.makiSection.spicyTuna',          desc: 'homePage.makiSection.spicyTunaDesc' },
};
const maki    = menu.sections.find(s => s.id === 'maki')!;
const nigiri  = menu.sections.find(s => s.id === 'nigiri')!;
const bowls   = menu.sections.find(s => s.id === 'bowls')!;
const sides   = menu.sections.find(s => s.id === 'sides')!;
const banner  = assets.menuBanner;
const featuredItems = menu.featuredItems;
const rollsImg = assets.featuredMenu?.[0];
const nigiriImg = assets.featuredMenu?.[1];


export default function MenuPage() {
  const { t } = useTranslation('common');

  return (
    <>
      <Navbar />
      <main>
        {/* 1. Featured — Three signature dishes, first section */}
        <section className="bg-bg-deepest pt-28 pb-16 border-b border-accent/35">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-center mb-14"
            >
              <p className="text-xs font-sans tracking-[0.25em] uppercase text-text-secondary mb-2">
                {t('menuPage.houseSignatures')}
              </p>
              <h1 className="font-serif text-4xl lg:text-6xl text-text-primary font-normal mb-4">
                {t('menuPage.letUsPickForOnce')}
              </h1>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {featuredItems.map((item) => (
                <div key={item.id} className="border-t border-white/10 pt-6">
                  <p className="text-xs font-sans text-text-muted uppercase tracking-[0.15em] mb-2">
                    {item.category}
                  </p>
                  <h2 className="font-serif text-xl text-text-primary mb-2">{t(featuredDisplayNames[item.id])}</h2>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">{t(featuredDisplayDescs[item.id])}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-2xl text-accent">{item.formattedPrice}</span>
                    <span className="text-text-muted text-sm">{t('menuPage.currencyLabel')}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 2. Full-Bleed Menu Banner */}
        <section className="relative h-[42vh] sm:h-[38vh] md:h-[38vh] lg:h-[45vh] max-h-[520px] overflow-hidden">
          <picture>
            <source
              type="image/avif"
              srcSet={banner.sources.join(', ')}
            />
            <source
              type="image/webp"
              srcSet={banner.fallbackSources.join(', ')}
            />
            <img
              src={banner.default}
              alt=""
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/55" />
          <p className="absolute inset-0 flex items-center justify-center font-serif italic text-xl lg:text-3xl text-text-primary text-center px-6">
            &ldquo;{t('menuPage.bannerQuote')}&rdquo;
          </p>
        </section>

        {/* 3. Bowls & Sides */}
        <section className="bg-bg-deepest border-b border-accent/35">
          {/* Desktop two-column */}
          <div className="hidden md:block max-w-4xl mx-auto py-20 px-6">
            <div className="text-center mb-14">
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="text-xs font-sans tracking-[0.25em] uppercase text-text-secondary mb-2"
              >
                {t('menuPage.moreFromKitchen')}
              </motion.p>
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="font-serif text-3xl lg:text-4xl text-text-primary"
              >
                {t('menuPage.bowlsAndSides')}
              </motion.h2>
            </div>

            <div className="grid grid-cols-[1fr_1px_1fr] gap-0">
              <div className="pr-12">
                <p className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-text-secondary mb-6">
                  {t('menuPage.bowls')}
                </p>
                <motion.ul
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  className="space-y-3"
                >
                  {bowls.items.map((item) => (
                    <MenuItemRow
                      key={item.name}
                      name={item.name}
                      formattedPrice={item.formattedPrice}
                    />
                  ))}
                </motion.ul>
              </div>
              <div className="bg-accent/30" />
              <div className="pl-12">
                <p className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-text-secondary mb-6">
                  {t('menuPage.sides')}
                </p>
                <motion.ul
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  className="space-y-3"
                >
                  {sides.items.map((item) => (
                    <MenuItemRow
                      key={item.name}
                      name={item.name}
                      formattedPrice={item.formattedPrice}
                    />
                  ))}
                </motion.ul>
              </div>
            </div>
          </div>

          {/* Mobile: text-only, no image */}
          <div className="md:hidden px-6 py-14">
            <div className="text-center mb-10">
              <p className="text-xs font-sans tracking-[0.25em] uppercase text-text-secondary mb-2">
                {t('menuPage.moreFromKitchen')}
              </p>
              <h2 className="font-serif text-2xl text-text-primary">
                {t('menuPage.bowlsAndSides')}
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-x-8">
              <div>
                <p className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-text-secondary mb-4">
                  {t('menuPage.bowls')}
                </p>
                <ul className="space-y-2">
                  {bowls.items.map((item) => (
                    <MenuItemRow
                      key={item.name}
                      name={item.name}
                      formattedPrice={item.formattedPrice}
                    />
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-text-secondary mb-4">
                  {t('menuPage.sides')}
                </p>
                <ul className="space-y-2">
                  {sides.items.map((item) => (
                    <MenuItemRow
                      key={item.name}
                      name={item.name}
                      formattedPrice={item.formattedPrice}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Maki Section — image left */}
        <section className="bg-bg-deepest border-b border-accent/35">
          {/* Desktop: image left + text right (unchanged) */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-16 items-center py-20 px-6 max-w-6xl mx-auto">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="aspect-[4/3] overflow-hidden"
            >
              <picture>
                <source type="image/avif" srcSet={rollsImg.sources.join(', ')} />
                <source type="image/webp" srcSet={rollsImg.fallbackSources.join(', ')} />
                <img
                  src={rollsImg.default}
                  alt={t('menuPage.altSignatureRolls')}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </picture>
            </motion.div>

            <div>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="text-xs font-sans tracking-[0.25em] uppercase text-accent mb-2"
              >
                {t('menuPage.makiEyebrow')}
              </motion.p>
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="font-serif text-3xl lg:text-4xl text-text-primary mb-2"
              >
                {t('menuPage.makiTitle')}
              </motion.h2>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="w-8 border-t border-accent mb-8"
              />
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="space-y-3"
              >
                {maki.items.map((item) => {
                  const makiName = makiItemNames[item.name];
                  if (!makiName) return null;
                  return (
                    <MenuItemRow
                      key={item.name}
                      name={t(makiName.name)}
                      description={t(makiName.desc)}
                      formattedPrice={item.formattedPrice}
                    />
                  );
                })}
              </motion.ul>
            </div>
          </div>

          {/* Mobile: full-width stacked */}
          <div className="md:hidden">
            <div className="aspect-[4/3] overflow-hidden">
              <picture>
                <source type="image/avif" srcSet={rollsImg.sources.join(', ')} />
                <source type="image/webp" srcSet={rollsImg.fallbackSources.join(', ')} />
                <img
                  src={rollsImg.default}
                  alt={t('menuPage.altSignatureRolls')}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
            <div className="px-6 py-12">
              <p className="text-xs font-sans tracking-[0.25em] uppercase text-accent mb-2">
                {t('menuPage.makiEyebrow')}
              </p>
              <h2 className="font-serif text-2xl text-text-primary mb-2">
                {t('menuPage.makiTitle')}
              </h2>
              <div className="w-8 border-t border-accent mb-6" />
              <ul className="space-y-3">
                {maki.items.map((item) => {
                  const makiName = makiItemNames[item.name];
                  if (!makiName) return null;
                  return (
                    <MenuItemRow
                      key={item.name}
                      name={t(makiName.name)}
                      description={t(makiName.desc)}
                      formattedPrice={item.formattedPrice}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Nigiri Section — image right */}
        <section className="bg-bg-raised border-b border-accent/35">
          {/* Desktop: text left + image right (unchanged) */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-16 items-center py-20 px-6 max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="text-xs font-sans tracking-[0.25em] uppercase text-accent mb-2"
              >
                {t('menuPage.nigiriEyebrow')}
              </motion.p>
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="font-serif text-3xl lg:text-4xl text-text-primary mb-2"
              >
                {t('menuPage.nigiriTitle')}
              </motion.h2>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="w-8 border-t border-accent mb-8"
              />
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="space-y-3"
              >
                {nigiri.items.map((item) => (
                  <MenuItemRow
                    key={item.name}
                    name={item.name}
                    formattedPrice={item.formattedPrice}
                  />
                ))}
              </motion.ul>
            </div>

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="order-1 lg:order-2 aspect-[4/3] overflow-hidden"
            >
              <picture>
                <source type="image/avif" srcSet={nigiriImg.sources.join(', ')} />
                <source type="image/webp" srcSet={nigiriImg.fallbackSources.join(', ')} />
                <img
                  src={nigiriImg.default}
                  alt={t('menuPage.altNigiriSelection')}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </picture>
            </motion.div>
          </div>

          {/* Mobile: full-width stacked */}
          <div className="md:hidden">
            <div className="aspect-[4/3] overflow-hidden">
              <picture>
                <source type="image/avif" srcSet={nigiriImg.sources.join(', ')} />
                <source type="image/webp" srcSet={nigiriImg.fallbackSources.join(', ')} />
                <img
                  src={nigiriImg.default}
                  alt={t('menuPage.altNigiriSelection')}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
            <div className="px-6 py-12">
              <p className="text-xs font-sans tracking-[0.25em] uppercase text-accent mb-2">
                {t('menuPage.nigiriEyebrow')}
              </p>
              <h2 className="font-serif text-2xl text-text-primary mb-2">
                {t('menuPage.nigiriTitle')}
              </h2>
              <div className="w-8 border-t border-accent mb-6" />
              <ul className="space-y-3">
                {nigiri.items.map((item) => (
                  <MenuItemRow
                    key={item.name}
                    name={item.name}
                    formattedPrice={item.formattedPrice}
                  />
                ))}
              </ul>
            </div>
          </div>
        </section>

        <MenuFooter />
      </main>
    </>
  );
}
