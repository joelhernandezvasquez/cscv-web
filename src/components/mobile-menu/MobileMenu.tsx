
import Link from 'next/link';
import { menuNavigation } from '@/constants/menuNavigation';
import { MobileDropdownMenu } from './dropdown-menu/MobileDropdownMenu';
import style from './style.module.css';
import { titleHeadline } from '@/app/fonts/plugin-font';
/*
 5 - CSS (working on it)
 6 - need to check if this need to be a client component the whole tree
*/


const MobileMenu = () => {
  return (
    <nav className={style.mobile_menu_container}>
      <ul className={style.mobile_menu}>
        {menuNavigation.map((menuItem)=>{
             return <>
              {
              menuItem.hasSubmenu ? (
                <MobileDropdownMenu menuItem={menuItem}/>
               )
              :
              <li key={menuItem.id} className={`${style.mobile_menu_item} ${titleHeadline.className}`}>
                <Link href={menuItem.link!}>{menuItem.item}</Link>
              </li>
             }
             </>  
        })}
      </ul>
    </nav>
  )
}

export default MobileMenu;