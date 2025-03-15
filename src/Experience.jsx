import { useTranslation } from 'react-i18next';

function Experience() {
    const { t } = useTranslation();

    return (
        <>
            <h1>{t('Experience')}</h1>
        </>
    );
}

export default Experience;