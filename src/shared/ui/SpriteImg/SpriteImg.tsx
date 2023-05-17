import { memo, ReactElement, useLayoutEffect, useState } from 'react';

interface SpriteImgProps {
    widthSource: number;
    heightSource: number;
    backgroundURL: string;
    offsetX?: number;
    offsetY?: number;
    zoom?: number;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
}

export const SpriteImg = memo((props: SpriteImgProps) => {
    const {
        widthSource,
        heightSource,
        backgroundURL,
        offsetX = 0,
        offsetY = 0,
        zoom = 1,
        fallback,
        errorFallback,
    } = props;

    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = backgroundURL;
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
    }, []);

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }

    return (
        <div
            style={{
                width: `${widthSource}px`,
                height: `${heightSource}px`,
                background: `url("${backgroundURL}")`,
                backgroundPosition: `-${offsetX}px -${offsetY}px`,
                zoom,
            }}
        />
    );
});
