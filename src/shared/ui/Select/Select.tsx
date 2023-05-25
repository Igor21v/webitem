import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { genericMemo } from '@/shared/lib/components/GenericMemo/GenericMemo';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
    validateError?: boolean;
    notSelectedEnable?: boolean;
    column?: boolean;
}

const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly,
        validateError,
        notSelectedEnable,
        column,
    } = props;
    const { t } = useTranslation();
    const optionsList = options?.map((opt) => (
        <option className={cls.option} value={opt.value} key={opt.value}>
            {opt.content}
        </option>
    ));

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    return (
        <p
            className={classNames(cls.Wrapper, { [cls.column]: column }, [
                className,
                'scroll-thin',
            ])}
        >
            <label htmlFor={label}>
                {label && <span className={cls.label}>{`${label}>`}</span>}
            </label>
            <select
                disabled={readonly}
                className={classNames(
                    cls.select,
                    { [cls.validateError]: validateError },
                    ['scroll-thin'],
                )}
                value={value}
                onChange={onChangeHandler}
                id={label}
            >
                {notSelectedEnable && (
                    <option className={cls.option} value="not selected">
                        {t('not selected')}
                    </option>
                )}
                {optionsList}
            </select>
        </p>
    );
};

const SelectMemo = genericMemo(Select);
export { SelectMemo as Select };
