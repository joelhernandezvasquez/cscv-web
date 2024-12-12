import { Carisma } from "@/interfaces/carisma";
import { IsCurrentEnvironmentDevelopment } from "@/util/getCurrentEnvironment";

const {STRAPI_HOST,STRAPI_TOKEN} = process.env;

export const getCarismas = async():Promise<Carisma[]> =>{
  try{
    const request = await fetch(`${STRAPI_HOST}/api/carismas?populate=*`,{
      cache: 'no-store',
      headers:{
        Authorization:`Bearer ${STRAPI_TOKEN}`
      }
    })

    if(!request.ok) throw Error('Something went wrong while getting the carismas');
    
    const response = await request.json();

    return response.data.map((carisma:Carisma)=>{
     const {coverImage} = carisma;

     const imageUrl = IsCurrentEnvironmentDevelopment() ? `${STRAPI_HOST}${coverImage?.url}` : coverImage?.url
     
     return {
        id:carisma.id,
        carismaTitle:carisma.carismaTitle,
        description:carisma.description,
        imageUrl
     }
    })
}
  catch(error){
    console.log(error);
   throw Error(`${error}`);
  }
}