import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import '../style/LanguageSelector.css';

function LanguageSelector() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState(localStorage.getItem('language') || 'en');
    const accordionRef = useRef(null);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const selectLang = (lang) => {
        setSelectedLang(lang);
        i18n.changeLanguage(lang);
        localStorage.setItem('language', lang); // Sauvegarde la langue dans localStorage
        setIsOpen(false);
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

    useEffect(() => {
        i18n.changeLanguage(selectedLang); // Applique la langue au chargement
    }, [selectedLang, i18n]);

    return (
        <div className="language-selector" ref={accordionRef}>
            <button onClick={toggleAccordion} className="language-button">
                {selectedLang}
            </button>
            {isOpen && (
                <div className="language-options">
                    <div
                        className={`lang-option ${selectedLang === 'en' ? 'active' : ''}`}
                        onClick={() => selectLang('en')}
                    >
                        en
                    </div>
                    <div
                        className={`lang-option ${selectedLang === 'fr' ? 'active' : ''}`}
                        onClick={() => selectLang('fr')}
                    >
                        fr
                    </div>
                </div>
            )}
        </div>
    );
}

export default LanguageSelector;