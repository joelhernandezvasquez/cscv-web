
import { SubItems } from '@/interfaces/navigation';
import style from './style.module.css';
import Link from 'next/link';

interface Props{
    items:SubItems[]
}

const DropdownMenu = ({items}:Props) => {
  return (
    <ul className={style.dropdown_container}>
        {
            items.map((item)=>{
            return <li key={item.id} className={style.item}>
                   <Link href={item.link}> {item.item} </Link>
                  </li>
            })
        }
    </ul>
  )
}

export default DropdownMenu