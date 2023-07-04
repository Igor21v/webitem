import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Country } from '../../model/types/country';
import { ListBox } from '@/shared/ui/Popups';
import { DropdownDirection } from '@/shared/types/ui';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
        direction = 'top right',
    } = props;
    const onChangeHandler = (value: string) => {
        onChange?.(value as Country);
    };
    const { t } = useTranslation();
    return (
        <ListBox
            className={className}
            onChange={onChangeHandler}
            value={value}
            defaultValue={t('Specify the country')}
            label={t('Specify the country')}
            items={options}
            readonly={readonly}
            direction={direction}
        />
    );
});
