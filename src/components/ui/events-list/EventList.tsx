
import { getEventList } from "@/actions/get-events";
import { FaCalendarAlt } from "react-icons/fa";
import { EventCard } from "../event-card/EventCard";
import { leadText, titleHeadline } from "@/config/font.plugin";
import { getHomeInfo } from "@/actions/get-home-info";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import style from './style.module.css';

export const EventList = async () => {
   const [homeInfo,eventList] = await Promise.all([getHomeInfo(),getEventList()]);
   const {events} = homeInfo;

  return (
    <section>
       <header className={style.event_header}>
         <FaCalendarAlt size={30} color="#FFF"/>
          <h2 className={`${titleHeadline.className} ${style.event_title}`}>{events.title}</h2> 
          <div className={`${style.event_description} ${leadText.className}`}>
            <BlocksRenderer content={events.description}/>
          </div>
       </header>

       <ul className={style.event_list}>
        {eventList.map((event)=>{
          return <EventCard key={event.id} event={event}/>
        })}
       </ul>

   </section>
  )
}
