import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import '../style/LanguageSelector.css';

const SUPPORTED_LANGUAGES = ['en', 'fr'];

function LanguageSelector() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const accordionRef = useRef(null);

    const toggleAccordion = () => {
        setIsOpen((prev) => !prev);
    };

    const selectLang = (lang) => {
        if (lang === i18n.language) return;

        i18n.changeLanguage(lang);
        localStorage.setItem('language', lang);
        setIsOpen(false);

        const pathSegments = location.pathname.split('/');
        pathSegments[pathSegments.length - 1] = lang;
        navigate(pathSegments.join('/'));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (accordionRef.current && !accordionRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const otherLanguages = SUPPORTED_LANGUAGES.filter((lang) => lang !== i18n.language);

    return (
        <div className="language-selector" ref={accordionRef}>
            <button onClick={toggleAccordion} className="language-button">
                {i18n.language}
            </button>
            {isOpen && (
                <div className="language-options">
                    {otherLanguages.map((lang) => (
                        <div
                            key={lang}
                            className="lang-option"
                            onClick={() => selectLang(lang)}
                        >
                            {lang}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default LanguageSelector;