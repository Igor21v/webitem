import { memo, useCallback, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';
import { initItemsPage } from '../../model/services/initItemsPage/initItemsPage';
import { itemsPageReducer } from '../../model/slice/ItemsPageSlice';
import cls from './ItemsPage.module.scss';
import { ItemInfiniteList } from '../ItemInfineteList/ItemInfiniteList';
import { ItemTypes } from '@/entities/Item';
import { AppHead, breadcrmbElementType } from '@/shared/lib/components/AppHead';
import { useYandexMetrikaHit } from '@/shared/lib/hooks/useYandexMetrika/useYandexMetrika';
import { ItemsPageFilters } from '../ItemsPageFilters/ItemsPageFilters';
import { fetchNextItemsPage } from '../../model/services/fetchNextItemsPage/fetchNextItemsPage';

interface ItemsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    itemsPage: itemsPageReducer,
};

const ItemsPage = (props: ItemsPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    const { type } = useParams<{ type: ItemTypes }>();
    const { t: tType } = useTranslation('itemType');
    const { t } = useTranslation('items');
    useEffect(() => {
        dispatch(initItemsPage({ searchParams, type }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type]);
    useYandexMetrikaHit(type);
    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextItemsPage(searchParams));
    }, [dispatch, searchParams]);
    let breadcrumb: breadcrmbElementType[] | undefined;
    if (type) {
        breadcrumb = [
            {
                name: tType(type),
                path: `/items/${type}`,
            },
        ];
    }

    return (
        <>
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
                <Page
                    data-testid="ItemsPage"
                    className={classNames(cls.ItemsPage, {}, [className])}
                    onScrollEnd={onLoadNextPart}
                >
                    <ItemsPageFilters />
                    <ItemInfiniteList className={cls.list} />
                    <div />
                </Page>
            </DynamicModuleLoader>
            {type && (
                <AppHead
                    title={tType(type) + t('Items title')}
                    description={t(type) + t('Items description')}
                    keywords={t('Items keywords')}
                    breadcrumbList={breadcrumb}
                />
            )}
        </>
    );
};

export default memo(ItemsPage);
