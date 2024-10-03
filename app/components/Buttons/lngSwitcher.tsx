'use client';

import { useTranslation } from 'react-i18next';
import React, {ReactNode} from "react";

import styles from './lngSwitcher.module.scss';

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
        <div className={styles.lngButtonsContainer}>
            <button onClick={() => changeLanguage("en")} className={styles.lngButton} >EN</button>
            <button onClick={() => changeLanguage("fr")} className={styles.lngButton} >FR</button>
            {children}
        </div>
    );
}

export default LanguageSwitcher;