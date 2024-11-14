import { BlocksRenderer } from "@strapi/blocks-react-renderer"

export interface Testimonies{
    id:number|string,
    avatar:{
        url:string
    },
    name:string,
    testimony:React.ComponentProps<typeof BlocksRenderer>['content'],
    avatarImage:string,
}