import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Text } from '@/shared/ui/Text';
import { getItems } from '../../model/slice/ItemsPageSlice';
import {
    getItemsPageError,
    getItemsPageIsLoading,
    getItemsPageView,
} from '../../model/selectors/itemsPageSelectors';
import { ItemList } from '@/entities/Item';

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
