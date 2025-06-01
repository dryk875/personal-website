import React from "react";
import { Link as RouterLink } from 'react-router-dom';

function Link({ display, url }) {
    const isExternal = url.startsWith('http') || url.startsWith('mailto');
    const isPdf = url.endsWith('.pdf');
    if (isExternal || isPdf) {
        return (
            <a href={url} target="_blank" rel="noopener noreferrer">
                {display}
            </a>
        );
    }
    return <RouterLink to={url}>{display}</RouterLink>;
}

export default Link;