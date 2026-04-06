import { useTranslation } from 'react-i18next';
import restaurantData from '@data/restaurant.json';

const { assets, location, contact } = restaurantData;

export default function Footer() {
  const { t } = useTranslation('common');
  return (
    <footer className="bg-bg-raised border-t border-white/6">
      <div className="max-w-6xl mx-auto px-6 py-14 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
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

        {/* Address */}
        <p className="text-text-muted text-xs font-sans text-center">
          {location.displayAddress}
        </p>

        {/* Social + copyright */}
        <div className="flex flex-col items-center md:items-end gap-2 md:gap-3 w-full md:w-auto">
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('footer.instagram')}
            className="text-text-muted hover:text-text-primary transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <p className="text-text-muted text-xs font-sans border-t border-white/5 pt-2 mt-1 md:mt-2">
            © {new Date().getFullYear()} Sumi. {t('footer.allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
}
