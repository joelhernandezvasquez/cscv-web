import { ActivityCard } from "@/components/ui/activity-card/ActivityCard";
import { subHeading, titleHeadline } from "@/config/font.plugin";
import { Activities } from "@/interfaces/activities";
import style from './style.module.css';

const activities:Activities[] = [{
  image:'/images/carisma2.jpg',
  description:"Encuentra paz y renovación en la presencia viva de Jesús, donde el silencio se convierte en diálogo y el corazón en altar.",
  activity:'Adoracion Al Santisimo Sacramento',
  schedule:'Lunes a Sábado desde las 9:30 am a 7:00 pm'
  
},
{
  image:'/images/casa.jpeg',
  description:'Inicia tu día en comunidad, encontrando fortaleza y paz en la oración. Un espacio para entregar tus inquietudes a Dios y recibir su amor renovador.',
  activity:'Mañana de Oración',
  schedule:'Miércoles desde 11:00 am a 1:00 pm'
  
},
{
  image:'/images/quienes.jpeg',
  description:'Únete a una poderosa experiencia de adoración y alabanza, donde en comunidad elevamos nuestras voces y corazones para honrar y glorificar a Dios en la presencia del Espíritu Santo.',
  activity:'Asamblea de Adoración y Alabanza',
  schedule:'Jueves desde 7:15 pm a 9:45 pm'
  
},
{
  image:'/images/jovenes.jpg',
  description:'Únete a otros jóvenes en un espacio de amistad y fe, descubriendo juntos el llamado de Dios y fortaleciendo tu identidad en Cristo.',
  activity:'Grupo Juvenil The Chosen',
  schedule:'Viernes desde 7:30 pm a 9:30 pm'
},
]
export const WeeklyActivities = () => {
  return (
    <section className="block"> 
      <h2 className={`${subHeading.className} ${style.activity_sm_heading}`}>Actividades Semanales</h2>
      <h3 className={`${titleHeadline.className} ${style.activity_heading}`}>Compartimos el Amor de Dios de Varias Maneras en Nuestra Comunidad</h3>
      
      <ul className={style.activities_container}>
       {activities.map((element)=>{
        return <ActivityCard key={element.activity} activities={element}/>
       })}
      </ul>
    </section>
  )
}
