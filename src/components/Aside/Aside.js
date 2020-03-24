import React from 'react';
import style from './Aside.scss';
import { MusicContext } from '../../context/context'
class Aside extends React.Component {
  render() {

    return (
      <div className={style.aside} >
        <div className={style.nav}></div>
        <ul>
          <MusicContext.Consumer>
            {
              context => {
                let temp = context.record.records.map((item, index) => {
                  return (<li key={index}><img src={item.img} onClick={(e) => context.change(index, e)} /></li>)
                })
                return temp;
              }
            }
          </MusicContext.Consumer>
        </ul>
      </div>
    );
  }
}
export default Aside;
