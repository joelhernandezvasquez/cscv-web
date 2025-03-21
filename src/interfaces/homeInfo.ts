import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { Block } from './block';

export interface HomeInfo{
    title:string,
    description:React.ComponentProps<typeof BlocksRenderer>['content'],
    image:string,
    about:Block,
    activities:Block,
    events:Block,
    testimonies:Block,
    ministerios:Block,
    anuncios:Block
}

