import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Text } from '@/shared/ui/Text';
import { getItems } from '../../model/slice/ItemsPageSlice';
import {
    getItemsPageError,
    getItemsPageHasMore,
    getItemsPageIsLoading,
    getItemsPageView,
} from '../../model/selectors/itemsPageSelectors';
import { fetchNextItemsPage } from '../../model/services/fetchNextItemsPage/fetchNextItemsPage';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ItemsPageFilters } from '../ItemsPageFilters/ItemsPageFilters';
import { getPageDimensions } from '@/features/UI';
import { ItemListInfiniteWrapp } from '@/entities/Item';

interface ItemInfineteListProps {
    className?: string;
}

export const ItemInfiniteList = memo((props: ItemInfineteListProps) => {
    const { className } = props;
    const { t } = useTranslation('items');
    const dispatch = useAppDispatch();
    const items = useSelector(getItems.selectAll);
    const isLoading = useSelector(getItemsPageIsLoading);
    const view = useSelector(getItemsPageView);
    const error = useSelector(getItemsPageError);
    const hasMore = useSelector(getItemsPageHasMore);
    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextItemsPage());
    }, [dispatch]);
    const { width: pageWidth } = useSelector(getPageDimensions);

    if (error) {
        return <Text text={t('an error occurred while downloading items ')} />;
    }

    return (
        <ItemListInfiniteWrapp
            isLoading={isLoading}
            view={view}
            items={items}
            className={className}
            loadNextPage={onLoadNextPart}
            hasNextPage={hasMore}
            filters={<ItemsPageFilters />}
            pageWidth={pageWidth}
        />
    );
});
