
import { GoChevronRight } from 'react-icons/go';
import style from './style.module.css';
import Link from 'next/link';
/*
 1 - HTML(DONE)
 2 - Organize HTML into constant and components
 3 - JS
 4- Font type
 5 - CSS
*/

const navigationMenu = 
[
 {
  id:1,
  item:'example',
  hasSubmenu:true,
  subItems:[
    {
      id:'001',
      item:'la',
      link:'/'
    }
  ]

 },
 {
  id:2,
  item:'example 2',
  hasSubmenu:false,
  link:'/'

 }
]
const MobileMenu = () => {
  return (
    <nav className={style.mobile_menu_container}>
      <ul className={style.mobile_menu}>
         <li className={style.mobile_menu_item}>
           <button className={'flex_space_between'}> Quienes Somos <GoChevronRight size={20}/> </button>
            <ul className={style.sub_menu}>
              <li>
                <Link href={'/'}>La CSCV</Link>
              </li>
              <li>  <Link href={'/'}>Historia De La Comunidad</Link></li>
              <li><Link href={'/'}>Carisma & Vocacion</Link></li>
              <li>  <Link href={'/'}>Fundadores</Link></li>
            </ul>
         </li>   

         <li className={style.mobile_menu_item}>
           <button className={'flex_space_between'}> Ministerios <GoChevronRight size={20}/> </button>
            <ul className={style.sub_menu}>
              <li> <Link href={'/'}>Escuela De Evangelizacion</Link></li>
              <li><Link href={'/'}>Retiros Renacer</Link></li>
              <li><Link href={'/'}>Parejas</Link></li>
              <li><Link href={'/'}>Asamblea De Los Jueves</Link></li>
              <li><Link href={'/'}>Grupo De Oracion De Los Miercoles</Link></li>
              <li><Link href={'/'}>Ministerio De Los Jovenes</Link></li>
              <li><Link href={'/'}>Grupos De Hombres Nuevos</Link></li>
              <li><Link href={'/'}>Colaboradores</Link></li>
            </ul>
         </li>   

         <li className={style.mobile_menu_item}><Link href={'/'}>Actividades</Link></li>
         <li className={style.mobile_menu_item}><Link href={'/'}>Multimedia</Link></li>
         <li className={style.mobile_menu_item}>
           <button className={'flex_space_between'}> Oracion <GoChevronRight size={20}/> </button>
            <ul className={style.sub_menu}>
              <li><Link href={'/'}>Consagracion</Link></li>
              <li><Link href={'/'}>Lectura Del Dia</Link></li>
              <li><Link href={'/'}>Liturgias De Las Horas</Link></li>
              <li><Link href={'/'}>Santo Rosario</Link></li>
              <li><Link href={'/'}>Oracion Por Los Enfermos</Link></li>
              <li><Link href={'/'}>Ministerio De Los Jovenes</Link></li>
              <li><Link href={'/'}>Grupos De Hombres Nuevos</Link></li>
              <li><Link href={'/'}>Colaboradores</Link></li>
            </ul>
         </li>  

         <li className={style.mobile_menu_item}> <Link href={'/'}>Contacto</Link></li>

      </ul>
    </nav>
  )
}

export default MobileMenu;