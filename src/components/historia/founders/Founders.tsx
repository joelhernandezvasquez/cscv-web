import { HISTORIA_US_CITIES } from "@/constants/historia";
import { SectionShell } from "../section-shell/SectionShell";
import style from "./style.module.css";

export const HistoriaFounders = () => {
  return (
    <SectionShell number="03" label="Los primeros ocho">
      <p className={style.founders_lead}>
        Los primeros ocho miembros de la Comunidad fueron el Siervo de Dios Padre Emiliano Tardif, M.S.C.; el Diácono Evaristo y su esposa, Yolanda Guzmán; María Armenteros Malla; John y Nidia Fleury; Pura Deogracia; y Emenegilda Almánzar.
      </p>
      <p className={style.founders_body}>
        Cuenta con el reconocimiento eclesial de la Conferencia Episcopal de la República Dominicana desde hace 41 años. Se encuentra presente en nueve países y ha establecido 30 casas.
      </p>

      <div className={style.founders_us}>
        <span className={style.founders_us_title}>En los Estados Unidos — Tenemos Casas de Oración en:</span>
        <ul className={style.founders_cities}>
          {HISTORIA_US_CITIES.map(city => (
            <li
              key={city.name}
              className={city.highlight ? style.founders_city_highlight : style.founders_city}
            >
              {city.name}
            </li>
          ))}
        </ul>
        <span className={style.founders_us_outro}>Además de una Célula Fraterna en Dallas.</span>
      </div>
    </SectionShell>
  );
};
