/* eslint-disable @next/next/no-img-element */
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { getEventImages } from "@/actions/get-event-images";
import { heroFont } from "@/config/font.plugin";
import { EventImage } from "@/interfaces/event-images";
import style from "./style.module.css";

const YOUTUBE_VIDEOS_URL = "https://www.youtube.com/@cscvbrooklyn/videos";
const GALLERY_SIZE = 6;

const getRecentEvent = async (): Promise<EventImage | undefined> => {
  try {
    const [recentEvent] = await getEventImages();
    if (!recentEvent || !recentEvent.imagesUrl?.length) return undefined;
    return recentEvent;
  } catch {
    return undefined;
  }
};

export const RecentEvent = async () => {
  const recentEvent = await getRecentEvent();

  if (!recentEvent) return null;

  const { eventName, eventDescription, imagesUrl } = recentEvent;
  const galleryImages = imagesUrl.slice(0, GALLERY_SIZE);

  return (
    <section id="evento-reciente" className={`${heroFont.className} ${style.recent_section}`}>
      <div className={style.recent_container}>
        <div className={style.recent_grid}>
          <div className={style.recent_text}>
            <div className={style.recent_kicker}>Evento más reciente</div>
            <h2 className={style.recent_title}>{eventName}</h2>
            <div className={style.recent_description}>
              <BlocksRenderer content={eventDescription}/>
            </div>
            <a
              className={style.recent_button}
              href={YOUTUBE_VIDEOS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver videos en YouTube
            </a>
          </div>

          <div className={style.recent_gallery}>
            {galleryImages.map(image => (
              <img
                key={image.id}
                className={style.recent_image}
                src={image.url}
                alt={eventName}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
