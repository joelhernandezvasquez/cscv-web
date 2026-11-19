'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lang } from '@/interfaces/navigation';
import style from './style.module.css';

const OPTIONS:{value:Lang,label:string}[] = [
  {value:'es', label:'ES'},
  {value:'en', label:'EN'},
];

const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

export const LangToggle = ({lang}:{lang:Lang}) => {
  const router = useRouter();
  const [current,setCurrent] = useState<Lang>(lang);

  useEffect(()=>{
    setCurrent(lang);
  },[lang]);

  const handleSelect = (value:Lang) => {
    if(value === current) return;
    setCurrent(value);
    document.cookie = `lang=${value}; path=/; max-age=${ONE_YEAR_IN_SECONDS}; samesite=lax`;
    router.refresh();
  }

  return (
    <div className={style.track} role="group" aria-label={current === 'en' ? 'Language' : 'Idioma'}>
      {OPTIONS.map(({value,label})=>(
        <button
          key={value}
          type="button"
          className={`${style.segment} ${current === value ? style.segment_active : ''}`}
          aria-pressed={current === value}
          onClick={()=> handleSelect(value)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
