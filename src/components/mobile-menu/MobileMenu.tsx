
import Link from 'next/link';
import { menuNavigation } from '@/constants/menuNavigation';
import { MobileDropdownMenu } from './dropdown-menu/MobileDropdownMenu';
import { titleHeadline } from '@/app/fonts/plugin-font';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { CiYoutube } from 'react-icons/ci';
import { FaXTwitter } from 'react-icons/fa6';
import style from './style.module.css';
/*
 TODO: need to check if this need to be a client component the whole tree
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
      <footer>
        <nav>
          <ul className={style.nav_footer_social_icons}>
            <li>
              <Link href={'/'}>
                <FaFacebookF color={'white'} size={25} />
              </Link>
            </li>

            <li>
              <Link href={'/'}>
                 <CiYoutube color={'white'} size={25} />
              </Link>
            </li>

            <li>
              <Link href={'/'}>
                 <FaXTwitter color={'white'} size={25} />
              </Link>
            </li>

            <li>
              <Link href={'/'}>
                  <FaInstagram color={'white'} size={25} />
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </nav>
  )
}

export default MobileMenu;