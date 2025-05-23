/* eslint-disable @next/next/no-img-element */
import { Title } from "../title/Title";
import { Events } from "@/interfaces/events";
import { leadText} from "@/config/font.plugin";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import style from './style.module.css';
import EventCardLink from "./EventCardLink";

interface Props {
    event:Events
}
export const EventCard = ({event}:Props) => {
    const {name,graphicUrl,description,price,requisitos,location,eventDates,slug} = event;

     
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
          <Title title={name} color={'black'} size={'sm'}/>
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
        <EventCardLink slug={slug}/>
      </div>  
    </li>
  )
}
