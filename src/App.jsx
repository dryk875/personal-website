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

// Page definitions with translations
const PAGE_TRANSLATIONS = {
    projects: {
        en: 'projects',
        fr: 'projets'
    }
};

// Components for each page
const PAGE_COMPONENTS = {
    projects: Projects
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

    // Find the canonical page key regardless of language
    const pageKey = findPageKey(page);
    const PageComponent = pageKey ? PAGE_COMPONENTS[pageKey] : null;

    useEffect(() => {
        if (SUPPORTED_LANGUAGES.includes(lang)) {
            i18n.changeLanguage(lang);
        }
    }, [lang, i18n]);

    // If page doesn't exist, redirect to home
    if (!pageKey) {
        return <Navigate to={`/${lang}`} replace />;
    }

    // If language is valid but URL doesn't match the language, redirect to proper translation
    if (SUPPORTED_LANGUAGES.includes(lang)) {
        const correctPageName = PAGE_TRANSLATIONS[pageKey][lang];
        if (page !== correctPageName) {
            return <Navigate to={`/${correctPageName}/${lang}`} replace />;
        }
    } else {
        // If language is invalid, use browser language
        const userLang = navigator.language.startsWith('fr') ? 'fr' : 'en';
        const correctPageName = PAGE_TRANSLATIONS[pageKey][userLang];
        return <Navigate to={`/${correctPageName}/${userLang}`} replace />;
    }

    return <PageComponent />;
}

// Helper function to find the canonical page key from any language version
function findPageKey(pageName) {
    if (!pageName) return null;

    const normalizedPage = pageName.toLowerCase();

    // Check all page definitions for a match in any language
    for (const [key, translations] of Object.entries(PAGE_TRANSLATIONS)) {
        if (Object.values(translations).includes(normalizedPage)) {
            return key;
        }
    }

    return null;
}

function LanguageRedirect() {
    const location = useLocation();
    const userLang = navigator.language.startsWith('fr') ? 'fr' : 'en';
    const segments = location.pathname.split('/').filter(Boolean);

    if (segments.length === 1) {
        const pageKey = findPageKey(segments[0]);
        if (pageKey) {
            const correctPageName = PAGE_TRANSLATIONS[pageKey][userLang];
            return <Navigate to={`/${correctPageName}/${userLang}`} replace />;
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