import { ReactNode } from 'react';
import Video from '../video/Video';
import style from './style.module.css';

interface Props{
    url:string,
    children:ReactNode
}

const FloatingVideo = ({url,children}:Props) => {
  return (
    <aside className={style.floating_video}>
       <Video   
       width={'90%'} 
       height={'100%'} 
       url={'https://healing-memory-8a8072e443.media.strapiapp.com/VIDEO_2025_01_25_18_23_48_38fedfdfbd.mov'}
       />
       {children}
    </aside>
  )
}

export default FloatingVideo