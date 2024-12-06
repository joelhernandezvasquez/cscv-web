/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import {Swiper as SwiperObject} from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Autoplay,FreeMode, Navigation, Thumbs } from 'swiper/modules';
import {Images} from '@/interfaces/event-images';
import { IoClose } from 'react-icons/io5';
import style from './style.module.css';

interface Props{
 eventImages: Images[],
 close:() => void
}

const SliderEvent = ({eventImages,close}:Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

  return (
    <div className={style.modal} role="dialog">
      <div className={style.header} onClick={close}>
         <IoClose className={style.close_icon} size={30} color={'#fff'}/>
      </div>
      
      <Swiper
       style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      } as React.CSSProperties}
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 2500,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs,Autoplay]}
        className={`${'mySwiper2'} ${style.swiper_container}`}
      >
      {eventImages.map((eventImage)=>{
        return <SwiperSlide key={eventImage.id}>
                 <img className={style.swiper_image} src={eventImage.url} alt='' />
              </SwiperSlide>
      })}

      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView={eventImages.length}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
          {eventImages.map((eventImage)=>{
           return <SwiperSlide key={eventImage.id} 
                   className={`${style.swiper_thumbnail_container}`}>
                 <img className={`${style.swiper_image} ${style.swiper_thumbnail}`} src={eventImage.url} alt='' />
              </SwiperSlide>
         })}
      </Swiper>
    
    </div>
  )
}

export default SliderEvent