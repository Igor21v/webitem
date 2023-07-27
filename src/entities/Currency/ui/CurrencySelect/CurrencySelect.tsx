import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/Popups';
import { Currency } from '../../model/types/currency';
import { DropdownDirection } from '@/shared/types/ui';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
        direction = 'top right',
    } = props;
    const onChangeHandler = (value: string) => {
        onChange?.(value as Currency);
    };
    const { t } = useTranslation();
    return (
        <ListBox
            className={className}
            value={value}
            label={t('Specify the currency')}
            items={options}
            onChange={onChangeHandler}
            readonly={readonly}
            direction={direction}
        />
    );
});
