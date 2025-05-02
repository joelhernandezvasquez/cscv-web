
import { ReactNode} from 'react';
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
        width={'98%'} 
        height={'100%'} 
        url={url}
        />
      
       {children}
    </aside>
  )
}

export default FloatingVideo