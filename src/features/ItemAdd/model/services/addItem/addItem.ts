import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getItemAddForm } from '../../selectors/getItemAddForm/getItemAddForm';

import { validateAddItem } from '../validateAddItem/validateAddItem';
import { ValidateAddItemError } from '../../types/itemAddSchema';

export const itemAdd = createAsyncThunk<
    undefined,
    void,
    ThunkConfig<ValidateAddItemError[]>
>('item/itemAdd', async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const formData = getItemAddForm(getState());
    const { item } = formData;
    const errors = validateAddItem(item);
    if (errors.length) {
        return rejectWithValue(errors);
    }
    try {
        await extra.api.post(`/items`, item);
        return undefined;
    } catch (error) {
        return rejectWithValue(['server error']);
    }
});
