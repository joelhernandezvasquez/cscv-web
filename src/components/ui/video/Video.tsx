'use client';
import ReactPlayer from 'react-player'

interface Props{
  width:string,
  height:string,
  url:string
}

const Video = ({width,height,url}:Props) => {

  return (
    <ReactPlayer url={url}
    controls
    width={`${width}`}
    height={`${height}`}
    style={{margin:'0 auto'}}
    />
  )
}

export default Video