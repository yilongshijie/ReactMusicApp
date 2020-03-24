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
          img: './cover/109951163076302925.jpg',
          href: './music/周杰伦+-+简单爱.mp3'
        },
        {
          img: './cover/109951164274343764.jpg',
          href: './music/遇见+-孙燕姿.mp3'
        },
        {
          img: './cover/109951163240682406.jpg',
          href: './music/胡歌-逍遙嘆.mp3'
        }

      ],
    };
    this.state =
    {
      record: record,
      currentReord: Object.assign({}, record.records[0], { href: '' }),
      currentIndex: 0,
      currentActive: false,
      change: (index) => {
        this.setState(state => {
          return {
            currentIndex: index,
            currentReord: state.record.records[index],
            currentActive: true
          }
        })
      },
      acitveChange: () => {
        this.setState(state => ({
          currentReord: Object.assign(state.currentReord,
            state.record.records[state.currentIndex]
          ),
          currentActive: !state.currentActive
        }))
      },
      next: () => {
        this.setState(state => {
          if (state.record.records.length - 1 > state.currentIndex) {
            return {
              currentIndex: state.currentIndex + 1,
              currentReord: state.record.records[state.currentIndex + 1],
              currentActive: true
            }
          } else {
            return {
              currentIndex: 0,
              currentReord: state.record.records[0],
              currentActive: true
            }
          }
        });
      },
      pre: () => {
        this.setState(state => {
          if (state.currentIndex > 0) {
            return {
              currentIndex: state.currentIndex - 1,
              currentReord: state.record.records[state.currentIndex - 1],
              currentActive: true
            }
          } else {
            return {
              currentIndex: state.record.records.length - 1,
              currentReord: state.record.records[state.record.records.length - 1],
              currentActive: true
            }
          }
        });
      }
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
