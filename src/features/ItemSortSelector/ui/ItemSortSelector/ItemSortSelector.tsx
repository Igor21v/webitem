import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/Select';
import { SortOrder } from '@/shared/types';
import cls from './ItemSortSelector.module.scss';
import { ItemSortField } from '@/entities/Item';
import { TextSpan } from '@/shared/ui/TextSpan';

interface ItemSortSelectorProps {
    className?: string;
    sort: ItemSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ItemSortField) => void;
}

export const ItemSortSelector = memo((props: ItemSortSelectorProps) => {
    const { className, sort, order, onChangeOrder, onChangeSort } = props;
    const { t } = useTranslation('items');

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('ascending'),
            },
            {
                value: 'desc',
                content: t('descending'),
            },
        ],
        [t],
    );

    const sortFieldOptions = useMemo<SelectOption<ItemSortField>[]>(
        () => [
            {
                value: ItemSortField.CREATED,
                content: t('date of creation'),
            },
            {
                value: ItemSortField.TITLE,
                content: t('title'),
            },
            {
                value: ItemSortField.VIEWS,
                content: t('views'),
            },
        ],
        [t],
    );

    return (
        <div className={classNames(cls.ItemSortSelector, {}, [className])}>
            <TextSpan text={t('Sort')} theme="bright" className={cls.text} />
            <Select<ItemSortField>
                options={sortFieldOptions}
                label={t('by')}
                value={sort}
                onChange={onChangeSort}
                className={cls.sort}
            />
            <Select
                options={orderOptions}
                label={t('by')}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    );
});
