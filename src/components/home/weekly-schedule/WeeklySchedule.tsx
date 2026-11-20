import { heroFont } from "@/config/font.plugin";
import { WEEKLY_SCHEDULE } from "@/constants/weekly-schedule";
import style from "./style.module.css";

export const WeeklySchedule = () => {
  return (
    <section id="semana" className={`${heroFont.className} ${style.schedule_section}`}>
      <div className={style.schedule_container}>
        <div className={style.schedule_head}>
          <h2 className={style.schedule_title}>Cada semana</h2>
          <p className={style.schedule_address}>207 Hendrix Street, Brooklyn, NY 11207</p>
        </div>

        <ul className={style.schedule_grid}>
          {WEEKLY_SCHEDULE.map(({ day, items }) => (
            <li key={day} className={style.schedule_day}>
              <h3 className={style.schedule_day_name}>{day}</h3>
              {items.map((item) => (
                <div key={item.name}>
                  <div className={style.schedule_item_name}>{item.name}</div>
                  <div className={style.schedule_item_time}>{item.time}</div>
                </div>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
