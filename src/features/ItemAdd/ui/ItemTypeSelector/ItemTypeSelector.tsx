import { useTranslation } from 'react-i18next';
import { memo, useMemo, useState } from 'react';
import { Select, SelectOption } from '@/shared/ui/Select';
import { ItemTypes } from '@/entities/Item';

interface ItemTypeSelectorProps {
    className?: string;
}

export const ItemTypeSelector = memo((props: ItemTypeSelectorProps) => {
    const { className } = props;
    const { t } = useTranslation('adminPanel');
    const [type, setType] = useState<ItemTypes>();
    const sortFieldOptions = useMemo<SelectOption<ItemTypes>[]>(
        () => [
            {
                value: 'alert',
                content: 'alert',
            },
            {
                value: 'avatar',
                content: 'avatar',
            },
            {
                value: 'badge',
                content: 'badge',
            },
        ],
        [],
    );
    return (
        <Select<ItemTypes>
            options={sortFieldOptions}
            label={t('Type')}
            value={type}
            onChange={setType}
        />
    );
});
