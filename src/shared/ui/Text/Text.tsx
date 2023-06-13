import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
    SUCCESS = 'success',
    BRIGHT = 'bright',
    INVERTED_BRIGHT = 'inverted_bright',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'p';

export interface TextProps {
    className?: string;
    classNameTitle?: string;
    classNameText?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
    HeaderTag?: HeaderTagType;
    italic?: boolean;
    minLineHeight?: boolean;
    'data-testid'?: string;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
        HeaderTag = 'p',
        italic,
        classNameTitle,
        classNameText,
        minLineHeight,
        'data-testid': dataTestId = 'Text',
    } = props;

    const additional = [className, cls[theme], cls[align], cls[size]];
    const mods = {
        [cls.italic]: italic,
        [cls.minLineHeight]: minLineHeight,
    };
    return (
        <div className={classNames('', mods, additional)}>
            {title && (
                <HeaderTag
                    className={classNames(cls.title, {}, [classNameTitle])}
                    data-testid={`${dataTestId}.Header`}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p
                    className={classNames(cls.text, {}, [classNameText])}
                    data-testid={`${dataTestId}.Paragraph`}
                >
                    {text}
                </p>
            )}
        </div>
    );
});
