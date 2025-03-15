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
                <h2>About Me</h2>
                <h2>Projects</h2>
                <h2>Experience</h2>
                <h2>Education</h2>
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