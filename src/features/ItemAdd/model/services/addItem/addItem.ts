import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getItemAddForm } from '../../selectors/getItemAddForm/getItemAddForm';
import { ValidateAddItemError } from '../../types/itemAddSchema';

export const itemAdd = createAsyncThunk<
    undefined,
    void,
    ThunkConfig<ValidateAddItemError[]>
>('item/itemAdd', async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const formData = getItemAddForm(getState());
    const { item, formError } = formData;
    if (formError?.length) {
        return rejectWithValue(formError);
    }
    try {
        await extra.api.post(`/items`, item);
        return undefined;
    } catch (error) {
        if (String(error).includes('code 409')) {
            return rejectWithValue(['already exists']);
        }
        return rejectWithValue(['server error']);
    }
});
