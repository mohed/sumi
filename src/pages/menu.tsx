import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/navbar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import ReserveCta from '../components/reserve-cta';
import Footer from '../components/footer';
import restaurantData from '@data/restaurant.json';

const { menu } = restaurantData;

export default function MenuPage() {
  const { t } = useTranslation('common');

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-bg-deepest pt-32 pb-16 px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-xs font-sans tracking-[0.25em] uppercase text-text-secondary mb-4">
              {t('menu.eyebrow')}
            </p>
            <h1 className="font-serif text-4xl lg:text-6xl text-text-primary font-normal mb-4">
              {menu.title}
            </h1>
            <p className="text-text-secondary text-base lg:text-lg max-w-md mx-auto">
              {menu.subtitle}
            </p>
          </motion.div>
        </section>

        {/* Accordion Menu */}
        <section className="bg-bg-deepest pb-20 px-6">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible defaultValue="recommended">
              {menu.sections.map((section) => (
                <AccordionItem key={section.id} value={section.id}>
                  <AccordionTrigger>{section.title}</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-1">
                      {section.items.map((item, index) => (
                        <li
                          key={`${section.id}-${index}`}
                          className="flex justify-between items-baseline py-2 px-3 text-text-secondary hover:text-text-primary transition-colors"
                        >
                          <span className="flex-1 pr-3 text-base">{item.name}</span>
                          <span className="whitespace-nowrap text-base text-accent font-sans">
                            {item.formattedPrice}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <ReserveCta />
      </main>
      <Footer />
    </>
  );
}
