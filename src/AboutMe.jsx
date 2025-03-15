import React from 'react';
import './style/AboutMe.css';
import CV_English from './assets/CV_English.pdf';
import me from './assets/me.png';
import cv_icon from './assets/cv.png';
import mail_icon from './assets/email.png';
import linkedin_icon from './assets/linkedin.png';
import github_icon from './assets/github.png';


const Linkedin = 'https://www.linkedin.com/in/damien-deryck/?locale=en';
const Github = 'https://github.com/dryk875'
const Mail = 'mailto:damien.deryck@epfl.ch'

function Link({img, text, url}) {
    return (
        <button>
            <a href={url} target="_blank">
                <div className='icon'><img src={img} alt={text} /></div>
                {text}
            </a>
        </button>
    )
}

function AboutMe() {

    return (
        <>
            <h1>About me</h1>

            <aboutme>

                <me>
                    <img src={me} alt="Damien de Ryck" />
                </me>

                <p>
                    Curently studying Comunication Systems at EPFL, I am passionate about technology and innovation.
                    I am always looking for new challenges and opportunities to learn and grow.
                    I am a team player and I am always looking for ways to improve my skills and knowledge.
                </p>

                <links>
                    <Link img={cv_icon} text='Download my CV' url={CV_English} />
                    <Link img={mail_icon} text={'Contact Me'} url={Mail} />
                    <Link img={linkedin_icon} text='LinkedIn' url={Linkedin} />
                    <Link img={github_icon} text='GitHub' url={Github} />
                </links>
            </aboutme>
        </>
    );
}

export default AboutMe;