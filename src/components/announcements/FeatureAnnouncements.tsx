import { Block } from '@/interfaces/block';
import { Title } from '../ui/title/Title';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { getAnnouncements } from '@/actions/get-anuncios';
import { leadText } from '@/config/font.plugin';
import style from './style.module.css';

interface Props{
  anuncios:Block
}

const FeatureAnnouncements = async({anuncios}:Props) => {
  const {title,description} = anuncios;
  const announcements = await getAnnouncements();

  return (
    <section className={`${style.wrapper} ${'block'}`}>
     
         <Title className={`${'center_text'} ${style.headline}`} title={title} size='md' color='white'/>
          
          <div className={`${style.description} ${leadText.className}`}>
            <BlocksRenderer content={description}/>
          </div>

          <video className={style.video} width="100%" height="360" controls autoPlay>
            <source src={announcements[0].url} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>

    </section>
  )
}

export default FeatureAnnouncements