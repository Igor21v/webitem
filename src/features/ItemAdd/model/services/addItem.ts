import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getItemAddForm } from '../selectors/getItemAddForm/getItemAddForm';

export const itemAdd = createAsyncThunk<undefined, void, ThunkConfig<string>>(
    'profile/itemAdd',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const formData = getItemAddForm(getState());

        try {
            await extra.api.post(`/items`, formData);

            /*  if (!response.data) {
                throw new Error();
            }
            return response.data; */
            return undefined;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
