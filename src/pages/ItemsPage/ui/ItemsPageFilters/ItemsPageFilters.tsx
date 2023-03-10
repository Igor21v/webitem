import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ItemSortField, ItemTypes, ItemView } from '@/entities/Item';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Input } from '@/shared/ui/Input';
import { Card } from '@/shared/ui/Card';

import { SortOrder } from '@/shared/types';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import cls from './ItemsPageFilters.module.scss';
import { itemsPageActions } from '../../model/slice/ItemsPageSlice';
import {
    getItemsPageOrder,
    getItemsPageSearch,
    getItemsPageSort,
    getItemsPageView,
} from '../../model/selectors/itemsPageSelectors';
import { fetchItemsList } from '../../model/services/fetchItemsList/fetchItemsList';
import { ItemSortSelector } from '@/features/ItemSortSelector';
import { ItemViewSelector } from '@/features/ItemViewSelector';
import { useNonInitialEffect } from '@/shared/lib/hooks/useNonInitialEffect/useNonInitialEffect';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

interface ItemsPageFiltersProps {
    className?: string;
}

export const ItemsPageFilters = memo((props: ItemsPageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation('items');
    const dispatch = useAppDispatch();
    const view = useSelector(getItemsPageView);
    const sort = useSelector(getItemsPageSort);
    const order = useSelector(getItemsPageOrder);
    const search = useSelector(getItemsPageSearch);
    const { type } = useParams<{ type: ItemTypes }>();
    const fetchData = useCallback(() => {
        dispatch(fetchItemsList({ replace: true }));
    }, [dispatch]);
    const debouncedFetchData = useDebounce(fetchData, 500);
    const onChangeView = useCallback(
        (view: ItemView) => {
            dispatch(itemsPageActions.setView(view));
            dispatch(itemsPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );
    const onChangeSort = useCallback(
        (newSort: ItemSortField) => {
            dispatch(itemsPageActions.setSort(newSort));
            dispatch(itemsPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );
    const onChangeOrder = useCallback(
        (order: SortOrder) => {
            dispatch(itemsPageActions.setOrder(order));
            dispatch(itemsPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );
    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(itemsPageActions.setSearch(search));
            dispatch(itemsPageActions.setPage(1));
            debouncedFetchData();
        },
        [dispatch, debouncedFetchData],
    );
    useNonInitialEffect(() => {
        dispatch(itemsPageActions.setPage(1));
        dispatch(itemsPageActions.setType(type || 'all'));
        fetchData();
    }, [type]);

    return (
        <div className={classNames('', {}, [className])}>
            <div className={cls.sortWrapper}>
                <ItemSortSelector
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                    order={order}
                    sort={sort}
                />
                <ItemViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <HStack max justify="between" className={cls.search}>
                <Card max>
                    <Input
                        placeholder={t('Search')}
                        onChange={onChangeSearch}
                        value={search}
                    />
                </Card>
                <Card className={cls.type}>
                    <Text text={type} />
                </Card>
            </HStack>
        </div>
    );
});
