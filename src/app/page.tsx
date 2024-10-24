
import { Hero } from "@/components/home/hero/Hero";
import styles from "./page.module.css";
import { AboutUs } from "@/components/home/about-us/AboutUs";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
         <Hero/>
         <AboutUs/>
      </main>
    </div>
  );
}
