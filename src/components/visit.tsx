import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import restaurantData from '@data/restaurant.json';

const { visit, location, contact } = restaurantData;

export default function Visit() {
  return (
    <section id="contact" className="bg-bg-deepest border-b border-accent">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-serif text-3xl lg:text-4xl text-text-primary font-normal mb-12 text-center"
        >
          {visit.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12"
        >
          {/* Address */}
          <div className="flex items-start gap-3">
            <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
            <div>
              <p className="text-text-primary font-sans font-medium mb-2">Address</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                {location.displayAddress}
              </p>
              <p className="text-text-muted text-xs mt-1">{location.area}</p>
              <a
                href={visit.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-sans text-accent hover:text-accent-hover transition-colors duration-200 mt-3"
              >
                {location.mapLabel} →
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <a
              href={`tel:${contact.phone.replace(/[\s-]/g, '')}`}
              className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              <Phone size={16} className="text-accent shrink-0" />
              <span className="font-sans text-sm">{contact.phone}</span>
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              <Mail size={16} className="text-accent shrink-0" />
              <span className="font-sans text-sm">{contact.email}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
