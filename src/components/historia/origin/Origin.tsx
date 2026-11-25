/* eslint-disable @next/next/no-img-element */
import { SectionShell } from "../section-shell/SectionShell";
import style from "./style.module.css";

export const HistoriaOrigin = () => {
  return (
    <>
      <SectionShell number="01" label="Origen">
        <h2 className={style.origin_title}>Nace en el Sagrado Corazón de Jesús</h2>
        <p className={style.origin_body}>
          Nace en los sentimientos del Sagrado Corazón de Jesús por el hombre, los cuales inspiraron al Siervo de Dios Padre Emiliano Tardif, M.S.C., al Diácono Evaristo Guzmán Hilario (ambos de feliz memoria) y a María Armenteros Malla. Luego de ocho años de experiencia en el Amor de Dios y en la predicación, a fundar una comunidad que fuera contemplativa y evangelizadora, y cuyo trabajo tenga su centro y fortaleza en el corazón de Aquel que dice:
        </p>
      </SectionShell>

      <div className={style.origin_panel_wrap}>
        <div className={style.origin_panel}>
          <img
            className={style.origin_image}
            src="/images/history1.png"
            alt="Primeros años de la Comunidad Siervos de Cristo Vivo"
            loading="lazy"
          />
          <figure className={style.origin_quote}>
            <blockquote className={style.origin_quote_text}>“Sin mí no pueden hacer nada”</blockquote>
            <figcaption className={style.origin_quote_ref}>Juan 15,5</figcaption>
          </figure>
        </div>
      </div>
    </>
  );
};
