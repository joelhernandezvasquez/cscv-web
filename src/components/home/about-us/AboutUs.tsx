/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { getHomeInfo } from "@/actions/get-home-info";
import { Title } from "@/components/ui/title/Title";
import { regularText} from "@/config/font.plugin";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import style from "./style.module.css";


export const AboutUs = async () => {
  const { about } = await getHomeInfo();
  
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

      <Title title={about.title} size={'md'} color={'black'}/>

      <div className={`${regularText.className} ${style.about_text}`}>
        <BlocksRenderer content={about.description} />
      </div>

      <Link className={`${"btn_cta"} ${style.conocer_btn}`} href="/">
        Conocer Mas
      </Link>
    </section>
  );
};
