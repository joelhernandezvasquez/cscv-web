export interface HistoriaFact {
  value: string;
  label: string;
}

export interface HistoriaMilestone {
  date: string;
  text: string;
}

export interface HistoriaCity {
  name: string;
  highlight: boolean;
}

export interface HistoriaVocation {
  number: string;
  title: string;
  body: string;
}

export interface HistoriaPurpose {
  numeral: string;
  body: string;
}

export interface HistoriaStep {
  number: string;
  name: string;
  tag: string;
  image: string;
  alt: string;
  body: string;
}

export const HISTORIA_FACTS: HistoriaFact[] = [
  { value: '1982', label: 'Fundada en Samaná, RD' },
  { value: '41 años', label: 'De reconocimiento eclesial' },
  { value: '9', label: 'Países' },
  { value: '30', label: 'Casas establecidas' },
];

export const HISTORIA_TIMELINE: HistoriaMilestone[] = [
  {
    date: '28 nov 1982',
    text: 'Así, el 28 de noviembre de 1982, y después de un retiro en Samaná, RD, queda fundada la Comunidad.',
  },
  {
    date: '1999',
    text: 'En la Diócesis de Brooklyn, la Comunidad Siervos de Cristo Vivo fue fundada en 1999.',
  },
  {
    date: '1 ene 2009',
    text: 'Reconocida oficialmente y aceptada por S.E.R. Nicholas DiMarzio, Obispo de Brooklyn, como una asociación privada de fieles.',
  },
];

export const HISTORIA_US_CITIES: HistoriaCity[] = [
  'Miami',
  'Orlando',
  'San Diego',
  'Brooklyn',
  'Dodge City',
  'Omaha',
  'El Paso',
  'Boston',
].map(name => ({ name, highlight: name === 'Brooklyn' }));

export const HISTORIA_VOCATIONS: HistoriaVocation[] = [
  {
    number: '1',
    title: 'Una vida contemplativa',
    body: 'Oración personal y comunitaria, adoración del Santísimo Sacramento.',
  },
  {
    number: '2',
    title: 'Una vida evangelizadora',
    body: 'Viviendo su llamado bautismal a proclamar la Buena Nueva del Evangelio.',
  },
  {
    number: '3',
    title: 'Una transformación',
    body: 'Crecer en santidad.',
  },
];

export const HISTORIA_PURPOSES: HistoriaPurpose[] = [
  {
    numeral: 'I.',
    body: 'La búsqueda de una relación personal con Jesús Sacramentado, presente en la Eucaristía y en la contemplación, a través de un esfuerzo continuo de cada Siervo para llegar a una transformación en Cristo.',
  },
  {
    numeral: 'II.',
    body: 'La evangelización, como testigos de Jesucristo muerto y resucitado, a través de todos los medios.',
  },
  {
    numeral: 'III.',
    body: 'La construcción, día a día, en comunión de fe y amor, de una Comunidad a la que se pertenece como miembro y en la que se participa como Siervo; que se consolida como "una Comunidad cristiana en la que cada uno aporta sus talentos y se siente integrado porque es reconocido, aceptado, escuchado, animado e interpelado."',
  },
];

export const HISTORIA_STEPS: HistoriaStep[] = [
  {
    number: '01',
    name: 'Candidato',
    tag: 'Mín. 1 año',
    image: '/images/siervo1.png',
    alt: 'Candidato a Siervo de Cristo Vivo',
    body: 'A un laico católico que haya colaborado en algún ministerio durante un tiempo continuo de no menos de un año, el Consejo Local podría invitarle a ser CANDIDATO y comenzar un proceso de formación para conocer la finalidad de la Comunidad, durante un período mínimo de un año.',
  },
  {
    number: '02',
    name: 'Aspirante',
    tag: 'Mín. 2 años',
    image: '/images/siervo2.png',
    alt: 'Aspirante a Siervo de Cristo Vivo',
    body: 'Al final de este año, el Consejo Local podría invitar a un candidato a pasar a ser un ASPIRANTE por un período mínimo de dos años.',
  },
  {
    number: '03',
    name: 'Siervo de Cristo Vivo',
    tag: 'Miembro',
    image: '/images/seirvo3.png',
    alt: 'Siervo de Cristo Vivo',
    body: 'Al final de dos años, el Consejo General podría invitar a un aspirante a ser miembro, es decir, un SIERVO DE CRISTO VIVO. Quedan incluidos aquellos que han hecho votos de consagración como diáconos permanentes. Los sacerdotes y religiosos pueden ser acompañantes de la Comunidad.',
  },
];
