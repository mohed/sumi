import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
      <div className="hidden md:flex max-w-6xl mx-auto px-6 h-16 items-center">
        {/* Left — Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src="/brand/sumi-mark-64.png"
            alt={t('a11y.logo')}
            width={28}
            height={28}
            className="w-7 h-7 object-contain"
          />
          <span className="font-serif text-xl text-text-primary tracking-[0.12em]">Sumi</span>
        </Link>

        {/* Center — Navigation items */}
        <div className="flex-1 flex items-center justify-center gap-8">
          <Link
            to="/"
            className="text-sm font-sans text-text-primary hover:text-accent transition-colors duration-200 tracking-wider"
          >
            {t('navbar.home')}
          </Link>
          <Link
            to="/menu"
            className="text-sm font-sans text-text-primary hover:text-accent transition-colors duration-200 tracking-wider"
          >
            {t('navbar.viewMenu')}
          </Link>
          <a
            href={reserveHref}
            className="text-sm font-sans text-text-primary hover:text-accent transition-colors duration-200 tracking-wider"
          >
            {t('navbar.reserve')}
          </a>
        </div>

        {/* Right — spacer for balance */}
        <div className="w-24" />
      </div>

      {/* Mobile Top Navbar */}
      <div className="md:hidden flex items-center px-4 h-16 bg-bg-deepest/95 backdrop-blur-md border-b border-white/8">
        {/* Logo — left */}
        <Link to="/" className="flex items-center">
          <img
            src="/brand/sumi-mark-64.png"
            alt={t('a11y.logo')}
            width={28}
            height={28}
            className="w-7 h-7 object-contain"
          />
        </Link>

        {/* Reserve + Menu — right */}
        <div className="flex items-center justify-end gap-4 ml-auto">
          <a
            href={reserveHref}
            className="text-sm font-sans text-text-primary hover:text-accent transition-colors duration-200"
          >
            {t('navbar.reserve')}
          </a>
          <Link
            to="/menu"
            className={cn(
              'text-sm font-sans transition-colors duration-200',
              location.pathname === '/menu'
                ? 'text-text-primary'
                : 'text-text-primary hover:text-accent'
            )}
          >
            {t('navbar.viewMenu')}
          </Link>
        </div>
      </div>
    </nav>
  );
}
