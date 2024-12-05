/* eslint-disable @next/next/no-img-element */
import { Activities } from "@/interfaces/activities"
import { leadText, titleHeadline } from "@/config/font.plugin";
import style from './style.module.css';

interface Props{
    activities:Activities
}

export const ActivityCard = ({activities}:Props) => {
  return (
    <li className={style.activity_card}>
      <img
      className={style.activity_card_image}
       src={activities.imageUrl}
       width={'100%'}
       height={'100%'} 
       alt=""
       />

       <div className={`${'overlay'} ${style.card_content}`}>
         <h3 className={`${titleHeadline.className} ${style.card_content_headline}`}>{activities.activity}</h3>
         <p className={`${leadText.className} ${style.card_content_description}`}>{activities.description}</p>
         <p className={`${leadText.className} ${style.card_content_description}`}>{activities.schedule}</p>
       </div>

    </li>
  )
}
