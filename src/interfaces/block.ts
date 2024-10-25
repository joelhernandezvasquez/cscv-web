
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export interface Block{
    title:string,
    description:React.ComponentProps<typeof BlocksRenderer>['content']
    image:string
}