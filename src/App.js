import React from 'react';
 
import './App.css';
import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import Footer from './components/Footer/Footer'
import Section from './components/Section/Section'
function App() {
  return (
    <div className="app">
      <Header >
      </Header>
      <div className="content">
        <Aside></Aside>
        <Section></Section>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
