/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { cookies } from "next/headers";
import { heroFont } from "@/config/font.plugin";
import { Lang } from "@/interfaces/navigation";
import { DesktopNav } from "./ui/desktop-nav/DesktopNav";
import { MobileNav } from "./ui/mobile-nav/MobileNav";
import { LangToggle } from "./ui/lang-toggle/LangToggle";
import style from './style.module.css';

const getLang = (): Lang => {
  return cookies().get('lang')?.value === 'en' ? 'en' : 'es';
}

const HeaderLogo = ({className}:{className:string}) => (
  <Link href={'/'} className={style.logo_link}>
    <img
      src={'/images/logoHeader.png'}
      className={className}
      alt="Siervos De Cristo Vivo Logo"
    />
  </Link>
)

const MainHeader = () => {
  const lang = getLang();

  return (
    <header className={`${heroFont.className} ${style.main_header}`} data-lang={lang}>
      <div className={style.header_inner}>
        <div className={style.mobile_bar}>
          <HeaderLogo className={style.logo_mobile}/>
          <div className={style.mobile_actions}>
            <LangToggle lang={lang}/>
            <MobileNav lang={lang}/>
          </div>
        </div>

        <div className={style.desktop_bar}>
          <HeaderLogo className={style.logo_desktop}/>
          <DesktopNav lang={lang}/>
          <LangToggle lang={lang}/>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
