
export interface MenuNavigation {
  id:string,
  item:string,
  hasSubmenu:boolean,
  link?:string,
  subItems?: SubItems[]
}

export interface SubItems {
    id:string,
    item:string,
    link:string
}