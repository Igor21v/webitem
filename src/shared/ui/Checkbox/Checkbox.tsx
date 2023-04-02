import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Checkbox.module.scss';

interface CheckboxProps {
    className?: string;
    label?: string;
    onChange: (value: boolean) => void;
    checked?: boolean;
}

export const Checkbox = memo((props: CheckboxProps) => {
    const { className, checked, label, onChange } = props;
    const { t } = useTranslation();
    const handleChange = () => {
        onChange(!checked);
    };
    return (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label className={classNames(cls.Checkbox, {}, [className])}>
            <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                className={cls.input}
            />
            {label}
        </label>
    );
});
