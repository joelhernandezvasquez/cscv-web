/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Title } from '../ui/title/Title';
import { leadText, titleHeadline } from '@/config/font.plugin'
import MediaCards from './ui/media-card/MediaCards';
import MainMediaCard from './ui/main-media-card/MainMediaCard';
import { getEventImages } from '@/actions/get-event-images';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import style from './style.module.css';

const Media = async () => {
    const mediaEvents = await getEventImages();
    const mediaEvent = mediaEvents[0];

  return (
    <section className={`${style.wrapper} ${'block'}`}>
        <Title 
           title={mediaEvent.title} 
           className={`${'center_text'} ${style.main_heading}`}
           color="white" 
           size='xl'
        />

        <video className={style.video} width="100%" height="350" controls autoPlay>
            <source src={mediaEvent.videoUrl} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>

          <Title
          title={mediaEvent.eventName} 
          className={`${'center_text'} ${style.event_name}`}
          color="white" 
          size='md'/>

          <div className={`${leadText.className} ${style.media_description} ${'center_text'}`}>
            <BlocksRenderer content={mediaEvent.eventDescription}/>
          </div>

          <MainMediaCard eventImages= {mediaEvent.imagesUrl}/>

          <MediaCards eventImages={mediaEvent.imagesUrl}/>

          <Link href="/" className={`${style.cta_link} ${titleHeadline.className}`}> See More </Link>
    </section>
  )
}

export default Media