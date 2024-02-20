import { memo } from 'react';

export interface OpenGraphType {
    title: string;
    description: string;
    image: string;
    url: string;
}

export const OpenGraph = memo((props: OpenGraphType) => {
    const { title, description, image, url } = props;

    return (
        <>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
        </>
    );
});
