/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Title } from "@/components/ui/title/Title";
import { regularText, titleHeadline} from "@/config/font.plugin";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Block } from "@/interfaces/block";
import CarismasCard from "@/components/ui/carismas-card/CarismasCard";
import { getCarismas } from "@/actions/get-carismas";
import style from "./style.module.css";
interface Props{
  about:Block,
}

export const AboutUs = async({about}:Props) => {
  const carismas = await getCarismas();

  return (
    <section className={`${"block"} ${style.about_container} ${'max_container'}`}>
     
     <div className={style.header}>
       <div className={style.red_dot}></div>
       <Title className={titleHeadline.className} color="black" size="xs" title="ABOUT US"></Title>
     </div>

     <h3 className={`${style.main_heading} ${titleHeadline.className}`}>
      {about.title}
     </h3>

     <img
     width={'100%'}
     height={300}
     src={'/images/comunidad.jpeg'}
     className={style.cover_image}
     alt=""
     />

      <div className={`${regularText.className} ${style.about_text}`}>
        <BlocksRenderer content={about.description}/>
      </div>

      <Link className={`${"btn_cta"} ${style.conocer_btn}`} href="/">
        Conocer Mas
      </Link> 

      <ul className={style.carisma_container}>
        {carismas.map(carisma =>{
          return <CarismasCard key={carisma.id} carisma={carisma}/>
        })}
      </ul>

    </section>
  );
};
