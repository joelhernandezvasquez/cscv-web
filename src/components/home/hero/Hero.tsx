/* eslint-disable @next/next/no-img-element */

import { leadText, titleHeadline } from '@/config/font.plugin';
import style from './style.module.css';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className={style.hero_container}>
      <div className={style.hero_img_container}>
        <img
          width={100}
          height={100}
          src={'/images/comteplacion.jpeg'}
          alt=""
         />
      </div>

      <div className={style.hero_overlay}>
       
       <h1 className={`${titleHeadline.className} ${style.hero_main_headline}`}>
         <span>Comunidad Siervos</span>
         <span>De Cristo Vivo</span>
         <span>Casa De La Anunciacion Brooklyn </span>
       </h1>
       
       <p className={`${leadText.className} ${style.hero_sub_text}`}>Una asociación católica que promueve la santificación personal y comparte el amor de Cristo. A través de la oración y la evangelización, vivimos en fe, respondiendo al llamado de predicar Su palabra.</p>
      
      <Link href={'/'} className={`${'btn_cta'} ${titleHeadline.className}`}>Ver Actividades</Link>
      
      </div>
    
    </section>
  )
}
