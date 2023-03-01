import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { getItemDetailsData } from '@/entities/Item';
import { HStack } from '@/shared/ui/Stack';
import { getRouteItemEdit, getRouteItems } from '@/shared/const/router';
import { getCanEditItem } from '../../model/selectors/item';

interface ItemDetailsPageHeaderProps {
    className?: string;
}

export const ItemDetailsPageHeader = memo(
    (props: ItemDetailsPageHeaderProps) => {
        const { className } = props;
        const { t } = useTranslation('itemDetails');
        const navigate = useNavigate();
        const canEdit = useSelector(getCanEditItem);
        const item = useSelector(getItemDetailsData);
        const onBackToList = useCallback(() => {
            navigate(getRouteItems('all'));
        }, [navigate]);
        const onEditItem = useCallback(() => {
            if (item) {
                navigate(getRouteItemEdit(item.id));
            }
        }, [item, navigate]);
        return (
            <HStack
                max
                justify="between"
                className={classNames('', {}, [className])}
            >
                <>
                    <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                        {t('Back to the list')}
                    </Button>
                    {canEdit && (
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={onEditItem}
                        >
                            {t('Edit')}
                        </Button>
                    )}
                </>
            </HStack>
        );
    },
);
