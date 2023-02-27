import { memo } from 'react';
import { AppImage, AppImageProps } from '../AppImage';

interface AnimateHoverProps extends AppImageProps {
    isHover: boolean;
    animateSrc?: string;
}

export const AnimateHover = memo((props: AnimateHoverProps) => {
    const { isHover, animateSrc, ...rest } = props;

    const notHoverImage = <AppImage {...rest} />;
    console.log(`Hovered ${isHover}`);
    if (!isHover || !animateSrc) {
        return notHoverImage;
    }

    return (
        <AppImage
            {...rest}
            src={animateSrc}
            fallback={notHoverImage}
            errorFallback={notHoverImage}
        />
    );
});
