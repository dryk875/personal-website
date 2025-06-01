import React from "react";
import { Link as RouterLink, useLocation } from 'react-router-dom';

function Link({ display, url }) {
    const location = useLocation();
    const pathSegment = location.pathname.split('/');
    const currentLang = pathSegment[pathSegment.length - 1];
    const isExternal = url.startsWith('http') || url.startsWith('mailto');
    const isPdf = url.endsWith('.pdf');

    if (isExternal || isPdf) {
        return (
            <a href={url} target="_blank" rel="noopener noreferrer">
                {display}
            </a>
        );
    }

    return <RouterLink to={`${url}/${currentLang}`}>{display}</RouterLink>;
}

export default Link;