import { ActivityCard } from "@/components/ui/activity-card/ActivityCard";
import { subHeading, titleHeadline } from "@/config/font.plugin";
import { getWeeklyActivities } from "@/actions/get-weekly-activities";
import { getHomeInfo } from "@/actions/get-home-info";
import { Title } from "@/components/ui/title/Title";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import style from './style.module.css';

export const WeeklyActivities = async () => {

   const [homeInfo,activitiesList] = await Promise.all([getHomeInfo(),getWeeklyActivities()]);
   const {activities} = homeInfo;
   
   if(activitiesList.length <=0) return;
   
  return (
    <section className="block"> 
      <Title className={`${subHeading.className} ${style.activity_sm_heading}`} title={activities.title} size={'lg'} color={'red'} />
      <h3 className={`${titleHeadline.className} ${style.activity_heading}`}>
        <BlocksRenderer content={activities.description}/>
      </h3>
      
      <ul className={style.activities_container}>
       {activitiesList.map((element)=>{
        return <ActivityCard key={element.activity} activities={element}/>
       })}
      </ul>
    </section>
  )
}
