import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Item } from '@/entities/Item';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';
import {
    getItemsPageLimit,
    getItemsPageNum,
    getItemsPageOrder,
    getItemsPageSearch,
    getItemsPageSort,
} from '../../selectors/itemsPageSelectors';

interface FetchItemListProps {
    replace?: boolean;
    type?: string;
}

export const fetchItemsList = createAsyncThunk<
    Item[],
    FetchItemListProps,
    ThunkConfig<string>
>('itemsPage/fetchItemsList', async (props, thunkApi) => {
    const { type } = props;
    const { extra, rejectWithValue, getState } = thunkApi;
    const page = getItemsPageNum(getState());
    const limit = getItemsPageLimit(getState());
    const sort = getItemsPageSort(getState());
    const order = getItemsPageOrder(getState());
    const search = getItemsPageSearch(getState());
    try {
        addQueryParams({
            sort,
            order,
            search,
        });
        const response = await extra.api.get<Item[]>('/items/', {
            params: {
                _limit: limit,
                _page: page,
                _sort: sort,
                _order: order,
                q: search,
                type: type === 'all' ? undefined : type,
            },
        });
        if (!response.data) {
            throw new Error();
        }
        return response.data;
    } catch (error) {
        return rejectWithValue('error');
    }
});
