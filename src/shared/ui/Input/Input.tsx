import React, { InputHTMLAttributes, useRef } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface InputProps<T extends string | number | undefined>
    extends HTMLInputProps {
    className?: string;
    classNameWrapper?: string;
    value?: T;
    onChange?: (value: T) => void;
    autoFocus?: boolean;
    readOnly?: boolean;
    validateError?: boolean;
    focusIsSet?: boolean;
    focusHandler?: (value: boolean) => void;
}
export const Input = <T extends number | string | undefined>(
    props: InputProps<T>,
) => {
    const {
        className,
        classNameWrapper,
        value,
        type = 'text',
        placeholder,
        onChange,
        autoFocus,
        readOnly,
        validateError,
        focusIsSet,
        focusHandler,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);
    const canEdit = !readOnly;
    useInitialEffect(() => {
        if (focusIsSet) {
            ref.current?.focus();
        }
    });
    const onBlur = () => {
        focusHandler?.(false);
    };
    const onFocus = () => {
        focusHandler?.(true);
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (type === 'text' || type === 'password') {
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
        <div className={classNames(cls.wrapper, {}, [classNameWrapper])}>
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
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </div>
    );
};
