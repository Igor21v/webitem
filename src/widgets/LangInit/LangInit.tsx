import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export const LangInit = () => {
    const { i18n } = useTranslation();
    const url = new URL(String(document.location));
    const langPath = url.pathname.slice(1, 3);

    useEffect(() => {
        if (langPath === 'en') {
            if (i18n.language !== 'en') {
                i18n.changeLanguage('en');
            }
        } else if (i18n.language !== 'ru') {
            i18n.changeLanguage('ru');
        }
    }, [i18n, langPath]);
    return null;
};
