export type CustomChar = {
  id: string;
  name: string;
  species: string;
  status: string;
  gender: string;
  origin: string;
  image: string;
  backstory: string;
};

const KEY = "rm-custom-characters";

export function loadCustom(): CustomChar[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveCustom(items: CustomChar[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(items));
}