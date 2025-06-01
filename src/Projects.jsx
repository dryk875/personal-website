import './style/Projects.css';
import React from "react";
import { useTranslation } from 'react-i18next';
import LanguageSelector from './components/LanguageSelector';
import Link from './components/Link';
import ReturnHome from "./components/ReturnHome.jsx";

function Projects() {
    const { t } = useTranslation();
    return (
        <>
            <LanguageSelector />
            <ReturnHome />

            <header className="Title">{t('mPR')}</header>
            <main className="ProjectsContent">
                <Link
                    display={
                    <article className="ProjectCard">
                        <h1>ReCHor</h1>
                        <p>{t('desReCHor')}</p>
                    </article>}
                    url={'https://github.com/dryk875'}
                />


                <Link
                    display={
                    <article className="ProjectCard">
                        <h1>HashAudit</h1>
                        <p>{t('desHashAudit')}</p>
                    </article>}
                    url={'https://github.com/dryk875'}
                />

                <Link
                    display={
                    <article className="ProjectCard">
                        <h1>ICMon</h1>
                        <p>{t('desICMon')}</p>
                    </article>}
                    url={'https://github.com/dryk875'}
                />
            </main>
        </>
    );
}

export default Projects;