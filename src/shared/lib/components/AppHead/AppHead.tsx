import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Portal } from '../../../ui/Portal';

interface AppHeadProps {
    title?: string;
    description?: string;
    keywords?: string;
    noFollow?: boolean;
}

export const AppHead = memo((props: AppHeadProps) => {
    const { title, description, keywords, noFollow } = props;
    let { pathname } = useLocation();
    const { i18n } = useTranslation();
    if (i18n.language === 'en') {
        pathname = pathname.slice(3);
    }
    const fullPathRu = `https://webitem.ru${pathname}`;
    const fullPathEn = `https://webitem.ru/en${pathname}`;
    return (
        <Portal element={document.head}>
            <title>{title}</title>
            <link rel="alternate" hrefLang="ru" href={fullPathRu} />
            <link rel="alternate" hrefLang="en" href={fullPathEn} />
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            {noFollow && <meta name="robots" content="nofollow" />}
        </Portal>
    );
});
