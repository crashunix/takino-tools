import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function copyToClipboard(content: string): boolean {
  navigator.clipboard.writeText(content).then(() => {
    return true;
  }, (err) => {
    console.error("Failed to copy: ", err);
    return false;
  });
  return false
}