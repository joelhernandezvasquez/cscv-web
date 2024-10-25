
import { Hero } from "@/components/home/hero/Hero";
import styles from "./page.module.css";
import { AboutUs } from "@/components/home/about-us/AboutUs";
import { WeeklyActivities } from "@/components/home/weekly-activities/WeeklyActivities";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
         <Hero/>
         <AboutUs/>
         <WeeklyActivities/>
      </main>
    </div>
  );
}
