import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { initItemsPage } from '../../model/services/initItemsPage/initItemsPage';
import { fetchNextItemsPage } from '../../model/services/fetchNextItemsPage/fetchNextItemsPage';
import { itemsPageReducer } from '../../model/slice/ItemsPageSlice';
import cls from './ItemsPage.module.scss';
import { ItemsPageFilters } from '../ItemsPageFilters/ItemsPageFilters';
import { ItemInfiniteList } from '../ItemInfineteList/ItemInfiniteList';

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
    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextItemsPage());
    }, [dispatch]);
    useInitialEffect(() => {
        dispatch(initItemsPage(searchParams));
    });

    return (
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
    );
};

export default memo(ItemsPage);
