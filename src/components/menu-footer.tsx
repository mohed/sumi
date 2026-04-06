import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';
import restaurantData from '@data/restaurant.json';

const { contact, assets, location, openingHours } = restaurantData;
const { consolidatedWeekdays } = openingHours.displayConfig;
const fridayHours = openingHours.display.find((d) => d.days === 'Friday')?.hours ?? '';
const saturdayHours = openingHours.display.find((d) => d.days === 'Saturday')?.hours ?? '';
const sundayHours = openingHours.display.find((d) => d.days === 'Sunday')?.hours ?? '';

export default function MenuFooter() {
  const { t, i18n: i18nInstance } = useTranslation('common');
  const activeLang = i18nInstance.language?.slice(0, 2) as 'en' | 'sv';

  function toggleLanguage() {
    const next = activeLang === 'en' ? 'sv' : 'en';
    i18n.changeLanguage(next);
  }

  return (
    <footer className="bg-bg-deepest border-t border-accent/35">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Desktop 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">
          {/* Col 1 — Visit */}
          <div>
            <p className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-accent mb-4">
              {t('menuPage.footerVisit')}
            </p>
            <p className="text-text-secondary text-sm leading-relaxed mb-3">
              {location.displayAddress}
            </p>
            <p className="text-text-muted text-xs leading-relaxed">
              {t('menuPage.footerMonThu')} {consolidatedWeekdays.hours}
            </p>
            <p className="text-text-muted text-xs leading-relaxed">
              {t('menuPage.footerFri')} {fridayHours}
            </p>
            <p className="text-text-muted text-xs leading-relaxed">
              {t('menuPage.footerSat')} {saturdayHours}
            </p>
            <p className="text-text-muted text-xs leading-relaxed">
              {t('menuPage.footerSunday')} {sundayHours}
            </p>
          </div>

          {/* Col 2 — Contact */}
          <div>
            <p className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-accent mb-4">
              {t('menuPage.footerContact')}
            </p>
            <div className="space-y-2">
              <a
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                className="block text-text-secondary text-sm hover:text-text-primary transition-colors duration-200"
              >
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="block text-text-secondary text-sm hover:text-text-primary transition-colors duration-200"
              >
                {contact.email}
              </a>
            </div>
          </div>

          {/* Col 3 — Brand & Social */}
          <div className="md:text-right">
            <div className="flex items-center gap-3 mb-6 md:justify-end">
              <img
                src="/brand/sumi-mark-32.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6 object-contain opacity-70"
              />
              <span className="font-serif text-xl text-text-primary tracking-wide">
                {assets.logo.wordmark}
              </span>
            </div>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('footer.instagram')}
              className="inline-block text-text-muted hover:text-text-primary transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1={17.5} x2={17.51} y1={6.5} y2={6.5} />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/6 pt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-text-muted text-xs font-sans text-center md:text-left">
            © {new Date().getFullYear()} Sumi. {t('footer.allRightsReserved')}
          </p>
          <button
            onClick={toggleLanguage}
            className="text-text-muted text-xs font-sans uppercase tracking-[0.2em] hover:text-text-primary transition-colors duration-200 self-center md:self-auto"
            aria-label={t('navbar.switchLanguage')}
          >
            {activeLang === 'sv' ? 'EN' : 'SV'}
          </button>
        </div>
      </div>
    </footer>
  );
}
