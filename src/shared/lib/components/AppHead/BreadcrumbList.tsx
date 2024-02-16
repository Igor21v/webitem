import { memo } from 'react';

export interface breadcrmbElementType {
    path: string;
    name: string;
}

interface BreadcrumbListProps {
    elements: breadcrmbElementType[];
    host: string;
}

export const BreadcrumbList = memo((props: BreadcrumbListProps) => {
    const { elements, host } = props;
    const itemListElement = [
        {
            '@type': 'ListItem',
            position: 1,
            item: {
                '@id': host,
                name: 'webitem.ru',
            },
        },
    ];
    elements.forEach((el, index) => {
        itemListElement.push({
            '@type': 'ListItem',
            position: index + 2,
            item: {
                '@id': host + el.path,
                name: el.name,
            },
        });
    });
    const list = {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement,
    };

    return <script type="application/ld+json">{JSON.stringify(list)}</script>;
});
