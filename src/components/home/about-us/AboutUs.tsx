/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
//import { getHomeInfo } from "@/actions/get-home-info";
import { regularText, titleHeadline } from "@/config/font.plugin";
//import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import style from "./style.module.css";

export const AboutUs = async () => {
  //const { about } = await getHomeInfo();
  const about = {
    title:'Quienes Somos?'
  }

  return (
    <section className={`${"block"} ${style.about_container}`}>
      <div className={style.cover_image_overlay}>
        <iframe
          className={style.yt_video}
          width="100%"
          height="200"
          src="https://www.youtube.com/embed/7uCV8FbGbQ8?si=quRbiDb1h3vso8yH"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen={true}>
          </iframe>
      </div>

      <h2 className={`${titleHeadline.className} ${style.about_title}`}>
        {about.title}
      </h2>

      <div className={`${regularText.className} ${style.about_text}`}>
        {/* <BlocksRenderer content={about.description} /> */}
        <p>La Comunidad Siervos de Cristo Vivo es una asociación de fieles cuyos miembros son laicos catolicos, que acogiendose al derecho que nuestra iglesia reconoce, forman una comunidad de evangelización.</p>
        <p>Nace en los sentimientos del Sagrado Corazón de Jesús por el hombre, los cuales inspiraron al Reverendo P. Emiliano Tardif, M.S.C., a María Armenteros Malla y a Evaristo Guzmán Hilario, luego de ocho años es experiencia en el Amor de Dios y en la predicación, a fundar una comunidad que fuera contemplativa y evangalizadora, y cuyo trabajo tenga su centro y fortaleza en corazón de aquel que dice Sin mi no pueden hacer nada (Juan 15,5).</p>

      </div>

      <Link className={`${"btn_cta"} ${style.conocer_btn}`} href="/">
        Conocer Mas
      </Link>
    </section>
  );
};
