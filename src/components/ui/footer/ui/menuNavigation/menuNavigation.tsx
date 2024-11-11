import { Menu } from "@/interfaces/menuNavigation";
import Link from "next/link";
import { leadText } from "@/config/font.plugin";
import style from '../../style.module.css';

interface Props{
navigationLinks:Menu[]
}

export const MenuNavigation = ({navigationLinks}:Props) => {
  return (
    <ul className={style.footer_item_container}>
     {navigationLinks.map((navigation)=>{
        return <li key={navigation.id} className={`${style.footer_item} ${leadText.className}`}>
                 <Link href={`${navigation.link}`}>{navigation.item}</Link>
              </li>
     })}
    </ul>
  )
}
