
import { Hero } from "@/components/home/hero/Hero";
import { getHomeInfo } from "@/actions/get-home-info";
import { AboutUs } from "@/components/home/about-us/AboutUs";
import { EventList } from "@/components/ui/events-list/EventList";
// import Testimonials from "@/components/ui/testimonials/Testimonials";
import Ministries from "@/components/ui/ministries/Ministries";
//import FeatureAnnouncements from "@/components/announcements/FeatureAnnouncements";
import Media from "@/components/media/Media";
import styles from "./page.module.css";

export default async function Home() {
   const {title,description,image,about,events,ministerios} = await getHomeInfo();

   return (
      <main className={styles.main}>
         <Hero title={title} description={description} image={image}/>
         <AboutUs about={about}/>
         {/* <FeatureAnnouncements anuncios={anuncios}/> */}
         <EventList events={events}/>
         <Ministries ministerios={ministerios}/>
         <Media/>
         {/* <Testimonials testimonials={testimonies}/> */}
      </main>
  );
}
