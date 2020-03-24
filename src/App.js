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
          href: 'http://m10.music.126.net/20200324192711/52512f469d4571e806e4de47f527e1f7/ymusic/d6d3/7aac/9aed/802e6b3a1bd34a18927f4adab563690a.mp3'
        },
        {
          img: './cover/109951164274343764.jpg',
          href: 'http://m10.music.126.net/20200324191907/760e6aaa6cf4b5199d67aa5ab6af080b/ymusic/0653/5153/0e59/192dc93d07f9573468999363dc0eaa8b.mp3'
        },
        {
          img: './cover/109951163240682406.jpg',
          href: 'http://m10.music.126.net/20200324192634/ba17023e5898699b7f53e3b6409745f6/ymusic/ff8f/169b/5b41/1eca9e7e3525627e7b2c23750bd4bd7c.mp3'
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
