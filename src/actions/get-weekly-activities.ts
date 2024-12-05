import { Activities } from "@/interfaces/activities";

const {STRAPI_HOST,STRAPI_TOKEN} = process.env;

export const getWeeklyActivities = async():Promise<Activities[]>=>{

  try{
    const request = await fetch(`${STRAPI_HOST}/api/weekly-activities?fields[1]=description&fields[2]=activity&fields[3]=schedule&populate[image][fields][0]=url`,{
      headers:{
        Authorization:`Bearer ${STRAPI_TOKEN}`
      }
    })

    if(!request.ok){
        throw new Error('Something happen while getting the weekly activities collection');
    }

    const response = await request.json();
    
    return response.data.map((activity:Activities)=>{
      const imageUrl =  `${STRAPI_HOST}/${activity.image.url}`;
      return {
        imageUrl,
        activity:activity.activity,
        description:activity.description,
        schedule:activity.schedule
      }
    })

   
  } 
  catch(error){
    if(error instanceof Error){
        console.log(error.message);
        throw new Error(error.message);
    }
    console.log(error);
    return [];
  } 
}