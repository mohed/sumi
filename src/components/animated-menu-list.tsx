import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/animations';
import MenuItemRow from './menu-item-row';

interface MenuItem {
  name: string;
  formattedPrice: string;
  description?: string;
}

interface AnimatedMenuListProps {
  items: MenuItem[];
  className?: string;
}

export default function AnimatedMenuList({ items, className }: AnimatedMenuListProps) {
  return (
    <motion.ul
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={className}
    >
      {items.map((item) => (
        <MenuItemRow
          key={item.name}
          name={item.name}
          formattedPrice={item.formattedPrice}
          description={item.description}
        />
      ))}
    </motion.ul>
  );
}
