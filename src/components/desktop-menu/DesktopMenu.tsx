import Link from "next/link";
import {desktopMenuNavigation } from "@/constants/menuNavigation"
import {leadText} from "@/config/font.plugin";
import DesktopDropdownBtn from "./ui/desktop-dropdown-btn/DesktopDropdownBtn";
import style from './style.module.css';

const DesktopMenu = () => {
  return (
    <nav>
      <ul className={style.menu_container}>
        {desktopMenuNavigation.map((item)=>{
          return <li key={item.id} className={`${leadText.className} ${style.menu_item}`}>
                  { item.link
                   ? <Link href={item.link}>{item.item}</Link>
                   : <DesktopDropdownBtn menu={item}/>
                  }
                </li>
        })}
      </ul>
    </nav>
  )
}

export default DesktopMenu