'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { IoChevronDown } from 'react-icons/io5';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';
import { menuNavigation } from '@/constants/menuNavigation';
import { Lang } from '@/interfaces/navigation';
import { getLabel } from '@/util/getLabel';
import style from './style.module.css';

const FACEBOOK_URL = 'https://www.facebook.com/cscvbrooklyn.org';
const YOUTUBE_URL = 'https://www.youtube.com/@comunidadsiervosdecristovi8064';

export const MobileNav = ({lang}:{lang:Lang}) => {
  const [isOpen,setIsOpen] = useState(false);
  const [openSubmenu,setOpenSubmenu] = useState<string | null>(null);

  const closeMenu = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
  }

  useEffect(()=>{
    const mediaQuery = window.matchMedia('(min-width: 960px)');
    const handleChange = (event:MediaQueryListEvent) => {
      if(event.matches){
        setIsOpen(false);
        setOpenSubmenu(null);
      }
    };
    mediaQuery.addEventListener('change',handleChange);
    return () => mediaQuery.removeEventListener('change',handleChange);
  },[]);

  return (
    <>
      <button
        type="button"
        className={`${style.hamburger} ${isOpen ? style.hamburger_open : ''}`}
        aria-label={isOpen ? (lang === 'en' ? 'Close menu' : 'Cerrar menú') : (lang === 'en' ? 'Open menu' : 'Abrir menú')}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        onClick={()=> isOpen ? closeMenu() : setIsOpen(true)}
      >
        <span className={style.bar}/>
        <span className={style.bar}/>
        <span className={style.bar}/>
      </button>

      {isOpen && (
        <nav id="mobile-nav-panel" className={style.panel} aria-label="Principal">
          <ul className={style.list}>
            {menuNavigation.map((menuItem)=>{
              if(!menuItem.hasSubmenu){
                return (
                  <li key={menuItem.id} className={style.item}>
                    <Link href={menuItem.link!} className={style.link} onClick={closeMenu}>
                      {getLabel(menuItem,lang)}
                    </Link>
                  </li>
                )
              }

              const isSubmenuOpen = openSubmenu === menuItem.id;

              return (
                <li key={menuItem.id} className={style.item}>
                  <button
                    type="button"
                    className={`${style.link} ${style.accordion_btn}`}
                    aria-expanded={isSubmenuOpen}
                    onClick={()=> setOpenSubmenu(isSubmenuOpen ? null : menuItem.id)}
                  >
                    {getLabel(menuItem,lang)}
                    <IoChevronDown size={20} className={isSubmenuOpen ? style.chevron_open : style.chevron}/>
                  </button>

                  {isSubmenuOpen && (
                    <ul className={style.sub_list}>
                      {menuItem.subItems!.map((subItem)=>(
                        <li key={subItem.id}>
                          <Link href={subItem.link} className={style.sub_link} onClick={closeMenu}>
                            {getLabel(subItem,lang)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>

          <div className={style.social}>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={style.social_link}>
              <FaFacebookF size={18}/>
            </a>
            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={style.social_link}>
              <FaYoutube size={20}/>
            </a>
          </div>
        </nav>
      )}
    </>
  )
}
