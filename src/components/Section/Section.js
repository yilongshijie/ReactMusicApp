import React from 'react';
import style from './Section.scss';
import Record  from '../Record/Record';
function Section() {
  return (
    <div className={style.section}>
      <div className={style.bg}  style={{backgroundImage: "url('zjl/s.jpg')"}}></div>
      <div className={style.content}>
   
        <Record  ></Record>
      </div>
    </div>
  );
}

export default Section;
