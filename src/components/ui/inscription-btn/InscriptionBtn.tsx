import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { titleHeadline } from "@/config/font.plugin";
import style from './style.module.css';

interface Props{
 background:string;
 color:string,
 size?:number
}
const InscriptionBtn = ({background,color}:Props) => {
  
  return (
    <Link style={{backgroundColor:background,color:color}} className={`${style.btn} ${titleHeadline.className}`} href="https://wa.me/16468416837" target="_blank">
      <FaWhatsapp size={25} color={color} />
      <span>Registrate via WhatsApp</span> 
    </Link>
  )
}

export default InscriptionBtn