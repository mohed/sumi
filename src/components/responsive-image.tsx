interface ResponsiveImageProps {
  avifSrcset: string;
  webpSrcset: string;
  src: string;
  alt: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  className?: string;
}

export default function ResponsiveImage({
  avifSrcset,
  webpSrcset,
  src,
  alt,
  sizes = '100vw',
  loading = 'lazy',
  fetchPriority,
  className,
}: ResponsiveImageProps) {
  return (
    <picture>
      <source type="image/avif" srcSet={avifSrcset} sizes={sizes} />
      <source type="image/webp" srcSet={webpSrcset} sizes={sizes} />
      <img
        src={src}
        alt={alt}
        loading={loading}
        fetchPriority={fetchPriority}
        className={className}
      />
    </picture>
  );
}
