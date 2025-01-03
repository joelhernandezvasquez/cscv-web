import Image from 'next/image';
import Link from 'next/link';
import style from './style.module.css';

export const Logo = () => {
  return (
    <Link href={'/'}>
    <Image
     src={'/images/cscvlogo.png'}
     className={style.logo}
     width={60}
     height={85}
     alt="Siervos De Cristo Vivo Logo"
    />
    </Link>
  )
}
