import {
    ImgHTMLAttributes,
    memo,
    ReactElement,
    useLayoutEffect,
    useState,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppImage.module.scss';

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

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }

    return (
        <img
            className={classNames('', { [cls.round]: round }, [className])}
            src={src}
            alt={alt}
            {...otherProps}
        />
    );
});
