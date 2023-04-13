import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';
import { fetchItemById } from '../../model/services/fetchItemById/fetchItemById';
import {
    getItemDetailsData,
    getItemDetailsError,
    getItemDetailsFulfilled,
    getItemDetailsIsLoading,
} from '../../model/selectors/itemDetails';
import cls from './ItemDetails.module.scss';
import { ItemDetailsSkeleton } from './ItemDetailsSkeleton';
import { ItemDetails } from './ItemDetails';

interface ItemDetailsProps {
    className?: string;
    id?: string;
}

export const ItemDetailsWrapper = memo((props: ItemDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchItemById(id));
        }
    }, [dispatch, id]);
    const isLoading = useSelector(getItemDetailsIsLoading);
    const error = useSelector(getItemDetailsError);
    const item = useSelector(getItemDetailsData);
    const fulfilled = useSelector(getItemDetailsFulfilled);
    let content = null;
    if (isLoading) {
        content = <ItemDetailsSkeleton />;
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t('An error occurred while downloading')}
                theme={TextTheme.ERROR}
            />
        );
    } else if (fulfilled) {
        content = <ItemDetails item={item} />;
    }
    return (
        <VStack
            gap="16"
            max
            className={classNames(cls.ItemDetails, {}, [className])}
        >
            {content}
        </VStack>
    );
});
