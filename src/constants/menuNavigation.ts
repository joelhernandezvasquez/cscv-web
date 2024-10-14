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
                link:'/'
            },
            {
                id:'002',
                item:'Historia De La Comunidad',
                link:'/'
            },
            {
                id:'003',
                item:'Carisma & Vocacion',
                link:'/'
            },
            {
                id:'004',
                item:'Fundadores',
                link:'/'
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
                link:'/'
            },
            {
                id:'006',
                item:'Retiros Renacer',
                link:'/'
            },
            {
                id:'007',
                item:'Parejas',
                link:'/'
            },
            {
                id:'008',
                item:'Asamblea De Los Jueves',
                link:'/'
            },
            {
                id:'009',
                item:'Grupo De Oracion De Los Miercoles',
                link:'/'
            },
            {
                id:'00010',
                item:'Ministerio De Los Jovenes',
                link:'/'
            },
            {
                id:'00011',
                item:'Grupos De Hombres Nuevos',
                link:'/'
            },
            {
                id:'00012',
                item:'Colaboradores',
                link:'/'
            },
            
            
            

        ]
    },
    {
        id:'03',
        item:'Actividades',
        link:'/',
        hasSubmenu:false
    },
    {
        id:'04',
        item:'Multimedia',
        link:'/',
        hasSubmenu:false
    },
    {
        id:'05',
        item:'Oracion',
        hasSubmenu:true,
        subItems:[
            {
                id:'00013',
                item:'Consagracion',
                link:'/'
            },
            {
                id:'00014',
                item:'Lectura Del Dia',
                link:'/'
            },
            {
                id:'00015',
                item:'Liturgias De Las Horas',
                link:'/'
            },
            {
                id:'00016',
                item:'Santo Rosario',
                link:'/'
            },
            {
                id:'00017',
                item:'Oracion Por Los Enfermos',
                link:'/'
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