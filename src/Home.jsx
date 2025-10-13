import './style/Home.css'
import photo from './assets/photo.png'
import React from "react";
import { useTranslation } from 'react-i18next';
import LanguageSelector from './components/LanguageSelector';
import Link from './components/Link';

function Home() {
    const { t } = useTranslation();
    return (
        <>
            <header className="Header">
                <LanguageSelector />
            </header>
            <main className="Layout">
                <div className="HomeContent">
                    <div className='Name'>TEST<br/>de Ryck</div>
                    <div className="position">{t('position')}<Link display="EPFL" url={t('EPFLLink')} /></div>
                    <div className="links">
                        <Link display={t('mEM')} url={'mailto:deryckdamien@gmail.com'} />
                        <Link display={t('mCV')} url={t('CV')} />
                        <Link display={t('mIN')} url={t('linkedin_link')} />
                        <Link display={t('mPR')} url={'/projects'} />
                    </div>
                </div>
                <div className="portrait">
                    <img src={photo} alt="damien" />
                </div>
            </main>
        </>
    );
}

export default Home