/* eslint-disable @next/next/no-img-element */
import { HISTORIA_STEPS } from "@/constants/historia";
import { SectionShell } from "../section-shell/SectionShell";
import style from "./style.module.css";

export const HistoriaSiervo = () => {
  return (
    <>
      <SectionShell number="07" label="Un Siervo">
        <h2 className={style.siervo_title}>El camino para ser Siervo de Cristo Vivo</h2>
        <p className={style.siervo_body}>
          La Comunidad Siervos de Cristo Vivo reconoce como &quot;miembro&quot; a aquel laico católico que ha tenido un encuentro personal con Jesucristo, reconociéndole como su Salvador y Señor personal, e identificándose plenamente con el espíritu de la Comunidad. Acepta vivir por completo todo lo señalado en sus Estatutos y Reglamentos.
        </p>
      </SectionShell>

      <div className={style.siervo_steps_wrap}>
        <ol className={style.siervo_steps}>
          {HISTORIA_STEPS.map(step => (
            <li key={step.number} className={style.siervo_step}>
              <span className={style.siervo_badge}>{step.number}</span>
              <img
                className={style.siervo_image}
                src={step.image}
                alt={step.alt}
                loading="lazy"
              />
              <div className={style.siervo_step_head}>
                <span className={style.siervo_tag}>{step.tag}</span>
                <h3 className={style.siervo_name}>{step.name}</h3>
              </div>
              <p className={style.siervo_step_body}>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};
