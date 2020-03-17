import React from 'react';

import styles from './App.scss';
// import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import Footer from './components/Footer/Footer'
import Section from './components/Section/Section'

const Header = React.lazy(()=> import('./components/Header/Header'))
class App extends React.Component {

  render() {
    return (
      <div className={styles.app}>
        <Header >
        </Header>
        <div className={styles.content}>
          <Aside></Aside>
          <Section></Section>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
