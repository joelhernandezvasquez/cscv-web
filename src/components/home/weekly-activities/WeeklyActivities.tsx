import { ActivityCard } from "@/components/ui/activity-card/ActivityCard";
import { titleHeadline } from "@/config/font.plugin";
import { getWeeklyActivities } from "@/actions/get-weekly-activities";
import { Title } from "@/components/ui/title/Title";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Block } from "@/interfaces/block";
import style from './style.module.css';

interface Props{
  activities:Block
}

export const WeeklyActivities = async ({activities}:Props) => {
  const activitiesList = await getWeeklyActivities();
   
   if(activitiesList.length <=0) return;
   
  return (
    <section className="block"> 
      <Title className={`${titleHeadline.className} ${style.activity_sm_heading}`} title={activities.title} size={'md'} color={'red'} />
      <h3 className={`${titleHeadline.className} ${style.activity_heading}`}>
        <BlocksRenderer content={activities.description}/>
      </h3>
      
      <ul className={`${style.activities_container}`}>
       {activitiesList.map((element)=>{
        return <ActivityCard key={element.activity} activities={element}/>
       })}
      </ul>
    </section>
  )
}
