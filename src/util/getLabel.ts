import { Lang } from "@/interfaces/navigation";

export const getLabel = (entry:{item:string, itemEn?:string}, lang:Lang) => {
  return lang === 'en' && entry.itemEn ? entry.itemEn : entry.item;
}
