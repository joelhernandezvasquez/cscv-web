'use client';
import useToggle from "@/hooks/useToggle";
import MobileMenu from "../mobile-menu/MobileMenu";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const ToggleMobileMenu = () => {
  const {isToggle,handleToggle} = useToggle();
  return (
    <>
     <button onClick={handleToggle}>
      {!isToggle ? <RxHamburgerMenu size={30}/>:<IoMdClose size={30} />}
     </button>

      { isToggle && <MobileMenu/>}
    </>
  )
}

export default ToggleMobileMenu