import { getEventList } from "@/actions/get-events";
import { EventCard } from "../event-card/EventCard";
import { heroFont } from "@/config/font.plugin";
import style from './style.module.css';

export const EventList = async () => {
   const eventList = await getEventList();

  return (
    <section id="event-list" className={`${heroFont.className} ${style.event_container}`}>
      <div className={style.event_inner}>
        <div className={style.event_head}>
          <h2 className={style.event_title}>Próximos eventos</h2>
          <p className={style.event_intro}>
            Participa en nuestros eventos especiales, fortalece tu fe en Cristo y vive una experiencia transformadora.
          </p>
        </div>

        <ul className={style.event_list}>
          {eventList.map((event)=>{
            return <EventCard key={event.id} event={event}/>
          })}
        </ul>
      </div>
   </section>
  )
}
