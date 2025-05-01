/* eslint-disable @next/next/no-img-element */
// import { Metadata, ResolvingMetadata } from 'next';
import { redirect } from "next/navigation";
import { getCourse } from "@/actions/get-course";
import { leadText} from "@/config/font.plugin";
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
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import style from './style.module.css';
interface Props{
    params: {
    slug: string
  }
}
/* need clean types on strapi course */
const CoursePage = async({params}:Props) => {
    const {slug} = params;
    const [course,eventList] = await Promise.all([getCourse(slug),getEventList()]);
    const whatToLearnItems = course?.whatLearn[0]?.children;
    const filterEventList = eventList.filter(event => event.slug!==course.slug);

    if(!course){
      redirect('/');
    }

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

     <InscriptionBtn background={'#FFFFFF'} color={'#b80000'} contactNumber="6468416837"/> 
   </div>

  <div className={`${style.course_description} ${style.course_container}`}>
     
     <div className={style.wrapper}>
      <div>
     <Title title={ course.isCourse ?"Sobre Este Curso" :"Sobre Este Retiro"} size={"lg"}/>
     <p className={leadText.className}>{course.description}</p>
    
    <div className={style.what_learn}>
      <Title title={"Lo que Aprenderas"} size={"md"}/>
      <ul className={`${style.what_learn_items} ${leadText.className}`}> 
        <BlocksRenderer content={whatToLearnItems}/>
      </ul>
    </div>
    </div> 

      {course.promocional_video_Url && 
        <FloatingVideo url={course.promocional_video_Url}>
        <InscriptionBtn background={"#b80000"} color={"#FFFFFF"} contactNumber="6468416837"/> 
        </FloatingVideo>
     } 
    </div> 

 <div className={style.video}>
    <Video width={"100%"} height={"100%"} url={course.promocional_video_Url}/>
  </div>  

  <div className={style.more_info}>
       <div>
        <Title title={"Requisitos"} size={"lg"} color="red"></Title>
          <p className={leadText.className}>{course.requirements}</p>
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
       <InscriptionBtn background={"#b80000"} color={"#FFFFFF"} contactNumber="6468416837"/> 
    </FloatingCta>

    <Title className={style.heading} color="red" title={"Cursos que podrian interesarte"} size={"xl"}/>
    
    <ul className={`${style.event_list} ${'max_container'}`}>
        {filterEventList.map((event)=>{
          return <EventCard key={event.id} event={event}/>
        })}
    </ul>  

  </section>
  )
}

export default CoursePage