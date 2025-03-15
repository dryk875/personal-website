import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "Experience": "Experience",
            "Education": "Education",
            "About Me": "About Me",
            "Projects": "Projects",
            "Currently studying Communication Systems at EPFL, I am passionate about technology and innovation.": "Currently studying Communication Systems at EPFL, I am passionate about technology and innovation."
        }
    },
    fr: {
        translation: {
            "Experience": "Expérience",
            "Education": "Éducation",
            "About Me": "À propos de moi",
            "Projects": "Projets",
            "Currently studying Communication Systems at EPFL, I am passionate about technology and innovation.": "Actuellement étudiant en systèmes de communication à l'EPFL, je suis passionné par la technologie et l'innovation."
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