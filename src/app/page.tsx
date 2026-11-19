
import { Hero } from "@/components/home/hero/Hero";
import { getHomeInfo } from "@/actions/get-home-info";
import { getEventList } from "@/actions/get-events";
import { AboutUs } from "@/components/home/about-us/AboutUs";
import { EventList } from "@/components/ui/events-list/EventList";
// import Testimonials from "@/components/ui/testimonials/Testimonials";
import Ministries from "@/components/ui/ministries/Ministries";
//import FeatureAnnouncements from "@/components/announcements/FeatureAnnouncements";
import Media from "@/components/media/Media";
import styles from "./page.module.css";
import FeatureAnnouncements from "@/components/announcements/FeatureAnnouncements";

const getNextEvent = async () => {
   try {
      const [firstEvent] = await getEventList();
      if (!firstEvent) return undefined;
      const {name, eventDates, graphicUrl} = firstEvent;
      return {name, eventDates, graphicUrl};
   } catch {
      return undefined;
   }
}

export default async function Home() {
   const [{title,description,image,about,events,ministerios,anuncios}, nextEvent] = await Promise.all([getHomeInfo(), getNextEvent()]);

   return (
      <main className={styles.main}>
         <Hero title={title} description={description} image={image} nextEvent={nextEvent}/>
         <AboutUs about={about}/>
         <FeatureAnnouncements anuncios={anuncios}/>
         <EventList events={events}/>
         <Ministries ministerios={ministerios}/>
         <Media/>
         {/* <Testimonials testimonials={testimonies}/> */}
      </main>
  );
}
