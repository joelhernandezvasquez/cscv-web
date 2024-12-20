/* eslint-disable @next/next/no-img-element */

import { getTestimonies } from "@/actions/get-testimonies";
import { Title } from "../title/Title";
import { Block } from "@/interfaces/block";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { leadText } from "@/config/font.plugin";
import style from "./style.module.css";

interface Props {
  testimonials: Block;
}

const Testimonials = async ({ testimonials }: Props) => {
  const { title, description } = testimonials;
  const testimoniesList = await getTestimonies();

  return (
    <section className={`${style.container}`}>
      <Title className={style.main_title} title={title} size="md" color="black" />
      <div className={`${leadText.className} ${style.description}`}>
        <BlocksRenderer content={description} />
      </div>

      <ul className={style.testiomanials}>
        {testimoniesList.map((testimony) => {
          return (
            <li className={style.testimony_card} key={testimony.id}>
              <img
                className={style.testimony_card_img}
                src={testimony.avatarImage}
                width={65}
                height={65}
                alt={`Avatar Image of ${testimony.name}`}
              />
              <Title className={style.card_title} title={testimony.name} color="black" size={"sm"} />
              <div className={`${leadText.className} ${"center_text"} ${style.description_card}`}>
                <BlocksRenderer content={testimony.testimony} />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Testimonials;
