import '../style/Project.css';
import React from "react";
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../components/LanguageSelector';
import Link from '../components/Link';
import Return from "../components/Return.jsx";
import ReCHorIMG from '../assets/rechor.png';

function ReCHor() {
    const { t } = useTranslation();
    return (
        <>
            <div className="Page">
                <header className="Header">
                    <Return />
                    <div className="Title">ReCHor</div>
                    <LanguageSelector />
                </header>
                <main className="ProjectContent">

                </main>
            </div>
        </>
    );
}

export default ReCHor;