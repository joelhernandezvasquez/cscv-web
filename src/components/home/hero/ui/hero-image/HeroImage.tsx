
'use client';

/* eslint-disable @next/next/no-img-element */
import { LARGE_SCREEN_IMAGE } from "@/constants/constant";
import style from './style.module.css';
import useDevice from "@/hooks/useDevice";

interface Props{
 image:string
}
const HeroImage = ({image}:Props) => {
    const {isMobile} = useDevice();

  return (
    <div className={style.hero_img_container}>
    <img
      width={100}
      height={100}
      src={isMobile ? image : LARGE_SCREEN_IMAGE}
      alt=""
     />
  </div>
  )
}

export default HeroImage