import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import projects from "./public/assets/projects.json";

const resources = {
    fr : {
        translation: {
        projects: projects.projects.fr
        }
    },
    en : {
        translation: {
        projects: projects.projects.en
        }
    }
};

i18n.use(initReactI18next).init({
resources,
    lng : "fr", // default language
    fallbackLng : "fr",
    interpolation: {
        escapeValue : false
    }
});



export default i18n