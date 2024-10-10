import Link from 'next/link';
import { MenuNavigation } from '@/interfaces/navigation';
import { GoChevronRight } from 'react-icons/go';
import style from '../style.module.css';

interface Props{
 menuItem:MenuNavigation
}

export const MobileDropdownMenu = ({menuItem}:Props) => {
  return (
    <li className={style.mobile_menu_item} key={menuItem.id}>
      <button className={'flex_space_between'}>{menuItem.item}<GoChevronRight size={20}/> </button>
      <ul className={style.sub_menu}>
         {menuItem.subItems?.map((subItem)=>{
          return  <li key={subItem.id}> <Link href={subItem.link}>{subItem.item}</Link></li>
        })}
                       
      </ul>
    </li>
  )
}
