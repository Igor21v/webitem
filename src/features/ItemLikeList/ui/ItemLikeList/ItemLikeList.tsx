import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text';
import { ItemLikeListFetch } from './ItemLikeListFetch';
import { LOCAL_STORAGE_ITEMS_LIKE } from '@/shared/const/localstorage';
import { Icon } from '@/shared/ui/Icon';
import FavouriteIcon from '@/shared/assets/icons/like.svg';

export const ItemLikeList = memo(() => {
    const { t } = useTranslation('itemsLike');
    const likeItems = localStorage.getItem(LOCAL_STORAGE_ITEMS_LIKE);

    if (!likeItems || likeItems === '{}') {
        return (
            <>
                <Text
                    text={t('Not favourite elements')}
                    size={TextSize.L}
                    align={TextAlign.CENTER}
                />
                <Icon width={21} Svg={FavouriteIcon} />
            </>
        );
    }

    return <ItemLikeListFetch likeItems={likeItems} />;
});
