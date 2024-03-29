import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { Select, SelectOption } from '@/shared/ui/Select';
import { itemList } from '../../../model/consts/ItemList';
import { ItemTypes } from '../../../model/consts/ItemTypes';

interface ItemTypeSelectorProps {
    className?: string;
    type: ItemTypes | undefined;
    setType: (type: ItemTypes) => void;
    validateError?: boolean;
}

export const ItemTypeSelector = memo((props: ItemTypeSelectorProps) => {
    const { className, type, setType, validateError } = props;
    const { t } = useTranslation('adminPanel');
    const sortFieldOptions = useMemo<SelectOption<ItemTypes>[]>(
        () =>
            itemList.map((item) => ({
                value: item.type,
                content: item.type,
            })),
        [],
    );
    return (
        <Select<ItemTypes>
            options={sortFieldOptions}
            label={t('Type')}
            value={type}
            onChange={setType}
            className={className}
            validateError={validateError}
            notSelectedEnable
            data-testid="ItemTypeSelector.Select"
        />
    );
});
