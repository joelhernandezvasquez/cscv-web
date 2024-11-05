/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { BlocksRenderer} from '@strapi/blocks-react-renderer';
import { leadText, titleHeadline } from '@/config/font.plugin';
import style from './style.module.css';

interface Props{
  title:string,
  description:React.ComponentProps<typeof BlocksRenderer>['content'],
  image:string
}

export const Hero = ({title,description,image}:Props) => {

  return (
    <section className={style.hero_container}>
      <div className={style.hero_img_container}>
        <img
          width={100}
          height={100}
          src={image}
          alt=""
         />
      </div>

      <div className={style.hero_overlay}>
        
       <h1 className={`${titleHeadline.className} ${style.hero_main_headline}`}>
         {title}
       </h1>

       <div className={`${leadText.className} ${style.hero_sub_text}`}> 
        <BlocksRenderer content={description}/>
      </div>
      
      <Link href={'/'} className={`${'btn_cta'} ${titleHeadline.className}`}>Ver Actividades</Link>
      </div>
    </section>
  )
}


