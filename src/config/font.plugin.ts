import {Amatic_SC, Hanken_Grotesk, Quicksand} from 'next/font/google';

export const titleHeadline = Quicksand({
    subsets:['latin'],
    weight:['700']
})

export const leadText = Quicksand({
    subsets:['latin'],
    weight:['600']
})

export const regularText = Quicksand({
    subsets:['latin'],
    weight:['500']
})

export const subHeading = Amatic_SC({
    subsets:['latin'],
    weight:['700']
})

export const heroFont = Hanken_Grotesk({
    subsets:['latin'],
    weight:['400','500','600','700','800']
})
