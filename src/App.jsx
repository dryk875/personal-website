import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
    Navigate,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Error404 from "./Error404.jsx";
import Home from './Home.jsx';
import Projects from './Projects.jsx';
import ICMon from "./projects/ICMon.jsx";
import ReCHor from "./projects/ReCHor.jsx";

const SUPPORTED_LANGUAGES = ['en', 'fr'];

const pages = {
    'error404': Error404,
    '': Home,
    'projects': Projects,
    'projects/icmon': ICMon,
    'projects/rechor': ReCHor,
};

function GeneralRouter() {
    const location = useLocation();
    const { i18n } = useTranslation();
    const segments = location.pathname.split('/').filter(Boolean);

    let lang = segments[segments.length - 1];
    let pathKey = segments.slice(0, -1).join('/');

    // If last segment is not a supported language, treat as path
    if (!SUPPORTED_LANGUAGES.includes(lang)) {
        lang = null;
        pathKey = segments.join('/');
    }

    // If language is missing, redirect to path + userLang
    if (!lang) {
        const userLang = navigator.language.startsWith('fr') ? 'fr' : 'en';
        const newPath = segments.length === 0 ? `/${userLang}` : `/${segments.join('/')}/${userLang}`;
        return <Navigate to={newPath} replace />;
    }

    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang, i18n]);

    // Find the component to render
    const PageComponent = pages[pathKey.toLowerCase()] || Error404;

    // Inside GeneralRouter, after determining lang and PageComponent
    if (PageComponent === Error404 && pathKey.toLowerCase() !== 'error404') {
        return <Navigate to={`/error404/${lang}`} replace />;
    }
    return <PageComponent />;
}

function App() {
    const location = useLocation();
    return (
        <Routes>
            <Route path="*" element={<GeneralRouter key={location.pathname} />} />
        </Routes>
    );
}

function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}

export default AppWrapper;