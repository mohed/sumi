import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';
import restaurantData from '@data/restaurant.json';

const { contact } = restaurantData;
const reserveHref = `mailto:${contact.email}?subject=Reservation%20inquiry`;

const LANGUAGES = ['en', 'sv'] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n: i18nInstance } = useTranslation('common');
  const activeLang = i18nInstance.language?.slice(0, 2) as 'en' | 'sv';
  const location = useLocation();

  function toggleLanguage() {
    const next = activeLang === 'en' ? 'sv' : 'en';
    i18n.changeLanguage(next);
  }

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
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Left — Reserve + Language toggle (desktop only) */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href={reserveHref}
            className="text-sm font-sans text-text-secondary hover:text-text-primary transition-colors duration-200"
          >
            {t('navbar.reserve')}
          </a>
          <span className="text-white/15 text-xs select-none">|</span>
          <button
            onClick={toggleLanguage}
            className="text-xs font-sans uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors duration-200"
            aria-label={t('navbar.switchLanguage')}
          >
            {LANGUAGES.filter(l => l !== activeLang).join('')}
          </button>
        </div>

        {/* Center — Logo (all breakpoints) */}
        <Link to="/" className="flex items-center justify-center gap-2.5">
          <img
            src="/brand/sumi-mark-64.png"
            alt={t('a11y.logo')}
            width={28}
            height={28}
            className="w-7 h-7 object-contain"
          />
          <span className="font-serif text-xl text-text-primary tracking-[0.12em]">Sumi</span>
        </Link>

        {/* Right — View Menu (desktop) + Hamburger (mobile) */}
        <div className="flex items-center justify-end gap-4">
          {location.pathname !== '/menu' && (
            <Link
              to="/menu"
              className="hidden md:inline-block px-5 py-2 text-sm font-sans text-text-primary border border-white/30
                         hover:border-white/60 transition-colors duration-200 rounded-sm tracking-wider"
            >
              {t('navbar.viewMenu')}
            </Link>
          )}

          {/* Mobile hamburger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-text-primary hover:text-text-primary hover:bg-transparent"
                aria-label={t('navbar.openMenu')}
              >
                <Menu size={22} />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="bg-bg-deepest flex flex-col items-center justify-center">
              <SheetHeader className="text-center">
                <SheetTitle className="font-serif text-2xl text-text-primary">
                  <Link to="/" className="flex items-center justify-center gap-2">
                    <img src="/brand/sumi-mark-64.png" alt="" width={28} height={28} />
                    Sumi
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col items-center gap-6 mt-10">
              {location.pathname !== '/menu' && (
                <Link
                  to="/menu"
                  className="px-8 py-3 text-sm font-sans text-text-primary border border-white/30
                             hover:border-white/60 transition-colors duration-200 rounded-sm tracking-wider"
                >
                  {t('navbar.viewMenu')}
                </Link>
              )}
                <a
                  href={reserveHref}
                  className="text-sm font-sans text-text-secondary hover:text-text-primary transition-colors duration-200"
                >
                  {t('navbar.reserve')}
                </a>
                <button
                  onClick={toggleLanguage}
                  className="text-xs font-sans uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors duration-200"
                  aria-label={t('navbar.switchLanguage')}
                >
                  {LANGUAGES.filter(l => l !== activeLang).join('')}
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  );
}
