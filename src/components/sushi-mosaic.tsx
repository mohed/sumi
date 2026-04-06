import imageManifest from '@data/image-manifest.json';

const mosaicImages = [
  { avif: imageManifest.images.hero.default.avif, webp: imageManifest.images.hero.default.webp },
  { avif: imageManifest.images.menuCards.rolls.default.avif, webp: imageManifest.images.menuCards.rolls.default.webp },
  { avif: imageManifest.images.menuBanner.default.avif, webp: imageManifest.images.menuBanner.default.webp },
  { avif: imageManifest.images.about.default.avif, webp: imageManifest.images.about.default.webp },
  { avif: imageManifest.images.menuCards.nigiri.default.avif, webp: imageManifest.images.menuCards.nigiri.default.webp },
];

export default function SushiMosaic() {
  return (
    <section className="w-full h-48 md:h-64 overflow-hidden border-b border-accent/35">
      <div className="flex h-full">
        {mosaicImages.map((img, i) => (
          <div key={i} className={i >= 3 ? "hidden md:block flex-1 relative overflow-hidden" : "flex-1 relative overflow-hidden"}>
            <picture>
              <source type="image/avif" srcSet={img.avif} />
              <source type="image/webp" srcSet={img.webp} />
              <img
                src={img.webp}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </picture>
            <div className="absolute inset-0 bg-black/15" />
          </div>
        ))}
      </div>
    </section>
  );
}
