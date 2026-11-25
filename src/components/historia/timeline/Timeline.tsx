import { HISTORIA_TIMELINE } from "@/constants/historia";
import { SectionShell } from "../section-shell/SectionShell";
import style from "./style.module.css";

export const HistoriaTimeline = () => {
  return (
    <SectionShell number="02" label="Fechas clave">
      <ol className={style.timeline_list}>
        {HISTORIA_TIMELINE.map(milestone => (
          <li key={milestone.date} className={style.timeline_item}>
            <span className={style.timeline_marker} aria-hidden="true"/>
            <span className={style.timeline_date}>{milestone.date}</span>
            <p className={style.timeline_text}>{milestone.text}</p>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
};
