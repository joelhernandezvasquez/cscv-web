import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export interface Footer{
 description:React.ComponentProps<typeof BlocksRenderer>['content']
 location:string,
 email:string,
 phoneNumber:string,
 facebookUrl?:string,
 youtubeUrl?:string,
 XUrl?:string,
 instagramUrl?:string

}