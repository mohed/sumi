
import { motion } from 'framer-motion';
import { buildAvifSrcset, buildWebpSrcset } from '@/lib/utils';

interface CardImageSize {
  width: number;
  avif: string;
  webp: string;
}

interface CardImageData {
  sizes: CardImageSize[];
  default: { avif: string; webp: string };
}

interface MenuCardProps {
  name: string;
  category: string;
  description: string;
  formattedPrice: string;
  badge: string;
  imageData: CardImageData;
}

export default function MenuCard({
  name,
  category,
  description,
  formattedPrice,
  badge,
  imageData,
}: MenuCardProps) {
  const avifSrcset = buildAvifSrcset(imageData.sizes);
  const webpSrcset = buildWebpSrcset(imageData.sizes);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-bg-raised border border-white/8 hover:border-white/18 overflow-hidden group transition-colors duration-200"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <picture>
          <source
            type="image/avif"
            srcSet={avifSrcset}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <source
            type="image/webp"
            srcSet={webpSrcset}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <img
            src={imageData.default.avif}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </picture>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <span className="block text-xs font-sans text-text-muted uppercase tracking-[0.15em] mb-1.5">
              {category}
            </span>
            <h3 className="font-serif font-normal text-lg text-text-primary leading-snug">
              {name}
            </h3>
          </div>
          <span className="shrink-0 px-2.5 py-1 text-[11px] font-sans font-medium text-accent border border-accent/40 whitespace-nowrap">
            {badge}
          </span>
        </div>
        <p className="text-text-secondary text-sm leading-relaxed mb-5">{description}</p>
        <p className="font-sans font-semibold text-lg text-accent">{formattedPrice}</p>
      </div>
    </motion.div>
  );
}
