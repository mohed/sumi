import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import restaurantData from '@data/restaurant.json';

const { location, contact, visit } = restaurantData;

export default function ReserveCta() {
  const { t } = useTranslation('common');

  return (
    <section className="bg-bg-raised border-b border-accent/35">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">

          {/* Left — Reserve CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="py-16 pr-12 flex flex-col items-center text-center"
          >
            <h2 className="font-serif text-3xl lg:text-5xl text-text-primary font-normal tracking-tight leading-tight mb-6">
              {t('homePage.reservationCtaTitle')}
            </h2>
            <p className="text-text-secondary text-base lg:text-lg leading-relaxed mb-8 max-w-md">
              {t('homePage.reservationCtaText')}
            </p>
            <a
              href={`mailto:${contact.email}?subject=Reservation%20inquiry`}
              className="px-10 py-4 bg-accent text-text-primary font-sans text-sm tracking-wider text-center rounded-sm
                         hover:bg-accent-hover transition-colors duration-200"
            >
              {t('reserve.reserveTable')}
            </a>
          </motion.div>

          {/* Vertical separator — accent line */}
          <div className="w-px bg-accent/35 self-stretch" />

          {/* Right — Visit info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="py-16 pl-12 text-center"
          >
            <h3 className="font-serif text-3xl lg:text-5xl text-text-primary font-normal leading-tight mb-6">
              {t('homePage.visitTitle')}
            </h3>

            {/* Address */}
            <div className="flex flex-col items-center gap-2 mb-8">
              <p className="text-text-primary font-sans font-medium mb-1">{t('visit.address')}</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                {location.displayAddress}
              </p>
              <p className="text-text-muted text-xs">{location.area}</p>
              <a
                href={visit.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-sans text-accent hover:text-accent-hover transition-colors duration-200 mt-1"
              >
                {t('homePage.mapLabel')} →
              </a>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-3 items-center">
              <a
                href={`tel:${contact.phone.replace(/[\s-]/g, '')}`}
                className="text-text-secondary text-sm hover:text-text-primary transition-colors duration-200"
              >
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="text-text-secondary text-sm hover:text-text-primary transition-colors duration-200"
              >
                {contact.email}
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
