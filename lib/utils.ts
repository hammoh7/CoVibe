import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

const colors = [
  "#f43f5e",
  "#fde047",
  "#22c55e",
  "#3b82f6",
  "#9333ea",
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function connectionIdToColor(connectionId: number): string {
  return colors[connectionId % colors.length];
};
