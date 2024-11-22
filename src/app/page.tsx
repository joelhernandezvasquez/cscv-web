import { Hero } from "@/components/home/hero/Hero";
import { getHomeInfo } from "@/actions/get-home-info";
import { AboutUs } from "@/components/home/about-us/AboutUs";
import { WeeklyActivities } from "@/components/home/weekly-activities/WeeklyActivities";
import { EventList } from "@/components/ui/events-list/EventList";
import Testimonials from "@/components/ui/testimonials/Testimonials";
import Ministries from "@/components/ui/ministries/Ministries";
import styles from "./page.module.css";
import FeatureAnnouncements from "@/components/announcements/FeatureAnnouncements";

export default async function Home() {
   const {title,description,image,about,activities,events,testimonies,ministerios,anuncios} = await getHomeInfo();

  return (
      <main className={styles.main}>
         <Hero title={title} description={description} image={image}/>
         <AboutUs about={about}/>
         <FeatureAnnouncements anuncios={anuncios}/>
         <EventList events={events}/>
         <WeeklyActivities activities={activities}/> 
         <Ministries ministerios={ministerios}/>
         <Testimonials testimonials={testimonies}/>
      </main>
  );
}
