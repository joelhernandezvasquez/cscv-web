/* eslint-disable @next/next/no-img-element */

import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { getMinisterios } from "@/actions/get-ministerios";
import { MINISTRY_TIMES } from "@/constants/ministry-times";
import { heroFont } from "@/config/font.plugin";
import style from './style.module.css';

const Ministries = async() => {
    const  ministeriosList = await getMinisterios();

  return (
    <section id="ministerios" className={`${heroFont.className} ${style.ministries_section}`}>
      <div className={style.ministries_container}>
        <div className={style.ministries_head}>
          <h2 className={style.ministries_title}>Ministerios</h2>
          <p className={style.ministries_intro}>
            Espacios de servicio, evangelización y crecimiento espiritual. Glorificamos a Dios, edificamos la comunidad y compartimos Su amor.
          </p>
        </div>

        <ul className={style.ministries_grid}>
          {ministeriosList.map((ministerio)=>{
            const time = MINISTRY_TIMES[ministerio.slug];
            return (
            <li key={ministerio.id} className={style.ministry_card}>
              <img
                className={style.ministry_img}
                src={ministerio.urlImage}
                alt={ministerio.ministerio}
                loading="lazy"
              />
              <div className={style.ministry_gradient}/>
              <div className={style.ministry_info}>
                {time && <div className={style.ministry_time}>{time}</div>}
                <h3 className={style.ministry_name}>{ministerio.ministerio}</h3>
                <div className={style.ministry_description}>
                  <BlocksRenderer content={ministerio.description}/>
                </div>
              </div>
            </li>
            );
          })}
        </ul>
      </div>
    </section>
  )
}

export default Ministries
