import { Events } from "@/interfaces/events";
import { IsCurrentEnvironmentDevelopment } from "@/util/getCurrentEnvironment";

const {STRAPI_HOST,STRAPI_TOKEN} = process.env;
export const getEventList = async():Promise<Events[]> =>{
 
    try{
      const request = await fetch(`${STRAPI_HOST}/api/events?fields[0]=id&fields[1]=slug&fields[2]=name&fields[4]=description&fields[5]=eventDates&fields[6]=price&fields[7]=requisitos&fields[8]=location&populate[graphic][fields][3]=url`,{
        cache: 'no-store',
        headers:{
            Authorization:`Bearer ${STRAPI_TOKEN}`
        }
      })

      if(!request.ok){
        throw new Error('Error while getting event list');
      }

      const response = await request.json();


      return response.data.map((event:Events)=>{
        const {graphic} = event;
        const graphicUrl = IsCurrentEnvironmentDevelopment() ? `${STRAPI_HOST}/${graphic.url}` : graphic.url

        return{
            ...event,
            graphicUrl
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