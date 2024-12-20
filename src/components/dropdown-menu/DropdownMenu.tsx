
import Link from 'next/link';
import { SubItems } from '@/interfaces/navigation';
import style from './style.module.css';

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