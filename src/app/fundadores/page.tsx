/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { regularText, titleHeadline } from '@/config/font.plugin';
import style from './style.module.css';

export const metadata: Metadata = {
  title: "Comunidad Siervos de Cristo Vivo Brooklyn NY | Nuestros Fundadores",
  description: "Conoce a los fundadores de la Comunidad Siervos de Cristo Vivo: el Siervo de Dios Padre Emiliano Tardif m.s.c., el Diácono Evaristo Guzmán y María Armenteros Malla.",
  keywords: "Emiliano Tardif, Evaristo Guzman, Maria Armenteros, fundadores Comunidad Siervos de Cristo Vivo, Brooklyn, Renovacion Carismatica"
};

const Fundadores = () => {

  return (
    <main className={`${style.wrapper} ${style.content_container}`}>
      <header className={style.header}>
        <h1 className={`${style.headline} ${titleHeadline.className}`}>
          <span>NUESTROS FUNDADORES</span>
          <span className={style.subheading}>Comunidad Siervos de Cristo Vivo</span>
        </h1>

        <img className={style.logo_header} src={'/images/logo.png'} alt='' />
      </header>

      <nav className={style.anchor_nav} aria-label="Fundadores">
        <a className={`${style.anchor_link} ${regularText.className}`} href="#padre-tardif">P. Emiliano Tardif</a>
        <a className={`${style.anchor_link} ${regularText.className}`} href="#evaristo-guzman">Diácono Evaristo</a>
        <a className={`${style.anchor_link} ${regularText.className}`} href="#maria-armenteros">María Armenteros</a>
      </nav>

      {/* ===================== PADRE EMILIANO TARDIF ===================== */}
      <section id="padre-tardif" className={style.founder_section}>
        <div className={style.founder_heading}>
          <span className={`${style.founder_role} ${regularText.className}`}>Siervo de Dios</span>
          <h2 className={`${style.founder_name} ${titleHeadline.className}`}>Padre Emiliano Tardif m.s.c.</h2>
          <div className={style.founder_underline} />
        </div>

        <div className={style.grid_column_content}>
          <div>
            <p className={`${regularText.className} content_text`}>
              Nació el 6 de junio de 1928 en Saint Zacharie, Quebec, Canadá, en el seno de una familia numerosa de catorce hijos. El P. Emiliano, fue el noveno hijo, fruto de la unión de los esposos Tardif-Laroche. A su madre, le habían recomendado que no tuviera el hijo que recién había concebido. Su estado de salud era tan precario en ese octavo embarazo, que los médicos pensaron que, de mantenerlo, seguramente le llevaría a la muerte tanto a ella como al hijo que llevaba en las entrañas. El P. Emiliano, lo contaba lleno de emoción: "A mi madre le recomendaron que no me tuviera, pero ella era una buena cristiana y no lo hizo". El padre Tardif, fue un tenaz defensor de la vida. Él ponía su propia vida de ejemplo. Como se pensaba que realmente iban a morir tanto la madre como el hijo, el nacimiento del pequeño Emiliano fue asistido por dos médicos y por el sacerdote.
            </p>
          </div>

          <div className={style.portrait_frame}>
            <img src="/images/fundador-tardif.jpg" alt="Siervo de Dios Padre Emiliano Tardif m.s.c." width={420} height={525} />
          </div>
        </div>

        <p className={`${regularText.className} content_text`}>
          El mismo, decía: "Y no me morí. ¡Y mi mamá tampoco se murió! Y no solo eso, sino que después de mí, nacieron cinco hijos más. Tuvo catorce en total, de los cuales cuatro fueron religiosos". El niño nació felizmente; como estaba el párroco allí, lo bautizó al nacer. Solía decir, "el Señor quiso que yo no tardara ni un día de mi vida para estar en gracia, y por eso, fui bautizado el mismo día que nací".
        </p>

        <p className={`${regularText.className} content_text`}>
          A través de los años, él sería llamado, a través del sacerdocio, a vivir la pobreza como estilo de vida y camino de santidad. Tenía doce años cuando escuchó en la Parroquia a la que asistía junto a su familia, a un sacerdote dominico despidiéndose para partir a las misiones y pensó, que a él le gustaría hacer lo mismo que ese sacerdote. Un año después, teniendo solo trece años de edad, fue recibido en Quebec, en un Seminario de los Misioneros del Sagrado Corazón. Allí cursó desde el 1941 hasta el 1948 sus estudios de primaria y secundaria, siendo recibido el 8 de septiembre de 1948 en el noviciado.
        </p>

        <p className={`${regularText.className} content_text`}>
          Después de su año de noviciado en Sainte Clothilde, recibió su formación filosófica en la casa de estudios que su Congregación tenía en Watertown. Hizo su profesión perpetua el 8 de septiembre de 1952 y fue ordenado sacerdote el 24 de junio de 1955. El 8 de diciembre de 1955, solicita a su Superior Provincial, el irse a la República Dominicana. El padre Emiliano, a los 28 años de edad, el 16 de septiembre de 1956, llegaba a tierra de misiones, tal como lo había deseado desde los 12 años.
        </p>

        <div className={style.gold_panel}>
          <p className={regularText.className}>
            Al llegar a la República Dominicana, se entregó al trabajo misionero en las diferentes áreas que su Congregación le confió a través de los años. Fue profesor del Seminario Misionero de las Matas; director de la revista "Amigo del Hogar", la cual renovó y luego fundó la imprenta que conocemos con el mismo nombre.
          </p>
        </div>

        <div className={style.grid_column_content_reverse}>
          <div className={style.portrait_frame}>
            <img src="/images/fundador-tardif-2.jpg" alt="Padre Emiliano Tardif en sus años de misión en República Dominicana" width={420} height={525} loading="lazy" />
          </div>

          <div>
            <p className={`${regularText.className} content_text`}>
              Trabajó en diferentes parroquias atendidas por los Misioneros. Fue superior de su Congregación desde 1966 hasta el 1973, llevando grandes proyectos como el Centro Vocacional de Licey, el Centro de Promoción de Nagua y la residencia donde hoy está situada la Casa Provincial en los Prados. Fue presidente de la conferencia de religiosos (CONDOR). Trabajó en los Cursillos de Cristiandad, en el movimiento Familiar Cristiano y de una manera especial, después que el Señor lo sanó, ayudó a extender la Renovación Carismática en la República Dominicana y en el mundo entero, a través del llamado a la Evangelización con el poder del Espíritu.
            </p>

            <p className={`${regularText.className} content_text`}>
              El cambio radical en la vida y en el ministerio del padre Emiliano, fue producto de un encuentro vital con Jesucristo Vivo y Resucitado que le había devuelto la salud llenándolo de Vida en abundancia. Él mismo, nos contaba su experiencia en el libro de "Jesús está Vivo": "En 1973, yo era provincial de mi Congregación, Misioneros del Sagrado Corazón, en la República Dominicana. Había trabajado mucho, abusando de mi salud en los 16 años que tenía como misionero en el país. Pasé mucho tiempo en actividades materiales, construyendo iglesias, edificando seminarios, centros de promoción humana, de catequesis, etc.
            </p>
          </div>
        </div>

        <p className={`${regularText.className} content_text`}>
          Siempre estaba buscando dinero para edificar casas y para dar alimento a nuestros seminaristas. El Señor me permitió vivir todo ese activismo y, por el exceso de trabajo, caí enfermo. El 14 de junio de ese año, en una asamblea, tuvieron que llevarme inmediatamente al Centro Médico Nacional. Estaba tan grave que pensaba que no podía pasar la noche. Creí realmente que me iba a morir. Los médicos me hicieron análisis, detectándome tuberculosis pulmonar aguda. Al ver que estaba tan enfermo, pensé volver a Quebec, Canadá, donde nací y donde vive mi familia. Pero estaba tan delicado de salud que no podía hacerlo entonces. Tuve que esperar 15 días bajo tratamiento para realizar el viaje.
        </p>

        <p className={`${regularText.className} content_text`}>
          En Canadá, me internaron en un Centro Médico especializado. El mes de julio, se lo pasaron haciendo análisis, biopsias, radiografías, etc. Después de todos estos estudios confirmaron de manera científica que la tuberculosis pulmonar había lesionado gravemente los dos pulmones. Para animarme me dijeron que tal vez después de un año de tratamiento y reposo podría volver a mi casa. Un día recibí la visita de cinco seglares de un grupo de la Renovación Carismática.
        </p>

        <p className={`${regularText.className} content_text`}>
          Ellos venían a orar desinteresadamente por mí. Como sacerdote misionero pensé que no era edificante rechazar la oración. La acepté, más por educación que por convicción. No creía que una simple oración pudiera conseguirme la salud. Ellos me dijeron muy convencidos: "Vamos a hacer lo que dice el Evangelio: 'impondrán las manos sobre los enfermos y éstos quedarán sanos'. Así que oraremos y el Señor te va a sanar". Me sentí ridículo bajo sus manos; interrumpí la oración y les propuse: "si quieren vamos a cerrar la puerta". Cerraron la puerta, pero Jesús había entrado. Durante la oración yo sentí un fuerte calor en mis pulmones. Era el calor del amor de Jesús".
        </p>

        <p className={`${style.pull_quote} ${regularText.className}`}>
          "Durante la oración yo sentí un fuerte calor en mis pulmones. Era el calor del amor de Jesús."
        </p>

        <p className={`${regularText.className} content_text`}>
          Al final de mes, después de muchas pruebas, el médico me dijo: "Padre, vuelva a su casa. Usted está perfectamente, pero esto va en contra de todas nuestras teorías médicas. No sabemos lo que ha pasado". El Padre Emiliano escribió a su superior para que el año que debía pasar en el hospital ingresado para el tratamiento, le permitiera pasarlo estudiando la Renovación Carismática en Canadá y en Estados Unidos. En ese tiempo tuvo la oportunidad de visitar los centros más importantes en Quebec, Pittsburgh, y Notre Dame. Al volver de Canadá en 1974 a la República Dominicana, el Padre Tardif era otro.
        </p>

        <p className={`${regularText.className} content_text`}>
          En el trabajo que emprendió, puso mucho énfasis en hacer que los grupos de oración que animaba se convirtieran en verdaderos grupos de evangelización y en atender a los pobres. El ministerio del padre Emiliano, tuvo siempre un gran poder de convocatoria. Durante el año 1975, permaneció mayormente en la parroquia de Nagua, promoviendo los grupos de oración en la pastoral parroquial y empezando a extender esta experiencia renovadora por los campos y los pueblos cercanos. La Palabra de Dios, proclamada con el Poder del Espíritu, empezó a dar su fruto a los que escuchaban edificándoles la fe y el Señor quiso tal como lo había prometido acompañar con señales la palabra proclamada.
        </p>

        <div className={style.grid_column_content}>
          <div>
            <p className={`${regularText.className} content_text`}>
              Más tarde emprendió la labor de fundar una comunidad. Fue así como el 28 de noviembre de 1982 nació la Comunidad Siervos de Cristo Vivo que comenzaría con ocho personas y que hoy está presente con un número considerable de miembros en la República Dominicana, Italia, Estados Unidos, Colombia, España y Cuba, luego de haber sido aprobada como Asociación Privada de Fieles por su Eminencia Nicolás de Jesús Cardenal López Rodríguez, Arzobispo Metropolitano Emérito de Santo Domingo.
            </p>

            <p className={`${regularText.className} content_text`}>
              Una de las características del Padre Tardif fue su apertura a la labor de los laicos en la Iglesia. El 6 de junio de 1999 cumplió 71 años, después de celebrar la Eucaristía y una gran fiesta con los hermanos de comunidad, partió hacia su último viaje. Nada parecía indicar que 36 horas más tarde habría llegado al destino final, a la Casa del Padre, para celebrar allí por toda la eternidad las Bodas del Cordero.
            </p>
          </div>

          <div className={style.wide_image}>
            <img src="/images/fundadores-casa-brooklyn.jpg" alt="Casa de Oración de la Comunidad Siervos de Cristo Vivo en Brooklyn" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ===================== DIÁCONO EVARISTO GUZMÁN ===================== */}
      <section id="evaristo-guzman" className={style.founder_section}>
        <div className={style.founder_heading}>
          <h2 className={`${style.founder_name} ${titleHeadline.className}`}>Diácono Evaristo Guzmán</h2>
          <div className={style.founder_underline} />
        </div>

        <div className={style.grid_column_content}>
          <div className={style.portrait_frame}>
            <img src="/images/fundador-evaristo.jpg" alt="Diácono Evaristo Guzmán Hilario" width={420} height={525} loading="lazy" />
          </div>

          <div>
            <p className={`${regularText.className} content_text`}>
              Nace en los sentimientos del Sagrado Corazón de Jesús por el hombre, los cuales inspiraron al Siervo de Dios Padre Emiliano Tardif, M.S.C., al Diácono Evaristo Guzmán Hilario (ambos de feliz memoria) y María Armenteros Malla. Luego de ocho años de experiencia en el Amor de Dios y en la predicación, a fundar una comunidad que fuera contemplativa y evangelizadora, y cuyo trabajo tenga su centro y fortaleza en el corazón de aquel que dice "Sin mí no pueden hacer nada" (Juan 15,5).
            </p>
          </div>
        </div>

        <p className={`${regularText.className} content_text`}>
          Los carismas extraordinarios: profecía, sanación, lenguas, etc., que en él correrían como un torrente inagotable, puestos al servicio de la comunidad, fueron aumentando en el ámbito trascendente del auxilio y el amor a los pobres.
        </p>

        <p className={`${regularText.className} content_text`}>
          Su testimonio personal, impactante, esplendente, limpio. Era capaz de sacudir la asamblea por el paso evidente del Espíritu Santo, de una forma tan portentosa, que a seguidas nuestras mentes se llenaban con la pregunta. ¿Quién es de veras este hombre? ¿Qué se trae Dios con él, que lo usa de forma tan magnífica?
        </p>

        <p className={`${regularText.className} content_text`}>
          Nueva Evangelización –diría Papa San Juan Pablo II— nueva en sus métodos, nueva en su ardor, nueva en su expresión. Y acaso estas palabras esclarecidas del Gran Santo Padre, estén encarnadas en lo que fue precisamente la persona y la vida de Evaristo Guzmán.
        </p>

        <p className={`${regularText.className} content_text`}>
          Lo conocimos hace años y lo volvimos a encontrar en el año 1985, cuando se inauguró en la ciudad de Santo Domingo, la Casa de la Anunciación, bajo los auspicios de la Comunidad Siervos de Cristo Vivo, fundada por el Padre Emiliano Tardif, m.s.c., María Armenteros y el propio Evaristo. Comunidad de fe y esperanza, unida en tres propósitos esenciales, tres finalidades: Adoración a la Eucaristía, Evangelización y Transformación en Cristo.
        </p>

        <p className={`${regularText.className} content_text`}>
          Durante todo este tiempo, en que afortunadamente coincidimos con él en la CSCV, (veinte años), vimos a Evaristo crecer incesantemente en la dimensión de estas tres finalidades: Amor a la Eucaristía; Evangelizador a toda prueba; y en la propia transformación en Cristo.
        </p>

        <p className={`${regularText.className} content_text`}>
          Nunca perdió su ardor inicial; ni se marchitó en él, el frescor de su verbo apasionado, y la radicalidad de su compromiso en Cristo. Aumentó en estatura en el dominio y conocimiento de la Palabra de Dios. Se hizo prodigo en obras; acogió todos los dones del Espíritu. Grande en las pruebas y sufrimientos. Inmenso en el perdón. De él podría decirse que pasó por este mundo haciendo mucho bien.
        </p>

        <div className={style.wide_image}>
          <img src="/images/fundadores-comunidad.jpg" alt="Miembros de la Comunidad Siervos de Cristo Vivo reunidos" loading="lazy" />
        </div>

        <div className={style.grid_column_content}>
          <div>
            <p className={`${regularText.className} content_text`}>
              Independientemente de su liderazgo empresarial en la sociedad civil de este pueblo y de su generosidad para todos los que lo conocieron. En la vida familiar, Buen Padre; Esposo Solícito. Porque vamos al matrimonio más para amar que para ser amados. Logró el culmen de todo hombre: hacer feliz a la mujer amada. Yolanda, su compañera fiel, infatigable… de tantos años. La columna de este servidor de todos. La yunta buena, que marca el paso de los laicos trabajadores del Evangelio.
            </p>

            <p className={`${regularText.className} content_text`}>
              Del fogón de Dios saltó una chispa, nació un lucero, que, con su anuncio de Siervo de Cristo Vivo, iluminaría y esclarecería en todo el mundo muchos corazones que estaban en tinieblas. Muchos prisioneros, atados y encadenados, se liberarían de los cepos del pecado y la opresión. Nueva Evangelización, diría el Venerado Papa Juan Pablo II, nueva en sus métodos, nueva en su ardor, nueva en su expresión.
            </p>

            <p className={`${regularText.className} content_text`}>
              En la reciedumbre de Evaristo, en su autenticidad a toda prueba, encontramos las evidencias, para afirmar que son las grandes personalidades las que mueven una época; y, que su actividad en la Iglesia Católica sería la expresión de un patrón, la manifestación de un arquetipo del Evangelizador requerido para estos tiempos.
            </p>
          </div>

          <div>
            <p className={`${regularText.className} content_text`}>
              Siglo XXI que ya en sus inicios está matizado por el culto al placer y la despersonalización del hombre; impregnado de secularismo y descreimiento. Con pérdida de los contenidos humanísticos, que dan paso al materialismo y a la ausencia de valores espirituales.
            </p>

            <p className={`${regularText.className} content_text`}>
              Nagua pierde uno de sus hijos más queridos. Nagua esta triste ¡Y cómo no! Pero, al mismo tiempo, ¡Oh bendita contradicción!, Nagua ha ganado un lucero muy grande. Se ha encendido una gran luz perenne; un destello, al que habrá de auscultar cuantas veces se pretenda buscar un modelo de lo que es la conducta de los Discípulos de Cristo.
            </p>

            <p className={`${regularText.className} content_text`}>
              Parafraseando al profeta Isaías, decimos a todo pulmón esta tarde: ¡República, despójate de tu manto de tristeza!, no te olvides de que los que se fatigan por el Bien, los que educan para la Justicia –y ese es el caso de nuestro querido Evaristo—sus nombres resplandecerán perpetuamente en el firmamento como las estrellas.
            </p>

            <p className={`${regularText.className} content_text`}>
              Y estas palabras se hacen vida hoy, se evidencian aquí en Nagua, ya que, Evaristo Guzmán, el Diácono de la palabra de fuego, el siervo de la proclamación poderosa, confirmada por los signos del Espíritu de Dios, es una luz que, en la Gloria de Dios, nunca se apagará.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== MARÍA ARMENTEROS MALLA ===================== */}
      <section id="maria-armenteros" className={style.founder_section}>
        <div className={style.founder_heading}>
          <h2 className={`${style.founder_name} ${titleHeadline.className}`}>María Armenteros Malla</h2>
          <div className={style.founder_underline} />
        </div>

        <div className={style.grid_column_content_reverse}>
          <div className={style.portrait_frame}>
            <img src="/images/fundadora-maria.jpg" alt="María Armenteros Malla, Asesora Permanente de la CSCV" width={420} height={525} loading="lazy" />
          </div>

          <div>
            <p className={`${regularText.className} content_text`}>
              Conocida en la Renovación Carismática como María Sangiovanni, mujer de fe, cuyo dramático primer encuentro con el Señor en el año 1973 le lanzó a la predicación por el mundo, proclamando el amor compasivo y misericordioso del Padre. Madre de cinco hijos, mujer probada en la fe cuya vida representa un testimonio para su familia y la Comunidad de Siervos de Cristo Vivo, la cual fundó junto al Padre Emiliano Tardif, m.s.c. y al Diácono Evaristo Guzmán, y que tiene numerosas Casas de Oración y evangelización en la República Dominicana, Puerto Rico, Colombia, Cuba, Italia, España y los Estados Unidos. Hoy día continúa su ministerio y es Asesora Permanente de la CSCV.
            </p>
          </div>
        </div>

        <div className={style.grid_column_content}>
          <div className={style.portrait_frame}>
            <img src="/images/fundadora-maria-joven.jpg" alt="María Armenteros Malla en sus primeros años de predicación" loading="lazy" />
          </div>

          <div className={style.gold_panel}>
            <p className={regularText.className}>
              "Ustedes son como corona para mi cabeza. Mientras unos se afanan por acumular riquezas, ustedes se afanan por acumular tesoros para el Reino. Ustedes son mi regocijo, ustedes son mi consuelo… la obra que les encargo es, por eso, una obra de amor. Porque sólo el amor puede llegar a los hombres que me han dado la espalda… Comprendan que esto es obra mía, obra de mi sacratísimo corazón que está siempre latiendo por los hombres. Mi amor no se cansa, no se apaga, mi amor se renueva a cada instante. Mi amor es como fuego ardiente que quema lo más íntimo del corazón del hombre. De ustedes quiero que vivan una vida de amor. No les pido que hagan muchas cosas, pero sí les pido que amen mucho. Que amen hasta que se destroce el corazón como Yo dejé que destrozaran el mío… No se propongan a hacer grandes planes. Propónganse a amar mucho. Pocas cosas, pero lo que hagan, háganlo con amor".
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Fundadores
