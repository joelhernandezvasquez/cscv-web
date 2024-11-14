import { Testimonies } from "@/interfaces/testimonies";

const {STRAPI_HOST,STRAPI_TOKEN} = process.env;

export const getTestimonies = async():Promise<Testimonies[]> =>{
 
    try{
      const request = await fetch(`${STRAPI_HOST}/api/testimonios?fields[0]=id&fields[1]=name&fields[2]=testimony&populate[avatar][fields][3]=url`,{
        headers:{
            Authorization:`Bearer ${STRAPI_TOKEN}`
        }
      })

      if(!request.ok){
        throw new Error('Something went wrong while getting testimonies from strapi.');
      }
  
      const response = await request.json();

      return response.data.map((testimony:Testimonies)=>{
        const {avatar} = testimony;
        const avatarImage = `${STRAPI_HOST}/${avatar.url}`;

        return {
            ...testimony,
             avatarImage
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