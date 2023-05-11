import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Text } from '@/shared/ui/Text';
import { ItemList } from '@/entities/Item';
import { getItems } from '../../model/slice/ItemsPageSlice';
import {
    getItemsPageError,
    getItemsPageHasMore,
    getItemsPageIsLoading,
    getItemsPageView,
} from '../../model/selectors/itemsPageSelectors';
import { fetchNextItemsPage } from '../../model/services/fetchNextItemsPage/fetchNextItemsPage';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

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
    const itemCount = hasNextPage ? items.length + 1 : items.length;
    const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;
    const isItemLoaded = (index) => !hasNextPage || index < items.length;
    const Item1 = ({ index, style }) => {
        let content;
        if (!isItemLoaded(index)) {
            content = 'Loading...';
        } else {
            content = items[index].name;
        }
        return <div style={style}>{content}</div>;
    };

    if (error) {
        return <Text text={t('an error occurred while downloading items ')} />;
    }

    return (
        <ItemList
            isLoading={isLoading}
            view={view}
            items={items}
            className={className}
        />
    );
});
