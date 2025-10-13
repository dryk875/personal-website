import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "pNF": "Page not found",
            "rHome": "Return to home page",
            "linkedin_link": "https://www.linkedin.com/in/damien-deryck/?locale=en",
            "CV": "cv-en.pdf",
            "position": "Computer Science student at ",
            "EPFLLink": "https://www.epfl.ch/en",
            "mEM": "my email",
            "mCV": "my cv",
            "mIN": "my linkedin",
            "mGH": "my github",
            "mPR": "my projects",
            "desReCHor": "Semester project for the practical object-oriented programming course, " +
                "involving the development of a Java application similar to the SBB one, " +
                "enabling you to search for public transport routes.",
            "desHashAudit": "Project developed in 24 hours during the Hedera x EPFL Blockchain Student Association hackathon. " +
                "It relies on decentralized identities (DIDs) to enable companies to transparently share their financial health, " +
                "while preserving the confidentiality of their data.",
            "desICMon": "Project carried out as part of the introductory programming course (Java), " +
                "consisting in developing a grid game inspired by the first opuses of the Pokemon license.",
        }
    },
    fr: {
        translation: {
            "pNF": "Page non trouvée",
            "rHome": "Retourner à la page d'accueil",
            "linkedin_link": "https://www.linkedin.com/in/damien-deryck/?locale=fr_FR",
            "CV": "cv-fr.pdf",
            "position": "Étudiant en informatique à l'",
            "EPFLLink": "https://www.epfl.ch/fr",
            "mEM": "mon email",
            "mCV": "mon cv",
            "mIN": "mon linkedin",
            "mGH": "mon github",
            "mPR": "mes projets",
            "desReCHor": "Projet semestriel réalisé dans le cadre du cours de pratique de la programmation orientée objet, " +
                "consistant à développer une application Java similaire à celle des CFF, " +
                "permettant de rechercher des itinéraires en transports en commun.",
            "desHashAudit": "Projet développé en 24 heures lors du hackathon Hedera x EPFL Blockchain Student Association. " +
                "Il repose sur les identités décentralisées (DID) pour permettre aux entreprises de partager de manière transparente leur santé financière, " +
                "tout en préservant la confidentialité de leurs données.",
            "desICMon": "Projet réalisé dans le cadre du cours d’introduction à la programmation (Java), " +
                "consistant à développer un jeu de grille inspiré des premiers opus de la licence Pokémon",
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