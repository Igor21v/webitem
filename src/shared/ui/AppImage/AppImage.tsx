import {
    ImgHTMLAttributes,
    memo,
    ReactElement,
    useLayoutEffect,
    useState,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppImage.module.scss';
import image from '@/shared/assets/tests/3D Card.png';

export interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
    round?: boolean;
}

export const AppImage = memo((props: AppImageProps) => {
    const {
        className,
        src,
        alt = 'image',
        fallback,
        errorFallback,
        round,
        ...otherProps
    } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    let source: string | undefined;
    if (__PROJECT__ === 'storybook') {
        source = image;
    } else {
        source = src;
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
    }, [source, src]);

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }

    return (
        <img
            className={classNames('', { [cls.round]: round }, [className])}
            src={source}
            alt={alt}
            {...otherProps}
        />
    );
});
