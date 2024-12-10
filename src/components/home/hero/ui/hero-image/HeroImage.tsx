
'use client';

/* eslint-disable @next/next/no-img-element */
import { useMediaQuery } from "@uidotdev/usehooks";
import { LARGE_SCREEN_IMAGE } from "@/constants/constant";
import style from './style.module.css';

interface Props{
 image:string
}
const HeroImage = ({image}:Props) => {
    const isSmallDevice = useMediaQuery("only screen and (max-width : 767px)");

  return (
    <div className={style.hero_img_container}>
    <img
      width={100}
      height={100}
      src={isSmallDevice ? image : LARGE_SCREEN_IMAGE}
      alt=""
     />
  </div>
  )
}

export default HeroImage