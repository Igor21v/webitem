import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getItemEditForm } from '../../selectors/getItemEditForm/getItemEditForm';

import { validateAddItem } from '../validateEditItem/validateEditItem';
import { ValidateAddItemError } from '../../consts/ItemEditConsts';

export const itemEdit = createAsyncThunk<
    undefined,
    void,
    ThunkConfig<ValidateAddItemError[]>
>('item/itemEdit', async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const formData = getItemEditForm(getState());
    const { item } = formData;
    const errors = validateAddItem(item);
    if (errors.length) {
        return rejectWithValue(errors);
    }
    try {
        await extra.api.post(`/items`, item);
        return undefined;
    } catch (error) {
        return rejectWithValue([ValidateAddItemError.SERVER_ERROR]);
    }
});
