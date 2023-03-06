import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useItemRecommendationsList } from '../../api/itemLikeListApi';
import { ItemList } from '@/entities/Item';
import { Text } from '@/shared/ui/Text';

interface ItemLikeListProps {
    className?: string;
    likesItem: string;
}

export const ItemLikeList = memo((props: ItemLikeListProps) => {
    const { className, likesItem } = props;
    const { t } = useTranslation('itemsLike');
    const {
        isError,
        isLoading,
        data: items,
    } = useItemRecommendationsList(likesItem);

    if (isError) {
        return <Text text={t('an error occurred while downloading items ')} />;
    }

    return (
        <ItemList isLoading={isLoading} items={items} className={className} />
    );
});
