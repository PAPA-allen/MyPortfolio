import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import {Intro} from './components/introduction/Intro';
import { S } from './components/services/S';
import { Experience } from './components/Experience/Experience';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Contact } from './components/Contact/Contact';
// import { Footer } from './components/Footer/Footer';
import {themeContext} from './Context';
import {useContext} from 'react';


function App(){
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return(
    <div className = 'App'
      style={{
        background: darkMode? 'black': '',
        color: darkMode? 'white': ''
      }}
      >
      <Navbar />
      <div className="main-wrapper">
      <Intro />
      <S />
      <Experience />
      <Portfolio />
      <Contact />
      {/* <Footer /> */}
      </div>
    </div>
   
    )
}


export default App;
