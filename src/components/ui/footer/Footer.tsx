/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Title } from "../title/Title";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { getFooter } from "@/actions/get-footer";
import { FaLocationDot } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { leadText, titleHeadline } from "@/config/font.plugin";
import SocialMediaMenu from "./ui/social-media-menu/SocialMediaMenu";
import { SocialLinks } from "@/interfaces/socialLinks";
import { ContactFooter } from "@/interfaces/contactFooter";
import FooterContact from "./ui/footer-contact/FooterContact";
import { menuMinisterios } from "@/constants/menuMinisterios";
import { MenuNavigation } from "./ui/menuNavigation/menuNavigation";
import { menuComunidad } from "@/constants/menuComunidad";
import { menuActivities } from "@/constants/menuActivities";
import { menuOraciones } from "@/constants/menuOraciones";
import { menuGeneral } from "@/constants/menuGeneral";
import style from "./style.module.css";

export const Footer = async () => {
  const {
    description,
    location,
    email,
    phoneNumber,
    facebookUrl,
    youtubeUrl,
    XUrl,
    instagramUrl,
  } = await getFooter();

  const sociaLinks: SocialLinks = {
    facebookUrl,
    youtubeUrl,
    XUrl,
    instagramUrl,
  };
  const contacts: ContactFooter[] = [
    {
      contactIcon: <FaLocationDot size={20} color="#C88C5A" />,
      contact: location,
    },
    {
      contactIcon: <SiMinutemailer size={20} color="#C88C5A" />,
      contact: email,
    },
    {
      contactIcon: <FaPhoneAlt size={20} color="#C88C5A" />,
      contact: phoneNumber,
    },
  ];

  const currentYear = new Date().getFullYear();


  return (
    <footer className={style.footer_container}>

      <div className={style.footer_content_container}>
          <div className={style.footer_col}>
            <img width={"80"} height={"110"} src={"/images/logoFooter.png"} alt="" />

            <div className={leadText.className}>
              <BlocksRenderer content={description} />
            </div>

            <Link
              className={`${style.footer_cta_btn} ${titleHeadline.className}`}
              href={"#event-list"}
            >
              Ver Proxima Actividad
            </Link>
          </div>

          <div className={style.footer_col}>
            <Title title="Contacts" size="sm" color={"white"} />
            <FooterContact contacts={contacts} />
            <SocialMediaMenu sociaLinks={sociaLinks} />
          </div>

          <div className={style.footer_col}>
            <Title title="Ministerios" size="sm" color={"white"} />
            <MenuNavigation navigationLinks={menuMinisterios} />
          </div>

          <div className={style.footer_col}>
            <Title title="Comunidad" size="sm" color={"white"} />
            <MenuNavigation navigationLinks={menuComunidad} />
          </div>

          <div className={style.footer_col}>
            <Title title="Actividades" size="sm" color={"white"} />
            <MenuNavigation navigationLinks={menuActivities} />
          </div>

          <div className={style.footer_col}>
            <Title title="Oracion" size="sm" color={"white"} />
            <MenuNavigation navigationLinks={menuOraciones} />
          </div>

          <div className={style.footer_col}>
            <Title title="General" size="sm" color={"white"} />
            <MenuNavigation navigationLinks={menuGeneral} />
          </div>

      </div>

      <div className={style.footer_divider}></div>
      
      <div className={style.footer_bottom_container}>
        
          <p className={leadText.className}>
            Copyright © {currentYear} Comunidad Siervos De Cristo Vivo. All Rights Reserved.
          </p>
          
          <p className={leadText.className}>
            Developed with <span style={{ color: "red" }}> &#10084; </span> by Joel
            Hernandez.
          </p>
      </div>
      
    </footer>
  );
};
