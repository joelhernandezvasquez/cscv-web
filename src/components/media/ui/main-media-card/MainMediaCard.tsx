/* eslint-disable @next/next/no-img-element */
'use client';
import {Images} from '@/interfaces/event-images';
import useToggle from '@/hooks/useToggle';
import SliderEvent from '@/components/ui/slider-event/SliderEvent';
import style from './style.module.css';

interface Props{
    eventImages:Images[]
}

const MainMediaCard = ({eventImages}:Props) => {
    const heroImage = eventImages[0].url;
    const {isToggle,handleToggle}  = useToggle();

  return (
    <>
      <img 
            className={style.galleria_hero_image}
            src={heroImage}
            width={'100%'}
            height={200}
            onClick={handleToggle}
            alt=""
          />
           {isToggle && <SliderEvent eventImages={eventImages} close={handleToggle}/>}
   </>
  )
}

export default MainMediaCard