import React from 'react';
import style from './Aside.scss';
import { MusicContext } from '../../context/context'
function Aside() {

  return (
    <div className={style.aside}>
      <ul>
        <MusicContext.Consumer>
          {
            context => {
              console.log(context)
              let temp = context.record.records.map((item, index) => {
                return (<li key={index}><img src={item.img} onClick={(e) => context.toggleTheme(index, e)} /></li>)
              })
              return temp;
            }
          }
        </MusicContext.Consumer>
      </ul>
    </div>
  );
}

export default Aside;
