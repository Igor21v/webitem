import React, { InputHTMLAttributes, useRef } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface InputProps<T extends string | number | undefined>
    extends HTMLInputProps {
    className?: string;
    value?: T;
    onChange?: (value: T) => void;
    autofocus?: boolean;
    readOnly?: boolean;
    validateError?: boolean;
}
export const Input = <T extends number | string | undefined>(
    props: InputProps<T>,
) => {
    const {
        className,
        value,
        type = 'text',
        placeholder,
        onChange,
        autoFocus,
        readOnly,
        validateError,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);
    const canEdit = !readOnly;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (type === 'text') {
            onChange?.(e.target.value as T);
        } else if (type === 'number') {
            onChange?.(Number(e.target.value) as T);
        }
    };

    const mods: Mods = {
        [cls.readOnly]: readOnly,
        [cls.canEdit]: canEdit,
        [cls.validateError]: validateError,
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
};
