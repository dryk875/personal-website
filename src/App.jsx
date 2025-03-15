import { useEffect } from 'react';
import './style/App.css';
import HeadtTitle from './HeadTitle';
import Projects from "./Projects.jsx";
import AboutMe from "./AboutMe.jsx";
import Header from "./components/Header.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";

function App() {
    return (
        <>
            <Header />
            <HeadtTitle />
            <section id='aboutme'><AboutMe /></section>
            <section id='projects'><Projects /></section>
            <section id='education'><Education /></section>
        </>
    );
}

export default App;