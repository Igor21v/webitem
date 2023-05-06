import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { ItemList, ItemTypes } from '@/entities/Item';
import { Text, TextSize } from '@/shared/ui/Text';
import { useItemRecommendationsList } from '../../api/itemRecommendationsApi';
import cls from './ItemRecommendationList.module.scss';
import { ITEM_SMALL_WIDTH } from '@/shared/const/dimensions';

interface ItemRecommendationListProps {
    className?: string;
    pageWidth: number;
    type: ItemTypes;
}

export const ItemRecommendationList = memo(
    (props: ItemRecommendationListProps) => {
        const { className, pageWidth, type } = props;
        const { t } = useTranslation('itemDetails');
        const limit = Math.floor((pageWidth - 65) / (ITEM_SMALL_WIDTH + 20));
        const {
            isLoading,
            data: items,
            error,
        } = useItemRecommendationsList({ limit, type });
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
                    classNameCard={cls.card}
                />
            </VStack>
        );
    },
);
