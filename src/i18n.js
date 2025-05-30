import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import CV_En from './assets/cv_damien_de_ryck_en.pdf';
import CV_Fr from './assets/cv_damien_de_ryck_fr.pdf';

const resources = {
    en: {
        translation: {
            "linkedin_link": "https://www.linkedin.com/in/damien-deryck/?locale=en",
            "CV": CV_En,
            "position": "Computer Science student at ",
            "EPFLLink": "https://www.epfl.ch/en",
            "mEM": "my email",
            "mCV": "my cv",
            "mIN": "my linkedin",
            "mGH": "my github"
        }
    },
    fr: {
        translation: {
            "linkedin_link": "https://www.linkedin.com/in/damien-deryck/?locale=fr_FR",
            "CV": CV_Fr,
            "position": "Étudiant en informatique à l'",
            "EPFLLink": "https://www.epfl.ch/fr",
            "mEM": "mon email",
            "mCV": "mon cv",
            "mIN": "mon linkedin",
            "mGH": "mon github"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;