
import { leadText } from "@/config/font.plugin";
import { ContactFooter } from "@/interfaces/contactFooter";
import style from '../../style.module.css';


interface Props{
  contacts:ContactFooter[]
}

const FooterContact = ({contacts}:Props) => {
  return (
    <ul className={style.footer_item_container}>
      
      {contacts.map((contact,index)=>{
        return <li key={index} className={`${style.footer_item} ${leadText.className}`}>
                {contact.contactIcon}
                <p>{contact.contact}</p>
               </li>
      })}
    </ul>
  )
}

export default FooterContact