import './style/Projects.css';
import React from "react";
import { useTranslation } from 'react-i18next';
import LanguageSelector from './components/LanguageSelector';
import Link from './components/Link';
import Return from "./components/Return.jsx";
import ICMonIMG from './assets/icmon.png';
import ReCHorIMG from './assets/rechor.png';
import HashAuditIMG from './assets/hashaudit.jpg';

function Projects() {
    const { t } = useTranslation();
    return (
        <>
            <div className="Page">
                <header className="Header">
                    <Return />
                    <div className="Title">{t('mPR')}</div>
                    <LanguageSelector />
                </header>
                <main className="ProjectsContent">
                    {/*<Link*/}
                    {/*    display={*/}
                            <article className="ProjectCard">
                                <img src={ReCHorIMG} alt="ReCHor" />
                                <h1>ReCHor</h1>
                                <p>{t('desReCHor')}</p>
                            </article>
                    {/*}*/}
                    {/*    url={'/projects/rechor'}*/}
                    {/*/>*/}

                    <article className="ProjectCard">
                        <img src={HashAuditIMG} alt="HashAudit" />
                        <h1>HashAudit</h1>
                        <p>{t('desHashAudit')}</p>
                    </article>

                    {/*<Link*/}
                    {/*    display={*/}
                            <article className="ProjectCard">
                                <img src={ICMonIMG} alt="ICMon" />
                                <h1>ICMon</h1>
                                <p>{t('desICMon')}</p>
                            </article>
                    {/*}*/}
                    {/*    url={'/projects/icmon'}*/}
                    {/*/>*/}
                </main>
            </div>
        </>
    );
}

export default Projects;