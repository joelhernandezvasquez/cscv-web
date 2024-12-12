import { Footer } from "@/interfaces/footer";

const {STRAPI_HOST,STRAPI_TOKEN} = process.env;

export const getFooter = async():Promise<Footer> =>{
  
    try{
      const request = await fetch(`${STRAPI_HOST}/api/footer`,{
        cache: 'no-store',
        headers:{
            Authorization:`Bearer ${STRAPI_TOKEN}`
        }
      })

      if(!request.ok){
        throw new Error('Something went wrong while getting footer information.');
      }

      const response = await request.json();
     return response.data;

    }
    catch(error){
        if(error instanceof Error){
            console.log(error.message);
            throw new Error(error.message);
        }
        console.log(error);
        return {} as Footer;
    }
}