import { type ClassValue, clsx } from "clsx";
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";
import "dayjs/locale/fi";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function formatDate(date: Date | string | number) {
  dayjs.locale("fi");
  return dayjs(date).format("D MMMM YYYY");
}
