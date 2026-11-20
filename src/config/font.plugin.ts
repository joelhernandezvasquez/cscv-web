import localFont from 'next/font/local';

// Self-hosted (latin subset) so the build does not depend on fetching Google Fonts.
// Files live in src/app/fonts and come from fonts.gstatic.com (Quicksand, Amatic SC, Hanken Grotesk).
// next/font requires literal option values, so the paths are repeated instead of using a constant.

export const titleHeadline = localFont({
    src:[{path:'../app/fonts/QuicksandLatinVF.woff2', weight:'700', style:'normal'}],
    display:'swap'
})

export const leadText = localFont({
    src:[{path:'../app/fonts/QuicksandLatinVF.woff2', weight:'600', style:'normal'}],
    display:'swap'
})

export const regularText = localFont({
    src:[{path:'../app/fonts/QuicksandLatinVF.woff2', weight:'500', style:'normal'}],
    display:'swap'
})

export const subHeading = localFont({
    src:[{path:'../app/fonts/AmaticSC-700-Latin.woff2', weight:'700', style:'normal'}],
    display:'swap'
})

export const heroFont = localFont({
    src:[{path:'../app/fonts/HankenGroteskLatinVF.woff2', weight:'400 800', style:'normal'}],
    display:'swap'
})
