import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: string | number): string {
  const numPrice = typeof price === "string" ? parseFloat(price) : price;
  return `$${numPrice.toFixed(2)}`;
}

export function formatMinOrder(minOrder: number): string {
  return `Min: ${minOrder} pcs`;
}
