import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useItemRecommendationsList } from '../../api/itemLikeListApi';
import { ItemList, ItemView } from '@/entities/Item';
import { Text } from '@/shared/ui/Text';
import cls from './ItemLikeList.module.scss';

interface ItemLikeListProps {
    likeItems: string;
}

export const ItemLikeListFetch = memo((props: ItemLikeListProps) => {
    const { likeItems } = props;
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
        <ItemList
            isLoading={isLoading}
            items={items}
            className={cls.itemLikeList}
            view={ItemView.BIG}
        />
    );
});
