import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Sun, Moon } from 'lucide-react';
import restaurantData from '@data/restaurant.json';

const { openingHours } = restaurantData;
const { reservationOnlyDays, consolidatedWeekdays } = openingHours.displayConfig;

interface DayEntry {
  days: string;
  hours: string;
}

function getSlotLabel(timeRange: string, isFirst: boolean, t: (key: string) => string): string {
  if (!isFirst) return t('visit.dinner');
  const startHour = parseInt(timeRange.split(':')[0], 10);
  return startHour < 13 ? t('visit.lunch') : t('visit.afternoon');
}

function formatRange(raw: string): string {
  return raw.replace('–', ' – ');
}

const dayKeyMap: Record<string, string> = {
  Monday: 'visit.monday',
  Tuesday: 'visit.tuesday',
  Wednesday: 'visit.wednesday',
  Thursday: 'visit.thursday',
  Friday: 'visit.friday',
  Saturday: 'visit.saturday',
  Sunday: 'visit.sunday',
};

export default function OpeningHours() {
  const { t } = useTranslation('common');

  const cards: DayEntry[] = [
    { days: 'monThu', hours: consolidatedWeekdays.hours },
    ...openingHours.display.filter(
      ({ days }) => !['Monday', 'Tuesday', 'Wednesday', 'Thursday'].includes(days)
    ),
  ];

  return (
    <section className="bg-bg-raised border-b border-accent/35">
      <div className="max-w-6xl mx-auto px-6">
        {/* Desktop: horizontal flex row of cards */}
        <div className="hidden md:flex">
          {cards.map(({ days, hours }, index) => {
            const isReservationOnly = reservationOnlyDays.includes(days);
            const [firstSlot, secondSlot] = hours.split(', ');
            const firstLabel = getSlotLabel(firstSlot, true, t);
            const formattedSecond = secondSlot ? formatRange(secondSlot) : null;
            const dayLabel = days === 'monThu' ? t('visit.monThu') : t(dayKeyMap[days]);

            return (
              <motion.div
                key={days}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.06 }}
                className="flex-1 px-5 py-8 last:border-r-0 border-r border-accent/35"
              >
                {/* Day name */}
                <p className="text-sm font-sans font-medium text-text-primary tracking-[0.06em] mb-5">
                  {dayLabel}
                </p>

                {/* First slot — Lunch or Afternoon */}
                <div className="mb-5">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Sun size={10} className="text-accent/70 shrink-0" />
                    <p className="text-[10px] font-sans uppercase tracking-wider text-text-muted">
                      {firstLabel}
                    </p>
                  </div>
                  <p className="text-sm font-sans text-text-primary tabular-nums pl-[18px]">
                    {formatRange(firstSlot)}
                  </p>
                </div>

                {/* Second slot — Dinner */}
                {formattedSecond && (
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <Moon
                        size={10}
                        className={isReservationOnly ? 'text-accent shrink-0' : 'text-text-muted shrink-0'}
                      />
                      {isReservationOnly ? (
                        <p className="text-[10px] font-sans uppercase tracking-wider">
                          <span className="text-text-muted">{t('visit.dinner')}</span>
                          <span className="text-accent"> · {t('visit.reservation')}</span>
                        </p>
                      ) : (
                        <p className="text-[10px] font-sans uppercase tracking-wider text-text-muted">
                          {t('visit.dinner')}
                        </p>
                      )}
                    </div>
                    <p className="text-sm font-sans text-text-primary tabular-nums pl-[18px]">
                      {formattedSecond}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: compact two-column list */}
        <div className="md:hidden py-6">
          {cards.map(({ days, hours }) => {
            const dayLabel = days === 'monThu' ? t('visit.monThu') : t(dayKeyMap[days]);
            return (
              <div
                key={days}
                className="flex items-baseline justify-between py-3 last:pb-0 border-b border-accent/20 last:border-b-0"
              >
                <span className="text-sm font-sans font-medium text-text-primary tracking-[0.06em]">
                  {dayLabel}
                </span>
                <span className="text-sm font-sans text-text-secondary tabular-nums text-right">
                  {hours.split(', ').map((slot, i) => (
                    <span key={i}>
                      {i > 0 && <span className="text-text-muted mx-1">·</span>}
                      {formatRange(slot)}
                    </span>
                  ))}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
