import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import '../style/ReturnHome.css';

function ReturnHome() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleReturn = () => {
        const pathSegment = location.pathname.split('/');
        const currentLang = pathSegment[pathSegment.length - 1];
        const targetLang = currentLang === 'fr' ? 'fr' : 'en'; // Default to 'en' if not 'fr'
        navigate(`/${targetLang}`);
    };

    return (
        <div className="ReturnHome">
            <button onClick={handleReturn} className="return_button">
                ←
            </button>
        </div>
    );
}

export default ReturnHome;