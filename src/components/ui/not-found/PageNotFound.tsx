
import Link from 'next/link';
import style from './style.module.css';
import { FaArrowRightLong } from 'react-icons/fa6';
import { titleHeadline } from '@/config/font.plugin';

export const PageNotFound = () => {
  return (
    <section className={style.container}>
    <h1 className={`${titleHeadline.className} ${style.headline}`}>Esta pagina esta actualmente bajo construcion</h1>
    <button className={style.btn_back_home}>
     <Link href={'/'}>Back to homepage</Link>
     <FaArrowRightLong size={20}/>
    </button>

    </section>
  )
};
