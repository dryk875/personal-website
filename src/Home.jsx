import './style/Home.css'
import photo from './assets/photo.png'
import React from "react";
import { useTranslation } from 'react-i18next';
import LanguageSelector from './components/LanguageSelector';

function Link({text, url}) {
    return (
        <a href={url} target="_blank">
            {text}
        </a>
    )
}

function Home() {
    const { t } = useTranslation();
    const CV = t('CV');
    const Mail = 'mailto:deryckdamien@gmail.com'
    const Linkedin = t('linkedin_link');
    const Github = 'https://github.com/dryk875'
    return (
        <>
            <LanguageSelector />
            <main className="Layout">
                <div className="HomeContent">
                    <div className="name">Damien<br/>de Ryck</div>
                    <div className="links">
                        <Link text={t('mEM')} url={Mail} />
                        <Link text={t('mCV')} url={CV} />
                        <Link text={t('mIN')} url={Linkedin} />
                        <Link text={t('mGH')} url={Github} />
                    </div>
                </div>
                <div className="portrait">
                    <img src={photo} alt="portrait de Damien" />
                </div>
            </main>
        </>
    );
}

export default Home