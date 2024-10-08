'use client';
import useToggle from "@/hooks/useToggle";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileMenu from "../mobile-menu/MobileMenu";

const ToggleMobileMenu = () => {
  const {isToggle,handleToggle} = useToggle()
  
  return (
    <>
     <button onClick={handleToggle}>
        <RxHamburgerMenu size={30}/>
     </button>

      { isToggle && <MobileMenu/>}
    </>
  )
}

export default ToggleMobileMenu