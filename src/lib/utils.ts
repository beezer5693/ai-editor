import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeFirstLetterInName(name: string): string {
  let formattedName;

  if (name.includes(" ")) {
    formattedName = name
      .split(" ")
      .map((word) => capitalizeFirstLetter(word))
      .join(" ");
  } else if (name.includes("-")) {
    formattedName = name
      .split("-")
      .map((word) => capitalizeFirstLetter(word))
      .join("-");
  } else if (name.includes("'")) {
    formattedName = name
      .split("'")
      .map((word) => capitalizeFirstLetter(word))
      .join("'");
  } else {
    formattedName = capitalizeFirstLetter(name);
  }

  return formattedName;
}

function capitalizeFirstLetter(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
