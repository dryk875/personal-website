import React from 'react';
import './style/AboutMe.css';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
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
                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                        <Viewer fileUrl={CV_English} />
                    </Worker>
                    <button>
                        <a href={Linkedin}>Linkedin</a>
                    </button>
                    <button>
                        <a href={Github}>Github</a>
                    </button>
                </links>
            </aboutme>
        </>
    );
}

export default AboutMe;