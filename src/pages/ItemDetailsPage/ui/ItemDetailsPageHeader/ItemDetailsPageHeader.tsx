import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { getItemDetailsData } from '@/entities/Item';
import { HStack } from '@/shared/ui/Stack';
import { getRoute, langType } from '@/shared/const/router';
import { getUserAuthData } from '@/entities/User';

interface ItemDetailsPageHeaderProps {
    className?: string;
}

export const ItemDetailsPageHeader = memo(
    (props: ItemDetailsPageHeaderProps) => {
        const { className } = props;
        const { t, i18n } = useTranslation('itemDetails');
        const navigate = useNavigate();
        const authData = useSelector(getUserAuthData);
        const item = useSelector(getItemDetailsData);
        const onBackToList = useCallback(() => {
            navigate(-1);
        }, [navigate]);
        const onEditItem = useCallback(() => {
            if (item) {
                navigate(
                    getRoute('item_edit', i18n.language as langType, item.id),
                );
            }
        }, [i18n.language, item, navigate]);
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
                    {authData && (
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
