import { BlocksRenderer } from "@strapi/blocks-react-renderer"

export interface Ministerios{
    id:number | string,
    slug:string,
    image:{
        url:string
    },
    ministerio:string,
    description:React.ComponentProps<typeof BlocksRenderer>['content'],
    urlImage:string
}