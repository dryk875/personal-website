import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import CV_English from './assets/CV_English.pdf';

function AboutMe() {
    return (
        <>
            <h1>About me</h1>
            <div style={{ width: '400px', height: '500px' }}>
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                    <Viewer fileUrl={CV_English} />
                </Worker>
            </div>
        </>
    );
}

export default AboutMe;