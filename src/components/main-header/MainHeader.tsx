
import DesktopMenu from "../desktop-menu/DesktopMenu";
import ToggleMobileMenu from "../toggle-mobile-menu/ToggleMobileMenu";
import { Logo } from "../ui/cscv-logo/Logo";
import style from './style.module.css';

const MainHeader = () => {
  return (
    <header className={`container ${style.main_header}`}>
       
       <div className={`${style.mobile_menu}`}>
          <Logo/>
          <ToggleMobileMenu/>
       </div>

       <div className={style.desktop_menu}>
         <Logo/>
         <DesktopMenu/>
       </div>
    </header>
  )
}

export default MainHeader