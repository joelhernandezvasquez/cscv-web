'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { titleHeadline } from '@/config/font.plugin';

interface Props{
  slug:string
}

const EventCardLink = ({slug}:Props) => {

  const pathName = usePathname();
 
  return (
    <Link className={`${'btn_cta'} ${titleHeadline.className}`} 
      href={`${!pathName.includes('course') ? `course/${slug}` : `${slug}`} `}>
      Ver Detalles
    </Link>
  )
}

export default EventCardLink