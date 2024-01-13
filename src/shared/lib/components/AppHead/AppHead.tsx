import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { Portal } from '../../../ui/Portal';

interface AppHeadProps {
    title?: string;
    description?: string;
    keywords?: string;
}

export const AppHead = memo((props: AppHeadProps) => {
    const { title, description, keywords } = props;
    const { pathname } = useLocation();
    const fullPathRu = `https://webitem.ru${pathname}`;
    const fullPathEn = `https://webitem.ru/en${pathname}`;
    return (
        <Portal element={document.head}>
            <title>{title}</title>
            <link rel="alternate" hrefLang="ru" href={fullPathRu} />
            <link rel="alternate" hrefLang="en" href={fullPathEn} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Portal>
    );
});
