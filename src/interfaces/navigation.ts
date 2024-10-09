
export interface MenuNavigation {
  id:string,
  item:string,
  hasSubmenu:boolean,
  link:string,
  subItems?: SubItems[]
}

interface SubItems {
    id:string,
    item:string,
    link:string
}