/* eslint-disable @next/next/no-img-element */
import { heroFont } from '@/config/font.plugin';
import { NOTICES } from '@/constants/notices';
import style from './style.module.css';

const FeatureAnnouncements = () => {
  return (
    <section id="avisos" className={`${heroFont.className} ${style.notices_section}`}>
      <div className={style.notices_container}>
        <div className={style.notices_head}>
          <div>
            <div className={style.notices_kicker}>Avisos importantes</div>
            <h2 className={style.notices_title}>Noticias y anuncios</h2>
          </div>
          <p className={style.notices_intro}>
            Mantente informado sobre eventos, actualizaciones y recursos destacados para apoyar tu crecimiento espiritual y comunitario.
          </p>
        </div>

        <div className={style.notices_grid}>
          {NOTICES.map(({id, src, alt}) => (
            <a
              key={id}
              className={style.notice_card}
              href={src}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={style.notice_image} src={src} alt={alt} loading="lazy"/>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureAnnouncements
