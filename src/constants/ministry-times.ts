// Key: Strapi ministry `slug` (case-sensitive, as stored in the CMS).
// Value: text of the white pill on the ministry card.
// A ministry without an entry renders no pill.
export const MINISTRY_TIMES: Record<string, string> = {
  Adoracion: 'Lun–Sáb · 9:30 am–7 pm',  // Adoración al Santísimo
  Asamblea: 'Jue · 7:15–9:45 pm',       // Asamblea de Adoración y Alabanza
  Alabanza: 'Mié · 11 am–1 pm',         // Mañana de Alabanza
  jovenes: 'Vie · 7:30–9:30 pm',        // Grupo Juvenil Los Elegidos / The Chosen
  escuela: 'Mensual',                   // Escuela de Evangelización
  parejas: 'Mensual',                 // Parejas
  colaboradores: '1er miércoles',       // Colaboradores
  apostolado: 'Lun · 7–9 pm',           // Apostolado Caminando con Jesús
};
