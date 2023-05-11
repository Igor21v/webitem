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
import { itemsPageReducer } from '../../model/slice/ItemsPageSlice';
import cls from './ItemsPage.module.scss';
import { ItemsPageFilters } from '../ItemsPageFilters/ItemsPageFilters';
import { ItemInfiniteList } from '../ItemInfineteList/ItemInfiniteList';
import { ItemTypes } from '@/entities/Item';

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
    const { t } = useTranslation('itemType');
    useInitialEffect(() => {
        dispatch(initItemsPage({ searchParams, type }));
    });
    useEffect(() => {
        if (type) document.title = t(type);
    }, [t, type]);
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                data-testid="ItemsPage"
                className={classNames(cls.ItemsPage, {}, [className])}
            >
                <ItemsPageFilters />
                <ItemInfiniteList className={cls.list} />
                <div />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ItemsPage);
