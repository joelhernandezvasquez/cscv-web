import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href={'/'}>
    <Image
     src={'/images/icon.png'}
     width={50}
     height={55}
     alt="Siervos De Cristo Vivo Logo"
    />
    </Link>
  )
}
