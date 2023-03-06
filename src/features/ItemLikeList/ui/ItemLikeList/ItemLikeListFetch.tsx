import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useItemRecommendationsList } from '../../api/itemLikeListApi';
import { ItemList } from '@/entities/Item';
import { Text } from '@/shared/ui/Text';

interface ItemLikeListProps {
    className?: string;
    likeItems: string;
}

export const ItemLikeListFetch = memo((props: ItemLikeListProps) => {
    const { className, likeItems } = props;
    const { t } = useTranslation('itemsLike');
    const {
        isError,
        isLoading,
        data: items,
    } = useItemRecommendationsList(likeItems);

    if (isError) {
        return <Text text={t('an error occurred while downloading items ')} />;
    }

    return (
        <ItemList isLoading={isLoading} items={items} className={className} />
    );
});
