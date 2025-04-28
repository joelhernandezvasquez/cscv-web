import { Course } from "@/interfaces/courses";
import { IsCurrentEnvironmentDevelopment } from "@/util/getCurrentEnvironment";

const {STRAPI_HOST,STRAPI_TOKEN} = process.env;
export const getCourse = async(slug:string):Promise<Course> =>{
 
    try{
        //const request = await fetch(`${STRAPI_HOST}/api/events?fields[0]=id&fields[1]=slug&fields[2]=name&fields[4]=description&fields[5]=eventDates&fields[6]=price&fields[7]=requisitos&fields[8]=location&populate[graphic][fields][3]=url`
      const request = await fetch(`${STRAPI_HOST}/api/courses?populate=*`,{
        headers:{
            Authorization:`Bearer ${STRAPI_TOKEN}`
        },
        next: { revalidate: 0 },
      })

      if(!request.ok){
        throw new Error('Error while getting event list');
      }

      const response = await request.json();
      let courseDetail:Course;
    
     response.data.forEach((course:Course) => {
      if(course.slug === `${slug}` ){
          courseDetail = course;
          courseDetail.flyerUrl =  IsCurrentEnvironmentDevelopment() ? `${STRAPI_HOST}${course.flyer.url}`: course.flyer.url;
        }
     });
      
    
       return courseDetail!;
    }
    catch(error){
        if(error instanceof Error){
            console.log(error.message);
            throw new Error(error.message);
        }
        console.log(error);
        return {} as Course;
    }
}