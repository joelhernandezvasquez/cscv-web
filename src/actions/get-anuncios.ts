


import { Announcements } from "@/interfaces/anuncios";
import { IsCurrentEnvironmentDevelopment } from "@/util/getCurrentEnvironment";

const {STRAPI_HOST,STRAPI_TOKEN} = process.env;

export const getAnnouncements = async ():Promise<Announcements[]> =>{
    try{
      const request = await fetch(`${STRAPI_HOST}/api/anuncios?populate=*`,{
        headers:{
            Authorization:`Bearer ${STRAPI_TOKEN}`
        },
       
      })

      if(!request.ok){
        throw new Error('Something went wrong while getting the announcements.');
      }
     
      const response = await request.json();
  
      
      return response.data.map((data:Announcements)=>{

        const url = IsCurrentEnvironmentDevelopment() ? `${STRAPI_HOST}/${data.videoSource.url}` : data.videoSource.url;
        return {url:url}
      })
    }
    catch(error){
        if(error instanceof Error){
            throw new Error(error.message);

        }
        console.log(error);
        return [] as Announcements[];
    }
}