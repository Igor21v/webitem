import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Portal } from '../../../ui/Portal';
import { breadcrmbElementType, BreadcrumbList } from './BreadcrumbList';
import { OpenGraph, OpenGraphType } from './OpenGraph';

interface AppHeadProps {
    title?: string;
    description?: string;
    keywords?: string;
    noFollow?: boolean;
    breadcrumbList?: breadcrmbElementType[];
    openGraph?: OpenGraphType;
}

export const AppHead = memo((props: AppHeadProps) => {
    const {
        title,
        description,
        keywords,
        noFollow,
        breadcrumbList,
        openGraph,
    } = props;
    let { pathname } = useLocation();
    const { i18n } = useTranslation();
    let host = 'https://webitem.ru';
    if (i18n.language === 'en') {
        pathname = pathname.slice(3);
        host += '/en';
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
            {breadcrumbList && (
                <BreadcrumbList elements={breadcrumbList} host={host} />
            )}
            {/* {openGraph && <OpenGraph {...openGraph} />} */}
        </Portal>
    );
});
