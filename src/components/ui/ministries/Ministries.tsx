/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Title } from "../title/Title";
import { Block } from "@/interfaces/block";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { getMinisterios } from "@/actions/get-ministerios";
import { leadText, titleHeadline } from "@/config/font.plugin";
import style from './style.module.css';

interface Props{
    ministerios:Block
  }

const Ministries = async({ministerios}:Props) => {
    const {title,description} = ministerios;
    const  ministeriosList = await getMinisterios();

  return (
    <section className={'block'}>
       <Title title={title} size={'xl'} color='red' className={`${'center_text'} ${style.main_heading}`}/>
       <div className={`${leadText.className} ${style.content}`}>
        <BlocksRenderer content={description}/>
       </div>

       <ul className={style.ministerios_menu}>
        {ministeriosList.map((ministerio)=>{
          return <li key={ministerio.id} className={style.ministerio_card}>
                   <img
                      className={style.ministerio_img}
                      width={'100%'}
                      height={'100%'}
                      src={ministerio.urlImage}
                      alt={''}
                   />
                      <div className={style.ministerio_card_info}>
                        <h3 className={`${titleHeadline.className} ${style.ministerio_card_title}`}>{ministerio.ministerio}</h3>
                        <div className={`${style.ministerio_description} ${leadText.className}`}>
                          <BlocksRenderer content={ministerio.description}/>
                        </div>
                        <Link className={`${titleHeadline.className} ${style.ministerio_card_link}`} href={'/'}>Read More</Link>
                      </div>
                   </li>
        })}
       </ul>
    </section>
  )
}

export default Ministries