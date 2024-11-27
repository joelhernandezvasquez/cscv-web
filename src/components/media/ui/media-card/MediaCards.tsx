/* eslint-disable @next/next/no-img-element */
'use client';

import useToggle from '@/hooks/useToggle';
import SliderEvent from '@/components/ui/slider-event/SliderEvent';
import {Images } from '@/interfaces/event-images';
import style from './style.module.css';

interface Props{
    eventImages:Images[]
}

const MediaCards = ({eventImages}:Props) => {
 const {isToggle,handleToggle}  = useToggle();
 const sortedImages = eventImages;

 const onClickImage = (eventImage:Images) =>{
   const firstImage = eventImages[0];
   const currentImageIndex = eventImages.findIndex(image => image.id === eventImage.id);

  sortedImages[0] = eventImage;
  sortedImages[currentImageIndex] = firstImage;
   
  handleToggle();
 }

  return (
    <ul className={style.galleria_container}>
       {
        eventImages.map((eventImage)=>{
          return <li key={eventImage.id} onClick={()=> onClickImage(eventImage)}>
                  <img 
                  className={style.galleria_item}
                  src={eventImage.url}
                  width={200}
                  height={200}
                  alt=''
                  />
           </li>
           
        })
       }
          {isToggle && <SliderEvent eventImages={sortedImages} close={handleToggle}/>}
         </ul>
  )  
}

export default MediaCards