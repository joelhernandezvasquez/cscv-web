/* eslint-disable @next/next/no-img-element */

import { Carisma } from '@/interfaces/carisma';
import { Title } from '../title/Title';
import { leadText } from '@/config/font.plugin';
import Link from 'next/link';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import style from './style.module.css';

interface Props{
    carisma:Carisma
}

const CarismasCard = ({carisma}:Props) => {
    const {imageUrl,carismaTitle,description} = carisma;

  return (
    <li className={style.card}>
        <img
        className={style.cover_image}
         src={imageUrl}
         width={100}
         height={100}
         alt=""
        /> 

        <div className={style.body}>
          <Title title={carismaTitle} size="lg" color="red"/>
          <div className={`${leadText.className} ${style.card_description}`}>
           <BlocksRenderer content={description}/>
          </div>

           <Link className={`${"btn_cta"} ${style.conocer_btn}`} href="/">
             Conocer Mas
           </Link> 
        </div>
    </li>
  )
}

export default CarismasCard