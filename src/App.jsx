import { useEffect } from 'react';
import './style/App.css';
import HeadtTitle from './HeadTitle';
import Projects from "./Projects.jsx";
import AboutMe from "./AboutMe.jsx";
import Header from "./components/Header.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import useSectionObserver from './hooks/useSectionObserver';

function App() {
    const sections = ['aboutme', 'projects', 'education'];

    useSectionObserver(sections);

    useEffect(() => {
        const path = window.location.pathname.slice(1); // Get the section name from the URL
        if (sections.includes(path)) {
            const element = document.getElementById(path);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [sections]);

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