import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { Text } from '@/shared/ui/Text';
import { getItems } from '../../model/slice/ItemsPageSlice';
import {
    getItemsPageError,
    getItemsPageHasMore,
    getItemsPageIsLoading,
    getItemsPageView,
} from '../../model/selectors/itemsPageSelectors';
import { ItemListVirtWrapp } from '@/entities/Item';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchNextItemsPage } from '../../model/services/fetchNextItemsPage/fetchNextItemsPage';
import { ItemsPageFilters } from '../ItemsPageFilters/ItemsPageFilters';
import { getPageDimensions } from '@/features/UI';

interface ItemInfineteListProps {
    className?: string;
}

export const ItemInfiniteList = memo((props: ItemInfineteListProps) => {
    const { className } = props;
    const { t } = useTranslation('items');
    const items = useSelector(getItems.selectAll);
    const isLoading = useSelector(getItemsPageIsLoading);
    const view = useSelector(getItemsPageView);
    const error = useSelector(getItemsPageError);
    const dispatch = useAppDispatch();
    const hasMore = useSelector(getItemsPageHasMore);
    const [searchParams] = useSearchParams();
    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextItemsPage(searchParams));
    }, [dispatch, searchParams]);
    const { width: pageWidth } = useSelector(getPageDimensions);

    if (error) {
        return <Text text={t('an error occurred while downloading items ')} />;
    }

    return (
        <ItemListVirtWrapp
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
