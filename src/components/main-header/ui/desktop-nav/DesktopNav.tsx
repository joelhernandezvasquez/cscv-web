'use client';
import { useCallback, useState } from 'react';
import Link from 'next/link';
import { IoChevronDown } from 'react-icons/io5';
import { menuNavigation } from '@/constants/menuNavigation';
import { Lang } from '@/interfaces/navigation';
import { useOutSideClick } from '@/hooks/useClickOutside';
import { getLabel } from '@/util/getLabel';
import style from './style.module.css';

type OpenState = { id:string, by:'hover'|'focus'|'click' } | null;

export const DesktopNav = ({lang}:{lang:Lang}) => {
  const [open,setOpen] = useState<OpenState>(null);
  const close = useCallback(()=> setOpen(null),[]);
  const navRef = useOutSideClick(close);

  const handleClick = (id:string) => {
    setOpen((current)=> current?.id === id && current.by === 'click' ? null : {id, by:'click'});
  }

  return (
    <div ref={navRef}>
      <nav aria-label="Principal">
        <ul className={style.nav_list}>
          {menuNavigation.map((menuItem)=>{
            if(!menuItem.hasSubmenu){
              return (
                <li key={menuItem.id}>
                  <Link href={menuItem.link!} className={style.nav_link}>{getLabel(menuItem,lang)}</Link>
                </li>
              )
            }

            const isOpen = open?.id === menuItem.id;

            return (
              <li
                key={menuItem.id}
                className={style.has_submenu}
                onMouseEnter={()=> setOpen((current)=> current?.id === menuItem.id ? current : {id:menuItem.id, by:'hover'})}
                onMouseLeave={()=> setOpen((current)=> current?.id === menuItem.id && current.by === 'hover' ? null : current)}
                onFocus={()=> setOpen((current)=> current?.id === menuItem.id ? current : {id:menuItem.id, by:'focus'})}
                onBlur={(event)=>{
                  if(!event.currentTarget.contains(event.relatedTarget as Node | null)){
                    setOpen((current)=> current?.id === menuItem.id && current.by === 'focus' ? null : current);
                  }
                }}
                onKeyDown={(event)=>{
                  if(event.key === 'Escape'){
                    setOpen(null);
                    event.currentTarget.querySelector('button')?.focus();
                  }
                }}
              >
                <button
                  type="button"
                  className={`${style.nav_link} ${style.nav_button}`}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={()=> handleClick(menuItem.id)}
                >
                  {getLabel(menuItem,lang)}
                  <IoChevronDown size={14} className={isOpen ? style.chevron_open : style.chevron}/>
                </button>

                {isOpen && (
                  <div className={style.panel_wrapper}>
                    <ul className={style.panel}>
                      {menuItem.subItems!.map((subItem)=>(
                        <li key={subItem.id}>
                          <Link href={subItem.link} className={style.panel_link} onClick={close}>
                            {getLabel(subItem,lang)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
