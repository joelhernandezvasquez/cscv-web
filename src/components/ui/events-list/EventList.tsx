
import { getEventList } from "@/actions/get-events";
import { EventCard } from "../event-card/EventCard";
import { Title } from "../title/Title";
import { leadText} from "@/config/font.plugin";
import { getHomeInfo } from "@/actions/get-home-info";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { FaCalendarAlt } from "react-icons/fa";
import style from './style.module.css';


export const EventList = async () => {
   const [homeInfo,eventList] = await Promise.all([getHomeInfo(),getEventList()]);
   const {events} = homeInfo;

  return (
    <section>
       <header className={style.event_header}>
         <FaCalendarAlt size={30} color="#FFF"/>
          <Title title={events.title} size={'md'} color={'white'}/>
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
