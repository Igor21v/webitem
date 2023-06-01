import { memo, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { initItemsPage } from '../../model/services/initItemsPage/initItemsPage';
import {
    itemsPageActions,
    itemsPageReducer,
} from '../../model/slice/ItemsPageSlice';
import cls from './ItemsPage.module.scss';
import { ItemInfiniteList } from '../ItemInfineteList/ItemInfiniteList';
import { ItemTypes } from '@/entities/Item';
import { useNonInitialEffect } from '@/shared/lib/hooks/useNonInitialEffect/useNonInitialEffect';
import { fetchItemsList } from '../../model/services/fetchItemsList/fetchItemsList';
import { AppHead } from '@/shared/ui/AppHead';

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

    useInitialEffect(() => {
        dispatch(initItemsPage({ searchParams, type }));
    });
    useNonInitialEffect(() => {
        dispatch(itemsPageActions.setPage(1));
        dispatch(itemsPageActions.setType(type || 'all'));
        dispatch(fetchItemsList({ replace: true }));
    }, [type]);
    useEffect(() => {
        ym(93784203, 'hit', '#');
    }, []);

    return (
        <>
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
                <Page
                    data-testid="ItemsPage"
                    className={classNames(cls.ItemsPage, {}, [className])}
                >
                    <ItemInfiniteList />
                    <div />
                </Page>
            </DynamicModuleLoader>
            {type && (
                <AppHead
                    title={
                        tType(type) +
                        t(
                            'в галерее webitem. Лучшие компоненты / элементы с открытым исходным кодом для сайта',
                        )
                    }
                    description="Компоненты для сайта. Сomponents for website. Элементы для сайта"
                />
            )}
        </>
    );
};

export default memo(ItemsPage);
