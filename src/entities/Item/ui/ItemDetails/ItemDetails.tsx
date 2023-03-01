import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text, TextAlign, TextSize, TextTheme } from '@/shared/ui/Text';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import { Icon } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { itemDetailsReducer } from '../../model/slice/itemDetailsSlice';
import { fetchItemById } from '../../model/services/fetchItemById/fetchItemById';
import {
    getItemDetailsData,
    getItemDetailsError,
    getItemDetailsIsLoading,
} from '../../model/selectors/itemDetails';
import cls from './ItemDetails.module.scss';
import { AppImage } from '@/shared/ui/AppImage';
import ItemIcon from '@/shared/assets/icons/item.svg';
import { CodeEditor } from '@/entities/CodeEditor';

interface ItemDetailsProps {
    className?: string;
    id?: string;
}

export const ItemDetails = memo((props: ItemDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const reducers = {
        itemDetails: itemDetailsReducer,
    };
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchItemById(id));
        }
    }, [dispatch, id]);
    const isLoading = useSelector(getItemDetailsIsLoading);
    const error = useSelector(getItemDetailsError);
    const item = useSelector(getItemDetailsData);
    let content;
    if (isLoading) {
        content = (
            <>
                <Skeleton
                    className={cls.itemImage}
                    width={200}
                    height={200}
                    border="50%"
                />
                <Skeleton width={300} height={32} />
                <Skeleton width={600} height={24} />
                <Skeleton width={200} height={18} />
                <Skeleton width={200} height={18} />
                <VStack max>
                    <HStack justify="between" align="end" max>
                        <HStack gap="8">
                            <Skeleton width={60} height={56} border="20%" />
                            <Skeleton width={60} height={56} border="20%" />
                            <Skeleton width={60} height={56} border="20%" />
                        </HStack>
                        <Skeleton width={200} height={24} />
                    </HStack>
                    <Skeleton width="100%" height={400} />
                </VStack>
            </>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t('An error occurred while downloading')}
                theme={TextTheme.ERROR}
            />
        );
    } else {
        content = (
            <>
                <HStack justify="center" max>
                    <AppImage
                        height={200}
                        width={200}
                        round
                        src={item?.img}
                        className={cls.itemImage}
                        fallback={
                            <Skeleton
                                className={cls.itemImage}
                                width={200}
                                height={200}
                                border="50%"
                            />
                        }
                        errorFallback={
                            <Icon
                                Svg={ItemIcon}
                                width={200}
                                height={200}
                                opacity={0.7}
                            />
                        }
                    />
                </HStack>
                <VStack gap="4" data-testid="ItemDetails.Info">
                    <Text
                        title={item?.title}
                        text={item?.description}
                        size={TextSize.L}
                    />
                    <HStack gap="8">
                        <Icon Svg={EyeIcon} />
                        <Text text={String(item?.views)} />
                    </HStack>
                    <HStack gap="8">
                        <Icon Svg={CalendarIcon} />
                        <Text text={item?.createdAt} />
                    </HStack>
                </VStack>
                <CodeEditor codes={item?.codes} />
            </>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack
                gap="16"
                max
                className={classNames(cls.ItemDetails, {}, [className])}
            >
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
