import { memo, useMemo } from 'react';
import { AppImage, AppImageProps } from '../AppImage';
import { Loader } from '../Loader';
import cls from './AnimateHover.module.scss';

interface AnimateHoverProps extends AppImageProps {
    isHover: boolean;
    animateSrc?: string;
}

export const AnimateHover = memo((props: AnimateHoverProps) => {
    const { isHover, animateSrc, ...rest } = props;
    const notHoverImage = useMemo(() => <AppImage {...rest} />, [rest]);
    const imageLoading = (
        <div>
            {notHoverImage}
            <Loader className={cls.loader} />
        </div>
    );
    console.log(`hovered ${isHover}`);

    if (!isHover || !animateSrc) {
        return notHoverImage;
    }
    return (
        <>
            <AppImage
                {...rest}
                src={animateSrc}
                fallback={<div>...</div>}
                errorFallback={notHoverImage}
            />
            {console.log('render an')}
        </>
    );
});
