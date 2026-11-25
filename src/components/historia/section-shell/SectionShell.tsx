import { ReactNode } from "react";
import style from "./style.module.css";

interface SectionShellProps {
  number: string;
  label: string;
  children: ReactNode;
  id?: string;
}

export const SectionShell = ({ number, label, children, id }: SectionShellProps) => {
  return (
    <section id={id} className={style.shell_section}>
      <div className={style.shell_row}>
        <div className={style.shell_label}>
          <span className={style.shell_number}>{number}</span>
          <span className={style.shell_name}>{label}</span>
        </div>
        <div className={style.shell_content}>{children}</div>
      </div>
    </section>
  );
};
