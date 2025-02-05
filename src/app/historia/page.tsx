/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { regularText, titleHeadline } from '@/config/font.plugin';
import style from './style.module.css';

const History = () => {
  return (
    <main className={style.content_container}>
       <header className={style.header}>
         <h1 className={`${style.headline} ${titleHeadline.className}`}>
             <span>NUESTRA HISTORIA</span>
             <span className={style.subheading}>Comunidad Siervos de Cristo Vivo</span>
         </h1>

         <img className={style.logo_header} src={'/images/logo.png'} alt=''/>
       </header>

       <section className={style.content_container}>
         <h2 className={`${style.heading} ${titleHeadline.className}`}>ORIGEN</h2>
         <p className={`${regularText.className} ${'content_text'}`}>
         Nace en los sentimientos del Sagrado Corazón de Jesús por el hombre, los cuales inspiraron al Siervo de Dios Padre Emiliano Tardif, M.S.C., al Diácono Evaristo Guzmán Hilario (ambos de feliz memoria) y a María Armenteros Malla. Luego de ocho años de experiencia en el Amor de Dios y en la predicación, a fundar una comunidad que fuera contemplativa y evangelizadora, y cuyo trabajo tenga su centro y fortaleza en el corazón de Aquel que dice: "Sin mí no pueden hacer nada" (Juan 15,5).
         </p>
         
         <div className={style.image_container}>
            <img src={`/images/history1.png`} alt=''/>
         </div>

         <p className={`${regularText.className} ${'content_text'}`}>
         Así, el 28 de noviembre de 1982, y después de un retiro en Samaná, RD, queda fundada la Comunidad.
        Los primeros ocho miembros de la Comunidad fueron el Siervo de Dios Padre Emiliano Tardif, M.S.C.; el Diácono Evaristo y su esposa, Yolanda Guzmán; María Armenteros Malla; John y Nidia Fleury; Pura Deogracia; y Emenegilda Almánzar.
         </p>

         <p className={`${regularText.className} ${'content_text'}`}>
         Cuenta con el reconocimiento eclesial de la Conferencia Episcopal de la República Dominicana desde hace 41 años. Se encuentra presente en nueve países y ha establecido 30 casas.
         En los Estados Unidos, tenemos Casas de Oración en Miami, Orlando, San Diego, Brooklyn, Dodge City, Omaha, El Paso y Boston, además de una Célula Fraterna en Dallas.
         </p>

         <div className={style.grid_column_content}>  
          <div>
          <p className={`${regularText.className} ${'content_text'}`}>
          La CSCV está formada por laicos católicos (Can. 298), quienes, viviendo en el mundo de hoy, se reúnen en conformidad con la ley de la Iglesia (Can. 299) para establecer una comunidad carismática y evangelizadora, sin necesidad de vivir en el lugar donde se congregan. Cada miembro de la CSCV, como lo describen sus estatutos, ha sido llamado por nuestro Señor Jesucristo a vivir tres vocaciones fundamentales:
         </p>

         <ol className={style.content_items}>
          <li>
              <p className={`${regularText.className} ${'content_text'}`}>
                Una vida contemplativa 
                <span className={style.content_text_italic}> (oración personal y comunitaria, adoración del Santísimo Sacramento).</span>
              </p>
          </li>

          <li>
              <p className={`${regularText.className} ${'content_text'}`}>
                Una vida evangelizadora
                <span className={style.content_text_italic}> (Viviendo su llamado bautismal a proclamar la Buena Nueva del Evangelio).</span>
              </p>
          </li>

          <li>
              <p className={`${regularText.className} ${'content_text'}`}>
                Una transformación 
                <span className={style.content_text_italic}> (crecer en santidad).</span>
              </p>
          </li>

         </ol>
          </div>

          <div className={style.image_container}>
              <img src={`/images/history2.png`} alt=''/>
          </div>
          
         </div>

         <p className={`${regularText.className} ${'content_text'}`}>
         En la Diócesis de Brooklyn, la Comunidad Siervos de Cristo Vivo fue fundada en 1999 y, el 1 de enero de 2009, fue reconocida oficialmente y aceptada por S.E.R. Nicholas DiMarzio, Obispo de Brooklyn, como una asociación privada de fieles en conformidad con la ley de la Iglesia (Canon 298).
         Desde entonces, la Comunidad tiene su sede y Casa de Oración en el 207 Hendrix Street, Brooklyn, NY 11207.
         </p>

         <p className={`${regularText.className} ${'content_text'}`}>
         La CSCV funciona de forma independiente, en conformidad con sus estatutos, bajo la dirección de su Consejo Local, su Asesor Espiritual y la supervisión del Consejo de la provincia de los Estados Unidos.
         </p>

         <h2 className={`${style.heading} ${titleHeadline.className}`}>FINALIDAD</h2>

         <p className={`${regularText.className} ${'content_text'}`}>
         El Señor Jesús "llamó a los que él quiso" para una misión específica: "para que estuvieran con él, y para enviarlos a predicar" (Marcos 3, 13-14). Acogiendo estas palabras del Señor y viviendo en el mundo, la Comunidad Siervos de Cristo Vivo aspira a la perfección de la caridad; por tanto, tiene como objetivo esencial la santificación personal de sus miembros mediante:
         </p>

         <p className={`${regularText.className} ${'content_text'}`}> 
         La búsqueda de una relación personal con Jesús Sacramentado, presente en la Eucaristía y en la contemplación, a través de un esfuerzo continuo de cada Siervo para llegar a una transformación en Cristo.
         </p>

         <p className={`${regularText.className} ${'content_text'}`}> 
         La evangelización, como testigos de Jesucristo muerto y resucitado, a través de todos los medios.
         </p>

         <p className={`${regularText.className} ${'content_text'}`}> 
         La construcción, día a día, en comunión de fe y amor, de una Comunidad a la que se pertenece como miembro y en la que se participa como Siervo; que se consolida como "una Comunidad cristiana en la que cada uno aporta sus talentos y se siente integrado porque es reconocido, aceptado, escuchado, animado e interpelado."
         </p>

         <h2 className={`${style.heading} ${titleHeadline.className}`}>UN SIERVO</h2>

         <div className={style.grid_column_content}> 
           <div>
            <p className={`${regularText.className} ${'content_text'}`}>
            La Comunidad Siervos de Cristo Vivo reconoce como "miembro" a aquel laico católico que ha tenido un encuentro personal con Jesucristo, reconociéndole como su Salvador y Señor personal, e identificándose plenamente con el espíritu de la Comunidad. Acepta vivir por completo todo lo señalado en sus Estatutos y Reglamentos.
            </p>

            <p className={`${regularText.className} ${'content_text'}`}>
            A un laico católico que haya colaborado en algún ministerio durante un tiempo continuo de no menos de un año, el Consejo Local podría invitarle a ser <span className={titleHeadline.className}>CANDIDATO</span> y comenzar un proceso de formación para conocer la finalidad de la Comunidad, durante un período mínimo de un año.
            </p>
          </div>
           
          

           <div className={style.image_container}>
              <img src={`/images/siervo1.png`} alt=''/>
          </div>

         </div>

         <div className={style.grid_column_content}> 
           <div>
           <p className={`${regularText.className} ${'content_text'}`}>
           Al final de este año, el Consejo Local podría invitar a un candidato a pasar a ser un <span className={titleHeadline.className}>ASPIRANTE</span> por un período mínimo de dos años.
           </p>

           <p className={`${regularText.className} ${'content_text'}`}>
           Al final de dos años, el Consejo General podría invitar a un aspirante a ser miembro, es decir, un <span className={titleHeadline.className}>SIERVO DE CRISTO VIVO</span>. Quedan incluidos aquellos que han hecho votos de consagración como diáconos permanentes. Los sacerdotes y religiosos pueden ser acompañantes de la Comunidad.
           </p>
           </div>
           

           <div className={style.image_container}>
              <img src={`/images/siervo2.png`} alt=''/>
          </div>

         </div>

         <div className={`${style.image_container} ${style.potraitImage}`}>
              <img src={`/images/seirvo3.png`} alt=''/>
          </div>
       </section>

    </main>
  )
}

export default History