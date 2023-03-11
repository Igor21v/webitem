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
    void,
    ThunkConfig<string>
>('itemsPage/fetchNextItemPage', async (_, thunkApi) => {
    const { dispatch, getState } = thunkApi;
    const page = getItemsPageNum(getState());
    const hasMore = getItemsPageHasMore(getState());
    const isLoading = getItemsPageIsLoading(getState());
    if (hasMore && !isLoading) {
        dispatch(itemsPageActions.setPage(page + 1));
        dispatch(fetchItemsList({}));
    }
});
