import { motion } from 'framer-motion';

interface MenuItemRowProps {
  name: string;
  description?: string;
  formattedPrice: string;
}

export default function MenuItemRow({
  name,
  description,
  formattedPrice,
}: MenuItemRowProps) {
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, x: -8 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
      }}
      className="flex flex-col gap-0.5"
    >
      <div className="flex items-baseline gap-3">
        <span className="font-serif text-text-primary text-base leading-snug shrink-0">
          {name}
        </span>
        <span className="flex-1 border-b border-dotted border-white/18" />
        <span className="font-sans text-accent text-sm whitespace-nowrap shrink-0 text-right">
          {formattedPrice}
        </span>
      </div>
      {description && (
        <span className="text-text-muted text-xs pl-0.5">{description}</span>
      )}
    </motion.li>
  );
}
