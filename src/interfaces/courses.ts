/* eslint-disable @typescript-eslint/no-explicit-any */

type WhatLearnNode =
  | DefaultInlineNode
  | ListBlockNode
  | ListItemInlineNode
  | { type: "text"; text: string };

  type DefaultInlineNode = any;
  type ListBlockNode = any;
  type ListItemInlineNode = any;

export interface Course {
    slug: string,
    nivel: string,
    teaser:string,
    description: string,
    lecciones:number,
    date:string,
    language:string,
    age:string,
    price: string,
    requirements: string,
    flyer: {
     url:string
    },
    flyerUrl:string,
    name:string,
    duracion:string,
    isCourse:boolean,
    whatLearn:WhatLearnNode
    promocional_video: { url: string }[]
     promocional_video_Url:string,
     contactNumber:string
  }