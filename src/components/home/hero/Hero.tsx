/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
// import { BlocksRenderer} from '@strapi/blocks-react-renderer';
// import { getHomeInfo } from '@/actions/get-home-info';
import { leadText, titleHeadline } from '@/config/font.plugin';
import style from './style.module.css';

export const Hero = async () => {
 const title = 'Comunidad Siervos De Cristo Vivo Casa De La Anunciacion Brooklyn';
 const description = "Una asociación católica que promueve la santificación personal y comparte el amor de Cristo. A través de la oración y la evangelización, vivimos en fe, respondiendo al llamado de predicar Su palabra."
 const image = "/images/comteplacion.jpeg"; 
 // const {title,description,image} = await getHomeInfo();
 
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
        {/* <BlocksRenderer content={description}/> */}
        <p>{description}</p>
      </div>
      
      <Link href={'/'} className={`${'btn_cta'} ${titleHeadline.className}`}>Ver Actividades</Link>
      </div>
    </section>
  )
}


