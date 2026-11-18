import { MenuNavigation } from "@/interfaces/navigation";

export const menuNavigation:MenuNavigation[] =  [
    {
        id:'00',
        item:'Home',
        itemEn:'Home',
        hasSubmenu:false,
        link:'/'
    },
    {
        id:'01',
        item:'Quienes Somos',
        itemEn:'About Us',
        hasSubmenu:true,
        subItems:[
            {
                id:'001',
                item:'La CSCV',
                itemEn:'The CSCV',
                link:'/construction'
            },
            {
                id:'002',
                item:'Historia De La Comunidad',
                itemEn:'Community History',
                link:'/historia'
            },
            {
                id:'003',
                item:'Carisma & Vocacion',
                itemEn:'Charism & Vocation',
                link:'/construction'
            },
            {
                id:'004',
                item:'Fundadores',
                itemEn:'Founders',
                link:'/construction'
            },
        ]
    },
    {
        id:'02',
        item:'Ministerios',
        itemEn:'Ministries',
        hasSubmenu:true,
        subItems:[
            {
                id:'005',
                item:'Escuela De Evangelizacion',
                itemEn:'School of Evangelization',
                link:'/construction'
            },
            {
                id:'006',
                item:'Retiros Renacer',
                itemEn:'Renacer Retreats',
                link:'/construction'
            },
            {
                id:'007',
                item:'Parejas',
                itemEn:'Couples',
                link:'/construction'
            },
            {
                id:'008',
                item:'Ministerio De Los Jovenes',
                itemEn:'Youth Ministry',
                link:'/construction'
            },
            {
                id:'009',
                item:'Colaboradores',
                itemEn:'Collaborators',
                link:'/construction'
            },
        ]
    },
    {
        id:'03',
        item:'Eventos',
        itemEn:'Events',
        link:'#event-list',
        hasSubmenu:false
    },
    {
        id:'04',
        item:'Actividades',
        itemEn:'Activities',
        hasSubmenu:true,
        subItems:[
            {
                id:'0010',
                item:'Asamblea De Los Jueves',
                itemEn:'Thursday Assembly',
                link:'/construction'
            },
            {
                id:'0011',
                item:'Grupo De Oracion De Los Miercoles',
                itemEn:'Wednesday Prayer Group',
                link:'/construction'
            },
            {
                id:'0012',
                item:'Adoracion al Santisimo Sacramento',
                itemEn:'Adoration of the Blessed Sacrament',
                link:'/construction'
            },
            {
                id:'0013',
                item:'Grupo Juvenil The Chosen',
                itemEn:'The Chosen Youth Group',
                link:'/construction'
            },
        ]
    },
    {
        id:'05',
        item:'Multimedia',
        itemEn:'Multimedia',
        link:'/construction',
        hasSubmenu:false
    },
    {
        id:'06',
        item:'Oracion',
        itemEn:'Prayer',
        hasSubmenu:true,
        subItems:[
            {
                id:'00013',
                item:'Consagracion',
                itemEn:'Consecration',
                link:'https://cscvmiami.org/Consagracion.aspx'
            },
            {
                id:'00014',
                item:'Lectura Del Dia',
                itemEn:'Daily Reading',
                link:'https://cscvmiami.org/LecturaDia.aspx'
            },
            {
                id:'00015',
                item:'Liturgias De Las Horas',
                itemEn:'Liturgy of the Hours',
                link:'https://cscvmiami.org/LiturgiaHoras.aspx'
            },
            {
                id:'00016',
                item:'Santo Rosario',
                itemEn:'Holy Rosary',
                link:'https://cscvmiami.org/SantoRosario.aspx'
            },
            {
                id:'00017',
                item:'Oracion Por Los Enfermos',
                itemEn:'Prayer for the Sick',
                link:'https://cscvmiami.org/OraEnfermos.aspx'
            },
        ]
    },
    {
        id:'07',
        item:'Contacto',
        itemEn:'Contact',
        link:'/',
        hasSubmenu:false
    },
]
