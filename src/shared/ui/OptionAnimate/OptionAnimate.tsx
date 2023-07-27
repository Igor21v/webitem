import { memo, ReactNode, useLayoutEffect, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImageProps } from '../AppImage';
import cls from './OptionAnimate.module.scss';
import { Loader } from '../Loader';
import { TEST_ANIMATION, TEST_IMAGE } from '@/shared/const/tests';

interface OptionAnimateProps extends AppImageProps {
    animateOn?: boolean;
    animateSrc?: string;
}

export const OptionAnimate = memo((props: OptionAnimateProps) => {
    const {
        animateOn,
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

    let source: string | undefined;
    let animateSource: string | undefined;
    if (__PROJECT__ === 'storybook') {
        source = TEST_IMAGE;
        animateSource = TEST_ANIMATION;
    } else {
        source = src;
        animateSource = animateSrc;
    }
    useLayoutEffect(() => {
        const img = new Image();
        img.src = source ?? '';
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
    }, [source]);

    if (
        animateOn &&
        animateSource &&
        !isLoadingAnimate &&
        !hasErrorAnimate &&
        !animateLoaded
    ) {
        setIsLoadingAnimate(true);
        const imgAnim = new Image();
        imgAnim.src = animateSource;
        imgAnim.onload = () => {
            setIsLoadingAnimate(false);
            setAnimateLoaded(true);
        };
        imgAnim.onerror = () => {
            setIsLoadingAnimate(false);
            setHasErrorAnimate(true);
        };
    }

    if (!animateOn && animateLoaded) {
        setAnimateLoaded(false);
    }

    const staticImg = (children?: ReactNode) => (
        <div
            className={classNames(cls.staticWrapper, { [cls.round]: round }, [
                className,
            ])}
        >
            <img
                className={classNames(
                    cls.staticWrapper,
                    { [cls.round]: round },
                    [className],
                )}
                src={source}
                alt={alt}
                {...otherProps}
            />
            {children}
        </div>
    );

    if (isLoadingAnimate) {
        return <>{staticImg(<Loader className={cls.loader} />)}</>;
    }

    if (animateLoaded && animateOn) {
        return (
            <img
                className={classNames('', { [cls.round]: round }, [className])}
                src={animateSource}
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

    return staticImg();
});
