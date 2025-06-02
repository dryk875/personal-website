import '../style/Project.css';
import React from "react";
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../components/LanguageSelector';
import Link from '../components/Link';
import Return from "../components/Return.jsx";
import ICMonIMG from '../assets/icmon.png';

function ICMon() {
    const { t } = useTranslation();
    return (
        <>
            <div className="Page">
                <header className="Header">
                    <Return />
                    <div className="Title">ICMon</div>
                    <LanguageSelector />
                </header>
                <main className="ProjectContent">

                </main>
            </div>
        </>
    );
}

export default ICMon;