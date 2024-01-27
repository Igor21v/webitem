import { memo, useMemo } from 'react';
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
import { ItemDetailsPageHeader } from '../ItemDetailsPageHeader/ItemDetailsPageHeader';
import cls from './ItemDetailsPage.module.scss';
import { itemDetailsPageReducer } from '../../model/slices';
import { AppHead } from '@/shared/lib/components/AppHead';
import { useYandexMetrikaHit } from '@/shared/lib/hooks/useYandexMetrika/useYandexMetrika';

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
    const item = useSelector(getItemDetailsData);
    useYandexMetrikaHit(id);
    const title = useMemo(() => {
        if (item) return `${item?.title} ${t('in gallery')}`;
        return t('Loading');
    }, [item, t]);

    const description = item?.description
        ? `${item.description} ${t('description')}`
        : t('description');

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
                        {/* {item?.type && isScreenXl && (
                            <ItemRecommendationList
                                pageWidth={pageWidth}
                                type={item?.type}
                            />
                        )} */}
                    </VStack>
                </Page>
            </DynamicModuleLoader>
            <AppHead title={title} description={description} />
        </>
    );
};

export default memo(ItemDetailsPage);
