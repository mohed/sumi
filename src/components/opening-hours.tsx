import { motion } from 'framer-motion';
import { Coffee, Moon, UtensilsCrossed } from 'lucide-react';
import restaurantData from '@data/restaurant.json';

const { openingHours } = restaurantData;

const RESERVATION_ONLY = ['Friday', 'Saturday'];

interface DayEntry {
  days: string;
  hours: string;
}

const MON_THU: DayEntry = {
  days: 'Monday – Thursday',
  hours: '11:30–13:30, 16:30–21:00',
};

export default function OpeningHours() {
  const cards: DayEntry[] = [
    MON_THU,
    ...openingHours.display.filter(
      ({ days }) =>
        days !== 'Monday' &&
        days !== 'Tuesday' &&
        days !== 'Wednesday' &&
        days !== 'Thursday'
    ),
  ];

  return (
    <section className="bg-bg-raised border-b border-accent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex" style={{ borderCollapse: 'collapse' }}>
          {cards.map(({ days, hours }, index) => {
            const isReservationOnly = RESERVATION_ONLY.includes(days);

            const [lunchPart, dinnerPart] = hours.split(', ');
            const dinnerLabel = isReservationOnly ? 'Reservation only' : dinnerPart;

            return (
              <motion.div
                key={days}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.06 }}
                className="flex-1 px-4 py-6 last:border-r-0 border-r border-accent"
              >
                {/* Day name */}
                <div className="mb-4">
                  <span className="text-text-secondary text-xs font-sans uppercase tracking-widest block">
                    {days}
                  </span>
                </div>

                {/* Lunch slot */}
                <div className="flex items-start gap-2 mb-2">
                  <Coffee size={12} className="text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-text-primary text-sm font-sans leading-tight">
                      {lunchPart}
                    </p>
                    <p className="text-text-muted text-[10px] font-sans mt-0.5 uppercase tracking-wider">
                      Lunch
                    </p>
                  </div>
                </div>

                {/* Break */}
                <div className="flex items-center gap-2 mb-2">
                  <UtensilsCrossed size={12} className="text-text-muted shrink-0" />
                  <p className="text-text-muted text-xs font-sans">13:30 – 16:30</p>
                </div>

                {/* Dinner slot */}
                <div className="flex items-start gap-2">
                  <Moon
                    size={12}
                    className={
                      isReservationOnly
                        ? 'text-accent shrink-0 mt-0.5'
                        : 'text-text-muted shrink-0 mt-0.5'
                    }
                  />
                  <div>
                    <p
                      className={`text-sm font-sans leading-tight ${
                        isReservationOnly ? 'text-accent italic' : 'text-text-primary'
                      }`}
                    >
                      {dinnerLabel}
                    </p>
                    <p className="text-text-muted text-[10px] font-sans mt-0.5 uppercase tracking-wider">
                      Dinner
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
