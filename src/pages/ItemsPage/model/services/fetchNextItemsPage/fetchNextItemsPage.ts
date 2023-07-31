import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import {
    getItemsPageHasMore,
    getItemsPageIsLoading,
    getItemsPageNum,
} from '../../selectors/itemsPageSelectors';
import { itemsPageActions } from '../../slice/ItemsPageSlice';
import { fetchItemsList } from '../fetchItemsList/fetchItemsList';

export const fetchNextItemsPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>('itemsPage/fetchNextItemPage', async (searchParams, thunkApi) => {
    const { dispatch, getState } = thunkApi;
    const page = getItemsPageNum(getState());
    const hasMore = getItemsPageHasMore(getState());
    const isLoading = getItemsPageIsLoading(getState());
    console.log('Feth attempt');
    if (hasMore && !isLoading) {
        dispatch(itemsPageActions.setPage(page + 1));
        dispatch(fetchItemsList({ searchParams }));
    }
});
