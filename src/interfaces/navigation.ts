export type Lang = 'es' | 'en';

export interface MenuNavigation {
  id:string,
  item:string,
  itemEn?:string,
  hasSubmenu:boolean,
  link?:string,
  subItems?: SubItems[]
}

export interface SubItems {
    id:string,
    item:string,
    itemEn?:string,
    link:string
}
