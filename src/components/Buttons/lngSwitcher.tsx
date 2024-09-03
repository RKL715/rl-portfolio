import { useTranslation } from 'react-i18next';
import {ReactNode} from "react";

interface LanguageSwitcherProps {
    children: ReactNode;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({children}) => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        console.log(`Changing language to: ${lng}`);
        i18n.changeLanguage(lng);
    };

    return (
        <div className="lng-buttons-container">
            <button onClick={() => changeLanguage("en")} className="lng-button" >EN</button>
            <button onClick={() => changeLanguage("fr")} className="lng-button" >FR</button>
            {children}
        </div>
    );
}

export default LanguageSwitcher;