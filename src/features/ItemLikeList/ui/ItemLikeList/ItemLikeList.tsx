import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text';
import { ItemLikeListFetch } from './ItemLikeListFetch';
import { LOCAL_STORAGE_ITEMS_LIKE } from '@/shared/const/localstorage';

interface ItemLikeListProps {
    className?: string;
}

export const ItemLikeList = memo((props: ItemLikeListProps) => {
    const { className } = props;
    const { t } = useTranslation('itemsLike');
    const likeItems = localStorage.getItem(LOCAL_STORAGE_ITEMS_LIKE);

    if (!likeItems || likeItems === '{}') {
        return (
            <Text
                text={t('Not favourite elements')}
                size={TextSize.L}
                align={TextAlign.CENTER}
            />
        );
    }

    return <ItemLikeListFetch likeItems={likeItems} className={className} />;
});
