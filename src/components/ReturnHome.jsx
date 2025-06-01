import React from "react";
import { useNavigate } from 'react-router-dom';
import '../style/ReturnHome.css'

function ReturnHome() {
    const navigate = useNavigate();

    const handleReturn = () => {
        navigate('/');
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