import React from 'react';
import './style/AboutMe.css';
import CV_English from './assets/CV_English.pdf';
import me from './assets/me.png';


const Linkedin = 'https://www.linkedin.com/in/damien-deryck/?locale=en';
const Github = 'https://github.com/dryk875'

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
                    <button>
                        <a href={CV_English} target="_blank">Download my CV</a>
                    </button>
                    <button>
                        <a href={Linkedin} target="_blank">LinkedIn</a>
                    </button>
                    <button>
                        <a href={Github} target="_blank">GitHub</a>
                    </button>
                </links>
            </aboutme>
        </>
    );
}

export default AboutMe;