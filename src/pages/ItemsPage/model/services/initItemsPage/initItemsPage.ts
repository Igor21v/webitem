import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ItemSortField, ItemTypes, ItemView } from '@/entities/Item';
import { SortOrder } from '@/shared/types';
import {
    getItemsPageInited,
    getItemsPageType,
} from '../../selectors/itemsPageSelectors';
import { itemsPageActions } from '../../slice/ItemsPageSlice';
import { fetchItemsList } from '../fetchItemsList/fetchItemsList';
import { ITEMS_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { ITEM_SMALL_HEIGHT, ITEM_SMALL_WIDTH } from '@/shared/const/dimensions';

interface InitItemsPageProps {
    searchParams: URLSearchParams;
    type?: ItemTypes;
}

export const initItemsPage = createAsyncThunk<
    void,
    InitItemsPageProps,
    ThunkConfig<string>
>('itemsPage/initItemPage', async (props, thunkApi) => {
    const { searchParams, type } = props;
    const { dispatch, getState } = thunkApi;
    const inited = getItemsPageInited(getState());
    const currType = getItemsPageType(getState());
    if (!inited) {
        const orderFromUrl = searchParams.get('order') as SortOrder;
        const sortFromUrl = searchParams.get('sort') as ItemSortField;
        const searchFromUrl = searchParams.get('search');
        if (orderFromUrl) {
            dispatch(itemsPageActions.setOrder(orderFromUrl));
        }
        if (sortFromUrl) {
            dispatch(itemsPageActions.setSort(sortFromUrl));
        }
        if (searchFromUrl) {
            dispatch(itemsPageActions.setSearch(searchFromUrl));
        }
        const view = localStorage.getItem(
            ITEMS_VIEW_LOCALSTORAGE_KEY,
        ) as ItemView;
        if (view) {
            dispatch(itemsPageActions.setView(view));
        }

        const itemsInRow = Math.ceil(window.screen.width / ITEM_SMALL_WIDTH);
        const itemsInCol = Math.ceil(window.screen.height / ITEM_SMALL_HEIGHT);
        const limit = itemsInRow * itemsInCol;
        dispatch(itemsPageActions.setLimit(limit));
        dispatch(itemsPageActions.initState());
    }
    if (!inited || type !== currType) {
        dispatch(itemsPageActions.setPage(1));
        dispatch(itemsPageActions.setType(type || 'all'));
        dispatch(fetchItemsList({ replace: true, searchParams }));
    }
});
