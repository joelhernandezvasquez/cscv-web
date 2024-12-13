import { BlocksRenderer } from "@strapi/blocks-react-renderer"

export interface Carisma{
    id:number | string,
    coverImage?:{
        url:string
    },
    carismaTitle:string,
    description:React.ComponentProps<typeof BlocksRenderer>['content'],
    imageUrl:string
}