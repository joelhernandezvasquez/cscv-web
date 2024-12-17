import { MenuNavigation } from "@/interfaces/navigation";

export const menuNavigation:MenuNavigation[] =  [
    
    {
     id:'00',
     item:'Home',
     hasSubmenu:false,
     link:'/'
    },
    {
        id:'01',
        item:'Quienes Somos',
        hasSubmenu:true,
        subItems:[
            {
                id:'001',
                item:'La CSCV',
                link:'https://cscvmiami.org/quienes.aspx'
            },
            {
                id:'002',
                item:'Historia De La Comunidad',
                link:'http://www.cscvbrooklyn.org/historia-de-la-comunidad-cscv.html'
            },
            {
                id:'003',
                item:'Carisma & Vocacion',
                link:'http://www.cscvbrooklyn.org/carisma---vocaci-n.html'
            },
            {
                id:'004',
                item:'Fundadores',
                link:'http://www.cscvbrooklyn.org/fundadores.html'
            },
        ]
    },
    {
        id:'02',
        item:'Ministerios',
        hasSubmenu:true,
        subItems:[
            {
                id:'005',
                item:'Escuela De Evangelizacion',
                link:'http://www.cscvbrooklyn.org/escuela-de-evangelizaci-n.html'
            },
            {
                id:'006',
                item:'Retiros Renacer',
                link:'http://www.cscvbrooklyn.org/retiros-renacer.html'
            },
            {
                id:'007',
                item:'Parejas',
                link:'http://www.cscvbrooklyn.org/parejas.html'
            },
            {
                id:'008',
                item:'Ministerio De Los Jovenes',
                link:'http://www.cscvbrooklyn.org/ministerio-de-jovenes.html'
            },
            {
                id:'009',
                item:'Colaboradores',
                link:'http://www.cscvbrooklyn.org/colaboradores.html'
            },
        ]
    },
    {
        id:'03',
        item:'Eventos',
        link:'/',
        hasSubmenu:false
    },
    {
        id:'04',
        item:'Actividades',
        link:'/',
        hasSubmenu:true,
        subItems:[
            {
                id:'0010',
                item:'Asamblea De Los Jueves',
                link:'/'
            },
            {
                id:'0011',
                item:'Grupo De Oracion De Los Miercoles',
                link:'/'
            },
            {
                id:'0012',
                item:'Adoracion al Santisimo Sacramento',
                link:'/'
            },
            {
                id:'0013',
                item:'Grupo Juvenil The Chosen',
                link:'/'
            },
        ]
    },
    {
        id:'05',
        item:'Multimedia',
        link:'http://www.cscvbrooklyn.org/multimedia.html',
        hasSubmenu:false
    },
    {
        id:'06',
        item:'Oracion',
        hasSubmenu:true,
        subItems:[
            {
                id:'00013',
                item:'Consagracion',
                link:'https://cscvmiami.org/Consagracion.aspx'
            },
            {
                id:'00014',
                item:'Lectura Del Dia',
                link:'https://cscvmiami.org/LecturaDia.aspx'
            },
            {
                id:'00015',
                item:'Liturgias De Las Horas',
                link:'https://cscvmiami.org/LiturgiaHoras.aspx'
            },
            {
                id:'00016',
                item:'Santo Rosario',
                link:'https://cscvmiami.org/SantoRosario.aspx'
            },
            {
                id:'00017',
                item:'Oracion Por Los Enfermos',
                link:'https://cscvmiami.org/OraEnfermos.aspx'
            },
        ]
    },
    {
        id:'07',
        item:'Contacto',
        link:'/',
        hasSubmenu:false
    }
]


export const desktopMenuNavigation:MenuNavigation[] =  [
    
    {
     id:'00',
     item:'Home',
     hasSubmenu:false,
     link:'/'
    },
    {
        id:'01',
        item:'Quienes Somos',
        hasSubmenu:true,
        subItems:[
            {
                id:'001',
                item:'La CSCV',
                link:'https://cscvmiami.org/quienes.aspx'
            },
            {
                id:'002',
                item:'Historia De La Comunidad',
                link:'http://www.cscvbrooklyn.org/historia-de-la-comunidad-cscv.html'
            },
            {
                id:'003',
                item:'Carisma & Vocacion',
                link:'http://www.cscvbrooklyn.org/carisma---vocaci-n.html'
            },
            {
                id:'004',
                item:'Fundadores',
                link:'http://www.cscvbrooklyn.org/fundadores.html'
            },
        ]
    },
    {
        id:'02',
        item:'Ministerios',
        hasSubmenu:true,
        subItems:[
            {
                id:'005',
                item:'Escuela De Evangelizacion',
                link:'http://www.cscvbrooklyn.org/escuela-de-evangelizaci-n.html'
            },
            {
                id:'006',
                item:'Retiros Renacer',
                link:'http://www.cscvbrooklyn.org/retiros-renacer.html'
            },
            {
                id:'007',
                item:'Parejas',
                link:'http://www.cscvbrooklyn.org/parejas.html'
            },
            {
                id:'008',
                item:'Ministerio De Los Jovenes',
                link:'http://www.cscvbrooklyn.org/ministerio-de-jovenes.html'
            },
            {
                id:'009',
                item:'Colaboradores',
                link:'http://www.cscvbrooklyn.org/colaboradores.html'
            },
        ]
    },
    {
        id:'04',
        item:'Actividades',
        link:'/',
        hasSubmenu:true,
        subItems:[
            {
                id:'0010',
                item:'Asamblea De Los Jueves',
                link:'/'
            },
            {
                id:'0011',
                item:'Grupo De Oracion De Los Miercoles',
                link:'/'
            },
            {
                id:'0012',
                item:'Adoracion al Santisimo Sacramento',
                link:'/'
            },
            {
                id:'0013',
                item:'Grupo Juvenil The Chosen',
                link:'/'
            },
        ]
    },
    {
        id:'05',
        item:'Multimedia',
        link:'http://www.cscvbrooklyn.org/multimedia.html',
        hasSubmenu:false
    },
    {
        id:'06',
        item:'Oracion',
        hasSubmenu:true,
        subItems:[
            {
                id:'00013',
                item:'Consagracion',
                link:'https://cscvmiami.org/Consagracion.aspx'
            },
            {
                id:'00014',
                item:'Lectura Del Dia',
                link:'https://cscvmiami.org/LecturaDia.aspx'
            },
            {
                id:'00015',
                item:'Liturgias De Las Horas',
                link:'https://cscvmiami.org/LiturgiaHoras.aspx'
            },
            {
                id:'00016',
                item:'Santo Rosario',
                link:'https://cscvmiami.org/SantoRosario.aspx'
            },
            {
                id:'00017',
                item:'Oracion Por Los Enfermos',
                link:'https://cscvmiami.org/OraEnfermos.aspx'
            },
        ]
    },
    {
        id:'07',
        item:'Contacto',
        link:'/',
        hasSubmenu:false
    },
    {
        id:'03',
        item:'Eventos',
        link:'#event-list',
        hasSubmenu:false
    },
]