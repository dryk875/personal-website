import '../style/Header.css';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFlag, setSelectedFlag] = useState('🇬🇧');
    const accordionRef = useRef(null);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const selectFlag = (flag, lang) => {
        setSelectedFlag(flag);
        i18n.changeLanguage(lang);
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

    return (
        <>
            <header>
                <nav>
                    <h2><a href='#aboutme'>{i18n.t('About Me')}</a></h2>
                    <h2><a href='#projects'>{i18n.t('Projects')}</a></h2>
                    <h2><a href='#education'>{i18n.t('Education')}</a></h2>
                </nav>
                <div className="accordion" ref={accordionRef}>
                    <button onClick={toggleAccordion} className="accordion-button">{selectedFlag}</button>
                    {isOpen && (
                        <div className="accordion-content">
                            <div className="flag-option" onClick={() => selectFlag('🇬🇧', 'en')}>
                                🇬🇧&nbsp;English
                            </div>
                            <div className="flag-option" onClick={() => selectFlag('🇫🇷', 'fr')}>
                                🇫🇷&nbsp;Français
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </>
    );
}

export default Header;