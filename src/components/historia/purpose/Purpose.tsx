import { HISTORIA_PURPOSES } from "@/constants/historia";
import style from "./style.module.css";

export const HistoriaPurpose = () => {
  return (
    <section className={style.purpose_section}>
      <div className={style.purpose_head}>
        <span className={style.purpose_eyebrow}>06 · Finalidad</span>
        <p className={style.purpose_statement}>
          El Señor Jesús <span className={style.purpose_highlight}>&quot;llamó a los que él quiso&quot;</span> para una misión específica: <span className={style.purpose_highlight}>&quot;para que estuvieran con él, y para enviarlos a predicar&quot;</span> (Marcos 3, 13-14).
        </p>
        <p className={style.purpose_body}>
          Acogiendo estas palabras del Señor y viviendo en el mundo, la Comunidad Siervos de Cristo Vivo aspira a la perfección de la caridad; por tanto, tiene como objetivo esencial la santificación personal de sus miembros mediante:
        </p>
      </div>

      <ul className={style.purpose_cards}>
        {HISTORIA_PURPOSES.map(purpose => (
          <li key={purpose.numeral} className={style.purpose_card}>
            <span className={style.purpose_numeral}>{purpose.numeral}</span>
            <p className={style.purpose_card_body}>{purpose.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
