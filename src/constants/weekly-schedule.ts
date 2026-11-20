export interface ScheduleItem {
  name: string;
  time: string;
}

export interface ScheduleDay {
  day: string;
  items: ScheduleItem[];
}

export const WEEKLY_SCHEDULE: ScheduleDay[] = [
  { day: 'Lunes', items: [{ name: 'Adoración', time: '9:30 am – 7:00 pm' }, { name: 'Caminando con Jesús', time: '7:00 – 9:00 pm' }] },
  { day: 'Martes', items: [{ name: 'Adoración', time: '9:30 am – 7:00 pm' }] },
  { day: 'Miércoles', items: [{ name: 'Adoración', time: '9:30 am – 7:00 pm' }, { name: 'Mañana de Alabanza', time: '11:00 am – 1:00 pm' }] },
  { day: 'Jueves', items: [{ name: 'Adoración', time: '9:30 am – 7:00 pm' }, { name: 'Asamblea de Alabanza', time: '7:15 – 9:45 pm' }] },
  { day: 'Viernes', items: [{ name: 'Adoración', time: '9:30 am – 7:00 pm' }, { name: 'The Chosen', time: '7:30 – 9:30 pm' }] },
  { day: 'Sábado', items: [{ name: 'Adoración', time: '9:30 am – 7:00 pm' }] },
];
