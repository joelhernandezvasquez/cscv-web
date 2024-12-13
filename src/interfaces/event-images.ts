import { BlocksRenderer } from "@strapi/blocks-react-renderer";


export interface EventImage {
     id:string | number,
     title:string,
     eventName:string,
     eventDescription:React.ComponentProps<typeof BlocksRenderer>['content'],
     image:Images[],
     imagesUrl:Images[],
     video:{
          url:string
     },
     videoUrl:string
}

export interface Images {
     id:number|string,
     url:string
}