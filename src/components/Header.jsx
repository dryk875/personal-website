import '../style/Header.css';
import { useState } from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFlag, setSelectedFlag] = useState('🇬🇧');

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const selectFlag = (flag) => {
        setSelectedFlag(flag);
        setIsOpen(false);
    };

    return (
        <>
            <header>
                <nav>
                    <h2><a href='#aboutme'>About Me</a></h2>
                    <h2><a href='#projects'>Projects</a></h2>
                    <h2><a href='#education'>Education</a></h2>
                </nav>
                <div className="accordion">
                    <button onClick={toggleAccordion} className="accordion-button">{selectedFlag}</button>
                    {isOpen && (
                        <div className="accordion-content">
                            <div className="flag-option" onClick={() => selectFlag('🇬🇧')}>🇬🇧 English</div>
                            <div className="flag-option" onClick={() => selectFlag('🇫🇷')}>🇫🇷 Français</div>
                        </div>
                    )}
                </div>
            </header>
        </>
    );
}

export default Header;