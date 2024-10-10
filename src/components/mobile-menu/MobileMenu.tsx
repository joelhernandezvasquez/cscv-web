
import Link from 'next/link';
import { menuNavigation } from '@/constants/menuNavigation';
import { MobileDropdownMenu } from './dropdown-menu/MobileDropdownMenu';
import style from './style.module.css';
/*
 1 - HTML(DONE)
 2 - Organize HTML into constant and components(Done)
 3 - JS
 4- Font type
 5 - CSS
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
              <li key={menuItem.id} className={style.mobile_menu_item}><Link href={menuItem.link!}>{menuItem.item}</Link></li>
             }
             </>  
        })}
      </ul>
    </nav>
  )
}

export default MobileMenu;