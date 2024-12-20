
'use client';
import { useOutSideClick } from "@/hooks/useClickOutside";
import { MenuNavigation } from "@/interfaces/navigation";
import { GoChevronDown } from "react-icons/go";
import useToggle from "@/hooks/useToggle";
import DropdownMenu from "@/components/dropdown-menu/DropdownMenu";
import style from './style.module.css';

interface Props{
    menu:MenuNavigation
}

const DesktopDropdownBtn = ({menu}:Props) => {
   const{isToggle,handleToggle} = useToggle();
   const dropdownRef = useOutSideClick(handleToggle);

  return (
    <>
     <button 
        className={`${style.btn_subMenu} ${isToggle && style.active}`}
         onClick={handleToggle}
        >
        <span>{menu.item}</span>
        <GoChevronDown className={`${isToggle && style.rotate_icon}`} size={25}/> 
     </button>
    
     {isToggle && 
     <div ref={dropdownRef}>
        <DropdownMenu items={menu.subItems!}/>
     </div>
     }
    </>
  )
}

export default DesktopDropdownBtn