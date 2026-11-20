/* eslint-disable @next/next/no-img-element */
import { Events } from "@/interfaces/events";
import { heroFont } from "@/config/font.plugin";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import style from './style.module.css';
import EventCardLink from "./EventCardLink";
import { parseEventDate } from "@/util/parseEventDate";

interface Props {
    event:Events
}
export const EventCard = ({event}:Props) => {
    const {name,graphicUrl,description,price,location,eventDates,slug} = event;
    const badge = parseEventDate(eventDates);

    return (
    <li className={`${heroFont.className} ${style.event_card}`}>
      <div className={style.event_card_media}>
        <img
          className={style.event_card_graphic}
          src={graphicUrl}
          alt={name}
          loading="lazy"
        />
        {badge && (
          <div className={style.event_card_badge}>
            <div className={style.event_card_badge_month}>{badge.month}</div>
            <div className={style.event_card_badge_day}>{badge.day}</div>
          </div>
        )}
      </div>

      <div className={style.event_card_body}>
        <h3 className={style.event_card_title}>{name}</h3>
        <p className={style.event_card_description}>{description}</p>

        <div className={style.event_card_meta}>
          <div className={style.event_card_meta_wide}>
            <div className={style.event_card_meta_label}>Cuándo</div>
            <div className={`${style.event_card_meta_value} ${style.event_card_when}`}>
              <BlocksRenderer content={eventDates}/>
            </div>
          </div>
          <div>
            <div className={style.event_card_meta_label}>Donación</div>
            <div className={style.event_card_meta_value}>{price}</div>
          </div>
          <div>
            <div className={style.event_card_meta_label}>Dónde</div>
            <div className={style.event_card_meta_value}>{location}</div>
          </div>
        </div>

        <div className={style.event_card_actions}>
          <EventCardLink slug={slug} className={`${style.event_card_btn} ${style.event_card_btn_primary}`}/>
          <a href="tel:7186471017" className={`${style.event_card_btn} ${style.event_card_btn_outline}`}>
            Llamar
          </a>
        </div>
      </div>
    </li>
  )
}
