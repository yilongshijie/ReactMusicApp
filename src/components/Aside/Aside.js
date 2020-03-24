import React from 'react';
import style from './Aside.scss';
import { MusicContext } from '../../context/context'
class Aside extends React.Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      navShow: true
    }
  }
  render() {
    return (
      <div className={`${style.aside} ${this.state.navShow ? '' : style.navHidden}`}  >
        <div className={style.nav} onClick={this.toggle}></div>
        <ul>
          <MusicContext.Consumer>
            {
              context => {
                let temp = context.record.records.map((item, index) => {
                  return (<li key={index}><img src={item.img} onClick={(e) => this.change(context.change, index, e)} /></li>)
                })
                return temp;
              }
            }
          </MusicContext.Consumer>
        </ul>
      </div>
    );
  }
  change(fun, index, e) {
    fun(index);
    this.setState({ navShow: true })
  }
  toggle() {
    this.setState({ navShow: !this.state.navShow })

  }
}
export default Aside;
