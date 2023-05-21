import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './TextSpan.module.scss';

type TextTheme =
    | 'primary'
    | 'inverted'
    | 'error'
    | 'success'
    | 'bright'
    | 'inverted_bright';
type TextAlign = 'right' | 'left' | 'center';
type TextSize = 'size_s' | 'size_m' | 'size_l';

export interface TextSpanProps {
    className?: string;
    text: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
    italic?: boolean;
    underline?: boolean;
}

export const TextSpan = memo((props: TextSpanProps) => {
    const {
        className,
        text,
        theme = 'primary',
        align = 'left',
        size = 'size_m',
        italic,
        underline,
    } = props;

    const additional = [className, cls[theme], cls[align], cls[size]];
    const mods = {
        [cls.italic]: italic,
        [cls.underline]: underline,
    };
    return <span className={classNames('', mods, additional)}>{text}</span>;
});
