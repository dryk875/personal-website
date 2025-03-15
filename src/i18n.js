import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "Experience": "Experience",
            "Education": "Education",
            "About Me": "About Me",
            "Projects": "Projects",
            "pres": "Curently studying Comunication Systems at EPFL, I am passionate about technology and innovation. I am always looking for new challenges and opportunities to learn and grow. I am a team player and I am always looking for ways to improve my skills and knowledge.",
            "highschooldesc": "Mathematics and Physics",
            "bsc": "Bachelor of Science in Communication Systems",
            "bscdesc": "Computer Science, Mathematics and Physics"
        }
    },
    fr: {
        translation: {
            "Experience": "Expérience",
            "Education": "Formation",
            "About Me": "À propos de moi",
            "Projects": "Projets",
            "pres": "Actuellement étudiant en systèmes de communication à l'EPFL, je suis passionné par la technologie et l'innovation. Je suis toujours à la recherche de nouveaux défis et d'opportunités d'apprentissage et de développement. J'ai l'esprit d'équipe et je suis toujours à la recherche de moyens d'améliorer mes compétences et mes connaissances.",
            "highschooldesc": "Mathématiques et Physique",
            "bsc": "Bachelor en Systèmes de Communication",
            "bscdesc": "Informatique, Mathématiques et Physique"
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