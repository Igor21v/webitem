import { memo } from 'react';

interface SpriteImgProps {
    widthSource: number;
    heightSource: number;
    backgroundURL: string;
    offsetX?: number;
    offsetY?: number;
    zoom?: number;
}

export const SpriteImg = memo((props: SpriteImgProps) => {
    const {
        widthSource,
        heightSource,
        backgroundURL,
        offsetX = 0,
        offsetY = 0,
        zoom = 1,
    } = props;
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
