// 'use client';
//mport ReactPlayer from 'react-player';

interface Props{
  width:string,
  height:string,
  url:string
}

const Video = ({width,height,url}:Props) => {

  return (
    <video
    controls
    width={`${width}`}
    height={`${height}`}
    style={{margin:'0 auto'}}>
      <source src={url} type="video/mp4"/>
    </video>
  )
}

export default Video