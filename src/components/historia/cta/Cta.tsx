import Link from "next/link";
import style from "./style.module.css";

export const HistoriaCta = () => {
  return (
    <section className={style.cta_section}>
      <div className={style.cta_content}>
        <span className={style.cta_eyebrow}>Visítanos</span>
        <h2 className={style.cta_title}>Te esperamos en la Casa de Oración</h2>
        <p className={style.cta_body}>
          Adoración al Santísimo de lunes a sábado, 9:30 am – 7:00 pm.
          <br/>
          207 Hendrix Street, Brooklyn, NY 11207
        </p>
        <div className={style.cta_actions}>
          <Link className={style.cta_primary} href="/#event-list">Ver próximos eventos</Link>
          <a className={style.cta_secondary} href="tel:7186471017">Llamar (718) 647-1017</a>
        </div>
      </div>
    </section>
  );
};
