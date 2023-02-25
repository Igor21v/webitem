import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ItemSortField, ItemView, ElementTypes } from '@/entities/Item';
import { SortOrder } from '@/shared/types';
import { getItemsPageInited } from '../../selectors/itemsPageSelectors';
import { itemsPageActions } from '../../slice/ItemsPageSlice';
import { fetchItemsList } from '../fetchItemsList/fetchItemsList';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { getPageDimensions } from '@/features/UI';
import {
    ARTICLE_BIG_HEIGHT,
    ARTICLE_SMALL_HEIGHT,
    ARTICLE_SMALL_WIDTH,
} from '@/shared/const/dimensions';

export const initItemsPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>('itemsPage/initItemPage', async (searchParams, thunkApi) => {
    const { dispatch, getState } = thunkApi;
    const inited = getItemsPageInited(getState());
    if (!inited) {
        const orderFromUrl = searchParams.get('order') as SortOrder;
        const sortFromUrl = searchParams.get('sort') as ItemSortField;
        const searchFromUrl = searchParams.get('search');
        const typeFromUrl = searchParams.get('type') as ElementTypes;
        if (orderFromUrl) {
            dispatch(itemsPageActions.setOrder(orderFromUrl));
        }
        if (sortFromUrl) {
            dispatch(itemsPageActions.setSort(sortFromUrl));
        }
        if (searchFromUrl) {
            dispatch(itemsPageActions.setSearch(searchFromUrl));
        }
        if (typeFromUrl) {
            dispatch(itemsPageActions.setType(typeFromUrl));
        }
        const view = localStorage.getItem(
            ARTICLES_VIEW_LOCALSTORAGE_KEY,
        ) as ItemView;
        if (view) {
            dispatch(itemsPageActions.setView(view));
        }
        const { height: pageHeight, width: pageWidth } = getPageDimensions(
            getState(),
        );
        let limit;
        if (view === ItemView.BIG) {
            limit = Math.ceil(pageHeight / ARTICLE_BIG_HEIGHT) + 2;
        } else {
            const pageSquare = pageHeight * pageWidth;
            const itemSquare = ARTICLE_SMALL_HEIGHT * ARTICLE_SMALL_WIDTH;
            limit = Math.max(Math.ceil(pageSquare / itemSquare) + 6, 9);
        }

        dispatch(itemsPageActions.setLimit(limit));
        dispatch(itemsPageActions.initState());
        dispatch(fetchItemsList({}));
    }
});
