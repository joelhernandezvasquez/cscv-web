import Link from 'next/link';
import { BlocksRenderer} from '@strapi/blocks-react-renderer';
import { leadText, titleHeadline } from '@/config/font.plugin';
import HeroImage from './ui/hero-image/HeroImage';
import { ClientOnly } from '@/components/client-only/ClientOnly';
import style from './style.module.css';

interface Props{
  title:string,
  description:React.ComponentProps<typeof BlocksRenderer>['content'],
  image:string
}

export const Hero = ({title,description,image}:Props) => {

  return (
    <section className={`${style.hero_container}`}>
       
       <ClientOnly>
         <HeroImage image = {image}/>
       </ClientOnly>
      
      <div className={style.hero_overlay}>
        
       <h1 className={`${titleHeadline.className} ${style.hero_main_headline}`}>
         {title}
       </h1> 

       <div className={`${leadText.className} ${style.hero_sub_text}`}> 
        <BlocksRenderer content={description}/>
      </div>
      
      <Link href={'#event-list'} className={`${'btn_cta'} ${titleHeadline.className} ${style.conocer_btn}`}>Ver Actividades</Link>
      </div>
    </section>
  )
}


