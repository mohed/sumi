import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow: string;
  heading: string;
  centered?: boolean;
  withDivider?: boolean;
  eyebrowColor?: 'secondary' | 'accent';
  animate?: boolean;
}

export default function SectionHeader({
  eyebrow,
  heading,
  centered = false,
  withDivider = false,
  eyebrowColor = 'secondary',
  animate = true,
}: SectionHeaderProps) {
  const Wrap = animate ? motion.div : 'div';
  const animProps = animate
    ? { variants: fadeUp, initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.15 } }
    : {};

  return (
    <div className={cn(centered && 'text-center')}>
      <Wrap
        {...(animProps as object)}
        className="text-xs font-sans tracking-[0.25em] uppercase mb-2"
      >
        <span className={eyebrowColor === 'accent' ? 'text-accent' : 'text-text-secondary'}>
          {eyebrow}
        </span>
      </Wrap>
      <Wrap
        {...(animProps as object)}
        className={cn(
          'font-serif font-normal text-text-primary',
          'text-3xl lg:text-4xl'
        )}
      >
        {heading}
      </Wrap>
      {withDivider && (
        <div className={cn('w-8 border-t border-accent mt-4 mb-8', centered && 'mx-auto')} />
      )}
    </div>
  );
}
