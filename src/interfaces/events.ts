import { BlocksRenderer } from "@strapi/blocks-react-renderer"

export interface Events {
    id: number | string,
    slug: string,
    name: string,
    description: string,
    eventDates: React.ComponentProps<typeof BlocksRenderer>['content'],
    price: string,
    requisitos: string,
    location: string,
    graphic: {
     url:string
    },
    graphicUrl:string
    
  }
