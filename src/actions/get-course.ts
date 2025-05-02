import { Course } from "@/interfaces/courses";
import { IsCurrentEnvironmentDevelopment } from "@/util/getCurrentEnvironment";

const {STRAPI_HOST,STRAPI_TOKEN} = process.env;
export const getCourse = async(slug:string):Promise<Course> =>{
 
    try{
      const request = await fetch(`${STRAPI_HOST}/api/courses?populate=*`,{
        headers:{
            Authorization:`Bearer ${STRAPI_TOKEN}`
        },
        next: { revalidate: 0 },
      })

      if(!request.ok){
        throw new Error('Error while getting course list');
      }

      const response = await request.json();
      let courseDetail:Course;
    
     response.data.forEach((course:Course) => {
      if(course.slug === `${slug}`){
          courseDetail = course;
          courseDetail.flyerUrl =  IsCurrentEnvironmentDevelopment() ? `${STRAPI_HOST}${course.flyer.url}`: course.flyer.url;
          
          if(course.promocional_video){
            courseDetail.promocional_video_Url = IsCurrentEnvironmentDevelopment() ? `${STRAPI_HOST}${course.promocional_video[0].url}`: course.promocional_video[0].url;
          }
        }
     });
      
       return courseDetail!;
    }
    catch(error){
        if(error instanceof Error){
           console.log(error)
            console.log(error.message);
            throw new Error(error.message);
        }
        console.log(error);
        return {} as Course;
    }
}