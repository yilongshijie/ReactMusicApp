import React from 'react';
import style from './Header.css'

class Header extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className={style.header} >
        YIYI云音乐
      </div>

    );
  }
}
export default Header;
