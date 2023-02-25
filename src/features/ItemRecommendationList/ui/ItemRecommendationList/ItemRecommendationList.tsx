import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { ItemList } from '@/entities/Item';
import { Text, TextSize } from '@/shared/ui/Text';
import { useItemRecommendationsList } from '../../api/itemRecommendationsApi';
import cls from './ItemRecommendationList.module.scss';
import { ARTICLE_SMALL_WIDTH } from '@/shared/const/dimensions';

interface ItemRecommendationListProps {
    className?: string;
    pageWidth: number;
}

export const ItemRecommendationList = memo(
    (props: ItemRecommendationListProps) => {
        const { className, pageWidth } = props;
        const { t } = useTranslation('itemDetails');
        const limit = Math.round(pageWidth / ARTICLE_SMALL_WIDTH);
        const {
            isLoading,
            data: items,
            error,
        } = useItemRecommendationsList(limit);
        if (isLoading || error || !items) {
            return null;
        }
        return (
            <VStack
                gap="8"
                className={classNames(cls.ItemRecommendationList, {}, [
                    className,
                ])}
                data-testid="ItemRecommendationList"
            >
                <Text size={TextSize.L} title={t('We recommend')} />
                <ItemList
                    items={items}
                    target="_blank"
                    className={cls.itemList}
                />
            </VStack>
        );
    },
);
