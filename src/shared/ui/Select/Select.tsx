import { ChangeEvent, useMemo } from 'react';
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
}

const Select = <T extends string>(props: SelectProps<T>) => {
    const { className, label, options, value, onChange, readonly } = props;
    const optionsList = useMemo(() => {
        if (!value) {
            options?.unshift({
                value: '' as T,
                content: 'not selected',
            });
        } else if (options?.[0].content === 'not selected') {
            options?.shift();
        }
        return options?.map((opt) => (
            <option className={cls.option} value={opt.value} key={opt.value}>
                {opt.content}
            </option>
        ));
    }, [options, value]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    return (
        <div
            className={classNames(cls.Wrapper, {}, [className, 'scroll-thin'])}
        >
            <p>
                <label htmlFor={label}>
                    {label && <span className={cls.label}>{`${label}>`}</span>}
                </label>
                <select
                    disabled={readonly}
                    className={cls.select}
                    value={value}
                    onChange={onChangeHandler}
                    id={label}
                >
                    {optionsList}
                </select>
            </p>
        </div>
    );
};

const SelectMemo = genericMemo(Select);
export { SelectMemo as Select };
