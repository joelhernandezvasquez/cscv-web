import ToggleMobileMenu from "../toggle-mobile-menu/ToggleMobileMenu";
import { Logo } from "../ui/cscv-logo/Logo";
import style from './style.module.css';

const MainHeader = () => {
  return (
    <header className={`container flex_space_between ${style.main_header}`}>
        <Logo/>
        <ToggleMobileMenu/>
    </header>
  )
}

export default MainHeader