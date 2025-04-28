/* eslint-disable @next/next/no-img-element */
// import { Metadata, ResolvingMetadata } from 'next';
import { getCourse } from "@/actions/get-course";
import { leadText} from "@/config/font.plugin";
import style from './style.module.css';
import InscriptionBtn from "@/components/ui/inscription-btn/InscriptionBtn";
import { Title } from "@/components/ui/title/Title";
import { FcCalendar } from "react-icons/fc";
import { AiFillSound } from "react-icons/ai";
import { IoIosPricetag } from "react-icons/io";
import FloatingCta from "@/components/ui/floating-cta/FloatingCta";
import Video from "@/components/ui/video/Video";
import { getEventList } from "@/actions/get-events";
import { EventCard } from "@/components/ui/event-card/EventCard";
import FloatingVideo from "@/components/ui/floating-video/FloatingVideo";
interface Props{
    params: {
    slug: string
  }
}

const CoursePage = async({params}:Props) => {
    const {slug} = params;
    const course = await getCourse(slug);
    const eventList = await getEventList();
  
  return (
  <section>
   <div className={`${style.course_container} ${style.banner}`}>
     <Title title={course.name} size={"xxl"} color="white"/>
     <p className={`${leadText.className} ${style.teaser}`}>{course.teaser}</p>

     <ul className={style.course_upfront_info}>
        <li className={style.item_info}>
         <FcCalendar size={25} />
         <p className={`${leadText.className}`}>{course.date}</p>
        </li>

        <li className={style.item_info}>
        <AiFillSound size={25} />
         <p className={`${leadText.className}`}>{course.language}</p>
        </li>

        <li className={style.item_info}>
        <IoIosPricetag size={25} />
         <div className={style.price_badge}>
          <p className={`${leadText.className}`}>{course.price}</p>
         </div>
        </li>
     </ul>

     <InscriptionBtn background={'#FFFFFF'} color={'#b80000'}/> 
   </div>

   <div className={`${style.course_description} ${style.course_container}`}>
     <Title title={"Sobre Este Curso"} size={"lg"}/>
     <p className={leadText.className}>{course.description}</p>
    
    <div className={style.what_learn}>
      <Title title={"Lo que Aprenderas"} size={"md"}/>
      <ul>
        <li className={style.what_learn_items}>
          <span>✓</span>
          <p className={`${leadText.className}`}>
            Fundamentos de la fe cristiana
          </p>
        </li>

        <li className={style.what_learn_items}>
          <span>✓</span>
          <p className={`${leadText.className}`}>
           
          Principios bíblicos para la vida diaria
          
          </p>
        </li>

        <li className={style.what_learn_items}>
          <span>✓</span>
          <p className={`${leadText.className}`}>
           
          Técnicas de estudio de la Biblia
          
          </p>
        </li>

        <li className={style.what_learn_items}>
          <span>✓</span>
          <p className={`${leadText.className}`}>
           
          Desarrollo de una vida de oración más profunda
          
          </p>
        </li>
      </ul>
    </div>

   <div className={style.video}>
    <Video width={"100%"} height={"100%"} url={"https://healing-memory-8a8072e443.media.strapiapp.com/VIDEO_2025_01_25_18_23_48_38fedfdfbd.mov"}/>
  </div>

    

    <div className={style.more_info}>
       <div>
        <Title title={"Requisitos"} size={"lg"} color="red"></Title>
          <p className={leadText.className}>El curso Felipe corresponde a los que no han hecho un curso de la escuela.</p>
       </div>

       <div>
          <Title title="Parqueo Gratis" size="lg" color="red"></Title>
          <p className={leadText.className}>Tenemos un parqueo cerrado donde se puede dejar el carro durante todo el curso.</p>
          <a href="https://maps.app.goo.gl/Qo5BpYtFpgn9yLyT9">Dirreccion para llegar a la escuela</a>
       </div>

       <div>
         <Title title="Hay que traer" size="lg" color="red"/>
          <ul>
            <li className={leadText.className}>Actitud positiva.</li>
            <li className={leadText.className}>Biblia. (Se recomienda; también se pueden comprar en nuestra librería al llegar.)</li>
            <li className={leadText.className}>Rosario. (Se recomienda; también se pueden comprar en nuestra librería al llegar.)</li>
            <li className={leadText.className}>Dinero (opcional) o una tarjeta (opcional) para hacer compras en la librería.</li>
          </ul>
       </div>

       <div>
        <Title title="No Se Permite" size="lg" color="red"/>
        <ul>
        <li className={leadText.className}>Alcohol.</li>
         <li className={leadText.className}>Drogas (incluye la marihuana en todas sus formas, entre ellas los comestibles o edibles).</li>
         <li className={leadText.className}>Objetos para fumar (incluye vapes y pens).</li>
        </ul>
         
       </div>
    </div>
   
   </div>

    <FloatingCta>
       <InscriptionBtn background={"#b80000"} color={"#FFFFFF"}/> 
    </FloatingCta>

    <FloatingVideo/>
    
    <Title className={style.heading} color="red" title={"Cursos que podrian interesarte"} size={"xl"}/>
    
    <ul className={`${style.event_list} ${'max_container'}`}>
        {eventList.map((event)=>{
          return <EventCard key={event.id} event={event}/>
        })}
    </ul>

    
    
  </section>
  )
}

export default CoursePage