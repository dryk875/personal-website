import './style/App.css'
import HeadtTitle from './HeadTitle'
import Projects from "./Projects.jsx";
import AboutMe from "./AboutMe.jsx";
import Header from "./components/Header.jsx";
import {useState} from "react";

function App() {

    const [selectedLang, setSelectedLang] = useState('en');

  return (
      <>
          <Header />
          <HeadtTitle />
          <AboutMe />
          <Projects />
      </>
  )
}

export default App
