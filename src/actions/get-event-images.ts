import { EventImage } from "@/interfaces/event-images";

const {STRAPI_HOST,STRAPI_TOKEN} = process.env;

export const getEventImages = async():Promise<EventImage[]> => {
  try{
    const request = await fetch(`${STRAPI_HOST}/api/event-images?populate=*`,{
        headers:{
            Authorization:`Bearer ${STRAPI_TOKEN}`
        }
    })

    if(!request.ok){
        throw new Error('Something went wrong while getting the event images');
    }

    const response = await request.json();
    console.log(response.data);
   
    return response.data.map((event:EventImage)=>{
      const imagesUrl  = event.image.map((element)=>{
        return{
          id:element.id,
          url:`${STRAPI_HOST}${element.url}`
        }
       
      })
     
       const videoUrl = `${STRAPI_HOST}${event.video.url}`;

       return{
         title:event.title,
         eventName:event.eventName,
         eventDescription:event.eventDescription,
         imagesUrl,
         videoUrl
        }
    })

  }
  catch(error){
    if(error instanceof Error){
        throw new Error(error.message);
    }
    console.log(error);
    return [] as EventImage[]
  }
}