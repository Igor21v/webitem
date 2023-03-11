import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Item } from '@/entities/Item';

export const fetchItemRecommendations = createAsyncThunk<
    Item[],
    void,
    ThunkConfig<string>
>('itemsDetailsPage/fetchItemRecommendations', async (props, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
        const response = await extra.api.get<Item[]>('/items/', {
            params: {
                _limit: 4,
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
