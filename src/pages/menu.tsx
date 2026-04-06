import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '@/lib/animations';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/navbar';
import MenuFooter from '../components/menu-footer';
import SectionHeader from '../components/section-header';
import AnimatedMenuList from '../components/animated-menu-list';
import ImageMenuSection from '../components/image-menu-section';
import restaurantData from '@data/restaurant.json';
import { featuredItems } from '@/lib/featured-items';
import ResponsiveImage from '../components/responsive-image';

const { menu, assets } = restaurantData;

const makiItemKeys: Record<string, { name: string; desc: string }> = {
  'signature-roll':     { name: 'homePage.makiSection.signatureRoll',     desc: 'homePage.makiSection.signatureRollDesc' },
  'torched-yellowtail': { name: 'homePage.makiSection.torchedYellowtail', desc: 'homePage.makiSection.torchedYellowtailDesc' },
  'nordic-crunch':      { name: 'homePage.makiSection.nordicCrunch',      desc: 'homePage.makiSection.nordicCrunchDesc' },
  'spicy-tuna':         { name: 'homePage.makiSection.spicyTuna',         desc: 'homePage.makiSection.spicyTunaDesc' },
};

function requireSection(id: string) {
  const section = menu.sections.find(s => s.id === id);
  if (!section) throw new Error(`Missing menu section: "${id}". Check restaurant.json.`);
  return section;
}

const maki   = requireSection('maki');
const nigiri = requireSection('nigiri');
const bowls  = requireSection('bowls');
const sides  = requireSection('sides');

const banner    = assets.menuBanner;
const rollsImg  = assets.featuredMenu?.[0];
const nigiriImg = assets.featuredMenu?.[1];

export default function MenuPage() {
  const { t } = useTranslation('common');

  type MakiItem = { id: string; name: string; formattedPrice: string; description?: string };
  const makiItems = (maki.items as MakiItem[])
    .filter(item => makiItemKeys[item.id])
    .map(item => ({
      name: t(makiItemKeys[item.id].name),
      description: t(makiItemKeys[item.id].desc),
      formattedPrice: item.formattedPrice,
    }));

  const nigiriItems = nigiri.items.map(item => ({
    name: item.name,
    formattedPrice: item.formattedPrice,
  }));

  return (
    <>
      <Navbar />
      <main>
        {/* 1. Featured — House signatures */}
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
              {menu.featuredItems.map((item) => (
                <motion.div key={item.id} variants={fadeUp} className="border-t border-white/10 pt-6">
                  <p className="text-xs font-sans text-text-muted uppercase tracking-[0.15em] mb-2">
                    {item.category}
                  </p>
                  <h2 className="font-serif text-xl text-text-primary mb-2">
                    {t(featuredItems[item.id].name)}
                  </h2>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {t(featuredItems[item.id].desc)}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-2xl text-accent">{item.formattedPrice}</span>
                    <span className="text-text-muted text-sm">{t('menuPage.currencyLabel')}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 2. Full-bleed banner */}
        <section className="relative h-[42vh] sm:h-[38vh] md:h-[38vh] lg:h-[45vh] max-h-[520px] overflow-hidden">
          <ResponsiveImage
            avifSrcset={banner.sources.join(', ')}
            webpSrcset={banner.fallbackSources.join(', ')}
            src={banner.default}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/55" />
          <p className="absolute inset-0 flex items-center justify-center font-serif italic text-xl lg:text-3xl text-text-primary text-center px-6">
            &ldquo;{t('menuPage.bannerQuote')}&rdquo;
          </p>
        </section>

        {/* 3. Bowls & Sides */}
        <section className="bg-bg-deepest border-b border-accent/35">
          {/* Desktop */}
          <div className="hidden md:block max-w-4xl mx-auto py-20 px-6">
            <div className="text-center mb-14">
              <SectionHeader
                eyebrow={t('menuPage.moreFromKitchen')}
                heading={t('menuPage.bowlsAndSides')}
                centered
                animate
              />
            </div>
            <div className="grid grid-cols-[1fr_1px_1fr] gap-0">
              <div className="pr-12">
                <p className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-text-secondary mb-6">
                  {t('menuPage.bowls')}
                </p>
                <AnimatedMenuList items={bowls.items} className="space-y-3" />
              </div>
              <div className="bg-accent/30" />
              <div className="pl-12">
                <p className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-text-secondary mb-6">
                  {t('menuPage.sides')}
                </p>
                <AnimatedMenuList items={sides.items} className="space-y-3" />
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden px-6 py-14">
            <div className="text-center mb-10">
              <SectionHeader
                eyebrow={t('menuPage.moreFromKitchen')}
                heading={t('menuPage.bowlsAndSides')}
                centered
                animate={false}
              />
            </div>
            <div className="grid grid-cols-2 gap-x-8">
              <div>
                <p className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-text-secondary mb-4">
                  {t('menuPage.bowls')}
                </p>
                <AnimatedMenuList items={bowls.items} className="space-y-2" />
              </div>
              <div>
                <p className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-text-secondary mb-4">
                  {t('menuPage.sides')}
                </p>
                <AnimatedMenuList items={sides.items} className="space-y-2" />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Maki */}
        <ImageMenuSection
          eyebrow={t('menuPage.makiEyebrow')}
          heading={t('menuPage.makiTitle')}
          imagePosition="left"
          image={rollsImg}
          imageAlt={t('homePage.altSignatureRolls')}
          items={makiItems}
        />

        {/* 5. Nigiri */}
        <ImageMenuSection
          eyebrow={t('menuPage.nigiriEyebrow')}
          heading={t('menuPage.nigiriTitle')}
          imagePosition="right"
          image={nigiriImg}
          imageAlt={t('homePage.altNigiriSelection')}
          items={nigiriItems}
          bg="bg-bg-raised"
        />

        <MenuFooter />
      </main>
    </>
  );
}
