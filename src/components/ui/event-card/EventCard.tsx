/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Events } from "@/interfaces/events";
import { leadText, titleHeadline } from "@/config/font.plugin";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import style from './style.module.css';

interface Props {
    event:Events
}
export const EventCard = ({event}:Props) => {
    const {name,graphicUrl,description,price,requisitos,location,slug,eventDates} = event;

    return (
    <li className={style.event_card}>
      <header>
      <img 
        className={style.event_card_graphic}
        src={graphicUrl}
        width={'100%'}
        height={'100%'}
        alt=""
        />
      </header>
      
        <div className={style.event_card_body}>
          <h3 className={`${titleHeadline.className} ${style.event_card_body_title}`}>{name}</h3>
          <p className={`${leadText.className} ${style.event_card_body_description}`}>{description}</p>

          <div className={`${style.event_time_card_col} ${leadText.className}`}>
            <BlocksRenderer content={eventDates}/>
          </div>

          <p className={leadText.className}>
            Donacion: {price}
          </p>

          <p className={leadText.className}>
            Requisitos: {requisitos}
          </p>

          <div className={style.event_location}>
            <p className={leadText.className}>Location:{location}</p>
          </div>
        
          <Link className={`${'btn_cta'} ${titleHeadline.className}`} href={slug}>Ver Detalles</Link>
      </div>  
    </li>
  )
}
