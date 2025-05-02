import { titleHeadline } from "@/config/font.plugin";
import style from './style.module.css';

interface Props{
    title:string,
    size:'xs'|'sm' | 'md' | 'lg'| 'xl' |'xxl'
    color?:'black' | 'red' | 'white',
    className?:string
}

export const Title = ({title,size,color="black",className}:Props) => {
  return (
    <h2 className={`${titleHeadline.className} ${style[size]} ${style[color]} ${className}`}>
        {title}
    </h2>
  )
}
