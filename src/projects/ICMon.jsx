import '../style/Project.css';
import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../components/LanguageSelector';
import Link from '../components/Link';
import Return from "../components/Return.jsx";
import ICMonIMG from '../assets/icmon.png';

// Simple loading circle component
function LoadingCircle() {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 600,
            width: 600
        }}>
            <div style={{
                border: '16px solid #f3f3f3',
                borderTop: '16px solid #3498db',
                borderRadius: '50%',
                width: 120,
                height: 120,
                animation: 'spin 1s linear infinite'
            }} />
            <style>
                {`@keyframes spin {
                    0% { transform: rotate(0deg);}
                    100% { transform: rotate(360deg);}
                }`}
            </style>
        </div>
    );
}

function ICMonFrame({ onLoad }) {
    return (
        <iframe
            src="/cheerpj-wrapper.html"
            onLoad={onLoad}
            style={{ display: 'block' }}
        ></iframe>
    );
}

function ICMon() {
    const { t } = useTranslation();
    const [started, setStarted] = useState(false);
    const [loading, setLoading] = useState(true);

    const handlePlay = () => {
        setStarted(true);
        setLoading(true);
    };

    const handleStop = () => {
        setStarted(false);
        setLoading(true);
    };

    return (
        <div className="Page">
            <header className="Header">
                <Return />
                <div className="Title">ICMon</div>
                <LanguageSelector />
            </header>
            <main className="Game">
                {!started ? (
                    <button onClick={handlePlay} style={{ fontSize: '2em', padding: '1em 2em' }}>
                        Play
                    </button>
                ) : (
                    <>
                        {loading && <LoadingCircle />}
                        <div style={{ display: loading ? 'none' : 'block' }}>
                            <ICMonFrame onLoad={() => setLoading(false)} />
                        </div>
                        <button
                            onClick={handleStop}
                            style={{
                                marginTop: '2em',
                                fontSize: '1.5em',
                                padding: '0.7em 2em'
                            }}
                        >
                            Stop
                        </button>
                    </>
                )}
            </main>
        </div>
    );
}

export default ICMon;