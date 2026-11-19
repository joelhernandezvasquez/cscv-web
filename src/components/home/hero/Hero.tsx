/* eslint-disable @next/next/no-img-element */
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { heroFont } from '@/config/font.plugin';
import { HERO_IMAGE, HERO_IMAGE_MOBILE } from '@/constants/constant';
import { Events } from '@/interfaces/events';
import style from './style.module.css';

interface Props{
  title:string,
  description:React.ComponentProps<typeof BlocksRenderer>['content'],
  image:string,
  nextEvent?:Pick<Events,'name'|'eventDates'|'graphicUrl'>
}

export const Hero = ({title,description,nextEvent}:Props) => {

  return (
    <section className={`${heroFont.className} ${style.hero_container}`}>
      <picture>
        <source media="(max-width: 768px)" srcSet={HERO_IMAGE_MOBILE} />
        <img className={style.hero_bg} src={HERO_IMAGE} alt="" />
      </picture>
      <div className={style.hero_gradient} />

      <div className={style.hero_content}>
        <div className={style.hero_text}>
          <div className={style.hero_pill}>Casa de la Anunciación · Brooklyn, NY</div>
          <h1 className={style.hero_main_headline}>{title}</h1>
          <div className={style.hero_sub_text}>
            <BlocksRenderer content={description}/>
          </div>
        </div>

        {nextEvent && (
          <a href="#event-list" className={style.event_card}>
            <img className={style.event_card_img} src={nextEvent.graphicUrl} alt="" />
            <div className={style.event_card_body}>
              <div className={style.event_card_kicker}>Próximo evento</div>
              <div className={style.event_card_title}>{nextEvent.name}</div>
              <div className={style.event_card_dates}>
                <BlocksRenderer content={nextEvent.eventDates}/>
              </div>
              <div className={style.event_card_link}>Ver eventos →</div>
            </div>
          </a>
        )}
      </div>
    </section>
  )
}
