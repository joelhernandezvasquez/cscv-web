import { HISTORIA_VOCATIONS } from "@/constants/historia";
import { SectionShell } from "../section-shell/SectionShell";
import style from "./style.module.css";

export const HistoriaVocations = () => {
  return (
    <SectionShell number="04" label="Tres vocaciones">
      <p className={style.vocations_intro}>
        La CSCV está formada por laicos católicos (Can. 298), quienes, viviendo en el mundo de hoy, se reúnen en conformidad con la ley de la Iglesia (Can. 299) para establecer una comunidad carismática y evangelizadora, sin necesidad de vivir en el lugar donde se congregan. Cada miembro de la CSCV, como lo describen sus estatutos, ha sido llamado por nuestro Señor Jesucristo a vivir tres vocaciones fundamentales:
      </p>
      <ol className={style.vocations_list}>
        {HISTORIA_VOCATIONS.map(vocation => (
          <li key={vocation.number} className={style.vocations_item}>
            <span className={style.vocations_number}>{vocation.number}</span>
            <div className={style.vocations_text}>
              <h3 className={style.vocations_title}>{vocation.title}</h3>
              <p className={style.vocations_body}>{vocation.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
};
