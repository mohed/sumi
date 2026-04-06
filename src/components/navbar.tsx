import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import restaurantData from '@data/restaurant.json';

const { contact } = restaurantData;
const reserveHref = `mailto:${contact.email}?subject=Reservation%20inquiry`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation('common');
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-bg-deepest/95 backdrop-blur-md border-b border-white/8'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      {/* Desktop Navbar */}
      <div className="hidden md:grid max-w-6xl mx-auto px-6 h-16 items-center" style={{ gridTemplateColumns: '1fr auto 1fr' }}>
        {/* Left — nav links */}
        <div className="flex items-center gap-8">
          {[{ to: '/', label: t('navbar.home') }, { to: '/menu', label: t('navbar.viewMenu') }].map(({ to, label }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={cn(
                  'relative text-sm font-sans tracking-wider transition-colors duration-200 pb-0.5',
                  active ? 'text-text-primary' : 'text-text-primary hover:text-accent'
                )}
              >
                {label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-px bg-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Center — Logo mark + wordmark */}
        <Link to="/" className="flex items-center justify-center gap-2.5">
          <img
            src="/brand/sumi-mark-64.png"
            alt={t('a11y.logo')}
            width={36}
            height={36}
            className="w-9 h-9 object-contain"
          />
          <span className="font-serif text-xl text-text-primary tracking-[0.12em]">Sumi</span>
        </Link>

        {/* Right — reserve link */}
        <div className="flex items-center justify-end">
          <a
            href={reserveHref}
            className="text-sm font-sans text-text-primary hover:text-accent transition-colors duration-200 tracking-wider"
          >
            {t('navbar.reserve')}
          </a>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden grid h-16 px-4 items-center bg-bg-deepest/95 backdrop-blur-md border-b border-white/8" style={{ gridTemplateColumns: '1fr auto 1fr' }}>
        {/* Left — Home + Menu with underline */}
        <div className="flex items-center gap-5">
          {[{ to: '/', label: t('navbar.home') }, { to: '/menu', label: t('navbar.viewMenu') }].map(({ to, label }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={cn(
                  'relative text-sm font-sans tracking-wider transition-colors duration-200 pb-0.5',
                  active ? 'text-text-primary' : 'text-text-primary hover:text-accent'
                )}
              >
                {label}
                {active && (
                  <motion.span
                    layoutId="nav-underline-mobile"
                    className="absolute bottom-0 left-0 right-0 h-px bg-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Center — Logo */}
        <Link to="/" className="flex items-center justify-center gap-2">
          <img
            src="/brand/sumi-mark-64.png"
            alt={t('a11y.logo')}
            width={36}
            height={36}
            className="w-9 h-9 object-contain"
          />
          <span className="font-serif text-lg text-text-primary tracking-[0.12em]">Sumi</span>
        </Link>

        {/* Right — Reservations */}
        <div className="flex items-center justify-end">
          <a
            href={reserveHref}
            className="text-sm font-sans text-text-primary hover:text-accent transition-colors duration-200"
          >
            {t('navbar.reserve')}
          </a>
        </div>
      </div>
    </nav>
  );
}
