import Link from 'next/link';
import { FaFacebookF, FaInstagram} from 'react-icons/fa';
import { CiYoutube } from 'react-icons/ci';
import { FaXTwitter } from 'react-icons/fa6';
import { SocialLinks } from '@/interfaces/socialLinks';
import style from './style.module.css';

interface Props{
    sociaLinks:SocialLinks
}

const SocialMediaMenu = ({sociaLinks}:Props) => {
   const {facebookUrl,youtubeUrl,XUrl,instagramUrl} = sociaLinks;
  return (
    <ul className={style.social_media_container}>
             <li className={style.social_media_item}>
               <Link href={`${facebookUrl}`}>
                 <FaFacebookF color={'white'} size={15}/>
               </Link>
             </li>

             <li className={style.social_media_item}>
               <Link href={`${youtubeUrl}`}>
                 <CiYoutube color={'white'} size={15}/>
               </Link>
             </li>

             <li className={style.social_media_item}>
               <Link href={XUrl ? `${XUrl}`:'/'}>
                 <FaXTwitter color={'white'} size={15}/>
               </Link>
             </li>

             <li className={style.social_media_item}>
               <Link href={instagramUrl? `${instagramUrl}`:'/'}>
                 <FaInstagram color={'white'} size={15}/>
               </Link>
             </li>
    </ul>
  )
}

export default SocialMediaMenu