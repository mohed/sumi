import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation('common');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-colors duration-300',
        scrolled ? 'bg-bg-deepest/95 backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src="/brand/sumi-mark-64.png"
            alt={t('a11y.logo')}
            width={28}
            height={28}
            className="w-7 h-7 object-contain"
          />
          <span className="font-serif text-xl text-text-primary tracking-wide">Sumi</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <Button
            size="sm"
            className="bg-accent text-text-primary hover:bg-accent-hover rounded-sm"
            asChild
          >
            <Link to="/menu">
              {t('navbar.viewMenu')}
            </Link>
          </Button>
        </div>

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
                <Link to="/" className="flex items-center justify-center gap-2" onClick={() => document.body.style.overflow = ''}>
                  <img src="/brand/sumi-mark-64.png" alt="" width={28} height={28} />
                  Sumi
                </Link>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col items-center gap-10 mt-10">
              <Button
                size="lg"
                className="bg-accent text-text-primary hover:bg-accent-hover rounded-sm"
                asChild
              >
                <Link
                  to="/menu"
                  onClick={() => document.body.style.overflow = ''}
                >
                  {t('navbar.viewMenu')}
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
