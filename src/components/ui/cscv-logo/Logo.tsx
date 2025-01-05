/* eslint-disable @next/next/no-img-element */
//import Image from 'next/image';
import Link from 'next/link';
import style from './style.module.css';

export const Logo = () => {
  return (
    <Link href={'/'}>
    <img
     src={'/images/logoHeader.png'}
     className={style.logo}
     width={60}
     height={85}
     alt="Siervos De Cristo Vivo Logo"
    />
    </Link>
  )
}
