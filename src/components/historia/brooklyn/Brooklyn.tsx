/* eslint-disable @next/next/no-img-element */
import style from "./style.module.css";

export const HistoriaBrooklyn = () => {
  return (
    <section className={style.brooklyn_section}>
      <div className={style.brooklyn_grid}>
        <div className={style.brooklyn_text}>
          <div className={style.brooklyn_label}>
            <span className={style.brooklyn_number}>05</span>
            <span className={style.brooklyn_name}>Casa de la Anunciación · Brooklyn</span>
          </div>
          <h2 className={style.brooklyn_title}>En la Diócesis de Brooklyn</h2>
          <p className={style.brooklyn_body}>
            En la Diócesis de Brooklyn, la Comunidad Siervos de Cristo Vivo fue fundada en 1999 y, el 1 de enero de 2009, fue reconocida oficialmente y aceptada por S.E.R. Nicholas DiMarzio, Obispo de Brooklyn, como una asociación privada de fieles en conformidad con la ley de la Iglesia (Canon 298). Desde entonces, la Comunidad tiene su sede y Casa de Oración en el 207 Hendrix Street, Brooklyn, NY 11207.
          </p>
          <p className={style.brooklyn_body}>
            La CSCV funciona de forma independiente, en conformidad con sus estatutos, bajo la dirección de su Consejo Local, su Asesor Espiritual y la supervisión del Consejo de la provincia de los Estados Unidos.
          </p>
        </div>
        <img
          className={style.brooklyn_image}
          src="/images/history2.png"
          alt="Comunidad Siervos de Cristo Vivo en la Casa de la Anunciación, Brooklyn"
          loading="lazy"
        />
      </div>
    </section>
  );
};
