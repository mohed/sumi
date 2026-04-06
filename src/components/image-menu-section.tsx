import { motion } from 'framer-motion';
import { fadeLeft } from '@/lib/animations';
import { cn } from '@/lib/utils';
import SectionHeader from './section-header';
import AnimatedMenuList from './animated-menu-list';
import ResponsiveImage from './responsive-image';

interface ImageSource {
  sources: string[];
  fallbackSources: string[];
  default: string;
}

interface MenuItem {
  name: string;
  formattedPrice: string;
  description?: string;
}

interface ImageMenuSectionProps {
  eyebrow: string;
  heading: string;
  imagePosition: 'left' | 'right';
  image: ImageSource;
  imageAlt: string;
  items: MenuItem[];
  bg?: string;
}

export default function ImageMenuSection({
  eyebrow,
  heading,
  imagePosition,
  image,
  imageAlt,
  items,
  bg = 'bg-bg-deepest',
}: ImageMenuSectionProps) {
  const imageCol = (
    <motion.div
      variants={fadeLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="aspect-[4/3] overflow-hidden group"
    >
      <ResponsiveImage
        avifSrcset={image.sources.join(', ')}
        webpSrcset={image.fallbackSources.join(', ')}
        src={image.default}
        alt={imageAlt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </motion.div>
  );

  const textCol = (
    <div>
      <SectionHeader
        eyebrow={eyebrow}
        heading={heading}
        eyebrowColor="accent"
        withDivider
      />
      <AnimatedMenuList items={items} className="space-y-3" />
    </div>
  );

  return (
    <section className={cn(bg, 'border-b border-accent/35')}>
      {/* Mobile: stacked image then text */}
      <div className="md:hidden">
        {imageCol}
        <div className="px-6 py-12">{textCol}</div>
      </div>

      {/* Desktop: two-column with optional column order */}
      <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-16 items-center py-20 px-6 max-w-6xl mx-auto">
        <div className={cn(imagePosition === 'right' && 'order-2')}>{imageCol}</div>
        <div className={cn(imagePosition === 'right' && 'order-1')}>{textCol}</div>
      </div>
    </section>
  );
}
