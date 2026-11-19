/* eslint-disable @next/next/no-img-element */
import { Block } from '@/interfaces/block';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { heroFont } from '@/config/font.plugin';
import { NOTICES } from '@/constants/notices';
import style from './style.module.css';

interface Props{
  anuncios:Block
}

const FeatureAnnouncements = async({anuncios}:Props) => {
  const {title,description} = anuncios ?? {};
  const hasDescription = Array.isArray(description) && description.length > 0;

  return (
    <section id="avisos" className={`${heroFont.className} ${style.notices_section}`}>
      <div className={style.notices_container}>
        <div className={style.notices_head}>
          <div>
            <div className={style.notices_kicker}>Avisos importantes</div>
            {title && <h2 className={style.notices_title}>{title}</h2>}
          </div>
          {hasDescription && (
            <div className={style.notices_intro}>
              <BlocksRenderer content={description}/>
            </div>
          )}
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
