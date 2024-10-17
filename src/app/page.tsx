
import { Hero } from "@/components/home/hero/Hero";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
         <Hero/>
      </main>
    </div>
  );
}
