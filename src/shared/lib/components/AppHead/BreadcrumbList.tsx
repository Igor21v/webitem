import { memo } from 'react';

export interface breadcrmbElementType {
    path: string;
    name: string;
}

interface BreadcrumbListProps {
    elements: breadcrmbElementType[];
}

export const BreadcrumbList = memo((props: BreadcrumbListProps) => {
    const { elements } = props;
    const itemListElement = [
        {
            '@type': 'ListItem',
            position: 1,
            item: {
                '@id': 'https://mmetalloprom.ru/',
                name: 'Металлопром',
            },
        },
    ];
    elements.forEach((el, index) => {
        itemListElement.push({
            '@type': 'ListItem',
            position: index + 2,
            item: {
                '@id': el.path,
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
