import React from 'react';

import styles from './App.scss';
// import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import Footer from './components/Footer/Footer'
import Section from './components/Section/Section'
import Header from './components/Header/Header'
import { MusicContext } from "./context/context";
class App extends React.Component {
  constructor(props) {
    super(props);

    const record = {
      records: [
        {
          img: './zjl/18715886930028449.jpg',
          href: ''
        },
        {
          img: './zjl/109951163076302925.jpg',
          href: ''
        }
      ],
    };
    this.state =
    {
      record: record,
      currentReord: {
        img: './zjl/18715886930028449.jpg',
        href: ''
      },
      toggleTheme: (index) => {
        this.setState(state => ({
          currentReord: state.record.records[index]
        }))
      },
    }

  }
  render() {
    return (
      <div className={styles.app}>
        <MusicContext.Provider value={this.state}>
          <Header >
          </Header>
          <div className={styles.content}>
            <Aside></Aside>
            <Section></Section>
          </div>
          <Footer></Footer>
        </MusicContext.Provider>
      </div >
    );
  }
}

export default App;
