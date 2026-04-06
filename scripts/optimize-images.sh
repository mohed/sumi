#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
PUBLIC_DIR="$ROOT_DIR/public"
SOURCE_DIR="$PUBLIC_DIR/backup/source-images"
HERO_DIR="$PUBLIC_DIR/images/hero"
ABOUT_DIR="$PUBLIC_DIR/images/about"
MENU_DIR="$PUBLIC_DIR/images/menu"

mkdir -p "$HERO_DIR" "$ABOUT_DIR" "$MENU_DIR"

encode_file() {
  local input="$1"
  local output="$2"
  local width="$3"
  local format="$4"
  local quality="$5"

  sharp -i "$input" -o "$output" -f "$format" -q "$quality" --effort 6 resize "$width" --withoutEnlargement >/dev/null
}

hero_src="$SOURCE_DIR/5-maki-rolles-on-black-platter.png"
about_src="$SOURCE_DIR/assorted-sushi-on-marble-platter-wood-table.png"
menu_banner_src="$SOURCE_DIR/tuna-salmon-ika-nigiri-round-platter.png"
rolls_src="$SOURCE_DIR/vibrant-salmon-sushi-rolls-on-dark-wood.png"
nigiri_src="$SOURCE_DIR/nigri-closeup-in-varied-plate.png"
omakase_src="$SOURCE_DIR/omakase-set-assorted-rectangular-plate.png"

for w in 768 1280 1920; do
  encode_file "$hero_src" "$HERO_DIR/hero-${w}.avif" "$w" avif 58
  encode_file "$hero_src" "$HERO_DIR/hero-${w}.webp" "$w" webp 80
done

for w in 640 960 1280; do
  encode_file "$about_src" "$ABOUT_DIR/about-${w}.avif" "$w" avif 58
  encode_file "$about_src" "$ABOUT_DIR/about-${w}.webp" "$w" webp 80
done

for w in 768 1280 1600; do
  encode_file "$menu_banner_src" "$MENU_DIR/menu-banner-${w}.avif" "$w" avif 58
  encode_file "$menu_banner_src" "$MENU_DIR/menu-banner-${w}.webp" "$w" webp 80
done

for w in 480 768 960; do
  encode_file "$rolls_src" "$MENU_DIR/menu-card-rolls-${w}.avif" "$w" avif 58
  encode_file "$rolls_src" "$MENU_DIR/menu-card-rolls-${w}.webp" "$w" webp 80
  encode_file "$nigiri_src" "$MENU_DIR/menu-card-nigiri-${w}.avif" "$w" avif 58
  encode_file "$nigiri_src" "$MENU_DIR/menu-card-nigiri-${w}.webp" "$w" webp 80
  encode_file "$omakase_src" "$MENU_DIR/menu-card-omakase-${w}.avif" "$w" avif 58
  encode_file "$omakase_src" "$MENU_DIR/menu-card-omakase-${w}.webp" "$w" webp 80
done

echo "Optimized images written to:"
echo "  $HERO_DIR"
echo "  $ABOUT_DIR"
echo "  $MENU_DIR"
