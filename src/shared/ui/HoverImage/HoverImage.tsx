import { memo, useLayoutEffect, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImageProps } from '../AppImage';
import cls from './HoverImage.module.scss';
import { Loader } from '../Loader';

interface HoverImageProps extends AppImageProps {
    isHover: boolean;
    animateSrc?: string;
}

export const HoverImage = memo((props: HoverImageProps) => {
    const {
        isHover,
        animateSrc,
        className,
        src,
        alt = 'image',
        fallback,
        errorFallback,
        round,
        ...otherProps
    } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingAnimate, setIsLoadingAnimate] = useState(false);
    const [hasErrorAnimate, setHasErrorAnimate] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [animateLoaded, setAnimateLoaded] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
    }, [src]);

    if (
        isHover &&
        animateSrc &&
        !isLoadingAnimate &&
        !hasErrorAnimate &&
        !animateLoaded
    ) {
        setIsLoadingAnimate(true);
        const imgAnim = new Image();
        imgAnim.src = animateSrc;
        imgAnim.onload = () => {
            setIsLoadingAnimate(false);
            setAnimateLoaded(true);
        };
        imgAnim.onerror = () => {
            setIsLoadingAnimate(false);
            setHasErrorAnimate(true);
        };
    }

    if (!isHover && animateLoaded) {
        setAnimateLoaded(false);
    }

    const staticImg = (
        <img
            className={classNames('', { [cls.round]: round }, [className])}
            src={src}
            alt={alt}
            {...otherProps}
        />
    );

    if (isLoadingAnimate) {
        return (
            <>
                {staticImg}
                <Loader className={cls.loader} />
            </>
        );
    }

    if (animateLoaded && isHover) {
        return (
            <img
                className={classNames('', { [cls.round]: round }, [className])}
                src={animateSrc}
                alt={alt}
                {...otherProps}
            />
        );
    }

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }

    return staticImg;
});
