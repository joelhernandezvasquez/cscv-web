/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { HISTORIA_FACTS } from "@/constants/historia";
import style from "./style.module.css";

export const HistoriaHero = () => {
  return (
    <section className={style.hero_section}>
      <div className={style.hero_container}>
        <nav className={style.hero_crumbs} aria-label="Ruta de navegación">
          <Link href="/">Inicio</Link>
          <span aria-hidden="true">·</span>
          <span>Quienes Somos</span>
          <span aria-hidden="true">·</span>
          <span className={style.hero_crumb_current} aria-current="page">Historia</span>
        </nav>

        <h1 className={style.hero_title}>Nuestra Historia</h1>
        <p className={style.hero_subtitle}>Comunidad Siervos de Cristo Vivo</p>

        <div className={style.hero_media}>
          <img
            className={style.hero_image}
            src="/images/comunidad.jpeg"
            alt="Miembros de la Comunidad Siervos de Cristo Vivo reunidos"
          />
          <ul className={style.hero_facts}>
            {HISTORIA_FACTS.map(fact => (
              <li key={fact.label} className={style.hero_fact}>
                <span className={style.hero_fact_value}>{fact.value}</span>
                <span className={style.hero_fact_label}>{fact.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
