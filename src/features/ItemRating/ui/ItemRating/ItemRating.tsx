import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { useGetItemRating, useRateItem } from '../../api/ItemRating';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ItemRatingProps {
    className?: string;
    itemId?: string;
}

const ItemRating = memo((props: ItemRatingProps) => {
    const { className, itemId } = props;
    const { t } = useTranslation('itemDetails');
    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useGetItemRating({
        itemId,
        userId: userData?.id ?? '',
    });
    const [rateItemMutation] = useRateItem();
    const handleRateItem = useCallback(
        (starsCount: number, feedback?: string) => {
            rateItemMutation({
                userId: userData?.id ?? '',
                itemId,
                rate: starsCount,
                feedback,
            });
        },
        [itemId, rateItemMutation, userData?.id],
    );

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRateItem(starsCount, feedback);
        },
        [handleRateItem],
    );

    const onCancel = useCallback(
        (starsCount: number) => {
            handleRateItem(starsCount);
        },
        [handleRateItem],
    );

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            className={className}
            title={t('Rate the item')}
            feedbackTitle={t('Leave your feedback about the item')}
            hasFeedback
        />
    );
});

export default ItemRating;
