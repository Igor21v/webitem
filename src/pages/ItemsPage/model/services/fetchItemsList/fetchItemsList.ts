import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Item, ItemSortField } from '@/entities/Item';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';
import {
    getItemsPageLimit,
    getItemsPageNum,
    getItemsPageOrder,
    getItemsPageSearch,
    getItemsPageSort,
    getItemsPageType,
} from '../../selectors/itemsPageSelectors';

interface FetchItemListProps {
    replace?: boolean;
}

export const fetchItemsList = createAsyncThunk<
    Item[],
    FetchItemListProps,
    ThunkConfig<string>
>('itemsPage/fetchItemsList', async (_props, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const page = getItemsPageNum(getState());
    const limit = getItemsPageLimit(getState());
    const sort = getItemsPageSort(getState());
    const order = getItemsPageOrder(getState());
    const search = getItemsPageSearch(getState());
    const type = getItemsPageType(getState());
    try {
        if (
            sort !== ItemSortField.CREATED ||
            order !== 'asc' ||
            search !== ''
        ) {
            addQueryParams({
                sort,
                order,
                search,
            });
        }
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
