import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Item } from '../../types/item';

export const fetchItemById = createAsyncThunk<
    Item,
    string | undefined,
    ThunkConfig<string>
>('itemDetail/fetchItemById', async (itemId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
        if (!itemId) {
            throw new Error();
        }
        const response = await extra.api.get<Item>(`/items/${itemId}`, {
            params: {
                _expand: 'user',
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
