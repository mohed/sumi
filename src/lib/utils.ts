import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface ImageSize {
  width: number;
  avif: string;
  webp: string;
}

export function buildAvifSrcset(sizes: ImageSize[]): string {
  return sizes.map((s) => `${s.avif} ${s.width}w`).join(', ');
}

export function buildWebpSrcset(sizes: ImageSize[]): string {
  return sizes.map((s) => `${s.webp} ${s.width}w`).join(', ');
}
