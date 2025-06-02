import React from "react";
import { useTranslation } from 'react-i18next';
import LanguageSelector from './components/LanguageSelector';
import Link from './components/Link';
import './style/Error404.css';

function Error404() {
    const { t } = useTranslation();
    return (
        <>
            <header className="Header">
                <LanguageSelector />
            </header>
            <main className="ErrorPage">
                {t('pNF')}
                <Link display={t('rHome')} url={''} />
            </main>
        </>
    );
}

export default Error404;