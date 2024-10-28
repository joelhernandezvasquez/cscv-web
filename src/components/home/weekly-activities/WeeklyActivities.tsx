import { ActivityCard } from "@/components/ui/activity-card/ActivityCard";
import { subHeading, titleHeadline } from "@/config/font.plugin";
import { getWeeklyActivities } from "@/actions/get-weekly-activities";
import style from './style.module.css';

export const WeeklyActivities = async () => {
   const activities = await getWeeklyActivities();

   if(activities.length <=0) return;
   
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
