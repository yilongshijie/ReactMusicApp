import React from 'react';
import style from './Section.scss';
import Record from '../Record/Record';
import { MusicContext } from '../../context/context'
function Section() {
  return (
    <div className={style.section}>
      <MusicContext.Consumer>
        {
          context => {

            return <div className={style.bg} style={{ backgroundImage: `url('${context.currentReord.img}')` }}>
            </div>
          }
        }
      </MusicContext.Consumer>
      <div className={style.content}>

        <Record  ></Record>
      </div>
    </div>
  );
}

export default Section;
