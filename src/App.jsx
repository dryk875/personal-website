import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams,
    useLocation,
    Navigate,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Home from './Home.jsx';
import Projects from './Projects.jsx';

const SUPPORTED_LANGUAGES = ['en', 'fr'];

const pages = {
    projects: Projects,
};

function App() {
    return (
        <Routes>
            {SUPPORTED_LANGUAGES.map((lang) => (
                <Route key={lang} path={`/${lang}`} element={<LangRouterHome lang={lang} />} />
            ))}
            <Route path="/:page/:lang" element={<LangRouterPage />} />
            <Route path="*" element={<LanguageRedirect />} />
        </Routes>
    );
}

function LangRouterHome({ lang }) {
    const { i18n } = useTranslation();

    useEffect(() => {
        if (SUPPORTED_LANGUAGES.includes(lang)) {
            i18n.changeLanguage(lang);
        }
    }, [lang, i18n]);

    return <Home />;
}

function LangRouterPage() {
    const { page, lang } = useParams();
    const { i18n } = useTranslation();
    const PageComponent = pages[page?.toLowerCase()];

    useEffect(() => {
        if (SUPPORTED_LANGUAGES.includes(lang)) {
            i18n.changeLanguage(lang);
        }
    }, [lang, i18n]);

    if (!PageComponent) {
        return <Navigate to={`/${lang}`} replace />;
    }

    if (!SUPPORTED_LANGUAGES.includes(lang)) {
        const userLang = navigator.language.startsWith('fr') ? 'fr' : 'en';
        return <Navigate to={`/${page}/${userLang}`} replace />;
    }

    return <PageComponent />;
}

function LanguageRedirect() {
    const location = useLocation();
    const userLang = navigator.language.startsWith('fr') ? 'fr' : 'en';
    const segments = location.pathname.split('/').filter(Boolean);

    if (segments.length === 1) {
        const page = segments[0].toLowerCase();
        if (Object.keys(pages).includes(page)) {
            return <Navigate to={`/${page}/${userLang}`} replace />;
        }
    }

    return <Navigate to={`/${userLang}`} replace />;
}

function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}

export default AppWrapper;