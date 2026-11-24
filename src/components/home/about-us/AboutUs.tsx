/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { getCarismas } from "@/actions/get-carismas";
import { heroFont } from "@/config/font.plugin";
import style from "./style.module.css";

export const AboutUs = async() => {
  const carismas = await getCarismas();

  return (
    <section id="nosotros" className={`${heroFont.className} ${style.about_section}`}>
      <div className={style.about_container}>
        <div className={style.about_head}>
          <h2 className={style.about_title}>Una comunidad contemplativa y evangelizadora</h2>
          <div className={style.about_copy}>
            <p className={style.about_intro}>
              Nace en los sentimientos del Sagrado Corazón de Jesús, que inspiraron al Siervo de Dios Padre Emiliano Tardif, m.s.c., a María Armenteros Malla y al Diácono Evaristo Guzmán Hilario. Fundada el 28 de noviembre de 1982 en la República Dominicana.
            </p>
            <p className={style.about_quote}>“Sin mí no pueden hacer nada.” Juan 15,5</p>
            <Link className={style.about_link} href="/historia">Nuestra historia →</Link>
          </div>
        </div>

        <ul className={style.pillar_grid}>
          {carismas.map(carisma =>(
            <li key={carisma.id} className={style.pillar_card}>
              <img
                className={style.pillar_img}
                src={carisma.imageUrl}
                alt={carisma.carismaTitle}
                loading="lazy"
              />
              <div className={style.pillar_body}>
                <h3 className={style.pillar_name}>{carisma.carismaTitle}</h3>
                <div className={style.pillar_description}>
                  <BlocksRenderer content={carisma.description}/>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
