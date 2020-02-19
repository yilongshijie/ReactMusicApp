import React from 'react';
import './Section.scss';
import Record  from '../Record/Record';
function Section() {
  return (
    <div className="section">
      <div className='bg'  style={{backgroundImage: "url('zjl/s.jpg')"}}></div>
      <div className="section-content">
   
        <Record  ></Record>
      </div>
    </div>
  );
}

export default Section;
