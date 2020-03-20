import React from 'react';
import style from './Footer.css'
import Auido from '../Audio/Audio'
class Footer extends React.Component {
  render() {
    return (
      <div className={style.footer}>
        <Auido></Auido>
      </div>
    );
  }
}


export default Footer;
