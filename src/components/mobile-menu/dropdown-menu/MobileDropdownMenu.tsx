import Link from 'next/link';
import { MenuNavigation } from '@/interfaces/navigation';
import { GoChevronRight } from 'react-icons/go';
import style from '../style.module.css';
import useToggle from '@/hooks/useToggle';
import { titleHeadline } from '@/app/fonts/plugin-font';

interface Props{
 menuItem:MenuNavigation
}

export const MobileDropdownMenu = ({menuItem}:Props) => {
    const {isToggle,handleToggle} = useToggle();
    return (
    <li className={`${style.mobile_menu_item} ${titleHeadline.className}`} key={menuItem.id}>
      <button className={`${'flex_space_between'} ${isToggle && style.rotate_btn_icon}`} onClick={handleToggle}>{menuItem.item}
        <GoChevronRight size={20}/> 
     </button>
      {isToggle  && (
         <ul className={style.sub_menu}>
         {menuItem.subItems?.map((subItem)=>{
          return  <li key={subItem.id}> <Link href={subItem.link}>{subItem.item}</Link></li>
        })}               
      </ul>
      )}
     
    </li>
  )
}
