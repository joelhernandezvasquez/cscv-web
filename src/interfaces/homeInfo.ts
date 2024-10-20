import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export interface HomeInfo{
    title:string,
    description:React.ComponentProps<typeof BlocksRenderer>['content'],
    image:string
}