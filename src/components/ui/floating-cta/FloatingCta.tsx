
'use client';

import { ReactNode,useEffect, useState } from 'react';
import style from './style.module.css';

interface Props{
    children:ReactNode
}
export default function FloatingCta({children}:Props) {

  const[isVisible,setIsVisible] = useState(false);

  useEffect(()=>{
     const handleScroll = () =>{
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
     setIsVisible(scrollPercent > 0.03); 
    }

     document.addEventListener('scroll',handleScroll);

     return () => window.removeEventListener('scroll', handleScroll);

  },[])

  return (
    <div className={`${style.floating_container} ${isVisible && style.show}`}>
        {children}
    </div>
  )
}
