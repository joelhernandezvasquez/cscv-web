//import { BlocksRenderer } from "@strapi/blocks-react-renderer"

export interface Course {
    slug: string,
    nivel: string,
    teaser:string,
    description: string,
    lecciones:number,
    date:string,
    language:string,
    age:string,
    //eventDates: React.ComponentProps<typeof BlocksRenderer>['content'],
    price: string,
    requirements: string,
    flyer: {
     url:string
    },
    flyerUrl:string,
    name:string,
    duracion:string
    
  }