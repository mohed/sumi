import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import restaurantData from '@data/restaurant.json';

const { reservationCta, visit, location, contact } = restaurantData;

export default function ReserveCta() {
  return (
    <section className="bg-bg-raised border-b border-accent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">

          {/* Left — Reserve CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="py-16 pr-12"
          >
            <h2 className="font-serif text-3xl lg:text-5xl text-text-primary font-normal leading-tight mb-6 w-full">
              {reservationCta.title}
            </h2>
            <p className="text-text-secondary text-base lg:text-lg leading-relaxed mb-8 max-w-md">
              {reservationCta.text}
            </p>
            <a
              href={reservationCta.button.href}
              className="inline-block px-10 py-4 bg-accent text-text-primary font-sans text-sm tracking-wider text-center rounded-sm
                         hover:bg-accent-hover transition-colors duration-200"
            >
              {reservationCta.button.label}
            </a>
          </motion.div>

          {/* Vertical separator — accent line */}
          <div className="w-px bg-accent self-stretch" />

          {/* Right — Visit info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="py-16 pl-12 text-right"
          >
            <h3 className="font-serif text-3xl lg:text-5xl text-text-primary font-normal leading-tight mb-6 w-full">
              {visit.title}
            </h3>

            {/* Address */}
            <div className="flex items-start justify-end gap-4 mb-8">
              <div className="text-right">
                <p className="text-text-primary font-sans font-medium mb-1">Address</p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {location.displayAddress}
                </p>
                <p className="text-text-muted text-xs mt-1">{location.area}</p>
                <a
                  href={visit.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-end gap-1 text-xs font-sans text-accent hover:text-accent-hover transition-colors duration-200 mt-2"
                >
                  {location.mapLabel} →
                </a>
              </div>
              <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4 items-end">
              <a
                href={`tel:${contact.phone.replace(/[\s-]/g, '')}`}
                className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                <span className="font-sans text-sm">{contact.phone}</span>
                <Phone size={16} className="text-accent shrink-0" />
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                <span className="font-sans text-sm">{contact.email}</span>
                <Mail size={16} className="text-accent shrink-0" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
