import { Ministerios } from "@/interfaces/ministerios";
import { IsCurrentEnvironmentDevelopment } from "@/util/getCurrentEnvironment";

const {STRAPI_HOST,STRAPI_TOKEN} = process.env;

export const getMinisterios = async():Promise<Ministerios[]> => {
 
    try{
      const request = await fetch(`${STRAPI_HOST}/api/ministerios?fields[0]=slug&fields[1]=ministerio&fields[2]=description&populate[image][fields][3]=url`,{
        cache: 'no-store',
        headers:{
            Authorization:`Bearer ${STRAPI_TOKEN}`
        }
      })

      if(!request.ok){
        throw new Error('Something went wrong while getting testimonies from strapi.');
      }
  
      const response = await request.json();

      return response.data.map((ministerios:Ministerios)=>{
        const {image} = ministerios;
        const urlImage = IsCurrentEnvironmentDevelopment() ? `${STRAPI_HOST}/${image.url}` : image.url;

        return {
             ...ministerios,
             urlImage
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