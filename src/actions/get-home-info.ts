import { HomeInfo } from "@/interfaces/homeInfo";
import { IsCurrentEnvironmentDevelopment } from "@/util/getCurrentEnvironment";

const {STRAPI_HOST,STRAPI_TOKEN} = process.env;

export const getHomeInfo = async ():Promise<HomeInfo>=>{
  try{
    const request = await fetch(`${STRAPI_HOST}/api/home?populate=*`,{
      headers:{
          Authorization:`Bearer ${STRAPI_TOKEN}`
      },
      next: { revalidate: 0 },
    })
  
    if(!request.ok){
      throw new Error('error while getting home data from strapi');
    }
     const response =  await request.json();
     const {title,description,cover,about,activities,events,testimonies,ministerios,anuncios} = response.data;
     
     const image  = IsCurrentEnvironmentDevelopment() ? `${STRAPI_HOST}/${cover.url}` : `${cover.url}`;
   
     return {title,description,image,about,activities,events,testimonies,ministerios,anuncios};
     
  }
  catch(error){
    if(error instanceof Error){
      console.log(error.message);
      throw new Error(error.message);
    }
    return {} as HomeInfo;
  }
  
}