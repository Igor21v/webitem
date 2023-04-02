import React, { InputHTMLAttributes, memo, useRef } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: ((value: string) => void) | ((value: number) => void);
    autofocus?: boolean;
    readOnly?: boolean;
}
export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        type = 'text',
        placeholder,
        onChange,
        autoFocus,
        readOnly,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);
    const canEdit = !readOnly;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [cls.readOnly]: readOnly,
        [cls.canEdit]: canEdit,
    };
    return (
        <div className={cls.wrapper}>
            <label htmlFor={placeholder} className={cls.lable}>
                <div>{placeholder}</div>
                {'>'}
            </label>
            <input
                ref={ref}
                type={type}
                onChange={onChangeHandler}
                disabled={readOnly}
                value={value}
                {...otherProps}
                className={classNames(cls.input, mods, [className])}
                autoFocus={autoFocus}
                id={placeholder}
            />
        </div>
    );
});
