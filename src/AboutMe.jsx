import React from 'react';
import './style/AboutMe.css';
import CV_English from './assets/cv_damien_de_ryck_en.pdf';
import CV_Français from './assets/cv_damien_de_ryck_fr.pdf';
import me from './assets/me.png';
import cv_icon from './assets/cv.png';
import mail_icon from './assets/email.png';
import linkedin_icon from './assets/linkedin.png';
import github_icon from './assets/github.png';
import { useTranslation } from 'react-i18next';




function Link({img, text, url}) {
    return (
        <a href={url} target="_blank">
            <div className='icon'><img src={img} alt={text} /></div>
            {text}
        </a>
    )
}

function AboutMe() {

    const { t } = useTranslation();

    const CV = t('CV');
    const Mail = 'mailto:damien.deryck@epfl.ch'
    const Linkedin = t('linkedin_link');
    const Github = 'https://github.com/dryk875'

    return (
        <>
            <h1>{t('About Me')}</h1>

            <aboutme>

                <me>
                    <img src={me} alt="Damien de Ryck" />
                </me>

                <links>
                    <Link img={cv_icon} url={CV} />
                    <Link img={mail_icon} url={Mail} />
                    <Link img={linkedin_icon} url={Linkedin} />
                    <Link img={github_icon} url={Github} />
                </links>

                <p>{t('pres')}</p>


            </aboutme>
        </>
    );
}

export default AboutMe;