import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
    getItemDetailsData,
    ItemDetails,
    itemDetailsReducer,
} from '@/entities/Item';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';
import { ItemRecommendationList } from '@/features/ItemRecommendationList';
import { ItemDetailsPageHeader } from '../ItemDetailsPageHeader/ItemDetailsPageHeader';
import cls from './ItemDetailsPage.module.scss';
import { itemDetailsPageReducer } from '../../model/slices';
import { getPageDimensions } from '@/features/UI';
import { useResizeWindow } from '@/shared/lib/hooks/useResizeWindow/useResizeWindow';
import { AppHead } from '@/shared/ui/AppHead';

interface ItemDetailsPageProps {
    className?: string;
}

const ItemDetailsPage = (props: ItemDetailsPageProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('itemDetails');
    const reducers: ReducersList = {
        itemDetailsPage: itemDetailsPageReducer,
        itemDetails: itemDetailsReducer,
    };
    const { width: pageWidth } = useSelector(getPageDimensions);
    const item = useSelector(getItemDetailsData);
    const { isScreenXl } = useResizeWindow();

    return (
        <>
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <Page
                    className={classNames(cls.ItemDetailsPage, {}, [className])}
                >
                    <VStack gap="16" max>
                        <ItemDetailsPageHeader />
                        <ItemDetails id={id} />
                        {/* <ItemRating itemId={id} /> */}
                        {item?.type && isScreenXl && (
                            <ItemRecommendationList
                                pageWidth={pageWidth}
                                type={item?.type}
                            />
                        )}
                    </VStack>
                </Page>
            </DynamicModuleLoader>
            <AppHead
                title={`${item?.title} ${t(
                    'в галерее веб компонентов webitem',
                )}`}
                description={item?.description}
            />
        </>
    );
};

export default memo(ItemDetailsPage);
